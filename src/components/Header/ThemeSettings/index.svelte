<script>
    import { fly } from 'svelte/transition';
    import { location } from 'svelte-spa-router';
    import { darkMode } from '../../../stores';
    import { LS, prefersDark } from '../../../utils';
    import Switch from './Switch.svelte';
    import Icon from '../../Icon.svelte';
    import BackDrop from '../../BackDrop.svelte';

    let isOpen = false;
    let selection = LS.get('theme') || 'system';
    let h;

    const toggleOpen = () => {
        isOpen = !isOpen;
    };

    location.subscribe(() => {
        isOpen = false;
    });

    $: {
        if (selection === 'system') LS.delete('theme');
        else LS.set('theme', selection);
    }

    $: $darkMode = selection === 'dark' || (selection === 'system' && prefersDark());

</script>

<svelte:head>
    <meta name="theme-color" content={$darkMode ? '#111111' : '#FFFFFF'} />
</svelte:head>

<button on:click={toggleOpen}>
    {#if isOpen}
        <Icon type="cross" />
    {:else}
        <Icon type={$darkMode ? 'darkMode' : 'lightMode'} />
    {/if}
</button>

{#if isOpen}
    <BackDrop on:click={toggleOpen} />
    <div bind:clientHeight={h} transition:fly={{ y: -h, opacity: 1 }}>
        <span>Theme</span>
        <Switch bind:selection />
    </div>
{/if}


<style>
    button {
        @apply p-xs;
    }
    div {
        @apply absolute
            left-0
            right-0
            top-full
            bg-default
            p-md
            rounded-b-lg
            -z-10;
    }
    span {
        @apply mb-xs block;
    }
</style>
