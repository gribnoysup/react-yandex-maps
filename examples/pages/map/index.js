import React from 'react';

import md from '../../components/md';
import Page from '../../components/Page';

const Example = () => (
  <Page>
    {md`
# Creating and Deleting

Compared to [the usual way][0] of attaching and detaching Yandex Maps on your
page, you don't need to worry about doing this manually. Just add [\`YMaps\`][1]
component and \`Map\` component anywhere in your application ad you are good to
go.

~~~react-live
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

const ClustererCreate = () =>
  <YMaps>
    <Map defaultState={mapState} style={{ width: 320, height: 240 }}>
      <Clusterer
        options={{
          preset: 'islands#invertedVioletClusterIcons',
          groupByCoordinates: false,
          clusterDisableClickZoom: true,
          clusterHideIconOnBalloonOpen: false,
          geoObjectHideIconOnBalloonOpen: false,
        }}
      >
        {points.map((coordinates, idx) =>
          <Placemark
            key={idx}
            geometry={coordinates}
            properties={getPointData(idx)}
            options={getPointOptions()}
          />
        )}
      </Clusterer>
    </Map>
  </YMaps>;

render(<ClustererCreate />);
~~~

[0]: https://tech.yandex.com/maps/jsbox/2.1/mapbasics
[1]: /provider/ymaps-provider-component
    `}
  </Page>
);

export default Example;
