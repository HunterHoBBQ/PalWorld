<script>
  import { onMount } from "svelte";
  import case_1 from "$lib/images/case_4.jpg";
  let animateImage = false;

  onMount(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  function handleScroll() {
    const element = document.getElementById("section");
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight - 1000) {
      animateImage = true;
    }
  }
</script>

<div class="sub-section">
  {#if animateImage}
    <img src={case_1} alt="Section 4" class="animated-image" />

    <div class="sub-section-content" id="section">
      <h2>Husky Haven Harvest: Paws and Pals</h2>
      <p>
        Step into the heartwarming world of "Husky Haven Harvest," where adorable huskies are your loyal farming companions. Tend to your crops and animals
        alongside your playful huskies, cultivating a flourishing farm together. Explore the changing seasons, engage in charming dog-friendly activities, and
        witness the special bond between farmer and furry friend. Your harvest is sweeter with a wagging tail by your side.
      </p>
    </div>
  {/if}
</div>

<style>
  h2 {
    font-size: 2rem;
  }
  img {
    width: 45vw;
    width: 45dvw;
    /* height: 35vh; */
    /* height: 35dvh; */
  }
  .sub-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 80px 20px;
    flex-direction: row-reverse;
  }

  .sub-section-content {
    flex: 1;
    padding: 0 40px;
    text-align: right;
  }

  .animated-image {
    transform: translateX(100%);
    opacity: 0;
    animation: slide-in 0.8s ease forwards;
  }

  @keyframes slide-in {
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
</style>
