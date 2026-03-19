import { Component, inject, computed } from '@angular/core';
import { NgFor, NgIf, DOCUMENT } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink],
  template: `
    <article *ngIf="p() as proj; else miss">

      <!-- Clean text header — no broken image -->
      <div class="pd__hero">
        <div class="container pd__hero-inner">
          <a [href]="base" class="t-label pd__back">← All Projects</a>
          <div class="pd__header-meta">
            <span class="t-label">{{proj.company}}</span>
            <span class="pd__dot">·</span>
            <span class="t-label">{{proj.year}}</span>
          </div>
          <h1 class="pd__title">{{proj.title}}</h1>
          <div class="pd__hero-tags">
            <span *ngFor="let t of proj.tags" class="tag">{{t}}</span>
          </div>
        </div>
      </div>

      <!-- Body -->
      <div class="container pd__body">
        <aside class="pd__meta">
          <div class="pd__mi">
            <span class="t-label">Company</span>
            <p>{{proj.company}}</p>
          </div>
          <div class="pd__mi">
            <span class="t-label">Year</span>
            <p>{{proj.year}}</p>
          </div>
          <div class="pd__mi">
            <span class="t-label">Role</span>
            <p>Software Engineer</p>
          </div>
          <div class="pd__mi">
            <span class="t-label">Stack</span>
            <div class="pd__tags">
              <span *ngFor="let t of proj.tags" class="tag">{{t}}</span>
            </div>
          </div>
        </aside>
        <main class="pd__content">
          <p class="t-body pd__lead">{{proj.fullDescription}}</p>
          <h2 class="pd__sh t-label">Key Outcomes</h2>
          <ul class="pd__hl">
            <li *ngFor="let h of proj.highlights" class="t-body">→ {{h}}</li>
          </ul>
        </main>
      </div>

    </article>
    <ng-template #miss>
      <div class="container pd__miss">
        <p class="t-body">Project not found. <a [href]="base" class="hover-fill">← Go home</a></p>
      </div>
    </ng-template>`,
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent {
  base = inject(DOCUMENT).baseURI;
  private svc  = inject(PortfolioDataService);
  private slug = inject(ActivatedRoute).snapshot.paramMap.get('slug');
  p = computed(() => this.svc.data()?.projects.find(p => p.slug === this.slug));
}
