<script>
    import { CarouselTransition, Carousel } from 'flowbite-svelte'
    import img1 from '$lib/images/pgo.webp';
    import img2 from '$lib/images/a9.webp';
    import img3 from '$lib/images/apex.webp';
    import img4 from '$lib/images/cod.webp';
    import img5 from '$lib/images/gi.webp';
    import img6 from '$lib/images/mine.webp';
    import img7 from '$lib/images/lol.webp';
    import img8 from '$lib/images/pubg.webp';
    import img9 from '$lib/images/snap.webp';
    // ./imageData/+server.js has the following
    export const images = [
    {
      id: 0,
      name: "Cosmic timetraveler",
      imgurl: img1,
      attribution: "cosmic-timetraveler-pYyOZ8q7AII-unsplash.com",
    },
    {
      id: 1,
      name: "Cristina Gottardi",
      imgurl: img2,
      attribution: "cristina-gottardi-CSpjU6hYo_0-unsplash.com",
    },
    {
      id: 2,
      name: "Johannes Plenio",
      imgurl: img3,
      attribution: "johannes-plenio-RwHv7LgeC7s-unsplash.com",
    },
    {
      id: 3,
      name: "Jonatan Pie",
      imgurl: img4,
      attribution: "jonatan-pie-3l3RwQdHRHg-unsplash.com",
    },
    {
      id: 4,
      name: "Mark Harpur",
      imgurl: img5,
      attribution: "mark-harpur-K2s_YE031CA-unsplash",
    },
    {
      id: 5,
      name: "Pietro De Grandi",
      imgurl: img6,
      attribution: "pietro-de-grandi-T7K4aEPoGGk-unsplash",
    },
    {
      id: 6,
      name: "Sergey Pesterev",
      imgurl: img7,
      attribution: "sergey-pesterev-tMvuB9se2uQ-unsplash",
    },
    {
      id: 7,
      name: "Solo travel goals",
      imgurl: img8,
      attribution: "solotravelgoals-7kLufxYoqWk-unsplash",
    },
    {
      id: 8,
      name: "Solo travel goals",
      imgurl: img9,
      attribution: "solotravelgoals-7kLufxYoqWk-unsplash",
    },
  ];
  let showThumbs=false
  let showCaptions=false
  let showIndicators=true
  import { fade, slide, fly } from 'svelte/transition';
  let condition1 = true;
  let scroll
  import {P, Heading} from 'flowbite-svelte';

  </script>

  <svelte:window bind:scrollY={scroll} />
  {#if scroll > 2800}
	<div class="parent" in:slide out:slide>
		<div class="text-center mt-10 mb-10">
      <Heading tag="h1" class="mb-4" customSize="text-4xl font-extrabold md:text-5xl lg:text-6xl 
      ">Im the Secret of Joy Glob</Heading>
      <P class="mt-5 mb-6 text-center text-lg lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400
      ">
          Every Game is Best of the Best / 每个手机游戏都是最好的</P>
    </div>
	</div>
{/if}

  <!-- <h1>{scroll}</h1> -->
<div class="max-w-4x1 mt-10 mb-10 justify-center flex ">
  <Carousel 
  {images} loop {showThumbs} {showCaptions} {showIndicators} duration="3000"/>
</div>

