<script>
	import { useInfiniteQuery } from '@sveltestack/svelte-query';
	import Spinner from '../components/spinner.svelte';
	import Post from '../components/post/index.svelte';
	import { fetchPageData } from '../requests';

	const fetchPosts = async ({ pageParam }) => {
		const { data } = await fetchPageData('', { after: pageParam });
		return data;
	}

	const res = useInfiniteQuery('posts', fetchPosts, {
		getNextPageParam: prev => prev?.after,
		initialData: { pages: [] },
	});

	const handleInview = ({ detail: { inView } }) => {
		if (inView) $res.fetchNextPage();
	}

</script>


{#each $res?.data?.pages as { children, after } (after)}
	{#each children as { data } (data.id)}
		<section>
			<Post {data} />
		</section>
	{/each}
{/each}
<Spinner on:inview={handleInview} />

<style>
	section {
		@apply border border-t-0;
	}
</style>