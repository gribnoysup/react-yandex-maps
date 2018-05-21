import React from 'react';

import md from '../../components/md';
import Page from '../../components/Page';
import PropsTable from '../../components/PropsTable';

const propsTable = (
  <PropsTable
    componentProps={[
      {
        name: 'version',
        type: 'string',
        defaultValue: '2.1',
        description: 'Yandex.Maps API version',
      },
      {
        name: 'enterprise',
        type: 'boolean',
        defaultValue: false,
        description:
          'Load commercial versions of the API (changes Yandex.Maps API base url)',
      },
      {
        name: 'query',
        type: 'object',
        defaultValue: {
          lang: 'ru_RU',
          load: '',
          ns: '',
        },
        description: 'Yandex.Maps API query parameters',
      },
      {
        name: 'preload',
        type: 'boolean',
        defaultValue: false,
        description: 'Load API as soon as provider is mounted on the page',
      },
    ]}
  />
);

const markdown = md`
# \`YMaps\` Provider Component

This component is used to provide YMaps components with Yandex.Maps API context.
You always need to add this component somewhere above your maps in the component
tree.

As \`<YMaps />\` provides an API to fetch Yandex.Maps API, this is the component
you can use to customize your api query:

~~~react-live
const Application = () => (
  <YMaps query={{ lang: 'en_RU' }}>Application with YMaps Provider</YMaps>
);

render(<Application />);
~~~

## Props

${propsTable}

Now you can add map components anywhere in your component tree below
\`<YMaps />\` and they will have access to anything needed to get Yandex.Maps
API.

Don't be afraid to add provider higher in your application tree, Yandex.Maps API
wouldn't be fetched until some map component will request it. If this behavior
is undesirable, you can use \`preload\` prop to tell provider to fetch Yandex
Maps API as soon as it mounts in the tree.

> #WARN# Keep in mind that by default provider will fetch only the critical part
> of Yandex.Maps API, basically just a bootstrap code with [module fetching
> API][0]. After that every map component will handle fetching corresponding
> part of Yandex Maps API automatically.

If you want to load more parts of the Yandex.Maps right away you can use
\`load\` parameter in component \`query\` prop to define what exactly you want
to fetch.

[All query parameters][1], except for \`onload\` and \`onerror\`, from Yandex
Maps API documentation are supported by \`query\` prop. Don't worry, you still
can get access to \`onLoad\` and \`onError\` on all connected components

[0]: https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/modules.require-docpage/
[1]: https://tech.yandex.com/maps/doc/jsapi/2.1/dg/concepts/load-docpage/
`;

const Example = () => <Page>{markdown}</Page>;

export default Example;
