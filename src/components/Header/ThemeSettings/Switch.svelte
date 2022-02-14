<script>
    import Icon from '../../Icon.svelte';
    export let selection;
    const variants = ['light', 'dark', 'system'];
</script>

<form>
    {#each variants as variant}
        <label class:active={selection === variant}>
            <input type="radio" bind:group={selection} value={variant} />
            <Icon type="{variant}Mode" />
            {variant}
        </label>
    {/each}
</form>

<style>
    form {
        @apply flex justify-between bg-subtle rounded-sm p-xs;
    }
    label {
        @apply flex gap-sm capitalize;
        @apply px-md py-xs rounded-xs text-default;
    }
    label.active {
        @apply bg-default;
    }
    input {
        @apply hidden;
    }
</style>
