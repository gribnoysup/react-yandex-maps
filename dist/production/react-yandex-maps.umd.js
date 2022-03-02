!(function(t, e) {
  'object' == typeof exports && 'undefined' != typeof module
    ? e(exports, require('react'))
    : 'function' == typeof define && define.amd
    ? define(['exports', 'react'], e)
    : e((t.ReactYandexMaps = {}), t.React);
})(this, function(t, e) {
  e = e && e.hasOwnProperty('default') ? e.default : e;
  var n =
    'undefined' != typeof globalThis
      ? globalThis
      : 'undefined' != typeof window
      ? window
      : 'undefined' != typeof global
      ? global
      : 'undefined' != typeof self
      ? self
      : {};
  function o(t) {
    return t &&
      t.__esModule &&
      Object.prototype.hasOwnProperty.call(t, 'default')
      ? t.default
      : t;
  }
  function r(t, e) {
    return t((e = { exports: {} }), e.exports), e.exports;
  }
  var i = 'function' == typeof Symbol && Symbol.for,
    s = i ? Symbol.for('react.element') : 60103,
    a = i ? Symbol.for('react.portal') : 60106,
    c = i ? Symbol.for('react.fragment') : 60107,
    u = i ? Symbol.for('react.strict_mode') : 60108,
    p = i ? Symbol.for('react.profiler') : 60114,
    f = i ? Symbol.for('react.provider') : 60109,
    l = i ? Symbol.for('react.context') : 60110,
    d = i ? Symbol.for('react.async_mode') : 60111,
    h = i ? Symbol.for('react.concurrent_mode') : 60111,
    y = i ? Symbol.for('react.forward_ref') : 60112,
    m = i ? Symbol.for('react.suspense') : 60113,
    v = i ? Symbol.for('react.suspense_list') : 60120,
    b = i ? Symbol.for('react.memo') : 60115,
    _ = i ? Symbol.for('react.lazy') : 60116,
    g = i ? Symbol.for('react.block') : 60121,
    j = i ? Symbol.for('react.fundamental') : 60117,
    O = i ? Symbol.for('react.responder') : 60118,
    w = i ? Symbol.for('react.scope') : 60119;
  function E(t) {
    if ('object' == typeof t && null !== t) {
      var e = t.$$typeof;
      switch (e) {
        case s:
          switch ((t = t.type)) {
            case d:
            case h:
            case c:
            case p:
            case u:
            case m:
              return t;
            default:
              switch ((t = t && t.$$typeof)) {
                case l:
                case y:
                case _:
                case b:
                case f:
                  return t;
                default:
                  return e;
              }
          }
        case a:
          return e;
      }
    }
  }
  function C(t) {
    return E(t) === h;
  }
  var P = {
    AsyncMode: d,
    ConcurrentMode: h,
    ContextConsumer: l,
    ContextProvider: f,
    Element: s,
    ForwardRef: y,
    Fragment: c,
    Lazy: _,
    Memo: b,
    Portal: a,
    Profiler: p,
    StrictMode: u,
    Suspense: m,
    isAsyncMode: function(t) {
      return C(t) || E(t) === d;
    },
    isConcurrentMode: C,
    isContextConsumer: function(t) {
      return E(t) === l;
    },
    isContextProvider: function(t) {
      return E(t) === f;
    },
    isElement: function(t) {
      return 'object' == typeof t && null !== t && t.$$typeof === s;
    },
    isForwardRef: function(t) {
      return E(t) === y;
    },
    isFragment: function(t) {
      return E(t) === c;
    },
    isLazy: function(t) {
      return E(t) === _;
    },
    isMemo: function(t) {
      return E(t) === b;
    },
    isPortal: function(t) {
      return E(t) === a;
    },
    isProfiler: function(t) {
      return E(t) === p;
    },
    isStrictMode: function(t) {
      return E(t) === u;
    },
    isSuspense: function(t) {
      return E(t) === m;
    },
    isValidElementType: function(t) {
      return (
        'string' == typeof t ||
        'function' == typeof t ||
        t === c ||
        t === h ||
        t === p ||
        t === u ||
        t === m ||
        t === v ||
        ('object' == typeof t &&
          null !== t &&
          (t.$$typeof === _ ||
            t.$$typeof === b ||
            t.$$typeof === f ||
            t.$$typeof === l ||
            t.$$typeof === y ||
            t.$$typeof === j ||
            t.$$typeof === O ||
            t.$$typeof === w ||
            t.$$typeof === g))
      );
    },
    typeOf: E,
  };
  r(function(t, e) {}),
    r(function(t) {
      t.exports = P;
    }),
    Object,
    Object,
    Object,
    (function() {
      try {
        if (!Object.assign) return !1;
        var t = new String('abc');
        if (((t[5] = 'de'), '5' === Object.getOwnPropertyNames(t)[0]))
          return !1;
        for (var e = {}, n = 0; n < 10; n++)
          e['_' + String.fromCharCode(n)] = n;
        if (
          '0123456789' !==
          Object.getOwnPropertyNames(e)
            .map(function(t) {
              return e[t];
            })
            .join('')
        )
          return !1;
        var o = {};
        return (
          'abcdefghijklmnopqrst'.split('').forEach(function(t) {
            o[t] = t;
          }),
          'abcdefghijklmnopqrst' === Object.keys(Object.assign({}, o)).join('')
        );
      } catch (t) {
        return !1;
      }
    })() && Object;
  var R = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
  function S() {}
  function M() {}
  Function.call.bind(Object.prototype.hasOwnProperty),
    (M.resetWarningCache = S);
  var x = r(function(t) {
      t.exports = (function() {
        function t(t, e, n, o, r, i) {
          if (i !== R) {
            var s = new Error(
              'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
            );
            throw ((s.name = 'Invariant Violation'), s);
          }
        }
        function e() {
          return t;
        }
        t.isRequired = t;
        var n = {
          array: t,
          bigint: t,
          bool: t,
          func: t,
          number: t,
          object: t,
          string: t,
          symbol: t,
          any: t,
          arrayOf: e,
          element: t,
          elementType: t,
          instanceOf: e,
          node: t,
          objectOf: e,
          oneOf: e,
          oneOfType: e,
          shape: e,
          exact: e,
          checkPropTypes: M,
          resetWarningCache: S,
        };
        return (n.PropTypes = n), n;
      })();
    }),
    T = o(
      r(function(t, e) {
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = function(t) {
            return (
              t.displayName ||
              t.name ||
              ('string' == typeof t && t.length > 0 ? t : 'Unknown')
            );
          });
      })
    ),
    $ = function(t, e) {
      var n = {};
      for (var o in t) -1 === e.indexOf(o) && (n[o] = t[o]);
      return n;
    },
    A = '__global_unique_id__',
    k = function() {
      return (n[A] = (n[A] || 0) + 1);
    },
    U = function() {},
    z = r(function(t, n) {
      n.__esModule = !0;
      var o = i(x),
        r = i(k);
      function i(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function s(t, e) {
        if (!(t instanceof e))
          throw new TypeError('Cannot call a class as a function');
      }
      function a(t, e) {
        if (!t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
      }
      function c(t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function, not ' +
              typeof e
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(t, e)
              : (t.__proto__ = e));
      }
      i(U),
        (n.default = function(t, n) {
          var i,
            u,
            p = '__create-react-context-' + (0, r.default)() + '__',
            f = (function(t) {
              function e() {
                var n, o, r, i;
                s(this, e);
                for (var c = arguments.length, u = Array(c), p = 0; p < c; p++)
                  u[p] = arguments[p];
                return (
                  (n = o = a(this, t.call.apply(t, [this].concat(u)))),
                  (o.emitter =
                    ((r = o.props.value),
                    (i = []),
                    {
                      on: function(t) {
                        i.push(t);
                      },
                      off: function(t) {
                        i = i.filter(function(e) {
                          return e !== t;
                        });
                      },
                      get: function() {
                        return r;
                      },
                      set: function(t, e) {
                        (r = t),
                          i.forEach(function(t) {
                            return t(r, e);
                          });
                      },
                    })),
                  a(o, n)
                );
              }
              return (
                c(e, t),
                (e.prototype.getChildContext = function() {
                  var t;
                  return ((t = {})[p] = this.emitter), t;
                }),
                (e.prototype.componentWillReceiveProps = function(t) {
                  if (this.props.value !== t.value) {
                    var e = this.props.value,
                      o = t.value,
                      r = void 0;
                    ((i = e) === (s = o)
                    ? 0 !== i || 1 / i == 1 / s
                    : i != i && s != s)
                      ? (r = 0)
                      : ((r = 'function' == typeof n ? n(e, o) : 1073741823),
                        0 != (r |= 0) && this.emitter.set(t.value, r));
                  }
                  var i, s;
                }),
                (e.prototype.render = function() {
                  return this.props.children;
                }),
                e
              );
            })(e.Component);
          f.childContextTypes =
            (((i = {})[p] = o.default.object.isRequired), i);
          var l = (function(e) {
            function n() {
              var t, o;
              s(this, n);
              for (var r = arguments.length, i = Array(r), c = 0; c < r; c++)
                i[c] = arguments[c];
              return (
                (t = o = a(this, e.call.apply(e, [this].concat(i)))),
                (o.state = { value: o.getValue() }),
                (o.onUpdate = function(t, e) {
                  0 != ((0 | o.observedBits) & e) &&
                    o.setState({ value: o.getValue() });
                }),
                a(o, t)
              );
            }
            return (
              c(n, e),
              (n.prototype.componentWillReceiveProps = function(t) {
                var e = t.observedBits;
                this.observedBits = null == e ? 1073741823 : e;
              }),
              (n.prototype.componentDidMount = function() {
                this.context[p] && this.context[p].on(this.onUpdate);
                var t = this.props.observedBits;
                this.observedBits = null == t ? 1073741823 : t;
              }),
              (n.prototype.componentWillUnmount = function() {
                this.context[p] && this.context[p].off(this.onUpdate);
              }),
              (n.prototype.getValue = function() {
                return this.context[p] ? this.context[p].get() : t;
              }),
              (n.prototype.render = function() {
                return ((t = this.props.children), Array.isArray(t) ? t[0] : t)(
                  this.state.value
                );
                var t;
              }),
              n
            );
          })(e.Component);
          return (
            (l.contextTypes = (((u = {})[p] = o.default.object), u)),
            { Provider: f, Consumer: l }
          );
        }),
        (t.exports = n.default);
    });
  o(z);
  var B = o(
      r(function(t, n) {
        n.__esModule = !0;
        var o = i(e),
          r = i(z);
        function i(t) {
          return t && t.__esModule ? t : { default: t };
        }
        (n.default = o.default.createContext || r.default),
          (t.exports = n.default);
      })
    ),
    D = B(null),
    F = function(t) {
      var n = T(t);
      return function(o) {
        return e.createElement(D.Consumer, null, function(r) {
          if (null === r)
            throw new Error(
              "Couldn't find Yandex.Maps API in the context. Make sure that <" +
                n +
                ' /> is inside <YMaps /> provider'
            );
          return e.createElement(t, Object.assign({}, { ymaps: r }, o));
        });
      };
    },
    L = B(null),
    W = function(t) {
      return function(n) {
        return e.createElement(L.Consumer, null, function(o) {
          return e.createElement(t, Object.assign({}, { parent: o }, n));
        });
      };
    };
  function N(t, n, o) {
    void 0 === n && (n = !1), void 0 === o && (o = []);
    var r = (function(r) {
      function i() {
        r.call(this), (this.state = { loading: !0 }), (this._isMounted = !1);
      }
      return (
        r && (i.__proto__ = r),
        ((i.prototype = Object.create(r && r.prototype)).constructor = i),
        (i.prototype.componentDidMount = function() {
          var t = this;
          (this._isMounted = !0),
            this.props.ymaps
              .load()
              .then(function(e) {
                return Promise.all(
                  o.concat(t.props.modules).map(e.loadModule)
                ).then(function() {
                  !0 === t._isMounted &&
                    t.setState({ loading: !1 }, function() {
                      t.props.onLoad(e);
                    });
                });
              })
              .catch(function(e) {
                !0 === t._isMounted && t.props.onError(e);
              });
        }),
        (i.prototype.componentWillUnmount = function() {
          this._isMounted = !1;
        }),
        (i.prototype.render = function() {
          var o = this.props.ymaps,
            r = !1 === n || !1 === this.state.loading,
            i = $(this.props, ['onLoad', 'onError', 'modules', 'ymaps']);
          return (
            r && e.createElement(t, Object.assign({}, { ymaps: o.getApi() }, i))
          );
        }),
        i
      );
    })(e.Component);
    return (
      (r.defaultProps = {
        onLoad: Function.prototype,
        onError: Function.prototype,
        modules: [],
      }),
      F(r)
    );
  }
  var q = { lang: 'ru_RU', load: '', ns: '', mode: 'release' },
    I = {},
    G = function(t) {
      var e = Date.now().toString(32);
      (this.options = t),
        (this.namespace = t.query.ns || q.ns),
        (this.onload = '__yandex-maps-api-onload__$$' + e),
        (this.onerror = '__yandex-maps-api-onerror__$$' + e);
    };
  (G.prototype.getApi = function() {
    return 'undefined' != typeof window && this.namespace
      ? window[this.namespace]
      : this.api;
  }),
    (G.prototype.setApi = function(t) {
      return (this.api = t);
    }),
    (G.prototype.getPromise = function() {
      return this.namespace ? I[this.namespace] : this.promise;
    }),
    (G.prototype.setPromise = function(t) {
      return this.namespace
        ? (I[this.namespace] = this.promise = t)
        : (this.promise = t);
    }),
    (G.prototype.load = function() {
      var t = this;
      if (this.getApi()) return Promise.resolve(this.setApi(this.getApi()));
      if (this.getPromise()) return this.setPromise(this.getPromise());
      var e = Object.assign(
          { onload: this.onload, onerror: this.onerror },
          q,
          this.options.query
        ),
        n = Object.keys(e)
          .map(function(t) {
            return t + '=' + e[t];
          })
          .join('&'),
        o = [
          'https://' +
            (this.options.enterprise ? 'enterprise.' : '') +
            'api-maps.yandex.ru',
          this.options.version,
          '?' + n,
        ].join('/'),
        r = new Promise(function(e, n) {
          (window[t.onload] = function(n) {
            delete window[t.onload],
              (n.loadModule = t.loadModule.bind(t)),
              n.ready(function() {
                return e(t.setApi(n));
              });
          }),
            (window[t.onerror] = function(e) {
              delete window[t.onerror], n(e);
            }),
            t.fetchScript(o).catch(window[t.onerror]);
        });
      return this.setPromise(r);
    }),
    (G.prototype.fetchScript = function(t) {
      var e = this;
      return new Promise(function(n, o) {
        (e.script = document.createElement('script')),
          (e.script.type = 'text/javascript'),
          (e.script.onload = n),
          (e.script.onerror = o),
          (e.script.src = t),
          (e.script.async = 'async'),
          document.head.appendChild(e.script);
      });
    }),
    (G.prototype.loadModule = function(t) {
      var e = this;
      return new Promise(function(n, o) {
        e.getApi().modules.require(
          t,
          function(o) {
            !(function(t, e, n, o) {
              void 0 === o && (o = !1),
                (e = 'string' == typeof e ? e.split('.') : e.slice());
              for (var r, i = t; e.length > 1; )
                i[(r = e.shift())] || (i[r] = {}), (i = i[r]);
              i[e[0]] = (!0 === o && i[e[0]]) || n;
            })(e.api, t, o, !0),
              n(o);
          },
          o,
          e.getApi()
        );
      });
    }),
    (G._name = '__react-yandex-maps__');
  var Z = (function(t) {
    function n(e) {
      t.call(this, e), (this.ymaps = new G(e));
    }
    return (
      t && (n.__proto__ = t),
      ((n.prototype = Object.create(t && t.prototype)).constructor = n),
      (n.prototype.componentDidMount = function() {
        !0 === this.props.preload && this.ymaps.load();
      }),
      (n.prototype.render = function() {
        return e.createElement(
          D.Provider,
          { value: this.ymaps },
          this.props.children
        );
      }),
      n
    );
  })(e.Component);
  Z.defaultProps = {
    version: '2.1',
    enterprise: !1,
    query: { lang: 'ru_RU', load: '', ns: '' },
    preload: !1,
  };
  var V = /^on(?=[A-Z])/;
  function Y(t) {
    return Object.keys(t).reduce(
      function(e, n) {
        if (V.test(n)) {
          var o = n.replace(V, '').toLowerCase();
          e._events[o] = t[n];
        } else e[n] = t[n];
        return e;
      },
      { _events: {} }
    );
  }
  function H(t, e, n) {
    'function' == typeof n && t.events.add(e, n);
  }
  function J(t, e, n) {
    'function' == typeof n && t.events.remove(e, n);
  }
  function K(t, e, n) {
    Object.keys(Object.assign({}, e, n)).forEach(function(o) {
      e[o] !== n[o] && (J(t, o, e[o]), H(t, o, n[o]));
    });
  }
  var Q = function(t) {
    return 'default' + t.charAt(0).toUpperCase() + t.slice(1);
  };
  function X(t, e) {
    return void 0 !== t[e] || void 0 === t[Q(e)];
  }
  function tt(t, e, n) {
    return (X(t, e) ? t[e] : t[Q(e)]) || n;
  }
  function et(t, e, n) {
    if ((void 0 === n && (n = null), t !== e)) {
      if (
        (t &&
          (t.hasOwnProperty('current')
            ? (t.current = null)
            : 'function' == typeof t && t(null)),
        !e)
      )
        return;
      e.hasOwnProperty('current')
        ? (e.current = n)
        : 'function' == typeof e && e(n);
    }
  }
  function nt(t) {
    var e = t.width,
      n = t.height,
      o = t.style,
      r = t.className;
    return void 0 !== o || void 0 !== r
      ? Object.assign({}, o && { style: o }, r && { className: r })
      : { style: { width: e, height: n } };
  }
  var ot = (function(t) {
    function n() {
      var e = this;
      t.call(this),
        (this.state = { instance: null }),
        (this._parentElement = null),
        (this._getRef = function(t) {
          e._parentElement = t;
        });
    }
    return (
      t && (n.__proto__ = t),
      ((n.prototype = Object.create(t && t.prototype)).constructor = n),
      (n.prototype.componentDidMount = function() {
        var t = n.mountObject(
          this._parentElement,
          this.props.ymaps.Map,
          this.props
        );
        this.setState({ instance: t });
      }),
      (n.prototype.componentDidUpdate = function(t) {
        null !== this.state.instance &&
          n.updateObject(this.state.instance, t, this.props);
      }),
      (n.prototype.componentWillUnmount = function() {
        n.unmountObject(this.state.instance, this.props);
      }),
      (n.prototype.render = function() {
        var t = nt(this.props),
          n = Y(this.props),
          o = $(n, [
            '_events',
            'state',
            'defaultState',
            'options',
            'defaultOptions',
            'instanceRef',
            'ymaps',
            'children',
            'width',
            'height',
            'style',
            'className',
          ]);
        return e.createElement(
          L.Provider,
          { value: this.state.instance },
          e.createElement(
            'div',
            Object.assign({}, { ref: this._getRef }, t, o),
            this.props.children
          )
        );
      }),
      (n.mountObject = function(t, e, n) {
        var o = Y(n),
          r = o.instanceRef,
          i = o._events,
          s = new e(t, tt(n, 'state'), tt(n, 'options'));
        return (
          Object.keys(i).forEach(function(t) {
            return H(s, t, i[t]);
          }),
          et(null, r, s),
          s
        );
      }),
      (n.updateObject = function(t, e, n) {
        var o = Y(n),
          r = o._events,
          i = o.instanceRef,
          s = Y(e),
          a = s._events,
          c = s.instanceRef;
        if (X(n, 'state')) {
          var u = tt(e, 'state', {}),
            p = tt(n, 'state', {});
          u.type !== p.type && t.setType(p.type),
            u.behaviors !== p.behaviors &&
              (u.behaviors && t.behaviors.disable(u.behaviors),
              p.behaviors && t.behaviors.enable(p.behaviors)),
            p.zoom && u.zoom !== p.zoom && t.setZoom(p.zoom),
            p.center && u.center !== p.center && t.setCenter(p.center),
            p.bounds && u.bounds !== p.bounds && t.setBounds(p.bounds);
        }
        if (X(n, 'options')) {
          var f = tt(e, 'options'),
            l = tt(n, 'options', {});
          f !== l && t.options.set(l);
        }
        (tt(e, 'width') === tt(n, 'width') &&
          tt(e, 'height') === tt(n, 'height')) ||
          t.container.fitToViewport(),
          K(t, a, r),
          et(c, i, t);
      }),
      (n.unmountObject = function(t, e) {
        var n = Y(e),
          o = n.instanceRef,
          r = n._events;
        null !== t &&
          (Object.keys(r).forEach(function(e) {
            return J(t, e, r[e]);
          }),
          t.destroy(),
          et(o));
      }),
      n
    );
  })(e.Component);
  ot.defaultProps = { width: 320, height: 240 };
  var rt = N(ot, !0, ['Map']),
    it = (function(t) {
      function n() {
        var e = this;
        t.call(this),
          (this.state = { instance: null }),
          (this._parentElement = null),
          (this._getRef = function(t) {
            e._parentElement = t;
          });
      }
      return (
        t && (n.__proto__ = t),
        ((n.prototype = Object.create(t && t.prototype)).constructor = n),
        (n.prototype.componentDidMount = function() {
          var t = this;
          (this._mounted = !0),
            this.props.ymaps.panorama.isSupported() &&
              n
                .mountObject(
                  this._parentElement,
                  this.props.ymaps.panorama,
                  this.props
                )
                .then(function(e) {
                  return t._mounted && t.setState({ instance: e });
                });
        }),
        (n.prototype.componentDidUpdate = function(t) {
          null !== this.state.instance &&
            n.updateObject(this.state.instance, t, this.props);
        }),
        (n.prototype.componentWillUnmount = function() {
          (this._mounted = !1),
            n.unmountObject(this.state.instance, this.props);
        }),
        (n.prototype.render = function() {
          var t = nt(this.props);
          return e.createElement(
            'div',
            Object.assign({}, { ref: this._getRef }, t)
          );
        }),
        (n.mountObject = function(t, e, n) {
          var o = Y(n),
            r = o.instanceRef,
            i = o._events,
            s = tt(n, 'point'),
            a = tt(n, 'locateOptions'),
            c = tt(n, 'options');
          return new Promise(function(n, o) {
            e.locate(s, a).done(function(o) {
              if (o.length > 0) {
                var s = new e.Player(t, o[0], c);
                et(null, r, s),
                  Object.keys(i).forEach(function(t) {
                    return H(s, t, i[t]);
                  }),
                  n(s);
              }
            }, o);
          });
        }),
        (n.updateObject = function(t, e, n) {
          var o = Y(n),
            r = o._events,
            i = o.instanceRef,
            s = Y(e),
            a = s._events,
            c = s.instanceRef;
          if (X(n, 'options')) {
            var u = tt(e, 'options'),
              p = tt(n, 'options');
            u !== p && t.options.set(p);
          }
          if (X(n, 'point')) {
            var f = tt(n, 'point'),
              l = tt(e, 'point'),
              d = tt(n, 'locateOptions');
            f !== l && t.moveTo(f, d);
          }
          K(t, a, r), et(c, i, t);
        }),
        (n.unmountObject = function(t, e) {
          var n = Y(e),
            o = n.instanceRef,
            r = n._events;
          null !== t &&
            (Object.keys(r).forEach(function(e) {
              return J(t, e, r[e]);
            }),
            et(o));
        }),
        n
      );
    })(e.Component);
  it.defaultProps = { width: 320, height: 240 };
  var st,
    at = N(it, !0, [
      'panorama.isSupported',
      'panorama.locate',
      'panorama.createPlayer',
      'panorama.Player',
    ]),
    ct = (function(t) {
      function n() {
        t.call(this), (this.state = { instance: null });
      }
      return (
        t && (n.__proto__ = t),
        ((n.prototype = Object.create(t && t.prototype)).constructor = n),
        (n.prototype.componentDidMount = function() {
          var t = n.mountControl(
            this.props.ymaps.control[this.props.name],
            this.props
          );
          this.setState({ instance: t });
        }),
        (n.prototype.componentDidUpdate = function(t) {
          null !== this.state.instance &&
            n.updateControl(this.state.instance, t, this.props);
        }),
        (n.prototype.componentWillUnmount = function() {
          n.unmountControl(this.state.instance, this.props);
        }),
        (n.prototype.render = function() {
          return e.createElement(
            L.Provider,
            { value: this.state.instance },
            this.props.children
          );
        }),
        (n.mountControl = function(t, e) {
          var n = Y(e),
            o = n.instanceRef,
            r = n.parent,
            i = n.lazy,
            s = n._events,
            a = new t({
              data: tt(e, 'data'),
              options: tt(e, 'options'),
              state: tt(e, 'state'),
              mapTypes: tt(e, 'mapTypes'),
              lazy: i,
            });
          if (
            (Object.keys(s).forEach(function(t) {
              return H(a, t, s[t]);
            }),
            r && r.controls && 'function' == typeof r.controls.add)
          )
            r.controls.add(a);
          else {
            if (!r || !r.add || 'function' != typeof r.add)
              throw new Error('No parent found to mount ' + e.name);
            r.add(a);
          }
          return et(null, o, a), a;
        }),
        (n.updateControl = function(t, e, n) {
          var o = Y(n),
            r = o._events,
            i = o.instanceRef,
            s = Y(e),
            a = s._events,
            c = s.instanceRef;
          if (X(n, 'options')) {
            var u = tt(e, 'options'),
              p = tt(n, 'options');
            u !== p && t.options.set(p);
          }
          if (X(n, 'data')) {
            var f = tt(e, 'data'),
              l = tt(n, 'data');
            f !== l && t.data.set(l);
          }
          if (X(n, 'state')) {
            var d = tt(e, 'state'),
              h = tt(n, 'state');
            d !== h && t.state.set(h);
          }
          if (X(n, 'mapTypes')) {
            var y = tt(e, 'mapTypes'),
              m = tt(n, 'mapTypes');
            y !== m &&
              (t.removeAllMapTypes(),
              m.forEach(function(e) {
                return t.addMapType(e);
              }));
          }
          K(t, a, r), et(c, i, t);
        }),
        (n.unmountControl = function(t, e) {
          var n = Y(e),
            o = n.instanceRef,
            r = n.parent,
            i = n._events;
          null !== t &&
            (Object.keys(i).forEach(function(e) {
              return J(t, e, i[e]);
            }),
            r.controls && 'function' == typeof r.controls.remove
              ? r.controls.remove(t)
              : r.remove && 'function' == typeof r.remove && r.remove(t),
            et(o));
        }),
        n
      );
    })(e.Component),
    ut = W(
      N(
        function(t) {
          return e.createElement(ct, Object.assign({}, t, { name: 'Button' }));
        },
        !0,
        ['control.Button']
      )
    ),
    pt = W(
      N(
        function(t) {
          return e.createElement(
            ct,
            Object.assign({}, t, { name: 'FullscreenControl' })
          );
        },
        !0,
        ['control.FullscreenControl']
      )
    ),
    ft = W(
      N(
        function(t) {
          return e.createElement(
            ct,
            Object.assign({}, t, { name: 'GeolocationControl' })
          );
        },
        !0,
        ['control.GeolocationControl']
      )
    ),
    lt = W(
      N(
        function(t) {
          return e.createElement(ct, Object.assign({}, t, { name: 'ListBox' }));
        },
        !0,
        ['control.ListBox']
      )
    ),
    dt = W(
      N(
        function(t) {
          return e.createElement(
            ct,
            Object.assign({}, t, { name: 'ListBoxItem' })
          );
        },
        !0,
        ['control.ListBoxItem']
      )
    ),
    ht = W(
      N(
        function(t) {
          return e.createElement(
            ct,
            Object.assign({}, t, { name: 'RouteButton' })
          );
        },
        !0,
        ['control.RouteButton']
      )
    ),
    yt = W(
      N(
        function(t) {
          return e.createElement(
            ct,
            Object.assign({}, t, { name: 'RouteEditor' })
          );
        },
        !0,
        ['control.RouteEditor']
      )
    ),
    mt = W(
      N(
        function(t) {
          return e.createElement(
            ct,
            Object.assign({}, t, { name: 'RoutePanel' })
          );
        },
        !0,
        ['control.RoutePanel']
      )
    ),
    vt = W(
      N(
        function(t) {
          return e.createElement(
            ct,
            Object.assign({}, t, { name: 'RulerControl' })
          );
        },
        !0,
        ['control.RulerControl']
      )
    ),
    bt = W(
      N(
        function(t) {
          return e.createElement(
            ct,
            Object.assign({}, t, { name: 'SearchControl' })
          );
        },
        !0,
        ['control.SearchControl']
      )
    ),
    _t = W(
      N(
        function(t) {
          return e.createElement(
            ct,
            Object.assign({}, t, { name: 'TrafficControl' })
          );
        },
        !0,
        ['control.TrafficControl']
      )
    ),
    gt = W(
      N(
        function(t) {
          return e.createElement(
            ct,
            Object.assign({}, t, { name: 'TypeSelector' })
          );
        },
        !0,
        ['control.TypeSelector']
      )
    ),
    jt = W(
      N(
        function(t) {
          return e.createElement(
            ct,
            Object.assign({}, t, { name: 'ZoomControl' })
          );
        },
        !0,
        ['control.ZoomControl']
      )
    ),
    Ot = W(
      N(
        (function(t) {
          function n() {
            t.call(this), (this.state = { instance: null });
          }
          return (
            t && (n.__proto__ = t),
            ((n.prototype = Object.create(t && t.prototype)).constructor = n),
            (n.prototype.componentDidMount = function() {
              var t = n.mountObject(this.props.ymaps.Clusterer, this.props);
              this.setState({ instance: t });
            }),
            (n.prototype.componentDidUpdate = function(t) {
              null !== this.state.instance &&
                n.updateObject(this.state.instance, t, this.props);
            }),
            (n.prototype.componentWillUnmount = function() {
              n.unmountObject(this.state.instance, this.props);
            }),
            (n.prototype.render = function() {
              return e.createElement(
                L.Provider,
                { value: this.state.instance },
                this.props.children
              );
            }),
            (n.mountObject = function(t, e) {
              var n = Y(e),
                o = n.instanceRef,
                r = n.parent,
                i = n._events,
                s = new t(tt(e, 'options'));
              if (
                (Object.keys(i).forEach(function(t) {
                  return H(s, t, i[t]);
                }),
                r.geoObjects && 'function' == typeof r.geoObjects.add)
              )
                r.geoObjects.add(s);
              else {
                if (!r.add || 'function' != typeof r.add)
                  throw new Error('No parent found to mount Clusterer');
                r.add(s);
              }
              return et(null, o, s), s;
            }),
            (n.updateObject = function(t, e, n) {
              var o = Y(n),
                r = o._events,
                i = o.instanceRef,
                s = Y(e),
                a = s._events,
                c = s.instanceRef;
              if (X(n, 'options')) {
                var u = tt(e, 'options'),
                  p = tt(n, 'options');
                u !== p && t.options.set(p);
              }
              K(t, a, r), et(c, i, t);
            }),
            (n.unmountObject = function(t, e) {
              var n = Y(e),
                o = n.instanceRef,
                r = n.parent,
                i = n._events;
              null !== t &&
                (Object.keys(i).forEach(function(e) {
                  return J(t, e, i[e]);
                }),
                r.geoObjects && 'function' == typeof r.geoObjects.remove
                  ? r.geoObjects.remove(t)
                  : r.remove && 'function' == typeof r.remove && r.remove(t),
                et(o));
            }),
            n
          );
        })(e.Component),
        !0,
        ['Clusterer']
      )
    ),
    wt = 'object' == typeof n && n && n.Object === Object && n,
    Et = 'object' == typeof self && self && self.Object === Object && self,
    Ct = wt || Et || Function('return this')(),
    Pt = Ct.Symbol,
    Rt = Object.prototype,
    St = Rt.hasOwnProperty,
    Mt = Rt.toString,
    xt = Pt ? Pt.toStringTag : void 0,
    Tt = Object.prototype.toString,
    $t = Pt ? Pt.toStringTag : void 0,
    At = function(t) {
      return null == t
        ? void 0 === t
          ? '[object Undefined]'
          : '[object Null]'
        : $t && $t in Object(t)
        ? (function(t) {
            var e = St.call(t, xt),
              n = t[xt];
            try {
              t[xt] = void 0;
            } catch (t) {}
            var o = Mt.call(t);
            return e ? (t[xt] = n) : delete t[xt], o;
          })(t)
        : (function(t) {
            return Tt.call(t);
          })(t);
    },
    kt = function(t) {
      var e = typeof t;
      return null != t && ('object' == e || 'function' == e);
    },
    Ut = function(t) {
      if (!kt(t)) return !1;
      var e = At(t);
      return (
        '[object Function]' == e ||
        '[object GeneratorFunction]' == e ||
        '[object AsyncFunction]' == e ||
        '[object Proxy]' == e
      );
    },
    zt = Ct['__core-js_shared__'],
    Bt = (st = /[^.]+$/.exec((zt && zt.keys && zt.keys.IE_PROTO) || ''))
      ? 'Symbol(src)_1.' + st
      : '',
    Dt = Function.prototype.toString,
    Ft = /^\[object .+?Constructor\]$/,
    Lt = Function.prototype,
    Wt = Object.prototype,
    Nt = RegExp(
      '^' +
        Lt.toString
          .call(Wt.hasOwnProperty)
          .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            '$1.*?'
          ) +
        '$'
    ),
    qt = function(t, e) {
      var n = (function(t, e) {
        return null == t ? void 0 : t[e];
      })(t, e);
      return (function(t) {
        return (
          !(!kt(t) || ((e = t), Bt && Bt in e)) &&
          (Ut(t) ? Nt : Ft).test(
            (function(t) {
              if (null != t) {
                try {
                  return Dt.call(t);
                } catch (t) {}
                try {
                  return t + '';
                } catch (t) {}
              }
              return '';
            })(t)
          )
        );
        var e;
      })(n)
        ? n
        : void 0;
    },
    It = qt(Object, 'create'),
    Gt = Object.prototype.hasOwnProperty,
    Zt = Object.prototype.hasOwnProperty;
  function Vt(t) {
    var e = -1,
      n = null == t ? 0 : t.length;
    for (this.clear(); ++e < n; ) {
      var o = t[e];
      this.set(o[0], o[1]);
    }
  }
  (Vt.prototype.clear = function() {
    (this.__data__ = It ? It(null) : {}), (this.size = 0);
  }),
    (Vt.prototype.delete = function(t) {
      var e = this.has(t) && delete this.__data__[t];
      return (this.size -= e ? 1 : 0), e;
    }),
    (Vt.prototype.get = function(t) {
      var e = this.__data__;
      if (It) {
        var n = e[t];
        return '__lodash_hash_undefined__' === n ? void 0 : n;
      }
      return Gt.call(e, t) ? e[t] : void 0;
    }),
    (Vt.prototype.has = function(t) {
      var e = this.__data__;
      return It ? void 0 !== e[t] : Zt.call(e, t);
    }),
    (Vt.prototype.set = function(t, e) {
      var n = this.__data__;
      return (
        (this.size += this.has(t) ? 0 : 1),
        (n[t] = It && void 0 === e ? '__lodash_hash_undefined__' : e),
        this
      );
    });
  var Yt = Vt,
    Ht = function(t, e) {
      for (var n = t.length; n--; )
        if ((o = t[n][0]) === (r = e) || (o != o && r != r)) return n;
      var o, r;
      return -1;
    },
    Jt = Array.prototype.splice;
  function Kt(t) {
    var e = -1,
      n = null == t ? 0 : t.length;
    for (this.clear(); ++e < n; ) {
      var o = t[e];
      this.set(o[0], o[1]);
    }
  }
  (Kt.prototype.clear = function() {
    (this.__data__ = []), (this.size = 0);
  }),
    (Kt.prototype.delete = function(t) {
      var e = this.__data__,
        n = Ht(e, t);
      return !(
        n < 0 ||
        (n == e.length - 1 ? e.pop() : Jt.call(e, n, 1), --this.size, 0)
      );
    }),
    (Kt.prototype.get = function(t) {
      var e = this.__data__,
        n = Ht(e, t);
      return n < 0 ? void 0 : e[n][1];
    }),
    (Kt.prototype.has = function(t) {
      return Ht(this.__data__, t) > -1;
    }),
    (Kt.prototype.set = function(t, e) {
      var n = this.__data__,
        o = Ht(n, t);
      return o < 0 ? (++this.size, n.push([t, e])) : (n[o][1] = e), this;
    });
  var Qt = Kt,
    Xt = qt(Ct, 'Map'),
    te = function(t, e) {
      var n,
        o,
        r = t.__data__;
      return ('string' == (o = typeof (n = e)) ||
      'number' == o ||
      'symbol' == o ||
      'boolean' == o
      ? '__proto__' !== n
      : null === n)
        ? r['string' == typeof e ? 'string' : 'hash']
        : r.map;
    };
  function ee(t) {
    var e = -1,
      n = null == t ? 0 : t.length;
    for (this.clear(); ++e < n; ) {
      var o = t[e];
      this.set(o[0], o[1]);
    }
  }
  (ee.prototype.clear = function() {
    (this.size = 0),
      (this.__data__ = {
        hash: new Yt(),
        map: new (Xt || Qt)(),
        string: new Yt(),
      });
  }),
    (ee.prototype.delete = function(t) {
      var e = te(this, t).delete(t);
      return (this.size -= e ? 1 : 0), e;
    }),
    (ee.prototype.get = function(t) {
      return te(this, t).get(t);
    }),
    (ee.prototype.has = function(t) {
      return te(this, t).has(t);
    }),
    (ee.prototype.set = function(t, e) {
      var n = te(this, t),
        o = n.size;
      return n.set(t, e), (this.size += n.size == o ? 0 : 1), this;
    });
  var ne = ee;
  function oe(t) {
    var e = -1,
      n = null == t ? 0 : t.length;
    for (this.__data__ = new ne(); ++e < n; ) this.add(t[e]);
  }
  (oe.prototype.add = oe.prototype.push = function(t) {
    return this.__data__.set(t, '__lodash_hash_undefined__'), this;
  }),
    (oe.prototype.has = function(t) {
      return this.__data__.has(t);
    });
  var re,
    ie,
    se,
    ae = oe,
    ce = function(t) {
      return t != t;
    },
    ue = function(t, e) {
      return (
        !(null == t || !t.length) &&
        (function(t, e, n) {
          return e == e
            ? (function(t, e, n) {
                for (var o = -1, r = t.length; ++o < r; )
                  if (t[o] === e) return o;
                return -1;
              })(t, e)
            : (function(t, e, n, o) {
                for (var r = t.length, i = -1; ++i < r; )
                  if (e(t[i], i, t)) return i;
                return -1;
              })(t, ce);
        })(t, e) > -1
      );
    },
    pe = function(t, e, n) {
      for (var o = -1, r = null == t ? 0 : t.length; ++o < r; )
        if (n(e, t[o])) return !0;
      return !1;
    },
    fe = function(t, e) {
      return t.has(e);
    },
    le = function(t, e) {
      for (var n = -1, o = e.length, r = t.length; ++n < o; ) t[r + n] = e[n];
      return t;
    },
    de = function(t) {
      return null != t && 'object' == typeof t;
    },
    he = function(t) {
      return de(t) && '[object Arguments]' == At(t);
    },
    ye = Object.prototype,
    me = ye.hasOwnProperty,
    ve = ye.propertyIsEnumerable,
    be = he(
      (function() {
        return arguments;
      })()
    )
      ? he
      : function(t) {
          return de(t) && me.call(t, 'callee') && !ve.call(t, 'callee');
        },
    _e = Array.isArray,
    ge = Pt ? Pt.isConcatSpreadable : void 0,
    je = function(t) {
      return _e(t) || be(t) || !!(ge && t && t[ge]);
    },
    Oe = function(t) {
      return t;
    },
    we = Math.max,
    Ee = (function() {
      try {
        var t = qt(Object, 'defineProperty');
        return t({}, '', {}), t;
      } catch (t) {}
    })(),
    Ce = Date.now,
    Pe =
      ((re = Ee
        ? function(t, e) {
            return Ee(t, 'toString', {
              configurable: !0,
              enumerable: !1,
              value:
                ((n = e),
                function() {
                  return n;
                }),
              writable: !0,
            });
            var n;
          }
        : Oe),
      (ie = 0),
      (se = 0),
      function() {
        var t = Ce(),
          e = 16 - (t - se);
        if (((se = t), e > 0)) {
          if (++ie >= 800) return arguments[0];
        } else ie = 0;
        return re.apply(void 0, arguments);
      }),
    Re = function(t) {
      return (
        de(t) &&
        (function(t) {
          return (
            null != t &&
            (function(t) {
              return (
                'number' == typeof t &&
                t > -1 &&
                t % 1 == 0 &&
                t <= 9007199254740991
              );
            })(t.length) &&
            !Ut(t)
          );
        })(t)
      );
    },
    Se = (function(t, e) {
      return Pe(
        (function(t, e, n) {
          return (
            (e = we(void 0 === e ? t.length - 1 : e, 0)),
            function() {
              for (
                var o = arguments,
                  r = -1,
                  i = we(o.length - e, 0),
                  s = Array(i);
                ++r < i;

              )
                s[r] = o[e + r];
              r = -1;
              for (var a = Array(e + 1); ++r < e; ) a[r] = o[r];
              return (
                (a[e] = n(s)),
                (function(t, e, n) {
                  switch (n.length) {
                    case 0:
                      return t.call(e);
                    case 1:
                      return t.call(e, n[0]);
                    case 2:
                      return t.call(e, n[0], n[1]);
                    case 3:
                      return t.call(e, n[0], n[1], n[2]);
                  }
                  return t.apply(e, n);
                })(t, this, a)
              );
            }
          );
        })(t, void 0, Oe),
        t + ''
      );
    })(function(t, e) {
      var n,
        o = (n = null == e ? 0 : e.length) ? e[n - 1] : void 0;
      return (
        Re(o) && (o = void 0),
        Re(t)
          ? (function(t, e, n, o) {
              var r = -1,
                i = ue,
                s = !0,
                a = t.length,
                c = [],
                u = e.length;
              if (!a) return c;
              o
                ? ((i = pe), (s = !1))
                : e.length >= 200 && ((i = fe), (s = !1), (e = new ae(e)));
              t: for (; ++r < a; ) {
                var p = t[r],
                  f = p;
                if (((p = o || 0 !== p ? p : 0), s && f == f)) {
                  for (var l = u; l--; ) if (e[l] === f) continue t;
                  c.push(p);
                } else i(e, f, o) || c.push(p);
              }
              return c;
            })(
              t,
              (function t(e, n, o, r, i) {
                var s = -1,
                  a = e.length;
                for (o || (o = je), i || (i = []); ++s < a; ) {
                  var c = e[s];
                  n > 0 && o(c)
                    ? n > 1
                      ? t(c, n - 1, o, r, i)
                      : le(i, c)
                    : r || (i[i.length] = c);
                }
                return i;
              })(e, 1, Re, !0),
              0,
              o
            )
          : []
      );
    }),
    Me = W(
      N(
        (function(t) {
          function e() {
            t.call(this), (this.state = { instance: null });
          }
          return (
            t && (e.__proto__ = t),
            ((e.prototype = Object.create(t && t.prototype)).constructor = e),
            (e.prototype.componentDidMount = function() {
              var t = e.mountObject(this.props.ymaps.ObjectManager, this.props);
              this.setState({ instance: t });
            }),
            (e.prototype.componentDidUpdate = function(t) {
              null !== this.state.instance &&
                e.updateObject(this.state.instance, t, this.props);
            }),
            (e.prototype.componentWillUnmount = function() {
              e.unmountObject(this.state.instance, this.props);
            }),
            (e.prototype.render = function() {
              return null;
            }),
            (e.mountObject = function(t, e) {
              var n = Y(e),
                o = n.instanceRef,
                r = n.parent,
                i = n._events,
                s = tt(e, 'options', {}),
                a = tt(e, 'features', {}),
                c = tt(e, 'filter', null),
                u = tt(e, 'objects', {}),
                p = tt(e, 'clusters', {}),
                f = new t(s);
              if (
                (f.add(a || []),
                f.setFilter(c),
                f.objects.options.set(u),
                f.clusters.options.set(p),
                Object.keys(i).forEach(function(t) {
                  return H(f, t, i[t]);
                }),
                r.geoObjects && 'function' == typeof r.geoObjects.add)
              )
                r.geoObjects.add(f);
              else {
                if (!r.add || 'function' != typeof r.add)
                  throw new Error('No parent found to mount ObjectManager');
                r.add(f);
              }
              return et(null, o, f), f;
            }),
            (e.updateObject = function(t, e, n) {
              var o = Y(n),
                r = o._events,
                i = o.instanceRef,
                s = Y(e),
                a = s._events,
                c = s.instanceRef;
              if (X(n, 'options')) {
                var u = tt(e, 'options'),
                  p = tt(n, 'options');
                u !== p && t.options.set(p);
              }
              if (X(n, 'objects')) {
                var f = tt(e, 'objects'),
                  l = tt(n, 'objects');
                f !== l && t.objects.options.set(l);
              }
              if (X(n, 'clusters')) {
                var d = tt(e, 'clusters'),
                  h = tt(n, 'clusters');
                d !== h && t.clusters.options.set(h);
              }
              if (X(n, 'filter')) {
                var y = tt(e, 'filter'),
                  m = tt(n, 'filter');
                y !== m && t.setFilter(m);
              }
              if (X(n, 'features')) {
                var v = tt(e, 'features'),
                  b = tt(n, 'features');
                if (v !== b) {
                  var _ = Se(v, b, function(t, e) {
                      return t.id === e.id;
                    }),
                    g = Se(b, v, function(t, e) {
                      return t.id === e.id;
                    });
                  t.remove(_), t.add(g);
                }
              }
              K(t, a, r), et(c, i, t);
            }),
            (e.unmountObject = function(t, e) {
              var n = Y(e),
                o = n.instanceRef,
                r = n.parent,
                i = n._events;
              null !== t &&
                (Object.keys(i).forEach(function(e) {
                  return J(t, e, i[e]);
                }),
                r.geoObjects && 'function' == typeof r.geoObjects.remove
                  ? r.geoObjects.remove(t)
                  : r.remove && 'function' == typeof r.remove && r.remove(t),
                et(o));
            }),
            e
          );
        })(e.Component),
        !0,
        ['ObjectManager']
      )
    ),
    xe = (function(t) {
      function e() {
        t.call(this), (this.state = { instance: null });
      }
      return (
        t && (e.__proto__ = t),
        ((e.prototype = Object.create(t && t.prototype)).constructor = e),
        (e.prototype.componentDidMount = function() {
          var t = this.props,
            n = t.name,
            o = t.ymaps,
            r = t.dangerZone,
            i = e.mountObject(
              r && 'function' == typeof r.modifyConstructor
                ? r.modifyConstructor(o[n])
                : o[n],
              this.props
            );
          this.setState({ instance: i });
        }),
        (e.prototype.componentDidUpdate = function(t) {
          null !== this.state.instance &&
            e.updateObject(this.state.instance, t, this.props);
        }),
        (e.prototype.componentWillUnmount = function() {
          e.unmountObject(this.state.instance, this.props);
        }),
        (e.prototype.render = function() {
          return null;
        }),
        (e.mountObject = function(t, e) {
          var n = Y(e),
            o = n.instanceRef,
            r = n.parent,
            i = n._events,
            s = new t(tt(e, 'geometry'), tt(e, 'properties'), tt(e, 'options'));
          if (
            (Object.keys(i).forEach(function(t) {
              return H(s, t, i[t]);
            }),
            r && r.geoObjects && 'function' == typeof r.geoObjects.add)
          )
            r.geoObjects.add(s);
          else {
            if (!r || !r.add || 'function' != typeof r.add)
              throw new Error('No parent found to mount ' + e.name);
            r.add(s);
          }
          return et(null, o, s), s;
        }),
        (e.updateObject = function(t, e, n) {
          var o = Y(n),
            r = o._events,
            i = o.instanceRef,
            s = Y(e),
            a = s._events,
            c = s.instanceRef;
          if (X(n, 'geometry')) {
            var u = tt(e, 'geometry', {}),
              p = tt(n, 'geometry', {});
            Array.isArray(p) && p !== u
              ? Array.isArray(p[0]) && 'number' == typeof p[1]
                ? (t.geometry.setCoordinates(p[0]), t.geometry.setRadius(p[1]))
                : t.geometry.setCoordinates(p)
              : 'object' == typeof p &&
                (p.coordinates !== u.coordinates &&
                  t.geometry.setCoordinates(p.coordinates),
                p.radius !== u.radius && t.geometry.setRadius(p.radius));
          }
          if (X(n, 'properties')) {
            var f = tt(e, 'properties'),
              l = tt(n, 'properties');
            f !== l && t.properties.set(l);
          }
          if (X(n, 'options')) {
            var d = tt(e, 'options'),
              h = tt(n, 'options');
            d !== h && t.options.set(h);
          }
          K(t, a, r), et(c, i, t);
        }),
        (e.unmountObject = function(t, e) {
          var n = Y(e),
            o = n.instanceRef,
            r = n.parent,
            i = n._events;
          null !== t &&
            (Object.keys(i).forEach(function(e) {
              return J(t, e, i[e]);
            }),
            r.geoObjects && 'function' == typeof r.geoObjects.remove
              ? r.geoObjects.remove(t)
              : r.remove && 'function' == typeof r.remove && r.remove(t),
            et(o));
        }),
        e
      );
    })(e.Component),
    Te = {
      modifyConstructor: function(t) {
        function e(e, n, o) {
          t.call(this, { geometry: e, properties: n }, o);
        }
        return (e.prototype = t.prototype), e;
      },
    },
    $e = W(
      N(
        function(t) {
          return e.createElement(
            xe,
            Object.assign({}, t, { name: 'GeoObject', dangerZone: Te })
          );
        },
        !0,
        ['GeoObject']
      )
    ),
    Ae = W(
      N(
        function(t) {
          return e.createElement(xe, Object.assign({}, t, { name: 'Circle' }));
        },
        !0,
        ['Circle']
      )
    ),
    ke = W(
      N(
        function(t) {
          return e.createElement(
            xe,
            Object.assign({}, t, { name: 'Placemark' })
          );
        },
        !0,
        ['Placemark']
      )
    ),
    Ue = W(
      N(
        function(t) {
          return e.createElement(xe, Object.assign({}, t, { name: 'Polygon' }));
        },
        !0,
        ['Polygon']
      )
    ),
    ze = W(
      N(
        function(t) {
          return e.createElement(
            xe,
            Object.assign({}, t, { name: 'Polyline' })
          );
        },
        !0,
        ['Polyline']
      )
    ),
    Be = W(
      N(
        function(t) {
          return e.createElement(
            xe,
            Object.assign({}, t, { name: 'Rectangle' })
          );
        },
        !0,
        ['Rectangle']
      )
    );
  (t.withYMaps = N),
    (t.YMaps = Z),
    (t.Map = rt),
    (t.Panorama = at),
    (t.Button = ut),
    (t.FullscreenControl = pt),
    (t.GeolocationControl = ft),
    (t.ListBox = lt),
    (t.ListBoxItem = dt),
    (t.RouteButton = ht),
    (t.RouteEditor = yt),
    (t.RoutePanel = mt),
    (t.RulerControl = vt),
    (t.SearchControl = bt),
    (t.TrafficControl = _t),
    (t.TypeSelector = gt),
    (t.ZoomControl = jt),
    (t.Clusterer = Ot),
    (t.ObjectManager = Me),
    (t.GeoObject = $e),
    (t.Circle = Ae),
    (t.Placemark = ke),
    (t.Polygon = Ue),
    (t.Polyline = ze),
    (t.Rectangle = Be);
});
//# sourceMappingURL=react-yandex-maps.umd.js.map
