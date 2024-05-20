<script lang="ts">
	import * as m from '$paraglide/messages';
	import ThemeSwitcher from '../atoms/ThemeSwitcher.svelte';
</script>

<header
	class="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
>
	<div class="container flex items-center h-14 max-w-screen-2xl">
		<div class="flex items-center">
			<a href="/" class="flex items-center mr-6 space-x-2">
				<img src="/logo.svg" alt="logo" class="object-contain h-6 invert dark:invert-0" />
				<span class="inline-block font-bold">Ben's CV</span></a
			>
			<nav class="items-center hidden gap-6 text-sm md:flex">
				<a href="#education" class="transition-colors text-foreground/60 hover:text-foreground/80"
					>{m.education_title()}</a
				>
				<a href="#experience" class="transition-colors text-foreground/60 hover:text-foreground/80"
					>{m.experience_title()}</a
				>
				<aF href="#skills" class="transition-colors text-foreground/60 hover:text-foreground/80"
					>{m.skills_title()}</aF
				>
				<a href="#projects" class="transition-colors text-foreground/60 hover:text-foreground/80"
					>{m.projects_title()}</a
				>
				<a href="#hobbies" class="transition-colors text-foreground/60 hover:text-foreground/80"
					>{m.hobbies_title()}</a
				>
			</nav>
		</div>
		<div class="flex items-center justify-end flex-1 space-x-2">
			<div class="flex items-center">
				<ThemeSwitcher />
			</div>
		</div>
	</div>
</header>
