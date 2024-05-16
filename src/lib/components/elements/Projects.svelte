<script>
	import * as Card from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '../ui/button';
	import projects from '$lib/data/projects';
	import { Construction, ExternalLink } from 'lucide-svelte';
</script>

<div id="projects" class="px-5 xl:px-40">
	<h2 class="text-3xl font-light">Projects</h2>
	<div class="grid grid-cols-2 gap-10 mt-4">
		{#each projects as project}
			<Card.Root>
				<Card.Header class="flex-row gap-4">
					{#if project.image}
						<img src={project.image} alt={project.title} class="w-12 h-12 rounded" />
					{/if}
					<div class="w-full">
						<Card.Title class="flex items-center gap-2">
							{project.title}
							{#if project.wip}
								<Badge variant="secondary" class="gap-1 scale-90">
									<Construction class="w-4 h-4" />
									Work in progress
								</Badge>
							{/if}
						</Card.Title>
						<Card.Description>{project.description}</Card.Description>
					</div>
				</Card.Header>
				<Card.Content class="">
					<div class="flex gap-2">
						{#each project.links as link}
							<Button
								class="flex items-center gap-1"
								variant="outline"
								href={link.url}
								target="_blank"
							>
								{link.label}
								{#if link.label === 'GitHub'}
									<img src="/icons/github.svg" alt="github icon" class="w-4 h-4 dark:invert-0 invert" />
								{:else}
									<ExternalLink class="w-4 h-4" />
								{/if}
							</Button>
						{/each}
					</div>
				</Card.Content>
			</Card.Root>
		{/each}
	</div>
</div>
