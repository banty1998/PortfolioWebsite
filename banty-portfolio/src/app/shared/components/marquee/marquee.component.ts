import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-marquee',
  standalone: true,
  imports: [NgFor],
  template: `
    <div class="mq" [style.--spd]="speed + 's'">
      <div class="mq__track">
        <span *ngFor="let i of doubled" class="mq__item">{{i}}<span class="mq__sep">·</span></span>
      </div>
    </div>`,
  styleUrls: ['./marquee.component.scss']
})
export class MarqueeComponent {
  @Input() items: string[] = [];
  @Input() speed = 32;
  get doubled() { return [...this.items, ...this.items]; }
}
