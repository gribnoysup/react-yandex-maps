var e,
  t =
    (e = require('react')) && 'object' == typeof e && 'default' in e
      ? e.default
      : e,
  n =
    'undefined' != typeof globalThis
      ? globalThis
      : 'undefined' != typeof window
      ? window
      : 'undefined' != typeof global
      ? global
      : 'undefined' != typeof self
      ? self
      : {};
function o(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
function r(e, t) {
  return e((t = { exports: {} }), t.exports), t.exports;
}
var a = 'function' == typeof Symbol && Symbol.for;
a && Symbol.for('react.element'),
  a && Symbol.for('react.portal'),
  a && Symbol.for('react.fragment'),
  a && Symbol.for('react.strict_mode'),
  a && Symbol.for('react.profiler'),
  a && Symbol.for('react.provider'),
  a && Symbol.for('react.context'),
  a && Symbol.for('react.async_mode'),
  a && Symbol.for('react.concurrent_mode'),
  a && Symbol.for('react.forward_ref'),
  a && Symbol.for('react.suspense'),
  a && Symbol.for('react.suspense_list'),
  a && Symbol.for('react.memo'),
  a && Symbol.for('react.lazy'),
  a && Symbol.for('react.block'),
  a && Symbol.for('react.fundamental'),
  a && Symbol.for('react.responder'),
  a && Symbol.for('react.scope');
var i = r(function(e, t) {
    !(function() {
      var e = 'function' == typeof Symbol && Symbol.for,
        n = e ? Symbol.for('react.element') : 60103,
        o = e ? Symbol.for('react.portal') : 60106,
        r = e ? Symbol.for('react.fragment') : 60107,
        a = e ? Symbol.for('react.strict_mode') : 60108,
        i = e ? Symbol.for('react.profiler') : 60114,
        s = e ? Symbol.for('react.provider') : 60109,
        p = e ? Symbol.for('react.context') : 60110,
        u = e ? Symbol.for('react.async_mode') : 60111,
        c = e ? Symbol.for('react.concurrent_mode') : 60111,
        f = e ? Symbol.for('react.forward_ref') : 60112,
        l = e ? Symbol.for('react.suspense') : 60113,
        d = e ? Symbol.for('react.suspense_list') : 60120,
        y = e ? Symbol.for('react.memo') : 60115,
        h = e ? Symbol.for('react.lazy') : 60116,
        m = e ? Symbol.for('react.block') : 60121,
        v = e ? Symbol.for('react.fundamental') : 60117,
        b = e ? Symbol.for('react.responder') : 60118,
        g = e ? Symbol.for('react.scope') : 60119;
      function O(e) {
        if ('object' == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case n:
              var d = e.type;
              switch (d) {
                case u:
                case c:
                case r:
                case i:
                case a:
                case l:
                  return d;
                default:
                  var m = d && d.$$typeof;
                  switch (m) {
                    case p:
                    case f:
                    case h:
                    case y:
                    case s:
                      return m;
                    default:
                      return t;
                  }
              }
            case o:
              return t;
          }
        }
      }
      var _ = c,
        j = p,
        w = s,
        x = n,
        S = f,
        E = r,
        T = h,
        R = y,
        P = o,
        C = i,
        M = a,
        A = l,
        k = !1;
      function I(e) {
        return O(e) === c;
      }
      (t.AsyncMode = u),
        (t.ConcurrentMode = _),
        (t.ContextConsumer = j),
        (t.ContextProvider = w),
        (t.Element = x),
        (t.ForwardRef = S),
        (t.Fragment = E),
        (t.Lazy = T),
        (t.Memo = R),
        (t.Portal = P),
        (t.Profiler = C),
        (t.StrictMode = M),
        (t.Suspense = A),
        (t.isAsyncMode = function(e) {
          return (
            k ||
              ((k = !0),
              console.warn(
                'The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.'
              )),
            I(e) || O(e) === u
          );
        }),
        (t.isConcurrentMode = I),
        (t.isContextConsumer = function(e) {
          return O(e) === p;
        }),
        (t.isContextProvider = function(e) {
          return O(e) === s;
        }),
        (t.isElement = function(e) {
          return 'object' == typeof e && null !== e && e.$$typeof === n;
        }),
        (t.isForwardRef = function(e) {
          return O(e) === f;
        }),
        (t.isFragment = function(e) {
          return O(e) === r;
        }),
        (t.isLazy = function(e) {
          return O(e) === h;
        }),
        (t.isMemo = function(e) {
          return O(e) === y;
        }),
        (t.isPortal = function(e) {
          return O(e) === o;
        }),
        (t.isProfiler = function(e) {
          return O(e) === i;
        }),
        (t.isStrictMode = function(e) {
          return O(e) === a;
        }),
        (t.isSuspense = function(e) {
          return O(e) === l;
        }),
        (t.isValidElementType = function(e) {
          return (
            'string' == typeof e ||
            'function' == typeof e ||
            e === r ||
            e === c ||
            e === i ||
            e === a ||
            e === l ||
            e === d ||
            ('object' == typeof e &&
              null !== e &&
              (e.$$typeof === h ||
                e.$$typeof === y ||
                e.$$typeof === s ||
                e.$$typeof === p ||
                e.$$typeof === f ||
                e.$$typeof === v ||
                e.$$typeof === b ||
                e.$$typeof === g ||
                e.$$typeof === m))
          );
        }),
        (t.typeOf = O);
    })();
  }),
  s = r(function(e) {
    e.exports = i;
  }),
  p = Object.getOwnPropertySymbols,
  u = Object.prototype.hasOwnProperty,
  c = Object.prototype.propertyIsEnumerable,
  f = (function() {
    try {
      if (!Object.assign) return !1;
      var e = new String('abc');
      if (((e[5] = 'de'), '5' === Object.getOwnPropertyNames(e)[0])) return !1;
      for (var t = {}, n = 0; n < 10; n++) t['_' + String.fromCharCode(n)] = n;
      if (
        '0123456789' !==
        Object.getOwnPropertyNames(t)
          .map(function(e) {
            return t[e];
          })
          .join('')
      )
        return !1;
      var o = {};
      return (
        'abcdefghijklmnopqrst'.split('').forEach(function(e) {
          o[e] = e;
        }),
        'abcdefghijklmnopqrst' === Object.keys(Object.assign({}, o)).join('')
      );
    } catch (e) {
      return !1;
    }
  })()
    ? Object.assign
    : function(e, t) {
        for (
          var n,
            o,
            r = (function(e) {
              if (null == e)
                throw new TypeError(
                  'Object.assign cannot be called with null or undefined'
                );
              return Object(e);
            })(e),
            a = 1;
          a < arguments.length;
          a++
        ) {
          for (var i in (n = Object(arguments[a])))
            u.call(n, i) && (r[i] = n[i]);
          if (p) {
            o = p(n);
            for (var s = 0; s < o.length; s++)
              c.call(n, o[s]) && (r[o[s]] = n[o[s]]);
          }
        }
        return r;
      },
  l = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
  d = Function.call.bind(Object.prototype.hasOwnProperty),
  y = function() {},
  h = l,
  m = {},
  v = d;
function b(e, t, n, o, r) {
  for (var a in e)
    if (v(e, a)) {
      var i;
      try {
        if ('function' != typeof e[a]) {
          var s = Error(
            (o || 'React class') +
              ': ' +
              n +
              ' type `' +
              a +
              '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
              typeof e[a] +
              '`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
          );
          throw ((s.name = 'Invariant Violation'), s);
        }
        i = e[a](t, a, o, n, null, h);
      } catch (e) {
        i = e;
      }
      if (
        (!i ||
          i instanceof Error ||
          y(
            (o || 'React class') +
              ': type specification of ' +
              n +
              ' `' +
              a +
              '` is invalid; the type checker function must return `null` or an `Error` but returned a ' +
              typeof i +
              '. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).'
          ),
        i instanceof Error && !(i.message in m))
      ) {
        m[i.message] = !0;
        var p = r ? r() : '';
        y('Failed ' + n + ' type: ' + i.message + (null != p ? p : ''));
      }
    }
}
(y = function(e) {
  var t = 'Warning: ' + e;
  'undefined' != typeof console && console.error(t);
  try {
    throw new Error(t);
  } catch (e) {}
}),
  (b.resetWarningCache = function() {
    m = {};
  });
var g = b,
  O = function() {};
