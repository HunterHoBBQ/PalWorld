<script>
  import { onMount } from "svelte";
  import case_1 from "$lib/images/case_3.jpg";
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
    if (rect.top < window.innerHeight - 600) {
      animateImage = true;
    }
  }
</script>

<div class="sub-section">
  {#if animateImage}
    <img src={case_1} alt="Section 3" class="animated-image" />

    <div class="sub-section-content" id="section">
      <h2>Harvest Haven: Cultivate and Flourish</h2>
      <p>
        Immerse yourself in the tranquil world of "Harvest Haven," a farming game that lets you nurture the land and watch it bloom. With your green thumb and
        hard work, sow a variety of crops, tend to adorable animals, and build a thriving farmstead. Trade with neighboring towns, engage in seasonal events,
        and embrace the joy of watching your efforts bear fruit in this heartwarming farming adventure.
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
    flex-direction: row;
  }

  .sub-section-content {
    flex: 1;
    padding: 0 40px;
    text-align: left;
  }

  .animated-image {
    transform: translateX(-100%);
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
