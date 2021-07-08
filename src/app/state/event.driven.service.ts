import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {ActionEvent} from './product.state';

@Injectable({providedIn:"root"})
export class EventDrivenService{
  sourceEvenetSubject:Subject<ActionEvent>= new Subject<ActionEvent>();
  sourceEvenetSubjectObservable=this.sourceEvenetSubject.asObservable();
}
