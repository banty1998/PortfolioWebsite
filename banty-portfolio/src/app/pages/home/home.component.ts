import { Component } from '@angular/core';
import { HeroComponent }       from './sections/hero/hero.component';
import { AboutComponent }      from './sections/about/about.component';
import { WorkComponent }       from './sections/work/work.component';
import { SkillsComponent }     from './sections/skills/skills.component';
import { ExperienceComponent } from './sections/experience/experience.component';
import { ContactComponent }    from './sections/contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, AboutComponent, WorkComponent, SkillsComponent, ExperienceComponent, ContactComponent],
  template: `<app-hero/><app-about/><app-work/><app-skills/><app-experience/><app-contact/>`
})
export class HomeComponent {}
