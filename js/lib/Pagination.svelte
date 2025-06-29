<!-- <Prev> 1 2 3 {4} 5 6 7 ... 113 <Next> Page [  ] Go -->
<script>
    import PaginationItem from "./PaginationItem.svelte";

    let { currentPage, totalPages, goToPage } = $props();
    let pages = $state([]);
    let prevPage = $state(0);
    let nextPage = $state(0);
    let showGoTo = $state(false);
    let inputValue = $state('');

    let count;

    $effect(calculatePages);

    function calculatePages() {
        prevPage = currentPage - 1;
        nextPage = currentPage + 1;
        let newPages = [];
        let remaining = 0;
        if (totalPages <= 10) {
            showGoTo = false;
            // For 10 or less pages, show all of them individually.
            count = 1;
            while (count <= totalPages) {
                newPages.push(count);
                count++;
            }
        } else {
            // More than 10 pages use a more complicated display to summarize gaps and allow quick traversal.
            showGoTo = true;

            // Calculate the pages up to the current page first.
            if (currentPage > 5) {
                remaining = totalPages - currentPage;
                if (remaining < 5) {
                    newPages = [1, 0];
                    count = 6 - remaining;
                    while(count > 0) {
                        newPages.push(currentPage - count);
                        count--;
                    }
                    newPages.push(currentPage);
                } else {
                    newPages = [1, 0, (currentPage - 2), (currentPage - 1), currentPage];
                }
            } else {
                count = 1
                while (count <= currentPage) {
                    newPages.push(count);
                    count++;
                }
            }

            // Calculate the pages after the current page.
            // We want to show a consistent number of page buttons so let's see how many are already visible.
            count = currentPage + 1;
            if (currentPage < 5) {
                remaining = 5 - currentPage; // 4 = show 1 more, 3 = show 2 more, 2 = show 3 more, 1 = show 4 more
                while (remaining > 0) {
                    newPages.push(count);
                    count++;
                    remaining--;
                }
            }

            // If more than 4 pages remain, show the complex view.
            if (currentPage <= (totalPages - 5)) {
                newPages.push((count), (count + 1), 0, totalPages);
            } else {
                // Four or less remain, show them all.
                while (count <= totalPages) {
                    newPages.push(count);
                    count++;
                }
            }
        }

        pages = newPages;
    }

    function choosePage() {
        if (inputValue <= totalPages) {
            goToPage(inputValue);
        }
    }
</script>

<style>
    .local_nexus-pagination {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 2rem;
    }

    .local_nexus-goto {
        display: flex;
        align-items: center;
        height: 37px;
        gap: .75rem;
    }
</style>

<nav aria-label="Page navigation" class="local_nexus-pagination">
    <ul class="pagination">
        <PaginationItem page={prevPage} {currentPage} {goToPage} label="Previous" />
        {#if nextPage <= totalPages}
            <PaginationItem page={nextPage} {currentPage} {goToPage} label="Next" />
        {:else}
            <PaginationItem page={0} {currentPage} {goToPage} label="Next" />
        {/if}
    </ul>
    <ul class="pagination">
        {#each pages as page}
            <PaginationItem {page} {currentPage} {goToPage} />
        {/each}
    </ul>

    {#if showGoTo}
        <div class="local_nexus-goto">
            <label class="mb-0" for="local_nexus-goto-input">Go to page:</label>
            <input
                    type="number"
                    id="local_nexus-goto-input"
                    class="page-link"
                    bind:value={inputValue}
                    min="1"
                    max={totalPages}
            />
            <button class="btn btn-secondary" onclick={choosePage}>Go</button>
        </div>
    {/if}
</nav>