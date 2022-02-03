<script>
    import Single from './single.svelte';
    import Gallery from './gallery.svelte';
    export let data;
    const { is_gallery } = data;
</script>

{#if is_gallery}
    <Gallery {data} />
{:else}
    <Single {data} />
{/if}