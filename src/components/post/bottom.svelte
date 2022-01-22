<script>
	import { kFormatter } from '../../utils';

	export let ups;
	export let num_comments;
	const upvotes = kFormatter(ups);
</script>

<div>
	<span>{num_comments} comments</span>
	{upvotes} upvotes
</div>

<style>
	div {
		@apply text-subtle text-tiny mt-md;
	}
	span {
		@apply mr-sm;
	}
</style>
