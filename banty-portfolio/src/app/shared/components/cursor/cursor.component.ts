import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cursor',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="c-dot"  [style.left.px]="x"  [style.top.px]="y"></div>
    <div class="c-ring" [style.left.px]="rx" [style.top.px]="ry" [class.c-ring--hover]="h"></div>`,
  styleUrls: ['./cursor.component.scss']
})
export class CursorComponent implements OnInit {
  x = 0; y = 0; rx = 0; ry = 0; h = false;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
    document.addEventListener('mousemove', e => {
      this.x = e.clientX; this.y = e.clientY;
      setTimeout(() => { this.rx = e.clientX; this.ry = e.clientY; this.cd.markForCheck(); }, 80);
      this.cd.markForCheck();
    });
    document.addEventListener('mouseover', e => {
      this.h = !!(e.target as HTMLElement).closest('a,button');
      this.cd.markForCheck();
    });
  }
}
