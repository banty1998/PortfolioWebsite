export interface Personal {
  name: string; title: string; tagline: string;
  email: string; phone: string; location: string;
  linkedin: string; github: string; resumeUrl: string;
}
export interface AboutStat { value: string; label: string; }
export interface About     { bio: string; photo: string; keyStats: AboutStat[]; }
