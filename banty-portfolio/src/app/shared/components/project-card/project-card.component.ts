import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Project }   from '../../../core/models/project.model';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [NgFor, RouterLink],
  template: `
    <a class="card" [routerLink]="['/projects', project.slug]">
      <div class="card__banner">
        <span class="card__num">{{('0'+(index+1)).slice(-2)}}</span>
        <div class="card__tags">
          <span *ngFor="let t of project.tags.slice(0,3)" class="tag">{{t}}</span>
        </div>
        <span class="card__arrow">↗</span>
      </div>
      <div class="card__body">
        <div class="card__meta">
          <span class="t-label">{{project.company}}</span>
          <span class="t-label">{{project.year}}</span>
        </div>
        <h3 class="card__title">{{project.title}}</h3>
        <p class="card__desc t-body">{{project.shortDescription}}</p>
      </div>
    </a>`,
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  @Input() project!: Project;
  @Input() index = 0;
}
