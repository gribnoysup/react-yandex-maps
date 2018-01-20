export class YMaps {
  static _name = '__react-yandex-maps__';

  static onloadCallback = '__yandex-maps-api-onload__';

  static onerrorCallback = '__yandex-maps-api-onerror__';

  static getBaseUrl(isEnterprise) {
    return `https://${isEnterprise ? 'enterprise.' : ''}api-maps.yandex.ru`;
  }

  static fetchScript(url) {
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

  static loadModule(ymaps, moduleName, addons = []) {
    return new Promise((resolve, reject) => {
      ymaps.modules.require(
        [moduleName].concat(addons),
        (Module, ...addons) => {
          ymaps[moduleName] = Module;
          resolve(Module, ...addons);
        },
        reject,
        ymaps
      );
    });
  }

  constructor({ enterprise, version, query }) {
    this.options = { enterprise, version, query };

    this.api =
      typeof window !== 'undefined' && query.ns !== ''
        ? window[query.ns] || null
        : null;

    this._promise = null;
    this.subscriptions = [];
  }

  subscribe = fn => {
    this.subscriptions.push(fn);
    return () => this.unsubscribe(fn);
  };

  unsubscribe = fn => {
    this.subscriptions.splice(this.subscriptions.indexOf(fn), 1);
  };

  update = () => {
    this.subscriptions.forEach(fn => fn());
  };

  load = () => {
    if (this.api !== null) return Promise.resolve(this.api);
    if (this._promise !== null) return this._promise;

    const {
      onerrorCallback: onload,
      onloadCallback: onerror,
      getBaseUrl,
    } = YMaps;

    const query = { ...this.options.query, onload, onerror };

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
