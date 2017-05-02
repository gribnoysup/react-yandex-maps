import React from 'react';
import { YMaps, Map, Clusterer, Placemark } from 'react-yandex-maps';

import points from './points.json';

const mapState = {
  center: [55.751574, 37.573856],
  zoom: 9,
  behaviors: ['default', 'scrollZoom'],
};

const getPointData = index => {
  return {
    balloonContentBody: 'placemark <strong>balloon ' + index + '</strong>',
    clusterCaption: 'placemark <strong>' + index + '</strong>',
  };
};

const getPointOptions = () => {
  return {
    preset: 'islands#violetIcon',
  };
};

const ClustererCreate = () => (
  <YMaps>
    <Map state={mapState}>
      <Clusterer
        options={{
          preset: 'islands#invertedVioletClusterIcons',
          groupByCoordinates: false,
          clusterDisableClickZoom: true,
          clusterHideIconOnBalloonOpen: false,
          geoObjectHideIconOnBalloonOpen: false,
        }}
      >
        {points.map((coordinates, idx) => (
          <Placemark
            key={idx}
            geometry={{ coordinates }}
            properties={getPointData(idx)}
            options={getPointOptions()}
          />
        ))}
      </Clusterer>
    </Map>
  </YMaps>
);

export default ClustererCreate;
