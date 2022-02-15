<script>
	import {link} from 'svelte-spa-router'
	import Icon from '../Icon.svelte';
    import { kFormatter } from '../../utils/index';
	export let data;
	const {
		display_name_prefixed,
		subscribers,
		url,
		icon_img = '',
		community_icon = '',
	} = data;
    const [iconUrl] = (icon_img || community_icon).split('?');
</script>

{#if url}
	<li>
		<a href={url} use:link>
            {#if iconUrl}
                <img
                    alt={`Icon for ${display_name_prefixed}`}
                    src={iconUrl}
                />
            {:else}
                <span />
            {/if}
			<div class="info">
				<div class="text">
					<h3>
						{display_name_prefixed}
					</h3>
					<p>
						{kFormatter(subscribers)} members
					</p>
				</div>
				<Icon type="angleRight" size={15} />
			</div>
		</a>
	</li>
{/if}

<style>
	a {
		@apply transition-all
        pt-lg
        outline-none
        flex;
	}

	a:hover {
		@apply bg-subtle;
	}

	a:focus {
		@apply bg-subtle
        ring-2
        ring-primary
        ring-inset
        outline-none;
	}

	li:first-of-type > a:focus {
		@apply rounded-t;
	}

	li:last-of-type > a:focus {
		@apply rounded-b;
	}

    img {
        @apply mr-md w-40 h-40 rounded-full overflow-hidden flex-none;
    }

    span {
        @apply mr-md w-40 h-40 bg-subtle rounded-full flex-none;
    }
    h3 {
        @apply text-default;
    }
    p {
        @apply text-tiny text-subtle font-regular;
    }
	div.info {
		@apply border-b flex-1 pb-lg flex justify-between items-center;
	}
</style>
