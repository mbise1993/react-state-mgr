import { Disposable } from './disposable';

interface Subscriber<TValue> {
  (value: TValue): void;
}

export interface ObservableLike<TValue> {
  subscribe(handler: Subscriber<TValue>): Disposable;
}

export class Observable<TValue> {
  private currentSubscriberId = 1;
  private readonly subscribers: Record<number, Subscriber<TValue>> = {};
  private _value: TValue;

  public constructor(private initialValue: TValue) {
    this._value = initialValue;
  }

  public get value(): TValue {
    return this._value;
  }

  public set value(value: TValue) {
    this._value = value;
    Object.values(this.subscribers).forEach(subscriber => subscriber(value));
  }

  public subscribe(handler: Subscriber<TValue>): Disposable {
    const subscriberId = this.currentSubscriberId;
    this.currentSubscriberId += 1;
    this.subscribers[subscriberId] = handler;

    return {
      dispose: () => delete this.subscribers[subscriberId],
    };
  }
}

export const isObservableLike = (obj: any): obj is ObservableLike<unknown> => {
  if (!(typeof obj.subscribe === 'function')) {
    return false;
  }

  const subscribe = obj.subscribe as Function;
  return subscribe.arguments.length > 0 && typeof subscribe.arguments[0] === 'function';
};
