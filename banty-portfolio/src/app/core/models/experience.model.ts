export interface Experience {
  id: number; company: string; role: string;
  period: string; location: string; current: boolean;
  keyProjects?: string[]; achievements: string[];
}
