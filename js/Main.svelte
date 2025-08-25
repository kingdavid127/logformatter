<script>
    import "./app.css";
    import DOMPurify from "dompurify";
    import {onMount} from "svelte";
    import {EditorView, basicSetup} from "codemirror";
    import {fade} from 'svelte/transition';
    import Report from "./lib/Report.svelte";

    let {id = null} = $props();
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
    let tab = $state('');
    let wrapTab = $state(localStorage.getItem('wrapTab') ?? 'desc');
    let noReturn = $state(JSON.parse(localStorage.getItem('noReturn') ?? 'true'));
    let editorElement = null;
    let view = null;
    let loading = $state(true);
    let showCopy = $state(false);
    let enablePublish = $derived.by(() => {
        return logTab === 'format' && title.length > 4 && highlightedLog !== '' && !publishing
    });
    let title = $state('');
    let publishing = $state(false);


    // Initialize the editor
    onMount(() => {
        if (id) {
            getLog(id).then((log) => {
                console.log(log);
                console.log(log.title);
                title = log.title;
                highlight(log.log);
                loading = false;
            });
        } else {
            tab = 'logs';
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

    function wrapText(text, maxLength = 77) {
        if (text) {
            const rawLines = text.split(/\n/);
            let lines = [];
            let currentLine = '';

            for (const rawLine of rawLines) {
                currentLine = '';
                if (rawLine) {
                    let words = rawLine.split(" ");
                    for (const word of words) {
                        if ((currentLine + ' ' + word).trim().length <= maxLength) {
                            currentLine += (currentLine ? ' ' : '') + word;
                        } else {
                            lines.push(currentLine.trim());
                            currentLine = word;
                        }
                    }
                    lines.push(currentLine.trim());
                } else {
                    lines.push(currentLine);
                }
            }


            lines = lines.map((line) => {
                return `${wrapTab} + ${line}`;
            });

            if (noReturn) {
                return lines.join(';');
            } else {
                return lines.join('\n');
            }
        } else {
            return '';
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
            .replace(/ misses|scratches|grazes|hits|injures|wounds|mauls|decimates|devastates|maims|MUTILATES|EVISCERATES|DISMEMBERS|MASSACRES|MANGLES|\*\*\* DEMOLISHES \*\*\*|\*\*\* DEVASTATES \*\*\*|=== OBLITERATES ===|>>> ANNIHILATES <<<|<<< ERADICATES >>>|does UNSPEAKABLE things /g, '<span class="text-yellow-300">$&</span>')
            .replace(/ toasts|parches|heats|blisters|burns|roasts|smolders|scalds|singes|BROILS|SEARS|CHARS|RAZES|TORCHES|\*\*\* BLASTS \*\*\*|\*\*\* SCORCHES \*\*\*|=== INCINERATES ===|>>> CAUTERIZES <<<|<<< CREMATES >>> /g, '<span class="text-yellow-300">$&</span>')
            .replace(/ concerns|disquiets|daunts|scares|jolts|startles|flusters|alarms|stupefies|DISTRESSES|DISTURBS|STAGGERS|RATTLES|FRIGHTENS|\*\*\* TRAUMATIZES \*\*\*|\*\*\* HARROWS \*\*\*|=== TERRIFIES ===|>>> HORRIFIES <<<|<<< PETRIFIES >>> /g, '<span class="text-yellow-300">$&</span>')
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
    }

    function stripHtml(str) {
        const clean = DOMPurify.sanitize(str, {ALLOWED_TAGS: [], ALLOWED_ATTR: []});
        return clean;
    }

    function updateLogEditor(newValue) {
        editableLog = newValue;
        view.dispatch({changes: {from: 0, to: view.state.doc.length, insert: editableLog}})
    }

    function getLog(id) {
        return fetch(`/cf/load_log.php?id=${encodeURIComponent(id)}`)
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

    function getLogs(page, search = null) {
        return new Promise((resolve, reject) => {
            let body = {page: page};
            if (search) {
                body.search = search;
            }
            fetch('/cf/get_logs.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            })
            .then(response => {
                if (!response.ok) throw new Error('Network response was not ok');
                resolve(response.json());
            })
            .catch(error => {
                console.error('Get logs failed:', error);
            });
        });
    }

    function publishLog() {
        publishing = true;
        const charCount = editableLog.length;
        if (charCount > 500000) {
            publishing = false;
            message = 'Log too long!';
            setTimeout(() => {
                message = '';
            }, 3000);
        } else if (title.length < 5) {
            publishing = false;
            message = 'Title must be at least 5 characters.';
            setTimeout(() => {
                message = '';
            }, 3000);
        } else {
            return fetch('/cf/save_log.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({log: editableLog, title: title})
            })
                .then(response => {
                    if (!response.ok) throw new Error('Network response was not ok');
                    return response.json();
                })
                .then(data => {
                    window.location.href = `/cf?id=${data.id}`;
                })
                .catch(error => {
                    publishing = false;
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

    function viewLog(row) {
        location.href = `/cf?id=${row.id}`;
    }

    function goToHome() {
        location.href = '/cf';
    }

</script>

<div class="bg-base-200 text-base-content h-screen flex flex-col overflow-hidden">
    <div class="navbar px-4 xl:px-48 bg-base-100 text-base-content shadow-sm sticky top-0 left-0 right-0 z-10">
        <div class="flex items-center justify-between my-2 w-full gap-4">
            <div class="flex items-center">
                <button onclick={() => showThemeMenu = !showThemeMenu} class="w-32 btn btn-light uppercase">{theme}</button>
                <input type="checkbox" bind:value={theme} class="theme-controller invisible" checked/>
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
                                        value={dark}/>
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
                                        value={light}/>
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
                        <circle cx="12" cy="12" r="5"/>
                        <path
                                d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/>
                    </svg>
                    <input type="checkbox" bind:checked={darkMode} class="toggle"/>
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
            <div role="tablist" class="tabs tabs-border">
                <a role="tab" class={tab === 'logs' || tab === 'format' ? 'tab tab-active text-base-content' : 'tab text-base-content'} onclick={goToHome}>Logs</a>
                <a role="tab" class={tab === 'wrap' ? 'tab tab-active text-base-content' : 'tab text-base-content'} onclick={() => {tab = 'wrap'; id = null;}}>Wrap Chop</a>
            </div>
        </div>
    </div>
    <div class="flex-1 overflow-y-auto">
        {#if loading}
            <div class="flex justify-center items-center">
                <div class="loading loading-ring loading-xl text-primary"></div>
            </div>
        {/if}
        {#if id}
            <div class="pb-8 mx-auto px-2 xl:px-48 font-sans {loading ? 'hidden' : ''}">
                <div class="pl-4 py-4 w-full">
                    <span class="font-bold text-lg">{title}</span>
                </div>
                <div class="pl-4 w-full h-full overflow-auto {darkMode ? 'bg-base-300' : 'bg-base-100'}">
                    <div class="w-full font-mono whitespace-pre">
                        {@html highlightedLog}
                    </div>
                </div>
            </div>
        {:else}
            <div class="{loading ? 'hidden' : ''}">
                <!-- Logs Index -->
                {#if tab === 'logs'}
                    <div class="xl:px-48 px-4 py-8 font-sans {tab === 'logs' ? '' : 'hidden'}">
                        <button class="btn btn-primary" type="button" onclick={() => tab = 'format'}>Add</button>
                        <Report getData={getLogs} actions={[{display: 'View', execute: viewLog}]} />
                    </div>
                {/if}
                <!-- Log Formatter -->
                <div class="xl:px-48 px-4 py-8 font-sans {tab === 'format' ? '' : 'hidden'}">
                    <button class="btn btn-neutral" type="button" onclick={() => tab = 'logs'}>Back to index</button>
                    <div class="my-4">
                        <input type="file" accept=".txt" onchange={handleFileUpload} class="file-input file-input-primary w-full max-w-xs mb-4"/>
                    </div>
                    <div class="flex mb-2 justify-between">
                        <div role="tablist" class="tabs tabs-border">
                            <a role="tab" class={logTab === 'raw' ? 'tab tab-active text-base-content' : 'tab text-base-content'}
                               onclick={() => {logTab = 'raw'; enablePublish = false;}}>Raw</a>
                            <a role="tab" class={logTab === 'format' ? 'tab tab-active text-base-content' : 'tab text-base-content'}
                               onclick={() => {highlight(editableLog); logTab = 'format';}}>Formatted</a>
                        </div>
                        {#if message}
                            <div transition:fade class="text-red-500 self-center p-2">{message}</div>
                        {/if}
                        <button onclick={publishLog} class="btn btn-primary {logTab === 'format' ? '' : 'hidden'}" disabled={!enablePublish}>Publish</button>
                        <input type="text" placeholder="Title" bind:value={title} class="input" />
                    </div>

                    <div class="bg-base-300 {logTab === 'raw' ? '' : 'hidden'}">
                        <div bind:this={editorElement} class="text-base"></div>
                    </div>
                    <div class="pl-4 {darkMode ? 'bg-base-300' : 'bg-base-100'} font-mono whitespace-pre {logTab === 'format' ? '' : 'hidden'}">
                        {@html highlightedLog}
                    </div>
                </div>
                <!-- Wrap Chop -->
                <div class="flex py-8 px-4 justify-center flex-wrap items-center flex-col xl:flex-row gap-4 {tab === 'wrap' ? '' : 'hidden'}">
                    <fieldset class="fieldset">
                        <div class="flex justify-between">
                            <legend class="fieldset-legend text-base">Original</legend>
                            <button onclick={clearWrap} class="btn btn-neutral">Clear</button>
                        </div>
                        <textarea class="textarea h-96 w-[350px] sm:w-[475px]" bind:value={rawText}></textarea>
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
                            <input type="checkbox" bind:checked={noReturn} class="checkbox checkbox-sm"/>
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
                        <textarea class="textarea h-96 w-[350px] sm:w-[575px]">{choppedText}</textarea>
                    </fieldset>
                </div>
            </div>
        {/if}
    </div>
</div>
