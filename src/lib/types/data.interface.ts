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
    links: Link[];

}

export interface Experience {
    title: string;
    company: string;
    type: 'part-time' | 'full-time';
    start: string;
    end?: string;
}

interface Link {
    title: string;
    link: string;
}
