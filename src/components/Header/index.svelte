<script>
    import { params, location, pop } from 'svelte-spa-router';
    import ThemeSettings from './ThemeSettings/index.svelte';
    import Search from './Search.svelte';
    import InteractiveLogo from './InteractiveLogo.svelte';
    import Icon from '../Icon.svelte';

    $: subreddit = $params?.subreddit || 'popular';
    $: headerTitle = $location === '/search' ? 'search' : `r/${subreddit}`;

    const goBack = () => {
        pop();
    };
</script>

<header>
    <nav>
        {#if subreddit !== 'popular'}
            <button on:click={goBack}>
                <Icon type="arrowLeft" />
            </button>
        {:else}
            <InteractiveLogo />
        {/if}
        <h2>{headerTitle}</h2>
        <ThemeSettings />
        <!-- <Search /> -->
    </nav>
</header>

<style>
    nav {
        @apply
            bg-default
            flex
            items-center
            justify-between
            p-md;
    }
    header {
        @apply
            top-0
            sticky
            border-b
            z-50;
    }
    h2 {
        @apply whitespace-nowrap
            overflow-ellipsis
            font-bold
            text-tall
            overflow-hidden
            w-full
            ml-md;
    }
</style>
