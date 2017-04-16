import React from 'react';
import styled from 'styled-components';
import { HashRouter as Router, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import DemoProvider from './components/DemoProvider';

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const NavContainer = styled.div`
  border-right: 1px solid rgba(0, 0, 0, .1);
`;

class App extends React.Component {
  state = { active: [] };

  constructor(...args) {
    super(...args);
    this.onNavClick = this.onNavClick.bind(this);
  }

  onNavClick(event) {
    const id = event.target.id;

    this.setState(prevState => {
      const index = prevState.active.indexOf(id);

      if (index === -1) {
        return { active: prevState.active.concat(id) };
      } else {
        return prevState.active.splice(index, 1);
      }
    });
  }

  render() {
    const { active } = this.state;

    return (
      <Router>
        <AppContainer>

          <NavContainer>
            <Navigation
              id="Map"
              name="Map"
              onClick={this.onNavClick}
              active={active.indexOf('Map') !== -1}
              path="/sandbox/map"
              routes={[
                { name: 'Putting the map on a page', to: '/map-basics' },
                {
                  name: 'Setting and changing the map settings',
                  to: '/map-params',
                },
                { name: 'Resizing the map', to: '/fill-container' },
              ]}
            />

            <Navigation
              id="GeoObjects"
              name="GeoObjects"
              onClick={this.onNavClick}
              active={active.indexOf('GeoObjects') !== -1}
              path="/sandbox/geoobjects"
              routes={[
                { name: 'Placemark', to: '/placemark' },
                {
                  name: 'Setting a custom placemark image',
                  to: '/icon-custom-image',
                },
                { name: 'Polylines', to: '/polyline' },
                { name: 'Rectangle', to: '/rectangle' },
                { name: 'Polygon', to: '/polygon' },
                { name: 'Circle', to: '/circle' },
              ]}
            />

            <Navigation
              id="ObjectManager"
              name="ObjectManager"
              onClick={this.onNavClick}
              active={active.indexOf('ObjectManager') !== -1}
              path="/sandbox/objectmanager"
              routes={[
                {
                  name: 'Adding a large number of objects to the map',
                  to: '/objectmanager',
                },
              ]}
            />

            <Navigation
              id="Routing"
              name="Routing"
              onClick={this.onNavClick}
              active={active.indexOf('Routing') !== -1}
              path="/sandbox/routing"
              routes={[
                {
                  name: 'Building a route',
                  to: '/router',
                },
              ]}
            />
          </NavContainer>

          <Route
            path="/sandbox/:demoGroup/:demoName"
            component={DemoProvider}
          />

        </AppContainer>
      </Router>
    );
  }
}

export default App;
