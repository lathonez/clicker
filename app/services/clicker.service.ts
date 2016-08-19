import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ClickerActions } from '../actions';
import { ClickerSelector } from '../selectors';

import { Clicker } from '../models';

import { Store } from '@ngrx/store';
import { AppState } from '../reducers';
// import { NotesDataService } from './notes.data.service';

@Injectable()
export class ClickerService {
    /* tslint:disable: no-constructor-vars */
    constructor(
        private store: Store<AppState>,
        private clickerActions: ClickerActions
    ) {}

    public getData(): Observable<Clicker[]> {
        return this.store.let(ClickerSelector.getClickerItems());
    }

    public initialise(): void {
        this.store.dispatch(
            this.clickerActions.load());
    }

    public isFetching(): Observable<boolean> {
        return this.store.let(ClickerSelector.getLoading());
    }

    public doClick(id: string): void {
        this.store.dispatch(
            this.clickerActions.doClick(id));
    }

    public newClicker(name: string): void {
        this.store.dispatch(
            this.clickerActions.newClicker(name));
    }

    public removeClicker(id: string): void {
        this.store.dispatch(
            this.clickerActions.removeClicker(id));
    }
}
