import { Component, HostListener, signal, inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="nav" [class.nav--scrolled]="scrolled()" [class.nav--open]="menuOpen()">
      <div class="nav__inner container">
        <a [href]="base" class="nav__logo">
          <span class="nav__name">Banty Agarwal</span>
          <span class="t-label nav__sub">Senior Software Engineer</span>
        </a>
        <nav class="nav__links">
          <a [href]="base + '#work'"       class="nav__link hover-fill" (click)="close()">Work</a>
          <a [href]="base + '#about'"      class="nav__link hover-fill" (click)="close()">About</a>
          <a [href]="base + '#experience'" class="nav__link hover-fill" (click)="close()">Experience</a>
          <a [href]="base + '#contact'"    class="nav__cta"             (click)="close()">Hire Me</a>
        </nav>
        <button class="nav__burger" (click)="toggle()"
                [attr.aria-label]="menuOpen() ? 'Close menu' : 'Open menu'">
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>`,
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  base     = inject(DOCUMENT).baseURI;
  scrolled = signal(false);
  menuOpen = signal(false);
  toggle() { this.menuOpen.update(v => !v); }
  close()  { this.menuOpen.set(false); }
  @HostListener('window:scroll') onScroll() { this.scrolled.set(window.scrollY > 80); }
}
