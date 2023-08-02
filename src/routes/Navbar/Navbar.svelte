<script>
	import {
		ButtonGroup,
		Button,
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger
	} from 'flowbite-svelte';
	// import logo from '$lib/images/.png';
</script>

<nav class="... sticky top-0">
	<div class="relative px-8">
		<Navbar navClass="absolute w-full z-20 top-0 left-0 border-b" let:hidden let:toggle>
			<NavBrand href="/">
				<!-- <img src={logo} class="mr-3 h-6 sm:h-9" alt="Pals World Logo" /> -->
				<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
					>Pals World</span
				>
			</NavBrand>
			<NavHamburger on:click={toggle} />
			<NavUl {hidden} class="">
				<NavLi class="mt-2" href="/" active={true}>Home</NavLi>
				<NavLi class="mt-2" href="/about">About</NavLi>
				<NavLi class="mt-2" href="/about">Career</NavLi>
				<NavLi class="mt-2" href="/services">Services</NavLi>
				<NavLi class="mt-2" href="/contact">Contact</NavLi>
				<NavLi class="mt-2" href="/contact">Solution</NavLi>
				<ButtonGroup>
					<!-- Lang Dropdown EN / CN -->
					<Button class="text-xs" outline color="dark">EN</Button>
					<Button class="text-xs" outline color="dark">中文</Button>
				</ButtonGroup>
			</NavUl>
		</Navbar>
	</div>
</nav>
