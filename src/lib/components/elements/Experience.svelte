<script>
	import experience from '$lib/data/experience';
	import * as Card from '$lib/components/ui/card';
	import { Badge } from "$lib/components/ui/badge";
</script>

<div class="px-5 xl:px-40">
	<h2 class="text-3xl font-light">Experience</h2>
	<div class="grid grid-cols-2 gap-10 mt-4">
		{#each experience as ex}
			<Card.Root>
				<Card.Header>
					<Card.Title>{ex.title}</Card.Title>
					<Card.Description>
						( {ex.start}
						{#if ex.end}
							- {ex.end}
						{/if}) •
						{ex.company}
					</Card.Description>
				</Card.Header>
				<Card.Content>
					<Badge>{ex.type}</Badge>
				</Card.Content>
			</Card.Root>
		{/each}
	</div>
</div>
