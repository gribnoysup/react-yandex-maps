# react-yandex-maps

[Yandex Maps API](https://tech.yandex.ru/maps/doc/jsapi/2.1/quick-start/tasks/quick-start-docpage/)
bindings for React

## Install

```shell
npm install --save react-yandex-maps
```

## Components

### Basic components

- `<YMaps />` - provides child components with yandex maps api via context
- `<Map />` - Map instance
- `<Clusterer />` - Clusterer instance
- `<ObjectManager />` - ObjectManager instance
- `<GeoObject />` - generic GeoObject instance
- `<Control />` - generic Control instance

### GeoObject shorthands

- `<Placemark />`
- `<Polyline />`
- `<Rectangle />`
- `<Polygon />`
- `<Circle />`

### Control shorthands

- `<Button />`
- `<FullscreenControl />`
- `<GeolocationControl />`
- `<RouteEditor />`
- `<RulerControl />`
- `<SearchControl />`
- `<TrafficControl />`
- `<TypeSelector />`
- `<ZoomControl />`
- `<ListBox />`
- `<ListBoxItem />`

## Basic Usage (compared to [yandex maps quick start guide](https://tech.yandex.com/maps/doc/jsapi/2.1/quick-start/tasks/quick-start-docpage/))

### With Yandex Maps API

```js
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
```

### With react-yandex-maps

```js
import { YMaps, Map, Placemark } from 'react-yandex-maps';

const mapState = { center: [55.76, 37.64], zoom: 10 };

const MyPlacemark = () => (
  <YMaps>
    <Map state={mapState}>

      <Placemark
        geometry={{
          coordinates: [55.751574, 37.573856]
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

    </Map>
  </YMaps>
);
```

## Enterprise

`react-yandex-maps` library also supports enterprise version of Yandex.Maps API:

```jsx
  <YMaps
    enterprise
    query={{
      apikey: '// your api key here',
    }}
  />
```

## Events

All Objects events are available, just use camelCase event names instead of
default ones (for example `geometrychange -> onGeometryChange`):

### With Yandex Maps API

```js
function onGeometryChange() {/* more code */}

const circle = new window.ymaps.GeoObject({
  geometry: {
    type: "Circle",
    coordinates: [55.76, 37.64],
    radius: 10000
  }
})

circle.events.add('geometrychange', handleEventSomehow)
```

### With react-yandex-maps

```js
import { Circle } from 'react-yandex-maps'

const CircleWithEvents = ({onGeometryChange}) => (
  <Circle
    geometry={{
      coordinates: [55.76, 37.64],
      radius: 10000
    }}
    onGeometryChange={onGeometryChange}
  />
)
```

## The `instanceRef` Callback Attribute

`react-yandex-maps` supports a special attribute, that [works similar]
(https://facebook.github.io/react/docs/refs-and-the-dom.html) to React `ref`
attribute. `react-yandex-maps` will call the `instanceRef` callback with the
YandexMap Object instance when the component mounts, and call it with `null`
when it unmounts.

## More Examples

You can go to https://gribnoysup.github.io/react-yandex-maps/ to look at examples,
or clone this repo, `cd` to repo folder and run `npm start`

```shell
git clone https://github.com/gribnoysup/react-yandex-maps.git
cd ./react-yandex-maps
npm install && npm run examples
```

## TODO

- [ ] Add tests
- [ ] Add more propTypes
- [ ] Add more examples

## Acknowledgements

Thanks to [@effrenus](https://github.com/effrenus/) and his [yandex-map-react](https://github.com/effrenus/yandex-map-react) for inspiration
