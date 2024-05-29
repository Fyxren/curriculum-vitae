<!-- <script context="module">
	import * as m from "$paraglide/messages"
</script> -->

<script>
	import * as m from '$paraglide/messages';
	import { getEducation } from '$lib/data/education';
	import * as Card from '$lib/components/ui/card';
	import { Badge } from '../ui/badge';

	const education = getEducation(m);
</script>

<div id="education" class="px-5 xl:px-40">
	<h2 class="text-3xl font-light">{m.education_title()}</h2>
	<div class="grid gap-4 mt-4 xl:grid-cols-2 xl:gap-10">
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
					<Badge>{edu.note}</Badge>
				</Card.Content>
			</Card.Root>
		{/each}
	</div>
</div>
