import { Component, OnInit } from '@angular/core';
import { Observable, Observer, Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'; // Import catchError operator

@Component({
  selector: 'app-01-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  private subject = new Subject<any>(); // Replace 'any' with the appropriate type
  observable$: Observable<any>; // Replace 'any' with the appropriate type

  constructor() {
    this.observable$ = this.subject.asObservable();
  }

  ngOnInit() {
    // Create the observable with error handling
    let obs = new Observable<any>((observer: Observer<any>) => {
      setTimeout( () => {
        observer.next('12312'); // Emit initial value
        observer.complete(); // Complete the observable to avoid infinite loop
      }, 2000)
    }).pipe(
      catchError((error: any) => {
        console.error('An error occurred:', error);
        return throwError(error); // Re-throw the error for further handling
      })
    );

    // Subscribe to the observable
    obs.subscribe({
      next: (value) => console.log('Received value:', value),
      error: (error) => console.error('Error:', error),
      complete: () => console.log('Observable completed successfully')
    });

    this.observable$.subscribe({
      next: (value) => console.log('Received value:', value),
      error: (error) => console.error('send Error:', error),
      complete: () => console.log('Observable completed successfully')
    })
  }

  ngOnDestroy() {
    // Unsubscribe from the observable to prevent memory leaks
    console.log('ngOnDestroy')
    this.subject.unsubscribe()
  }

  // No onNext(), onError(), or onComplete() methods needed here
  // They were handled by the subscribe callback functions
  onNext() {
    this.subject.next('foo')
  }

  onError() {
    this.subject.error('Error');
  }

  onComplete() {
    this.subject.complete();
  }
}
