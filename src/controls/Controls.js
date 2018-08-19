import PropTypes from 'prop-types';
import { createControl } from './createControl';

export const Button = createControl('Button', {
  /* TODO: PropTypes */
});

export const FullscreenControl = createControl('FullscreenControl', {
  /* TODO: PropTypes */
});

export const GeolocationControl = createControl('GeolocationControl', {
  /* TODO: PropTypes */
});

export const ListBox = createControl('ListBox', {
  /* TODO: PropTypes */
});

export const ListBoxItem = createControl('ListBoxItem', {
  /* TODO: PropTypes */
});

export const RouteButton = createControl('RouteButton', {
  /**
   * If set to true, all modules needed to work with routes will be loaded lazily when the user opens the panel the first time.
   * https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/control.RouteButton-docpage/#control.RouteButton__param-parameters.lazy
   */
  lazy: PropTypes.bool,
});

export const RouteEditor = createControl('RouteEditor', {
  /* TODO: PropTypes */
});

export const RoutePanel = createControl('RoutePanel', {
  /* TODO: PropTypes */
});

export const RulerControl = createControl('RulerControl', {
  /* TODO: PropTypes */
});

export const SearchControl = createControl('SearchControl', {
  /* TODO: PropTypes */
});

export const TrafficControl = createControl('TrafficControl', {
  /* TODO: PropTypes */
});

export const TypeSelector = createControl('TypeSelector', {
  /**
   * Array of constructors for map types or keys. If the parameter is omitted, the item is added to the standard set of map types.
   * https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/control.TypeSelector-docpage/#control.TypeSelector__param-parameters.mapTypes
   */
  mapTypes: PropTypes.oneOf([
    'yandex#map',
    'yandex#satellite',
    'yandex#hybrid',
  ]),
});

export const ZoomControl = createControl('ZoomControl', {
  /* TODO: PropTypes */
});
