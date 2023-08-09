<script>
  import { onMount } from "svelte";
  import case_1 from "$lib/images/case_1.jpg";
  import case_2 from "$lib/images/case_2.jpg";
  import case_3 from "$lib/images/case_3.jpg";
  import case_4 from "$lib/images/case_4.jpg";
  import case_5 from "$lib/images/case_5.jpg";
  import { fly } from "svelte/transition";
  const sections = [
    {
      title: "Boss Hunter: Open World & Open Eye's",
      description: `In This Exhilarating Fps Adventure, Dive Into A Dynamic Open World Where You'll Take On The Role Of A Skilled Boss Hunter. Engage In Heart-Pounding Gunfights, Explore Vast Landscapes, And Track Down Colossal Bosses That Threaten The World's Peace. Can You Rise As The Ultimate Boss Hunter And Bring Down These Titanic Foes?`,
      image: case_1,
    },
    {
      title: "Sky-World Adventures: Aerial Boss Brawl",
      description: `Soar Through The Skies In "Skybound Adventures," Where The World's Survival Rests On Your Wings. As An Intrepid Aviator Armed With Whimsical Weaponry, Team Up With Fellow Fliers To Take On Colossal Bosses Threatening The Skies And Land Below. With Adorable Creatures And Epic Battles, This Aerial Boss Brawl Promises Exhilarating Challenges And Heartwarming Moments.`,
      image: case_2,
    },
    {
      title: "Harvest Haven: Cultivate and Flourish",
      description: `Immerse Yourself In The Tranquil World Of "Harvest Haven," A Farming Game That Lets You Nurture The Land And Watch It Bloom. With Your Green Thumb And Hard Work, Sow A Variety Of Crops, Tend To Adorable Animals, And Build A Thriving Farmstead. Trade With Neighboring Towns, Engage In Seasonal Events, And Embrace The Joy Of Watching Your Efforts Bear Fruit In This Heartwarming Farming Adventure.`,
      image: case_3,
    },
    {
      title: "Husky Haven: Paws and Pals",
      description: `Step Into The Heartwarming World Of "Husky Haven Harvest," Where Adorable Huskies Are Your Loyal Farming Companions. Tend To Your Crops And Animals Alongside Your Playful Huskies, Cultivating A Flourishing Farm Together. Explore The Changing Seasons, Engage In Charming Dog-Friendly Activities, And Witness The Special Bond Between Farmer And Furry Friend. Your Harvest Is Sweeter With A Wagging Tail By Your Side.`,
      image: case_4,
    },
    {
      title: "Catch-a-Buddy Carnival: Pals Unleashed!",
      description: `Step Into The Vibrant World Of "Catch-A-Buddy Carnival," Where You're Invited To Capture And Bond With Your Ideal Companions In The Ultimate Pal-Catching Extravaganza! With Your Trusty "Companioncapsules," Embark On A Journey Of Discovery, Exploration, And Delightful Friendship-Building As You Create Your Dream Team Of Pals.`,
      image: case_5,
    },
  ];

  let scrollY = 0;

  onMount(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  function handleScroll() {
    scrollY = window.scrollY;
  }
  // $: windowWidth = window.innerWidth / 3;
</script>

{#each sections as section, index}
  <div class="sub-section" class:reverse={index % 2 === 1}>
    <div class="sub-section-content" id={`section${index}`}>
      <h2>{section.title}</h2>
      <p>{section.description}</p>
    </div>
    <!-- {windowWidth} -->
    <!-- {#if scrollY > windowWidth * (index + 1)} -->
    <div class="animated-wrapper" class:reverse={index % 2 === 1}>
      <!-- {#if scrollY > 50 && window.innerWidth <= 768 && index === 0}
        <img src={section.image} alt={section.title} class="animated-image" transition:fly={{ duration: 1000, delay: 300, x: -150 }} />
      {/if} -->
      {#if index % 2 === 1 && ((scrollY > 50 && window.innerWidth <= 768 && index === 0) || (scrollY > 220 * (index + 2) && window.innerWidth < 1000 && index !== 0) || (scrollY > 400 * (index + 2) && window.innerWidth >= 1000) || (scrollY > 200 * (index + 2) && window.innerWidth > 768))}
        <img src={section.image} alt={section.title} class="animated-image" transition:fly={{ duration: 1000, delay: 300, x: -150 }} />
      {:else if (scrollY > 50 && window.innerWidth <= 768 && index === 0) || (scrollY > 220 * (index + 2) && window.innerWidth < 1000 && index !== 0) || (scrollY > 400 * (index + 2) && window.innerWidth >= 1000) || (scrollY > 200 * (index + 2) && window.innerWidth > 768)}
        <img src={section.image} alt={section.title} class="animated-image" transition:fly={{ duration: 1000, delay: 300, x: 150 }} />
      {/if}
    </div>
  </div>
{/each}

<style>
  p {
    padding: 20px;
    background-color: #fff;
    font-size: 1.5vw;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow effect */
  }
  p:hover {
    background-color: rgba(254, 255, 221, 0.5);
    /* color: rgba(254, 255, 221, 0.5); */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow effect */
    /* margin-top: -5px; */
  }

  h2 {
    position: relative;
    font-size: 3.5vw;
    margin-bottom: 20px;
  }

  h2::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: #3498db; /* Underline color */
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  h2:hover::after {
    transform: scaleX(1);
  }

  .sub-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3% 20px;
    flex-direction: row;
    text-align: right;
  }

  .sub-section.reverse {
    flex-direction: row-reverse;
    text-align: left;
  }

  .sub-section-content {
    flex: 1;
    padding: 0 40px;
  }
  .animated-wrapper {
    position: relative;
    overflow: hidden;
    width: 45vw;
    animation: slide-in 0.8s ease forwards;
    /* transform: translateX(100%); */
    /* opacity: 0; */
  }
  .animated-wrapper.reverse {
    transform: translateX(-100%);
  }
  img {
    /* width: 45vw; */
    width: 100%;
    height: 100%;
    display: block;
    transition: transform 0.3s ease, opacity 0.3s ease;
  }

  /* .animated-image {
    transform: translateX(100%);
  } */

  /* .animated-image.reverse {
    transform: translateX(-100%);
  } */

  @keyframes slide-in {
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  /* .sub-section .animated-wrapper:hover {
    border: #3498db solid 2px;
    transform: scale(1.2);
  } */
  .sub-section .animated-wrapper:hover img {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    .sub-section,
    .sub-section.reverse {
      flex-direction: column; /* Stack content vertically */
    }

    .sub-section-content {
      order: 2; /* Move text below */
      padding: 0 20px; /* Adjust padding for phone view */
      text-align: center;
    }
    .animated-wrapper {
      width: 80vw;
      padding-bottom: 2%;
    }

    .sub-section {
      padding: 30px 20px;
    }
  }
</style>
