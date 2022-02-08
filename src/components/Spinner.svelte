<script>
	import spinner from '/vollie.svg'
    import { createEventDispatcher } from 'svelte';
    import { inview } from 'svelte-inview';

	export let _class;
    
    const dispatch = createEventDispatcher();
    
</script>
<div class={_class} use:inview on:change={({ detail }) => dispatch('inview', detail)}>
	<img src={spinner} alt="spinner" width={30} height={30} />
</div>

<style>
	div {
		@apply flex justify-center;
	}
	img {
		@apply rounded-full;
	}
</style>
