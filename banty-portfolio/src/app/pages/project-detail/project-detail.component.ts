import { Component, inject } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink],
  template: `
    <ng-container *ngIf="project() as proj; else miss">
      <article class="page-enter">
        <div class="pd__hero">
          <img [src]="proj.previewImage" [alt]="proj.title" class="pd__img" width="1600" height="900"/>
          <div class="pd__ov container">
            <a routerLink="/" class="t-label pd__back">← All Projects</a>
            <h1 class="t-hero">{{proj.title}}</h1>
          </div>
        </div>
        <div class="container pd__body">
          <aside class="pd__meta">
            <div class="pd__mi"><span class="t-label">Company</span><p>{{proj.company}}</p></div>
            <div class="pd__mi"><span class="t-label">Year</span><p>{{proj.year}}</p></div>
            <div class="pd__mi">
              <span class="t-label">Tags</span>
              <div class="pd__tags"><span *ngFor="let t of proj.tags" class="tag">{{t}}</span></div>
            </div>
          </aside>
          <main class="pd__content">
            <p class="t-body pd__lead">{{proj.fullDescription}}</p>
            <h2 class="pd__sh t-label">Key Outcomes</h2>
            <ul class="pd__hl"><li *ngFor="let h of proj.highlights" class="t-body">→ {{h}}</li></ul>
          </main>
        </div>
      </article>
    </ng-container>
    <ng-template #miss>
      <div class="container" style="padding:8rem 0;min-height:100dvh">
        <p class="t-body">Project not found. <a routerLink="/" class="hover-fill accent">← Go home</a></p>
      </div>
    </ng-template>`,
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent {
  private svc  = inject(PortfolioDataService);
  private route = inject(ActivatedRoute);

  project() {
    const slug = this.route.snapshot.paramMap.get('slug');
    return this.svc.data()?.projects.find(p => p.slug === slug) ?? null;
  }
}
