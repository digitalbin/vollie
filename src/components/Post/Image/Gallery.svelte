<script>
	// @ts-nocheck
	import { inview } from 'svelte-inview';
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import { Autoplay, Pagination } from 'swiper';
	import 'swiper/css';
	import "swiper/css/pagination"

	export let data;
	let w;
	let h;
	let totalSlides;
	let currIndex = 0;
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

	const handleSlideChange = ({ detail }) => {
		const { realIndex, activeIndex, loopedSlides, snapIndex, ...rest } = detail[0][0];
		currIndex = realIndex;
	}

	const handleInit = e => {
		swiper = e.detail[0]
	}

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
		totalSlides = images.length;
	}
</script>

<div bind:clientWidth={w} use:inview on:change={handleInview}>
	<span>{currIndex + 1}/{totalSlides}</span>
	{#if h}
	<Swiper
		modules={[Autoplay, Pagination]}
		pagination={true}
		spaceBetween={10}
		speed={1000}
		loop={false}
		autoplay={{
			disableOnInteraction: false
		}}
		on:slideChange={handleSlideChange}
		on:swiper={handleInit}
	>
		{#each images as image}
			<SwiperSlide>
				<div style="height: {h}px">
					<img
						src={image.slug}
						alt={title}
					/>
				</div>
			</SwiperSlide>
		{/each}
	</Swiper>
	{/if}
</div>

<style>
	:root {
		--swiper-theme-color: theme('colors.primary');
		--swiper-pagination-bullet-inactive-color: theme('colors.white');
		--swiper-pagination-bullet-inactive-opacity: 1;
	}
	div {
		@apply flex justify-center relative rounded overflow-hidden;
	}

	span {
		@apply absolute text-labelTiny top-sm right-sm bg-inverse text-inverse bg-opacity-80 px-sm py-xs rounded-sm z-50;
	}
	img {
		@apply rounded object-contain h-full;
	}
</style>
