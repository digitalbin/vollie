<script>
	import { link } from 'svelte-spa-router';
	import { kFormatter } from '../../utils';

	export let ups;
	export let num_comments;
	export let permalink;
	const upvotes = kFormatter(ups);
</script>

<a href={permalink} use:link>
	<span>{num_comments} comments</span>
	{upvotes} upvotes
</a>

<style>
	a {
		@apply text-subtle text-tiny mt-md block;
	}
	span {
		@apply mr-sm;
	}
</style>
