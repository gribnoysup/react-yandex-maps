export default [
  {
    root: true,
    title: 'React Yandex Maps',
    children: [
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
        uid: 'provider-consumer',
        title: 'Context Provider and Consumer',
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
        ],
      },
    ],
  },
];
