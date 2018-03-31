import set from './util/set';

const defaultQuery = {
  lang: 'ru_RU',
  load: '',
  ns: '',
};

export class YMaps {
  constructor({ enterprise, version, query }) {
    this.options = { enterprise, version, query };

    this.api =
      typeof window !== 'undefined' && query.ns !== ''
        ? window[query.ns] || null
        : null;

    this._promise = null;

    this.load = () => {
      if (this.api !== null) return Promise.resolve(this.api);
      if (this._promise !== null) return this._promise;

      const {
        onerrorCallback: onload,
        onloadCallback: onerror,
        getBaseUrl,
      } = YMaps;

      const query = Object.assign(
        { onload, onerror },
        defaultQuery,
        this.options.query
      );

      const queryString = Object.keys(query)
        .map(key => `${key}=${query[key]}`)
        .join('&');

      const baseUrl = getBaseUrl(this.options.enterprise);

      const url = [baseUrl, this.options.version, '?' + queryString].join('/');

      this._promise = new Promise((resolve, reject) => {
        window[onload] = ymaps => {
          window[onload] = null;
          ymaps.loadModule = YMaps.loadModule.bind(this, ymaps);
          resolve((this.api = ymaps));
        };

        window[onerror] = err => {
          window[onerror] = null;
          reject(err);
        };

        YMaps.fetchScript(url).catch(window[onerror]);
      });

      return this._promise;
    };
  }
}

YMaps._name = '__react-yandex-maps__';

YMaps.onloadCallback = '__yandex-maps-api-onload__';

YMaps.onerrorCallback = '__yandex-maps-api-onerror__';

YMaps.getBaseUrl = function getBaseUrl(isEnterprise) {
  return `https://${isEnterprise ? 'enterprise.' : ''}api-maps.yandex.ru`;
};

YMaps.fetchScript = function fetchScript(url) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');

    script.type = 'text/javascript';
    script.onload = resolve;
    script.onerror = reject;
    script.src = url;
    script.async = 'async';

    document.head.appendChild(script);
  });
};

YMaps.loadModule = function loadModule(ymaps, moduleName) {
  return new Promise((resolve, reject) => {
    ymaps.modules.require(
      moduleName,
      Module => {
        set(ymaps, moduleName, Module);
        resolve(Module);
      },
      reject,
      ymaps
    );
  });
};
