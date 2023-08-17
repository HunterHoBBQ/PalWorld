<script>
  import card_1 from "$lib/images/cards/card-1.webp";
  import card_2 from "$lib/images/cards/card-2.webp";
  import card_3 from "$lib/images/cards/card-3.webp";
  import card_4 from "$lib/images/cards/card-4.webp";
  import card_5 from "$lib/images/cards/card-5.webp";
  import card_6 from "$lib/images/cards/card-6.webp";
  import card_7 from "$lib/images/cards/card-7.webp";
  import card_8 from "$lib/images/cards/card-8.webp";
  import card_9 from "$lib/images/cards/card-9.webp";
  import card_10 from "$lib/images/cards/card-10.webp";
  import card_11 from "$lib/images/cards/card-11.webp";
  import card_12 from "$lib/images/cards/card-12.webp";
  import card_13 from "$lib/images/cards/card-13.webp";
  import card_14 from "$lib/images/cards/card-14.webp";
  import card_15 from "$lib/images/cards/card-15.webp";
  import card_16 from "$lib/images/cards/card-16.webp";
  import card_17 from "$lib/images/cards/card-17.webp";
  import card_18 from "$lib/images/cards/card-18.webp";
  let cards = [
    { title: "No.001", content: "FoxParks", image: card_1 },
    { title: "Card 2", content: "UniVlot", image: card_2 },
    { title: "Card 3", content: "Relaxaurus", image: card_3 },
    { title: "Card 1", content: "Jothog", image: card_4 },
    { title: "Card 2", content: "Incineram", image: card_5 },
    { title: "Card 3", content: "Mammorest", image: card_6 },
    { title: "Card 2", content: "Lamball", image: card_7 },
    { title: "Card 3", content: "Cattiva", image: card_8 },
    { title: "Card 1", content: "Rorirat", image: card_9 },
    { title: "Card 2", content: "Anubis", image: card_10 },
    { title: "Card 3", content: "Dinossom", image: card_11 },
    { title: "Card 2", content: "Elphidran", image: card_12 },
    { title: "Card 3", content: "Gobfin", image: card_13 },
    { title: "Card 1", content: "EikthyrDeer", image: card_14 },
    { title: "Card 2", content: "GrizzBlot", image: card_15 },
    { title: "Card 3", content: "Lifmunk", image: card_16 },
    { title: "Card 2", content: "TocoToco", image: card_17 },
    { title: "Card 3", content: "Loupmoon", image: card_18 },
    // Add more cards here...
  ];

  let showCards = true;

  function showCardSection() {
    showCards = true;
    const cardSection = document.querySelector(".card-section");
    cardSection.scrollIntoView({ behavior: "smooth" });
  }
</script>

<!-- <button on:click={showCardSection}>Scroll to Cards</button> -->

{#if showCards}
  <h1>Pal News</h1>
  <section class="card-section">
    {#each cards as card, i}
      <div class="card">
        <img src={card.image} alt={card.title} />
        {#if i > 9}
          <h2 class="card-title">No.0{i + 1}</h2>
        {:else}
          <h2 class="card-title">No.00{i + 1}</h2>
        {/if}
        <p class="card-content">{card.content}</p>
      </div>
    {/each}
  </section>
{/if}

<style>
  h1 {
    padding-top: 10px;
    font-size: 4rem;
    position: relative;
  }
  h1:hover {
    font-size: 4.1rem;
    color: rgba(0, 255, 0, 0.775);
  }

  h1::after {
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

  h1:hover::after {
    transform: scaleX(1);
  }

  .card:hover h2 {
    color: rgba(0, 255, 0, 0.775);
  }

  .card-section {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 20px;
    margin-top: 50px;
  }

  .card {
    width: calc(50% - 20px);
    margin-bottom: 20px;
    padding: 20px;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    border-radius: 8px;
    text-align: center;
    animation: fadeInUp 0.5s ease-out;
    transition: transform 0.3s ease;
  }

  .card:hover {
    transform: translateY(-5px);
  }

  .card-title {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: #333;
  }

  .card-content {
    font-size: 1rem;
    color: #777;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (width<50em) {
    .card {
      width: 100%;
    }
  }
</style>
