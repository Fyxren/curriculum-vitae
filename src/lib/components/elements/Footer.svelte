<script lang="ts">
	import * as m from '$paraglide/messages';
	import { Separator } from '$lib/components/ui/separator';
	import links from '$lib/data/links';
	import { Button } from '$lib/components/ui/button';
</script>

<div class="flex flex-col items-center space-y-8">
	<Separator />
	<div class="flex w-full justify-center gap-12">
		{#each links as link}
			<a
				href={link.link}
				target="_blank"
				rel="noopener noreferrer"
				class="rounded-lg p-2 duration-200 hover:rotate-6 hover:bg-muted"
			>
				<img
					src={`/icons/${link.icon}.svg`}
					alt={link.name}
					class="w-8 object-contain invert dark:invert-0 xl:w-10"
				/>
			</a>
		{/each}
	</div>
	<p class="text-muted-foreground">{m.footer_text()}</p>
	<Button href="https://fyxren.com" target="_blank" variant="outline"
		>{m.footer_button({ website: 'Fyxren.com' })}</Button
	>
</div>
