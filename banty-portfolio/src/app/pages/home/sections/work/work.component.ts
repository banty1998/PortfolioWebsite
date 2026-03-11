import { Component, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { PortfolioDataService }    from '../../../../core/services/portfolio-data.service';
import { ProjectCardComponent }    from '../../../../shared/components/project-card/project-card.component';
import { RevealOnScrollDirective } from '../../../../core/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [NgFor, ProjectCardComponent, RevealOnScrollDirective],
  template: `
    <section class="section" id="work">
      <div class="container">
        <p class="t-label" revealOnScroll>Selected Work</p>
        <h2 class="t-h1 wk__title" revealOnScroll>Projects<br>that <span class="accent">ship.</span></h2>
        <div class="wk__grid" revealOnScroll>
          <app-project-card *ngFor="let p of d()?.projects" [project]="p"/>
        </div>
      </div>
    </section>`,
  styles: [`.wk__title{margin:var(--sp-lg) 0 var(--sp-xl)}.wk__grid{display:grid;grid-template-columns:repeat(2,1fr);gap:var(--sp-lg)}@media(max-width:768px){.wk__grid{grid-template-columns:1fr}}`]
})
export class WorkComponent { d = inject(PortfolioDataService).data; }
