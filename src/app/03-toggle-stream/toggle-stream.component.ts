import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { filter, fromEvent, interval, map, mergeMap, Observable, of, take, takeUntil, tap } from "rxjs";

@Component({
  selector: 'app-toggle-stream',
  templateUrl: './toggle-stream.component.html',
  styleUrls: ['./toggle-stream.component.css']
})
export class ToggleStreamComponent implements AfterViewInit {

  @ViewChild('toggleBtn') toggleButton: ElementRef | undefined;
  stream$: Observable<any> | undefined;
  result: string = '';


  ngAfterViewInit() {
    let toggleStream$ = fromEvent<Event>(this.toggleButton?.nativeElement, 'change');

    let dashGeneratorStream$ = interval(100).pipe(
      map(() => '-')
    )

    toggleStream$
      .pipe(
        map((event: Event) => (event.target as HTMLInputElement).checked),
        filter(isChecked => isChecked),
        tap(() => console.log('Checkbox has checked')),
        mergeMap((event) => {
          return dashGeneratorStream$
            .pipe(
              takeUntil(toggleStream$)
            )
        }),
      )
      .subscribe(
        (s) => this.result += s
      );

  }


}
