<script>
    import { base } from '$app/paths';
    import he from 'he';
    import Avatar from '../avatar.svelte';
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

<style>
    div {
        @apply text-default mb-xs;
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
        @apply mb-md block;
    }
    h3 {
        @apply text-default break-words font-bold;
    }
</style>

<div>
    <a href={base + subredditLink}>
        <Avatar type="subreddit" name={subreddit} />
        <span class="sub-title">
            {rsubreddit}
        </span>
        <span class="created">
            &nbsp;•&nbsp;{timeAgo}
        </span>
    </a>
</div>
<a href={base + permalink} class="title">
    <h3>{decodedTitle}</h3>
</a>