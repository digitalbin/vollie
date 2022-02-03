<script context="module">
	export function load({ stuff, params }) {
		return {
			props: {
				path: params.path,
				stuff
			}
		};
	}
</script>

<script>
	import { useInfiniteQuery } from '@sveltestack/svelte-query';
	import Spinner from '../components/spinner.svelte';
	import Post from '../components/post/index.svelte';
	import Comment from '../components/comment.svelte';
	import { fetchPageData } from '../requests';

	export let stuff = {};
	export let path;

	const posts = (stuff[0] || stuff)?.data;
	const after = stuff?.data?.after;
	const comments = stuff[1]?.data?.children || [];

	const fetchPosts = async ({ pageParam }) => {
		console.log('Fetching');
		const { data } = await fetchPageData(path, { after: pageParam });
		return data;
	}

	const res = useInfiniteQuery(path, fetchPosts, {
		getNextPageParam: prev => prev?.after,
		initialData: { pages: [ posts ], pageParams: [ after ] },
		refetchOnMount: false,
		cacheTime: Infinity,
		staleTime: Infinity,
	});

	const handleInview = ({ detail: { inView } }) => {
		if (inView) $res.fetchNextPage();
	};
</script>

{#each $res.data.pages as { after, children } (after)}
	{#each children as { data } (data.id)}
		<section>
			<Post {data} />
		</section>
	{/each}
{/each}
<div>
	{#each comments as { data } (data.id)}
		<ul>
			<Comment data={data} isLast={false} />
		</ul>
	{/each}
</div>

{#if $res.hasNextPage}
	<Spinner on:inview={handleInview} />
{/if}

<style>
	section {
		@apply border border-t-0;
	}
	div {
		@apply bg-default p-md border border-t-0;
	}
</style>
