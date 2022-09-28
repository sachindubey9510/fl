import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Demo } from './demo';

export interface DemoState extends EntityState<Demo, string> { }

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'demos', idKey: 'dataValue' })
export class DemoStore extends EntityStore<DemoState> {
  constructor() {
    super() ;
  }
}