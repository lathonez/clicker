'use strict';

export class Click {

  private time: number;
  private location: string;

  constructor() {
    this.time = new Date().getTime();
    this.location = 'TODO';
  }

  public setTime(time: number) {
    this.time = time;
  }

  public setLocation(location: string) {
    this.location = location;
  }
}
