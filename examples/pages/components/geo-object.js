import React from 'react';

import md from '../../components/md';
import Page from '../../components/Page';

const Example = () => (
  <Page>
    {md`
# GeoObject

~~~react-live
const UsingGeoObject = () => (
  <YMaps>
    <Map
      style={{ width: 320, height: 240 }}
      defaultState={{
        center: [55.76, 37.64],
        zoom: 7,
      }}
    >
      <Placemark defaultGeometry={[55.76, 37.6]} />
      <Polyline defaultGeometry={[[55.76, 37.6], [-80, 60], [-90, 50]]} />
      <Rectangle defaultGeometry={[[-80, 60], [55.76, 37.6]]} />
      <Circle defaultGeometry={[[55.76, 37.6], 100000]} />
      <Polygon defaultGeometry={[
        // Coordinates of the outer contour.
        [[-80, 60], [-90, 50], [-60, 40], [-80, 60]],
        // Coordinates of the inner contour.
        [[-90, 80], [-90, 30], [-20, 40], [-90, 80]]
      ]} />
      {/*<GeoObject
        defaultGeometry={{
          type: "LineString",
          coordinates: [[-80, 60], [-90, 50], [-60, 40], [-80, 60]]
        }}
      />*/}
    </Map>
  </YMaps>
);

render(<UsingGeoObject />);
~~~
    `}
  </Page>
);

export default Example;
