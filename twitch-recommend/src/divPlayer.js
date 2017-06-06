!function (t, e) {
  "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.video = e() : (t.Twitch = t.Twitch || {}, t.Twitch.video = e())
}(this, function () {
  return function (t) {
    function e(r) {
      if (n[r])return n[r].exports;
      var o = n[r] = {exports: {}, id: r, loaded: !1};
      return t[r].call(o.exports, o, o.exports, e), o.loaded = !0, o.exports
    }

    var n = {};
    return e.m = t, e.c = n, e.p = "", e(0)
  }([function (t, e, n) {
    "use strict";
    function r(t) {
      if (t && t.__esModule)return t;
      var e = {};
      if (null != t)for (var n in t)Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
      return e.default = t, e
    }

    function o(t) {
      return t && t.__esModule ? t : {default: t}
    }

    function i(t, e) {
      if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
    }

    function u(t) {
      return (0, s.default)(t) ? document.getElementById(t) : t
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e.PlayerEmbed = void 0;
    var c = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
      }

      return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e
      }
    }(), a = n(1), s = o(a), f = n(10), l = r(f), p = e.PlayerEmbed = function () {
      function t(e, n) {
        i(this, t), this._bridge = new l.EmbedClient(u(e), n)
      }

      return c(t, [{
        key: "play", value: function () {
          this._bridge.callPlayerMethod(l.METHOD_PLAY)
        }
      }, {
        key: "pause", value: function () {
          this._bridge.callPlayerMethod(l.METHOD_PAUSE)
        }
      }, {
        key: "seek", value: function (t) {
          this._bridge.callPlayerMethod(l.METHOD_SEEK, t)
        }
      }, {
        key: "setVolume", value: function (t) {
          this._bridge.callPlayerMethod(l.METHOD_SET_VOLUME, t)
        }
      }, {
        key: "setMuted", value: function (t) {
          this._bridge.callPlayerMethod(l.METHOD_SET_MUTE, t)
        }
      }, {
        key: "setChannel", value: function (t) {
          this._bridge.callPlayerMethod(l.METHOD_SET_CHANNEL, t)
        }
      }, {
        key: "setCollection", value: function (t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
          this._bridge.callPlayerMethod(l.METHOD_SET_COLLECTION, t, e)
        }
      }, {
        key: "setVideo", value: function (t) {
          this._bridge.callPlayerMethod(l.METHOD_SET_VIDEO, t)
        }
      }, {
        key: "setQuality", value: function (t) {
          this._bridge.callPlayerMethod(l.METHOD_SET_QUALITY, t)
        }
      }, {
        key: "setWidth", value: function (t) {
          this._bridge.setWidth(t)
        }
      }, {
        key: "setHeight", value: function (t) {
          this._bridge.setHeight(t)
        }
      }, {
        key: "addEventListener", value: function (t, e) {
          this._bridge.addEventListener(t, e)
        }
      }, {
        key: "removeEventListener", value: function (t, e) {
          this._bridge.removeEventListener(t, e)
        }
      }, {
        key: "getChannel", value: function () {
          return this._bridge.getPlayerState().channelName
        }
      }, {
        key: "getCurrentTime", value: function () {
          return this._bridge.getPlayerState().currentTime
        }
      }, {
        key: "getDuration", value: function () {
          return this._bridge.getPlayerState().duration
        }
      }, {
        key: "getEnded", value: function () {
          return this._bridge.getPlayerState().playback === l.PLAYBACK_ENDED
        }
      }, {
        key: "getMuted", value: function () {
          return this._bridge.getPlayerState().muted
        }
      }, {
        key: "getPlaybackStats", value: function () {
          return this._bridge.getStoreState().stats.videoStats
        }
      }, {
        key: "getPlaySessionId", value: function () {
          return this._bridge.getStoreState().playSessionId
        }
      }, {
        key: "isPaused", value: function () {
          return this._bridge.getPlayerState().playback === l.PLAYBACK_PAUSED
        }
      }, {
        key: "getQuality", value: function () {
          return this._bridge.getPlayerState().quality
        }
      }, {
        key: "getQualities", value: function () {
          return this._bridge.getPlayerState().qualitiesAvailable
        }
      }, {
        key: "getViewers", value: function () {
          return this._bridge.getStoreState().viewercount
        }
      }, {
        key: "getVideo", value: function () {
          return this._bridge.getPlayerState().videoID
        }
      }, {
        key: "getVolume", value: function () {
          return this._bridge.getPlayerState().volume
        }
      }, {
        key: "destroy", value: function () {
          this._bridge.destroy()
        }
      }], [{
        key: "READY", get: function () {
          return l.EVENT_EMBED_READY
        }
      }, {
        key: "PLAY", get: function () {
          return l.EVENT_EMBED_PLAY
        }
      }, {
        key: "PAUSE", get: function () {
          return l.EVENT_EMBED_PAUSE
        }
      }, {
        key: "ENDED", get: function () {
          return l.EVENT_EMBED_ENDED
        }
      }, {
        key: "ONLINE", get: function () {
          return l.EVENT_EMBED_ONLINE
        }
      }, {
        key: "OFFLINE", get: function () {
          return l.EVENT_EMBED_OFFLINE
        }
      }]), t
    }();
    window.Twitch = window.Twitch || {}, window.Twitch.Player = p
  }, function (t, e, n) {
    function r(t) {
      return "string" == typeof t || !i(t) && u(t) && o(t) == c
    }

    var o = n(2), i = n(8), u = n(9), c = "[object String]";
    t.exports = r
  }, function (t, e, n) {
    function r(t) {
      return null == t ? void 0 === t ? a : c : s && s in Object(t) ? i(t) : u(t)
    }

    var o = n(3), i = n(6), u = n(7), c = "[object Null]", a = "[object Undefined]", s = o ? o.toStringTag : void 0;
    t.exports = r
  }, function (t, e, n) {
    var r = n(4), o = r.Symbol;
    t.exports = o
  }, function (t, e, n) {
    var r = n(5), o = "object" == typeof self && self && self.Object === Object && self, i = r || o || Function("return this")();
    t.exports = i
  }, function (t, e) {
    (function (e) {
      var n = "object" == typeof e && e && e.Object === Object && e;
      t.exports = n
    }).call(e, function () {
      return this
    }())
  }, function (t, e, n) {
    function r(t) {
      var e = u.call(t, a), n = t[a];
      try {
        t[a] = void 0;
        var r = !0
      } catch (t) {
      }
      var o = c.call(t);
      return r && (e ? t[a] = n : delete t[a]), o
    }

    var o = n(3), i = Object.prototype, u = i.hasOwnProperty, c = i.toString, a = o ? o.toStringTag : void 0;
    t.exports = r
  }, function (t, e) {
    function n(t) {
      return o.call(t)
    }

    var r = Object.prototype, o = r.toString;
    t.exports = n
  }, function (t, e) {
    var n = Array.isArray;
    t.exports = n
  }, function (t, e) {
    function n(t) {
      return null != t && "object" == typeof t
    }

    t.exports = n
  }, function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule ? t : {default: t}
    }

    function o(t, e) {
      if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
    }

    function i(t) {
      var e = (0, h.toString)((0, f.default)(t, "width", "height")), n = y + "/?" + e, r = document.createElement("iframe");
      return r.setAttribute("src", n), t.allowfullscreen !== !1 && r.setAttribute("allowfullscreen", ""), t.width && r.setAttribute("width", t.width), t.height && r.setAttribute("height", t.height), r.setAttribute("frameBorder", "0"), r.setAttribute("scrolling", "no"), r
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e.EmbedClient = e.PLAYBACK_ENDED = e.PLAYBACK_PLAYING = e.PLAYBACK_PAUSED = e.BRIDGE_DESTROY = e.BRIDGE_CLIENT_NAMESPACE = e.BRIDGE_HOST_NAMESPACE = e.BRIDGE_DOCUMENT_EVENT = e.BRIDGE_PLAYER_EVENT = e.BRIDGE_STORE_STATE_UPDATE = e.BRIDGE_STATE_UPDATE = e.BRIDGE_HOST_READY = e.BRIDGE_REQ_SUBSCRIBE = e.METHOD_DESTROY = e.METHOD_SET_VOLUME = e.METHOD_SET_MUTE = e.METHOD_SET_QUALITY = e.METHOD_SEEK = e.METHOD_SET_COLLECTION = e.METHOD_SET_VIDEO = e.METHOD_SET_CHANNEL = e.METHOD_PAUSE = e.METHOD_PLAY = e.EVENT_EMBED_VIEWERS_CHANGE = e.EVENT_EMBED_OFFLINE = e.EVENT_EMBED_ONLINE = e.EVENT_EMBED_ENDED = e.EVENT_EMBED_PAUSE = e.EVENT_EMBED_PLAY = e.EVENT_EMBED_READY = void 0;
    var u = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
      }

      return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e
      }
    }(), c = n(11), a = r(c), s = n(12), f = r(s), l = n(144), p = r(l), v = n(145), h = n(146), _ = n(147), y = function () {
      var t = "https://player.twitch.tv";
      if (document.currentScript)t = document.currentScript.src; else {
        var e = Array.prototype.filter.call(document.scripts, function (t) {
          return /twitch\.tv.*embed/.test(t.src)
        });
        t = e.length > 0 ? e[0].src : document.scripts[document.scripts.length - 1].src
      }
      var n = (0, v.parseUri)(t);
      return n.protocol + "://" + n.authority
    }(), d = 15e3, E = {
      channelName: "",
      currentTime: 0,
      duration: 0,
      muted: !1,
      playback: "",
      quality: "",
      qualitiesAvailable: [],
      stats: {},
      videoID: "",
      viewers: 0,
      volume: 0
    }, b = e.EVENT_EMBED_READY = "ready", g = (e.EVENT_EMBED_PLAY = "play", e.EVENT_EMBED_PAUSE = "pause", e.EVENT_EMBED_ENDED = "ended", e.EVENT_EMBED_ONLINE = "online", e.EVENT_EMBED_OFFLINE = "offline", e.EVENT_EMBED_VIEWERS_CHANGE = "viewerschange", e.METHOD_PLAY = "play", e.METHOD_PAUSE = "pause", e.METHOD_SET_CHANNEL = "channel", e.METHOD_SET_VIDEO = "video", e.METHOD_SET_COLLECTION = "collection", e.METHOD_SEEK = "seek", e.METHOD_SET_QUALITY = "quality", e.METHOD_SET_MUTE = "mute", e.METHOD_SET_VOLUME = "volume", e.METHOD_DESTROY = "destroy"), m = e.BRIDGE_REQ_SUBSCRIBE = "subscribe", x = e.BRIDGE_HOST_READY = "ready", j = e.BRIDGE_STATE_UPDATE = "bridgestateupdate", A = e.BRIDGE_STORE_STATE_UPDATE = "bridgestorestateupdate", w = e.BRIDGE_PLAYER_EVENT = "bridgeplayerevent", T = (e.BRIDGE_DOCUMENT_EVENT = "bridgedocumentevent", e.BRIDGE_HOST_NAMESPACE = "player.embed.host"), O = e.BRIDGE_CLIENT_NAMESPACE = "player.embed.client", S = e.BRIDGE_DESTROY = "bridgedestroy";
    e.PLAYBACK_PAUSED = "paused", e.PLAYBACK_PLAYING = "playing", e.PLAYBACK_ENDED = "ended", e.EmbedClient = function () {
      function t(e, n) {
        o(this, t), this._eventEmitter = new p.default, this._playerState = E, this._storeState = {}, this._onHostReady = this._getHostReady(), this._iframe = i(n), e.appendChild(this._iframe), this._host = this._iframe.contentWindow, this._send(m)
      }

      return u(t, [{
        key: "destroy", value: function () {
          this.callPlayerMethod(g)
        }
      }, {
        key: "_getHostReady", value: function () {
          var t = this;
          return new _.Promise(function (e, n) {
            function r(t) {
              this._isClientMessage(t) && t.data.method === x && (window.removeEventListener("message", o), window.addEventListener("message", this), this._eventEmitter.emit(b), e())
            }

            var o = r.bind(t);
            window.addEventListener("message", o), setTimeout(n, d)
          })
        }
      }, {
        key: "_send", value: function (t) {
          for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)n[r - 1] = arguments[r];
          var o = {namespace: T, method: t, args: n};
          this._host.postMessage(o, "*")
        }
      }, {
        key: "_deferSend", value: function () {
          for (var t = this, e = arguments.length, n = Array(e), r = 0; r < e; r++)n[r] = arguments[r];
          this._onHostReady.then(function () {
            return t._send.apply(t, n)
          })
        }
      }, {
        key: "_isClientMessage", value: function (t) {
          return !!this._iframe && (Boolean(t.data) && t.data.namespace === O && t.source === this._iframe.contentWindow)
        }
      }, {
        key: "handleEvent", value: function (t) {
          if (this._isClientMessage(t))switch (t.data.method) {
            case j:
              this._playerState = t.data.args[0];
              break;
            case w:
              this._eventEmitter.emit(t.data.args[0]);
              break;
            case A:
              this._storeState = t.data.args[0];
              break;
            case S:
              this._iframe.parentNode.removeChild(this._iframe), delete this._iframe, delete this._host
          }
        }
      }, {
        key: "getPlayerState", value: function () {
          return this._playerState
        }
      }, {
        key: "getStoreState", value: function () {
          return this._storeState
        }
      }, {
        key: "addEventListener", value: function (t, e) {
          this._eventEmitter.on(t, e)
        }
      }, {
        key: "removeEventListener", value: function (t, e) {
          this._eventEmitter.off(t, e)
        }
      }, {
        key: "callPlayerMethod", value: function (t) {
          for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)n[r - 1] = arguments[r];
          this._deferSend.apply(this, [t].concat(n))
        }
      }, {
        key: "setWidth", value: function (t) {
          (0, a.default)(t) && t >= 0 && this._iframe.setAttribute("width", t)
        }
      }, {
        key: "setHeight", value: function (t) {
          (0, a.default)(t) && t >= 0 && this._iframe.setAttribute("height", t)
        }
      }]), t
    }()
  }, function (t, e, n) {
    function r(t) {
      return "number" == typeof t && i(t)
    }

    var o = n(4), i = o.isFinite;
    t.exports = r
  }, function (t, e, n) {
    var r = n(13), o = n(14), i = n(117), u = n(118), c = n(58), a = n(131), s = n(133), f = n(94), l = 1, p = 2, v = 4, h = s(function (t, e) {
      var n = {};
      if (null == t)return n;
      var s = !1;
      e = r(e, function (e) {
        return e = u(e, t), s || (s = e.length > 1), e
      }), c(t, f(t), n), s && (n = o(n, l | p | v, a));
      for (var h = e.length; h--;)i(n, e[h]);
      return n
    });
    t.exports = h
  }, function (t, e) {
    function n(t, e) {
      for (var n = -1, r = null == t ? 0 : t.length, o = Array(r); ++n < r;)o[n] = e(t[n], n, t);
      return o
    }

    t.exports = n
  }, function (t, e, n) {
    function r(t, e, n, O, S, D) {
      var P, k = e & j, N = e & A, B = e & w;
      if (n && (P = S ? n(t, O, S, D) : n(t)), void 0 !== P)return P;
      if (!m(t))return t;
      var C = b(t);
      if (C) {
        if (P = y(t), !k)return f(t, P)
      } else {
        var R = _(t), U = R == M || R == L;
        if (g(t))return s(t, k);
        if (R == I || R == T || U && !S) {
          if (P = N || U ? {} : E(t), !k)return N ? p(t, a(P, t)) : l(t, c(P, t))
        } else {
          if (!X[R])return S ? t : {};
          P = d(t, R, r, k)
        }
      }
      D || (D = new o);
      var V = D.get(t);
      if (V)return V;
      D.set(t, P);
      var H = B ? N ? h : v : N ? keysIn : x, Y = C ? void 0 : H(t);
      return i(Y || t, function (o, i) {
        Y && (i = o, o = t[i]), u(P, i, r(o, e, n, i, t, D))
      }), P
    }

    var o = n(15), i = n(53), u = n(54), c = n(57), a = n(78), s = n(82), f = n(83), l = n(84), p = n(88), v = n(92), h = n(94), _ = n(95), y = n(100), d = n(101), E = n(115), b = n(8), g = n(64), m = n(33), x = n(59), j = 1, A = 2, w = 4, T = "[object Arguments]", O = "[object Array]", S = "[object Boolean]", D = "[object Date]", P = "[object Error]", M = "[object Function]", L = "[object GeneratorFunction]", k = "[object Map]", N = "[object Number]", I = "[object Object]", B = "[object RegExp]", C = "[object Set]", R = "[object String]", U = "[object Symbol]", V = "[object WeakMap]", H = "[object ArrayBuffer]", Y = "[object DataView]", F = "[object Float32Array]", G = "[object Float64Array]", z = "[object Int8Array]", K = "[object Int16Array]", $ = "[object Int32Array]", W = "[object Uint8Array]", q = "[object Uint8ClampedArray]", Q = "[object Uint16Array]", J = "[object Uint32Array]", X = {};
    X[T] = X[O] = X[H] = X[Y] = X[S] = X[D] = X[F] = X[G] = X[z] = X[K] = X[$] = X[k] = X[N] = X[I] = X[B] = X[C] = X[R] = X[U] = X[W] = X[q] = X[Q] = X[J] = !0, X[P] = X[M] = X[V] = !1, t.exports = r
  }, function (t, e, n) {
    function r(t) {
      var e = this.__data__ = new o(t);
      this.size = e.size
    }

    var o = n(16), i = n(24), u = n(25), c = n(26), a = n(27), s = n(28);
    r.prototype.clear = i, r.prototype.delete = u, r.prototype.get = c, r.prototype.has = a, r.prototype.set = s, t.exports = r
  }, function (t, e, n) {
    function r(t) {
      var e = -1, n = null == t ? 0 : t.length;
      for (this.clear(); ++e < n;) {
        var r = t[e];
        this.set(r[0], r[1])
      }
    }

    var o = n(17), i = n(18), u = n(21), c = n(22), a = n(23);
    r.prototype.clear = o, r.prototype.delete = i, r.prototype.get = u, r.prototype.has = c, r.prototype.set = a, t.exports = r
  }, function (t, e) {
    function n() {
      this.__data__ = [], this.size = 0
    }

    t.exports = n
  }, function (t, e, n) {
    function r(t) {
      var e = this.__data__, n = o(e, t);
      if (n < 0)return !1;
      var r = e.length - 1;
      return n == r ? e.pop() : u.call(e, n, 1), --this.size, !0
    }

    var o = n(19), i = Array.prototype, u = i.splice;
    t.exports = r
  }, function (t, e, n) {
    function r(t, e) {
      for (var n = t.length; n--;)if (o(t[n][0], e))return n;
      return -1
    }

    var o = n(20);
    t.exports = r
  }, function (t, e) {
    function n(t, e) {
      return t === e || t !== t && e !== e
    }

    t.exports = n
  }, function (t, e, n) {
    function r(t) {
      var e = this.__data__, n = o(e, t);
      return n < 0 ? void 0 : e[n][1]
    }

    var o = n(19);
    t.exports = r
  }, function (t, e, n) {
    function r(t) {
      return o(this.__data__, t) > -1
    }

    var o = n(19);
    t.exports = r
  }, function (t, e, n) {
    function r(t, e) {
      var n = this.__data__, r = o(n, t);
      return r < 0 ? (++this.size, n.push([t, e])) : n[r][1] = e, this
    }

    var o = n(19);
    t.exports = r
  }, function (t, e, n) {
    function r() {
      this.__data__ = new o, this.size = 0
    }

    var o = n(16);
    t.exports = r
  }, function (t, e) {
    function n(t) {
      var e = this.__data__, n = e.delete(t);
      return this.size = e.size, n
    }

    t.exports = n
  }, function (t, e) {
    function n(t) {
      return this.__data__.get(t)
    }

    t.exports = n
  }, function (t, e) {
    function n(t) {
      return this.__data__.has(t)
    }

    t.exports = n
  }, function (t, e, n) {
    function r(t, e) {
      var n = this.__data__;
      if (n instanceof o) {
        var r = n.__data__;
        if (!i || r.length < c - 1)return r.push([t, e]), this.size = ++n.size, this;
        n = this.__data__ = new u(r)
      }
      return n.set(t, e), this.size = n.size, this
    }

    var o = n(16), i = n(29), u = n(38), c = 200;
    t.exports = r
  }, function (t, e, n) {
    var r = n(30), o = n(4), i = r(o, "Map");
    t.exports = i
  }, function (t, e, n) {
    function r(t, e) {
      var n = i(t, e);
      return o(n) ? n : void 0
    }

    var o = n(31), i = n(37);
    t.exports = r
  }, function (t, e, n) {
    function r(t) {
      if (!u(t) || i(t))return !1;
      var e = o(t) ? h : s;
      return e.test(c(t))
    }

    var o = n(32), i = n(34), u = n(33), c = n(36), a = /[\\^$.*+?()[\]{}|]/g, s = /^\[object .+?Constructor\]$/, f = Function.prototype, l = Object.prototype, p = f.toString, v = l.hasOwnProperty, h = RegExp("^" + p.call(v).replace(a, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    t.exports = r
  }, function (t, e, n) {
    function r(t) {
      if (!i(t))return !1;
      var e = o(t);
      return e == c || e == a || e == u || e == s
    }

    var o = n(2), i = n(33), u = "[object AsyncFunction]", c = "[object Function]", a = "[object GeneratorFunction]", s = "[object Proxy]";
    t.exports = r
  }, function (t, e) {
    function n(t) {
      var e = typeof t;
      return null != t && ("object" == e || "function" == e)
    }

    t.exports = n
  }, function (t, e, n) {
    function r(t) {
      return !!i && i in t
    }

    var o = n(35), i = function () {
      var t = /[^.]+$/.exec(o && o.keys && o.keys.IE_PROTO || "");
      return t ? "Symbol(src)_1." + t : ""
    }();
    t.exports = r
  }, function (t, e, n) {
    var r = n(4), o = r["__core-js_shared__"];
    t.exports = o
  }, function (t, e) {
    function n(t) {
      if (null != t) {
        try {
          return o.call(t)
        } catch (t) {
        }
        try {
          return t + ""
        } catch (t) {
        }
      }
      return ""
    }

    var r = Function.prototype, o = r.toString;
    t.exports = n
  }, function (t, e) {
    function n(t, e) {
      return null == t ? void 0 : t[e]
    }

    t.exports = n
  }, function (t, e, n) {
    function r(t) {
      var e = -1, n = null == t ? 0 : t.length;
      for (this.clear(); ++e < n;) {
        var r = t[e];
        this.set(r[0], r[1])
      }
    }

    var o = n(39), i = n(47), u = n(50), c = n(51), a = n(52);
    r.prototype.clear = o, r.prototype.delete = i, r.prototype.get = u, r.prototype.has = c, r.prototype.set = a, t.exports = r
  }, function (t, e, n) {
    function r() {
      this.size = 0, this.__data__ = {hash: new o, map: new (u || i), string: new o}
    }

    var o = n(40), i = n(16), u = n(29);
    t.exports = r
  }, function (t, e, n) {
    function r(t) {
      var e = -1, n = null == t ? 0 : t.length;
      for (this.clear(); ++e < n;) {
        var r = t[e];
        this.set(r[0], r[1])
      }
    }

    var o = n(41), i = n(43), u = n(44), c = n(45), a = n(46);
    r.prototype.clear = o, r.prototype.delete = i, r.prototype.get = u, r.prototype.has = c, r.prototype.set = a, t.exports = r
  }, function (t, e, n) {
    function r() {
      this.__data__ = o ? o(null) : {}, this.size = 0
    }

    var o = n(42);
    t.exports = r
  }, function (t, e, n) {
    var r = n(30), o = r(Object, "create");
    t.exports = o
  }, function (t, e) {
    function n(t) {
      var e = this.has(t) && delete this.__data__[t];
      return this.size -= e ? 1 : 0, e
    }

    t.exports = n
  }, function (t, e, n) {
    function r(t) {
      var e = this.__data__;
      if (o) {
        var n = e[t];
        return n === i ? void 0 : n
      }
      return c.call(e, t) ? e[t] : void 0
    }

    var o = n(42), i = "__lodash_hash_undefined__", u = Object.prototype, c = u.hasOwnProperty;
    t.exports = r
  }, function (t, e, n) {
    function r(t) {
      var e = this.__data__;
      return o ? void 0 !== e[t] : u.call(e, t)
    }

    var o = n(42), i = Object.prototype, u = i.hasOwnProperty;
    t.exports = r
  }, function (t, e, n) {
    function r(t, e) {
      var n = this.__data__;
      return this.size += this.has(t) ? 0 : 1, n[t] = o && void 0 === e ? i : e, this
    }

    var o = n(42), i = "__lodash_hash_undefined__";
    t.exports = r
  }, function (t, e, n) {
    function r(t) {
      var e = o(this, t).delete(t);
      return this.size -= e ? 1 : 0, e
    }

    var o = n(48);
    t.exports = r
  }, function (t, e, n) {
    function r(t, e) {
      var n = t.__data__;
      return o(e) ? n["string" == typeof e ? "string" : "hash"] : n.map
    }

    var o = n(49);
    t.exports = r
  }, function (t, e) {
    function n(t) {
      var e = typeof t;
      return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
    }

    t.exports = n
  }, function (t, e, n) {
    function r(t) {
      return o(this, t).get(t)
    }

    var o = n(48);
    t.exports = r
  }, function (t, e, n) {
    function r(t) {
      return o(this, t).has(t)
    }

    var o = n(48);
    t.exports = r
  }, function (t, e, n) {
    function r(t, e) {
      var n = o(this, t), r = n.size;
      return n.set(t, e), this.size += n.size == r ? 0 : 1, this
    }

    var o = n(48);
    t.exports = r
  }, function (t, e) {
    function n(t, e) {
      for (var n = -1, r = null == t ? 0 : t.length; ++n < r && e(t[n], n, t) !== !1;);
      return t
    }

    t.exports = n
  }, function (t, e, n) {
    function r(t, e, n) {
      var r = t[e];
      c.call(t, e) && i(r, n) && (void 0 !== n || e in t) || o(t, e, n)
    }

    var o = n(55), i = n(20), u = Object.prototype, c = u.hasOwnProperty;
    t.exports = r
  }, function (t, e, n) {
    function r(t, e, n) {
      "__proto__" == e && o ? o(t, e, {configurable: !0, enumerable: !0, value: n, writable: !0}) : t[e] = n
    }

    var o = n(56);
    t.exports = r
  }, function (t, e, n) {
    var r = n(30), o = function () {
      try {
        var t = r(Object, "defineProperty");
        return t({}, "", {}), t
      } catch (t) {
      }
    }();
    t.exports = o
  }, function (t, e, n) {
    function r(t, e) {
      return t && o(e, i(e), t)
    }

    var o = n(58), i = n(59);
    t.exports = r
  }, function (t, e, n) {
    function r(t, e, n, r) {
      var u = !n;
      n || (n = {});
      for (var c = -1, a = e.length; ++c < a;) {
        var s = e[c], f = r ? r(n[s], t[s], s, n, t) : void 0;
        void 0 === f && (f = t[s]), u ? i(n, s, f) : o(n, s, f)
      }
      return n
    }

    var o = n(54), i = n(55);
    t.exports = r
  }, function (t, e, n) {
    function r(t) {
      return u(t) ? o(t) : i(t)
    }

    var o = n(60), i = n(73), u = n(77);
    t.exports = r
  }, function (t, e, n) {
    function r(t, e) {
      var n = u(t), r = !n && i(t), f = !n && !r && c(t), p = !n && !r && !f && s(t), v = n || r || f || p, h = v ? o(t.length, String) : [], _ = h.length;
      for (var y in t)!e && !l.call(t, y) || v && ("length" == y || f && ("offset" == y || "parent" == y) || p && ("buffer" == y || "byteLength" == y || "byteOffset" == y) || a(y, _)) || h.push(y);
      return h
    }

    var o = n(61), i = n(62), u = n(8), c = n(64), a = n(67), s = n(68), f = Object.prototype, l = f.hasOwnProperty;
    t.exports = r
  }, function (t, e) {
    function n(t, e) {
      for (var n = -1, r = Array(t); ++n < t;)r[n] = e(n);
      return r
    }

    t.exports = n
  }, function (t, e, n) {
    var r = n(63), o = n(9), i = Object.prototype, u = i.hasOwnProperty, c = i.propertyIsEnumerable, a = r(function () {
      return arguments
    }()) ? r : function (t) {
      return o(t) && u.call(t, "callee") && !c.call(t, "callee")
    };
    t.exports = a
  }, function (t, e, n) {
    function r(t) {
      return i(t) && o(t) == u
    }

    var o = n(2), i = n(9), u = "[object Arguments]";
    t.exports = r
  }, function (t, e, n) {
    (function (t) {
      var r = n(4), o = n(66), i = "object" == typeof e && e && !e.nodeType && e, u = i && "object" == typeof t && t && !t.nodeType && t, c = u && u.exports === i, a = c ? r.Buffer : void 0, s = a ? a.isBuffer : void 0, f = s || o;
      t.exports = f
    }).call(e, n(65)(t))
  }, function (t, e) {
    t.exports = function (t) {
      return t.webpackPolyfill || (t.deprecate = function () {
      }, t.paths = [], t.children = [], t.webpackPolyfill = 1), t
    }
  }, function (t, e) {
    function n() {
      return !1
    }

    t.exports = n
  }, function (t, e) {
    function n(t, e) {
      return e = null == e ? r : e, !!e && ("number" == typeof t || o.test(t)) && t > -1 && t % 1 == 0 && t < e
    }

    var r = 9007199254740991, o = /^(?:0|[1-9]\d*)$/;
    t.exports = n
  }, function (t, e, n) {
    var r = n(69), o = n(71), i = n(72), u = i && i.isTypedArray, c = u ? o(u) : r;
    t.exports = c
  }, function (t, e, n) {
    function r(t) {
      return u(t) && i(t.length) && !!M[o(t)]
    }

    var o = n(2), i = n(70), u = n(9), c = "[object Arguments]", a = "[object Array]", s = "[object Boolean]", f = "[object Date]", l = "[object Error]", p = "[object Function]", v = "[object Map]", h = "[object Number]", _ = "[object Object]", y = "[object RegExp]", d = "[object Set]", E = "[object String]", b = "[object WeakMap]", g = "[object ArrayBuffer]", m = "[object DataView]", x = "[object Float32Array]", j = "[object Float64Array]", A = "[object Int8Array]", w = "[object Int16Array]", T = "[object Int32Array]", O = "[object Uint8Array]", S = "[object Uint8ClampedArray]", D = "[object Uint16Array]", P = "[object Uint32Array]", M = {};
    M[x] = M[j] = M[A] = M[w] = M[T] = M[O] = M[S] = M[D] = M[P] = !0, M[c] = M[a] = M[g] = M[s] = M[m] = M[f] = M[l] = M[p] = M[v] = M[h] = M[_] = M[y] = M[d] = M[E] = M[b] = !1, t.exports = r
  }, function (t, e) {
    function n(t) {
      return "number" == typeof t && t > -1 && t % 1 == 0 && t <= r
    }

    var r = 9007199254740991;
    t.exports = n
  }, function (t, e) {
    function n(t) {
      return function (e) {
        return t(e)
      }
    }

    t.exports = n
  }, function (t, e, n) {
    (function (t) {
      var r = n(5), o = "object" == typeof e && e && !e.nodeType && e, i = o && "object" == typeof t && t && !t.nodeType && t, u = i && i.exports === o, c = u && r.process, a = function () {
        try {
          return c && c.binding && c.binding("util")
        } catch (t) {
        }
      }();
      t.exports = a
    }).call(e, n(65)(t))
  }, function (t, e, n) {
    function r(t) {
      if (!o(t))return i(t);
      var e = [];
      for (var n in Object(t))c.call(t, n) && "constructor" != n && e.push(n);
      return e
    }

    var o = n(74), i = n(75), u = Object.prototype, c = u.hasOwnProperty;
    t.exports = r
  }, function (t, e) {
    function n(t) {
      var e = t && t.constructor, n = "function" == typeof e && e.prototype || r;
      return t === n
    }

    var r = Object.prototype;
    t.exports = n
  }, function (t, e, n) {
    var r = n(76), o = r(Object.keys, Object);
    t.exports = o
  }, function (t, e) {
    function n(t, e) {
      return function (n) {
        return t(e(n))
      }
    }

    t.exports = n
  }, function (t, e, n) {
    function r(t) {
      return null != t && i(t.length) && !o(t)
    }

    var o = n(32), i = n(70);
    t.exports = r
  }, function (t, e, n) {
    function r(t, e) {
      return t && o(e, i(e), t)
    }

    var o = n(58), i = n(79);
    t.exports = r
  }, function (t, e, n) {
    function r(t) {
      return u(t) ? o(t, !0) : i(t)
    }

    var o = n(60), i = n(80), u = n(77);
    t.exports = r
  }, function (t, e, n) {
    function r(t) {
      if (!o(t))return u(t);
      var e = i(t), n = [];
      for (var r in t)("constructor" != r || !e && a.call(t, r)) && n.push(r);
      return n
    }

    var o = n(33), i = n(74), u = n(81), c = Object.prototype, a = c.hasOwnProperty;
    t.exports = r
  }, function (t, e) {
    function n(t) {
      var e = [];
      if (null != t)for (var n in Object(t))e.push(n);
      return e
    }

    t.exports = n
  }, function (t, e, n) {
    (function (t) {
      function r(t, e) {
        if (e)return t.slice();
        var n = t.length, r = s ? s(n) : new t.constructor(n);
        return t.copy(r), r
      }

      var o = n(4), i = "object" == typeof e && e && !e.nodeType && e, u = i && "object" == typeof t && t && !t.nodeType && t, c = u && u.exports === i, a = c ? o.Buffer : void 0, s = a ? a.allocUnsafe : void 0;
      t.exports = r
    }).call(e, n(65)(t))
  }, function (t, e) {
    function n(t, e) {
      var n = -1, r = t.length;
      for (e || (e = Array(r)); ++n < r;)e[n] = t[n];
      return e
    }

    t.exports = n
  }, function (t, e, n) {
    function r(t, e) {
      return o(t, i(t), e)
    }

    var o = n(58), i = n(85);
    t.exports = r
  }, function (t, e, n) {
    var r = n(86), o = n(87), i = Object.prototype, u = i.propertyIsEnumerable, c = Object.getOwnPropertySymbols, a = c ? function (t) {
      return null == t ? [] : (t = Object(t), r(c(t), function (e) {
        return u.call(t, e)
      }))
    } : o;
    t.exports = a
  }, function (t, e) {
    function n(t, e) {
      for (var n = -1, r = null == t ? 0 : t.length, o = 0, i = []; ++n < r;) {
        var u = t[n];
        e(u, n, t) && (i[o++] = u)
      }
      return i
    }

    t.exports = n
  }, function (t, e) {
    function n() {
      return []
    }

    t.exports = n
  }, function (t, e, n) {
    function r(t, e) {
      return o(t, i(t), e)
    }

    var o = n(58), i = n(89);
    t.exports = r
  }, function (t, e, n) {
    var r = n(90), o = n(91), i = n(85), u = n(87), c = Object.getOwnPropertySymbols, a = c ? function (t) {
      for (var e = []; t;)r(e, i(t)), t = o(t);
      return e
    } : u;
    t.exports = a
  }, function (t, e) {
    function n(t, e) {
      for (var n = -1, r = e.length, o = t.length; ++n < r;)t[o + n] = e[n];
      return t
    }

    t.exports = n
  }, function (t, e, n) {
    var r = n(76), o = r(Object.getPrototypeOf, Object);
    t.exports = o
  }, function (t, e, n) {
    function r(t) {
      return o(t, u, i)
    }

    var o = n(93), i = n(85), u = n(59);
    t.exports = r
  }, function (t, e, n) {
    function r(t, e, n) {
      var r = e(t);
      return i(t) ? r : o(r, n(t))
    }

    var o = n(90), i = n(8);
    t.exports = r
  }, function (t, e, n) {
    function r(t) {
      return o(t, u, i)
    }

    var o = n(93), i = n(89), u = n(79);
    t.exports = r
  }, function (t, e, n) {
    var r = n(96), o = n(29), i = n(97), u = n(98), c = n(99), a = n(2), s = n(36), f = "[object Map]", l = "[object Object]", p = "[object Promise]", v = "[object Set]", h = "[object WeakMap]", _ = "[object DataView]", y = s(r), d = s(o), E = s(i), b = s(u), g = s(c), m = a;
    (r && m(new r(new ArrayBuffer(1))) != _ || o && m(new o) != f || i && m(i.resolve()) != p || u && m(new u) != v || c && m(new c) != h) && (m = function (t) {
      var e = a(t), n = e == l ? t.constructor : void 0, r = n ? s(n) : "";
      if (r)switch (r) {
        case y:
          return _;
        case d:
          return f;
        case E:
          return p;
        case b:
          return v;
        case g:
          return h
      }
      return e
    }), t.exports = m
  }, function (t, e, n) {
    var r = n(30), o = n(4), i = r(o, "DataView");
    t.exports = i
  }, function (t, e, n) {
    var r = n(30), o = n(4), i = r(o, "Promise");
    t.exports = i
  }, function (t, e, n) {
    var r = n(30), o = n(4), i = r(o, "Set");
    t.exports = i
  }, function (t, e, n) {
    var r = n(30), o = n(4), i = r(o, "WeakMap");
    t.exports = i
  }, function (t, e) {
    function n(t) {
      var e = t.length, n = t.constructor(e);
      return e && "string" == typeof t[0] && o.call(t, "index") && (n.index = t.index, n.input = t.input), n
    }

    var r = Object.prototype, o = r.hasOwnProperty;
    t.exports = n
  }, function (t, e, n) {
    function r(t, e, n, r) {
      var P = t.constructor;
      switch (e) {
        case b:
          return o(t);
        case l:
        case p:
          return new P(+t);
        case g:
          return i(t, r);
        case m:
        case x:
        case j:
        case A:
        case w:
        case T:
        case O:
        case S:
        case D:
          return f(t, r);
        case v:
          return u(t, r, n);
        case h:
        case d:
          return new P(t);
        case _:
          return c(t);
        case y:
          return a(t, r, n);
        case E:
          return s(t)
      }
    }

    var o = n(102), i = n(104), u = n(105), c = n(109), a = n(110), s = n(113), f = n(114), l = "[object Boolean]", p = "[object Date]", v = "[object Map]", h = "[object Number]", _ = "[object RegExp]", y = "[object Set]", d = "[object String]", E = "[object Symbol]", b = "[object ArrayBuffer]", g = "[object DataView]", m = "[object Float32Array]", x = "[object Float64Array]", j = "[object Int8Array]", A = "[object Int16Array]", w = "[object Int32Array]", T = "[object Uint8Array]", O = "[object Uint8ClampedArray]", S = "[object Uint16Array]", D = "[object Uint32Array]";
    t.exports = r
  }, function (t, e, n) {
    function r(t) {
      var e = new t.constructor(t.byteLength);
      return new o(e).set(new o(t)), e
    }

    var o = n(103);
    t.exports = r
  }, function (t, e, n) {
    var r = n(4), o = r.Uint8Array;
    t.exports = o
  }, function (t, e, n) {
    function r(t, e) {
      var n = e ? o(t.buffer) : t.buffer;
      return new t.constructor(n, t.byteOffset, t.byteLength)
    }

    var o = n(102);
    t.exports = r
  }, function (t, e, n) {
    function r(t, e, n) {
      var r = e ? n(u(t), c) : u(t);
      return i(r, o, new t.constructor)
    }

    var o = n(106), i = n(107), u = n(108), c = 1;
    t.exports = r
  }, function (t, e) {
    function n(t, e) {
      return t.set(e[0], e[1]), t
    }

    t.exports = n
  }, function (t, e) {
    function n(t, e, n, r) {
      var o = -1, i = null == t ? 0 : t.length;
      for (r && i && (n = t[++o]); ++o < i;)n = e(n, t[o], o, t);
      return n
    }

    t.exports = n
  }, function (t, e) {
    function n(t) {
      var e = -1, n = Array(t.size);
      return t.forEach(function (t, r) {
        n[++e] = [r, t]
      }), n
    }

    t.exports = n
  }, function (t, e) {
    function n(t) {
      var e = new t.constructor(t.source, r.exec(t));
      return e.lastIndex = t.lastIndex, e
    }

    var r = /\w*$/;
    t.exports = n
  }, function (t, e, n) {
    function r(t, e, n) {
      var r = e ? n(u(t), c) : u(t);
      return i(r, o, new t.constructor)
    }

    var o = n(111), i = n(107), u = n(112), c = 1;
    t.exports = r
  }, function (t, e) {
    function n(t, e) {
      return t.add(e), t
    }

    t.exports = n
  }, function (t, e) {
    function n(t) {
      var e = -1, n = Array(t.size);
      return t.forEach(function (t) {
        n[++e] = t
      }), n
    }

    t.exports = n
  }, function (t, e, n) {
    function r(t) {
      return u ? Object(u.call(t)) : {}
    }

    var o = n(3), i = o ? o.prototype : void 0, u = i ? i.valueOf : void 0;
    t.exports = r
  }, function (t, e, n) {
    function r(t, e) {
      var n = e ? o(t.buffer) : t.buffer;
      return new t.constructor(n, t.byteOffset, t.length)
    }

    var o = n(102);
    t.exports = r
  }, function (t, e, n) {
    function r(t) {
      return "function" != typeof t.constructor || u(t) ? {} : o(i(t))
    }

    var o = n(116), i = n(91), u = n(74);
    t.exports = r
  }, function (t, e, n) {
    var r = n(33), o = Object.create, i = function () {
      function t() {
      }

      return function (e) {
        if (!r(e))return {};
        if (o)return o(e);
        t.prototype = e;
        var n = new t;
        return t.prototype = void 0, n
      }
    }();
    t.exports = i
  }, function (t, e, n) {
    function r(t, e) {
      return e = o(e, t), t = u(t, e), null == t || delete t[c(i(e))]
    }

    var o = n(118), i = n(126), u = n(127), c = n(129);
    t.exports = r
  }, function (t, e, n) {
    function r(t, e) {
      return o(t) ? t : i(t, e) ? [t] : u(c(t))
    }

    var o = n(8), i = n(119), u = n(121), c = n(124);
    t.exports = r
  }, function (t, e, n) {
    function r(t, e) {
      if (o(t))return !1;
      var n = typeof t;
      return !("number" != n && "symbol" != n && "boolean" != n && null != t && !i(t)) || (c.test(t) || !u.test(t) || null != e && t in Object(e))
    }

    var o = n(8), i = n(120), u = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, c = /^\w*$/;
    t.exports = r
  }, function (t, e, n) {
    function r(t) {
      return "symbol" == typeof t || i(t) && o(t) == u
    }

    var o = n(2), i = n(9), u = "[object Symbol]";
    t.exports = r
  }, function (t, e, n) {
    var r = n(122), o = /^\./, i = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, u = /\\(\\)?/g, c = r(function (t) {
      var e = [];
      return o.test(t) && e.push(""), t.replace(i, function (t, n, r, o) {
        e.push(r ? o.replace(u, "$1") : n || t)
      }), e
    });
    t.exports = c
  }, function (t, e, n) {
    function r(t) {
      var e = o(t, function (t) {
        return n.size === i && n.clear(), t
      }), n = e.cache;
      return e
    }

    var o = n(123), i = 500;
    t.exports = r
  }, function (t, e, n) {
    function r(t, e) {
      if ("function" != typeof t || null != e && "function" != typeof e)throw new TypeError(i);
      var n = function () {
        var r = arguments, o = e ? e.apply(this, r) : r[0], i = n.cache;
        if (i.has(o))return i.get(o);
        var u = t.apply(this, r);
        return n.cache = i.set(o, u) || i, u
      };
      return n.cache = new (r.Cache || o), n
    }

    var o = n(38), i = "Expected a function";
    r.Cache = o, t.exports = r
  }, function (t, e, n) {
    function r(t) {
      return null == t ? "" : o(t)
    }

    var o = n(125);
    t.exports = r
  }, function (t, e, n) {
    function r(t) {
      if ("string" == typeof t)return t;
      if (u(t))return i(t, r) + "";
      if (c(t))return f ? f.call(t) : "";
      var e = t + "";
      return "0" == e && 1 / t == -a ? "-0" : e
    }

    var o = n(3), i = n(13), u = n(8), c = n(120), a = 1 / 0, s = o ? o.prototype : void 0, f = s ? s.toString : void 0;
    t.exports = r
  }, function (t, e) {
    function n(t) {
      var e = null == t ? 0 : t.length;
      return e ? t[e - 1] : void 0
    }

    t.exports = n
  }, function (t, e, n) {
    function r(t, e) {
      return e.length < 2 ? t : o(t, i(e, 0, -1))
    }

    var o = n(128), i = n(130);
    t.exports = r
  }, function (t, e, n) {
    function r(t, e) {
      e = o(e, t);
      for (var n = 0, r = e.length; null != t && n < r;)t = t[i(e[n++])];
      return n && n == r ? t : void 0
    }

    var o = n(118), i = n(129);
    t.exports = r
  }, function (t, e, n) {
    function r(t) {
      if ("string" == typeof t || o(t))return t;
      var e = t + "";
      return "0" == e && 1 / t == -i ? "-0" : e
    }

    var o = n(120), i = 1 / 0;
    t.exports = r
  }, function (t, e) {
    function n(t, e, n) {
      var r = -1, o = t.length;
      e < 0 && (e = -e > o ? 0 : o + e), n = n > o ? o : n, n < 0 && (n += o), o = e > n ? 0 : n - e >>> 0, e >>>= 0;
      for (var i = Array(o); ++r < o;)i[r] = t[r + e];
      return i
    }

    t.exports = n
  }, function (t, e, n) {
    function r(t) {
      return o(t) ? void 0 : t
    }

    var o = n(132);
    t.exports = r
  }, function (t, e, n) {
    function r(t) {
      if (!u(t) || o(t) != c)return !1;
      var e = i(t);
      if (null === e)return !0;
      var n = l.call(e, "constructor") && e.constructor;
      return "function" == typeof n && n instanceof n && f.call(n) == p
    }

    var o = n(2), i = n(91), u = n(9), c = "[object Object]", a = Function.prototype, s = Object.prototype, f = a.toString, l = s.hasOwnProperty, p = f.call(Object);
    t.exports = r
  }, function (t, e, n) {
    function r(t) {
      return u(i(t, void 0, o), t + "")
    }

    var o = n(134), i = n(137), u = n(139);
    t.exports = r
  }, function (t, e, n) {
    function r(t) {
      var e = null == t ? 0 : t.length;
      return e ? o(t, 1) : []
    }

    var o = n(135);
    t.exports = r
  }, function (t, e, n) {
    function r(t, e, n, u, c) {
      var a = -1, s = t.length;
      for (n || (n = i), c || (c = []); ++a < s;) {
        var f = t[a];
        e > 0 && n(f) ? e > 1 ? r(f, e - 1, n, u, c) : o(c, f) : u || (c[c.length] = f)
      }
      return c
    }

    var o = n(90), i = n(136);
    t.exports = r
  }, function (t, e, n) {
    function r(t) {
      return u(t) || i(t) || !!(c && t && t[c])
    }

    var o = n(3), i = n(62), u = n(8), c = o ? o.isConcatSpreadable : void 0;
    t.exports = r
  }, function (t, e, n) {
    function r(t, e, n) {
      return e = i(void 0 === e ? t.length - 1 : e, 0), function () {
        for (var r = arguments, u = -1, c = i(r.length - e, 0), a = Array(c); ++u < c;)a[u] = r[e + u];
        u = -1;
        for (var s = Array(e + 1); ++u < e;)s[u] = r[u];
        return s[e] = n(a), o(t, this, s)
      }
    }

    var o = n(138), i = Math.max;
    t.exports = r
  }, function (t, e) {
    function n(t, e, n) {
      switch (n.length) {
        case 0:
          return t.call(e);
        case 1:
          return t.call(e, n[0]);
        case 2:
          return t.call(e, n[0], n[1]);
        case 3:
          return t.call(e, n[0], n[1], n[2])
      }
      return t.apply(e, n)
    }

    t.exports = n
  }, function (t, e, n) {
    var r = n(140), o = n(143), i = o(r);
    t.exports = i
  }, function (t, e, n) {
    var r = n(141), o = n(56), i = n(142), u = o ? function (t, e) {
      return o(t, "toString", {configurable: !0, enumerable: !1, value: r(e), writable: !0})
    } : i;
    t.exports = u
  }, function (t, e) {
    function n(t) {
      return function () {
        return t
      }
    }

    t.exports = n
  }, function (t, e) {
    function n(t) {
      return t
    }

    t.exports = n
  }, function (t, e) {
    function n(t) {
      var e = 0, n = 0;
      return function () {
        var u = i(), c = o - (u - n);
        if (n = u, c > 0) {
          if (++e >= r)return arguments[0]
        } else e = 0;
        return t.apply(void 0, arguments)
      }
    }

    var r = 800, o = 16, i = Date.now;
    t.exports = n
  }, function (t, e, n) {
    var r;
    (function () {
      "use strict";
      function e() {
      }

      function o(t, e) {
        for (var n = t.length; n--;)if (t[n].listener === e)return n;
        return -1
      }

      function i(t) {
        return function () {
          return this[t].apply(this, arguments)
        }
      }

      var u = e.prototype, c = this, a = c.EventEmitter;
      u.getListeners = function (t) {
        var e, n, r = this._getEvents();
        if (t instanceof RegExp) {
          e = {};
          for (n in r)r.hasOwnProperty(n) && t.test(n) && (e[n] = r[n])
        } else e = r[t] || (r[t] = []);
        return e
      }, u.flattenListeners = function (t) {
        var e, n = [];
        for (e = 0; e < t.length; e += 1)n.push(t[e].listener);
        return n
      }, u.getListenersAsObject = function (t) {
        var e, n = this.getListeners(t);
        return n instanceof Array && (e = {}, e[t] = n), e || n
      }, u.addListener = function (t, e) {
        var n, r = this.getListenersAsObject(t), i = "object" == typeof e;
        for (n in r)r.hasOwnProperty(n) && o(r[n], e) === -1 && r[n].push(i ? e : {listener: e, once: !1});
        return this
      }, u.on = i("addListener"), u.addOnceListener = function (t, e) {
        return this.addListener(t, {listener: e, once: !0})
      }, u.once = i("addOnceListener"), u.defineEvent = function (t) {
        return this.getListeners(t), this
      }, u.defineEvents = function (t) {
        for (var e = 0; e < t.length; e += 1)this.defineEvent(t[e]);
        return this
      }, u.removeListener = function (t, e) {
        var n, r, i = this.getListenersAsObject(t);
        for (r in i)i.hasOwnProperty(r) && (n = o(i[r], e), n !== -1 && i[r].splice(n, 1));
        return this
      }, u.off = i("removeListener"), u.addListeners = function (t, e) {
        return this.manipulateListeners(!1, t, e)
      }, u.removeListeners = function (t, e) {
        return this.manipulateListeners(!0, t, e)
      }, u.manipulateListeners = function (t, e, n) {
        var r, o, i = t ? this.removeListener : this.addListener, u = t ? this.removeListeners : this.addListeners;
        if ("object" != typeof e || e instanceof RegExp)for (r = n.length; r--;)i.call(this, e, n[r]); else for (r in e)e.hasOwnProperty(r) && (o = e[r]) && ("function" == typeof o ? i.call(this, r, o) : u.call(this, r, o));
        return this
      }, u.removeEvent = function (t) {
        var e, n = typeof t, r = this._getEvents();
        if ("string" === n)delete r[t]; else if (t instanceof RegExp)for (e in r)r.hasOwnProperty(e) && t.test(e) && delete r[e]; else delete this._events;
        return this
      }, u.removeAllListeners = i("removeEvent"), u.emitEvent = function (t, e) {
        var n, r, o, i, u, c = this.getListenersAsObject(t);
        for (i in c)if (c.hasOwnProperty(i))for (n = c[i].slice(0), o = n.length; o--;)r = n[o], r.once === !0 && this.removeListener(t, r.listener), u = r.listener.apply(this, e || []), u === this._getOnceReturnValue() && this.removeListener(t, r.listener);
        return this
      }, u.trigger = i("emitEvent"), u.emit = function (t) {
        var e = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(t, e)
      }, u.setOnceReturnValue = function (t) {
        return this._onceReturnValue = t, this
      }, u._getOnceReturnValue = function () {
        return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
      }, u._getEvents = function () {
        return this._events || (this._events = {})
      }, e.noConflict = function () {
        return c.EventEmitter = a, e
      }, r = function () {
        return e
      }.call(c, n, c, t), !(void 0 !== r && (t.exports = r))
    }).call(this)
  }, function (t, e) {
    "use strict";
    function n(t) {
      for (var e = {
        strictMode: !1,
        key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
        q: {name: "queryKey", parser: /(?:^|&)([^&=]*)=?([^&]*)/g},
        parser: {
          strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
          loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
        }
      }, n = e.parser[e.strictMode ? "strict" : "loose"].exec(t), r = {}, o = 14; o--;)r[e.key[o]] = n[o] || "";
      return r[e.q.name] = {}, r[e.key[12]].replace(e.q.parser, function (t, n, o) {
        n && (r[e.q.name][n] = o)
      }), r
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e.parseUri = n
  }, function (t, e) {
    "use strict";
    function n(t) {
      for (var e = {}, n = t.split("&"), r = 0; r < n.length; r++) {
        var o = /^(.+?)(?:=(.+))?$/.exec(n[r]);
        if (o) {
          var i = o[1], u = o[2];
          "true" === u ? u = !0 : "false" === u ? u = !1 : void 0 !== u ? u = decodeURIComponent(u) : "!" === i[0] ? (i = i.substring(1), u = !1) : u = !0, e[i] = u
        }
      }
      return e
    }

    function r(t) {
      var e = [];
      for (var n in t)if (t.hasOwnProperty(n)) {
        var r = t[n];
        n = encodeURIComponent(n), r === !0 ? e.push(n) : r === !1 ? e.push("!" + n) : (r = encodeURIComponent(r), e.push(n + "=" + r))
      }
      return e.join("&")
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e.parse = n, e.toString = r
  }, function (t, e, n) {
    (function (e, r) {/*!
     * @overview es6-promise - a tiny implementation of Promises/A+.
     * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
     * @license   Licensed under MIT license
     *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
     * @version   3.3.1
     */
      !function (e, n) {
        t.exports = n()
      }(this, function () {
        "use strict";
        function t(t) {
          return "function" == typeof t || "object" == typeof t && null !== t
        }

        function o(t) {
          return "function" == typeof t
        }

        function i(t) {
          q = t
        }

        function u(t) {
          Q = t
        }

        function c() {
          return function () {
            return e.nextTick(p)
          }
        }

        function a() {
          return function () {
            W(p)
          }
        }

        function s() {
          var t = 0, e = new Z(p), n = document.createTextNode("");
          return e.observe(n, {characterData: !0}), function () {
            n.data = t = ++t % 2
          }
        }

        function f() {
          var t = new MessageChannel;
          return t.port1.onmessage = p, function () {
            return t.port2.postMessage(0)
          }
        }

        function l() {
          var t = setTimeout;
          return function () {
            return t(p, 1)
          }
        }

        function p() {
          for (var t = 0; t < $; t += 2) {
            var e = nt[t], n = nt[t + 1];
            e(n), nt[t] = void 0, nt[t + 1] = void 0
          }
          $ = 0
        }

        function v() {
          try {
            var t = n(149);
            return W = t.runOnLoop || t.runOnContext, a()
          } catch (t) {
            return l()
          }
        }

        function h(t, e) {
          var n = arguments, r = this, o = new this.constructor(y);
          void 0 === o[ot] && I(o);
          var i = r._state;
          return i ? !function () {
            var t = n[i - 1];
            Q(function () {
              return L(i, o, t, r._result)
            })
          }() : S(r, o, t, e), o
        }

        function _(t) {
          var e = this;
          if (t && "object" == typeof t && t.constructor === e)return t;
          var n = new e(y);
          return A(n, t), n
        }

        function y() {
        }

        function d() {
          return new TypeError("You cannot resolve a promise with itself")
        }

        function E() {
          return new TypeError("A promises callback cannot return that same promise.")
        }

        function b(t) {
          try {
            return t.then
          } catch (t) {
            return at.error = t, at
          }
        }

        function g(t, e, n, r) {
          try {
            t.call(e, n, r)
          } catch (t) {
            return t
          }
        }

        function m(t, e, n) {
          Q(function (t) {
            var r = !1, o = g(n, e, function (n) {
              r || (r = !0, e !== n ? A(t, n) : T(t, n))
            }, function (e) {
              r || (r = !0, O(t, e))
            }, "Settle: " + (t._label || " unknown promise"));
            !r && o && (r = !0, O(t, o))
          }, t)
        }

        function x(t, e) {
          e._state === ut ? T(t, e._result) : e._state === ct ? O(t, e._result) : S(e, void 0, function (e) {
            return A(t, e)
          }, function (e) {
            return O(t, e)
          })
        }

        function j(t, e, n) {
          e.constructor === t.constructor && n === h && e.constructor.resolve === _ ? x(t, e) : n === at ? O(t, at.error) : void 0 === n ? T(t, e) : o(n) ? m(t, e, n) : T(t, e)
        }

        function A(e, n) {
          e === n ? O(e, d()) : t(n) ? j(e, n, b(n)) : T(e, n)
        }

        function w(t) {
          t._onerror && t._onerror(t._result), D(t)
        }

        function T(t, e) {
          t._state === it && (t._result = e, t._state = ut, 0 !== t._subscribers.length && Q(D, t))
        }

        function O(t, e) {
          t._state === it && (t._state = ct, t._result = e, Q(w, t))
        }

        function S(t, e, n, r) {
          var o = t._subscribers, i = o.length;
          t._onerror = null, o[i] = e, o[i + ut] = n, o[i + ct] = r, 0 === i && t._state && Q(D, t)
        }

        function D(t) {
          var e = t._subscribers, n = t._state;
          if (0 !== e.length) {
            for (var r = void 0, o = void 0, i = t._result, u = 0; u < e.length; u += 3)r = e[u], o = e[u + n], r ? L(n, r, o, i) : o(i);
            t._subscribers.length = 0
          }
        }

        function P() {
          this.error = null
        }

        function M(t, e) {
          try {
            return t(e)
          } catch (t) {
            return st.error = t, st
          }
        }

        function L(t, e, n, r) {
          var i = o(n), u = void 0, c = void 0, a = void 0, s = void 0;
          if (i) {
            if (u = M(n, r), u === st ? (s = !0, c = u.error, u = null) : a = !0, e === u)return void O(e, E())
          } else u = r, a = !0;
          e._state !== it || (i && a ? A(e, u) : s ? O(e, c) : t === ut ? T(e, u) : t === ct && O(e, u))
        }

        function k(t, e) {
          try {
            e(function (e) {
              A(t, e)
            }, function (e) {
              O(t, e)
            })
          } catch (e) {
            O(t, e)
          }
        }

        function N() {
          return ft++
        }

        function I(t) {
          t[ot] = ft++, t._state = void 0, t._result = void 0, t._subscribers = []
        }

        function B(t, e) {
          this._instanceConstructor = t, this.promise = new t(y), this.promise[ot] || I(this.promise), K(e) ? (this._input = e, this.length = e.length, this._remaining = e.length, this._result = new Array(this.length), 0 === this.length ? T(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(), 0 === this._remaining && T(this.promise, this._result))) : O(this.promise, C())
        }

        function C() {
          return new Error("Array Methods must be provided an Array")
        }

        function R(t) {
          return new B(this, t).promise
        }

        function U(t) {
          var e = this;
          return new e(K(t) ? function (n, r) {
            for (var o = t.length, i = 0; i < o; i++)e.resolve(t[i]).then(n, r)
          } : function (t, e) {
            return e(new TypeError("You must pass an array to race."))
          })
        }

        function V(t) {
          var e = this, n = new e(y);
          return O(n, t), n
        }

        function H() {
          throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
        }

        function Y() {
          throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
        }

        function F(t) {
          this[ot] = N(), this._result = this._state = void 0, this._subscribers = [], y !== t && ("function" != typeof t && H(), this instanceof F ? k(this, t) : Y())
        }

        function G() {
          var t = void 0;
          if ("undefined" != typeof r)t = r; else if ("undefined" != typeof self)t = self; else try {
            t = Function("return this")()
          } catch (t) {
            throw new Error("polyfill failed because global object is unavailable in this environment")
          }
          var e = t.Promise;
          if (e) {
            var n = null;
            try {
              n = Object.prototype.toString.call(e.resolve())
            } catch (t) {
            }
            if ("[object Promise]" === n && !e.cast)return
          }
          t.Promise = F
        }

        var z = void 0;
        z = Array.isArray ? Array.isArray : function (t) {
          return "[object Array]" === Object.prototype.toString.call(t)
        };
        var K = z, $ = 0, W = void 0, q = void 0, Q = function (t, e) {
          nt[$] = t, nt[$ + 1] = e, $ += 2, 2 === $ && (q ? q(p) : rt())
        }, J = "undefined" != typeof window ? window : void 0, X = J || {}, Z = X.MutationObserver || X.WebKitMutationObserver, tt = "undefined" == typeof self && "undefined" != typeof e && "[object process]" === {}.toString.call(e), et = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel, nt = new Array(1e3), rt = void 0;
        rt = tt ? c() : Z ? s() : et ? f() : void 0 === J ? v() : l();
        var ot = Math.random().toString(36).substring(16), it = void 0, ut = 1, ct = 2, at = new P, st = new P, ft = 0;
        return B.prototype._enumerate = function () {
          for (var t = this.length, e = this._input, n = 0; this._state === it && n < t; n++)this._eachEntry(e[n], n)
        }, B.prototype._eachEntry = function (t, e) {
          var n = this._instanceConstructor, r = n.resolve;
          if (r === _) {
            var o = b(t);
            if (o === h && t._state !== it)this._settledAt(t._state, e, t._result); else if ("function" != typeof o)this._remaining--, this._result[e] = t; else if (n === F) {
              var i = new n(y);
              j(i, t, o), this._willSettleAt(i, e)
            } else this._willSettleAt(new n(function (e) {
              return e(t)
            }), e)
          } else this._willSettleAt(r(t), e)
        }, B.prototype._settledAt = function (t, e, n) {
          var r = this.promise;
          r._state === it && (this._remaining--, t === ct ? O(r, n) : this._result[e] = n), 0 === this._remaining && T(r, this._result)
        }, B.prototype._willSettleAt = function (t, e) {
          var n = this;
          S(t, void 0, function (t) {
            return n._settledAt(ut, e, t)
          }, function (t) {
            return n._settledAt(ct, e, t)
          })
        }, F.all = R, F.race = U, F.resolve = _, F.reject = V, F._setScheduler = i, F._setAsap = u, F._asap = Q, F.prototype = {
          constructor: F,
          then: h,
          catch: function (t) {
            return this.then(null, t)
          }
        }, G(), F.polyfill = G, F.Promise = F, F
      })
    }).call(e, n(148), function () {
      return this
    }())
  }, function (t, e) {
    function n() {
      throw new Error("setTimeout has not been defined")
    }

    function r() {
      throw new Error("clearTimeout has not been defined")
    }

    function o(t) {
      if (f === setTimeout)return setTimeout(t, 0);
      if ((f === n || !f) && setTimeout)return f = setTimeout, setTimeout(t, 0);
      try {
        return f(t, 0)
      } catch (e) {
        try {
          return f.call(null, t, 0)
        } catch (e) {
          return f.call(this, t, 0)
        }
      }
    }

    function i(t) {
      if (l === clearTimeout)return clearTimeout(t);
      if ((l === r || !l) && clearTimeout)return l = clearTimeout, clearTimeout(t);
      try {
        return l(t)
      } catch (e) {
        try {
          return l.call(null, t)
        } catch (e) {
          return l.call(this, t)
        }
      }
    }

    function u() {
      _ && v && (_ = !1, v.length ? h = v.concat(h) : y = -1, h.length && c())
    }

    function c() {
      if (!_) {
        var t = o(u);
        _ = !0;
        for (var e = h.length; e;) {
          for (v = h, h = []; ++y < e;)v && v[y].run();
          y = -1, e = h.length
        }
        v = null, _ = !1, i(t)
      }
    }

    function a(t, e) {
      this.fun = t, this.array = e
    }

    function s() {
    }

    var f, l, p = t.exports = {};
    !function () {
      try {
        f = "function" == typeof setTimeout ? setTimeout : n
      } catch (t) {
        f = n
      }
      try {
        l = "function" == typeof clearTimeout ? clearTimeout : r
      } catch (t) {
        l = r
      }
    }();
    var v, h = [], _ = !1, y = -1;
    p.nextTick = function (t) {
      var e = new Array(arguments.length - 1);
      if (arguments.length > 1)for (var n = 1; n < arguments.length; n++)e[n - 1] = arguments[n];
      h.push(new a(t, e)), 1 !== h.length || _ || o(c)
    }, a.prototype.run = function () {
      this.fun.apply(null, this.array)
    }, p.title = "browser", p.browser = !0, p.env = {}, p.argv = [], p.version = "", p.versions = {}, p.on = s, p.addListener = s, p.once = s, p.off = s, p.removeListener = s, p.removeAllListeners = s, p.emit = s, p.prependListener = s, p.prependOnceListener = s, p.listeners = function (t) {
      return []
    }, p.binding = function (t) {
      throw new Error("process.binding is not supported")
    }, p.cwd = function () {
      return "/"
    }, p.chdir = function (t) {
      throw new Error("process.chdir is not supported")
    }, p.umask = function () {
      return 0
    }
  }, function (t, e) {
  }])
});