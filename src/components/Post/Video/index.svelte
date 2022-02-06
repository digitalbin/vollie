<script>
    import fullscreenEnter from '../../../assets/icons/fullscreen-enter.svg';
    import fullscreenExit from '../../../assets/icons/fullscreen-exit.svg';
    import pause from '../../../assets/icons/pause.svg';
    import play from '../../../assets/icons/play.svg';
    import volumeHigh from '../../../assets/icons/volume-high.svg';
    import volumeMute from '../../../assets/icons/volume-mute.svg';

    const icons = {
        'fullscreen-enter': fullscreenEnter,
        'fullscreen-exit': fullscreenExit,
        pause,
        play,
        'volume-high': volumeHigh,
        'volume-mute': volumeMute,
    };

    import { inview } from 'svelte-inview';
    import { onMount } from 'svelte';
    export let data;
    const {
        media,
        url_overridden_by_dest,
        preview,
        // secure_media_embed,
    } = data;

    let MAX_W;
    let MAX_H = 500;
    let size = [0, 0];

    let player;
    let isInView = false;
    let ready = false;
    let mounted = false;

    const {
		hls_url: hlsUrl,
		dash_url: dashUrl,
	} = media?.reddit_video || preview?.reddit_video_preview || {};
    const { width, height } = media?.reddit_video || media?.oembed || {};

    const isYT = Boolean(media.oembed);
    const ytUrl = new URL(url_overridden_by_dest);
    const ytId = ytUrl.searchParams.get('v') || ytUrl.pathname.replace('/', '');

    const onInView = ({ detail }) => {
        isInView = detail.inView;
    };

    const handleReady = () => {
        ready = true;
    };

    onMount(async () => {
        const { defineCustomElements } = await import('@vime/core');
        defineCustomElements();
        mounted = true;
    });

    $: {
        if (ready && isInView) player.play();
        else player?.pause();
    }
	console.log(media);
    $: {
        const scale = Math.min(MAX_H / height, MAX_W / width);
        size = [width * scale, height * scale].map(Math.round);
    }
</script>

<div
    use:inview={{ threshold: 0.9 }}
    bind:clientWidth={MAX_W}
    on:change={onInView}
>
    {#if mounted}
        <div class="player" style="width: {size[0]}px; height: {size[1]}px">
            <vm-player
                bind:this={player}
                on:vmPlaybackReady={handleReady}
                muted
                playsinline
                loop
                aspect-ratio={size.join(':')}
            >
				<!-- {#if dashUrl}
					<vm-dash
						src={dashUrl}
						version="latest"
					></vm-dash>
				{/if} -->
                {#if hlsUrl}
                    <vm-hls>
                        <source
                            data-src={hlsUrl}
                            type="application/x-mpegURL"
                        />
                    </vm-hls>
                {:else if isYT && ytId}
                    <vm-youtube video-id={ytId} />
                {/if}

                <vm-ui>
                    <vm-icon-library
                        name="micke"
                        resolver={(iconName) => icons[iconName]}
                    />
                    <vm-click-to-play />
                    <vm-controls>
                        <vm-playback-control icons="micke" hide-tooltip />
                        <vm-scrubber-control hide-tooltip />
                        <vm-time-progress />
                        <vm-fullscreen-control hide-tooltip icons="micke" />
                        <vm-mute-control hide-tooltip icons="micke" />
                    </vm-controls>
                </vm-ui>
            </vm-player>
        </div>
    {/if}
</div>

<style>
    @import url('@vime/core/themes/default.css');
    :global(vm-player) {
        --vm-slider-value-color: theme('colors.primary');
        --vm-control-icon-size: 15px;
        --vm-time-font-size: 12px;
        --vm-player-font-family: theme('fontFamily.sans');
        --vm-slider-track-color: rgba(255, 255, 255, 0.25);
        --vm-scrubber-loading-stripe-color: theme('colors.black');
        --vm-scrubber-buffered-bg: rgba(255, 255, 255, 0.25);
        --vm-controls-bg: rgba(17, 17, 17, 0.8);
        --vm-controls-border-radius: theme('borderRadius.px')
            theme('borderRadius.px') theme('borderRadius.sm')
            theme('borderRadius.sm');
        --vm-control-focus-bg: none;
        --vm-control-focus-color: none;
        --vm-control-scale: sdgfadg;
        --vm-controls-padding: 5px;
        font-size: 12px;
    }
    :global(vm-controls) {
        @apply left-xs
			right-xs
			bottom-xs
			top-auto
			w-auto;
        height: 38px;
    }
    div.player {
        @apply rounded overflow-hidden bg-subtle mx-auto;
    }
</style>
