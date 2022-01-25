<script>
	import { onMount } from 'svelte';
	import { inview } from 'svelte-inview';
	import videojs from 'video.js';
	import 'videojs-youtube';
    import Controlbar from './controlbar.svelte';

	export let data;
	const { media, preview, secure_media_embed, url_overridden_by_dest } = data;

	let vidEl;
	let maxW;
	let w;
	let h;
	let player;
    let isInView;
	const MAX_HEIGHT = 500;

	const srcMap = {
		dash_url: 'application/dash+xml',
		hls_url: 'application/x-mpegURL',
		fallback_url: 'video/mp4',
		yt_url: 'video/youtube'
	};

	const isYT = Boolean(media.oembed);
	const { width, height, ...rest } = {
		...media.reddit_video,
		...media.reddit_video_preview,
		...media.oembed,
		...{ yt_url: isYT && url_overridden_by_dest }
	};

	const sources = Object.entries(rest)
		.map(([key, val]) => {
			if (srcMap[key]) {
				return {
					src: val,
					type: srcMap[key]
				};
			}
		})
		.filter((source) => Boolean(source && source.src));

	console.log(sources);

	onMount(() => {
		const scale = Math.min(MAX_HEIGHT / height, maxW / width);
		w = width * scale;
		h = height * scale;

		player = videojs(vidEl, {
			loop: true,
			width: Math.floor(w),
			height: Math.floor(h),
			techOrder: ['html5', 'youtube'],
			muted: true,
			preload: 'auto',
			children: ['MediaLoader'],
		});
	});

    const handleChange = ({ detail }) => {
        if (detail) isInView = detail.inView;
    };

    const togglePlay = () => {
        if (player.paused()) player.play();
        else player.pause();
    }

    $: {
        if (player) {
            if (isInView) {
                player.play();
            } else {
                player.pause();
            }
        }
    }
</script>

<div
	use:inview={{
        threshold: .8,
	}}
    on:change={handleChange}
	bind:clientWidth={maxW}
>
	<div on:click={togglePlay}>
		<video bind:this={vidEl} playsInline>
			{#each sources as { src, type }}
				<source {src} {type} />
			{/each}
		</video>
	</div>
	<Controlbar {player} />
</div>
<style>
    div {
        @apply flex justify-center rounded overflow-hidden;
    }
</style>