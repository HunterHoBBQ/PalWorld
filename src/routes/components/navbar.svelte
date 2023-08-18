<script>
  export let scrollY;
  let scrolledDown = false; // Flag to track scrolling down

  $: scrolledDown = scrollY > 0;
</script>

<div class="navbar" class:visible={scrolledDown}>
  <div class="navbar__name">
    <a href="/"> PalWorld @ Fan Made</a>
    <!-- <p style="font-size: 8px;">Developed by HunterBBQ</p> -->
  </div>
  <button class="navbar__button">
    <a href="https://store.steampowered.com/app/1623730/Palworld/" target="_blank"> Play Now </a>
  </button>
</div>

<style>
  /* Your styles here */
  .navbar {
    /* position: absolute; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    padding-inline: 3.5rem;
    background-color: #f2f2f2;
    background-color: rgba(red, green, blue, 0.65);
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    opacity: 0; /* Initially hidden */
    transition: opacity 0.3s;
  }

  .navbar.visible {
    opacity: 1; /* Show when scrolled down */
  }

  .navbar__name {
    font-size: 20px;
    font-weight: bold;
  }

  .navbar__button {
    padding: 8px 16px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
</style>
