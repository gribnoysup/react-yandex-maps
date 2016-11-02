// import Dummy from './sandbox/Dummy'

import IconCustomImage from './sandbox/popular/IconCustomImage'
import ObjectManager from './sandbox/popular/ObjectManager'
import SearchControl from './sandbox/popular/SearchControl'

import MapBasics from './sandbox/map/MapBasics'
import MapParams from './sandbox/map/MapParams'

import Placemark from './sandbox/geoobjects/Placemark'
import Polyline from './sandbox/geoobjects/Polyline'
import Rectangle from './sandbox/geoobjects/Rectangle'
import Polygon from './sandbox/geoobjects/Polygon'
import Circle from './sandbox/geoobjects/Circle'
import MultiStroke from './sandbox/geoobjects/MultiStroke'
import PolylineEditor from './sandbox/geoobjects/PolylineEditor'
import GeoObjectEvents from './sandbox/geoobjects/GeoObjectEvents'
import EventRollOver from './sandbox/geoobjects/EventRollOver'

const getSrc = (component) => {
  if (!component) return null

  const libSrc = '../../../../dist/react-yandex-maps'
  const libName = 'react-yandex-maps'
  return component.__src.replace(libSrc, libName).trim()
}

export default [{
//   label: {
//     ru: 'Пустышка',
//     en: 'Dummy'
//   },
//   component: Dummy,
//   src: getSrc(Dummy)
// }, {
  label: {
    ru: 'Популярные примеры',
    en: 'Popular examples'
  },
  isHeader: true
}, {
  component: IconCustomImage,
  src: getSrc(IconCustomImage),
  label: {
    ru: 'Собственное изображение для метки',
    en: 'Custom Placemark icon'
  }
}, {
  component: ObjectManager,
  src: getSrc(ObjectManager),
  label: {
    ru: 'Оптимальное добавление множества меток',
    en: 'Handling large number of placemarks'
  }
}, {
  component: SearchControl,
  src: getSrc(SearchControl),
  label: {
    ru: 'Поиск организаций',
    en: 'Company search'
  }
}, {
  label: {
    ru: 'Карта',
    en: 'Map'
  },
  isHeader: true
}, {
  component: MapBasics,
  src: getSrc(MapBasics),
  label: {
    ru: 'Создание и удаление',
    en: 'Putting the map on a page'
  }
}, {
  component: MapParams,
  src: getSrc(MapParams),
  label: {
    ru: 'Основные параметры',
    en: 'Setting and changing the map settings'
  }
}, {
  label: {
    ru: 'Геообъекты',
    en: 'GeoObjects'
  },
  isHeader: true
}, {
  component: Placemark,
  src: getSrc(Placemark),
  label: {
    ru: 'Метка',
    en: 'Placemark'
  }
}, {
  component: Polyline,
  src: getSrc(Polyline),
  label: {
    ru: 'Ломаная',
    en: 'Polylines'
  }
}, {
  component: Rectangle,
  src: getSrc(Rectangle),
  label: {
    ru: 'Прямоугольник',
    en: 'Rectangle'
  }
}, {
  component: Polygon,
  src: getSrc(Polygon),
  label: {
    ru: 'Многоугольник',
    en: 'Polygon'
  }
}, {
  component: Circle,
  src: getSrc(Circle),
  label: {
    ru: 'Круг',
    en: 'Circle'
  }
}, {
  component: MultiStroke,
  src: getSrc(MultiStroke),
  label: {
    ru: 'Множественная обводка',
    en: 'Multistroke outline'
  }
}, {
  component: PolylineEditor,
  src: getSrc(PolylineEditor),
  label: {
    ru: 'Редактор ломаной',
    en: 'Polyline editor'
  }
}, {
  component: GeoObjectEvents,
  src: getSrc(GeoObjectEvents),
  label: {
    ru: 'События геообъекта',
    en: 'Geo object events'
  }
}, {
  component: EventRollOver,
  src: getSrc(EventRollOver),
  label: {
    ru: 'Смена значка метки при наведении',
    en: 'Changing a placemark icon when hovering over it'
  }
}]
