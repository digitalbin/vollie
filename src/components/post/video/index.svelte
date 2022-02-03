<script>
	// import {
	// 	Player,
	// 	Ui,
	// 	Controls,
	// 	PlaybackControl,
	// 	ScrubberControl,
	// 	TimeProgress,
	// 	FullscreenControl,
	// 	MuteControl,
	// 	ClickToPlay,
	// 	IconLibrary,
	// 	Hls,
	// 	Youtube,
	// 	usePlayerStore
	// } from '@vime/core';
	// import '@vime/core/dist/index.js';
	import '@vime/core/themes/default.css';
	import { base } from '$app/paths';
	import { inview } from 'svelte-inview';
import { onMount } from 'svelte';
import { defineCustomElements } from '@vime/core';

	export let data;
	const {
		media,
		url_overridden_by_dest,
		// preview,
		// secure_media_embed,
	} = data;

	let player;
	let isInView = false;
	let mounted = false;
	// const { paused } = usePlayerStore(() => player);

	const hlsUrl = media?.reddit_video?.hls_url;

	const isYT = Boolean(media.oembed);
	const ytUrl = new URL(url_overridden_by_dest);
	const ytId = ytUrl.searchParams.get('v') || ytUrl.pathname.replace('/', '');

	const onInView = ({ detail }) => {
		isInView = detail.inView;
	};

	onMount(async () => {
		const { defineCustomElements } = await import ('@vime/core');
		defineCustomElements();
		mounted = true;
	});

	// $: {
	// 	if (isInView) {
	// 		$paused = false;
	// 	} else {
	// 		$paused = true;
	// 	}
	// }

</script>

{#if mounted}
<div use:inview={{ threshold: 0.5 }} on:change={onInView}>
	<vm-player
		bind:this={player}
		muted
		playsinline
		loop
	>
		<vm-hls>
			<source data-src={hlsUrl} type="application/x-mpegURL" />
		</vm-hls>
		<!-- {#if hlsUrl}
			<Hls version="latest">
				<source data-src={hlsUrl} type="application/x-mpegURL" />
			</Hls>
		{/if}
		{#if isYT && ytId}
				<Youtube videoId={ytId} />
		{/if}
		<Ui>
			<IconLibrary name="micke" resolver={(iconName) => `${base}/icons/${iconName}.svg`} />
			<ClickToPlay />
			<Controls>
				<PlaybackControl hideTooltip icons="micke" />
				<ScrubberControl hideTooltip />
				<TimeProgress />
				<FullscreenControl hideTooltip icons="micke" />
				<MuteControl hideTooltip icons="micke" />
			</Controls>
		</Ui> -->
		<vm-ui>
			<vm-icon-library name="micke" resolver={(iconName) => `${base}/icons/${iconName}.svg`}></vm-icon-library>
			<vm-click-to-play></vm-click-to-play>
			<vm-controls icons="micke">
				<vm-playback-control icons="micke" hide-tooltip></vm-playback-control>
				<vm-scrubber-control hide-tooltip></vm-scrubber-control>
				<vm-time-progress></vm-time-progress>
				<vm-fullscreen-control hide-tooltip icons="micke"></vm-fullscreen-control>
				<vm-mute-control hide-tooltip icons="micke"></vm-mute-control>
			</vm-controls>
		</vm-ui>
	</vm-player>
</div>
{/if}

<style>
	:global(vm-player) {
		--vm-slider-value-color: theme('colors.primary');
		--vm-control-icon-size: 15px;
		--vm-time-font-size: 12px;
		--vm-player-font-family: theme('fontFamily.sans');
		--vm-slider-track-color: rgba(255, 255, 255, 0.25);
		--vm-scrubber-loading-stripe-color: theme('colors.black');
		--vm-scrubber-buffered-bg: rgba(255, 255, 255, 0.25);
		--vm-controls-bg: rgba(17, 17, 17, .8);
		--vm-controls-border-radius: theme('borderRadius.px') theme('borderRadius.px') theme('borderRadius.sm') theme('borderRadius.sm');
		/* --vm-controls-padding: 0; */
		font-size: 12px;
		/* height: 100%; */
	}
	:global(span.separator) {
		font-size: var(--vm-time-font-size);
	}

	:global(vm-controls) {
		@apply
			left-xs
			right-xs
			bottom-xs
			top-auto
			w-auto;
			height: 38px;
	}
	
	:global(vm-controls div.controls) {
		@apply
			p-0;
	}

	:global(vm-player[video]) {
		height: 600px;
	}

	div {
		@apply rounded overflow-hidden;
		/* height: 400px; */
	}
</style>
