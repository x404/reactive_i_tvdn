import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServicService {
  behaviorSubject$$ = new BehaviorSubject(0);

  constructor() {
    this.behaviorSubject$$ = new BehaviorSubject(10); // Initial value
  }

  getData(){
    return this.behaviorSubject$$.asObservable();
  }

}
