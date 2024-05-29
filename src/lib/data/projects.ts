import type { Project } from "$lib/types/data.interface";

export function getProjects(m: any) {
    return [
        {
            title: 'fyxren.com',
            description: m.projects_fyxren_desc(),
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
            description: m.projects_eseven_desc(),
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
            description: m.projects_mcdata_desc(),
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
            description: m.projects_pianissimo_desc(),
            type: 'website',
            stack: ['SvelteKit', 'TypeScript', 'TailwindCSS', 'shadcn-svelte', 'PocketBase'],
            image: 'https://i.postimg.cc/brXJ1Hsr/logo.png',
            wip: true,
            links: [
                {
                    label: m.projects_pianissimo_imgur(),
                    url: 'https://imgur.com/a/jfnZ1n2'
                }
            ]
        }
    ] as Project[];
}