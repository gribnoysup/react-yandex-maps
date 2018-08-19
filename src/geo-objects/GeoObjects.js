import PropTypes from 'prop-types';
import { createGeoObject } from './createGeoObject';

const CircleGeometryPropTypes = PropTypes.arrayOf(
  PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)])
);

const CircleOptionsPropTypes = PropTypes.shape({});

export const Circle = createGeoObject('Circle', {
  /**
   * Circle geometry
   * https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Circle-docpage/#param-geometry
   */
  geometry: CircleGeometryPropTypes,
  defaultGeometry: CircleGeometryPropTypes,

  /**
   * Circle properties
   * https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Circle-docpage/#param-properties
   */
  properties: PropTypes.object,
  defaultProperties: PropTypes.object,

  /**
   * Circle options
   * https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Circle-docpage/#param-options
   */
  options: CircleOptionsPropTypes,
  defaultOptions: CircleOptionsPropTypes,
});

const PlacemarkGeometryPropTypes = PropTypes.arrayOf(PropTypes.number);

const PlacemarkOptionsPropTypes = PropTypes.shape({});

export const Placemark = createGeoObject('Placemark', {
  /**
   * Placemark geometry
   * https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Placemark-docpage/#param-geometry
   */
  geometry: PlacemarkGeometryPropTypes,
  defaultGeometry: PlacemarkGeometryPropTypes,

  /**
   * Placemark properties
   * https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Placemark-docpage/#param-properties
   */
  properties: PropTypes.object,
  defaultProperties: PropTypes.object,

  /**
   * Placemark options
   * https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Placemark-docpage/#param-options
   */
  options: PlacemarkOptionsPropTypes,
  defaultOptions: PlacemarkOptionsPropTypes,
});

const PolygonGeometryPropTypes = PropTypes.arrayOf(
  PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number))
);

const PolygonOptionsPropTypes = PropTypes.shape({});

export const Polygon = createGeoObject('Polygon', {
  /**
   * Polygon geometry
   * https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Polygon-docpage/#param-geometry
   */
  geometry: PolygonGeometryPropTypes,
  defaultGeometry: PolygonGeometryPropTypes,

  /**
   * Polygon properties
   * https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Polygon-docpage/#param-properties
   */
  properties: PropTypes.object,
  defaultProperties: PropTypes.object,

  /**
   * Polygon options
   * https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Polygon-docpage/#param-options
   */
  options: PolygonOptionsPropTypes,
  defaultOptions: PolygonOptionsPropTypes,
});

const PolylineGeometryPropTypes = PropTypes.arrayOf(
  PropTypes.arrayOf(PropTypes.number)
);

const PolylineOptionsPropTypes = PropTypes.shape({});

export const Polyline = createGeoObject('Polyline', {
  /**
   * Polyline geometry
   * https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Polyline-docpage/#param-geometry
   */
  geometry: PolylineGeometryPropTypes,
  defaultGeometry: PolylineGeometryPropTypes,

  /**
   * Polyline properties
   * https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Polyline-docpage/#param-properties
   */
  properties: PropTypes.object,
  defaultProperties: PropTypes.object,

  /**
   * Polyline options
   * https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Polyline-docpage/#param-options
   */
  options: PolylineOptionsPropTypes,
  defaultOptions: PolylineOptionsPropTypes,
});

const RectangleGeometryPropTypes = PropTypes.arrayOf(
  PropTypes.arrayOf(PropTypes.number)
);

const RectangleOptionsPropTypes = PropTypes.shape({});

export const Rectangle = createGeoObject('Rectangle', {
  /**
   * Rectangle geometry
   * https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Rectangle-docpage/#param-geometry
   */
  geometry: RectangleGeometryPropTypes,
  defaultGeometry: RectangleGeometryPropTypes,

  /**
   * Rectangle properties
   * https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Rectangle-docpage/#param-properties
   */
  properties: PropTypes.object,
  defaultProperties: PropTypes.object,

  /**
   * Rectangle options
   * https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Rectangle-docpage/#param-options
   */
  options: RectangleOptionsPropTypes,
  defaultOptions: RectangleOptionsPropTypes,
});
