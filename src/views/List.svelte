<script>
    import { fade } from 'svelte/transition';
    import { useInfiniteQuery } from '@sveltestack/svelte-query';
    import { location } from 'svelte-spa-router';
    import Spinner from '../components/Spinner.svelte';
    import Post from '../components/Post/index.svelte';
    import { fetchPageData } from '../requests';

    const res = useInfiniteQuery(
        $location,
        ({ pageParam }) => fetchPageData($location, { after: pageParam }),
        {
            getNextPageParam: (prev) => prev?.data?.after,
            cacheTime: Infinity,
            staleTime: Infinity,
        },
    );

    const handleInview = ({ detail: { inView } }) => {
        if (inView) $res.fetchNextPage();
    };

    $: pages = $res.data?.pages || [];
</script>

{#if $res.isLoading}
    <Spinner />
{/if}

{#each pages as { data: { after, children } } (after)}
    {#each children as { data } (data.id)}
        <section in:fade>
            <Post {data} />
        </section>
    {/each}
{/each}

{#if $res.hasNextPage}
    <Spinner on:inview={handleInview} />
{/if}

<style>
    section {
        @apply border border-t-0;
    }
</style>
