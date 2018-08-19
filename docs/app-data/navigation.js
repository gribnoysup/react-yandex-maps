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
        uid: 'components',
        title: 'Components',
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
            title: 'ObjectManager',
            uid: 'object-manager',
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
    ],
  },
];
