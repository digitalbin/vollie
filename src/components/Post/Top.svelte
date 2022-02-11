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


<!-- If in sub || post === visa användarens avatar + u/username ist för subreddits avatar + namn ok -->
<div>
    <Avatar type="subreddit" name={subreddit} />
    <a href={subredditLink} use:link>
        {rsubreddit}
    </a>
    <span class="created">
        &nbsp;•&nbsp;{timeAgo}
    </span>
</div>
<a href={permalink} class="title" use:link>
    <h3>{decodedTitle}</h3>
</a>

<style>
    div {
        @apply text-default mb-sm flex items-center text-tiny;
    }
    div a {
        @apply decoration-transparent underline underline-offset-2 font-bold transition-all duration-200;
    }
    div a:hover {
        @apply decoration-inherit;
    }
    div span:first-of-type {
        @apply overflow-ellipsis overflow-hidden;
    }
    div span:last-of-type {
        @apply text-subtle font-regular flex-1 whitespace-nowrap;
    }
    a.title {
        @apply mb-sm block text-default;
    }
    h3 {
        @apply text-default break-words font-bold;
    }
</style>
