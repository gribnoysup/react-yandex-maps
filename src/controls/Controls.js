import PropTypes from 'prop-types';
import { createControl } from './createControl';

export const Button = createControl(
  'Button',
  process.env.NODE_ENV !== 'production' &&
    {
      /* TODO: PropTypes */
    }
);

export const FullscreenControl = createControl(
  'FullscreenControl',
  process.env.NODE_ENV !== 'production' &&
    {
      /* TODO: PropTypes */
    }
);

export const GeolocationControl = createControl(
  'GeolocationControl',
  process.env.NODE_ENV !== 'production' &&
    {
      /* TODO: PropTypes */
    }
);

export const ListBox = createControl(
  'ListBox',
  process.env.NODE_ENV !== 'production' &&
    {
      /* TODO: PropTypes */
    }
);

export const ListBoxItem = createControl(
  'ListBoxItem',
  process.env.NODE_ENV !== 'production' &&
    {
      /* TODO: PropTypes */
    }
);

export const RouteButton = createControl(
  'RouteButton',
  process.env.NODE_ENV !== 'production' && {
    /**
     * If set to true, all modules needed to work with routes will be loaded lazily when the user opens the panel the first time.
     * https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/control.RouteButton-docpage/#control.RouteButton__param-parameters.lazy
     */
    lazy: PropTypes.bool,
  }
);

export const RouteEditor = createControl(
  'RouteEditor',
  process.env.NODE_ENV !== 'production' &&
    {
      /* TODO: PropTypes */
    }
);

export const RoutePanel = createControl(
  'RoutePanel',
  process.env.NODE_ENV !== 'production' &&
    {
      /* TODO: PropTypes */
    }
);

export const RulerControl = createControl(
  'RulerControl',
  process.env.NODE_ENV !== 'production' &&
    {
      /* TODO: PropTypes */
    }
);

export const SearchControl = createControl(
  'SearchControl',
  process.env.NODE_ENV !== 'production' &&
    {
      /* TODO: PropTypes */
    }
);

export const TrafficControl = createControl(
  'TrafficControl',
  process.env.NODE_ENV !== 'production' &&
    {
      /* TODO: PropTypes */
    }
);

export const TypeSelector = createControl(
  'TypeSelector',
  process.env.NODE_ENV !== 'production' && {
    /**
     * Array of constructors for map types or keys. If the parameter is omitted, the item is added to the standard set of map types.
     * https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/control.TypeSelector-docpage/#control.TypeSelector__param-parameters.mapTypes
     */
    mapTypes: PropTypes.arrayOf(
      PropTypes.oneOf(['yandex#map', 'yandex#satellite', 'yandex#hybrid'])
    ),
    defaultMapTypes: PropTypes.arrayOf(
      PropTypes.oneOf(['yandex#map', 'yandex#satellite', 'yandex#hybrid'])
    ),
  }
);

export const ZoomControl = createControl(
  'ZoomControl',
  process.env.NODE_ENV !== 'production' &&
    {
      /* TODO: PropTypes */
    }
);
