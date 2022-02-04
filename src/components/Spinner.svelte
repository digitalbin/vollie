<script>
	import spinner from '../assets/vollie.svg'
    import { createEventDispatcher } from 'svelte';
    import { inview } from 'svelte-inview';
    
    const dispatch = createEventDispatcher();
    
</script>
<div use:inview on:change={({ detail }) => dispatch('inview', detail)}>
	<img src={spinner} alt="spinner" width={30} height={30} />
</div>

<style>
	div {
		@apply flex justify-center p-90;
	}
	img {
		@apply rounded-full;
	}
</style>
