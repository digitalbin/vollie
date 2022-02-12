<script>
    import { link, params, push, location, querystring } from 'svelte-spa-router';
    import { fly, fade } from 'svelte/transition';
    import Radio from './Radio.svelte';
    import Icon from './Icon.svelte';

    let time = 'day';
    let isOpen = true;

    const sortMap = {
        hour: 'Now',
        day: 'Today',
        week: 'This week',
        month: 'This month',
        year: 'This year',
        all: 'All time',
    }

    const toggleMenu = () => {
        isOpen = !isOpen;
    };

    $: sort = $params?.sort || 'hot';
    $: sortSlug = `/r/${$params?.subreddit || 'popular'}`;
    $: {
        isOpen = false;
        if (time === 'day') push($location);
        else push($location + `?t=${time}`);
    }
</script>

<nav class="p-md">
    <a href="{sortSlug}/hot" use:link class:active={sort === 'hot'}>Hot</a>
    <a href="{sortSlug}/new" use:link class:active={sort === 'new'}>New</a>
    <a href="{sortSlug}/top" use:link class:active={sort === 'top'}>Top</a>
    {#if sort === 'top'}
        <button on:click={toggleMenu}>
            {sortMap[time]}
            <Icon type="angleDown" />
        </button>
    {/if}
    {#if isOpen}
        <div on:click={toggleMenu} transition:fade class="backdrop" />
        <div transition:fly={{ y: 372, opacity: 1 }}>
            <span>Sort by</span>
            <Radio bind:group={time} value="hour">Now</Radio>
            <Radio bind:group={time} value="day">Today</Radio>
            <Radio bind:group={time} value="week">This week</Radio>
            <Radio bind:group={time} value="month">This month</Radio>
            <Radio bind:group={time} value="year">This year</Radio>
            <Radio bind:group={time} value="all">All time</Radio>
        </div>
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
        @apply bg-inverse text-inverse font-bold relative z-10;
    }
    button {
        @apply px-md py-xs bg-subtle rounded-r-full -ml-xxl pl-xl font-bold inline-flex items-center gap-sm;
    }
    div.backdrop {
        @apply bg-black bg-opacity-50 absolute inset-0 z-50;
    }
    div:not(.backdrop) {
        @apply bottom-0
            left-0
            right-0
            flex
            flex-col
            bg-default
            rounded-t-lg
            p-lg
            gap-xl
            fixed
            z-50;
    }
    span {
        @apply text-tall font-bold;
    }
</style>
