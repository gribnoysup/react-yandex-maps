import React from 'react';
import { YMaps, Map } from 'react-yandex-maps';

const mapState = { center: [55.755768, 37.617671], zoom: 10 };

class FillContainer extends React.Component {
  state = { width: 300, height: 200, small: true };

  resizeMap(prevProps) {
    if (prevProps.small) {
      return { width: 350, height: 300, small: false };
    } else {
      return { width: 300, height: 200, small: true };
    }
  }

  render() {
    const { width, height, small } = this.state;

    return (
      <YMaps>
        <div id="map-basics">
          <button onClick={() => this.setState(this.resizeMap)}>
            {small ? 'Expand' : 'Collapse'}
          </button>

          <Map state={mapState} width={width} height={height} />
        </div>
      </YMaps>
    );
  }
}

export default FillContainer;
