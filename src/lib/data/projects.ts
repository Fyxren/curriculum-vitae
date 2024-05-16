import type { Project } from "$lib/types/data.interface";

export default [
    {
        title: 'fyxren.com',
        description: '✨ • My personal website.',
        type: 'website',
        stack: ['SvelteKit', 'TypeScript', 'Tailwind CSS', 'shadcn-svelte'],
        image: 'https://github.com/fyxren.png',
        wip: false,
        links: [
            {
                label: 'Website',
                url: 'https://fyxren.com'
            },
            {
                label: 'GitHub',
                url: 'https://github.com/Fyxren/fyxren.com'
            }
        ]
    },
    {
        title: 'E-SEVEN',
        description: '🎤 • A website for 3 friends who have been making music for years.',
        type: 'website',
        stack: ['SvelteKit', 'TailwindCSS', 'DaisyUI'],
        image: 'https://i.postimg.cc/4y5g2mfD/e-seven-logo.jpg',
        wip: false,
        links: [
            {
                label: 'Website',
                url: 'https://e-seven.fyxren.com'
            },
            {
                label: 'GitHub',
                url: 'https://github.com/Fyxren/e-seven'
            }
        ]
    },
    {
        title: 'McData',
        description: '🧊 • A Discord bot focussed on bringing Minecraft data to Discord.',
        type: 'bot',
        stack: ['Node.js', 'JavaScript', 'MySQL', 'Prisma'],
        image: 'https://github.com/mcdata-dev.png',
        wip: true,
        links: [
            {
                label: 'GitHub',
                url: 'https://github.com/mcdata-dev/mcdata',
            }
        ]
    },
    {
        title: 'Pianissimo',
        description: '🎹 • A website with all sheet music I have used for the piano.',
        type: 'website',
        stack: ['SvelteKit', 'TypeScript', 'TailwindCSS', 'shadcn-svelte', 'PocketBase'],
        image: 'https://i.postimg.cc/brXJ1Hsr/logo.png',
        wip: true,
        links: [
            {
                label: 'Preview on Imgur',
                url: 'https://imgur.com/a/jfnZ1n2'
            }
        ]
    }
] as Project[];