<script lang="ts">
	import ThemeSwitcher from '../atoms/ThemeSwitcher.svelte';
	// import { scroll } from 'svelte/window';

	// function scrollTo(event: any) {
	// 	event.preventDefault();
	// 	const id = event.target.getAttribute('href').substring(1);
	// 	const element = document.getElementById(id);
	// 	scroll({ top: element?.offsetTop, behavior: 'smooth' });
	// }
</script>

<header
	class="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
>
	<div class="container flex items-center h-14 max-w-screen-2xl">
		<div class="hidden mr-4 md:flex">
			<a href="/" class="flex items-center mr-6 space-x-2">
				<img
					src="https://placehold.co/100"
					alt="logo"
					class="object-contain h-6 invert dark:invert-0"
				/>
				<span class="hidden font-bold sm:inline-block">Ben's CV</span></a
			>
			<nav class="flex items-center gap-6 text-sm">
				<a href="#education" class="transition-colors text-foreground/60 hover:text-foreground/80"
					>Education</a
				>
				<a href="#experience" class="transition-colors text-foreground/60 hover:text-foreground/80"
					>Experience</a
				>
				<a href="#skills" class="transition-colors text-foreground/60 hover:text-foreground/80"
					>Skills</a
				>
				<a href="#projects" class="transition-colors text-foreground/60 hover:text-foreground/80"
					>Projects</a
				>
				<a href="#hobbies" class="transition-colors text-foreground/60 hover:text-foreground/80"
					>Hobbies</a
				>
			</nav>
		</div>
		<div class="flex items-center justify-between flex-1 space-x-2 md:justify-end">
			<div class="flex items-center">
				<ThemeSwitcher />
			</div>
		</div>
	</div>
</header>
