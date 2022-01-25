<script>
	import { QueryClient, QueryClientProvider } from '@sveltestack/svelte-query';
	import { pageTitle } from '../stores';
	import Header from '../components/header/index.svelte';
	import '../app.css';

	const queryClient = new QueryClient();
	let title;
	
	$: {
		title = `Vollie - ${$pageTitle || 'User ixperians'}`;
	}
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>
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
