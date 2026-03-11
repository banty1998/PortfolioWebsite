import { Component, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { PortfolioDataService }    from '../../../../core/services/portfolio-data.service';
import { RevealOnScrollDirective } from '../../../../core/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgFor, RevealOnScrollDirective],
  template: `
    <section class="section" id="skills">
      <div class="container">
        <p class="t-label" revealOnScroll>Expertise</p>
        <h2 class="t-h1 sk__title" revealOnScroll>What I<br>build <span class="accent">with.</span></h2>
        <div class="sk__grid" revealOnScroll>
          <div *ngFor="let g of d()?.skills" class="sk__group">
            <h3 class="t-label sk__cat">{{g.category}}</h3>
            <ul class="sk__list">
              <li *ngFor="let i of g.items" class="sk__item">{{i}}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>`,
  styles: [`.sk__title{margin:var(--sp-lg) 0 var(--sp-xl)}.sk__grid{display:grid;grid-template-columns:repeat(3,1fr);gap:var(--sp-xl)}@media(max-width:768px){.sk__grid{grid-template-columns:1fr 1fr}}@media(max-width:480px){.sk__grid{grid-template-columns:1fr}}.sk__cat{color:var(--color-accent);margin-bottom:var(--sp-md)}.sk__item{font-size:.9rem;padding:var(--sp-xs) 0;border-bottom:1px solid var(--color-border)}.sk__item:last-child{border:none}`]
})
export class SkillsComponent { d = inject(PortfolioDataService).data; }
