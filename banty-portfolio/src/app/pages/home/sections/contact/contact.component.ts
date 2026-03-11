import { Component } from '@angular/core';
import { RevealOnScrollDirective } from '../../../../core/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RevealOnScrollDirective],
  template: `
    <section class="ct section" id="contact">
      <div class="container">
        <p class="t-label" revealOnScroll>Get in touch</p>
        <h2 class="t-hero ct__head" revealOnScroll>Let's work<br><span class="accent">together.</span></h2>
        <div class="ct__links" revealOnScroll>
          <a href="mailto:b.agarwal333@gmail.com" class="ct__email hover-fill">b.agarwal333@gmail.com</a>
          <div class="ct__social">
            <a href="https://linkedin.com/in/banty-agarwal" target="_blank" rel="noopener" class="hover-fill t-label">LinkedIn ↗</a>
            <a href="https://github.com/bantyagarwal"       target="_blank" rel="noopener" class="hover-fill t-label">GitHub ↗</a>
          </div>
          <p class="t-label ct__loc">Hyderabad, Telangana, India</p>
        </div>
      </div>
    </section>`,
  styles: [`.ct{background:var(--color-surface)}.ct__head{margin:var(--sp-lg) 0 var(--sp-xl)}.ct__email{font-family:var(--font-display);font-size:clamp(1.2rem,3vw,2.5rem);font-weight:700;display:block;margin-bottom:var(--sp-lg)}.ct__social{display:flex;gap:var(--sp-xl);margin-bottom:var(--sp-lg)}.ct__loc{margin-top:var(--sp-md)}`]
})
export class ContactComponent {}
