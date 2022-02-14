<script>
    import { push, location } from 'svelte-spa-router';
    import { fly } from 'svelte/transition';
    import Radio from '../Radio.svelte';
    import Icon from '../Icon.svelte';
    import ActionSheet from '../ActionSheet.svelte';

    const sortMap = {
        hour: 'Now',
        day: 'Today',
        week: 'This week',
        month: 'This month',
        year: 'This year',
        all: 'All time',
    }

    let isOpen = false;

    const toggleMenu = () => {
        isOpen = !isOpen;
    }

    let time = 'day';

    const onChange = () => {
        const querystring = time === 'day' ? $location : `${$location}?t=${time}`
        push(querystring)
            .then(() => isOpen = false)
    }

</script>

<button on:click={toggleMenu}>
    {sortMap[time]}
    <Icon type="angleDown" />
</button>
<ActionSheet bind:isOpen>
    <form transition:fly={{ y: 432, opacity: 1 }} on:change={onChange}>
        <span>Sort by</span>
        {#each Object.entries(sortMap) as [value, label] (value)}
            <Radio bind:group={time} value={value}>{label}</Radio>
        {/each}
    </form>
</ActionSheet>

<style>
    button {
        @apply
            px-md
            py-xs
            bg-subtle
            rounded-r-full
            -ml-xxl
            pl-xl
            font-bold
            inline-flex
            items-center
            gap-sm;
    }
    form {
        @apply bottom-0
            left-0
            right-0
            flex
            flex-col
            bg-default
            rounded-t-lg
            p-lg
            fixed;
            /* ZINDEX */
            /* z-50; */
    }
    span {
        @apply text-tall font-bold mb-xl;
    }
</style>