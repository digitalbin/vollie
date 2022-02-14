<script>
    import Icon from './Icon.svelte';

    export let data;

    const {
        title,
        permalink
    } = data;

    const share = () => {
        const [path] = window.location.href.split('#');
        const url = `${path}#${permalink}`;

        navigator
            .share({
                title: 'Vollie',
                text: title,
                url,
            })
            .then(() => console.log('Successful share'))
            .catch((error) => console.log('Error sharing', error));
    }
</script>

{#if Boolean(navigator?.share)}
    <button on:click={share}>
        <Icon type="share" />
        Share
    </button>
{/if}

<style>
    button {
        @apply flex gap-xs font-bold text-subtle;
    }
</style>
