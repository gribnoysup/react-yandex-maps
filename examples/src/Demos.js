import IconCustomImage from './sandbox/popular/IconCustomImage'
import ObjectManager from './sandbox/popular/ObjectManager'
import SearchControl from './sandbox/popular/SearchControl'

const getSrc = (component) => {
  const libSrc = '../../../../dist/react-yandex-maps'
  const libName = 'react-yandex-maps'
  // return '```\n' + component.__src.replace(libSrc, libName).trim() + '\n```'
  return component.__src.replace(libSrc, libName).trim()
}

export default [{
  label: {
    ru_RU: 'Популярные примеры',
    en_EN: ''
  },
  isHeader: true
},{
  component: IconCustomImage,
  src: getSrc(IconCustomImage),
  label: {
    ru_RU: 'Собственное изображение для метки',
    en_EN: ''
  }
}, {
  component: ObjectManager,
  src: getSrc(ObjectManager),
  label: {
    ru_RU: 'Оптимальное добавление множества меток',
    en_EN: ''
  }
}, {
  component: SearchControl,
  src: getSrc(SearchControl),
  label: {
    ru_RU: 'Поиск организаций',
    en_EN: ''
  }
}]
