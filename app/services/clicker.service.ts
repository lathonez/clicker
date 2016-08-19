import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ClickerActions } from '../actions';
import { ClickerSelector } from '../selectors';

import { Clicker } from '../models';
import { Clickers } from '../services';

import { Store } from '@ngrx/store';
import { AppState } from '../reducers';
// import { NotesDataService } from './notes.data.service';

@Injectable()
export class ClickerService {
    private clickerActions: ClickerActions;
    private store: Store<AppState>;

    /* tslint:disable: no-constructor-vars */
    constructor(
        store: Store<AppState>,
        clickerActions: ClickerActions,
        private clickerServiceAAA: Clickers
    ) {
        this.store = store;
        this.clickerActions = clickerActions;
    }

    /*
        getNotes(): Observable<Note[]>{
          return this.store.select<Note[]>('notes');
        }
        addNote(text: string, colour: string, left: number, top: number): void{
          this.store.dispatch({ type: "ADD_NOTE", payload: {text, colour, left, top, id:uuid.v1()} });
        }
        changeNoteText(text: string, note: Note): void{console.log('changeNoteText')
          this.store.dispatch({type: "UPDATE_NOTE_TEXT", payload: {id: note.id, text: text}})
        }
        changeNotePosition(left: number, top: number, note: Note): void{
          this.store.dispatch({type: "UPDATE_NOTE_POSITION", payload: {id: note.id, left: left, top: top}})
        }
    */
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
        this.clickerServiceAAA.doClick(id);
    }

    public newClicker(name: string): void {
        this.clickerServiceAAA.newClicker(name);
    }

    public removeClicker(id: string): void {
        this.clickerServiceAAA.removeClicker(id);
    }
}
