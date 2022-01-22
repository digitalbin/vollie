<script>
	export let data;
	const { url_overridden_by_dest, thumbnail, title } = data;
    let thumb;
    try {
        thumb = new URL(thumbnail);
    } catch {}
</script>

<a href={url_overridden_by_dest} target="_blank" rel="noreferrer">
	<span>{url_overridden_by_dest}</span>
    {#if thumb}
        <img src={thumb.toString()} alt={title} width={160} height={90} />
    {/if}
</a>

<style>
	span {
		@apply block
        overflow-ellipsis
        overflow-hidden
        relative
        whitespace-nowrap
        -mt-sm
        mb-md
        text-tiny;
		max-width: 190px;
	}

	span:before {
		content: '';
		@apply absolute inset-0 border-b border-black;
	}

    img {
        @apply rounded object-cover w-160 h-90;
    }
</style>
