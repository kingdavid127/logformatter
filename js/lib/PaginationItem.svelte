<script>
    import {getContext} from "svelte";

    let { page, currentPage, goToPage, label = '' } = $props();

    let classes = $state('page-item');

    $effect(() => {
        if (page === currentPage) {
            classes = 'page-item active';
        } else if (page === 0) {
            classes = 'page-item disabled';
        } else {
            classes = 'page-item';
        }
    });

    function choosePage() {
        goToPage(page);
    }
</script>

<li class={classes}>
    {#if page === 0}
        <div class="page-link">
            {#if label}
                {label}
            {:else}
                <i class="fa fa-ellipsis fa-icon"></i>
            {/if}
        </div>
    {:else}
        <button onclick={choosePage} class="page-link" aria-current={currentPage === page ? 'page' : undefined}>
            {#if label}
                {label}
            {:else}
                {page}
            {/if}
        </button>
    {/if}
</li>