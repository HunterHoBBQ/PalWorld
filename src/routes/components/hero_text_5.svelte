<script>
  import { onMount } from "svelte";
  import case_1 from "$lib/images/case_5.webp";
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
    if (rect.top < window.innerHeight - 1300) {
      animateImage = true;
    }
  }
</script>

<div class="sub-section">
  {#if animateImage}
    <img src={case_1} alt="Section 5" class="animated-image" />
    <div class="sub-section-content" id="section">
      <h2>Catch-a-Buddy Carnival: Pals Unleashed!</h2>
      <p>
        Step into the vibrant world of "Catch-a-Buddy Carnival," where you're invited to capture and bond with your ideal companions in the ultimate
        pal-catching extravaganza! With your trusty "CompanionCapsules," embark on a journey of discovery, exploration, and delightful friendship-building as
        you create your dream team of pals.
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
