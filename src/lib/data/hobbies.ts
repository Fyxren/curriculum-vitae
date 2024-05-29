import type { Hobbies } from '$lib/types/data.interface';

type Inlang = {
	hobbies_coding_title: () => string;
	hobbies_coding_desc: () => string;
	hobbies_piano_title: () => string;
	hobbies_piano_desc: () => string;
	hobbies_travel_title: () => string;
	hobbies_travel_desc: () => string;
};

export function getHobbies(m: Inlang) {
	return [
		{
			title: m.hobbies_coding_title(),
			description: m.hobbies_coding_desc(),
			image: 'https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg',
			links: [
				{
					label: 'GitHub',
					url: 'https://github.com/Fyxren'
				}
			]
		},
		{
			title: m.hobbies_piano_title(),
			description: m.hobbies_piano_desc(),
			image: 'https://images.pexels.com/photos/586415/pexels-photo-586415.jpeg',
			links: [
				{
					label: 'YouTube',
					url: 'https://www.youtube.com/playlist?list=PLOT6alYbTjQQ-tlYPUODnaKjDrzT-Fy2C'
				}
			]
		},
		{
			title: m.hobbies_travel_title(),
			description: m.hobbies_travel_desc(),
			image: 'https://images.pexels.com/photos/6220536/pexels-photo-6220536.jpeg',
			links: [
				{
					label: 'Skratch World',
					url: 'https://share.skratch.world/ux3wQYfaq6'
				}
			]
		}
	] as Hobbies[];
}
