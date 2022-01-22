<script>
	import Top from './top.svelte';
	import Bottom from './bottom.svelte';
	import Link from './link/index.svelte';
	import Text from './text/index.svelte';
	import Image from './image/index.svelte';
	import Video from './video/index.svelte';

	function getPostType(props) {
		const { post_hint, media_metadata, selftext } = props;
		switch (post_hint) {
			case 'image':
			case 'link':
				return post_hint;
			case 'rich:video':
			case 'hosted:video':
				return 'video';
			default: {
				if (media_metadata) return 'image';
				if (selftext) return 'text';
				return null;
			}
		}
	}

	export let data;
	const {
		crosspost_parent,
		crosspost_parent_list = [],
		subreddit_name_prefixed,
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
		<!-- {postType === 'video' && <VideoPost {...props} />}
        {postType === 'image' && <ImagePost {...props} />}
        {postType === 'link' && <LinkPost {...props} />}
        {selftext && <ExpandableText {...props} />} -->
	{/if}
	<Bottom {num_comments} {ups} />
</article>

<style>
	article {
		@apply p-md bg-default;
	}
	div {
		@apply bg-subtle;
	}
</style>
