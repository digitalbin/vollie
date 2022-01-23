<script>
	// @ts-nocheck

	import { inview } from 'svelte-inview';
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import { Autoplay, FreeMode, Pagination } from 'swiper';
	import 'swiper/css';
	import "swiper/css/pagination"

	export let data;
	let w;
	let h;
	let images = [];
	const { media_metadata, title } = data;
	let swiper;

	const handleInview = ({ detail }) => {
		if (detail?.inView) {
			swiper.autoplay.run();
		} else {
			swiper.autoplay.pause();
		}
	};

	$: {
		images = Object.values(media_metadata).map(({ id, m, s }) => {
			const scale = w / s.x;
			return {
				slug: `https://i.redd.it/${id}.${m.replace('image/', '')}`,
				width: s.x * scale,
				height: s.y * scale
			};
		});
		h = Math.min(...images.map((i) => i.height));
		console.log(h);
	}
</script>

<div bind:clientWidth={w} use:inview on:change={handleInview}>
	<Swiper
		modules={[Autoplay, Pagination]}
		pagination={true}
		spaceBetween={10}
		speed={1000}
		loop={true}
		autoplay={{
			disableOnInteraction: false
		}}
		on:swiper={e => swiper = e.detail[0]}
	>
		{#each images as { slug, width, height }}
			<SwiperSlide>
				<div style:height={h}>
					<img src={slug} {width} {height} alt={title} />
				</div>
			</SwiperSlide>
		{/each}
	</Swiper>
</div>

<style>
	:root {
		--swiper-theme-color: theme('colors.primary');
		--swiper-pagination-bullet-inactive-color: theme('colors.white');
		--swiper-pagination-bullet-inactive-opacity: 1;
	}
	/* div {
		display: flex;
		align-items: center;
		@apply overflow-hidden;
	} */
	img {
		@apply rounded;
	}
</style>
