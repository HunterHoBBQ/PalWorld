<script>
  let isPlaying = false;
  import btm_video from "$lib/videos/Palworld Official Pal Reveal Trailer.mp4";
  import thumb_video from "$lib/images/video_thumbnail.webp";

  function playVideo() {
    isPlaying = true;
    const video = document.querySelector("#video");
    if (video) {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.mozRequestFullScreen) {
        // Firefox
        video.mozRequestFullScreen();
      } else if (video.webkitRequestFullscreen) {
        // Chrome, Safari and Opera
        video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) {
        // IE/Edge
        video.msRequestFullscreen();
      }
      video.play();
    }
  }
</script>

<h1>Release Open Beta Coming Soon!</h1>
<div class="video-container play-icon">
  <video loading="lazy" id="video" preload="metadata" controls poster={thumb_video}>
    <track kind="captions" />
    <source src={btm_video} type="video/mp4" nocontrol />
  </video>
</div>

<style>
  video {
    width: 100%;
    cursor: pointer;
    padding: 35px;
  }
  h1 {
    font-size: 3rem;
    padding: 20px;
  }
</style>
