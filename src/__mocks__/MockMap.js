export default class MockMap {
  constructor(value) {
    this.value = value;

    this.set = jest.fn(this.set.bind(this));
    this.get = jest.fn(this.get.bind(this));
  }

  set(key, newValue) {
    if (typeof newValue !== 'undefined') {
      this.value[key] = newValue;
    } else {
      this.value = key;
    }
  }

  get(key) {
    return typeof key !== 'undefined' ? this.value[key] : this.value;
  }
}