function _() {
  return null;
}
O = function(e) {
  var t = 'Warning: ' + e;
  'undefined' != typeof console && console.error(t);
  try {
    throw new Error(t);
  } catch (e) {}
};
var j = r(function(e) {
    e.exports = (function(e, t) {
      var n = 'function' == typeof Symbol && Symbol.iterator,
        o = '@@iterator',
        r = '<<anonymous>>',
        a = {
          array: u('array'),
          bigint: u('bigint'),
          bool: u('boolean'),
          func: u('function'),
          number: u('number'),
          object: u('object'),
          string: u('string'),
          symbol: u('symbol'),
          any: p(_),
          arrayOf: function(e) {
            return p(function(t, n, o, r, a) {
              if ('function' != typeof e)
                return new i(
                  'Property `' +
                    a +
                    '` of component `' +
                    o +
                    '` has invalid PropType notation inside arrayOf.'
                );
              var s = t[n];
              if (!Array.isArray(s))
                return new i(
                  'Invalid ' +
                    r +
                    ' `' +
                    a +
                    '` of type `' +
                    h(s) +
                    '` supplied to `' +
                    o +
                    '`, expected an array.'
                );
              for (var p = 0; p < s.length; p++) {
                var u = e(s, p, o, r, a + '[' + p + ']', l);
                if (u instanceof Error) return u;
              }
              return null;
            });
          },
          element: p(function(t, n, o, r, a) {
            var s = t[n];
            return e(s)
              ? null
              : new i(
                  'Invalid ' +
                    r +
                    ' `' +
                    a +
                    '` of type `' +
                    h(s) +
                    '` supplied to `' +
                    o +
                    '`, expected a single ReactElement.'
                );
          }),
          elementType: p(function(e, t, n, o, r) {
            var a = e[t];
            return s.isValidElementType(a)
              ? null
              : new i(
                  'Invalid ' +
                    o +
                    ' `' +
                    r +
                    '` of type `' +
                    h(a) +
                    '` supplied to `' +
                    n +
                    '`, expected a single ReactElement type.'
                );
          }),
          instanceOf: function(e) {
            return p(function(t, n, o, a, s) {
              var p;
              return t[n] instanceof e
                ? null
                : new i(
                    'Invalid ' +
                      a +
                      ' `' +
                      s +
                      '` of type `' +
                      ((p = t[n]).constructor && p.constructor.name
                        ? p.constructor.name
                        : r) +
                      '` supplied to `' +
                      o +
                      '`, expected instance of `' +
                      (e.name || r) +
                      '`.'
                  );
            });
          },
          node: p(function(e, t, n, o, r) {
            return y(e[t])
              ? null
              : new i(
                  'Invalid ' +
                    o +
                    ' `' +
                    r +
                    '` supplied to `' +
                    n +
                    '`, expected a ReactNode.'
                );
          }),
          objectOf: function(e) {
            return p(function(t, n, o, r, a) {
              if ('function' != typeof e)
                return new i(
                  'Property `' +
                    a +
                    '` of component `' +
                    o +
                    '` has invalid PropType notation inside objectOf.'
                );
              var s = t[n],
                p = h(s);
              if ('object' !== p)
                return new i(
                  'Invalid ' +
                    r +
                    ' `' +
                    a +
                    '` of type `' +
                    p +
                    '` supplied to `' +
                    o +
                    '`, expected an object.'
                );
              for (var u in s)
                if (d(s, u)) {
                  var c = e(s, u, o, r, a + '.' + u, l);
                  if (c instanceof Error) return c;
                }
              return null;
            });
          },
          oneOf: function(e) {
            return Array.isArray(e)
              ? p(function(t, n, o, r, a) {
                  for (var s = t[n], p = 0; p < e.length; p++)
                    if (
                      (u = s) === (c = e[p])
                        ? 0 !== u || 1 / u == 1 / c
                        : u != u && c != c
                    )
                      return null;
                  var u,
                    c,
                    f = JSON.stringify(e, function(e, t) {
                      return 'symbol' === m(t) ? String(t) : t;
                    });
                  return new i(
                    'Invalid ' +
                      r +
                      ' `' +
                      a +
                      '` of value `' +
                      String(s) +
                      '` supplied to `' +
                      o +
                      '`, expected one of ' +
                      f +
                      '.'
                  );
                })
              : (O(
                  arguments.length > 1
                    ? 'Invalid arguments supplied to oneOf, expected an array, got ' +
                        arguments.length +
                        ' arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
                    : 'Invalid argument supplied to oneOf, expected an array.'
                ),
                _);
          },
          oneOfType: function(e) {
            if (!Array.isArray(e))
              return (
                O(
                  'Invalid argument supplied to oneOfType, expected an instance of array.'
                ),
                _
              );
            for (var t = 0; t < e.length; t++) {
              var n = e[t];
              if ('function' != typeof n)
                return (
                  O(
                    'Invalid argument supplied to oneOfType. Expected an array of check functions, but received ' +
                      v(n) +
                      ' at index ' +
                      t +
                      '.'
                  ),
                  _
                );
            }
            return p(function(t, n, o, r, a) {
              for (var s = [], p = 0; p < e.length; p++) {
                var u = (0, e[p])(t, n, o, r, a, l);
                if (null == u) return null;
                u.data &&
                  d(u.data, 'expectedType') &&
                  s.push(u.data.expectedType);
              }
              return new i(
                'Invalid ' +
                  r +
                  ' `' +
                  a +
                  '` supplied to `' +
                  o +
                  '`' +
                  (s.length > 0
                    ? ', expected one of type [' + s.join(', ') + ']'
                    : '') +
                  '.'
              );
            });
          },
          shape: function(e) {
            return p(function(t, n, o, r, a) {
              var s = t[n],
                p = h(s);
              if ('object' !== p)
                return new i(
                  'Invalid ' +
                    r +
                    ' `' +
                    a +
                    '` of type `' +
                    p +
                    '` supplied to `' +
                    o +
                    '`, expected `object`.'
                );
              for (var u in e) {
                var f = e[u];
                if ('function' != typeof f) return c(o, r, a, u, m(f));
                var d = f(s, u, o, r, a + '.' + u, l);
                if (d) return d;
              }
              return null;
            });
          },
          exact: function(e) {
            return p(function(t, n, o, r, a) {
              var s = t[n],
                p = h(s);
              if ('object' !== p)
                return new i(
                  'Invalid ' +
                    r +
                    ' `' +
                    a +
                    '` of type `' +
                    p +
                    '` supplied to `' +
                    o +
                    '`, expected `object`.'
                );
              var u = f({}, t[n], e);
              for (var y in u) {
                var v = e[y];
                if (d(e, y) && 'function' != typeof v)
                  return c(o, r, a, y, m(v));
                if (!v)
                  return new i(
                    'Invalid ' +
                      r +
                      ' `' +
                      a +
                      '` key `' +
                      y +
                      '` supplied to `' +
                      o +
                      '`.\nBad object: ' +
                      JSON.stringify(t[n], null, '  ') +
                      '\nValid keys: ' +
                      JSON.stringify(Object.keys(e), null, '  ')
                  );
                var b = v(s, y, o, r, a + '.' + y, l);
                if (b) return b;
              }
              return null;
            });
          },
        };
      function i(e, t) {
        (this.message = e),
          (this.data = t && 'object' == typeof t ? t : {}),
          (this.stack = '');
      }
      function p(e) {
        var n = {},
          o = 0;
        function a(a, s, p, u, c, f, d) {
          if (((u = u || r), (f = f || p), d !== l)) {
            if (t) {
              var y = new Error(
                'Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types'
              );
              throw ((y.name = 'Invariant Violation'), y);
            }
            if ('undefined' != typeof console) {
              var h = u + ':' + p;
              !n[h] &&
                o < 3 &&
                (O(
                  'You are manually calling a React.PropTypes validation function for the `' +
                    f +
                    '` prop on `' +
                    u +
                    '`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.'
                ),
                (n[h] = !0),
                o++);
            }
          }
          return null == s[p]
            ? a
              ? new i(
                  null === s[p]
                    ? 'The ' +
                      c +
                      ' `' +
                      f +
                      '` is marked as required in `' +
                      u +
                      '`, but its value is `null`.'
                    : 'The ' +
                      c +
                      ' `' +
                      f +
                      '` is marked as required in `' +
                      u +
                      '`, but its value is `undefined`.'
                )
              : null
            : e(s, p, u, c, f);
        }
        var s = a.bind(null, !1);
        return (s.isRequired = a.bind(null, !0)), s;
      }
      function u(e) {
        return p(function(t, n, o, r, a, s) {
          var p = t[n];
          return h(p) !== e
            ? new i(
                'Invalid ' +
                  r +
                  ' `' +
                  a +
                  '` of type `' +
                  m(p) +
                  '` supplied to `' +
                  o +
                  '`, expected `' +
                  e +
                  '`.',
                { expectedType: e }
              )
            : null;
        });
      }
      function c(e, t, n, o, r) {
        return new i(
          (e || 'React class') +
            ': ' +
            t +
            ' type `' +
            n +
            '.' +
            o +
            '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
            r +
            '`.'
        );
      }
      function y(t) {
        switch (typeof t) {
          case 'number':
          case 'string':
          case 'undefined':
            return !0;
          case 'boolean':
            return !t;
          case 'object':
            if (Array.isArray(t)) return t.every(y);
            if (null === t || e(t)) return !0;
            var r = (function(e) {
              var r = t && ((n && t[n]) || t[o]);
              if ('function' == typeof r) return r;
            })();
            if (!r) return !1;
            var a,
              i = r.call(t);
            if (r !== t.entries) {
              for (; !(a = i.next()).done; ) if (!y(a.value)) return !1;
            } else
              for (; !(a = i.next()).done; ) {
                var s = a.value;
                if (s && !y(s[1])) return !1;
              }
            return !0;
          default:
            return !1;
        }
      }
      function h(e) {
        var t = typeof e;
        return Array.isArray(e)
          ? 'array'
          : e instanceof RegExp
          ? 'object'
          : (function(e, t) {
              return (
                'symbol' === e ||
                (!!t &&
                  ('Symbol' === t['@@toStringTag'] ||
                    ('function' == typeof Symbol && t instanceof Symbol)))
              );
            })(t, e)
          ? 'symbol'
          : t;
      }
      function m(e) {
        if (null == e) return '' + e;
        var t = h(e);
        if ('object' === t) {
          if (e instanceof Date) return 'date';
          if (e instanceof RegExp) return 'regexp';
        }
        return t;
      }
      function v(e) {
        var t = m(e);
        switch (t) {
          case 'array':
          case 'object':
            return 'an ' + t;
          case 'boolean':
          case 'date':
          case 'regexp':
            return 'a ' + t;
          default:
            return t;
        }
      }
      return (
        (i.prototype = Error.prototype),
        (a.checkPropTypes = g),
        (a.resetWarningCache = g.resetWarningCache),
        (a.PropTypes = a),
        a
      );
    })(s.isElement, !0);
  }),
  w = o(
    r(function(e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e) {
          return (
            e.displayName ||
            e.name ||
            ('string' == typeof e && e.length > 0 ? e : 'Unknown')
          );
        });
    })
  ),
  x = function(e, t) {
    var n = {};
    for (var o in e) -1 === t.indexOf(o) && (n[o] = e[o]);
    return n;
  },
  S = '__global_unique_id__',
  E = function() {
    return (n[S] = (n[S] || 0) + 1);
  },
  T = function(e, t, n) {
    var o = arguments.length;
    n = new Array(o > 2 ? o - 2 : 0);
    for (var r = 2; r < o; r++) n[r - 2] = arguments[r];
    if (void 0 === t)
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning message argument'
      );
    e ||
      function(e, t) {
        var n = arguments.length;
        t = new Array(n > 1 ? n - 1 : 0);
        for (var o = 1; o < n; o++) t[o - 1] = arguments[o];
        var r = 0,
          a =
            'Warning: ' +
            e.replace(/%s/g, function() {
              return t[r++];
            });
        'undefined' != typeof console && console.error(a);
        try {
          throw new Error(a);
        } catch (e) {}
      }.apply(null, [t].concat(n));
  },
  R = r(function(e, n) {
    n.__esModule = !0;
    var o = i(j),
      r = i(E),
      a = i(T);
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function s(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function p(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
    }
    function u(e, t) {
      if ('function' != typeof t && null !== t)
        throw new TypeError(
          'Super expression must either be null or a function, not ' + typeof t
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    (n.default = function(e, n) {
      var i,
        c,
        f = '__create-react-context-' + (0, r.default)() + '__',
        l = (function(e) {
          function t() {
            var n, o, r, a;
            s(this, t);
            for (var i = arguments.length, u = Array(i), c = 0; c < i; c++)
              u[c] = arguments[c];
            return (
              (n = o = p(this, e.call.apply(e, [this].concat(u)))),
              (o.emitter =
                ((r = o.props.value),
                (a = []),
                {
                  on: function(e) {
                    a.push(e);
                  },
                  off: function(e) {
                    a = a.filter(function(t) {
                      return t !== e;
                    });
                  },
                  get: function() {
                    return r;
                  },
                  set: function(e, t) {
                    (r = e),
                      a.forEach(function(e) {
                        return e(r, t);
                      });
                  },
                })),
              p(o, n)
            );
          }
          return (
            u(t, e),
            (t.prototype.getChildContext = function() {
              var e;
              return ((e = {})[f] = this.emitter), e;
            }),
            (t.prototype.componentWillReceiveProps = function(e) {
              if (this.props.value !== e.value) {
                var t = this.props.value,
                  o = e.value,
                  r = void 0;
                ((i = t) === (s = o)
                ? 0 !== i || 1 / i == 1 / s
                : i != i && s != s)
                  ? (r = 0)
                  : ((r = 'function' == typeof n ? n(t, o) : 1073741823),
                    (0, a.default)(
                      (1073741823 & r) === r,
                      'calculateChangedBits: Expected the return value to be a 31-bit integer. Instead received: %s',
                      r
                    ),
                    0 != (r |= 0) && this.emitter.set(e.value, r));
              }
              var i, s;
            }),
            (t.prototype.render = function() {
              return this.props.children;
            }),
            t
          );
        })(t.Component);
      l.childContextTypes = (((i = {})[f] = o.default.object.isRequired), i);
      var d = (function(t) {
        function n() {
          var e, o;
          s(this, n);
          for (var r = arguments.length, a = Array(r), i = 0; i < r; i++)
            a[i] = arguments[i];
          return (
            (e = o = p(this, t.call.apply(t, [this].concat(a)))),
            (o.state = { value: o.getValue() }),
            (o.onUpdate = function(e, t) {
              0 != ((0 | o.observedBits) & t) &&
                o.setState({ value: o.getValue() });
            }),
            p(o, e)
          );
        }
        return (
          u(n, t),
          (n.prototype.componentWillReceiveProps = function(e) {
            var t = e.observedBits;
            this.observedBits = null == t ? 1073741823 : t;
          }),
          (n.prototype.componentDidMount = function() {
            this.context[f] && this.context[f].on(this.onUpdate);
            var e = this.props.observedBits;
            this.observedBits = null == e ? 1073741823 : e;
          }),
          (n.prototype.componentWillUnmount = function() {
            this.context[f] && this.context[f].off(this.onUpdate);
          }),
          (n.prototype.getValue = function() {
            return this.context[f] ? this.context[f].get() : e;
          }),
          (n.prototype.render = function() {
            return ((e = this.props.children), Array.isArray(e) ? e[0] : e)(
              this.state.value
            );
            var e;
          }),
          n
        );
      })(t.Component);
      return (
        (d.contextTypes = (((c = {})[f] = o.default.object), c)),
        { Provider: l, Consumer: d }
      );
    }),
      (e.exports = n.default);
  });
o(R);
var P = o(
    r(function(e, n) {
      n.__esModule = !0;
      var o = a(t),
        r = a(R);
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (n.default = o.default.createContext || r.default),
        (e.exports = n.default);
    })
  ),
  C = P(null),
  M = function(e) {
    var n = w(e),
      o = function(o) {
        return t.createElement(C.Consumer, null, function(r) {
          if (null === r)
            throw new Error(
              "Couldn't find Yandex.Maps API in the context. Make sure that <" +
                n +
                ' /> is inside <YMaps /> provider'
            );
          return t.createElement(e, Object.assign({}, { ymaps: r }, o));
        });
      };
    return (o.displayName = 'withYMapsContext(' + n + ')'), o;
  },
  A = P(null),
  k = function(e) {
    var n = function(n) {
      return t.createElement(A.Consumer, null, function(o) {
        return t.createElement(e, Object.assign({}, { parent: o }, n));
      });
    };
    return (n.displayName = 'withParentContext(' + w(e) + ')'), n;
  };
function I(e, n, o) {
  void 0 === n && (n = !1), void 0 === o && (o = []);
  var r = (function(r) {
    function a() {
      r.call(this), (this.state = { loading: !0 }), (this._isMounted = !1);
    }
    return (
      r && (a.__proto__ = r),
      ((a.prototype = Object.create(r && r.prototype)).constructor = a),
      (a.prototype.componentDidMount = function() {
        var e = this;
        (this._isMounted = !0),
          this.props.ymaps
            .load()
            .then(function(t) {
              return Promise.all(
                o.concat(e.props.modules).map(t.loadModule)
              ).then(function() {
                !0 === e._isMounted &&
                  e.setState({ loading: !1 }, function() {
                    e.props.onLoad(t);
                  });
              });
            })
            .catch(function(t) {
              !0 === e._isMounted && e.props.onError(t);
            });
      }),
      (a.prototype.componentWillUnmount = function() {
        this._isMounted = !1;
      }),
      (a.prototype.render = function() {
        var o = this.props.ymaps,
          r = !1 === n || !1 === this.state.loading,
          a = x(this.props, ['onLoad', 'onError', 'modules', 'ymaps']);
        return (
          r && t.createElement(e, Object.assign({}, { ymaps: o.getApi() }, a))
        );
      }),
      a
    );
  })(t.Component);
  return (
    (r.displayName = 'withYMaps(' + w(e) + ')'),
    (r.propTypes = {
      onLoad: j.func,
      onError: j.func,
      modules: j.arrayOf(j.string),
      ymaps: j.object,
    }),
    (r.defaultProps = {
      onLoad: Function.prototype,
      onError: Function.prototype,
      modules: [],
    }),
    M(r)
  );
}
var $ = { lang: 'ru_RU', load: '', ns: '', mode: 'debug' },
  D = {},
  U = function(e) {
    var t = Date.now().toString(32);
    (this.options = e),
      (this.namespace = e.query.ns || $.ns),
      (this.onload = '__yandex-maps-api-onload__$$' + t),
      (this.onerror = '__yandex-maps-api-onerror__$$' + t);
  };
(U.prototype.getApi = function() {
  return 'undefined' != typeof window && this.namespace
    ? window[this.namespace]
    : this.api;
}),
  (U.prototype.setApi = function(e) {
    return (this.api = e);
  }),
  (U.prototype.getPromise = function() {
    return this.namespace ? D[this.namespace] : this.promise;
  }),
  (U.prototype.setPromise = function(e) {
    return this.namespace
      ? (D[this.namespace] = this.promise = e)
      : (this.promise = e);
  }),
  (U.prototype.load = function() {
    var e = this;
    if (this.getApi()) return Promise.resolve(this.setApi(this.getApi()));
    if (this.getPromise()) return this.setPromise(this.getPromise());
    var t = Object.assign(
        { onload: this.onload, onerror: this.onerror },
        $,
        this.options.query
      ),
      n = Object.keys(t)
        .map(function(e) {
          return e + '=' + t[e];
        })
        .join('&'),
      o = [
        'https://' +
          (this.options.enterprise ? 'enterprise.' : '') +
          'api-maps.yandex.ru',
        this.options.version,
        '?' + n,
      ].join('/'),
      r = new Promise(function(t, n) {
        (window[e.onload] = function(n) {
          delete window[e.onload],
            (n.loadModule = e.loadModule.bind(e)),
            n.ready(function() {
              return t(e.setApi(n));
            });
        }),
          (window[e.onerror] = function(t) {
            delete window[e.onerror], n(t);
          }),
          e.fetchScript(o).catch(window[e.onerror]);
      });
    return this.setPromise(r);
  }),
  (U.prototype.fetchScript = function(e) {
    var t = this;
    return new Promise(function(n, o) {
      (t.script = document.createElement('script')),
        (t.script.type = 'text/javascript'),
        (t.script.onload = n),
        (t.script.onerror = o),
        (t.script.src = e),
        (t.script.async = 'async'),
        document.head.appendChild(t.script);
    });
  }),
  (U.prototype.loadModule = function(e) {
    var t = this;
    return new Promise(function(n, o) {
      t.getApi().modules.require(
        e,
        function(o) {
          !(function(e, t, n, o) {
            void 0 === o && (o = !1),
              (t = 'string' == typeof t ? t.split('.') : t.slice());
            for (var r, a = e; t.length > 1; )
              a[(r = t.shift())] || (a[r] = {}), (a = a[r]);
            a[t[0]] = (!0 === o && a[t[0]]) || n;
          })(t.api, e, o, !0),
            n(o);
        },
        o,
        t.getApi()
      );
    });
  }),
  (U._name = '__react-yandex-maps__');
var q = (function(e) {
  function n(t) {
    e.call(this, t), (this.ymaps = new U(t));
  }
  return (
    e && (n.__proto__ = e),
    ((n.prototype = Object.create(e && e.prototype)).constructor = n),
    (n.prototype.componentDidMount = function() {
      !0 === this.props.preload && this.ymaps.load();
    }),
    (n.prototype.render = function() {
      return t.createElement(
        C.Provider,
        { value: this.ymaps },
        this.props.children
      );
    }),
    n
  );
})(t.Component);
(q.propTypes = {
  version: j.string.isRequired,
  enterprise: j.bool,
  query: j.shape({
    lang: j.oneOf(['tr_TR', 'en_US', 'en_RU', 'ru_RU', 'ru_UA', 'uk_UA']),
    apikey: j.string,
    coordorder: j.oneOf(['latlong', 'longlat']),
    load: j.string,
    mode: j.oneOf(['release', 'debug']),
    csp: j.bool,
    ns: j.string,
  }),
  children: j.node,
  preload: j.bool,
}),
  (q.defaultProps = {
    version: '2.1',
    enterprise: !1,
    query: { lang: 'ru_RU', load: '', ns: '' },
    preload: !1,
  });
var B = /^on(?=[A-Z])/;
function F(e) {
  return Object.keys(e).reduce(
    function(t, n) {
      if (B.test(n)) {
        var o = n.replace(B, '').toLowerCase();
        t._events[o] = e[n];
      } else t[n] = e[n];
      return t;
    },
    { _events: {} }
  );
}
function z(e, t, n) {
  'function' == typeof n && e.events.add(t, n);
}
function N(e, t, n) {
  'function' == typeof n && e.events.remove(t, n);
}
function L(e, t, n) {
  Object.keys(Object.assign({}, t, n)).forEach(function(o) {
    t[o] !== n[o] && (N(e, o, t[o]), z(e, o, n[o]));
  });
}
var W = function(e) {
  return 'default' + e.charAt(0).toUpperCase() + e.slice(1);
};
function G(e, t) {
  return void 0 !== e[t] || void 0 === e[W(t)];
}
function Y(e, t, n) {
  return (G(e, t) ? e[t] : e[W(t)]) || n;
}
function V(e, t, n) {
  if ((void 0 === n && (n = null), e !== t)) {
    if (
      (e &&
        (e.hasOwnProperty('current')
          ? (e.current = null)
          : 'function' == typeof e && e(null)),
      !t)
    )
      return;
    t.hasOwnProperty('current')
      ? (t.current = n)
      : 'function' == typeof t && t(n);
  }
}
function Z(e) {
  var t = e.width,
    n = e.height,
    o = e.style,
    r = e.className;
  return void 0 !== o || void 0 !== r
    ? Object.assign({}, o && { style: o }, r && { className: r })
    : { style: { width: t, height: n } };
}
var J = (function(e) {
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
        var e = n.mountObject(
          this._parentElement,
          this.props.ymaps.Map,
          this.props
        );
        this.setState({ instance: e });
      }),
      (n.prototype.componentDidUpdate = function(e) {
        null !== this.state.instance &&
          n.updateObject(this.state.instance, e, this.props);
      }),
      (n.prototype.componentWillUnmount = function() {
        n.unmountObject(this.state.instance, this.props);
      }),
      (n.prototype.render = function() {
        var e = Z(this.props),
          n = F(this.props),
          o = x(n, [
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
          A.Provider,
          { value: this.state.instance },
          t.createElement(
            'div',
            Object.assign({}, { ref: this._getRef }, e, o),
            this.props.children
          )
        );
      }),
      (n.mountObject = function(e, t, n) {
        var o = F(n),
          r = o.instanceRef,
          a = o._events,
          i = new t(e, Y(n, 'state'), Y(n, 'options'));
        return (
          Object.keys(a).forEach(function(e) {
            return z(i, e, a[e]);
          }),
          V(null, r, i),
          i
        );
      }),
      (n.updateObject = function(e, t, n) {
        var o = F(n),
          r = o._events,
          a = o.instanceRef,
          i = F(t),
          s = i._events,
          p = i.instanceRef;
        if (G(n, 'state')) {
          var u = Y(t, 'state', {}),
            c = Y(n, 'state', {});
          u.type !== c.type && e.setType(c.type),
            u.behaviors !== c.behaviors &&
              (u.behaviors && e.behaviors.disable(u.behaviors),
              c.behaviors && e.behaviors.enable(c.behaviors)),
            c.zoom && u.zoom !== c.zoom && e.setZoom(c.zoom),
            c.center && u.center !== c.center && e.setCenter(c.center),
            c.bounds && u.bounds !== c.bounds && e.setBounds(c.bounds);
        }
        if (G(n, 'options')) {
          var f = Y(t, 'options'),
            l = Y(n, 'options', {});
          f !== l && e.options.set(l);
        }
        (Y(t, 'width') === Y(n, 'width') &&
          Y(t, 'height') === Y(n, 'height')) ||
          e.container.fitToViewport(),
          L(e, s, r),
          V(p, a, e);
      }),
      (n.unmountObject = function(e, t) {
        var n = F(t),
          o = n.instanceRef,
          r = n._events;
        null !== e &&
          (Object.keys(r).forEach(function(t) {
            return N(e, t, r[t]);
          }),
          e.destroy(),
          V(o));
      }),
      n
    );
  })(t.Component),
  H = {
    bounds: j.arrayOf(j.arrayOf(j.number)),
    center: j.arrayOf(j.number),
    controls: j.arrayOf(j.string),
    behaviors: j.arrayOf(j.string),
    margin: j.oneOfType([j.arrayOf(j.number), j.arrayOf(j.arrayOf(j.number))]),
    type: j.oneOf(['yandex#map', 'yandex#satellite', 'yandex#hybrid']),
    zoom: j.number,
  },
  K = {};
(J.propTypes = {
  state: j.shape(H),
  defaultState: j.shape(H),
  options: j.shape(K),
  defaultOptions: j.shape(K),
  instanceRef: j.func,
  ymaps: j.object,
  children: j.node,
  width: j.oneOfType([j.number, j.string]),
  height: j.oneOfType([j.number, j.string]),
  style: j.object,
  className: j.string,
}),
  (J.defaultProps = { width: 320, height: 240 });
var Q = I(J, !0, ['Map']),
  X = (function(e) {
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
        var e = this;
        (this._mounted = !0),
          this.props.ymaps.panorama.isSupported() &&
            n
              .mountObject(
                this._parentElement,
                this.props.ymaps.panorama,
                this.props
              )
              .then(function(t) {
                return e._mounted && e.setState({ instance: t });
              });
      }),
      (n.prototype.componentDidUpdate = function(e) {
        null !== this.state.instance &&
          n.updateObject(this.state.instance, e, this.props);
      }),
      (n.prototype.componentWillUnmount = function() {
        (this._mounted = !1), n.unmountObject(this.state.instance, this.props);
      }),
      (n.prototype.render = function() {
        var e = Z(this.props);
        return t.createElement(
          'div',
          Object.assign({}, { ref: this._getRef }, e)
        );
      }),
      (n.mountObject = function(e, t, n) {
        var o = F(n),
          r = o.instanceRef,
          a = o._events,
          i = Y(n, 'point'),
          s = Y(n, 'locateOptions'),
          p = Y(n, 'options');
        return new Promise(function(n, o) {
          t.locate(i, s).done(function(o) {
            if (o.length > 0) {
              var i = new t.Player(e, o[0], p);
              V(null, r, i),
                Object.keys(a).forEach(function(e) {
                  return z(i, e, a[e]);
                }),
                n(i);
            }
          }, o);
        });
      }),
      (n.updateObject = function(e, t, n) {
        var o = F(n),
          r = o._events,
          a = o.instanceRef,
          i = F(t),
          s = i._events,
          p = i.instanceRef;
        if (G(n, 'options')) {
          var u = Y(t, 'options'),
            c = Y(n, 'options');
          u !== c && e.options.set(c);
        }
        if (G(n, 'point')) {
          var f = Y(n, 'point'),
            l = Y(t, 'point'),
            d = Y(n, 'locateOptions');
          f !== l && e.moveTo(f, d);
        }
        L(e, s, r), V(p, a, e);
      }),
      (n.unmountObject = function(e, t) {
        var n = F(t),
          o = n.instanceRef,
          r = n._events;
        null !== e &&
          (Object.keys(r).forEach(function(t) {
            return N(e, t, r[t]);
          }),
          V(o));
      }),
      n
    );
  })(t.Component),
  ee = {};
