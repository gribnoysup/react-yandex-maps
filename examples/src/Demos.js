import IconCustomImage from './sandbox/popular/IconCustomImage'
import ObjectManager from './sandbox/popular/ObjectManager'
import SearchControl from './sandbox/popular/SearchControl'

const getSrc = (component) => {
  const libSrc = '../../../../dist/react-yandex-maps'
  const libName = 'react-yandex-maps'
  return component.__src.replace(libSrc, libName).trim()
}

export default [{
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
}]
