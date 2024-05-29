<script>
	import * as m from '$paraglide/messages';
	import { getSkills } from '$lib/data/skills';
	import * as Card from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import * as HoverCard from '$lib/components/ui/hover-card';
	import * as Tooltip from '$lib/components/ui/tooltip';
	import { Button } from '$lib/components/ui/button';
	import { ExternalLink, Info } from 'lucide-svelte';

	const skills = getSkills(m);
</script>

<div id="skills" class="px-5 xl:px-40">
	<h2 class="text-3xl font-light">{m.skills_title()}</h2>
	<div class="grid gap-4 mt-4 xl:grid-cols-3 xl:gap-10">
		<!-- Languages -->
		<Card.Root>
			<Card.Header>
				<Card.Title>{m.skills_langs_title()}</Card.Title>
				<Card.Description>{m.skills_langs_desc()}</Card.Description>
			</Card.Header>
			<Card.Content class="space-y-2">
				{#each skills.languages as skill}
					<div class="flex items-center justify-between">
						<div class="flex items-center gap-2">
							<img
								src={`https://flagcdn.com/${skill.countryCode}.svg`}
								alt={skill.name}
								class="object-contain w-12 rounded-sm"
							/>
							{skill.name}
							{#if skill.link}
								<Tooltip.Root>
									<Tooltip.Trigger asChild let:builder>
										<Button
											builders={[builder]}
											variant="ghost"
											class="-ml-2 scale-75"
											href={skill.link}
											target="_blank"
										>
											<ExternalLink class="text-muted-foreground" href={skill.link} />
										</Button>
									</Tooltip.Trigger>
									<Tooltip.Content>
										<p>{m.skills_langs_breakdown()}</p>
									</Tooltip.Content>
								</Tooltip.Root>
							{/if}
							{#if skill.note}
								<Tooltip.Root>
									<Tooltip.Trigger asChild let:builder>
										<Button builders={[builder]} variant="ghost" class="-ml-2 scale-75">
											<Info class="text-muted-foreground" />
										</Button>
									</Tooltip.Trigger>
									<Tooltip.Content>
										<p>{skill.note}</p>
									</Tooltip.Content>
								</Tooltip.Root>
							{/if}
						</div>
						<Badge variant="default" class="h-5">{skill.level}</Badge>
					</div>
				{/each}
			</Card.Content>
		</Card.Root>

		<!-- Development -->
		<Card.Root>
			<Card.Header>
				<Card.Title>{m.skills_dev_title()}</Card.Title>
				<Card.Description>{m.skills_dev_desc()}</Card.Description>
			</Card.Header>
			<Card.Content class="grid grid-cols-6 gap-2">
				{#each skills.dev as dev}
					<HoverCard.Root>
						<HoverCard.Trigger>
							<div class="relative duration-200 hover:rotate-6">
								<img
									src={`https://skillicons.dev/icons?i=${dev.icon}`}
									alt={dev.name}
									class="object-contain w-12"
								/>
								{#if dev.beginner}
									<Info class="absolute w-4 h-4 opacity-75 -right-2 -top-2" />
								{/if}
							</div>
						</HoverCard.Trigger>
						<HoverCard.Content class="w-52">
							<div class="flex justify-between space-x-4">
								<h3>{dev.name}</h3>
								{#if dev.beginner}
									<Badge>{m.skills_dev_beginner()}</Badge>
								{/if}
							</div>
						</HoverCard.Content>
					</HoverCard.Root>
				{/each}
			</Card.Content>
		</Card.Root>

		<!-- Software -->
		<Card.Root>
			<Card.Header>
				<Card.Title>{m.skills_software_title()}</Card.Title>
				<Card.Description>{m.skills_software_desc()}</Card.Description>
			</Card.Header>
			<Card.Content class="grid grid-cols-6 gap-2">
				{#each skills.software as software}
					<HoverCard.Root>
						<HoverCard.Trigger>
							<div class="relative duration-200 hover:rotate-6">
								<img
									src={`https://skillicons.dev/icons?i=${software.icon}`}
									alt={software.name}
									class="object-contain w-12"
								/>
								{#if software.beginner}
									<Info class="absolute w-4 h-4 opacity-75 -right-2 -top-2" />
								{/if}
							</div>
						</HoverCard.Trigger>
						<HoverCard.Content class="w-52">
							<div class="flex justify-between space-x-4">
								<h3>{software.name}</h3>
								{#if software.beginner}
									<Badge>{m.skills_software_decent()}</Badge>
								{/if}
							</div>
						</HoverCard.Content>
					</HoverCard.Root>
				{/each}
			</Card.Content>
		</Card.Root>
	</div>
</div>
