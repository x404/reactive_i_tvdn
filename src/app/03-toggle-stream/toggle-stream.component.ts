import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { filter, fromEvent, interval, map, mergeMap, Observable, of, Subject, take, takeUntil, tap } from "rxjs";

@Component({
  selector: 'app-toggle-stream',
  templateUrl: './toggle-stream.component.html',
  styleUrls: ['./toggle-stream.component.css']
})
export class ToggleStreamComponent implements AfterViewInit, OnDestroy {

  @ViewChild('toggleBtn') toggleButton: ElementRef | undefined;
  result: string = '';

  private destroy$ = new Subject<void>();


  ngAfterViewInit() {
    let toggleStream$ = fromEvent<Event>(this.toggleButton?.nativeElement, 'change');

    let dashGeneratorStream$ = interval(100).pipe(
      map(() => '-'),
      takeUntil(toggleStream$)
    )

    toggleStream$
      .pipe(
        map((event: Event) => (event.target as HTMLInputElement).checked),
        filter(isChecked => isChecked),
        tap(() => console.log('Checkbox has been checked')),
        mergeMap((event) => {
          return dashGeneratorStream$
        }),
      )
      .subscribe({
          next: (s) => this.result += s,
          complete: () => console.log('Result completed successfully')
        }
      );

  }

  ngOnDestroy() {
    console.log('ngOnDestroy toggleStream');
    this.destroy$.next();
    this.destroy$.complete();
  }

}
