<script>
    import {onMount} from "svelte";
    import Pagination from "./Pagination.svelte";

    let {
        page = 1,
        totalPages = 1,
        getData = () => {},
        actions = [],
        className = ''
    } = $props();
    let classes = $state('table table-zebra ');
    let loading = $state(true);
    let rows = $state([]);
    let search = $state('');
    let actualSearch = $state('');

    onMount(() => {
        classes += className;
        changePage(page);
    });

    let columns = $derived.by(() => {
        let firstItem = rows.length > 0 ? rows[0] : undefined;
        if (firstItem) {
            return Object.keys(firstItem);
        } else {
            return [];
        }
    });

    function isObject(value) {
        return value !== null && typeof value === 'object';
    }

    function changePage(newPage = 1) {
        loading = true;
        getData(newPage, actualSearch).then(data => {
            page = data.page;
            totalPages = data.totalPages;
            rows = data.rows;
            loading = false;
        })
    }
</script>

<div class="mt-4 w-full h-full">
    <div class="flex mb-2">
        <input class="input" type="text" placeholder="Search" bind:value={search} />
        <button class="btn btn-primary ml-1" onclick={() => {actualSearch = search; changePage(1)}}>Search</button>
    </div>
    {#if loading}
        <div class="fixed top-1/2 left-1/2 loading loading-ring loading-xl"></div>
    {:else if rows.length > 0}
        <table class={classes}>
            <thead>
                <tr>
                    {#each columns as column}
                        <th scope="col" class="uppercase">{column}</th>
                    {/each}
                    {#if actions.length > 0}
                        <th scope="col" class="uppercase">Actions</th>
                    {/if}
                </tr>
            </thead>
            <tbody>
                {#each rows as row}
                    <tr>
                        {#each columns as column}
                            {#if column in row}
                                {#if isObject(row[column])}
                                    <td>
                                        <ul class="list-none">
                                            {#each Object.entries(row[column]) as [key, value]}
                                                <li>{key}: {value}</li>
                                            {/each}
                                        </ul>
                                    </td>
                                {:else}
                                    <td>
                                        {row[column]}
                                    </td>
                                {/if}
                            {:else}
                                <td></td>
                            {/if}
                        {/each}
                        {#if actions.length > 0}
                            <td>
                                {#each actions as action}
                                    <button class="btn btn-neutral" onclick={() => action.execute(row)}>
                                        {action.display}
                                    </button>
                                {/each}
                            </td>
                        {/if}
                    </tr>
                {/each}
            </tbody>
        </table>
        {#if totalPages > 1}
            <Pagination class="mt-8" currentPage={page} totalPages={totalPages} goToPage={changePage} />
        {/if}
    {:else}
        <div class="mt-4">No records found.</div>
    {/if}
</div>