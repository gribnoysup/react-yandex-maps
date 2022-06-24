import t from 'react';
var e =
  'undefined' != typeof globalThis
    ? globalThis
    : 'undefined' != typeof window
    ? window
    : 'undefined' != typeof global
    ? global
    : 'undefined' != typeof self
    ? self
    : {};
function n(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, 'default')
    ? t.default
    : t;
}
function o(t, e) {
  return t((e = { exports: {} }), e.exports), e.exports;
}
var r = 'function' == typeof Symbol && Symbol.for,
  i = r ? Symbol.for('react.element') : 60103,
  s = r ? Symbol.for('react.portal') : 60106,
  a = r ? Symbol.for('react.fragment') : 60107,
  c = r ? Symbol.for('react.strict_mode') : 60108,
  u = r ? Symbol.for('react.profiler') : 60114,
  p = r ? Symbol.for('react.provider') : 60109,
  f = r ? Symbol.for('react.context') : 60110,
  l = r ? Symbol.for('react.async_mode') : 60111,
  d = r ? Symbol.for('react.concurrent_mode') : 60111,
  h = r ? Symbol.for('react.forward_ref') : 60112,
  y = r ? Symbol.for('react.suspense') : 60113,
  m = r ? Symbol.for('react.suspense_list') : 60120,
  v = r ? Symbol.for('react.memo') : 60115,
  b = r ? Symbol.for('react.lazy') : 60116,
  _ = r ? Symbol.for('react.block') : 60121,
  g = r ? Symbol.for('react.fundamental') : 60117,
  j = r ? Symbol.for('react.responder') : 60118,
  O = r ? Symbol.for('react.scope') : 60119;
function w(t) {
  if ('object' == typeof t && null !== t) {
    var e = t.$$typeof;
    switch (e) {
      case i:
        switch ((t = t.type)) {
          case l:
          case d:
          case a:
          case u:
          case c:
          case y:
            return t;
          default:
            switch ((t = t && t.$$typeof)) {
              case f:
              case h:
              case b:
              case v:
              case p:
                return t;
              default:
                return e;
            }
        }
      case s:
        return e;
    }
  }
}
function E(t) {
  return w(t) === d;
}
var C = {
  AsyncMode: l,
  ConcurrentMode: d,
  ContextConsumer: f,
  ContextProvider: p,
  Element: i,
  ForwardRef: h,
  Fragment: a,
  Lazy: b,
  Memo: v,
  Portal: s,
  Profiler: u,
  StrictMode: c,
  Suspense: y,
  isAsyncMode: function(t) {
    return E(t) || w(t) === l;
  },
  isConcurrentMode: E,
  isContextConsumer: function(t) {
    return w(t) === f;
  },
  isContextProvider: function(t) {
    return w(t) === p;
  },
  isElement: function(t) {
    return 'object' == typeof t && null !== t && t.$$typeof === i;
  },
  isForwardRef: function(t) {
    return w(t) === h;
  },
  isFragment: function(t) {
    return w(t) === a;
  },
  isLazy: function(t) {
    return w(t) === b;
  },
  isMemo: function(t) {
    return w(t) === v;
  },
  isPortal: function(t) {
    return w(t) === s;
  },
  isProfiler: function(t) {
    return w(t) === u;
  },
  isStrictMode: function(t) {
    return w(t) === c;
  },
  isSuspense: function(t) {
    return w(t) === y;
  },
  isValidElementType: function(t) {
    return (
      'string' == typeof t ||
      'function' == typeof t ||
      t === a ||
      t === d ||
      t === u ||
      t === c ||
      t === y ||
      t === m ||
      ('object' == typeof t &&
        null !== t &&
        (t.$$typeof === b ||
          t.$$typeof === v ||
          t.$$typeof === p ||
          t.$$typeof === f ||
          t.$$typeof === h ||
          t.$$typeof === g ||
          t.$$typeof === j ||
          t.$$typeof === O ||
          t.$$typeof === _))
    );
  },
  typeOf: w,
};
o(function(t, e) {}),
  o(function(t) {
    t.exports = C;
  }),
  Object,
  Object,
  Object,
  (function() {
    try {
      if (!Object.assign) return !1;
      var t = new String('abc');
      if (((t[5] = 'de'), '5' === Object.getOwnPropertyNames(t)[0])) return !1;
      for (var e = {}, n = 0; n < 10; n++) e['_' + String.fromCharCode(n)] = n;
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
var P = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
function R() {}
function S() {}
Function.call.bind(Object.prototype.hasOwnProperty), (S.resetWarningCache = R);
var M = o(function(t) {
    t.exports = (function() {
      function t(t, e, n, o, r, i) {
        if (i !== P) {
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
        checkPropTypes: S,
        resetWarningCache: R,
      };
      return (n.PropTypes = n), n;
    })();
  }),
  x = n(
    o(function(t, e) {
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
  T = function(t, e) {
    var n = {};
    for (var o in t) -1 === e.indexOf(o) && (n[o] = t[o]);
    return n;
  },
  $ = '__global_unique_id__',
  A = function() {
    return (e[$] = (e[$] || 0) + 1);
  },
  k = function() {},
  U = o(function(e, n) {
    n.__esModule = !0;
    var o = i(M),
      r = i(A);
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
          'Super expression must either be null or a function, not ' + typeof e
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
    i(k),
      (n.default = function(e, n) {
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
          })(t.Component);
        f.childContextTypes = (((i = {})[p] = o.default.object.isRequired), i);
        var l = (function(t) {
          function n() {
            var e, o;
            s(this, n);
            for (var r = arguments.length, i = Array(r), c = 0; c < r; c++)
              i[c] = arguments[c];
            return (
              (e = o = a(this, t.call.apply(t, [this].concat(i)))),
              (o.state = { value: o.getValue() }),
              (o.onUpdate = function(t, e) {
                0 != ((0 | o.observedBits) & e) &&
                  o.setState({ value: o.getValue() });
              }),
              a(o, e)
            );
          }
          return (
            c(n, t),
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
              return this.context[p] ? this.context[p].get() : e;
            }),
            (n.prototype.render = function() {
              return ((t = this.props.children), Array.isArray(t) ? t[0] : t)(
                this.state.value
              );
              var t;
            }),
            n
          );
        })(t.Component);
        return (
          (l.contextTypes = (((u = {})[p] = o.default.object), u)),
          { Provider: f, Consumer: l }
        );
      }),
      (e.exports = n.default);
  });
n(U);
var z = n(
    o(function(e, n) {
      n.__esModule = !0;
      var o = i(t),
        r = i(U);
      function i(t) {
        return t && t.__esModule ? t : { default: t };
      }
      (n.default = o.default.createContext || r.default),
        (e.exports = n.default);
    })
  ),
  B = z(null),
  D = function(e) {
    var n = x(e);
    return function(o) {
      return t.createElement(B.Consumer, null, function(r) {
        if (null === r)
          throw new Error(
            "Couldn't find Yandex.Maps API in the context. Make sure that <" +
              n +
              ' /> is inside <YMaps /> provider'
          );
        return t.createElement(e, Object.assign({}, { ymaps: r }, o));
      });
    };
  },
  F = z(null),
  L = function(e) {
    return function(n) {
      return t.createElement(F.Consumer, null, function(o) {
        return t.createElement(e, Object.assign({}, { parent: o }, n));
      });
    };
  };
function W(e, n, o) {
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
          i = T(this.props, ['onLoad', 'onError', 'modules', 'ymaps']);
        return (
          r && t.createElement(e, Object.assign({}, { ymaps: o.getApi() }, i))
        );
      }),
      i
    );
  })(t.Component);
  return (
    (r.defaultProps = {
      onLoad: Function.prototype,
      onError: Function.prototype,
      modules: [],
    }),
    D(r)
  );
}
var N = { lang: 'ru_RU', load: '', ns: '', mode: 'release' },
  I = {},
  q = function(t) {
    var e = Date.now().toString(32);
    (this.options = t),
      (this.namespace = t.query.ns || N.ns),
      (this.onload = '__yandex-maps-api-onload__$$' + e),
      (this.onerror = '__yandex-maps-api-onerror__$$' + e);
  };
