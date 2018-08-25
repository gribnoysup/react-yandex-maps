import MockMap from './MockMap';
import MockCollection from './MockCollection';

class MockBehaviors extends MockCollection {
  constructor(behaviors) {
    super(behaviors);

    this.enable = jest.fn(this.enable.bind(this));
    this.disable = jest.fn(this.disable.bind(this));
  }

  enable(behaviors) {
    behaviors.forEach(this.collection.add);
  }

  disable(behaviors) {
    behaviors.forEach(this.collection.remove);
  }
}

export default class MockMapObject {
  constructor(state = {}, options = {}) {
    this.state = state;
    this.behaviors = new MockBehaviors(state.behaviors);
    this.options = new MockMap(options);
    this.geoObjects = new MockCollection();
    this.controls = new MockCollection();

    this.setType = jest.fn(this.setType.bind(this));
    this.setZoom = jest.fn(this.setZoom.bind(this));
    this.setCenter = jest.fn(this.setCenter.bind(this));
    this.setBounds = jest.fn(this.setBounds.bind(this));
  }

  setType(value) {
    this.state.type = value;
  }

  setZoom(value) {
    this.state.zoom = value;
  }

  setCenter(value) {
    this.state.center = value;
  }

  setBounds(value) {
    this.state.bounds = value;
  }
}
