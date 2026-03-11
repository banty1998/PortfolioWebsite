import { Injectable, inject } from '@angular/core';
import { HttpClient }         from '@angular/common/http';
import { toSignal }           from '@angular/core/rxjs-interop';
import { shareReplay }        from 'rxjs/operators';
import { PortfolioData }      from '../models/project.model';

@Injectable({ providedIn: 'root' })
export class PortfolioDataService {
  private data$ = inject(HttpClient)
    .get<PortfolioData>('/assets/data/portfolio.json')
    .pipe(shareReplay(1));

  data = toSignal(this.data$);
}
