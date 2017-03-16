const onload = '__react-yandex-maps-onload';
const onerror = '__react-yandex-maps-onerror';

const callbacks = { onload, onerror };

const mode = process.env.NODE_ENV === 'development' ? 'debug' : 'release';
const ns = '__react-yandex-maps-api';
const lang = 'ru_RU';

function fetchScript(url) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');

    script.type = 'text/javascript';
    script.onload = resolve;
    script.onerror = reject;
    script.src = url;
    script.async = 'async';

    document.head.appendChild(script);
  });
}

class YandexMapsApi {
  constructor() {
    this.api = typeof window !== 'undefined' ? window[ns] || null : null;
    this.promise = null;
  }

  getBaseUrl(version = '2.1', enterprise = false) {
    const protocol = 'https:';
    const host = enterprise
      ? 'enterprise.api-maps.yandex.ru'
      : 'api-maps.yandex.ru';

    return `${protocol}//${host}/${version}/`;
  }

  getQuery(query) {
    const options = Object.assign({ ns, lang, mode }, query, callbacks);

    return Object.keys(options)
      .reduce(
        (prev, key) => {
          if (typeof options[key] === 'undefined') return prev;
          return prev.concat(`${key}=${options[key]}`);
        },
        []
      )
      .join('&');
  }

  load(query, version, enterprise) {
    // TODO: Somehow separate what options are passed
    //       and provide differet api instances?
    //
    //       Is this behaviour needed?
    if (this.promise) return this.promise;

    this.promise = new Promise((resolve, reject) => {
      const baseUrl = this.getBaseUrl(version, enterprise);
      const urlQuery = this.getQuery(query);

      window[onload] = api => {
        resolve(api);
        window[onload] = null;
      };

      window[onerror] = error => {
        reject(error);
        window[onerror] = null;
      };

      fetchScript(`${baseUrl}?${urlQuery}`).catch(reject);
    });

    return this.promise;
  }

  get(query, version, enterprise) {
    // TODO: If yandex maps are loaded already, provide a way to use it
    if (this.api) Promise.resolve(this.api);

    return this.load(query, version, enterprise).then(api => this.api = api);
  }
}

export default new YandexMapsApi();
