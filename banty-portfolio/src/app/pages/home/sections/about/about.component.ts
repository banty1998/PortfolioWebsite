import { Component, inject } from '@angular/core';
import { NgFor, NgIf, DOCUMENT } from '@angular/common';
import { PortfolioDataService }    from '../../../../core/services/portfolio-data.service';
import { MarqueeComponent }        from '../../../../shared/components/marquee/marquee.component';
import { RevealOnScrollDirective } from '../../../../core/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgFor, NgIf, MarqueeComponent, RevealOnScrollDirective],
  template: `
    <section class="about section" id="about">
      <div class="container about__grid" revealOnScroll>
        <div class="about__left">
          <p class="t-label">About</p>
          <h2 class="t-h1 about__quote">"I build systems<br>that <span class="accent">perform.</span>"</h2>
          <p class="t-body about__bio">{{d()?.about?.bio}}</p>
          <div class="about__stats">
            <div *ngFor="let s of d()?.about?.keyStats" class="about__stat">
              <span class="about__val">{{s.value}}</span>
              <span class="t-label">{{s.label}}</span>
            </div>
          </div>
        </div>
        <div class="about__right">
          <div class="about__photo-wrap">
            <img
              *ngIf="d()?.about?.photo"
              [src]="base + d()!.about!.photo"
              alt="Banty Agarwal — profile photo"
              class="about__photo-img"
              width="750" height="1000"
              loading="lazy"/>
            <div *ngIf="!d()?.about?.photo" class="about__photo-placeholder">
              <span class="about__init">BA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <app-marquee [items]="d()?.marqueeItems || []" [speed]="30"/>`,
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  d    = inject(PortfolioDataService).data;
  base = inject(DOCUMENT).baseURI;
}
