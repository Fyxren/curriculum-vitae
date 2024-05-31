import type { Experience } from '$lib/types/data.interface';

type Inlang = {
	experience_obelink_title: () => string;
	experience_bongersjansen_title: () => string;
	experience_type_partTime: () => string;
	experience_type_internship: () => string;
};

export function getExperience(m: Inlang) {
	return [
		{
			title: m.experience_obelink_title(),
			company: 'Obelink Vrijetijdsmarkt',
			link: 'https://www.obelink.nl',
			type: m.experience_type_partTime(),
			start: '2019-04-01'
		},
		{
			title: m.experience_bongersjansen_title(),
			company: 'Bongers/Jansen',
			link: 'https://www.bongers-jansen.nl',
			type: m.experience_type_internship(),
			start: '2023-11-01',
			end: '2024-01-01'
		}
	] as Experience[];
}
