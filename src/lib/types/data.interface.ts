export interface Education {
    school: string;
    title: string;
    note: string;
    startYear: number;
    endYear: number;
}

export interface Project {
    type: 'website' | 'bot' | 'paper' | 'startup';
    title: string;
    description: string;
    stack: string[];
    image: string;
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

export type Links = SocialLink[];

interface ProjectLink {
    title: string;
    link: string;
}

interface LanguageSkill {
    name: string;
    countryCode: string;
    level: string;
    link?: string;
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