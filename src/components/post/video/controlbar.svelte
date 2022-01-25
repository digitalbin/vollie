<script>
	import { timeFormatter } from '../../../utils/index';
    import Scrubber from './scrubber.svelte';
    import Play from '../../../components/icon/play.svelte';
    import Pause from '../../../components/icon/pause.svelte';
    import Expand from '../../../components/icon/expand.svelte';
    import Mute from '../../../components/icon/mute.svelte';
    import Unmute from '../../../components/icon/unmute.svelte';
	export let player;
	let time = 0;
	let duration = 1;
    let playing;
    let muted = true;

	const togglePlay = () => {
		if (player.paused()) player.play();
		else player.pause();
	};

	const toggleFullscreen = () => {
		if (player.isFullscreen()) player.exitFullscreen();
		else player.requestFullscreen();
	};

	const toggleMute = () => player.muted(!player.muted());

    const handleScrub = (e) => {
        const percent = e.detail;
        if (player.isReady_) player.currentTime(player.duration() * percent);
    }

	$: {
        if (player) {
            player.volume(1);
            player.on('timeupdate', () => {
                const _time = player.currentTime();
                if (_time) time = _time;
            });
            player.on('durationchange', () => {
                const _duration = player.duration();
                if (_duration) duration = _duration;
            });
            player.on('play', () => playing = true);
            player.on('pause', () => playing = false);
            player.on('volumechange', () => {
                muted = player.muted()
            });
        }
    };
</script>

<div class="wrapper">
	{#if player}
		<button on:click={togglePlay}>
            {#if playing}
                <Pause />
            {:else}
                <Play />
            {/if}
			<span>Toggle play</span>
		</button>
		<Scrubber progress={time / duration} on:changeend={handleScrub} />
		<div class="time">
			<time>{timeFormatter(time)}</time> /{' '}
			<time>{timeFormatter(duration)}</time>
		</div>
		<button on:click={toggleFullscreen}>
			<Expand />
			<span>Toggle fullscreen</span>
		</button>
		<button on:click={toggleMute} class="mute">
            {#if muted}
                <Mute />
            {:else}
                <Unmute />
            {/if}
			<span>Toggle mute</span>
		</button>
	{/if}
</div>

<style>
	.wrapper {
		@apply absolute
        bottom-xs
        left-xs
        right-xs
        bg-inverse
        bg-opacity-80
        rounded-b
        rounded-t-px
        h-xxl
        text-inverse
        flex
        z-40;
	}
    button {
        @apply w-xxl flex-shrink-0 flex items-center justify-center;
    }
	span {
		@apply sr-only;
	}
	.time {
		@apply flex items-center justify-between px-xs text-tiny;
		width: 88px;
	}
</style>
