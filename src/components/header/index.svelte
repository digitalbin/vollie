<script>
    import debounce from "just-debounce-it";
    import { location, push, link, params } from 'svelte-spa-router';
	import ListItem from './ListItem.svelte';

	$: subreddit = $params?.subreddit || 'popular';
	$: headerTitle = $location === '/search' ? 'search' : `r/${subreddit}`;

    let query = '';
	let results = [];

    const doSearch = () => {
        const url = new URL(
            'https://www.reddit.com/api/subreddit_autocomplete_v2.json',
        );
        url.searchParams.append('query', query);
        return fetch(url.toString())
            .then((res) => res.json())
            .then(json => {
                results = json.data.children;
            });
    };

	const handleSubmit = (e) => {
        e.preventDefault();
        push(`/search?q=${query}`);
    };

    const handleInput = debounce(() => {
        doSearch();
    }, 500)

</script>

<header>
    <a href="/" use:link>
        <h2>{headerTitle}</h2>
    </a>
	<form on:submit={handleSubmit}>
		<input placeholder="Search subreddit..." on:input={handleInput} bind:value={query} />
		{#if Boolean(results.length)}
			<ul>
				{#each results as { data } (data.id)}
					<ListItem {data} />
				{/each}
			</ul>
		{/if}
	</form>
</header>

<style>
	header {
		@apply bg-default
        flex
        items-center
        justify-between
        top-0
        sticky
        p-md
        font-black
        text-tall
        border
        border-t-0
        z-50;
	}
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
