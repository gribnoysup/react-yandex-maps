import MockCollection from './MockCollection';

export default class MockEvents {
  constructor() {
    this.events = {};

    this.add = jest.fn(this.add.bind(this));
    this.remove = jest.fn(this.remove.bind(this));
    this.get = jest.fn(this.get.bind(this));
  }

  add(name, handler) {
    if (!this.events[name]) {
      this.events[name] = new MockCollection();
    }

    this.events[name].add(handler);
  }

  remove(name, handler) {
    if (!this.events[name]) return;
    this.events[name].remove(handler);
  }

  get(name) {
    return (this.events[name] && this.events[name].raw()) || [];
  }
}
