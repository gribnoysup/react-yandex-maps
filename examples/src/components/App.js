import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
} from 'react-router-dom';

import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

import md from 'react-markings';

import styled from 'styled-components';

import { Map, YMapsProvider } from 'react-yandex-maps';

const CATEGORIES = {
  map: {
    title: 'Map',
    examples: {
      'map-basics': {
        title: 'Creating and deleting',
        description: md`
Basic example showing how to add or remove Map component on the page.
        `,
        exampleSource: () => import('./examples/MapBasics.example'),
      },
      'using-addons': {
        title: 'Using Addons',
        description: md`
This library is built with performance in mind. To avoid performance hit for
downloading big bundle of Yandex Maps, we are downloading only the critical
bootstrap code first and then load every module asyncrounosly and on demand.

The downsite of this is that you have to explicitly specify what addons you need
for all of your Yandex Maps objects.

You can use special \`addons\` prop to achieve this.
        `,
        exampleSource: () => import('./examples/UsingAddons.example'),
      },
    },
  },
};

const Body = styled.main``;

const NAVIGATION = Object.keys(CATEGORIES).reduce((acc, category) => {
  return acc.concat(
    Object.keys(CATEGORIES[category].examples).map(
      example => `/${category}/${example}`
    )
  );
}, []);

class SideNav extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          {NAVIGATION.map(url => (
            <li key={url}>
              <Link to={url}>{url}</Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

class Welcome extends React.Component {
  render() {
    return null;
  }
}

class Example extends React.Component {
  constructor() {
    super();

    this.state = { exampleSource: null, timeout: false };

    this._timeout = null;
    this._isMounted = false;
  }

  static isExampleExists(params = {}) {
    const { category, example } = params;

    return (
      category &&
      example &&
      !!CATEGORIES[category] &&
      !!CATEGORIES[category].examples[example]
    );
  }

  fetchExample(fetch) {
    this._timeout = setTimeout(() => {
      if (this._isMounted === true) this.setState({ timeout: true });
    }, 300);

    fetch().then(source => {
      clearTimeout(this._timeout);
      if (this._isMounted === true) this.setState({ exampleSource: source });
    });
  }

  componentDidMount() {
    this._isMounted = true;

    if (Example.isExampleExists(this.props.match.params) === true) {
      const { category, example } = this.props.match.params;
      this.fetchExample(CATEGORIES[category].examples[example].exampleSource);
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
    clearTimeout(this._timeout);
  }

  render() {
    if (Example.isExampleExists(this.props.match.params) === false) {
      return <Redirect to="/" />;
    } else {
      const { exampleSource, timeout } = this.state;
      const { category, example } = this.props.match.params;

      const { title: categoryTitle } = CATEGORIES[category];
      const { title, description } = CATEGORIES[category].examples[example];

      return (
        <React.Fragment>
          <h1>
            {categoryTitle} / {title}
          </h1>
          {description}
          {exampleSource !== null ? (
            <LiveProvider code={exampleSource} scope={{ Map, YMapsProvider }}>
              <LiveEditor />
              <LiveError />
              <LivePreview />
            </LiveProvider>
          ) : timeout === true ? (
            'Loading...'
          ) : null}
        </React.Fragment>
      );
    }
  }
}

const NotFound = () => <Redirect to="/" />;

export const App = () => (
  <Router>
    <Body>
      <SideNav />
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route path="/:category/:example" component={Example} />
        {/* 404 */}
        <Route component={NotFound} />
      </Switch>
    </Body>
  </Router>
);
