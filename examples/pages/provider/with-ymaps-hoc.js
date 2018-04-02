import React from 'react';

import md from '../../components/md';
import Page from '../../components/Page';
import PropsTable from '../../components/PropsTable';

const propsTable = (
  <PropsTable
    componentProps={[
      {
        name: 'onLoad',
        type: '(ymaps: YandexMapsApi) => any',
        description:
          'Callback that will be called when Yandex Maps API and requested modules (if any) are finished loading',
      },
      {
        name: 'onError',
        type: '(err: Error) => any',
        description:
          'Callback that will be called when error happenes during API loading',
      },
      {
        name: 'modules',
        type: 'string[]',
        defaultValue: [],
        description: (
          <span>
            Array of{' '}
            <a
              href="https://tech.yandex.com/maps/doc/jsapi/2.1/dg/concepts/modules-docpage/"
              target="__blank"
            >
              Yandex Maps API module
            </a>{' '}
            names
          </span>
        ),
      },
    ]}
  />
);

const Example = () => (
  <Page>
    {md`
# \`withYMaps\` Higher Order Component

This library comes with a HOC that can give any component in your application an
access to Yandex Maps API.

~~~react-live
class LengthPrinter extends React.Component {
  constructor() {
    this.state = { routeLength: null };
  }

  componentDidMount() {
    this._isMounted = true;

    this.props.ymaps.route(this.props.route).then(route => {
      if (this._isMounted === true) {
        this.setState({
          routeLength: route.getHumanLength().replace('&#160;', ' '),
        });
      }
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return this.state.routeLength == null ? (
      <p>Loading route...</p>
    ) : (
      <p>This route is {this.state.routeLength} long</p>
    );
  }
}

const ConnectedLengthPrinter = withYMaps(LengthPrinter, true, ['route']);

render(
  <YMaps query={{ lang: 'en_RU' }}>
    <ConnectedLengthPrinter route={['Moscow', 'St. Petersburg']} />
  </YMaps>
);
~~~

## Props

${propsTable}

A few things to keep in mind:

* By default wrapped component (\`LengthPrinter\` in the example above) wouldn't
  wait until API is ready to consume. This behavior could be changed with the
  second argument of the \`withYMaps\` HOC (as shown in the example above)
* By default \`react-yandex-maps\` loads only the small core of Yandex Maps API,
  so if you need access to something that is not included in the core of Yandex
  Maps, you need to explicitly specify this. There are several ways to do this:
  with the third argument of the \`withYMaps\` HOC (as shown in the example
  above), with the \`modules\` prop of connected component, or by providing
  required module in \`query.load\` prop of \`<YMaps />\` component
    `}
  </Page>
);

export default Example;
