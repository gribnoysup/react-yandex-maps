import MockEvents from './MockEvents';
import MockCollection from './MockCollection';
import MockMap from './MockMap';

export default class MockControl {
  constructor(parameters) {
    this.parameters = parameters;

    this.events = new MockEvents();
    this.controls = new MockCollection();
    this.mapTypes = new MockCollection(parameters.mapTypes);
    this.data = new MockMap(parameters.data);
    this.options = new MockMap(parameters.options);
    this.state = new MockMap(parameters.state);

    this.addMapType = jest.fn(this.addMapType.bind(this));
    this.removeAllMapTypes = jest.fn(this.removeAllMapTypes.bind(this));
  }

  addMapType(type) {
    this.mapTypes.add(type);
  }

  removeAllMapTypes() {
    this.mapTypes = new MockCollection();
  }
}
