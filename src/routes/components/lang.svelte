<script>
  import bg from "$lib/images/lang.webp";
  let title = "Welcome to Our Website";
  let subtitle = "Discover amazing products and services.";
  let backgroundImage = bg; // Replace with the actual image path
</script>

<!-- <h1>Paldeck List</h1> -->
<section class="hero">
  <div class="container">
    <!-- <h1>{title}</h1>
    <p>{subtitle}</p> -->
    <img loading="lazy" src={bg} alt="" />
  </div>
</section>

<style>
  img {
    width: 100%;
    padding: 20px;
  }
  h1 {
    padding-top: 10px;
    font-size: 4rem;
    position: relative;
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
  .hero {
    /* height: 100vh; */
    width: 100%;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .container {
    text-align: center;
    color: #fff;
  }

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
</style>
