import { StorageService } from './';
import { StorageMock }    from './mocks';

let storage: StorageService = null;

describe('StorageService', () => {

  beforeEach(() => {
    spyOn(StorageService, 'initStorage').and.returnValue(new StorageMock());
    storage = new StorageService();
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
