<script>
	import { Heading, P, Card, Button } from 'flowbite-svelte';
	import img1 from '$lib/images/pgo.webp';
	import img2 from '$lib/images/a9.webp';
	import img3 from '$lib/images/apex.webp';
	import img4 from '$lib/images/cod.webp';
	import img5 from '$lib/images/gi.webp';
	import img6 from '$lib/images/mine.webp';
	import img7 from '$lib/images/lol.webp';
	import img8 from '$lib/images/pubg.webp';
	import img9 from '$lib/images/snap.webp';
	import bg_1 from '$lib/images/pngegg.png';
	import bg_2 from '$lib/images/1.png';
	let scroll;
</script>

<div class="text-center mt-10 mb-10">
	<Heading
		tag="h1"
		class="mb-4"
		customSize="text-4xl font-extrabold md:text-5xl lg:text-6xl 
  transition transform hover:-translate-y-10 motion-reduce:transition-none motion-reduce:hover:transform-none"
		>Pals World Malaysia</Heading
	>
	<P
		class="mt-5 mb-6 text-center text-lg lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400
  transition transform hover:-translate-y-5 motion-reduce:transition-none motion-reduce:hover:transform-none"
	>
		Every Game is Best of the Best / 每个手机游戏都是最好的</P
	>
	<!-- <Button href="/">Download & Play Now!</Button> -->
	<P class="text-center">^ Touch Me ^</P>
</div>

<div class="mt-5 justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
	<Card img={img1}>
		<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
			Noteworthy technology acquisitions 2021
		</h5>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
			Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
			chronological order.
		</p>
		<Button>
			Play Now / 玩游戏 <svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-5 h-5 ml-2"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
				/></svg
			>
		</Button>
	</Card>
	<Card img={img2}>
		<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
			Noteworthy technology acquisitions 2021
		</h5>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
			Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
			chronological order.
		</p>
		<Button>
			Play Now / 玩游戏 <svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-5 h-5 ml-2"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
				/></svg
			>
		</Button>
	</Card>
	<Card img={img3}>
		<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
			Noteworthy technology acquisitions 2021
		</h5>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
			Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
			chronological order.
		</p>
		<Button>
			Play Now / 玩游戏 <svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-5 h-5 ml-2"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
				/></svg
			>
		</Button>
	</Card>
</div>

<svelte:window bind:scrollY={scroll} />

<div class="-z-20 fixed" style:transform={`translate3d(0, ${scroll * -2.1}px, 0`}>
	<img src={bg_1} alt="" />
</div>

<div class="mt-5 justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
	<Card img={img4}>
		<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
			Noteworthy technology acquisitions 2021
		</h5>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
			Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
			chronological order.
		</p>
		<Button>
			Play Now / 玩游戏 <svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-5 h-5 ml-2"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
				/></svg
			>
		</Button>
	</Card>
	<Card img={img5}>
		<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
			Noteworthy technology acquisitions 2021
		</h5>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
			Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
			chronological order.
		</p>
		<Button>
			Play Now / 玩游戏 <svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-5 h-5 ml-2"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
				/></svg
			>
		</Button>
	</Card>
	<Card img={img6}>
		<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
			Noteworthy technology acquisitions 2021
		</h5>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
			Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
			chronological order.
		</p>
		<Button>
			Play Now / 玩游戏 <svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-5 h-5 ml-2"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
				/></svg
			>
		</Button>
	</Card>
</div>

<div class="-z-20 fixed" style:transform={`translate3d(0, ${scroll * -1.5}px, 0`}>
	<img src={bg_2} alt="" />
</div>

<div class="mt-5 justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
	<Card img={img7}>
		<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
			Noteworthy technology acquisitions 2021
		</h5>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
			Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
			chronological order.
		</p>
		<Button>
			Play Now / 玩游戏 <svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-5 h-5 ml-2"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
				/></svg
			>
		</Button>
	</Card>
	<Card img={img8}>
		<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
			Noteworthy technology acquisitions 2021
		</h5>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
			Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
			chronological order.
		</p>
		<Button>
			Play Now / 玩游戏 <svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-5 h-5 ml-2"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
				/></svg
			>
		</Button>
	</Card>
	<Card img={img9}>
		<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
			Noteworthy technology acquisitions 2021
		</h5>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
			Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
			chronological order.
		</p>
		<Button>
			Play Now / 玩游戏 <svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-5 h-5 ml-2"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
				/></svg
			>
		</Button>
	</Card>
</div>
