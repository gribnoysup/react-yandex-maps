import PropTypes from 'prop-types';
import { createGeoObject } from './createGeoObject';

const GeoObjectGeometryPropTypes = PropTypes.shape({
  type: PropTypes.oneOf([
    'Point',
    'LineString',
    'Rectangle',
    'Polygon',
    'Circle',
  ]).isRequired,
  coordinates: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.number),
    PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
    PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number))),
  ]).isRequired,
  radius: PropTypes.number,
});

export const GeoObject = createGeoObject(
  'GeoObject',
  process.env.NODE_ENV !== 'production' && {
    /**
     * GeoObject feature.geometry
     * https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/GeoObject-docpage/#param-feature.geometry
     */
    geometry: GeoObjectGeometryPropTypes,
    defaultGeometry: GeoObjectGeometryPropTypes,

    /**
     * GeoObject feature.properties
     * https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/GeoObject-docpage/#param-feature.properties
     */
    properties: PropTypes.shape({}),
    defaultProperties: PropTypes.shape({}),

    /**
     * GeoObject options
     * https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/GeoObject-docpage/#param-options
     */
    options: PropTypes.shape({}),
    defaultOptions: PropTypes.shape({}),
  },
  Constructor => {
    /**
     * The only difference between GeoObject and all the other,
     * more specific GeoObject constructors (like Placemark, Circle,
     * or Polyline) is the way in which the arguments are passed to
     * the constructor. GeoObject expects `feature` with `geometry` and
     * `properties` keys and all the other GeoObject constructors
     * expect `geometry` and `properties` as separate arguments
     *
     * We will hack around this difference with our custom constructor.
     * That way we can completely reuse GeoObject static methods.
     */
    const __Constructor = Constructor;

    function GeoObjectConstructor(geometry, properties, options) {
      __Constructor.call(this, { geometry, properties }, options);
    }

    GeoObjectConstructor.prototype = Constructor.prototype;

    return GeoObjectConstructor;
  }
);

const CircleGeometryPropTypes = PropTypes.arrayOf(
  PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)])
);

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
  properties: PropTypes.shape({}),
  defaultProperties: PropTypes.shape({}),

  /**
   * Circle options
   * https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Circle-docpage/#param-options
   */
  options: PropTypes.shape({}),
  defaultOptions: PropTypes.shape({}),
});

const PlacemarkGeometryPropTypes = PropTypes.arrayOf(PropTypes.number);

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
  properties: PropTypes.shape({}),
  defaultProperties: PropTypes.shape({}),

  /**
   * Placemark options
   * https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Placemark-docpage/#param-options
   */
  options: PropTypes.shape({}),
  defaultOptions: PropTypes.shape({}),
});

const PolygonGeometryPropTypes = PropTypes.arrayOf(
  PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number))
);

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
  properties: PropTypes.shape({}),
  defaultProperties: PropTypes.shape({}),

  /**
   * Polygon options
   * https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Polygon-docpage/#param-options
   */
  options: PropTypes.shape({}),
  defaultOptions: PropTypes.shape({}),
});

const PolylineGeometryPropTypes = PropTypes.arrayOf(
  PropTypes.arrayOf(PropTypes.number)
);

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
  properties: PropTypes.shape({}),
  defaultProperties: PropTypes.shape({}),

  /**
   * Polyline options
   * https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Polyline-docpage/#param-options
   */
  options: PropTypes.shape({}),
  defaultOptions: PropTypes.shape({}),
});

const RectangleGeometryPropTypes = PropTypes.arrayOf(
  PropTypes.arrayOf(PropTypes.number)
);

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
  properties: PropTypes.shape({}),
  defaultProperties: PropTypes.shape({}),

  /**
   * Rectangle options
   * https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Rectangle-docpage/#param-options
   */
  options: PropTypes.shape({}),
  defaultOptions: PropTypes.shape({}),
});