(X.propTypes = {
  options: j.shape(ee),
  defaultOptions: j.shape(ee),
  point: j.arrayOf(j.number),
  defaultPoint: j.arrayOf(j.number),
  locateOptions: j.shape({
    layer: j.oneOf(['yandex#panorama', 'yandex#airPanorama']),
  }),
  instanceRef: j.func,
  ymaps: j.object,
  children: j.node,
  width: j.oneOfType([j.number, j.string]),
  height: j.oneOfType([j.number, j.string]),
  style: j.object,
  className: j.string,
}),
  (X.defaultProps = { width: 320, height: 240 });
var te = I(X, !0, [
    'panorama.isSupported',
    'panorama.locate',
    'panorama.createPlayer',
    'panorama.Player',
  ]),
  ne = (function(e) {
    function n() {
      e.call(this), (this.state = { instance: null });
    }
    return (
      e && (n.__proto__ = e),
      ((n.prototype = Object.create(e && e.prototype)).constructor = n),
      (n.prototype.componentDidMount = function() {
        var e = n.mountControl(
          this.props.ymaps.control[this.props.name],
          this.props
        );
        this.setState({ instance: e });
      }),
      (n.prototype.componentDidUpdate = function(e) {
        null !== this.state.instance &&
          n.updateControl(this.state.instance, e, this.props);
      }),
      (n.prototype.componentWillUnmount = function() {
        n.unmountControl(this.state.instance, this.props);
      }),
      (n.prototype.render = function() {
        return t.createElement(
          A.Provider,
          { value: this.state.instance },
          this.props.children
        );
      }),
      (n.mountControl = function(e, t) {
        var n = F(t),
          o = n.instanceRef,
          r = n.parent,
          a = n.lazy,
          i = n._events,
          s = new e({
            data: Y(t, 'data'),
            options: Y(t, 'options'),
            state: Y(t, 'state'),
            mapTypes: Y(t, 'mapTypes'),
            lazy: a,
          });
        if (
          (Object.keys(i).forEach(function(e) {
            return z(s, e, i[e]);
          }),
          r && r.controls && 'function' == typeof r.controls.add)
        )
          r.controls.add(s);
        else {
          if (!r || !r.add || 'function' != typeof r.add)
            throw new Error('No parent found to mount ' + t.name);
          r.add(s);
        }
        return V(null, o, s), s;
      }),
      (n.updateControl = function(e, t, n) {
        var o = F(n),
          r = o._events,
          a = o.instanceRef,
          i = F(t),
          s = i._events,
          p = i.instanceRef;
        if (G(n, 'options')) {
          var u = Y(t, 'options'),
            c = Y(n, 'options');
          u !== c && e.options.set(c);
        }
        if (G(n, 'data')) {
          var f = Y(t, 'data'),
            l = Y(n, 'data');
          f !== l && e.data.set(l);
        }
        if (G(n, 'state')) {
          var d = Y(t, 'state'),
            y = Y(n, 'state');
          d !== y && e.state.set(y);
        }
        if (G(n, 'mapTypes')) {
          var h = Y(t, 'mapTypes'),
            m = Y(n, 'mapTypes');
          h !== m &&
            (e.removeAllMapTypes(),
            m.forEach(function(t) {
              return e.addMapType(t);
            }));
        }
        L(e, s, r), V(p, a, e);
      }),
      (n.unmountControl = function(e, t) {
        var n = F(t),
          o = n.instanceRef,
          r = n.parent,
          a = n._events;
        null !== e &&
          (Object.keys(a).forEach(function(t) {
            return N(e, t, a[t]);
          }),
          r.controls && 'function' == typeof r.controls.remove
            ? r.controls.remove(e)
            : r.remove && 'function' == typeof r.remove && r.remove(e),
          V(o));
      }),
      n
    );
  })(t.Component);
