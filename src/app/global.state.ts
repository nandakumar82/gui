import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class GlobalState {
    private _data = new Subject<Object>();
    private _dataStream$ = this._data.asObservable();

    private _subscriptions: Map<String, Array<Function>> = new Map<String, Array<Function>>();

    constructor(){
        this._dataStream$.subscribe((data) => this._onEvent(data));
    }

    notifyDataChanged(event, value: any) {
        let current = this._data[event];
        if(current != value) {
            this._data[event] = value;

            this._data.next({
                event: event,
                data: this._data[event]
            });
        }
    }

    subscribe(event: String, callback: Function) {
        let subscriptions = this._subscriptions.get(event) || [];
        subscriptions.push(callback);

        this._subscriptions.set(event, subscriptions);
    }

    _onEvent(data: any) {
        let subscribers = this._subscriptions.get(data['event']) || [];
        subscribers.forEach((callback) => {
            callback.call(null, data['data']);
        });
    }
}