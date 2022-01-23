<script>
    import { page } from '$app/stores';
	// import VirtualList from '@sveltejs/svelte-virtual-list';
	// import Spinner from '../../../components/spinner.svelte';
	import Post from '../../../components/post/index.svelte';
	import Comment from '../../../components/comment.svelte';
	import { fetchPageData } from '../../../requests';
	let items = [];
	let comments = [];
	let end;
	const fetchPosts = () =>
		fetchPageData($page.url.pathname).then(([{ data }, _comments]) => {
			items = [...items, ...data.children];
			comments = [...comments, ..._comments.data.children];
		});

	$: if (items.length === 0 || end === items.length - 2) fetchPosts();
</script>

{#each items as item}
    <section>
        <Post data={item.data} />
    </section>
{/each}
<div>
	{#each comments as comment (comment.data.id)}
		<ul>
			<Comment data={comment.data} isLast={false} />
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