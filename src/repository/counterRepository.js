export default class CounterRepository {
  constructor() {
    this._count = 0;
  }

  save(count) {
    this._count = count;
    return Promise.resolve(this._count);
  }

  retrieveCount() {
    return Promise.resolve(this._count);
  }
}
