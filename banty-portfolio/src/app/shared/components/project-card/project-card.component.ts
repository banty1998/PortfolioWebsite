import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink }   from '@angular/router';
import { Project }      from '../../../core/models/project.model';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink],
  template: `
    <a class="card" [routerLink]="['/projects', project.slug]"
       (mouseenter)="h=true" (mouseleave)="h=false">
      <div class="card__img">
        <img [src]="project.previewImage" [alt]="project.title"
             [class.gone]="h && project.previewImageHover" width="800" height="450" loading="lazy"/>
        <img *ngIf="project.previewImageHover"
             [src]="project.previewImageHover" [alt]="project.title"
             [class.show]="h" width="800" height="450" loading="lazy"/>
        <div class="card__ov"><span class="card__cta">View Case ↗</span></div>
      </div>
      <div class="card__body">
        <div class="card__meta">
          <span class="t-label">{{project.company}}</span>
          <span class="t-label">{{project.year}}</span>
        </div>
        <h3 class="card__title">{{project.title}}</h3>
        <p class="card__desc t-body">{{project.shortDescription}}</p>
        <div class="card__tags">
          <span *ngFor="let t of project.tags.slice(0,4)" class="tag">{{t}}</span>
        </div>
      </div>
    </a>`,
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  @Input() project!: Project;
  h = false;
}
