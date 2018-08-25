import MockEvents from './MockEvents';
import MockCollection from './MockCollection';
import MockMap from './MockMap';
import MockGeometry from './MockGeometry';

export default class MockGeoObject {
  constructor(geometry, properties, options) {
    this.geometry = new MockGeometry(geometry);
    this.properties = new MockMap(properties);
    this.options = new MockMap(options);

    this.events = new MockEvents();
    this.controls = new MockCollection();
    this.geoObjects = new MockCollection();
  }
}
