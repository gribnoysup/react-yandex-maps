import React from 'react';
import { YMaps, Map, Route, Point } from 'react-yandex-maps';

const mapState = {
  center: [55.7463968, 37.4631461],
  zoom: 11,
};

const routeStyle = {
  fontSize: 11,
  maxHeight: 300,
  overflow: 'auto',
  marginTop: 20,
  padding: 10,
  border: '1px solid #aaa',
};

class Router extends React.Component {
  state = { description: [], additionalPoint: false };

  onRouteReady = route => {
    if (!route) return;

    /**
     * Analyzing the route by segments.
     * A segment is a section of the route up
     * to the next change of direction.
     * In order to obtain the route segments, you first need to obtain
     * each path of the route separately.
     * The entire route is divided into two paths:
     * 1) from Krylatsky Hills street to the station "Kuntsevskaya";
     * 2) from "Kuntsevskaya" station to "Pionerskaya".
     */

    const description = ['Here we go'];
    const paths = route.getPaths();

    for (let i = 0, len = paths.getLength(); i < len; i++) {
      const way = paths.get(i);
      const segments = way.getSegments();

      segments.forEach(segment => {
        const street = segment.getStreet();
        const action = segment.getHumanAction();
        const length = segment.getLength();

        description.push(
          `Going ${action}${street ? ' to ' + street : ''} passing ${length} m.`
        );
      });
    }

    description.push('Stopping.');

    this.setState({ description });
  };

  onClick = () => {
    this.setState(prevState => {
      return {
        additionalPoint: !prevState.additionalPoint,
      };
    });
  };

  render() {
    return (
      <YMaps query={{ lang: 'en_RU' }}>
        <div>

          <button onClick={this.onClick}>
            Toggle additional point
          </button>

          <Map state={mapState}>
            {/**
              * As the route building is async operation, instanceRef will be called
              * when route ready or changes with new route instance
              */}
            <Route instanceRef={this.onRouteReady}>
              {/**
                * Adding driving directions to the map
                * from Krylatsky Hills street to the metro station "Kuntsevskaya"
                * via the station "Molodezhnaya" and then to the metro station "Pionerskaya".
                * Route points can be set in 2 ways:
                *
                * as a string or as an array of geocoordinates.
                */}
              <Point value="Krylatsky Hills st., Moscow" />
              {/**
                * Metro "Molodezhnaya" is a through point
                * (passing through this point, but not stopping at it).
                */}
              <Point
                type="viaPoint"
                value="Moscow, Molodezhnaya metro station"
              />
              {this.state.additionalPoint &&
                <Point value="Moscow, Perovo metro station" />}
              <Point value={[55.731272, 37.447198]} />
              <Point value="Pionerskaya metro station, Moscow" />
            </Route>
          </Map>

          <div style={routeStyle}>
            {this.state.description.map((line, i) => <div key={i}>{line}</div>)}
          </div>

        </div>
      </YMaps>
    );
  }
}

export default Router;
