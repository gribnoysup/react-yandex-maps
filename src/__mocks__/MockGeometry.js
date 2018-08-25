import MockMap from './MockMap';

export default class MockGeometry extends MockMap {
  constructor(value) {
    super(value);
    this.setCoordinates = jest.fn(this.setCoordinates.bind(this));
    this.setRadius = jest.fn(this.setRadius.bind(this));
  }

  setCoordinates() {}

  setRadius() {}
}
