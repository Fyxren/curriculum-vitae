<script>
	import * as m from '$paraglide/messages';
	import * as Card from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '../ui/button';
	import { getProjects } from '$lib/data/projects';
	import { Construction, ExternalLink } from 'lucide-svelte';

	const projects = getProjects(m);
</script>

<div id="projects" class="px-5 xl:px-40">
	<h2 class="text-3xl font-light">{m.projects_title()}</h2>
	<div class="mt-4 grid gap-4 xl:grid-cols-2 xl:gap-10">
		{#each projects as project}
			<Card.Root>
				<Card.Header class="flex-row gap-4">
					{#if project.image}
						<img src={project.image} alt={project.title} class="h-12 w-12 rounded" />
					{/if}
					<div class="w-full">
						<Card.Title class="flex items-center gap-2">
							{project.title}
							{#if project.wip}
								<Badge variant="secondary" class="scale-90 gap-1">
									<Construction class="h-4 w-4" />
									In progress
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
									<img
										src="/icons/github.svg"
										alt="github icon"
										class="h-4 w-4 invert dark:invert-0"
									/>
								{:else}
									<ExternalLink class="h-4 w-4" />
								{/if}
							</Button>
						{/each}
					</div>
				</Card.Content>
			</Card.Root>
		{/each}
	</div>
</div>
