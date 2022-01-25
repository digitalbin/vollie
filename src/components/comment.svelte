<script>
	import he from 'he';
	import Avatar from './avatar.svelte';
	import { timeSince, kFormatter } from '../utils';

	export let data;
	export let isLast;
	let isOpen = true;

	const toggleOpen = () => {
		isOpen = !isOpen;
	};

	const { body_html = '', author, replies, ups, created } = data;

	// Special "view more" item... TODO
	const filteredReplies = replies?.data?.children.filter(({ data: { body_html } }) =>
		Boolean(body_html)
	);
	const hasReplies = filteredReplies && filteredReplies.length > 0;
	const authorElementString = `<h3>${author} </h3>`;

	const decodedHtmlBody = he.decode(body_html);
	const withAuthor = decodedHtmlBody.replace('>', '>' + authorElementString);
</script>

{#if body_html}
	<li class:thread={!isLast}>
		<div class="container" class:thread={isOpen && (!isLast || hasReplies)}>
			<button on:click={toggleOpen} />
			<Avatar type="user" name={author} />
			<div class="text-container">
				{#if !isOpen}
					<h3>{author}</h3>
				{/if}
				<div class="comment" class:collapsed={!isOpen}>
					{@html withAuthor}
				</div>
				<p>{timeSince(created)} • {kFormatter(ups)} upvotes</p>
			</div>
		</div>
		{#if hasReplies}
			<ul class:collapsed={!isOpen}>
				{#each filteredReplies as reply, i}
					<svelte:self data={reply.data} isLast={i === filteredReplies.length - 1} />
				{/each}
			</ul>
		{/if}
	</li>
{/if}

<style>
	li {
		@apply relative;
	}
	.container {
		@apply flex mb-xl relative;
	}
	.thread:before {
		content: '';
		@apply absolute left-0 top-xl -bottom-lg w-lg;
		background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 0L10 20' stroke='%23eee' stroke-width='2' /%3E%3C/svg%3E%0A");
	}
	button {
		@apply
			absolute
			inset-0
			w-full
			z-10;
	}
	div.text-container {
		@apply flex-1 overflow-hidden;
	}
	:global(.comment p) {
		@apply inline;
	}
	:global(.container h3) {
		@apply font-bold inline text-default;
	}
	p {
		@apply text-tiny text-subtle mt-sm;
	}
	ul {
		@apply pl-xl relative;
	}
	ul:before {
		content: '';
		@apply w-lg h-xl absolute left-0 -top-sm;
		background-image: url("data:image/svg+xml,%3Csvg width='20' height='30' viewBox='0 0 20 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10L9.00001 10L9.00001 10L10 10ZM9.00001 10C9.00001 16.0751 13.9249 21 20 21L20 19C15.0294 19 11 14.9706 11 10L9.00001 10ZM11 10V0H9.00001V10H11Z' fill='%23eee' /%3E%3C/svg%3E");
		background-size: cover;
	}

	.collapsed {
		@apply hidden;
	}
</style>
