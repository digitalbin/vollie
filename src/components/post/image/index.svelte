<script>
    import Single from './single.svelte';
    import Gallery from './gallery.svelte';
    export let data;
    const { media_metadata } = data;
</script>

{#if media_metadata}
    <Gallery {data} />
{:else}
    <Single {data} />
{/if}