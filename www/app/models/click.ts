'use strict';

export class Click {

  private time: number;
  private location: string;

  constructor(time?: number, location?: string) {
    this.time = time || new Date().getTime();
    this.location = location || 'TODO';
  }

  public getTime() {
    return this.time;
  }

  public getLocation() {
    return this.location;
  }
}
