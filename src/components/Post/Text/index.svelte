<script>
	export let data;
	const { selftext } = data;
    const paragraphs = selftext.split('\n');
	let h;
	let open = false;
	const toggleOpen = () => (open = !open);
</script>

{#if Boolean(selftext)}
	<div bind:clientHeight={h} on:click={toggleOpen} class:open class:masked={h >= 160 && !open}>
		{#each paragraphs as paragraph}
			<p>{paragraph}</p>
		{/each}
	</div>
{/if}

<style>
	div {
		@apply max-h-160
        -mt-sm
        overflow-hidden
        relative
        text-subtle
		cursor-pointer;
	}

	div.masked:before {
		content: 'Expand +';
		@apply
		absolute
		flex
		items-end
		text-tall
		font-bold
		pb-lg
		justify-center
        left-0
        right-0
        bottom-0
        h-90;
		background-image: linear-gradient(to bottom, rgb(255 255 255 / 0), var(--bg-default) 60%);
	}

	.open {
		max-height: unset;
	}

	.open:before {
		@apply hidden;
	}

    p {
        @apply mb-sm;
    }

</style>
