<script>
	import { useQuery } from '@sveltestack/svelte-query';
	import { getSubredditIcon, getUserIcon } from '../requests';
	export let type;
	export let name;
	const prefix = type === 'user' ? 'u' : 'r';

	const reqMap = {
		user: getUserIcon,
		subreddit: getSubredditIcon
	};

	const res = useQuery(name, () => reqMap[type](name), {
		refetchOnMount: false
	});
</script>

<figure>
	{#if $res.isSuccess && Boolean($res.data)}
		<img src={$res.data} width={20} height={20} alt={`Avatar for ${prefix}/${name}`} />
	{/if}
</figure>

<style>
	figure {
		@apply mr-sm w-lg h-lg bg-subtle rounded-full overflow-hidden flex-none;
	}
</style>
