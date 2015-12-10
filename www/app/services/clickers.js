import { Injectable } from 'angular2/angular2';

// Intended to handle interface with GoogleSheets only - should not directly access app logic (e.g. use Clicker service)

@Injectable()
export class Clickers {
  url: string;
  constructor() {
    this.clickers = [
      { id: 'Orla Weather Moans' },
      { id: 'Wulf Being a fagat' },
    ];
  }

  getClickers() {
    return this.clickers;
  }

  newClicker(id) {
    // TODO - for now we're just using name as id
    this.clickers.push({ id: id });
  }

  doClick(id) {
    console.log('clicking -- ' + id);
  }
  }
}
