import e from 'react';
var t =
  'undefined' != typeof globalThis
    ? globalThis
    : 'undefined' != typeof window
    ? window
    : 'undefined' != typeof global
    ? global
    : 'undefined' != typeof self
    ? self
    : {};
function n(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
function o(e, t) {
  return e((t = { exports: {} }), t.exports), t.exports;
}
var r = 'function' == typeof Symbol && Symbol.for;
r && Symbol.for('react.element'),
  r && Symbol.for('react.portal'),
  r && Symbol.for('react.fragment'),
  r && Symbol.for('react.strict_mode'),
  r && Symbol.for('react.profiler'),
  r && Symbol.for('react.provider'),
  r && Symbol.for('react.context'),
  r && Symbol.for('react.async_mode'),
  r && Symbol.for('react.concurrent_mode'),
  r && Symbol.for('react.forward_ref'),
  r && Symbol.for('react.suspense'),
  r && Symbol.for('react.suspense_list'),
  r && Symbol.for('react.memo'),
  r && Symbol.for('react.lazy'),
  r && Symbol.for('react.block'),
  r && Symbol.for('react.fundamental'),
  r && Symbol.for('react.responder'),
  r && Symbol.for('react.scope');
var a = o(function(e, t) {
    !(function() {
      var e = 'function' == typeof Symbol && Symbol.for,
        n = e ? Symbol.for('react.element') : 60103,
        o = e ? Symbol.for('react.portal') : 60106,
        r = e ? Symbol.for('react.fragment') : 60107,
        a = e ? Symbol.for('react.strict_mode') : 60108,
        i = e ? Symbol.for('react.profiler') : 60114,
        s = e ? Symbol.for('react.provider') : 60109,
        u = e ? Symbol.for('react.context') : 60110,
        p = e ? Symbol.for('react.async_mode') : 60111,
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
                case p:
                case c:
                case r:
                case i:
                case a:
                case l:
                  return d;
                default:
                  var m = d && d.$$typeof;
                  switch (m) {
                    case u:
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
        j = u,
        w = s,
        S = n,
        E = f,
        T = r,
        R = h,
        P = y,
        C = o,
        x = i,
        M = a,
        A = l,
        k = !1;
      function I(e) {
        return O(e) === c;
      }
      (t.AsyncMode = p),
        (t.ConcurrentMode = _),
        (t.ContextConsumer = j),
        (t.ContextProvider = w),
        (t.Element = S),
        (t.ForwardRef = E),
        (t.Fragment = T),
        (t.Lazy = R),
        (t.Memo = P),
        (t.Portal = C),
        (t.Profiler = x),
        (t.StrictMode = M),
        (t.Suspense = A),
        (t.isAsyncMode = function(e) {
          return (
            k ||
              ((k = !0),
              console.warn(
                'The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.'
              )),
            I(e) || O(e) === p
          );
        }),
        (t.isConcurrentMode = I),
        (t.isContextConsumer = function(e) {
          return O(e) === u;
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
                e.$$typeof === u ||
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
  i = o(function(e) {
    e.exports = a;
  }),
  s = Object.getOwnPropertySymbols,
  u = Object.prototype.hasOwnProperty,
  p = Object.prototype.propertyIsEnumerable,
  c = (function() {
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
          if (s) {
            o = s(n);
            for (var c = 0; c < o.length; c++)
              p.call(n, o[c]) && (r[o[c]] = n[o[c]]);
          }
        }
        return r;
      },
  f = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
  l = Function.call.bind(Object.prototype.hasOwnProperty),
  d = function() {},
  y = f,
  h = {},
  m = l;
function v(e, t, n, o, r) {
  for (var a in e)
    if (m(e, a)) {
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
        i = e[a](t, a, o, n, null, y);
      } catch (e) {
        i = e;
      }
      if (
        (!i ||
          i instanceof Error ||
          d(
            (o || 'React class') +
              ': type specification of ' +
              n +
              ' `' +
              a +
              '` is invalid; the type checker function must return `null` or an `Error` but returned a ' +
              typeof i +
              '. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).'
          ),
        i instanceof Error && !(i.message in h))
      ) {
        h[i.message] = !0;
        var u = r ? r() : '';
        d('Failed ' + n + ' type: ' + i.message + (null != u ? u : ''));
      }
    }
}
(d = function(e) {
  var t = 'Warning: ' + e;
  'undefined' != typeof console && console.error(t);
  try {
    throw new Error(t);
  } catch (e) {}
}),
  (v.resetWarningCache = function() {
    h = {};
  });
var b = v,
  g = function() {};
function O() {
  return null;
}
g = function(e) {
  var t = 'Warning: ' + e;
  'undefined' != typeof console && console.error(t);
  try {
    throw new Error(t);
  } catch (e) {}
};
var _ = o(function(e) {
    e.exports = (function(e, t) {
      var n = 'function' == typeof Symbol && Symbol.iterator,
        o = '@@iterator',
        r = '<<anonymous>>',
        a = {
          array: p('array'),
          bigint: p('bigint'),
          bool: p('boolean'),
          func: p('function'),
          number: p('number'),
          object: p('object'),
          string: p('string'),
          symbol: p('symbol'),
          any: u(O),
          arrayOf: function(e) {
            return u(function(t, n, o, r, a) {
              if ('function' != typeof e)
                return new s(
                  'Property `' +
                    a +
                    '` of component `' +
                    o +
                    '` has invalid PropType notation inside arrayOf.'
                );
              var i = t[n];
              if (!Array.isArray(i))
                return new s(
                  'Invalid ' +
                    r +
                    ' `' +
                    a +
                    '` of type `' +
                    h(i) +
                    '` supplied to `' +
                    o +
                    '`, expected an array.'
                );
              for (var u = 0; u < i.length; u++) {
                var p = e(i, u, o, r, a + '[' + u + ']', f);
                if (p instanceof Error) return p;
              }
              return null;
            });
          },
          element: u(function(t, n, o, r, a) {
            var i = t[n];
            return e(i)
              ? null
              : new s(
                  'Invalid ' +
                    r +
                    ' `' +
                    a +
                    '` of type `' +
                    h(i) +
                    '` supplied to `' +
                    o +
                    '`, expected a single ReactElement.'
                );
          }),
          elementType: u(function(e, t, n, o, r) {
            var a = e[t];
            return i.isValidElementType(a)
              ? null
              : new s(
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
            return u(function(t, n, o, a, i) {
              var u;
              return t[n] instanceof e
                ? null
                : new s(
                    'Invalid ' +
                      a +
                      ' `' +
                      i +
                      '` of type `' +
                      ((u = t[n]).constructor && u.constructor.name
                        ? u.constructor.name
                        : r) +
                      '` supplied to `' +
                      o +
                      '`, expected instance of `' +
                      (e.name || r) +
                      '`.'
                  );
            });
          },
          node: u(function(e, t, n, o, r) {
            return y(e[t])
              ? null
              : new s(
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
            return u(function(t, n, o, r, a) {
              if ('function' != typeof e)
                return new s(
                  'Property `' +
                    a +
                    '` of component `' +
                    o +
                    '` has invalid PropType notation inside objectOf.'
                );
              var i = t[n],
                u = h(i);
              if ('object' !== u)
                return new s(
                  'Invalid ' +
                    r +
                    ' `' +
                    a +
                    '` of type `' +
                    u +
                    '` supplied to `' +
                    o +
                    '`, expected an object.'
                );
              for (var p in i)
                if (l(i, p)) {
                  var c = e(i, p, o, r, a + '.' + p, f);
                  if (c instanceof Error) return c;
                }
              return null;
            });
          },
          oneOf: function(e) {
            return Array.isArray(e)
              ? u(function(t, n, o, r, a) {
                  for (var i = t[n], u = 0; u < e.length; u++)
                    if (
                      (p = i) === (c = e[u])
                        ? 0 !== p || 1 / p == 1 / c
                        : p != p && c != c
                    )
                      return null;
                  var p,
                    c,
                    f = JSON.stringify(e, function(e, t) {
                      return 'symbol' === m(t) ? String(t) : t;
                    });
                  return new s(
                    'Invalid ' +
                      r +
                      ' `' +
                      a +
                      '` of value `' +
                      String(i) +
                      '` supplied to `' +
                      o +
                      '`, expected one of ' +
                      f +
                      '.'
                  );
                })
              : (g(
                  arguments.length > 1
                    ? 'Invalid arguments supplied to oneOf, expected an array, got ' +
                        arguments.length +
                        ' arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
                    : 'Invalid argument supplied to oneOf, expected an array.'
                ),
                O);
          },
          oneOfType: function(e) {
            if (!Array.isArray(e))
              return (
                g(
                  'Invalid argument supplied to oneOfType, expected an instance of array.'
                ),
                O
              );
            for (var t = 0; t < e.length; t++) {
              var n = e[t];
              if ('function' != typeof n)
                return (
                  g(
                    'Invalid argument supplied to oneOfType. Expected an array of check functions, but received ' +
                      v(n) +
                      ' at index ' +
                      t +
                      '.'
                  ),
                  O
                );
            }
            return u(function(t, n, o, r, a) {
              for (var i = [], u = 0; u < e.length; u++) {
                var p = (0, e[u])(t, n, o, r, a, f);
                if (null == p) return null;
                p.data &&
                  l(p.data, 'expectedType') &&
                  i.push(p.data.expectedType);
              }
              return new s(
                'Invalid ' +
                  r +
                  ' `' +
                  a +
                  '` supplied to `' +
                  o +
                  '`' +
                  (i.length > 0
                    ? ', expected one of type [' + i.join(', ') + ']'
                    : '') +
                  '.'
              );
            });
          },
          shape: function(e) {
            return u(function(t, n, o, r, a) {
              var i = t[n],
                u = h(i);
              if ('object' !== u)
                return new s(
                  'Invalid ' +
                    r +
                    ' `' +
                    a +
                    '` of type `' +
                    u +
                    '` supplied to `' +
                    o +
                    '`, expected `object`.'
                );
              for (var p in e) {
                var c = e[p];
                if ('function' != typeof c) return d(o, r, a, p, m(c));
                var l = c(i, p, o, r, a + '.' + p, f);
                if (l) return l;
              }
              return null;
            });
          },
          exact: function(e) {
            return u(function(t, n, o, r, a) {
              var i = t[n],
                u = h(i);
              if ('object' !== u)
                return new s(
                  'Invalid ' +
                    r +
                    ' `' +
                    a +
                    '` of type `' +
                    u +
                    '` supplied to `' +
                    o +
                    '`, expected `object`.'
                );
              var p = c({}, t[n], e);
              for (var y in p) {
                var v = e[y];
                if (l(e, y) && 'function' != typeof v)
                  return d(o, r, a, y, m(v));
                if (!v)
                  return new s(
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
                var b = v(i, y, o, r, a + '.' + y, f);
                if (b) return b;
              }
              return null;
            });
          },
        };
      function s(e, t) {
        (this.message = e),
          (this.data = t && 'object' == typeof t ? t : {}),
          (this.stack = '');
      }
      function u(e) {
        var n = {},
          o = 0;
        function a(a, i, u, p, c, l, d) {
          if (((p = p || r), (l = l || u), d !== f)) {
            if (t) {
              var y = new Error(
                'Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types'
              );
              throw ((y.name = 'Invariant Violation'), y);
            }
            if ('undefined' != typeof console) {
              var h = p + ':' + u;
              !n[h] &&
                o < 3 &&
                (g(
                  'You are manually calling a React.PropTypes validation function for the `' +
                    l +
                    '` prop on `' +
                    p +
                    '`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.'
                ),
                (n[h] = !0),
                o++);
            }
          }
          return null == i[u]
            ? a
              ? new s(
                  null === i[u]
                    ? 'The ' +
                      c +
                      ' `' +
                      l +
                      '` is marked as required in `' +
                      p +
                      '`, but its value is `null`.'
                    : 'The ' +
                      c +
                      ' `' +
                      l +
                      '` is marked as required in `' +
                      p +
                      '`, but its value is `undefined`.'
                )
              : null
            : e(i, u, p, c, l);
        }
        var i = a.bind(null, !1);
        return (i.isRequired = a.bind(null, !0)), i;
      }
      function p(e) {
        return u(function(t, n, o, r, a, i) {
          var u = t[n];
          return h(u) !== e
            ? new s(
                'Invalid ' +
                  r +
                  ' `' +
                  a +
                  '` of type `' +
                  m(u) +
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
      function d(e, t, n, o, r) {
        return new s(
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
        (s.prototype = Error.prototype),
        (a.checkPropTypes = b),
        (a.resetWarningCache = b.resetWarningCache),
        (a.PropTypes = a),
        a
      );
    })(i.isElement, !0);
  }),
  j = n(
    o(function(e, t) {
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
  w = function(e, t) {
    var n = {};
    for (var o in e) -1 === t.indexOf(o) && (n[o] = e[o]);
    return n;
  },
  S = '__global_unique_id__',
  E = function() {
    return (t[S] = (t[S] || 0) + 1);
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
  R = o(function(t, n) {
    n.__esModule = !0;
    var o = i(_),
      r = i(E),
      a = i(T);
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function s(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function u(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
    }
    function p(e, t) {
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
    (n.default = function(t, n) {
      var i,
        c,
        f = '__create-react-context-' + (0, r.default)() + '__',
        l = (function(e) {
          function t() {
            var n, o, r, a;
            s(this, t);
            for (var i = arguments.length, p = Array(i), c = 0; c < i; c++)
              p[c] = arguments[c];
            return (
              (n = o = u(this, e.call.apply(e, [this].concat(p)))),
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
              u(o, n)
            );
          }
          return (
            p(t, e),
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
        })(e.Component);
      l.childContextTypes = (((i = {})[f] = o.default.object.isRequired), i);
      var d = (function(e) {
        function n() {
          var t, o;
          s(this, n);
          for (var r = arguments.length, a = Array(r), i = 0; i < r; i++)
            a[i] = arguments[i];
          return (
            (t = o = u(this, e.call.apply(e, [this].concat(a)))),
            (o.state = { value: o.getValue() }),
            (o.onUpdate = function(e, t) {
              0 != ((0 | o.observedBits) & t) &&
                o.setState({ value: o.getValue() });
            }),
            u(o, t)
          );
        }
        return (
          p(n, e),
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
            return this.context[f] ? this.context[f].get() : t;
          }),
          (n.prototype.render = function() {
            return ((e = this.props.children), Array.isArray(e) ? e[0] : e)(
              this.state.value
            );
            var e;
          }),
          n
        );
      })(e.Component);
      return (
        (d.contextTypes = (((c = {})[f] = o.default.object), c)),
        { Provider: l, Consumer: d }
      );
    }),
      (t.exports = n.default);
  });
n(R);
var P = n(
    o(function(t, n) {
      n.__esModule = !0;
      var o = a(e),
        r = a(R);
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (n.default = o.default.createContext || r.default),
        (t.exports = n.default);
    })
  ),
  C = P(null),
  x = function(t) {
    var n = j(t),
      o = function(o) {
        return e.createElement(C.Consumer, null, function(r) {
          if (null === r)
            throw new Error(
              "Couldn't find Yandex.Maps API in the context. Make sure that <" +
                n +
                ' /> is inside <YMaps /> provider'
            );
          return e.createElement(t, Object.assign({}, { ymaps: r }, o));
        });
      };
    return (o.displayName = 'withYMapsContext(' + n + ')'), o;
  },
  M = P(null),
  A = function(t) {
    var n = function(n) {
      return e.createElement(M.Consumer, null, function(o) {
        return e.createElement(t, Object.assign({}, { parent: o }, n));
      });
    };
    return (n.displayName = 'withParentContext(' + j(t) + ')'), n;
  };
function k(t, n, o) {
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
          a = w(this.props, ['onLoad', 'onError', 'modules', 'ymaps']);
        return (
          r && e.createElement(t, Object.assign({}, { ymaps: o.getApi() }, a))
        );
      }),
      a
    );
  })(e.Component);
  return (
    (r.displayName = 'withYMaps(' + j(t) + ')'),
    (r.propTypes = {
      onLoad: _.func,
      onError: _.func,
      modules: _.arrayOf(_.string),
      ymaps: _.object,
    }),
    (r.defaultProps = {
      onLoad: Function.prototype,
      onError: Function.prototype,
      modules: [],
    }),
    x(r)
  );
}
var I = { lang: 'ru_RU', load: '', ns: '', mode: 'debug' },
  $ = {},
  D = function(e) {
    var t = Date.now().toString(32);
    (this.options = e),
      (this.namespace = e.query.ns || I.ns),
      (this.onload = '__yandex-maps-api-onload__$$' + t),
      (this.onerror = '__yandex-maps-api-onerror__$$' + t);
  };
(D.prototype.getApi = function() {
  return 'undefined' != typeof window && this.namespace
    ? window[this.namespace]
    : this.api;
}),
  (D.prototype.setApi = function(e) {
    return (this.api = e);
  }),
  (D.prototype.getPromise = function() {
    return this.namespace ? $[this.namespace] : this.promise;
  }),
  (D.prototype.setPromise = function(e) {
    return this.namespace
      ? ($[this.namespace] = this.promise = e)
      : (this.promise = e);
  }),
  (D.prototype.load = function() {
    var e = this;
    if (this.getApi()) return Promise.resolve(this.setApi(this.getApi()));
    if (this.getPromise()) return this.setPromise(this.getPromise());
    var t = Object.assign(
        { onload: this.onload, onerror: this.onerror },
        I,
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
  (D.prototype.fetchScript = function(e) {
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
  (D.prototype.loadModule = function(e) {
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
  (D._name = '__react-yandex-maps__');
var U = (function(t) {
  function n(e) {
    t.call(this, e), (this.ymaps = new D(e));
  }
  return (
    t && (n.__proto__ = t),
    ((n.prototype = Object.create(t && t.prototype)).constructor = n),
    (n.prototype.componentDidMount = function() {
      !0 === this.props.preload && this.ymaps.load();
    }),
    (n.prototype.render = function() {
      return e.createElement(
        C.Provider,
        { value: this.ymaps },
        this.props.children
      );
    }),
    n
  );
})(e.Component);
(U.propTypes = {
  version: _.string.isRequired,
  enterprise: _.bool,
  query: _.shape({
    lang: _.oneOf(['tr_TR', 'en_US', 'en_RU', 'ru_RU', 'ru_UA', 'uk_UA']),
    apikey: _.string,
    coordorder: _.oneOf(['latlong', 'longlat']),
    load: _.string,
    mode: _.oneOf(['release', 'debug']),
    csp: _.bool,
    ns: _.string,
  }),
  children: _.node,
  preload: _.bool,
}),
  (U.defaultProps = {
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
function q(e, t, n) {
  'function' == typeof n && e.events.add(t, n);
}
function z(e, t, n) {
  'function' == typeof n && e.events.remove(t, n);
}
function N(e, t, n) {
  Object.keys(Object.assign({}, t, n)).forEach(function(o) {
    t[o] !== n[o] && (z(e, o, t[o]), q(e, o, n[o]));
  });
}
var L = function(e) {
  return 'default' + e.charAt(0).toUpperCase() + e.slice(1);
};
function W(e, t) {
  return void 0 !== e[t] || void 0 === e[L(t)];
}
function G(e, t, n) {
  return (W(e, t) ? e[t] : e[L(t)]) || n;
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
function Y(e) {
  var t = e.width,
    n = e.height,
    o = e.style,
    r = e.className;
  return void 0 !== o || void 0 !== r
    ? Object.assign({}, o && { style: o }, r && { className: r })
    : { style: { width: t, height: n } };
}
var Z = (function(t) {
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
        var t = Y(this.props),
          n = F(this.props),
          o = w(n, [
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
          M.Provider,
          { value: this.state.instance },
          e.createElement(
            'div',
            Object.assign({}, { ref: this._getRef }, t, o),
            this.props.children
          )
        );
      }),
      (n.mountObject = function(e, t, n) {
        var o = F(n),
          r = o.instanceRef,
          a = o._events,
          i = new t(e, G(n, 'state'), G(n, 'options'));
        return (
          Object.keys(a).forEach(function(e) {
            return q(i, e, a[e]);
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
          u = i.instanceRef;
        if (W(n, 'state')) {
          var p = G(t, 'state', {}),
            c = G(n, 'state', {});
          p.type !== c.type && e.setType(c.type),
            p.behaviors !== c.behaviors &&
              (p.behaviors && e.behaviors.disable(p.behaviors),
              c.behaviors && e.behaviors.enable(c.behaviors)),
            c.zoom && p.zoom !== c.zoom && e.setZoom(c.zoom),
            c.center && p.center !== c.center && e.setCenter(c.center),
            c.bounds && p.bounds !== c.bounds && e.setBounds(c.bounds);
        }
        if (W(n, 'options')) {
          var f = G(t, 'options'),
            l = G(n, 'options', {});
          f !== l && e.options.set(l);
        }
        (G(t, 'width') === G(n, 'width') &&
          G(t, 'height') === G(n, 'height')) ||
          e.container.fitToViewport(),
          N(e, s, r),
          V(u, a, e);
      }),
      (n.unmountObject = function(e, t) {
        var n = F(t),
          o = n.instanceRef,
          r = n._events;
        null !== e &&
          (Object.keys(r).forEach(function(t) {
            return z(e, t, r[t]);
          }),
          e.destroy(),
          V(o));
      }),
      n
    );
  })(e.Component),
  J = {
    bounds: _.arrayOf(_.arrayOf(_.number)),
    center: _.arrayOf(_.number),
    controls: _.arrayOf(_.string),
    behaviors: _.arrayOf(_.string),
    margin: _.oneOfType([_.arrayOf(_.number), _.arrayOf(_.arrayOf(_.number))]),
    type: _.oneOf(['yandex#map', 'yandex#satellite', 'yandex#hybrid']),
    zoom: _.number,
  },
  H = {};
(Z.propTypes = {
  state: _.shape(J),
  defaultState: _.shape(J),
  options: _.shape(H),
  defaultOptions: _.shape(H),
  instanceRef: _.func,
  ymaps: _.object,
  children: _.node,
  width: _.oneOfType([_.number, _.string]),
  height: _.oneOfType([_.number, _.string]),
  style: _.object,
  className: _.string,
}),
  (Z.defaultProps = { width: 320, height: 240 });
var K = k(Z, !0, ['Map']),
  Q = (function(t) {
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
        var t = Y(this.props);
        return e.createElement(
          'div',
          Object.assign({}, { ref: this._getRef }, t)
        );
      }),
      (n.mountObject = function(e, t, n) {
        var o = F(n),
          r = o.instanceRef,
          a = o._events,
          i = G(n, 'point'),
          s = G(n, 'locateOptions'),
          u = G(n, 'options');
        return new Promise(function(n, o) {
          t.locate(i, s).done(function(o) {
            if (o.length > 0) {
              var i = new t.Player(e, o[0], u);
              V(null, r, i),
                Object.keys(a).forEach(function(e) {
                  return q(i, e, a[e]);
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
          u = i.instanceRef;
        if (W(n, 'options')) {
          var p = G(t, 'options'),
            c = G(n, 'options');
          p !== c && e.options.set(c);
        }
        if (W(n, 'point')) {
          var f = G(n, 'point'),
            l = G(t, 'point'),
            d = G(n, 'locateOptions');
          f !== l && e.moveTo(f, d);
        }
        N(e, s, r), V(u, a, e);
      }),
      (n.unmountObject = function(e, t) {
        var n = F(t),
          o = n.instanceRef,
          r = n._events;
        null !== e &&
          (Object.keys(r).forEach(function(t) {
            return z(e, t, r[t]);
          }),
          V(o));
      }),
      n
    );
  })(e.Component),
  X = {};
(Q.propTypes = {
  options: _.shape(X),
  defaultOptions: _.shape(X),
  point: _.arrayOf(_.number),
  defaultPoint: _.arrayOf(_.number),
  locateOptions: _.shape({
    layer: _.oneOf(['yandex#panorama', 'yandex#airPanorama']),
  }),
  instanceRef: _.func,
  ymaps: _.object,
  children: _.node,
  width: _.oneOfType([_.number, _.string]),
  height: _.oneOfType([_.number, _.string]),
  style: _.object,
  className: _.string,
}),
  (Q.defaultProps = { width: 320, height: 240 });
var ee = k(Q, !0, [
    'panorama.isSupported',
    'panorama.locate',
    'panorama.createPlayer',
    'panorama.Player',
  ]),
  te = (function(t) {
    function n() {
      t.call(this), (this.state = { instance: null });
    }
    return (
      t && (n.__proto__ = t),
      ((n.prototype = Object.create(t && t.prototype)).constructor = n),
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
        return e.createElement(
          M.Provider,
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
            data: G(t, 'data'),
            options: G(t, 'options'),
            state: G(t, 'state'),
            mapTypes: G(t, 'mapTypes'),
            lazy: a,
          });
        if (
          (Object.keys(i).forEach(function(e) {
            return q(s, e, i[e]);
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
          u = i.instanceRef;
        if (W(n, 'options')) {
          var p = G(t, 'options'),
            c = G(n, 'options');
          p !== c && e.options.set(c);
        }
        if (W(n, 'data')) {
          var f = G(t, 'data'),
            l = G(n, 'data');
          f !== l && e.data.set(l);
        }
        if (W(n, 'state')) {
          var d = G(t, 'state'),
            y = G(n, 'state');
          d !== y && e.state.set(y);
        }
        if (W(n, 'mapTypes')) {
          var h = G(t, 'mapTypes'),
            m = G(n, 'mapTypes');
          h !== m &&
            (e.removeAllMapTypes(),
            m.forEach(function(t) {
              return e.addMapType(t);
            }));
        }
        N(e, s, r), V(u, a, e);
      }),
      (n.unmountControl = function(e, t) {
        var n = F(t),
          o = n.instanceRef,
          r = n.parent,
          a = n._events;
        null !== e &&
          (Object.keys(a).forEach(function(t) {
            return z(e, t, a[t]);
          }),
          r.controls && 'function' == typeof r.controls.remove
            ? r.controls.remove(e)
            : r.remove && 'function' == typeof r.remove && r.remove(e),
          V(o));
      }),
      n
    );
  })(e.Component);
function ne(t) {
  return e.createElement(te, Object.assign({}, t, { name: 'Button' }));
}
(te.propTypes = {
  children: _.node,
  instanceRef: _.func,
  ymaps: _.object,
  parent: _.object,
  name: _.oneOf([
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
  (ne.propTypes = {
    data: _.shape({}),
    defaultData: _.shape({}),
    options: _.shape({}),
    defaultOptions: _.shape({}),
    state: _.shape({}),
    defaultState: _.shape({}),
  });
var oe = A(k(ne, !0, ['control.Button']));
function re(t) {
  return e.createElement(
    te,
    Object.assign({}, t, { name: 'FullscreenControl' })
  );
}
re.propTypes = {
  data: _.shape({}),
  defaultData: _.shape({}),
  options: _.shape({}),
  defaultOptions: _.shape({}),
  state: _.shape({}),
  defaultState: _.shape({}),
};
var ae = A(k(re, !0, ['control.FullscreenControl']));
function ie(t) {
  return e.createElement(
    te,
    Object.assign({}, t, { name: 'GeolocationControl' })
  );
}
ie.propTypes = {
  data: _.shape({}),
  defaultData: _.shape({}),
  options: _.shape({}),
  defaultOptions: _.shape({}),
  state: _.shape({}),
  defaultState: _.shape({}),
};
var se = A(k(ie, !0, ['control.GeolocationControl']));
function ue(t) {
  return e.createElement(te, Object.assign({}, t, { name: 'ListBox' }));
}
ue.propTypes = {
  data: _.shape({}),
  defaultData: _.shape({}),
  options: _.shape({}),
  defaultOptions: _.shape({}),
  state: _.shape({}),
  defaultState: _.shape({}),
};
var pe = A(k(ue, !0, ['control.ListBox']));
function ce(t) {
  return e.createElement(te, Object.assign({}, t, { name: 'ListBoxItem' }));
}
ce.propTypes = {
  data: _.shape({}),
  defaultData: _.shape({}),
  options: _.shape({}),
  defaultOptions: _.shape({}),
  state: _.shape({}),
  defaultState: _.shape({}),
};
var fe = A(k(ce, !0, ['control.ListBoxItem']));
function le(t) {
  return e.createElement(te, Object.assign({}, t, { name: 'RouteButton' }));
}
le.propTypes = {
  data: _.shape({}),
  defaultData: _.shape({}),
  options: _.shape({}),
  defaultOptions: _.shape({}),
  state: _.shape({}),
  defaultState: _.shape({}),
};
var de = A(k(le, !0, ['control.RouteButton']));
function ye(t) {
  return e.createElement(te, Object.assign({}, t, { name: 'RouteEditor' }));
}
ye.propTypes = {
  data: _.shape({}),
  defaultData: _.shape({}),
  options: _.shape({}),
  defaultOptions: _.shape({}),
  state: _.shape({}),
  defaultState: _.shape({}),
};
var he = A(k(ye, !0, ['control.RouteEditor']));
function me(t) {
  return e.createElement(te, Object.assign({}, t, { name: 'RoutePanel' }));
}
me.propTypes = {
  data: _.shape({}),
  defaultData: _.shape({}),
  options: _.shape({}),
  defaultOptions: _.shape({}),
  state: _.shape({}),
  defaultState: _.shape({}),
};
var ve = A(k(me, !0, ['control.RoutePanel']));
function be(t) {
  return e.createElement(te, Object.assign({}, t, { name: 'RulerControl' }));
}
be.propTypes = {
  data: _.shape({}),
  defaultData: _.shape({}),
  options: _.shape({}),
  defaultOptions: _.shape({}),
  state: _.shape({}),
  defaultState: _.shape({}),
};
var ge = A(k(be, !0, ['control.RulerControl']));
function Oe(t) {
  return e.createElement(te, Object.assign({}, t, { name: 'SearchControl' }));
}
Oe.propTypes = {
  data: _.shape({}),
  defaultData: _.shape({}),
  options: _.shape({}),
  defaultOptions: _.shape({}),
  state: _.shape({}),
  defaultState: _.shape({}),
};
var _e = A(k(Oe, !0, ['control.SearchControl']));
function je(t) {
  return e.createElement(te, Object.assign({}, t, { name: 'TrafficControl' }));
}
je.propTypes = {
  data: _.shape({}),
  defaultData: _.shape({}),
  options: _.shape({}),
  defaultOptions: _.shape({}),
  state: _.shape({}),
  defaultState: _.shape({}),
};
var we = A(k(je, !0, ['control.TrafficControl']));
function Se(t) {
  return e.createElement(te, Object.assign({}, t, { name: 'TypeSelector' }));
}
Se.propTypes = {
  mapTypes: _.arrayOf(
    _.oneOf(['yandex#map', 'yandex#satellite', 'yandex#hybrid'])
  ),
  defaultMapTypes: _.arrayOf(
    _.oneOf(['yandex#map', 'yandex#satellite', 'yandex#hybrid'])
  ),
  options: _.shape({}),
  defaultOptions: _.shape({}),
  state: _.shape({}),
  defaultState: _.shape({}),
};
var Ee = A(k(Se, !0, ['control.TypeSelector']));
function Te(t) {
  return e.createElement(te, Object.assign({}, t, { name: 'ZoomControl' }));
}
Te.propTypes = {
  data: _.shape({}),
  defaultData: _.shape({}),
  options: _.shape({}),
  defaultOptions: _.shape({}),
  state: _.shape({}),
  defaultState: _.shape({}),
};
var Re = A(k(Te, !0, ['control.ZoomControl'])),
  Pe = (function(t) {
    function n() {
      t.call(this), (this.state = { instance: null });
    }
    return (
      t && (n.__proto__ = t),
      ((n.prototype = Object.create(t && t.prototype)).constructor = n),
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
        return e.createElement(
          M.Provider,
          { value: this.state.instance },
          this.props.children
        );
      }),
      (n.mountObject = function(e, t) {
        var n = F(t),
          o = n.instanceRef,
          r = n.parent,
          a = n._events,
          i = new e(G(t, 'options'));
        if (
          (Object.keys(a).forEach(function(e) {
            return q(i, e, a[e]);
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
          u = i.instanceRef;
        if (W(n, 'options')) {
          var p = G(t, 'options'),
            c = G(n, 'options');
          p !== c && e.options.set(c);
        }
        N(e, s, r), V(u, a, e);
      }),
      (n.unmountObject = function(e, t) {
        var n = F(t),
          o = n.instanceRef,
          r = n.parent,
          a = n._events;
        null !== e &&
          (Object.keys(a).forEach(function(t) {
            return z(e, t, a[t]);
          }),
          r.geoObjects && 'function' == typeof r.geoObjects.remove
            ? r.geoObjects.remove(e)
            : r.remove && 'function' == typeof r.remove && r.remove(e),
          V(o));
      }),
      n
    );
  })(e.Component);
Pe.propTypes = {
  options: _.shape({}),
  defaultOptions: _.shape({}),
  instanceRef: _.func,
  ymaps: _.object,
  parent: _.object,
  children: _.node,
};
var Ce,
  xe = A(k(Pe, !0, ['Clusterer'])),
  Me = 'object' == typeof t && t && t.Object === Object && t,
  Ae = 'object' == typeof self && self && self.Object === Object && self,
  ke = Me || Ae || Function('return this')(),
  Ie = ke.Symbol,
  $e = Object.prototype,
  De = $e.hasOwnProperty,
  Ue = $e.toString,
  Be = Ie ? Ie.toStringTag : void 0,
  Fe = Object.prototype.toString,
  qe = Ie ? Ie.toStringTag : void 0,
  ze = function(e) {
    return null == e
      ? void 0 === e
        ? '[object Undefined]'
        : '[object Null]'
      : qe && qe in Object(e)
      ? (function(e) {
          var t = De.call(e, Be),
            n = e[Be];
          try {
            e[Be] = void 0;
          } catch (e) {}
          var o = Ue.call(e);
          return t ? (e[Be] = n) : delete e[Be], o;
        })(e)
      : (function(e) {
          return Fe.call(e);
        })(e);
  },
  Ne = function(e) {
    var t = typeof e;
    return null != e && ('object' == t || 'function' == t);
  },
  Le = function(e) {
    if (!Ne(e)) return !1;
    var t = ze(e);
    return (
      '[object Function]' == t ||
      '[object GeneratorFunction]' == t ||
      '[object AsyncFunction]' == t ||
      '[object Proxy]' == t
    );
  },
  We = ke['__core-js_shared__'],
  Ge = (Ce = /[^.]+$/.exec((We && We.keys && We.keys.IE_PROTO) || ''))
    ? 'Symbol(src)_1.' + Ce
    : '',
  Ve = Function.prototype.toString,
  Ye = /^\[object .+?Constructor\]$/,
  Ze = Function.prototype,
  Je = Object.prototype,
  He = RegExp(
    '^' +
      Ze.toString
        .call(Je.hasOwnProperty)
        .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
        .replace(
          /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
          '$1.*?'
        ) +
      '$'
  ),
  Ke = function(e, t) {
    var n = (function(e, t) {
      return null == e ? void 0 : e[t];
    })(e, t);
    return (function(e) {
      return (
        !(!Ne(e) || ((t = e), Ge && Ge in t)) &&
        (Le(e) ? He : Ye).test(
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
  Qe = Ke(Object, 'create'),
  Xe = Object.prototype.hasOwnProperty,
  et = Object.prototype.hasOwnProperty;
function tt(e) {
  var t = -1,
    n = null == e ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
(tt.prototype.clear = function() {
  (this.__data__ = Qe ? Qe(null) : {}), (this.size = 0);
}),
  (tt.prototype.delete = function(e) {
    var t = this.has(e) && delete this.__data__[e];
    return (this.size -= t ? 1 : 0), t;
  }),
  (tt.prototype.get = function(e) {
    var t = this.__data__;
    if (Qe) {
      var n = t[e];
      return '__lodash_hash_undefined__' === n ? void 0 : n;
    }
    return Xe.call(t, e) ? t[e] : void 0;
  }),
  (tt.prototype.has = function(e) {
    var t = this.__data__;
    return Qe ? void 0 !== t[e] : et.call(t, e);
  }),
  (tt.prototype.set = function(e, t) {
    var n = this.__data__;
    return (
      (this.size += this.has(e) ? 0 : 1),
      (n[e] = Qe && void 0 === t ? '__lodash_hash_undefined__' : t),
      this
    );
  });
var nt = tt,
  ot = function(e, t) {
    for (var n = e.length; n--; )
      if ((o = e[n][0]) === (r = t) || (o != o && r != r)) return n;
    var o, r;
    return -1;
  },
  rt = Array.prototype.splice;
function at(e) {
  var t = -1,
    n = null == e ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
(at.prototype.clear = function() {
  (this.__data__ = []), (this.size = 0);
}),
  (at.prototype.delete = function(e) {
    var t = this.__data__,
      n = ot(t, e);
    return !(
      n < 0 || (n == t.length - 1 ? t.pop() : rt.call(t, n, 1), --this.size, 0)
    );
  }),
  (at.prototype.get = function(e) {
    var t = this.__data__,
      n = ot(t, e);
    return n < 0 ? void 0 : t[n][1];
  }),
  (at.prototype.has = function(e) {
    return ot(this.__data__, e) > -1;
  }),
  (at.prototype.set = function(e, t) {
    var n = this.__data__,
      o = ot(n, e);
    return o < 0 ? (++this.size, n.push([e, t])) : (n[o][1] = t), this;
  });
var it = at,
  st = Ke(ke, 'Map'),
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
function pt(e) {
  var t = -1,
    n = null == e ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
(pt.prototype.clear = function() {
  (this.size = 0),
    (this.__data__ = {
      hash: new nt(),
      map: new (st || it)(),
      string: new nt(),
    });
}),
  (pt.prototype.delete = function(e) {
    var t = ut(this, e).delete(e);
    return (this.size -= t ? 1 : 0), t;
  }),
  (pt.prototype.get = function(e) {
    return ut(this, e).get(e);
  }),
  (pt.prototype.has = function(e) {
    return ut(this, e).has(e);
  }),
  (pt.prototype.set = function(e, t) {
    var n = ut(this, e),
      o = n.size;
    return n.set(e, t), (this.size += n.size == o ? 0 : 1), this;
  });
var ct = pt;
function ft(e) {
  var t = -1,
    n = null == e ? 0 : e.length;
  for (this.__data__ = new ct(); ++t < n; ) this.add(e[t]);
}
(ft.prototype.add = ft.prototype.push = function(e) {
  return this.__data__.set(e, '__lodash_hash_undefined__'), this;
}),
  (ft.prototype.has = function(e) {
    return this.__data__.has(e);
  });
var lt,
  dt,
  yt,
  ht = ft,
  mt = function(e) {
    return e != e;
  },
  vt = function(e, t) {
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
            })(e, mt);
      })(e, t) > -1
    );
  },
  bt = function(e, t, n) {
    for (var o = -1, r = null == e ? 0 : e.length; ++o < r; )
      if (n(t, e[o])) return !0;
    return !1;
  },
  gt = function(e, t) {
    return e.has(t);
  },
  Ot = function(e, t) {
    for (var n = -1, o = t.length, r = e.length; ++n < o; ) e[r + n] = t[n];
    return e;
  },
  _t = function(e) {
    return null != e && 'object' == typeof e;
  },
  jt = function(e) {
    return _t(e) && '[object Arguments]' == ze(e);
  },
  wt = Object.prototype,
  St = wt.hasOwnProperty,
  Et = wt.propertyIsEnumerable,
  Tt = jt(
    (function() {
      return arguments;
    })()
  )
    ? jt
    : function(e) {
        return _t(e) && St.call(e, 'callee') && !Et.call(e, 'callee');
      },
  Rt = Array.isArray,
  Pt = Ie ? Ie.isConcatSpreadable : void 0,
  Ct = function(e) {
    return Rt(e) || Tt(e) || !!(Pt && e && e[Pt]);
  },
  xt = function(e) {
    return e;
  },
  Mt = Math.max,
  At = (function() {
    try {
      var e = Ke(Object, 'defineProperty');
      return e({}, '', {}), e;
    } catch (e) {}
  })(),
  kt = Date.now,
  It =
    ((lt = At
      ? function(e, t) {
          return At(e, 'toString', {
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
      : xt),
    (dt = 0),
    (yt = 0),
    function() {
      var e = kt(),
        t = 16 - (e - yt);
      if (((yt = e), t > 0)) {
        if (++dt >= 800) return arguments[0];
      } else dt = 0;
      return lt.apply(void 0, arguments);
    }),
  $t = function(e) {
    return (
      _t(e) &&
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
          !Le(e)
        );
      })(e)
    );
  },
  Dt = (function(e, t) {
    return It(
      (function(e, t, n) {
        return (
          (t = Mt(void 0 === t ? e.length - 1 : t, 0)),
          function() {
            for (
              var o = arguments, r = -1, a = Mt(o.length - t, 0), i = Array(a);
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
      })(e, void 0, xt),
      e + ''
    );
  })(function(e, t) {
    var n,
      o = (n = null == t ? 0 : t.length) ? t[n - 1] : void 0;
    return (
      $t(o) && (o = void 0),
      $t(e)
        ? (function(e, t, n, o) {
            var r = -1,
              a = vt,
              i = !0,
              s = e.length,
              u = [],
              p = t.length;
            if (!s) return u;
            o
              ? ((a = bt), (i = !1))
              : t.length >= 200 && ((a = gt), (i = !1), (t = new ht(t)));
            e: for (; ++r < s; ) {
              var c = e[r],
                f = c;
              if (((c = o || 0 !== c ? c : 0), i && f == f)) {
                for (var l = p; l--; ) if (t[l] === f) continue e;
                u.push(c);
              } else a(t, f, o) || u.push(c);
            }
            return u;
          })(
            e,
            (function e(t, n, o, r, a) {
              var i = -1,
                s = t.length;
              for (o || (o = Ct), a || (a = []); ++i < s; ) {
                var u = t[i];
                n > 0 && o(u)
                  ? n > 1
                    ? e(u, n - 1, o, r, a)
                    : Ot(a, u)
                  : r || (a[a.length] = u);
              }
              return a;
            })(t, 1, $t, !0),
            0,
            o
          )
        : []
    );
  }),
  Ut = (function(e) {
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
          i = G(t, 'options', {}),
          s = G(t, 'features', {}),
          u = G(t, 'filter', null),
          p = G(t, 'objects', {}),
          c = G(t, 'clusters', {}),
          f = new e(i);
        if (
          (f.add(s || []),
          f.setFilter(u),
          f.objects.options.set(p),
          f.clusters.options.set(c),
          Object.keys(a).forEach(function(e) {
            return q(f, e, a[e]);
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
          u = i.instanceRef;
        if (W(n, 'options')) {
          var p = G(t, 'options'),
            c = G(n, 'options');
          p !== c && e.options.set(c);
        }
        if (W(n, 'objects')) {
          var f = G(t, 'objects'),
            l = G(n, 'objects');
          f !== l && e.objects.options.set(l);
        }
        if (W(n, 'clusters')) {
          var d = G(t, 'clusters'),
            y = G(n, 'clusters');
          d !== y && e.clusters.options.set(y);
        }
        if (W(n, 'filter')) {
          var h = G(t, 'filter'),
            m = G(n, 'filter');
          h !== m && e.setFilter(m);
        }
        if (W(n, 'features')) {
          var v = G(t, 'features'),
            b = G(n, 'features');
          if (v !== b) {
            var g = Dt(v, b, function(e, t) {
                return e.id === t.id;
              }),
              O = Dt(b, v, function(e, t) {
                return e.id === t.id;
              });
            e.remove(g), e.add(O);
          }
        }
        N(e, s, r), V(u, a, e);
      }),
      (t.unmountObject = function(e, t) {
        var n = F(t),
          o = n.instanceRef,
          r = n.parent,
          a = n._events;
        null !== e &&
          (Object.keys(a).forEach(function(t) {
            return z(e, t, a[t]);
          }),
          r.geoObjects && 'function' == typeof r.geoObjects.remove
            ? r.geoObjects.remove(e)
            : r.remove && 'function' == typeof r.remove && r.remove(e),
          V(o));
      }),
      t
    );
  })(e.Component),
  Bt = _.shape({
    id: _.oneOfType([_.number, _.string]).isRequired,
    type: _.oneOf(['Feature']).isRequired,
    geometry: _.object.isRequired,
    options: _.object,
    properties: _.object,
  }),
  Ft = { type: _.oneOf(['FeatureCollection']).isRequired };
Ft.features = _.arrayOf(_.oneOfType([_.shape(Ft), Bt])).isRequired;
var qt = _.shape(Ft),
  zt = _.oneOfType([_.arrayOf(_.oneOfType([qt, Bt])), qt]),
  Nt = _.oneOfType([_.string, _.func]),
  Lt = _.shape({}),
  Wt = _.shape({}),
  Gt = _.shape({});
Ut.propTypes = {
  features: zt,
  defaultFeatures: zt,
  filter: Nt,
  defaultFilter: Nt,
  options: Lt,
  defaultOptions: Lt,
  objects: Wt,
  defaultObjects: Wt,
  clusters: Gt,
  defaultClusters: Gt,
  instanceRef: _.func,
  ymaps: _.object,
  parent: _.object,
};
var Vt = A(k(Ut, !0, ['ObjectManager'])),
  Yt = (function(e) {
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
          i = new e(G(t, 'geometry'), G(t, 'properties'), G(t, 'options'));
        if (
          (Object.keys(a).forEach(function(e) {
            return q(i, e, a[e]);
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
          u = i.instanceRef;
        if (W(n, 'geometry')) {
          var p = G(t, 'geometry', {}),
            c = G(n, 'geometry', {});
          Array.isArray(c) && c !== p
            ? Array.isArray(c[0]) && 'number' == typeof c[1]
              ? (e.geometry.setCoordinates(c[0]), e.geometry.setRadius(c[1]))
              : e.geometry.setCoordinates(c)
            : 'object' == typeof c &&
              (c.coordinates !== p.coordinates &&
                e.geometry.setCoordinates(c.coordinates),
              c.radius !== p.radius && e.geometry.setRadius(c.radius));
        }
        if (W(n, 'properties')) {
          var f = G(t, 'properties'),
            l = G(n, 'properties');
          f !== l && e.properties.set(l);
        }
        if (W(n, 'options')) {
          var d = G(t, 'options'),
            y = G(n, 'options');
          d !== y && e.options.set(y);
        }
        N(e, s, r), V(u, a, e);
      }),
      (t.unmountObject = function(e, t) {
        var n = F(t),
          o = n.instanceRef,
          r = n.parent,
          a = n._events;
        null !== e &&
          (Object.keys(a).forEach(function(t) {
            return z(e, t, a[t]);
          }),
          r.geoObjects && 'function' == typeof r.geoObjects.remove
            ? r.geoObjects.remove(e)
            : r.remove && 'function' == typeof r.remove && r.remove(e),
          V(o));
      }),
      t
    );
  })(e.Component);
Yt.propTypes = {
  instanceRef: _.func,
  ymaps: _.object,
  parent: _.object,
  name: _.oneOf([
    'GeoObject',
    'Placemark',
    'Polyline',
    'Rectangle',
    'Polygon',
    'Circle',
  ]).isRequired,
  dangerZone: _.shape({ modifyConstructor: _.func }),
};
var Zt = {
  modifyConstructor: function(e) {
    function t(t, n, o) {
      e.call(this, { geometry: t, properties: n }, o);
    }
    return (t.prototype = e.prototype), t;
  },
};
function Jt(t) {
  return e.createElement(
    Yt,
    Object.assign({}, t, { name: 'GeoObject', dangerZone: Zt })
  );
}
var Ht = _.shape({
  type: _.oneOf(['Point', 'LineString', 'Rectangle', 'Polygon', 'Circle'])
    .isRequired,
  coordinates: _.oneOfType([
    _.arrayOf(_.number),
    _.arrayOf(_.arrayOf(_.number)),
    _.arrayOf(_.arrayOf(_.arrayOf(_.number))),
  ]).isRequired,
  radius: _.number,
});
Jt.propTypes = {
  geometry: Ht,
  defaultGeometry: Ht,
  properties: _.shape({}),
  defaultProperties: _.shape({}),
  options: _.shape({}),
  defaultOptions: _.shape({}),
};
var Kt = A(k(Jt, !0, ['GeoObject']));
function Qt(t) {
  return e.createElement(Yt, Object.assign({}, t, { name: 'Circle' }));
}
var Xt = _.arrayOf(_.oneOfType([_.number, _.arrayOf(_.number)]));
Qt.propTypes = {
  geometry: Xt,
  defaultGeometry: Xt,
  properties: _.shape({}),
  defaultProperties: _.shape({}),
  options: _.shape({}),
  defaultOptions: _.shape({}),
};
var en = A(k(Qt, !0, ['Circle']));
function tn(t) {
  return e.createElement(Yt, Object.assign({}, t, { name: 'Placemark' }));
}
var nn = _.arrayOf(_.number);
tn.propTypes = {
  geometry: nn,
  defaultGeometry: nn,
  properties: _.shape({}),
  defaultProperties: _.shape({}),
  options: _.shape({}),
  defaultOptions: _.shape({}),
};
var on = A(k(tn, !0, ['Placemark']));
function rn(t) {
  return e.createElement(Yt, Object.assign({}, t, { name: 'Polygon' }));
}
var an = _.arrayOf(_.arrayOf(_.arrayOf(_.number)));
rn.propTypes = {
  geometry: an,
  defaultGeometry: an,
  properties: _.shape({}),
  defaultProperties: _.shape({}),
  options: _.shape({}),
  defaultOptions: _.shape({}),
};
var sn = A(k(rn, !0, ['Polygon']));
function un(t) {
  return e.createElement(Yt, Object.assign({}, t, { name: 'Polyline' }));
}
var pn = _.arrayOf(_.arrayOf(_.number));
un.propTypes = {
  geometry: pn,
  defaultGeometry: pn,
  properties: _.shape({}),
  defaultProperties: _.shape({}),
  options: _.shape({}),
  defaultOptions: _.shape({}),
};
var cn = A(k(un, !0, ['Polyline']));
function fn(t) {
  return e.createElement(Yt, Object.assign({}, t, { name: 'Rectangle' }));
}
var ln = _.arrayOf(_.arrayOf(_.number));
fn.propTypes = {
  geometry: ln,
  defaultGeometry: ln,
  properties: _.shape({}),
  defaultProperties: _.shape({}),
  options: _.shape({}),
  defaultOptions: _.shape({}),
};
var dn = A(k(fn, !0, ['Rectangle']));
export {
  k as withYMaps,
  U as YMaps,
  K as Map,
  ee as Panorama,
  oe as Button,
  ae as FullscreenControl,
  se as GeolocationControl,
  pe as ListBox,
  fe as ListBoxItem,
  de as RouteButton,
  he as RouteEditor,
  ve as RoutePanel,
  ge as RulerControl,
  _e as SearchControl,
  we as TrafficControl,
  Ee as TypeSelector,
  Re as ZoomControl,
  xe as Clusterer,
  Vt as ObjectManager,
  Kt as GeoObject,
  en as Circle,
  on as Placemark,
  sn as Polygon,
  cn as Polyline,
  dn as Rectangle,
};
//# sourceMappingURL=react-yandex-maps.esm.js.map
