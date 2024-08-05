import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Observable } from "rxjs";
import { fromEvent} from "rxjs";

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
export class FromEventComponent implements AfterViewInit {

@ViewChild('createBtn') createButton: ElementRef | undefined;
stream$: Observable<any> | undefined;
result: string = '';


ngAfterViewInit() {
  this.stream$ = fromEvent(this.createButton?.nativeElement, 'click');
  this.stream$.subscribe( () => {
    this.result += '.'
  })
}

ngOnDestroy() {
}

}
