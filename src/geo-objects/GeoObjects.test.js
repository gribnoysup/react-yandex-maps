import {
  GeoObject,
  Placemark,
  Polyline,
  Rectangle,
  Polygon,
  Circle,
} from './GeoObjects';

describe('GeoObject', () => {
  it('should be a GeoObject', () => {
    expect(GeoObject.displayName).toMatchInlineSnapshot(
      `"withParentContext(withYMapsContext(withYMaps(GeoObject)))"`
    );
  });
});

describe('Placemark', () => {
  it('should be a Placemark', () => {
    expect(Placemark.displayName).toMatchInlineSnapshot(
      `"withParentContext(withYMapsContext(withYMaps(Placemark)))"`
    );
  });
});

describe('Polyline', () => {
  it('should be a Polyline', () => {
    expect(Polyline.displayName).toMatchInlineSnapshot(
      `"withParentContext(withYMapsContext(withYMaps(Polyline)))"`
    );
  });
});

describe('Rectangle', () => {
  it('should be a Rectangle', () => {
    expect(Rectangle.displayName).toMatchInlineSnapshot(
      `"withParentContext(withYMapsContext(withYMaps(Rectangle)))"`
    );
  });
});

describe('Polygon', () => {
  it('should be a Polygon', () => {
    expect(Polygon.displayName).toMatchInlineSnapshot(
      `"withParentContext(withYMapsContext(withYMaps(Polygon)))"`
    );
  });
});

describe('Circle', () => {
  it('should be a Circle', () => {
    expect(Circle.displayName).toMatchInlineSnapshot(
      `"withParentContext(withYMapsContext(withYMaps(Circle)))"`
    );
  });
});
