import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

import styled from 'styled-components';

import { Map, YMapsProvider } from 'react-yandex-maps';

import MapBasicsExample from './examples/MapBasics.example';

const scope = { Map, YMapsProvider };

const Body = styled.main``;

class SideNav extends React.Component {
  render() {
    return null;
  }
}

class Welcome extends React.Component {
  render() {
    return null;
  }
}

class Example extends React.Component {
  render() {
    return (
      <LiveProvider code={MapBasicsExample} scope={scope}>
        <LiveEditor />
        <LiveError />
        <LivePreview />
      </LiveProvider>
    );
  }
}

const NotFound = () => <Redirect to="/" />;

export const App = () => (
  <Router>
    <Body>
      <SideNav />
      <Switch>
        <Route exact path="/" component={Example} />
        <Route path="/:category/:example" component={Example} />
        {/* 404 */}
        <Route component={NotFound} />
      </Switch>
    </Body>
  </Router>
);
