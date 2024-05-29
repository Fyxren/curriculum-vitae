import type { Experience } from "$lib/types/data.interface";

export function getExperience(m: any) {

    return [
        {
            title: m.experience_obelink_title(),
            company: 'Obelink Vrijetijdsmarkt',
            link: 'https://www.obelink.nl',
            type: m.experience_type_partTime(),
            start: 'Apr. 2019'
        },
        {
            title: m.experience_bongersjansen_title(),
            company: 'Bongers/Jansen',
            link: 'https://www.bongers-jansen.nl',
            type: m.experience_type_internship(),
            start: 'Nov. 2023',
            end: 'Jan. 2024'
        }
    ] as Experience[];
}