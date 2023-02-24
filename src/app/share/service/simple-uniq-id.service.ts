import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SimpleUniqIdService {
  private counter = 0;

  constructor() {}

  getUniqId(prefix: string) {
    return `${prefix}_${++this.counter}`;
  }
}
