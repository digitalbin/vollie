<script>
    import VirtualList from '@sveltejs/svelte-virtual-list';
	import Post from '../components/post/index.svelte';
	// import { page } from '$app/stores';
	import { fetchPageData } from '../requests';
	import { onMount } from 'svelte';
	// const q = $page.url.searchParams.get('q');
	const q = 'mick'
    let items = [];

	onMount(async () => {
		const { data: { children }} = await fetchPageData('search', { q });
		items = children;
	});
</script>

<VirtualList {items} let:item>
	<Post data={item.data} />
	<!-- {#if end === items.length}
		<Spinner />
	{/if} -->
</VirtualList>
