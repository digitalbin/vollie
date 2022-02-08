<script>
    import 'videojs-youtube';
    import { tap } from '@sveltejs/gestures';
    import videojs from 'video.js';
    import 'video.js/dist/video-js.css';
    import { inview } from 'svelte-inview';
    import { onDestroy, onMount } from 'svelte';

    export let data;
    const {
        media,
        url_overridden_by_dest,
        preview,
        // secure_media_embed,
    } = data;

    let MAX_W;
    let MAX_H = 500;

    let videoElm;
    let player;

    const { hls_url, dash_url, fallback_url } = media?.reddit_video || preview?.reddit_video_preview || {};
    const { width, height } = media?.reddit_video || media?.oembed || {};

    const yt_url = url_overridden_by_dest.includes('you') && url_overridden_by_dest;

    const onInView = ({ detail }) => {
        if (detail.inView) player.play();
        else player.pause();
    };

    const togglePlay = () => {
        if (player.paused()) player.play();
        else player.pause();
    };

    $: {
        if (player) {
            const scale = Math.min(MAX_H / height, MAX_W / width);
            player.width(width * scale);
            player.height(height * scale);
        }
    }

    const sources = [
        {
            src: dash_url,
            type: 'application/dash+xml'
        },
        {
            src: hls_url,
            type: 'application/x-mpegURL'
        },
        {
            src: fallback_url,
            type: 'video/mp4'
        },
        {
            src: yt_url,
            type: 'video/youtube',
        }
    ].filter(({ src }) => Boolean(src));

    onMount(() => {
        player = videojs(videoElm, {
            autoplay: true,
            muted: true,
            controls: true,
            responsive: true,
            loop: true,
            inactivityTimeout: 2000,
            bigPlayButton: false,
            nativeControlsForTouch: false,
            controlBar: {
                remainingTimeDisplay: false,
                volumePanel: false,
                muteToggle: true,
                pictureInPictureToggle: false,
            },
            techOrder: ['html5', 'youtube'],
            sources,
        });
    });

    onDestroy(() => {
        player.dispose();
        player = null;
    });
</script>

<div
use:inview={{ threshold: 0.9 }}
bind:clientWidth={MAX_W}
on:change={onInView}
>
<div class="player-wrapper">
    <div data-vjs-player>
        <!-- svelte-ignore a11y-media-has-caption -->
            <video
                playsinline
                bind:this={videoElm}
                class="video-js"
                use:tap
                on:tap={togglePlay}
            />
        </div>
    </div>
</div>

<style>
    div.player-wrapper {
        @apply rounded overflow-hidden bg-subtle mx-auto w-fit relative z-10;
    }

    :global(.video-js .vjs-play-progress) {
        @apply bg-primary;
    }

    :global(.video-js .vjs-load-progress div) {
        @apply bg-white bg-opacity-50;
    }

    :global(.video-js .vjs-progress-holder) {
        height: 2px;
    }

    :global(.video-js .vjs-play-progress:before) {
        @apply right-0 top-1/2 translate-x-1/2 -translate-y-1/2;
        font-size: 10px;
    }

    :global(.video-js .vjs-control-bar) {
        @apply left-xs right-xs bottom-xs w-auto rounded-t-px rounded-b-sm bg-black bg-opacity-80;
        height: 38px;
    }

    :global(.video-js .vjs-icon-placeholder:before) {
        content: '' !important;
        background-repeat: no-repeat;
        background-position: center;
    }

    :global(.video-js
            button.vjs-play-control.vjs-playing
            > span.vjs-icon-placeholder:before) {
        background-image: url('../icons/pause.svg');
    }
    :global(.video-js
            button.vjs-play-control.vjs-paused
            > span.vjs-icon-placeholder:before) {
        background-image: url('../icons/play.svg');
    }

    :global(.video-js button.vjs-mute-control) {
        order: 3;
    }
    :global(.video-js
            button.vjs-mute-control.vjs-vol-0
            > span.vjs-icon-placeholder:before) {
        background-image: url('../icons/volume-mute.svg');
    }

    :global(.video-js
            button.vjs-mute-control.vjs-vol-3
            > span.vjs-icon-placeholder:before) {
        background-image: url('../icons/volume-high.svg');
    }

    :global(.video-js button.vjs-fullscreen-control) {
        order: 2;
    }
    :global(.video-js
            button.vjs-fullscreen-control[title='Fullscreen']
            > span.vjs-icon-placeholder:before) {
        background-image: url('../icons/fullscreen-enter.svg');
    }

    :global(.video-js
            button.vjs-fullscreen-control[title='Exit Fullscreen']
            > span.vjs-icon-placeholder:before) {
        background-image: url('../icons/fullscreen-exit.svg');
    }

    :global(.video-js .vjs-current-time-display, .video-js
            .vjs-duration-display) {
        width: 27px;
    }

    :global(.video-js .vjs-time-control) {
        order: 1;
        @apply font-sans font-regular text-tiny flex items-center p-0;
    }
    :global(.video-js .vjs-time-divider) {
        @apply px-xs min-w-0;
    }
</style>
