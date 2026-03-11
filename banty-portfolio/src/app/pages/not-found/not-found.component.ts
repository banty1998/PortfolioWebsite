import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="nf container">
      <p class="t-label nf__code">404</p>
      <h1 class="t-hero">Page not<br><span class="accent">found.</span></h1>
      <a routerLink="/" class="btn btn--ghost nf__btn">← Back home</a>
    </div>`,
  styles: [`.nf{min-height:100dvh;display:flex;flex-direction:column;justify-content:center;padding-top:6rem}.nf__code{color:var(--color-accent);margin-bottom:var(--sp-md)}.nf__btn{margin-top:var(--sp-xl)}`]
})
export class NotFoundComponent {}
