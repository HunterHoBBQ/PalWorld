<script>
  import { onMount } from "svelte";
  import Btm_video from "./btm_video.svelte";
  import Lang from "./lang.svelte";
  import BtmHero from "./btm_hero.svelte";
  import CardGallery from "./card_gallery.svelte";
  import palworld_bg from "$lib/images/palworld_bg.webp";
  import cutee from "$lib/images/cutee.webp";
  import Palworld_video from "$lib/videos/Palworld.mp4";
  import { fade } from "svelte/transition";
  import Hero_text_1 from "./hero_text_1.svelte";
  import Hero_text_2 from "./hero_text_2.svelte";
  import Hero_text_3 from "./hero_text_3.svelte";
  import Hero_text_4 from "./hero_text_4.svelte";
  import Hero_text_5 from "./hero_text_5.svelte";
  import Footer from "./footer.svelte";
  import thumb_video from "$lib/images/palworld_bg.webp";
  export let scrollY;

  let showImage = true;
  let showVideo = false;
  let videoElement;

  onMount(() => {
    setTimeout(() => {
      showImage = false;
      showVideo = true;
      videoElement = document.getElementById("videoElement"); // Get the video element
      // videoElement.play();
    }, 2000); // 2 seconds delay

    // Event handler to play video when image fades out
    const handleImageFadeOut = () => {
      showImage = false;
      showVideo = true;
      videoElement.play();
    };

    const imageElement = document.querySelector("img"); // Get the image element
    imageElement.addEventListener("animationend", handleImageFadeOut); // Listen for the end of the fade-out animation
  });
  if (scrollY > 10) {
    videoElement = document.getElementById("videoElement");
    // videoElement.play();
  }
  if (scrollY > 50) {
    videoElement = document.getElementById("videoElement");
    videoElement.pause();
    videoElement.stop();
  }
</script>

<div class="container">
  <div class="video-wrapper">
    {#if showVideo}
      <video id="videoElement" poster={thumb_video} loading="eager" autoplay width="1920">
        <source src={Palworld_video} type="video/mp4" />
        <track kind="captions" />
      </video>
      <div class="hide">
        {#if scrollY > 250}
          {(videoElement = document.getElementById("videoElement"))}
          {videoElement.pause()}
        {:else if scrollY < 250 && scrollY > 10}
          {(videoElement = document.getElementById("videoElement"))}
          {videoElement.play()}
        {/if}
      </div>
      <div class="hero-text">
        <h1 class="cool-effect">
          Palworld Survival
          <hr />
          <a href="https://store.steampowered.com/app/1623730/Palworld/">
            <!-- <img height="60vh" src={steam_logo} alt="" /> -->
          </a>
        </h1>
        <!-- {#if scrollY > 1} -->
        <Hero_text_1 />
        <!-- <p>Scroll Y position: {scrollY}</p> -->
        <CardGallery {scrollY} />
        <!-- {/if} -->
        <!-- <Hero_text_2 /> -->
        <!-- <BtmHero /> -->
        <Lang />
        <Btm_video />
        <footer>
          <Footer />
        </footer>
      </div>
    {/if}
    {#if showImage}
      <img src={palworld_bg} alt="Pal World" in:fade out:fade={showImage} />
    {/if}
  </div>
  <!-- <img loading="lazy" src={cutee} alt="Image" /> -->
</div>

<style>
  hr {
    /* color: gray; */
    width: 100%;
    border: #ffd700 1px solid;
    opacity: 0.3;
  }
  .container {
    width: 100vw;
    /* height: 80vh; */
    position: relative;
    display: flex;
    justify-content: center;
    top: -53px;
  }

  img {
    width: 100vw;
    /* height: auto; */
    object-fit: contain;
    transition: opacity 1s;
  }

  .video-wrapper {
    position: absolute;
    transition: opacity 1s;
  }

  video {
    max-width: 100%;
    width: 100vw;
  }

  /* Your navbar styles here */

  .hero-text {
    margin-top: -5px;
    text-align: center;
    /* background-color: #000; */
    padding: 20px;
  }

  .cool-effect {
    font-family: "Arial", sans-serif;
    font-size: 5rem;
    color: #fff;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    animation: glowing 2s ease-in-out infinite;
  }

  @keyframes glowing {
    0% {
      color: #fff;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }
    50% {
      color: #ffd700;
      text-shadow: 0px 0px 8px #ffd700, 0px 0px 12px #ffd700;
    }
    100% {
      color: #fff;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }
  }

  .hide {
    visibility: hidden;
    display: none;
  }
</style>
