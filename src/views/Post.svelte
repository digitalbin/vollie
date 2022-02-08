<script>
	import { useQuery } from '@sveltestack/svelte-query';
	import { location } from 'svelte-spa-router'
	import Post from '../components/Post/index.svelte';
	import Comment from '../components/Comment.svelte';
	import { fetchPageData } from '../requests';
	import { pageTitle } from '../stores';

	const res = useQuery($location, () => fetchPageData($location), {
		cacheTime: Infinity,
		staleTime: Infinity,
	});

    $: post = $res?.data?.[0]?.data?.children?.[0]?.data;
    $: comments = $res?.data?.[1]?.data?.children || [];
	$: $pageTitle = post?.title;
</script>

{#if post}
    <section>
        <Post data={post} />
    </section>
{/if}

<div>
	{#each comments as { data } (data.id)}
		<ul>
			<Comment data={data} isLast={true} />
		</ul>
	{/each}
</div>

<style>
	section {
		@apply border border-t-0;
	}
	div {
		@apply bg-default p-md border border-t-0;
	}
</style>
