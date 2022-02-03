<script context="module">
	export async function load({ params, fetch }) {
		const { path } = params;
		const url = new URL(path, 'https://www.reddit.com');
		url.pathname = `${url.pathname}.json`;
		const data = await fetch(url.toString());
		const json = await data.json();
		let title = json?.[0]?.data?.children?.[0]?.data?.title;

		return {
			props: {
				title,
			},
			stuff: json,
		}
	}
</script>

<script>
	import { QueryClient, QueryClientProvider } from '@sveltestack/svelte-query';
	import Header from '../components/header/index.svelte';
	import '../app.css';
	const queryClient = new QueryClient();

	export let title;
	$: pageTitle = `Vollie - ${title || 'User ixperians'}`;

</script>

<svelte:head>
	<title>{pageTitle}</title>
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
