const CONFIG = {
  host: 'api-maps.yandex.ru',
  version: '2.1',
  enabledAPIParams: ['lang', 'apikey', 'coordorder', 'load', 'mode'],
  options: {
    onload: '__api__onload',
    onerror: '__api__onerror',
    lang: 'ru_RU',
    coordorder: 'latlong',
    load: 'package.full',
    mode: 'debug',
    ns: '',
  },
}

let loadApiPromise

function fetchScript(url) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.onload = resolve
    script.onerror = reject
    script.src = url
    document.head.appendChild(script)
  })
}

function generateURL(options) {
  const params = Object.assign({}, CONFIG.options)

  Object.keys(options)
      .filter((key) => CONFIG.enabledAPIParams.indexOf(key) !== -1)
      .forEach((key) => params[key] = options[key])

  const queryString = Object.keys(params).map((key) => `${key}=${params[key]}`).join('&')

  return `https://${CONFIG.host}/${CONFIG.version}/?${queryString}`
}

export default function loadApi(options) {
  if (loadApiPromise) {
    return loadApiPromise
  }

  loadApiPromise = new Promise((resolve, reject) => {
    window[CONFIG.options.onload] = (ymaps) => {
      resolve(ymaps)
      window[CONFIG.options.onload] = null
    }

    window[CONFIG.options.onerror] = (error) => {
      reject(error)
      window[CONFIG.options.onerror] = null
    }

    fetchScript(generateURL(options))
  })

  return loadApiPromise
}
