<script>
	import * as m from '$paraglide/messages';
	import * as Card from '$lib/components/ui/card';
	import { Button } from '../ui/button';
	import { getHobbies } from '$lib/data/hobbies';
	import { ExternalLink } from 'lucide-svelte';

	const hobbies = getHobbies(m);
</script>

<div id="hobbies" class="px-5 xl:px-40">
	<h2 class="text-3xl font-light">{m.hobbies_title()}</h2>
	<div class="mt-4 grid gap-4 lg:grid-cols-2 xl:gap-10">
		{#each hobbies as hobby}
			<Card.Root>
				<Card.Header class="flex-row gap-8">
					<div>
						<Card.Title>{hobby.title}</Card.Title>
						<Card.Description>{hobby.description}</Card.Description>
					</div>
					{#if hobby.image}
						<img
							src={hobby.image}
							alt={hobby.title}
							class="aspect-square h-16 w-16 rounded object-cover"
						/>
					{/if}
				</Card.Header>
				<Card.Content>
					{#if hobby.links}
						{#each hobby?.links as link}
							<Button
								variant="outline"
								size="sm"
								href={link.url}
								target="_blank"
								rel="noopener noreferrer"
							>
								{link.label}
								<ExternalLink class="ml-1 h-4 w-4" />
							</Button>
						{/each}
					{/if}
				</Card.Content>
			</Card.Root>
		{/each}
	</div>
</div>
