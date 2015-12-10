import { Injectable } from 'angular2/angular2';

// Intended to handle interface with GoogleSheets only - should not directly access app logic (e.g. use Clicker service)

@Injectable()
export class Sheets {
  url: string;
  constructor() {
    this.url = 'https://google.com';
  }

  // get exisitng clicker sheet
  getSheet() {
    console.log('TODO');
  }

  // create a new clicker sheet (expects that none exist)
  newSheet() {
    console.log('TODO');
  }
}
