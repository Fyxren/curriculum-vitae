<script lang="ts">
	import { availableLanguageTags, languageTag } from '$paraglide/runtime';
	import { page } from '$app/stores';
	import { i18n } from '$lib/i18n.js';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { Button } from '$lib/components/ui/button';
	const languages = {
		en: 'English',
		nl: 'Nederlands'
	};
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger asChild let:builder>
		<Button builders={[builder]} variant="outline" class="flex items-center">
			<img
				src="https://flagcdn.com/{languageTag() === 'en' ? 'gb' : languageTag()}.svg"
				alt="flag"
				class="h-6 w-6"
			/>
		</Button>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content align="end">
		{#each availableLanguageTags as lang}
			<DropdownMenu.Item href={i18n.route($page.url.pathname)} hreflang={lang}>
				<img
					src="https://flagcdn.com/{lang === 'en' ? 'gb' : lang}.svg"
					alt="flag"
					class="mr-2 h-4 w-4"
				/>
				<span>{languages[lang]}</span>
			</DropdownMenu.Item>
		{/each}
	</DropdownMenu.Content>
</DropdownMenu.Root>
