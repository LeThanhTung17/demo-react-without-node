/*!
 * Socket.IO v4.1.2
 * (c) 2014-2021 Guillermo Rauch
 * Released under the MIT License.
 */
!(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define([], e)
    : "object" == typeof exports
    ? (exports.io = e())
    : (t.io = e());
})(self, function () {
  return (function (t) {
    var e = {};
    function n(r) {
      if (e[r]) return e[r].exports;
      var o = (e[r] = { i: r, l: !1, exports: {} });
      return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }
    return (
      (n.m = t),
      (n.c = e),
      (n.d = function (t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
      }),
      (n.r = function (t) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (n.t = function (t, e) {
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
              function (e) {
                return t[e];
              }.bind(null, o)
            );
        return r;
      }),
      (n.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return n.d(e, "a", e), e;
      }),
      (n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (n.p = ""),
      n((n.s = 18))
    );
  })([
    function (t, e, n) {
      var r = n(24),
        o = n(25),
        i = String.fromCharCode(30);
      t.exports = {
        protocol: 4,
        encodePacket: r,
        encodePayload: function (t, e) {
          var n = t.length,
            o = new Array(n),
            s = 0;
          t.forEach(function (t, c) {
            r(t, !1, function (t) {
              (o[c] = t), ++s === n && e(o.join(i));
            });
          });
        },
        decodePacket: o,
        decodePayload: function (t, e) {
          for (var n = t.split(i), r = [], s = 0; s < n.length; s++) {
            var c = o(n[s], e);
            if ((r.push(c), "error" === c.type)) break;
          }
          return r;
        },
      };
    },
    function (t, e, n) {
      function r(t) {
        if (t)
          return (function (t) {
            for (var e in r.prototype) t[e] = r.prototype[e];
            return t;
          })(t);
      }
      (t.exports = r),
        (r.prototype.on = r.prototype.addEventListener =
          function (t, e) {
            return (
              (this._callbacks = this._callbacks || {}),
              (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(
                e
              ),
              this
            );
          }),
        (r.prototype.once = function (t, e) {
          function n() {
            this.off(t, n), e.apply(this, arguments);
          }
          return (n.fn = e), this.on(t, n), this;
        }),
        (r.prototype.off =
          r.prototype.removeListener =
          r.prototype.removeAllListeners =
          r.prototype.removeEventListener =
            function (t, e) {
              if (
                ((this._callbacks = this._callbacks || {}),
                0 == arguments.length)
              )
                return (this._callbacks = {}), this;
              var n,
                r = this._callbacks["$" + t];
              if (!r) return this;
              if (1 == arguments.length)
                return delete this._callbacks["$" + t], this;
              for (var o = 0; o < r.length; o++)
                if ((n = r[o]) === e || n.fn === e) {
                  r.splice(o, 1);
                  break;
                }
              return 0 === r.length && delete this._callbacks["$" + t], this;
            }),
        (r.prototype.emit = function (t) {
          this._callbacks = this._callbacks || {};
          for (
            var e = new Array(arguments.length - 1),
              n = this._callbacks["$" + t],
              r = 1;
            r < arguments.length;
            r++
          )
            e[r - 1] = arguments[r];
          if (n) {
            r = 0;
            for (var o = (n = n.slice(0)).length; r < o; ++r)
              n[r].apply(this, e);
          }
          return this;
        }),
        (r.prototype.listeners = function (t) {
          return (
            (this._callbacks = this._callbacks || {}),
            this._callbacks["$" + t] || []
          );
        }),
        (r.prototype.hasListeners = function (t) {
          return !!this.listeners(t).length;
        });
    },
    function (t, e) {
      t.exports =
        "undefined" != typeof self
          ? self
          : "undefined" != typeof window
          ? window
          : Function("return this")();
    },
    function (t, e, n) {
      function r(t) {
        return (r =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function o(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function i(t, e) {
        return (i =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function s(t) {
        var e = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = a(t);
          if (e) {
            var o = a(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return c(this, n);
        };
      }
      function c(t, e) {
        return !e || ("object" !== r(e) && "function" != typeof e)
          ? (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })(t)
          : e;
      }
      function a(t) {
        return (a = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      var u = n(0),
        f = (function (t) {
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && i(t, e);
          })(a, t);
          var e,
            n,
            r,
            c = s(a);
          function a(t) {
            var e;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, a),
              ((e = c.call(this)).opts = t),
              (e.query = t.query),
              (e.readyState = ""),
              (e.socket = t.socket),
              e
            );
          }
          return (
            (e = a),
            (n = [
              {
                key: "onError",
                value: function (t, e) {
                  var n = new Error(t);
                  return (
                    (n.type = "TransportError"),
                    (n.description = e),
                    this.emit("error", n),
                    this
                  );
                },
              },
              {
                key: "open",
                value: function () {
                  return (
                    ("closed" !== this.readyState && "" !== this.readyState) ||
                      ((this.readyState = "opening"), this.doOpen()),
                    this
                  );
                },
              },
              {
                key: "close",
                value: function () {
                  return (
                    ("opening" !== this.readyState &&
                      "open" !== this.readyState) ||
                      (this.doClose(), this.onClose()),
                    this
                  );
                },
              },
              {
                key: "send",
                value: function (t) {
                  "open" === this.readyState && this.write(t);
                },
              },
              {
                key: "onOpen",
                value: function () {
                  (this.readyState = "open"),
                    (this.writable = !0),
                    this.emit("open");
                },
              },
              {
                key: "onData",
                value: function (t) {
                  var e = u.decodePacket(t, this.socket.binaryType);
                  this.onPacket(e);
                },
              },
              {
                key: "onPacket",
                value: function (t) {
                  this.emit("packet", t);
                },
              },
              {
                key: "onClose",
                value: function () {
                  (this.readyState = "closed"), this.emit("close");
                },
              },
            ]) && o(e.prototype, n),
            r && o(e, r),
            a
          );
        })(n(1));
      t.exports = f;
    },
    function (t, e) {
      (e.encode = function (t) {
        var e = "";
        for (var n in t)
          t.hasOwnProperty(n) &&
            (e.length && (e += "&"),
            (e += encodeURIComponent(n) + "=" + encodeURIComponent(t[n])));
        return e;
      }),
        (e.decode = function (t) {
          for (var e = {}, n = t.split("&"), r = 0, o = n.length; r < o; r++) {
            var i = n[r].split("=");
            e[decodeURIComponent(i[0])] = decodeURIComponent(i[1]);
          }
          return e;
        });
    },
    function (t, e, n) {
      "use strict";
      function r(t) {
        return (r =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function o(t, e, n) {
        return (o =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function (t, e, n) {
                var r = (function (t, e) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(t, e) &&
                    null !== (t = a(t));

                  );
                  return t;
                })(t, e);
                if (r) {
                  var o = Object.getOwnPropertyDescriptor(r, e);
                  return o.get ? o.get.call(n) : o.value;
                }
              })(t, e, n || t);
      }
      function i(t, e) {
        return (i =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function s(t) {
        var e = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = a(t);
          if (e) {
            var o = a(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return c(this, n);
        };
      }
      function c(t, e) {
        return !e || ("object" !== r(e) && "function" != typeof e)
          ? (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })(t)
          : e;
      }
      function a(t) {
        return (a = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function u(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function f(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function l(t, e, n) {
        return e && f(t.prototype, e), n && f(t, n), t;
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Decoder = e.Encoder = e.PacketType = e.protocol = void 0);
      var p,
        h = n(1),
        y = n(30),
        d = n(15);
      (e.protocol = 5),
        (function (t) {
          (t[(t.CONNECT = 0)] = "CONNECT"),
            (t[(t.DISCONNECT = 1)] = "DISCONNECT"),
            (t[(t.EVENT = 2)] = "EVENT"),
            (t[(t.ACK = 3)] = "ACK"),
            (t[(t.CONNECT_ERROR = 4)] = "CONNECT_ERROR"),
            (t[(t.BINARY_EVENT = 5)] = "BINARY_EVENT"),
            (t[(t.BINARY_ACK = 6)] = "BINARY_ACK");
        })((p = e.PacketType || (e.PacketType = {})));
      var v = (function () {
        function t() {
          u(this, t);
        }
        return (
          l(t, [
            {
              key: "encode",
              value: function (t) {
                return (t.type !== p.EVENT && t.type !== p.ACK) ||
                  !d.hasBinary(t)
                  ? [this.encodeAsString(t)]
                  : ((t.type =
                      t.type === p.EVENT ? p.BINARY_EVENT : p.BINARY_ACK),
                    this.encodeAsBinary(t));
              },
            },
            {
              key: "encodeAsString",
              value: function (t) {
                var e = "" + t.type;
                return (
                  (t.type !== p.BINARY_EVENT && t.type !== p.BINARY_ACK) ||
                    (e += t.attachments + "-"),
                  t.nsp && "/" !== t.nsp && (e += t.nsp + ","),
                  null != t.id && (e += t.id),
                  null != t.data && (e += JSON.stringify(t.data)),
                  e
                );
              },
            },
            {
              key: "encodeAsBinary",
              value: function (t) {
                var e = y.deconstructPacket(t),
                  n = this.encodeAsString(e.packet),
                  r = e.buffers;
                return r.unshift(n), r;
              },
            },
          ]),
          t
        );
      })();
      e.Encoder = v;
      var b = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && i(t, e);
        })(n, t);
        var e = s(n);
        function n() {
          return u(this, n), e.call(this);
        }
        return (
          l(
            n,
            [
              {
                key: "add",
                value: function (t) {
                  var e;
                  if ("string" == typeof t)
                    (e = this.decodeString(t)).type === p.BINARY_EVENT ||
                    e.type === p.BINARY_ACK
                      ? ((this.reconstructor = new m(e)),
                        0 === e.attachments &&
                          o(a(n.prototype), "emit", this).call(
                            this,
                            "decoded",
                            e
                          ))
                      : o(a(n.prototype), "emit", this).call(
                          this,
                          "decoded",
                          e
                        );
                  else {
                    if (!d.isBinary(t) && !t.base64)
                      throw new Error("Unknown type: " + t);
                    if (!this.reconstructor)
                      throw new Error(
                        "got binary data when not reconstructing a packet"
                      );
                    (e = this.reconstructor.takeBinaryData(t)) &&
                      ((this.reconstructor = null),
                      o(a(n.prototype), "emit", this).call(this, "decoded", e));
                  }
                },
              },
              {
                key: "decodeString",
                value: function (t) {
                  var e = 0,
                    r = { type: Number(t.charAt(0)) };
                  if (void 0 === p[r.type])
                    throw new Error("unknown packet type " + r.type);
                  if (r.type === p.BINARY_EVENT || r.type === p.BINARY_ACK) {
                    for (
                      var o = e + 1;
                      "-" !== t.charAt(++e) && e != t.length;

                    );
                    var i = t.substring(o, e);
                    if (i != Number(i) || "-" !== t.charAt(e))
                      throw new Error("Illegal attachments");
                    r.attachments = Number(i);
                  }
                  if ("/" === t.charAt(e + 1)) {
                    for (var s = e + 1; ++e; ) {
                      if ("," === t.charAt(e)) break;
                      if (e === t.length) break;
                    }
                    r.nsp = t.substring(s, e);
                  } else r.nsp = "/";
                  var c = t.charAt(e + 1);
                  if ("" !== c && Number(c) == c) {
                    for (var a = e + 1; ++e; ) {
                      var u = t.charAt(e);
                      if (null == u || Number(u) != u) {
                        --e;
                        break;
                      }
                      if (e === t.length) break;
                    }
                    r.id = Number(t.substring(a, e + 1));
                  }
                  if (t.charAt(++e)) {
                    var f = (function (t) {
                      try {
                        return JSON.parse(t);
                      } catch (t) {
                        return !1;
                      }
                    })(t.substr(e));
                    if (!n.isPayloadValid(r.type, f))
                      throw new Error("invalid payload");
                    r.data = f;
                  }
                  return r;
                },
              },
              {
                key: "destroy",
                value: function () {
                  this.reconstructor &&
                    this.reconstructor.finishedReconstruction();
                },
              },
            ],
            [
              {
                key: "isPayloadValid",
                value: function (t, e) {
                  switch (t) {
                    case p.CONNECT:
                      return "object" === r(e);
                    case p.DISCONNECT:
                      return void 0 === e;
                    case p.CONNECT_ERROR:
                      return "string" == typeof e || "object" === r(e);
                    case p.EVENT:
                    case p.BINARY_EVENT:
                      return Array.isArray(e) && e.length > 0;
                    case p.ACK:
                    case p.BINARY_ACK:
                      return Array.isArray(e);
                  }
                },
              },
            ]
          ),
          n
        );
      })(h);
      e.Decoder = b;
      var m = (function () {
        function t(e) {
          u(this, t),
            (this.packet = e),
            (this.buffers = []),
            (this.reconPack = e);
        }
        return (
          l(t, [
            {
              key: "takeBinaryData",
              value: function (t) {
                if (
                  (this.buffers.push(t),
                  this.buffers.length === this.reconPack.attachments)
                ) {
                  var e = y.reconstructPacket(this.reconPack, this.buffers);
                  return this.finishedReconstruction(), e;
                }
                return null;
              },
            },
            {
              key: "finishedReconstruction",
              value: function () {
                (this.reconPack = null), (this.buffers = []);
              },
            },
          ]),
          t
        );
      })();
    },
    function (t, e) {
      var n =
          /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
        r = [
          "source",
          "protocol",
          "authority",
          "userInfo",
          "user",
          "password",
          "host",
          "port",
          "relative",
          "path",
          "directory",
          "file",
          "query",
          "anchor",
        ];
      t.exports = function (t) {
        var e = t,
          o = t.indexOf("["),
          i = t.indexOf("]");
        -1 != o &&
          -1 != i &&
          (t =
            t.substring(0, o) +
            t.substring(o, i).replace(/:/g, ";") +
            t.substring(i, t.length));
        for (var s, c, a = n.exec(t || ""), u = {}, f = 14; f--; )
          u[r[f]] = a[f] || "";
        return (
          -1 != o &&
            -1 != i &&
            ((u.source = e),
            (u.host = u.host
              .substring(1, u.host.length - 1)
              .replace(/;/g, ":")),
            (u.authority = u.authority
              .replace("[", "")
              .replace("]", "")
              .replace(/;/g, ":")),
            (u.ipv6uri = !0)),
          (u.pathNames = (function (t, e) {
            var n = e.replace(/\/{2,9}/g, "/").split("/");
            ("/" != e.substr(0, 1) && 0 !== e.length) || n.splice(0, 1);
            "/" == e.substr(e.length - 1, 1) && n.splice(n.length - 1, 1);
            return n;
          })(0, u.path)),
          (u.queryKey =
            ((s = u.query),
            (c = {}),
            s.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (t, e, n) {
              e && (c[e] = n);
            }),
            c)),
          u
        );
      };
    },
    function (t, e, n) {
      "use strict";
      function r(t) {
        return (r =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function o(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function i(t, e) {
        return (i =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function s(t) {
        var e = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = a(t);
          if (e) {
            var o = a(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return c(this, n);
        };
      }
      function c(t, e) {
        return !e || ("object" !== r(e) && "function" != typeof e)
          ? (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })(t)
          : e;
      }
      function a(t) {
        return (a = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Manager = void 0);
      var u = n(20),
        f = n(14),
        l = n(5),
        p = n(16),
        h = n(31),
        y = (function (t) {
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && i(t, e);
          })(y, t);
          var e,
            n,
            c,
            a = s(y);
          function y(t, e) {
            var n;
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, y),
              ((n = a.call(this)).nsps = {}),
              (n.subs = []),
              t && "object" === r(t) && ((e = t), (t = void 0)),
              ((e = e || {}).path = e.path || "/socket.io"),
              (n.opts = e),
              n.reconnection(!1 !== e.reconnection),
              n.reconnectionAttempts(e.reconnectionAttempts || 1 / 0),
              n.reconnectionDelay(e.reconnectionDelay || 1e3),
              n.reconnectionDelayMax(e.reconnectionDelayMax || 5e3),
              n.randomizationFactor(e.randomizationFactor || 0.5),
              (n.backoff = new h({
                min: n.reconnectionDelay(),
                max: n.reconnectionDelayMax(),
                jitter: n.randomizationFactor(),
              })),
              n.timeout(null == e.timeout ? 2e4 : e.timeout),
              (n._readyState = "closed"),
              (n.uri = t);
            var o = e.parser || l;
            return (
              (n.encoder = new o.Encoder()),
              (n.decoder = new o.Decoder()),
              (n._autoConnect = !1 !== e.autoConnect),
              n._autoConnect && n.open(),
              n
            );
          }
          return (
            (e = y),
            (n = [
              {
                key: "reconnection",
                value: function (t) {
                  return arguments.length
                    ? ((this._reconnection = !!t), this)
                    : this._reconnection;
                },
              },
              {
                key: "reconnectionAttempts",
                value: function (t) {
                  return void 0 === t
                    ? this._reconnectionAttempts
                    : ((this._reconnectionAttempts = t), this);
                },
              },
              {
                key: "reconnectionDelay",
                value: function (t) {
                  var e;
                  return void 0 === t
                    ? this._reconnectionDelay
                    : ((this._reconnectionDelay = t),
                      null === (e = this.backoff) ||
                        void 0 === e ||
                        e.setMin(t),
                      this);
                },
              },
              {
                key: "randomizationFactor",
                value: function (t) {
                  var e;
                  return void 0 === t
                    ? this._randomizationFactor
                    : ((this._randomizationFactor = t),
                      null === (e = this.backoff) ||
                        void 0 === e ||
                        e.setJitter(t),
                      this);
                },
              },
              {
                key: "reconnectionDelayMax",
                value: function (t) {
                  var e;
                  return void 0 === t
                    ? this._reconnectionDelayMax
                    : ((this._reconnectionDelayMax = t),
                      null === (e = this.backoff) ||
                        void 0 === e ||
                        e.setMax(t),
                      this);
                },
              },
              {
                key: "timeout",
                value: function (t) {
                  return arguments.length
                    ? ((this._timeout = t), this)
                    : this._timeout;
                },
              },
              {
                key: "maybeReconnectOnOpen",
                value: function () {
                  !this._reconnecting &&
                    this._reconnection &&
                    0 === this.backoff.attempts &&
                    this.reconnect();
                },
              },
              {
                key: "open",
                value: function (t) {
                  var e = this;
                  if (~this._readyState.indexOf("open")) return this;
                  this.engine = u(this.uri, this.opts);
                  var n = this.engine,
                    r = this;
                  (this._readyState = "opening"), (this.skipReconnect = !1);
                  var o = p.on(n, "open", function () {
                      r.onopen(), t && t();
                    }),
                    i = p.on(n, "error", function (n) {
                      r.cleanup(),
                        (r._readyState = "closed"),
                        e.emitReserved("error", n),
                        t ? t(n) : r.maybeReconnectOnOpen();
                    });
                  if (!1 !== this._timeout) {
                    var s = this._timeout;
                    0 === s && o();
                    var c = setTimeout(function () {
                      o(), n.close(), n.emit("error", new Error("timeout"));
                    }, s);
                    this.opts.autoUnref && c.unref(),
                      this.subs.push(function () {
                        clearTimeout(c);
                      });
                  }
                  return this.subs.push(o), this.subs.push(i), this;
                },
              },
              {
                key: "connect",
                value: function (t) {
                  return this.open(t);
                },
              },
              {
                key: "onopen",
                value: function () {
                  this.cleanup(),
                    (this._readyState = "open"),
                    this.emitReserved("open");
                  var t = this.engine;
                  this.subs.push(
                    p.on(t, "ping", this.onping.bind(this)),
                    p.on(t, "data", this.ondata.bind(this)),
                    p.on(t, "error", this.onerror.bind(this)),
                    p.on(t, "close", this.onclose.bind(this)),
                    p.on(this.decoder, "decoded", this.ondecoded.bind(this))
                  );
                },
              },
              {
                key: "onping",
                value: function () {
                  this.emitReserved("ping");
                },
              },
              {
                key: "ondata",
                value: function (t) {
                  this.decoder.add(t);
                },
              },
              {
                key: "ondecoded",
                value: function (t) {
                  this.emitReserved("packet", t);
                },
              },
              {
                key: "onerror",
                value: function (t) {
                  this.emitReserved("error", t);
                },
              },
              {
                key: "socket",
                value: function (t, e) {
                  var n = this.nsps[t];
                  return (
                    n || ((n = new f.Socket(this, t, e)), (this.nsps[t] = n)), n
                  );
                },
              },
              {
                key: "_destroy",
                value: function (t) {
                  for (
                    var e = 0, n = Object.keys(this.nsps);
                    e < n.length;
                    e++
                  ) {
                    var r = n[e];
                    if (this.nsps[r].active) return;
                  }
                  this._close();
                },
              },
              {
                key: "_packet",
                value: function (t) {
                  for (var e = this.encoder.encode(t), n = 0; n < e.length; n++)
                    this.engine.write(e[n], t.options);
                },
              },
              {
                key: "cleanup",
                value: function () {
                  this.subs.forEach(function (t) {
                    return t();
                  }),
                    (this.subs.length = 0),
                    this.decoder.destroy();
                },
              },
              {
                key: "_close",
                value: function () {
                  (this.skipReconnect = !0),
                    (this._reconnecting = !1),
                    "opening" === this._readyState && this.cleanup(),
                    this.backoff.reset(),
                    (this._readyState = "closed"),
                    this.engine && this.engine.close();
                },
              },
              {
                key: "disconnect",
                value: function () {
                  return this._close();
                },
              },
              {
                key: "onclose",
                value: function (t) {
                  this.cleanup(),
                    this.backoff.reset(),
                    (this._readyState = "closed"),
                    this.emitReserved("close", t),
                    this._reconnection &&
                      !this.skipReconnect &&
                      this.reconnect();
                },
              },
              {
                key: "reconnect",
                value: function () {
                  var t = this;
                  if (this._reconnecting || this.skipReconnect) return this;
                  var e = this;
                  if (this.backoff.attempts >= this._reconnectionAttempts)
                    this.backoff.reset(),
                      this.emitReserved("reconnect_failed"),
                      (this._reconnecting = !1);
                  else {
                    var n = this.backoff.duration();
                    this._reconnecting = !0;
                    var r = setTimeout(function () {
                      e.skipReconnect ||
                        (t.emitReserved(
                          "reconnect_attempt",
                          e.backoff.attempts
                        ),
                        e.skipReconnect ||
                          e.open(function (n) {
                            n
                              ? ((e._reconnecting = !1),
                                e.reconnect(),
                                t.emitReserved("reconnect_error", n))
                              : e.onreconnect();
                          }));
                    }, n);
                    this.opts.autoUnref && r.unref(),
                      this.subs.push(function () {
                        clearTimeout(r);
                      });
                  }
                },
              },
              {
                key: "onreconnect",
                value: function () {
                  var t = this.backoff.attempts;
                  (this._reconnecting = !1),
                    this.backoff.reset(),
                    this.emitReserved("reconnect", t);
                },
              },
            ]) && o(e.prototype, n),
            c && o(e, c),
            y
          );
        })(n(17).StrictEventEmitter);
      e.Manager = y;
    },
    function (t, e, n) {
      var r = n(9),
        o = n(23),
        i = n(27),
        s = n(28);
      (e.polling = function (t) {
        var e = !1,
          n = !1,
          s = !1 !== t.jsonp;
        if ("undefined" != typeof location) {
          var c = "https:" === location.protocol,
            a = location.port;
          a || (a = c ? 443 : 80),
            (e = t.hostname !== location.hostname || a !== t.port),
            (n = t.secure !== c);
        }
        if (
          ((t.xdomain = e),
          (t.xscheme = n),
          "open" in new r(t) && !t.forceJSONP)
        )
          return new o(t);
        if (!s) throw new Error("JSONP disabled");
        return new i(t);
      }),
        (e.websocket = s);
    },
    function (t, e, n) {
      var r = n(22),
        o = n(2);
      t.exports = function (t) {
        var e = t.xdomain,
          n = t.xscheme,
          i = t.enablesXDR;
        try {
          if ("undefined" != typeof XMLHttpRequest && (!e || r))
            return new XMLHttpRequest();
        } catch (t) {}
        try {
          if ("undefined" != typeof XDomainRequest && !n && i)
            return new XDomainRequest();
        } catch (t) {}
        if (!e)
          try {
            return new o[["Active"].concat("Object").join("X")](
              "Microsoft.XMLHTTP"
            );
          } catch (t) {}
      };
    },
    function (t, e, n) {
      function r(t) {
        return (r =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function o(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function i(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function s(t, e) {
        return (s =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function c(t) {
        var e = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = u(t);
          if (e) {
            var o = u(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return a(this, n);
        };
      }
      function a(t, e) {
        return !e || ("object" !== r(e) && "function" != typeof e)
          ? (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })(t)
          : e;
      }
      function u(t) {
        return (u = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      var f = n(3),
        l = n(4),
        p = n(0),
        h = n(12),
        y = (function (t) {
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && s(t, e);
          })(u, t);
          var e,
            n,
            r,
            a = c(u);
          function u() {
            return o(this, u), a.apply(this, arguments);
          }
          return (
            (e = u),
            (n = [
              {
                key: "doOpen",
                value: function () {
                  this.poll();
                },
              },
              {
                key: "pause",
                value: function (t) {
                  var e = this;
                  this.readyState = "pausing";
                  var n = function () {
                    (e.readyState = "paused"), t();
                  };
                  if (this.polling || !this.writable) {
                    var r = 0;
                    this.polling &&
                      (r++,
                      this.once("pollComplete", function () {
                        --r || n();
                      })),
                      this.writable ||
                        (r++,
                        this.once("drain", function () {
                          --r || n();
                        }));
                  } else n();
                },
              },
              {
                key: "poll",
                value: function () {
                  (this.polling = !0), this.doPoll(), this.emit("poll");
                },
              },
              {
                key: "onData",
                value: function (t) {
                  var e = this;
                  p
                    .decodePayload(t, this.socket.binaryType)
                    .forEach(function (t) {
                      if (
                        ("opening" === e.readyState &&
                          "open" === t.type &&
                          e.onOpen(),
                        "close" === t.type)
                      )
                        return e.onClose(), !1;
                      e.onPacket(t);
                    }),
                    "closed" !== this.readyState &&
                      ((this.polling = !1),
                      this.emit("pollComplete"),
                      "open" === this.readyState && this.poll());
                },
              },
              {
                key: "doClose",
                value: function () {
                  var t = this,
                    e = function () {
                      t.write([{ type: "close" }]);
                    };
                  "open" === this.readyState ? e() : this.once("open", e);
                },
              },
              {
                key: "write",
                value: function (t) {
                  var e = this;
                  (this.writable = !1),
                    p.encodePayload(t, function (t) {
                      e.doWrite(t, function () {
                        (e.writable = !0), e.emit("drain");
                      });
                    });
                },
              },
              {
                key: "uri",
                value: function () {
                  var t = this.query || {},
                    e = this.opts.secure ? "https" : "http",
                    n = "";
                  return (
                    !1 !== this.opts.timestampRequests &&
                      (t[this.opts.timestampParam] = h()),
                    this.supportsBinary || t.sid || (t.b64 = 1),
                    (t = l.encode(t)),
                    this.opts.port &&
                      (("https" === e && 443 !== Number(this.opts.port)) ||
                        ("http" === e && 80 !== Number(this.opts.port))) &&
                      (n = ":" + this.opts.port),
                    t.length && (t = "?" + t),
                    e +
                      "://" +
                      (-1 !== this.opts.hostname.indexOf(":")
                        ? "[" + this.opts.hostname + "]"
                        : this.opts.hostname) +
                      n +
                      this.opts.path +
                      t
                  );
                },
              },
              {
                key: "name",
                get: function () {
                  return "polling";
                },
              },
            ]) && i(e.prototype, n),
            r && i(e, r),
            u
          );
        })(f);
      t.exports = y;
    },
    function (t, e) {
      var n = Object.create(null);
      (n.open = "0"),
        (n.close = "1"),
        (n.ping = "2"),
        (n.pong = "3"),
        (n.message = "4"),
        (n.upgrade = "5"),
        (n.noop = "6");
      var r = Object.create(null);
      Object.keys(n).forEach(function (t) {
        r[n[t]] = t;
      });
      t.exports = {
        PACKET_TYPES: n,
        PACKET_TYPES_REVERSE: r,
        ERROR_PACKET: { type: "error", data: "parser error" },
      };
    },
    function (t, e, n) {
      "use strict";
      var r,
        o =
          "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(
            ""
          ),
        i = {},
        s = 0,
        c = 0;
      function a(t) {
        var e = "";
        do {
          (e = o[t % 64] + e), (t = Math.floor(t / 64));
        } while (t > 0);
        return e;
      }
      function u() {
        var t = a(+new Date());
        return t !== r ? ((s = 0), (r = t)) : t + "." + a(s++);
      }
      for (; c < 64; c++) i[o[c]] = c;
      (u.encode = a),
        (u.decode = function (t) {
          var e = 0;
          for (c = 0; c < t.length; c++) e = 64 * e + i[t.charAt(c)];
          return e;
        }),
        (t.exports = u);
    },
    function (t, e) {
      t.exports.pick = function (t) {
        for (
          var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1;
          r < e;
          r++
        )
          n[r - 1] = arguments[r];
        return n.reduce(function (e, n) {
          return t.hasOwnProperty(n) && (e[n] = t[n]), e;
        }, {});
      };
    },
    function (t, e, n) {
      "use strict";
      function r(t) {
        return (r =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function o(t, e) {
        var n;
        if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
          if (
            Array.isArray(t) ||
            (n = (function (t, e) {
              if (!t) return;
              if ("string" == typeof t) return i(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              "Object" === n && t.constructor && (n = t.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(t);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return i(t, e);
            })(t)) ||
            (e && t && "number" == typeof t.length)
          ) {
            n && (t = n);
            var r = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return r >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[r++] };
              },
              e: function (t) {
                throw t;
              },
              f: o,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var s,
          c = !0,
          a = !1;
        return {
          s: function () {
            n = t[Symbol.iterator]();
          },
          n: function () {
            var t = n.next();
            return (c = t.done), t;
          },
          e: function (t) {
            (a = !0), (s = t);
          },
          f: function () {
            try {
              c || null == n.return || n.return();
            } finally {
              if (a) throw s;
            }
          },
        };
      }
      function i(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function s(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function c(t, e, n) {
        return (c =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function (t, e, n) {
                var r = (function (t, e) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(t, e) &&
                    null !== (t = l(t));

                  );
                  return t;
                })(t, e);
                if (r) {
                  var o = Object.getOwnPropertyDescriptor(r, e);
                  return o.get ? o.get.call(n) : o.value;
                }
              })(t, e, n || t);
      }
      function a(t, e) {
        return (a =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function u(t) {
        var e = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = l(t);
          if (e) {
            var o = l(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return f(this, n);
        };
      }
      function f(t, e) {
        return !e || ("object" !== r(e) && "function" != typeof e)
          ? (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })(t)
          : e;
      }
      function l(t) {
        return (l = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Socket = void 0);
      var p = n(5),
        h = n(16),
        y = n(17),
        d = Object.freeze({
          connect: 1,
          connect_error: 1,
          disconnect: 1,
          disconnecting: 1,
          newListener: 1,
          removeListener: 1,
        }),
        v = (function (t) {
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && a(t, e);
          })(f, t);
          var e,
            n,
            r,
            i = u(f);
          function f(t, e, n) {
            var r;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, f),
              ((r = i.call(this)).receiveBuffer = []),
              (r.sendBuffer = []),
              (r.ids = 0),
              (r.acks = {}),
              (r.flags = {}),
              (r.io = t),
              (r.nsp = e),
              (r.ids = 0),
              (r.acks = {}),
              (r.receiveBuffer = []),
              (r.sendBuffer = []),
              (r.connected = !1),
              (r.disconnected = !0),
              (r.flags = {}),
              n && n.auth && (r.auth = n.auth),
              r.io._autoConnect && r.open(),
              r
            );
          }
          return (
            (e = f),
            (n = [
              {
                key: "subEvents",
                value: function () {
                  if (!this.subs) {
                    var t = this.io;
                    this.subs = [
                      h.on(t, "open", this.onopen.bind(this)),
                      h.on(t, "packet", this.onpacket.bind(this)),
                      h.on(t, "error", this.onerror.bind(this)),
                      h.on(t, "close", this.onclose.bind(this)),
                    ];
                  }
                },
              },
              {
                key: "connect",
                value: function () {
                  return (
                    this.connected ||
                      (this.subEvents(),
                      this.io._reconnecting || this.io.open(),
                      "open" === this.io._readyState && this.onopen()),
                    this
                  );
                },
              },
              {
                key: "open",
                value: function () {
                  return this.connect();
                },
              },
              {
                key: "send",
                value: function () {
                  for (
                    var t = arguments.length, e = new Array(t), n = 0;
                    n < t;
                    n++
                  )
                    e[n] = arguments[n];
                  return e.unshift("message"), this.emit.apply(this, e), this;
                },
              },
              {
                key: "emit",
                value: function (t) {
                  if (d.hasOwnProperty(t))
                    throw new Error('"' + t + '" is a reserved event name');
                  for (
                    var e = arguments.length,
                      n = new Array(e > 1 ? e - 1 : 0),
                      r = 1;
                    r < e;
                    r++
                  )
                    n[r - 1] = arguments[r];
                  n.unshift(t);
                  var o = { type: p.PacketType.EVENT, data: n, options: {} };
                  (o.options.compress = !1 !== this.flags.compress),
                    "function" == typeof n[n.length - 1] &&
                      ((this.acks[this.ids] = n.pop()), (o.id = this.ids++));
                  var i =
                      this.io.engine &&
                      this.io.engine.transport &&
                      this.io.engine.transport.writable,
                    s = this.flags.volatile && (!i || !this.connected);
                  return (
                    s ||
                      (this.connected
                        ? this.packet(o)
                        : this.sendBuffer.push(o)),
                    (this.flags = {}),
                    this
                  );
                },
              },
              {
                key: "packet",
                value: function (t) {
                  (t.nsp = this.nsp), this.io._packet(t);
                },
              },
              {
                key: "onopen",
                value: function () {
                  var t = this;
                  "function" == typeof this.auth
                    ? this.auth(function (e) {
                        t.packet({ type: p.PacketType.CONNECT, data: e });
                      })
                    : this.packet({
                        type: p.PacketType.CONNECT,
                        data: this.auth,
                      });
                },
              },
              {
                key: "onerror",
                value: function (t) {
                  this.connected || this.emitReserved("connect_error", t);
                },
              },
              {
                key: "onclose",
                value: function (t) {
                  (this.connected = !1),
                    (this.disconnected = !0),
                    delete this.id,
                    this.emitReserved("disconnect", t);
                },
              },
              {
                key: "onpacket",
                value: function (t) {
                  if (t.nsp === this.nsp)
                    switch (t.type) {
                      case p.PacketType.CONNECT:
                        if (t.data && t.data.sid) {
                          var e = t.data.sid;
                          this.onconnect(e);
                        } else
                          this.emitReserved(
                            "connect_error",
                            new Error(
                              "It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"
                            )
                          );
                        break;
                      case p.PacketType.EVENT:
                      case p.PacketType.BINARY_EVENT:
                        this.onevent(t);
                        break;
                      case p.PacketType.ACK:
                      case p.PacketType.BINARY_ACK:
                        this.onack(t);
                        break;
                      case p.PacketType.DISCONNECT:
                        this.ondisconnect();
                        break;
                      case p.PacketType.CONNECT_ERROR:
                        var n = new Error(t.data.message);
                        (n.data = t.data.data),
                          this.emitReserved("connect_error", n);
                    }
                },
              },
              {
                key: "onevent",
                value: function (t) {
                  var e = t.data || [];
                  null != t.id && e.push(this.ack(t.id)),
                    this.connected
                      ? this.emitEvent(e)
                      : this.receiveBuffer.push(Object.freeze(e));
                },
              },
              {
                key: "emitEvent",
                value: function (t) {
                  if (this._anyListeners && this._anyListeners.length) {
                    var e,
                      n = o(this._anyListeners.slice());
                    try {
                      for (n.s(); !(e = n.n()).done; ) e.value.apply(this, t);
                    } catch (t) {
                      n.e(t);
                    } finally {
                      n.f();
                    }
                  }
                  c(l(f.prototype), "emit", this).apply(this, t);
                },
              },
              {
                key: "ack",
                value: function (t) {
                  var e = this,
                    n = !1;
                  return function () {
                    if (!n) {
                      n = !0;
                      for (
                        var r = arguments.length, o = new Array(r), i = 0;
                        i < r;
                        i++
                      )
                        o[i] = arguments[i];
                      e.packet({ type: p.PacketType.ACK, id: t, data: o });
                    }
                  };
                },
              },
              {
                key: "onack",
                value: function (t) {
                  var e = this.acks[t.id];
                  "function" == typeof e &&
                    (e.apply(this, t.data), delete this.acks[t.id]);
                },
              },
              {
                key: "onconnect",
                value: function (t) {
                  (this.id = t),
                    (this.connected = !0),
                    (this.disconnected = !1),
                    this.emitBuffered(),
                    this.emitReserved("connect");
                },
              },
              {
                key: "emitBuffered",
                value: function () {
                  var t = this;
                  this.receiveBuffer.forEach(function (e) {
                    return t.emitEvent(e);
                  }),
                    (this.receiveBuffer = []),
                    this.sendBuffer.forEach(function (e) {
                      return t.packet(e);
                    }),
                    (this.sendBuffer = []);
                },
              },
              {
                key: "ondisconnect",
                value: function () {
                  this.destroy(), this.onclose("io server disconnect");
                },
              },
              {
                key: "destroy",
                value: function () {
                  this.subs &&
                    (this.subs.forEach(function (t) {
                      return t();
                    }),
                    (this.subs = void 0)),
                    this.io._destroy(this);
                },
              },
              {
                key: "disconnect",
                value: function () {
                  return (
                    this.connected &&
                      this.packet({ type: p.PacketType.DISCONNECT }),
                    this.destroy(),
                    this.connected && this.onclose("io client disconnect"),
                    this
                  );
                },
              },
              {
                key: "close",
                value: function () {
                  return this.disconnect();
                },
              },
              {
                key: "compress",
                value: function (t) {
                  return (this.flags.compress = t), this;
                },
              },
              {
                key: "onAny",
                value: function (t) {
                  return (
                    (this._anyListeners = this._anyListeners || []),
                    this._anyListeners.push(t),
                    this
                  );
                },
              },
              {
                key: "prependAny",
                value: function (t) {
                  return (
                    (this._anyListeners = this._anyListeners || []),
                    this._anyListeners.unshift(t),
                    this
                  );
                },
              },
              {
                key: "offAny",
                value: function (t) {
                  if (!this._anyListeners) return this;
                  if (t) {
                    for (var e = this._anyListeners, n = 0; n < e.length; n++)
                      if (t === e[n]) return e.splice(n, 1), this;
                  } else this._anyListeners = [];
                  return this;
                },
              },
              {
                key: "listenersAny",
                value: function () {
                  return this._anyListeners || [];
                },
              },
              {
                key: "active",
                get: function () {
                  return !!this.subs;
                },
              },
              {
                key: "volatile",
                get: function () {
                  return (this.flags.volatile = !0), this;
                },
              },
            ]) && s(e.prototype, n),
            r && s(e, r),
            f
          );
        })(y.StrictEventEmitter);
      e.Socket = v;
    },
    function (t, e, n) {
      "use strict";
      function r(t) {
        return (r =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.hasBinary = e.isBinary = void 0);
      var o = "function" == typeof ArrayBuffer,
        i = Object.prototype.toString,
        s =
          "function" == typeof Blob ||
          ("undefined" != typeof Blob &&
            "[object BlobConstructor]" === i.call(Blob)),
        c =
          "function" == typeof File ||
          ("undefined" != typeof File &&
            "[object FileConstructor]" === i.call(File));
      function a(t) {
        return (
          (o &&
            (t instanceof ArrayBuffer ||
              (function (t) {
                return "function" == typeof ArrayBuffer.isView
                  ? ArrayBuffer.isView(t)
                  : t.buffer instanceof ArrayBuffer;
              })(t))) ||
          (s && t instanceof Blob) ||
          (c && t instanceof File)
        );
      }
      (e.isBinary = a),
        (e.hasBinary = function t(e, n) {
          if (!e || "object" !== r(e)) return !1;
          if (Array.isArray(e)) {
            for (var o = 0, i = e.length; o < i; o++) if (t(e[o])) return !0;
            return !1;
          }
          if (a(e)) return !0;
          if (
            e.toJSON &&
            "function" == typeof e.toJSON &&
            1 === arguments.length
          )
            return t(e.toJSON(), !0);
          for (var s in e)
            if (Object.prototype.hasOwnProperty.call(e, s) && t(e[s]))
              return !0;
          return !1;
        });
    },
    function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.on = void 0),
        (e.on = function (t, e, n) {
          return (
            t.on(e, n),
            function () {
              t.off(e, n);
            }
          );
        });
    },
    function (t, e, n) {
      "use strict";
      function r(t) {
        return (r =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function o(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function i(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function s(t, e, n) {
        return (s =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function (t, e, n) {
                var r = (function (t, e) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(t, e) &&
                    null !== (t = f(t));

                  );
                  return t;
                })(t, e);
                if (r) {
                  var o = Object.getOwnPropertyDescriptor(r, e);
                  return o.get ? o.get.call(n) : o.value;
                }
              })(t, e, n || t);
      }
      function c(t, e) {
        return (c =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function a(t) {
        var e = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = f(t);
          if (e) {
            var o = f(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return u(this, n);
        };
      }
      function u(t, e) {
        return !e || ("object" !== r(e) && "function" != typeof e)
          ? (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })(t)
          : e;
      }
      function f(t) {
        return (f = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.StrictEventEmitter = void 0);
      var l = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && c(t, e);
        })(l, t);
        var e,
          n,
          r,
          u = a(l);
        function l() {
          return o(this, l), u.apply(this, arguments);
        }
        return (
          (e = l),
          (n = [
            {
              key: "on",
              value: function (t, e) {
                return s(f(l.prototype), "on", this).call(this, t, e), this;
              },
            },
            {
              key: "once",
              value: function (t, e) {
                return s(f(l.prototype), "once", this).call(this, t, e), this;
              },
            },
            {
              key: "emit",
              value: function (t) {
                for (
                  var e,
                    n = arguments.length,
                    r = new Array(n > 1 ? n - 1 : 0),
                    o = 1;
                  o < n;
                  o++
                )
                  r[o - 1] = arguments[o];
                return (
                  (e = s(f(l.prototype), "emit", this)).call.apply(
                    e,
                    [this, t].concat(r)
                  ),
                  this
                );
              },
            },
            {
              key: "emitReserved",
              value: function (t) {
                for (
                  var e,
                    n = arguments.length,
                    r = new Array(n > 1 ? n - 1 : 0),
                    o = 1;
                  o < n;
                  o++
                )
                  r[o - 1] = arguments[o];
                return (
                  (e = s(f(l.prototype), "emit", this)).call.apply(
                    e,
                    [this, t].concat(r)
                  ),
                  this
                );
              },
            },
            {
              key: "listeners",
              value: function (t) {
                return s(f(l.prototype), "listeners", this).call(this, t);
              },
            },
          ]) && i(e.prototype, n),
          r && i(e, r),
          l
        );
      })(n(1));
      e.StrictEventEmitter = l;
    },
    function (t, e, n) {
      "use strict";
      function r(t) {
        return (r =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.io = e.Socket = e.Manager = e.protocol = void 0);
      var o = n(19),
        i = n(7);
      t.exports = e = c;
      var s = (e.managers = {});
      function c(t, e) {
        "object" === r(t) && ((e = t), (t = void 0)), (e = e || {});
        var n,
          c = o.url(t, e.path || "/socket.io"),
          a = c.source,
          u = c.id,
          f = c.path,
          l = s[u] && f in s[u].nsps;
        return (
          e.forceNew || e["force new connection"] || !1 === e.multiplex || l
            ? (n = new i.Manager(a, e))
            : (s[u] || (s[u] = new i.Manager(a, e)), (n = s[u])),
          c.query && !e.query && (e.query = c.queryKey),
          n.socket(c.path, e)
        );
      }
      e.io = c;
      var a = n(5);
      Object.defineProperty(e, "protocol", {
        enumerable: !0,
        get: function () {
          return a.protocol;
        },
      }),
        (e.connect = c);
      var u = n(7);
      Object.defineProperty(e, "Manager", {
        enumerable: !0,
        get: function () {
          return u.Manager;
        },
      });
      var f = n(14);
      Object.defineProperty(e, "Socket", {
        enumerable: !0,
        get: function () {
          return f.Socket;
        },
      }),
        (e.default = c);
    },
    function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.url = void 0);
      var r = n(6);
      e.url = function (t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          n = arguments.length > 2 ? arguments[2] : void 0,
          o = t;
        (n = n || ("undefined" != typeof location && location)),
          null == t && (t = n.protocol + "//" + n.host),
          "string" == typeof t &&
            ("/" === t.charAt(0) &&
              (t = "/" === t.charAt(1) ? n.protocol + t : n.host + t),
            /^(https?|wss?):\/\//.test(t) ||
              (t = void 0 !== n ? n.protocol + "//" + t : "https://" + t),
            (o = r(t))),
          o.port ||
            (/^(http|ws)$/.test(o.protocol)
              ? (o.port = "80")
              : /^(http|ws)s$/.test(o.protocol) && (o.port = "443")),
          (o.path = o.path || "/");
        var i = -1 !== o.host.indexOf(":"),
          s = i ? "[" + o.host + "]" : o.host;
        return (
          (o.id = o.protocol + "://" + s + ":" + o.port + e),
          (o.href =
            o.protocol +
            "://" +
            s +
            (n && n.port === o.port ? "" : ":" + o.port)),
          o
        );
      };
    },
    function (t, e, n) {
      var r = n(21);
      (t.exports = function (t, e) {
        return new r(t, e);
      }),
        (t.exports.Socket = r),
        (t.exports.protocol = r.protocol),
        (t.exports.Transport = n(3)),
        (t.exports.transports = n(8)),
        (t.exports.parser = n(0));
    },
    function (t, e, n) {
      function r() {
        return (r =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
            }
            return t;
          }).apply(this, arguments);
      }
      function o(t) {
        return (o =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function i(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function s(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function c(t, e) {
        return (c =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function a(t) {
        var e = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = f(t);
          if (e) {
            var o = f(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return u(this, n);
        };
      }
      function u(t, e) {
        return !e || ("object" !== o(e) && "function" != typeof e)
          ? (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })(t)
          : e;
      }
      function f(t) {
        return (f = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      var l = n(8),
        p = n(1),
        h = n(0),
        y = n(6),
        d = n(4),
        v = (function (t) {
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && c(t, e);
          })(p, t);
          var e,
            n,
            u,
            f = a(p);
          function p(t) {
            var e,
              n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
            return (
              i(this, p),
              (e = f.call(this)),
              t && "object" === o(t) && ((n = t), (t = null)),
              t
                ? ((t = y(t)),
                  (n.hostname = t.host),
                  (n.secure = "https" === t.protocol || "wss" === t.protocol),
                  (n.port = t.port),
                  t.query && (n.query = t.query))
                : n.host && (n.hostname = y(n.host).host),
              (e.secure =
                null != n.secure
                  ? n.secure
                  : "undefined" != typeof location &&
                    "https:" === location.protocol),
              n.hostname && !n.port && (n.port = e.secure ? "443" : "80"),
              (e.hostname =
                n.hostname ||
                ("undefined" != typeof location
                  ? location.hostname
                  : "localhost")),
              (e.port =
                n.port ||
                ("undefined" != typeof location && location.port
                  ? location.port
                  : e.secure
                  ? 443
                  : 80)),
              (e.transports = n.transports || ["polling", "websocket"]),
              (e.readyState = ""),
              (e.writeBuffer = []),
              (e.prevBufferLen = 0),
              (e.opts = r(
                {
                  path: "/engine.io",
                  agent: !1,
                  withCredentials: !1,
                  upgrade: !0,
                  jsonp: !0,
                  timestampParam: "t",
                  rememberUpgrade: !1,
                  rejectUnauthorized: !0,
                  perMessageDeflate: { threshold: 1024 },
                  transportOptions: {},
                  closeOnBeforeunload: !0,
                },
                n
              )),
              (e.opts.path = e.opts.path.replace(/\/$/, "") + "/"),
              "string" == typeof e.opts.query &&
                (e.opts.query = d.decode(e.opts.query)),
              (e.id = null),
              (e.upgrades = null),
              (e.pingInterval = null),
              (e.pingTimeout = null),
              (e.pingTimeoutTimer = null),
              "function" == typeof addEventListener &&
                (e.opts.closeOnBeforeunload &&
                  addEventListener(
                    "beforeunload",
                    function () {
                      e.transport &&
                        (e.transport.removeAllListeners(), e.transport.close());
                    },
                    !1
                  ),
                "localhost" !== e.hostname &&
                  ((e.offlineEventListener = function () {
                    e.onClose("transport close");
                  }),
                  addEventListener("offline", e.offlineEventListener, !1))),
              e.open(),
              e
            );
          }
          return (
            (e = p),
            (n = [
              {
                key: "createTransport",
                value: function (t) {
                  var e = (function (t) {
                    var e = {};
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                    return e;
                  })(this.opts.query);
                  (e.EIO = h.protocol),
                    (e.transport = t),
                    this.id && (e.sid = this.id);
                  var n = r({}, this.opts.transportOptions[t], this.opts, {
                    query: e,
                    socket: this,
                    hostname: this.hostname,
                    secure: this.secure,
                    port: this.port,
                  });
                  return new l[t](n);
                },
              },
              {
                key: "open",
                value: function () {
                  var t,
                    e = this;
                  if (
                    this.opts.rememberUpgrade &&
                    p.priorWebsocketSuccess &&
                    -1 !== this.transports.indexOf("websocket")
                  )
                    t = "websocket";
                  else {
                    if (0 === this.transports.length)
                      return void setTimeout(function () {
                        e.emit("error", "No transports available");
                      }, 0);
                    t = this.transports[0];
                  }
                  this.readyState = "opening";
                  try {
                    t = this.createTransport(t);
                  } catch (t) {
                    return this.transports.shift(), void this.open();
                  }
                  t.open(), this.setTransport(t);
                },
              },
              {
                key: "setTransport",
                value: function (t) {
                  var e = this;
                  this.transport && this.transport.removeAllListeners(),
                    (this.transport = t),
                    t
                      .on("drain", this.onDrain.bind(this))
                      .on("packet", this.onPacket.bind(this))
                      .on("error", this.onError.bind(this))
                      .on("close", function () {
                        e.onClose("transport close");
                      });
                },
              },
              {
                key: "probe",
                value: function (t) {
                  var e = this,
                    n = this.createTransport(t, { probe: 1 }),
                    r = !1;
                  p.priorWebsocketSuccess = !1;
                  var o = function () {
                    r ||
                      (n.send([{ type: "ping", data: "probe" }]),
                      n.once("packet", function (t) {
                        if (!r)
                          if ("pong" === t.type && "probe" === t.data) {
                            if (
                              ((e.upgrading = !0), e.emit("upgrading", n), !n)
                            )
                              return;
                            (p.priorWebsocketSuccess = "websocket" === n.name),
                              e.transport.pause(function () {
                                r ||
                                  ("closed" !== e.readyState &&
                                    (f(),
                                    e.setTransport(n),
                                    n.send([{ type: "upgrade" }]),
                                    e.emit("upgrade", n),
                                    (n = null),
                                    (e.upgrading = !1),
                                    e.flush()));
                              });
                          } else {
                            var o = new Error("probe error");
                            (o.transport = n.name), e.emit("upgradeError", o);
                          }
                      }));
                  };
                  function i() {
                    r || ((r = !0), f(), n.close(), (n = null));
                  }
                  var s = function (t) {
                    var r = new Error("probe error: " + t);
                    (r.transport = n.name), i(), e.emit("upgradeError", r);
                  };
                  function c() {
                    s("transport closed");
                  }
                  function a() {
                    s("socket closed");
                  }
                  function u(t) {
                    n && t.name !== n.name && i();
                  }
                  var f = function () {
                    n.removeListener("open", o),
                      n.removeListener("error", s),
                      n.removeListener("close", c),
                      e.removeListener("close", a),
                      e.removeListener("upgrading", u);
                  };
                  n.once("open", o),
                    n.once("error", s),
                    n.once("close", c),
                    this.once("close", a),
                    this.once("upgrading", u),
                    n.open();
                },
              },
              {
                key: "onOpen",
                value: function () {
                  if (
                    ((this.readyState = "open"),
                    (p.priorWebsocketSuccess =
                      "websocket" === this.transport.name),
                    this.emit("open"),
                    this.flush(),
                    "open" === this.readyState &&
                      this.opts.upgrade &&
                      this.transport.pause)
                  )
                    for (var t = 0, e = this.upgrades.length; t < e; t++)
                      this.probe(this.upgrades[t]);
                },
              },
              {
                key: "onPacket",
                value: function (t) {
                  if (
                    "opening" === this.readyState ||
                    "open" === this.readyState ||
                    "closing" === this.readyState
                  )
                    switch (
                      (this.emit("packet", t), this.emit("heartbeat"), t.type)
                    ) {
                      case "open":
                        this.onHandshake(JSON.parse(t.data));
                        break;
                      case "ping":
                        this.resetPingTimeout(),
                          this.sendPacket("pong"),
                          this.emit("pong");
                        break;
                      case "error":
                        var e = new Error("server error");
                        (e.code = t.data), this.onError(e);
                        break;
                      case "message":
                        this.emit("data", t.data), this.emit("message", t.data);
                    }
                },
              },
              {
                key: "onHandshake",
                value: function (t) {
                  this.emit("handshake", t),
                    (this.id = t.sid),
                    (this.transport.query.sid = t.sid),
                    (this.upgrades = this.filterUpgrades(t.upgrades)),
                    (this.pingInterval = t.pingInterval),
                    (this.pingTimeout = t.pingTimeout),
                    this.onOpen(),
                    "closed" !== this.readyState && this.resetPingTimeout();
                },
              },
              {
                key: "resetPingTimeout",
                value: function () {
                  var t = this;
                  clearTimeout(this.pingTimeoutTimer),
                    (this.pingTimeoutTimer = setTimeout(function () {
                      t.onClose("ping timeout");
                    }, this.pingInterval + this.pingTimeout)),
                    this.opts.autoUnref && this.pingTimeoutTimer.unref();
                },
              },
              {
                key: "onDrain",
                value: function () {
                  this.writeBuffer.splice(0, this.prevBufferLen),
                    (this.prevBufferLen = 0),
                    0 === this.writeBuffer.length
                      ? this.emit("drain")
                      : this.flush();
                },
              },
              {
                key: "flush",
                value: function () {
                  "closed" !== this.readyState &&
                    this.transport.writable &&
                    !this.upgrading &&
                    this.writeBuffer.length &&
                    (this.transport.send(this.writeBuffer),
                    (this.prevBufferLen = this.writeBuffer.length),
                    this.emit("flush"));
                },
              },
              {
                key: "write",
                value: function (t, e, n) {
                  return this.sendPacket("message", t, e, n), this;
                },
              },
              {
                key: "send",
                value: function (t, e, n) {
                  return this.sendPacket("message", t, e, n), this;
                },
              },
              {
                key: "sendPacket",
                value: function (t, e, n, r) {
                  if (
                    ("function" == typeof e && ((r = e), (e = void 0)),
                    "function" == typeof n && ((r = n), (n = null)),
                    "closing" !== this.readyState &&
                      "closed" !== this.readyState)
                  ) {
                    (n = n || {}).compress = !1 !== n.compress;
                    var o = { type: t, data: e, options: n };
                    this.emit("packetCreate", o),
                      this.writeBuffer.push(o),
                      r && this.once("flush", r),
                      this.flush();
                  }
                },
              },
              {
                key: "close",
                value: function () {
                  var t = this,
                    e = function () {
                      t.onClose("forced close"), t.transport.close();
                    },
                    n = function n() {
                      t.removeListener("upgrade", n),
                        t.removeListener("upgradeError", n),
                        e();
                    },
                    r = function () {
                      t.once("upgrade", n), t.once("upgradeError", n);
                    };
                  return (
                    ("opening" !== this.readyState &&
                      "open" !== this.readyState) ||
                      ((this.readyState = "closing"),
                      this.writeBuffer.length
                        ? this.once("drain", function () {
                            t.upgrading ? r() : e();
                          })
                        : this.upgrading
                        ? r()
                        : e()),
                    this
                  );
                },
              },
              {
                key: "onError",
                value: function (t) {
                  (p.priorWebsocketSuccess = !1),
                    this.emit("error", t),
                    this.onClose("transport error", t);
                },
              },
              {
                key: "onClose",
                value: function (t, e) {
                  ("opening" !== this.readyState &&
                    "open" !== this.readyState &&
                    "closing" !== this.readyState) ||
                    (clearTimeout(this.pingIntervalTimer),
                    clearTimeout(this.pingTimeoutTimer),
                    this.transport.removeAllListeners("close"),
                    this.transport.close(),
                    this.transport.removeAllListeners(),
                    "function" == typeof removeEventListener &&
                      removeEventListener(
                        "offline",
                        this.offlineEventListener,
                        !1
                      ),
                    (this.readyState = "closed"),
                    (this.id = null),
                    this.emit("close", t, e),
                    (this.writeBuffer = []),
                    (this.prevBufferLen = 0));
                },
              },
              {
                key: "filterUpgrades",
                value: function (t) {
                  for (var e = [], n = 0, r = t.length; n < r; n++)
                    ~this.transports.indexOf(t[n]) && e.push(t[n]);
                  return e;
                },
              },
            ]) && s(e.prototype, n),
            u && s(e, u),
            p
          );
        })(p);
      (v.priorWebsocketSuccess = !1),
        (v.protocol = h.protocol),
        (t.exports = v);
    },
    function (t, e) {
      try {
        t.exports =
          "undefined" != typeof XMLHttpRequest &&
          "withCredentials" in new XMLHttpRequest();
      } catch (e) {
        t.exports = !1;
      }
    },
    function (t, e, n) {
      function r(t) {
        return (r =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function o() {
        return (o =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
            }
            return t;
          }).apply(this, arguments);
      }
      function i(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function s(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function c(t, e, n) {
        return e && s(t.prototype, e), n && s(t, n), t;
      }
      function a(t, e) {
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && u(t, e);
      }
      function u(t, e) {
        return (u =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function f(t) {
        var e = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = p(t);
          if (e) {
            var o = p(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return l(this, n);
        };
      }
      function l(t, e) {
        return !e || ("object" !== r(e) && "function" != typeof e)
          ? (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })(t)
          : e;
      }
      function p(t) {
        return (p = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      var h = n(9),
        y = n(10),
        d = n(1),
        v = n(13).pick,
        b = n(2);
      function m() {}
      var g = null != new h({ xdomain: !1 }).responseType,
        k = (function (t) {
          a(n, t);
          var e = f(n);
          function n(t) {
            var r;
            if (
              (i(this, n),
              (r = e.call(this, t)),
              "undefined" != typeof location)
            ) {
              var o = "https:" === location.protocol,
                s = location.port;
              s || (s = o ? 443 : 80),
                (r.xd =
                  ("undefined" != typeof location &&
                    t.hostname !== location.hostname) ||
                  s !== t.port),
                (r.xs = t.secure !== o);
            }
            var c = t && t.forceBase64;
            return (r.supportsBinary = g && !c), r;
          }
          return (
            c(n, [
              {
                key: "request",
                value: function () {
                  var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  return (
                    o(t, { xd: this.xd, xs: this.xs }, this.opts),
                    new w(this.uri(), t)
                  );
                },
              },
              {
                key: "doWrite",
                value: function (t, e) {
                  var n = this,
                    r = this.request({ method: "POST", data: t });
                  r.on("success", e),
                    r.on("error", function (t) {
                      n.onError("xhr post error", t);
                    });
                },
              },
              {
                key: "doPoll",
                value: function () {
                  var t = this,
                    e = this.request();
                  e.on("data", this.onData.bind(this)),
                    e.on("error", function (e) {
                      t.onError("xhr poll error", e);
                    }),
                    (this.pollXhr = e);
                },
              },
            ]),
            n
          );
        })(y),
        w = (function (t) {
          a(n, t);
          var e = f(n);
          function n(t, r) {
            var o;
            return (
              i(this, n),
              ((o = e.call(this)).opts = r),
              (o.method = r.method || "GET"),
              (o.uri = t),
              (o.async = !1 !== r.async),
              (o.data = void 0 !== r.data ? r.data : null),
              o.create(),
              o
            );
          }
          return (
            c(n, [
              {
                key: "create",
                value: function () {
                  var t = this,
                    e = v(
                      this.opts,
                      "agent",
                      "enablesXDR",
                      "pfx",
                      "key",
                      "passphrase",
                      "cert",
                      "ca",
                      "ciphers",
                      "rejectUnauthorized",
                      "autoUnref"
                    );
                  (e.xdomain = !!this.opts.xd), (e.xscheme = !!this.opts.xs);
                  var r = (this.xhr = new h(e));
                  try {
                    r.open(this.method, this.uri, this.async);
                    try {
                      if (this.opts.extraHeaders)
                        for (var o in (r.setDisableHeaderCheck &&
                          r.setDisableHeaderCheck(!0),
                        this.opts.extraHeaders))
                          this.opts.extraHeaders.hasOwnProperty(o) &&
                            r.setRequestHeader(o, this.opts.extraHeaders[o]);
                    } catch (t) {}
                    if ("POST" === this.method)
                      try {
                        r.setRequestHeader(
                          "Content-type",
                          "text/plain;charset=UTF-8"
                        );
                      } catch (t) {}
                    try {
                      r.setRequestHeader("Accept", "*/*");
                    } catch (t) {}
                    "withCredentials" in r &&
                      (r.withCredentials = this.opts.withCredentials),
                      this.opts.requestTimeout &&
                        (r.timeout = this.opts.requestTimeout),
                      this.hasXDR()
                        ? ((r.onload = function () {
                            t.onLoad();
                          }),
                          (r.onerror = function () {
                            t.onError(r.responseText);
                          }))
                        : (r.onreadystatechange = function () {
                            4 === r.readyState &&
                              (200 === r.status || 1223 === r.status
                                ? t.onLoad()
                                : setTimeout(function () {
                                    t.onError(
                                      "number" == typeof r.status ? r.status : 0
                                    );
                                  }, 0));
                          }),
                      r.send(this.data);
                  } catch (e) {
                    return void setTimeout(function () {
                      t.onError(e);
                    }, 0);
                  }
                  "undefined" != typeof document &&
                    ((this.index = n.requestsCount++),
                    (n.requests[this.index] = this));
                },
              },
              {
                key: "onSuccess",
                value: function () {
                  this.emit("success"), this.cleanup();
                },
              },
              {
                key: "onData",
                value: function (t) {
                  this.emit("data", t), this.onSuccess();
                },
              },
              {
                key: "onError",
                value: function (t) {
                  this.emit("error", t), this.cleanup(!0);
                },
              },
              {
                key: "cleanup",
                value: function (t) {
                  if (void 0 !== this.xhr && null !== this.xhr) {
                    if (
                      (this.hasXDR()
                        ? (this.xhr.onload = this.xhr.onerror = m)
                        : (this.xhr.onreadystatechange = m),
                      t)
                    )
                      try {
                        this.xhr.abort();
                      } catch (t) {}
                    "undefined" != typeof document &&
                      delete n.requests[this.index],
                      (this.xhr = null);
                  }
                },
              },
              {
                key: "onLoad",
                value: function () {
                  var t = this.xhr.responseText;
                  null !== t && this.onData(t);
                },
              },
              {
                key: "hasXDR",
                value: function () {
                  return (
                    "undefined" != typeof XDomainRequest &&
                    !this.xs &&
                    this.enablesXDR
                  );
                },
              },
              {
                key: "abort",
                value: function () {
                  this.cleanup();
                },
              },
            ]),
            n
          );
        })(d);
      if (
        ((w.requestsCount = 0),
        (w.requests = {}),
        "undefined" != typeof document)
      )
        if ("function" == typeof attachEvent) attachEvent("onunload", O);
        else if ("function" == typeof addEventListener) {
          addEventListener("onpagehide" in b ? "pagehide" : "unload", O, !1);
        }
      function O() {
        for (var t in w.requests)
          w.requests.hasOwnProperty(t) && w.requests[t].abort();
      }
      (t.exports = k), (t.exports.Request = w);
    },
    function (t, e, n) {
      var r = n(11).PACKET_TYPES,
        o =
          "function" == typeof Blob ||
          ("undefined" != typeof Blob &&
            "[object BlobConstructor]" ===
              Object.prototype.toString.call(Blob)),
        i = "function" == typeof ArrayBuffer,
        s = function (t, e) {
          var n = new FileReader();
          return (
            (n.onload = function () {
              var t = n.result.split(",")[1];
              e("b" + t);
            }),
            n.readAsDataURL(t)
          );
        };
      t.exports = function (t, e, n) {
        var c,
          a = t.type,
          u = t.data;
        return o && u instanceof Blob
          ? e
            ? n(u)
            : s(u, n)
          : i &&
            (u instanceof ArrayBuffer ||
              ((c = u),
              "function" == typeof ArrayBuffer.isView
                ? ArrayBuffer.isView(c)
                : c && c.buffer instanceof ArrayBuffer))
          ? e
            ? n(u instanceof ArrayBuffer ? u : u.buffer)
            : s(new Blob([u]), n)
          : n(r[a] + (u || ""));
      };
    },
    function (t, e, n) {
      var r,
        o = n(11),
        i = o.PACKET_TYPES_REVERSE,
        s = o.ERROR_PACKET;
      "function" == typeof ArrayBuffer && (r = n(26));
      var c = function (t, e) {
          if (r) {
            var n = r.decode(t);
            return a(n, e);
          }
          return { base64: !0, data: t };
        },
        a = function (t, e) {
          switch (e) {
            case "blob":
              return t instanceof ArrayBuffer ? new Blob([t]) : t;
            case "arraybuffer":
            default:
              return t;
          }
        };
      t.exports = function (t, e) {
        if ("string" != typeof t) return { type: "message", data: a(t, e) };
        var n = t.charAt(0);
        return "b" === n
          ? { type: "message", data: c(t.substring(1), e) }
          : i[n]
          ? t.length > 1
            ? { type: i[n], data: t.substring(1) }
            : { type: i[n] }
          : s;
      };
    },
    function (t, e) {
      !(function (t) {
        "use strict";
        (e.encode = function (e) {
          var n,
            r = new Uint8Array(e),
            o = r.length,
            i = "";
          for (n = 0; n < o; n += 3)
            (i += t[r[n] >> 2]),
              (i += t[((3 & r[n]) << 4) | (r[n + 1] >> 4)]),
              (i += t[((15 & r[n + 1]) << 2) | (r[n + 2] >> 6)]),
              (i += t[63 & r[n + 2]]);
          return (
            o % 3 == 2
              ? (i = i.substring(0, i.length - 1) + "=")
              : o % 3 == 1 && (i = i.substring(0, i.length - 2) + "=="),
            i
          );
        }),
          (e.decode = function (e) {
            var n,
              r,
              o,
              i,
              s,
              c = 0.75 * e.length,
              a = e.length,
              u = 0;
            "=" === e[e.length - 1] && (c--, "=" === e[e.length - 2] && c--);
            var f = new ArrayBuffer(c),
              l = new Uint8Array(f);
            for (n = 0; n < a; n += 4)
              (r = t.indexOf(e[n])),
                (o = t.indexOf(e[n + 1])),
                (i = t.indexOf(e[n + 2])),
                (s = t.indexOf(e[n + 3])),
                (l[u++] = (r << 2) | (o >> 4)),
                (l[u++] = ((15 & o) << 4) | (i >> 2)),
                (l[u++] = ((3 & i) << 6) | (63 & s));
            return f;
          });
      })("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/");
    },
    function (t, e, n) {
      function r(t) {
        return (r =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function o(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function i(t, e, n) {
        return (i =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function (t, e, n) {
                var r = (function (t, e) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(t, e) &&
                    null !== (t = f(t));

                  );
                  return t;
                })(t, e);
                if (r) {
                  var o = Object.getOwnPropertyDescriptor(r, e);
                  return o.get ? o.get.call(n) : o.value;
                }
              })(t, e, n || t);
      }
      function s(t, e) {
        return (s =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function c(t) {
        var e = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = f(t);
          if (e) {
            var o = f(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return a(this, n);
        };
      }
      function a(t, e) {
        return !e || ("object" !== r(e) && "function" != typeof e) ? u(t) : e;
      }
      function u(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function f(t) {
        return (f = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      var l,
        p = n(10),
        h = n(2),
        y = /\n/g,
        d = /\\n/g,
        v = (function (t) {
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && s(t, e);
          })(p, t);
          var e,
            n,
            r,
            a = c(p);
          function p(t) {
            var e;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, p),
              ((e = a.call(this, t)).query = e.query || {}),
              l || (l = h.___eio = h.___eio || []),
              (e.index = l.length),
              l.push(e.onData.bind(u(e))),
              (e.query.j = e.index),
              e
            );
          }
          return (
            (e = p),
            (n = [
              {
                key: "doClose",
                value: function () {
                  this.script &&
                    ((this.script.onerror = function () {}),
                    this.script.parentNode.removeChild(this.script),
                    (this.script = null)),
                    this.form &&
                      (this.form.parentNode.removeChild(this.form),
                      (this.form = null),
                      (this.iframe = null)),
                    i(f(p.prototype), "doClose", this).call(this);
                },
              },
              {
                key: "doPoll",
                value: function () {
                  var t = this,
                    e = document.createElement("script");
                  this.script &&
                    (this.script.parentNode.removeChild(this.script),
                    (this.script = null)),
                    (e.async = !0),
                    (e.src = this.uri()),
                    (e.onerror = function (e) {
                      t.onError("jsonp poll error", e);
                    });
                  var n = document.getElementsByTagName("script")[0];
                  n
                    ? n.parentNode.insertBefore(e, n)
                    : (document.head || document.body).appendChild(e),
                    (this.script = e),
                    "undefined" != typeof navigator &&
                      /gecko/i.test(navigator.userAgent) &&
                      setTimeout(function () {
                        var t = document.createElement("iframe");
                        document.body.appendChild(t),
                          document.body.removeChild(t);
                      }, 100);
                },
              },
              {
                key: "doWrite",
                value: function (t, e) {
                  var n,
                    r = this;
                  if (!this.form) {
                    var o = document.createElement("form"),
                      i = document.createElement("textarea"),
                      s = (this.iframeId = "eio_iframe_" + this.index);
                    (o.className = "socketio"),
                      (o.style.position = "absolute"),
                      (o.style.top = "-1000px"),
                      (o.style.left = "-1000px"),
                      (o.target = s),
                      (o.method = "POST"),
                      o.setAttribute("accept-charset", "utf-8"),
                      (i.name = "d"),
                      o.appendChild(i),
                      document.body.appendChild(o),
                      (this.form = o),
                      (this.area = i);
                  }
                  function c() {
                    a(), e();
                  }
                  this.form.action = this.uri();
                  var a = function () {
                    if (r.iframe)
                      try {
                        r.form.removeChild(r.iframe);
                      } catch (t) {
                        r.onError("jsonp polling iframe removal error", t);
                      }
                    try {
                      var t =
                        '<iframe src="javascript:0" name="' + r.iframeId + '">';
                      n = document.createElement(t);
                    } catch (t) {
                      ((n = document.createElement("iframe")).name =
                        r.iframeId),
                        (n.src = "javascript:0");
                    }
                    (n.id = r.iframeId), r.form.appendChild(n), (r.iframe = n);
                  };
                  a(),
                    (t = t.replace(d, "\\\n")),
                    (this.area.value = t.replace(y, "\\n"));
                  try {
                    this.form.submit();
                  } catch (t) {}
                  this.iframe.attachEvent
                    ? (this.iframe.onreadystatechange = function () {
                        "complete" === r.iframe.readyState && c();
                      })
                    : (this.iframe.onload = c);
                },
              },
              {
                key: "supportsBinary",
                get: function () {
                  return !1;
                },
              },
            ]) && o(e.prototype, n),
            r && o(e, r),
            p
          );
        })(p);
      t.exports = v;
    },
    function (t, e, n) {
      function r(t) {
        return (r =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function o(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function i(t, e) {
        return (i =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function s(t) {
        var e = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = a(t);
          if (e) {
            var o = a(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return c(this, n);
        };
      }
      function c(t, e) {
        return !e || ("object" !== r(e) && "function" != typeof e)
          ? (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })(t)
          : e;
      }
      function a(t) {
        return (a = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      var u = n(3),
        f = n(0),
        l = n(4),
        p = n(12),
        h = n(13).pick,
        y = n(29),
        d = y.WebSocket,
        v = y.usingBrowserWebSocket,
        b = y.defaultBinaryType,
        m =
          "undefined" != typeof navigator &&
          "string" == typeof navigator.product &&
          "reactnative" === navigator.product.toLowerCase(),
        g = (function (t) {
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && i(t, e);
          })(a, t);
          var e,
            n,
            r,
            c = s(a);
          function a(t) {
            var e;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, a),
              ((e = c.call(this, t)).supportsBinary = !t.forceBase64),
              e
            );
          }
          return (
            (e = a),
            (n = [
              {
                key: "doOpen",
                value: function () {
                  if (this.check()) {
                    var t = this.uri(),
                      e = this.opts.protocols,
                      n = m
                        ? {}
                        : h(
                            this.opts,
                            "agent",
                            "perMessageDeflate",
                            "pfx",
                            "key",
                            "passphrase",
                            "cert",
                            "ca",
                            "ciphers",
                            "rejectUnauthorized",
                            "localAddress",
                            "protocolVersion",
                            "origin",
                            "maxPayload",
                            "family",
                            "checkServerIdentity"
                          );
                    this.opts.extraHeaders &&
                      (n.headers = this.opts.extraHeaders);
                    try {
                      this.ws =
                        v && !m ? (e ? new d(t, e) : new d(t)) : new d(t, e, n);
                    } catch (t) {
                      return this.emit("error", t);
                    }
                    (this.ws.binaryType = this.socket.binaryType || b),
                      this.addEventListeners();
                  }
                },
              },
              {
                key: "addEventListeners",
                value: function () {
                  var t = this;
                  (this.ws.onopen = function () {
                    t.opts.autoUnref && t.ws._socket.unref(), t.onOpen();
                  }),
                    (this.ws.onclose = this.onClose.bind(this)),
                    (this.ws.onmessage = function (e) {
                      return t.onData(e.data);
                    }),
                    (this.ws.onerror = function (e) {
                      return t.onError("websocket error", e);
                    });
                },
              },
              {
                key: "write",
                value: function (t) {
                  var e = this;
                  this.writable = !1;
                  for (
                    var n = function (n) {
                        var r = t[n],
                          o = n === t.length - 1;
                        f.encodePacket(r, e.supportsBinary, function (t) {
                          var n = {};
                          v ||
                            (r.options && (n.compress = r.options.compress),
                            e.opts.perMessageDeflate &&
                              ("string" == typeof t
                                ? Buffer.byteLength(t)
                                : t.length) <
                                e.opts.perMessageDeflate.threshold &&
                              (n.compress = !1));
                          try {
                            v ? e.ws.send(t) : e.ws.send(t, n);
                          } catch (t) {}
                          o &&
                            setTimeout(function () {
                              (e.writable = !0), e.emit("drain");
                            }, 0);
                        });
                      },
                      r = 0;
                    r < t.length;
                    r++
                  )
                    n(r);
                },
              },
              {
                key: "onClose",
                value: function () {
                  u.prototype.onClose.call(this);
                },
              },
              {
                key: "doClose",
                value: function () {
                  void 0 !== this.ws && (this.ws.close(), (this.ws = null));
                },
              },
              {
                key: "uri",
                value: function () {
                  var t = this.query || {},
                    e = this.opts.secure ? "wss" : "ws",
                    n = "";
                  return (
                    this.opts.port &&
                      (("wss" === e && 443 !== Number(this.opts.port)) ||
                        ("ws" === e && 80 !== Number(this.opts.port))) &&
                      (n = ":" + this.opts.port),
                    this.opts.timestampRequests &&
                      (t[this.opts.timestampParam] = p()),
                    this.supportsBinary || (t.b64 = 1),
                    (t = l.encode(t)).length && (t = "?" + t),
                    e +
                      "://" +
                      (-1 !== this.opts.hostname.indexOf(":")
                        ? "[" + this.opts.hostname + "]"
                        : this.opts.hostname) +
                      n +
                      this.opts.path +
                      t
                  );
                },
              },
              {
                key: "check",
                value: function () {
                  return !(
                    !d ||
                    ("__initialize" in d && this.name === a.prototype.name)
                  );
                },
              },
              {
                key: "name",
                get: function () {
                  return "websocket";
                },
              },
            ]) && o(e.prototype, n),
            r && o(e, r),
            a
          );
        })(u);
      t.exports = g;
    },
    function (t, e, n) {
      var r = n(2);
      t.exports = {
        WebSocket: r.WebSocket || r.MozWebSocket,
        usingBrowserWebSocket: !0,
        defaultBinaryType: "arraybuffer",
      };
    },
    function (t, e, n) {
      "use strict";
      function r(t) {
        return (r =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.reconstructPacket = e.deconstructPacket = void 0);
      var o = n(15);
      (e.deconstructPacket = function (t) {
        var e = [],
          n = t.data,
          i = t;
        return (
          (i.data = (function t(e, n) {
            if (!e) return e;
            if (o.isBinary(e)) {
              var i = { _placeholder: !0, num: n.length };
              return n.push(e), i;
            }
            if (Array.isArray(e)) {
              for (var s = new Array(e.length), c = 0; c < e.length; c++)
                s[c] = t(e[c], n);
              return s;
            }
            if ("object" === r(e) && !(e instanceof Date)) {
              var a = {};
              for (var u in e) e.hasOwnProperty(u) && (a[u] = t(e[u], n));
              return a;
            }
            return e;
          })(n, e)),
          (i.attachments = e.length),
          { packet: i, buffers: e }
        );
      }),
        (e.reconstructPacket = function (t, e) {
          return (
            (t.data = (function t(e, n) {
              if (!e) return e;
              if (e && e._placeholder) return n[e.num];
              if (Array.isArray(e))
                for (var o = 0; o < e.length; o++) e[o] = t(e[o], n);
              else if ("object" === r(e))
                for (var i in e) e.hasOwnProperty(i) && (e[i] = t(e[i], n));
              return e;
            })(t.data, e)),
            (t.attachments = void 0),
            t
          );
        });
    },
    function (t, e) {
      function n(t) {
        (t = t || {}),
          (this.ms = t.min || 100),
          (this.max = t.max || 1e4),
          (this.factor = t.factor || 2),
          (this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0),
          (this.attempts = 0);
      }
      (t.exports = n),
        (n.prototype.duration = function () {
          var t = this.ms * Math.pow(this.factor, this.attempts++);
          if (this.jitter) {
            var e = Math.random(),
              n = Math.floor(e * this.jitter * t);
            t = 0 == (1 & Math.floor(10 * e)) ? t - n : t + n;
          }
          return 0 | Math.min(t, this.max);
        }),
        (n.prototype.reset = function () {
          this.attempts = 0;
        }),
        (n.prototype.setMin = function (t) {
          this.ms = t;
        }),
        (n.prototype.setMax = function (t) {
          this.max = t;
        }),
        (n.prototype.setJitter = function (t) {
          this.jitter = t;
        });
    },
  ]);
});
//# sourceMappingURL=socket.io.min.js.map
