'use strict';

export class Click {

  private time: number;
  private location: string;

  constructor() {
    this.time = new Date().getTime();
    this.location = 'TODO';
  }
}
