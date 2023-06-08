

<script>
	import Carousel from 'svelte-carousel'
    import bg_1 from '$lib/images/hero_image.png'
    const img11 = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
	
	let colors = ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png',
     'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png',
     'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png',
     'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png',
     'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png',
     'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png',
     'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png',
     'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png',
     'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png',
     'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png',
     'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png']
</script>

<img src={bg_1} height="100" width="250" alt="" />
<Carousel
  autoplayDuration={0}
  duration={5000}
  autoplay
  timingFunction="linear"
  dots={false}
  arrows={false}
  swiping={false}
>
  {#each colors as { color, text } (color)}
    <Color {color} {text} />
  {/each}
</Carousel>

<style>
	div {
		height: 8rem;
		width: 8rem;
	}
	
	span {
		display: inline-block;
		margin-top: 6rem;
	}
</style>