export * from './clickers.mock';
export * from './storage.mock';

// ionic-mocks does not have AppVersionMock yet
export class AppVersionMock {

  public getVersionNumber(): Promise<string> {
    return Promise.resolve('VERSION');
  }
}
