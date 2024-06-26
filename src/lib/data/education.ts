import type { Education } from '$lib/types/data.interface';

type Inlang = {
	education_ccs_note: () => string;
};

export function getEducation(m: Inlang) {
	return [
		{
			school: 'Graafschap College',
			title: 'Smart Industry (Technicus Engineering)',
			note: 'MBO 4',
			startYear: 2023
		},
		{
			school: 'Christelijk College Schaersvoorde',
			title: 'HAVO',
			note: m.education_ccs_note(),
			startYear: 2016,
			endYear: 2023
		}
	] as Education[];
}
