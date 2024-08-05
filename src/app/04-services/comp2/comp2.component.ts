import { Component, OnDestroy, OnInit } from '@angular/core';
import { ServicService } from "../servic.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit, OnDestroy  {
  result: number | undefined;
  subscription$: Subscription | undefined;


  constructor(public _services: ServicService) {
  }

  ngOnInit() {
    this._services.getData().subscribe(data => {
        this.result = data;
      }
    )
  }


  ngOnDestroy() {
    this.subscription$?.unsubscribe();
  }

}
