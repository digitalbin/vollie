<script>
    import debounce from 'just-debounce-it';
    import { push } from 'svelte-spa-router';
    import clickOutside from '../../utils/clickOutside';
    import ListItem from './ListItem.svelte';

    let query = '';
    let results = [];
    let focus;

    const doSearch = () => {
        const url = new URL(
            'https://www.reddit.com/api/subreddit_autocomplete_v2.json',
        );
        url.searchParams.append('query', query);
        return fetch(url.toString())
            .then((res) => res.json())
            .then((json) => {
                results = json.data.children;
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        push(`/search?q=${query}`);
    };

    const handleFocus = (e) => {
        focus = e.type === 'focusin';
    };

    const handleInput = debounce(() => {
        doSearch();
    }, 500);
</script>

<form
    on:submit={handleSubmit}
    on:focusin={handleFocus}
    use:clickOutside
    on:clickoutside={handleFocus}
>
    <input
        placeholder="Search subreddit..."
        on:input={handleInput}
        bind:value={query}
    />
    {#if Boolean(results.length && focus)}
        <ul>
            {#each results as { data } (data.id)}
                <ListItem {data} />
            {/each}
        </ul>
    {/if}
</form>

<style>
    input {
        @apply bg-subtle
        p-sm
        text-default
        border-2
        rounded-sm
        outline-none
        transition-all
        duration-200;
        max-width: 190px;
    }
    input:focus {
        @apply outline-none
        border-primary
        ring-4
        ring-primary
        ring-opacity-30
        bg-default;
    }
    input:hover {
        @apply bg-default;
    }
    ul {
        @apply absolute
        -mt-xs
        mx-sm
        right-0
        w-300
        bg-default
        top-full
        rounded
        overflow-hidden
        outline-none
        shadow-default
        hidden;
    }
    header:focus-within ul {
        @apply block;
    }
</style>
