<script>
    import { createEventDispatcher } from 'svelte';

    export let value;

    const dispatch = createEventDispatcher();
    const handleChange = e => {
        dispatch('change', e.target.checked);
    }
</script>

<label>
    <input type="checkbox" on:change={handleChange} checked={value} />
</label>

<style>
    label {
        @apply rounded-full border w-xxl;
    }
    input {
        @apply w-md h-md bg-inverse appearance-none rounded-full block;
        @apply transition-transform;
    }
    input:checked {
        transform: translateX(calc(35px / 2));
    }
</style>
