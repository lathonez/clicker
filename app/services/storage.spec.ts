import { Storage }     from './';
import { StorageMock } from './mocks';

let storage: Storage = null;

describe('Storage', () => {

  beforeEach(() => {
    spyOn(Storage, 'initStorage').and.returnValue(new StorageMock());
    storage = new Storage();
    spyOn(storage['storage'], 'get').and.callThrough();
    spyOn(storage['storage'], 'set').and.callThrough();
    spyOn(storage['storage'], 'remove').and.callThrough();
  });

  it('initialises', () => {
    expect(storage).not.toBeNull();
  });

  it('gets', () => {
    storage.get('dave');
    expect(storage['storage'].get).toHaveBeenCalledWith('dave');
  });

  it('sets', () => {
    storage.set('dave', 'test');
    expect(storage['storage'].set).toHaveBeenCalledWith('dave', 'test');
  });

  it('removes', () => {
    storage.remove('dave');
    expect(storage['storage'].remove).toHaveBeenCalledWith('dave');
  });
});
