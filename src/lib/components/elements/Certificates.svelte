<script lang="ts">
	import * as m from '$paraglide/messages';
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import * as Tooltip from '$lib/components/ui/tooltip';
	import { getCertificates } from '$lib/data/certificates';
	import { ExternalLink, Info } from 'lucide-svelte';

	import { formatDate } from '$lib/utils';

	const certificates = getCertificates();
</script>

<div id="certificates" class="px-5 xl:px-40">
	<h2 class="text-3xl font-light">{m.certs_title()}</h2>
	<div class="grid gap-4 mt-4 xl:grid-cols-2 xl:gap-10">
		{#each certificates as cert}
			<Card.Root>
				<Card.Header class="flex-row items-center gap-4">
					<img
						src={cert.organization.image}
						alt={cert.organization.name}
						class="w-12 h-12 rounded"
					/>
					<div class="w-full">
						<Card.Title class="flex items-center gap-2">
							{cert.title}

							{#if cert.note}
								<Tooltip.Root>
									<Tooltip.Trigger>
										<div class="duration-200 rounded-md hover:bg-secondary">
											<Info class="scale-[60%] text-muted-foreground" />
										</div>
									</Tooltip.Trigger>
									<Tooltip.Content>
										<p>{cert.note}</p>
									</Tooltip.Content>
								</Tooltip.Root>
							{/if}
						</Card.Title>
						<Card.Description class="capitalize">
							( {formatDate(cert.granted)} ) • {cert.organization.name}
						</Card.Description>
					</div>
				</Card.Header>
				<Card.Footer>
					<Button
						class="flex items-center gap-1"
						variant="outline"
						href={cert.link}
						target="_blank"
					>
						{m.certs_view()}
						<ExternalLink class="w-4 h-4" />
					</Button>
				</Card.Footer>
			</Card.Root>
		{/each}
	</div>
</div>
