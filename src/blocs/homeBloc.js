import { BehaviorSubject } from "rxjs";

export default class HomeBloc {
  constructor(counterRepository) {
    this._counterRepository = counterRepository;
    this.counter = new BehaviorSubject(0);

    this._counterRepository
      .retrieveCount()
      .then(count => this.counter.next(count));
  }

  save() {
    this._counterRepository
      .save(this.counter.value)
      .then(() => this.counter.next(this.counter.value));
  }

  reload() {
    this._counterRepository
      .retrieveCount()
      .then(count => this.counter.next(count));
  }

  increment() {
    this.counter.next(this.counter.value + 1);
  }

  decrement() {
    this.counter.next(this.counter.value - 1);
  }

  reset() {
    this.counter.next(0);
  }
}
