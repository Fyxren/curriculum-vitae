import type { Skills } from '$lib/types/data.interface';

type Inlang = {
	skills_langs_nl: () => string;
	skills_langs_native: () => string;
	skills_langs_en: () => string;
	skills_langs_de: () => string;
	skills_langs_de_note: () => string;
};

export function getSkills(m: Inlang) {
	return {
		languages: [
			{
				name: m.skills_langs_nl(),
				countryCode: 'nl',
				level: m.skills_langs_native()
			},
			{
				name: m.skills_langs_en(),
				countryCode: 'gb',
				level: 'B2 & C2',
				link: 'https://cert.efset.org/CdpSMN'
			},
			{
				name: m.skills_langs_de(),
				countryCode: 'de',
				level: 'B1',
				note: m.skills_langs_de_note()
			}
		],
		dev: [
			{
				name: 'HTML',
				icon: 'html',
				beginner: false
			},
			{
				name: 'JavaScript',
				icon: 'js',
				beginner: false
			},
			{
				name: 'TypeScript',
				icon: 'ts',
				beginner: false
			},
			{
				name: 'NodeJS',
				icon: 'nodejs',
				beginner: false
			},
			{
				name: 'MySQL',
				icon: 'mysql',
				beginner: false
			},
			{
				name: 'Prisma',
				icon: 'prisma',
				beginner: false
			},
			{
				name: 'SvelteKit',
				icon: 'svelte',
				beginner: false
			},
			{
				name: 'TailwindCSS',
				icon: 'tailwind',
				beginner: false
			},
			{
				name: 'Firebase',
				icon: 'firebase',
				beginner: true
			},
			{
				name: 'Arduino',
				icon: 'arduino',
				beginner: true
			},
			{
				name: 'PHP',
				icon: 'php',
				beginner: true
			},
			{
				name: 'Laravel',
				icon: 'laravel',
				beginner: true
			}
		],
		software: [
			{
				name: 'Visual Studio Code',
				icon: 'vscode',
				beginner: false
			},
			{
				name: 'PHPstorm',
				icon: 'phpstorm',
				beginner: false
			},
			{
				name: 'Netlify',
				icon: 'netlify',
				beginner: false
			},
			{
				name: 'Git',
				icon: 'git',
				beginner: false
			},
			{
				name: 'Github',
				icon: 'github',
				beginner: false
			},
			{
				name: 'Npm',
				icon: 'npm',
				beginner: false
			},
			{
				name: 'Pnpm',
				icon: 'pnpm',
				beginner: false
			},
			{
				name: 'Yarn',
				icon: 'yarn',
				beginner: false
			},
			{
				name: 'Figma',
				icon: 'figma',
				beginner: false
			},
			{
				name: 'Notion',
				icon: 'notion',
				beginner: false
			},
			{
				name: 'Linux',
				icon: 'linux',
				beginner: true
			},
			{
				name: 'Ubuntu',
				icon: 'ubuntu',
				beginner: true
			}
		]
	} as Skills;
}
