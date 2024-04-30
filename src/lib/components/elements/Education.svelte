<script>
	import education from '$lib/data/education';
	import * as Card from '$lib/components/ui/card';
</script>

<div class="px-5 xl:px-40">
	<h2 class="text-3xl font-light">Education</h2>
	<div class="grid grid-cols-2 gap-10 mt-4">
		{#each education as edu}
			<Card.Root>
				<Card.Header>
					<Card.Title>{edu.title}</Card.Title>
					<Card.Description>
						( {edu.startYear}
						{#if edu.endYear}
							- {edu.endYear}
						{/if}) •
						{edu.school}
					</Card.Description>
				</Card.Header>
				<Card.Content>
					{edu.note}
				</Card.Content>
			</Card.Root>
		{/each}
	</div>
</div>
