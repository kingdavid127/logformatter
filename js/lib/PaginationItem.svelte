<script>
    let { page, currentPage, goToPage, label = '' } = $props();

    let classes = $state('page-item');

    $effect(() => {
        if (page === currentPage) {
            classes = 'join-item btn btn-active';
        } else {
            classes = 'join-item btn';
        }
    });

    function choosePage() {
        goToPage(page);
    }
</script>

{#if page === 0}
    <div class={classes}>
        {#if label}
            {label}
        {:else}
            ...
        {/if}
    </div>
{:else}
    <button onclick={choosePage} class={classes} aria-current={currentPage === page ? 'page' : undefined} disabled={page === 0}>
        {#if label}
            {label}
        {:else}
            {page}
        {/if}
    </button>
{/if}