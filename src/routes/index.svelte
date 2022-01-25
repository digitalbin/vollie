<script>
	import { useQuery } from '@sveltestack/svelte-query';
	import VirtualList from '@sveltejs/svelte-virtual-list';
	import Spinner from '../components/spinner.svelte';
	import Post from '../components/post/index.svelte';
	import { fetchPageData } from '../requests';
	let items = [];
	let after = '';
	let end;
	const fetchPosts = () =>
		fetchPageData('', { after }).then(({ data }) => {
			items = [...items, ...data.children];
			after = data.after;
		});

	const res = useQuery(after, fetchPosts, {
		refetchOnMount: false
	});

	console.log($res);
	// $: if (items.length === 0 || end === items.length - 2) fetchPosts();
</script>

{#if $res.isLoading}
	<Spinner />
{:else}
	<VirtualList {items} let:item bind:end>
		<section>
			<Post data={item.data} />
		</section>
	</VirtualList>
{/if}

<style>
	section {
		@apply border border-t-0;
	}
</style>