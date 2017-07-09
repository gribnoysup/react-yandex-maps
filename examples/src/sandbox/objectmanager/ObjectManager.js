import React from 'react';
import { YMaps, Map, ObjectManager } from 'react-yandex-maps';

import data from './data.json';

const mapState = { center: [55.76, 37.64], zoom: 10 };

const ObjectManagerDemo = () =>
  <YMaps>
    <Map state={mapState}>
      <ObjectManager
        options={{
          clusterize: true,
          gridSize: 32,
        }}
        objects={{
          preset: 'islands#greenDotIcon',
        }}
        clusters={{
          preset: 'islands#greenClusterIcons',
        }}
        features={data.features}
      />
    </Map>
  </YMaps>;

export default ObjectManagerDemo;
