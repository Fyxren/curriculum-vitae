<script lang="ts">
	import { Separator } from '$lib/components/ui/separator';
	import links from '$lib/data/links';
	import { Button } from '$lib/components/ui/button';
</script>

<div class="flex flex-col items-center space-y-8">
	<Separator />
	<div class="flex justify-center w-full gap-12">
		{#each links as link}
			<a
				href={link.link}
				target="_blank"
				rel="noopener noreferrer"
				class="p-2 duration-200 rounded-lg hover:rotate-6 hover:bg-muted"
			>
				<img src={`/icons/${link.icon}.svg`} alt={link.name} class="object-contain w-8 xl:w-10 dark:invert-0 invert" />
			</a>
		{/each}
	</div>
	<p class="text-muted-foreground">This is my resume. Rather go to my personal page?</p>
	<Button href="https://fyxren.com" target="_blank" variant="outline">Go to Fyxren.com</Button>
</div>
