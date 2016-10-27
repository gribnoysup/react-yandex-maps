# Yandex Maps API bindings for React 

## Install

```shell
npm install -save https://github.com/gribnoysup/react-yandex-maps.git
```

## Avaliable components

```js
import YMaps from 'react-yandex-maps'

const {  
  Map,
  Clusterer,
  GeoObject,
  ObjectManager,
  Placemark,
  LineString,
  Rectangle,
  Polygon,
  Circle
} = YMaps
```

## Examples

### Map basics

https://tech.yandex.ru/maps/jsbox/2.1/mapbasics

```js
import YMaps from 'react-yandex-maps'

export default function MapBasicsExample({showMap}) {
  if (!showMap) return null

  return (
    <YMaps.Map 
      state={{
        center: [55.76, 37.64],
        zoom: 10
      }}
      options={{
        searchControlProvider: 'yandex#search'
      }}
    />
  )
}
```

### Placemark

https://tech.yandex.ru/maps/jsbox/2.1/placemark

```js
import YMaps from 'react-yandex-maps'

const placemarks = [{
  geometry: {
    type: 'Point',
    coordinates: [55.684758, 37.738521]
  },
  properties: {
    balloonContent: 'цвет <strong>воды пляжа бонди</strong>'
  },
  options: {
    preset: 'islands#icon',
    iconColor: '#0095b6'
  }
}, {
  geometry: {
    type: 'Point',
    coordinates: [55.833436, 37.715175]
  },
  properties: {
    balloonContent: '<strong>серобуромалиновый</strong> цвет'
  },
  options: {
    preset: 'islands#dotIcon',
    iconColor: '#735184'
  }
}, {
  geometry: {
    type: 'Point',
    coordinates: [55.782392, 37.614924]
  },
  properties: {
    balloonContent: 'цвет <strong>детской неожиданности</strong>'
  },
  options: {
    preset: 'islands#circleDotIcon',
    iconColor: 'yellow'
  }
}, {
  geometry: {
    type: 'Point',
    coordinates: [55.826479, 37.487208]
  },
  properties: {
    balloonContent: 'цвет <strong>фэйсбука</strong>'
  },
  options: {
    preset: 'islands#governmentCircleIcon',
    iconColor: '#3b5998'
  }
}, {
  geometry: {
    type: 'Point',
    coordinates: [55.790139, 37.814052]
  },
  properties: {
    balloonContent: 'цвет <strong>голубой</strong>',
    iconCaption: 'Очень длиннный, но невероятно интересный текст'
  },
  options: {
    preset: 'islands#blueCircleDotIconWithCaption',
    iconCaptionMaxWidth: '50'
  }
}]

export default function PlacemarkExample() {
  return (
    <YMaps.Map
      state={{
        center: [55.76, 37.64],
        zoom: 10
      }}
      options={{
        searchControlProvider: 'yandex#search'
      }}
    >
      <YMaps.GeoObject
        geometry={{
          type: "Point",
          coordinates: [55.8, 37.8]
        }}
        properties={{
          iconContent: 'Я тащусь',
          hintContent: 'Ну давай уже тащи'
        }}
        options={{
          preset: 'islands#blackStretchyIcon',
          draggable: true
        }}
      />
      {placemarks.map(({geometry, properties, options}, i) =>
        <YMaps.Placemark
          key={i}
          geometry={geometry}
          properties={properties}
          options={options}
        />
      )}
    </YMaps.Map>
  )
}
```

### TODO:

- More propTypes
- Add tests
- More docs and examples