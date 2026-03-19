import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="ft">
      <div class="container ft__inner">
        <div>
          <p class="ft__name">Banty Agarwal</p>
          <p class="t-label">Hyderabad, Telangana, India</p>
        </div>
        <div class="ft__links">
          <a href="mailto:b.agarwal333@gmail.com" class="hover-fill">b.agarwal333@gmail.com</a>
          <a href="https://www.linkedin.com/in/banty-agarwal-730720190"
             target="_blank" rel="noopener" aria-label="LinkedIn profile" class="hover-fill">LinkedIn ↗</a>
          <a href="https://github.com/banty1998"
             target="_blank" rel="noopener" aria-label="GitHub profile" class="hover-fill">GitHub ↗</a>
        </div>
        <p class="t-label">© {{year}} · Built with Angular</p>
      </div>
    </footer>`,
  styles: [`
    .ft        { border-top:1px solid var(--color-border); padding:var(--sp-xl) 0; }
    .ft__inner { display:flex; flex-wrap:wrap; gap:var(--sp-lg); align-items:center; justify-content:space-between; }
    .ft__name  { font-family:var(--font-display); font-size:1.1rem; font-weight:700; text-transform:uppercase; margin-bottom:.25rem; }
    .ft__links { display:flex; gap:var(--sp-lg); flex-wrap:wrap; font-size:.9rem; }
    @media(max-width:600px) {
      .ft__inner { flex-direction:column; text-align:center; }
      .ft__links { flex-direction:column; gap:var(--sp-md); align-items:center; }
    }
  `]
})
export class FooterComponent { year = new Date().getFullYear(); }
