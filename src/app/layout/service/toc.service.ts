import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TocService {
  private updateSubject = new Subject<void>();
  update$ = this.updateSubject.asObservable();

  requestUpdate() {
    this.updateSubject.next();
  }
}
