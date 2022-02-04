<script>
    import Single from './Single.svelte';
    import Gallery from './Gallery.svelte';
    export let data;
    const { is_gallery } = data;
</script>

{#if is_gallery}
    <Gallery {data} />
{:else}
    <Single {data} />
{/if}