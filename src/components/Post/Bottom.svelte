<script>
	import { link } from 'svelte-spa-router';
	import { kFormatter } from '../../utils';

	export let ups;
	export let num_comments;
	export let permalink;
	const upvotes = kFormatter(ups);
</script>

<div>
	<a href={permalink} use:link>{num_comments} comments</a>
	{upvotes} upvotes
</div>

<style>
	div {
		@apply text-subtle text-tiny mt-md block;
	}
	a {
		@apply mr-sm decoration-transparent underline underline-offset-2 transition-all duration-200;
	}
	a:hover {
		@apply decoration-inherit;
	}
</style>
