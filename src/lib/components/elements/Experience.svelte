<script>
	import * as m from '$paraglide/messages';
	import { getExperience } from '$lib/data/experience';
	import * as Card from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';

	const experience = getExperience(m);
</script>

<div id="experience" class="px-5 xl:px-40">
	<h2 class="text-3xl font-light">{m.experience_title()}</h2>
	<div class="grid gap-4 mt-4 xl:grid-cols-2 xl:gap-10">
		{#each experience as ex}
			<Card.Root>
				<Card.Header>
					<Card.Title>{ex.title}</Card.Title>
					<Card.Description>
						( {ex.start}
						{#if ex.end}
							- {ex.end}
						{/if}) •
						<a href={ex.link} target="_blank" class="hover-link">
							{ex.company}
						</a>
					</Card.Description>
				</Card.Header>
				<Card.Content>
					<Badge>{ex.type}</Badge>
				</Card.Content>
			</Card.Root>
		{/each}
	</div>
</div>
