<script>
	export let data;
	const { url_overridden_by_dest = '', title, preview } = data;
	const { width, height } = preview?.images?.[0]?.source || {};
</script>

<div>
	<img src={url_overridden_by_dest} alt={title} {width} {height} />
</div>

<style>
	img {
		@apply rounded bg-subtle mx-auto;
	}
</style>
