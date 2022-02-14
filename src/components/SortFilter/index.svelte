<script>
    import { link, params } from 'svelte-spa-router';
    import TimeRange from './TimeRange.svelte';

    $: sort = $params?.sort || 'hot';
    $: sortSlug = `/r/${$params?.subreddit || 'popular'}`;
</script>

<nav class="p-md">
    <a href="{sortSlug}/hot" use:link class:active={sort === 'hot'}>Hot</a>
    <a href="{sortSlug}/new" use:link class:active={sort === 'new'}>New</a>
    <a href="{sortSlug}/top" use:link class:active={sort === 'top'}>Top</a>
    {#if sort === 'top'}
        <TimeRange />
    {/if}
</nav>

<style>
    nav {
        @apply border border-t-0;
    }
    a {
        @apply px-md py-xs mr-sm rounded-full transition-colors inline-block;
    }
    a.active {
        @apply
            bg-inverse
            text-inverse
            font-bold
            relative;
            /* ZINDEX */
            /* z-10; */
    }
</style>
