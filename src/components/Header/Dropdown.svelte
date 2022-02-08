<script>
    import { slide } from 'svelte/transition';
    import { location, link, params } from 'svelte-spa-router';
    import Switch from './Switch.svelte';

    $: subreddit = $params?.subreddit || 'popular';
    $: headerTitle = $location === '/search' ? 'search' : `r/${subreddit}`;

    let darkMode;
    try {
        darkMode =
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) &&
            window.matchMedia('(prefers-color-scheme: dark)').matches);
    } catch (err) {
        console.log('Cannot access localStorage');
    }

    const handleDarkmodeToggle = ({ detail }) => {
        darkMode = detail;
    };

    $: {
        try {
            localStorage.theme = darkMode ? 'dark' : 'light';
        } catch (err) {
            console.log("Can't access localStorage");
        }
    }

    $: {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }

    let isOpen = false;
    const toggleOpen = () => {
        isOpen = !isOpen;
    };
</script>

<div>
    <button on:click={toggleOpen}>
        <svg
            stroke="currentColor"
            fill="currentColor"
            class:isOpen
            stroke-width="0"
            viewBox="0 0 1024 1024"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            ><path
                d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"
            /></svg
        >
        <h2>{headerTitle}</h2>
    </button>
    {#if isOpen}
        <aside transition:slide>
            <ul>
                {#if $params?.subreddit}
                <li>
                    <a use:link href="/">r/popular</a>
                </li>
                {/if}
                {#if $params?.wild}
                <li>
                    <a use:link href={`/r/${$params.subreddit}`}>r/{$params.subreddit}</a>
                </li>
                {/if}
                <li class="flex gap-sm">
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 16 16"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                        ><path
                            d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"
                        /></svg
                    >
                    <Switch on:change={handleDarkmodeToggle} value={darkMode} />
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 16 16"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                        ><path
                            d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"
                        /></svg
                    >
                </li>
            </ul>
        </aside>
    {/if}
</div>

<style>
    div {
        @apply overflow-hidden pr-xs;
    }
    button {
        @apply flex items-center font-black text-tall overflow-hidden w-full;
    }
    h2 {
        @apply overflow-hidden whitespace-nowrap overflow-ellipsis;
    }
    button > svg {
        @apply mr-xs transition-transform;
    }
    svg.isOpen {
        @apply rotate-180;
    }
    aside {
        @apply
            absolute
            left-0
            right-0
            bg-default
            px-md
            border-b
            top-full;
    }
    ul {
        @apply flex
            flex-col;
    }
    li {
        @apply border-t py-md;
    }
    a {
        @apply font-black text-default;
    }
</style>
