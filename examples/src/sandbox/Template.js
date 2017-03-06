import React from 'react';
import { YMaps, Map } from 'react-yandex-maps';

const mapState = { center: [55.76, 37.64], zoom: 10 };

const Template = () => (
  <YMaps>
    <Map state={mapState} />
  </YMaps>
);

export default Template;
