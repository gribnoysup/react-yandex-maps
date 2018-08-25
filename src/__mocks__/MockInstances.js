export class MockEvents {
  constructor() {
    this.events = {};

    this.add = jest.fn((name, handler) => {
      if (!Array.isArray(this.events[name])) this.events[name] = [];
      this.events[name].push(handler);
    });

    this.remove = jest.fn((name, handler) => {
      if (!Array.isArray(this.events[name])) this.events[name] = [];
      this.events[name] = this.events[name].filter(h => h !== handler);
    });
  }

  get(name) {
    return this.events[name] || [];
  }
}

export class MockGeoObject {
  constructor(geometry, properties, options) {
    this.geometry = geometry;
    this.properties = properties;
    this.options = options;
    this.events = new MockEvents();
  }
}
