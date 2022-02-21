<script>
    import debounce from 'just-debounce-it';
    import { push, location } from 'svelte-spa-router';
    import { fly } from 'svelte/transition';
    import ListItem from './ListItem.svelte';
    import Icon from '../../Icon.svelte';

    let query = '';
    let results = [];
    let w;

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

    const handleInput = debounce(() => {
        doSearch();
    }, 500);

    let isOpen = false;

    const toggleOpen = () => {
        isOpen = !isOpen;
    };

    const autoFocus = (el) => el.focus();

    location.subscribe(() => {
        isOpen = false;
    });

</script>

<button class="p-xs" on:click={toggleOpen}>
    <Icon type="search" />
</button>

{#if isOpen}
    <div
        class="wrapper"
        transition:fly={{ x: w, opacity: 1 }}
        bind:clientWidth={w}
    >
        <form on:submit={handleSubmit}>
            <label>
                <Icon
                    class="absolute left-sm -translate-y-1/2 top-1/2"
                    type="search"
                />
                <input
                    on:input={handleInput}
                    bind:value={query}
                    use:autoFocus
                />
            </label>
            <button
                type="button"
                class="text-tiny font-bold"
                on:click={toggleOpen}
            >
                Cancel
            </button>
        </form>
        <h3 class="text-tall font-bold mt-lg ml-md">Subreddits</h3>
        <ul>
            {#each results as { data } (data.id)}
                <ListItem {data} />
            {/each}
        </ul>
    </div>
{/if}

<style>
    div.wrapper {
        @apply absolute inset-0 h-screen bg-default flex flex-col text-default;
    }
    form {
        @apply flex justify-between items-center p-md gap-sm border-b;
    }
    label {
        @apply relative flex-1;
    }
    input {
        @apply border-2 rounded-sm w-full bg-default outline-none;
        padding: 8px 10px 8px 40px;
        font-size: 16px;
    }
    input:focus {
        @apply border-primary ring ring-offset-0 ring-primary ring-opacity-30;
    }
    ul {
        @apply p-md;
    }
</style>
