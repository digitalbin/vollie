<script>
    import he from 'he';
    import { link, params } from 'svelte-spa-router';
    import Avatar from '../Avatar.svelte';
    import { timeSince } from '../../utils';

    export let data;
    const { title, subreddit, permalink, created, author } = data;

    $: isPost = Boolean($params?.wild);
    const decodedTitle = he.decode(title);
    const uuser = `u/${author}`;
    const rsubreddit = `r/${subreddit}`;
    const subredditLink = `/${rsubreddit}`;
    const timeAgo = timeSince(created);
</script>

<div>
    <a href={subredditLink} use:link>
        {#if isPost}
            <Avatar type="user" name={author} />
            <span class="sub-title link-ish">
                {uuser}
            </span>
        {:else}
            <Avatar type="subreddit" name={subreddit} />
            <span class="sub-title link-ish">
                {rsubreddit}
            </span>
        {/if}
        <span class="created">
            &nbsp;•&nbsp;{timeAgo}
        </span>
    </a>
</div>
{#if isPost}
    <h1 class="title">{decodedTitle}</h1>
{:else}
    <a href={permalink} class="title" use:link>
        <h3>{decodedTitle}</h3>
    </a>
{/if}

<style>
    div {
        @apply text-tiny mb-sm;
    }
    div a {
        @apply font-bold text-tiny flex items-center;
    }
    div a span:first-of-type {
        @apply overflow-ellipsis overflow-hidden;
    }
    div a span:last-of-type {
        @apply text-subtle font-regular flex-1 whitespace-nowrap;
    }
    .title {
        @apply mb-sm block text-default font-bold;
    }
    h3 {
        @apply text-default break-words font-bold;
    }
</style>
