<script>
  import { onMount } from "svelte";
  import case_1 from "$lib/images/case_2.jpg";
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
    if (rect.top < window.innerHeight - 300) {
      animateImage = true;
    }
  }
</script>

<div class="sub-section">
  {#if animateImage}
    <img src={case_1} alt="Section 2" class="animated-image" />
    <div class="sub-section-content" id="section">
      <h2>Skybound Adventures: Aerial Boss Brawl</h2>
      <p>
        Soar through the skies in "Skybound Adventures," where the world's survival rests on your wings. As an intrepid aviator armed with whimsical weaponry,
        team up with fellow fliers to take on colossal bosses threatening the skies and land below. With adorable creatures and epic battles, this aerial boss
        brawl promises exhilarating challenges and heartwarming moments.
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
