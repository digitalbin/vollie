<script>
	// import { page } from '$app/stores';
	import { QueryClient, QueryClientProvider } from '@sveltestack/svelte-query';
	import Header from '../components/header/index.svelte';
	import '../app.css';
	import { onMount } from 'svelte';

	let postTitle;

	const queryClient = new QueryClient();
	const title = `Vollie - ${postTitle || 'User ixperians'}`;
	// console.log($page);
	// onMount(() => {
	// 	postTitle = 
	// })
</script>

<!-- <svelte:head>
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
	<title>{title}</title>
	
</svelte:head> -->
<QueryClientProvider client={queryClient}>
	<div>
		<Header />
		<main>
			<slot />
		</main>
	</div>
</QueryClientProvider>

<style>
	div {
		@apply mx-auto max-w-lg h-screen;
	}
	main {
		@apply h-full;
	}
</style>
