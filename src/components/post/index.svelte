<script>
	import { fade } from 'svelte/transition'
	import { inview } from 'svelte-inview';
	import Top from './top.svelte';
	import Bottom from './bottom.svelte';
	import Link from './link/index.svelte';
	import Text from './text/index.svelte';
	import Image from './image/index.svelte';
	import Video from './video/index.svelte';

	let isInView;

	function getPostType(props) {
		const { post_hint, media_metadata } = props;
		switch (post_hint) {
			case 'image':
			case 'link':
				return post_hint;
			case 'rich:video':
			case 'hosted:video':
				return 'video';
			default: {
				if (media_metadata) return 'image';
				return 'text';
			}
		}
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

	const handleChange = ({ detail }) => (isInView = detail.inView);
	const opts = {
		// rootMargin: '0px',
		unobserveOnEnter: true
	};
</script>

<div use:inview={opts} on:change={handleChange} style="height: {!isInView ? '500px' : 'auto'}">
	{#if isInView}
		<article in:fade>
			<Top {title} {subreddit} {permalink} {created} />
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
					<Video {data} />
				{/if}
			{/if}
			<Bottom {num_comments} {ups} />
		</article>
	{/if}
</div>

<style>
	article {
		@apply p-md bg-default;
	}
	div {
		@apply bg-subtle;
	}
</style>
