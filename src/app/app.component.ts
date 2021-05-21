import { Component, OnInit, VERSION } from '@angular/core';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

    ngOnInit(): void {
    /*
    const valores = [2, 5, 8];
    of(...valores).pipe(map((x : any)=> x * 2), take(1)).subscribe(console.log);
    from(valores).pipe(map((x : any)=> x * 5)).subscribe(console.log);
    of(valores).subscribe(console.log);
    EMPTY.subscribe(console.log);
    */

    const observador = {
        next: (value: any)=> console.log(`valor emitido ${value}`),
        error: (err:any)=>console.log(`reporte tecnico ${err}`),
        complete: ()=> console.log('Completo')                
    };

    let observable$ = new Observable(flujoObservable => {
      flujoObservable.next("uno");
      flujoObservable.next("dos");
      flujoObservable.next("tres");
      flujoObservable.next("cuatro");
      flujoObservable.complete();
    });

    observable$.pipe(filter((x:any)=> x.indexOf('uno') === -1)).subscribe(observador);

    console.log(':::::::::::::::::::::::::::');
    
    observable$.subscribe(
      data=> console.log(`data ${data}`),
      err=> console.log(`Informe técnico ${err}`),
      ()=> console.log('Fin')
    );

  }
}
