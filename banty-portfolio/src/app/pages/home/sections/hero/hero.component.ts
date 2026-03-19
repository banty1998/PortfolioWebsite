import { Component, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  template: `
    <section class="hero" id="hero">
      <div class="hero__bg"></div>
      <div class="container hero__content page-enter">
        <p class="t-label hero__eye">Available for opportunities · Hyderabad, India</p>
        <h1 class="t-hero">Banty<br><span class="accent">Agarwal</span></h1>
        <p class="t-h2 hero__sub">Senior Software Engineer</p>
        <p class="t-body hero__tag">
          .NET · Angular · Azure · Microservices<br>
          4+ years building enterprise systems that perform.
        </p>
        <div class="hero__btns">
          <a [href]="base + '#work'" class="btn btn--primary">View Work</a>
          <a href="mailto:b.agarwal333@gmail.com" class="btn btn--ghost">Get in Touch</a>
        </div>
      </div>
      <div class="hero__hint">
        <span class="t-label">Scroll</span>
        <div class="hero__line"></div>
      </div>
    </section>`,
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  base = inject(DOCUMENT).baseURI;
}