function oe(e) {
  return t.createElement(ne, Object.assign({}, e, { name: 'Button' }));
}
(ne.propTypes = {
  children: j.node,
  instanceRef: j.func,
  ymaps: j.object,
  parent: j.object,
  name: j.oneOf([
    'Button',
    'FullscreenControl',
    'GeolocationControl',
    'ListBox',
    'ListBoxItem',
    'RouteButton',
    'RouteEditor',
    'RoutePanel',
    'RulerControl',
    'SearchControl',
    'TrafficControl',
    'TypeSelector',
    'ZoomControl',
  ]).isRequired,
}),
  (oe.propTypes = {
    data: j.shape({}),
    defaultData: j.shape({}),
    options: j.shape({}),
    defaultOptions: j.shape({}),
    state: j.shape({}),
    defaultState: j.shape({}),
  });
var re = k(I(oe, !0, ['control.Button']));
function ae(e) {
  return t.createElement(
    ne,
    Object.assign({}, e, { name: 'FullscreenControl' })
  );
}
ae.propTypes = {
  data: j.shape({}),
  defaultData: j.shape({}),
  options: j.shape({}),
  defaultOptions: j.shape({}),
  state: j.shape({}),
  defaultState: j.shape({}),
};
var ie = k(I(ae, !0, ['control.FullscreenControl']));
function se(e) {
  return t.createElement(
    ne,
    Object.assign({}, e, { name: 'GeolocationControl' })
  );
}
se.propTypes = {
  data: j.shape({}),
  defaultData: j.shape({}),
  options: j.shape({}),
  defaultOptions: j.shape({}),
  state: j.shape({}),
  defaultState: j.shape({}),
};
var pe = k(I(se, !0, ['control.GeolocationControl']));
function ue(e) {
  return t.createElement(ne, Object.assign({}, e, { name: 'ListBox' }));
}
ue.propTypes = {
  data: j.shape({}),
  defaultData: j.shape({}),
  options: j.shape({}),
  defaultOptions: j.shape({}),
  state: j.shape({}),
  defaultState: j.shape({}),
};
var ce = k(I(ue, !0, ['control.ListBox']));
function fe(e) {
  return t.createElement(ne, Object.assign({}, e, { name: 'ListBoxItem' }));
}
fe.propTypes = {
  data: j.shape({}),
  defaultData: j.shape({}),
  options: j.shape({}),
  defaultOptions: j.shape({}),
  state: j.shape({}),
  defaultState: j.shape({}),
};
var le = k(I(fe, !0, ['control.ListBoxItem']));
function de(e) {
  return t.createElement(ne, Object.assign({}, e, { name: 'RouteButton' }));
}
de.propTypes = {
  data: j.shape({}),
  defaultData: j.shape({}),
  options: j.shape({}),
  defaultOptions: j.shape({}),
  state: j.shape({}),
  defaultState: j.shape({}),
};
var ye = k(I(de, !0, ['control.RouteButton']));
function he(e) {
  return t.createElement(ne, Object.assign({}, e, { name: 'RouteEditor' }));
}
he.propTypes = {
  data: j.shape({}),
  defaultData: j.shape({}),
  options: j.shape({}),
  defaultOptions: j.shape({}),
  state: j.shape({}),
  defaultState: j.shape({}),
};
var me = k(I(he, !0, ['control.RouteEditor']));
function ve(e) {
  return t.createElement(ne, Object.assign({}, e, { name: 'RoutePanel' }));
}
ve.propTypes = {
  data: j.shape({}),
  defaultData: j.shape({}),
  options: j.shape({}),
  defaultOptions: j.shape({}),
  state: j.shape({}),
  defaultState: j.shape({}),
};
var be = k(I(ve, !0, ['control.RoutePanel']));
function ge(e) {
  return t.createElement(ne, Object.assign({}, e, { name: 'RulerControl' }));
}
ge.propTypes = {
  data: j.shape({}),
  defaultData: j.shape({}),
  options: j.shape({}),
  defaultOptions: j.shape({}),
  state: j.shape({}),
  defaultState: j.shape({}),
};
var Oe = k(I(ge, !0, ['control.RulerControl']));
function _e(e) {
  return t.createElement(ne, Object.assign({}, e, { name: 'SearchControl' }));
}
_e.propTypes = {
  data: j.shape({}),
  defaultData: j.shape({}),
  options: j.shape({}),
  defaultOptions: j.shape({}),
  state: j.shape({}),
  defaultState: j.shape({}),
};
var je = k(I(_e, !0, ['control.SearchControl']));
function we(e) {
  return t.createElement(ne, Object.assign({}, e, { name: 'TrafficControl' }));
}
we.propTypes = {
  data: j.shape({}),
  defaultData: j.shape({}),
  options: j.shape({}),
  defaultOptions: j.shape({}),
  state: j.shape({}),
  defaultState: j.shape({}),
};
var xe = k(I(we, !0, ['control.TrafficControl']));
function Se(e) {
  return t.createElement(ne, Object.assign({}, e, { name: 'TypeSelector' }));
}
Se.propTypes = {
  mapTypes: j.arrayOf(
    j.oneOf(['yandex#map', 'yandex#satellite', 'yandex#hybrid'])
  ),
  defaultMapTypes: j.arrayOf(
    j.oneOf(['yandex#map', 'yandex#satellite', 'yandex#hybrid'])
  ),
  options: j.shape({}),
  defaultOptions: j.shape({}),
  state: j.shape({}),
  defaultState: j.shape({}),
};
var Ee = k(I(Se, !0, ['control.TypeSelector']));
function Te(e) {
  return t.createElement(ne, Object.assign({}, e, { name: 'ZoomControl' }));
}
Te.propTypes = {
  data: j.shape({}),
  defaultData: j.shape({}),
  options: j.shape({}),
  defaultOptions: j.shape({}),
  state: j.shape({}),
  defaultState: j.shape({}),
};
var Re = k(I(Te, !0, ['control.ZoomControl'])),
  Pe = (function(e) {
    function n() {
      e.call(this), (this.state = { instance: null });
    }
    return (
      e && (n.__proto__ = e),
      ((n.prototype = Object.create(e && e.prototype)).constructor = n),
      (n.prototype.componentDidMount = function() {
        var e = n.mountObject(this.props.ymaps.Clusterer, this.props);
        this.setState({ instance: e });
      }),
      (n.prototype.componentDidUpdate = function(e) {
        null !== this.state.instance &&
          n.updateObject(this.state.instance, e, this.props);
      }),
      (n.prototype.componentWillUnmount = function() {
        n.unmountObject(this.state.instance, this.props);
      }),
      (n.prototype.render = function() {
        return t.createElement(
          A.Provider,
          { value: this.state.instance },
          this.props.children
        );
      }),
      (n.mountObject = function(e, t) {
        var n = F(t),
          o = n.instanceRef,
          r = n.parent,
          a = n._events,
          i = new e(Y(t, 'options'));
        if (
          (Object.keys(a).forEach(function(e) {
            return z(i, e, a[e]);
          }),
          r.geoObjects && 'function' == typeof r.geoObjects.add)
        )
          r.geoObjects.add(i);
        else {
          if (!r.add || 'function' != typeof r.add)
            throw new Error('No parent found to mount Clusterer');
          r.add(i);
        }
        return V(null, o, i), i;
      }),
      (n.updateObject = function(e, t, n) {
        var o = F(n),
          r = o._events,
          a = o.instanceRef,
          i = F(t),
          s = i._events,
          p = i.instanceRef;
        if (G(n, 'options')) {
          var u = Y(t, 'options'),
            c = Y(n, 'options');
          u !== c && e.options.set(c);
        }
        L(e, s, r), V(p, a, e);
      }),
      (n.unmountObject = function(e, t) {
        var n = F(t),
          o = n.instanceRef,
          r = n.parent,
          a = n._events;
        null !== e &&
          (Object.keys(a).forEach(function(t) {
            return N(e, t, a[t]);
          }),
          r.geoObjects && 'function' == typeof r.geoObjects.remove
            ? r.geoObjects.remove(e)
            : r.remove && 'function' == typeof r.remove && r.remove(e),
          V(o));
      }),
      n
    );
  })(t.Component);
