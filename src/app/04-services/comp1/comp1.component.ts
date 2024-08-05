import { Component, OnDestroy, OnInit } from '@angular/core';
import { ServicService } from "../servic.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit, OnDestroy {
  result: number | undefined;
  subscription$: Subscription | undefined;


  constructor(public _services: ServicService) {
    this.result = 10;
  }

  ngOnInit() {
    this.subscription$ = this._services.behaviorSubject$$.subscribe(
      data => {
        this.result = data;
        console.log('Полученное значение:', data);
      })
  }

  update() {
    this._services.behaviorSubject$$.next(17);
  }

  ngOnDestroy() {
    this.subscription$?.unsubscribe();
  }
}
