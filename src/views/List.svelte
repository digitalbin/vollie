<script>
    import { fade } from 'svelte/transition';
    import { useInfiniteQuery } from '@sveltestack/svelte-query';
    import { loc } from 'svelte-spa-router';
    import Spinner from '../components/Spinner.svelte';
    import Post from '../components/Post/index.svelte';
    import SortFilter from '../components/SortFilter.svelte';
    import { fetchPageData } from '../requests';

    $: location = $loc.location + '?' + $loc.querystring;

    const queryOpts = {
        queryKey: location,
        queryFn: ({ pageParam }) =>
            fetchPageData(location, { after: pageParam }),
        getNextPageParam: (prev) => prev?.data?.after,
        // cacheTime: Infinity,
		// staleTime: Infinity,
    };

    const res = useInfiniteQuery(queryOpts);

    const handleInview = ({ detail: { inView } }) => {
        if (inView) $res.fetchNextPage();
    };

    $: res.setOptions({ ...queryOpts, queryKey: location });

</script>


<SortFilter />

{#if $res.isLoading}
    <div in:fade>
        <Spinner />
    </div>
{:else if $res.isSuccess}
    {#each $res.data.pages as { data: { after, children } } (after)}
        {#each children as { data } (data.id)}
            <section in:fade>
                <Post {data} />
            </section>
        {/each}
    {/each}
{:else}
    <p>Error i datan!!!</p>
{/if}

{#if $res.hasNextPage}
    <Spinner on:inview={handleInview} />
{/if}

<style>
    section {
        @apply border border-t-0;
    }
</style>