Pe.propTypes = {
  options: j.shape({}),
  defaultOptions: j.shape({}),
  instanceRef: j.func,
  ymaps: j.object,
  parent: j.object,
  children: j.node,
};
var Ce,
  Me = k(I(Pe, !0, ['Clusterer'])),
  Ae = 'object' == typeof n && n && n.Object === Object && n,
  ke = 'object' == typeof self && self && self.Object === Object && self,
  Ie = Ae || ke || Function('return this')(),
  $e = Ie.Symbol,
  De = Object.prototype,
  Ue = De.hasOwnProperty,
  qe = De.toString,
  Be = $e ? $e.toStringTag : void 0,
  Fe = Object.prototype.toString,
  ze = $e ? $e.toStringTag : void 0,
  Ne = function(e) {
    return null == e
      ? void 0 === e
        ? '[object Undefined]'
        : '[object Null]'
      : ze && ze in Object(e)
      ? (function(e) {
          var t = Ue.call(e, Be),
            n = e[Be];
          try {
            e[Be] = void 0;
          } catch (e) {}
          var o = qe.call(e);
          return t ? (e[Be] = n) : delete e[Be], o;
        })(e)
      : (function(e) {
          return Fe.call(e);
        })(e);
  },
  Le = function(e) {
    var t = typeof e;
    return null != e && ('object' == t || 'function' == t);
  },
  We = function(e) {
    if (!Le(e)) return !1;
    var t = Ne(e);
    return (
      '[object Function]' == t ||
      '[object GeneratorFunction]' == t ||
      '[object AsyncFunction]' == t ||
      '[object Proxy]' == t
    );
  },
  Ge = Ie['__core-js_shared__'],
  Ye = (Ce = /[^.]+$/.exec((Ge && Ge.keys && Ge.keys.IE_PROTO) || ''))
    ? 'Symbol(src)_1.' + Ce
    : '',
  Ve = Function.prototype.toString,
  Ze = /^\[object .+?Constructor\]$/,
  Je = Function.prototype,
  He = Object.prototype,
  Ke = RegExp(
    '^' +
      Je.toString
        .call(He.hasOwnProperty)
        .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
        .replace(
          /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
          '$1.*?'
        ) +
      '$'
  ),
  Qe = function(e, t) {
    var n = (function(e, t) {
      return null == e ? void 0 : e[t];
    })(e, t);
    return (function(e) {
      return (
        !(!Le(e) || ((t = e), Ye && Ye in t)) &&
        (We(e) ? Ke : Ze).test(
          (function(e) {
            if (null != e) {
              try {
                return Ve.call(e);
              } catch (e) {}
              try {
                return e + '';
              } catch (e) {}
            }
            return '';
          })(e)
        )
      );
      var t;
    })(n)
      ? n
      : void 0;
  },
  Xe = Qe(Object, 'create'),
  et = Object.prototype.hasOwnProperty,
  tt = Object.prototype.hasOwnProperty;
