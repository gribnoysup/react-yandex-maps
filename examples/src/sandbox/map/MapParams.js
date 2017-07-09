import React from 'react';
import { YMaps, Map } from 'react-yandex-maps';

const mapState = {
  center: [55.76, 37.64],
  zoom: 10,
  type: 'yandex#satellite',
  bounds: undefined,
};

class MapParams extends React.Component {
  state = Object.assign({}, mapState);

  setCenter(prevState) {
    return Object.assign({}, prevState, { center: [57.767265, 40.925358] });
  }

  setBounds(prevState) {
    return Object.assign({}, prevState, { bounds: [[37, 38], [39, 40]] });
  }

  setType(prevState) {
    return Object.assign({}, prevState, { type: 'yandex#publicMapHybrid' });
  }

  setDefault(prevState) {
    return Object.assign({}, prevState, mapState);
  }

  updateState(fn) {
    return () => this.setState(fn);
  }

  render() {
    return (
      <YMaps>
        <div>
          {/* Map parameters can be set via props */}
          <Map state={this.state} />

          {/* To change map parameters, just update map props */}
          <button onClick={this.updateState(this.setCenter)}>
            Change center
          </button>
          <button onClick={this.updateState(this.setBounds)}>
            Change boundaries
          </button>
          <button onClick={this.updateState(this.setType)}>Change type</button>
          <button onClick={this.updateState(this.setDefault)}>
            Reset to default
          </button>
        </div>
      </YMaps>
    );
  }
}

export default MapParams;
