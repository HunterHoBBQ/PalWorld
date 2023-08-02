<script>
	import video from '$lib/videos/Palworld.mp4';
	import img1 from '$lib/images/appstore.webp';
	import img2 from '$lib/images/google.webp';
	import bg_1 from '$lib/images/hero_image.png';
	import { Video, Card } from 'flowbite-svelte';
	let scroll;
</script>

<svelte:window bind:scrollY={scroll} />

<Video class="w-screen" src={video} loop autoplay muted trackSrc="Palworld.mp4" />
<!-- autoplay  -->

<div class="flex items-center justify-left -mt-10 text-center">
	<h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Pals World</h5>
</div>

<div class="flex items-center justify-center ml-4 mt-10 mb-10 mr-4">
	<!-- <Card class="text-center" size="lg" padding='xl'> -->
	<h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white mr-10">Pals World Metaverse</h5>
	<div class="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
		<a href="/" class="">
			<img src={img1} alt="" />
		</a>
		<a href="/" class="">
			<img src={img2} alt="" />
		</a>
	</div>
	<!-- </Card> -->
</div>

<div class="-z-20 fixed" style:transform={`translate3d(0, ${scroll * -2}px, 0`}>
	<img src={bg_1} alt="" />
</div>
