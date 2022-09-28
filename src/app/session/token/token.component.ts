import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { SessionQuery } from '../state/session.query';
import { SessionService } from '../state/session.service';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css']
})
export class TokenComponent implements OnInit {

  tokenLoaded$: Observable<string>;
  constructor(private sessionService: SessionService, private sessionQuery: SessionQuery) { 
    this.tokenLoaded$  = this.sessionQuery.select().pipe(map(res => {
      return res ? "token loaded" : "token failed to load";
    }))
  }

  ngOnInit(): void {
    this.sessionService.loadToken();
  }

}
