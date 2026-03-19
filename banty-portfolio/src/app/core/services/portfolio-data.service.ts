import { Injectable, inject } from '@angular/core';
import { HttpClient }         from '@angular/common/http';
import { toSignal }           from '@angular/core/rxjs-interop';
import { shareReplay }        from 'rxjs/operators';
import { PortfolioData }      from '../models/project.model';
import { DOCUMENT }           from '@angular/common';

@Injectable({ providedIn: 'root' })
export class PortfolioDataService {
  private baseUrl = inject(DOCUMENT).baseURI;

  private data$ = inject(HttpClient)
    .get<PortfolioData>(`${this.baseUrl}assets/data/portfolio.json`)
    .pipe(shareReplay(1));

  data = toSignal(this.data$);
}
