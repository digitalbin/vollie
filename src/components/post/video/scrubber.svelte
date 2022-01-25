<script>
	import { createEventDispatcher } from 'svelte';
	export let progress = 0;
	let isScrubbing = false;
	let scrubPos;
	let wrapper;

	const dispatch = createEventDispatcher();

	const handleChange = (e) => {
		const clientX = e.clientX || e.targetTouches[0].clientX;
		const bcr = wrapper.getBoundingClientRect();
		const { x, width } = bcr;
		const pos = Math.min(Math.max(0, clientX - x), width);
		scrubPos = pos;
	};

	const onMouseDown = (e) => {
		isScrubbing = true;
		handleChange(e);
	};

	const onMouseMove = (e) => {
		if (isScrubbing) {
			handleChange(e);
		}
	};

	const onMouseUp = () => {
		isScrubbing = false;
		const val = scrubPos / wrapper.getBoundingClientRect().width;
		dispatch('changeend', val);
	};

	$: {
		if (!isScrubbing) {
			scrubPos = wrapper?.getBoundingClientRect().width * progress;
		}
	}
</script>

<div
	bind:this={wrapper}
	class="wrapper"
	style:--progress={String(progress)}
	style:--scrubPos={scrubPos + 'px'}
	on:mousedown={onMouseDown}
	on:touchstart={onMouseDown}
>
	<div class="progress" />
	<div class="duration" />
	<div class="thumb" />
</div>
<svelte:window
	on:mouseup={onMouseUp}
	on:touchend={onMouseUp}
	on:mousemove={onMouseMove}
	on:touchmove={onMouseMove}
/>

<style>
	.wrapper {
		@apply w-full relative;
	}
	.progress {
		@apply rounded
			bg-primary
			absolute
			z-10
			w-full
			transition-transform;
		transform: scaleX(var(--progress));
		transform-origin: center left;
		height: 2px;
		top: calc(50% - 1px);
	}
	.duration {
		@apply rounded
			bg-default
			bg-opacity-50
			w-full
			absolute
			top-1/2
			transform
			-translate-y-1/2;
		height: 2px;
	}
	.thumb {
		@apply absolute
			flex
			items-center
			justify-center
			-translate-x-1/2
			z-10;
		width: 35px;
		height: 35px;
		left: var(--scrubPos);
	}
	.thumb:after {
		content: '';
		width: 10px;
		height: 10px;
		@apply rounded-full bg-default;
	}
</style>
