import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent }    from './shared/components/nav/nav.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { CursorComponent } from './shared/components/cursor/cursor.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, FooterComponent, CursorComponent],
  template: `
    <app-cursor />
    <app-nav />
    <main id="main">
      <router-outlet />
    </main>
    <app-footer />`
})
export class AppComponent {}
