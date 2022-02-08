<script>
	export let data;
	const { selftext } = data;
    const paragraphs = selftext.split('\n');
	let open = false;
	const toggleOpen = () => (open = !open);
</script>

<div on:click={toggleOpen} class:open>
    {#each paragraphs as paragraph}
        <p>{paragraph}</p>
    {/each}
    <span>Expand +</span>
</div>

<style>
	div {
		@apply max-h-160
        -mt-sm
        overflow-hidden
        relative
        text-subtle
		cursor-pointer;
	}

	div:before {
		content: '';
		@apply absolute
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

	span {
		@apply text-default
        font-bold
        block
        absolute
        bottom-sm
        left-0
        right-0
        text-center;
	}

	.open span {
		@apply hidden;
	}
</style>
