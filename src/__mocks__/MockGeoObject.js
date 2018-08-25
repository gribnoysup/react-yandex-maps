import MockEvents from './MockEvents';
import MockCollection from './MockCollection';

export default class MockGeoObject {
  constructor(geometry, properties, options) {
    this.geometry = geometry;
    this.properties = properties;
    this.options = options;

    this.events = new MockEvents();
    this.controls = new MockCollection();
    this.geoObjects = new MockCollection();
  }
}
