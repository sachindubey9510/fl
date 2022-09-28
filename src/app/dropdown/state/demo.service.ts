import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SessionQuery } from "src/app/session/state/session.query";
import { createDemo, Demo, ManikJSonResponse } from "./demo";
import { DemoStore } from "./demo.store";

@Injectable({ providedIn: 'root' })
export class DemoService {
    constructor(private http: HttpClient, private demoStore: DemoStore) {
}



loadDropDownData(){
   const httpHeaders = new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set("Accept", "application/json")
        .set("LGContext", "ERRORLOG")
        .set("Context", "PRACTICE")
        .set("EntityActionType", "GET.FORM.DATA")
        .set("PortalContext",  "INSTACITI");

    this.http.post<any>('http://entityserver.manikworks.com/entitymgr', {},     { headers: httpHeaders, responseType: 'json' }).subscribe(res => {
        const jsonRes = JSON.parse(res); 
        const json0 = jsonRes.ManikJSon[0].JSon0;
        const json1 = jsonRes.ManikJSon[0].JSon1;
        const demo0 = json0.map((js0: { DataValue: any; DataText: any; }) => createDemo(js0.DataValue, js0.DataText));
        const demo1 = json1.map((js1: { DataValue: any; DataText: any; }) => createDemo(js1.DataValue, js1.DataText));
        demo0.push(...demo1);
        console.log(demo0);
        this.demoStore.set(demo0);
    });
}

}