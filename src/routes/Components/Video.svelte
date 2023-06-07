<script>
    import { Video } from 'flowbite-svelte';
    import video from '$lib/Videos/Palworld.mp4'
</script>

<Video src={video} autoplay muted controls trackSrc='Palworld.mp4' />