<script>
    import he from 'he';
    import { link } from 'svelte-spa-router';
    import Avatar from '../Avatar.svelte';
    import { timeSince } from '../../utils';

    export let title;
    export let subreddit;
    export let permalink;
    export let created;

    const decodedTitle = he.decode(title);
    const rsubreddit = `r/${subreddit}`;
    const subredditLink = `/${rsubreddit}`;
    const timeAgo = timeSince(created);
</script>

<div>
    <a href={subredditLink} use:link>
        <Avatar type="subreddit" name={subreddit} />
        <span class="sub-title">
            {rsubreddit}
        </span>
        <span class="created">
            &nbsp;•&nbsp;{timeAgo}
        </span>
    </a>
</div>
<a href={permalink} class="title" use:link>
    <h3>{decodedTitle}</h3>
</a>

<style>
    div {
        @apply text-default mb-sm;
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
    a.title {
        @apply mb-sm block;
    }
    h3 {
        @apply text-default break-words font-bold;
    }
</style>
