'use strict';

import { Clickers } from '../../app/services/clickers';

export function main() {

  describe('Clickers', () => {

    it('initialises with empty clickers', () => {
      let clickers = new Clickers();
      expect(clickers.getClickers()).toEqual([]);
    });

    it('has empty ids set on init', () => {
      let clickers = new Clickers();
      (<any>clickers).initIds()
        .then(() => {
          expect(clickers.getClickers()).toEqual([]);
        });
    });

    it('has empty clickers on init', () => {
      let clickers = new Clickers();
      (<any>clickers).initClickers()
        .then(() => {
          expect(clickers.getClickers()).toEqual([]);
        });
    });

    it('can initialise a clicker from string', () => {
      let clickerString = '{"id":"0g2vt8qtlm","name":"harold","clicks":[{"time":1450410168819,"location":"TODO"},{"time":1450410168945,"location":"TODO"}]}';
      let clickers = new Clickers();
      let clicker = (<any>clickers).initClicker(clickerString);
      expect(clicker.getName()).toEqual('harold');
      expect(clicker.getCount()).toEqual(2);
    });

    it('returns undefined for a bad id', () => {
      let clickers = new Clickers();
      expect(clickers.getClicker('dave')).not.toBeDefined();
    });

    it('adds a new clicker with the correct name', () => {
      let clickers = new Clickers();
      clickers.newClicker('dave');
      expect(clickers.getClickers()[0].getName()).toEqual('dave');
    });

    it('removes a clicker by id', () => {
      let clickers = new Clickers();
      let idToRemove = clickers.newClicker('dave');
      clickers.removeClicker(idToRemove);
      expect(clickers.getClickers()).toEqual([]);
    });

    it('does a click', () => {
      let clickers = new Clickers();
      let idToClick = clickers.newClicker('dave');
      let clickedClicker = null;
      clickers.doClick(idToClick);
      clickedClicker = clickers.getClicker(idToClick);
      expect(clickedClicker.getCount()).toEqual(1);
    });

  });
};
