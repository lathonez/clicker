export class ClickersServiceMock {

  public doClick(): boolean {
    console.log('CLICKING');
    return true;
  }

  public newClicker(): boolean {
    return true;
  }

  public getClickers(): Array<string> {
    return [];
  }
}
