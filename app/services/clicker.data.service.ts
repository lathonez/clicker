import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { StorageService } from './storage.service';
import { Click, Clicker }     from '../models';

@Injectable()
export class ClickerDataService {
    /* tslint:disable: no-constructor-vars */
    constructor(
        private storageService: StorageService
    ) {
        /* rxjs test.
        const source: Observable<{}> = Observable.fromPromise(this.initIdsPromise());

        const example: Observable<Clicker[]> = source
            .mergeMap((ids: string[]) => {
                let observables: Observable<any>[] = [];

                ids.map(id => {
                    // console.log('a>', id);
                    observables.push(Observable.fromPromise(this.getClickerPromise(id)));
                });

                return Observable
                    .forkJoin(observables)
                    .map(x => x as Clicker[]);
            });

        /* tslint:disable: no-unused-variable typedef /
        const subscribe = example.subscribe(val => console.log('Clickers>', val));
        */
    }

    // initialise Ids from SQL storage
    private initIdsPromise(): Promise<{}> {
        return new Promise((resolve: Function) => {
            let ids: Array<string> = [];
            this.storageService.get('ids') // return the promise so we can chain initClickers
                .then((rawIds: string) => {
                    if (rawIds) {
                        // ids are stored as stringified JSON array
                        ids = JSON.parse(rawIds);
                    } else {
                        ids = [];
                    }
                })
                .then(() => resolve(ids));
        });
    }

    // initialise a clicker from a raw JSON string out of the DB
    private initClicker(clicker: string): Clicker {
        const parsedClicker: Object = JSON.parse(clicker);
        const newClicker: Clicker = new Clicker(parsedClicker['id'], parsedClicker['name']);

        // add the clicks - need to re-instantiate object
        for (let click of parsedClicker['clicks']) {
            newClicker.addClick(new Click(click.time, click.location));
        }

        return newClicker;
    }

    private getClickerPromise(id: string): Promise<{}> {
        return new Promise((resolve) => {
            this.storageService.get(id)
                .then((clicker: string) => {
                    resolve(this.initClicker(clicker));
                });
        });
    }

    public getClickers(): Observable<Clicker[]> {
        return Observable.create((observer: Subject<Clicker[]>) => {
            this.initIdsPromise()
                .then((ids: Array<string>) => {
                    let promisePool: Promise<{}>[] = ids.map(id => {
                        return this.getClickerPromise(id);
                    });

                    Promise
                        .all(promisePool)
                        .then((data: any[]) => {
                            observer.next(data);
                        });
                });
        });
    }

    public saveClickers(clickers: Clicker[]): void {
        console.log('saveClickers>', clickers);

        let ids: string[] = [];
        clickers.map(clicker => ids.push(clicker.id));

        console.log('saveClickers:ids>', ids);

        clickers.map(clicker => {
            // save the clicker by id
            this.storageService.set(clicker.id, JSON.stringify(clicker));
        });

        // save the service's ids array
        this.storageService.set('ids', JSON.stringify(ids));
    }
}
