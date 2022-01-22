<script>
    import { page } from '$app/stores';
	import VirtualList from '@sveltejs/svelte-virtual-list';
	import Spinner from '../../../components/spinner.svelte';
	import Post from '../../../components/post/index.svelte';
	import { fetchPageData } from '../../../requests';
	let items = [];
	let end;
	const fetchPosts = () =>
		fetchPageData($page.url.pathname).then(([{ data }, comments]) => {
			items = [...items, ...data.children];
		});

	$: if (items.length === 0 || end === items.length - 2) fetchPosts();
</script>

{#each items as item}
    <section>
        <Post data={item.data} />
    </section>
{/each}

<style>
	section {
		@apply border border-t-0;
	}
</style>