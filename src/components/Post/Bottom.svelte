<script>
    import { link } from 'svelte-spa-router';
    import Share from '../Share.svelte';
    import { kFormatter } from '../../utils';

    export let data;
    const { ups, num_comments, permalink, title } = data;

    const upvotes = kFormatter(ups);
</script>

<div>
    <a href={permalink} use:link>
        <span class="link-ish">{num_comments} comments</span>
        {upvotes} upvotes
    </a>
    <Share {title} />
</div>

<style>
    div {
        @apply text-subtle text-default mt-md flex justify-between;
    }
    span {
        @apply mr-sm;
    }
</style>
