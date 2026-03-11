import type { Personal, About }  from './personal.model';
import type { SkillGroup }       from './skill.model';
import type { Experience }       from './experience.model';

export type { Personal, About }  from './personal.model';
export type { SkillGroup }       from './skill.model';
export type { Experience }       from './experience.model';


export interface TechStack {
  backend?: string[]; frontend?: string[];
  cloud?: string[];   database?: string[]; testing?: string[];
}
export interface Project {
  slug: string; title: string; year: number; company: string;
  tags: string[]; previewImage: string; previewImageHover?: string;
  shortDescription: string; fullDescription: string;
  highlights: string[]; techStack: TechStack;
  liveUrl?: string; githubUrl?: string;
}
export interface Education    { institution: string; degree: string; major: string; period: string; location: string; }
export interface Certification{ title: string; issuer: string; date: string; hours?: number; }
export interface PortfolioData {
  personal: Personal; about: About; skills: SkillGroup[];
  experience: Experience[]; projects: Project[];
  education: Education[]; certifications: Certification[];
  marqueeItems: string[];
}
