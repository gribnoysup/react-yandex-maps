/* global process */

import set from './util/set';

const defaultQuery = {
  lang: 'ru_RU',
  load: '',
  ns: '',
  mode: process.env.NODE_ENV !== 'production' ? 'debug' : 'release',
};

export class YMaps {
  constructor(options) {
    this.options = options;

    this.api =
      typeof window !== 'undefined' && options.query.ns !== ''
        ? window[options.query.ns] || null
        : null;

    this._promise = null;
  }

  load() {
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
        ymaps.loadModule = this.loadModule.bind(this);
        resolve((this.api = ymaps));
      };

      window[onerror] = err => {
        window[onerror] = null;
        reject(err);
      };

      this.fetchScript(url).catch(window[onerror]);
    });

    return this._promise;
  }

  fetchScript(url) {
    return new Promise((resolve, reject) => {
      this.script = document.createElement('script');

      this.script.type = 'text/javascript';
      this.script.onload = resolve;
      this.script.onerror = reject;
      this.script.src = url;
      this.script.async = 'async';

      document.head.appendChild(this.script);
    });
  }

  loadModule(moduleName) {
    return new Promise((resolve, reject) => {
      this.api.modules.require(
        moduleName,
        Module => {
          set(this.api, moduleName, Module);
          resolve(Module);
        },
        reject,
        this.api
      );
    });
  }
}

YMaps._name = '__react-yandex-maps__';

YMaps.onloadCallback = '__yandex-maps-api-onload__';

YMaps.onerrorCallback = '__yandex-maps-api-onerror__';

YMaps.getBaseUrl = function getBaseUrl(isEnterprise) {
  return `https://${isEnterprise ? 'enterprise.' : ''}api-maps.yandex.ru`;
};
