// import Dummy from './sandbox/Dummy'

import IconCustomImage from './sandbox/popular/IconCustomImage'
import ObjectManager from './sandbox/popular/ObjectManager'
import SearchControl from './sandbox/popular/SearchControl'

import MapBasics from './sandbox/map/MapBasics'
import MapParams from './sandbox/map/MapParams'

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
    en: 'Optimized handling of large number of placemarks'
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
}]
