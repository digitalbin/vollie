<script>
	// @ts-nocheck

	import { inview } from 'svelte-inview';
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import { Autoplay, FreeMode } from 'swiper';
	import 'swiper/css';

	export let data;
	let w;
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
	}
</script>

<div use:inview on:change={handleInview}>
	<Swiper
		modules={[Autoplay, FreeMode]}
		freeMode={true}
		spaceBetween={10}
		speed={5000}
		loop={true}
		autoplay={{
			delay: 0,
			disableOnInteraction: false
		}}
		on:swiper={e => swiper = e.detail[0]}
	>
		{#each images as { slug, width, height }}
			<SwiperSlide>
				<img src={slug} {width} {height} alt={title} />
			</SwiperSlide>
		{/each}
	</Swiper>
</div>

<style>
	img {
		@apply rounded;
	}
</style>
