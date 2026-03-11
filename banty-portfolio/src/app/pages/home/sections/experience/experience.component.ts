import { Component, inject } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { PortfolioDataService }    from '../../../../core/services/portfolio-data.service';
import { RevealOnScrollDirective } from '../../../../core/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [NgFor, NgIf, RevealOnScrollDirective],
  template: `
    <section class="section" id="experience">
      <div class="container">
        <p class="t-label" revealOnScroll>Experience</p>
        <h2 class="t-h1 ex__title" revealOnScroll>Where I've<br><span class="accent">worked.</span></h2>
        <div class="ex__list">
          <div *ngFor="let j of d()?.experience; let i=index" class="ex__item" revealOnScroll>
            <div class="ex__num t-label">{{(i+1).toString().padStart(2,'0')}}</div>
            <div class="ex__body">
              <div class="ex__hd">
                <div>
                  <h3 class="ex__role">
                    {{j.role}}
                    <span *ngIf="j.current" class="ex__badge">Current</span>
                  </h3>
                  <p class="ex__co t-label">{{j.company}} · {{j.location}}</p>
                  <p *ngIf="j.keyProjects?.length" class="ex__proj t-label">{{j.keyProjects!.join(' · ')}}</p>
                </div>
                <p class="t-label">{{j.period}}</p>
              </div>
              <ul class="ex__ach">
                <li *ngFor="let a of j.achievements" class="t-body">{{a}}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>`,
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent { d = inject(PortfolioDataService).data; }
