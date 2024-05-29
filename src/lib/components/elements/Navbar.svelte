<script lang="ts">
	import * as m from '$paraglide/messages';
	import LanguageSwitcher from '../atoms/LanguageSwitcher.svelte';
	import ThemeSwitcher from '../atoms/ThemeSwitcher.svelte';
</script>

<header
	class="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
>
	<div class="container flex h-14 max-w-screen-2xl items-center">
		<div class="flex items-center">
			<a href="/" class="mr-6 flex items-center space-x-2">
				<img src="/logo.svg" alt="logo" class="h-6 object-contain invert dark:invert-0" />
				<span class="inline-block font-bold">Ben's CV</span></a
			>
			<nav class="hidden items-center gap-6 text-sm md:flex">
				<a href="#education" class="text-foreground/60 transition-colors hover:text-foreground/80"
					>{m.education_title()}</a
				>
				<a href="#experience" class="text-foreground/60 transition-colors hover:text-foreground/80"
					>{m.experience_title()}</a
				>
				<a href="#skills" class="text-foreground/60 transition-colors hover:text-foreground/80"
					>{m.skills_title()}</a
				>
				<a href="#projects" class="text-foreground/60 transition-colors hover:text-foreground/80"
					>{m.projects_title()}</a
				>
				<a href="#hobbies" class="text-foreground/60 transition-colors hover:text-foreground/80"
					>{m.hobbies_title()}</a
				>
			</nav>
		</div>
		<div class="flex flex-1 items-center justify-end space-x-2">
			<LanguageSwitcher />
			<ThemeSwitcher />
		</div>
	</div>
</header>
