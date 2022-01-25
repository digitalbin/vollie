<script>
    import { page } from '$app/stores';
	import VirtualList from '@sveltejs/svelte-virtual-list';
	import Spinner from '../../../components/spinner.svelte';
	import Post from '../../../components/post/index.svelte';
	import { fetchPageData } from '../../../requests';
	let items = [];
	let after = '';
	let end;
	const fetchPosts = () =>
		fetchPageData($page.url.pathname, { after }).then(({ data = { children: [] } }) => {
			items = [...items, ...data.children];
			after = data.after;
		});

	$: if (items.length === 0 || end === items.length - 2) fetchPosts();
</script>

{#each items as { data }}
	<Post {data} />
{/each}
<!-- <VirtualList {items} let:item bind:end> -->
	<!-- <section> -->
		<!-- <Post data={item.data} /> -->
	<!-- </section> -->
	<!-- {#if end === items.length}
		<Spinner />
	{/if} -->
<!-- </VirtualList> -->

<style>
	section {
		@apply border border-t-0;
	}
</style>