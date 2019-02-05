!(function(t) {
  var e = {};
  function n(r) {
    if (e[r]) return e[r].exports;
    var o = (e[r] = { i: r, l: !1, exports: {} });
    return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = t),
    (n.c = e),
    (n.d = function(t, e, r) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
    }),
    (n.r = function(t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (n.t = function(t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var o in t)
          n.d(
            r,
            o,
            function(e) {
              return t[e];
            }.bind(null, o)
          );
      return r;
    }),
    (n.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t.default;
            }
          : function() {
              return t;
            };
      return n.d(e, "a", e), e;
    }),
    (n.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = ""),
    n((n.s = 159));
})([
  function(t, e, n) {
    "use strict";
    n.d(e, "x", function() {
      return i;
    }),
      n.d(e, "e", function() {
        return a;
      }),
      n.d(e, "b", function() {
        return c;
      }),
      n.d(e, "a", function() {
        return s;
      }),
      n.d(e, "c", function() {
        return f;
      }),
      n.d(e, "d", function() {
        return l;
      }),
      n.d(e, "r", function() {
        return d;
      }),
      n.d(e, "u", function() {
        return h;
      }),
      n.d(e, "o", function() {
        return v;
      }),
      n.d(e, "h", function() {
        return y;
      }),
      n.d(e, "q", function() {
        return m;
      }),
      n.d(e, "v", function() {
        return _;
      }),
      n.d(e, "w", function() {
        return w;
      }),
      n.d(e, "f", function() {
        return x;
      }),
      n.d(e, "l", function() {
        return O;
      }),
      n.d(e, "g", function() {
        return S;
      }),
      n.d(e, "m", function() {
        return k;
      }),
      n.d(e, "j", function() {
        return E;
      }),
      n.d(e, "y", function() {
        return C;
      }),
      n.d(e, "t", function() {
        return I;
      }),
      n.d(e, "s", function() {
        return z;
      }),
      n.d(e, "n", function() {
        return T;
      }),
      n.d(e, "z", function() {
        return M;
      }),
      n.d(e, "p", function() {
        return R;
      }),
      n.d(e, "k", function() {
        return q;
      }),
      n.d(e, "A", function() {
        return N;
      }),
      n.d(e, "i", function() {
        return L;
      });
    var r =
        Object.assign ||
        function(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        },
      o =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(t) {
              return typeof t;
            }
          : function(t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            },
      i = function(t) {
        return "@@redux-saga/" + t;
      },
      a = i("TASK"),
      u = i("HELPER"),
      c = i("MATCH"),
      s = i("CANCEL_PROMISE"),
      f = i("SAGA_ACTION"),
      l = i("SELF_CANCELLATION"),
      p = function(t) {
        return function() {
          return t;
        };
      },
      d = p(!0),
      h = function() {},
      v = function(t) {
        return t;
      };
    function y(t, e, n) {
      if (!e(t)) throw (z("error", "uncaught at check", n), new Error(n));
    }
    var b = Object.prototype.hasOwnProperty;
    function g(t, e) {
      return m.notUndef(t) && b.call(t, e);
    }
    var m = {
        undef: function(t) {
          return null == t;
        },
        notUndef: function(t) {
          return null != t;
        },
        func: function(t) {
          return "function" == typeof t;
        },
        number: function(t) {
          return "number" == typeof t;
        },
        string: function(t) {
          return "string" == typeof t;
        },
        array: Array.isArray,
        object: function(t) {
          return (
            t && !m.array(t) && "object" === (void 0 === t ? "undefined" : o(t))
          );
        },
        promise: function(t) {
          return t && m.func(t.then);
        },
        iterator: function(t) {
          return t && m.func(t.next) && m.func(t.throw);
        },
        iterable: function(t) {
          return t && m.func(Symbol) ? m.func(t[Symbol.iterator]) : m.array(t);
        },
        task: function(t) {
          return t && t[a];
        },
        observable: function(t) {
          return t && m.func(t.subscribe);
        },
        buffer: function(t) {
          return t && m.func(t.isEmpty) && m.func(t.take) && m.func(t.put);
        },
        pattern: function(t) {
          return (
            t &&
            (m.string(t) ||
              "symbol" === (void 0 === t ? "undefined" : o(t)) ||
              m.func(t) ||
              m.array(t))
          );
        },
        channel: function(t) {
          return t && m.func(t.take) && m.func(t.close);
        },
        helper: function(t) {
          return t && t[u];
        },
        stringableFunc: function(t) {
          return m.func(t) && g(t, "toString");
        }
      },
      _ = {
        assign: function(t, e) {
          for (var n in e) g(e, n) && (t[n] = e[n]);
        }
      };
    function w(t, e) {
      var n = t.indexOf(e);
      n >= 0 && t.splice(n, 1);
    }
    var x = {
      from: function(t) {
        var e = Array(t.length);
        for (var n in t) g(t, n) && (e[n] = t[n]);
        return e;
      }
    };
    function O() {
      var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        e = r({}, t),
        n = new Promise(function(t, n) {
          (e.resolve = t), (e.reject = n);
        });
      return (e.promise = n), e;
    }
    function S(t) {
      for (var e = [], n = 0; n < t; n++) e.push(O());
      return e;
    }
    function k(t) {
      var e =
          !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
        n = void 0,
        r = new Promise(function(r) {
          n = setTimeout(function() {
            return r(e);
          }, t);
        });
      return (
        (r[s] = function() {
          return clearTimeout(n);
        }),
        r
      );
    }
    function E() {
      var t,
        e = !0,
        n = void 0,
        r = void 0;
      return (
        ((t = {})[a] = !0),
        (t.isRunning = function() {
          return e;
        }),
        (t.result = function() {
          return n;
        }),
        (t.error = function() {
          return r;
        }),
        (t.setRunning = function(t) {
          return (e = t);
        }),
        (t.setResult = function(t) {
          return (n = t);
        }),
        (t.setError = function(t) {
          return (r = t);
        }),
        t
      );
    }
    function j() {
      var t =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return function() {
        return ++t;
      };
    }
    var C = j(),
      P = function(t) {
        throw t;
      },
      A = function(t) {
        return { value: t, done: !0 };
      };
    function I(t) {
      var e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : P,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
        r = arguments[3],
        o = { name: n, next: t, throw: e, return: A };
      return (
        r && (o[u] = !0),
        "undefined" != typeof Symbol &&
          (o[Symbol.iterator] = function() {
            return o;
          }),
        o
      );
    }
    function z(t, e) {
      var n =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      "undefined" == typeof window
        ? console.log(
            "redux-saga " + t + ": " + e + "\n" + ((n && n.stack) || n)
          )
        : console[t](e, n);
    }
    function T(t, e) {
      return function() {
        return t.apply(void 0, arguments);
      };
    }
    var M = function(t, e) {
        return (
          t +
          " has been deprecated in favor of " +
          e +
          ", please update your code"
        );
      },
      R = function(t) {
        return new Error(
          "\n  redux-saga: Error checking hooks detected an inconsistent state. This is likely a bug\n  in redux-saga code and not yours. Thanks for reporting this in the project's github repo.\n  Error: " +
            t +
            "\n"
        );
      },
      q = function(t, e) {
        return (
          (t ? t + "." : "") +
          "setContext(props): argument " +
          e +
          " is not a plain object"
        );
      },
      N = function(t) {
        return function(e) {
          return t(Object.defineProperty(e, f, { value: !0 }));
        };
      },
      L = function t(e) {
        return function() {
          for (var n = arguments.length, r = Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          var i = [],
            a = e.apply(void 0, r);
          return {
            next: function(t) {
              return i.push(t), a.next(t);
            },
            clone: function() {
              var n = t(e).apply(void 0, r);
              return (
                i.forEach(function(t) {
                  return n.next(t);
                }),
                n
              );
            },
            return: function(t) {
              return a.return(t);
            },
            throw: function(t) {
              return a.throw(t);
            }
          };
        };
      };
  },
  ,
  function(t, e, n) {
    "use strict";
    n.d(e, "i", function() {
      return x;
    }),
      n.d(e, "s", function() {
        return O;
      }),
      n.d(e, "t", function() {
        return S;
      }),
      n.d(e, "n", function() {
        return k;
      }),
      n.d(e, "b", function() {
        return E;
      }),
      n.d(e, "o", function() {
        return j;
      }),
      n.d(e, "e", function() {
        return P;
      }),
      n.d(e, "c", function() {
        return A;
      }),
      n.d(e, "h", function() {
        return I;
      }),
      n.d(e, "k", function() {
        return z;
      }),
      n.d(e, "r", function() {
        return T;
      }),
      n.d(e, "m", function() {
        return M;
      }),
      n.d(e, "f", function() {
        return R;
      }),
      n.d(e, "p", function() {
        return q;
      }),
      n.d(e, "a", function() {
        return N;
      }),
      n.d(e, "g", function() {
        return L;
      }),
      n.d(e, "j", function() {
        return D;
      }),
      n.d(e, "l", function() {
        return F;
      }),
      n.d(e, "q", function() {
        return U;
      }),
      n.d(e, "d", function() {
        return W;
      });
    var r = n(0),
      o = Object(r.x)("IO"),
      i = "TAKE",
      a = "PUT",
      u = "ALL",
      c = "RACE",
      s = "CALL",
      f = "CPS",
      l = "FORK",
      p = "JOIN",
      d = "CANCEL",
      h = "SELECT",
      v = "ACTION_CHANNEL",
      y = "CANCELLED",
      b = "FLUSH",
      g = "GET_CONTEXT",
      m = "SET_CONTEXT",
      _ =
        "\n(HINT: if you are getting this errors in tests, consider using createMockTask from redux-saga/utils)",
      w = function(t, e) {
        var n;
        return ((n = {})[o] = !0), (n[t] = e), n;
      },
      x = function(t) {
        return (
          Object(r.h)(
            W.fork(t),
            r.q.object,
            "detach(eff): argument must be a fork effect"
          ),
          (t[l].detached = !0),
          t
        );
      };
    function O() {
      var t =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "*";
      if (
        (arguments.length &&
          Object(r.h)(
            arguments[0],
            r.q.notUndef,
            "take(patternOrChannel): patternOrChannel is undefined"
          ),
        r.q.pattern(t))
      )
        return w(i, { pattern: t });
      if (r.q.channel(t)) return w(i, { channel: t });
      throw new Error(
        "take(patternOrChannel): argument " +
          String(t) +
          " is not valid channel or a valid pattern"
      );
    }
    O.maybe = function() {
      var t = O.apply(void 0, arguments);
      return (t[i].maybe = !0), t;
    };
    var S = Object(r.n)(O.maybe, Object(r.z)("takem", "take.maybe"));
    function k(t, e) {
      return (
        arguments.length > 1
          ? (Object(r.h)(
              t,
              r.q.notUndef,
              "put(channel, action): argument channel is undefined"
            ),
            Object(r.h)(
              t,
              r.q.channel,
              "put(channel, action): argument " + t + " is not a valid channel"
            ),
            Object(r.h)(
              e,
              r.q.notUndef,
              "put(channel, action): argument action is undefined"
            ))
          : (Object(r.h)(
              t,
              r.q.notUndef,
              "put(action): argument action is undefined"
            ),
            (e = t),
            (t = null)),
        w(a, { channel: t, action: e })
      );
    }
    function E(t) {
      return w(u, t);
    }
    function j(t) {
      return w(c, t);
    }
    function C(t, e, n) {
      Object(r.h)(e, r.q.notUndef, t + ": argument fn is undefined");
      var o = null;
      if (r.q.array(e)) {
        var i = e;
        (o = i[0]), (e = i[1]);
      } else if (e.fn) {
        var a = e;
        (o = a.context), (e = a.fn);
      }
      return (
        o && r.q.string(e) && r.q.func(o[e]) && (e = o[e]),
        Object(r.h)(e, r.q.func, t + ": argument " + e + " is not a function"),
        { context: o, fn: e, args: n }
      );
    }
    function P(t) {
      for (
        var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1;
        r < e;
        r++
      )
        n[r - 1] = arguments[r];
      return w(s, C("call", t, n));
    }
    function A(t, e) {
      var n =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      return w(s, C("apply", { context: t, fn: e }, n));
    }
    function I(t) {
      for (
        var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1;
        r < e;
        r++
      )
        n[r - 1] = arguments[r];
      return w(f, C("cps", t, n));
    }
    function z(t) {
      for (
        var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1;
        r < e;
        r++
      )
        n[r - 1] = arguments[r];
      return w(l, C("fork", t, n));
    }
    function T(t) {
      for (
        var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1;
        r < e;
        r++
      )
        n[r - 1] = arguments[r];
      return x(z.apply(void 0, [t].concat(n)));
    }
    function M() {
      for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
        e[n] = arguments[n];
      if (e.length > 1)
        return E(
          e.map(function(t) {
            return M(t);
          })
        );
      var o = e[0];
      return (
        Object(r.h)(o, r.q.notUndef, "join(task): argument task is undefined"),
        Object(r.h)(
          o,
          r.q.task,
          "join(task): argument " + o + " is not a valid Task object " + _
        ),
        w(p, o)
      );
    }
    function R() {
      for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
        e[n] = arguments[n];
      if (e.length > 1)
        return E(
          e.map(function(t) {
            return R(t);
          })
        );
      var o = e[0];
      return (
        1 === e.length &&
          (Object(r.h)(
            o,
            r.q.notUndef,
            "cancel(task): argument task is undefined"
          ),
          Object(r.h)(
            o,
            r.q.task,
            "cancel(task): argument " + o + " is not a valid Task object " + _
          )),
        w(d, o || r.d)
      );
    }
    function q(t) {
      for (
        var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), o = 1;
        o < e;
        o++
      )
        n[o - 1] = arguments[o];
      return (
        0 === arguments.length
          ? (t = r.o)
          : (Object(r.h)(
              t,
              r.q.notUndef,
              "select(selector,[...]): argument selector is undefined"
            ),
            Object(r.h)(
              t,
              r.q.func,
              "select(selector,[...]): argument " + t + " is not a function"
            )),
        w(h, { selector: t, args: n })
      );
    }
    function N(t, e) {
      return (
        Object(r.h)(
          t,
          r.q.notUndef,
          "actionChannel(pattern,...): argument pattern is undefined"
        ),
        arguments.length > 1 &&
          (Object(r.h)(
            e,
            r.q.notUndef,
            "actionChannel(pattern, buffer): argument buffer is undefined"
          ),
          Object(r.h)(
            e,
            r.q.buffer,
            "actionChannel(pattern, buffer): argument " +
              e +
              " is not a valid buffer"
          )),
        w(v, { pattern: t, buffer: e })
      );
    }
    function L() {
      return w(y, {});
    }
    function D(t) {
      return (
        Object(r.h)(
          t,
          r.q.channel,
          "flush(channel): argument " + t + " is not valid channel"
        ),
        w(b, t)
      );
    }
    function F(t) {
      return (
        Object(r.h)(
          t,
          r.q.string,
          "getContext(prop): argument " + t + " is not a string"
        ),
        w(g, t)
      );
    }
    function U(t) {
      return Object(r.h)(t, r.q.object, Object(r.k)(null, t)), w(m, t);
    }
    (k.resolve = function() {
      var t = k.apply(void 0, arguments);
      return (t[a].resolve = !0), t;
    }),
      (k.sync = Object(r.n)(k.resolve, Object(r.z)("put.sync", "put.resolve")));
    var $ = function(t) {
        return function(e) {
          return e && e[o] && e[t];
        };
      },
      W = {
        take: $(i),
        put: $(a),
        all: $(u),
        race: $(c),
        call: $(s),
        cps: $(f),
        fork: $(l),
        join: $(p),
        cancel: $(d),
        select: $(h),
        actionChannel: $(v),
        cancelled: $(y),
        flush: $(b),
        getContext: $(g),
        setContext: $(m)
      };
  },
  function(t, e, n) {
    "use strict";
    t.exports = n(47);
  },
  function(t, e, n) {
    "use strict";
    n.r(e),
      function(t, r) {
        n.d(e, "css", function() {
          return U;
        }),
          n.d(e, "keyframes", function() {
            return Ht;
          }),
          n.d(e, "injectGlobal", function() {
            return Kt;
          }),
          n.d(e, "isStyledComponent", function() {
            return M;
          }),
          n.d(e, "consolidateStreamedStyles", function() {
            return R;
          }),
          n.d(e, "ThemeProvider", function() {
            return At;
          }),
          n.d(e, "withTheme", function() {
            return Ft;
          }),
          n.d(e, "ServerStyleSheet", function() {
            return ht;
          }),
          n.d(e, "StyleSheetManager", function() {
            return dt;
          }),
          n.d(
            e,
            "__DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS",
            function() {
              return Ut;
            }
          );
        var o = n(37),
          i = n.n(o),
          a = n(3),
          u = n.n(a),
          c = n(26),
          s = n.n(c),
          f = n(38),
          l = n.n(f),
          p = n(5),
          d = n.n(p),
          h = n(27),
          v = n.n(h),
          y = n(19),
          b =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function(t) {
                  return typeof t;
                }
              : function(t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                },
          g = function(t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          },
          m = (function() {
            function t(t, e) {
              for (var n = 0; n < e.length; n++) {
                var r = e[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(t, r.key, r);
              }
            }
            return function(e, n, r) {
              return n && t(e.prototype, n), r && t(e, r), e;
            };
          })(),
          _ =
            Object.assign ||
            function(t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            },
          w = function(t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof e
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            })),
              e &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, e)
                  : (t.__proto__ = e));
          },
          x = function(t, e) {
            var n = {};
            for (var r in t)
              e.indexOf(r) >= 0 ||
                (Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]));
            return n;
          },
          O = function(t, e) {
            if (!t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return !e || ("object" != typeof e && "function" != typeof e)
              ? t
              : e;
          },
          S = function(t) {
            return (
              "object" === (void 0 === t ? "undefined" : b(t)) &&
              t.constructor === Object
            );
          };
        var k = (function(t) {
            function e(n) {
              g(this, e);
              for (
                var r = arguments.length, o = Array(r > 1 ? r - 1 : 0), i = 1;
                i < r;
                i++
              )
                o[i - 1] = arguments[i];
              var a = O(
                this,
                t.call(
                  this,
                  "An error occurred. See https://github.com/styled-components/styled-components/blob/master/src/utils/errors.md#" +
                    n +
                    " for more information. " +
                    (o ? "Additional arguments: " + o.join(", ") : "")
                )
              );
              return O(a);
            }
            return w(e, t), e;
          })(Error),
          E = function t(e, n) {
            return e.reduce(function(e, r) {
              if (null == r || !1 === r || "" === r) return e;
              if (Array.isArray(r)) return e.push.apply(e, t(r, n)), e;
              if (r.hasOwnProperty("styledComponentId"))
                return e.push("." + r.styledComponentId), e;
              if ("function" == typeof r) {
                if (n) {
                  var o = r(n);
                  if (u.a.isValidElement(o)) {
                    var a = r.displayName || r.name;
                    throw new k(11, a);
                  }
                  e.push.apply(e, t([o], n));
                } else e.push(r);
                return e;
              }
              return (
                e.push(
                  S(r)
                    ? (function t(e, n) {
                        var r = Object.keys(e)
                          .filter(function(t) {
                            var n = e[t];
                            return null != n && !1 !== n && "" !== n;
                          })
                          .map(function(n) {
                            return S(e[n])
                              ? t(e[n], n)
                              : i()(n) + ": " + e[n] + ";";
                          })
                          .join(" ");
                        return n ? n + " {\n  " + r + "\n}" : r;
                      })(r)
                    : r.toString()
                ),
                e
              );
            }, []);
          },
          j = /^\s*\/\/.*$/gm,
          C = new s.a({
            global: !1,
            cascade: !0,
            keyframe: !1,
            prefix: !1,
            compress: !1,
            semicolon: !0
          }),
          P = new s.a({
            global: !1,
            cascade: !0,
            keyframe: !1,
            prefix: !0,
            compress: !1,
            semicolon: !1
          }),
          A = [],
          I = function(t) {
            if (-2 === t) {
              var e = A;
              return (A = []), e;
            }
          },
          z = l()(function(t) {
            A.push(t);
          });
        P.use([z, I]), C.use([z, I]);
        var T = function(t, e, n) {
          var r = t.join("").replace(j, "");
          return P(
            n || !e ? "" : e,
            e && n ? n + " " + e + " { " + r + " }" : r
          );
        };
        function M(t) {
          return (
            "function" == typeof t && "string" == typeof t.styledComponentId
          );
        }
        function R() {
          0;
        }
        var q = function(t) {
            return String.fromCharCode(t + (t > 25 ? 39 : 97));
          },
          N = function(t) {
            var e = "",
              n = void 0;
            for (n = t; n > 52; n = Math.floor(n / 52)) e = q(n % 52) + e;
            return q(n % 52) + e;
          },
          L = function(t, e) {
            for (var n = [t[0]], r = 0, o = e.length; r < o; r += 1)
              n.push(e[r], t[r + 1]);
            return n;
          },
          D = Object.freeze([]),
          F = Object.freeze({}),
          U = function(t) {
            for (
              var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1;
              r < e;
              r++
            )
              n[r - 1] = arguments[r];
            return "function" == typeof t || S(t)
              ? E(L(D, [t].concat(n)))
              : E(L(t, n));
          },
          $ =
            (void 0 !== t && Object({ NODE_ENV: "production" }).SC_ATTR) ||
            "data-styled-components",
          W = "__styled-components-stylesheet__",
          B = "undefined" != typeof window && "HTMLElement" in window,
          H = /^[^\S\n]*?\/\* sc-component-id:\s*(\S+)\s+\*\//gm,
          K = function(t) {
            var e = "" + (t || ""),
              n = [];
            return (
              e.replace(H, function(t, e, r) {
                return n.push({ componentId: e, matchIndex: r }), t;
              }),
              n.map(function(t, r) {
                var o = t.componentId,
                  i = t.matchIndex,
                  a = n[r + 1];
                return {
                  componentId: o,
                  cssFromDOM: a ? e.slice(i, a.matchIndex) : e.slice(i)
                };
              })
            );
          },
          Y = function() {
            return n.nc;
          },
          G = function(t, e, n) {
            n && ((t[e] || (t[e] = Object.create(null)))[n] = !0);
          },
          V = function(t, e) {
            t[e] = Object.create(null);
          },
          J = function(t) {
            return function(e, n) {
              return void 0 !== t[e] && t[e][n];
            };
          },
          Q = function(t) {
            var e = "";
            for (var n in t) e += Object.keys(t[n]).join(" ") + " ";
            return e.trim();
          },
          X = function(t) {
            if (t.sheet) return t.sheet;
            for (var e = document.styleSheets.length, n = 0; n < e; n += 1) {
              var r = document.styleSheets[n];
              if (r.ownerNode === t) return r;
            }
            throw new k(10);
          },
          Z = function(t, e, n) {
            if (!e) return !1;
            var r = t.cssRules.length;
            try {
              t.insertRule(e, n <= r ? n : r);
            } catch (t) {
              return !1;
            }
            return !0;
          },
          tt = function(t) {
            return "\n/* sc-component-id: " + t + " */\n";
          },
          et = function(t, e) {
            for (var n = 0, r = 0; r <= e; r += 1) n += t[r];
            return n;
          },
          nt = function(t, e) {
            return function(n) {
              var r = Y();
              return (
                "<style " +
                [r && 'nonce="' + r + '"', $ + '="' + Q(e) + '"', n]
                  .filter(Boolean)
                  .join(" ") +
                ">" +
                t() +
                "</style>"
              );
            };
          },
          rt = function(t, e) {
            return function() {
              var n,
                r = (((n = {})[$] = Q(e)), n),
                o = Y();
              return (
                o && (r.nonce = o),
                u.a.createElement(
                  "style",
                  _({}, r, { dangerouslySetInnerHTML: { __html: t() } })
                )
              );
            };
          },
          ot = function(t) {
            return function() {
              return Object.keys(t);
            };
          },
          it = function t(e, n) {
            var r = void 0 === e ? Object.create(null) : e,
              o = void 0 === n ? Object.create(null) : n,
              i = function(t) {
                var e = o[t];
                return void 0 !== e ? e : (o[t] = [""]);
              },
              a = function() {
                var t = "";
                for (var e in o) {
                  var n = o[e][0];
                  n && (t += tt(e) + n);
                }
                return t;
              };
            return {
              clone: function() {
                var e = (function(t) {
                    var e = Object.create(null);
                    for (var n in t) e[n] = _({}, t[n]);
                    return e;
                  })(r),
                  n = Object.create(null);
                for (var i in o) n[i] = [o[i][0]];
                return t(e, n);
              },
              css: a,
              getIds: ot(o),
              hasNameForId: J(r),
              insertMarker: i,
              insertRules: function(t, e, n) {
                (i(t)[0] += e.join(" ")), G(r, t, n);
              },
              removeRules: function(t) {
                var e = o[t];
                void 0 !== e && ((e[0] = ""), V(r, t));
              },
              sealed: !1,
              styleTag: null,
              toElement: rt(a, r),
              toHTML: nt(a, r)
            };
          },
          at = function(t, e, n, r, o) {
            if (B && !n) {
              var i = (function(t, e, n) {
                var r = document.createElement("style");
                r.setAttribute($, "");
                var o = Y();
                if (
                  (o && r.setAttribute("nonce", o),
                  r.appendChild(document.createTextNode("")),
                  t && !e)
                )
                  t.appendChild(r);
                else {
                  if (!e || !t || !e.parentNode) throw new k(6);
                  e.parentNode.insertBefore(r, n ? e : e.nextSibling);
                }
                return r;
              })(t, e, r);
              return (function(t, e) {
                var n = Object.create(null),
                  r = Object.create(null),
                  o = [],
                  i = void 0 !== e,
                  a = !1,
                  u = function(t) {
                    var e = r[t];
                    return void 0 !== e
                      ? e
                      : ((r[t] = o.length), o.push(0), V(n, t), r[t]);
                  },
                  c = function() {
                    var e = X(t).cssRules,
                      n = "";
                    for (var i in r) {
                      n += tt(i);
                      for (
                        var a = r[i], u = et(o, a), c = u - o[a];
                        c < u;
                        c += 1
                      ) {
                        var s = e[c];
                        void 0 !== s && (n += s.cssText);
                      }
                    }
                    return n;
                  };
                return {
                  clone: function() {
                    throw new k(5);
                  },
                  css: c,
                  getIds: ot(r),
                  hasNameForId: J(n),
                  insertMarker: u,
                  insertRules: function(r, c, s) {
                    for (
                      var f = u(r),
                        l = X(t),
                        p = et(o, f),
                        d = 0,
                        h = [],
                        v = c.length,
                        y = 0;
                      y < v;
                      y += 1
                    ) {
                      var b = c[y],
                        g = i;
                      g && -1 !== b.indexOf("@import")
                        ? h.push(b)
                        : Z(l, b, p + d) && ((g = !1), (d += 1));
                    }
                    i &&
                      h.length > 0 &&
                      ((a = !0), e().insertRules(r + "-import", h)),
                      (o[f] += d),
                      G(n, r, s);
                  },
                  removeRules: function(u) {
                    var c = r[u];
                    if (void 0 !== c) {
                      var s = o[c];
                      !(function(t, e, n) {
                        for (var r = e - n, o = e; o > r; o -= 1)
                          t.deleteRule(o);
                      })(X(t), et(o, c), s),
                        (o[c] = 0),
                        V(n, u),
                        i && a && e().removeRules(u + "-import");
                    }
                  },
                  sealed: !1,
                  styleTag: t,
                  toElement: rt(c, n),
                  toHTML: nt(c, n)
                };
              })(i, o);
            }
            return it();
          },
          ut = /\s+/,
          ct = void 0;
        ct = B ? 1e3 : -1;
        var st,
          ft = 0,
          lt = void 0,
          pt = (function() {
            function t() {
              var e = this,
                n =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : B
                    ? document.head
                    : null,
                r =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1];
              g(this, t),
                (this.getImportRuleTag = function() {
                  var t = e.importRuleTag;
                  if (void 0 !== t) return t;
                  var n = e.tags[0];
                  return (e.importRuleTag = at(
                    e.target,
                    n ? n.styleTag : null,
                    e.forceServer,
                    !0
                  ));
                }),
                (ft += 1),
                (this.id = ft),
                (this.forceServer = r),
                (this.target = r ? null : n),
                (this.tagMap = {}),
                (this.deferred = {}),
                (this.rehydratedNames = {}),
                (this.ignoreRehydratedNames = {}),
                (this.tags = []),
                (this.capacity = 1),
                (this.clones = []);
            }
            return (
              (t.prototype.rehydrate = function() {
                if (!B || this.forceServer) return this;
                var t = [],
                  e = [],
                  n = !1,
                  r = document.querySelectorAll("style[" + $ + "]"),
                  o = r.length;
                if (0 === o) return this;
                for (var i = 0; i < o; i += 1) {
                  var a = r[i];
                  n || (n = !!a.getAttribute("data-styled-streamed"));
                  for (
                    var u = (a.getAttribute($) || "").trim().split(ut),
                      c = u.length,
                      s = 0;
                    s < c;
                    s += 1
                  ) {
                    var f = u[s];
                    this.rehydratedNames[f] = !0;
                  }
                  e.push.apply(e, K(a.textContent)), t.push(a);
                }
                var l = e.length;
                if (0 === l) return this;
                var p = (function(t, e, n, r) {
                  var o,
                    i,
                    a = ((o = function() {
                      for (var r = 0, o = n.length; r < o; r += 1) {
                        var i = n[r],
                          a = i.componentId,
                          u = i.cssFromDOM,
                          c = C("", u);
                        t.insertRules(a, c);
                      }
                      for (var s = 0, f = e.length; s < f; s += 1) {
                        var l = e[s];
                        l.parentNode && l.parentNode.removeChild(l);
                      }
                    }),
                    (i = !1),
                    function() {
                      i || ((i = !0), o());
                    });
                  return (
                    r && a(),
                    _({}, t, {
                      insertMarker: function(e) {
                        return a(), t.insertMarker(e);
                      },
                      insertRules: function(e, n, r) {
                        return a(), t.insertRules(e, n, r);
                      }
                    })
                  );
                })(this.makeTag(null), t, e, n);
                (this.capacity = Math.max(1, ct - l)), this.tags.push(p);
                for (var d = 0; d < l; d += 1)
                  this.tagMap[e[d].componentId] = p;
                return this;
              }),
              (t.reset = function() {
                var e =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0];
                lt = new t(void 0, e).rehydrate();
              }),
              (t.prototype.clone = function() {
                var e = new t(this.target, this.forceServer);
                return (
                  this.clones.push(e),
                  (e.tags = this.tags.map(function(t) {
                    for (
                      var n = t.getIds(), r = t.clone(), o = 0;
                      o < n.length;
                      o += 1
                    )
                      e.tagMap[n[o]] = r;
                    return r;
                  })),
                  (e.rehydratedNames = _({}, this.rehydratedNames)),
                  (e.deferred = _({}, this.deferred)),
                  e
                );
              }),
              (t.prototype.sealAllTags = function() {
                (this.capacity = 1),
                  this.tags.forEach(function(t) {
                    t.sealed = !0;
                  });
              }),
              (t.prototype.makeTag = function(t) {
                var e = t ? t.styleTag : null;
                return at(
                  this.target,
                  e,
                  this.forceServer,
                  !1,
                  this.getImportRuleTag
                );
              }),
              (t.prototype.getTagForId = function(t) {
                var e = this.tagMap[t];
                if (void 0 !== e && !e.sealed) return e;
                var n = this.tags[this.tags.length - 1];
                return (
                  (this.capacity -= 1),
                  0 === this.capacity &&
                    ((this.capacity = ct),
                    (n = this.makeTag(n)),
                    this.tags.push(n)),
                  (this.tagMap[t] = n)
                );
              }),
              (t.prototype.hasId = function(t) {
                return void 0 !== this.tagMap[t];
              }),
              (t.prototype.hasNameForId = function(t, e) {
                if (
                  void 0 === this.ignoreRehydratedNames[t] &&
                  this.rehydratedNames[e]
                )
                  return !0;
                var n = this.tagMap[t];
                return void 0 !== n && n.hasNameForId(t, e);
              }),
              (t.prototype.deferredInject = function(t, e) {
                if (void 0 === this.tagMap[t]) {
                  for (var n = this.clones, r = 0; r < n.length; r += 1)
                    n[r].deferredInject(t, e);
                  this.getTagForId(t).insertMarker(t), (this.deferred[t] = e);
                }
              }),
              (t.prototype.inject = function(t, e, n) {
                for (var r = this.clones, o = 0; o < r.length; o += 1)
                  r[o].inject(t, e, n);
                var i = this.getTagForId(t);
                if (void 0 !== this.deferred[t]) {
                  var a = this.deferred[t].concat(e);
                  i.insertRules(t, a, n), (this.deferred[t] = void 0);
                } else i.insertRules(t, e, n);
              }),
              (t.prototype.remove = function(t) {
                var e = this.tagMap[t];
                if (void 0 !== e) {
                  for (var n = this.clones, r = 0; r < n.length; r += 1)
                    n[r].remove(t);
                  e.removeRules(t),
                    (this.ignoreRehydratedNames[t] = !0),
                    (this.deferred[t] = void 0);
                }
              }),
              (t.prototype.toHTML = function() {
                return this.tags
                  .map(function(t) {
                    return t.toHTML();
                  })
                  .join("");
              }),
              (t.prototype.toReactElements = function() {
                var t = this.id;
                return this.tags.map(function(e, n) {
                  var r = "sc-" + t + "-" + n;
                  return Object(a.cloneElement)(e.toElement(), { key: r });
                });
              }),
              m(t, null, [
                {
                  key: "master",
                  get: function() {
                    return lt || (lt = new t().rehydrate());
                  }
                },
                {
                  key: "instance",
                  get: function() {
                    return t.master;
                  }
                }
              ]),
              t
            );
          })(),
          dt = (function(t) {
            function e() {
              return g(this, e), O(this, t.apply(this, arguments));
            }
            return (
              w(e, t),
              (e.prototype.getChildContext = function() {
                var t;
                return ((t = {})[W] = this.sheetInstance), t;
              }),
              (e.prototype.componentWillMount = function() {
                if (this.props.sheet) this.sheetInstance = this.props.sheet;
                else {
                  if (!this.props.target) throw new k(4);
                  this.sheetInstance = new pt(this.props.target);
                }
              }),
              (e.prototype.render = function() {
                return u.a.Children.only(this.props.children);
              }),
              e
            );
          })(a.Component);
        dt.childContextTypes = (((st = {})[W] = d.a.oneOfType([
          d.a.instanceOf(pt),
          d.a.instanceOf(ht)
        ]).isRequired),
        st);
        var ht = (function() {
            function t() {
              g(this, t),
                (this.masterSheet = pt.master),
                (this.instance = this.masterSheet.clone()),
                (this.closed = !1);
            }
            return (
              (t.prototype.complete = function() {
                if (!this.closed) {
                  var t = this.masterSheet.clones.indexOf(this.instance);
                  this.masterSheet.clones.splice(t, 1), (this.closed = !0);
                }
              }),
              (t.prototype.collectStyles = function(t) {
                if (this.closed) throw new k(2);
                return u.a.createElement(dt, { sheet: this.instance }, t);
              }),
              (t.prototype.getStyleTags = function() {
                return this.complete(), this.instance.toHTML();
              }),
              (t.prototype.getStyleElement = function() {
                return this.complete(), this.instance.toReactElements();
              }),
              (t.prototype.interleaveWithNodeStream = function(t) {
                throw new k(3);
              }),
              t
            );
          })(),
          vt = function(t, e, n) {
            var r = n && t.theme === n.theme;
            return t.theme && !r ? t.theme : e;
          },
          yt = /[[\].#*$><+~=|^:(),"'`-]+/g,
          bt = /(^-|-$)/g;
        function gt(t) {
          return t.replace(yt, "-").replace(bt, "");
        }
        function mt(t) {
          return t.displayName || t.name || "Component";
        }
        function _t(t) {
          return "string" == typeof t;
        }
        var wt = /^((?:s(?:uppressContentEditableWarn|croll|pac)|(?:shape|image|text)Render|(?:letter|word)Spac|vHang|hang)ing|(?:on(?:AnimationIteration|C(?:o(?:mposition(?:Update|Start|End)|ntextMenu|py)|anPlayThrough|anPlay|hange|lick|ut)|(?:Animation|Touch|Load|Drag)Start|(?:(?:Duration|Volume|Rate)Chang|(?:MouseLea|(?:Touch|Mouse)Mo|DragLea)v|Paus)e|Loaded(?:Metad|D)ata|(?:(?:T(?:ransition|ouch)|Animation)E|Suspe)nd|DoubleClick|(?:TouchCanc|Whe)el|Lo(?:stPointer|ad)|TimeUpdate|(?:Mouse(?:Ent|Ov)e|Drag(?:Ent|Ov)e|Erro)r|GotPointer|MouseDown|(?:E(?:n(?:crypt|d)|mpti)|S(?:tall|eek))ed|KeyPress|(?:MouseOu|DragExi|S(?:elec|ubmi)|Rese|Inpu)t|P(?:rogress|laying)|DragEnd|Key(?:Down|Up)|(?:MouseU|Dro)p|(?:Wait|Seek)ing|Scroll|Focus|Paste|Abort|Drag|Play|Blur)Captur|alignmentBaselin|(?:limitingConeAng|xlink(?:(?:Arcr|R)o|Tit)|s(?:urfaceSca|ty|ca)|unselectab|baseProfi|fontSty|(?:focus|dragg)ab|multip|profi|tit)l|d(?:ominantBaselin|efaultValu)|onPointerLeav|a(?:uto(?:Capitaliz|Revers|Sav)|dditiv)|(?:(?:formNoValid|xlinkActu|noValid|accumul|rot)a|autoComple|decelera)t|(?:(?:attribute|item)T|datat)yp|onPointerMov|(?:attribute|glyph)Nam|playsInlin|(?:writing|input|edge)Mod|(?:formE|e)ncTyp|(?:amplitu|mo)d|(?:xlinkTy|itemSco|keyTy|slo)p|(?:xmlSpa|non)c|fillRul|(?:dateTi|na)m|r(?:esourc|ol)|xmlBas|wmod)e|(?:glyphOrientationHorizont|loc)al|(?:externalResourcesRequir|select|revers|mut)ed|c(?:o(?:lorInterpolationFilter|ord)s|o(?:lor(?:Interpolation)?|nt(?:rols|ent))|(?:ontentS(?:cript|tyle)Typ|o(?:ntentEditab|lorProfi)l|l(?:assNam|ipRul)|a(?:lcMod|ptur)|it)e|olorRendering|l(?:ipPathUnits|assID)|(?:ontrolsLis|apHeigh)t|h(?:eckedLink|a(?:llenge|rSet)|ildren|ecked)|ell(?:Spac|Padd)ing|o(?:ntextMenu|ls)|(?:rossOrigi|olSpa)n|l(?:ip(?:Path)?|ass)|ursor|[xy])|glyphOrientationVertical|d(?:angerouslySetInnerHTML|efaultChecked|ownload|isabled|isplay|[xy])|(?:s(?:trikethroughThickn|eaml)es|(?:und|ov)erlineThicknes|r(?:equiredExtension|adiu)|(?:requiredFeatur|tableValu|stitchTil|numOctav|filterR)e|key(?:(?:Splin|Tim)e|Param)|auto[Ff]ocu|header|bia)s|(?:(?:st(?:rikethroughPosi|dDevia)|(?:und|ov)erlinePosi|(?:textDecor|elev)a|orienta)tio|(?:strokeLinejo|orig)i|on(?:PointerDow|FocusI)|formActio|zoomAndPa|directio|(?:vers|act)io|rowSpa|begi|ico)n|o(?:n(?:AnimationIteration|C(?:o(?:mposition(?:Update|Start|End)|ntextMenu|py)|anPlayThrough|anPlay|hange|lick|ut)|(?:(?:Duration|Volume|Rate)Chang|(?:MouseLea|(?:Touch|Mouse)Mo|DragLea)v|Paus)e|Loaded(?:Metad|D)ata|(?:Animation|Touch|Load|Drag)Start|(?:(?:T(?:ransition|ouch)|Animation)E|Suspe)nd|DoubleClick|(?:TouchCanc|Whe)el|(?:Mouse(?:Ent|Ov)e|Drag(?:Ent|Ov)e|Erro)r|TimeUpdate|(?:E(?:n(?:crypt|d)|mpti)|S(?:tall|eek))ed|MouseDown|P(?:rogress|laying)|(?:MouseOu|DragExi|S(?:elec|ubmi)|Rese|Inpu)t|KeyPress|DragEnd|Key(?:Down|Up)|(?:Wait|Seek)ing|(?:MouseU|Dro)p|Scroll|Paste|Focus|Abort|Drag|Play|Load|Blur)|rient)|p(?:reserveAspectRatio|ointsAt[X-Z]|anose1)|(?:(?:allowPaymentReque|(?:fontSize|length)Adju|manife)s|strokeMiterlimi|(?:(?:specularE|e)xpon|renderingInt|asc)en|(?:specularConsta|repeatCou|fontVaria)n|d(?:iffuseConsta|esce)n|baselineShif|vectorEffec|onPointerOu|(?:(?:mar(?:ker|gin)|x)H|accentH|fontW)eigh|markerStar|a(?:utoCorrec|bou)|onFocusOu|intercep|restar|forma|inlis|heigh|lis)t|(?:patternContent|ma(?:sk(?:Content)?|rker)|primitive|gradient|pattern|filter)Units|(?:(?:allowTranspar|baseFrequ)enc|re(?:ferrerPolic|adOnl)|(?:(?:st(?:roke|op)O|floodO|fillO|o)pac|integr|secur)it|visibilit|fontFamil|accessKe|propert|summar)y|(?:gradientT|patternT|t)ransform|(?:(?:st(?:rokeDasho|artO)|o)ffs|acceptChars|formTarg|viewTarg|srcS)et|(?:[xy]ChannelSelect|lightingCol|textAnch|floodCol|stopCol|operat|htmlF)or|(?:(?:enableBackgrou|markerE)n|s(?:p(?:readMetho|ee)|ee)|formMetho|(?:markerM|onInval)i|preloa|metho|kin)d|k(?:ernel(?:UnitLength|Matrix)|[1-4])|strokeDasharray|(?:onPointerCanc|lab)el|(?:allowFullScre|hidd)en|a(?:l(?:lowUserMedia|phabetic|t)|rabicForm|sync)|systemLanguage|(?:(?:o(?:nPointer(?:Ent|Ov)|rd)|allowReord|placehold|frameBord|paintOrd|post)e|repeatDu|d(?:efe|u))r|(?:pointerEve|keyPoi)nts|preserveAlpha|(?:strokeLineca|onPointerU|itemPro|useMa|wra|loo)p|v(?:Mathematical|ert(?:Origin[XY]|AdvY)|alues|ocab)|unicodeRange|h(?:oriz(?:Origin|Adv)X|ttpEquiv)|(?:vI|i)deographic|mathematical|u(?:nicodeBidi|[12])|(?:fontStretc|hig)h|vAlphabetic|(?:(?:mar(?:ker|gin)W|strokeW)id|azimu)th|(?:xmlnsXl|valueL)ink|mediaGroup|spellCheck|(?:text|m(?:in|ax))Length|(?:unitsPerE|optimu|fro)m|r(?:adioGroup|e(?:sults|f[XY]|l)|ows|[xy])|pathLength|(?:xlinkHr|glyphR)ef|innerHTML|xlinkShow|f(?:o(?:ntSize|rm?)|il(?:ter|l))|(?:tabInde|(?:sand|b)bo|viewBo)x|autoPlay|r(?:e(?:quired|sult|f))?|(?:(?:href|xml|src)La|kerni)ng|o(?:verflow|pen)|i(?:temRef|n2|s)|p(?:attern|oints)|unicode|d(?:efault|ata|ir)?|divisor|t(?:arget[XY]|o)|(?:stri|la)ng|(?:width|size)s|prefix|typeof|srcDoc|s(?:coped|te(?:m[hv]|p)|pan)|s(?:t(?:roke|art)|hape|cope|rc)|a(?:ccept|llow|s)|itemID|t(?:arget|ype)|m(?:edia|a(?:sk|x)|in)|value|width|x(?:mlns)?|size|href|k(?:ey)?|end|low|by|x[12]|y[12]|g[12]|i[dn]|f[xy]|[yz])$/,
          xt = RegExp.prototype.test.bind(
            new RegExp(
              "^(x|data|aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
            )
          );
        var Ot,
          St,
          kt = "__styled-components__",
          Et = kt + "next__",
          jt = d.a.shape({
            getTheme: d.a.func,
            subscribe: d.a.func,
            unsubscribe: d.a.func
          }),
          Ct = (((Ot = {})[kt] = d.a.func), (Ot[Et] = jt), Ot);
        var Pt,
          At = (function(t) {
            function e() {
              g(this, e);
              var n = O(this, t.call(this));
              return (
                (n.unsubscribeToOuterId = -1),
                (n.getTheme = n.getTheme.bind(n)),
                n
              );
            }
            return (
              w(e, t),
              (e.prototype.componentWillMount = function() {
                var t = this,
                  e = this.context[Et];
                void 0 !== e &&
                  (this.unsubscribeToOuterId = e.subscribe(function(e) {
                    (t.outerTheme = e),
                      void 0 !== t.broadcast && t.publish(t.props.theme);
                  })),
                  (this.broadcast = (function(t) {
                    var e = {},
                      n = 0,
                      r = t;
                    return {
                      publish: function(t) {
                        for (var n in ((r = t), e)) {
                          var o = e[n];
                          void 0 !== o && o(r);
                        }
                      },
                      subscribe: function(t) {
                        var o = n;
                        return (e[o] = t), (n += 1), t(r), o;
                      },
                      unsubscribe: function(t) {
                        e[t] = void 0;
                      }
                    };
                  })(this.getTheme()));
              }),
              (e.prototype.getChildContext = function() {
                var t,
                  e = this;
                return _(
                  {},
                  this.context,
                  (((t = {})[Et] = {
                    getTheme: this.getTheme,
                    subscribe: this.broadcast.subscribe,
                    unsubscribe: this.broadcast.unsubscribe
                  }),
                  (t[kt] = function(t) {
                    var n = e.broadcast.subscribe(t);
                    return function() {
                      return e.broadcast.unsubscribe(n);
                    };
                  }),
                  t)
                );
              }),
              (e.prototype.componentWillReceiveProps = function(t) {
                this.props.theme !== t.theme && this.publish(t.theme);
              }),
              (e.prototype.componentWillUnmount = function() {
                -1 !== this.unsubscribeToOuterId &&
                  this.context[Et].unsubscribe(this.unsubscribeToOuterId);
              }),
              (e.prototype.getTheme = function(t) {
                var e = t || this.props.theme;
                if ("function" == typeof e) return e(this.outerTheme);
                if (
                  null === e ||
                  Array.isArray(e) ||
                  "object" !== (void 0 === e ? "undefined" : b(e))
                )
                  throw new k(8);
                return _({}, this.outerTheme, e);
              }),
              (e.prototype.publish = function(t) {
                this.broadcast.publish(this.getTheme(t));
              }),
              (e.prototype.render = function() {
                return this.props.children
                  ? u.a.Children.only(this.props.children)
                  : null;
              }),
              e
            );
          })(a.Component);
        (At.childContextTypes = Ct),
          (At.contextTypes = (((St = {})[Et] = jt), St));
        var It = {},
          zt = _(
            {},
            Ct,
            (((Pt = {})[W] = d.a.oneOfType([
              d.a.instanceOf(pt),
              d.a.instanceOf(ht)
            ])),
            Pt)
          ),
          Tt = {};
        var Mt = (function(t) {
          function e() {
            var n, r;
            g(this, e);
            for (var o = arguments.length, i = Array(o), a = 0; a < o; a++)
              i[a] = arguments[a];
            return (
              (n = r = O(this, t.call.apply(t, [this].concat(i)))),
              (r.attrs = {}),
              (r.state = { theme: null, generatedClassName: "" }),
              (r.unsubscribeId = -1),
              O(r, n)
            );
          }
          return (
            w(e, t),
            (e.prototype.unsubscribeFromContext = function() {
              -1 !== this.unsubscribeId &&
                this.context[Et].unsubscribe(this.unsubscribeId);
            }),
            (e.prototype.buildExecutionContext = function(t, e) {
              var n = this.constructor.attrs,
                r = _({}, e, { theme: t });
              return void 0 === n
                ? r
                : ((this.attrs = Object.keys(n).reduce(function(t, e) {
                    var o = n[e];
                    return (
                      (t[e] =
                        "function" != typeof o ||
                        (function(t, e) {
                          for (var n = t; n; )
                            if ((n = Object.getPrototypeOf(n)) && n === e)
                              return !0;
                          return !1;
                        })(o, a.Component)
                          ? o
                          : o(r)),
                      t
                    );
                  }, {})),
                  _({}, r, this.attrs));
            }),
            (e.prototype.generateAndInjectStyles = function(t, e) {
              var n = this.constructor,
                r = n.attrs,
                o = n.componentStyle,
                i = (n.warnTooManyClasses, this.context[W] || pt.master);
              if (o.isStatic && void 0 === r)
                return o.generateAndInjectStyles(It, i);
              var a = this.buildExecutionContext(t, e);
              return o.generateAndInjectStyles(a, i);
            }),
            (e.prototype.componentWillMount = function() {
              var t = this,
                e = this.constructor.componentStyle,
                n = this.context[Et];
              if (e.isStatic) {
                var r = this.generateAndInjectStyles(It, this.props);
                this.setState({ generatedClassName: r });
              } else if (void 0 !== n) {
                var o = n.subscribe;
                this.unsubscribeId = o(function(e) {
                  var n = vt(t.props, e, t.constructor.defaultProps),
                    r = t.generateAndInjectStyles(n, t.props);
                  t.setState({ theme: n, generatedClassName: r });
                });
              } else {
                var i = this.props.theme || F,
                  a = this.generateAndInjectStyles(i, this.props);
                this.setState({ theme: i, generatedClassName: a });
              }
            }),
            (e.prototype.componentWillReceiveProps = function(t) {
              var e = this;
              this.constructor.componentStyle.isStatic ||
                this.setState(function(n) {
                  var r = vt(t, n.theme, e.constructor.defaultProps);
                  return {
                    theme: r,
                    generatedClassName: e.generateAndInjectStyles(r, t)
                  };
                });
            }),
            (e.prototype.componentWillUnmount = function() {
              this.unsubscribeFromContext();
            }),
            (e.prototype.render = function() {
              var t = this.props.innerRef,
                e = this.state.generatedClassName,
                n = this.constructor,
                r = n.styledComponentId,
                o = n.target,
                i = _t(o),
                u = [this.props.className, r, this.attrs.className, e]
                  .filter(Boolean)
                  .join(" "),
                c = _({}, this.attrs, { className: u });
              M(o) ? (c.innerRef = t) : (c.ref = t);
              var s,
                f = c,
                l = void 0;
              for (l in this.props)
                "innerRef" === l ||
                  "className" === l ||
                  (i && ((s = l), !wt.test(s) && !xt(s.toLowerCase()))) ||
                  (f[l] =
                    "style" === l && l in this.attrs
                      ? _({}, this.attrs[l], this.props[l])
                      : this.props[l]);
              return Object(a.createElement)(o, f);
            }),
            e
          );
        })(a.Component);
        function Rt(t) {
          for (var e, n = 0 | t.length, r = 0 | n, o = 0; n >= 4; )
            (e =
              1540483477 *
                (65535 &
                  (e =
                    (255 & t.charCodeAt(o)) |
                    ((255 & t.charCodeAt(++o)) << 8) |
                    ((255 & t.charCodeAt(++o)) << 16) |
                    ((255 & t.charCodeAt(++o)) << 24))) +
              (((1540483477 * (e >>> 16)) & 65535) << 16)),
              (r =
                (1540483477 * (65535 & r) +
                  (((1540483477 * (r >>> 16)) & 65535) << 16)) ^
                (e =
                  1540483477 * (65535 & (e ^= e >>> 24)) +
                  (((1540483477 * (e >>> 16)) & 65535) << 16))),
              (n -= 4),
              ++o;
          switch (n) {
            case 3:
              r ^= (255 & t.charCodeAt(o + 2)) << 16;
            case 2:
              r ^= (255 & t.charCodeAt(o + 1)) << 8;
            case 1:
              r =
                1540483477 * (65535 & (r ^= 255 & t.charCodeAt(o))) +
                (((1540483477 * (r >>> 16)) & 65535) << 16);
          }
          return (
            (r =
              1540483477 * (65535 & (r ^= r >>> 13)) +
              (((1540483477 * (r >>> 16)) & 65535) << 16)),
            (r ^= r >>> 15) >>> 0
          );
        }
        var qt = B,
          Nt = function t(e, n) {
            for (var r = 0, o = e.length; r < o; r += 1) {
              var i = e[r];
              if (Array.isArray(i) && !t(i)) return !1;
              if ("function" == typeof i && !M(i)) return !1;
            }
            if (void 0 !== n)
              for (var a in n) if ("function" == typeof n[a]) return !1;
            return !0;
          },
          Lt = r.hot && !1,
          Dt = [
            "a",
            "abbr",
            "address",
            "area",
            "article",
            "aside",
            "audio",
            "b",
            "base",
            "bdi",
            "bdo",
            "big",
            "blockquote",
            "body",
            "br",
            "button",
            "canvas",
            "caption",
            "cite",
            "code",
            "col",
            "colgroup",
            "data",
            "datalist",
            "dd",
            "del",
            "details",
            "dfn",
            "dialog",
            "div",
            "dl",
            "dt",
            "em",
            "embed",
            "fieldset",
            "figcaption",
            "figure",
            "footer",
            "form",
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "h6",
            "head",
            "header",
            "hgroup",
            "hr",
            "html",
            "i",
            "iframe",
            "img",
            "input",
            "ins",
            "kbd",
            "keygen",
            "label",
            "legend",
            "li",
            "link",
            "main",
            "map",
            "mark",
            "marquee",
            "menu",
            "menuitem",
            "meta",
            "meter",
            "nav",
            "noscript",
            "object",
            "ol",
            "optgroup",
            "option",
            "output",
            "p",
            "param",
            "picture",
            "pre",
            "progress",
            "q",
            "rp",
            "rt",
            "ruby",
            "s",
            "samp",
            "script",
            "section",
            "select",
            "small",
            "source",
            "span",
            "strong",
            "style",
            "sub",
            "summary",
            "sup",
            "table",
            "tbody",
            "td",
            "textarea",
            "tfoot",
            "th",
            "thead",
            "time",
            "title",
            "tr",
            "track",
            "u",
            "ul",
            "var",
            "video",
            "wbr",
            "circle",
            "clipPath",
            "defs",
            "ellipse",
            "foreignObject",
            "g",
            "image",
            "line",
            "linearGradient",
            "mask",
            "path",
            "pattern",
            "polygon",
            "polyline",
            "radialGradient",
            "rect",
            "stop",
            "svg",
            "text",
            "tspan"
          ],
          Ft = function(t) {
            var e =
                "function" == typeof t &&
                !(t.prototype && "isReactComponent" in t.prototype),
              n = M(t) || e,
              r = (function(e) {
                function r() {
                  var t, n;
                  g(this, r);
                  for (
                    var o = arguments.length, i = Array(o), a = 0;
                    a < o;
                    a++
                  )
                    i[a] = arguments[a];
                  return (
                    (t = n = O(this, e.call.apply(e, [this].concat(i)))),
                    (n.state = F),
                    (n.unsubscribeId = -1),
                    O(n, t)
                  );
                }
                return (
                  w(r, e),
                  (r.prototype.componentWillMount = function() {
                    var t = this,
                      e = this.constructor.defaultProps,
                      n = this.context[Et],
                      r = vt(this.props, void 0, e);
                    if (void 0 === n && void 0 !== r)
                      this.setState({ theme: r });
                    else {
                      var o = n.subscribe;
                      this.unsubscribeId = o(function(n) {
                        var r = vt(t.props, n, e);
                        t.setState({ theme: r });
                      });
                    }
                  }),
                  (r.prototype.componentWillReceiveProps = function(t) {
                    var e = this.constructor.defaultProps;
                    this.setState(function(n) {
                      return { theme: vt(t, n.theme, e) };
                    });
                  }),
                  (r.prototype.componentWillUnmount = function() {
                    -1 !== this.unsubscribeId &&
                      this.context[Et].unsubscribe(this.unsubscribeId);
                  }),
                  (r.prototype.render = function() {
                    var e = _({ theme: this.state.theme }, this.props);
                    return (
                      n || ((e.ref = e.innerRef), delete e.innerRef),
                      u.a.createElement(t, e)
                    );
                  }),
                  r
                );
              })(u.a.Component);
            return (
              (r.contextTypes = Ct),
              (r.displayName = "WithTheme(" + mt(t) + ")"),
              (r.styledComponentId = "withTheme"),
              v()(r, t)
            );
          },
          Ut = { StyleSheet: pt };
        var $t = (function(t, e, n) {
            var r = function(e) {
              return t(Rt(e));
            };
            return (function() {
              function t(e, n, r) {
                if (
                  (g(this, t),
                  (this.rules = e),
                  (this.isStatic = !Lt && Nt(e, n)),
                  (this.componentId = r),
                  !pt.master.hasId(r))
                ) {
                  var o = [];
                  pt.master.deferredInject(r, o);
                }
              }
              return (
                (t.prototype.generateAndInjectStyles = function(t, o) {
                  var i = this.isStatic,
                    a = this.componentId,
                    u = this.lastClassName;
                  if (qt && i && void 0 !== u && o.hasNameForId(a, u)) return u;
                  var c = e(this.rules, t),
                    s = r(this.componentId + c.join(""));
                  return (
                    o.hasNameForId(a, s) ||
                      o.inject(this.componentId, n(c, "." + s), s),
                    (this.lastClassName = s),
                    s
                  );
                }),
                (t.generateName = function(t) {
                  return r(t);
                }),
                t
              );
            })();
          })(N, E, T),
          Wt = (function(t) {
            return function e(n, r) {
              var o =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : F;
              if (!Object(y.isValidElementType)(r)) throw new k(1, String(r));
              var i = function() {
                return n(r, o, t.apply(void 0, arguments));
              };
              return (
                (i.withConfig = function(t) {
                  return e(n, r, _({}, o, t));
                }),
                (i.attrs = function(t) {
                  return e(n, r, _({}, o, { attrs: _({}, o.attrs || F, t) }));
                }),
                i
              );
            };
          })(U),
          Bt = (function(t, e) {
            return function n(r, o, i) {
              var a = o.isClass,
                u = void 0 === a ? !_t(r) : a,
                c = o.displayName,
                s =
                  void 0 === c
                    ? (function(t) {
                        return _t(t) ? "styled." + t : "Styled(" + mt(t) + ")";
                      })(r)
                    : c,
                f = o.componentId,
                l =
                  void 0 === f
                    ? (function(t, e, n) {
                        var r = "string" != typeof e ? "sc" : gt(e),
                          o = (Tt[r] || 0) + 1;
                        Tt[r] = o;
                        var i = r + "-" + t.generateName(r + o);
                        return void 0 !== n ? n + "-" + i : i;
                      })(t, o.displayName, o.parentComponentId)
                    : f,
                p = o.ParentComponent,
                d = void 0 === p ? Mt : p,
                h = o.rules,
                y = o.attrs,
                b =
                  o.displayName && o.componentId
                    ? gt(o.displayName) + "-" + o.componentId
                    : o.componentId || l,
                S = new t(void 0 === h ? i : h.concat(i), y, b),
                k = (function(t) {
                  function a() {
                    return g(this, a), O(this, t.apply(this, arguments));
                  }
                  return (
                    w(a, t),
                    (a.withComponent = function(t) {
                      var e = o.componentId,
                        r = x(o, ["componentId"]),
                        u = e && e + "-" + (_t(t) ? t : gt(mt(t))),
                        c = _({}, r, { componentId: u, ParentComponent: a });
                      return n(t, c, i);
                    }),
                    m(a, null, [
                      {
                        key: "extend",
                        get: function() {
                          var t = o.rules,
                            u = o.componentId,
                            c = x(o, ["rules", "componentId"]),
                            s = void 0 === t ? i : t.concat(i),
                            f = _({}, c, {
                              rules: s,
                              parentComponentId: u,
                              ParentComponent: a
                            });
                          return e(n, r, f);
                        }
                      }
                    ]),
                    a
                  );
                })(d);
              return (
                (k.attrs = y),
                (k.componentStyle = S),
                (k.contextTypes = zt),
                (k.displayName = s),
                (k.styledComponentId = b),
                (k.target = r),
                u &&
                  v()(k, r, {
                    attrs: !0,
                    componentStyle: !0,
                    displayName: !0,
                    extend: !0,
                    styledComponentId: !0,
                    target: !0,
                    warnTooManyClasses: !0,
                    withComponent: !0
                  }),
                k
              );
            };
          })($t, Wt),
          Ht = (function(t, e, n) {
            return function() {
              var r = pt.master,
                o = n.apply(void 0, arguments),
                i = t(Rt(JSON.stringify(o).replace(/\s|\\n/g, ""))),
                a = "sc-keyframes-" + i;
              return (
                r.hasNameForId(a, i) || r.inject(a, e(o, i, "@keyframes"), i), i
              );
            };
          })(N, T, U),
          Kt = (function(t, e) {
            return function() {
              var n = pt.master,
                r = e.apply(void 0, arguments),
                o = "sc-global-" + Rt(JSON.stringify(r));
              n.hasId(o) || n.inject(o, t(r));
            };
          })(T, U),
          Yt = (function(t, e) {
            var n = function(n) {
              return e(t, n);
            };
            return (
              Dt.forEach(function(t) {
                n[t] = n(t);
              }),
              n
            );
          })(Bt, Wt);
        e.default = Yt;
      }.call(this, n(56), n(30)(t));
  },
  function(t, e, n) {
    t.exports = n(49)();
  },
  function(t, e, n) {
    "use strict";
    t.exports = n(109);
  },
  function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
      return u;
    }),
      n.d(e, "e", function() {
        return c;
      }),
      n.d(e, "c", function() {
        return s;
      }),
      n.d(e, "b", function() {
        return p;
      }),
      n.d(e, "d", function() {
        return d;
      }),
      n.d(e, "f", function() {
        return h;
      });
    var r = n(0),
      o = n(9),
      i = n(14),
      a =
        Object.assign ||
        function(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        },
      u = { type: "@@redux-saga/CHANNEL_END" },
      c = function(t) {
        return t && "@@redux-saga/CHANNEL_END" === t.type;
      };
    function s() {
      var t = [];
      return {
        subscribe: function(e) {
          return (
            t.push(e),
            function() {
              return Object(r.w)(t, e);
            }
          );
        },
        emit: function(e) {
          for (var n = t.slice(), r = 0, o = n.length; r < o; r++) n[r](e);
        }
      };
    }
    var f = "invalid buffer passed to channel factory function",
      l = "Saga was provided with an undefined action";
    function p() {
      var t =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : o.a.fixed(),
        e = !1,
        n = [];
      function i() {
        if (e && n.length)
          throw Object(r.p)("Cannot have a closed channel with pending takers");
        if (n.length && !t.isEmpty())
          throw Object(r.p)("Cannot have pending takers with non empty buffer");
      }
      return (
        Object(r.h)(t, r.q.buffer, f),
        {
          take: function(o) {
            i(),
              Object(r.h)(
                o,
                r.q.func,
                "channel.take's callback must be a function"
              ),
              e && t.isEmpty()
                ? o(u)
                : t.isEmpty()
                ? (n.push(o),
                  (o.cancel = function() {
                    return Object(r.w)(n, o);
                  }))
                : o(t.take());
          },
          put: function(o) {
            if ((i(), Object(r.h)(o, r.q.notUndef, l), !e)) {
              if (!n.length) return t.put(o);
              for (var a = 0; a < n.length; a++) {
                var u = n[a];
                if (!u[r.b] || u[r.b](o)) return n.splice(a, 1), u(o);
              }
            }
          },
          flush: function(n) {
            i(),
              Object(r.h)(
                n,
                r.q.func,
                "channel.flush' callback must be a function"
              ),
              e && t.isEmpty() ? n(u) : n(t.flush());
          },
          close: function() {
            if ((i(), !e && ((e = !0), n.length))) {
              var t = n;
              n = [];
              for (var r = 0, o = t.length; r < o; r++) t[r](u);
            }
          },
          get __takers__() {
            return n;
          },
          get __closed__() {
            return e;
          }
        }
      );
    }
    function d(t) {
      var e =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : o.a.none(),
        n = arguments[2];
      arguments.length > 2 &&
        Object(r.h)(
          n,
          r.q.func,
          "Invalid match function passed to eventChannel"
        );
      var i = p(e),
        a = function() {
          i.__closed__ || (u && u(), i.close());
        },
        u = t(function(t) {
          c(t) ? a() : (n && !n(t)) || i.put(t);
        });
      if ((i.__closed__ && u(), !r.q.func(u)))
        throw new Error(
          "in eventChannel: subscribe should return a function to unsubscribe"
        );
      return { take: i.take, flush: i.flush, close: a };
    }
    function h(t) {
      var e = d(function(e) {
        return t(function(t) {
          t[r.c]
            ? e(t)
            : Object(i.a)(function() {
                return e(t);
              });
        });
      });
      return a({}, e, {
        take: function(t, n) {
          arguments.length > 1 &&
            (Object(r.h)(
              n,
              r.q.func,
              "channel.take's matcher argument must be a function"
            ),
            (t[r.b] = n)),
            e.take(t);
        }
      });
    }
  },
  function(t, e, n) {
    "use strict";
    t.exports = function(t, e, n, r, o, i, a, u) {
      if (!t) {
        var c;
        if (void 0 === e)
          c = new Error(
            "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
          );
        else {
          var s = [n, r, o, i, a, u],
            f = 0;
          (c = new Error(
            e.replace(/%s/g, function() {
              return s[f++];
            })
          )).name = "Invariant Violation";
        }
        throw ((c.framesToPop = 1), c);
      }
    };
  },
  function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
      return f;
    });
    var r = n(0),
      o = "Channel's Buffer overflow!",
      i = 1,
      a = 3,
      u = 4,
      c = { isEmpty: r.r, put: r.u, take: r.u };
    function s() {
      var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10,
        e = arguments[1],
        n = new Array(t),
        r = 0,
        c = 0,
        s = 0,
        f = function(e) {
          (n[c] = e), (c = (c + 1) % t), r++;
        },
        l = function() {
          if (0 != r) {
            var e = n[s];
            return (n[s] = null), r--, (s = (s + 1) % t), e;
          }
        },
        p = function() {
          for (var t = []; r; ) t.push(l());
          return t;
        };
      return {
        isEmpty: function() {
          return 0 == r;
        },
        put: function(l) {
          if (r < t) f(l);
          else {
            var d = void 0;
            switch (e) {
              case i:
                throw new Error(o);
              case a:
                (n[c] = l), (s = c = (c + 1) % t);
                break;
              case u:
                (d = 2 * t),
                  (n = p()),
                  (r = n.length),
                  (c = n.length),
                  (s = 0),
                  (n.length = d),
                  (t = d),
                  f(l);
            }
          }
        },
        take: l,
        flush: p
      };
    }
    var f = {
      none: function() {
        return c;
      },
      fixed: function(t) {
        return s(t, i);
      },
      dropping: function(t) {
        return s(t, 2);
      },
      sliding: function(t) {
        return s(t, a);
      },
      expanding: function(t) {
        return s(t, u);
      }
    };
  },
  function(t, e, n) {
    "use strict";
    var r = n(0),
      o = { done: !0, value: void 0 },
      i = {};
    function a(t) {
      return r.q.channel(t)
        ? "channel"
        : Array.isArray(t)
        ? String(
            t.map(function(t) {
              return String(t);
            })
          )
        : String(t);
    }
    function u(t, e) {
      var n =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : "iterator",
        a = void 0,
        u = e;
      function c(e, n) {
        if (u === i) return o;
        if (n) throw ((u = i), n);
        a && a(e);
        var r = t[u](),
          c = r[0],
          s = r[1],
          f = r[2];
        return (a = f), (u = c) === i ? o : s;
      }
      return Object(r.t)(
        c,
        function(t) {
          return c(null, t);
        },
        n,
        !0
      );
    }
    var c = n(2),
      s = n(7);
    function f(t, e) {
      for (
        var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), o = 2;
        o < n;
        o++
      )
        r[o - 2] = arguments[o];
      var f = { done: !1, value: Object(c.s)(t) },
        l = void 0,
        p = function(t) {
          return (l = t);
        };
      return u(
        {
          q1: function() {
            return ["q2", f, p];
          },
          q2: function() {
            return l === s.a
              ? [i]
              : [
                  "q1",
                  ((t = l),
                  { done: !1, value: c.k.apply(void 0, [e].concat(r, [t])) })
                ];
            var t;
          }
        },
        "q1",
        "takeEvery(" + a(t) + ", " + e.name + ")"
      );
    }
    function l(t, e) {
      for (
        var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), o = 2;
        o < n;
        o++
      )
        r[o - 2] = arguments[o];
      var f = { done: !1, value: Object(c.s)(t) },
        l = function(t) {
          return { done: !1, value: c.k.apply(void 0, [e].concat(r, [t])) };
        },
        p = function(t) {
          return { done: !1, value: Object(c.f)(t) };
        },
        d = void 0,
        h = void 0,
        v = function(t) {
          return (d = t);
        },
        y = function(t) {
          return (h = t);
        };
      return u(
        {
          q1: function() {
            return ["q2", f, y];
          },
          q2: function() {
            return h === s.a ? [i] : d ? ["q3", p(d)] : ["q1", l(h), v];
          },
          q3: function() {
            return ["q1", l(h), v];
          }
        },
        "q1",
        "takeLatest(" + a(t) + ", " + e.name + ")"
      );
    }
    var p = n(9);
    function d(t, e, n) {
      for (
        var o = arguments.length, f = Array(o > 3 ? o - 3 : 0), l = 3;
        l < o;
        l++
      )
        f[l - 3] = arguments[l];
      var d = void 0,
        h = void 0,
        v = { done: !1, value: Object(c.a)(e, p.a.sliding(1)) },
        y = { done: !1, value: Object(c.e)(r.m, t) },
        b = function(t) {
          return (d = t);
        },
        g = function(t) {
          return (h = t);
        };
      return u(
        {
          q1: function() {
            return ["q2", v, g];
          },
          q2: function() {
            return ["q3", { done: !1, value: Object(c.s)(h) }, b];
          },
          q3: function() {
            return d === s.a
              ? [i]
              : [
                  "q4",
                  ((t = d),
                  { done: !1, value: c.k.apply(void 0, [n].concat(f, [t])) })
                ];
            var t;
          },
          q4: function() {
            return ["q2", y];
          }
        },
        "q1",
        "throttle(" + a(e) + ", " + n.name + ")"
      );
    }
    n.d(e, "a", function() {
      return v;
    }),
      n.d(e, "c", function() {
        return y;
      }),
      n.d(e, "e", function() {
        return b;
      }),
      n.d(e, "b", function() {
        return f;
      }),
      n.d(e, "d", function() {
        return l;
      }),
      n.d(e, "f", function() {
        return d;
      });
    var h = function(t) {
        return (
          "import { " +
          t +
          " } from 'redux-saga' has been deprecated in favor of import { " +
          t +
          " } from 'redux-saga/effects'.\nThe latter will not work with yield*, as helper effects are wrapped automatically for you in fork effect.\nTherefore yield " +
          t +
          " will return task descriptor to your saga and execute next lines of code."
        );
      },
      v = Object(r.n)(f, h("takeEvery")),
      y = Object(r.n)(l, h("takeLatest")),
      b = Object(r.n)(d, h("throttle"));
  },
  function(t, e, n) {
    "use strict";
    n.d(e, "b", function() {
      return i;
    }),
      n.d(e, "a", function() {
        return a;
      });
    var r = n(5),
      o = n.n(r),
      i = o.a.shape({
        trySubscribe: o.a.func.isRequired,
        tryUnsubscribe: o.a.func.isRequired,
        notifyNestedSubs: o.a.func.isRequired,
        isSubscribed: o.a.func.isRequired
      }),
      a = o.a.shape({
        subscribe: o.a.func.isRequired,
        dispatch: o.a.func.isRequired,
        getState: o.a.func.isRequired
      });
  },
  function(t, e, n) {
    "use strict";
    n.r(e);
    var r = n(20),
      o = n(21);
    function i(t) {
      if (void 0 === t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return t;
    }
    function a() {
      return (a =
        Object.assign ||
        function(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        }).apply(this, arguments);
    }
    function u(t, e) {
      if (null == t) return {};
      var n,
        r,
        o = {},
        i = Object.keys(t);
      for (r = 0; r < i.length; r++)
        (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
      return o;
    }
    var c = n(39),
      s = n.n(c),
      f = n(22),
      l = n.n(f),
      p = n(3),
      d = n(19),
      h = null,
      v = { notify: function() {} };
    var y = (function() {
        function t(t, e, n) {
          (this.store = t),
            (this.parentSub = e),
            (this.onStateChange = n),
            (this.unsubscribe = null),
            (this.listeners = v);
        }
        var e = t.prototype;
        return (
          (e.addNestedSub = function(t) {
            return this.trySubscribe(), this.listeners.subscribe(t);
          }),
          (e.notifyNestedSubs = function() {
            this.listeners.notify();
          }),
          (e.isSubscribed = function() {
            return Boolean(this.unsubscribe);
          }),
          (e.trySubscribe = function() {
            var t, e;
            this.unsubscribe ||
              ((this.unsubscribe = this.parentSub
                ? this.parentSub.addNestedSub(this.onStateChange)
                : this.store.subscribe(this.onStateChange)),
              (this.listeners = ((t = []),
              (e = []),
              {
                clear: function() {
                  (e = h), (t = h);
                },
                notify: function() {
                  for (var n = (t = e), r = 0; r < n.length; r++) n[r]();
                },
                get: function() {
                  return e;
                },
                subscribe: function(n) {
                  var r = !0;
                  return (
                    e === t && (e = t.slice()),
                    e.push(n),
                    function() {
                      r &&
                        t !== h &&
                        ((r = !1),
                        e === t && (e = t.slice()),
                        e.splice(e.indexOf(n), 1));
                    }
                  );
                }
              })));
          }),
          (e.tryUnsubscribe = function() {
            this.unsubscribe &&
              (this.unsubscribe(),
              (this.unsubscribe = null),
              this.listeners.clear(),
              (this.listeners = v));
          }),
          t
        );
      })(),
      b = n(11),
      g = 0,
      m = {};
    function _() {}
    function w(t, e) {
      var n, r;
      void 0 === e && (e = {});
      var c = e,
        f = c.getDisplayName,
        h =
          void 0 === f
            ? function(t) {
                return "ConnectAdvanced(" + t + ")";
              }
            : f,
        v = c.methodName,
        w = void 0 === v ? "connectAdvanced" : v,
        x = c.renderCountProp,
        O = void 0 === x ? void 0 : x,
        S = c.shouldHandleStateChanges,
        k = void 0 === S || S,
        E = c.storeKey,
        j = void 0 === E ? "store" : E,
        C = c.withRef,
        P = void 0 !== C && C,
        A = u(c, [
          "getDisplayName",
          "methodName",
          "renderCountProp",
          "shouldHandleStateChanges",
          "storeKey",
          "withRef"
        ]),
        I = j + "Subscription",
        z = g++,
        T = (((n = {})[j] = b.a), (n[I] = b.b), n),
        M = (((r = {})[I] = b.b), r);
      return function(e) {
        l()(
          Object(d.isValidElementType)(e),
          "You must pass a component to the function returned by " +
            w +
            ". Instead received " +
            JSON.stringify(e)
        );
        var n = e.displayName || e.name || "Component",
          r = h(n),
          u = a({}, A, {
            getDisplayName: h,
            methodName: w,
            renderCountProp: O,
            shouldHandleStateChanges: k,
            storeKey: j,
            withRef: P,
            displayName: r,
            wrappedComponentName: n,
            WrappedComponent: e
          }),
          c = (function(n) {
            function c(t, e) {
              var o;
              return (
                ((o = n.call(this, t, e) || this).version = z),
                (o.state = {}),
                (o.renderCount = 0),
                (o.store = t[j] || e[j]),
                (o.propsMode = Boolean(t[j])),
                (o.setWrappedInstance = o.setWrappedInstance.bind(i(i(o)))),
                l()(
                  o.store,
                  'Could not find "' +
                    j +
                    '" in either the context or props of "' +
                    r +
                    '". Either wrap the root component in a <Provider>, or explicitly pass "' +
                    j +
                    '" as a prop to "' +
                    r +
                    '".'
                ),
                o.initSelector(),
                o.initSubscription(),
                o
              );
            }
            Object(o.a)(c, n);
            var s = c.prototype;
            return (
              (s.getChildContext = function() {
                var t,
                  e = this.propsMode ? null : this.subscription;
                return ((t = {})[I] = e || this.context[I]), t;
              }),
              (s.componentDidMount = function() {
                k &&
                  (this.subscription.trySubscribe(),
                  this.selector.run(this.props),
                  this.selector.shouldComponentUpdate && this.forceUpdate());
              }),
              (s.componentWillReceiveProps = function(t) {
                this.selector.run(t);
              }),
              (s.shouldComponentUpdate = function() {
                return this.selector.shouldComponentUpdate;
              }),
              (s.componentWillUnmount = function() {
                this.subscription && this.subscription.tryUnsubscribe(),
                  (this.subscription = null),
                  (this.notifyNestedSubs = _),
                  (this.store = null),
                  (this.selector.run = _),
                  (this.selector.shouldComponentUpdate = !1);
              }),
              (s.getWrappedInstance = function() {
                return (
                  l()(
                    P,
                    "To access the wrapped instance, you need to specify { withRef: true } in the options argument of the " +
                      w +
                      "() call."
                  ),
                  this.wrappedInstance
                );
              }),
              (s.setWrappedInstance = function(t) {
                this.wrappedInstance = t;
              }),
              (s.initSelector = function() {
                var e = t(this.store.dispatch, u);
                (this.selector = (function(t, e) {
                  var n = {
                    run: function(r) {
                      try {
                        var o = t(e.getState(), r);
                        (o !== n.props || n.error) &&
                          ((n.shouldComponentUpdate = !0),
                          (n.props = o),
                          (n.error = null));
                      } catch (t) {
                        (n.shouldComponentUpdate = !0), (n.error = t);
                      }
                    }
                  };
                  return n;
                })(e, this.store)),
                  this.selector.run(this.props);
              }),
              (s.initSubscription = function() {
                if (k) {
                  var t = (this.propsMode ? this.props : this.context)[I];
                  (this.subscription = new y(
                    this.store,
                    t,
                    this.onStateChange.bind(this)
                  )),
                    (this.notifyNestedSubs = this.subscription.notifyNestedSubs.bind(
                      this.subscription
                    ));
                }
              }),
              (s.onStateChange = function() {
                this.selector.run(this.props),
                  this.selector.shouldComponentUpdate
                    ? ((this.componentDidUpdate = this.notifyNestedSubsOnComponentDidUpdate),
                      this.setState(m))
                    : this.notifyNestedSubs();
              }),
              (s.notifyNestedSubsOnComponentDidUpdate = function() {
                (this.componentDidUpdate = void 0), this.notifyNestedSubs();
              }),
              (s.isSubscribed = function() {
                return (
                  Boolean(this.subscription) && this.subscription.isSubscribed()
                );
              }),
              (s.addExtraProps = function(t) {
                if (!(P || O || (this.propsMode && this.subscription)))
                  return t;
                var e = a({}, t);
                return (
                  P && (e.ref = this.setWrappedInstance),
                  O && (e[O] = this.renderCount++),
                  this.propsMode &&
                    this.subscription &&
                    (e[I] = this.subscription),
                  e
                );
              }),
              (s.render = function() {
                var t = this.selector;
                if (((t.shouldComponentUpdate = !1), t.error)) throw t.error;
                return Object(p.createElement)(e, this.addExtraProps(t.props));
              }),
              c
            );
          })(p.Component);
        return (
          (c.WrappedComponent = e),
          (c.displayName = r),
          (c.childContextTypes = M),
          (c.contextTypes = T),
          (c.propTypes = T),
          s()(c, e)
        );
      };
    }
    var x = Object.prototype.hasOwnProperty;
    function O(t, e) {
      return t === e ? 0 !== t || 0 !== e || 1 / t == 1 / e : t != t && e != e;
    }
    function S(t, e) {
      if (O(t, e)) return !0;
      if (
        "object" != typeof t ||
        null === t ||
        "object" != typeof e ||
        null === e
      )
        return !1;
      var n = Object.keys(t),
        r = Object.keys(e);
      if (n.length !== r.length) return !1;
      for (var o = 0; o < n.length; o++)
        if (!x.call(e, n[o]) || !O(t[n[o]], e[n[o]])) return !1;
      return !0;
    }
    var k = n(18);
    n(13);
    function E(t) {
      return function(e, n) {
        var r = t(e, n);
        function o() {
          return r;
        }
        return (o.dependsOnOwnProps = !1), o;
      };
    }
    function j(t) {
      return null !== t.dependsOnOwnProps && void 0 !== t.dependsOnOwnProps
        ? Boolean(t.dependsOnOwnProps)
        : 1 !== t.length;
    }
    function C(t, e) {
      return function(e, n) {
        n.displayName;
        var r = function(t, e) {
          return r.dependsOnOwnProps ? r.mapToProps(t, e) : r.mapToProps(t);
        };
        return (
          (r.dependsOnOwnProps = !0),
          (r.mapToProps = function(e, n) {
            (r.mapToProps = t), (r.dependsOnOwnProps = j(t));
            var o = r(e, n);
            return (
              "function" == typeof o &&
                ((r.mapToProps = o),
                (r.dependsOnOwnProps = j(o)),
                (o = r(e, n))),
              o
            );
          }),
          r
        );
      };
    }
    var P = [
      function(t) {
        return "function" == typeof t ? C(t) : void 0;
      },
      function(t) {
        return t
          ? void 0
          : E(function(t) {
              return { dispatch: t };
            });
      },
      function(t) {
        return t && "object" == typeof t
          ? E(function(e) {
              return Object(k.bindActionCreators)(t, e);
            })
          : void 0;
      }
    ];
    var A = [
      function(t) {
        return "function" == typeof t ? C(t) : void 0;
      },
      function(t) {
        return t
          ? void 0
          : E(function() {
              return {};
            });
      }
    ];
    function I(t, e, n) {
      return a({}, n, t, e);
    }
    var z = [
      function(t) {
        return "function" == typeof t
          ? (function(t) {
              return function(e, n) {
                n.displayName;
                var r,
                  o = n.pure,
                  i = n.areMergedPropsEqual,
                  a = !1;
                return function(e, n, u) {
                  var c = t(e, n, u);
                  return a ? (o && i(c, r)) || (r = c) : ((a = !0), (r = c)), r;
                };
              };
            })(t)
          : void 0;
      },
      function(t) {
        return t
          ? void 0
          : function() {
              return I;
            };
      }
    ];
    function T(t, e, n, r) {
      return function(o, i) {
        return n(t(o, i), e(r, i), i);
      };
    }
    function M(t, e, n, r, o) {
      var i,
        a,
        u,
        c,
        s,
        f = o.areStatesEqual,
        l = o.areOwnPropsEqual,
        p = o.areStatePropsEqual,
        d = !1;
      function h(o, d) {
        var h,
          v,
          y = !l(d, a),
          b = !f(o, i);
        return (
          (i = o),
          (a = d),
          y && b
            ? ((u = t(i, a)),
              e.dependsOnOwnProps && (c = e(r, a)),
              (s = n(u, c, a)))
            : y
            ? (t.dependsOnOwnProps && (u = t(i, a)),
              e.dependsOnOwnProps && (c = e(r, a)),
              (s = n(u, c, a)))
            : b
            ? ((h = t(i, a)), (v = !p(h, u)), (u = h), v && (s = n(u, c, a)), s)
            : s
        );
      }
      return function(o, f) {
        return d
          ? h(o, f)
          : ((u = t((i = o), (a = f))),
            (c = e(r, a)),
            (s = n(u, c, a)),
            (d = !0),
            s);
      };
    }
    function R(t, e) {
      var n = e.initMapStateToProps,
        r = e.initMapDispatchToProps,
        o = e.initMergeProps,
        i = u(e, [
          "initMapStateToProps",
          "initMapDispatchToProps",
          "initMergeProps"
        ]),
        a = n(t, i),
        c = r(t, i),
        s = o(t, i);
      return (i.pure ? M : T)(a, c, s, t, i);
    }
    function q(t, e, n) {
      for (var r = e.length - 1; r >= 0; r--) {
        var o = e[r](t);
        if (o) return o;
      }
      return function(e, r) {
        throw new Error(
          "Invalid value of type " +
            typeof t +
            " for " +
            n +
            " argument when connecting component " +
            r.wrappedComponentName +
            "."
        );
      };
    }
    function N(t, e) {
      return t === e;
    }
    var L,
      D,
      F,
      U,
      $,
      W,
      B,
      H,
      K,
      Y,
      G,
      V,
      J = ((F = (D = void 0 === L ? {} : L).connectHOC),
      (U = void 0 === F ? w : F),
      ($ = D.mapStateToPropsFactories),
      (W = void 0 === $ ? A : $),
      (B = D.mapDispatchToPropsFactories),
      (H = void 0 === B ? P : B),
      (K = D.mergePropsFactories),
      (Y = void 0 === K ? z : K),
      (G = D.selectorFactory),
      (V = void 0 === G ? R : G),
      function(t, e, n, r) {
        void 0 === r && (r = {});
        var o = r,
          i = o.pure,
          c = void 0 === i || i,
          s = o.areStatesEqual,
          f = void 0 === s ? N : s,
          l = o.areOwnPropsEqual,
          p = void 0 === l ? S : l,
          d = o.areStatePropsEqual,
          h = void 0 === d ? S : d,
          v = o.areMergedPropsEqual,
          y = void 0 === v ? S : v,
          b = u(o, [
            "pure",
            "areStatesEqual",
            "areOwnPropsEqual",
            "areStatePropsEqual",
            "areMergedPropsEqual"
          ]),
          g = q(t, W, "mapStateToProps"),
          m = q(e, H, "mapDispatchToProps"),
          _ = q(n, Y, "mergeProps");
        return U(
          V,
          a(
            {
              methodName: "connect",
              getDisplayName: function(t) {
                return "Connect(" + t + ")";
              },
              shouldHandleStateChanges: Boolean(t),
              initMapStateToProps: g,
              initMapDispatchToProps: m,
              initMergeProps: _,
              pure: c,
              areStatesEqual: f,
              areOwnPropsEqual: p,
              areStatePropsEqual: h,
              areMergedPropsEqual: y
            },
            b
          )
        );
      });
    n.d(e, "Provider", function() {
      return r.default;
    }),
      n.d(e, "createProvider", function() {
        return r.createProvider;
      }),
      n.d(e, "connectAdvanced", function() {
        return w;
      }),
      n.d(e, "connect", function() {
        return J;
      });
  },
  function(t, e, n) {
    "use strict";
    function r(t) {
      "undefined" != typeof console &&
        "function" == typeof console.error &&
        console.error(t);
      try {
        throw new Error(t);
      } catch (t) {}
    }
    n.d(e, "a", function() {
      return r;
    });
  },
  function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
      return a;
    }),
      n.d(e, "c", function() {
        return u;
      }),
      n.d(e, "b", function() {
        return s;
      });
    var r = [],
      o = 0;
    function i(t) {
      try {
        u(), t();
      } finally {
        c();
      }
    }
    function a(t) {
      r.push(t), o || (u(), s());
    }
    function u() {
      o++;
    }
    function c() {
      o--;
    }
    function s() {
      c();
      for (var t = void 0; !o && void 0 !== (t = r.shift()); ) i(t);
    }
  },
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    (e.ANNOTATION = "ANNOTATION"),
      (e.TOGGLE_ENTITY = "TOGGLE_ENTITY"),
      (e.UPDATE_OCCURRENCES_FOR_ENTITY = "UPDATE_OCCURRENCES_FOR_ENTITY"),
      (e.TOGGLE_LINK = "TOGGLE_LINK"),
      (e.RECEIVE_ANALYSIS_RESULTS = "RECEIVE_ANALYSIS_RESULTS"),
      (e.SET_CURRENT_ENTITY = "SET_CURRENT_ENTITY"),
      (e.SET_ENTITY_FILTER = "SET_ENTITY_FILTER"),
      (e.EDITOR_SELECTION_CHANGED = "EDITOR_SELECTION_CHANGED");
  },
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.editorSelectionChanged = e.updateOccurrencesForEntity = e.toggleLink = e.toggleEntity = e.setEntityVisibility = e.setCurrentEntity = e.receiveAnalysisResults = e.setCurrentAnnotation = void 0);
    var r = (function(t) {
      if (t && t.__esModule) return t;
      var e = {};
      if (null != t)
        for (var n in t)
          Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
      return (e.default = t), e;
    })(n(15));
    (e.setCurrentAnnotation = function(t) {
      return { type: r.ANNOTATION, annotation: t };
    }),
      (e.receiveAnalysisResults = function(t) {
        return { type: r.RECEIVE_ANALYSIS_RESULTS, results: t };
      }),
      (e.setCurrentEntity = function(t) {
        return { type: r.SET_CURRENT_ENTITY, entity: t };
      }),
      (e.setEntityVisibility = function(t) {
        return { type: r.SET_ENTITY_FILTER, filter: t };
      }),
      (e.toggleEntity = function(t) {
        return { type: r.TOGGLE_ENTITY, entity: t };
      }),
      (e.toggleLink = function(t) {
        return { type: r.TOGGLE_LINK, entity: t };
      }),
      (e.updateOccurrencesForEntity = function(t, e) {
        return {
          type: r.UPDATE_OCCURRENCES_FOR_ENTITY,
          entityId: t,
          occurrences: e
        };
      }),
      (e.editorSelectionChanged = function(t) {
        return { type: r.EDITOR_SELECTION_CHANGED, selection: t };
      });
  },
  function(t, e, n) {
    "use strict";
    var r;
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.reducer = e.setValue = e.open = e.close = e.addEntitySuccess = e.addEntityRequest = e.createEntitySuccess = e.createEntityRequest = e.loadItemsError = e.loadItemsSuccess = e.loadItemsRequest = void 0);
    var o = n(111);
    function i(t, e, n) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (t[e] = n),
        t
      );
    }
    var a = (0, o.createActions)(
        "LOAD_ITEMS_REQUEST",
        "LOAD_ITEMS_SUCCESS",
        "LOAD_ITEMS_ERROR",
        "CREATE_ENTITY_REQUEST",
        "CREATE_ENTITY_SUCCESS",
        "ADD_ENTITY_REQUEST",
        "ADD_ENTITY_SUCCESS",
        "CLOSE",
        "OPEN",
        "SET_VALUE"
      ),
      u = a.loadItemsRequest,
      c = a.loadItemsSuccess,
      s = a.loadItemsError,
      f = a.createEntityRequest,
      l = a.createEntitySuccess,
      p = a.addEntityRequest,
      d = a.addEntitySuccess,
      h = a.close,
      v = a.open,
      y = a.setValue;
    (e.loadItemsRequest = u),
      (e.loadItemsSuccess = c),
      (e.loadItemsError = s),
      (e.createEntityRequest = f),
      (e.createEntitySuccess = l),
      (e.addEntityRequest = p),
      (e.addEntitySuccess = d),
      (e.close = h),
      (e.open = v),
      (e.setValue = y);
    e.reducer = (0, o.handleActions)(
      (i((r = {}), c, function(t, e) {
        return Object.assign({}, t, { items: e.payload });
      }),
      i(r, h, function(t) {
        return Object.assign({}, t, { open: !1 });
      }),
      i(r, v, function(t) {
        return Object.assign({}, t, { open: t.enabled });
      }),
      i(r, y, function(t, e) {
        return Object.assign({}, t, {
          value: e.payload,
          enabled: void 0 !== e.payload && "" !== e.payload
        });
      }),
      r),
      { open: !1, items: [], value: "", enabled: !1 }
    );
  },
  function(t, e, n) {
    "use strict";
    n.r(e),
      n.d(e, "createStore", function() {
        return u;
      }),
      n.d(e, "combineReducers", function() {
        return s;
      }),
      n.d(e, "bindActionCreators", function() {
        return l;
      }),
      n.d(e, "applyMiddleware", function() {
        return h;
      }),
      n.d(e, "compose", function() {
        return d;
      }),
      n.d(e, "__DO_NOT_USE__ActionTypes", function() {
        return i;
      });
    var r = n(25),
      o = function() {
        return Math.random()
          .toString(36)
          .substring(7)
          .split("")
          .join(".");
      },
      i = {
        INIT: "@@redux/INIT" + o(),
        REPLACE: "@@redux/REPLACE" + o(),
        PROBE_UNKNOWN_ACTION: function() {
          return "@@redux/PROBE_UNKNOWN_ACTION" + o();
        }
      };
    function a(t) {
      if ("object" != typeof t || null === t) return !1;
      for (var e = t; null !== Object.getPrototypeOf(e); )
        e = Object.getPrototypeOf(e);
      return Object.getPrototypeOf(t) === e;
    }
    function u(t, e, n) {
      var o;
      if (
        ("function" == typeof e && "function" == typeof n) ||
        ("function" == typeof n && "function" == typeof arguments[3])
      )
        throw new Error(
          "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function"
        );
      if (
        ("function" == typeof e && void 0 === n && ((n = e), (e = void 0)),
        void 0 !== n)
      ) {
        if ("function" != typeof n)
          throw new Error("Expected the enhancer to be a function.");
        return n(u)(t, e);
      }
      if ("function" != typeof t)
        throw new Error("Expected the reducer to be a function.");
      var c = t,
        s = e,
        f = [],
        l = f,
        p = !1;
      function d() {
        l === f && (l = f.slice());
      }
      function h() {
        if (p)
          throw new Error(
            "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store."
          );
        return s;
      }
      function v(t) {
        if ("function" != typeof t)
          throw new Error("Expected the listener to be a function.");
        if (p)
          throw new Error(
            "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details."
          );
        var e = !0;
        return (
          d(),
          l.push(t),
          function() {
            if (e) {
              if (p)
                throw new Error(
                  "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details."
                );
              (e = !1), d();
              var n = l.indexOf(t);
              l.splice(n, 1);
            }
          }
        );
      }
      function y(t) {
        if (!a(t))
          throw new Error(
            "Actions must be plain objects. Use custom middleware for async actions."
          );
        if (void 0 === t.type)
          throw new Error(
            'Actions may not have an undefined "type" property. Have you misspelled a constant?'
          );
        if (p) throw new Error("Reducers may not dispatch actions.");
        try {
          (p = !0), (s = c(s, t));
        } finally {
          p = !1;
        }
        for (var e = (f = l), n = 0; n < e.length; n++) {
          (0, e[n])();
        }
        return t;
      }
      return (
        y({ type: i.INIT }),
        ((o = {
          dispatch: y,
          subscribe: v,
          getState: h,
          replaceReducer: function(t) {
            if ("function" != typeof t)
              throw new Error("Expected the nextReducer to be a function.");
            (c = t), y({ type: i.REPLACE });
          }
        })[r.a] = function() {
          var t,
            e = v;
          return (
            ((t = {
              subscribe: function(t) {
                if ("object" != typeof t || null === t)
                  throw new TypeError("Expected the observer to be an object.");
                function n() {
                  t.next && t.next(h());
                }
                return n(), { unsubscribe: e(n) };
              }
            })[r.a] = function() {
              return this;
            }),
            t
          );
        }),
        o
      );
    }
    function c(t, e) {
      var n = e && e.type;
      return (
        "Given " +
        ((n && 'action "' + String(n) + '"') || "an action") +
        ', reducer "' +
        t +
        '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'
      );
    }
    function s(t) {
      for (var e = Object.keys(t), n = {}, r = 0; r < e.length; r++) {
        var o = e[r];
        0, "function" == typeof t[o] && (n[o] = t[o]);
      }
      var a,
        u = Object.keys(n);
      try {
        !(function(t) {
          Object.keys(t).forEach(function(e) {
            var n = t[e];
            if (void 0 === n(void 0, { type: i.INIT }))
              throw new Error(
                'Reducer "' +
                  e +
                  "\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined."
              );
            if (void 0 === n(void 0, { type: i.PROBE_UNKNOWN_ACTION() }))
              throw new Error(
                'Reducer "' +
                  e +
                  "\" returned undefined when probed with a random type. Don't try to handle " +
                  i.INIT +
                  ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.'
              );
          });
        })(n);
      } catch (t) {
        a = t;
      }
      return function(t, e) {
        if ((void 0 === t && (t = {}), a)) throw a;
        for (var r = !1, o = {}, i = 0; i < u.length; i++) {
          var s = u[i],
            f = n[s],
            l = t[s],
            p = f(l, e);
          if (void 0 === p) {
            var d = c(s, e);
            throw new Error(d);
          }
          (o[s] = p), (r = r || p !== l);
        }
        return r ? o : t;
      };
    }
    function f(t, e) {
      return function() {
        return e(t.apply(this, arguments));
      };
    }
    function l(t, e) {
      if ("function" == typeof t) return f(t, e);
      if ("object" != typeof t || null === t)
        throw new Error(
          "bindActionCreators expected an object or a function, instead received " +
            (null === t ? "null" : typeof t) +
            '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
        );
      for (var n = Object.keys(t), r = {}, o = 0; o < n.length; o++) {
        var i = n[o],
          a = t[i];
        "function" == typeof a && (r[i] = f(a, e));
      }
      return r;
    }
    function p(t, e, n) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (t[e] = n),
        t
      );
    }
    function d() {
      for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
        e[n] = arguments[n];
      return 0 === e.length
        ? function(t) {
            return t;
          }
        : 1 === e.length
        ? e[0]
        : e.reduce(function(t, e) {
            return function() {
              return t(e.apply(void 0, arguments));
            };
          });
    }
    function h() {
      for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
        e[n] = arguments[n];
      return function(t) {
        return function() {
          var n = t.apply(void 0, arguments),
            r = function() {
              throw new Error(
                "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch."
              );
            },
            o = {
              getState: n.getState,
              dispatch: function() {
                return r.apply(void 0, arguments);
              }
            },
            i = e.map(function(t) {
              return t(o);
            });
          return (function(t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = null != arguments[e] ? arguments[e] : {},
                r = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols &&
                (r = r.concat(
                  Object.getOwnPropertySymbols(n).filter(function(t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                  })
                )),
                r.forEach(function(e) {
                  p(t, e, n[e]);
                });
            }
            return t;
          })({}, n, { dispatch: (r = d.apply(void 0, i)(n.dispatch)) });
        };
      };
    }
  },
  function(t, e, n) {
    "use strict";
    t.exports = n(58);
  },
  function(t, e, n) {
    "use strict";
    n.r(e),
      n.d(e, "createProvider", function() {
        return c;
      });
    var r = n(21),
      o = n(3),
      i = n(5),
      a = n.n(i),
      u = n(11);
    n(13);
    function c(t) {
      var e;
      void 0 === t && (t = "store");
      var n = t + "Subscription",
        i = (function(e) {
          Object(r.a)(a, e);
          var i = a.prototype;
          function a(n, r) {
            var o;
            return ((o = e.call(this, n, r) || this)[t] = n.store), o;
          }
          return (
            (i.getChildContext = function() {
              var e;
              return ((e = {})[t] = this[t]), (e[n] = null), e;
            }),
            (i.render = function() {
              return o.Children.only(this.props.children);
            }),
            a
          );
        })(o.Component);
      return (
        (i.propTypes = {
          store: u.a.isRequired,
          children: a.a.element.isRequired
        }),
        (i.childContextTypes = (((e = {})[t] = u.a.isRequired),
        (e[n] = u.b),
        e)),
        i
      );
    }
    e.default = c();
  },
  function(t, e, n) {
    "use strict";
    function r(t, e) {
      (t.prototype = Object.create(e.prototype)),
        (t.prototype.constructor = t),
        (t.__proto__ = e);
    }
    n.d(e, "a", function() {
      return r;
    });
  },
  function(t, e, n) {
    "use strict";
    t.exports = function(t, e, n, r, o, i, a, u) {
      if (!t) {
        var c;
        if (void 0 === e)
          c = new Error(
            "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
          );
        else {
          var s = [n, r, o, i, a, u],
            f = 0;
          (c = new Error(
            e.replace(/%s/g, function() {
              return s[f++];
            })
          )).name = "Invariant Violation";
        }
        throw ((c.framesToPop = 1), c);
      }
    };
  },
  ,
  function(t, e, n) {
    "use strict";
    n.r(e);
    var r = n(2),
      o = n(10);
    function i(t, e) {
      for (
        var n = arguments.length, i = Array(n > 2 ? n - 2 : 0), a = 2;
        a < n;
        a++
      )
        i[a - 2] = arguments[a];
      return r.k.apply(void 0, [o.b, t, e].concat(i));
    }
    function a(t, e) {
      for (
        var n = arguments.length, i = Array(n > 2 ? n - 2 : 0), a = 2;
        a < n;
        a++
      )
        i[a - 2] = arguments[a];
      return r.k.apply(void 0, [o.d, t, e].concat(i));
    }
    function u(t, e, n) {
      for (
        var i = arguments.length, a = Array(i > 3 ? i - 3 : 0), u = 3;
        u < i;
        u++
      )
        a[u - 3] = arguments[u];
      return r.k.apply(void 0, [o.f, t, e, n].concat(a));
    }
    n.d(e, "take", function() {
      return r.s;
    }),
      n.d(e, "takem", function() {
        return r.t;
      }),
      n.d(e, "put", function() {
        return r.n;
      }),
      n.d(e, "all", function() {
        return r.b;
      }),
      n.d(e, "race", function() {
        return r.o;
      }),
      n.d(e, "call", function() {
        return r.e;
      }),
      n.d(e, "apply", function() {
        return r.c;
      }),
      n.d(e, "cps", function() {
        return r.h;
      }),
      n.d(e, "fork", function() {
        return r.k;
      }),
      n.d(e, "spawn", function() {
        return r.r;
      }),
      n.d(e, "join", function() {
        return r.m;
      }),
      n.d(e, "cancel", function() {
        return r.f;
      }),
      n.d(e, "select", function() {
        return r.p;
      }),
      n.d(e, "actionChannel", function() {
        return r.a;
      }),
      n.d(e, "cancelled", function() {
        return r.g;
      }),
      n.d(e, "flush", function() {
        return r.j;
      }),
      n.d(e, "getContext", function() {
        return r.l;
      }),
      n.d(e, "setContext", function() {
        return r.q;
      }),
      n.d(e, "takeEvery", function() {
        return i;
      }),
      n.d(e, "takeLatest", function() {
        return a;
      }),
      n.d(e, "throttle", function() {
        return u;
      });
  },
  function(t, e, n) {
    "use strict";
    (function(t, r) {
      var o,
        i = n(36);
      o =
        "undefined" != typeof self
          ? self
          : "undefined" != typeof window
          ? window
          : void 0 !== t
          ? t
          : r;
      var a = Object(i.a)(o);
      e.a = a;
    }.call(this, n(29), n(30)(t)));
  },
  function(t, e, n) {
    t.exports = (function t(e) {
      "use strict";
      var n = /^\0+/g,
        r = /[\0\r\f]/g,
        o = /: */g,
        i = /zoo|gra/,
        a = /([,: ])(transform)/g,
        u = /,+\s*(?![^(]*[)])/g,
        c = / +\s*(?![^(]*[)])/g,
        s = / *[\0] */g,
        f = /,\r+?/g,
        l = /([\t\r\n ])*\f?&/g,
        p = /:global\(((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g,
        d = /\W+/g,
        h = /@(k\w+)\s*(\S*)\s*/,
        v = /::(place)/g,
        y = /:(read-only)/g,
        b = /\s+(?=[{\];=:>])/g,
        g = /([[}=:>])\s+/g,
        m = /(\{[^{]+?);(?=\})/g,
        _ = /\s{2,}/g,
        w = /([^\(])(:+) */g,
        x = /[svh]\w+-[tblr]{2}/,
        O = /\(\s*(.*)\s*\)/g,
        S = /([\s\S]*?);/g,
        k = /-self|flex-/g,
        E = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
        j = /stretch|:\s*\w+\-(?:conte|avail)/,
        C = /([^-])(image-set\()/,
        P = "-webkit-",
        A = "-moz-",
        I = "-ms-",
        z = 59,
        T = 125,
        M = 123,
        R = 40,
        q = 41,
        N = 91,
        L = 93,
        D = 10,
        F = 13,
        U = 9,
        $ = 64,
        W = 32,
        B = 38,
        H = 45,
        K = 95,
        Y = 42,
        G = 44,
        V = 58,
        J = 39,
        Q = 34,
        X = 47,
        Z = 62,
        tt = 43,
        et = 126,
        nt = 0,
        rt = 12,
        ot = 11,
        it = 107,
        at = 109,
        ut = 115,
        ct = 112,
        st = 111,
        ft = 105,
        lt = 99,
        pt = 100,
        dt = 112,
        ht = 1,
        vt = 1,
        yt = 0,
        bt = 1,
        gt = 1,
        mt = 1,
        _t = 0,
        wt = 0,
        xt = 0,
        Ot = [],
        St = [],
        kt = 0,
        Et = null,
        jt = -2,
        Ct = -1,
        Pt = 0,
        At = 1,
        It = 2,
        zt = 3,
        Tt = 0,
        Mt = 1,
        Rt = "",
        qt = "",
        Nt = "";
      function Lt(t, e, o, i, a) {
        for (
          var u,
            c,
            f = 0,
            l = 0,
            p = 0,
            d = 0,
            b = 0,
            g = 0,
            m = 0,
            _ = 0,
            x = 0,
            S = 0,
            k = 0,
            E = 0,
            j = 0,
            C = 0,
            K = 0,
            _t = 0,
            St = 0,
            Et = 0,
            jt = 0,
            Ct = o.length,
            Ft = Ct - 1,
            Kt = "",
            Yt = "",
            Gt = "",
            Vt = "",
            Jt = "",
            Qt = "";
          K < Ct;

        ) {
          if (
            ((m = o.charCodeAt(K)),
            K === Ft &&
              l + d + p + f !== 0 &&
              (0 !== l && (m = l === X ? D : X), (d = p = f = 0), Ct++, Ft++),
            l + d + p + f === 0)
          ) {
            if (
              K === Ft &&
              (_t > 0 && (Yt = Yt.replace(r, "")), Yt.trim().length > 0)
            ) {
              switch (m) {
                case W:
                case U:
                case z:
                case F:
                case D:
                  break;
                default:
                  Yt += o.charAt(K);
              }
              m = z;
            }
            if (1 === St)
              switch (m) {
                case M:
                case T:
                case z:
                case Q:
                case J:
                case R:
                case q:
                case G:
                  St = 0;
                case U:
                case F:
                case D:
                case W:
                  break;
                default:
                  for (St = 0, jt = K, b = m, K--, m = z; jt < Ct; )
                    switch (o.charCodeAt(jt++)) {
                      case D:
                      case F:
                      case z:
                        ++K, (m = b), (jt = Ct);
                        break;
                      case V:
                        _t > 0 && (++K, (m = b));
                      case M:
                        jt = Ct;
                    }
              }
            switch (m) {
              case M:
                for (
                  Yt = Yt.trim(), b = Yt.charCodeAt(0), k = 1, jt = ++K;
                  K < Ct;

                ) {
                  switch ((m = o.charCodeAt(K))) {
                    case M:
                      k++;
                      break;
                    case T:
                      k--;
                      break;
                    case X:
                      switch ((g = o.charCodeAt(K + 1))) {
                        case Y:
                        case X:
                          K = Ht(g, K, Ft, o);
                      }
                      break;
                    case N:
                      m++;
                    case R:
                      m++;
                    case Q:
                    case J:
                      for (; K++ < Ft && o.charCodeAt(K) !== m; );
                  }
                  if (0 === k) break;
                  K++;
                }
                switch (
                  ((Gt = o.substring(jt, K)),
                  b === nt &&
                    (b = (Yt = Yt.replace(n, "").trim()).charCodeAt(0)),
                  b)
                ) {
                  case $:
                    switch (
                      (_t > 0 && (Yt = Yt.replace(r, "")),
                      (g = Yt.charCodeAt(1)))
                    ) {
                      case pt:
                      case at:
                      case ut:
                      case H:
                        u = e;
                        break;
                      default:
                        u = Ot;
                    }
                    if (
                      ((Gt = Lt(e, u, Gt, g, a + 1)),
                      (jt = Gt.length),
                      xt > 0 && 0 === jt && (jt = Yt.length),
                      kt > 0 &&
                        ((u = Dt(Ot, Yt, Et)),
                        (c = Bt(zt, Gt, u, e, vt, ht, jt, g, a, i)),
                        (Yt = u.join("")),
                        void 0 !== c &&
                          0 === (jt = (Gt = c.trim()).length) &&
                          ((g = 0), (Gt = ""))),
                      jt > 0)
                    )
                      switch (g) {
                        case ut:
                          Yt = Yt.replace(O, Wt);
                        case pt:
                        case at:
                        case H:
                          Gt = Yt + "{" + Gt + "}";
                          break;
                        case it:
                          (Yt = Yt.replace(h, "$1 $2" + (Mt > 0 ? Rt : ""))),
                            (Gt = Yt + "{" + Gt + "}"),
                            (Gt =
                              1 === gt || (2 === gt && $t("@" + Gt, 3))
                                ? "@" + P + Gt + "@" + Gt
                                : "@" + Gt);
                          break;
                        default:
                          (Gt = Yt + Gt), i === dt && ((Vt += Gt), (Gt = ""));
                      }
                    else Gt = "";
                    break;
                  default:
                    Gt = Lt(e, Dt(e, Yt, Et), Gt, i, a + 1);
                }
                (Jt += Gt),
                  (E = 0),
                  (St = 0),
                  (C = 0),
                  (_t = 0),
                  (Et = 0),
                  (j = 0),
                  (Yt = ""),
                  (Gt = ""),
                  (m = o.charCodeAt(++K));
                break;
              case T:
              case z:
                if (
                  ((Yt = (_t > 0 ? Yt.replace(r, "") : Yt).trim()),
                  (jt = Yt.length) > 1)
                )
                  switch (
                    (0 === C &&
                      ((b = Yt.charCodeAt(0)) === H || (b > 96 && b < 123)) &&
                      (jt = (Yt = Yt.replace(" ", ":")).length),
                    kt > 0 &&
                      void 0 !==
                        (c = Bt(At, Yt, e, t, vt, ht, Vt.length, i, a, i)) &&
                      0 === (jt = (Yt = c.trim()).length) &&
                      (Yt = "\0\0"),
                    (b = Yt.charCodeAt(0)),
                    (g = Yt.charCodeAt(1)),
                    b)
                  ) {
                    case nt:
                      break;
                    case $:
                      if (g === ft || g === lt) {
                        Qt += Yt + o.charAt(K);
                        break;
                      }
                    default:
                      if (Yt.charCodeAt(jt - 1) === V) break;
                      Vt += Ut(Yt, b, g, Yt.charCodeAt(2));
                  }
                (E = 0),
                  (St = 0),
                  (C = 0),
                  (_t = 0),
                  (Et = 0),
                  (Yt = ""),
                  (m = o.charCodeAt(++K));
            }
          }
          switch (m) {
            case F:
            case D:
              if (l + d + p + f + wt === 0)
                switch (S) {
                  case q:
                  case J:
                  case Q:
                  case $:
                  case et:
                  case Z:
                  case Y:
                  case tt:
                  case X:
                  case H:
                  case V:
                  case G:
                  case z:
                  case M:
                  case T:
                    break;
                  default:
                    C > 0 && (St = 1);
                }
              l === X
                ? (l = 0)
                : bt + E === 0 &&
                  i !== it &&
                  Yt.length > 0 &&
                  ((_t = 1), (Yt += "\0")),
                kt * Tt > 0 && Bt(Pt, Yt, e, t, vt, ht, Vt.length, i, a, i),
                (ht = 1),
                vt++;
              break;
            case z:
            case T:
              if (l + d + p + f === 0) {
                ht++;
                break;
              }
            default:
              switch ((ht++, (Kt = o.charAt(K)), m)) {
                case U:
                case W:
                  if (d + f + l === 0)
                    switch (_) {
                      case G:
                      case V:
                      case U:
                      case W:
                        Kt = "";
                        break;
                      default:
                        m !== W && (Kt = " ");
                    }
                  break;
                case nt:
                  Kt = "\\0";
                  break;
                case rt:
                  Kt = "\\f";
                  break;
                case ot:
                  Kt = "\\v";
                  break;
                case B:
                  d + l + f === 0 &&
                    bt > 0 &&
                    ((Et = 1), (_t = 1), (Kt = "\f" + Kt));
                  break;
                case 108:
                  if (d + l + f + yt === 0 && C > 0)
                    switch (K - C) {
                      case 2:
                        _ === ct && o.charCodeAt(K - 3) === V && (yt = _);
                      case 8:
                        x === st && (yt = x);
                    }
                  break;
                case V:
                  d + l + f === 0 && (C = K);
                  break;
                case G:
                  l + p + d + f === 0 && ((_t = 1), (Kt += "\r"));
                  break;
                case Q:
                case J:
                  0 === l && (d = d === m ? 0 : 0 === d ? m : d);
                  break;
                case N:
                  d + l + p === 0 && f++;
                  break;
                case L:
                  d + l + p === 0 && f--;
                  break;
                case q:
                  d + l + f === 0 && p--;
                  break;
                case R:
                  if (d + l + f === 0) {
                    if (0 === E)
                      switch (2 * _ + 3 * x) {
                        case 533:
                          break;
                        default:
                          (k = 0), (E = 1);
                      }
                    p++;
                  }
                  break;
                case $:
                  l + p + d + f + C + j === 0 && (j = 1);
                  break;
                case Y:
                case X:
                  if (d + f + p > 0) break;
                  switch (l) {
                    case 0:
                      switch (2 * m + 3 * o.charCodeAt(K + 1)) {
                        case 235:
                          l = X;
                          break;
                        case 220:
                          (jt = K), (l = Y);
                      }
                      break;
                    case Y:
                      m === X &&
                        _ === Y &&
                        jt + 2 !== K &&
                        (33 === o.charCodeAt(jt + 2) &&
                          (Vt += o.substring(jt, K + 1)),
                        (Kt = ""),
                        (l = 0));
                  }
              }
              if (0 === l) {
                if (bt + d + f + j === 0 && i !== it && m !== z)
                  switch (m) {
                    case G:
                    case et:
                    case Z:
                    case tt:
                    case q:
                    case R:
                      if (0 === E) {
                        switch (_) {
                          case U:
                          case W:
                          case D:
                          case F:
                            Kt += "\0";
                            break;
                          default:
                            Kt = "\0" + Kt + (m === G ? "" : "\0");
                        }
                        _t = 1;
                      } else
                        switch (m) {
                          case R:
                            C + 7 === K && 108 === _ && (C = 0), (E = ++k);
                            break;
                          case q:
                            0 == (E = --k) && ((_t = 1), (Kt += "\0"));
                        }
                      break;
                    case U:
                    case W:
                      switch (_) {
                        case nt:
                        case M:
                        case T:
                        case z:
                        case G:
                        case rt:
                        case U:
                        case W:
                        case D:
                        case F:
                          break;
                        default:
                          0 === E && ((_t = 1), (Kt += "\0"));
                      }
                  }
                (Yt += Kt), m !== W && m !== U && (S = m);
              }
          }
          (x = _), (_ = m), K++;
        }
        if (
          ((jt = Vt.length),
          xt > 0 &&
            0 === jt &&
            0 === Jt.length &&
            (0 === e[0].length) == 0 &&
            (i !== at || (1 === e.length && (bt > 0 ? qt : Nt) === e[0])) &&
            (jt = e.join(",").length + 2),
          jt > 0)
        ) {
          if (
            ((u =
              0 === bt && i !== it
                ? (function(t) {
                    for (
                      var e, n, o = 0, i = t.length, a = Array(i);
                      o < i;
                      ++o
                    ) {
                      for (
                        var u = t[o].split(s),
                          c = "",
                          f = 0,
                          l = 0,
                          p = 0,
                          d = 0,
                          h = u.length;
                        f < h;
                        ++f
                      )
                        if (!(0 === (l = (n = u[f]).length) && h > 1)) {
                          if (
                            ((p = c.charCodeAt(c.length - 1)),
                            (d = n.charCodeAt(0)),
                            (e = ""),
                            0 !== f)
                          )
                            switch (p) {
                              case Y:
                              case et:
                              case Z:
                              case tt:
                              case W:
                              case R:
                                break;
                              default:
                                e = " ";
                            }
                          switch (d) {
                            case B:
                              n = e + qt;
                            case et:
                            case Z:
                            case tt:
                            case W:
                            case q:
                            case R:
                              break;
                            case N:
                              n = e + n + qt;
                              break;
                            case V:
                              switch (
                                2 * n.charCodeAt(1) + 3 * n.charCodeAt(2)
                              ) {
                                case 530:
                                  if (mt > 0) {
                                    n = e + n.substring(8, l - 1);
                                    break;
                                  }
                                default:
                                  (f < 1 || u[f - 1].length < 1) &&
                                    (n = e + qt + n);
                              }
                              break;
                            case G:
                              e = "";
                            default:
                              n =
                                l > 1 && n.indexOf(":") > 0
                                  ? e + n.replace(w, "$1" + qt + "$2")
                                  : e + n + qt;
                          }
                          c += n;
                        }
                      a[o] = c.replace(r, "").trim();
                    }
                    return a;
                  })(e)
                : e),
            kt > 0 &&
              void 0 !== (c = Bt(It, Vt, u, t, vt, ht, jt, i, a, i)) &&
              0 === (Vt = c).length)
          )
            return Qt + Vt + Jt;
          if (((Vt = u.join(",") + "{" + Vt + "}"), gt * yt != 0)) {
            switch ((2 !== gt || $t(Vt, 2) || (yt = 0), yt)) {
              case st:
                Vt = Vt.replace(y, ":" + A + "$1") + Vt;
                break;
              case ct:
                Vt =
                  Vt.replace(v, "::" + P + "input-$1") +
                  Vt.replace(v, "::" + A + "$1") +
                  Vt.replace(v, ":" + I + "input-$1") +
                  Vt;
            }
            yt = 0;
          }
        }
        return Qt + Vt + Jt;
      }
      function Dt(t, e, n) {
        var r = e.trim().split(f),
          o = r,
          i = r.length,
          a = t.length;
        switch (a) {
          case 0:
          case 1:
            for (var u = 0, c = 0 === a ? "" : t[0] + " "; u < i; ++u)
              o[u] = Ft(c, o[u], n, a).trim();
            break;
          default:
            for (var u = 0, s = 0, o = []; u < i; ++u)
              for (var l = 0; l < a; ++l)
                o[s++] = Ft(t[l] + " ", r[u], n, a).trim();
        }
        return o;
      }
      function Ft(t, e, n, r) {
        var o = e,
          i = o.charCodeAt(0);
        switch ((i < 33 && (i = (o = o.trim()).charCodeAt(0)), i)) {
          case B:
            switch (bt + r) {
              case 0:
              case 1:
                if (0 === t.trim().length) break;
              default:
                return o.replace(l, "$1" + t.trim());
            }
            break;
          case V:
            switch (o.charCodeAt(1)) {
              case 103:
                if (mt > 0 && bt > 0)
                  return o.replace(p, "$1").replace(l, "$1" + Nt);
                break;
              default:
                return t.trim() + o.replace(l, "$1" + t.trim());
            }
          default:
            if (n * bt > 0 && o.indexOf("\f") > 0)
              return o.replace(
                l,
                (t.charCodeAt(0) === V ? "" : "$1") + t.trim()
              );
        }
        return t + o;
      }
      function Ut(t, e, n, r) {
        var s,
          f = 0,
          l = t + ";",
          p = 2 * e + 3 * n + 4 * r;
        if (944 === p)
          return (function(t) {
            var e = t.length,
              n = t.indexOf(":", 9) + 1,
              r = t.substring(0, n).trim(),
              o = t.substring(n, e - 1).trim();
            switch (t.charCodeAt(9) * Mt) {
              case 0:
                break;
              case H:
                if (110 !== t.charCodeAt(10)) break;
              default:
                for (
                  var i = o.split(((o = ""), u)), a = 0, n = 0, e = i.length;
                  a < e;
                  n = 0, ++a
                ) {
                  for (var s = i[a], f = s.split(c); (s = f[n]); ) {
                    var l = s.charCodeAt(0);
                    if (
                      1 === Mt &&
                      ((l > $ && l < 90) ||
                        (l > 96 && l < 123) ||
                        l === K ||
                        (l === H && s.charCodeAt(1) !== H))
                    )
                      switch (isNaN(parseFloat(s)) + (-1 !== s.indexOf("("))) {
                        case 1:
                          switch (s) {
                            case "infinite":
                            case "alternate":
                            case "backwards":
                            case "running":
                            case "normal":
                            case "forwards":
                            case "both":
                            case "none":
                            case "linear":
                            case "ease":
                            case "ease-in":
                            case "ease-out":
                            case "ease-in-out":
                            case "paused":
                            case "reverse":
                            case "alternate-reverse":
                            case "inherit":
                            case "initial":
                            case "unset":
                            case "step-start":
                            case "step-end":
                              break;
                            default:
                              s += Rt;
                          }
                      }
                    f[n++] = s;
                  }
                  o += (0 === a ? "" : ",") + f.join(" ");
                }
            }
            return (
              (o = r + o + ";"),
              1 === gt || (2 === gt && $t(o, 1)) ? P + o + o : o
            );
          })(l);
        if (0 === gt || (2 === gt && !$t(l, 1))) return l;
        switch (p) {
          case 1015:
            return 97 === l.charCodeAt(10) ? P + l + l : l;
          case 951:
            return 116 === l.charCodeAt(3) ? P + l + l : l;
          case 963:
            return 110 === l.charCodeAt(5) ? P + l + l : l;
          case 1009:
            if (100 !== l.charCodeAt(4)) break;
          case 969:
          case 942:
            return P + l + l;
          case 978:
            return P + l + A + l + l;
          case 1019:
          case 983:
            return P + l + A + l + I + l + l;
          case 883:
            return l.charCodeAt(8) === H
              ? P + l + l
              : l.indexOf("image-set(", 11) > 0
              ? l.replace(C, "$1" + P + "$2") + l
              : l;
          case 932:
            if (l.charCodeAt(4) === H)
              switch (l.charCodeAt(5)) {
                case 103:
                  return (
                    P +
                    "box-" +
                    l.replace("-grow", "") +
                    P +
                    l +
                    I +
                    l.replace("grow", "positive") +
                    l
                  );
                case 115:
                  return P + l + I + l.replace("shrink", "negative") + l;
                case 98:
                  return P + l + I + l.replace("basis", "preferred-size") + l;
              }
            return P + l + I + l + l;
          case 964:
            return P + l + I + "flex-" + l + l;
          case 1023:
            if (99 !== l.charCodeAt(8)) break;
            return (
              (s = l
                .substring(l.indexOf(":", 15))
                .replace("flex-", "")
                .replace("space-between", "justify")),
              P + "box-pack" + s + P + l + I + "flex-pack" + s + l
            );
          case 1005:
            return i.test(l)
              ? l.replace(o, ":" + P) + l.replace(o, ":" + A) + l
              : l;
          case 1e3:
            switch (
              ((s = l.substring(13).trim()),
              (f = s.indexOf("-") + 1),
              s.charCodeAt(0) + s.charCodeAt(f))
            ) {
              case 226:
                s = l.replace(x, "tb");
                break;
              case 232:
                s = l.replace(x, "tb-rl");
                break;
              case 220:
                s = l.replace(x, "lr");
                break;
              default:
                return l;
            }
            return P + l + I + s + l;
          case 1017:
            if (-1 === l.indexOf("sticky", 9)) return l;
          case 975:
            switch (
              ((f = (l = t).length - 10),
              (s = (33 === l.charCodeAt(f) ? l.substring(0, f) : l)
                .substring(t.indexOf(":", 7) + 1)
                .trim()),
              (p = s.charCodeAt(0) + (0 | s.charCodeAt(7))))
            ) {
              case 203:
                if (s.charCodeAt(8) < 111) break;
              case 115:
                l = l.replace(s, P + s) + ";" + l;
                break;
              case 207:
              case 102:
                l =
                  l.replace(s, P + (p > 102 ? "inline-" : "") + "box") +
                  ";" +
                  l.replace(s, P + s) +
                  ";" +
                  l.replace(s, I + s + "box") +
                  ";" +
                  l;
            }
            return l + ";";
          case 938:
            if (l.charCodeAt(5) === H)
              switch (l.charCodeAt(6)) {
                case 105:
                  return (
                    (s = l.replace("-items", "")),
                    P + l + P + "box-" + s + I + "flex-" + s + l
                  );
                case 115:
                  return P + l + I + "flex-item-" + l.replace(k, "") + l;
                default:
                  return (
                    P +
                    l +
                    I +
                    "flex-line-pack" +
                    l.replace("align-content", "").replace(k, "") +
                    l
                  );
              }
            break;
          case 973:
          case 989:
            if (l.charCodeAt(3) !== H || 122 === l.charCodeAt(4)) break;
          case 931:
          case 953:
            if (!0 === j.test(t))
              return 115 === (s = t.substring(t.indexOf(":") + 1)).charCodeAt(0)
                ? Ut(t.replace("stretch", "fill-available"), e, n, r).replace(
                    ":fill-available",
                    ":stretch"
                  )
                : l.replace(s, P + s) +
                    l.replace(s, A + s.replace("fill-", "")) +
                    l;
            break;
          case 962:
            if (
              ((l = P + l + (102 === l.charCodeAt(5) ? I + l : "") + l),
              n + r === 211 &&
                105 === l.charCodeAt(13) &&
                l.indexOf("transform", 10) > 0)
            )
              return (
                l
                  .substring(0, l.indexOf(";", 27) + 1)
                  .replace(a, "$1" + P + "$2") + l
              );
        }
        return l;
      }
      function $t(t, e) {
        var n = t.indexOf(1 === e ? ":" : "{"),
          r = t.substring(0, 3 !== e ? n : 10),
          o = t.substring(n + 1, t.length - 1);
        return Et(2 !== e ? r : r.replace(E, "$1"), o, e);
      }
      function Wt(t, e) {
        var n = Ut(e, e.charCodeAt(0), e.charCodeAt(1), e.charCodeAt(2));
        return n !== e + ";"
          ? n.replace(S, " or ($1)").substring(4)
          : "(" + e + ")";
      }
      function Bt(t, e, n, r, o, i, a, u, c, s) {
        for (var f, l = 0, p = e; l < kt; ++l)
          switch ((f = St[l].call(Yt, t, p, n, r, o, i, a, u, c, s))) {
            case void 0:
            case !1:
            case !0:
            case null:
              break;
            default:
              p = f;
          }
        if (p !== e) return p;
      }
      function Ht(t, e, n, r) {
        for (var o = e + 1; o < n; ++o)
          switch (r.charCodeAt(o)) {
            case X:
              if (t === Y && r.charCodeAt(o - 1) === Y && e + 2 !== o)
                return o + 1;
              break;
            case D:
              if (t === X) return o + 1;
          }
        return o;
      }
      function Kt(t) {
        for (var e in t) {
          var n = t[e];
          switch (e) {
            case "keyframe":
              Mt = 0 | n;
              break;
            case "global":
              mt = 0 | n;
              break;
            case "cascade":
              bt = 0 | n;
              break;
            case "compress":
              _t = 0 | n;
              break;
            case "semicolon":
              wt = 0 | n;
              break;
            case "preserve":
              xt = 0 | n;
              break;
            case "prefix":
              (Et = null),
                n
                  ? "function" != typeof n
                    ? (gt = 1)
                    : ((gt = 2), (Et = n))
                  : (gt = 0);
          }
        }
        return Kt;
      }
      function Yt(e, n) {
        if (void 0 !== this && this.constructor === Yt) return t(e);
        var o = e,
          i = o.charCodeAt(0);
        i < 33 && (i = (o = o.trim()).charCodeAt(0)),
          Mt > 0 && (Rt = o.replace(d, i === N ? "" : "-")),
          (i = 1),
          1 === bt ? (Nt = o) : (qt = o);
        var a,
          u = [Nt];
        kt > 0 &&
          void 0 !== (a = Bt(Ct, n, u, u, vt, ht, 0, 0, 0, 0)) &&
          "string" == typeof a &&
          (n = a);
        var c = Lt(Ot, u, n, 0, 0);
        return (
          kt > 0 &&
            void 0 !== (a = Bt(jt, c, u, u, vt, ht, c.length, 0, 0, 0)) &&
            "string" != typeof (c = a) &&
            (i = 0),
          (Rt = ""),
          (Nt = ""),
          (qt = ""),
          (yt = 0),
          (vt = 1),
          (ht = 1),
          _t * i == 0
            ? c
            : (function(t) {
                return t
                  .replace(r, "")
                  .replace(b, "")
                  .replace(g, "$1")
                  .replace(m, "$1")
                  .replace(_, " ");
              })(c)
        );
      }
      return (
        (Yt.use = function t(e) {
          switch (e) {
            case void 0:
            case null:
              kt = St.length = 0;
              break;
            default:
              if ("function" == typeof e) St[kt++] = e;
              else if ("object" == typeof e)
                for (var n = 0, r = e.length; n < r; ++n) t(e[n]);
              else Tt = 0 | !!e;
          }
          return t;
        }),
        (Yt.set = Kt),
        void 0 !== e && Kt(e),
        Yt
      );
    })(null);
  },
  function(t, e, n) {
    "use strict";
    var r = {
        childContextTypes: !0,
        contextTypes: !0,
        defaultProps: !0,
        displayName: !0,
        getDefaultProps: !0,
        getDerivedStateFromProps: !0,
        mixins: !0,
        propTypes: !0,
        type: !0
      },
      o = {
        name: !0,
        length: !0,
        prototype: !0,
        caller: !0,
        callee: !0,
        arguments: !0,
        arity: !0
      },
      i = Object.defineProperty,
      a = Object.getOwnPropertyNames,
      u = Object.getOwnPropertySymbols,
      c = Object.getOwnPropertyDescriptor,
      s = Object.getPrototypeOf,
      f = s && s(Object);
    t.exports = function t(e, n, l) {
      if ("string" != typeof n) {
        if (f) {
          var p = s(n);
          p && p !== f && t(e, p, l);
        }
        var d = a(n);
        u && (d = d.concat(u(n)));
        for (var h = 0; h < d.length; ++h) {
          var v = d[h];
          if (!(r[v] || o[v] || (l && l[v]))) {
            var y = c(n, v);
            try {
              i(e, v, y);
            } catch (t) {}
          }
        }
        return e;
      }
      return e;
    };
  },
  function(t, e, n) {
    var r = n(84);
    t.exports = function(t) {
      return r(t).replace(/\s(\w)/g, function(t, e) {
        return e.toUpperCase();
      });
    };
  },
  function(t, e) {
    var n;
    n = (function() {
      return this;
    })();
    try {
      n = n || new Function("return this")();
    } catch (t) {
      "object" == typeof window && (n = window);
    }
    t.exports = n;
  },
  function(t, e) {
    t.exports = function(t) {
      if (!t.webpackPolyfill) {
        var e = Object.create(t);
        e.children || (e.children = []),
          Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function() {
              return e.l;
            }
          }),
          Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function() {
              return e.i;
            }
          }),
          Object.defineProperty(e, "exports", { enumerable: !0 }),
          (e.webpackPolyfill = 1);
      }
      return e;
    };
  },
  function(t, e, n) {
    (function(t) {
      !(function(e) {
        "use strict";
        function n(t, e) {
          (t.super_ = e),
            (t.prototype = Object.create(e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }));
        }
        function r(t, e) {
          Object.defineProperty(this, "kind", { value: t, enumerable: !0 }),
            e &&
              e.length &&
              Object.defineProperty(this, "path", { value: e, enumerable: !0 });
        }
        function o(t, e, n) {
          o.super_.call(this, "E", t),
            Object.defineProperty(this, "lhs", { value: e, enumerable: !0 }),
            Object.defineProperty(this, "rhs", { value: n, enumerable: !0 });
        }
        function i(t, e) {
          i.super_.call(this, "N", t),
            Object.defineProperty(this, "rhs", { value: e, enumerable: !0 });
        }
        function a(t, e) {
          a.super_.call(this, "D", t),
            Object.defineProperty(this, "lhs", { value: e, enumerable: !0 });
        }
        function u(t, e, n) {
          u.super_.call(this, "A", t),
            Object.defineProperty(this, "index", { value: e, enumerable: !0 }),
            Object.defineProperty(this, "item", { value: n, enumerable: !0 });
        }
        function c(t, e, n) {
          var r = t.slice((n || e) + 1 || t.length);
          return (t.length = e < 0 ? t.length + e : e), t.push.apply(t, r), t;
        }
        function s(t) {
          var e = void 0 === t ? "undefined" : O(t);
          return "object" !== e
            ? e
            : t === Math
            ? "math"
            : null === t
            ? "null"
            : Array.isArray(t)
            ? "array"
            : "[object Date]" === Object.prototype.toString.call(t)
            ? "date"
            : "function" == typeof t.toString && /^\/.*\//.test(t.toString())
            ? "regexp"
            : "object";
        }
        function f(t, e, n, r, l, p, d) {
          d = d || [];
          var h = (l = l || []).slice(0);
          if (void 0 !== p) {
            if (r) {
              if ("function" == typeof r && r(h, p)) return;
              if ("object" === (void 0 === r ? "undefined" : O(r))) {
                if (r.prefilter && r.prefilter(h, p)) return;
                if (r.normalize) {
                  var v = r.normalize(h, p, t, e);
                  v && ((t = v[0]), (e = v[1]));
                }
              }
            }
            h.push(p);
          }
          "regexp" === s(t) &&
            "regexp" === s(e) &&
            ((t = t.toString()), (e = e.toString()));
          var y = void 0 === t ? "undefined" : O(t),
            b = void 0 === e ? "undefined" : O(e),
            g =
              "undefined" !== y ||
              (d &&
                d[d.length - 1].lhs &&
                d[d.length - 1].lhs.hasOwnProperty(p)),
            m =
              "undefined" !== b ||
              (d &&
                d[d.length - 1].rhs &&
                d[d.length - 1].rhs.hasOwnProperty(p));
          if (!g && m) n(new i(h, e));
          else if (!m && g) n(new a(h, t));
          else if (s(t) !== s(e)) n(new o(h, t, e));
          else if ("date" === s(t) && t - e != 0) n(new o(h, t, e));
          else if ("object" === y && null !== t && null !== e)
            if (
              d.filter(function(e) {
                return e.lhs === t;
              }).length
            )
              t !== e && n(new o(h, t, e));
            else {
              if ((d.push({ lhs: t, rhs: e }), Array.isArray(t))) {
                var _;
                for (t.length, _ = 0; _ < t.length; _++)
                  _ >= e.length
                    ? n(new u(h, _, new a(void 0, t[_])))
                    : f(t[_], e[_], n, r, h, _, d);
                for (; _ < e.length; ) n(new u(h, _, new i(void 0, e[_++])));
              } else {
                var w = Object.keys(t),
                  x = Object.keys(e);
                w.forEach(function(o, i) {
                  var a = x.indexOf(o);
                  a >= 0
                    ? (f(t[o], e[o], n, r, h, o, d), (x = c(x, a)))
                    : f(t[o], void 0, n, r, h, o, d);
                }),
                  x.forEach(function(t) {
                    f(void 0, e[t], n, r, h, t, d);
                  });
              }
              d.length = d.length - 1;
            }
          else
            t !== e &&
              (("number" === y && isNaN(t) && isNaN(e)) || n(new o(h, t, e)));
        }
        function l(t, e, n, r) {
          return (
            (r = r || []),
            f(
              t,
              e,
              function(t) {
                t && r.push(t);
              },
              n
            ),
            r.length ? r : void 0
          );
        }
        function p(t, e, n) {
          if (t && e && n && n.kind) {
            for (
              var r = t, o = -1, i = n.path ? n.path.length - 1 : 0;
              ++o < i;

            )
              void 0 === r[n.path[o]] &&
                (r[n.path[o]] = "number" == typeof n.path[o] ? [] : {}),
                (r = r[n.path[o]]);
            switch (n.kind) {
              case "A":
                !(function t(e, n, r) {
                  if (r.path && r.path.length) {
                    var o,
                      i = e[n],
                      a = r.path.length - 1;
                    for (o = 0; o < a; o++) i = i[r.path[o]];
                    switch (r.kind) {
                      case "A":
                        t(i[r.path[o]], r.index, r.item);
                        break;
                      case "D":
                        delete i[r.path[o]];
                        break;
                      case "E":
                      case "N":
                        i[r.path[o]] = r.rhs;
                    }
                  } else
                    switch (r.kind) {
                      case "A":
                        t(e[n], r.index, r.item);
                        break;
                      case "D":
                        e = c(e, n);
                        break;
                      case "E":
                      case "N":
                        e[n] = r.rhs;
                    }
                  return e;
                })(n.path ? r[n.path[o]] : r, n.index, n.item);
                break;
              case "D":
                delete r[n.path[o]];
                break;
              case "E":
              case "N":
                r[n.path[o]] = n.rhs;
            }
          }
        }
        function d(t) {
          return "color: " + E[t].color + "; font-weight: bold";
        }
        function h(t, e, n, r) {
          var o = l(t, e);
          try {
            r ? n.groupCollapsed("diff") : n.group("diff");
          } catch (t) {
            n.log("diff");
          }
          o
            ? o.forEach(function(t) {
                var e = t.kind,
                  r = (function(t) {
                    var e = t.kind,
                      n = t.path,
                      r = t.lhs,
                      o = t.rhs,
                      i = t.index,
                      a = t.item;
                    switch (e) {
                      case "E":
                        return [n.join("."), r, "→", o];
                      case "N":
                        return [n.join("."), o];
                      case "D":
                        return [n.join(".")];
                      case "A":
                        return [n.join(".") + "[" + i + "]", a];
                      default:
                        return [];
                    }
                  })(t);
                n.log.apply(n, ["%c " + E[e].text, d(e)].concat(S(r)));
              })
            : n.log("—— no diff ——");
          try {
            n.groupEnd();
          } catch (t) {
            n.log("—— diff end —— ");
          }
        }
        function v(t, e, n, r) {
          switch (void 0 === t ? "undefined" : O(t)) {
            case "object":
              return "function" == typeof t[r] ? t[r].apply(t, S(n)) : t[r];
            case "function":
              return t(e);
            default:
              return t;
          }
        }
        function y(t, e) {
          var n = e.logger,
            r = e.actionTransformer,
            o = e.titleFormatter,
            i =
              void 0 === o
                ? (function(t) {
                    var e = t.timestamp,
                      n = t.duration;
                    return function(t, r, o) {
                      var i = ["action"];
                      return (
                        i.push("%c" + String(t.type)),
                        e && i.push("%c@ " + r),
                        n && i.push("%c(in " + o.toFixed(2) + " ms)"),
                        i.join(" ")
                      );
                    };
                  })(e)
                : o,
            a = e.collapsed,
            u = e.colors,
            c = e.level,
            s = e.diff,
            f = void 0 === e.titleFormatter;
          t.forEach(function(o, l) {
            var p = o.started,
              d = o.startedTime,
              y = o.action,
              b = o.prevState,
              g = o.error,
              m = o.took,
              _ = o.nextState,
              x = t[l + 1];
            x && ((_ = x.prevState), (m = x.started - p));
            var O = r(y),
              S =
                "function" == typeof a
                  ? a(
                      function() {
                        return _;
                      },
                      y,
                      o
                    )
                  : a,
              k = w(d),
              E = u.title ? "color: " + u.title(O) + ";" : "",
              j = ["color: gray; font-weight: lighter;"];
            j.push(E),
              e.timestamp && j.push("color: gray; font-weight: lighter;"),
              e.duration && j.push("color: gray; font-weight: lighter;");
            var C = i(O, k, m);
            try {
              S
                ? u.title && f
                  ? n.groupCollapsed.apply(n, ["%c " + C].concat(j))
                  : n.groupCollapsed(C)
                : u.title && f
                ? n.group.apply(n, ["%c " + C].concat(j))
                : n.group(C);
            } catch (t) {
              n.log(C);
            }
            var P = v(c, O, [b], "prevState"),
              A = v(c, O, [O], "action"),
              I = v(c, O, [g, b], "error"),
              z = v(c, O, [_], "nextState");
            if (P)
              if (u.prevState) {
                var T = "color: " + u.prevState(b) + "; font-weight: bold";
                n[P]("%c prev state", T, b);
              } else n[P]("prev state", b);
            if (A)
              if (u.action) {
                var M = "color: " + u.action(O) + "; font-weight: bold";
                n[A]("%c action    ", M, O);
              } else n[A]("action    ", O);
            if (g && I)
              if (u.error) {
                var R = "color: " + u.error(g, b) + "; font-weight: bold;";
                n[I]("%c error     ", R, g);
              } else n[I]("error     ", g);
            if (z)
              if (u.nextState) {
                var q = "color: " + u.nextState(_) + "; font-weight: bold";
                n[z]("%c next state", q, _);
              } else n[z]("next state", _);
            s && h(b, _, n, S);
            try {
              n.groupEnd();
            } catch (t) {
              n.log("—— log end ——");
            }
          });
        }
        function b() {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            e = Object.assign({}, j, t),
            n = e.logger,
            r = e.stateTransformer,
            o = e.errorTransformer,
            i = e.predicate,
            a = e.logErrors,
            u = e.diffPredicate;
          if (void 0 === n)
            return function() {
              return function(t) {
                return function(e) {
                  return t(e);
                };
              };
            };
          if (t.getState && t.dispatch)
            return (
              console.error(
                "[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"
              ),
              function() {
                return function(t) {
                  return function(e) {
                    return t(e);
                  };
                };
              }
            );
          var c = [];
          return function(t) {
            var n = t.getState;
            return function(t) {
              return function(s) {
                if ("function" == typeof i && !i(n, s)) return t(s);
                var f = {};
                c.push(f),
                  (f.started = x.now()),
                  (f.startedTime = new Date()),
                  (f.prevState = r(n())),
                  (f.action = s);
                var l = void 0;
                if (a)
                  try {
                    l = t(s);
                  } catch (t) {
                    f.error = o(t);
                  }
                else l = t(s);
                (f.took = x.now() - f.started), (f.nextState = r(n()));
                var p = e.diff && "function" == typeof u ? u(n, s) : e.diff;
                if (
                  (y(c, Object.assign({}, e, { diff: p })),
                  (c.length = 0),
                  f.error)
                )
                  throw f.error;
                return l;
              };
            };
          };
        }
        var g,
          m,
          _ = function(t, e) {
            return (
              (function(t, e) {
                return new Array(e + 1).join(t);
              })("0", e - t.toString().length) + t
            );
          },
          w = function(t) {
            return (
              _(t.getHours(), 2) +
              ":" +
              _(t.getMinutes(), 2) +
              ":" +
              _(t.getSeconds(), 2) +
              "." +
              _(t.getMilliseconds(), 3)
            );
          },
          x =
            "undefined" != typeof performance &&
            null !== performance &&
            "function" == typeof performance.now
              ? performance
              : Date,
          O =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function(t) {
                  return typeof t;
                }
              : function(t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                },
          S = function(t) {
            if (Array.isArray(t)) {
              for (var e = 0, n = Array(t.length); e < t.length; e++)
                n[e] = t[e];
              return n;
            }
            return Array.from(t);
          },
          k = [];
        (g =
          "object" === (void 0 === t ? "undefined" : O(t)) && t
            ? t
            : "undefined" != typeof window
            ? window
            : {}),
          (m = g.DeepDiff) &&
            k.push(function() {
              void 0 !== m &&
                g.DeepDiff === l &&
                ((g.DeepDiff = m), (m = void 0));
            }),
          n(o, r),
          n(i, r),
          n(a, r),
          n(u, r),
          Object.defineProperties(l, {
            diff: { value: l, enumerable: !0 },
            observableDiff: { value: f, enumerable: !0 },
            applyDiff: {
              value: function(t, e, n) {
                t &&
                  e &&
                  f(t, e, function(r) {
                    (n && !n(t, e, r)) || p(t, e, r);
                  });
              },
              enumerable: !0
            },
            applyChange: { value: p, enumerable: !0 },
            revertChange: {
              value: function(t, e, n) {
                if (t && e && n && n.kind) {
                  var r,
                    o,
                    i = t;
                  for (o = n.path.length - 1, r = 0; r < o; r++)
                    void 0 === i[n.path[r]] && (i[n.path[r]] = {}),
                      (i = i[n.path[r]]);
                  switch (n.kind) {
                    case "A":
                      !(function t(e, n, r) {
                        if (r.path && r.path.length) {
                          var o,
                            i = e[n],
                            a = r.path.length - 1;
                          for (o = 0; o < a; o++) i = i[r.path[o]];
                          switch (r.kind) {
                            case "A":
                              t(i[r.path[o]], r.index, r.item);
                              break;
                            case "D":
                            case "E":
                              i[r.path[o]] = r.lhs;
                              break;
                            case "N":
                              delete i[r.path[o]];
                          }
                        } else
                          switch (r.kind) {
                            case "A":
                              t(e[n], r.index, r.item);
                              break;
                            case "D":
                            case "E":
                              e[n] = r.lhs;
                              break;
                            case "N":
                              e = c(e, n);
                          }
                        return e;
                      })(i[n.path[r]], n.index, n.item);
                      break;
                    case "D":
                    case "E":
                      i[n.path[r]] = n.lhs;
                      break;
                    case "N":
                      delete i[n.path[r]];
                  }
                }
              },
              enumerable: !0
            },
            isConflict: {
              value: function() {
                return void 0 !== m;
              },
              enumerable: !0
            },
            noConflict: {
              value: function() {
                return (
                  k &&
                    (k.forEach(function(t) {
                      t();
                    }),
                    (k = null)),
                  l
                );
              },
              enumerable: !0
            }
          });
        var E = {
            E: { color: "#2196F3", text: "CHANGED:" },
            N: { color: "#4CAF50", text: "ADDED:" },
            D: { color: "#F44336", text: "DELETED:" },
            A: { color: "#2196F3", text: "ARRAY:" }
          },
          j = {
            level: "log",
            logger: console,
            logErrors: !0,
            collapsed: void 0,
            predicate: void 0,
            duration: !1,
            timestamp: !0,
            stateTransformer: function(t) {
              return t;
            },
            actionTransformer: function(t) {
              return t;
            },
            errorTransformer: function(t) {
              return t;
            },
            colors: {
              title: function() {
                return "inherit";
              },
              prevState: function() {
                return "#9E9E9E";
              },
              action: function() {
                return "#03A9F4";
              },
              nextState: function() {
                return "#4CAF50";
              },
              error: function() {
                return "#F20404";
              }
            },
            diff: !1,
            diffPredicate: void 0,
            transformer: void 0
          },
          C = function() {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              e = t.dispatch,
              n = t.getState;
            return "function" == typeof e || "function" == typeof n
              ? b()({ dispatch: e, getState: n })
              : void console.error(
                  "\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n"
                );
          };
        (e.defaults = j),
          (e.createLogger = b),
          (e.logger = C),
          (e.default = C),
          Object.defineProperty(e, "__esModule", { value: !0 });
      })(e);
    }.call(this, n(29)));
  },
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r,
      o,
      i,
      a = ((r = [
        "\n\tdisplay: ",
        " !important;\n\tposition: absolute;\n\tright: 20px;\n\ttop: 8px;\n\tfont-size: 14px;\n\tline-height: 1;\n\tcolor: #cbcbcb;\n\tuser-select: none;\n\ttransition: opacity 150ms ease;\n"
      ]),
      (o = [
        "\n\tdisplay: ",
        " !important;\n\tposition: absolute;\n\tright: 20px;\n\ttop: 8px;\n\tfont-size: 14px;\n\tline-height: 1;\n\tcolor: #cbcbcb;\n\tuser-select: none;\n\ttransition: opacity 150ms ease;\n"
      ]),
      Object.freeze(
        Object.defineProperties(r, { raw: { value: Object.freeze(o) } })
      )),
      u = n(4);
    var c = ((i = u) && i.__esModule ? i : { default: i }).default.i(
      a,
      function(t) {
        return t.local ? "none" : "inline-block";
      }
    );
    e.default = c;
  },
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r,
      o,
      i,
      a = ((r = [
        "\n  padding: 4px 8px;\n  box-sizing: border-box;\n  position: relative;\n  margin: 0 auto;\n  min-height: 32px;\n  color: rgb(102, 102, 102);\n"
      ]),
      (o = [
        "\n  padding: 4px 8px;\n  box-sizing: border-box;\n  position: relative;\n  margin: 0 auto;\n  min-height: 32px;\n  color: rgb(102, 102, 102);\n"
      ]),
      Object.freeze(
        Object.defineProperties(r, { raw: { value: Object.freeze(o) } })
      )),
      u = n(4);
    var c = ((i = u) && i.__esModule ? i : { default: i }).default.div(a);
    e.default = c;
  },
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r,
      o,
      i,
      a = ((r = [
        '\n  display: inline-block;\n  position: relative;\n  box-sizing: border-box;\n  max-width: 180px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  margin-top: 4px;\n  min-height: 16px;\n  line-height: 16px;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,\n    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;\n  font-weight: 600;\n  font-size: 12px;\n  -moz-user-select: none;\n  hyphens: auto;\n'
      ]),
      (o = [
        '\n  display: inline-block;\n  position: relative;\n  box-sizing: border-box;\n  max-width: 180px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  margin-top: 4px;\n  min-height: 16px;\n  line-height: 16px;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,\n    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;\n  font-weight: 600;\n  font-size: 12px;\n  -moz-user-select: none;\n  hyphens: auto;\n'
      ]),
      Object.freeze(
        Object.defineProperties(r, { raw: { value: Object.freeze(o) } })
      )),
      u = n(4);
    var c = ((i = u) && i.__esModule ? i : { default: i }).default.div(a);
    e.default = c;
  },
  function(t, e, n) {
    "use strict";
    n.r(e);
    var r = {};
    n.r(r),
      n.d(r, "TASK", function() {
        return o.e;
      }),
      n.d(r, "SAGA_ACTION", function() {
        return o.c;
      }),
      n.d(r, "noop", function() {
        return o.u;
      }),
      n.d(r, "is", function() {
        return o.q;
      }),
      n.d(r, "deferred", function() {
        return o.l;
      }),
      n.d(r, "arrayOfDeffered", function() {
        return o.g;
      }),
      n.d(r, "createMockTask", function() {
        return o.j;
      }),
      n.d(r, "cloneableGenerator", function() {
        return o.i;
      }),
      n.d(r, "asEffect", function() {
        return u.d;
      }),
      n.d(r, "CHANNEL_END", function() {
        return p;
      });
    var o = n(0),
      i = n(7),
      a = n(14),
      u = n(2),
      c = n(9),
      s =
        Object.assign ||
        function(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        },
      f =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(t) {
              return typeof t;
            }
          : function(t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            };
    var l = "proc first argument (Saga function result) must be an iterator",
      p = {
        toString: function() {
          return "@@redux-saga/CHANNEL_END";
        }
      },
      d = {
        toString: function() {
          return "@@redux-saga/TASK_CANCEL";
        }
      },
      h = {
        wildcard: function() {
          return o.r;
        },
        default: function(t) {
          return "symbol" === (void 0 === t ? "undefined" : f(t))
            ? function(e) {
                return e.type === t;
              }
            : function(e) {
                return e.type === String(t);
              };
        },
        array: function(t) {
          return function(e) {
            return t.some(function(t) {
              return v(t)(e);
            });
          };
        },
        predicate: function(t) {
          return function(e) {
            return t(e);
          };
        }
      };
    function v(t) {
      return ("*" === t
        ? h.wildcard
        : o.q.array(t)
        ? h.array
        : o.q.stringableFunc(t)
        ? h.default
        : o.q.func(t)
        ? h.predicate
        : h.default)(t);
    }
    var y = function(t) {
      return { fn: t };
    };
    function b(t) {
      var e =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : function() {
                return o.u;
              },
        n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.u,
        r =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : o.u,
        f = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
        h = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {},
        g = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
        m =
          arguments.length > 7 && void 0 !== arguments[7]
            ? arguments[7]
            : "anonymous",
        _ = arguments[8];
      Object(o.h)(t, o.q.iterator, l);
      var w = Object(o.n)(D, Object(o.z)("[...effects]", "all([...effects])")),
        x = h.sagaMonitor,
        O = h.logger,
        S = h.onError,
        k = O || o.s,
        E = function(t) {
          var e = t.sagaStack;
          !e &&
            t.stack &&
            (e =
              -1 !== t.stack.split("\n")[0].indexOf(t.message)
                ? t.stack
                : "Error: " + t.message + "\n" + t.stack),
            k("error", "uncaught at " + m, e || t.message || t);
        },
        j = Object(i.f)(e),
        C = Object.create(f);
      T.cancel = o.u;
      var P = (function(t, e, n, r) {
          var i, a;
          return (
            (n._deferredEnd = null),
            ((i = {})[o.e] = !0),
            (i.id = t),
            (i.name = e),
            "done",
            ((a = {}).done = a.done || {}),
            (a.done.get = function() {
              if (n._deferredEnd) return n._deferredEnd.promise;
              var t = Object(o.l)();
              return (
                (n._deferredEnd = t),
                n._isRunning ||
                  (n._error ? t.reject(n._error) : t.resolve(n._result)),
                t.promise
              );
            }),
            (i.cont = r),
            (i.joiners = []),
            (i.cancel = z),
            (i.isRunning = function() {
              return n._isRunning;
            }),
            (i.isCancelled = function() {
              return n._isCancelled;
            }),
            (i.isAborted = function() {
              return n._isAborted;
            }),
            (i.result = function() {
              return n._result;
            }),
            (i.error = function() {
              return n._error;
            }),
            (i.setContext = function(t) {
              Object(o.h)(t, o.q.object, Object(o.k)("task", t)),
                o.v.assign(C, t);
            }),
            (function(t, e) {
              for (var n in e) {
                var r = e[n];
                (r.configurable = r.enumerable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(t, n, r);
              }
            })(i, a),
            i
          );
        })(g, m, t, _),
        A = {
          name: m,
          cancel: function() {
            A.isRunning && !A.isCancelled && ((A.isCancelled = !0), T(d));
          },
          isRunning: !0
        },
        I = (function(t, e, n) {
          var r = [],
            i = void 0,
            a = !1;
          function u(t) {
            s(), n(t, !0);
          }
          function c(t) {
            r.push(t),
              (t.cont = function(c, s) {
                a ||
                  (Object(o.w)(r, t),
                  (t.cont = o.u),
                  s
                    ? u(c)
                    : (t === e && (i = c), r.length || ((a = !0), n(i))));
              });
          }
          function s() {
            a ||
              ((a = !0),
              r.forEach(function(t) {
                (t.cont = o.u), t.cancel();
              }),
              (r = []));
          }
          return (
            c(e),
            {
              addTask: c,
              cancelAll: s,
              abort: u,
              getTasks: function() {
                return r;
              },
              taskNames: function() {
                return r.map(function(t) {
                  return t.name;
                });
              }
            }
          );
        })(0, A, M);
      function z() {
        t._isRunning &&
          !t._isCancelled &&
          ((t._isCancelled = !0), I.cancelAll(), M(d));
      }
      return _ && (_.cancel = z), (t._isRunning = !0), T(), P;
      function T(e, n) {
        if (!A.isRunning)
          throw new Error("Trying to resume an already finished generator");
        try {
          var r = void 0;
          n
            ? (r = t.throw(e))
            : e === d
            ? ((A.isCancelled = !0),
              T.cancel(),
              (r = o.q.func(t.return) ? t.return(d) : { done: !0, value: d }))
            : (r =
                e === p
                  ? o.q.func(t.return)
                    ? t.return()
                    : { done: !0 }
                  : t.next(e)),
            r.done
              ? ((A.isMainRunning = !1), A.cont && A.cont(r.value))
              : R(r.value, g, "", T);
        } catch (t) {
          A.isCancelled && E(t), (A.isMainRunning = !1), A.cont(t, !0);
        }
      }
      function M(e, n) {
        (t._isRunning = !1),
          j.close(),
          n
            ? (e instanceof Error &&
                Object.defineProperty(e, "sagaStack", {
                  value: "at " + m + " \n " + (e.sagaStack || e.stack),
                  configurable: !0
                }),
              P.cont || (e instanceof Error && S ? S(e) : E(e)),
              (t._error = e),
              (t._isAborted = !0),
              t._deferredEnd && t._deferredEnd.reject(e))
            : ((t._result = e), t._deferredEnd && t._deferredEnd.resolve(e)),
          P.cont && P.cont(e, n),
          P.joiners.forEach(function(t) {
            return t.cb(e, n);
          }),
          (P.joiners = null);
      }
      function R(t, f) {
        var l =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
          h = arguments[3],
          b = Object(o.y)();
        x &&
          x.effectTriggered({
            effectId: b,
            parentEffectId: f,
            label: l,
            effect: t
          });
        var g = void 0;
        function _(t, e) {
          g ||
            ((g = !0),
            (h.cancel = o.u),
            x && (e ? x.effectRejected(b, t) : x.effectResolved(b, t)),
            h(t, e));
        }
        (_.cancel = o.u),
          (h.cancel = function() {
            if (!g) {
              g = !0;
              try {
                _.cancel();
              } catch (t) {
                E(t);
              }
              (_.cancel = o.u), x && x.effectCancelled(b);
            }
          });
        var O = void 0;
        return o.q.promise(t)
          ? q(t, _)
          : o.q.helper(t)
          ? L(y(t), b, _)
          : o.q.iterator(t)
          ? N(t, b, m, _)
          : o.q.array(t)
          ? w(t, b, _)
          : (O = u.d.take(t))
          ? (function(t, e) {
              var n = t.channel,
                r = t.pattern,
                o = t.maybe;
              n = n || j;
              var a = function(t) {
                return t instanceof Error
                  ? e(t, !0)
                  : Object(i.e)(t) && !o
                  ? e(p)
                  : e(t);
              };
              try {
                n.take(a, v(r));
              } catch (t) {
                return e(t, !0);
              }
              e.cancel = a.cancel;
            })(O, _)
          : (O = u.d.put(t))
          ? (function(t, e) {
              var r = t.channel,
                i = t.action,
                u = t.resolve;
              Object(a.a)(function() {
                var t = void 0;
                try {
                  t = (r ? r.put : n)(i);
                } catch (t) {
                  if (r || u) return e(t, !0);
                  E(t);
                }
                if (!u || !o.q.promise(t)) return e(t);
                q(t, e);
              });
            })(O, _)
          : (O = u.d.all(t))
          ? D(O, b, _)
          : (O = u.d.race(t))
          ? (function(t, e, n) {
              var r = void 0,
                a = Object.keys(t),
                u = {};
              a.forEach(function(e) {
                var c = function(u, c) {
                  if (!r)
                    if (c) n.cancel(), n(u, !0);
                    else if (!Object(i.e)(u) && u !== p && u !== d) {
                      var f;
                      n.cancel(), (r = !0);
                      var l = (((f = {})[e] = u), f);
                      n(
                        o.q.array(t)
                          ? [].slice.call(s({}, l, { length: a.length }))
                          : l
                      );
                    }
                };
                (c.cancel = o.u), (u[e] = c);
              }),
                (n.cancel = function() {
                  r ||
                    ((r = !0),
                    a.forEach(function(t) {
                      return u[t].cancel();
                    }));
                }),
                a.forEach(function(n) {
                  r || R(t[n], e, n, u[n]);
                });
            })(O, b, _)
          : (O = u.d.call(t))
          ? (function(t, e, n) {
              var r = t.context,
                i = t.fn,
                a = t.args,
                u = void 0;
              try {
                u = i.apply(r, a);
              } catch (t) {
                return n(t, !0);
              }
              return o.q.promise(u)
                ? q(u, n)
                : o.q.iterator(u)
                ? N(u, e, i.name, n)
                : n(u);
            })(O, b, _)
          : (O = u.d.cps(t))
          ? (function(t, e) {
              var n = t.context,
                r = t.fn,
                i = t.args;
              try {
                var a = function(t, n) {
                  return o.q.undef(t) ? e(n) : e(t, !0);
                };
                r.apply(n, i.concat(a)),
                  a.cancel &&
                    (e.cancel = function() {
                      return a.cancel();
                    });
              } catch (t) {
                return e(t, !0);
              }
            })(O, _)
          : (O = u.d.fork(t))
          ? L(O, b, _)
          : (O = u.d.join(t))
          ? (function(t, e) {
              if (t.isRunning()) {
                var n = { task: P, cb: e };
                (e.cancel = function() {
                  return Object(o.w)(t.joiners, n);
                }),
                  t.joiners.push(n);
              } else t.isAborted() ? e(t.error(), !0) : e(t.result());
            })(O, _)
          : (O = u.d.cancel(t))
          ? (function(t, e) {
              t === o.d && (t = P);
              t.isRunning() && t.cancel();
              e();
            })(O, _)
          : (O = u.d.select(t))
          ? (function(t, e) {
              var n = t.selector,
                o = t.args;
              try {
                var i = n.apply(void 0, [r()].concat(o));
                e(i);
              } catch (t) {
                e(t, !0);
              }
            })(O, _)
          : (O = u.d.actionChannel(t))
          ? (function(t, n) {
              var r = t.pattern,
                o = t.buffer,
                a = v(r);
              (a.pattern = r), n(Object(i.d)(e, o || c.a.fixed(), a));
            })(O, _)
          : (O = u.d.flush(t))
          ? (function(t, e) {
              t.flush(e);
            })(O, _)
          : (O = u.d.cancelled(t))
          ? (function(t, e) {
              e(!!A.isCancelled);
            })(0, _)
          : (O = u.d.getContext(t))
          ? (function(t, e) {
              e(C[t]);
            })(O, _)
          : (O = u.d.setContext(t))
          ? (function(t, e) {
              o.v.assign(C, t), e();
            })(O, _)
          : _(t);
      }
      function q(t, e) {
        var n = t[o.a];
        o.q.func(n)
          ? (e.cancel = n)
          : o.q.func(t.abort) &&
            (e.cancel = function() {
              return t.abort();
            }),
          t.then(e, function(t) {
            return e(t, !0);
          });
      }
      function N(t, o, i, a) {
        b(t, e, n, r, C, h, o, i, a);
      }
      function L(t, i, u) {
        var c = t.context,
          s = t.fn,
          f = t.args,
          l = t.detached,
          p = (function(t) {
            var e = t.context,
              n = t.fn,
              r = t.args;
            if (o.q.iterator(n)) return n;
            var i,
              a,
              u = void 0,
              c = void 0;
            try {
              u = n.apply(e, r);
            } catch (t) {
              c = t;
            }
            return o.q.iterator(u)
              ? u
              : c
              ? Object(o.t)(function() {
                  throw c;
                })
              : Object(o.t)(
                  ((i = void 0),
                  (a = { done: !1, value: u }),
                  function(t) {
                    return i ? { done: !0, value: t } : ((i = !0), a);
                  })
                );
          })({ context: c, fn: s, args: f });
        try {
          Object(a.c)();
          var d = b(p, e, n, r, C, h, i, s.name, l ? null : o.u);
          l
            ? u(d)
            : p._isRunning
            ? (I.addTask(d), u(d))
            : p._error
            ? I.abort(p._error)
            : u(d);
        } finally {
          Object(a.b)();
        }
      }
      function D(t, e, n) {
        var r = Object.keys(t);
        if (!r.length) return n(o.q.array(t) ? [] : {});
        var a = 0,
          u = void 0,
          c = {},
          f = {};
        r.forEach(function(e) {
          var l = function(f, l) {
            u ||
              (l || Object(i.e)(f) || f === p || f === d
                ? (n.cancel(), n(f, l))
                : ((c[e] = f),
                  ++a === r.length &&
                    ((u = !0),
                    n(
                      o.q.array(t)
                        ? o.f.from(s({}, c, { length: r.length }))
                        : c
                    ))));
          };
          (l.cancel = o.u), (f[e] = l);
        }),
          (n.cancel = function() {
            u ||
              ((u = !0),
              r.forEach(function(t) {
                return f[t].cancel();
              }));
          }),
          r.forEach(function(n) {
            return R(t[n], e, n, f[n]);
          });
      }
    }
    var g =
      "runSaga(storeInterface, saga, ...args): saga argument must be a Generator function!";
    function m(t, e) {
      for (
        var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), i = 2;
        i < n;
        i++
      )
        r[i - 2] = arguments[i];
      var a = void 0;
      o.q.iterator(t)
        ? ((a = t), (t = e))
        : (Object(o.h)(e, o.q.func, g),
          (a = e.apply(void 0, r)),
          Object(o.h)(a, o.q.iterator, g));
      var u = t,
        c = u.subscribe,
        s = u.dispatch,
        f = u.getState,
        l = u.context,
        p = u.sagaMonitor,
        d = u.logger,
        h = u.onError,
        v = Object(o.y)();
      p &&
        ((p.effectTriggered = p.effectTriggered || o.u),
        (p.effectResolved = p.effectResolved || o.u),
        (p.effectRejected = p.effectRejected || o.u),
        (p.effectCancelled = p.effectCancelled || o.u),
        (p.actionDispatched = p.actionDispatched || o.u),
        p.effectTriggered({
          effectId: v,
          root: !0,
          parentEffectId: 0,
          effect: { root: !0, saga: e, args: r }
        }));
      var y = b(
        a,
        c,
        Object(o.A)(s),
        f,
        l,
        { sagaMonitor: p, logger: d, onError: h },
        v,
        e.name
      );
      return p && p.effectResolved(v, y), y;
    }
    var _ = n(10),
      w = n(24);
    n.d(e, "runSaga", function() {
      return m;
    }),
      n.d(e, "END", function() {
        return i.a;
      }),
      n.d(e, "eventChannel", function() {
        return i.d;
      }),
      n.d(e, "channel", function() {
        return i.b;
      }),
      n.d(e, "buffers", function() {
        return c.a;
      }),
      n.d(e, "takeEvery", function() {
        return _.a;
      }),
      n.d(e, "takeLatest", function() {
        return _.c;
      }),
      n.d(e, "throttle", function() {
        return _.e;
      }),
      n.d(e, "delay", function() {
        return o.m;
      }),
      n.d(e, "CANCEL", function() {
        return o.a;
      }),
      n.d(e, "detach", function() {
        return u.i;
      }),
      n.d(e, "effects", function() {
        return w;
      }),
      n.d(e, "utils", function() {
        return r;
      });
    e.default = function() {
      var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        e = t.context,
        n = void 0 === e ? {} : e,
        r = (function(t, e) {
          var n = {};
          for (var r in t)
            e.indexOf(r) >= 0 ||
              (Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]));
          return n;
        })(t, ["context"]),
        a = r.sagaMonitor,
        u = r.logger,
        c = r.onError;
      if (o.q.func(r))
        throw new Error(
          "Saga middleware no longer accept Generator functions. Use sagaMiddleware.run instead"
        );
      if (u && !o.q.func(u))
        throw new Error(
          "`options.logger` passed to the Saga middleware is not a function!"
        );
      if (c && !o.q.func(c))
        throw new Error(
          "`options.onError` passed to the Saga middleware is not a function!"
        );
      if (r.emitter && !o.q.func(r.emitter))
        throw new Error(
          "`options.emitter` passed to the Saga middleware is not a function!"
        );
      function s(t) {
        var e = t.getState,
          f = t.dispatch,
          l = Object(i.c)();
        return (
          (l.emit = (r.emitter || o.o)(l.emit)),
          (s.run = m.bind(null, {
            context: n,
            subscribe: l.subscribe,
            dispatch: f,
            getState: e,
            sagaMonitor: a,
            logger: u,
            onError: c
          })),
          function(t) {
            return function(e) {
              a && a.actionDispatched && a.actionDispatched(e);
              var n = t(e);
              return l.emit(e), n;
            };
          }
        );
      }
      return (
        (s.run = function() {
          throw new Error(
            "Before running a Saga, you must mount the Saga middleware on the Store using applyMiddleware"
          );
        }),
        (s.setContext = function(t) {
          Object(o.h)(t, o.q.object, Object(o.k)("sagaMiddleware", t)),
            o.v.assign(n, t);
        }),
        s
      );
    };
  },
  function(t, e, n) {
    "use strict";
    function r(t) {
      var e,
        n = t.Symbol;
      return (
        "function" == typeof n
          ? n.observable
            ? (e = n.observable)
            : ((e = n("observable")), (n.observable = e))
          : (e = "@@observable"),
        e
      );
    }
    n.d(e, "a", function() {
      return r;
    });
  },
  function(t, e, n) {
    "use strict";
    var r = n(57),
      o = /^ms-/;
    t.exports = function(t) {
      return r(t).replace(o, "-ms-");
    };
  },
  function(t, e, n) {
    t.exports = (function() {
      "use strict";
      return function(t) {
        function e(e) {
          if (e)
            try {
              t(e + "}");
            } catch (t) {}
        }
        return function(n, r, o, i, a, u, c, s, f, l) {
          switch (n) {
            case 1:
              if (0 === f && 64 === r.charCodeAt(0)) return t(r + ";"), "";
              break;
            case 2:
              if (0 === s) return r + "/*|*/";
              break;
            case 3:
              switch (s) {
                case 102:
                case 112:
                  return t(o[0] + r), "";
                default:
                  return r + (0 === l ? "/*|*/" : "");
              }
            case -2:
              r.split("/*|*/}").forEach(e);
          }
        };
      };
    })();
  },
  function(t, e, n) {
    "use strict";
    var r = n(19),
      o = {
        childContextTypes: !0,
        contextType: !0,
        contextTypes: !0,
        defaultProps: !0,
        displayName: !0,
        getDefaultProps: !0,
        getDerivedStateFromError: !0,
        getDerivedStateFromProps: !0,
        mixins: !0,
        propTypes: !0,
        type: !0
      },
      i = {
        name: !0,
        length: !0,
        prototype: !0,
        caller: !0,
        callee: !0,
        arguments: !0,
        arity: !0
      },
      a = {};
    a[r.ForwardRef] = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0
    };
    var u = Object.defineProperty,
      c = Object.getOwnPropertyNames,
      s = Object.getOwnPropertySymbols,
      f = Object.getOwnPropertyDescriptor,
      l = Object.getPrototypeOf,
      p = Object.prototype;
    t.exports = function t(e, n, r) {
      if ("string" != typeof n) {
        if (p) {
          var d = l(n);
          d && d !== p && t(e, d, r);
        }
        var h = c(n);
        s && (h = h.concat(s(n)));
        for (
          var v = a[e.$$typeof] || o, y = a[n.$$typeof] || o, b = 0;
          b < h.length;
          ++b
        ) {
          var g = h[b];
          if (!(i[g] || (r && r[g]) || (y && y[g]) || (v && v[g]))) {
            var m = f(n, g);
            try {
              u(e, g, m);
            } catch (t) {}
          }
        }
        return e;
      }
      return e;
    };
  },
  function(t, e) {
    t.exports = function(t, e) {
      return function n() {
        null == e && (e = t.length);
        var r = [].slice.call(arguments);
        return r.length >= e
          ? t.apply(this, r)
          : function() {
              return n.apply(this, r.concat([].slice.call(arguments)));
            };
      };
    };
  },
  ,
  function(t, e, n) {
    "use strict";
    /*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var r =
        Object.getOwnPropertySymbols,
      o = Object.prototype.hasOwnProperty,
      i = Object.prototype.propertyIsEnumerable;
    t.exports = (function() {
      try {
        if (!Object.assign) return !1;
        var t = new String("abc");
        if (((t[5] = "de"), "5" === Object.getOwnPropertyNames(t)[0]))
          return !1;
        for (var e = {}, n = 0; n < 10; n++)
          e["_" + String.fromCharCode(n)] = n;
        if (
          "0123456789" !==
          Object.getOwnPropertyNames(e)
            .map(function(t) {
              return e[t];
            })
            .join("")
        )
          return !1;
        var r = {};
        return (
          "abcdefghijklmnopqrst".split("").forEach(function(t) {
            r[t] = t;
          }),
          "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
        );
      } catch (t) {
        return !1;
      }
    })()
      ? Object.assign
      : function(t, e) {
          for (
            var n,
              a,
              u = (function(t) {
                if (null == t)
                  throw new TypeError(
                    "Object.assign cannot be called with null or undefined"
                  );
                return Object(t);
              })(t),
              c = 1;
            c < arguments.length;
            c++
          ) {
            for (var s in (n = Object(arguments[c])))
              o.call(n, s) && (u[s] = n[s]);
            if (r) {
              a = r(n);
              for (var f = 0; f < a.length; f++)
                i.call(n, a[f]) && (u[a[f]] = n[a[f]]);
            }
          }
          return u;
        };
  },
  ,
  function(t, e, n) {
    t.exports = (function() {
      "use strict";
      var t = Array.prototype.slice;
      function e(t, e) {
        e && (t.prototype = Object.create(e.prototype)),
          (t.prototype.constructor = t);
      }
      function n(t) {
        return a(t) ? t : K(t);
      }
      function r(t) {
        return u(t) ? t : Y(t);
      }
      function o(t) {
        return c(t) ? t : G(t);
      }
      function i(t) {
        return a(t) && !s(t) ? t : V(t);
      }
      function a(t) {
        return !(!t || !t[l]);
      }
      function u(t) {
        return !(!t || !t[p]);
      }
      function c(t) {
        return !(!t || !t[d]);
      }
      function s(t) {
        return u(t) || c(t);
      }
      function f(t) {
        return !(!t || !t[h]);
      }
      e(r, n),
        e(o, n),
        e(i, n),
        (n.isIterable = a),
        (n.isKeyed = u),
        (n.isIndexed = c),
        (n.isAssociative = s),
        (n.isOrdered = f),
        (n.Keyed = r),
        (n.Indexed = o),
        (n.Set = i);
      var l = "@@__IMMUTABLE_ITERABLE__@@",
        p = "@@__IMMUTABLE_KEYED__@@",
        d = "@@__IMMUTABLE_INDEXED__@@",
        h = "@@__IMMUTABLE_ORDERED__@@",
        v = 5,
        y = 1 << v,
        b = y - 1,
        g = {},
        m = { value: !1 },
        _ = { value: !1 };
      function w(t) {
        return (t.value = !1), t;
      }
      function x(t) {
        t && (t.value = !0);
      }
      function O() {}
      function S(t, e) {
        e = e || 0;
        for (
          var n = Math.max(0, t.length - e), r = new Array(n), o = 0;
          o < n;
          o++
        )
          r[o] = t[o + e];
        return r;
      }
      function k(t) {
        return void 0 === t.size && (t.size = t.__iterate(j)), t.size;
      }
      function E(t, e) {
        if ("number" != typeof e) {
          var n = e >>> 0;
          if ("" + n !== e || 4294967295 === n) return NaN;
          e = n;
        }
        return e < 0 ? k(t) + e : e;
      }
      function j() {
        return !0;
      }
      function C(t, e, n) {
        return (
          (0 === t || (void 0 !== n && t <= -n)) &&
          (void 0 === e || (void 0 !== n && e >= n))
        );
      }
      function P(t, e) {
        return I(t, e, 0);
      }
      function A(t, e) {
        return I(t, e, e);
      }
      function I(t, e, n) {
        return void 0 === t
          ? n
          : t < 0
          ? Math.max(0, e + t)
          : void 0 === e
          ? t
          : Math.min(e, t);
      }
      var z = 0,
        T = 1,
        M = 2,
        R = "function" == typeof Symbol && Symbol.iterator,
        q = "@@iterator",
        N = R || q;
      function L(t) {
        this.next = t;
      }
      function D(t, e, n, r) {
        var o = 0 === t ? e : 1 === t ? n : [e, n];
        return r ? (r.value = o) : (r = { value: o, done: !1 }), r;
      }
      function F() {
        return { value: void 0, done: !0 };
      }
      function U(t) {
        return !!B(t);
      }
      function $(t) {
        return t && "function" == typeof t.next;
      }
      function W(t) {
        var e = B(t);
        return e && e.call(t);
      }
      function B(t) {
        var e = t && ((R && t[R]) || t[q]);
        if ("function" == typeof e) return e;
      }
      function H(t) {
        return t && "number" == typeof t.length;
      }
      function K(t) {
        return null == t
          ? it()
          : a(t)
          ? t.toSeq()
          : (function(t) {
              var e = ct(t) || ("object" == typeof t && new et(t));
              if (!e)
                throw new TypeError(
                  "Expected Array or iterable object of values, or keyed object: " +
                    t
                );
              return e;
            })(t);
      }
      function Y(t) {
        return null == t
          ? it().toKeyedSeq()
          : a(t)
          ? u(t)
            ? t.toSeq()
            : t.fromEntrySeq()
          : at(t);
      }
      function G(t) {
        return null == t
          ? it()
          : a(t)
          ? u(t)
            ? t.entrySeq()
            : t.toIndexedSeq()
          : ut(t);
      }
      function V(t) {
        return (null == t
          ? it()
          : a(t)
          ? u(t)
            ? t.entrySeq()
            : t
          : ut(t)
        ).toSetSeq();
      }
      (L.prototype.toString = function() {
        return "[Iterator]";
      }),
        (L.KEYS = z),
        (L.VALUES = T),
        (L.ENTRIES = M),
        (L.prototype.inspect = L.prototype.toSource = function() {
          return this.toString();
        }),
        (L.prototype[N] = function() {
          return this;
        }),
        e(K, n),
        (K.of = function() {
          return K(arguments);
        }),
        (K.prototype.toSeq = function() {
          return this;
        }),
        (K.prototype.toString = function() {
          return this.__toString("Seq {", "}");
        }),
        (K.prototype.cacheResult = function() {
          return (
            !this._cache &&
              this.__iterateUncached &&
              ((this._cache = this.entrySeq().toArray()),
              (this.size = this._cache.length)),
            this
          );
        }),
        (K.prototype.__iterate = function(t, e) {
          return st(this, t, e, !0);
        }),
        (K.prototype.__iterator = function(t, e) {
          return ft(this, t, e, !0);
        }),
        e(Y, K),
        (Y.prototype.toKeyedSeq = function() {
          return this;
        }),
        e(G, K),
        (G.of = function() {
          return G(arguments);
        }),
        (G.prototype.toIndexedSeq = function() {
          return this;
        }),
        (G.prototype.toString = function() {
          return this.__toString("Seq [", "]");
        }),
        (G.prototype.__iterate = function(t, e) {
          return st(this, t, e, !1);
        }),
        (G.prototype.__iterator = function(t, e) {
          return ft(this, t, e, !1);
        }),
        e(V, K),
        (V.of = function() {
          return V(arguments);
        }),
        (V.prototype.toSetSeq = function() {
          return this;
        }),
        (K.isSeq = ot),
        (K.Keyed = Y),
        (K.Set = V),
        (K.Indexed = G);
      var J,
        Q,
        X,
        Z = "@@__IMMUTABLE_SEQ__@@";
      function tt(t) {
        (this._array = t), (this.size = t.length);
      }
      function et(t) {
        var e = Object.keys(t);
        (this._object = t), (this._keys = e), (this.size = e.length);
      }
      function nt(t) {
        (this._iterable = t), (this.size = t.length || t.size);
      }
      function rt(t) {
        (this._iterator = t), (this._iteratorCache = []);
      }
      function ot(t) {
        return !(!t || !t[Z]);
      }
      function it() {
        return J || (J = new tt([]));
      }
      function at(t) {
        var e = Array.isArray(t)
          ? new tt(t).fromEntrySeq()
          : $(t)
          ? new rt(t).fromEntrySeq()
          : U(t)
          ? new nt(t).fromEntrySeq()
          : "object" == typeof t
          ? new et(t)
          : void 0;
        if (!e)
          throw new TypeError(
            "Expected Array or iterable object of [k, v] entries, or keyed object: " +
              t
          );
        return e;
      }
      function ut(t) {
        var e = ct(t);
        if (!e)
          throw new TypeError(
            "Expected Array or iterable object of values: " + t
          );
        return e;
      }
      function ct(t) {
        return H(t) ? new tt(t) : $(t) ? new rt(t) : U(t) ? new nt(t) : void 0;
      }
      function st(t, e, n, r) {
        var o = t._cache;
        if (o) {
          for (var i = o.length - 1, a = 0; a <= i; a++) {
            var u = o[n ? i - a : a];
            if (!1 === e(u[1], r ? u[0] : a, t)) return a + 1;
          }
          return a;
        }
        return t.__iterateUncached(e, n);
      }
      function ft(t, e, n, r) {
        var o = t._cache;
        if (o) {
          var i = o.length - 1,
            a = 0;
          return new L(function() {
            var t = o[n ? i - a : a];
            return a++ > i
              ? { value: void 0, done: !0 }
              : D(e, r ? t[0] : a - 1, t[1]);
          });
        }
        return t.__iteratorUncached(e, n);
      }
      function lt(t, e) {
        return e
          ? (function t(e, n, r, o) {
              return Array.isArray(n)
                ? e.call(
                    o,
                    r,
                    G(n).map(function(r, o) {
                      return t(e, r, o, n);
                    })
                  )
                : dt(n)
                ? e.call(
                    o,
                    r,
                    Y(n).map(function(r, o) {
                      return t(e, r, o, n);
                    })
                  )
                : n;
            })(e, t, "", { "": t })
          : pt(t);
      }
      function pt(t) {
        return Array.isArray(t)
          ? G(t)
              .map(pt)
              .toList()
          : dt(t)
          ? Y(t)
              .map(pt)
              .toMap()
          : t;
      }
      function dt(t) {
        return t && (t.constructor === Object || void 0 === t.constructor);
      }
      function ht(t, e) {
        if (t === e || (t != t && e != e)) return !0;
        if (!t || !e) return !1;
        if ("function" == typeof t.valueOf && "function" == typeof e.valueOf) {
          if (
            ((t = t.valueOf()),
            (e = e.valueOf()),
            t === e || (t != t && e != e))
          )
            return !0;
          if (!t || !e) return !1;
        }
        return !(
          "function" != typeof t.equals ||
          "function" != typeof e.equals ||
          !t.equals(e)
        );
      }
      function vt(t, e) {
        if (t === e) return !0;
        if (
          !a(e) ||
          (void 0 !== t.size && void 0 !== e.size && t.size !== e.size) ||
          (void 0 !== t.__hash &&
            void 0 !== e.__hash &&
            t.__hash !== e.__hash) ||
          u(t) !== u(e) ||
          c(t) !== c(e) ||
          f(t) !== f(e)
        )
          return !1;
        if (0 === t.size && 0 === e.size) return !0;
        var n = !s(t);
        if (f(t)) {
          var r = t.entries();
          return (
            e.every(function(t, e) {
              var o = r.next().value;
              return o && ht(o[1], t) && (n || ht(o[0], e));
            }) && r.next().done
          );
        }
        var o = !1;
        if (void 0 === t.size)
          if (void 0 === e.size)
            "function" == typeof t.cacheResult && t.cacheResult();
          else {
            o = !0;
            var i = t;
            (t = e), (e = i);
          }
        var l = !0,
          p = e.__iterate(function(e, r) {
            if (n ? !t.has(e) : o ? !ht(e, t.get(r, g)) : !ht(t.get(r, g), e))
              return (l = !1), !1;
          });
        return l && t.size === p;
      }
      function yt(t, e) {
        if (!(this instanceof yt)) return new yt(t, e);
        if (
          ((this._value = t),
          (this.size = void 0 === e ? 1 / 0 : Math.max(0, e)),
          0 === this.size)
        ) {
          if (Q) return Q;
          Q = this;
        }
      }
      function bt(t, e) {
        if (!t) throw new Error(e);
      }
      function gt(t, e, n) {
        if (!(this instanceof gt)) return new gt(t, e, n);
        if (
          (bt(0 !== n, "Cannot step a Range by 0"),
          (t = t || 0),
          void 0 === e && (e = 1 / 0),
          (n = void 0 === n ? 1 : Math.abs(n)),
          e < t && (n = -n),
          (this._start = t),
          (this._end = e),
          (this._step = n),
          (this.size = Math.max(0, Math.ceil((e - t) / n - 1) + 1)),
          0 === this.size)
        ) {
          if (X) return X;
          X = this;
        }
      }
      function mt() {
        throw TypeError("Abstract");
      }
      function _t() {}
      function wt() {}
      function xt() {}
      (K.prototype[Z] = !0),
        e(tt, G),
        (tt.prototype.get = function(t, e) {
          return this.has(t) ? this._array[E(this, t)] : e;
        }),
        (tt.prototype.__iterate = function(t, e) {
          for (var n = this._array, r = n.length - 1, o = 0; o <= r; o++)
            if (!1 === t(n[e ? r - o : o], o, this)) return o + 1;
          return o;
        }),
        (tt.prototype.__iterator = function(t, e) {
          var n = this._array,
            r = n.length - 1,
            o = 0;
          return new L(function() {
            return o > r
              ? { value: void 0, done: !0 }
              : D(t, o, n[e ? r - o++ : o++]);
          });
        }),
        e(et, Y),
        (et.prototype.get = function(t, e) {
          return void 0 === e || this.has(t) ? this._object[t] : e;
        }),
        (et.prototype.has = function(t) {
          return this._object.hasOwnProperty(t);
        }),
        (et.prototype.__iterate = function(t, e) {
          for (
            var n = this._object, r = this._keys, o = r.length - 1, i = 0;
            i <= o;
            i++
          ) {
            var a = r[e ? o - i : i];
            if (!1 === t(n[a], a, this)) return i + 1;
          }
          return i;
        }),
        (et.prototype.__iterator = function(t, e) {
          var n = this._object,
            r = this._keys,
            o = r.length - 1,
            i = 0;
          return new L(function() {
            var a = r[e ? o - i : i];
            return i++ > o ? { value: void 0, done: !0 } : D(t, a, n[a]);
          });
        }),
        (et.prototype[h] = !0),
        e(nt, G),
        (nt.prototype.__iterateUncached = function(t, e) {
          if (e) return this.cacheResult().__iterate(t, e);
          var n = this._iterable,
            r = W(n),
            o = 0;
          if ($(r))
            for (var i; !(i = r.next()).done && !1 !== t(i.value, o++, this); );
          return o;
        }),
        (nt.prototype.__iteratorUncached = function(t, e) {
          if (e) return this.cacheResult().__iterator(t, e);
          var n = this._iterable,
            r = W(n);
          if (!$(r)) return new L(F);
          var o = 0;
          return new L(function() {
            var e = r.next();
            return e.done ? e : D(t, o++, e.value);
          });
        }),
        e(rt, G),
        (rt.prototype.__iterateUncached = function(t, e) {
          if (e) return this.cacheResult().__iterate(t, e);
          for (
            var n, r = this._iterator, o = this._iteratorCache, i = 0;
            i < o.length;

          )
            if (!1 === t(o[i], i++, this)) return i;
          for (; !(n = r.next()).done; ) {
            var a = n.value;
            if (((o[i] = a), !1 === t(a, i++, this))) break;
          }
          return i;
        }),
        (rt.prototype.__iteratorUncached = function(t, e) {
          if (e) return this.cacheResult().__iterator(t, e);
          var n = this._iterator,
            r = this._iteratorCache,
            o = 0;
          return new L(function() {
            if (o >= r.length) {
              var e = n.next();
              if (e.done) return e;
              r[o] = e.value;
            }
            return D(t, o, r[o++]);
          });
        }),
        e(yt, G),
        (yt.prototype.toString = function() {
          return 0 === this.size
            ? "Repeat []"
            : "Repeat [ " + this._value + " " + this.size + " times ]";
        }),
        (yt.prototype.get = function(t, e) {
          return this.has(t) ? this._value : e;
        }),
        (yt.prototype.includes = function(t) {
          return ht(this._value, t);
        }),
        (yt.prototype.slice = function(t, e) {
          var n = this.size;
          return C(t, e, n) ? this : new yt(this._value, A(e, n) - P(t, n));
        }),
        (yt.prototype.reverse = function() {
          return this;
        }),
        (yt.prototype.indexOf = function(t) {
          return ht(this._value, t) ? 0 : -1;
        }),
        (yt.prototype.lastIndexOf = function(t) {
          return ht(this._value, t) ? this.size : -1;
        }),
        (yt.prototype.__iterate = function(t, e) {
          for (var n = 0; n < this.size; n++)
            if (!1 === t(this._value, n, this)) return n + 1;
          return n;
        }),
        (yt.prototype.__iterator = function(t, e) {
          var n = this,
            r = 0;
          return new L(function() {
            return r < n.size
              ? D(t, r++, n._value)
              : { value: void 0, done: !0 };
          });
        }),
        (yt.prototype.equals = function(t) {
          return t instanceof yt ? ht(this._value, t._value) : vt(t);
        }),
        e(gt, G),
        (gt.prototype.toString = function() {
          return 0 === this.size
            ? "Range []"
            : "Range [ " +
                this._start +
                "..." +
                this._end +
                (1 !== this._step ? " by " + this._step : "") +
                " ]";
        }),
        (gt.prototype.get = function(t, e) {
          return this.has(t) ? this._start + E(this, t) * this._step : e;
        }),
        (gt.prototype.includes = function(t) {
          var e = (t - this._start) / this._step;
          return e >= 0 && e < this.size && e === Math.floor(e);
        }),
        (gt.prototype.slice = function(t, e) {
          return C(t, e, this.size)
            ? this
            : ((t = P(t, this.size)),
              (e = A(e, this.size)) <= t
                ? new gt(0, 0)
                : new gt(
                    this.get(t, this._end),
                    this.get(e, this._end),
                    this._step
                  ));
        }),
        (gt.prototype.indexOf = function(t) {
          var e = t - this._start;
          if (e % this._step == 0) {
            var n = e / this._step;
            if (n >= 0 && n < this.size) return n;
          }
          return -1;
        }),
        (gt.prototype.lastIndexOf = function(t) {
          return this.indexOf(t);
        }),
        (gt.prototype.__iterate = function(t, e) {
          for (
            var n = this.size - 1,
              r = this._step,
              o = e ? this._start + n * r : this._start,
              i = 0;
            i <= n;
            i++
          ) {
            if (!1 === t(o, i, this)) return i + 1;
            o += e ? -r : r;
          }
          return i;
        }),
        (gt.prototype.__iterator = function(t, e) {
          var n = this.size - 1,
            r = this._step,
            o = e ? this._start + n * r : this._start,
            i = 0;
          return new L(function() {
            var a = o;
            return (
              (o += e ? -r : r),
              i > n ? { value: void 0, done: !0 } : D(t, i++, a)
            );
          });
        }),
        (gt.prototype.equals = function(t) {
          return t instanceof gt
            ? this._start === t._start &&
                this._end === t._end &&
                this._step === t._step
            : vt(this, t);
        }),
        e(mt, n),
        e(_t, mt),
        e(wt, mt),
        e(xt, mt),
        (mt.Keyed = _t),
        (mt.Indexed = wt),
        (mt.Set = xt);
      var Ot =
        "function" == typeof Math.imul && -2 === Math.imul(4294967295, 2)
          ? Math.imul
          : function(t, e) {
              var n = 65535 & (t |= 0),
                r = 65535 & (e |= 0);
              return (
                (n * r + ((((t >>> 16) * r + n * (e >>> 16)) << 16) >>> 0)) | 0
              );
            };
      function St(t) {
        return ((t >>> 1) & 1073741824) | (3221225471 & t);
      }
      function kt(t) {
        if (!1 === t || null == t) return 0;
        if (
          "function" == typeof t.valueOf &&
          (!1 === (t = t.valueOf()) || null == t)
        )
          return 0;
        if (!0 === t) return 1;
        var e,
          n,
          r = typeof t;
        if ("number" === r) {
          if (t != t || t === 1 / 0) return 0;
          var o = 0 | t;
          for (o !== t && (o ^= 4294967295 * t); t > 4294967295; )
            o ^= t /= 4294967295;
          return St(o);
        }
        if ("string" === r)
          return t.length > Tt
            ? (void 0 === (n = qt[(e = t)]) &&
                ((n = Et(e)),
                Rt === Mt && ((Rt = 0), (qt = {})),
                Rt++,
                (qt[e] = n)),
              n)
            : Et(t);
        if ("function" == typeof t.hashCode) return t.hashCode();
        if ("object" === r)
          return (function(t) {
            var e;
            if (At && void 0 !== (e = jt.get(t))) return e;
            if (void 0 !== (e = t[zt])) return e;
            if (!Pt) {
              if (
                void 0 !==
                (e = t.propertyIsEnumerable && t.propertyIsEnumerable[zt])
              )
                return e;
              if (
                void 0 !==
                (e = (function(t) {
                  if (t && t.nodeType > 0)
                    switch (t.nodeType) {
                      case 1:
                        return t.uniqueID;
                      case 9:
                        return t.documentElement && t.documentElement.uniqueID;
                    }
                })(t))
              )
                return e;
            }
            if (((e = ++It), 1073741824 & It && (It = 0), At)) jt.set(t, e);
            else {
              if (void 0 !== Ct && !1 === Ct(t))
                throw new Error(
                  "Non-extensible objects are not allowed as keys."
                );
              if (Pt)
                Object.defineProperty(t, zt, {
                  enumerable: !1,
                  configurable: !1,
                  writable: !1,
                  value: e
                });
              else if (
                void 0 !== t.propertyIsEnumerable &&
                t.propertyIsEnumerable ===
                  t.constructor.prototype.propertyIsEnumerable
              )
                (t.propertyIsEnumerable = function() {
                  return this.constructor.prototype.propertyIsEnumerable.apply(
                    this,
                    arguments
                  );
                }),
                  (t.propertyIsEnumerable[zt] = e);
              else {
                if (void 0 === t.nodeType)
                  throw new Error(
                    "Unable to set a non-enumerable property on object."
                  );
                t[zt] = e;
              }
            }
            return e;
          })(t);
        if ("function" == typeof t.toString) return Et(t.toString());
        throw new Error("Value type " + r + " cannot be hashed.");
      }
      function Et(t) {
        for (var e = 0, n = 0; n < t.length; n++)
          e = (31 * e + t.charCodeAt(n)) | 0;
        return St(e);
      }
      var jt,
        Ct = Object.isExtensible,
        Pt = (function() {
          try {
            return Object.defineProperty({}, "@", {}), !0;
          } catch (t) {
            return !1;
          }
        })(),
        At = "function" == typeof WeakMap;
      At && (jt = new WeakMap());
      var It = 0,
        zt = "__immutablehash__";
      "function" == typeof Symbol && (zt = Symbol(zt));
      var Tt = 16,
        Mt = 255,
        Rt = 0,
        qt = {};
      function Nt(t) {
        bt(t !== 1 / 0, "Cannot perform this action with an infinite size.");
      }
      function Lt(t) {
        return null == t
          ? Xt()
          : Dt(t) && !f(t)
          ? t
          : Xt().withMutations(function(e) {
              var n = r(t);
              Nt(n.size),
                n.forEach(function(t, n) {
                  return e.set(n, t);
                });
            });
      }
      function Dt(t) {
        return !(!t || !t[Ut]);
      }
      e(Lt, _t),
        (Lt.of = function() {
          var e = t.call(arguments, 0);
          return Xt().withMutations(function(t) {
            for (var n = 0; n < e.length; n += 2) {
              if (n + 1 >= e.length)
                throw new Error("Missing value for key: " + e[n]);
              t.set(e[n], e[n + 1]);
            }
          });
        }),
        (Lt.prototype.toString = function() {
          return this.__toString("Map {", "}");
        }),
        (Lt.prototype.get = function(t, e) {
          return this._root ? this._root.get(0, void 0, t, e) : e;
        }),
        (Lt.prototype.set = function(t, e) {
          return Zt(this, t, e);
        }),
        (Lt.prototype.setIn = function(t, e) {
          return this.updateIn(t, g, function() {
            return e;
          });
        }),
        (Lt.prototype.remove = function(t) {
          return Zt(this, t, g);
        }),
        (Lt.prototype.deleteIn = function(t) {
          return this.updateIn(t, function() {
            return g;
          });
        }),
        (Lt.prototype.update = function(t, e, n) {
          return 1 === arguments.length ? t(this) : this.updateIn([t], e, n);
        }),
        (Lt.prototype.updateIn = function(t, e, n) {
          n || ((n = e), (e = void 0));
          var r = (function t(e, n, r, o) {
            var i = e === g,
              a = n.next();
            if (a.done) {
              var u = i ? r : e,
                c = o(u);
              return c === u ? e : c;
            }
            bt(i || (e && e.set), "invalid keyPath");
            var s = a.value,
              f = i ? g : e.get(s, g),
              l = t(f, n, r, o);
            return l === f
              ? e
              : l === g
              ? e.remove(s)
              : (i ? Xt() : e).set(s, l);
          })(this, nn(t), e, n);
          return r === g ? void 0 : r;
        }),
        (Lt.prototype.clear = function() {
          return 0 === this.size
            ? this
            : this.__ownerID
            ? ((this.size = 0),
              (this._root = null),
              (this.__hash = void 0),
              (this.__altered = !0),
              this)
            : Xt();
        }),
        (Lt.prototype.merge = function() {
          return re(this, void 0, arguments);
        }),
        (Lt.prototype.mergeWith = function(e) {
          var n = t.call(arguments, 1);
          return re(this, e, n);
        }),
        (Lt.prototype.mergeIn = function(e) {
          var n = t.call(arguments, 1);
          return this.updateIn(e, Xt(), function(t) {
            return "function" == typeof t.merge
              ? t.merge.apply(t, n)
              : n[n.length - 1];
          });
        }),
        (Lt.prototype.mergeDeep = function() {
          return re(this, oe, arguments);
        }),
        (Lt.prototype.mergeDeepWith = function(e) {
          var n = t.call(arguments, 1);
          return re(this, ie(e), n);
        }),
        (Lt.prototype.mergeDeepIn = function(e) {
          var n = t.call(arguments, 1);
          return this.updateIn(e, Xt(), function(t) {
            return "function" == typeof t.mergeDeep
              ? t.mergeDeep.apply(t, n)
              : n[n.length - 1];
          });
        }),
        (Lt.prototype.sort = function(t) {
          return Pe(He(this, t));
        }),
        (Lt.prototype.sortBy = function(t, e) {
          return Pe(He(this, e, t));
        }),
        (Lt.prototype.withMutations = function(t) {
          var e = this.asMutable();
          return t(e), e.wasAltered() ? e.__ensureOwner(this.__ownerID) : this;
        }),
        (Lt.prototype.asMutable = function() {
          return this.__ownerID ? this : this.__ensureOwner(new O());
        }),
        (Lt.prototype.asImmutable = function() {
          return this.__ensureOwner();
        }),
        (Lt.prototype.wasAltered = function() {
          return this.__altered;
        }),
        (Lt.prototype.__iterator = function(t, e) {
          return new Gt(this, t, e);
        }),
        (Lt.prototype.__iterate = function(t, e) {
          var n = this,
            r = 0;
          return (
            this._root &&
              this._root.iterate(function(e) {
                return r++, t(e[1], e[0], n);
              }, e),
            r
          );
        }),
        (Lt.prototype.__ensureOwner = function(t) {
          return t === this.__ownerID
            ? this
            : t
            ? Qt(this.size, this._root, t, this.__hash)
            : ((this.__ownerID = t), (this.__altered = !1), this);
        }),
        (Lt.isMap = Dt);
      var Ft,
        Ut = "@@__IMMUTABLE_MAP__@@",
        $t = Lt.prototype;
      function Wt(t, e) {
        (this.ownerID = t), (this.entries = e);
      }
      function Bt(t, e, n) {
        (this.ownerID = t), (this.bitmap = e), (this.nodes = n);
      }
      function Ht(t, e, n) {
        (this.ownerID = t), (this.count = e), (this.nodes = n);
      }
      function Kt(t, e, n) {
        (this.ownerID = t), (this.keyHash = e), (this.entries = n);
      }
      function Yt(t, e, n) {
        (this.ownerID = t), (this.keyHash = e), (this.entry = n);
      }
      function Gt(t, e, n) {
        (this._type = e),
          (this._reverse = n),
          (this._stack = t._root && Jt(t._root));
      }
      function Vt(t, e) {
        return D(t, e[0], e[1]);
      }
      function Jt(t, e) {
        return { node: t, index: 0, __prev: e };
      }
      function Qt(t, e, n, r) {
        var o = Object.create($t);
        return (
          (o.size = t),
          (o._root = e),
          (o.__ownerID = n),
          (o.__hash = r),
          (o.__altered = !1),
          o
        );
      }
      function Xt() {
        return Ft || (Ft = Qt(0));
      }
      function Zt(t, e, n) {
        var r, o;
        if (t._root) {
          var i = w(m),
            a = w(_);
          if (((r = te(t._root, t.__ownerID, 0, void 0, e, n, i, a)), !a.value))
            return t;
          o = t.size + (i.value ? (n === g ? -1 : 1) : 0);
        } else {
          if (n === g) return t;
          (o = 1), (r = new Wt(t.__ownerID, [[e, n]]));
        }
        return t.__ownerID
          ? ((t.size = o),
            (t._root = r),
            (t.__hash = void 0),
            (t.__altered = !0),
            t)
          : r
          ? Qt(o, r)
          : Xt();
      }
      function te(t, e, n, r, o, i, a, u) {
        return t
          ? t.update(e, n, r, o, i, a, u)
          : i === g
          ? t
          : (x(u), x(a), new Yt(e, r, [o, i]));
      }
      function ee(t) {
        return t.constructor === Yt || t.constructor === Kt;
      }
      function ne(t, e, n, r, o) {
        if (t.keyHash === r) return new Kt(e, r, [t.entry, o]);
        var i,
          a = (0 === n ? t.keyHash : t.keyHash >>> n) & b,
          u = (0 === n ? r : r >>> n) & b,
          c =
            a === u
              ? [ne(t, e, n + v, r, o)]
              : ((i = new Yt(e, r, o)), a < u ? [t, i] : [i, t]);
        return new Bt(e, (1 << a) | (1 << u), c);
      }
      function re(t, e, n) {
        for (var o = [], i = 0; i < n.length; i++) {
          var u = n[i],
            c = r(u);
          a(u) ||
            (c = c.map(function(t) {
              return lt(t);
            })),
            o.push(c);
        }
        return ae(t, e, o);
      }
      function oe(t, e, n) {
        return t && t.mergeDeep && a(e) ? t.mergeDeep(e) : ht(t, e) ? t : e;
      }
      function ie(t) {
        return function(e, n, r) {
          if (e && e.mergeDeepWith && a(n)) return e.mergeDeepWith(t, n);
          var o = t(e, n, r);
          return ht(e, o) ? e : o;
        };
      }
      function ae(t, e, n) {
        return 0 ===
          (n = n.filter(function(t) {
            return 0 !== t.size;
          })).length
          ? t
          : 0 !== t.size || t.__ownerID || 1 !== n.length
          ? t.withMutations(function(t) {
              for (
                var r = e
                    ? function(n, r) {
                        t.update(r, g, function(t) {
                          return t === g ? n : e(t, n, r);
                        });
                      }
                    : function(e, n) {
                        t.set(n, e);
                      },
                  o = 0;
                o < n.length;
                o++
              )
                n[o].forEach(r);
            })
          : t.constructor(n[0]);
      }
      function ue(t) {
        return (
          (t =
            ((t =
              (858993459 & (t -= (t >> 1) & 1431655765)) +
              ((t >> 2) & 858993459)) +
              (t >> 4)) &
            252645135),
          (t += t >> 8),
          127 & (t += t >> 16)
        );
      }
      function ce(t, e, n, r) {
        var o = r ? t : S(t);
        return (o[e] = n), o;
      }
      ($t[Ut] = !0),
        ($t.delete = $t.remove),
        ($t.removeIn = $t.deleteIn),
        (Wt.prototype.get = function(t, e, n, r) {
          for (var o = this.entries, i = 0, a = o.length; i < a; i++)
            if (ht(n, o[i][0])) return o[i][1];
          return r;
        }),
        (Wt.prototype.update = function(t, e, n, r, o, i, a) {
          for (
            var u = o === g, c = this.entries, s = 0, f = c.length;
            s < f && !ht(r, c[s][0]);
            s++
          );
          var l = s < f;
          if (l ? c[s][1] === o : u) return this;
          if ((x(a), (u || !l) && x(i), !u || 1 !== c.length)) {
            if (!l && !u && c.length >= se)
              return (function(t, e, n, r) {
                t || (t = new O());
                for (
                  var o = new Yt(t, kt(n), [n, r]), i = 0;
                  i < e.length;
                  i++
                ) {
                  var a = e[i];
                  o = o.update(t, 0, void 0, a[0], a[1]);
                }
                return o;
              })(t, c, r, o);
            var p = t && t === this.ownerID,
              d = p ? c : S(c);
            return (
              l
                ? u
                  ? s === f - 1
                    ? d.pop()
                    : (d[s] = d.pop())
                  : (d[s] = [r, o])
                : d.push([r, o]),
              p ? ((this.entries = d), this) : new Wt(t, d)
            );
          }
        }),
        (Bt.prototype.get = function(t, e, n, r) {
          void 0 === e && (e = kt(n));
          var o = 1 << ((0 === t ? e : e >>> t) & b),
            i = this.bitmap;
          return 0 == (i & o)
            ? r
            : this.nodes[ue(i & (o - 1))].get(t + v, e, n, r);
        }),
        (Bt.prototype.update = function(t, e, n, r, o, i, a) {
          void 0 === n && (n = kt(r));
          var u = (0 === e ? n : n >>> e) & b,
            c = 1 << u,
            s = this.bitmap,
            f = 0 != (s & c);
          if (!f && o === g) return this;
          var l = ue(s & (c - 1)),
            p = this.nodes,
            d = f ? p[l] : void 0,
            h = te(d, t, e + v, n, r, o, i, a);
          if (h === d) return this;
          if (!f && h && p.length >= fe)
            return (function(t, e, n, r, o) {
              for (var i = 0, a = new Array(y), u = 0; 0 !== n; u++, n >>>= 1)
                a[u] = 1 & n ? e[i++] : void 0;
              return (a[r] = o), new Ht(t, i + 1, a);
            })(t, p, s, u, h);
          if (f && !h && 2 === p.length && ee(p[1 ^ l])) return p[1 ^ l];
          if (f && h && 1 === p.length && ee(h)) return h;
          var m = t && t === this.ownerID,
            _ = f ? (h ? s : s ^ c) : s | c,
            w = f
              ? h
                ? ce(p, l, h, m)
                : (function(t, e, n) {
                    var r = t.length - 1;
                    if (n && e === r) return t.pop(), t;
                    for (var o = new Array(r), i = 0, a = 0; a < r; a++)
                      a === e && (i = 1), (o[a] = t[a + i]);
                    return o;
                  })(p, l, m)
              : (function(t, e, n, r) {
                  var o = t.length + 1;
                  if (r && e + 1 === o) return (t[e] = n), t;
                  for (var i = new Array(o), a = 0, u = 0; u < o; u++)
                    u === e ? ((i[u] = n), (a = -1)) : (i[u] = t[u + a]);
                  return i;
                })(p, l, h, m);
          return m
            ? ((this.bitmap = _), (this.nodes = w), this)
            : new Bt(t, _, w);
        }),
        (Ht.prototype.get = function(t, e, n, r) {
          void 0 === e && (e = kt(n));
          var o = (0 === t ? e : e >>> t) & b,
            i = this.nodes[o];
          return i ? i.get(t + v, e, n, r) : r;
        }),
        (Ht.prototype.update = function(t, e, n, r, o, i, a) {
          void 0 === n && (n = kt(r));
          var u = (0 === e ? n : n >>> e) & b,
            c = o === g,
            s = this.nodes,
            f = s[u];
          if (c && !f) return this;
          var l = te(f, t, e + v, n, r, o, i, a);
          if (l === f) return this;
          var p = this.count;
          if (f) {
            if (!l && --p < le)
              return (function(t, e, n, r) {
                for (
                  var o = 0,
                    i = 0,
                    a = new Array(n),
                    u = 0,
                    c = 1,
                    s = e.length;
                  u < s;
                  u++, c <<= 1
                ) {
                  var f = e[u];
                  void 0 !== f && u !== r && ((o |= c), (a[i++] = f));
                }
                return new Bt(t, o, a);
              })(t, s, p, u);
          } else p++;
          var d = t && t === this.ownerID,
            h = ce(s, u, l, d);
          return d
            ? ((this.count = p), (this.nodes = h), this)
            : new Ht(t, p, h);
        }),
        (Kt.prototype.get = function(t, e, n, r) {
          for (var o = this.entries, i = 0, a = o.length; i < a; i++)
            if (ht(n, o[i][0])) return o[i][1];
          return r;
        }),
        (Kt.prototype.update = function(t, e, n, r, o, i, a) {
          void 0 === n && (n = kt(r));
          var u = o === g;
          if (n !== this.keyHash)
            return u ? this : (x(a), x(i), ne(this, t, e, n, [r, o]));
          for (
            var c = this.entries, s = 0, f = c.length;
            s < f && !ht(r, c[s][0]);
            s++
          );
          var l = s < f;
          if (l ? c[s][1] === o : u) return this;
          if ((x(a), (u || !l) && x(i), u && 2 === f))
            return new Yt(t, this.keyHash, c[1 ^ s]);
          var p = t && t === this.ownerID,
            d = p ? c : S(c);
          return (
            l
              ? u
                ? s === f - 1
                  ? d.pop()
                  : (d[s] = d.pop())
                : (d[s] = [r, o])
              : d.push([r, o]),
            p ? ((this.entries = d), this) : new Kt(t, this.keyHash, d)
          );
        }),
        (Yt.prototype.get = function(t, e, n, r) {
          return ht(n, this.entry[0]) ? this.entry[1] : r;
        }),
        (Yt.prototype.update = function(t, e, n, r, o, i, a) {
          var u = o === g,
            c = ht(r, this.entry[0]);
          return (c
          ? o === this.entry[1]
          : u)
            ? this
            : (x(a),
              u
                ? void x(i)
                : c
                ? t && t === this.ownerID
                  ? ((this.entry[1] = o), this)
                  : new Yt(t, this.keyHash, [r, o])
                : (x(i), ne(this, t, e, kt(r), [r, o])));
        }),
        (Wt.prototype.iterate = Kt.prototype.iterate = function(t, e) {
          for (var n = this.entries, r = 0, o = n.length - 1; r <= o; r++)
            if (!1 === t(n[e ? o - r : r])) return !1;
        }),
        (Bt.prototype.iterate = Ht.prototype.iterate = function(t, e) {
          for (var n = this.nodes, r = 0, o = n.length - 1; r <= o; r++) {
            var i = n[e ? o - r : r];
            if (i && !1 === i.iterate(t, e)) return !1;
          }
        }),
        (Yt.prototype.iterate = function(t, e) {
          return t(this.entry);
        }),
        e(Gt, L),
        (Gt.prototype.next = function() {
          for (var t = this._type, e = this._stack; e; ) {
            var n,
              r = e.node,
              o = e.index++;
            if (r.entry) {
              if (0 === o) return Vt(t, r.entry);
            } else if (r.entries) {
              if (((n = r.entries.length - 1), o <= n))
                return Vt(t, r.entries[this._reverse ? n - o : o]);
            } else if (((n = r.nodes.length - 1), o <= n)) {
              var i = r.nodes[this._reverse ? n - o : o];
              if (i) {
                if (i.entry) return Vt(t, i.entry);
                e = this._stack = Jt(i, e);
              }
              continue;
            }
            e = this._stack = this._stack.__prev;
          }
          return { value: void 0, done: !0 };
        });
      var se = y / 4,
        fe = y / 2,
        le = y / 4;
      function pe(t) {
        var e = xe();
        if (null == t) return e;
        if (de(t)) return t;
        var n = o(t),
          r = n.size;
        return 0 === r
          ? e
          : (Nt(r),
            r > 0 && r < y
              ? we(0, r, v, null, new ye(n.toArray()))
              : e.withMutations(function(t) {
                  t.setSize(r),
                    n.forEach(function(e, n) {
                      return t.set(n, e);
                    });
                }));
      }
      function de(t) {
        return !(!t || !t[he]);
      }
      e(pe, wt),
        (pe.of = function() {
          return this(arguments);
        }),
        (pe.prototype.toString = function() {
          return this.__toString("List [", "]");
        }),
        (pe.prototype.get = function(t, e) {
          if ((t = E(this, t)) >= 0 && t < this.size) {
            var n = ke(this, (t += this._origin));
            return n && n.array[t & b];
          }
          return e;
        }),
        (pe.prototype.set = function(t, e) {
          return (function(t, e, n) {
            if ((e = E(t, e)) != e) return t;
            if (e >= t.size || e < 0)
              return t.withMutations(function(t) {
                e < 0 ? Ee(t, e).set(0, n) : Ee(t, 0, e + 1).set(e, n);
              });
            e += t._origin;
            var r = t._tail,
              o = t._root,
              i = w(_);
            return (
              e >= Ce(t._capacity)
                ? (r = Oe(r, t.__ownerID, 0, e, n, i))
                : (o = Oe(o, t.__ownerID, t._level, e, n, i)),
              i.value
                ? t.__ownerID
                  ? ((t._root = o),
                    (t._tail = r),
                    (t.__hash = void 0),
                    (t.__altered = !0),
                    t)
                  : we(t._origin, t._capacity, t._level, o, r)
                : t
            );
          })(this, t, e);
        }),
        (pe.prototype.remove = function(t) {
          return this.has(t)
            ? 0 === t
              ? this.shift()
              : t === this.size - 1
              ? this.pop()
              : this.splice(t, 1)
            : this;
        }),
        (pe.prototype.insert = function(t, e) {
          return this.splice(t, 0, e);
        }),
        (pe.prototype.clear = function() {
          return 0 === this.size
            ? this
            : this.__ownerID
            ? ((this.size = this._origin = this._capacity = 0),
              (this._level = v),
              (this._root = this._tail = null),
              (this.__hash = void 0),
              (this.__altered = !0),
              this)
            : xe();
        }),
        (pe.prototype.push = function() {
          var t = arguments,
            e = this.size;
          return this.withMutations(function(n) {
            Ee(n, 0, e + t.length);
            for (var r = 0; r < t.length; r++) n.set(e + r, t[r]);
          });
        }),
        (pe.prototype.pop = function() {
          return Ee(this, 0, -1);
        }),
        (pe.prototype.unshift = function() {
          var t = arguments;
          return this.withMutations(function(e) {
            Ee(e, -t.length);
            for (var n = 0; n < t.length; n++) e.set(n, t[n]);
          });
        }),
        (pe.prototype.shift = function() {
          return Ee(this, 1);
        }),
        (pe.prototype.merge = function() {
          return je(this, void 0, arguments);
        }),
        (pe.prototype.mergeWith = function(e) {
          var n = t.call(arguments, 1);
          return je(this, e, n);
        }),
        (pe.prototype.mergeDeep = function() {
          return je(this, oe, arguments);
        }),
        (pe.prototype.mergeDeepWith = function(e) {
          var n = t.call(arguments, 1);
          return je(this, ie(e), n);
        }),
        (pe.prototype.setSize = function(t) {
          return Ee(this, 0, t);
        }),
        (pe.prototype.slice = function(t, e) {
          var n = this.size;
          return C(t, e, n) ? this : Ee(this, P(t, n), A(e, n));
        }),
        (pe.prototype.__iterator = function(t, e) {
          var n = 0,
            r = _e(this, e);
          return new L(function() {
            var e = r();
            return e === me ? { value: void 0, done: !0 } : D(t, n++, e);
          });
        }),
        (pe.prototype.__iterate = function(t, e) {
          for (
            var n, r = 0, o = _e(this, e);
            (n = o()) !== me && !1 !== t(n, r++, this);

          );
          return r;
        }),
        (pe.prototype.__ensureOwner = function(t) {
          return t === this.__ownerID
            ? this
            : t
            ? we(
                this._origin,
                this._capacity,
                this._level,
                this._root,
                this._tail,
                t,
                this.__hash
              )
            : ((this.__ownerID = t), this);
        }),
        (pe.isList = de);
      var he = "@@__IMMUTABLE_LIST__@@",
        ve = pe.prototype;
      function ye(t, e) {
        (this.array = t), (this.ownerID = e);
      }
      (ve[he] = !0),
        (ve.delete = ve.remove),
        (ve.setIn = $t.setIn),
        (ve.deleteIn = ve.removeIn = $t.removeIn),
        (ve.update = $t.update),
        (ve.updateIn = $t.updateIn),
        (ve.mergeIn = $t.mergeIn),
        (ve.mergeDeepIn = $t.mergeDeepIn),
        (ve.withMutations = $t.withMutations),
        (ve.asMutable = $t.asMutable),
        (ve.asImmutable = $t.asImmutable),
        (ve.wasAltered = $t.wasAltered),
        (ye.prototype.removeBefore = function(t, e, n) {
          if (n === e ? 1 << e : 0 === this.array.length) return this;
          var r = (n >>> e) & b;
          if (r >= this.array.length) return new ye([], t);
          var o,
            i = 0 === r;
          if (e > 0) {
            var a = this.array[r];
            if ((o = a && a.removeBefore(t, e - v, n)) === a && i) return this;
          }
          if (i && !o) return this;
          var u = Se(this, t);
          if (!i) for (var c = 0; c < r; c++) u.array[c] = void 0;
          return o && (u.array[r] = o), u;
        }),
        (ye.prototype.removeAfter = function(t, e, n) {
          if (n === (e ? 1 << e : 0) || 0 === this.array.length) return this;
          var r,
            o = ((n - 1) >>> e) & b;
          if (o >= this.array.length) return this;
          if (e > 0) {
            var i = this.array[o];
            if (
              (r = i && i.removeAfter(t, e - v, n)) === i &&
              o === this.array.length - 1
            )
              return this;
          }
          var a = Se(this, t);
          return a.array.splice(o + 1), r && (a.array[o] = r), a;
        });
      var be,
        ge,
        me = {};
      function _e(t, e) {
        var n = t._origin,
          r = t._capacity,
          o = Ce(r),
          i = t._tail;
        return a(t._root, t._level, 0);
        function a(t, u, c) {
          return 0 === u
            ? (function(t, a) {
                var u = a === o ? i && i.array : t && t.array,
                  c = a > n ? 0 : n - a,
                  s = r - a;
                return (
                  s > y && (s = y),
                  function() {
                    if (c === s) return me;
                    var t = e ? --s : c++;
                    return u && u[t];
                  }
                );
              })(t, c)
            : (function(t, o, i) {
                var u,
                  c = t && t.array,
                  s = i > n ? 0 : (n - i) >> o,
                  f = 1 + ((r - i) >> o);
                return (
                  f > y && (f = y),
                  function() {
                    for (;;) {
                      if (u) {
                        var t = u();
                        if (t !== me) return t;
                        u = null;
                      }
                      if (s === f) return me;
                      var n = e ? --f : s++;
                      u = a(c && c[n], o - v, i + (n << o));
                    }
                  }
                );
              })(t, u, c);
        }
      }
      function we(t, e, n, r, o, i, a) {
        var u = Object.create(ve);
        return (
          (u.size = e - t),
          (u._origin = t),
          (u._capacity = e),
          (u._level = n),
          (u._root = r),
          (u._tail = o),
          (u.__ownerID = i),
          (u.__hash = a),
          (u.__altered = !1),
          u
        );
      }
      function xe() {
        return be || (be = we(0, 0, v));
      }
      function Oe(t, e, n, r, o, i) {
        var a,
          u = (r >>> n) & b,
          c = t && u < t.array.length;
        if (!c && void 0 === o) return t;
        if (n > 0) {
          var s = t && t.array[u],
            f = Oe(s, e, n - v, r, o, i);
          return f === s ? t : (((a = Se(t, e)).array[u] = f), a);
        }
        return c && t.array[u] === o
          ? t
          : (x(i),
            (a = Se(t, e)),
            void 0 === o && u === a.array.length - 1
              ? a.array.pop()
              : (a.array[u] = o),
            a);
      }
      function Se(t, e) {
        return e && t && e === t.ownerID
          ? t
          : new ye(t ? t.array.slice() : [], e);
      }
      function ke(t, e) {
        if (e >= Ce(t._capacity)) return t._tail;
        if (e < 1 << (t._level + v)) {
          for (var n = t._root, r = t._level; n && r > 0; )
            (n = n.array[(e >>> r) & b]), (r -= v);
          return n;
        }
      }
      function Ee(t, e, n) {
        void 0 !== e && (e |= 0), void 0 !== n && (n |= 0);
        var r = t.__ownerID || new O(),
          o = t._origin,
          i = t._capacity,
          a = o + e,
          u = void 0 === n ? i : n < 0 ? i + n : o + n;
        if (a === o && u === i) return t;
        if (a >= u) return t.clear();
        for (var c = t._level, s = t._root, f = 0; a + f < 0; )
          (s = new ye(s && s.array.length ? [void 0, s] : [], r)),
            (f += 1 << (c += v));
        f && ((a += f), (o += f), (u += f), (i += f));
        for (var l = Ce(i), p = Ce(u); p >= 1 << (c + v); )
          (s = new ye(s && s.array.length ? [s] : [], r)), (c += v);
        var d = t._tail,
          h = p < l ? ke(t, u - 1) : p > l ? new ye([], r) : d;
        if (d && p > l && a < i && d.array.length) {
          for (var y = (s = Se(s, r)), g = c; g > v; g -= v) {
            var m = (l >>> g) & b;
            y = y.array[m] = Se(y.array[m], r);
          }
          y.array[(l >>> v) & b] = d;
        }
        if ((u < i && (h = h && h.removeAfter(r, 0, u)), a >= p))
          (a -= p),
            (u -= p),
            (c = v),
            (s = null),
            (h = h && h.removeBefore(r, 0, a));
        else if (a > o || p < l) {
          for (f = 0; s; ) {
            var _ = (a >>> c) & b;
            if ((_ !== p >>> c) & b) break;
            _ && (f += (1 << c) * _), (c -= v), (s = s.array[_]);
          }
          s && a > o && (s = s.removeBefore(r, c, a - f)),
            s && p < l && (s = s.removeAfter(r, c, p - f)),
            f && ((a -= f), (u -= f));
        }
        return t.__ownerID
          ? ((t.size = u - a),
            (t._origin = a),
            (t._capacity = u),
            (t._level = c),
            (t._root = s),
            (t._tail = h),
            (t.__hash = void 0),
            (t.__altered = !0),
            t)
          : we(a, u, c, s, h);
      }
      function je(t, e, n) {
        for (var r = [], i = 0, u = 0; u < n.length; u++) {
          var c = n[u],
            s = o(c);
          s.size > i && (i = s.size),
            a(c) ||
              (s = s.map(function(t) {
                return lt(t);
              })),
            r.push(s);
        }
        return i > t.size && (t = t.setSize(i)), ae(t, e, r);
      }
      function Ce(t) {
        return t < y ? 0 : ((t - 1) >>> v) << v;
      }
      function Pe(t) {
        return null == t
          ? ze()
          : Ae(t)
          ? t
          : ze().withMutations(function(e) {
              var n = r(t);
              Nt(n.size),
                n.forEach(function(t, n) {
                  return e.set(n, t);
                });
            });
      }
      function Ae(t) {
        return Dt(t) && f(t);
      }
      function Ie(t, e, n, r) {
        var o = Object.create(Pe.prototype);
        return (
          (o.size = t ? t.size : 0),
          (o._map = t),
          (o._list = e),
          (o.__ownerID = n),
          (o.__hash = r),
          o
        );
      }
      function ze() {
        return ge || (ge = Ie(Xt(), xe()));
      }
      function Te(t, e, n) {
        var r,
          o,
          i = t._map,
          a = t._list,
          u = i.get(e),
          c = void 0 !== u;
        if (n === g) {
          if (!c) return t;
          a.size >= y && a.size >= 2 * i.size
            ? ((o = a.filter(function(t, e) {
                return void 0 !== t && u !== e;
              })),
              (r = o
                .toKeyedSeq()
                .map(function(t) {
                  return t[0];
                })
                .flip()
                .toMap()),
              t.__ownerID && (r.__ownerID = o.__ownerID = t.__ownerID))
            : ((r = i.remove(e)),
              (o = u === a.size - 1 ? a.pop() : a.set(u, void 0)));
        } else if (c) {
          if (n === a.get(u)[1]) return t;
          (r = i), (o = a.set(u, [e, n]));
        } else (r = i.set(e, a.size)), (o = a.set(a.size, [e, n]));
        return t.__ownerID
          ? ((t.size = r.size),
            (t._map = r),
            (t._list = o),
            (t.__hash = void 0),
            t)
          : Ie(r, o);
      }
      function Me(t, e) {
        (this._iter = t), (this._useKeys = e), (this.size = t.size);
      }
      function Re(t) {
        (this._iter = t), (this.size = t.size);
      }
      function qe(t) {
        (this._iter = t), (this.size = t.size);
      }
      function Ne(t) {
        (this._iter = t), (this.size = t.size);
      }
      function Le(t) {
        var e = Ze(t);
        return (
          (e._iter = t),
          (e.size = t.size),
          (e.flip = function() {
            return t;
          }),
          (e.reverse = function() {
            var e = t.reverse.apply(this);
            return (
              (e.flip = function() {
                return t.reverse();
              }),
              e
            );
          }),
          (e.has = function(e) {
            return t.includes(e);
          }),
          (e.includes = function(e) {
            return t.has(e);
          }),
          (e.cacheResult = tn),
          (e.__iterateUncached = function(e, n) {
            var r = this;
            return t.__iterate(function(t, n) {
              return !1 !== e(n, t, r);
            }, n);
          }),
          (e.__iteratorUncached = function(e, n) {
            if (e === M) {
              var r = t.__iterator(e, n);
              return new L(function() {
                var t = r.next();
                if (!t.done) {
                  var e = t.value[0];
                  (t.value[0] = t.value[1]), (t.value[1] = e);
                }
                return t;
              });
            }
            return t.__iterator(e === T ? z : T, n);
          }),
          e
        );
      }
      function De(t, e, n) {
        var r = Ze(t);
        return (
          (r.size = t.size),
          (r.has = function(e) {
            return t.has(e);
          }),
          (r.get = function(r, o) {
            var i = t.get(r, g);
            return i === g ? o : e.call(n, i, r, t);
          }),
          (r.__iterateUncached = function(r, o) {
            var i = this;
            return t.__iterate(function(t, o, a) {
              return !1 !== r(e.call(n, t, o, a), o, i);
            }, o);
          }),
          (r.__iteratorUncached = function(r, o) {
            var i = t.__iterator(M, o);
            return new L(function() {
              var o = i.next();
              if (o.done) return o;
              var a = o.value,
                u = a[0];
              return D(r, u, e.call(n, a[1], u, t), o);
            });
          }),
          r
        );
      }
      function Fe(t, e) {
        var n = Ze(t);
        return (
          (n._iter = t),
          (n.size = t.size),
          (n.reverse = function() {
            return t;
          }),
          t.flip &&
            (n.flip = function() {
              var e = Le(t);
              return (
                (e.reverse = function() {
                  return t.flip();
                }),
                e
              );
            }),
          (n.get = function(n, r) {
            return t.get(e ? n : -1 - n, r);
          }),
          (n.has = function(n) {
            return t.has(e ? n : -1 - n);
          }),
          (n.includes = function(e) {
            return t.includes(e);
          }),
          (n.cacheResult = tn),
          (n.__iterate = function(e, n) {
            var r = this;
            return t.__iterate(function(t, n) {
              return e(t, n, r);
            }, !n);
          }),
          (n.__iterator = function(e, n) {
            return t.__iterator(e, !n);
          }),
          n
        );
      }
      function Ue(t, e, n, r) {
        var o = Ze(t);
        return (
          r &&
            ((o.has = function(r) {
              var o = t.get(r, g);
              return o !== g && !!e.call(n, o, r, t);
            }),
            (o.get = function(r, o) {
              var i = t.get(r, g);
              return i !== g && e.call(n, i, r, t) ? i : o;
            })),
          (o.__iterateUncached = function(o, i) {
            var a = this,
              u = 0;
            return (
              t.__iterate(function(t, i, c) {
                if (e.call(n, t, i, c)) return u++, o(t, r ? i : u - 1, a);
              }, i),
              u
            );
          }),
          (o.__iteratorUncached = function(o, i) {
            var a = t.__iterator(M, i),
              u = 0;
            return new L(function() {
              for (;;) {
                var i = a.next();
                if (i.done) return i;
                var c = i.value,
                  s = c[0],
                  f = c[1];
                if (e.call(n, f, s, t)) return D(o, r ? s : u++, f, i);
              }
            });
          }),
          o
        );
      }
      function $e(t, e, n, r) {
        var o = t.size;
        if (
          (void 0 !== e && (e |= 0),
          void 0 !== n && (n === 1 / 0 ? (n = o) : (n |= 0)),
          C(e, n, o))
        )
          return t;
        var i = P(e, o),
          a = A(n, o);
        if (i != i || a != a) return $e(t.toSeq().cacheResult(), e, n, r);
        var u,
          c = a - i;
        c == c && (u = c < 0 ? 0 : c);
        var s = Ze(t);
        return (
          (s.size = 0 === u ? u : (t.size && u) || void 0),
          !r &&
            ot(t) &&
            u >= 0 &&
            (s.get = function(e, n) {
              return (e = E(this, e)) >= 0 && e < u ? t.get(e + i, n) : n;
            }),
          (s.__iterateUncached = function(e, n) {
            var o = this;
            if (0 === u) return 0;
            if (n) return this.cacheResult().__iterate(e, n);
            var a = 0,
              c = !0,
              s = 0;
            return (
              t.__iterate(function(t, n) {
                if (!c || !(c = a++ < i))
                  return s++, !1 !== e(t, r ? n : s - 1, o) && s !== u;
              }),
              s
            );
          }),
          (s.__iteratorUncached = function(e, n) {
            if (0 !== u && n) return this.cacheResult().__iterator(e, n);
            var o = 0 !== u && t.__iterator(e, n),
              a = 0,
              c = 0;
            return new L(function() {
              for (; a++ < i; ) o.next();
              if (++c > u) return { value: void 0, done: !0 };
              var t = o.next();
              return r || e === T
                ? t
                : D(e, c - 1, e === z ? void 0 : t.value[1], t);
            });
          }),
          s
        );
      }
      function We(t, e, n, r) {
        var o = Ze(t);
        return (
          (o.__iterateUncached = function(o, i) {
            var a = this;
            if (i) return this.cacheResult().__iterate(o, i);
            var u = !0,
              c = 0;
            return (
              t.__iterate(function(t, i, s) {
                if (!u || !(u = e.call(n, t, i, s)))
                  return c++, o(t, r ? i : c - 1, a);
              }),
              c
            );
          }),
          (o.__iteratorUncached = function(o, i) {
            var a = this;
            if (i) return this.cacheResult().__iterator(o, i);
            var u = t.__iterator(M, i),
              c = !0,
              s = 0;
            return new L(function() {
              var t, i, f;
              do {
                if ((t = u.next()).done)
                  return r || o === T
                    ? t
                    : D(o, s++, o === z ? void 0 : t.value[1], t);
                var l = t.value;
                (i = l[0]), (f = l[1]), c && (c = e.call(n, f, i, a));
              } while (c);
              return o === M ? t : D(o, i, f, t);
            });
          }),
          o
        );
      }
      function Be(t, e, n) {
        var r = Ze(t);
        return (
          (r.__iterateUncached = function(r, o) {
            var i = 0,
              u = !1;
            return (
              (function t(c, s) {
                var f = this;
                c.__iterate(function(o, c) {
                  return (
                    (!e || s < e) && a(o)
                      ? t(o, s + 1)
                      : !1 === r(o, n ? c : i++, f) && (u = !0),
                    !u
                  );
                }, o);
              })(t, 0),
              i
            );
          }),
          (r.__iteratorUncached = function(r, o) {
            var i = t.__iterator(r, o),
              u = [],
              c = 0;
            return new L(function() {
              for (; i; ) {
                var t = i.next();
                if (!1 === t.done) {
                  var s = t.value;
                  if ((r === M && (s = s[1]), (e && !(u.length < e)) || !a(s)))
                    return n ? t : D(r, c++, s, t);
                  u.push(i), (i = s.__iterator(r, o));
                } else i = u.pop();
              }
              return { value: void 0, done: !0 };
            });
          }),
          r
        );
      }
      function He(t, e, n) {
        e || (e = en);
        var r = u(t),
          o = 0,
          i = t
            .toSeq()
            .map(function(e, r) {
              return [r, e, o++, n ? n(e, r, t) : e];
            })
            .toArray();
        return (
          i
            .sort(function(t, n) {
              return e(t[3], n[3]) || t[2] - n[2];
            })
            .forEach(
              r
                ? function(t, e) {
                    i[e].length = 2;
                  }
                : function(t, e) {
                    i[e] = t[1];
                  }
            ),
          r ? Y(i) : c(t) ? G(i) : V(i)
        );
      }
      function Ke(t, e, n) {
        if ((e || (e = en), n)) {
          var r = t
            .toSeq()
            .map(function(e, r) {
              return [e, n(e, r, t)];
            })
            .reduce(function(t, n) {
              return Ye(e, t[1], n[1]) ? n : t;
            });
          return r && r[0];
        }
        return t.reduce(function(t, n) {
          return Ye(e, t, n) ? n : t;
        });
      }
      function Ye(t, e, n) {
        var r = t(n, e);
        return (0 === r && n !== e && (null == n || n != n)) || r > 0;
      }
      function Ge(t, e, r) {
        var o = Ze(t);
        return (
          (o.size = new tt(r)
            .map(function(t) {
              return t.size;
            })
            .min()),
          (o.__iterate = function(t, e) {
            for (
              var n, r = this.__iterator(T, e), o = 0;
              !(n = r.next()).done && !1 !== t(n.value, o++, this);

            );
            return o;
          }),
          (o.__iteratorUncached = function(t, o) {
            var i = r.map(function(t) {
                return (t = n(t)), W(o ? t.reverse() : t);
              }),
              a = 0,
              u = !1;
            return new L(function() {
              var n;
              return (
                u ||
                  ((n = i.map(function(t) {
                    return t.next();
                  })),
                  (u = n.some(function(t) {
                    return t.done;
                  }))),
                u
                  ? { value: void 0, done: !0 }
                  : D(
                      t,
                      a++,
                      e.apply(
                        null,
                        n.map(function(t) {
                          return t.value;
                        })
                      )
                    )
              );
            });
          }),
          o
        );
      }
      function Ve(t, e) {
        return ot(t) ? e : t.constructor(e);
      }
      function Je(t) {
        if (t !== Object(t)) throw new TypeError("Expected [K, V] tuple: " + t);
      }
      function Qe(t) {
        return Nt(t.size), k(t);
      }
      function Xe(t) {
        return u(t) ? r : c(t) ? o : i;
      }
      function Ze(t) {
        return Object.create((u(t) ? Y : c(t) ? G : V).prototype);
      }
      function tn() {
        return this._iter.cacheResult
          ? (this._iter.cacheResult(), (this.size = this._iter.size), this)
          : K.prototype.cacheResult.call(this);
      }
      function en(t, e) {
        return t > e ? 1 : t < e ? -1 : 0;
      }
      function nn(t) {
        var e = W(t);
        if (!e) {
          if (!H(t))
            throw new TypeError("Expected iterable or array-like: " + t);
          e = W(n(t));
        }
        return e;
      }
      function rn(t, e) {
        var n,
          r = function(i) {
            if (i instanceof r) return i;
            if (!(this instanceof r)) return new r(i);
            if (!n) {
              n = !0;
              var a = Object.keys(t);
              !(function(t, e) {
                try {
                  e.forEach(
                    function(t, e) {
                      Object.defineProperty(t, e, {
                        get: function() {
                          return this.get(e);
                        },
                        set: function(t) {
                          bt(
                            this.__ownerID,
                            "Cannot set on an immutable record."
                          ),
                            this.set(e, t);
                        }
                      });
                    }.bind(void 0, t)
                  );
                } catch (t) {}
              })(o, a),
                (o.size = a.length),
                (o._name = e),
                (o._keys = a),
                (o._defaultValues = t);
            }
            this._map = Lt(i);
          },
          o = (r.prototype = Object.create(on));
        return (o.constructor = r), r;
      }
      e(Pe, Lt),
        (Pe.of = function() {
          return this(arguments);
        }),
        (Pe.prototype.toString = function() {
          return this.__toString("OrderedMap {", "}");
        }),
        (Pe.prototype.get = function(t, e) {
          var n = this._map.get(t);
          return void 0 !== n ? this._list.get(n)[1] : e;
        }),
        (Pe.prototype.clear = function() {
          return 0 === this.size
            ? this
            : this.__ownerID
            ? ((this.size = 0), this._map.clear(), this._list.clear(), this)
            : ze();
        }),
        (Pe.prototype.set = function(t, e) {
          return Te(this, t, e);
        }),
        (Pe.prototype.remove = function(t) {
          return Te(this, t, g);
        }),
        (Pe.prototype.wasAltered = function() {
          return this._map.wasAltered() || this._list.wasAltered();
        }),
        (Pe.prototype.__iterate = function(t, e) {
          var n = this;
          return this._list.__iterate(function(e) {
            return e && t(e[1], e[0], n);
          }, e);
        }),
        (Pe.prototype.__iterator = function(t, e) {
          return this._list.fromEntrySeq().__iterator(t, e);
        }),
        (Pe.prototype.__ensureOwner = function(t) {
          if (t === this.__ownerID) return this;
          var e = this._map.__ensureOwner(t),
            n = this._list.__ensureOwner(t);
          return t
            ? Ie(e, n, t, this.__hash)
            : ((this.__ownerID = t), (this._map = e), (this._list = n), this);
        }),
        (Pe.isOrderedMap = Ae),
        (Pe.prototype[h] = !0),
        (Pe.prototype.delete = Pe.prototype.remove),
        e(Me, Y),
        (Me.prototype.get = function(t, e) {
          return this._iter.get(t, e);
        }),
        (Me.prototype.has = function(t) {
          return this._iter.has(t);
        }),
        (Me.prototype.valueSeq = function() {
          return this._iter.valueSeq();
        }),
        (Me.prototype.reverse = function() {
          var t = this,
            e = Fe(this, !0);
          return (
            this._useKeys ||
              (e.valueSeq = function() {
                return t._iter.toSeq().reverse();
              }),
            e
          );
        }),
        (Me.prototype.map = function(t, e) {
          var n = this,
            r = De(this, t, e);
          return (
            this._useKeys ||
              (r.valueSeq = function() {
                return n._iter.toSeq().map(t, e);
              }),
            r
          );
        }),
        (Me.prototype.__iterate = function(t, e) {
          var n,
            r = this;
          return this._iter.__iterate(
            this._useKeys
              ? function(e, n) {
                  return t(e, n, r);
                }
              : ((n = e ? Qe(this) : 0),
                function(o) {
                  return t(o, e ? --n : n++, r);
                }),
            e
          );
        }),
        (Me.prototype.__iterator = function(t, e) {
          if (this._useKeys) return this._iter.__iterator(t, e);
          var n = this._iter.__iterator(T, e),
            r = e ? Qe(this) : 0;
          return new L(function() {
            var o = n.next();
            return o.done ? o : D(t, e ? --r : r++, o.value, o);
          });
        }),
        (Me.prototype[h] = !0),
        e(Re, G),
        (Re.prototype.includes = function(t) {
          return this._iter.includes(t);
        }),
        (Re.prototype.__iterate = function(t, e) {
          var n = this,
            r = 0;
          return this._iter.__iterate(function(e) {
            return t(e, r++, n);
          }, e);
        }),
        (Re.prototype.__iterator = function(t, e) {
          var n = this._iter.__iterator(T, e),
            r = 0;
          return new L(function() {
            var e = n.next();
            return e.done ? e : D(t, r++, e.value, e);
          });
        }),
        e(qe, V),
        (qe.prototype.has = function(t) {
          return this._iter.includes(t);
        }),
        (qe.prototype.__iterate = function(t, e) {
          var n = this;
          return this._iter.__iterate(function(e) {
            return t(e, e, n);
          }, e);
        }),
        (qe.prototype.__iterator = function(t, e) {
          var n = this._iter.__iterator(T, e);
          return new L(function() {
            var e = n.next();
            return e.done ? e : D(t, e.value, e.value, e);
          });
        }),
        e(Ne, Y),
        (Ne.prototype.entrySeq = function() {
          return this._iter.toSeq();
        }),
        (Ne.prototype.__iterate = function(t, e) {
          var n = this;
          return this._iter.__iterate(function(e) {
            if (e) {
              Je(e);
              var r = a(e);
              return t(r ? e.get(1) : e[1], r ? e.get(0) : e[0], n);
            }
          }, e);
        }),
        (Ne.prototype.__iterator = function(t, e) {
          var n = this._iter.__iterator(T, e);
          return new L(function() {
            for (;;) {
              var e = n.next();
              if (e.done) return e;
              var r = e.value;
              if (r) {
                Je(r);
                var o = a(r);
                return D(t, o ? r.get(0) : r[0], o ? r.get(1) : r[1], e);
              }
            }
          });
        }),
        (Re.prototype.cacheResult = Me.prototype.cacheResult = qe.prototype.cacheResult = Ne.prototype.cacheResult = tn),
        e(rn, _t),
        (rn.prototype.toString = function() {
          return this.__toString(un(this) + " {", "}");
        }),
        (rn.prototype.has = function(t) {
          return this._defaultValues.hasOwnProperty(t);
        }),
        (rn.prototype.get = function(t, e) {
          if (!this.has(t)) return e;
          var n = this._defaultValues[t];
          return this._map ? this._map.get(t, n) : n;
        }),
        (rn.prototype.clear = function() {
          if (this.__ownerID) return this._map && this._map.clear(), this;
          var t = this.constructor;
          return t._empty || (t._empty = an(this, Xt()));
        }),
        (rn.prototype.set = function(t, e) {
          if (!this.has(t))
            throw new Error(
              'Cannot set unknown key "' + t + '" on ' + un(this)
            );
          if (this._map && !this._map.has(t)) {
            var n = this._defaultValues[t];
            if (e === n) return this;
          }
          var r = this._map && this._map.set(t, e);
          return this.__ownerID || r === this._map ? this : an(this, r);
        }),
        (rn.prototype.remove = function(t) {
          if (!this.has(t)) return this;
          var e = this._map && this._map.remove(t);
          return this.__ownerID || e === this._map ? this : an(this, e);
        }),
        (rn.prototype.wasAltered = function() {
          return this._map.wasAltered();
        }),
        (rn.prototype.__iterator = function(t, e) {
          var n = this;
          return r(this._defaultValues)
            .map(function(t, e) {
              return n.get(e);
            })
            .__iterator(t, e);
        }),
        (rn.prototype.__iterate = function(t, e) {
          var n = this;
          return r(this._defaultValues)
            .map(function(t, e) {
              return n.get(e);
            })
            .__iterate(t, e);
        }),
        (rn.prototype.__ensureOwner = function(t) {
          if (t === this.__ownerID) return this;
          var e = this._map && this._map.__ensureOwner(t);
          return t
            ? an(this, e, t)
            : ((this.__ownerID = t), (this._map = e), this);
        });
      var on = rn.prototype;
      function an(t, e, n) {
        var r = Object.create(Object.getPrototypeOf(t));
        return (r._map = e), (r.__ownerID = n), r;
      }
      function un(t) {
        return t._name || t.constructor.name || "Record";
      }
      function cn(t) {
        return null == t
          ? vn()
          : sn(t) && !f(t)
          ? t
          : vn().withMutations(function(e) {
              var n = i(t);
              Nt(n.size),
                n.forEach(function(t) {
                  return e.add(t);
                });
            });
      }
      function sn(t) {
        return !(!t || !t[ln]);
      }
      (on.delete = on.remove),
        (on.deleteIn = on.removeIn = $t.removeIn),
        (on.merge = $t.merge),
        (on.mergeWith = $t.mergeWith),
        (on.mergeIn = $t.mergeIn),
        (on.mergeDeep = $t.mergeDeep),
        (on.mergeDeepWith = $t.mergeDeepWith),
        (on.mergeDeepIn = $t.mergeDeepIn),
        (on.setIn = $t.setIn),
        (on.update = $t.update),
        (on.updateIn = $t.updateIn),
        (on.withMutations = $t.withMutations),
        (on.asMutable = $t.asMutable),
        (on.asImmutable = $t.asImmutable),
        e(cn, xt),
        (cn.of = function() {
          return this(arguments);
        }),
        (cn.fromKeys = function(t) {
          return this(r(t).keySeq());
        }),
        (cn.prototype.toString = function() {
          return this.__toString("Set {", "}");
        }),
        (cn.prototype.has = function(t) {
          return this._map.has(t);
        }),
        (cn.prototype.add = function(t) {
          return dn(this, this._map.set(t, !0));
        }),
        (cn.prototype.remove = function(t) {
          return dn(this, this._map.remove(t));
        }),
        (cn.prototype.clear = function() {
          return dn(this, this._map.clear());
        }),
        (cn.prototype.union = function() {
          var e = t.call(arguments, 0);
          return 0 ===
            (e = e.filter(function(t) {
              return 0 !== t.size;
            })).length
            ? this
            : 0 !== this.size || this.__ownerID || 1 !== e.length
            ? this.withMutations(function(t) {
                for (var n = 0; n < e.length; n++)
                  i(e[n]).forEach(function(e) {
                    return t.add(e);
                  });
              })
            : this.constructor(e[0]);
        }),
        (cn.prototype.intersect = function() {
          var e = t.call(arguments, 0);
          if (0 === e.length) return this;
          e = e.map(function(t) {
            return i(t);
          });
          var n = this;
          return this.withMutations(function(t) {
            n.forEach(function(n) {
              e.every(function(t) {
                return t.includes(n);
              }) || t.remove(n);
            });
          });
        }),
        (cn.prototype.subtract = function() {
          var e = t.call(arguments, 0);
          if (0 === e.length) return this;
          e = e.map(function(t) {
            return i(t);
          });
          var n = this;
          return this.withMutations(function(t) {
            n.forEach(function(n) {
              e.some(function(t) {
                return t.includes(n);
              }) && t.remove(n);
            });
          });
        }),
        (cn.prototype.merge = function() {
          return this.union.apply(this, arguments);
        }),
        (cn.prototype.mergeWith = function(e) {
          var n = t.call(arguments, 1);
          return this.union.apply(this, n);
        }),
        (cn.prototype.sort = function(t) {
          return yn(He(this, t));
        }),
        (cn.prototype.sortBy = function(t, e) {
          return yn(He(this, e, t));
        }),
        (cn.prototype.wasAltered = function() {
          return this._map.wasAltered();
        }),
        (cn.prototype.__iterate = function(t, e) {
          var n = this;
          return this._map.__iterate(function(e, r) {
            return t(r, r, n);
          }, e);
        }),
        (cn.prototype.__iterator = function(t, e) {
          return this._map
            .map(function(t, e) {
              return e;
            })
            .__iterator(t, e);
        }),
        (cn.prototype.__ensureOwner = function(t) {
          if (t === this.__ownerID) return this;
          var e = this._map.__ensureOwner(t);
          return t
            ? this.__make(e, t)
            : ((this.__ownerID = t), (this._map = e), this);
        }),
        (cn.isSet = sn);
      var fn,
        ln = "@@__IMMUTABLE_SET__@@",
        pn = cn.prototype;
      function dn(t, e) {
        return t.__ownerID
          ? ((t.size = e.size), (t._map = e), t)
          : e === t._map
          ? t
          : 0 === e.size
          ? t.__empty()
          : t.__make(e);
      }
      function hn(t, e) {
        var n = Object.create(pn);
        return (n.size = t ? t.size : 0), (n._map = t), (n.__ownerID = e), n;
      }
      function vn() {
        return fn || (fn = hn(Xt()));
      }
      function yn(t) {
        return null == t
          ? wn()
          : bn(t)
          ? t
          : wn().withMutations(function(e) {
              var n = i(t);
              Nt(n.size),
                n.forEach(function(t) {
                  return e.add(t);
                });
            });
      }
      function bn(t) {
        return sn(t) && f(t);
      }
      (pn[ln] = !0),
        (pn.delete = pn.remove),
        (pn.mergeDeep = pn.merge),
        (pn.mergeDeepWith = pn.mergeWith),
        (pn.withMutations = $t.withMutations),
        (pn.asMutable = $t.asMutable),
        (pn.asImmutable = $t.asImmutable),
        (pn.__empty = vn),
        (pn.__make = hn),
        e(yn, cn),
        (yn.of = function() {
          return this(arguments);
        }),
        (yn.fromKeys = function(t) {
          return this(r(t).keySeq());
        }),
        (yn.prototype.toString = function() {
          return this.__toString("OrderedSet {", "}");
        }),
        (yn.isOrderedSet = bn);
      var gn,
        mn = yn.prototype;
      function _n(t, e) {
        var n = Object.create(mn);
        return (n.size = t ? t.size : 0), (n._map = t), (n.__ownerID = e), n;
      }
      function wn() {
        return gn || (gn = _n(ze()));
      }
      function xn(t) {
        return null == t ? Cn() : On(t) ? t : Cn().unshiftAll(t);
      }
      function On(t) {
        return !(!t || !t[kn]);
      }
      (mn[h] = !0),
        (mn.__empty = wn),
        (mn.__make = _n),
        e(xn, wt),
        (xn.of = function() {
          return this(arguments);
        }),
        (xn.prototype.toString = function() {
          return this.__toString("Stack [", "]");
        }),
        (xn.prototype.get = function(t, e) {
          var n = this._head;
          for (t = E(this, t); n && t--; ) n = n.next;
          return n ? n.value : e;
        }),
        (xn.prototype.peek = function() {
          return this._head && this._head.value;
        }),
        (xn.prototype.push = function() {
          if (0 === arguments.length) return this;
          for (
            var t = this.size + arguments.length,
              e = this._head,
              n = arguments.length - 1;
            n >= 0;
            n--
          )
            e = { value: arguments[n], next: e };
          return this.__ownerID
            ? ((this.size = t),
              (this._head = e),
              (this.__hash = void 0),
              (this.__altered = !0),
              this)
            : jn(t, e);
        }),
        (xn.prototype.pushAll = function(t) {
          if (0 === (t = o(t)).size) return this;
          Nt(t.size);
          var e = this.size,
            n = this._head;
          return (
            t.reverse().forEach(function(t) {
              e++, (n = { value: t, next: n });
            }),
            this.__ownerID
              ? ((this.size = e),
                (this._head = n),
                (this.__hash = void 0),
                (this.__altered = !0),
                this)
              : jn(e, n)
          );
        }),
        (xn.prototype.pop = function() {
          return this.slice(1);
        }),
        (xn.prototype.unshift = function() {
          return this.push.apply(this, arguments);
        }),
        (xn.prototype.unshiftAll = function(t) {
          return this.pushAll(t);
        }),
        (xn.prototype.shift = function() {
          return this.pop.apply(this, arguments);
        }),
        (xn.prototype.clear = function() {
          return 0 === this.size
            ? this
            : this.__ownerID
            ? ((this.size = 0),
              (this._head = void 0),
              (this.__hash = void 0),
              (this.__altered = !0),
              this)
            : Cn();
        }),
        (xn.prototype.slice = function(t, e) {
          if (C(t, e, this.size)) return this;
          var n = P(t, this.size),
            r = A(e, this.size);
          if (r !== this.size) return wt.prototype.slice.call(this, t, e);
          for (var o = this.size - n, i = this._head; n--; ) i = i.next;
          return this.__ownerID
            ? ((this.size = o),
              (this._head = i),
              (this.__hash = void 0),
              (this.__altered = !0),
              this)
            : jn(o, i);
        }),
        (xn.prototype.__ensureOwner = function(t) {
          return t === this.__ownerID
            ? this
            : t
            ? jn(this.size, this._head, t, this.__hash)
            : ((this.__ownerID = t), (this.__altered = !1), this);
        }),
        (xn.prototype.__iterate = function(t, e) {
          if (e) return this.reverse().__iterate(t);
          for (var n = 0, r = this._head; r && !1 !== t(r.value, n++, this); )
            r = r.next;
          return n;
        }),
        (xn.prototype.__iterator = function(t, e) {
          if (e) return this.reverse().__iterator(t);
          var n = 0,
            r = this._head;
          return new L(function() {
            if (r) {
              var e = r.value;
              return (r = r.next), D(t, n++, e);
            }
            return { value: void 0, done: !0 };
          });
        }),
        (xn.isStack = On);
      var Sn,
        kn = "@@__IMMUTABLE_STACK__@@",
        En = xn.prototype;
      function jn(t, e, n, r) {
        var o = Object.create(En);
        return (
          (o.size = t),
          (o._head = e),
          (o.__ownerID = n),
          (o.__hash = r),
          (o.__altered = !1),
          o
        );
      }
      function Cn() {
        return Sn || (Sn = jn(0));
      }
      function Pn(t, e) {
        var n = function(n) {
          t.prototype[n] = e[n];
        };
        return (
          Object.keys(e).forEach(n),
          Object.getOwnPropertySymbols &&
            Object.getOwnPropertySymbols(e).forEach(n),
          t
        );
      }
      (En[kn] = !0),
        (En.withMutations = $t.withMutations),
        (En.asMutable = $t.asMutable),
        (En.asImmutable = $t.asImmutable),
        (En.wasAltered = $t.wasAltered),
        (n.Iterator = L),
        Pn(n, {
          toArray: function() {
            Nt(this.size);
            var t = new Array(this.size || 0);
            return (
              this.valueSeq().__iterate(function(e, n) {
                t[n] = e;
              }),
              t
            );
          },
          toIndexedSeq: function() {
            return new Re(this);
          },
          toJS: function() {
            return this.toSeq()
              .map(function(t) {
                return t && "function" == typeof t.toJS ? t.toJS() : t;
              })
              .__toJS();
          },
          toJSON: function() {
            return this.toSeq()
              .map(function(t) {
                return t && "function" == typeof t.toJSON ? t.toJSON() : t;
              })
              .__toJS();
          },
          toKeyedSeq: function() {
            return new Me(this, !0);
          },
          toMap: function() {
            return Lt(this.toKeyedSeq());
          },
          toObject: function() {
            Nt(this.size);
            var t = {};
            return (
              this.__iterate(function(e, n) {
                t[n] = e;
              }),
              t
            );
          },
          toOrderedMap: function() {
            return Pe(this.toKeyedSeq());
          },
          toOrderedSet: function() {
            return yn(u(this) ? this.valueSeq() : this);
          },
          toSet: function() {
            return cn(u(this) ? this.valueSeq() : this);
          },
          toSetSeq: function() {
            return new qe(this);
          },
          toSeq: function() {
            return c(this)
              ? this.toIndexedSeq()
              : u(this)
              ? this.toKeyedSeq()
              : this.toSetSeq();
          },
          toStack: function() {
            return xn(u(this) ? this.valueSeq() : this);
          },
          toList: function() {
            return pe(u(this) ? this.valueSeq() : this);
          },
          toString: function() {
            return "[Iterable]";
          },
          __toString: function(t, e) {
            return 0 === this.size
              ? t + e
              : t +
                  " " +
                  this.toSeq()
                    .map(this.__toStringMapper)
                    .join(", ") +
                  " " +
                  e;
          },
          concat: function() {
            var e = t.call(arguments, 0);
            return Ve(
              this,
              (function(t, e) {
                var n = u(t),
                  o = [t]
                    .concat(e)
                    .map(function(t) {
                      return (
                        a(t)
                          ? n && (t = r(t))
                          : (t = n ? at(t) : ut(Array.isArray(t) ? t : [t])),
                        t
                      );
                    })
                    .filter(function(t) {
                      return 0 !== t.size;
                    });
                if (0 === o.length) return t;
                if (1 === o.length) {
                  var i = o[0];
                  if (i === t || (n && u(i)) || (c(t) && c(i))) return i;
                }
                var s = new tt(o);
                return (
                  n ? (s = s.toKeyedSeq()) : c(t) || (s = s.toSetSeq()),
                  ((s = s.flatten(!0)).size = o.reduce(function(t, e) {
                    if (void 0 !== t) {
                      var n = e.size;
                      if (void 0 !== n) return t + n;
                    }
                  }, 0)),
                  s
                );
              })(this, e)
            );
          },
          includes: function(t) {
            return this.some(function(e) {
              return ht(e, t);
            });
          },
          entries: function() {
            return this.__iterator(M);
          },
          every: function(t, e) {
            Nt(this.size);
            var n = !0;
            return (
              this.__iterate(function(r, o, i) {
                if (!t.call(e, r, o, i)) return (n = !1), !1;
              }),
              n
            );
          },
          filter: function(t, e) {
            return Ve(this, Ue(this, t, e, !0));
          },
          find: function(t, e, n) {
            var r = this.findEntry(t, e);
            return r ? r[1] : n;
          },
          forEach: function(t, e) {
            return Nt(this.size), this.__iterate(e ? t.bind(e) : t);
          },
          join: function(t) {
            Nt(this.size), (t = void 0 !== t ? "" + t : ",");
            var e = "",
              n = !0;
            return (
              this.__iterate(function(r) {
                n ? (n = !1) : (e += t), (e += null != r ? r.toString() : "");
              }),
              e
            );
          },
          keys: function() {
            return this.__iterator(z);
          },
          map: function(t, e) {
            return Ve(this, De(this, t, e));
          },
          reduce: function(t, e, n) {
            var r, o;
            return (
              Nt(this.size),
              arguments.length < 2 ? (o = !0) : (r = e),
              this.__iterate(function(e, i, a) {
                o ? ((o = !1), (r = e)) : (r = t.call(n, r, e, i, a));
              }),
              r
            );
          },
          reduceRight: function(t, e, n) {
            var r = this.toKeyedSeq().reverse();
            return r.reduce.apply(r, arguments);
          },
          reverse: function() {
            return Ve(this, Fe(this, !0));
          },
          slice: function(t, e) {
            return Ve(this, $e(this, t, e, !0));
          },
          some: function(t, e) {
            return !this.every(Mn(t), e);
          },
          sort: function(t) {
            return Ve(this, He(this, t));
          },
          values: function() {
            return this.__iterator(T);
          },
          butLast: function() {
            return this.slice(0, -1);
          },
          isEmpty: function() {
            return void 0 !== this.size
              ? 0 === this.size
              : !this.some(function() {
                  return !0;
                });
          },
          count: function(t, e) {
            return k(t ? this.toSeq().filter(t, e) : this);
          },
          countBy: function(t, e) {
            return (function(t, e, n) {
              var r = Lt().asMutable();
              return (
                t.__iterate(function(o, i) {
                  r.update(e.call(n, o, i, t), 0, function(t) {
                    return t + 1;
                  });
                }),
                r.asImmutable()
              );
            })(this, t, e);
          },
          equals: function(t) {
            return vt(this, t);
          },
          entrySeq: function() {
            var t = this;
            if (t._cache) return new tt(t._cache);
            var e = t
              .toSeq()
              .map(Tn)
              .toIndexedSeq();
            return (
              (e.fromEntrySeq = function() {
                return t.toSeq();
              }),
              e
            );
          },
          filterNot: function(t, e) {
            return this.filter(Mn(t), e);
          },
          findEntry: function(t, e, n) {
            var r = n;
            return (
              this.__iterate(function(n, o, i) {
                if (t.call(e, n, o, i)) return (r = [o, n]), !1;
              }),
              r
            );
          },
          findKey: function(t, e) {
            var n = this.findEntry(t, e);
            return n && n[0];
          },
          findLast: function(t, e, n) {
            return this.toKeyedSeq()
              .reverse()
              .find(t, e, n);
          },
          findLastEntry: function(t, e, n) {
            return this.toKeyedSeq()
              .reverse()
              .findEntry(t, e, n);
          },
          findLastKey: function(t, e) {
            return this.toKeyedSeq()
              .reverse()
              .findKey(t, e);
          },
          first: function() {
            return this.find(j);
          },
          flatMap: function(t, e) {
            return Ve(
              this,
              (function(t, e, n) {
                var r = Xe(t);
                return t
                  .toSeq()
                  .map(function(o, i) {
                    return r(e.call(n, o, i, t));
                  })
                  .flatten(!0);
              })(this, t, e)
            );
          },
          flatten: function(t) {
            return Ve(this, Be(this, t, !0));
          },
          fromEntrySeq: function() {
            return new Ne(this);
          },
          get: function(t, e) {
            return this.find(
              function(e, n) {
                return ht(n, t);
              },
              void 0,
              e
            );
          },
          getIn: function(t, e) {
            for (var n, r = this, o = nn(t); !(n = o.next()).done; ) {
              var i = n.value;
              if ((r = r && r.get ? r.get(i, g) : g) === g) return e;
            }
            return r;
          },
          groupBy: function(t, e) {
            return (function(t, e, n) {
              var r = u(t),
                o = (f(t) ? Pe() : Lt()).asMutable();
              t.__iterate(function(i, a) {
                o.update(e.call(n, i, a, t), function(t) {
                  return (t = t || []).push(r ? [a, i] : i), t;
                });
              });
              var i = Xe(t);
              return o.map(function(e) {
                return Ve(t, i(e));
              });
            })(this, t, e);
          },
          has: function(t) {
            return this.get(t, g) !== g;
          },
          hasIn: function(t) {
            return this.getIn(t, g) !== g;
          },
          isSubset: function(t) {
            return (
              (t = "function" == typeof t.includes ? t : n(t)),
              this.every(function(e) {
                return t.includes(e);
              })
            );
          },
          isSuperset: function(t) {
            return (t = "function" == typeof t.isSubset ? t : n(t)).isSubset(
              this
            );
          },
          keyOf: function(t) {
            return this.findKey(function(e) {
              return ht(e, t);
            });
          },
          keySeq: function() {
            return this.toSeq()
              .map(zn)
              .toIndexedSeq();
          },
          last: function() {
            return this.toSeq()
              .reverse()
              .first();
          },
          lastKeyOf: function(t) {
            return this.toKeyedSeq()
              .reverse()
              .keyOf(t);
          },
          max: function(t) {
            return Ke(this, t);
          },
          maxBy: function(t, e) {
            return Ke(this, e, t);
          },
          min: function(t) {
            return Ke(this, t ? Rn(t) : Ln);
          },
          minBy: function(t, e) {
            return Ke(this, e ? Rn(e) : Ln, t);
          },
          rest: function() {
            return this.slice(1);
          },
          skip: function(t) {
            return this.slice(Math.max(0, t));
          },
          skipLast: function(t) {
            return Ve(
              this,
              this.toSeq()
                .reverse()
                .skip(t)
                .reverse()
            );
          },
          skipWhile: function(t, e) {
            return Ve(this, We(this, t, e, !0));
          },
          skipUntil: function(t, e) {
            return this.skipWhile(Mn(t), e);
          },
          sortBy: function(t, e) {
            return Ve(this, He(this, e, t));
          },
          take: function(t) {
            return this.slice(0, Math.max(0, t));
          },
          takeLast: function(t) {
            return Ve(
              this,
              this.toSeq()
                .reverse()
                .take(t)
                .reverse()
            );
          },
          takeWhile: function(t, e) {
            return Ve(
              this,
              (function(t, e, n) {
                var r = Ze(t);
                return (
                  (r.__iterateUncached = function(r, o) {
                    var i = this;
                    if (o) return this.cacheResult().__iterate(r, o);
                    var a = 0;
                    return (
                      t.__iterate(function(t, o, u) {
                        return e.call(n, t, o, u) && ++a && r(t, o, i);
                      }),
                      a
                    );
                  }),
                  (r.__iteratorUncached = function(r, o) {
                    var i = this;
                    if (o) return this.cacheResult().__iterator(r, o);
                    var a = t.__iterator(M, o),
                      u = !0;
                    return new L(function() {
                      if (!u) return { value: void 0, done: !0 };
                      var t = a.next();
                      if (t.done) return t;
                      var o = t.value,
                        c = o[0],
                        s = o[1];
                      return e.call(n, s, c, i)
                        ? r === M
                          ? t
                          : D(r, c, s, t)
                        : ((u = !1), { value: void 0, done: !0 });
                    });
                  }),
                  r
                );
              })(this, t, e)
            );
          },
          takeUntil: function(t, e) {
            return this.takeWhile(Mn(t), e);
          },
          valueSeq: function() {
            return this.toIndexedSeq();
          },
          hashCode: function() {
            return (
              this.__hash ||
              (this.__hash = (function(t) {
                if (t.size === 1 / 0) return 0;
                var e = f(t),
                  n = u(t),
                  r = e ? 1 : 0;
                return (function(t, e) {
                  return (
                    (e = Ot(e, 3432918353)),
                    (e = Ot((e << 15) | (e >>> -15), 461845907)),
                    (e = Ot((e << 13) | (e >>> -13), 5)),
                    (e = Ot(
                      (e = ((e + 3864292196) | 0) ^ t) ^ (e >>> 16),
                      2246822507
                    )),
                    (e = St((e = Ot(e ^ (e >>> 13), 3266489909)) ^ (e >>> 16)))
                  );
                })(
                  t.__iterate(
                    n
                      ? e
                        ? function(t, e) {
                            r = (31 * r + Dn(kt(t), kt(e))) | 0;
                          }
                        : function(t, e) {
                            r = (r + Dn(kt(t), kt(e))) | 0;
                          }
                      : e
                      ? function(t) {
                          r = (31 * r + kt(t)) | 0;
                        }
                      : function(t) {
                          r = (r + kt(t)) | 0;
                        }
                  ),
                  r
                );
              })(this))
            );
          }
        });
      var An = n.prototype;
      (An[l] = !0),
        (An[N] = An.values),
        (An.__toJS = An.toArray),
        (An.__toStringMapper = qn),
        (An.inspect = An.toSource = function() {
          return this.toString();
        }),
        (An.chain = An.flatMap),
        (An.contains = An.includes),
        Pn(r, {
          flip: function() {
            return Ve(this, Le(this));
          },
          mapEntries: function(t, e) {
            var n = this,
              r = 0;
            return Ve(
              this,
              this.toSeq()
                .map(function(o, i) {
                  return t.call(e, [i, o], r++, n);
                })
                .fromEntrySeq()
            );
          },
          mapKeys: function(t, e) {
            var n = this;
            return Ve(
              this,
              this.toSeq()
                .flip()
                .map(function(r, o) {
                  return t.call(e, r, o, n);
                })
                .flip()
            );
          }
        });
      var In = r.prototype;
      function zn(t, e) {
        return e;
      }
      function Tn(t, e) {
        return [e, t];
      }
      function Mn(t) {
        return function() {
          return !t.apply(this, arguments);
        };
      }
      function Rn(t) {
        return function() {
          return -t.apply(this, arguments);
        };
      }
      function qn(t) {
        return "string" == typeof t ? JSON.stringify(t) : String(t);
      }
      function Nn() {
        return S(arguments);
      }
      function Ln(t, e) {
        return t < e ? 1 : t > e ? -1 : 0;
      }
      function Dn(t, e) {
        return (t ^ (e + 2654435769 + (t << 6) + (t >> 2))) | 0;
      }
      return (
        (In[p] = !0),
        (In[N] = An.entries),
        (In.__toJS = An.toObject),
        (In.__toStringMapper = function(t, e) {
          return JSON.stringify(e) + ": " + qn(t);
        }),
        Pn(o, {
          toKeyedSeq: function() {
            return new Me(this, !1);
          },
          filter: function(t, e) {
            return Ve(this, Ue(this, t, e, !1));
          },
          findIndex: function(t, e) {
            var n = this.findEntry(t, e);
            return n ? n[0] : -1;
          },
          indexOf: function(t) {
            var e = this.keyOf(t);
            return void 0 === e ? -1 : e;
          },
          lastIndexOf: function(t) {
            var e = this.lastKeyOf(t);
            return void 0 === e ? -1 : e;
          },
          reverse: function() {
            return Ve(this, Fe(this, !1));
          },
          slice: function(t, e) {
            return Ve(this, $e(this, t, e, !1));
          },
          splice: function(t, e) {
            var n = arguments.length;
            if (((e = Math.max(0 | e, 0)), 0 === n || (2 === n && !e)))
              return this;
            t = P(t, t < 0 ? this.count() : this.size);
            var r = this.slice(0, t);
            return Ve(
              this,
              1 === n ? r : r.concat(S(arguments, 2), this.slice(t + e))
            );
          },
          findLastIndex: function(t, e) {
            var n = this.findLastEntry(t, e);
            return n ? n[0] : -1;
          },
          first: function() {
            return this.get(0);
          },
          flatten: function(t) {
            return Ve(this, Be(this, t, !1));
          },
          get: function(t, e) {
            return (t = E(this, t)) < 0 ||
              this.size === 1 / 0 ||
              (void 0 !== this.size && t > this.size)
              ? e
              : this.find(
                  function(e, n) {
                    return n === t;
                  },
                  void 0,
                  e
                );
          },
          has: function(t) {
            return (
              (t = E(this, t)) >= 0 &&
              (void 0 !== this.size
                ? this.size === 1 / 0 || t < this.size
                : -1 !== this.indexOf(t))
            );
          },
          interpose: function(t) {
            return Ve(
              this,
              (function(t, e) {
                var n = Ze(t);
                return (
                  (n.size = t.size && 2 * t.size - 1),
                  (n.__iterateUncached = function(n, r) {
                    var o = this,
                      i = 0;
                    return (
                      t.__iterate(function(t, r) {
                        return (
                          (!i || !1 !== n(e, i++, o)) && !1 !== n(t, i++, o)
                        );
                      }, r),
                      i
                    );
                  }),
                  (n.__iteratorUncached = function(n, r) {
                    var o,
                      i = t.__iterator(T, r),
                      a = 0;
                    return new L(function() {
                      return (!o || a % 2) && (o = i.next()).done
                        ? o
                        : a % 2
                        ? D(n, a++, e)
                        : D(n, a++, o.value, o);
                    });
                  }),
                  n
                );
              })(this, t)
            );
          },
          interleave: function() {
            var t = [this].concat(S(arguments)),
              e = Ge(this.toSeq(), G.of, t),
              n = e.flatten(!0);
            return e.size && (n.size = e.size * t.length), Ve(this, n);
          },
          keySeq: function() {
            return gt(0, this.size);
          },
          last: function() {
            return this.get(-1);
          },
          skipWhile: function(t, e) {
            return Ve(this, We(this, t, e, !1));
          },
          zip: function() {
            return Ve(this, Ge(this, Nn, [this].concat(S(arguments))));
          },
          zipWith: function(t) {
            var e = S(arguments);
            return (e[0] = this), Ve(this, Ge(this, t, e));
          }
        }),
        (o.prototype[d] = !0),
        (o.prototype[h] = !0),
        Pn(i, {
          get: function(t, e) {
            return this.has(t) ? t : e;
          },
          includes: function(t) {
            return this.has(t);
          },
          keySeq: function() {
            return this.valueSeq();
          }
        }),
        (i.prototype.has = An.includes),
        (i.prototype.contains = i.prototype.includes),
        Pn(Y, r.prototype),
        Pn(G, o.prototype),
        Pn(V, i.prototype),
        Pn(_t, r.prototype),
        Pn(wt, o.prototype),
        Pn(xt, i.prototype),
        {
          Iterable: n,
          Seq: K,
          Collection: mt,
          Map: Lt,
          OrderedMap: Pe,
          List: pe,
          Stack: xn,
          Set: cn,
          OrderedSet: yn,
          Record: rn,
          Range: gt,
          Repeat: yt,
          is: ht,
          fromJS: lt
        }
      );
    })();
  },
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = void 0;
    e.default = function() {
      return (
        r ||
        (r = angular
          .element(jQuery('[ng-controller="EditPostWidgetController"]'))
          .scope())
      );
    };
  },
  function(t, e, n) {
    "use strict";
    /*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var r =
        Object.getOwnPropertySymbols,
      o = Object.prototype.hasOwnProperty,
      i = Object.prototype.propertyIsEnumerable;
    t.exports = (function() {
      try {
        if (!Object.assign) return !1;
        var t = new String("abc");
        if (((t[5] = "de"), "5" === Object.getOwnPropertyNames(t)[0]))
          return !1;
        for (var e = {}, n = 0; n < 10; n++)
          e["_" + String.fromCharCode(n)] = n;
        if (
          "0123456789" !==
          Object.getOwnPropertyNames(e)
            .map(function(t) {
              return e[t];
            })
            .join("")
        )
          return !1;
        var r = {};
        return (
          "abcdefghijklmnopqrst".split("").forEach(function(t) {
            r[t] = t;
          }),
          "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
        );
      } catch (t) {
        return !1;
      }
    })()
      ? Object.assign
      : function(t, e) {
          for (
            var n,
              a,
              u = (function(t) {
                if (null == t)
                  throw new TypeError(
                    "Object.assign cannot be called with null or undefined"
                  );
                return Object(t);
              })(t),
              c = 1;
            c < arguments.length;
            c++
          ) {
            for (var s in (n = Object(arguments[c])))
              o.call(n, s) && (u[s] = n[s]);
            if (r) {
              a = r(n);
              for (var f = 0; f < a.length; f++)
                i.call(n, a[f]) && (u[a[f]] = n[a[f]]);
            }
          }
          return u;
        };
  },
  function(t, e, n) {
    "use strict";
    /** @license React v16.7.0
     * react.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */ var r = n(42),
      o = "function" == typeof Symbol && Symbol.for,
      i = o ? Symbol.for("react.element") : 60103,
      a = o ? Symbol.for("react.portal") : 60106,
      u = o ? Symbol.for("react.fragment") : 60107,
      c = o ? Symbol.for("react.strict_mode") : 60108,
      s = o ? Symbol.for("react.profiler") : 60114,
      f = o ? Symbol.for("react.provider") : 60109,
      l = o ? Symbol.for("react.context") : 60110,
      p = o ? Symbol.for("react.concurrent_mode") : 60111,
      d = o ? Symbol.for("react.forward_ref") : 60112,
      h = o ? Symbol.for("react.suspense") : 60113,
      v = o ? Symbol.for("react.memo") : 60115,
      y = o ? Symbol.for("react.lazy") : 60116,
      b = "function" == typeof Symbol && Symbol.iterator;
    function g(t) {
      for (
        var e = arguments.length - 1,
          n = "https://reactjs.org/docs/error-decoder.html?invariant=" + t,
          r = 0;
        r < e;
        r++
      )
        n += "&args[]=" + encodeURIComponent(arguments[r + 1]);
      !(function(t, e, n, r, o, i, a, u) {
        if (!t) {
          if (((t = void 0), void 0 === e))
            t = Error(
              "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
            );
          else {
            var c = [n, r, o, i, a, u],
              s = 0;
            (t = Error(
              e.replace(/%s/g, function() {
                return c[s++];
              })
            )).name = "Invariant Violation";
          }
          throw ((t.framesToPop = 1), t);
        }
      })(
        !1,
        "Minified React error #" +
          t +
          "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",
        n
      );
    }
    var m = {
        isMounted: function() {
          return !1;
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
      },
      _ = {};
    function w(t, e, n) {
      (this.props = t),
        (this.context = e),
        (this.refs = _),
        (this.updater = n || m);
    }
    function x() {}
    function O(t, e, n) {
      (this.props = t),
        (this.context = e),
        (this.refs = _),
        (this.updater = n || m);
    }
    (w.prototype.isReactComponent = {}),
      (w.prototype.setState = function(t, e) {
        "object" != typeof t && "function" != typeof t && null != t && g("85"),
          this.updater.enqueueSetState(this, t, e, "setState");
      }),
      (w.prototype.forceUpdate = function(t) {
        this.updater.enqueueForceUpdate(this, t, "forceUpdate");
      }),
      (x.prototype = w.prototype);
    var S = (O.prototype = new x());
    (S.constructor = O), r(S, w.prototype), (S.isPureReactComponent = !0);
    var k = { current: null, currentDispatcher: null },
      E = Object.prototype.hasOwnProperty,
      j = { key: !0, ref: !0, __self: !0, __source: !0 };
    function C(t, e, n) {
      var r = void 0,
        o = {},
        a = null,
        u = null;
      if (null != e)
        for (r in (void 0 !== e.ref && (u = e.ref),
        void 0 !== e.key && (a = "" + e.key),
        e))
          E.call(e, r) && !j.hasOwnProperty(r) && (o[r] = e[r]);
      var c = arguments.length - 2;
      if (1 === c) o.children = n;
      else if (1 < c) {
        for (var s = Array(c), f = 0; f < c; f++) s[f] = arguments[f + 2];
        o.children = s;
      }
      if (t && t.defaultProps)
        for (r in (c = t.defaultProps)) void 0 === o[r] && (o[r] = c[r]);
      return {
        $$typeof: i,
        type: t,
        key: a,
        ref: u,
        props: o,
        _owner: k.current
      };
    }
    function P(t) {
      return "object" == typeof t && null !== t && t.$$typeof === i;
    }
    var A = /\/+/g,
      I = [];
    function z(t, e, n, r) {
      if (I.length) {
        var o = I.pop();
        return (
          (o.result = t),
          (o.keyPrefix = e),
          (o.func = n),
          (o.context = r),
          (o.count = 0),
          o
        );
      }
      return { result: t, keyPrefix: e, func: n, context: r, count: 0 };
    }
    function T(t) {
      (t.result = null),
        (t.keyPrefix = null),
        (t.func = null),
        (t.context = null),
        (t.count = 0),
        10 > I.length && I.push(t);
    }
    function M(t, e, n) {
      return null == t
        ? 0
        : (function t(e, n, r, o) {
            var u = typeof e;
            ("undefined" !== u && "boolean" !== u) || (e = null);
            var c = !1;
            if (null === e) c = !0;
            else
              switch (u) {
                case "string":
                case "number":
                  c = !0;
                  break;
                case "object":
                  switch (e.$$typeof) {
                    case i:
                    case a:
                      c = !0;
                  }
              }
            if (c) return r(o, e, "" === n ? "." + R(e, 0) : n), 1;
            if (((c = 0), (n = "" === n ? "." : n + ":"), Array.isArray(e)))
              for (var s = 0; s < e.length; s++) {
                var f = n + R((u = e[s]), s);
                c += t(u, f, r, o);
              }
            else if (
              ((f =
                null === e || "object" != typeof e
                  ? null
                  : "function" == typeof (f = (b && e[b]) || e["@@iterator"])
                  ? f
                  : null),
              "function" == typeof f)
            )
              for (e = f.call(e), s = 0; !(u = e.next()).done; )
                c += t((u = u.value), (f = n + R(u, s++)), r, o);
            else
              "object" === u &&
                g(
                  "31",
                  "[object Object]" == (r = "" + e)
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : r,
                  ""
                );
            return c;
          })(t, "", e, n);
    }
    function R(t, e) {
      return "object" == typeof t && null !== t && null != t.key
        ? (function(t) {
            var e = { "=": "=0", ":": "=2" };
            return (
              "$" +
              ("" + t).replace(/[=:]/g, function(t) {
                return e[t];
              })
            );
          })(t.key)
        : e.toString(36);
    }
    function q(t, e) {
      t.func.call(t.context, e, t.count++);
    }
    function N(t, e, n) {
      var r = t.result,
        o = t.keyPrefix;
      (t = t.func.call(t.context, e, t.count++)),
        Array.isArray(t)
          ? L(t, r, n, function(t) {
              return t;
            })
          : null != t &&
            (P(t) &&
              (t = (function(t, e) {
                return {
                  $$typeof: i,
                  type: t.type,
                  key: e,
                  ref: t.ref,
                  props: t.props,
                  _owner: t._owner
                };
              })(
                t,
                o +
                  (!t.key || (e && e.key === t.key)
                    ? ""
                    : ("" + t.key).replace(A, "$&/") + "/") +
                  n
              )),
            r.push(t));
    }
    function L(t, e, n, r, o) {
      var i = "";
      null != n && (i = ("" + n).replace(A, "$&/") + "/"),
        M(t, N, (e = z(e, i, r, o))),
        T(e);
    }
    var D = {
        Children: {
          map: function(t, e, n) {
            if (null == t) return t;
            var r = [];
            return L(t, r, null, e, n), r;
          },
          forEach: function(t, e, n) {
            if (null == t) return t;
            M(t, q, (e = z(null, null, e, n))), T(e);
          },
          count: function(t) {
            return M(
              t,
              function() {
                return null;
              },
              null
            );
          },
          toArray: function(t) {
            var e = [];
            return (
              L(t, e, null, function(t) {
                return t;
              }),
              e
            );
          },
          only: function(t) {
            return P(t) || g("143"), t;
          }
        },
        createRef: function() {
          return { current: null };
        },
        Component: w,
        PureComponent: O,
        createContext: function(t, e) {
          return (
            void 0 === e && (e = null),
            ((t = {
              $$typeof: l,
              _calculateChangedBits: e,
              _currentValue: t,
              _currentValue2: t,
              _threadCount: 0,
              Provider: null,
              Consumer: null
            }).Provider = { $$typeof: f, _context: t }),
            (t.Consumer = t)
          );
        },
        forwardRef: function(t) {
          return { $$typeof: d, render: t };
        },
        lazy: function(t) {
          return { $$typeof: y, _ctor: t, _status: -1, _result: null };
        },
        memo: function(t, e) {
          return { $$typeof: v, type: t, compare: void 0 === e ? null : e };
        },
        Fragment: u,
        StrictMode: c,
        Suspense: h,
        createElement: C,
        cloneElement: function(t, e, n) {
          null == t && g("267", t);
          var o = void 0,
            a = r({}, t.props),
            u = t.key,
            c = t.ref,
            s = t._owner;
          if (null != e) {
            void 0 !== e.ref && ((c = e.ref), (s = k.current)),
              void 0 !== e.key && (u = "" + e.key);
            var f = void 0;
            for (o in (t.type &&
              t.type.defaultProps &&
              (f = t.type.defaultProps),
            e))
              E.call(e, o) &&
                !j.hasOwnProperty(o) &&
                (a[o] = void 0 === e[o] && void 0 !== f ? f[o] : e[o]);
          }
          if (1 === (o = arguments.length - 2)) a.children = n;
          else if (1 < o) {
            f = Array(o);
            for (var l = 0; l < o; l++) f[l] = arguments[l + 2];
            a.children = f;
          }
          return {
            $$typeof: i,
            type: t.type,
            key: u,
            ref: c,
            props: a,
            _owner: s
          };
        },
        createFactory: function(t) {
          var e = C.bind(null, t);
          return (e.type = t), e;
        },
        isValidElement: P,
        version: "16.7.0",
        unstable_ConcurrentMode: p,
        unstable_Profiler: s,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
          ReactCurrentOwner: k,
          assign: r
        }
      },
      F = { default: D },
      U = (F && D) || F;
    t.exports = U.default || U;
  },
  function(t, e, n) {
    "use strict";
    function r(t) {
      return function(e) {
        var n = e.dispatch,
          r = e.getState;
        return function(e) {
          return function(o) {
            return "function" == typeof o ? o(n, r, t) : e(o);
          };
        };
      };
    }
    n.r(e);
    var o = r();
    (o.withExtraArgument = r), (e.default = o);
  },
  function(t, e, n) {
    "use strict";
    var r = n(50);
    function o() {}
    t.exports = function() {
      function t(t, e, n, o, i, a) {
        if (a !== r) {
          var u = new Error(
            "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
          );
          throw ((u.name = "Invariant Violation"), u);
        }
      }
      function e() {
        return t;
      }
      t.isRequired = t;
      var n = {
        array: t,
        bool: t,
        func: t,
        number: t,
        object: t,
        string: t,
        symbol: t,
        any: t,
        arrayOf: e,
        element: t,
        instanceOf: e,
        node: t,
        objectOf: e,
        oneOf: e,
        oneOfType: e,
        shape: e,
        exact: e
      };
      return (n.checkPropTypes = o), (n.PropTypes = n), n;
    };
  },
  function(t, e, n) {
    "use strict";
    t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  },
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = (function() {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      return function(e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    })();
    var o = (function() {
      function t() {
        !(function(t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, t);
      }
      return (
        r(t, [
          {
            key: "getW",
            value: function(t) {
              return wordlift.classificationBoxes.reduce(function(e, n) {
                return -1 === n.registeredTypes.indexOf(t.mainType) ? e : n.id;
              }, "unknown");
            }
          }
        ]),
        t
      );
    })();
    e.default = new o();
  },
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = (function(t) {
      if (t && t.__esModule) return t;
      var e = {};
      if (null != t)
        for (var n in t)
          Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
      return (e.default = t), e;
    })(n(15));
    e.default = function() {
      var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
        e = arguments[1];
      switch (e.type) {
        case r.ANNOTATION:
          return void 0 === e.annotation ? null : e.annotation;
        default:
          return t;
      }
    };
  },
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = (function(t) {
      if (t && t.__esModule) return t;
      var e = {};
      if (null != t)
        for (var n in t)
          Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
      return (e.default = t), e;
    })(n(15));
    e.default = function() {
      var t =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : "SHOW_ALL",
        e = arguments[1];
      switch (e.type) {
        case r.SET_ENTITY_FILTER:
          return e.filter;
        case r.ANNOTATION:
          return void 0 === e.annotation ? "SHOW_ALL" : "SHOW_ANNOTATION";
        default:
          return t;
      }
    };
  },
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = (function(t) {
      if (t && t.__esModule) return t;
      var e = {};
      if (null != t)
        for (var n in t)
          Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
      return (e.default = t), e;
    })(n(15));
    e.default = function() {
      var t =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : { selection: "" },
        e = arguments[1];
      switch (e.type) {
        case r.EDITOR_SELECTION_CHANGED:
          return Object.assign({}, t, { selection: e.selection });
        default:
          return t;
      }
    };
  },
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r,
      o,
      i,
      a = ((r = [
        "\n\tbackground-color: #fff;\n\t// padding: 8px 0;\n\n\t// Compensate accordion margin bottom.\n\tposition: relative;\n\t// top: -8px;\n\n\t// Size.\n\tmax-width: 254px;\n\n\t// Fixing position in responsive.\n\tmargin: auto;\n\tmargin-bottom: 8px;\n"
      ]),
      (o = [
        "\n\tbackground-color: #fff;\n\t// padding: 8px 0;\n\n\t// Compensate accordion margin bottom.\n\tposition: relative;\n\t// top: -8px;\n\n\t// Size.\n\tmax-width: 254px;\n\n\t// Fixing position in responsive.\n\tmargin: auto;\n\tmargin-bottom: 8px;\n"
      ]),
      Object.freeze(
        Object.defineProperties(r, { raw: { value: Object.freeze(o) } })
      )),
      u = n(4);
    var c = ((i = u) && i.__esModule ? i : { default: i }).default.div(a);
    e.default = c;
  },
  function(t, e) {
    var n,
      r,
      o = (t.exports = {});
    function i() {
      throw new Error("setTimeout has not been defined");
    }
    function a() {
      throw new Error("clearTimeout has not been defined");
    }
    function u(t) {
      if (n === setTimeout) return setTimeout(t, 0);
      if ((n === i || !n) && setTimeout)
        return (n = setTimeout), setTimeout(t, 0);
      try {
        return n(t, 0);
      } catch (e) {
        try {
          return n.call(null, t, 0);
        } catch (e) {
          return n.call(this, t, 0);
        }
      }
    }
    !(function() {
      try {
        n = "function" == typeof setTimeout ? setTimeout : i;
      } catch (t) {
        n = i;
      }
      try {
        r = "function" == typeof clearTimeout ? clearTimeout : a;
      } catch (t) {
        r = a;
      }
    })();
    var c,
      s = [],
      f = !1,
      l = -1;
    function p() {
      f &&
        c &&
        ((f = !1), c.length ? (s = c.concat(s)) : (l = -1), s.length && d());
    }
    function d() {
      if (!f) {
        var t = u(p);
        f = !0;
        for (var e = s.length; e; ) {
          for (c = s, s = []; ++l < e; ) c && c[l].run();
          (l = -1), (e = s.length);
        }
        (c = null),
          (f = !1),
          (function(t) {
            if (r === clearTimeout) return clearTimeout(t);
            if ((r === a || !r) && clearTimeout)
              return (r = clearTimeout), clearTimeout(t);
            try {
              r(t);
            } catch (e) {
              try {
                return r.call(null, t);
              } catch (e) {
                return r.call(this, t);
              }
            }
          })(t);
      }
    }
    function h(t, e) {
      (this.fun = t), (this.array = e);
    }
    function v() {}
    (o.nextTick = function(t) {
      var e = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
      s.push(new h(t, e)), 1 !== s.length || f || u(d);
    }),
      (h.prototype.run = function() {
        this.fun.apply(null, this.array);
      }),
      (o.title = "browser"),
      (o.browser = !0),
      (o.env = {}),
      (o.argv = []),
      (o.version = ""),
      (o.versions = {}),
      (o.on = v),
      (o.addListener = v),
      (o.once = v),
      (o.off = v),
      (o.removeListener = v),
      (o.removeAllListeners = v),
      (o.emit = v),
      (o.prependListener = v),
      (o.prependOnceListener = v),
      (o.listeners = function(t) {
        return [];
      }),
      (o.binding = function(t) {
        throw new Error("process.binding is not supported");
      }),
      (o.cwd = function() {
        return "/";
      }),
      (o.chdir = function(t) {
        throw new Error("process.chdir is not supported");
      }),
      (o.umask = function() {
        return 0;
      });
  },
  function(t, e, n) {
    "use strict";
    var r = /([A-Z])/g;
    t.exports = function(t) {
      return t.replace(r, "-$1").toLowerCase();
    };
  },
  function(t, e, n) {
    "use strict";
    /** @license React v16.7.0
     * react-is.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */ Object.defineProperty(e, "__esModule", { value: !0 });
    var r = "function" == typeof Symbol && Symbol.for,
      o = r ? Symbol.for("react.element") : 60103,
      i = r ? Symbol.for("react.portal") : 60106,
      a = r ? Symbol.for("react.fragment") : 60107,
      u = r ? Symbol.for("react.strict_mode") : 60108,
      c = r ? Symbol.for("react.profiler") : 60114,
      s = r ? Symbol.for("react.provider") : 60109,
      f = r ? Symbol.for("react.context") : 60110,
      l = r ? Symbol.for("react.async_mode") : 60111,
      p = r ? Symbol.for("react.concurrent_mode") : 60111,
      d = r ? Symbol.for("react.forward_ref") : 60112,
      h = r ? Symbol.for("react.suspense") : 60113,
      v = r ? Symbol.for("react.memo") : 60115,
      y = r ? Symbol.for("react.lazy") : 60116;
    function b(t) {
      if ("object" == typeof t && null !== t) {
        var e = t.$$typeof;
        switch (e) {
          case o:
            switch ((t = t.type)) {
              case l:
              case p:
              case a:
              case c:
              case u:
              case h:
                return t;
              default:
                switch ((t = t && t.$$typeof)) {
                  case f:
                  case d:
                  case s:
                    return t;
                  default:
                    return e;
                }
            }
          case y:
          case v:
          case i:
            return e;
        }
      }
    }
    function g(t) {
      return b(t) === p;
    }
    (e.typeOf = b),
      (e.AsyncMode = l),
      (e.ConcurrentMode = p),
      (e.ContextConsumer = f),
      (e.ContextProvider = s),
      (e.Element = o),
      (e.ForwardRef = d),
      (e.Fragment = a),
      (e.Lazy = y),
      (e.Memo = v),
      (e.Portal = i),
      (e.Profiler = c),
      (e.StrictMode = u),
      (e.Suspense = h),
      (e.isValidElementType = function(t) {
        return (
          "string" == typeof t ||
          "function" == typeof t ||
          t === a ||
          t === p ||
          t === c ||
          t === u ||
          t === h ||
          ("object" == typeof t &&
            null !== t &&
            (t.$$typeof === y ||
              t.$$typeof === v ||
              t.$$typeof === s ||
              t.$$typeof === f ||
              t.$$typeof === d))
        );
      }),
      (e.isAsyncMode = function(t) {
        return g(t) || b(t) === l;
      }),
      (e.isConcurrentMode = g),
      (e.isContextConsumer = function(t) {
        return b(t) === f;
      }),
      (e.isContextProvider = function(t) {
        return b(t) === s;
      }),
      (e.isElement = function(t) {
        return "object" == typeof t && null !== t && t.$$typeof === o;
      }),
      (e.isForwardRef = function(t) {
        return b(t) === d;
      }),
      (e.isFragment = function(t) {
        return b(t) === a;
      }),
      (e.isLazy = function(t) {
        return b(t) === y;
      }),
      (e.isMemo = function(t) {
        return b(t) === v;
      }),
      (e.isPortal = function(t) {
        return b(t) === i;
      }),
      (e.isProfiler = function(t) {
        return b(t) === c;
      }),
      (e.isStrictMode = function(t) {
        return b(t) === u;
      }),
      (e.isSuspense = function(t) {
        return b(t) === h;
      });
  },
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = a(n(3)),
      o = a(n(60)),
      i = a(n(61));
    function a(t) {
      return t && t.__esModule ? t : { default: t };
    }
    e.default = function() {
      return r.default.createElement(
        o.default,
        null,
        r.default.createElement(i.default, { filter: "SHOW_WHAT" }, "what"),
        r.default.createElement(i.default, { filter: "SHOW_WHERE" }, "where"),
        r.default.createElement(i.default, { filter: "SHOW_WHEN" }, "when"),
        r.default.createElement(i.default, { filter: "SHOW_WHO" }, "who"),
        r.default.createElement(i.default, { filter: "SHOW_ALL" }, "all")
      );
    };
  },
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r,
      o,
      i,
      a = ((r = [
        "\n\tposition: relative;\n\tmargin: auto;\n\tmax-width: 248px;\n\tborder-radius: 2px;\n\tborder: 1px solid #666;\n\toverflow: hidden;\n\n\t* {\n\t\tbox-sizing: border-box !important;\n\t\tdisplay: inline-block;\n\t\twidth: 20%;\n\t\tborder-right: 1px solid #666;\n\t\tcolor: #666;\n\t\ttext-align: center;\n\t\ttext-decoration: none;\n\t\t\n\t\t&:hover {\n\t\t\tcolor: #a0a0a0;\n\t\t}\n\n\t\t&:focus {\n\t\t\t// Overrides WordPress' styles.\n\t\t\tbox-shadow: none\n\t\t}\n\t}\n\n\t*:last-child {\n\t\tborder-right: none;\n\n\t\t// Fix annoying pixel gap in responsive.\n\t\t&.wl-active {\n\t\t\tbox-shadow: 3px 0 0 0 #666;\n\t\t}\n\t}\n\t\n\t*.wl-active {\n\t\tbackground: #666;\n\t\tcolor: #fff;\n\t}\n"
      ]),
      (o = [
        "\n\tposition: relative;\n\tmargin: auto;\n\tmax-width: 248px;\n\tborder-radius: 2px;\n\tborder: 1px solid #666;\n\toverflow: hidden;\n\n\t* {\n\t\tbox-sizing: border-box !important;\n\t\tdisplay: inline-block;\n\t\twidth: 20%;\n\t\tborder-right: 1px solid #666;\n\t\tcolor: #666;\n\t\ttext-align: center;\n\t\ttext-decoration: none;\n\t\t\n\t\t&:hover {\n\t\t\tcolor: #a0a0a0;\n\t\t}\n\n\t\t&:focus {\n\t\t\t// Overrides WordPress' styles.\n\t\t\tbox-shadow: none\n\t\t}\n\t}\n\n\t*:last-child {\n\t\tborder-right: none;\n\n\t\t// Fix annoying pixel gap in responsive.\n\t\t&.wl-active {\n\t\t\tbox-shadow: 3px 0 0 0 #666;\n\t\t}\n\t}\n\t\n\t*.wl-active {\n\t\tbackground: #666;\n\t\tcolor: #fff;\n\t}\n"
      ]),
      Object.freeze(
        Object.defineProperties(r, { raw: { value: Object.freeze(o) } })
      )),
      u = n(4);
    var c = ((i = u) && i.__esModule ? i : { default: i }).default.div(a);
    e.default = c;
  },
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r,
      o = n(12),
      i = n(16),
      a = n(62),
      u = (r = a) && r.__esModule ? r : { default: r };
    var c = (0, o.connect)(
      function(t, e) {
        return { active: e.filter === t.visibilityFilter };
      },
      function(t) {
        return {
          onClick: function(e) {
            t((0, i.setEntityVisibility)(e));
          }
        };
      }
    )(u.default);
    e.default = c;
  },
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r,
      o = (function() {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        return function(e, n, r) {
          return n && t(e.prototype, n), r && t(e, r), e;
        };
      })(),
      i = n(3),
      a = (r = i) && r.__esModule ? r : { default: r };
    var u = (function(t) {
      function e(t) {
        !(function(t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, e);
        var n = (function(t, e) {
          if (!t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
        })(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
        return (n.onClick = n.onClick.bind(n)), n;
      }
      return (
        (function(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof e
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            e &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(t, e)
                : (t.__proto__ = e));
        })(e, a.default.PureComponent),
        o(e, [
          {
            key: "onClick",
            value: function(t) {
              t.preventDefault(), this.props.onClick(this.props.filter);
            }
          },
          {
            key: "render",
            value: function() {
              return a.default.createElement(
                "a",
                {
                  href: "javascript:void(0);",
                  className: this.props.active ? "wl-active" : "",
                  onClick: this.onClick
                },
                this.props.children
              );
            }
          }
        ]),
        e
      );
    })();
    e.default = u;
  },
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r,
      o = n(12),
      i = n(16),
      a = n(64),
      u = (r = a) && r.__esModule ? r : { default: r };
    var c = function(t, e, n) {
        switch (n) {
          case "SHOW_ANNOTATION":
            return t.filter(function(t) {
              return void 0 !== t.annotations && e in t.annotations;
            });
          case "SHOW_WHO":
            return t.filter(function(t) {
              return void 0 !== t.w && "who" === t.w;
            });
          case "SHOW_WHERE":
            return t.filter(function(t) {
              return void 0 !== t.w && "where" === t.w;
            });
          case "SHOW_WHEN":
            return t.filter(function(t) {
              return void 0 !== t.w && "when" === t.w;
            });
          case "SHOW_WHAT":
            return t.filter(function(t) {
              return void 0 !== t.w && "what" === t.w;
            });
          default:
            return t.filter(function(t) {
              return t.shortlist || 0 < t.occurrences.length;
            });
        }
      },
      s = (0, o.connect)(
        function(t) {
          return {
            entities: c(t.entities, t.annotationFilter, t.visibilityFilter)
          };
        },
        function(t) {
          return {
            onClick: function(e) {
              t((0, i.toggleEntity)(e));
            },
            onLinkClick: function(e) {
              t((0, i.toggleLink)(e));
            },
            onEditClick: function(e) {
              t((0, i.setCurrentEntity)(e));
            }
          };
        }
      )(u.default);
    e.default = s;
  },
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = a(n(3)),
      o = a(n(65)),
      i = a(n(66));
    function a(t) {
      return t && t.__esModule ? t : { default: t };
    }
    e.default = function(t) {
      var e = t.entities,
        n = t.onClick,
        a = t.onLinkClick,
        u = t.onEditClick;
      return r.default.createElement(
        o.default,
        null,
        e.toList().map(function(t) {
          return r.default.createElement(i.default, {
            entity: t,
            tile: { open: !1 },
            onClick: n,
            onEditClick: u,
            onLinkClick: a
          });
        })
      );
    };
  },
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r,
      o,
      i,
      a = ((r = ["\n\tmargin: 0 auto;\n\tpadding-bottom: 8px;\n"]),
      (o = ["\n\tmargin: 0 auto;\n\tpadding-bottom: 8px;\n"]),
      Object.freeze(
        Object.defineProperties(r, { raw: { value: Object.freeze(o) } })
      )),
      u = n(4);
    var c = ((i = u) && i.__esModule ? i : { default: i }).default.ul(a);
    e.default = c;
  },
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = (function() {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        return function(e, n, r) {
          return n && t(e.prototype, n), r && t(e, r), e;
        };
      })(),
      o = v(n(3)),
      i = v(n(67)),
      a = v(n(68)),
      u = v(n(69)),
      c = v(n(70)),
      s = v(n(32)),
      f = v(n(71)),
      l = v(n(72)),
      p = v(n(77)),
      d = v(n(78)),
      h = v(n(79));
    function v(t) {
      return t && t.__esModule ? t : { default: t };
    }
    var y = (function(t) {
      function e(t) {
        !(function(t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, e);
        var n = (function(t, e) {
          if (!t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
        })(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
        return (
          (n.onEditClick = n.onEditClick.bind(n)),
          (n.onSwitchClick = n.onSwitchClick.bind(n)),
          (n.onMainClick = n.onMainClick.bind(n)),
          (n.onArrowToggleClick = n.onArrowToggleClick.bind(n)),
          (n.close = n.close.bind(n)),
          (n.setWrapperRef = n.setWrapperRef.bind(n)),
          (n.state = { open: !1 }),
          n
        );
      }
      return (
        (function(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof e
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            e &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(t, e)
                : (t.__proto__ = e));
        })(e, o.default.Component),
        r(e, [
          {
            key: "onEditClick",
            value: function(t) {
              t.preventDefault(),
                this.props.onEditClick(this.props.entity),
                this.setState({ open: !1 });
            }
          },
          {
            key: "onMainClick",
            value: function(t) {
              t.preventDefault(), this.props.onClick(this.props.entity);
            }
          },
          {
            key: "onSwitchClick",
            value: function(t) {
              t.preventDefault(), this.props.onLinkClick(this.props.entity);
            }
          },
          {
            key: "onArrowToggleClick",
            value: function(t) {
              t.preventDefault(), this.setState({ open: !this.state.open });
            }
          },
          {
            key: "close",
            value: function(t) {
              t.preventDefault(),
                !t.currentTarget.contains(document.activeElement) &&
                  this.state.open &&
                  this.setState({ open: !1 });
            }
          },
          {
            key: "componentDidUpdate",
            value: function() {
              this.state.open &&
                this.setWrapperRef &&
                this.setWrapperRef.focus();
            }
          },
          {
            key: "setWrapperRef",
            value: function(t) {
              this.setWrapperRef = t;
            }
          },
          {
            key: "render",
            value: function() {
              return o.default.createElement(
                i.default,
                {
                  entity: this.props.entity,
                  onBlur: this.close,
                  innerRef: this.setWrapperRef,
                  tabIndex: "0"
                },
                o.default.createElement(
                  a.default,
                  { onClick: this.onMainClick, open: this.state.open },
                  o.default.createElement(
                    u.default,
                    { entity: this.props.entity },
                    this.props.entity.label,
                    o.default.createElement(
                      c.default,
                      { entity: this.props.entity },
                      this.props.entity.mainType
                    )
                  ),
                  o.default.createElement(s.default, {
                    className: "fa fa-cloud",
                    local: this.props.entity.local
                  })
                ),
                o.default.createElement(
                  f.default,
                  { open: this.state.open },
                  o.default.createElement(
                    l.default,
                    {
                      onClick: this.onSwitchClick,
                      selected: this.props.entity.link
                    },
                    "Link",
                    " "
                  ),
                  o.default.createElement(
                    p.default,
                    null,
                    this.props.entity.mainType
                  ),
                  o.default.createElement(d.default, {
                    onClick: this.onEditClick,
                    edit: this.props.entity.edit,
                    className: "fa fa-pencil"
                  })
                ),
                o.default.createElement(h.default, {
                  onClick: this.onArrowToggleClick,
                  open: this.state.open,
                  show: 0 < this.props.entity.occurrences.length
                })
              );
            }
          }
        ]),
        e
      );
    })();
    e.default = y;
  },
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r,
      o,
      i,
      a = ((r = [
        "\n\tdisplay: 'block';\n\tposition: relative;\n\tbox-sizing: border-box;\n\toverflow: hidden;\n\tborder-radius: 2px;\n\tmargin: 8px auto;\n\twidth: 248px;\n\tmin-height: 32px;\n\tpadding: 4px 0;\n\tbackground-color: #f5f5f5;\n\tbox-shadow: 0 4px 4px -3px rgba(0,0,0,.25), 0 8px 8px -6px rgba(0,0,0,.25);\n\ttransition: all 100ms linear;\n\t// Prevent dotted outline in FF\n\toutline: 0;\n\t\n\t// Since we removed the box with the number of occurrences we need to pad left.\n\t//\n\t// See https://github.com/insideout10/wordlift-plugin/issues/735\n\tpadding-left: 12px;\n\n\t&:hover {\n\t\ttransform: scale( ",
        " ); \n\t\tbackground-color: ",
        "\n\t\t// Prevent dotted outline in FF\n\t\toutline: 0;\n\t};\n\n\t&:active {\n\t\ttransform: scale(0.99)\n\t\tbackground-color: #f5f5f5;\n\t\t// Prevent dotted outline in FF\n\t\toutline: 0;\n\t};\n\n\t&:focus {\n\t\t// Prevent dotted outline in FF\n\t\toutline: 0;\n\t}\n\n"
      ]),
      (o = [
        "\n\tdisplay: 'block';\n\tposition: relative;\n\tbox-sizing: border-box;\n\toverflow: hidden;\n\tborder-radius: 2px;\n\tmargin: 8px auto;\n\twidth: 248px;\n\tmin-height: 32px;\n\tpadding: 4px 0;\n\tbackground-color: #f5f5f5;\n\tbox-shadow: 0 4px 4px -3px rgba(0,0,0,.25), 0 8px 8px -6px rgba(0,0,0,.25);\n\ttransition: all 100ms linear;\n\t// Prevent dotted outline in FF\n\toutline: 0;\n\t\n\t// Since we removed the box with the number of occurrences we need to pad left.\n\t//\n\t// See https://github.com/insideout10/wordlift-plugin/issues/735\n\tpadding-left: 12px;\n\n\t&:hover {\n\t\ttransform: scale( ",
        " ); \n\t\tbackground-color: ",
        "\n\t\t// Prevent dotted outline in FF\n\t\toutline: 0;\n\t};\n\n\t&:active {\n\t\ttransform: scale(0.99)\n\t\tbackground-color: #f5f5f5;\n\t\t// Prevent dotted outline in FF\n\t\toutline: 0;\n\t};\n\n\t&:focus {\n\t\t// Prevent dotted outline in FF\n\t\toutline: 0;\n\t}\n\n"
      ]),
      Object.freeze(
        Object.defineProperties(r, { raw: { value: Object.freeze(o) } })
      )),
      u = n(4);
    var c = ((i = u) && i.__esModule ? i : { default: i }).default.li(
      a,
      function(t) {
        return 0 < t.entity.occurrences.length ? 1 : 1.01;
      },
      function(t) {
        return 0 < t.entity.occurrences.length ? "#f5f5f5" : "#fafafa";
      }
    );
    e.default = c;
  },
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r,
      o,
      i,
      a = ((r = [
        "\n\tcursor: pointer;\n\tdisplay: block;\n\tposition: relative;\n\tleft: ",
        ";\n\ttop: 0;\n\tbox-sizing: border-box;\n\twidth: 236px;\n\tmin-height: 24px;\n\ttransition: left 200ms ease;\n"
      ]),
      (o = [
        "\n\tcursor: pointer;\n\tdisplay: block;\n\tposition: relative;\n\tleft: ",
        ";\n\ttop: 0;\n\tbox-sizing: border-box;\n\twidth: 236px;\n\tmin-height: 24px;\n\ttransition: left 200ms ease;\n"
      ]),
      Object.freeze(
        Object.defineProperties(r, { raw: { value: Object.freeze(o) } })
      )),
      u = n(4);
    var c = ((i = u) && i.__esModule ? i : { default: i }).default.div(
      a,
      function(t) {
        return t.open ? "-248px" : 0;
      }
    );
    e.default = c;
  },
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r,
      o,
      i,
      a = ((r = [
        "\n\tdisplay: inline-block;\n\tposition: relative;\n\tbox-sizing: border-box;\n\tmax-width: 180px;\n\tmargin-top: 4px;\n\tmin-height: 16px;\n\tline-height: 16px;\n\tfont-weight: 600;\n\tfont-size: 12px;\n\tuser-select: none;\n\thyphens: auto;\n\tcolor: ",
        ";\n"
      ]),
      (o = [
        "\n\tdisplay: inline-block;\n\tposition: relative;\n\tbox-sizing: border-box;\n\tmax-width: 180px;\n\tmargin-top: 4px;\n\tmin-height: 16px;\n\tline-height: 16px;\n\tfont-weight: 600;\n\tfont-size: 12px;\n\tuser-select: none;\n\thyphens: auto;\n\tcolor: ",
        ";\n"
      ]),
      Object.freeze(
        Object.defineProperties(r, { raw: { value: Object.freeze(o) } })
      )),
      u = n(4);
    var c = ((i = u) && i.__esModule ? i : { default: i }).default.div(
      a,
      function(t) {
        return 0 < t.entity.occurrences.length ? "#2e92ff" : "#666";
      }
    );
    e.default = c;
  },
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r,
      o,
      i,
      a = ((r = [
        "\n  display: ",
        ";\n\tmargin-left: 2px;\n\tposition: relative;\n\tfont-weight: 300;\n\tfont-size: 10px;\n"
      ]),
      (o = [
        "\n  display: ",
        ";\n\tmargin-left: 2px;\n\tposition: relative;\n\tfont-weight: 300;\n\tfont-size: 10px;\n"
      ]),
      Object.freeze(
        Object.defineProperties(r, { raw: { value: Object.freeze(o) } })
      )),
      u = n(4);
    var c = ((i = u) && i.__esModule ? i : { default: i }).default.div(
      a,
      function(t) {
        return t.entity.duplicateLabel ? "inline-block" : "none";
      }
    );
    e.default = c;
  },
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r,
      o,
      i,
      a = ((r = [
        "\n\tdisplay: block;\n\tposition: absolute;\n\tleft: 248px;\n\ttop: 0;\n\tbottom: 0;\n\tbox-sizing: border-box;\n\twidth: 248px;\n\tmin-height: 24px;\n\tpadding: 8px;\n\tcolor: #626162;\n\ttransition: left 200ms ease;\n\tleft: ",
        ";\n"
      ]),
      (o = [
        "\n\tdisplay: block;\n\tposition: absolute;\n\tleft: 248px;\n\ttop: 0;\n\tbottom: 0;\n\tbox-sizing: border-box;\n\twidth: 248px;\n\tmin-height: 24px;\n\tpadding: 8px;\n\tcolor: #626162;\n\ttransition: left 200ms ease;\n\tleft: ",
        ";\n"
      ]),
      Object.freeze(
        Object.defineProperties(r, { raw: { value: Object.freeze(o) } })
      )),
      u = n(4);
    var c = ((i = u) && i.__esModule ? i : { default: i }).default.div(
      a,
      function(t) {
        return t.open ? 0 : "248px";
      }
    );
    e.default = c;
  },
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = (function() {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        return function(e, n, r) {
          return n && t(e.prototype, n), r && t(e, r), e;
        };
      })(),
      o = s(n(3)),
      i = s(n(73)),
      a = s(n(74)),
      u = s(n(75)),
      c = s(n(76));
    function s(t) {
      return t && t.__esModule ? t : { default: t };
    }
    var f = (function(t) {
      function e(t) {
        !(function(t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, e);
        var n = (function(t, e) {
          if (!t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
        })(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
        return (n.onClick = n.onClick.bind(n)), n;
      }
      return (
        (function(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof e
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            e &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(t, e)
                : (t.__proto__ = e));
        })(e, o.default.PureComponent),
        r(e, [
          {
            key: "onClick",
            value: function(t) {
              t.preventDefault(), this.props.onClick(t);
            }
          },
          {
            key: "render",
            value: function() {
              return o.default.createElement(
                i.default,
                { onClick: this.onClick },
                o.default.createElement(
                  a.default,
                  { selected: this.props.selected },
                  o.default.createElement(u.default, {
                    selected: this.props.selected
                  })
                ),
                o.default.createElement(
                  c.default,
                  { selected: this.props.selected },
                  this.props.children
                )
              );
            }
          }
        ]),
        e
      );
    })();
    e.default = f;
  },
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r,
      o,
      i,
      a = ((r = [
        "\n\tdisplay: inline-block;\n\tposition: relative;\n\theight: 16px;\n"
      ]),
      (o = [
        "\n\tdisplay: inline-block;\n\tposition: relative;\n\theight: 16px;\n"
      ]),
      Object.freeze(
        Object.defineProperties(r, { raw: { value: Object.freeze(o) } })
      )),
      u = n(4);
    var c = ((i = u) && i.__esModule ? i : { default: i }).default.div(a);
    e.default = c;
  },
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r,
      o,
      i,
      a = ((r = [
        "\n\tdisplay: inline-block;\n\tposition: relative;\n\tbox-sizing: border-box;\n\twidth: 24px;\n\theight: 16px;\n\tbackground: ",
        ";\n\ttransition: background 200ms ease;\n\tborder-radius: 10px;\n"
      ]),
      (o = [
        "\n\tdisplay: inline-block;\n\tposition: relative;\n\tbox-sizing: border-box;\n\twidth: 24px;\n\theight: 16px;\n\tbackground: ",
        ";\n\ttransition: background 200ms ease;\n\tborder-radius: 10px;\n"
      ]),
      Object.freeze(
        Object.defineProperties(r, { raw: { value: Object.freeze(o) } })
      )),
      u = n(4);
    var c = ((i = u) && i.__esModule ? i : { default: i }).default.div(
      a,
      function(t) {
        return t.selected ? "#7ed321" : "#c7c7c7";
      }
    );
    e.default = c;
  },
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r,
      o,
      i,
      a = ((r = [
        "\n\tcursor: pointer;\n\tdisplay: inline-block;\n\tposition: absolute;\n\ttop: 2px;\n\tleft: ",
        "px;\n\ttransition: left 150ms ease;\n\twidth: 12px;\n\theight: 12px;\n\tbackground: #FFFFFF;\n\tborder-radius: 50%;\n"
      ]),
      (o = [
        "\n\tcursor: pointer;\n\tdisplay: inline-block;\n\tposition: absolute;\n\ttop: 2px;\n\tleft: ",
        "px;\n\ttransition: left 150ms ease;\n\twidth: 12px;\n\theight: 12px;\n\tbackground: #FFFFFF;\n\tborder-radius: 50%;\n"
      ]),
      Object.freeze(
        Object.defineProperties(r, { raw: { value: Object.freeze(o) } })
      )),
      u = n(4);
    var c = ((i = u) && i.__esModule ? i : { default: i }).default.div(
      a,
      function(t) {
        return t.selected ? 10 : 2;
      }
    );
    e.default = c;
  },
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r,
      o,
      i,
      a = ((r = [
        "\n\tdisplay: inline-block;\n\tposition: relative;\n\ttop: -4px;\n\tline-height: 16px;\n\tfont-size: 12px;\n\tmargin: 0 12px 0 4px;\n\ttransition: opacity 150ms ease;\n\topacity: ",
        ";\n\t\n\t&:after {\n\t\tcontent: ' ';\n\t\tdisplay: inline-block;\n\t\tposition: absolute;\n\t\tright: -12px;\n\t\ttop: 6px;\n\t\twidth: 4px;\n\t\theight: 4px;\n\t\tborder-radius: 50%;\n\t\tbackground-color: #626162;\n\t\tmargin-right: 4px;\n\t}\n"
      ]),
      (o = [
        "\n\tdisplay: inline-block;\n\tposition: relative;\n\ttop: -4px;\n\tline-height: 16px;\n\tfont-size: 12px;\n\tmargin: 0 12px 0 4px;\n\ttransition: opacity 150ms ease;\n\topacity: ",
        ";\n\t\n\t&:after {\n\t\tcontent: ' ';\n\t\tdisplay: inline-block;\n\t\tposition: absolute;\n\t\tright: -12px;\n\t\ttop: 6px;\n\t\twidth: 4px;\n\t\theight: 4px;\n\t\tborder-radius: 50%;\n\t\tbackground-color: #626162;\n\t\tmargin-right: 4px;\n\t}\n"
      ]),
      Object.freeze(
        Object.defineProperties(r, { raw: { value: Object.freeze(o) } })
      )),
      u = n(4);
    var c = ((i = u) && i.__esModule ? i : { default: i }).default.div(
      a,
      function(t) {
        return t.selected ? 1 : 0.5;
      }
    );
    e.default = c;
  },
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r,
      o,
      i,
      a = ((r = [
        "\n\tdisplay: inline-block;\n\tposition: relative;\n\ttop: -4px;\t\n\tline-height: 16px;\n\tfont-size: 12px;\n"
      ]),
      (o = [
        "\n\tdisplay: inline-block;\n\tposition: relative;\n\ttop: -4px;\t\n\tline-height: 16px;\n\tfont-size: 12px;\n"
      ]),
      Object.freeze(
        Object.defineProperties(r, { raw: { value: Object.freeze(o) } })
      )),
      u = n(4);
    var c = ((i = u) && i.__esModule ? i : { default: i }).default.div(a);
    e.default = c;
  },
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r,
      o,
      i,
      a = ((r = [
        "\n\tcursor: pointer;\n\tdisplay: ",
        ";\n\tposition: absolute;\n\tright: 20px;\n\ttop: 9px;\n\twidth: 16px;\n\theight: 16px;\n\ttext-align: center;\n\tline-height: 1;\n\tbackground-color: #666;\n\tcolor: #fff;\n\tborder-radius: 2px;\n\t\n\t&:before {\n\t\tposition: absolute;\n\t\ttop: 50%;\n\t\tleft: 50%;\n\t\tmargin-top: -7px;\n\t\tmargin-left: -6px;\n\t\tfont-size: 14px;\n\t}\n\t\n\t&:hover {\n\t\tbackground-color: #fccd34;\n\t}\n"
      ]),
      (o = [
        "\n\tcursor: pointer;\n\tdisplay: ",
        ";\n\tposition: absolute;\n\tright: 20px;\n\ttop: 9px;\n\twidth: 16px;\n\theight: 16px;\n\ttext-align: center;\n\tline-height: 1;\n\tbackground-color: #666;\n\tcolor: #fff;\n\tborder-radius: 2px;\n\t\n\t&:before {\n\t\tposition: absolute;\n\t\ttop: 50%;\n\t\tleft: 50%;\n\t\tmargin-top: -7px;\n\t\tmargin-left: -6px;\n\t\tfont-size: 14px;\n\t}\n\t\n\t&:hover {\n\t\tbackground-color: #fccd34;\n\t}\n"
      ]),
      Object.freeze(
        Object.defineProperties(r, { raw: { value: Object.freeze(o) } })
      )),
      u = n(4);
    var c = ((i = u) && i.__esModule ? i : { default: i }).default.i(
      a,
      function(t) {
        return t.edit ? "block" : "none !important";
      }
    );
    e.default = c;
  },
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = (function() {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        return function(e, n, r) {
          return n && t(e.prototype, n), r && t(e, r), e;
        };
      })(),
      o = u(n(3)),
      i = u(n(80)),
      a = u(n(81));
    function u(t) {
      return t && t.__esModule ? t : { default: t };
    }
    var c = (function(t) {
      function e(t) {
        !(function(t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, e);
        var n = (function(t, e) {
          if (!t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
        })(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
        return (n.onClick = n.onClick.bind(n)), n;
      }
      return (
        (function(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof e
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            e &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(t, e)
                : (t.__proto__ = e));
        })(e, o.default.PureComponent),
        r(e, [
          {
            key: "onClick",
            value: function(t) {
              t.preventDefault(), this.props.onClick(t);
            }
          },
          {
            key: "render",
            value: function() {
              return o.default.createElement(
                i.default,
                { onClick: this.onClick, show: this.props.show },
                o.default.createElement(a.default, { open: this.props.open })
              );
            }
          }
        ]),
        e
      );
    })();
    e.default = c;
  },
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r,
      o,
      i,
      a = ((r = [
        "\n\tcursor: pointer;\n\ttransition: opacity 150ms ease;\n\tposition: absolute;\n\tright: 0;\n\ttop: 0;\n\tbottom: 0;\n\tbox-sizing: border-box;\n\twidth: 16px;\n\tmin-height: 32px;\n\tpadding: 8px 4px;\n\tbackground-color: #f1f1f1;\n\t\n\t// Control the visibility of the element according to the 'show' property.\n\tdisplay: ",
        ";\n\topacity: ",
        "\n"
      ]),
      (o = [
        "\n\tcursor: pointer;\n\ttransition: opacity 150ms ease;\n\tposition: absolute;\n\tright: 0;\n\ttop: 0;\n\tbottom: 0;\n\tbox-sizing: border-box;\n\twidth: 16px;\n\tmin-height: 32px;\n\tpadding: 8px 4px;\n\tbackground-color: #f1f1f1;\n\t\n\t// Control the visibility of the element according to the 'show' property.\n\tdisplay: ",
        ";\n\topacity: ",
        "\n"
      ]),
      Object.freeze(
        Object.defineProperties(r, { raw: { value: Object.freeze(o) } })
      )),
      u = n(4);
    var c = ((i = u) && i.__esModule ? i : { default: i }).default.div(
      a,
      function(t) {
        return t.show ? "block" : "none";
      },
      function(t) {
        return t.show ? 1 : 0;
      }
    );
    e.default = c;
  },
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r,
      o,
      i,
      a = ((r = [
        "\n  box-sizing: border-box;\n\tdisplay: block;\n\tposition: absolute;\n\ttop: 8px;\n\twidth: 8px;\n\theight: 8px;\n\tborder-top: 8px solid transparent;\n\tborder-bottom: 8px solid transparent;\n\tborder-left: 8px solid #7d7d7d;\n\tborder-radius: 16px;\n\ttransition: transform 150ms ease;\n\ttransform: rotate( ",
        "deg );\n\t&:hover {\n\t\tborder-left-color: #fccd34;\n\t} \n"
      ]),
      (o = [
        "\n  box-sizing: border-box;\n\tdisplay: block;\n\tposition: absolute;\n\ttop: 8px;\n\twidth: 8px;\n\theight: 8px;\n\tborder-top: 8px solid transparent;\n\tborder-bottom: 8px solid transparent;\n\tborder-left: 8px solid #7d7d7d;\n\tborder-radius: 16px;\n\ttransition: transform 150ms ease;\n\ttransform: rotate( ",
        "deg );\n\t&:hover {\n\t\tborder-left-color: #fccd34;\n\t} \n"
      ]),
      Object.freeze(
        Object.defineProperties(r, { raw: { value: Object.freeze(o) } })
      )),
      u = n(4);
    var c = ((i = u) && i.__esModule ? i : { default: i }).default.div(
      a,
      function(t) {
        return t.open ? 180 : 0;
      }
    );
    e.default = c;
  },
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = h(n(3)),
      o = n(12),
      i = n(18),
      a = h(n(35)),
      u = h(n(31)),
      c = h(n(83)),
      s = h(n(89)),
      f = h(n(101)),
      l = h(n(103)),
      p = h(n(104)),
      d = n(17);
    function h(t) {
      return t && t.__esModule ? t : { default: t };
    }
    var v = (0, a.default)(),
      y = (0, i.createStore)(d.reducer, (0, i.applyMiddleware)(v, u.default));
    v.run(p.default);
    e.default = function(t) {
      var e = t.showCreate;
      return r.default.createElement(
        o.Provider,
        { store: y },
        r.default.createElement(
          f.default,
          null,
          r.default.createElement(
            c.default,
            null,
            r.default.createElement(l.default, {
              height: "8px",
              color: "white"
            })
          ),
          r.default.createElement(s.default, { showCreate: e })
        )
      );
    };
  },
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r,
      o = n(12),
      i = n(17),
      a = n(86),
      u = (r = a) && r.__esModule ? r : { default: r };
    e.default = (0, o.connect)(
      function(t) {
        return { enabled: t.enabled, label: "Add " + t.value };
      },
      function(t) {
        return {
          onClick: function() {
            return t((0, i.open)());
          }
        };
      }
    )(u.default);
  },
  function(t, e, n) {
    var r = n(85);
    t.exports = function(t) {
      return r(t)
        .replace(/[\W_]+(.|$)/g, function(t, e) {
          return e ? " " + e : "";
        })
        .trim();
    };
  },
  function(t, e) {
    t.exports = function(t) {
      return n.test(t)
        ? t.toLowerCase()
        : r.test(t)
        ? (
            (function(t) {
              return t.replace(i, function(t, e) {
                return e ? " " + e : "";
              });
            })(t) || t
          ).toLowerCase()
        : o.test(t)
        ? (function(t) {
            return t.replace(a, function(t, e, n) {
              return (
                e +
                " " +
                n
                  .toLowerCase()
                  .split("")
                  .join(" ")
              );
            });
          })(t).toLowerCase()
        : t.toLowerCase();
    };
    var n = /\s/,
      r = /(_|-|\.|:)/,
      o = /([a-z][A-Z]|[A-Z][a-z])/;
    var i = /[\W_]+(.|$)/g;
    var a = /(.)([A-Z]+)/g;
  },
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = i(n(3)),
      o = i(n(87));
    function i(t) {
      return t && t.__esModule ? t : { default: t };
    }
    e.default = function(t) {
      var e = t.children,
        n = t.label,
        i = (function(t, e) {
          var n = {};
          for (var r in t)
            e.indexOf(r) >= 0 ||
              (Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]));
          return n;
        })(t, ["children", "label"]);
      return r.default.createElement(
        o.default,
        i,
        r.default.createElement(
          "div",
          {
            style: {
              width: "calc(100% - 16px)",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap"
            }
          },
          n
        ),
        e
      );
    };
  },
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r,
      o = f(
        [
          '\n    white-space: initial;\n    line-height: 16px;\n    color: white;\n    padding: 11px 8px 6px;\n    min-height: 40px;\n    margin-bottom: 10px;\n    font-family: BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;\n    font-size: 14px;\n    font-weight: 600;\n    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);\n        \n    > div {\n        display: inline-block;\n        \n        &:last-child {\n            float: right;\n        }\n    }\n\n    ',
          "\n    \n    ",
          "\n       \n}\n"
        ],
        [
          '\n    white-space: initial;\n    line-height: 16px;\n    color: white;\n    padding: 11px 8px 6px;\n    min-height: 40px;\n    margin-bottom: 10px;\n    font-family: BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;\n    font-size: 14px;\n    font-weight: 600;\n    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);\n        \n    > div {\n        display: inline-block;\n        \n        &:last-child {\n            float: right;\n        }\n    }\n\n    ',
          "\n    \n    ",
          "\n       \n}\n"
        ]
      ),
      i = f(
        [
          "\n        background-color: #007aff;\n        cursor: pointer;\n\n        &:hover {\n          box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);\n          transform: scale(1.01);\n          transition: all 200ms ease-out;\n        }\n\n        &:active {\n          background-color: ",
          ";\n          box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);\n          transform: scale(1);\n        }\n      "
        ],
        [
          "\n        background-color: #007aff;\n        cursor: pointer;\n\n        &:hover {\n          box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);\n          transform: scale(1.01);\n          transition: all 200ms ease-out;\n        }\n\n        &:active {\n          background-color: ",
          ";\n          box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);\n          transform: scale(1);\n        }\n      "
        ]
      ),
      a = f(
        [
          "\n        background-color: #cbcbcb;\n        cursor: initial;\n      "
        ],
        [
          "\n        background-color: #cbcbcb;\n        cursor: initial;\n      "
        ]
      ),
      u = n(4),
      c = (r = u) && r.__esModule ? r : { default: r },
      s = n(88);
    function f(t, e) {
      return Object.freeze(
        Object.defineProperties(t, { raw: { value: Object.freeze(e) } })
      );
    }
    var l = c.default.div(
      o,
      function(t) {
        return t.enabled && (0, u.css)(i, (0, s.darken)(0.02, "#007aff"));
      },
      function(t) {
        return !t.enabled && (0, u.css)(a);
      }
    );
    e.default = l;
  },
  function(t, e, n) {
    "use strict";
    function r(t) {
      return t.charAt(0).toUpperCase() + t.slice(1);
    }
    n.r(e),
      n.d(e, "adjustHue", function() {
        return bt;
      }),
      n.d(e, "animation", function() {
        return Vt;
      }),
      n.d(e, "backgroundImages", function() {
        return Jt;
      }),
      n.d(e, "backgrounds", function() {
        return Qt;
      }),
      n.d(e, "borderColor", function() {
        return Xt;
      }),
      n.d(e, "borderRadius", function() {
        return Zt;
      }),
      n.d(e, "borderStyle", function() {
        return te;
      }),
      n.d(e, "borderWidth", function() {
        return ee;
      }),
      n.d(e, "buttons", function() {
        return ae;
      }),
      n.d(e, "clearFix", function() {
        return h;
      }),
      n.d(e, "complement", function() {
        return gt;
      }),
      n.d(e, "darken", function() {
        return wt;
      }),
      n.d(e, "desaturate", function() {
        return Ot;
      }),
      n.d(e, "directionalProperty", function() {
        return a;
      }),
      n.d(e, "ellipsis", function() {
        return v;
      }),
      n.d(e, "em", function() {
        return f;
      }),
      n.d(e, "fontFace", function() {
        return b;
      }),
      n.d(e, "getLuminance", function() {
        return St;
      }),
      n.d(e, "grayscale", function() {
        return kt;
      }),
      n.d(e, "invert", function() {
        return Et;
      }),
      n.d(e, "hideText", function() {
        return g;
      }),
      n.d(e, "hideVisually", function() {
        return m;
      }),
      n.d(e, "hiDPI", function() {
        return _;
      }),
      n.d(e, "hsl", function() {
        return ut;
      }),
      n.d(e, "hsla", function() {
        return ct;
      }),
      n.d(e, "lighten", function() {
        return Ct;
      }),
      n.d(e, "margin", function() {
        return ue;
      }),
      n.d(e, "mix", function() {
        return At;
      }),
      n.d(e, "modularScale", function() {
        return p;
      }),
      n.d(e, "normalize", function() {
        return C;
      }),
      n.d(e, "opacify", function() {
        return zt;
      }),
      n.d(e, "padding", function() {
        return ce;
      }),
      n.d(e, "parseToHsl", function() {
        return Z;
      }),
      n.d(e, "parseToRgb", function() {
        return X;
      }),
      n.d(e, "placeholder", function() {
        return P;
      }),
      n.d(e, "position", function() {
        return fe;
      }),
      n.d(e, "radialGradient", function() {
        return T;
      }),
      n.d(e, "readableColor", function() {
        return Mt;
      }),
      n.d(e, "rem", function() {
        return d;
      }),
      n.d(e, "retinaImage", function() {
        return M;
      }),
      n.d(e, "rgb", function() {
        return nt;
      }),
      n.d(e, "rgba", function() {
        return rt;
      }),
      n.d(e, "saturate", function() {
        return qt;
      }),
      n.d(e, "selection", function() {
        return R;
      }),
      n.d(e, "setHue", function() {
        return Lt;
      }),
      n.d(e, "setLightness", function() {
        return Ft;
      }),
      n.d(e, "setSaturation", function() {
        return $t;
      }),
      n.d(e, "shade", function() {
        return Bt;
      }),
      n.d(e, "size", function() {
        return le;
      }),
      n.d(e, "stripUnit", function() {
        return c;
      }),
      n.d(e, "textInputs", function() {
        return he;
      }),
      n.d(e, "timingFunctions", function() {
        return N;
      }),
      n.d(e, "tint", function() {
        return Kt;
      }),
      n.d(e, "toColorString", function() {
        return ht;
      }),
      n.d(e, "transitions", function() {
        return ve;
      }),
      n.d(e, "transparentize", function() {
        return Gt;
      }),
      n.d(e, "triangle", function() {
        return F;
      }),
      n.d(e, "wordWrap", function() {
        return U;
      });
    var o = ["Top", "Right", "Bottom", "Left"];
    function i(t, e) {
      if (!t) return e.toLowerCase();
      var n = t.split("-");
      if (n.length > 1)
        return (
          n.splice(1, 0, e),
          n.reduce(function(t, e) {
            return "" + t + r(e);
          })
        );
      var o = t.replace(/([a-z])([A-Z])/g, "$1" + e + "$2");
      return t === o ? "" + t + e : o;
    }
    function a(t) {
      for (
        var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1;
        r < e;
        r++
      )
        n[r - 1] = arguments[r];
      var a = n[0],
        u = n[1],
        c = void 0 === u ? a : u,
        s = n[2],
        f = void 0 === s ? a : s,
        l = n[3];
      return (function(t, e) {
        for (var n = {}, r = 0; r < e.length; r += 1)
          (e[r] || 0 === e[r]) && (n[i(t, o[r])] = e[r]);
        return n;
      })(t, [a, c, f, void 0 === l ? c : l]);
    }
    function u(t, e) {
      return t.substr(-e.length) === e;
    }
    function c(t) {
      var e = parseFloat(t);
      return isNaN(e) ? t : e;
    }
    var s = function(t) {
        return function(e) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "16px",
            r = e,
            o = n;
          if ("string" == typeof e) {
            if (!u(e, "px"))
              throw new Error(
                'Expected a string ending in "px" or a number passed as the first argument to ' +
                  t +
                  '(), got "' +
                  e +
                  '" instead.'
              );
            r = c(e);
          }
          if ("string" == typeof n) {
            if (!u(n, "px"))
              throw new Error(
                'Expected a string ending in "px" or a number passed as the second argument to ' +
                  t +
                  '(), got "' +
                  n +
                  '" instead.'
              );
            o = c(n);
          }
          if ("string" == typeof r)
            throw new Error(
              'Passed invalid pixel value ("' +
                e +
                '") to ' +
                t +
                '(), please pass a value like "12px" or 12.'
            );
          if ("string" == typeof o)
            throw new Error(
              'Passed invalid base value ("' +
                n +
                '") to ' +
                t +
                '(), please pass a value like "12px" or 12.'
            );
          return "" + r / o + t;
        };
      },
      f = s("em"),
      l = {
        minorSecond: 1.067,
        majorSecond: 1.125,
        minorThird: 1.2,
        majorThird: 1.25,
        perfectFourth: 1.333,
        augFourth: 1.414,
        perfectFifth: 1.5,
        minorSixth: 1.6,
        goldenSection: 1.618,
        majorSixth: 1.667,
        minorSeventh: 1.778,
        majorSeventh: 1.875,
        octave: 2,
        majorTenth: 2.5,
        majorEleventh: 2.667,
        majorTwelfth: 3,
        doubleOctave: 4
      };
    function p(t) {
      var e =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "1em",
        n =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : "perfectFourth";
      if ("number" != typeof t)
        throw new Error(
          "Please provide a number of steps to the modularScale helper."
        );
      if ("string" == typeof n && !l[n])
        throw new Error(
          "Please pass a number or one of the predefined scales to the modularScale helper as the ratio."
        );
      var r = "string" == typeof e ? c(e) : e,
        o = "string" == typeof n ? l[n] : n;
      if ("string" == typeof r)
        throw new Error(
          'Invalid value passed as base to modularScale, expected number or em string but got "' +
            e +
            '"'
        );
      return r * Math.pow(o, t) + "em";
    }
    var d = s("rem");
    function h() {
      var t;
      return (
        ((t = {})[
          (arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : "&") + "::after"
        ] = { clear: "both", content: '""', display: "table" }),
        t
      );
    }
    function v() {
      return {
        display: "inline-block",
        maxWidth:
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : "100%",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        wordWrap: "normal"
      };
    }
    function y(t, e, n) {
      var r = [];
      return (
        e &&
          r.push(
            (function(t) {
              return t
                .map(function(t) {
                  return 'local("' + t + '")';
                })
                .join(", ");
            })(e)
          ),
        t &&
          r.push(
            (function(t, e) {
              return e
                .map(function(e) {
                  return 'url("' + t + "." + e + '")';
                })
                .join(", ");
            })(t, n)
          ),
        r.join(", ")
      );
    }
    function b(t) {
      var e = t.fontFamily,
        n = t.fontFilePath,
        r = t.fontStretch,
        o = t.fontStyle,
        i = t.fontVariant,
        a = t.fontWeight,
        u = t.fileFormats,
        c = void 0 === u ? ["eot", "woff2", "woff", "ttf", "svg"] : u,
        s = t.localFonts,
        f = t.unicodeRange;
      if (!e) throw new Error("fontFace expects a name of a font-family.");
      if (!n && !s)
        throw new Error(
          "fontFace expects either the path to the font file(s) or a name of a local copy."
        );
      if (s && !Array.isArray(s))
        throw new Error("fontFace expects localFonts to be an array.");
      if (!Array.isArray(c))
        throw new Error("fontFace expects fileFormats to be an array.");
      var l = {
        "@font-face": {
          fontFamily: e,
          src: y(n, s, c),
          unicodeRange: f,
          fontStretch: r,
          fontStyle: o,
          fontVariant: i,
          fontWeight: a
        }
      };
      return JSON.parse(JSON.stringify(l));
    }
    function g() {
      return { textIndent: "101%", overflow: "hidden", whiteSpace: "nowrap" };
    }
    function m() {
      return {
        border: "0",
        clip: "rect(0 0 0 0)",
        clipPath: "inset(50%)",
        height: "1px",
        margin: "-1px",
        overflow: "hidden",
        padding: "0",
        position: "absolute",
        whiteSpace: "nowrap",
        width: "1px"
      };
    }
    function _() {
      var t =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1.3;
      return (
        "\n    @media only screen and (-webkit-min-device-pixel-ratio: " +
        t +
        "),\n    only screen and (min--moz-device-pixel-ratio: " +
        t +
        "),\n    only screen and (-o-min-device-pixel-ratio: " +
        t +
        "/1),\n    only screen and (min-resolution: " +
        Math.round(96 * t) +
        "dpi),\n    only screen and (min-resolution: " +
        t +
        "dppx)\n  "
      );
    }
    var w,
      x,
      O,
      S =
        Object.assign ||
        function(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        },
      k = function(t, e) {
        return (t.raw = e), t;
      },
      E = (((w = { html: { fontFamily: "sans-serif" }, body: { margin: "0" } })[
        "a:active,\n  a:hover"
      ] = { outlineWidth: "0" }),
      (w["button,\n  input,\n  optgroup,\n  select,\n  textarea"] = {
        fontFamily: "sans-serif",
        fontSize: "100%",
        lineHeight: "1.15"
      }),
      w),
      j = (((O = { html: { lineHeight: "1.15", textSizeAdjust: "100%" } })[
        "article,\n  aside,\n  footer,\n  header,\n  nav,\n  section"
      ] = { display: "block" }),
      (O.h1 = { fontSize: "2em", margin: "0.67em 0" }),
      (O["figcaption,\n  figure,\n  main"] = { display: "block" }),
      (O.figure = { margin: "1em 40px" }),
      (O.hr = { boxSizing: "content-box", height: "0", overflow: "visible" }),
      (O.pre = { fontFamily: "monospace, monospace", fontSize: "1em" }),
      (O.a = {
        "background-color": "transparent",
        "-webkit-text-decoration-skip": "objects"
      }),
      (O["abbr[title]"] = (((x = {
        borderBottom: "none",
        textDecoration: "underline"
      }).textDecoration = "underline dotted"),
      x)),
      (O["b,\n  strong"] = { fontWeight: "inherit" }),
      (O["code,\n  kbd,\n  samp"] = {
        fontFamily: "monospace, monospace",
        fontSize: "1em"
      }),
      (O.dfn = { fontStyle: "italic" }),
      (O.mark = { backgroundColor: "#ff0", color: "#000" }),
      (O.small = { fontSize: "80%" }),
      (O["sub,\n  sup"] = {
        fontSize: "75%",
        lineHeight: "0",
        position: "relative",
        verticalAlign: "baseline"
      }),
      (O.sub = { bottom: "-0.25em" }),
      (O.sup = { top: "-0.5em" }),
      (O["audio,\n  video"] = { display: "inline-block" }),
      (O["audio:not([controls])"] = { display: "none", height: "0" }),
      (O.img = { borderStyle: "none" }),
      (O["svg:not(:root)"] = { overflow: "hidden" }),
      (O["button,\n  input,\n  optgroup,\n  select,\n  textarea"] = {
        margin: "0"
      }),
      (O["button,\n  input"] = { overflow: "visible" }),
      (O["button,\n  select"] = { textTransform: "none" }),
      (O[
        'button,\n  html [type="button"],\n  [type="reset"],\n  [type="submit"]'
      ] = { "-webkit-appearance": "button" }),
      (O[
        'button::-moz-focus-inner,\n  [type="button"]::-moz-focus-inner,\n  [type="reset"]::-moz-focus-inner,\n  [type="submit"]::-moz-focus-inner'
      ] = { borderStyle: "none", padding: "0" }),
      (O[
        'button:-moz-focusring,\n  [type="button"]:-moz-focusring,\n  [type="reset"]:-moz-focusring,\n  [type="submit"]:-moz-focusring'
      ] = { outline: "1px dotted ButtonText" }),
      (O.fieldset = {
        border: "1px solid #c0c0c0",
        margin: "0 2px",
        padding: "0.35em 0.625em 0.75em"
      }),
      (O.legend = {
        boxSizing: "border-box",
        color: "inherit",
        display: "table",
        maxWidth: "100%",
        padding: "0",
        whiteSpace: "normal"
      }),
      (O.progress = { display: "inline-block", verticalAlign: "baseline" }),
      (O.textarea = { overflow: "auto" }),
      (O['[type="checkbox"],\n  [type="radio"]'] = {
        boxSizing: "border-box",
        padding: "0"
      }),
      (O[
        '[type="number"]::-webkit-inner-spin-button,\n  [type="number"]::-webkit-outer-spin-button'
      ] = { height: "auto" }),
      (O['[type="search"]'] = {
        "-webkit-appearance": "textfield",
        outlineOffset: "-2px"
      }),
      (O[
        '[type="search"]::-webkit-search-cancel-button,\n  [type="search"]::-webkit-search-decoration'
      ] = { "-webkit-appearance": "none" }),
      (O["::-webkit-file-upload-button"] = {
        "-webkit-appearance": "button",
        font: "inherit"
      }),
      (O["details,\n  menu"] = { display: "block" }),
      (O.summary = { display: "list-item" }),
      (O.canvas = { display: "inline-block" }),
      (O.template = { display: "none" }),
      (O["[hidden]"] = { display: "none" }),
      O);
    function C(t) {
      return t
        ? j
        : ((e = E),
          (n = S({}, j)),
          Object.keys(e).forEach(function(t) {
            n[t] ? (n[t] = S({}, n[t], e[t])) : (n[t] = S({}, e[t]));
          }),
          n);
      var e, n;
    }
    function P(t) {
      var e,
        n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "&";
      return (
        ((e = {})[n + "::-webkit-input-placeholder"] = S({}, t)),
        (e[n + ":-moz-placeholder"] = S({}, t)),
        (e[n + "::-moz-placeholder"] = S({}, t)),
        (e[n + ":-ms-input-placeholder"] = S({}, t)),
        e
      );
    }
    var A = k(
      ["radial-gradient(", "", "", "", ")"],
      ["radial-gradient(", "", "", "", ")"]
    );
    function I(t) {
      return t[0].split(" ")[0];
    }
    function z(t) {
      for (var e = "", n = 0; n < t.length; n += 1)
        (e += t[n]),
          3 === n &&
          (arguments.length <= n + 1 ? void 0 : arguments[n + 1]) &&
          ((arguments.length <= 1 ? void 0 : arguments[1]) ||
            (arguments.length <= 2 ? void 0 : arguments[2]) ||
            (arguments.length <= 3 ? void 0 : arguments[3]))
            ? ((e = e.slice(0, -1)),
              (e +=
                ", " + (arguments.length <= n + 1 ? void 0 : arguments[n + 1])))
            : 3 !== n ||
              arguments.length <= n + 1 ||
              !arguments[n + 1] ||
              (arguments.length <= 1 ? void 0 : arguments[1]) ||
              (arguments.length <= 2 ? void 0 : arguments[2]) ||
              (arguments.length <= 3 ? void 0 : arguments[3])
            ? (arguments.length <= n + 1 ? void 0 : arguments[n + 1]) &&
              (e +=
                (arguments.length <= n + 1 ? void 0 : arguments[n + 1]) + " ")
            : (e +=
                "" + (arguments.length <= n + 1 ? void 0 : arguments[n + 1]));
      return e.trim();
    }
    function T(t) {
      var e = t.colorStops,
        n = t.extent,
        r = t.fallback,
        o = t.position,
        i = t.shape;
      if (!e || e.length < 2)
        throw new Error(
          "radialGradient requries at least 2 color-stops to properly render."
        );
      return {
        backgroundColor: r || I(e),
        backgroundImage: z(A, o, i, n, e.join(", "))
      };
    }
    function M(t, e) {
      var n,
        r =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : "png",
        o = arguments[3],
        i =
          arguments.length > 4 && void 0 !== arguments[4]
            ? arguments[4]
            : "_2x";
      if (!t)
        throw new Error(
          "Please supply a filename to retinaImage() as the first argument."
        );
      var a = r.replace(/^\./, ""),
        u = o ? o + "." + a : "" + t + i + "." + a;
      return (
        ((n = { backgroundImage: "url(" + t + "." + a + ")" })[_()] = {
          backgroundImage: "url(" + u + ")",
          backgroundSize: e
        }),
        n
      );
    }
    function R(t) {
      var e,
        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      return (
        ((e = {})[n + "::-moz-selection"] = S({}, t)),
        (e[n + "::selection"] = S({}, t)),
        e
      );
    }
    var q = {
      easeInBack: "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
      easeInCirc: "cubic-bezier(0.600,  0.040, 0.980, 0.335)",
      easeInCubic: "cubic-bezier(0.550,  0.055, 0.675, 0.190)",
      easeInExpo: "cubic-bezier(0.950,  0.050, 0.795, 0.035)",
      easeInQuad: "cubic-bezier(0.550,  0.085, 0.680, 0.530)",
      easeInQuart: "cubic-bezier(0.895,  0.030, 0.685, 0.220)",
      easeInQuint: "cubic-bezier(0.755,  0.050, 0.855, 0.060)",
      easeInSine: "cubic-bezier(0.470,  0.000, 0.745, 0.715)",
      easeOutBack: "cubic-bezier(0.175,  0.885, 0.320, 1.275)",
      easeOutCubic: "cubic-bezier(0.215,  0.610, 0.355, 1.000)",
      easeOutCirc: "cubic-bezier(0.075,  0.820, 0.165, 1.000)",
      easeOutExpo: "cubic-bezier(0.190,  1.000, 0.220, 1.000)",
      easeOutQuad: "cubic-bezier(0.250,  0.460, 0.450, 0.940)",
      easeOutQuart: "cubic-bezier(0.165,  0.840, 0.440, 1.000)",
      easeOutQuint: "cubic-bezier(0.230,  1.000, 0.320, 1.000)",
      easeOutSine: "cubic-bezier(0.390,  0.575, 0.565, 1.000)",
      easeInOutBack: "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
      easeInOutCirc: "cubic-bezier(0.785,  0.135, 0.150, 0.860)",
      easeInOutCubic: "cubic-bezier(0.645,  0.045, 0.355, 1.000)",
      easeInOutExpo: "cubic-bezier(1.000,  0.000, 0.000, 1.000)",
      easeInOutQuad: "cubic-bezier(0.455,  0.030, 0.515, 0.955)",
      easeInOutQuart: "cubic-bezier(0.770,  0.000, 0.175, 1.000)",
      easeInOutQuint: "cubic-bezier(0.860,  0.000, 0.070, 1.000)",
      easeInOutSine: "cubic-bezier(0.445,  0.050, 0.550, 0.950)"
    };
    function N(t) {
      return q[t];
    }
    var L = function(t, e, n) {
        switch (t) {
          case "top":
            return "0 " + n / 2 + "px " + e + "px " + n / 2 + "px";
          case "left":
            return e / 2 + "px " + n + "px " + e / 2 + "px 0";
          case "bottom":
            return e + "px " + n / 2 + "px 0 " + n / 2 + "px";
          case "right":
            return e / 2 + "px 0 " + e / 2 + "px " + n + "px";
          default:
            throw new Error(
              "Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'."
            );
        }
      },
      D = { left: "Right", right: "Left", top: "Bottom", bottom: "Top" };
    function F(t) {
      var e,
        n = t.pointingDirection,
        r = t.height,
        o = t.width,
        i = t.foregroundColor,
        a = t.backgroundColor,
        u = void 0 === a ? "transparent" : a,
        c = parseFloat(r),
        s = parseFloat(o);
      if (isNaN(c) || isNaN(s))
        throw new Error(
          "Passed an invalid value to `height` or `width`. Please provide a pixel based unit"
        );
      return (
        ((e = {
          borderColor: u,
          width: "0",
          height: "0",
          borderWidth: L(n, c, s),
          borderStyle: "solid"
        })["border" + D[n] + "Color"] = i + " !important"),
        e
      );
    }
    function U() {
      var t =
        arguments.length > 0 && void 0 !== arguments[0]
          ? arguments[0]
          : "break-word";
      return {
        overflowWrap: t,
        wordWrap: t,
        wordBreak: "break-word" === t ? "break-all" : t
      };
    }
    function $(t) {
      return Math.round(255 * t);
    }
    function W(t, e, n) {
      return $(t) + "," + $(e) + "," + $(n);
    }
    function B(t, e, n) {
      var r =
        arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : W;
      if (0 === e) return r(n, n, n);
      var o = (t % 360) / 60,
        i = (1 - Math.abs(2 * n - 1)) * e,
        a = i * (1 - Math.abs((o % 2) - 1)),
        u = 0,
        c = 0,
        s = 0;
      o >= 0 && o < 1
        ? ((u = i), (c = a))
        : o >= 1 && o < 2
        ? ((u = a), (c = i))
        : o >= 2 && o < 3
        ? ((c = i), (s = a))
        : o >= 3 && o < 4
        ? ((c = a), (s = i))
        : o >= 4 && o < 5
        ? ((u = a), (s = i))
        : o >= 5 && o < 6 && ((u = i), (s = a));
      var f = n - i / 2;
      return r(u + f, c + f, s + f);
    }
    var H = {
      aliceblue: "f0f8ff",
      antiquewhite: "faebd7",
      aqua: "00ffff",
      aquamarine: "7fffd4",
      azure: "f0ffff",
      beige: "f5f5dc",
      bisque: "ffe4c4",
      black: "000",
      blanchedalmond: "ffebcd",
      blue: "0000ff",
      blueviolet: "8a2be2",
      brown: "a52a2a",
      burlywood: "deb887",
      cadetblue: "5f9ea0",
      chartreuse: "7fff00",
      chocolate: "d2691e",
      coral: "ff7f50",
      cornflowerblue: "6495ed",
      cornsilk: "fff8dc",
      crimson: "dc143c",
      cyan: "00ffff",
      darkblue: "00008b",
      darkcyan: "008b8b",
      darkgoldenrod: "b8860b",
      darkgray: "a9a9a9",
      darkgreen: "006400",
      darkgrey: "a9a9a9",
      darkkhaki: "bdb76b",
      darkmagenta: "8b008b",
      darkolivegreen: "556b2f",
      darkorange: "ff8c00",
      darkorchid: "9932cc",
      darkred: "8b0000",
      darksalmon: "e9967a",
      darkseagreen: "8fbc8f",
      darkslateblue: "483d8b",
      darkslategray: "2f4f4f",
      darkslategrey: "2f4f4f",
      darkturquoise: "00ced1",
      darkviolet: "9400d3",
      deeppink: "ff1493",
      deepskyblue: "00bfff",
      dimgray: "696969",
      dimgrey: "696969",
      dodgerblue: "1e90ff",
      firebrick: "b22222",
      floralwhite: "fffaf0",
      forestgreen: "228b22",
      fuchsia: "ff00ff",
      gainsboro: "dcdcdc",
      ghostwhite: "f8f8ff",
      gold: "ffd700",
      goldenrod: "daa520",
      gray: "808080",
      green: "008000",
      greenyellow: "adff2f",
      grey: "808080",
      honeydew: "f0fff0",
      hotpink: "ff69b4",
      indianred: "cd5c5c",
      indigo: "4b0082",
      ivory: "fffff0",
      khaki: "f0e68c",
      lavender: "e6e6fa",
      lavenderblush: "fff0f5",
      lawngreen: "7cfc00",
      lemonchiffon: "fffacd",
      lightblue: "add8e6",
      lightcoral: "f08080",
      lightcyan: "e0ffff",
      lightgoldenrodyellow: "fafad2",
      lightgray: "d3d3d3",
      lightgreen: "90ee90",
      lightgrey: "d3d3d3",
      lightpink: "ffb6c1",
      lightsalmon: "ffa07a",
      lightseagreen: "20b2aa",
      lightskyblue: "87cefa",
      lightslategray: "789",
      lightslategrey: "789",
      lightsteelblue: "b0c4de",
      lightyellow: "ffffe0",
      lime: "0f0",
      limegreen: "32cd32",
      linen: "faf0e6",
      magenta: "f0f",
      maroon: "800000",
      mediumaquamarine: "66cdaa",
      mediumblue: "0000cd",
      mediumorchid: "ba55d3",
      mediumpurple: "9370db",
      mediumseagreen: "3cb371",
      mediumslateblue: "7b68ee",
      mediumspringgreen: "00fa9a",
      mediumturquoise: "48d1cc",
      mediumvioletred: "c71585",
      midnightblue: "191970",
      mintcream: "f5fffa",
      mistyrose: "ffe4e1",
      moccasin: "ffe4b5",
      navajowhite: "ffdead",
      navy: "000080",
      oldlace: "fdf5e6",
      olive: "808000",
      olivedrab: "6b8e23",
      orange: "ffa500",
      orangered: "ff4500",
      orchid: "da70d6",
      palegoldenrod: "eee8aa",
      palegreen: "98fb98",
      paleturquoise: "afeeee",
      palevioletred: "db7093",
      papayawhip: "ffefd5",
      peachpuff: "ffdab9",
      peru: "cd853f",
      pink: "ffc0cb",
      plum: "dda0dd",
      powderblue: "b0e0e6",
      purple: "800080",
      rebeccapurple: "639",
      red: "f00",
      rosybrown: "bc8f8f",
      royalblue: "4169e1",
      saddlebrown: "8b4513",
      salmon: "fa8072",
      sandybrown: "f4a460",
      seagreen: "2e8b57",
      seashell: "fff5ee",
      sienna: "a0522d",
      silver: "c0c0c0",
      skyblue: "87ceeb",
      slateblue: "6a5acd",
      slategray: "708090",
      slategrey: "708090",
      snow: "fffafa",
      springgreen: "00ff7f",
      steelblue: "4682b4",
      tan: "d2b48c",
      teal: "008080",
      thistle: "d8bfd8",
      tomato: "ff6347",
      turquoise: "40e0d0",
      violet: "ee82ee",
      wheat: "f5deb3",
      white: "fff",
      whitesmoke: "f5f5f5",
      yellow: "ff0",
      yellowgreen: "9acd32"
    };
    var K = /^#[a-fA-F0-9]{6}$/,
      Y = /^#[a-fA-F0-9]{3}$/,
      G = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/,
      V = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/,
      J = /^hsl\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*\)$/,
      Q = /^hsla\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/;
    function X(t) {
      if ("string" != typeof t)
        throw new Error(
          "Passed an incorrect argument to a color function, please pass a string representation of a color."
        );
      var e = (function(t) {
        if ("string" != typeof t) return t;
        var e = t.toLowerCase();
        return H[e] ? "#" + H[e] : t;
      })(t);
      if (e.match(K))
        return {
          red: parseInt("" + e[1] + e[2], 16),
          green: parseInt("" + e[3] + e[4], 16),
          blue: parseInt("" + e[5] + e[6], 16)
        };
      if (e.match(Y))
        return {
          red: parseInt("" + e[1] + e[1], 16),
          green: parseInt("" + e[2] + e[2], 16),
          blue: parseInt("" + e[3] + e[3], 16)
        };
      var n = G.exec(e);
      if (n)
        return {
          red: parseInt("" + n[1], 10),
          green: parseInt("" + n[2], 10),
          blue: parseInt("" + n[3], 10)
        };
      var r = V.exec(e);
      if (r)
        return {
          red: parseInt("" + r[1], 10),
          green: parseInt("" + r[2], 10),
          blue: parseInt("" + r[3], 10),
          alpha: parseFloat("" + r[4])
        };
      var o = J.exec(e);
      if (o) {
        var i =
            "rgb(" +
            B(
              parseInt("" + o[1], 10),
              parseInt("" + o[2], 10) / 100,
              parseInt("" + o[3], 10) / 100
            ) +
            ")",
          a = G.exec(i);
        if (!a)
          throw new Error(
            "Couldn't generate valid rgb string from " +
              e +
              ", it returned " +
              i +
              "."
          );
        return {
          red: parseInt("" + a[1], 10),
          green: parseInt("" + a[2], 10),
          blue: parseInt("" + a[3], 10)
        };
      }
      var u = Q.exec(e);
      if (u) {
        var c =
            "rgb(" +
            B(
              parseInt("" + u[1], 10),
              parseInt("" + u[2], 10) / 100,
              parseInt("" + u[3], 10) / 100
            ) +
            ")",
          s = G.exec(c);
        if (!s)
          throw new Error(
            "Couldn't generate valid rgb string from " +
              e +
              ", it returned " +
              c +
              "."
          );
        return {
          red: parseInt("" + s[1], 10),
          green: parseInt("" + s[2], 10),
          blue: parseInt("" + s[3], 10),
          alpha: parseFloat("" + u[4])
        };
      }
      throw new Error(
        "Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation."
      );
    }
    function Z(t) {
      return (function(t) {
        var e = t.red / 255,
          n = t.green / 255,
          r = t.blue / 255,
          o = Math.max(e, n, r),
          i = Math.min(e, n, r),
          a = (o + i) / 2;
        if (o === i)
          return void 0 !== t.alpha
            ? { hue: 0, saturation: 0, lightness: a, alpha: t.alpha }
            : { hue: 0, saturation: 0, lightness: a };
        var u = void 0,
          c = o - i,
          s = a > 0.5 ? c / (2 - o - i) : c / (o + i);
        switch (o) {
          case e:
            u = (n - r) / c + (n < r ? 6 : 0);
            break;
          case n:
            u = (r - e) / c + 2;
            break;
          default:
            u = (e - n) / c + 4;
        }
        return (
          (u *= 60),
          void 0 !== t.alpha
            ? { hue: u, saturation: s, lightness: a, alpha: t.alpha }
            : { hue: u, saturation: s, lightness: a }
        );
      })(X(t));
    }
    var tt = function(t) {
      return 7 === t.length && t[1] === t[2] && t[3] === t[4] && t[5] === t[6]
        ? "#" + t[1] + t[3] + t[5]
        : t;
    };
    function et(t) {
      var e = t.toString(16);
      return 1 === e.length ? "0" + e : e;
    }
    function nt(t, e, n) {
      if ("number" == typeof t && "number" == typeof e && "number" == typeof n)
        return tt("#" + et(t) + et(e) + et(n));
      if ("object" == typeof t && void 0 === e && void 0 === n)
        return tt("#" + et(t.red) + et(t.green) + et(t.blue));
      throw new Error(
        "Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 })."
      );
    }
    function rt(t, e, n, r) {
      if ("string" == typeof t && "number" == typeof e) {
        var o = X(t);
        return "rgba(" + o.red + "," + o.green + "," + o.blue + "," + e + ")";
      }
      if (
        "number" == typeof t &&
        "number" == typeof e &&
        "number" == typeof n &&
        "number" == typeof r
      )
        return r >= 1
          ? nt(t, e, n)
          : "rgba(" + t + "," + e + "," + n + "," + r + ")";
      if ("object" == typeof t && void 0 === e && void 0 === n && void 0 === r)
        return t.alpha >= 1
          ? nt(t.red, t.green, t.blue)
          : "rgba(" +
              t.red +
              "," +
              t.green +
              "," +
              t.blue +
              "," +
              t.alpha +
              ")";
      throw new Error(
        "Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 })."
      );
    }
    function ot(t) {
      return et(Math.round(255 * t));
    }
    function it(t, e, n) {
      return tt("#" + ot(t) + ot(e) + ot(n));
    }
    function at(t, e, n) {
      return B(t, e, n, it);
    }
    function ut(t, e, n) {
      if ("number" == typeof t && "number" == typeof e && "number" == typeof n)
        return at(t, e, n);
      if ("object" == typeof t && void 0 === e && void 0 === n)
        return at(t.hue, t.saturation, t.lightness);
      throw new Error(
        "Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 })."
      );
    }
    function ct(t, e, n, r) {
      if (
        "number" == typeof t &&
        "number" == typeof e &&
        "number" == typeof n &&
        "number" == typeof r
      )
        return r >= 1 ? at(t, e, n) : "rgba(" + B(t, e, n) + "," + r + ")";
      if ("object" == typeof t && void 0 === e && void 0 === n && void 0 === r)
        return t.alpha >= 1
          ? at(t.hue, t.saturation, t.lightness)
          : "rgba(" + B(t.hue, t.saturation, t.lightness) + "," + t.alpha + ")";
      throw new Error(
        "Passed invalid arguments to hsla, please pass multiple numbers e.g. hsl(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 })."
      );
    }
    var st = function(t) {
        return (
          "number" == typeof t.red &&
          "number" == typeof t.green &&
          "number" == typeof t.blue &&
          ("number" != typeof t.alpha || void 0 === t.alpha)
        );
      },
      ft = function(t) {
        return (
          "number" == typeof t.red &&
          "number" == typeof t.green &&
          "number" == typeof t.blue &&
          "number" == typeof t.alpha
        );
      },
      lt = function(t) {
        return (
          "number" == typeof t.hue &&
          "number" == typeof t.saturation &&
          "number" == typeof t.lightness &&
          ("number" != typeof t.alpha || void 0 === t.alpha)
        );
      },
      pt = function(t) {
        return (
          "number" == typeof t.hue &&
          "number" == typeof t.saturation &&
          "number" == typeof t.lightness &&
          "number" == typeof t.alpha
        );
      },
      dt =
        "Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.";
    function ht(t) {
      if ("object" != typeof t) throw new Error(dt);
      if (ft(t)) return rt(t);
      if (st(t)) return nt(t);
      if (pt(t)) return ct(t);
      if (lt(t)) return ut(t);
      throw new Error(dt);
    }
    function vt(t) {
      return (function t(e, n, r) {
        return function() {
          var o = r.concat(Array.prototype.slice.call(arguments));
          return o.length >= n ? e.apply(this, o) : t(e, n, o);
        };
      })(t, t.length, []);
    }
    function yt(t, e) {
      var n = Z(e);
      return ht(S({}, n, { hue: (n.hue + t) % 360 }));
    }
    var bt = vt(yt);
    function gt(t) {
      var e = Z(t);
      return ht(S({}, e, { hue: (e.hue + 180) % 360 }));
    }
    function mt(t, e, n) {
      return Math.max(t, Math.min(e, n));
    }
    function _t(t, e) {
      var n = Z(e);
      return ht(S({}, n, { lightness: mt(0, 1, n.lightness - t) }));
    }
    var wt = vt(_t);
    function xt(t, e) {
      var n = Z(e);
      return ht(S({}, n, { saturation: mt(0, 1, n.saturation - t) }));
    }
    var Ot = vt(xt);
    function St(t) {
      var e = X(t),
        n = Object.keys(e).map(function(t) {
          var n = e[t] / 255;
          return n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4);
        });
      return 0.2126 * n[0] + 0.7152 * n[1] + 0.0722 * n[2];
    }
    function kt(t) {
      return ht(S({}, Z(t), { saturation: 0 }));
    }
    function Et(t) {
      var e = X(t);
      return ht(
        S({}, e, { red: 255 - e.red, green: 255 - e.green, blue: 255 - e.blue })
      );
    }
    function jt(t, e) {
      var n = Z(e);
      return ht(S({}, n, { lightness: mt(0, 1, n.lightness + t) }));
    }
    var Ct = vt(jt);
    function Pt() {
      var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0.5,
        e = arguments[1],
        n = arguments[2],
        r = X(e),
        o = S({}, r, { alpha: "number" == typeof r.alpha ? r.alpha : 1 }),
        i = X(n),
        a = S({}, i, { alpha: "number" == typeof i.alpha ? i.alpha : 1 }),
        u = o.alpha - a.alpha,
        c = 2 * t - 1,
        s = ((c * u == -1 ? c : c + u) / (1 + c * u) + 1) / 2,
        f = 1 - s;
      return rt({
        red: Math.floor(o.red * s + a.red * f),
        green: Math.floor(o.green * s + a.green * f),
        blue: Math.floor(o.blue * s + a.blue * f),
        alpha: o.alpha + (a.alpha - o.alpha) * (t / 1)
      });
    }
    var At = vt(Pt);
    function It(t, e) {
      var n = X(e),
        r = "number" == typeof n.alpha ? n.alpha : 1;
      return rt(S({}, n, { alpha: mt(0, 1, (100 * r + 100 * t) / 100) }));
    }
    var zt = vt(It);
    function Tt(t) {
      return St(t) > 0.179 ? "#000" : "#fff";
    }
    var Mt = vt(Tt);
    function Rt(t, e) {
      var n = Z(e);
      return ht(S({}, n, { saturation: mt(0, 1, n.saturation + t) }));
    }
    var qt = vt(Rt);
    function Nt(t, e) {
      return ht(S({}, Z(e), { hue: t }));
    }
    var Lt = vt(Nt);
    function Dt(t, e) {
      return ht(S({}, Z(e), { lightness: t }));
    }
    var Ft = vt(Dt);
    function Ut(t, e) {
      return ht(S({}, Z(e), { saturation: t }));
    }
    var $t = vt(Ut);
    function Wt(t, e) {
      if ("number" != typeof t || t > 1 || t < -1)
        throw new Error(
          "Passed an incorrect argument to shade, please pass a percentage less than or equal to 1 and larger than or equal to -1."
        );
      if ("string" != typeof e)
        throw new Error(
          "Passed an incorrect argument to a color function, please pass a string representation of a color."
        );
      return At(t, e, "rgb(0, 0, 0)");
    }
    var Bt = vt(Wt);
    function Ht(t, e) {
      if ("number" != typeof t || t > 1 || t < -1)
        throw new Error(
          "Passed an incorrect argument to tint, please pass a percentage less than or equal to 1 and larger than or equal to -1."
        );
      if ("string" != typeof e)
        throw new Error(
          "Passed an incorrect argument to a color function, please pass a string representation of a color."
        );
      return At(t, e, "rgb(255, 255, 255)");
    }
    var Kt = vt(Ht);
    function Yt(t, e) {
      var n = X(e),
        r = "number" == typeof n.alpha ? n.alpha : 1;
      return rt(S({}, n, { alpha: mt(0, 1, (100 * r - 100 * t) / 100) }));
    }
    var Gt = vt(Yt);
    function Vt() {
      for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
        e[n] = arguments[n];
      var r = Array.isArray(e[0]);
      if (!r && e.length > 8)
        throw new Error(
          "The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation"
        );
      return {
        animation: e
          .map(function(t) {
            if ((r && !Array.isArray(t)) || (!r && Array.isArray(t)))
              throw new Error(
                "To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')"
              );
            if (Array.isArray(t) && t.length > 8)
              throw new Error(
                "The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation"
              );
            return Array.isArray(t) ? t.join(" ") : t;
          })
          .join(", ")
      };
    }
    function Jt() {
      for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
        e[n] = arguments[n];
      return { backgroundImage: e.join(", ") };
    }
    function Qt() {
      for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
        e[n] = arguments[n];
      return { background: e.join(", ") };
    }
    function Xt() {
      for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
        e[n] = arguments[n];
      return a.apply(void 0, ["borderColor"].concat(e));
    }
    function Zt(t, e) {
      var n,
        o,
        i = r(t);
      if (!e && 0 !== e)
        throw new Error(
          "borderRadius expects a radius value as a string or number as the second argument."
        );
      if ("Top" === i || "Bottom" === i)
        return (
          ((n = {})["border" + i + "RightRadius"] = e),
          (n["border" + i + "LeftRadius"] = e),
          n
        );
      if ("Left" === i || "Right" === i)
        return (
          ((o = {})["borderTop" + i + "Radius"] = e),
          (o["borderBottom" + i + "Radius"] = e),
          o
        );
      throw new Error(
        'borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.'
      );
    }
    function te() {
      for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
        e[n] = arguments[n];
      return a.apply(void 0, ["borderStyle"].concat(e));
    }
    function ee() {
      for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
        e[n] = arguments[n];
      return a.apply(void 0, ["borderWidth"].concat(e));
    }
    function ne(t, e) {
      return t(e ? ":" + e : "");
    }
    function re(t, e, n) {
      if (!e) throw new Error("You must provide a template to this method.");
      if (0 === t.length) return ne(e, null);
      for (var r = [], o = 0; o < t.length; o += 1) {
        if (n && n.indexOf(t[o]) < 0)
          throw new Error(
            "You passed an unsupported selector state to this method."
          );
        r.push(ne(e, t[o]));
      }
      return (r = r.join(","));
    }
    var oe = [void 0, null, "active", "focus", "hover"];
    function ie(t) {
      return (
        "button" +
        t +
        ',\n  input[type="button"]' +
        t +
        ',\n  input[type="reset"]' +
        t +
        ',\n  input[type="submit"]' +
        t
      );
    }
    function ae() {
      for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
        e[n] = arguments[n];
      return re(e, ie, oe);
    }
    function ue() {
      for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
        e[n] = arguments[n];
      return a.apply(void 0, ["margin"].concat(e));
    }
    function ce() {
      for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
        e[n] = arguments[n];
      return a.apply(void 0, ["padding"].concat(e));
    }
    var se = ["absolute", "fixed", "relative", "static", "sticky"];
    function fe(t) {
      for (
        var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1;
        r < e;
        r++
      )
        n[r - 1] = arguments[r];
      if (se.indexOf(t) >= 0)
        return S({ position: t }, a.apply(void 0, [""].concat(n)));
      var o = t;
      return a.apply(void 0, ["", o].concat(n));
    }
    function le(t) {
      return {
        height: t,
        width:
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t
      };
    }
    var pe = [void 0, null, "active", "focus", "hover"];
    function de(t) {
      return (
        'input[type="color"]' +
        t +
        ',\n    input[type="date"]' +
        t +
        ',\n    input[type="datetime"]' +
        t +
        ',\n    input[type="datetime-local"]' +
        t +
        ',\n    input[type="email"]' +
        t +
        ',\n    input[type="month"]' +
        t +
        ',\n    input[type="number"]' +
        t +
        ',\n    input[type="password"]' +
        t +
        ',\n    input[type="search"]' +
        t +
        ',\n    input[type="tel"]' +
        t +
        ',\n    input[type="text"]' +
        t +
        ',\n    input[type="time"]' +
        t +
        ',\n    input[type="url"]' +
        t +
        ',\n    input[type="week"]' +
        t +
        ",\n    input:not([type])" +
        t +
        ",\n    textarea" +
        t
      );
    }
    function he() {
      for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
        e[n] = arguments[n];
      return re(e, de, pe);
    }
    function ve() {
      for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
        e[n] = arguments[n];
      return { transition: e.join(", ") };
    }
  },
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r,
      o = n(12),
      i = n(90),
      a = (r = i) && r.__esModule ? r : { default: r },
      u = n(17);
    e.default = (0, o.connect)(
      function(t) {
        return { open: t.open, value: t.value, items: t.items };
      },
      function(t) {
        return {
          onInputChange: function(e) {
            return t((0, u.setValue)(e));
          },
          onCancel: function() {
            return t((0, u.close)());
          },
          createEntity: function(e) {
            return t((0, u.createEntityRequest)(e));
          },
          selectEntity: function(e) {
            return t((0, u.addEntityRequest)(e));
          }
        };
      }
    )(a.default);
  },
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = u(n(3)),
      o = u(n(91)),
      i = u(n(97)),
      a = u(n(98));
    function u(t) {
      return t && t.__esModule ? t : { default: t };
    }
    e.default = function(t) {
      var e = t.createEntity,
        n = t.selectEntity,
        u = t.items,
        c = t.value,
        s = t.showCreate,
        f = (function(t, e) {
          var n = {};
          for (var r in t)
            e.indexOf(r) >= 0 ||
              (Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]));
          return n;
        })(t, ["createEntity", "selectEntity", "items", "value", "showCreate"]),
        l = (s
          ? [
              r.default.createElement(i.default, {
                key: 1e3,
                label: c,
                onClick: function() {
                  return e(c);
                }
              })
            ]
          : []
        ).concat(
          u.map(function(t, e) {
            return r.default.createElement(a.default, {
              key: e,
              item: t,
              onClick: function() {
                return n(t);
              }
            });
          })
        );
      return r.default.createElement(
        o.default,
        Object.assign({ value: c }, f),
        l
      );
    };
  },
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = a(n(3)),
      o = a(n(92)),
      i = a(n(95));
    function a(t) {
      return t && t.__esModule ? t : { default: t };
    }
    e.default = function(t) {
      var e = t.open,
        n = t.value,
        a = t.onCancel,
        u = t.onInputChange,
        c = t.children;
      return r.default.createElement(
        "div",
        null,
        r.default.createElement(o.default, {
          onCancel: a,
          onInputChange: u,
          value: n
        }),
        r.default.createElement(i.default, { open: e }, c)
      );
    };
  },
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = a(n(3)),
      o = a(n(93)),
      i = a(n(94));
    function a(t) {
      return t && t.__esModule ? t : { default: t };
    }
    e.default = function(t) {
      var e = t.onCancel,
        n = t.onInputChange,
        a = (function(t, e) {
          var n = {};
          for (var r in t)
            e.indexOf(r) >= 0 ||
              (Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]));
          return n;
        })(t, ["onCancel", "onInputChange"]);
      return r.default.createElement(
        o.default,
        null,
        r.default.createElement(
          "input",
          Object.assign(
            {
              onChange: function(t) {
                return n(t.target.value);
              }
            },
            a
          )
        ),
        r.default.createElement(i.default, { onClick: e })
      );
    };
  },
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r,
      o,
      i,
      a = ((r = [
        '\n  padding: 8px 0 6px;\n  border-bottom: 2px solid #007aff;\n  display: inline-block;\n  width: 100%;\n\n  > input {\n    border: 0;\n    outline: none;\n    float: left;\n    width: calc(100% - 36px) !important;\n    font-family: BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu,\n      Cantarell, "Helvetica Neue", sans-serif;\n    line-height: 20px;\n    font-size: 14px;\n    padding: 0 6px;\n  }\n'
      ]),
      (o = [
        '\n  padding: 8px 0 6px;\n  border-bottom: 2px solid #007aff;\n  display: inline-block;\n  width: 100%;\n\n  > input {\n    border: 0;\n    outline: none;\n    float: left;\n    width: calc(100% - 36px) !important;\n    font-family: BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu,\n      Cantarell, "Helvetica Neue", sans-serif;\n    line-height: 20px;\n    font-size: 14px;\n    padding: 0 6px;\n  }\n'
      ]),
      Object.freeze(
        Object.defineProperties(r, { raw: { value: Object.freeze(o) } })
      )),
      u = n(4);
    var c = ((i = u) && i.__esModule ? i : { default: i }).default.div(a);
    e.default = c;
  },
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r,
      o,
      i,
      a = ((r = [
        '\n  font-family: sans-serif;\n  background-color: #007aff;\n  color: white;\n  width: 12px;\n  height: 12px;\n  display: inline-block;\n  text-align: center;\n  line-height: 12px;\n  font-size: 12px;\n  padding: 1px;\n  cursor: pointer;\n  border-radius: 100%;\n  transform: rotate(45deg);\n\n  &::after {\n    content: "+";\n    font-size: 12px;\n    width: 100%;\n    height: 100%;\n  }\n'
      ]),
      (o = [
        '\n  font-family: sans-serif;\n  background-color: #007aff;\n  color: white;\n  width: 12px;\n  height: 12px;\n  display: inline-block;\n  text-align: center;\n  line-height: 12px;\n  font-size: 12px;\n  padding: 1px;\n  cursor: pointer;\n  border-radius: 100%;\n  transform: rotate(45deg);\n\n  &::after {\n    content: "+";\n    font-size: 12px;\n    width: 100%;\n    height: 100%;\n  }\n'
      ]),
      Object.freeze(
        Object.defineProperties(r, { raw: { value: Object.freeze(o) } })
      )),
      u = n(4);
    var c = ((i = u) && i.__esModule ? i : { default: i }).default.div(a);
    e.default = c;
  },
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = i(n(3)),
      o = i(n(96));
    function i(t) {
      return t && t.__esModule ? t : { default: t };
    }
    e.default = function(t) {
      var e = t.open,
        n = t.children;
      return r.default.createElement(
        o.default,
        { open: e },
        0 < n.length &&
          n.map(function(t, e) {
            return r.default.createElement("li", { key: e }, t);
          }),
        0 === n.length &&
          r.default.createElement(
            "li",
            { style: { padding: "8px", cursor: "initial" }, key: 0 },
            "No results."
          )
      );
    };
  },
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r,
      o,
      i,
      a = ((r = [
        '\n  background: white;\n  // border-top: 0;\n  // border-bottom: 1px solid #007aff;\n  // border-left: 1px solid #007aff;\n  // border-right: 1px solid #007aff;\n  border: 1px solid #007aff;\n  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  max-height: 280px;\n  overflow-y: scroll;\n  font-family: BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu,\n    Cantarell, "Helvetica Neue", sans-serif;\n  line-height: 20px;\n  font-size: 14px;\n  position: absolute;\n  // width: calc(100% - 1px);\n  // margin-left: 1px;\n  width: 110%;\n  margin-left: calc( -5% + 1px );\n  overflow-x: hidden;\n  z-index: 1001;\n\n  display: ',
        ";\n\n  > li {\n    cursor: pointer;\n    margin-bottom: 0;\n    padding-bottom: 4px;\n\n    &:hover {\n      background-color: rgba(46, 146, 255, 0.2);\n    }\n  }\n"
      ]),
      (o = [
        '\n  background: white;\n  // border-top: 0;\n  // border-bottom: 1px solid #007aff;\n  // border-left: 1px solid #007aff;\n  // border-right: 1px solid #007aff;\n  border: 1px solid #007aff;\n  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  max-height: 280px;\n  overflow-y: scroll;\n  font-family: BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu,\n    Cantarell, "Helvetica Neue", sans-serif;\n  line-height: 20px;\n  font-size: 14px;\n  position: absolute;\n  // width: calc(100% - 1px);\n  // margin-left: 1px;\n  width: 110%;\n  margin-left: calc( -5% + 1px );\n  overflow-x: hidden;\n  z-index: 1001;\n\n  display: ',
        ";\n\n  > li {\n    cursor: pointer;\n    margin-bottom: 0;\n    padding-bottom: 4px;\n\n    &:hover {\n      background-color: rgba(46, 146, 255, 0.2);\n    }\n  }\n"
      ]),
      Object.freeze(
        Object.defineProperties(r, { raw: { value: Object.freeze(o) } })
      )),
      u = n(4);
    var c = ((i = u) && i.__esModule ? i : { default: i }).default.ul(
      a,
      function(t) {
        return t.open ? "block" : "none";
      }
    );
    e.default = c;
  },
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = a(n(3)),
      o = a(n(33)),
      i = a(n(34));
    function a(t) {
      return t && t.__esModule ? t : { default: t };
    }
    e.default = function(t) {
      var e = t.label,
        n = t.onClick;
      return r.default.createElement(
        o.default,
        { onClick: n },
        r.default.createElement(i.default, null, "Create ", e, "...")
      );
    };
  },
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = s(n(3)),
      o = s(n(33)),
      i = s(n(34)),
      a = s(n(32)),
      u = s(n(99)),
      c = s(n(100));
    function s(t) {
      return t && t.__esModule ? t : { default: t };
    }
    e.default = function(t) {
      var e = t.item,
        n = (function(t, e) {
          var n = {};
          for (var r in t)
            e.indexOf(r) >= 0 ||
              (Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]));
          return n;
        })(t, ["item"]);
      return r.default.createElement(
        o.default,
        n,
        r.default.createElement(i.default, { title: e.label }, e.label),
        r.default.createElement(a.default, {
          className: "fa fa-cloud",
          local: "local" === e.scope ? 1 : 0
        }),
        0 < e.descriptions.length &&
          r.default.createElement(
            u.default,
            { title: e.descriptions[0] },
            e.descriptions[0]
          ),
        r.default.createElement(c.default, null, e.displayTypes)
      );
    };
  },
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r,
      o,
      i,
      a = ((r = [
        "\n  // Same as the Cloud Icon.\n  color: #cbcbcb;\n  font-size: 10px;\n  width: calc(100% - 10px);\n  text-overflow: ellipsis;\n  overflow: hidden;\n  line-height: 12px;\n"
      ]),
      (o = [
        "\n  // Same as the Cloud Icon.\n  color: #cbcbcb;\n  font-size: 10px;\n  width: calc(100% - 10px);\n  text-overflow: ellipsis;\n  overflow: hidden;\n  line-height: 12px;\n"
      ]),
      Object.freeze(
        Object.defineProperties(r, { raw: { value: Object.freeze(o) } })
      )),
      u = n(4);
    var c = ((i = u) && i.__esModule ? i : { default: i }).default.div(a);
    e.default = c;
  },
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r,
      o,
      i,
      a = ((r = [
        "\n  // Same as the Cloud Icon.\n  color: #cbcbcb;\n  font-size: 10px;\n  width: calc(100% - 10px);\n  text-overflow: ellipsis;\n  overflow: hidden;\n  line-height: 12px;\n"
      ]),
      (o = [
        "\n  // Same as the Cloud Icon.\n  color: #cbcbcb;\n  font-size: 10px;\n  width: calc(100% - 10px);\n  text-overflow: ellipsis;\n  overflow: hidden;\n  line-height: 12px;\n"
      ]),
      Object.freeze(
        Object.defineProperties(r, { raw: { value: Object.freeze(o) } })
      )),
      u = n(4);
    var c = ((i = u) && i.__esModule ? i : { default: i }).default.div(a);
    e.default = c;
  },
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r,
      o = n(12),
      i = n(17),
      a = n(102),
      u = (r = a) && r.__esModule ? r : { default: r };
    e.default = (0, o.connect)(
      function(t) {
        return { open: t.open };
      },
      function(t) {
        return {
          onBlur: function() {
            console.log("Blurring..."), t((0, i.close)());
          }
        };
      }
    )(u.default);
  },
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = c(
        [
          "\n  position: relative;\n  overflow-y: visible;\n  margin-bottom: 8px;\n  width: calc(100% + 6px);\n  margin-left: -3px;\n"
        ],
        [
          "\n  position: relative;\n  overflow-y: visible;\n  margin-bottom: 8px;\n  width: calc(100% + 6px);\n  margin-left: -3px;\n"
        ]
      ),
      o = c(
        [
          "\n  white-space: nowrap;\n  overflow-x: hidden;\n\n  > * {\n    display: inline-block;\n    box-sizing: border-box;\n\n    &:first-child {\n      // Slightly smaller to accommodate the hover effect.\n      width: calc(100% - 2px);\n      margin: 0 1px;\n\n      margin-left: ",
          ";\n      transition: all 200ms ease-out;\n    }\n\n    &:last-child {\n      width: 100%;\n    }\n  }\n"
        ],
        [
          "\n  white-space: nowrap;\n  overflow-x: hidden;\n\n  > * {\n    display: inline-block;\n    box-sizing: border-box;\n\n    &:first-child {\n      // Slightly smaller to accommodate the hover effect.\n      width: calc(100% - 2px);\n      margin: 0 1px;\n\n      margin-left: ",
          ";\n      transition: all 200ms ease-out;\n    }\n\n    &:last-child {\n      width: 100%;\n    }\n  }\n"
        ]
      ),
      i = u(n(3)),
      a = u(n(4));
    function u(t) {
      return t && t.__esModule ? t : { default: t };
    }
    function c(t, e) {
      return Object.freeze(
        Object.defineProperties(t, { raw: { value: Object.freeze(e) } })
      );
    }
    var s = a.default.div(r),
      f = a.default.div(o, function(t) {
        return t.open ? "-100%" : "1px";
      });
    e.default = function(t) {
      var e = t.children,
        n = (function(t, e) {
          var n = {};
          for (var r in t)
            e.indexOf(r) >= 0 ||
              (Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]));
          return n;
        })(t, ["children"]);
      return i.default.createElement(s, n, i.default.createElement(f, n, e));
    };
  },
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r,
      o = u(
        ["\n  width: 0;\n  height: 0;\n\n  ", ";\n"],
        ["\n  width: 0;\n  height: 0;\n\n  ", ";\n"]
      ),
      i = u(
        [
          "\n    border-top: ",
          " solid transparent;\n    border-bottom: ",
          " solid transparent;\n    border-left: ",
          " solid ",
          ";\n  "
        ],
        [
          "\n    border-top: ",
          " solid transparent;\n    border-bottom: ",
          " solid transparent;\n    border-left: ",
          " solid ",
          ";\n  "
        ]
      ),
      a = n(4);
    function u(t, e) {
      return Object.freeze(
        Object.defineProperties(t, { raw: { value: Object.freeze(e) } })
      );
    }
    var c = ((r = a) && r.__esModule ? r : { default: r }).default.div(
      o,
      function(t) {
        return (0, a.css)(i, t.height, t.height, t.height, t.color);
      }
    );
    e.default = c;
  },
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = s(n(105)),
      o = n(35),
      i = n(24),
      a = n(17),
      u = n(108),
      c = s(n(45));
    function s(t) {
      return t && t.__esModule ? t : { default: t };
    }
    var f = r.default.mark(b),
      l = r.default.mark(g),
      p = r.default.mark(m),
      d = r.default.mark(_),
      h = r.default.mark(x),
      v = r.default.mark(O),
      y = r.default.mark(k);
    function b(t) {
      var e,
        n,
        c = t.payload;
      return r.default.wrap(
        function(t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                if (void 0 !== c && "" !== c) {
                  t.next = 2;
                  break;
                }
                return t.abrupt("return");
              case 2:
                return (t.next = 4), (0, i.call)(o.delay, 500);
              case 4:
                return (
                  void 0 !== wp.wordlift && wp.wordlift.trigger("loading", !0),
                  (e =
                    void 0 !== wlSettings.language
                      ? wlSettings.language
                      : "en"),
                  (t.next = 8),
                  (0, i.call)(u.autocomplete, c, e)
                );
              case 8:
                return (
                  (n = t.sent),
                  (t.next = 11),
                  (0, i.put)((0, a.loadItemsSuccess)(n))
                );
              case 11:
                void 0 !== wp.wordlift && wp.wordlift.trigger("loading", !1);
              case 12:
              case "end":
                return t.stop();
            }
        },
        f,
        this
      );
    }
    function g(t) {
      var e,
        n = t.payload;
      return r.default.wrap(
        function(t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return (
                  (e = (0, c.default)()).$apply(
                    e.setCurrentEntity(void 0, void 0, n)
                  ),
                  (t.next = 4),
                  (0, i.put)((0, a.createEntitySuccess)())
                );
              case 4:
              case "end":
                return t.stop();
            }
        },
        l,
        this
      );
    }
    function m(t) {
      var e,
        n = t.payload;
      return r.default.wrap(
        function(t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return (
                  (e = (0, c.default)()).$apply(function() {
                    e.setCurrentEntity(),
                      (e.currentEntity.description = n.descriptions[0]),
                      (e.currentEntity.id = n.id),
                      (e.currentEntity.images = n.images),
                      (e.currentEntity.label = n.label),
                      (e.currentEntity.mainType = S(n.types)),
                      (e.currentEntity.types = n.types),
                      (e.currentEntity.sameAs = n.sameAss),
                      e.storeCurrentEntity();
                  }),
                  (t.next = 4),
                  (0, i.put)((0, a.addEntitySuccess)())
                );
              case 4:
              case "end":
                return t.stop();
            }
        },
        p,
        this
      );
    }
    function _() {
      return r.default.wrap(
        function(t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return (t.next = 2), (0, i.put)((0, a.close)());
              case 2:
              case "end":
                return t.stop();
            }
        },
        d,
        this
      );
    }
    function w() {
      return (0, o.eventChannel)(function(t) {
        var e = function(e) {
          return t(e);
        };
        return (
          wp.wordlift.on("editorSelectionChanged", e),
          function() {
            return wp.wordlift.off("editorSelectionChanged", e);
          }
        );
      });
    }
    function x() {
      var t, e;
      return r.default.wrap(
        function(n) {
          for (;;)
            switch ((n.prev = n.next)) {
              case 0:
                return (n.next = 2), (0, i.call)(w);
              case 2:
                t = n.sent;
              case 3:
                return (n.next = 6), (0, i.take)(t);
              case 6:
                return (
                  (e = n.sent), (n.next = 9), (0, i.put)((0, a.setValue)(e))
                );
              case 9:
                if ("" !== e) {
                  n.next = 12;
                  break;
                }
                return (n.next = 12), (0, i.put)((0, a.close)());
              case 12:
                n.next = 3;
                break;
              case 14:
              case "end":
                return n.stop();
            }
        },
        h,
        this
      );
    }
    function O() {
      return r.default.wrap(
        function(t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return (t.next = 2), (0, i.takeLatest)(a.setValue, b);
              case 2:
              case "end":
                return t.stop();
            }
        },
        v,
        this
      );
    }
    var S = function(t) {
      for (var e = 0; e < window.wordlift.types.length; e++) {
        var n = window.wordlift.types[e];
        if (-1 < t.indexOf(n.uri)) return n.slug;
      }
      return "thing";
    };
    function k() {
      return r.default.wrap(
        function(t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return (t.next = 2), (0, i.fork)(x);
              case 2:
                return (t.next = 4), (0, i.takeEvery)(a.createEntityRequest, g);
              case 4:
                return (t.next = 6), (0, i.takeEvery)(a.addEntityRequest, m);
              case 6:
                return (t.next = 8), (0, i.takeEvery)(a.createEntitySuccess, _);
              case 8:
                return (t.next = 10), (0, i.takeEvery)(a.addEntitySuccess, _);
              case 10:
                return (t.next = 13), (0, i.take)(a.open);
              case 13:
                return (
                  (t.t0 = i.call),
                  (t.t1 = b),
                  (t.next = 17),
                  (0, i.select)(function(t) {
                    return { payload: t.value };
                  })
                );
              case 17:
                return (t.t2 = t.sent), (t.next = 20), (0, t.t0)(t.t1, t.t2);
              case 20:
                return (
                  (t.next = 22),
                  (0, i.race)({
                    task: (0, i.call)(O),
                    cancel: (0, i.take)(a.close)
                  })
                );
              case 22:
                t.next = 10;
                break;
              case 24:
              case "end":
                return t.stop();
            }
        },
        y,
        this
      );
    }
    e.default = k;
  },
  function(t, e, n) {
    t.exports = n(106);
  },
  function(t, e, n) {
    var r =
        (function() {
          return this;
        })() || Function("return this")(),
      o =
        r.regeneratorRuntime &&
        Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime") >= 0,
      i = o && r.regeneratorRuntime;
    if (((r.regeneratorRuntime = void 0), (t.exports = n(107)), o))
      r.regeneratorRuntime = i;
    else
      try {
        delete r.regeneratorRuntime;
      } catch (t) {
        r.regeneratorRuntime = void 0;
      }
  },
  function(t, e) {
    !(function(e) {
      "use strict";
      var n,
        r = Object.prototype,
        o = r.hasOwnProperty,
        i = "function" == typeof Symbol ? Symbol : {},
        a = i.iterator || "@@iterator",
        u = i.asyncIterator || "@@asyncIterator",
        c = i.toStringTag || "@@toStringTag",
        s = "object" == typeof t,
        f = e.regeneratorRuntime;
      if (f) s && (t.exports = f);
      else {
        (f = e.regeneratorRuntime = s ? t.exports : {}).wrap = _;
        var l = "suspendedStart",
          p = "suspendedYield",
          d = "executing",
          h = "completed",
          v = {},
          y = {};
        y[a] = function() {
          return this;
        };
        var b = Object.getPrototypeOf,
          g = b && b(b(I([])));
        g && g !== r && o.call(g, a) && (y = g);
        var m = (S.prototype = x.prototype = Object.create(y));
        (O.prototype = m.constructor = S),
          (S.constructor = O),
          (S[c] = O.displayName = "GeneratorFunction"),
          (f.isGeneratorFunction = function(t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === O || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (f.mark = function(t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, S)
                : ((t.__proto__ = S), c in t || (t[c] = "GeneratorFunction")),
              (t.prototype = Object.create(m)),
              t
            );
          }),
          (f.awrap = function(t) {
            return { __await: t };
          }),
          k(E.prototype),
          (E.prototype[u] = function() {
            return this;
          }),
          (f.AsyncIterator = E),
          (f.async = function(t, e, n, r) {
            var o = new E(_(t, e, n, r));
            return f.isGeneratorFunction(e)
              ? o
              : o.next().then(function(t) {
                  return t.done ? t.value : o.next();
                });
          }),
          k(m),
          (m[c] = "Generator"),
          (m[a] = function() {
            return this;
          }),
          (m.toString = function() {
            return "[object Generator]";
          }),
          (f.keys = function(t) {
            var e = [];
            for (var n in t) e.push(n);
            return (
              e.reverse(),
              function n() {
                for (; e.length; ) {
                  var r = e.pop();
                  if (r in t) return (n.value = r), (n.done = !1), n;
                }
                return (n.done = !0), n;
              }
            );
          }),
          (f.values = I),
          (A.prototype = {
            constructor: A,
            reset: function(t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = n),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = n),
                this.tryEntries.forEach(P),
                !t)
              )
                for (var e in this)
                  "t" === e.charAt(0) &&
                    o.call(this, e) &&
                    !isNaN(+e.slice(1)) &&
                    (this[e] = n);
            },
            stop: function() {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function(t) {
              if (this.done) throw t;
              var e = this;
              function r(r, o) {
                return (
                  (u.type = "throw"),
                  (u.arg = t),
                  (e.next = r),
                  o && ((e.method = "next"), (e.arg = n)),
                  !!o
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var a = this.tryEntries[i],
                  u = a.completion;
                if ("root" === a.tryLoc) return r("end");
                if (a.tryLoc <= this.prev) {
                  var c = o.call(a, "catchLoc"),
                    s = o.call(a, "finallyLoc");
                  if (c && s) {
                    if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                  } else if (c) {
                    if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                  } else {
                    if (!s)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function(t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var r = this.tryEntries[n];
                if (
                  r.tryLoc <= this.prev &&
                  o.call(r, "finallyLoc") &&
                  this.prev < r.finallyLoc
                ) {
                  var i = r;
                  break;
                }
              }
              i &&
                ("break" === t || "continue" === t) &&
                i.tryLoc <= e &&
                e <= i.finallyLoc &&
                (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), v)
                  : this.complete(a)
              );
            },
            complete: function(t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === t.type && e && (this.next = e),
                v
              );
            },
            finish: function(t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return this.complete(n.completion, n.afterLoc), P(n), v;
              }
            },
            catch: function(t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var o = r.arg;
                    P(n);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function(t, e, r) {
              return (
                (this.delegate = { iterator: I(t), resultName: e, nextLoc: r }),
                "next" === this.method && (this.arg = n),
                v
              );
            }
          });
      }
      function _(t, e, n, r) {
        var o = e && e.prototype instanceof x ? e : x,
          i = Object.create(o.prototype),
          a = new A(r || []);
        return (
          (i._invoke = (function(t, e, n) {
            var r = l;
            return function(o, i) {
              if (r === d) throw new Error("Generator is already running");
              if (r === h) {
                if ("throw" === o) throw i;
                return z();
              }
              for (n.method = o, n.arg = i; ; ) {
                var a = n.delegate;
                if (a) {
                  var u = j(a, n);
                  if (u) {
                    if (u === v) continue;
                    return u;
                  }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                  if (r === l) throw ((r = h), n.arg);
                  n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                r = d;
                var c = w(t, e, n);
                if ("normal" === c.type) {
                  if (((r = n.done ? h : p), c.arg === v)) continue;
                  return { value: c.arg, done: n.done };
                }
                "throw" === c.type &&
                  ((r = h), (n.method = "throw"), (n.arg = c.arg));
              }
            };
          })(t, n, a)),
          i
        );
      }
      function w(t, e, n) {
        try {
          return { type: "normal", arg: t.call(e, n) };
        } catch (t) {
          return { type: "throw", arg: t };
        }
      }
      function x() {}
      function O() {}
      function S() {}
      function k(t) {
        ["next", "throw", "return"].forEach(function(e) {
          t[e] = function(t) {
            return this._invoke(e, t);
          };
        });
      }
      function E(t) {
        var e;
        this._invoke = function(n, r) {
          function i() {
            return new Promise(function(e, i) {
              !(function e(n, r, i, a) {
                var u = w(t[n], t, r);
                if ("throw" !== u.type) {
                  var c = u.arg,
                    s = c.value;
                  return s && "object" == typeof s && o.call(s, "__await")
                    ? Promise.resolve(s.__await).then(
                        function(t) {
                          e("next", t, i, a);
                        },
                        function(t) {
                          e("throw", t, i, a);
                        }
                      )
                    : Promise.resolve(s).then(function(t) {
                        (c.value = t), i(c);
                      }, a);
                }
                a(u.arg);
              })(n, r, e, i);
            });
          }
          return (e = e ? e.then(i, i) : i());
        };
      }
      function j(t, e) {
        var r = t.iterator[e.method];
        if (r === n) {
          if (((e.delegate = null), "throw" === e.method)) {
            if (
              t.iterator.return &&
              ((e.method = "return"),
              (e.arg = n),
              j(t, e),
              "throw" === e.method)
            )
              return v;
            (e.method = "throw"),
              (e.arg = new TypeError(
                "The iterator does not provide a 'throw' method"
              ));
          }
          return v;
        }
        var o = w(r, t.iterator, e.arg);
        if ("throw" === o.type)
          return (e.method = "throw"), (e.arg = o.arg), (e.delegate = null), v;
        var i = o.arg;
        return i
          ? i.done
            ? ((e[t.resultName] = i.value),
              (e.next = t.nextLoc),
              "return" !== e.method && ((e.method = "next"), (e.arg = n)),
              (e.delegate = null),
              v)
            : i
          : ((e.method = "throw"),
            (e.arg = new TypeError("iterator result is not an object")),
            (e.delegate = null),
            v);
      }
      function C(t) {
        var e = { tryLoc: t[0] };
        1 in t && (e.catchLoc = t[1]),
          2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
          this.tryEntries.push(e);
      }
      function P(t) {
        var e = t.completion || {};
        (e.type = "normal"), delete e.arg, (t.completion = e);
      }
      function A(t) {
        (this.tryEntries = [{ tryLoc: "root" }]),
          t.forEach(C, this),
          this.reset(!0);
      }
      function I(t) {
        if (t) {
          var e = t[a];
          if (e) return e.call(t);
          if ("function" == typeof t.next) return t;
          if (!isNaN(t.length)) {
            var r = -1,
              i = function e() {
                for (; ++r < t.length; )
                  if (o.call(t, r)) return (e.value = t[r]), (e.done = !1), e;
                return (e.value = n), (e.done = !0), e;
              };
            return (i.next = i);
          }
        }
        return { next: z };
      }
      function z() {
        return { value: n, done: !0 };
      }
    })(
      (function() {
        return this;
      })() || Function("return this")()
    );
  },
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.autocomplete = function(t, e) {
        if ("undefined" !== wp.ajax)
          return wp.ajax.post("wl_autocomplete", {
            query: t,
            _wpnonce: r.wl_autocomplete_nonce,
            exclude: r.itemId,
            scope: r.autocomplete_scope
          });
        var n = new URL("http://localhost:8080/wordlift-api/autocomplete");
        n.searchParams.append("query", t), n.searchParams.append("language", e);
        for (
          var o = arguments.length, i = Array(o > 2 ? o - 2 : 0), a = 2;
          a < o;
          a++
        )
          i[a - 2] = arguments[a];
        return (
          0 === i.length
            ? n.searchParams.append("exclude", "")
            : i.forEach(function(t) {
                return n.searchParams.append("exclude", t);
              }),
          fetch(n).then(function(t) {
            return t.json();
          })
        );
      });
    var r = window.wlSettings;
  },
  function(t, e, n) {
    "use strict";
    /** @license React v16.6.1
     * react.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */ var r = n(46),
      o = "function" == typeof Symbol && Symbol.for,
      i = o ? Symbol.for("react.element") : 60103,
      a = o ? Symbol.for("react.portal") : 60106,
      u = o ? Symbol.for("react.fragment") : 60107,
      c = o ? Symbol.for("react.strict_mode") : 60108,
      s = o ? Symbol.for("react.profiler") : 60114,
      f = o ? Symbol.for("react.provider") : 60109,
      l = o ? Symbol.for("react.context") : 60110,
      p = o ? Symbol.for("react.concurrent_mode") : 60111,
      d = o ? Symbol.for("react.forward_ref") : 60112,
      h = o ? Symbol.for("react.suspense") : 60113,
      v = o ? Symbol.for("react.memo") : 60115,
      y = o ? Symbol.for("react.lazy") : 60116,
      b = "function" == typeof Symbol && Symbol.iterator;
    function g(t) {
      for (
        var e = arguments.length - 1,
          n = "https://reactjs.org/docs/error-decoder.html?invariant=" + t,
          r = 0;
        r < e;
        r++
      )
        n += "&args[]=" + encodeURIComponent(arguments[r + 1]);
      !(function(t, e, n, r, o, i, a, u) {
        if (!t) {
          if (((t = void 0), void 0 === e))
            t = Error(
              "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
            );
          else {
            var c = [n, r, o, i, a, u],
              s = 0;
            (t = Error(
              e.replace(/%s/g, function() {
                return c[s++];
              })
            )).name = "Invariant Violation";
          }
          throw ((t.framesToPop = 1), t);
        }
      })(
        !1,
        "Minified React error #" +
          t +
          "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",
        n
      );
    }
    var m = {
        isMounted: function() {
          return !1;
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
      },
      _ = {};
    function w(t, e, n) {
      (this.props = t),
        (this.context = e),
        (this.refs = _),
        (this.updater = n || m);
    }
    function x() {}
    function O(t, e, n) {
      (this.props = t),
        (this.context = e),
        (this.refs = _),
        (this.updater = n || m);
    }
    (w.prototype.isReactComponent = {}),
      (w.prototype.setState = function(t, e) {
        "object" != typeof t && "function" != typeof t && null != t && g("85"),
          this.updater.enqueueSetState(this, t, e, "setState");
      }),
      (w.prototype.forceUpdate = function(t) {
        this.updater.enqueueForceUpdate(this, t, "forceUpdate");
      }),
      (x.prototype = w.prototype);
    var S = (O.prototype = new x());
    (S.constructor = O), r(S, w.prototype), (S.isPureReactComponent = !0);
    var k = { current: null, currentDispatcher: null },
      E = Object.prototype.hasOwnProperty,
      j = { key: !0, ref: !0, __self: !0, __source: !0 };
    function C(t, e, n) {
      var r = void 0,
        o = {},
        a = null,
        u = null;
      if (null != e)
        for (r in (void 0 !== e.ref && (u = e.ref),
        void 0 !== e.key && (a = "" + e.key),
        e))
          E.call(e, r) && !j.hasOwnProperty(r) && (o[r] = e[r]);
      var c = arguments.length - 2;
      if (1 === c) o.children = n;
      else if (1 < c) {
        for (var s = Array(c), f = 0; f < c; f++) s[f] = arguments[f + 2];
        o.children = s;
      }
      if (t && t.defaultProps)
        for (r in (c = t.defaultProps)) void 0 === o[r] && (o[r] = c[r]);
      return {
        $$typeof: i,
        type: t,
        key: a,
        ref: u,
        props: o,
        _owner: k.current
      };
    }
    function P(t) {
      return "object" == typeof t && null !== t && t.$$typeof === i;
    }
    var A = /\/+/g,
      I = [];
    function z(t, e, n, r) {
      if (I.length) {
        var o = I.pop();
        return (
          (o.result = t),
          (o.keyPrefix = e),
          (o.func = n),
          (o.context = r),
          (o.count = 0),
          o
        );
      }
      return { result: t, keyPrefix: e, func: n, context: r, count: 0 };
    }
    function T(t) {
      (t.result = null),
        (t.keyPrefix = null),
        (t.func = null),
        (t.context = null),
        (t.count = 0),
        10 > I.length && I.push(t);
    }
    function M(t, e, n) {
      return null == t
        ? 0
        : (function t(e, n, r, o) {
            var u = typeof e;
            ("undefined" !== u && "boolean" !== u) || (e = null);
            var c = !1;
            if (null === e) c = !0;
            else
              switch (u) {
                case "string":
                case "number":
                  c = !0;
                  break;
                case "object":
                  switch (e.$$typeof) {
                    case i:
                    case a:
                      c = !0;
                  }
              }
            if (c) return r(o, e, "" === n ? "." + R(e, 0) : n), 1;
            if (((c = 0), (n = "" === n ? "." : n + ":"), Array.isArray(e)))
              for (var s = 0; s < e.length; s++) {
                var f = n + R((u = e[s]), s);
                c += t(u, f, r, o);
              }
            else if (
              ((f =
                null === e || "object" != typeof e
                  ? null
                  : "function" == typeof (f = (b && e[b]) || e["@@iterator"])
                  ? f
                  : null),
              "function" == typeof f)
            )
              for (e = f.call(e), s = 0; !(u = e.next()).done; )
                c += t((u = u.value), (f = n + R(u, s++)), r, o);
            else
              "object" === u &&
                g(
                  "31",
                  "[object Object]" == (r = "" + e)
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : r,
                  ""
                );
            return c;
          })(t, "", e, n);
    }
    function R(t, e) {
      return "object" == typeof t && null !== t && null != t.key
        ? (function(t) {
            var e = { "=": "=0", ":": "=2" };
            return (
              "$" +
              ("" + t).replace(/[=:]/g, function(t) {
                return e[t];
              })
            );
          })(t.key)
        : e.toString(36);
    }
    function q(t, e) {
      t.func.call(t.context, e, t.count++);
    }
    function N(t, e, n) {
      var r = t.result,
        o = t.keyPrefix;
      (t = t.func.call(t.context, e, t.count++)),
        Array.isArray(t)
          ? L(t, r, n, function(t) {
              return t;
            })
          : null != t &&
            (P(t) &&
              (t = (function(t, e) {
                return {
                  $$typeof: i,
                  type: t.type,
                  key: e,
                  ref: t.ref,
                  props: t.props,
                  _owner: t._owner
                };
              })(
                t,
                o +
                  (!t.key || (e && e.key === t.key)
                    ? ""
                    : ("" + t.key).replace(A, "$&/") + "/") +
                  n
              )),
            r.push(t));
    }
    function L(t, e, n, r, o) {
      var i = "";
      null != n && (i = ("" + n).replace(A, "$&/") + "/"),
        M(t, N, (e = z(e, i, r, o))),
        T(e);
    }
    var D = {
      Children: {
        map: function(t, e, n) {
          if (null == t) return t;
          var r = [];
          return L(t, r, null, e, n), r;
        },
        forEach: function(t, e, n) {
          if (null == t) return t;
          M(t, q, (e = z(null, null, e, n))), T(e);
        },
        count: function(t) {
          return M(
            t,
            function() {
              return null;
            },
            null
          );
        },
        toArray: function(t) {
          var e = [];
          return (
            L(t, e, null, function(t) {
              return t;
            }),
            e
          );
        },
        only: function(t) {
          return P(t) || g("143"), t;
        }
      },
      createRef: function() {
        return { current: null };
      },
      Component: w,
      PureComponent: O,
      createContext: function(t, e) {
        return (
          void 0 === e && (e = null),
          ((t = {
            $$typeof: l,
            _calculateChangedBits: e,
            _currentValue: t,
            _currentValue2: t,
            _threadCount: 0,
            Provider: null,
            Consumer: null
          }).Provider = { $$typeof: f, _context: t }),
          (t.Consumer = t)
        );
      },
      forwardRef: function(t) {
        return { $$typeof: d, render: t };
      },
      lazy: function(t) {
        return { $$typeof: y, _ctor: t, _status: -1, _result: null };
      },
      memo: function(t, e) {
        return { $$typeof: v, type: t, compare: void 0 === e ? null : e };
      },
      Fragment: u,
      StrictMode: c,
      Suspense: h,
      createElement: C,
      cloneElement: function(t, e, n) {
        null == t && g("267", t);
        var o = void 0,
          a = r({}, t.props),
          u = t.key,
          c = t.ref,
          s = t._owner;
        if (null != e) {
          void 0 !== e.ref && ((c = e.ref), (s = k.current)),
            void 0 !== e.key && (u = "" + e.key);
          var f = void 0;
          for (o in (t.type && t.type.defaultProps && (f = t.type.defaultProps),
          e))
            E.call(e, o) &&
              !j.hasOwnProperty(o) &&
              (a[o] = void 0 === e[o] && void 0 !== f ? f[o] : e[o]);
        }
        if (1 === (o = arguments.length - 2)) a.children = n;
        else if (1 < o) {
          f = Array(o);
          for (var l = 0; l < o; l++) f[l] = arguments[l + 2];
          a.children = f;
        }
        return {
          $$typeof: i,
          type: t.type,
          key: u,
          ref: c,
          props: a,
          _owner: s
        };
      },
      createFactory: function(t) {
        var e = C.bind(null, t);
        return (e.type = t), e;
      },
      isValidElement: P,
      version: "16.6.3",
      __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
        ReactCurrentOwner: k,
        assign: r
      }
    };
    (D.unstable_ConcurrentMode = p), (D.unstable_Profiler = s);
    var F = { default: D },
      U = (F && D) || F;
    t.exports = U.default || U;
  },
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = n(18),
      o = u(n(48)),
      i = u(n(31)),
      a = u(n(160));
    function u(t) {
      return t && t.__esModule ? t : { default: t };
    }
    e.default = (0, r.createStore)(
      a.default,
      (0, r.applyMiddleware)(o.default, i.default)
    );
  },
  function(t, e, n) {
    "use strict";
    n.r(e);
    var r = n(8),
      o = n.n(r),
      i = function(t) {
        return "function" == typeof t;
      },
      a = function(t) {
        return (
          "symbol" == typeof t ||
          ("object" == typeof t &&
            "[object Symbol]" === Object.prototype.toString.call(t))
        );
      },
      u = function(t) {
        return 0 === t.length;
      },
      c = function(t) {
        return t.toString();
      },
      s = function(t) {
        return "string" == typeof t;
      },
      f = "/",
      l = "||";
    function p(t) {
      return s(t) || i(t) || a(t);
    }
    function d() {
      for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
        e[n] = arguments[n];
      var r;
      o()(
        !u((r = e)) && r.every(p),
        "Expected action types to be strings, symbols, or action creators"
      );
      var i = e.map(c).join(l);
      return {
        toString: function() {
          return i;
        }
      };
    }
    var h = function(t) {
        return t;
      },
      v = function(t) {
        return null === t;
      };
    function y(t, e, n) {
      void 0 === e && (e = h),
        o()(
          i(e) || v(e),
          "Expected payloadCreator to be a function, undefined or null"
        );
      var r =
          v(e) || e === h
            ? h
            : function(t) {
                for (
                  var n = arguments.length,
                    r = new Array(n > 1 ? n - 1 : 0),
                    o = 1;
                  o < n;
                  o++
                )
                  r[o - 1] = arguments[o];
                return t instanceof Error ? t : e.apply(void 0, [t].concat(r));
              },
        a = i(n),
        u = t.toString(),
        c = function() {
          var e = r.apply(void 0, arguments),
            o = { type: t };
          return (
            e instanceof Error && (o.error = !0),
            void 0 !== e && (o.payload = e),
            a && (o.meta = n.apply(void 0, arguments)),
            o
          );
        };
      return (
        (c.toString = function() {
          return u;
        }),
        c
      );
    }
    var b = function(t) {
        if ("object" != typeof t || null === t) return !1;
        for (var e = t; null !== Object.getPrototypeOf(e); )
          e = Object.getPrototypeOf(e);
        return Object.getPrototypeOf(t) === e;
      },
      g = function(t) {
        return Array.isArray(t);
      },
      m = function(t) {
        return null == t;
      },
      _ = function(t) {
        return t[t.length - 1];
      },
      w = n(28),
      x = n.n(w),
      O = function(t) {
        return t.includes("/")
          ? t
              .split("/")
              .map(x.a)
              .join("/")
          : x()(t);
      },
      S = function(t, e) {
        return t.reduce(function(t, n) {
          return e(t, n);
        }, {});
      },
      k = function(t) {
        return "undefined" != typeof Map && t instanceof Map;
      };
    function E(t) {
      if (k(t)) return Array.from(t.keys());
      if ("undefined" != typeof Reflect && "function" == typeof Reflect.ownKeys)
        return Reflect.ownKeys(t);
      var e = Object.getOwnPropertyNames(t);
      return (
        "function" == typeof Object.getOwnPropertySymbols &&
          (e = e.concat(Object.getOwnPropertySymbols(t))),
        e
      );
    }
    function j(t, e) {
      return k(e) ? e.get(t) : e[t];
    }
    var C = function(t) {
        return function e(n, r, o, i) {
          var a = void 0 === r ? {} : r,
            u = a.namespace,
            c = void 0 === u ? f : u,
            s = a.prefix;
          return (
            void 0 === o && (o = {}),
            void 0 === i && (i = ""),
            E(n).forEach(function(r) {
              var a = (function(t) {
                  return i || !s ? t : "" + s + c + t;
                })(
                  (function(t) {
                    var e;
                    if (!i) return t;
                    var n = t.toString().split(l),
                      r = i.split(l);
                    return (e = []).concat
                      .apply(
                        e,
                        r.map(function(t) {
                          return n.map(function(e) {
                            return "" + t + c + e;
                          });
                        })
                      )
                      .join(l);
                  })(r)
                ),
                u = j(r, n);
              t(u) ? e(u, { namespace: c, prefix: s }, o, a) : (o[a] = u);
            }),
            o
          );
        };
      },
      P = C(b);
    function A(t, e) {
      var n = void 0 === e ? {} : e,
        r = n.namespace,
        o = void 0 === r ? f : r,
        i = n.prefix;
      var a = {};
      return (
        Object.getOwnPropertyNames(t).forEach(function(e) {
          var n = i ? e.replace("" + i + o, "") : e;
          return (function e(n, r, o) {
            var i = O(o.shift());
            u(o) ? (r[i] = t[n]) : (r[i] || (r[i] = {}), e(n, r[i], o));
          })(e, a, n.split(o));
        }),
        a
      );
    }
    function I(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
          (r = r.concat(
            Object.getOwnPropertySymbols(n).filter(function(t) {
              return Object.getOwnPropertyDescriptor(n, t).enumerable;
            })
          )),
          r.forEach(function(e) {
            z(t, e, n[e]);
          });
      }
      return t;
    }
    function z(t, e, n) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (t[e] = n),
        t
      );
    }
    function T(t) {
      for (
        var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1;
        r < e;
        r++
      )
        n[r - 1] = arguments[r];
      var i = b(_(n)) ? n.pop() : {};
      return (
        o()(
          n.every(s) && (s(t) || b(t)),
          "Expected optional object followed by string action types"
        ),
        s(t)
          ? R([t].concat(n), i)
          : I(
              {},
              (function(t, e) {
                return A(M(P(t, e)), e);
              })(t, i),
              R(n, i)
            )
      );
    }
    function M(t, e) {
      var n = void 0 === e ? {} : e,
        r = n.prefix,
        a = n.namespace,
        u = void 0 === a ? f : a;
      return S(Object.keys(t), function(e, n) {
        var a,
          c = t[n];
        o()(
          (function(t) {
            if (i(t) || m(t)) return !0;
            if (g(t)) {
              var e = t[0],
                n = void 0 === e ? h : e,
                r = t[1];
              return i(n) && i(r);
            }
            return !1;
          })(c),
          "Expected function, undefined, null, or array with payload and meta functions for " +
            n
        );
        var s = r ? "" + r + u + n : n,
          f = g(c) ? y.apply(void 0, [s].concat(c)) : y(s, c);
        return I({}, e, (((a = {})[n] = f), a));
      });
    }
    function R(t, e) {
      var n = M(
        S(t, function(t, e) {
          var n;
          return I({}, t, (((n = {})[e] = h), n));
        }),
        e
      );
      return S(Object.keys(n), function(t, e) {
        var r;
        return I({}, t, (((r = {})[O(e)] = n[e]), r));
      });
    }
    var q = n(40),
      N = n.n(q),
      L = function(t, e) {
        return N()(y(t, e), e.length);
      },
      D = function(t) {
        return void 0 === t;
      };
    function F(t, e, n) {
      void 0 === e && (e = h);
      var r = c(t).split(l);
      o()(
        !D(n),
        "defaultState for reducer handling " +
          r.join(", ") +
          " should be defined"
      ),
        o()(
          i(e) || b(e),
          "Expected reducer to be a function or object with next and throw reducers"
        );
      var a = i(e)
          ? [e, e]
          : [e.next, e.throw].map(function(t) {
              return m(t) ? h : t;
            }),
        u = a[0],
        s = a[1];
      return function(t, e) {
        void 0 === t && (t = n);
        var o = e.type;
        return o && -1 !== r.indexOf(c(o)) ? (!0 === e.error ? s : u)(t, e) : t;
      };
    }
    var U = function() {
      for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
        e[n] = arguments[n];
      var r = "function" != typeof e[e.length - 1] && e.pop(),
        o = e;
      if (void 0 === r)
        throw new TypeError(
          "The initial state may not be undefined. If you do not want to set a value for this reducer, you can use null instead of undefined."
        );
      return function(t, e) {
        for (
          var n = arguments.length, i = Array(n > 2 ? n - 2 : 0), a = 2;
          a < n;
          a++
        )
          i[a - 2] = arguments[a];
        var u = void 0 === t,
          c = void 0 === e;
        return u && c && r
          ? r
          : o.reduce(
              function(t, n) {
                return n.apply(void 0, [t, e].concat(i));
              },
              u && !c && r ? r : t
            );
      };
    };
    var $ = C(function(t) {
      return (
        (b(t) || k(t)) &&
        ((e = E(t)),
        (n = e.every(function(t) {
          return "next" === t || "throw" === t;
        })),
        !(e.length && e.length <= 2 && n))
      );
      var e, n;
    });
    function W(t, e, n) {
      void 0 === n && (n = {}),
        o()(b(t) || k(t), "Expected handlers to be a plain object.");
      var r = $(t, n),
        i = E(r).map(function(t) {
          return F(t, j(t, r), e);
        }),
        a = U.apply(void 0, i.concat([e]));
      return function(t, n) {
        return void 0 === t && (t = e), a(t, n);
      };
    }
    n.d(e, "combineActions", function() {
      return d;
    }),
      n.d(e, "createAction", function() {
        return y;
      }),
      n.d(e, "createActions", function() {
        return T;
      }),
      n.d(e, "createCurriedAction", function() {
        return L;
      }),
      n.d(e, "handleAction", function() {
        return F;
      }),
      n.d(e, "handleActions", function() {
        return W;
      });
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function(t, e, n) {
    "use strict";
    var r = (function() {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        return function(e, n, r) {
          return n && t(e.prototype, n), r && t(e, r), e;
        };
      })(),
      o = c(n(3)),
      i = c(n(110)),
      a = c(n(164)),
      u = n(165);
    function c(t) {
      return t && t.__esModule ? t : { default: t };
    }
    var s = wp.element.Fragment,
      f = wp.components,
      l = f.Panel,
      p = f.PanelBody,
      d = f.PanelRow,
      h = wp.editPost,
      v = h.PluginSidebar,
      y = h.PluginSidebarMoreMenuItem,
      b = wp.plugins.registerPlugin,
      g = (wp.i18n.__, wp.richText.registerFormatType);
    window.store1 = i.default;
    var m = "wordlift",
      _ = "wordlift/select-text",
      w = (function(t) {
        function e(t) {
          !(function(t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, e);
          var n = (function(t, e) {
            if (!t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return !e || ("object" != typeof e && "function" != typeof e)
              ? t
              : e;
          })(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
          n.state = { entities: null };
          var r = {
            contentLanguage: "en",
            contentType: "text/html",
            scope: "all",
            version: "1.0.0"
          };
          return (
            wp.data
              .select("core/editor")
              .getBlocks()
              .forEach(function(t, e) {
                var n = wp.data.select("core/editor").getBlocks()[e];
                t.attributes && t.attributes.content
                  ? ((r.content = t.attributes.content),
                    console.log(
                      "Requesting analysis for block " + n.clientId + "..."
                    ),
                    i.default.dispatch(
                      (0, u.ReceiveAnalysisResultsEvent)(r, n.clientId)
                    ))
                  : console.log("No content found in block " + n.clientId);
              }),
            g(_, {
              name: _,
              title: m,
              tagName: "span",
              className: null,
              edit: function(t) {
                t.isActive;
                var e = t.value;
                t.onChange;
                return (
                  (0, u.AnnotateSelected)(e.start, e.end),
                  o.default.createElement(s, null)
                );
              }
            }),
            n
          );
        }
        return (
          (function(t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof e
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            })),
              e &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, e)
                  : (t.__proto__ = e));
          })(e, o.default.Component),
          r(e, [
            {
              key: "componentDidMount",
              value: function() {
                var t = this;
                this.unsubscribe = i.default.subscribe(function() {
                  t.setState({ entities: i.default.getState().entities });
                });
              }
            },
            {
              key: "componentWillUnmount",
              value: function() {
                this.unsubscribe();
              }
            },
            {
              key: "render",
              value: function() {
                return o.default.createElement(
                  l,
                  null,
                  o.default.createElement(
                    p,
                    { title: "Content classification", initialOpen: !0 },
                    o.default.createElement(
                      d,
                      null,
                      this.state.entities && this.state.entities.size > 0
                        ? o.default.createElement(u.ClassificationBox, null)
                        : "Analyzing content..."
                    )
                  )
                );
              }
            }
          ]),
          e
        );
      })(),
      x = function() {
        return o.default.createElement(
          l,
          null,
          o.default.createElement(
            p,
            { title: "Article metadata", initialOpen: !1 },
            o.default.createElement(
              d,
              null,
              "Article metadata Inputs and Labels"
            )
          )
        );
      },
      O = function() {
        return o.default.createElement(
          l,
          null,
          o.default.createElement(
            p,
            { title: "Suggested images", initialOpen: !1 },
            o.default.createElement(
              d,
              null,
              "Suggested images Inputs and Labels"
            )
          )
        );
      },
      S = function() {
        return o.default.createElement(
          l,
          null,
          o.default.createElement(
            p,
            { title: "Related posts", initialOpen: !1 },
            o.default.createElement(d, null, "Related posts Inputs and Labels")
          )
        );
      };
    b(m, {
      render: function() {
        return o.default.createElement(
          s,
          null,
          o.default.createElement(
            y,
            {
              target: "wordlift-sidebar",
              icon: o.default.createElement(a.default, null)
            },
            "WordLift"
          ),
          o.default.createElement(
            v,
            { name: "wordlift-sidebar", title: "WordLift" },
            o.default.createElement(w, null),
            o.default.createElement(x, null),
            o.default.createElement(O, null),
            o.default.createElement(S, null)
          )
        );
      },
      icon: o.default.createElement(a.default, null)
    });
  },
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = n(18),
      o = c(n(161)),
      i = c(n(52)),
      a = c(n(53)),
      u = c(n(54));
    function c(t) {
      return t && t.__esModule ? t : { default: t };
    }
    var s = (0, r.combineReducers)({
      entities: o.default,
      annotationFilter: i.default,
      visibilityFilter: a.default,
      editor: u.default
    });
    e.default = s;
  },
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = (function() {
        return function(t, e) {
          if (Array.isArray(t)) return t;
          if (Symbol.iterator in Object(t))
            return (function(t, e) {
              var n = [],
                r = !0,
                o = !1,
                i = void 0;
              try {
                for (
                  var a, u = t[Symbol.iterator]();
                  !(r = (a = u.next()).done) &&
                  (n.push(a.value), !e || n.length !== e);
                  r = !0
                );
              } catch (t) {
                (o = !0), (i = t);
              } finally {
                try {
                  !r && u.return && u.return();
                } finally {
                  if (o) throw i;
                }
              }
              return n;
            })(t, e);
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance"
          );
        };
      })(),
      o = n(44),
      i = (function(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
          for (var n in t)
            Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return (e.default = t), e;
      })(n(15)),
      a = s(n(162)),
      u = s(n(163)),
      c = s(n(51));
    function s(t) {
      return t && t.__esModule ? t : { default: t };
    }
    e.default = function() {
      var t =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : (0, o.Map)(),
        e = arguments[1];
      switch (e.type) {
        case i.RECEIVE_ANALYSIS_RESULTS:
          var n = (0, o.Map)(e.results.entities).groupBy(function(t, e) {
            return t.label;
          });
          return (0, o.Map)(e.results.entities)
            .map(function(t) {
              return Object.assign({}, t, {
                link: u.default.getLink(t.occurrences),
                local: 0 === t.id.indexOf(wlSettings.datasetUri),
                w: c.default.getW(t),
                edit: "no" !== wlSettings.can_create_entities,
                duplicateLabel: 1 < n.get(t.label).count()
              });
            })
            .sort(function(t, e) {
              var n = e.confidence - t.confidence;
              return 0 !== n ? n : e.annotations.length - t.annotations.length;
            })
            .mapEntries(function(t, e) {
              var n = r(t, 2),
                o = n[0],
                i = n[1];
              return (i.shortlist = e < 20), [o, i];
            })
            .sortBy(function(t) {
              return t.label.toLowerCase();
            });
        case i.SET_CURRENT_ENTITY:
          return t;
        case i.TOGGLE_ENTITY:
          return a.default.onSelectedEntityTile(t.get(e.entity.id)), t;
        case i.TOGGLE_LINK:
          return (
            u.default.setLink(e.entity.occurrences, !e.entity.link),
            t.set(
              e.entity.id,
              Object.assign({}, t.get(e.entity.id), {
                occurrences: e.entity.occurrences,
                link: u.default.getLink(e.entity.occurrences)
              })
            )
          );
        case i.UPDATE_OCCURRENCES_FOR_ENTITY:
          return t.set(
            e.entityId,
            Object.assign({}, t.get(e.entityId), {
              occurrences: e.occurrences,
              link: u.default.getLink(e.occurrences)
            })
          );
        default:
          return t;
      }
    };
  },
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r,
      o = n(110),
      i = (r = o) && r.__esModule ? r : { default: r },
      a = n(16);
    var u = {
      onSelectedEntityTile: function(t) {
        var e;
        (e = "entitySelected"),
          t.occurrences.length > 0 && (e = "entityDeselected"),
          console.log(
            "Action '" + e + "' on entity " + t.id + " within " + t.mainType
          ),
          console.log("Calculating occurrences for entity " + t.id + "...");
        var n = [];
        if ("entitySelected" === e)
          for (var r in t.annotations) u.disambiguate(r, !0), n.push(r);
        else for (var r in t.annotations) u.disambiguate(r, !1);
        console.log(
          "Found " + n.length + " annotation(s) for entity " + t.id + "."
        ),
          setTimeout(function() {
            console.log(
              "Updating " + n.length + " occurrence(s) for " + t.id + "..."
            ),
              i.default.dispatch(
                (0, a.updateOccurrencesForEntity)(t.entityId, n)
              );
          }, 0);
      },
      disambiguate: function(t, e) {
        wp.data
          .select("core/editor")
          .getBlocks()
          .forEach(function(n, r) {
            if (n.attributes && n.attributes.content) {
              var o = n.attributes.content,
                i = n.clientId,
                a = document.createElement("div"),
                u = t.replace("urn:", "urn\\3A ");
              (a.innerHTML = o),
                a.querySelector("#" + u) &&
                  (e
                    ? a.querySelector("#" + u).classList.add("disambiguated")
                    : a
                        .querySelector("#" + u)
                        .classList.remove("disambiguated"),
                  wp.data
                    .dispatch("core/editor")
                    .updateBlock(i, { attributes: { content: a.innerHTML } }));
            }
          });
      }
    };
    e.default = u;
  },
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = (function() {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      return function(e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    })();
    var o = (function() {
      function t(e) {
        !(function(t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, t),
          (this.linkByDefault = e);
      }
      return (
        r(t, [
          {
            key: "setLink",
            value: function(t, e) {
              var n = this;
              e
                ? t.forEach(function(t) {
                    return n.setYesLink(t);
                  })
                : t.forEach(function(t) {
                    return n.setNoLink(t);
                  });
            }
          },
          {
            key: "setYesLink",
            value: function(t) {
              wp.data
                .select("core/editor")
                .getBlocks()
                .forEach(function(e, n) {
                  if (e.attributes && e.attributes.content) {
                    var r = e.attributes.content,
                      o = e.clientId,
                      i = document.createElement("div"),
                      a = t.replace("urn:", "urn\\3A ");
                    (i.innerHTML = r),
                      i.querySelector("#" + a) &&
                        (i
                          .querySelector("#" + a)
                          .classList.remove("wl-no-link"),
                        i.querySelector("#" + a).classList.add("wl-link"),
                        wp.data
                          .dispatch("core/editor")
                          .updateBlock(o, {
                            attributes: { content: i.innerHTML }
                          }));
                  }
                });
            }
          },
          {
            key: "setNoLink",
            value: function(t) {
              wp.data
                .select("core/editor")
                .getBlocks()
                .forEach(function(e, n) {
                  if (e.attributes && e.attributes.content) {
                    var r = e.attributes.content,
                      o = e.clientId,
                      i = document.createElement("div"),
                      a = t.replace("urn:", "urn\\3A ");
                    (i.innerHTML = r),
                      i.querySelector("#" + a) &&
                        (i.querySelector("#" + a).classList.remove("wl-link"),
                        i.querySelector("#" + a).classList.add("wl-no-link"),
                        wp.data
                          .dispatch("core/editor")
                          .updateBlock(o, {
                            attributes: { content: i.innerHTML }
                          }));
                  }
                });
            }
          },
          {
            key: "getLink",
            value: function(t) {
              var e = this,
                n = "";
              wp.data
                .select("core/editor")
                .getBlocks()
                .forEach(function(t, e) {
                  t.attributes &&
                    t.attributes.content &&
                    (n += t.attributes.content);
                });
              var r = document.createElement("div");
              return (
                (r.innerHTML = n),
                t.reduce(function(t, n) {
                  var o = n.replace("urn:", "urn\\3A ");
                  return t || e.linkByDefault
                    ? !r.querySelector("#" + o + ".wl-no-link")
                    : !!r.querySelector("#" + o + ".wl-link");
                }, !1)
              );
            }
          }
        ]),
        t
      );
    })();
    e.default = new o("1" === wlSettings.link_by_default);
  },
  function(t, e, n) {
    var r = n(6);
    function o(t) {
      return r.createElement(
        "svg",
        t,
        r.createElement("g", null, [
          r.createElement("circle", {
            style: { fill: "#007AFF", stroke: "#007AFF" },
            cx: "10",
            cy: "10",
            r: "8.8",
            key: 0
          }),
          r.createElement("path", {
            style: { fill: "#FFFFFF", stroke: "#FFFFFF" },
            d:
              "M3.8,6.8h2.1l1.8,4.9l2.4-5.3h0.1l2.3,5.3l1.9-4.8h2l-3.7,8.3h-0.1l-2.5-5.3l-2.5,5.3H7.4L3.8,6.8z",
            key: 1
          })
        ])
      );
    }
    (o.defaultProps = {
      version: "1.1",
      id: "Layer_1",
      x: "0px",
      y: "0px",
      viewBox: "0 0 20 24",
      style: { enableBackground: "new 0 0 20 20" },
      xmlSpace: "preserve",
      width: "20px",
      height: "20px"
    }),
      (t.exports = o),
      (o.default = o);
  },
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.AnnotateSelected = e.ReceiveAnalysisResultsEvent = e.ClassificationBox = void 0);
    var r = f(n(20)),
      o = f(n(110)),
      i = f(n(55)),
      a = f(n(59)),
      u = f(n(63)),
      c = f(n(82)),
      s = n(16);
    function f(t) {
      return t && t.__esModule ? t : { default: t };
    }
    var l =
        "undefined" !== wlSettings.can_create_entities &&
        "yes" === wlSettings.can_create_entities,
      p = wp.data,
      d = (p.select, p.dispatch, []);
    (e.ClassificationBox = function() {
      return React.createElement(
        r.default,
        { store: o.default },
        React.createElement(
          i.default,
          null,
          React.createElement(c.default, { showCreate: l }),
          React.createElement(a.default, null),
          React.createElement(u.default, null)
        )
      );
    }),
      (e.ReceiveAnalysisResultsEvent = function(t, e) {
        return function(n) {
          return wp
            .apiFetch({
              url: "/wp-admin/admin-ajax.php?action=wordlift_analyze",
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(t)
            })
            .then(function(t) {
              if (Object.keys(t.entities).length > 0) {
                var r = (function(t, e) {
                  var n = o.default.getState().entities;
                  if (n.size > 0) {
                    var r = n.toJS();
                    for (var i in r)
                      t.entities[i]
                        ? (t.entities[i].annotations = r[i].annotations)
                        : (t.entities[i] = r[i]);
                  }
                  for (var a in t.annotations)
                    t.annotations[a].entityMatches.forEach(function(n) {
                      void 0 === t.entities[n.entityId].annotations &&
                        (t.entities[n.entityId].annotations = {}),
                        (t.entities[n.entityId].annotations[a] =
                          t.annotations[a]),
                        (t.entities[n.entityId].annotations[
                          a
                        ].blockClientId = e);
                    });
                  var u = wp.data.select("core/editor").getBlock(e);
                  if (u.attributes && u.attributes.content) {
                    var c = u.attributes.content,
                      s = document.createElement("div");
                    (s.innerHTML = c),
                      s.querySelectorAll(".textannotation.disambiguated") &&
                        s
                          .querySelectorAll(".textannotation.disambiguated")
                          .forEach(function(t, e) {
                            d.push(t.innerText);
                          });
                  }
                  for (var f in t.entities)
                    (t.entities[f].id = t.entities[f].entityId),
                      Object.keys(t.entities[f].annotations).forEach(function(
                        e,
                        n
                      ) {
                        d.includes(t.entities[f].annotations[e].text) &&
                          t.entities[f].occurrences.push(e);
                      });
                  return t;
                })(t, e);
                !(function(t, e) {
                  var n = wp.data.select("core/editor").getBlock(e),
                    r = n.attributes.content,
                    o = n.clientId,
                    i = wp.richText.create({ html: r });
                  for (var a in t.annotations) {
                    var u = t.annotations[a],
                      c = t.entities[u.entityMatches[0].entityId],
                      s = {
                        type: "span",
                        attributes: {
                          id: u.annotationId,
                          class: "textannotation wl-" + c.mainType,
                          itemid: c.entityId
                        }
                      };
                    d.includes(u.text) &&
                      (s.attributes.class += " disambiguated"),
                      (i = wp.richText.applyFormat(i, s, u.start, u.end));
                  }
                  wp.data
                    .dispatch("core/editor")
                    .updateBlock(o, {
                      attributes: {
                        content: wp.richText.toHTMLString({ value: i })
                      }
                    });
                })(r, e),
                  console.log("An analysis has been performed for block " + e),
                  n((0, s.receiveAnalysisResults)(r));
              } else console.log("No entities found in block " + e);
            });
        };
      }),
      (e.AnnotateSelected = function(t, e) {
        var n = wp.data.select("core/editor").getSelectedBlock();
        if (n) {
          var r = o.default.getState().entities,
            i = void 0;
          if (r.size > 0) {
            var a = r.toJS();
            for (var u in a) {
              var c = a[u];
              for (var s in c.annotations) {
                var f = c.annotations[s];
                f &&
                  f.blockClientId === n.clientId &&
                  f.start <= t &&
                  f.end >= e &&
                  (i = f.annotationId);
              }
            }
            o.default.dispatch({ type: "ANNOTATION", annotation: i });
          }
        }
      });
  }
]);
//# sourceMappingURL=gutenberg.js.map
