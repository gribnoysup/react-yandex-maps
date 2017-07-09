import React from 'react';
import { YMaps, Map } from 'react-yandex-maps';

const mapState = { center: [55.76, 37.64], zoom: 10 };

class MapBasics extends React.Component {
  state = { showMap: true };

  toggleMap() {
    const { showMap } = this.state;
    this.setState({ showMap: !showMap });
  }

  render() {
    const { showMap } = this.state;

    return (
      <YMaps>
        <div id="map-basics">
          {showMap &&
            // When initializing the map, you must specify
            // its center and the zoom factor.
            <Map state={mapState} />}

          {/* To destroy it, just unmount component */}
          <button onClick={() => this.toggleMap()}>
            {showMap ? 'Delete map' : 'Show map'}
          </button>
        </div>
      </YMaps>
    );
  }
}

export default MapBasics;
