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
  </script>


  
<div class="max-w-4x1 mt-10 mb-10 justify-center flex ">
  <Carousel 
  {images} loop {showThumbs} {showCaptions} {showIndicators} duration="3000"/>
</div>