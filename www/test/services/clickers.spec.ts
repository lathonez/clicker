import { Clickers } from '../../app/services/clickers';

const CLICKER_IDS = ['yy5d8klsj0', 'q20iexxg4a', 'wao2xajl8a'];
let clickers = null;

function storageGetStub(key) {
  let rtn = null;

  switch (key) {
    case 'ids':
      rtn = JSON.stringify(CLICKER_IDS);
      break;
    case CLICKER_IDS[0]:
      rtn = '{"id":"' + CLICKER_IDS[0] + '","name":"test1","clicks":[{"time":1450410168819,"location":"TODO"}]}';
      break;
    case CLICKER_IDS[1]:
      rtn = '{"id":"' + CLICKER_IDS[1] + '","name":"test2","clicks":[{"time":1450410168819,"location":"TODO"},{"time":1450410168945,"location":"TODO"}]}';
      break;
    case CLICKER_IDS[2]:
      rtn = '{"id":"' + CLICKER_IDS[2] + '", "name":"test3", "clicks":[{ "time": 1450410168819, "location": "TODO" }, { "time": 1450410168945, "location": "TODO" }] } ';
      break;
    default:
      rtn = 'SHOULD NOT BE HERE!';
  }

  return new Promise((resolve) => {
    resolve(rtn);
  });
}

export function main() {

  describe('Clickers', () => {

    beforeEach(function() {
      clickers = new Clickers();
      spyOn(clickers.storage, 'set');
    });

    it('initialises with empty clickers', () => {
      expect(clickers.getClickers()).toEqual([]);
    });

    it('has empty ids with no storage', (done) => {
      (<any>clickers).initIds()
        .then(() => {
          expect(clickers.getClickers()).toEqual([]);
          done();
        });
    });

    it('has empty clickers with no storage', (done) => {
      (<any>clickers).initClickers([])
        .then(() => {
          expect(clickers.getClickers()).toEqual([]);
          done();
        });
    });

    it('can initialise a clicker from string', () => {
      let clickerString = '{"id":"0g2vt8qtlm","name":"harold","clicks":[{"time":1450410168819,"location":"TODO"},{"time":1450410168945,"location":"TODO"}]}';
      let clicker = (<any>clickers).initClicker(clickerString);
      expect(clicker.getName()).toEqual('harold');
      expect(clicker.getCount()).toEqual(2);
    });

    it('returns undefined for a bad id', () => {
      expect(clickers.getClicker('dave')).not.toBeDefined();
    });

    it('adds a new clicker with the correct name', () => {
      let idAdded = clickers.newClicker('dave');
      expect(clickers.storage.set).toHaveBeenCalledWith(idAdded, jasmine.any(String));
      expect(clickers.getClickers()[0].getName()).toEqual('dave');
    });

    it('removes a clicker by id', () => {
      let idToRemove = clickers.newClicker('dave');
      clickers.removeClicker(idToRemove);
      expect(clickers.storage.set).toHaveBeenCalledWith(idToRemove, jasmine.any(String));
      expect(clickers.getClickers()).toEqual([]);
    });

    it('does a click', () => {
      let idToClick = clickers.newClicker('dave');
      let clickedClicker = null;
      clickers.doClick(idToClick);
      expect(clickers.storage.set).toHaveBeenCalledWith(idToClick, jasmine.any(String));
      clickedClicker = clickers.getClicker(idToClick);
      expect(clickedClicker.getCount()).toEqual(1);
    });

    // testing

    it('loads IDs from storage', (done) => {
      spyOn(clickers.storage, 'get').and.callFake(storageGetStub);

      (<any>clickers).initIds()
        .then((ids) => {
          expect(ids).toEqual(CLICKER_IDS);
          done();
        });
    });

    it('loads clickers from storage', (done) => {
      spyOn(clickers.storage, 'get').and.callFake(storageGetStub);

      (<any>clickers).initClickers(CLICKER_IDS)
        .then((resolvedClickers) => {
          expect(resolvedClickers.length).toEqual(3);
          expect(resolvedClickers[0].getId()).toEqual(CLICKER_IDS[0]);
          expect(resolvedClickers[1].getId()).toEqual(CLICKER_IDS[1]);
          expect(resolvedClickers[2].getId()).toEqual(CLICKER_IDS[2]);
          done();
        });
    });
  });
};
