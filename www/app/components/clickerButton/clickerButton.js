import { Component, View } from 'angular2/angular2';

@Component({
  selector: 'clicker-button',
  inputs: ['id: id'],
})

@View({
  templateUrl: 'app/components/clickerButton/clickerButton.html',
})

export class ClickerButton {
  id: 'id'
}
