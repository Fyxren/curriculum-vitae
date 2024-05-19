import type { Skills } from "$lib/types/data.interface";

export default {
    languages: [
        {
            name: 'Dutch',
            countryCode: 'nl',
            level: 'Native',
        },
        {
            name: 'English',
            countryCode: 'gb',
            level: 'B2 & C2',
            link: 'https://cert.efset.org/CdpSMN'
        },
        {
            name: 'German',
            countryCode: 'de',
            level: 'B1',
            note: 'Level required to pass my German exam in high school.'
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
        },
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