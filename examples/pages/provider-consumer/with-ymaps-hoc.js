import React from 'react';

import md from '../../components/md';
import Page from '../../components/Page';
import PropsTable from '../../components/PropsTable';

const modulesDescription = (
  <span>
    Array of{' '}
    <a
      href="https://tech.yandex.com/maps/doc/jsapi/2.1/dg/concepts/modules-docpage/"
      target="__blank"
      rel="noopener"
    >
      Yandex.Maps API module
    </a>{' '}
    names
  </span>
);

const argumentsTable = (
  <PropsTable
    componentProps={[
      {
        name: 'component',
        type: 'ReactComponent',
        description: 'React component that will get access to Yandex.Maps API',
      },
      {
        name: 'waitForApi',
        type: 'boolean',
        defaultValue: false,
        description:
          'Should HOC wait for API to be fetched before rendering the wrapped component',
      },
      {
        name: 'modules',
        type: 'string[]',
        defaultValue: [],
        description: modulesDescription,
      },
    ]}
  />
);

const propsTable = (
  <PropsTable
    componentProps={[
      {
        name: 'onLoad',
        type: '(ymaps: YandexMapsApi) => any',
        description:
          'Callback that will be called when Yandex.Maps API and requested modules (if any) are finished loading',
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
        description: modulesDescription,
      },
    ]}
  />
);

const markdown = md`
# Higher-Order Component Creator Function

This library comes with a HOC creator function that can give any component in
your application an access to Yandex.Maps API.

#### \`withYMaps: (component: ReactComponent, waitForApi: boolean, modules: string[]) => ReactComponent\`

${argumentsTable}

Creating HOC with this function will give your components access to Yandex.Maps
API object. You can use this API in your components in various ways.

> #INFO# Keep in mind that by default \`react-yandex-maps\` loads only the small
> core of Yandex.Maps API, so if you need access to something that is not
> included in the core of Yandex.Maps, you need to explicitly specify this.
> There are several ways to do this: with the third argument of the
> \`withYMaps\` HOC (as shown in the example above), with the \`modules\` prop
> of connected component, or by providing required module in \`query.load\` prop
> of \`<YMaps />\` component

In the example below we are creating a HOC that will load Yandex.Maps Route API,
and them we are using this API inside our \`LengthPrinter\` component to display
route length on the screen

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
    <ConnectedLengthPrinter route={['Moscow, Russia', 'Berlin, Germany']} />
  </YMaps>
);
~~~

> #WARN# Don't forget that any component from this library (even those created
> with the HOC creator function) need to be wrapped in \`YMaps\` provider
> component

## Higher Order Component Props

${propsTable}
`;

const Example = () => <Page>{markdown}</Page>;

export default Example;
