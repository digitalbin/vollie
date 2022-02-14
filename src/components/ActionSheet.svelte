<script>
    import { fade } from 'svelte/transition';
    import portal from '../utils/portal';
    export let isOpen;

    const close = () => {
        isOpen = false;
    }

</script>

{#if isOpen}
<div class="wrapper" use:portal={'#app'}>
    <div class="bd" transition:fade on:click={close} />
    <slot />
</div>
{/if}

<style>
    div.wrapper {
        @apply absolute inset-0 touch-none;
        z-index: 999;
    }
    div.bd {
        @apply
        bg-black
        bg-opacity-50
        h-full;
    }
</style>