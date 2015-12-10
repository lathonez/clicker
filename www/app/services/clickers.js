import { Injectable } from 'angular2/angular2';

// Intended to handle interface with GoogleSheets only - should not directly access app logic (e.g. use Clicker service)

@Injectable()
export class Clickers {
  url: string;
  constructor() {
    this.clickers = [
      { title: 'Orla Weather Moans' },
      { title: 'Wulf Being a fagat' },
    ];
  }

  getClickers() {
    return this.clickers;
  }

  newClicker(clickerId) {
    this.clickers.push({ title: clickerId });
  }

  doClick(clickerId) {
    console.log('clicking -- ' + clickerId);
  }
}
