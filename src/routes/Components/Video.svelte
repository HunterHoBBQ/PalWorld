<script>
    import video from '$lib/videos/Palworld.mp4'
    import img1 from '$lib/images/appstore.webp'
    import img2 from '$lib/images/google.webp'
    import bg_1 from '$lib/images/hero_image.png'
    import { Video, Card } from 'flowbite-svelte'
    let scroll;
</script>


<svelte:window bind:scrollY={scroll} />



  
  <div class="-z-20 fixed" style:transform={`translate3d(0, ${scroll * -2}px, 0`}>
    <img src={bg_1} alt="">
  </div>
  

<Video class="w-screen" src={video} loop autoplay muted trackSrc='Palworld.mp4' />
<!-- autoplay  -->


<div class="flex items-center justify-left -mt-10 text-center">
    <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
        Joy Glob
    </h5>
</div>


<div class="flex items-center justify-center mt-10 mb-10" >
    <Card class="text-center" size="lg" padding='xl'>
        <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white" >
            Pals World Metaverse
        </h5>
        <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
          Stay up to date and move work forward with Joy Glob on iOS & Android. Download the app today.
        </p>
        <div class="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
          <a href="/" class="flex items-center justify-center">
            <img src={img1} alt="" size="xs">
        </a>
        <a href="/" class="flex items-center justify-center">
            <img src={img2} alt="" size="xs">
        </a>
        </div>
      </Card>
</div>

