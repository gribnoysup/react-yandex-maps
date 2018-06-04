/* global process */

import set from './util/set';

const defaultQuery = {
  lang: 'ru_RU',
  load: '',
  ns: '',
  mode: process.env.NODE_ENV !== 'production' ? 'debug' : 'release',
};

const YMapsPromiseMap = {};

export class YMaps {
  constructor(options) {
    const hash = Date.now().toString(32);

    this.options = options;
    this.namespace = options.query.ns;

    this.onload = YMaps.onloadCallback + '$$' + hash;
    this.onerror = YMaps.onerrorCallback + '$$' + hash;

    this.api;
    this.promise;
  }

  getApi() {
    return typeof window !== 'undefined' && this.namespace
      ? window[this.namespace]
      : this.api;
  }

  setApi(api) {
    return (this.api = api);
  }

  getPromise() {
    return this.namespace ? YMapsPromiseMap[this.namespace] : this.promise;
  }

  setPromise(promise) {
    return this.namespace
      ? (YMapsPromiseMap[this.namespace] = this.promise = promise)
      : (this.promise = promise);
  }

  load() {
    if (this.getApi()) return Promise.resolve(this.setApi(this.getApi()));
    if (this.getPromise()) return this.setPromise(this.getPromise());

    const query = Object.assign(
      {
        onload: this.onload,
        onerror: this.onerror,
      },
      defaultQuery,
      this.options.query
    );

    const queryString = Object.keys(query)
      .map(key => `${key}=${query[key]}`)
      .join('&');

    const baseUrl = YMaps.getBaseUrl(this.options.enterprise);

    const url = [baseUrl, this.options.version, '?' + queryString].join('/');

    const promise = new Promise((resolve, reject) => {
      window[this.onload] = ymaps => {
        delete window[this.onload];
        ymaps.loadModule = this.loadModule.bind(this);
        ymaps.ready(() => resolve(this.setApi(ymaps)));
      };

      window[this.onerror] = err => {
        delete window[this.onerror];
        reject(err);
      };

      this.fetchScript(url).catch(window[this.onerror]);
    });

    return this.setPromise(promise);
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
      this.getApi().modules.require(
        moduleName,
        Module => {
          set(this.api, moduleName, Module, true);
          resolve(Module);
        },
        reject,
        this.getApi()
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
