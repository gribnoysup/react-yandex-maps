# react-yandex-maps

[Yandex Maps API](https://tech.yandex.ru/maps/doc/jsapi/2.1/quick-start/tasks/quick-start-docpage/)
bindings for React

## Install

```shell
npm install --save https://github.com/gribnoysup/react-yandex-maps.git
```

## Basic Usage

```js
// with yandex maps api

window.ymaps.ready(function () {
  const myMap = new window.ymaps.Map('map', {
    center: [55.751574, 37.573856],
    zoom: 9
  }, {
    searchControlProvider: 'yandex#search'
  })


  const myPlacemark = new window.ymaps.Placemark([55.751574, 37.573856], {
    hintContent: 'Собственный значок метки',
    balloonContent: 'Это красивая метка'
  }, {
    iconLayout: 'default#image',
    iconImageHref: 'images/myIcon.gif',
    iconImageSize: [30, 42],
    iconImageOffset: [-3, -42]
  })

  myMap.geoObjects.add(myPlacemark)
})


// with react-yandex-maps

import YMaps from 'react-yandex-maps'

const BasicMap = () => (
  <YMaps.Map
    state={{
      center: [55.76, 37.64],
      zoom: 10
    }}
    options={{
      searchControlProvider: 'yandex#search'
    }}
  >
    <YMaps.Placemark
      geometry={{
        coordinates: [55.826479, 37.487208]
      }}
      properties={{
        hintContent: 'Собственный значок метки',
        balloonContent: 'Это красивая метка'
      }}
      options={{
        iconLayout: 'default#image',
        iconImageHref: 'images/myIcon.gif',
        iconImageSize: [30, 42],
        iconImageOffset: [-3, -42]
      }}
    />
  </YMaps.Map>
)
```

Supported Yandex.Maps Objects:

```js
Map,
Clusterer,
GeoObject,
ObjectManager,
Placemark,
Polyline,
Rectangle,
Polygon,
Circle
```

All Objects events are avaliable, just use camelCase event names instead of
default ones (for example `geometrychange -> onGeometryChange`):

```js
function handleEventSomehow() {/* more code */}

// with yandex maps api:

const circle = new window.ymaps.GeoObject({
  geometry: {
    type: "Circle",
    coordinates: [55.76, 37.64],
    radius: 10000
  }
})

circle.events.add('geometrychange', handleEventSomehow)

// with react-yandex-maps
import YMaps from 'react-yandex-maps'

const Circle = () => (
  <YMaps.Circle
    geometry={{
      coordinates: [55.76, 37.64],
      radius: 10000
    }}
    onGeometryChange={handleEventSomehow}
  />
)
```

## More examples

To look at examples clone this repo, `cd` to repo folder and run `npm start`

```shell
git clone https://github.com/gribnoysup/react-yandex-maps.git
cd ./react-yandex-maps
npm start
```

## TODO:

- More propTypes
- Add tests
- More docs and examples

## Thanks

Thanks to @effrenus and his [yandex-map-react](https://github.com/effrenus/yandex-map-react)
for inspiration

Thanks to [create-react-app](https://github.com/facebookincubator/create-react-app)
team for making examples so easy to make
