<script>
  import Footer from "./components/footer.svelte";
  import Video from "./components/video_hero.svelte";
  import Navbar from "./components/navbar.svelte";
  export let scrollY = 0;
</script>

<svelte:window bind:scrollY />

<!-- <p>Scroll Y position: {scrollY}</p> -->
<Navbar {scrollY} />
<Video {scrollY} />

<style>
  /* Reset all margin, padding, and border */
  :global(*, *::before, *::after) {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }

  /* Remove list styles (bullets/numbers) */
  :global(ul, ol) {
    list-style: none;
  }

  /* Remove default hyperlink styles */
  :global(a) {
    text-decoration: none;
    color: inherit;
  }

  /* Reset heading margins and font sizes */
  :global(h1, h2, h3, h4, h5, h6) {
    margin: 0;
    font-size: inherit;
    font-weight: inherit;
  }

  /* Reset paragraph margin */
  :global(p) {
    margin: 0;
  }

  /* Reset image border */
  :global(img) {
    border-style: none;
  }

  /* Set base font size and family */
  :global(body) {
    font-size: 16px;
    font-family: Arial, sans-serif;
    overflow-x: hidden;
    min-height: 100vh;
  }
  :global(HTML) {
    scroll-behavior: smooth;
  }
  :global(::root) {
    --scrollbar-width: 6px; /* Adjust this value to make the scrollbar slimmer */
    --scrollbar-thumb-color: #aaa; /* Color of the scrollbar thumb */
    --scrollbar-track-color: transparent; /* Color of the scrollbar track */
  }

  /* Apply styles to the scrollbar */
  /* For WebKit-based browsers */
  :global(::-webkit-scrollbar) {
    /* width: var(--scrollbar-width); */
  }

  :global(::-webkit-scrollbar-thumb) {
    background-color: var(--scrollbar-thumb-color);
    border-radius: var(--scrollbar-width);
  }

  :global(::-webkit-scrollbar-track) {
    background-color: var(--scrollbar-track-color);
  }
</style>
