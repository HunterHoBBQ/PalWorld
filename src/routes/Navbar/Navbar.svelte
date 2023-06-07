<script>
  import { ButtonGroup, Button, Navbar, NavBrand, NavLi, NavUl, NavHamburger, ImagePlaceholder, Skeleton, TextPlaceholder } from 'flowbite-svelte'
  import logo from '$lib/images/logo_joyglob.png'
</script>






<nav class="... sticky top-0">
  <div class="relative px-8">
    <Navbar
      navClass="absolute w-full z-50 top-0 left-0 border-b"
      let:hidden
      let:toggle
    >
      <NavBrand href="/">
        <img src={logo} class="mr-3 h-6 sm:h-9" alt="Joy Glob Logo"/>
        <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Joy Glob</span>
      </NavBrand>
      <NavHamburger on:click={toggle} />
      <NavUl {hidden}>
        <NavLi class="mt-2" href="/" active={true}>Home</NavLi>
        <NavLi class="mt-2" href="/about" >About</NavLi>
        <NavLi class="mt-2" href="/about" >Career</NavLi>
        <NavLi class="mt-2" href="/services">Services</NavLi>
        <NavLi class="mt-2" href="/pricing">Pricing</NavLi>
        <NavLi class="mt-2" href="/contact">Contact</NavLi>
        <NavLi class="mt-2" href="/contact">Solution</NavLi>
        <ButtonGroup>
          <!-- Lang Dropdown EN / CN -->
          <Button size="xs" outline color="dark">EN - 英文</Button>
          <Button size="xs" outline color="dark">CN - 中文</Button>
        </ButtonGroup>
      </NavUl>
    </Navbar>
  </div>
</nav>