function nt(e) {
  var t = -1,
    n = null == e ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
(nt.prototype.clear = function() {
  (this.__data__ = Xe ? Xe(null) : {}), (this.size = 0);
}),
  (nt.prototype.delete = function(e) {
    var t = this.has(e) && delete this.__data__[e];
    return (this.size -= t ? 1 : 0), t;
  }),
  (nt.prototype.get = function(e) {
    var t = this.__data__;
    if (Xe) {
      var n = t[e];
      return '__lodash_hash_undefined__' === n ? void 0 : n;
    }
    return et.call(t, e) ? t[e] : void 0;
  }),
  (nt.prototype.has = function(e) {
    var t = this.__data__;
    return Xe ? void 0 !== t[e] : tt.call(t, e);
  }),
  (nt.prototype.set = function(e, t) {
    var n = this.__data__;
    return (
      (this.size += this.has(e) ? 0 : 1),
      (n[e] = Xe && void 0 === t ? '__lodash_hash_undefined__' : t),
      this
    );
  });
var ot = nt,
  rt = function(e, t) {
    for (var n = e.length; n--; )
      if ((o = e[n][0]) === (r = t) || (o != o && r != r)) return n;
    var o, r;
    return -1;
  },
  at = Array.prototype.splice;
function it(e) {
  var t = -1,
    n = null == e ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
(it.prototype.clear = function() {
  (this.__data__ = []), (this.size = 0);
}),
  (it.prototype.delete = function(e) {
    var t = this.__data__,
      n = rt(t, e);
    return !(
      n < 0 || (n == t.length - 1 ? t.pop() : at.call(t, n, 1), --this.size, 0)
    );
  }),
  (it.prototype.get = function(e) {
    var t = this.__data__,
      n = rt(t, e);
    return n < 0 ? void 0 : t[n][1];
  }),
  (it.prototype.has = function(e) {
    return rt(this.__data__, e) > -1;
  }),
  (it.prototype.set = function(e, t) {
    var n = this.__data__,
      o = rt(n, e);
    return o < 0 ? (++this.size, n.push([e, t])) : (n[o][1] = t), this;
  });
var st = it,
  pt = Qe(Ie, 'Map'),
  ut = function(e, t) {
    var n,
      o,
      r = e.__data__;
    return ('string' == (o = typeof (n = t)) ||
    'number' == o ||
    'symbol' == o ||
    'boolean' == o
    ? '__proto__' !== n
    : null === n)
      ? r['string' == typeof t ? 'string' : 'hash']
      : r.map;
  };
function ct(e) {
  var t = -1,
    n = null == e ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
(ct.prototype.clear = function() {
  (this.size = 0),
    (this.__data__ = {
      hash: new ot(),
      map: new (pt || st)(),
      string: new ot(),
    });
}),
  (ct.prototype.delete = function(e) {
    var t = ut(this, e).delete(e);
    return (this.size -= t ? 1 : 0), t;
  }),
  (ct.prototype.get = function(e) {
    return ut(this, e).get(e);
  }),
  (ct.prototype.has = function(e) {
    return ut(this, e).has(e);
  }),
  (ct.prototype.set = function(e, t) {
    var n = ut(this, e),
      o = n.size;
    return n.set(e, t), (this.size += n.size == o ? 0 : 1), this;
  });
var ft = ct;
function lt(e) {
  var t = -1,
    n = null == e ? 0 : e.length;
  for (this.__data__ = new ft(); ++t < n; ) this.add(e[t]);
}
(lt.prototype.add = lt.prototype.push = function(e) {
  return this.__data__.set(e, '__lodash_hash_undefined__'), this;
}),
  (lt.prototype.has = function(e) {
    return this.__data__.has(e);
  });
var dt,
  yt,
  ht,
  mt = lt,
  vt = function(e) {
    return e != e;
  },
  bt = function(e, t) {
    return (
      !(null == e || !e.length) &&
      (function(e, t, n) {
        return t == t
          ? (function(e, t, n) {
              for (var o = -1, r = e.length; ++o < r; )
                if (e[o] === t) return o;
              return -1;
            })(e, t)
          : (function(e, t, n, o) {
              for (var r = e.length, a = -1; ++a < r; )
                if (t(e[a], a, e)) return a;
              return -1;
            })(e, vt);
      })(e, t) > -1
    );
  },
  gt = function(e, t, n) {
    for (var o = -1, r = null == e ? 0 : e.length; ++o < r; )
      if (n(t, e[o])) return !0;
    return !1;
  },
  Ot = function(e, t) {
    return e.has(t);
  },
  _t = function(e, t) {
    for (var n = -1, o = t.length, r = e.length; ++n < o; ) e[r + n] = t[n];
    return e;
  },
  jt = function(e) {
    return null != e && 'object' == typeof e;
  },
  wt = function(e) {
    return jt(e) && '[object Arguments]' == Ne(e);
  },
  xt = Object.prototype,
  St = xt.hasOwnProperty,
  Et = xt.propertyIsEnumerable,
  Tt = wt(
    (function() {
      return arguments;
    })()
  )
    ? wt
    : function(e) {
        return jt(e) && St.call(e, 'callee') && !Et.call(e, 'callee');
      },
  Rt = Array.isArray,
  Pt = $e ? $e.isConcatSpreadable : void 0,
  Ct = function(e) {
    return Rt(e) || Tt(e) || !!(Pt && e && e[Pt]);
  },
  Mt = function(e) {
    return e;
  },
  At = Math.max,
  kt = (function() {
    try {
      var e = Qe(Object, 'defineProperty');
      return e({}, '', {}), e;
    } catch (e) {}
  })(),
  It = Date.now,
  $t =
    ((dt = kt
      ? function(e, t) {
          return kt(e, 'toString', {
            configurable: !0,
            enumerable: !1,
            value:
              ((n = t),
              function() {
                return n;
              }),
            writable: !0,
          });
          var n;
        }
      : Mt),
    (yt = 0),
    (ht = 0),
    function() {
      var e = It(),
        t = 16 - (e - ht);
      if (((ht = e), t > 0)) {
        if (++yt >= 800) return arguments[0];
      } else yt = 0;
      return dt.apply(void 0, arguments);
    }),
  Dt = function(e) {
    return (
      jt(e) &&
      (function(e) {
        return (
          null != e &&
          (function(e) {
            return (
              'number' == typeof e &&
              e > -1 &&
              e % 1 == 0 &&
              e <= 9007199254740991
            );
          })(e.length) &&
          !We(e)
        );
      })(e)
    );
  },
  Ut = (function(e, t) {
    return $t(
      (function(e, t, n) {
        return (
          (t = At(void 0 === t ? e.length - 1 : t, 0)),
          function() {
            for (
              var o = arguments, r = -1, a = At(o.length - t, 0), i = Array(a);
              ++r < a;

            )
              i[r] = o[t + r];
            r = -1;
            for (var s = Array(t + 1); ++r < t; ) s[r] = o[r];
            return (
              (s[t] = n(i)),
              (function(e, t, n) {
                switch (n.length) {
                  case 0:
                    return e.call(t);
                  case 1:
                    return e.call(t, n[0]);
                  case 2:
                    return e.call(t, n[0], n[1]);
                  case 3:
                    return e.call(t, n[0], n[1], n[2]);
                }
                return e.apply(t, n);
              })(e, this, s)
            );
          }
        );
      })(e, void 0, Mt),
      e + ''
    );
  })(function(e, t) {
    var n,
      o = (n = null == t ? 0 : t.length) ? t[n - 1] : void 0;
    return (
      Dt(o) && (o = void 0),
      Dt(e)
        ? (function(e, t, n, o) {
            var r = -1,
              a = bt,
              i = !0,
              s = e.length,
              p = [],
              u = t.length;
            if (!s) return p;
            o
              ? ((a = gt), (i = !1))
              : t.length >= 200 && ((a = Ot), (i = !1), (t = new mt(t)));
            e: for (; ++r < s; ) {
              var c = e[r],
                f = c;
              if (((c = o || 0 !== c ? c : 0), i && f == f)) {
                for (var l = u; l--; ) if (t[l] === f) continue e;
                p.push(c);
              } else a(t, f, o) || p.push(c);
            }
            return p;
          })(
            e,
            (function e(t, n, o, r, a) {
              var i = -1,
                s = t.length;
              for (o || (o = Ct), a || (a = []); ++i < s; ) {
                var p = t[i];
                n > 0 && o(p)
                  ? n > 1
                    ? e(p, n - 1, o, r, a)
                    : _t(a, p)
                  : r || (a[a.length] = p);
              }
              return a;
            })(t, 1, Dt, !0),
            0,
            o
          )
        : []
    );
  }),
  qt = (function(e) {
    function t() {
      e.call(this), (this.state = { instance: null });
    }
    return (
      e && (t.__proto__ = e),
      ((t.prototype = Object.create(e && e.prototype)).constructor = t),
      (t.prototype.componentDidMount = function() {
        var e = t.mountObject(this.props.ymaps.ObjectManager, this.props);
        this.setState({ instance: e });
      }),
      (t.prototype.componentDidUpdate = function(e) {
        null !== this.state.instance &&
          t.updateObject(this.state.instance, e, this.props);
      }),
      (t.prototype.componentWillUnmount = function() {
        t.unmountObject(this.state.instance, this.props);
      }),
      (t.prototype.render = function() {
        return null;
      }),
      (t.mountObject = function(e, t) {
        var n = F(t),
          o = n.instanceRef,
          r = n.parent,
          a = n._events,
          i = Y(t, 'options', {}),
          s = Y(t, 'features', {}),
          p = Y(t, 'filter', null),
          u = Y(t, 'objects', {}),
          c = Y(t, 'clusters', {}),
          f = new e(i);
        if (
          (f.add(s || []),
          f.setFilter(p),
          f.objects.options.set(u),
          f.clusters.options.set(c),
          Object.keys(a).forEach(function(e) {
            return z(f, e, a[e]);
          }),
          r.geoObjects && 'function' == typeof r.geoObjects.add)
        )
          r.geoObjects.add(f);
        else {
          if (!r.add || 'function' != typeof r.add)
            throw new Error('No parent found to mount ObjectManager');
          r.add(f);
        }
        return V(null, o, f), f;
      }),
      (t.updateObject = function(e, t, n) {
        var o = F(n),
          r = o._events,
          a = o.instanceRef,
          i = F(t),
          s = i._events,
          p = i.instanceRef;
        if (G(n, 'options')) {
          var u = Y(t, 'options'),
            c = Y(n, 'options');
          u !== c && e.options.set(c);
        }
        if (G(n, 'objects')) {
          var f = Y(t, 'objects'),
            l = Y(n, 'objects');
          f !== l && e.objects.options.set(l);
        }
        if (G(n, 'clusters')) {
          var d = Y(t, 'clusters'),
            y = Y(n, 'clusters');
          d !== y && e.clusters.options.set(y);
        }
        if (G(n, 'filter')) {
          var h = Y(t, 'filter'),
            m = Y(n, 'filter');
          h !== m && e.setFilter(m);
        }
        if (G(n, 'features')) {
          var v = Y(t, 'features'),
            b = Y(n, 'features');
          if (v !== b) {
            var g = Ut(v, b, function(e, t) {
                return e.id === t.id;
              }),
              O = Ut(b, v, function(e, t) {
                return e.id === t.id;
              });
            e.remove(g), e.add(O);
          }
        }
        L(e, s, r), V(p, a, e);
      }),
      (t.unmountObject = function(e, t) {
        var n = F(t),
          o = n.instanceRef,
          r = n.parent,
          a = n._events;
        null !== e &&
          (Object.keys(a).forEach(function(t) {
            return N(e, t, a[t]);
          }),
          r.geoObjects && 'function' == typeof r.geoObjects.remove
            ? r.geoObjects.remove(e)
            : r.remove && 'function' == typeof r.remove && r.remove(e),
          V(o));
      }),
      t
    );
  })(t.Component),
  Bt = j.shape({
    id: j.oneOfType([j.number, j.string]).isRequired,
    type: j.oneOf(['Feature']).isRequired,
    geometry: j.object.isRequired,
    options: j.object,
    properties: j.object,
  }),
  Ft = { type: j.oneOf(['FeatureCollection']).isRequired };
Ft.features = j.arrayOf(j.oneOfType([j.shape(Ft), Bt])).isRequired;
var zt = j.shape(Ft),
  Nt = j.oneOfType([j.arrayOf(j.oneOfType([zt, Bt])), zt]),
  Lt = j.oneOfType([j.string, j.func]),
  Wt = j.shape({}),
  Gt = j.shape({}),
  Yt = j.shape({});
qt.propTypes = {
  features: Nt,
  defaultFeatures: Nt,
  filter: Lt,
  defaultFilter: Lt,
  options: Wt,
  defaultOptions: Wt,
  objects: Gt,
  defaultObjects: Gt,
  clusters: Yt,
  defaultClusters: Yt,
  instanceRef: j.func,
  ymaps: j.object,
  parent: j.object,
};
var Vt = k(I(qt, !0, ['ObjectManager'])),
  Zt = (function(e) {
    function t() {
      e.call(this), (this.state = { instance: null });
    }
    return (
      e && (t.__proto__ = e),
      ((t.prototype = Object.create(e && e.prototype)).constructor = t),
      (t.prototype.componentDidMount = function() {
        var e = this.props,
          n = e.name,
          o = e.ymaps,
          r = e.dangerZone,
          a = t.mountObject(
            r && 'function' == typeof r.modifyConstructor
              ? r.modifyConstructor(o[n])
              : o[n],
            this.props
          );
        this.setState({ instance: a });
      }),
      (t.prototype.componentDidUpdate = function(e) {
        null !== this.state.instance &&
          t.updateObject(this.state.instance, e, this.props);
      }),
      (t.prototype.componentWillUnmount = function() {
        t.unmountObject(this.state.instance, this.props);
      }),
      (t.prototype.render = function() {
        return null;
      }),
      (t.mountObject = function(e, t) {
        var n = F(t),
          o = n.instanceRef,
          r = n.parent,
          a = n._events,
          i = new e(Y(t, 'geometry'), Y(t, 'properties'), Y(t, 'options'));
        if (
          (Object.keys(a).forEach(function(e) {
            return z(i, e, a[e]);
          }),
          r && r.geoObjects && 'function' == typeof r.geoObjects.add)
        )
          r.geoObjects.add(i);
        else {
          if (!r || !r.add || 'function' != typeof r.add)
            throw new Error('No parent found to mount ' + t.name);
          r.add(i);
        }
        return V(null, o, i), i;
      }),
      (t.updateObject = function(e, t, n) {
        var o = F(n),
          r = o._events,
          a = o.instanceRef,
          i = F(t),
          s = i._events,
          p = i.instanceRef;
        if (G(n, 'geometry')) {
          var u = Y(t, 'geometry', {}),
            c = Y(n, 'geometry', {});
          Array.isArray(c) && c !== u
            ? Array.isArray(c[0]) && 'number' == typeof c[1]
              ? (e.geometry.setCoordinates(c[0]), e.geometry.setRadius(c[1]))
              : e.geometry.setCoordinates(c)
            : 'object' == typeof c &&
              (c.coordinates !== u.coordinates &&
                e.geometry.setCoordinates(c.coordinates),
              c.radius !== u.radius && e.geometry.setRadius(c.radius));
        }
        if (G(n, 'properties')) {
          var f = Y(t, 'properties'),
            l = Y(n, 'properties');
          f !== l && e.properties.set(l);
        }
        if (G(n, 'options')) {
          var d = Y(t, 'options'),
            y = Y(n, 'options');
          d !== y && e.options.set(y);
        }
        L(e, s, r), V(p, a, e);
      }),
      (t.unmountObject = function(e, t) {
        var n = F(t),
          o = n.instanceRef,
          r = n.parent,
          a = n._events;
        null !== e &&
          (Object.keys(a).forEach(function(t) {
            return N(e, t, a[t]);
          }),
          r.geoObjects && 'function' == typeof r.geoObjects.remove
            ? r.geoObjects.remove(e)
            : r.remove && 'function' == typeof r.remove && r.remove(e),
          V(o));
      }),
      t
    );
  })(t.Component);
Zt.propTypes = {
  instanceRef: j.func,
  ymaps: j.object,
  parent: j.object,
  name: j.oneOf([
    'GeoObject',
    'Placemark',
    'Polyline',
    'Rectangle',
    'Polygon',
    'Circle',
  ]).isRequired,
  dangerZone: j.shape({ modifyConstructor: j.func }),
};
var Jt = {
  modifyConstructor: function(e) {
    function t(t, n, o) {
      e.call(this, { geometry: t, properties: n }, o);
    }
    return (t.prototype = e.prototype), t;
  },
};
function Ht(e) {
  return t.createElement(
    Zt,
    Object.assign({}, e, { name: 'GeoObject', dangerZone: Jt })
  );
}
var Kt = j.shape({
  type: j.oneOf(['Point', 'LineString', 'Rectangle', 'Polygon', 'Circle'])
    .isRequired,
  coordinates: j.oneOfType([
    j.arrayOf(j.number),
    j.arrayOf(j.arrayOf(j.number)),
    j.arrayOf(j.arrayOf(j.arrayOf(j.number))),
  ]).isRequired,
  radius: j.number,
});
Ht.propTypes = {
  geometry: Kt,
  defaultGeometry: Kt,
  properties: j.shape({}),
  defaultProperties: j.shape({}),
  options: j.shape({}),
  defaultOptions: j.shape({}),
};
var Qt = k(I(Ht, !0, ['GeoObject']));
function Xt(e) {
  return t.createElement(Zt, Object.assign({}, e, { name: 'Circle' }));
}
var en = j.arrayOf(j.oneOfType([j.number, j.arrayOf(j.number)]));
Xt.propTypes = {
  geometry: en,
  defaultGeometry: en,
  properties: j.shape({}),
  defaultProperties: j.shape({}),
  options: j.shape({}),
  defaultOptions: j.shape({}),
};
var tn = k(I(Xt, !0, ['Circle']));
function nn(e) {
  return t.createElement(Zt, Object.assign({}, e, { name: 'Placemark' }));
}
var on = j.arrayOf(j.number);
nn.propTypes = {
  geometry: on,
  defaultGeometry: on,
  properties: j.shape({}),
  defaultProperties: j.shape({}),
  options: j.shape({}),
  defaultOptions: j.shape({}),
};
var rn = k(I(nn, !0, ['Placemark']));
function an(e) {
  return t.createElement(Zt, Object.assign({}, e, { name: 'Polygon' }));
}
var sn = j.arrayOf(j.arrayOf(j.arrayOf(j.number)));
an.propTypes = {
  geometry: sn,
  defaultGeometry: sn,
  properties: j.shape({}),
  defaultProperties: j.shape({}),
  options: j.shape({}),
  defaultOptions: j.shape({}),
};
var pn = k(I(an, !0, ['Polygon']));
function un(e) {
  return t.createElement(Zt, Object.assign({}, e, { name: 'Polyline' }));
}
var cn = j.arrayOf(j.arrayOf(j.number));
un.propTypes = {
  geometry: cn,
  defaultGeometry: cn,
  properties: j.shape({}),
  defaultProperties: j.shape({}),
  options: j.shape({}),
  defaultOptions: j.shape({}),
};
var fn = k(I(un, !0, ['Polyline']));
function ln(e) {
  return t.createElement(Zt, Object.assign({}, e, { name: 'Rectangle' }));
}
var dn = j.arrayOf(j.arrayOf(j.number));
ln.propTypes = {
  geometry: dn,
  defaultGeometry: dn,
  properties: j.shape({}),
  defaultProperties: j.shape({}),
  options: j.shape({}),
  defaultOptions: j.shape({}),
};
var yn = k(I(ln, !0, ['Rectangle']));
(exports.withYMaps = I),
  (exports.YMaps = q),
  (exports.Map = Q),
  (exports.Panorama = te),
  (exports.Button = re),
  (exports.FullscreenControl = ie),
  (exports.GeolocationControl = pe),
  (exports.ListBox = ce),
  (exports.ListBoxItem = le),
  (exports.RouteButton = ye),
  (exports.RouteEditor = me),
  (exports.RoutePanel = be),
  (exports.RulerControl = Oe),
  (exports.SearchControl = je),
  (exports.TrafficControl = xe),
  (exports.TypeSelector = Ee),
  (exports.ZoomControl = Re),
  (exports.Clusterer = Me),
  (exports.ObjectManager = Vt),
  (exports.GeoObject = Qt),
  (exports.Circle = tn),
  (exports.Placemark = rn),
  (exports.Polygon = pn),
  (exports.Polyline = fn),
  (exports.Rectangle = yn);
//# sourceMappingURL=react-yandex-maps.js.map
