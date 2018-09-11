export default [
  {
    root: true,
    title: 'React Yandex Maps',
    children: [
      {
        uid: '',
        title: 'Getting Started',
      },
      {
        uid: 'migration-guide',
        title: 'Migration Guide',
      },
      {
        uid: 'basic-principles',
        title: 'Basic Principles',
        group: true,
        children: [
          {
            title: 'Modular Approach',
            uid: 'modular-approach',
          },
          {
            title: 'Controlled and Uncontrolled Components',
            uid: 'controlled-uncontrolled-components',
          },
          {
            title: 'React Context. Provider and Consumer Components',
            uid: 'react-context-provider-consumer',
          },
        ],
      },
      {
        uid: 'geo-objects',
        title: 'Geo Objects',
        group: true,
        children: [
          {
            title: 'Map',
            uid: 'map',
          },
          {
            title: 'GeoObject',
            uid: 'geo-object',
          },
          {
            title: 'Circle',
            uid: 'circle',
          },
          {
            title: 'Clusterer',
            uid: 'clusterer',
          },
          {
            title: 'Placemark',
            uid: 'placemark',
          },
          {
            title: 'Polygon',
            uid: 'polygon',
          },
          {
            title: 'Polyline',
            uid: 'polyline',
          },
          {
            title: 'Rectangle',
            uid: 'rectangle',
          },
          {
            title: 'ObjectManager',
            uid: 'object-manager',
          },
        ],
      },
      {
        uid: 'controls',
        title: 'Controls',
        group: true,
        children: [
          {
            title: 'Button',
            uid: 'button',
          },
          {
            title: 'FullscreenControl',
            uid: 'fullscreen-control',
          },
          {
            title: 'GeolocationControl',
            uid: 'geolocation-control',
          },
          {
            title: 'ListBox',
            uid: 'listbox-control',
          },
          {
            title: 'ListBoxItem',
            uid: 'listboxitem-control',
          },
          {
            title: 'RouteButton',
            uid: 'route-button',
          },
          {
            title: 'RouteEditor',
            uid: 'route-editor',
          },
          {
            title: 'RoutePanel',
            uid: 'route-panel',
          },
          {
            title: 'RulerControl',
            uid: 'ruler-control',
          },
          {
            title: 'SearchControl',
            uid: 'search-control',
          },
          {
            title: 'TrafficControl',
            uid: 'traffic-control',
          },
          {
            title: 'TypeSelector',
            uid: 'type-selector',
          },
          {
            title: 'ZoomControl',
            uid: 'zoom-control',
          },
        ],
      },
      {
        uid: 'provider-consumer',
        title: 'YMaps Context',
        group: true,
        children: [
          {
            title: 'Yandex.Maps API Provider Component',
            uid: 'ymaps-provider-component',
          },
          {
            title: 'Yandex.Maps API Consumer HOC',
            uid: 'with-ymaps-hoc',
          },
        ],
      },
    ],
  },
];
