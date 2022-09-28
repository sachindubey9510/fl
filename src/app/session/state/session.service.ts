import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SessionStore } from './session.store';
import { map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SessionService {

  constructor(private sessionStore: SessionStore,
              private http: HttpClient) {
  }

  loadToken(){
    this.http.get<any>('http://entityserver.manikworks.com/apptoken').subscribe(res => {
      const resArray = res?.ManikJSon;
      if(resArray && resArray[0]){
        const tokenValue = resArray[0].JSon0;
        this.sessionStore.update({ token: tokenValue });
      }
    })
  }
}