
<script>
	import { QueryClient, QueryClientProvider } from '@sveltestack/svelte-query';
	import Router from 'svelte-spa-router';
	import { pageTitle } from './stores';
	import Header from './components/Header/index.svelte';
	import SW from './components/SW.svelte';
  	import List from './views/List.svelte';
  	import Post from './views/Post.svelte';
  	import Search from './views/Search.svelte';
	import './app.css';

	const queryClient = new QueryClient();

	const routes = {
		'/': List,
		'/search': Search,
		'/r/:subreddit': List,
		'/r/:subreddit/*': Post,
	}

	const handleRouteChange = (e) => {
		$pageTitle = e?.detail?.params?.subreddit;
	}
	
	$: title = `Vollie - ${$pageTitle || 'User ixperians'}`;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>
<QueryClientProvider client={queryClient}>
	<SW />
	<div>
		<Header />
		<main>
			<Router {routes} restoreScrollState={true} on:routeLoaded={handleRouteChange} />
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
