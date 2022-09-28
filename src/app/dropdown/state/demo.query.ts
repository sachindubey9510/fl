import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { DemoStore, DemoState } from './demo.store';
@Injectable({ providedIn: 'root' })
export class DemoQuery extends QueryEntity<DemoState> {
  constructor(protected override store: DemoStore) {
    super(store);
  }
}