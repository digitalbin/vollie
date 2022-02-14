<script>
    import { fade } from 'svelte/transition';
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    import portal from '../utils/portal';

    const onClick = () => {
        dispatch('click');
    }

</script>

<div class="bd" use:portal={'body'} transition:fade on:click={onClick} />

<style>
    div {
        @apply
        bg-black
        bg-opacity-50
        fixed
        inset-0
        touch-none
        z-10;
    }
</style>