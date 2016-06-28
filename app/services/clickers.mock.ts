// CLICKERS:

export class ClickersMock {
  public doClick(): boolean {
    return true;
  }

  public newClicker(): boolean {
    return true;
  }
}

export class ClickerMock {
  public name: string = 'TEST CLICKER';
  public getCount(): number { return 10; };
}
