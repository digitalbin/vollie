<script>
    import { fade } from 'svelte/transition';
    import { useQuery } from '@sveltestack/svelte-query';
    import { location } from 'svelte-spa-router';
    import Post from '../components/Post/index.svelte';
    import Comment from '../components/Comment.svelte';
    import Spinner from '../components/Spinner.svelte';
    import { fetchPageData } from '../requests';
    import { pageTitle } from '../stores';

    const res = useQuery($location, () => fetchPageData($location), {
		retry: false,
        // cacheTime: Infinity,
        // staleTime: Infinity,
    });

    $: post = $res?.data?.[0]?.data?.children?.[0]?.data;
    $: comments = $res?.data?.[1]?.data?.children || [];
    $: $pageTitle = post?.title;
</script>

{#if $res.isLoading}
    <Spinner />
{:else if $res.isSuccess}
    {#if post}
        <section in:fade>
            <Post data={post} />
        </section>
    {/if}

    <div>
        {#each comments as { data } (data.id)}
            <ul in:fade>
                <Comment {data} isLast={true} />
            </ul>
        {/each}
    </div>
{:else}
    <p>Error i datan!!</p>
{/if}

<style>
    section {
        @apply border border-t-0;
    }
    div {
        @apply bg-default p-md border border-t-0;
    }
</style>
