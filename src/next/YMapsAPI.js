export class YMapsAPI {
  static onloadCallback = '__react-yandex-maps-onload';

  static onerrorCallback = '__react-yandex-maps-onerror';

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

  constructor({ enterprise, version, query }) {
    this.options = { enterprise, version, query };

    this.api =
      typeof window !== 'undefined' && query.ns !== ''
        ? window[query.ns] || null
        : null;

    this.promise = null;
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
    if (this.promise !== null) return this.promise;

    const {
      onerrorCallback: onload,
      onloadCallback: onerror,
      getBaseUrl,
    } = YMapsAPI;

    const query = { ...this.options.query, onload, onerror };

    const queryString = Object.keys(query)
      .map(key => `${key}=${query[key]}`)
      .join('&');

    const baseUrl = getBaseUrl(this.options.enterprise);

    const url = [baseUrl, this.options.version, '?' + queryString].join('/');

    this.promise = new Promise((resolve, reject) => {
      window[onload] = ymaps => {
        window[onload] = null;
        resolve((this.api = ymaps));
      };

      window[onerror] = err => {
        window[onerror] = null;
        reject(err);
      };

      YMapsAPI.fetchScript(url).catch(window[onerror]);
    });

    return this.promise;
  };
}
