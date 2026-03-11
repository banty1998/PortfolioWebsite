import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="nav" [class.nav--scrolled]="scrolled()">
      <div class="nav__inner container">
        <a href="/" class="nav__logo">
          <span class="nav__name">Banty Agarwal</span>
          <span class="t-label nav__sub">Senior Software Engineer</span>
        </a>
        <nav class="nav__links">
          <a href="#work"       class="nav__link hover-fill">Work</a>
          <a href="#about"      class="nav__link hover-fill">About</a>
          <a href="#experience" class="nav__link hover-fill">Experience</a>
          <a href="#contact"    class="nav__cta">Hire Me</a>
        </nav>
      </div>
    </header>`,
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  scrolled = signal(false);
  @HostListener('window:scroll') onScroll() { this.scrolled.set(window.scrollY > 80); }
}
