<script>
    import "./app.css";
    import DOMPurify from "dompurify";
    import {onMount} from "svelte";
    import {EditorView, basicSetup} from "codemirror";
    import { fade } from 'svelte/transition';

    let { id = null } = $props();
    let darkTheme = $state(localStorage.getItem('darkTheme') ?? 'dark');
    let lightTheme = $state(localStorage.getItem('lightTheme') ?? 'light');
    let darkMode = $state(JSON.parse(localStorage.getItem('darkMode') ?? 'true'));
    let showThemeMenu = $state(false);
    let theme = $derived.by(() => {
       if (darkMode) {
           return darkTheme;
       } else {
           return lightTheme;
       }
    });
    const lightThemes = [
        'acid',
        'autumn',
        'bumblebee',
        'caramellatte',
        'cmyk',
        'corporate',
        'cupcake',
        'cyberpunk',
        'emerald',
        'fantasy',
        'garden',
        'lemonade',
        'light',
        'lofi',
        'nord',
        'pastel',
        'retro',
        'silk',
        'valentine',
        'winter',
        'wireframe',
    ];
    const darkThemes = [
        'abyss',
        'aqua',
        'black',
        'business',
        'coffee',
        'dark',
        'dim',
        'dracula',
        'forest',
        'halloween',
        'luxury',
        'night',
        'sunset',
        'synthwave',
    ];

    let message = $state('');
    let rawLog = '';
    let editableLog = '';
    let highlightedLog = $state('');
    let rawText = $state('');
    let choppedText = $state('');
    let logTab = $state('raw');
    let tab = $state(localStorage.getItem('tab') ?? 'logs');
    let wrapTab = $state(localStorage.getItem('wrapTab') ?? 'desc');
    let noReturn = $state(JSON.parse(localStorage.getItem('noReturn') ?? 'true'));
    let editorElement = null;
    let view = null;
    let loading = $state(true);
    let showCopy = $state(false);
    let enablePublish = $state(false);


    // Initialize the editor
    onMount(() => {
        if (id) {
            getLog(id).then((log) => {
                highlight(log);
                loading = false;
            });
        } else {
            const updateListener = EditorView.updateListener.of((update) => {
                if (update.docChanged) {
                    editableLog = update.state.doc.toString();
                }
            });
            view = new EditorView({
                doc: '',
                extensions: [basicSetup, updateListener],
                parent: editorElement
            });

            loading = false;

            return () => view?.destroy(); // Cleanup on unmount
        }
    });

    $effect(() => {
        localStorage.setItem('darkTheme', darkTheme);
    });
    $effect(() => {
        localStorage.setItem('lightTheme', lightTheme);
    });
    $effect(() => {
        localStorage.setItem('darkMode', darkMode);
    });
    $effect(() => {
        localStorage.setItem('tab', tab);
    });
    $effect(() => {
        localStorage.setItem('wrapTab', wrapTab);
    });
    $effect(() => {
        localStorage.setItem('noReturn', noReturn);
    });
    $effect(() => {
        if (wrapTab === 'desc') {
            choppedText = wrapText(rawText);
        } else if (wrapTab === 'note') {
            choppedText = wrapText(rawText);
        } else if (wrapTab === 'role') {
            choppedText = wrapText(rawText);
        }
    });

    function wrapText(text, maxLength = 79) {
        const words = text.split(/\s+/);
        let lines = [];
        let currentLine = '';

        for (const word of words) {
            if ((currentLine + ' ' + word).trim().length <= maxLength) {
                currentLine += (currentLine ? ' ' : '') + word;
            } else {
                if (currentLine) lines.push(currentLine);
                currentLine = word;

                // Handle case where word itself is longer than maxLength
                while (currentLine.length > maxLength) {
                    lines.push(currentLine.slice(0, maxLength));
                    currentLine = currentLine.slice(maxLength);
                }
            }
        }

        if (currentLine) lines.push(currentLine);

        lines = lines.map((line) => {
            return `${wrapTab} + ${line}`;
        });

        if (noReturn) {
            return lines.join(';');
        } else {
            return lines.join('\n');
        }
    }

    function handleFileUpload(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            rawLog = reader.result;
            updateLogEditor(rawLog);
        };
        reader.readAsText(file);
    }

    function highlight(text) {
        text = stripHtml(text);
        highlightedLog = text
            // ** bold headers
            .replace(/^\*\*.*$/gm, '<span class="text-yellow-300 ">$&</span>')
            // (PK)
            .replace(/ \(PK\) /g, '<span class="text-yellow-300 font-bold">$&</span>')
            // damage verbs
            .replace(/ misses|scratches|grazes|hits|injures|wounds|mauls|decimates|devastates|maims|MUTILATES|EVISCERATES|DISMEMBERS|MASSACRES|MANGLES|\*\*\* DEMOLISHES \*\*\*|\*\*\* DEVASATATES \*\*\*|=== OBLITERATES ===|>>> ANNIHILATES <<<|<<< ERADICATES >>>|does UNSPEAKABLE things /g, '<span class="text-yellow-300">$&</span>')
            .replace(
                /<span class="text-yellow-300">(.*?)<\/span>(?= you\b)/g, '<span class="text-red-500">$1</span>'
            )
            // undo overlapping formatting
            .replace(/has a few <span class="text-yellow-300">scratches<\/span>/g, 'has a few scratches')
            .replace(/is covered with bleeding <span class="text-yellow-300">wounds<\/span>/g, 'is covered with bleeding wounds')
            // say / says
            .replace(/^.* says '.*$/gm, '<span class="text-amber-300 ">$&</span>')
            .replace(/^.* says to .*$/gm, '<span class="text-amber-300 ">$&</span>')
            .replace(/^You say .*$/gm, '<span class="text-amber-300 ">$&</span>')
            // group chat
            .replace(/^.* tells the group '.*$/gm, '<span class="text-fuchsia-400 ">$&</span>')
            .replace(/^You tell your group '.*$/gm, '<span class="text-fuchsia-400 ">$&</span>')
            // tells you
            .replace(/^.* tells you '.*$/gm, '<span class="text-lime-700 ">$&</span>')
            .replace(/^You tell .*$/gm, '<span class="text-lime-700 ">$&</span>')
            // yells
            .replace(/^.* yells '.*$/gm, '<span class="text-cyan-400 ">$&</span>')
            .replace(/^You yell '.*$/gm, '<span class="text-yellow-300 ">$&</span>')
            // [cb] style log tags
            .replace(/^\[(?!.*\d).*?\] .*:.*$/gm, '<span class="text-teal-500 ">$&</span>')
            // bleeding warning
            .replace(/^You sure are BLEEDING!.*$/gm, '<span class="text-yellow-300 ">$&</span>')
            // death lines
            .replace(/^.* is DEAD!!.*$/gm, '<span class="text-yellow-300 font-bold">$&</span>')
            .replace(/^You have been KILLED!!.*$/gm, '<span class="text-yellow-300 font-bold">$&</span>')
            // health statuses
            .replace(/^.* (is in perfect health|has a few scratches|has some small but disgusting cuts|is covered with bleeding wounds|is gushing blood|is writhing in agony|is convulsing on the ground)\..*$/gm, '<span class="text-green-400">$&</span>');
        if (highlightedLog) {
            enablePublish = true;
        }
    }

    function stripHtml(str) {
        const clean = DOMPurify.sanitize(str, { ALLOWED_TAGS: [], ALLOWED_ATTR: [] });
        return clean;
    }

    function updateLogEditor(newValue) {
        editableLog = newValue;
        view.dispatch({changes: {from: 0, to: view.state.doc.length, insert: editableLog}})
    }

    function getLog(id) {
        return fetch(`/load_log.php?id=${encodeURIComponent(id)}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => data.log)
            .catch(error => {
                console.error('Load log failed:', error);
                throw error;
            });
    }

    function publishLog() {
        enablePublish = false;
        const charCount = editableLog.length;
        if (charCount > 65535) {
            enablePublish = false;
            message = 'Log too long!';
            setTimeout(() => {
                message = '';
            }, 3000);
        } else {
            return fetch('/save_log.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({log: editableLog})
            })
            .then(response => {
                if (!response.ok) throw new Error('Network response was not ok');
                return response.json();
            })
            .then(data => {
                window.location.href = `/index.php?id=${data.id}`;
            })
            .catch(error => {
                console.error('Save log failed:', error);
                // You can reject or show UI feedback here
            });
        }
    }

    function clearWrap() {
        rawText = '';
    }

    async function copyToClipboard() {
        try {
            await navigator.clipboard.writeText(choppedText);
            showCopy = true;
            setTimeout(() => {
                showCopy = false;
            }, 3000)
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    }

</script>

<div class="bg-base-200 text-base-content h-screen">
    <div class="navbar bg-base-100 text-base-content shadow-sm absolute top-0 z-10">
        <div class="flex items-center m-2">
            <button onclick={() => showThemeMenu = !showThemeMenu} class="w-32 btn btn-light uppercase">{theme}</button>
            <input type="checkbox" bind:value={theme} class="theme-controller invisible" checked />
            {#if showThemeMenu}
                <div class="absolute left-0 top-full join join-vertical">
                    {#if darkMode}
                        {#each darkThemes as dark}
                            <input
                                    onchange={() => showThemeMenu = false}
                                    type="radio"
                                    name="theme-buttons"
                                    class="btn join-item"
                                    bind:group={darkTheme}
                                    aria-label={dark}
                                    value={dark} />
                        {/each}
                    {:else}
                        {#each lightThemes as light}
                            <input
                                    onchange={() => showThemeMenu = false}
                                    type="radio"
                                    name="theme-buttons"
                                    class="btn join-item"
                                    bind:group={lightTheme}
                                    aria-label={light}
                                    value={light} />
                        {/each}
                    {/if}
                </div>
            {/if}
            <label class="flex cursor-pointer gap-2">
                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round">
                    <circle cx="12" cy="12" r="5" />
                    <path
                            d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                </svg>
                <input type="checkbox" bind:checked={darkMode} class="toggle" />
                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
            </label>
        </div>
    </div>
    {#if loading}
        <div class="flex justify-center items-center">
            <div class="loading loading-ring loading-xl text-primary"></div>
        </div>
    {/if}
    {#if id}
        <div class="mx-auto max-w-screen-xl px-6 pt-20 font-sans {loading ? 'hidden' : ''}">
            <div class="pl-4 {darkMode ? 'bg-base-300' : 'bg-base-100'} font-mono whitespace-pre">
                {@html highlightedLog}
            </div>
        </div>
    {:else}
        <div class="{loading ? 'hidden' : ''}">
            <div class="flex flex-col items-center mt-8 mb-4">
                <div class="text-xl font-bold mt-16 mb-4">
                    Tools
                </div>
                <div role="tablist" class="tabs tabs-border">
                    <a role="tab" class={tab === 'logs' ? 'tab tab-active text-base-content' : 'tab text-base-content'} onclick={() => tab = 'logs'} >Logs</a>
                    <a role="tab" class={tab === 'wrap' ? 'tab tab-active text-base-content' : 'tab text-base-content'} onclick={() => tab = 'wrap'}>Wrap Chop</a>
                </div>
            </div>

            <div class="mx-auto max-w-screen-xl px-6 py-12 font-sans mpy-16 lg:py-0 {tab === 'logs' ? '' : 'hidden'}">
                <div class="my-4">
                    <input type="file" accept=".txt" onchange={handleFileUpload} class="file-input file-input-primary w-full max-w-xs mb-4" />
                </div>
                <div class="flex mb-2 justify-between">
                    <div role="tablist" class="tabs tabs-border">
                        <a role="tab" class={logTab === 'raw' ? 'tab tab-active text-base-content' : 'tab text-base-content'} onclick={() => {logTab = 'raw'; enablePublish = false;}} >Raw</a>
                        <a role="tab" class={logTab === 'format' ? 'tab tab-active text-base-content' : 'tab text-base-content'} onclick={() => {highlight(editableLog); logTab = 'format';}}>Formatted</a>
                    </div>
                    {#if message}
                        <div transition:fade class="text-red-500 self-center p-2">{message}</div>
                    {/if}
                    {#if enablePublish}
                        <button onclick={publishLog} class="btn btn-primary {logTab === 'format' ? '' : 'hidden'}">Publish</button>
                    {/if}
                </div>

                <div class="bg-base-300 {logTab === 'raw' ? '' : 'hidden'}">
                    <div bind:this={editorElement} class="text-base"></div>
                </div>
                <div class="pl-4 {darkMode ? 'bg-base-300' : 'bg-base-100'} font-mono whitespace-pre {logTab === 'format' ? '' : 'hidden'}">
                    {@html highlightedLog}
                </div>
            </div>
            <div class="flex lg:justify-center flex-wrap sm:items-center mitems-center sm:flex-col mflex-col lg:flex-row gap-4 {tab === 'wrap' ? '' : 'hidden'}">
                <fieldset class="fieldset">
                    <div class="flex justify-between">
                        <legend class="fieldset-legend text-base">Original</legend>
                        <button onclick={clearWrap} class="btn btn-neutral">Clear</button>
                    </div>
                    <textarea class="textarea h-96 w-[475px]" bind:value={rawText}></textarea>
                </fieldset>
                <div class="self-center">
                    <div class="text-base mb-2 font-bold">Wrap settings</div>
                    <ul class="menu bg-base-200 rounded-box w-56 p-0">
                        <li>
                            <a class={wrapTab === 'desc' ? 'menu-active text-white' : 'text-base-content'}
                                    onclick={() => wrapTab = 'desc'}
                            >
                                Description
                            </a>
                        </li>
                        <li>
                            <a class={wrapTab === 'note' ? 'menu-active text-white' : 'text-base-content'}
                               onclick={() => wrapTab = 'note'}
                            >
                                Note
                            </a>
                        </li>
                        <li>
                            <a class={wrapTab === 'role' ? 'menu-active text-white' : 'text-base-content'}
                               onclick={() => wrapTab = 'role'}
                            >
                                Role
                            </a>
                        </li>
                    </ul>
                    <label class="label text-base-content">
                        <input type="checkbox" bind:checked={noReturn} class="checkbox checkbox-sm" />
                        No return (; format)
                    </label>
                </div>
                <fieldset class="fieldset">
                    <div class="flex justify-between">
                        <legend class="fieldset-legend text-base">Chopped</legend>
                        {#if showCopy}
                            <div transition:fade class="text-sm self-end mr-2">Copied!</div>
                        {/if}
                        <button onclick={copyToClipboard} class="btn btn-neutral">Copy</button>
                    </div>
                    <textarea class="textarea h-96 w-[575px]">{choppedText}</textarea>
                </fieldset>
            </div>
        </div>
    {/if}
</div>