(q.prototype.getApi = function() {
  return 'undefined' != typeof window && this.namespace
    ? window[this.namespace]
    : this.api;
}),
  (q.prototype.setApi = function(t) {
    return (this.api = t);
  }),
  (q.prototype.getPromise = function() {
    return this.namespace ? I[this.namespace] : this.promise;
  }),
  (q.prototype.setPromise = function(t) {
    return this.namespace
      ? (I[this.namespace] = this.promise = t)
      : (this.promise = t);
  }),
  (q.prototype.load = function() {
    var t = this;
    if (this.getApi()) return Promise.resolve(this.setApi(this.getApi()));
    if (this.getPromise()) return this.setPromise(this.getPromise());
    var e = Object.assign(
        { onload: this.onload, onerror: this.onerror },
        N,
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
  (q.prototype.fetchScript = function(t) {
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
  (q.prototype.loadModule = function(t) {
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
  (q._name = '__react-yandex-maps__');
var G = (function(e) {
  function n(t) {
    e.call(this, t), (this.ymaps = new q(t));
  }
  return (
    e && (n.__proto__ = e),
    ((n.prototype = Object.create(e && e.prototype)).constructor = n),
    (n.prototype.componentDidMount = function() {
      !0 === this.props.preload && this.ymaps.load();
    }),
    (n.prototype.render = function() {
      return t.createElement(
        B.Provider,
        { value: this.ymaps },
        this.props.children
      );
    }),
    n
  );
})(t.Component);
G.defaultProps = {
  version: '2.1',
  enterprise: !1,
  query: { lang: 'ru_RU', load: '', ns: '' },
  preload: !1,
};
var Z = /^on(?=[A-Z])/;
function V(t) {
  return Object.keys(t).reduce(
    function(e, n) {
      if (Z.test(n)) {
        var o = n.replace(Z, '').toLowerCase();
        e._events[o] = t[n];
      } else e[n] = t[n];
      return e;
    },
    { _events: {} }
  );
}
function Y(t, e, n) {
  'function' == typeof n && t.events.add(e, n);
}
function H(t, e, n) {
  'function' == typeof n && t.events.remove(e, n);
}
function J(t, e, n) {
  Object.keys(Object.assign({}, e, n)).forEach(function(o) {
    e[o] !== n[o] && (H(t, o, e[o]), Y(t, o, n[o]));
  });
}
var K = function(t) {
  return 'default' + t.charAt(0).toUpperCase() + t.slice(1);
};
function Q(t, e) {
  return void 0 !== t[e] || void 0 === t[K(e)];
}
function X(t, e, n) {
  return (Q(t, e) ? t[e] : t[K(e)]) || n;
}
function tt(t, e, n) {
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
function et(t) {
  var e = t.width,
    n = t.height,
    o = t.style,
    r = t.className;
  return void 0 !== o || void 0 !== r
    ? Object.assign({}, o && { style: o }, r && { className: r })
    : { style: { width: e, height: n } };
}
var nt = (function(e) {
  function n() {
    var t = this;
    e.call(this),
      (this.state = { instance: null }),
      (this._parentElement = null),
      (this._getRef = function(e) {
        t._parentElement = e;
      });
  }
  return (
    e && (n.__proto__ = e),
    ((n.prototype = Object.create(e && e.prototype)).constructor = n),
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
      var e = et(this.props),
        n = V(this.props),
        o = T(n, [
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
      return t.createElement(
        F.Provider,
        { value: this.state.instance },
        t.createElement(
          'div',
          Object.assign({}, { ref: this._getRef }, e, o),
          this.props.children
        )
      );
    }),
    (n.mountObject = function(t, e, n) {
      var o = V(n),
        r = o.instanceRef,
        i = o._events,
        s = new e(t, X(n, 'state'), X(n, 'options'));
      return (
        Object.keys(i).forEach(function(t) {
          return Y(s, t, i[t]);
        }),
        tt(null, r, s),
        s
      );
    }),
    (n.updateObject = function(t, e, n) {
      var o = V(n),
        r = o._events,
        i = o.instanceRef,
        s = V(e),
        a = s._events,
        c = s.instanceRef;
      if (Q(n, 'state')) {
        var u = X(e, 'state', {}),
          p = X(n, 'state', {});
        u.type !== p.type && t.setType(p.type),
          u.behaviors !== p.behaviors &&
            (u.behaviors && t.behaviors.disable(u.behaviors),
            p.behaviors && t.behaviors.enable(p.behaviors)),
          p.zoom && u.zoom !== p.zoom && t.setZoom(p.zoom),
          p.center && u.center !== p.center && t.setCenter(p.center),
          p.bounds && u.bounds !== p.bounds && t.setBounds(p.bounds);
      }
      if (Q(n, 'options')) {
        var f = X(e, 'options'),
          l = X(n, 'options', {});
        f !== l && t.options.set(l);
      }
      (X(e, 'width') === X(n, 'width') && X(e, 'height') === X(n, 'height')) ||
        t.container.fitToViewport(),
        J(t, a, r),
        tt(c, i, t);
    }),
    (n.unmountObject = function(t, e) {
      var n = V(e),
        o = n.instanceRef,
        r = n._events;
      null !== t &&
        (Object.keys(r).forEach(function(e) {
          return H(t, e, r[e]);
        }),
        t.destroy(),
        tt(o));
    }),
    n
  );
})(t.Component);
nt.defaultProps = { width: 320, height: 240 };
var ot = W(nt, !0, ['Map']),
  rt = (function(e) {
    function n() {
      var t = this;
      e.call(this),
        (this.state = { instance: null }),
        (this._parentElement = null),
        (this._getRef = function(e) {
          t._parentElement = e;
        });
    }
    return (
      e && (n.__proto__ = e),
      ((n.prototype = Object.create(e && e.prototype)).constructor = n),
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
        (this._mounted = !1), n.unmountObject(this.state.instance, this.props);
      }),
      (n.prototype.render = function() {
        var e = et(this.props);
        return t.createElement(
          'div',
          Object.assign({}, { ref: this._getRef }, e)
        );
      }),
      (n.mountObject = function(t, e, n) {
        var o = V(n),
          r = o.instanceRef,
          i = o._events,
          s = X(n, 'point'),
          a = X(n, 'locateOptions'),
          c = X(n, 'options');
        return new Promise(function(n, o) {
          e.locate(s, a).done(function(o) {
            if (o.length > 0) {
              var s = new e.Player(t, o[0], c);
              tt(null, r, s),
                Object.keys(i).forEach(function(t) {
                  return Y(s, t, i[t]);
                }),
                n(s);
            }
          }, o);
        });
      }),
      (n.updateObject = function(t, e, n) {
        var o = V(n),
          r = o._events,
          i = o.instanceRef,
          s = V(e),
          a = s._events,
          c = s.instanceRef;
        if (Q(n, 'options')) {
          var u = X(e, 'options'),
            p = X(n, 'options');
          u !== p && t.options.set(p);
        }
        if (Q(n, 'point')) {
          var f = X(n, 'point'),
            l = X(e, 'point'),
            d = X(n, 'locateOptions');
          f !== l && t.moveTo(f, d);
        }
        J(t, a, r), tt(c, i, t);
      }),
      (n.unmountObject = function(t, e) {
        var n = V(e),
          o = n.instanceRef,
          r = n._events;
        null !== t &&
          (Object.keys(r).forEach(function(e) {
            return H(t, e, r[e]);
          }),
          tt(o));
      }),
      n
    );
  })(t.Component);
rt.defaultProps = { width: 320, height: 240 };
var it,
  st = W(rt, !0, [
    'panorama.isSupported',
    'panorama.locate',
    'panorama.createPlayer',
    'panorama.Player',
  ]),
  at = (function(e) {
    function n() {
      e.call(this), (this.state = { instance: null });
    }
    return (
      e && (n.__proto__ = e),
      ((n.prototype = Object.create(e && e.prototype)).constructor = n),
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
        return t.createElement(
          F.Provider,
          { value: this.state.instance },
          this.props.children
        );
      }),
      (n.mountControl = function(t, e) {
        var n = V(e),
          o = n.instanceRef,
          r = n.parent,
          i = n.lazy,
          s = n._events,
          a = new t({
            data: X(e, 'data'),
            options: X(e, 'options'),
            state: X(e, 'state'),
            mapTypes: X(e, 'mapTypes'),
            lazy: i,
          });
        if (
          (Object.keys(s).forEach(function(t) {
            return Y(a, t, s[t]);
          }),
          r && r.controls && 'function' == typeof r.controls.add)
        )
          r.controls.add(a);
        else {
          if (!r || !r.add || 'function' != typeof r.add)
            throw new Error('No parent found to mount ' + e.name);
          r.add(a);
        }
        return tt(null, o, a), a;
      }),
      (n.updateControl = function(t, e, n) {
        var o = V(n),
          r = o._events,
          i = o.instanceRef,
          s = V(e),
          a = s._events,
          c = s.instanceRef;
        if (Q(n, 'options')) {
          var u = X(e, 'options'),
            p = X(n, 'options');
          u !== p && t.options.set(p);
        }
        if (Q(n, 'data')) {
          var f = X(e, 'data'),
            l = X(n, 'data');
          f !== l && t.data.set(l);
        }
        if (Q(n, 'state')) {
          var d = X(e, 'state'),
            h = X(n, 'state');
          d !== h && t.state.set(h);
        }
        if (Q(n, 'mapTypes')) {
          var y = X(e, 'mapTypes'),
            m = X(n, 'mapTypes');
          y !== m &&
            (t.removeAllMapTypes(),
            m.forEach(function(e) {
              return t.addMapType(e);
            }));
        }
        J(t, a, r), tt(c, i, t);
      }),
      (n.unmountControl = function(t, e) {
        var n = V(e),
          o = n.instanceRef,
          r = n.parent,
          i = n._events;
        null !== t &&
          (Object.keys(i).forEach(function(e) {
            return H(t, e, i[e]);
          }),
          r.controls && 'function' == typeof r.controls.remove
            ? r.controls.remove(t)
            : r.remove && 'function' == typeof r.remove && r.remove(t),
          tt(o));
      }),
      n
    );
  })(t.Component),
  ct = L(
    W(
      function(e) {
        return t.createElement(at, Object.assign({}, e, { name: 'Button' }));
      },
      !0,
      ['control.Button']
    )
  ),
  ut = L(
    W(
      function(e) {
        return t.createElement(
          at,
          Object.assign({}, e, { name: 'FullscreenControl' })
        );
      },
      !0,
      ['control.FullscreenControl']
    )
  ),
  pt = L(
    W(
      function(e) {
        return t.createElement(
          at,
          Object.assign({}, e, { name: 'GeolocationControl' })
        );
      },
      !0,
      ['control.GeolocationControl']
    )
  ),
  ft = L(
    W(
      function(e) {
        return t.createElement(at, Object.assign({}, e, { name: 'ListBox' }));
      },
      !0,
      ['control.ListBox']
    )
  ),
  lt = L(
    W(
      function(e) {
        return t.createElement(
          at,
          Object.assign({}, e, { name: 'ListBoxItem' })
        );
      },
      !0,
      ['control.ListBoxItem']
    )
  ),
  dt = L(
    W(
      function(e) {
        return t.createElement(
          at,
          Object.assign({}, e, { name: 'RouteButton' })
        );
      },
      !0,
      ['control.RouteButton']
    )
  ),
  ht = L(
    W(
      function(e) {
        return t.createElement(
          at,
          Object.assign({}, e, { name: 'RouteEditor' })
        );
      },
      !0,
      ['control.RouteEditor']
    )
  ),
  yt = L(
    W(
      function(e) {
        return t.createElement(
          at,
          Object.assign({}, e, { name: 'RoutePanel' })
        );
      },
      !0,
      ['control.RoutePanel']
    )
  ),
  mt = L(
    W(
      function(e) {
        return t.createElement(
          at,
          Object.assign({}, e, { name: 'RulerControl' })
        );
      },
      !0,
      ['control.RulerControl']
    )
  ),
  vt = L(
    W(
      function(e) {
        return t.createElement(
          at,
          Object.assign({}, e, { name: 'SearchControl' })
        );
      },
      !0,
      ['control.SearchControl']
    )
  ),
  bt = L(
    W(
      function(e) {
        return t.createElement(
          at,
          Object.assign({}, e, { name: 'TrafficControl' })
        );
      },
      !0,
      ['control.TrafficControl']
    )
  ),
  _t = L(
    W(
      function(e) {
        return t.createElement(
          at,
          Object.assign({}, e, { name: 'TypeSelector' })
        );
      },
      !0,
      ['control.TypeSelector']
    )
  ),
  gt = L(
    W(
      function(e) {
        return t.createElement(
          at,
          Object.assign({}, e, { name: 'ZoomControl' })
        );
      },
      !0,
      ['control.ZoomControl']
    )
  ),
  jt = L(
    W(
      (function(e) {
        function n() {
          e.call(this), (this.state = { instance: null });
        }
        return (
          e && (n.__proto__ = e),
          ((n.prototype = Object.create(e && e.prototype)).constructor = n),
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
            return t.createElement(
              F.Provider,
              { value: this.state.instance },
              this.props.children
            );
          }),
          (n.mountObject = function(t, e) {
            var n = V(e),
              o = n.instanceRef,
              r = n.parent,
              i = n._events,
              s = new t(X(e, 'options'));
            if (
              (Object.keys(i).forEach(function(t) {
                return Y(s, t, i[t]);
              }),
              r.geoObjects && 'function' == typeof r.geoObjects.add)
            )
              r.geoObjects.add(s);
            else {
              if (!r.add || 'function' != typeof r.add)
                throw new Error('No parent found to mount Clusterer');
              r.add(s);
            }
            return tt(null, o, s), s;
          }),
          (n.updateObject = function(t, e, n) {
            var o = V(n),
              r = o._events,
              i = o.instanceRef,
              s = V(e),
              a = s._events,
              c = s.instanceRef;
            if (Q(n, 'options')) {
              var u = X(e, 'options'),
                p = X(n, 'options');
              u !== p && t.options.set(p);
            }
            J(t, a, r), tt(c, i, t);
          }),
          (n.unmountObject = function(t, e) {
            var n = V(e),
              o = n.instanceRef,
              r = n.parent,
              i = n._events;
            null !== t &&
              (Object.keys(i).forEach(function(e) {
                return H(t, e, i[e]);
              }),
              r.geoObjects && 'function' == typeof r.geoObjects.remove
                ? r.geoObjects.remove(t)
                : r.remove && 'function' == typeof r.remove && r.remove(t),
              tt(o));
          }),
          n
        );
      })(t.Component),
      !0,
      ['Clusterer']
    )
  ),
  Ot = 'object' == typeof e && e && e.Object === Object && e,
  wt = 'object' == typeof self && self && self.Object === Object && self,
  Et = Ot || wt || Function('return this')(),
  Ct = Et.Symbol,
  Pt = Object.prototype,
  Rt = Pt.hasOwnProperty,
  St = Pt.toString,
  Mt = Ct ? Ct.toStringTag : void 0,
  xt = Object.prototype.toString,
  Tt = Ct ? Ct.toStringTag : void 0,
  $t = function(t) {
    return null == t
      ? void 0 === t
        ? '[object Undefined]'
        : '[object Null]'
      : Tt && Tt in Object(t)
      ? (function(t) {
          var e = Rt.call(t, Mt),
            n = t[Mt];
          try {
            t[Mt] = void 0;
          } catch (t) {}
          var o = St.call(t);
          return e ? (t[Mt] = n) : delete t[Mt], o;
        })(t)
      : (function(t) {
          return xt.call(t);
        })(t);
  },
  At = function(t) {
    var e = typeof t;
    return null != t && ('object' == e || 'function' == e);
  },
  kt = function(t) {
    if (!At(t)) return !1;
    var e = $t(t);
    return (
      '[object Function]' == e ||
      '[object GeneratorFunction]' == e ||
      '[object AsyncFunction]' == e ||
      '[object Proxy]' == e
    );
  },
  Ut = Et['__core-js_shared__'],
  zt = (it = /[^.]+$/.exec((Ut && Ut.keys && Ut.keys.IE_PROTO) || ''))
    ? 'Symbol(src)_1.' + it
    : '',
  Bt = Function.prototype.toString,
  Dt = /^\[object .+?Constructor\]$/,
  Ft = Function.prototype,
  Lt = Object.prototype,
  Wt = RegExp(
    '^' +
      Ft.toString
        .call(Lt.hasOwnProperty)
        .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
        .replace(
          /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
          '$1.*?'
        ) +
      '$'
  ),
  Nt = function(t, e) {
    var n = (function(t, e) {
      return null == t ? void 0 : t[e];
    })(t, e);
    return (function(t) {
      return (
        !(!At(t) || ((e = t), zt && zt in e)) &&
        (kt(t) ? Wt : Dt).test(
          (function(t) {
            if (null != t) {
              try {
                return Bt.call(t);
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
  It = Nt(Object, 'create'),
  qt = Object.prototype.hasOwnProperty,
  Gt = Object.prototype.hasOwnProperty;
function Zt(t) {
  var e = -1,
    n = null == t ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var o = t[e];
    this.set(o[0], o[1]);
  }
}
(Zt.prototype.clear = function() {
  (this.__data__ = It ? It(null) : {}), (this.size = 0);
}),
  (Zt.prototype.delete = function(t) {
    var e = this.has(t) && delete this.__data__[t];
    return (this.size -= e ? 1 : 0), e;
  }),
  (Zt.prototype.get = function(t) {
    var e = this.__data__;
    if (It) {
      var n = e[t];
      return '__lodash_hash_undefined__' === n ? void 0 : n;
    }
    return qt.call(e, t) ? e[t] : void 0;
  }),
  (Zt.prototype.has = function(t) {
    var e = this.__data__;
    return It ? void 0 !== e[t] : Gt.call(e, t);
  }),
  (Zt.prototype.set = function(t, e) {
    var n = this.__data__;
    return (
      (this.size += this.has(t) ? 0 : 1),
      (n[t] = It && void 0 === e ? '__lodash_hash_undefined__' : e),
      this
    );
  });
var Vt = Zt,
  Yt = function(t, e) {
    for (var n = t.length; n--; )
      if ((o = t[n][0]) === (r = e) || (o != o && r != r)) return n;
    var o, r;
    return -1;
  },
  Ht = Array.prototype.splice;
function Jt(t) {
  var e = -1,
    n = null == t ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var o = t[e];
    this.set(o[0], o[1]);
  }
}
(Jt.prototype.clear = function() {
  (this.__data__ = []), (this.size = 0);
}),
  (Jt.prototype.delete = function(t) {
    var e = this.__data__,
      n = Yt(e, t);
    return !(
      n < 0 || (n == e.length - 1 ? e.pop() : Ht.call(e, n, 1), --this.size, 0)
    );
  }),
  (Jt.prototype.get = function(t) {
    var e = this.__data__,
      n = Yt(e, t);
    return n < 0 ? void 0 : e[n][1];
  }),
  (Jt.prototype.has = function(t) {
    return Yt(this.__data__, t) > -1;
  }),
  (Jt.prototype.set = function(t, e) {
    var n = this.__data__,
      o = Yt(n, t);
    return o < 0 ? (++this.size, n.push([t, e])) : (n[o][1] = e), this;
  });
var Kt = Jt,
  Qt = Nt(Et, 'Map'),
  Xt = function(t, e) {
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
function te(t) {
  var e = -1,
    n = null == t ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var o = t[e];
    this.set(o[0], o[1]);
  }
}
(te.prototype.clear = function() {
  (this.size = 0),
    (this.__data__ = {
      hash: new Vt(),
      map: new (Qt || Kt)(),
      string: new Vt(),
    });
}),
  (te.prototype.delete = function(t) {
    var e = Xt(this, t).delete(t);
    return (this.size -= e ? 1 : 0), e;
  }),
  (te.prototype.get = function(t) {
    return Xt(this, t).get(t);
  }),
  (te.prototype.has = function(t) {
    return Xt(this, t).has(t);
  }),
  (te.prototype.set = function(t, e) {
    var n = Xt(this, t),
      o = n.size;
    return n.set(t, e), (this.size += n.size == o ? 0 : 1), this;
  });
var ee = te;
function ne(t) {
  var e = -1,
    n = null == t ? 0 : t.length;
  for (this.__data__ = new ee(); ++e < n; ) this.add(t[e]);
}
(ne.prototype.add = ne.prototype.push = function(t) {
  return this.__data__.set(t, '__lodash_hash_undefined__'), this;
}),
  (ne.prototype.has = function(t) {
    return this.__data__.has(t);
  });
var oe,
  re,
  ie,
  se = ne,
  ae = function(t) {
    return t != t;
  },
  ce = function(t, e) {
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
            })(t, ae);
      })(t, e) > -1
    );
  },
  ue = function(t, e, n) {
    for (var o = -1, r = null == t ? 0 : t.length; ++o < r; )
      if (n(e, t[o])) return !0;
    return !1;
  },
  pe = function(t, e) {
    return t.has(e);
  },
  fe = function(t, e) {
    for (var n = -1, o = e.length, r = t.length; ++n < o; ) t[r + n] = e[n];
    return t;
  },
  le = function(t) {
    return null != t && 'object' == typeof t;
  },
  de = function(t) {
    return le(t) && '[object Arguments]' == $t(t);
  },
  he = Object.prototype,
  ye = he.hasOwnProperty,
  me = he.propertyIsEnumerable,
  ve = de(
    (function() {
      return arguments;
    })()
  )
    ? de
    : function(t) {
        return le(t) && ye.call(t, 'callee') && !me.call(t, 'callee');
      },
  be = Array.isArray,
  _e = Ct ? Ct.isConcatSpreadable : void 0,
  ge = function(t) {
    return be(t) || ve(t) || !!(_e && t && t[_e]);
  },
  je = function(t) {
    return t;
  },
  Oe = Math.max,
  we = (function() {
    try {
      var t = Nt(Object, 'defineProperty');
      return t({}, '', {}), t;
    } catch (t) {}
  })(),
  Ee = Date.now,
  Ce =
    ((oe = we
      ? function(t, e) {
          return we(t, 'toString', {
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
      : je),
    (re = 0),
    (ie = 0),
    function() {
      var t = Ee(),
        e = 16 - (t - ie);
      if (((ie = t), e > 0)) {
        if (++re >= 800) return arguments[0];
      } else re = 0;
      return oe.apply(void 0, arguments);
    }),
  Pe = function(t) {
    return (
      le(t) &&
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
          !kt(t)
        );
      })(t)
    );
  },
  Re = (function(t, e) {
    return Ce(
      (function(t, e, n) {
        return (
          (e = Oe(void 0 === e ? t.length - 1 : e, 0)),
          function() {
            for (
              var o = arguments, r = -1, i = Oe(o.length - e, 0), s = Array(i);
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
      })(t, void 0, je),
      t + ''
    );
  })(function(t, e) {
    var n,
      o = (n = null == e ? 0 : e.length) ? e[n - 1] : void 0;
    return (
      Pe(o) && (o = void 0),
      Pe(t)
        ? (function(t, e, n, o) {
            var r = -1,
              i = ce,
              s = !0,
              a = t.length,
              c = [],
              u = e.length;
            if (!a) return c;
            o
              ? ((i = ue), (s = !1))
              : e.length >= 200 && ((i = pe), (s = !1), (e = new se(e)));
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
              for (o || (o = ge), i || (i = []); ++s < a; ) {
                var c = e[s];
                n > 0 && o(c)
                  ? n > 1
                    ? t(c, n - 1, o, r, i)
                    : fe(i, c)
                  : r || (i[i.length] = c);
              }
              return i;
            })(e, 1, Pe, !0),
            0,
            o
          )
        : []
    );
  }),
  Se = L(
    W(
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
            var n = V(e),
              o = n.instanceRef,
              r = n.parent,
              i = n._events,
              s = X(e, 'options', {}),
              a = X(e, 'features', {}),
              c = X(e, 'filter', null),
              u = X(e, 'objects', {}),
              p = X(e, 'clusters', {}),
              f = new t(s);
            if (
              (f.add(a || []),
              f.setFilter(c),
              f.objects.options.set(u),
              f.clusters.options.set(p),
              Object.keys(i).forEach(function(t) {
                return Y(f, t, i[t]);
              }),
              r.geoObjects && 'function' == typeof r.geoObjects.add)
            )
              r.geoObjects.add(f);
            else {
              if (!r.add || 'function' != typeof r.add)
                throw new Error('No parent found to mount ObjectManager');
              r.add(f);
            }
            return tt(null, o, f), f;
          }),
          (e.updateObject = function(t, e, n) {
            var o = V(n),
              r = o._events,
              i = o.instanceRef,
              s = V(e),
              a = s._events,
              c = s.instanceRef;
            if (Q(n, 'options')) {
              var u = X(e, 'options'),
                p = X(n, 'options');
              u !== p && t.options.set(p);
            }
            if (Q(n, 'objects')) {
              var f = X(e, 'objects'),
                l = X(n, 'objects');
              f !== l && t.objects.options.set(l);
            }
            if (Q(n, 'clusters')) {
              var d = X(e, 'clusters'),
                h = X(n, 'clusters');
              d !== h && t.clusters.options.set(h);
            }
            if (Q(n, 'filter')) {
              var y = X(e, 'filter'),
                m = X(n, 'filter');
              y !== m && t.setFilter(m);
            }
            if (Q(n, 'features')) {
              var v = X(e, 'features'),
                b = X(n, 'features');
              if (v !== b) {
                var _ = Re(v, b, function(t, e) {
                    return t.id === e.id;
                  }),
                  g = Re(b, v, function(t, e) {
                    return t.id === e.id;
                  });
                t.remove(_), t.add(g);
              }
            }
            J(t, a, r), tt(c, i, t);
          }),
          (e.unmountObject = function(t, e) {
            var n = V(e),
              o = n.instanceRef,
              r = n.parent,
              i = n._events;
            null !== t &&
              (Object.keys(i).forEach(function(e) {
                return H(t, e, i[e]);
              }),
              r.geoObjects && 'function' == typeof r.geoObjects.remove
                ? r.geoObjects.remove(t)
                : r.remove && 'function' == typeof r.remove && r.remove(t),
              tt(o));
          }),
          e
        );
      })(t.Component),
      !0,
      ['ObjectManager']
    )
  ),
  Me = (function(t) {
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
        var n = V(e),
          o = n.instanceRef,
          r = n.parent,
          i = n._events,
          s = new t(X(e, 'geometry'), X(e, 'properties'), X(e, 'options'));
        if (
          (Object.keys(i).forEach(function(t) {
            return Y(s, t, i[t]);
          }),
          r && r.geoObjects && 'function' == typeof r.geoObjects.add)
        )
          r.geoObjects.add(s);
        else {
          if (!r || !r.add || 'function' != typeof r.add)
            throw new Error('No parent found to mount ' + e.name);
          r.add(s);
        }
        return tt(null, o, s), s;
      }),
      (e.updateObject = function(t, e, n) {
        var o = V(n),
          r = o._events,
          i = o.instanceRef,
          s = V(e),
          a = s._events,
          c = s.instanceRef;
        if (Q(n, 'geometry')) {
          var u = X(e, 'geometry', {}),
            p = X(n, 'geometry', {});
          Array.isArray(p) && p !== u
            ? Array.isArray(p[0]) && 'number' == typeof p[1]
              ? (t.geometry.setCoordinates(p[0]), t.geometry.setRadius(p[1]))
              : t.geometry.setCoordinates(p)
            : 'object' == typeof p &&
              (p.coordinates !== u.coordinates &&
                t.geometry.setCoordinates(p.coordinates),
              p.radius !== u.radius && t.geometry.setRadius(p.radius));
        }
        if (Q(n, 'properties')) {
          var f = X(e, 'properties'),
            l = X(n, 'properties');
          f !== l && t.properties.set(l);
        }
        if (Q(n, 'options')) {
          var d = X(e, 'options'),
            h = X(n, 'options');
          d !== h && t.options.set(h);
        }
        J(t, a, r), tt(c, i, t);
      }),
      (e.unmountObject = function(t, e) {
        var n = V(e),
          o = n.instanceRef,
          r = n.parent,
          i = n._events;
        null !== t &&
          (Object.keys(i).forEach(function(e) {
            return H(t, e, i[e]);
          }),
          r.geoObjects && 'function' == typeof r.geoObjects.remove
            ? r.geoObjects.remove(t)
            : r.remove && 'function' == typeof r.remove && r.remove(t),
          tt(o));
      }),
      e
    );
  })(t.Component),
  xe = {
    modifyConstructor: function(t) {
      function e(e, n, o) {
        t.call(this, { geometry: e, properties: n }, o);
      }
      return (e.prototype = t.prototype), e;
    },
  },
  Te = L(
    W(
      function(e) {
        return t.createElement(
          Me,
          Object.assign({}, e, { name: 'GeoObject', dangerZone: xe })
        );
      },
      !0,
      ['GeoObject']
    )
  ),
  $e = L(
    W(
      function(e) {
        return t.createElement(Me, Object.assign({}, e, { name: 'Circle' }));
      },
      !0,
      ['Circle']
    )
  ),
  Ae = L(
    W(
      function(e) {
        return t.createElement(Me, Object.assign({}, e, { name: 'Placemark' }));
      },
      !0,
      ['Placemark']
    )
  ),
  ke = L(
    W(
      function(e) {
        return t.createElement(Me, Object.assign({}, e, { name: 'Polygon' }));
      },
      !0,
      ['Polygon']
    )
  ),
  Ue = L(
    W(
      function(e) {
        return t.createElement(Me, Object.assign({}, e, { name: 'Polyline' }));
      },
      !0,
      ['Polyline']
    )
  ),
  ze = L(
    W(
      function(e) {
        return t.createElement(Me, Object.assign({}, e, { name: 'Rectangle' }));
      },
      !0,
      ['Rectangle']
    )
  );
export {
  W as withYMaps,
  G as YMaps,
  ot as Map,
  st as Panorama,
  ct as Button,
  ut as FullscreenControl,
  pt as GeolocationControl,
  ft as ListBox,
  lt as ListBoxItem,
  dt as RouteButton,
  ht as RouteEditor,
  yt as RoutePanel,
  mt as RulerControl,
  vt as SearchControl,
  bt as TrafficControl,
  _t as TypeSelector,
  gt as ZoomControl,
  jt as Clusterer,
  Se as ObjectManager,
  Te as GeoObject,
  $e as Circle,
  Ae as Placemark,
  ke as Polygon,
  Ue as Polyline,
  ze as Rectangle,
};
//# sourceMappingURL=react-yandex-maps.esm.js.map
