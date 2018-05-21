const pages = [
  {
    title: 'Getting Started',
    path: '/',
  },
  {
    link: false,
    title: 'Components',
    path: '/components',
    pages: [
      {
        title: 'Map',
        path: '/map',
      },
      {
        title: 'GeoObject',
        path: '/geo-object',
      },
    ],
  },
  {
    link: false,
    title: 'Context Provider and Consumer',
    path: '/provider-consumer',
    pages: [
      {
        title: 'Yandex.Maps API Provider Component',
        path: '/ymaps-provider-component',
      },
      {
        title: 'Yandex.Maps API Consumer HOC',
        path: '/with-ymaps-hoc',
      },
    ],
  },
];

export default pages;
