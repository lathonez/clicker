/* tslint:disable */
import 'rxjs/add/operator/publishReplay';
import { multicast } from 'rxjs/operator/multicast';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Observable';

/**
 * This function coerces a string into a string literal type.
 * Using tagged union types in TypeScript 2.0, this enables
 * powerful typechecking of our reducers.
 * 
 * Since every action label passes through this function it
 * is a good place to ensure all of our action labels
 * are unique.
 */

let labelCache: { [label: string]: boolean } = {};
export function label<T>(label: T | ''): T {
    if (labelCache[<string>label]) {
        throw new Error(`Action type "${label}" is not unqiue"`);
    }

    labelCache[<string>label] = true;

    return <T>label;
}

export interface SelectorFn<T, V> {
    (input$: Observable<T>): Observable<V>;
}

export interface Selector<T, V> extends SelectorFn<T, V> {
    readonly cachedResult?: null | Observable<V>;
    reset(): void;
    override(source$: Observable<V>): void;
}

export function share<T, V>(selectFn: SelectorFn<T, V>): Selector<T, V> {
    let cachedResult: null | Observable<V>;


    const override = function (source$: Observable<V>) {
        cachedResult = source$;
    };

    const reset = function () {
        cachedResult = null;
    };

    const multicastFactory = function () {
        return new ReplaySubject<V>(1);
    };

    const selector: any = function (input$: Observable<T>) {
        if (Boolean(cachedResult)) {
            return cachedResult;
        }

        return cachedResult = multicast.call(selectFn(input$), multicastFactory).refCount();
    };

    selector.override = override;
    selector.reset = reset;
    Object.defineProperty(selector, 'cachedResult', {
        configurable: true,
        enumerable: true,
        get() {
            return cachedResult;
        }
    });

    return selector;
}
