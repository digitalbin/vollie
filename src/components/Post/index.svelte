<script>
	import { onMount } from 'svelte';
	import Top from './Top.svelte';
	import Bottom from './Bottom.svelte';
	import Link from './Link/index.svelte';
	import Text from './Text/index.svelte';
	import Image from './Image/index.svelte';

	let Video;
	onMount(async () => {
		Video = (await import('./Video/index.svelte')).default;
	})

	function getPostType(props) {
		const {
			post_hint,
			is_video,
			is_gallery,
			is_self,
		} = props;
		if (is_video || /video/.test(post_hint)) return 'video';
		if (is_gallery || post_hint === 'image') return 'image';
		if (is_self) return 'text';
		return 'link';
	}

	export let data;
	const {
		crosspost_parent,
		crosspost_parent_list = [],
		subreddit,
		created,
		num_comments,
		ups,
		permalink,
		title
	} = data;

	const isCrosspost = Boolean(crosspost_parent);
	const [parentProps] = crosspost_parent_list;

	const postType = getPostType(data);
</script>

<article>
	<Top {data} />
	{#if isCrosspost}
		<div>
			<svelte:self data={parentProps} />
		</div>
	{:else}
		{#if postType === 'link'}
			<Link {data} />
		{:else if postType == 'text'}
			<Text {data} />
		{:else if postType == 'image'}
			<Image {data} />
		{:else if postType == 'video'}
			<svelte:component this={Video} {data} />
			<!-- <Video {data} /> -->
		{/if}
	{/if}
	<Bottom {data} />
</article>

<style>
	article {
		@apply p-md bg-default;
	}
	div {
		@apply bg-subtle;
	}
</style>
