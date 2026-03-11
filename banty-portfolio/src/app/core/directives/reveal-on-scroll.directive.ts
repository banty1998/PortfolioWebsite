import { Directive, ElementRef, OnInit, OnDestroy } from '@angular/core';

@Directive({ selector: '[revealOnScroll]', standalone: true })
export class RevealOnScrollDirective implements OnInit, OnDestroy {
  private obs!: IntersectionObserver;
  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit() {
    this.el.nativeElement.classList.add('reveal');
    this.obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          this.el.nativeElement.classList.add('is-visible');
          this.obs.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    this.obs.observe(this.el.nativeElement);
  }

  ngOnDestroy() { this.obs?.disconnect(); }
}
