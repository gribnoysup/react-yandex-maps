export default class MockCollection {
  constructor(collection = []) {
    this.collection = collection;

    this.add = jest.fn(this.add.bind(this));
    this.remove = jest.fn(this.remove.bind(this));
  }

  add(item) {
    this.collection.push(item);
  }

  remove(item) {
    this.collection = this.collection.filter(i => i !== item);
  }

  raw() {
    return this.collection;
  }
}
