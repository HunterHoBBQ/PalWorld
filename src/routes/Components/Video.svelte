<script>
    import video from '$lib/videos/Palworld.mp4'
    import img1 from '$lib/images/appstore.webp'
    import img2 from '$lib/images/google.webp'
    import { Heading, P, Button, Video, Card } from 'flowbite-svelte'
</script>
  
  <div class="text-center mt-10 mb-10">
    <Heading tag="h1" class="mb-4" customSize="text-4xl font-extrabold md:text-5xl lg:text-6xl">Newest MetaWorld</Heading>
    <P class="mb-6 text-center text-lg lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        This is the best next big game / 这是最好的下一个大型手机游戏</P>
    <Button href="/">Download & Play Now!</Button>
  </div>

  

<Video class="w-screen" src={video} loop autoplay muted trackSrc='Palworld.mp4' />

<div class="flex items-center justify-left -mt-10 text-center">
    <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
        Joy Glob
    </h5>
</div>


<div class="flex items-center justify-center mt-10 mb-10">
    <Card class="text-center" size="lg" padding='xl' >
        <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
            Pals World Metaverse
        </h5>
        <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
          Stay up to date and move work forward with Joy Glob on iOS & Android. Download the app today.
        </p>
        <div class="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
          <a href="" class="flex items-center justify-center">
            <img src={img1} alt="" size="xs">
        </a>
        <a href="" class="flex items-center justify-center">
            <img src={img2} alt="" size="xs">
        </a>
        </div>
      </Card>
</div>
