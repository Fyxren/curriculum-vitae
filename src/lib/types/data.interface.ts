export interface Education {
	school: string;
	title: string;
	note: string;
	startYear: number;
	endYear: number;
}

export interface Project {
	title: string;
	description: string;
	type: 'website' | 'bot' | 'paper' | 'startup';
	stack: string[];
	image: string;
	wip: boolean;
	links: ProjectLink[];
}

export interface Experience {
	title: string;
	company: string;
	link?: string;
	type: 'Part-time' | 'Full-time' | 'Internship';
	start: string;
	end?: string;
}

export interface Skills {
	languages: LanguageSkill[];
	dev: DevSkill[];
	software: SoftwareSkill[];
}

export interface Hobbies {
	title: string;
	description: string;
	image?: string;
	links: HobbyLink[];
}

export interface Certificates {
	title: string;
	organization: {
		name: string;
		image: string;
	};
	granted: string;
	expiration?: string;
	link: string;
	note?: string;
}

export type Links = SocialLink[];

export interface PersonalDetails {
	firstName: string;
	lastName: string;
	birthday: string;
	address: string;
	city: string;
	zip: string;
	country: string;
	email: string;
	schoolMail: string;
	phone: string;
}

interface ProjectLink {
	label: string;
	url: string;
	link?: boolean;
}

interface LanguageSkill {
	name: string;
	countryCode: string;
	level: string;
	link?: string;
	note?: string;
}

interface DevSkill {
	name: string;
	icon: string;
	beginner: boolean;
}

interface SoftwareSkill {
	name: string;
	icon: string;
	beginner: boolean;
}

interface SocialLink {
	name: string;
	link: string;
	icon: string;
}

interface HobbyLink {
	label: string;
	url: string;
}
