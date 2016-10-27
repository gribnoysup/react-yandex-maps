import loadApi from './loadApi'

class Api {
  constructor() {
    this.api = (typeof window !== 'undefined' && window.ymaps) ? window.ymaps : null
  }

  setAPI(instance) {
    this.api = instance
    return this.api
  }

  getAPI() {
    return this.api
  }

  isAvaliable() {
    return Boolean(this.api)
  }

  load(options = {}) {
    return loadApi(options)
      .then((instance) => {
        this.api = instance
        return instance
      })
  }
}

export default new Api()
