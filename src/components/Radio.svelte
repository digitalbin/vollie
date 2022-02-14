<script>
    export let value;
    export let group;
</script>

<label>
    <input type="radio" bind:group {value} />
    <div />
    <slot />
</label>

<style>
    label {
        @apply text-default flex items-center gap-sm mb-xl;
    }
    input {
        @apply hidden;
    }

    /* Base state */
    div {
        @apply rounded-full border-2 flex justify-center items-center;
        width: 26px;
        height: 26px;
    }
    div, div:before, div:after {
        @apply transition-colors duration-300;
    }
    div:before {
        content: '';
        width: 12px;
        height: 12px;
        @apply rounded-full block bg-primary bg-opacity-0;
    }
    div:after {
        content: '';
        width: 32px;
        height: 32px;
        border-width: 3px;
        @apply rounded-full block absolute border-primary border-opacity-0;
    }

    /* Checked state */
    input:checked + div {
        @apply border-primary;
    }
    input:checked + div:before {
        @apply bg-opacity-100;
    }
    input:checked + div:after {
        @apply border-opacity-30;
    }
</style>