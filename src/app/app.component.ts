import { Component } from '@angular/core';
import { map, Observable, pipe } from 'rxjs';
import { SessionQuery } from './session/state/session.query';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'instaCityDemo';
  isTokenLoaded$: Observable<boolean>;
  
  constructor(private sessionQuery: SessionQuery){
    this.isTokenLoaded$ = this.sessionQuery.select().pipe(map(res => {
      return res && res.token ? true : false;  
    }))
  }
}
