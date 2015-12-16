'use strict';

export class Click {

  time: number;
  location: string;

  constructor() {
    this.time = new Date().getTime();
    this.location = 'TODO';
  }
}
