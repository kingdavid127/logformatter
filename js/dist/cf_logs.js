const Cm = "5";
var qf;
typeof window < "u" && ((qf = window.__svelte ?? (window.__svelte = {})).v ?? (qf.v = /* @__PURE__ */ new Set())).add(Cm);
const Am = 1, Mm = 2, Tm = 16, Em = 4, Dm = 2, rt = Symbol(), Om = "http://www.w3.org/1999/xhtml", Th = !1;
function _m(n) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
var Ra = Array.isArray, Rm = Array.prototype.indexOf, La = Array.from, Lm = Object.defineProperty, ms = Object.getOwnPropertyDescriptor, Pm = Object.getOwnPropertyDescriptors, Im = Object.prototype, Bm = Array.prototype, jf = Object.getPrototypeOf, Eh = Object.isExtensible;
function Nm(n) {
  return typeof n == "function";
}
const Qn = () => {
};
function Fm(n) {
  for (var e = 0; e < n.length; e++)
    n[e]();
}
const Ft = 2, Kf = 4, Ao = 8, Mo = 16, wi = 32, Hn = 64, qr = 128, xt = 256, jr = 512, ut = 1024, ti = 2048, mn = 4096, gi = 8192, To = 16384, Gf = 32768, Eo = 65536, Hm = 1 << 19, Yf = 1 << 20, _l = 1 << 21, Mn = Symbol("$state");
function Wm(n) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Vm() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function zm(n) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function $m() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Um() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function qm() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function jm() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let Km = !1, Gm = !1;
function Mt(n) {
  if (typeof n != "object" || n === null || Mn in n)
    return n;
  const e = jf(n);
  if (e !== Im && e !== Bm)
    return n;
  var t = /* @__PURE__ */ new Map(), i = Ra(n), s = /* @__PURE__ */ pe(0), r = se, o = (l) => {
    var a = se;
    Rt(r);
    var h = l();
    return Rt(a), h;
  };
  return i && t.set("length", /* @__PURE__ */ pe(
    /** @type {any[]} */
    n.length
  )), new Proxy(
    /** @type {any} */
    n,
    {
      defineProperty(l, a, h) {
        (!("value" in h) || h.configurable === !1 || h.enumerable === !1 || h.writable === !1) && Um();
        var c = t.get(a);
        return c === void 0 ? (c = o(() => /* @__PURE__ */ pe(h.value)), t.set(a, c)) : $(
          c,
          o(() => Mt(h.value))
        ), !0;
      },
      deleteProperty(l, a) {
        var h = t.get(a);
        if (h === void 0)
          a in l && (t.set(
            a,
            o(() => /* @__PURE__ */ pe(rt))
          ), Jo(s));
        else {
          if (i && typeof a == "string") {
            var c = (
              /** @type {Source<number>} */
              t.get("length")
            ), f = Number(a);
            Number.isInteger(f) && f < c.v && $(c, f);
          }
          $(h, rt), Jo(s);
        }
        return !0;
      },
      get(l, a, h) {
        var d;
        if (a === Mn)
          return n;
        var c = t.get(a), f = a in l;
        if (c === void 0 && (!f || (d = ms(l, a)) != null && d.writable) && (c = o(() => /* @__PURE__ */ pe(Mt(f ? l[a] : rt))), t.set(a, c)), c !== void 0) {
          var u = D(c);
          return u === rt ? void 0 : u;
        }
        return Reflect.get(l, a, h);
      },
      getOwnPropertyDescriptor(l, a) {
        var h = Reflect.getOwnPropertyDescriptor(l, a);
        if (h && "value" in h) {
          var c = t.get(a);
          c && (h.value = D(c));
        } else if (h === void 0) {
          var f = t.get(a), u = f == null ? void 0 : f.v;
          if (f !== void 0 && u !== rt)
            return {
              enumerable: !0,
              configurable: !0,
              value: u,
              writable: !0
            };
        }
        return h;
      },
      has(l, a) {
        var u;
        if (a === Mn)
          return !0;
        var h = t.get(a), c = h !== void 0 && h.v !== rt || Reflect.has(l, a);
        if (h !== void 0 || ne !== null && (!c || (u = ms(l, a)) != null && u.writable)) {
          h === void 0 && (h = o(() => /* @__PURE__ */ pe(c ? Mt(l[a]) : rt)), t.set(a, h));
          var f = D(h);
          if (f === rt)
            return !1;
        }
        return c;
      },
      set(l, a, h, c) {
        var v;
        var f = t.get(a), u = a in l;
        if (i && a === "length")
          for (var d = h; d < /** @type {Source<number>} */
          f.v; d += 1) {
            var p = t.get(d + "");
            p !== void 0 ? $(p, rt) : d in l && (p = o(() => /* @__PURE__ */ pe(rt)), t.set(d + "", p));
          }
        f === void 0 ? (!u || (v = ms(l, a)) != null && v.writable) && (f = o(() => /* @__PURE__ */ pe(void 0)), $(
          f,
          o(() => Mt(h))
        ), t.set(a, f)) : (u = f.v !== rt, $(
          f,
          o(() => Mt(h))
        ));
        var m = Reflect.getOwnPropertyDescriptor(l, a);
        if (m != null && m.set && m.set.call(c, h), !u) {
          if (i && typeof a == "string") {
            var g = (
              /** @type {Source<number>} */
              t.get("length")
            ), b = Number(a);
            Number.isInteger(b) && b >= g.v && $(g, b + 1);
          }
          Jo(s);
        }
        return !0;
      },
      ownKeys(l) {
        D(s);
        var a = Reflect.ownKeys(l).filter((f) => {
          var u = t.get(f);
          return u === void 0 || u.v !== rt;
        });
        for (var [h, c] of t)
          c.v !== rt && !(h in l) && a.push(h);
        return a;
      },
      setPrototypeOf() {
        qm();
      }
    }
  );
}
function Jo(n, e = 1) {
  $(n, n.v + e);
}
function Dh(n) {
  try {
    if (n !== null && typeof n == "object" && Mn in n)
      return n[Mn];
  } catch {
  }
  return n;
}
function Ym(n, e) {
  return Object.is(Dh(n), Dh(e));
}
var Oh, Xf, Jf, Qf;
function Xm() {
  if (Oh === void 0) {
    Oh = window, Xf = /Firefox/.test(navigator.userAgent);
    var n = Element.prototype, e = Node.prototype, t = Text.prototype;
    Jf = ms(e, "firstChild").get, Qf = ms(e, "nextSibling").get, Eh(n) && (n.__click = void 0, n.__className = void 0, n.__attributes = null, n.__style = void 0, n.__e = void 0), Eh(t) && (t.__t = void 0);
  }
}
function Zf(n = "") {
  return document.createTextNode(n);
}
// @__NO_SIDE_EFFECTS__
function sn(n) {
  return Jf.call(n);
}
// @__NO_SIDE_EFFECTS__
function Do(n) {
  return Qf.call(n);
}
function ie(n, e) {
  return /* @__PURE__ */ sn(n);
}
function _h(n, e) {
  {
    var t = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ sn(
        /** @type {Node} */
        n
      )
    );
    return t instanceof Comment && t.data === "" ? /* @__PURE__ */ Do(t) : t;
  }
}
function re(n, e = 1, t = !1) {
  let i = n;
  for (; e--; )
    i = /** @type {TemplateNode} */
    /* @__PURE__ */ Do(i);
  return i;
}
function Jm(n) {
  n.textContent = "";
}
function eu(n) {
  return n === this.v;
}
function Qm(n, e) {
  return n != n ? e == e : n !== e || n !== null && typeof n == "object" || typeof n == "function";
}
function tu(n) {
  return !Qm(n, this.v);
}
// @__NO_SIDE_EFFECTS__
function Pa(n) {
  var e = Ft | ti, t = se !== null && (se.f & Ft) !== 0 ? (
    /** @type {Derived} */
    se
  ) : null;
  return ne === null || t !== null && (t.f & xt) !== 0 ? e |= xt : ne.f |= Yf, {
    ctx: ft,
    deps: null,
    effects: null,
    equals: eu,
    f: e,
    fn: n,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: t ?? ne
  };
}
// @__NO_SIDE_EFFECTS__
function Zm(n) {
  const e = /* @__PURE__ */ Pa(n);
  return uu(e), e;
}
// @__NO_SIDE_EFFECTS__
function eg(n) {
  const e = /* @__PURE__ */ Pa(n);
  return e.equals = tu, e;
}
function iu(n) {
  var e = n.effects;
  if (e !== null) {
    n.effects = null;
    for (var t = 0; t < e.length; t += 1)
      Wi(
        /** @type {Effect} */
        e[t]
      );
  }
}
function tg(n) {
  for (var e = n.parent; e !== null; ) {
    if ((e.f & Ft) === 0)
      return (
        /** @type {Effect} */
        e
      );
    e = e.parent;
  }
  return null;
}
function nu(n) {
  var e, t = ne;
  ii(tg(n));
  try {
    iu(n), e = gu(n);
  } finally {
    ii(t);
  }
  return e;
}
function su(n) {
  var e = nu(n), t = (Pi || (n.f & xt) !== 0) && n.deps !== null ? mn : ut;
  Ht(n, t), n.equals(e) || (n.v = e, n.wv = pu());
}
function ig(n) {
  ne === null && se === null && zm(), se !== null && (se.f & xt) !== 0 && ne === null && Vm(), Ws && Wm();
}
function ng(n, e) {
  var t = e.last;
  t === null ? e.last = e.first = n : (t.next = n, n.prev = t, e.last = n);
}
function Wn(n, e, t, i = !0) {
  var s = ne, r = {
    ctx: ft,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: n | ti,
    first: null,
    fn: e,
    last: null,
    next: null,
    parent: s,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0
  };
  if (t)
    try {
      Na(r), r.f |= Gf;
    } catch (a) {
      throw Wi(r), a;
    }
  else e !== null && Lo(r);
  var o = t && r.deps === null && r.first === null && r.nodes_start === null && r.teardown === null && (r.f & (Yf | qr)) === 0;
  if (!o && i && (s !== null && ng(r, s), se !== null && (se.f & Ft) !== 0)) {
    var l = (
      /** @type {Derived} */
      se
    );
    (l.effects ?? (l.effects = [])).push(r);
  }
  return r;
}
function ru(n) {
  const e = Wn(Ao, null, !1);
  return Ht(e, ut), e.teardown = n, e;
}
function Ei(n) {
  ig();
  var e = ne !== null && (ne.f & wi) !== 0 && ft !== null && !ft.m;
  if (e) {
    var t = (
      /** @type {ComponentContext} */
      ft
    );
    (t.e ?? (t.e = [])).push({
      fn: n,
      effect: ne,
      reaction: se
    });
  } else {
    var i = Oo(n);
    return i;
  }
}
function sg(n) {
  const e = Wn(Hn, n, !0);
  return (t = {}) => new Promise((i) => {
    t.outro ? Kr(e, () => {
      Wi(e), i(void 0);
    }) : (Wi(e), i(void 0));
  });
}
function Oo(n) {
  return Wn(Kf, n, !1);
}
function _o(n) {
  return Wn(Ao, n, !0);
}
function Di(n, e = [], t = Pa) {
  const i = e.map(t);
  return Ia(() => n(...i.map(D)));
}
function Ia(n, e = 0) {
  return Wn(Ao | Mo | e, n, !0);
}
function Ss(n, e = !0) {
  return Wn(Ao | wi, n, !0, e);
}
function ou(n) {
  var e = n.teardown;
  if (e !== null) {
    const t = Ws, i = se;
    Rh(!0), Rt(null);
    try {
      e.call(null);
    } finally {
      Rh(t), Rt(i);
    }
  }
}
function lu(n, e = !1) {
  var t = n.first;
  for (n.first = n.last = null; t !== null; ) {
    var i = t.next;
    (t.f & Hn) !== 0 ? t.parent = null : Wi(t, e), t = i;
  }
}
function rg(n) {
  for (var e = n.first; e !== null; ) {
    var t = e.next;
    (e.f & wi) === 0 && Wi(e), e = t;
  }
}
function Wi(n, e = !0) {
  var t = !1;
  (e || (n.f & Hm) !== 0) && n.nodes_start !== null && (au(
    n.nodes_start,
    /** @type {TemplateNode} */
    n.nodes_end
  ), t = !0), lu(n, e && !t), Zr(n, 0), Ht(n, To);
  var i = n.transitions;
  if (i !== null)
    for (const r of i)
      r.stop();
  ou(n);
  var s = n.parent;
  s !== null && s.first !== null && hu(n), n.next = n.prev = n.teardown = n.ctx = n.deps = n.fn = n.nodes_start = n.nodes_end = null;
}
function au(n, e) {
  for (; n !== null; ) {
    var t = n === e ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Do(n)
    );
    n.remove(), n = t;
  }
}
function hu(n) {
  var e = n.parent, t = n.prev, i = n.next;
  t !== null && (t.next = i), i !== null && (i.prev = t), e !== null && (e.first === n && (e.first = i), e.last === n && (e.last = t));
}
function Kr(n, e) {
  var t = [];
  Ba(n, t, !0), cu(t, () => {
    Wi(n), e && e();
  });
}
function cu(n, e) {
  var t = n.length;
  if (t > 0) {
    var i = () => --t || e();
    for (var s of n)
      s.out(i);
  } else
    e();
}
function Ba(n, e, t) {
  if ((n.f & gi) === 0) {
    if (n.f ^= gi, n.transitions !== null)
      for (const o of n.transitions)
        (o.is_global || t) && e.push(o);
    for (var i = n.first; i !== null; ) {
      var s = i.next, r = (i.f & Eo) !== 0 || (i.f & wi) !== 0;
      Ba(i, e, r ? t : !1), i = s;
    }
  }
}
function Gr(n) {
  fu(n, !0);
}
function fu(n, e) {
  if ((n.f & gi) !== 0) {
    n.f ^= gi, (n.f & ut) === 0 && (n.f ^= ut), Vs(n) && (Ht(n, ti), Lo(n));
    for (var t = n.first; t !== null; ) {
      var i = t.next, s = (t.f & Eo) !== 0 || (t.f & wi) !== 0;
      fu(t, s ? e : !1), t = i;
    }
    if (n.transitions !== null)
      for (const r of n.transitions)
        (r.is_global || e) && r.in();
  }
}
let Yr = [];
function og() {
  var n = Yr;
  Yr = [], Fm(n);
}
function Xr(n) {
  Yr.length === 0 && queueMicrotask(og), Yr.push(n);
}
let Rr = !1, Rl = !1, Jr = null, ln = !1, Ws = !1;
function Rh(n) {
  Ws = n;
}
let Lr = [];
let se = null, Kt = !1;
function Rt(n) {
  se = n;
}
let ne = null;
function ii(n) {
  ne = n;
}
let Je = null;
function uu(n) {
  se !== null && se.f & _l && (Je === null ? Je = [n] : Je.push(n));
}
let Ye = null, yt = 0, At = null;
function lg(n) {
  At = n;
}
let du = 1, Qr = 0, Pi = !1;
function pu() {
  return ++du;
}
function Vs(n) {
  var f;
  var e = n.f;
  if ((e & ti) !== 0)
    return !0;
  if ((e & mn) !== 0) {
    var t = n.deps, i = (e & xt) !== 0;
    if (t !== null) {
      var s, r, o = (e & jr) !== 0, l = i && ne !== null && !Pi, a = t.length;
      if (o || l) {
        var h = (
          /** @type {Derived} */
          n
        ), c = h.parent;
        for (s = 0; s < a; s++)
          r = t[s], (o || !((f = r == null ? void 0 : r.reactions) != null && f.includes(h))) && (r.reactions ?? (r.reactions = [])).push(h);
        o && (h.f ^= jr), l && c !== null && (c.f & xt) === 0 && (h.f ^= xt);
      }
      for (s = 0; s < a; s++)
        if (r = t[s], Vs(
          /** @type {Derived} */
          r
        ) && su(
          /** @type {Derived} */
          r
        ), r.wv > n.wv)
          return !0;
    }
    (!i || ne !== null && !Pi) && Ht(n, ut);
  }
  return !1;
}
function ag(n, e) {
  for (var t = e; t !== null; ) {
    if ((t.f & qr) !== 0)
      try {
        t.fn(n);
        return;
      } catch {
        t.f ^= qr;
      }
    t = t.parent;
  }
  throw Rr = !1, n;
}
function Lh(n) {
  return (n.f & To) === 0 && (n.parent === null || (n.parent.f & qr) === 0);
}
function Ro(n, e, t, i) {
  if (Rr) {
    if (t === null && (Rr = !1), Lh(e))
      throw n;
    return;
  }
  if (t !== null && (Rr = !0), ag(n, e), Lh(e))
    throw n;
}
function mu(n, e, t = !0) {
  var i = n.reactions;
  if (i !== null)
    for (var s = 0; s < i.length; s++) {
      var r = i[s];
      Je != null && Je.includes(n) || ((r.f & Ft) !== 0 ? mu(
        /** @type {Derived} */
        r,
        e,
        !1
      ) : e === r && (t ? Ht(r, ti) : (r.f & ut) !== 0 && Ht(r, mn), Lo(
        /** @type {Effect} */
        r
      )));
    }
}
function gu(n) {
  var d;
  var e = Ye, t = yt, i = At, s = se, r = Pi, o = Je, l = ft, a = Kt, h = n.f;
  Ye = /** @type {null | Value[]} */
  null, yt = 0, At = null, Pi = (h & xt) !== 0 && (Kt || !ln || se === null), se = (h & (wi | Hn)) === 0 ? n : null, Je = null, Ph(n.ctx), Kt = !1, Qr++, n.f |= _l;
  try {
    var c = (
      /** @type {Function} */
      (0, n.fn)()
    ), f = n.deps;
    if (Ye !== null) {
      var u;
      if (Zr(n, yt), f !== null && yt > 0)
        for (f.length = yt + Ye.length, u = 0; u < Ye.length; u++)
          f[yt + u] = Ye[u];
      else
        n.deps = f = Ye;
      if (!Pi)
        for (u = yt; u < f.length; u++)
          ((d = f[u]).reactions ?? (d.reactions = [])).push(n);
    } else f !== null && yt < f.length && (Zr(n, yt), f.length = yt);
    if (wu() && At !== null && !Kt && f !== null && (n.f & (Ft | mn | ti)) === 0)
      for (u = 0; u < /** @type {Source[]} */
      At.length; u++)
        mu(
          At[u],
          /** @type {Effect} */
          n
        );
    return s !== null && s !== n && (Qr++, At !== null && (i === null ? i = At : i.push(.../** @type {Source[]} */
    At))), c;
  } finally {
    Ye = e, yt = t, At = i, se = s, Pi = r, Je = o, Ph(l), Kt = a, n.f ^= _l;
  }
}
function hg(n, e) {
  let t = e.reactions;
  if (t !== null) {
    var i = Rm.call(t, n);
    if (i !== -1) {
      var s = t.length - 1;
      s === 0 ? t = e.reactions = null : (t[i] = t[s], t.pop());
    }
  }
  t === null && (e.f & Ft) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Ye === null || !Ye.includes(e)) && (Ht(e, mn), (e.f & (xt | jr)) === 0 && (e.f ^= jr), iu(
    /** @type {Derived} **/
    e
  ), Zr(
    /** @type {Derived} **/
    e,
    0
  ));
}
function Zr(n, e) {
  var t = n.deps;
  if (t !== null)
    for (var i = e; i < t.length; i++)
      hg(n, t[i]);
}
function Na(n) {
  var e = n.f;
  if ((e & To) === 0) {
    Ht(n, ut);
    var t = ne, i = ft, s = ln;
    ne = n, ln = !0;
    try {
      (e & Mo) !== 0 ? rg(n) : lu(n), ou(n);
      var r = gu(n);
      n.teardown = typeof r == "function" ? r : null, n.wv = du;
      var o = n.deps, l;
      Th && Gm && n.f & ti;
    } catch (a) {
      Ro(a, n, t, i || n.ctx);
    } finally {
      ln = s, ne = t;
    }
  }
}
function cg() {
  try {
    $m();
  } catch (n) {
    if (Jr !== null)
      Ro(n, Jr, null);
    else
      throw n;
  }
}
function fg() {
  var n = ln;
  try {
    var e = 0;
    for (ln = !0; Lr.length > 0; ) {
      e++ > 1e3 && cg();
      var t = Lr, i = t.length;
      Lr = [];
      for (var s = 0; s < i; s++) {
        var r = dg(t[s]);
        ug(r);
      }
      ks.clear();
    }
  } finally {
    Rl = !1, ln = n, Jr = null;
  }
}
function ug(n) {
  var e = n.length;
  if (e !== 0)
    for (var t = 0; t < e; t++) {
      var i = n[t];
      if ((i.f & (To | gi)) === 0)
        try {
          Vs(i) && (Na(i), i.deps === null && i.first === null && i.nodes_start === null && (i.teardown === null ? hu(i) : i.fn = null));
        } catch (s) {
          Ro(s, i, null, i.ctx);
        }
    }
}
function Lo(n) {
  Rl || (Rl = !0, queueMicrotask(fg));
  for (var e = Jr = n; e.parent !== null; ) {
    e = e.parent;
    var t = e.f;
    if ((t & (Hn | wi)) !== 0) {
      if ((t & ut) === 0) return;
      e.f ^= ut;
    }
  }
  Lr.push(e);
}
function dg(n) {
  for (var e = [], t = n; t !== null; ) {
    var i = t.f, s = (i & (wi | Hn)) !== 0, r = s && (i & ut) !== 0;
    if (!r && (i & gi) === 0) {
      if ((i & Kf) !== 0)
        e.push(t);
      else if (s)
        t.f ^= ut;
      else
        try {
          Vs(t) && Na(t);
        } catch (a) {
          Ro(a, t, null, t.ctx);
        }
      var o = t.first;
      if (o !== null) {
        t = o;
        continue;
      }
    }
    var l = t.parent;
    for (t = t.next; t === null && l !== null; )
      t = l.next, l = l.parent;
  }
  return e;
}
function D(n) {
  var e = n.f, t = (e & Ft) !== 0;
  if (se !== null && !Kt) {
    if (!(Je != null && Je.includes(n))) {
      var i = se.deps;
      n.rv < Qr && (n.rv = Qr, Ye === null && i !== null && i[yt] === n ? yt++ : Ye === null ? Ye = [n] : (!Pi || !Ye.includes(n)) && Ye.push(n));
    }
  } else if (t && /** @type {Derived} */
  n.deps === null && /** @type {Derived} */
  n.effects === null) {
    var s = (
      /** @type {Derived} */
      n
    ), r = s.parent;
    r !== null && (r.f & xt) === 0 && (s.f ^= xt);
  }
  return t && (s = /** @type {Derived} */
  n, Vs(s) && su(s)), Ws && ks.has(n) ? ks.get(n) : n.v;
}
function zs(n) {
  var e = Kt;
  try {
    return Kt = !0, n();
  } finally {
    Kt = e;
  }
}
const pg = -7169;
function Ht(n, e) {
  n.f = n.f & pg | e;
}
const ks = /* @__PURE__ */ new Map();
function eo(n, e) {
  var t = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: n,
    reactions: null,
    equals: eu,
    rv: 0,
    wv: 0
  };
  return t;
}
// @__NO_SIDE_EFFECTS__
function pe(n, e) {
  const t = eo(n);
  return uu(t), t;
}
// @__NO_SIDE_EFFECTS__
function mg(n, e = !1) {
  const t = eo(n);
  return e || (t.equals = tu), t;
}
function $(n, e, t = !1) {
  se !== null && !Kt && wu() && (se.f & (Ft | Mo)) !== 0 && !(Je != null && Je.includes(n)) && jm();
  let i = t ? Mt(e) : e;
  return yu(n, i);
}
function yu(n, e) {
  if (!n.equals(e)) {
    var t = n.v;
    Ws ? ks.set(n, e) : ks.set(n, t), n.v = e, (n.f & Ft) !== 0 && ((n.f & ti) !== 0 && nu(
      /** @type {Derived} */
      n
    ), Ht(n, (n.f & xt) === 0 ? ut : mn)), n.wv = pu(), bu(n, ti), ne !== null && (ne.f & ut) !== 0 && (ne.f & (wi | Hn)) === 0 && (At === null ? lg([n]) : At.push(n));
  }
  return e;
}
function bu(n, e) {
  var t = n.reactions;
  if (t !== null)
    for (var i = t.length, s = 0; s < i; s++) {
      var r = t[s], o = r.f;
      (o & ti) === 0 && (Ht(r, e), (o & (ut | xt)) !== 0 && ((o & Ft) !== 0 ? bu(
        /** @type {Derived} */
        r,
        mn
      ) : Lo(
        /** @type {Effect} */
        r
      )));
    }
}
let ft = null;
function Ph(n) {
  ft = n;
}
function vu(n, e = !1, t) {
  var i = ft = {
    p: ft,
    c: null,
    d: !1,
    e: null,
    m: !1,
    s: n,
    x: null,
    l: null
  };
  ru(() => {
    i.d = !0;
  });
}
function xu(n) {
  const e = ft;
  if (e !== null) {
    const o = e.e;
    if (o !== null) {
      var t = ne, i = se;
      e.e = null;
      try {
        for (var s = 0; s < o.length; s++) {
          var r = o[s];
          ii(r.effect), Rt(r.reaction), Oo(r.fn);
        }
      } finally {
        ii(t), Rt(i);
      }
    }
    ft = e.p, e.m = !0;
  }
  return (
    /** @type {T} */
    {}
  );
}
function wu() {
  return !0;
}
const gg = ["touchstart", "touchmove"];
function yg(n) {
  return gg.includes(n);
}
let Ih = !1;
function bg() {
  Ih || (Ih = !0, document.addEventListener(
    "reset",
    (n) => {
      Promise.resolve().then(() => {
        var e;
        if (!n.defaultPrevented)
          for (
            const t of
            /**@type {HTMLFormElement} */
            n.target.elements
          )
            (e = t.__on_r) == null || e.call(t);
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possiblity of stopPropagation)
    { capture: !0 }
  ));
}
function Su(n) {
  var e = se, t = ne;
  Rt(null), ii(null);
  try {
    return n();
  } finally {
    Rt(e), ii(t);
  }
}
function Fa(n, e, t, i = t) {
  n.addEventListener(e, () => Su(t));
  const s = n.__on_r;
  s ? n.__on_r = () => {
    s(), i(!0);
  } : n.__on_r = () => i(!0), bg();
}
const ku = /* @__PURE__ */ new Set(), Ll = /* @__PURE__ */ new Set();
function vg(n) {
  for (var e = 0; e < n.length; e++)
    ku.add(n[e]);
  for (var t of Ll)
    t(n);
}
function rr(n) {
  var v;
  var e = this, t = (
    /** @type {Node} */
    e.ownerDocument
  ), i = n.type, s = ((v = n.composedPath) == null ? void 0 : v.call(n)) || [], r = (
    /** @type {null | Element} */
    s[0] || n.target
  ), o = 0, l = n.__root;
  if (l) {
    var a = s.indexOf(l);
    if (a !== -1 && (e === document || e === /** @type {any} */
    window)) {
      n.__root = e;
      return;
    }
    var h = s.indexOf(e);
    if (h === -1)
      return;
    a <= h && (o = a);
  }
  if (r = /** @type {Element} */
  s[o] || n.target, r !== e) {
    Lm(n, "currentTarget", {
      configurable: !0,
      get() {
        return r || t;
      }
    });
    var c = se, f = ne;
    Rt(null), ii(null);
    try {
      for (var u, d = []; r !== null; ) {
        var p = r.assignedSlot || r.parentNode || /** @type {any} */
        r.host || null;
        try {
          var m = r["__" + i];
          if (m != null && (!/** @type {any} */
          r.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          n.target === r))
            if (Ra(m)) {
              var [g, ...b] = m;
              g.apply(r, [n, ...b]);
            } else
              m.call(r, n);
        } catch (k) {
          u ? d.push(k) : u = k;
        }
        if (n.cancelBubble || p === e || p === null)
          break;
        r = p;
      }
      if (u) {
        for (let k of d)
          queueMicrotask(() => {
            throw k;
          });
        throw u;
      }
    } finally {
      n.__root = e, delete n.currentTarget, Rt(c), ii(f);
    }
  }
}
function Cu(n) {
  var e = document.createElement("template");
  return e.innerHTML = n, e.content;
}
function Ha(n, e) {
  var t = (
    /** @type {Effect} */
    ne
  );
  t.nodes_start === null && (t.nodes_start = n, t.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function si(n, e) {
  var t = (e & Dm) !== 0, i, s = !n.startsWith("<!>");
  return () => {
    i === void 0 && (i = Cu(s ? n : "<!>" + n), i = /** @type {Node} */
    /* @__PURE__ */ sn(i));
    var r = (
      /** @type {TemplateNode} */
      t || Xf ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    return Ha(r, r), r;
  };
}
function Bh() {
  var n = document.createDocumentFragment(), e = document.createComment(""), t = Zf();
  return n.append(e, t), Ha(e, t), n;
}
function Ct(n, e) {
  n !== null && n.before(
    /** @type {Node} */
    e
  );
}
let Pl = !0;
function Nh(n, e) {
  var t = e == null ? "" : typeof e == "object" ? e + "" : e;
  t !== (n.__t ?? (n.__t = n.nodeValue)) && (n.__t = t, n.nodeValue = t + "");
}
function xg(n, e) {
  return wg(n, e);
}
const vn = /* @__PURE__ */ new Map();
function wg(n, { target: e, anchor: t, props: i = {}, events: s, context: r, intro: o = !0 }) {
  Xm();
  var l = /* @__PURE__ */ new Set(), a = (f) => {
    for (var u = 0; u < f.length; u++) {
      var d = f[u];
      if (!l.has(d)) {
        l.add(d);
        var p = yg(d);
        e.addEventListener(d, rr, { passive: p });
        var m = vn.get(d);
        m === void 0 ? (document.addEventListener(d, rr, { passive: p }), vn.set(d, 1)) : vn.set(d, m + 1);
      }
    }
  };
  a(La(ku)), Ll.add(a);
  var h = void 0, c = sg(() => {
    var f = t ?? e.appendChild(Zf());
    return Ss(() => {
      if (r) {
        vu({});
        var u = (
          /** @type {ComponentContext} */
          ft
        );
        u.c = r;
      }
      s && (i.$$events = s), Pl = o, h = n(f, i) || {}, Pl = !0, r && xu();
    }), () => {
      var p;
      for (var u of l) {
        e.removeEventListener(u, rr);
        var d = (
          /** @type {number} */
          vn.get(u)
        );
        --d === 0 ? (document.removeEventListener(u, rr), vn.delete(u)) : vn.set(u, d);
      }
      Ll.delete(a), f !== t && ((p = f.parentNode) == null || p.removeChild(f));
    };
  });
  return Sg.set(h, c), h;
}
let Sg = /* @__PURE__ */ new WeakMap();
function Qi(n, e, [t, i] = [0, 0]) {
  var s = n, r = null, o = null, l = rt, a = t > 0 ? Eo : 0, h = !1;
  const c = (u, d = !0) => {
    h = !0, f(d, u);
  }, f = (u, d) => {
    l !== (l = u) && (l ? (r ? Gr(r) : d && (r = Ss(() => d(s))), o && Kr(o, () => {
      o = null;
    })) : (o ? Gr(o) : d && (o = Ss(() => d(s, [t + 1, i]))), r && Kr(r, () => {
      r = null;
    })));
  };
  Ia(() => {
    h = !1, e(c), h || f(null, null);
  }, a);
}
function Fh(n, e) {
  return e;
}
function kg(n, e, t, i) {
  for (var s = [], r = e.length, o = 0; o < r; o++)
    Ba(e[o].e, s, !0);
  var l = r > 0 && s.length === 0 && t !== null;
  if (l) {
    var a = (
      /** @type {Element} */
      /** @type {Element} */
      t.parentNode
    );
    Jm(a), a.append(
      /** @type {Element} */
      t
    ), i.clear(), Oi(n, e[0].prev, e[r - 1].next);
  }
  cu(s, () => {
    for (var h = 0; h < r; h++) {
      var c = e[h];
      l || (i.delete(c.k), Oi(n, c.prev, c.next)), Wi(c.e, !l);
    }
  });
}
function Hh(n, e, t, i, s, r = null) {
  var o = n, l = { flags: e, items: /* @__PURE__ */ new Map(), first: null }, a = null, h = !1, c = /* @__PURE__ */ eg(() => {
    var f = t();
    return Ra(f) ? f : f == null ? [] : La(f);
  });
  Ia(() => {
    var f = D(c), u = f.length;
    h && u === 0 || (h = u === 0, Cg(f, l, o, s, e, i, t), r !== null && (u === 0 ? a ? Gr(a) : a = Ss(() => r(o)) : a !== null && Kr(a, () => {
      a = null;
    })), D(c));
  });
}
function Cg(n, e, t, i, s, r, o) {
  var l = n.length, a = e.items, h = e.first, c = h, f, u = null, d = [], p = [], m, g, b, v;
  for (v = 0; v < l; v += 1) {
    if (m = n[v], g = r(m, v), b = a.get(g), b === void 0) {
      var k = c ? (
        /** @type {TemplateNode} */
        c.e.nodes_start
      ) : t;
      u = Mg(
        k,
        e,
        u,
        u === null ? e.first : u.next,
        m,
        g,
        v,
        i,
        s,
        o
      ), a.set(g, u), d = [], p = [], c = u.next;
      continue;
    }
    if (Ag(b, m, v), (b.e.f & gi) !== 0 && Gr(b.e), b !== c) {
      if (f !== void 0 && f.has(b)) {
        if (d.length < p.length) {
          var w = p[0], x;
          u = w.prev;
          var C = d[0], A = d[d.length - 1];
          for (x = 0; x < d.length; x += 1)
            Wh(d[x], w, t);
          for (x = 0; x < p.length; x += 1)
            f.delete(p[x]);
          Oi(e, C.prev, A.next), Oi(e, u, C), Oi(e, A, w), c = w, u = A, v -= 1, d = [], p = [];
        } else
          f.delete(b), Wh(b, c, t), Oi(e, b.prev, b.next), Oi(e, b, u === null ? e.first : u.next), Oi(e, u, b), u = b;
        continue;
      }
      for (d = [], p = []; c !== null && c.k !== g; )
        (c.e.f & gi) === 0 && (f ?? (f = /* @__PURE__ */ new Set())).add(c), p.push(c), c = c.next;
      if (c === null)
        continue;
      b = c;
    }
    d.push(b), u = b, c = b.next;
  }
  if (c !== null || f !== void 0) {
    for (var I = f === void 0 ? [] : La(f); c !== null; )
      (c.e.f & gi) === 0 && I.push(c), c = c.next;
    var H = I.length;
    if (H > 0) {
      var U = null;
      kg(e, I, U, a);
    }
  }
  ne.first = e.first && e.first.e, ne.last = u && u.e;
}
function Ag(n, e, t, i) {
  yu(n.v, e), n.i = t;
}
function Mg(n, e, t, i, s, r, o, l, a, h) {
  var c = (a & Am) !== 0, f = (a & Tm) === 0, u = c ? f ? /* @__PURE__ */ mg(s) : eo(s) : s, d = (a & Mm) === 0 ? o : eo(o), p = {
    i: d,
    v: u,
    k: r,
    a: null,
    // @ts-expect-error
    e: null,
    prev: t,
    next: i
  };
  try {
    return p.e = Ss(() => l(n, u, d, h), Km), p.e.prev = t && t.e, p.e.next = i && i.e, t === null ? e.first = p : (t.next = p, t.e.next = p.e), i !== null && (i.prev = p, i.e.prev = p.e), p;
  } finally {
  }
}
function Wh(n, e, t) {
  for (var i = n.next ? (
    /** @type {TemplateNode} */
    n.next.e.nodes_start
  ) : t, s = e ? (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ) : t, r = (
    /** @type {TemplateNode} */
    n.e.nodes_start
  ); r !== i; ) {
    var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Do(r)
    );
    s.before(r), r = o;
  }
}
function Oi(n, e, t) {
  e === null ? n.first = t : (e.next = t, e.e.next = t && t.e), t !== null && (t.prev = e, t.e.prev = e && e.e);
}
function Vh(n, e, t = !1, i = !1, s = !1) {
  var r = n, o = "";
  Di(() => {
    var l = (
      /** @type {Effect} */
      ne
    );
    if (o !== (o = e() ?? "") && (l.nodes_start !== null && (au(
      l.nodes_start,
      /** @type {TemplateNode} */
      l.nodes_end
    ), l.nodes_start = l.nodes_end = null), o !== "")) {
      var a = o + "";
      t ? a = `<svg>${a}</svg>` : i && (a = `<math>${a}</math>`);
      var h = Cu(a);
      if ((t || i) && (h = /** @type {Element} */
      /* @__PURE__ */ sn(h)), Ha(
        /** @type {TemplateNode} */
        /* @__PURE__ */ sn(h),
        /** @type {TemplateNode} */
        h.lastChild
      ), t || i)
        for (; /* @__PURE__ */ sn(h); )
          r.before(
            /** @type {Node} */
            /* @__PURE__ */ sn(h)
          );
      else
        r.before(h);
    }
  });
}
function Au(n) {
  var e, t, i = "";
  if (typeof n == "string" || typeof n == "number") i += n;
  else if (typeof n == "object") if (Array.isArray(n)) {
    var s = n.length;
    for (e = 0; e < s; e++) n[e] && (t = Au(n[e])) && (i && (i += " "), i += t);
  } else for (t in n) n[t] && (i && (i += " "), i += t);
  return i;
}
function Tg() {
  for (var n, e, t = 0, i = "", s = arguments.length; t < s; t++) (n = arguments[t]) && (e = Au(n)) && (i && (i += " "), i += e);
  return i;
}
function Zi(n) {
  return typeof n == "object" ? Tg(n) : n ?? "";
}
function Eg(n, e, t) {
  var i = n == null ? "" : "" + n;
  return i === "" ? null : i;
}
function Ke(n, e, t, i, s, r) {
  var o = n.__className;
  if (o !== t || o === void 0) {
    var l = Eg(t);
    l == null ? n.removeAttribute("class") : n.className = l, n.__className = t;
  }
  return r;
}
const Dg = Symbol("is custom element"), Og = Symbol("is html");
function _g(n, e) {
  var t = Mu(n);
  t.value === (t.value = // treat null and undefined the same for the initial value
  e ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  n.value === e && (e !== 0 || n.nodeName !== "PROGRESS") || (n.value = e ?? "");
}
function zh(n, e, t, i) {
  var s = Mu(n);
  s[e] !== (s[e] = t) && (t == null ? n.removeAttribute(e) : typeof t != "string" && Rg(n).includes(e) ? n[e] = t : n.setAttribute(e, t));
}
function Mu(n) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    n.__attributes ?? (n.__attributes = {
      [Dg]: n.nodeName.includes("-"),
      [Og]: n.namespaceURI === Om
    })
  );
}
var $h = /* @__PURE__ */ new Map();
function Rg(n) {
  var e = $h.get(n.nodeName);
  if (e) return e;
  $h.set(n.nodeName, e = []);
  for (var t, i = n, s = Element.prototype; s !== i; ) {
    t = Pm(i);
    for (var r in t)
      t[r].set && e.push(r);
    i = jf(i);
  }
  return e;
}
const Lg = () => performance.now(), pi = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (n) => requestAnimationFrame(n)
  ),
  now: () => Lg(),
  tasks: /* @__PURE__ */ new Set()
};
function Tu() {
  const n = pi.now();
  pi.tasks.forEach((e) => {
    e.c(n) || (pi.tasks.delete(e), e.f());
  }), pi.tasks.size !== 0 && pi.tick(Tu);
}
function Pg(n) {
  let e;
  return pi.tasks.size === 0 && pi.tick(Tu), {
    promise: new Promise((t) => {
      pi.tasks.add(e = { c: n, f: t });
    }),
    abort() {
      pi.tasks.delete(e);
    }
  };
}
function or(n, e) {
  Su(() => {
    n.dispatchEvent(new CustomEvent(e));
  });
}
function Ig(n) {
  if (n === "float") return "cssFloat";
  if (n === "offset") return "cssOffset";
  if (n.startsWith("--")) return n;
  const e = n.split("-");
  return e.length === 1 ? e[0] : e[0] + e.slice(1).map(
    /** @param {any} word */
    (t) => t[0].toUpperCase() + t.slice(1)
  ).join("");
}
function Uh(n) {
  const e = {}, t = n.split(";");
  for (const i of t) {
    const [s, r] = i.split(":");
    if (!s || r === void 0) break;
    const o = Ig(s.trim());
    e[o] = r.trim();
  }
  return e;
}
const Bg = (n) => n;
function qh(n, e, t, i) {
  var s = (n & Em) !== 0, r = "both", o, l = e.inert, a = e.style.overflow, h, c;
  function f() {
    var g = se, b = ne;
    Rt(null), ii(null);
    try {
      return o ?? (o = t()(e, (i == null ? void 0 : i()) ?? /** @type {P} */
      {}, {
        direction: r
      }));
    } finally {
      Rt(g), ii(b);
    }
  }
  var u = {
    is_global: s,
    in() {
      e.inert = l, or(e, "introstart"), h = Il(e, f(), c, 1, () => {
        or(e, "introend"), h == null || h.abort(), h = o = void 0, e.style.overflow = a;
      });
    },
    out(g) {
      e.inert = !0, or(e, "outrostart"), c = Il(e, f(), h, 0, () => {
        or(e, "outroend"), g == null || g();
      });
    },
    stop: () => {
      h == null || h.abort(), c == null || c.abort();
    }
  }, d = (
    /** @type {Effect} */
    ne
  );
  if ((d.transitions ?? (d.transitions = [])).push(u), Pl) {
    var p = s;
    if (!p) {
      for (var m = (
        /** @type {Effect | null} */
        d.parent
      ); m && (m.f & Eo) !== 0; )
        for (; (m = m.parent) && (m.f & Mo) === 0; )
          ;
      p = !m || (m.f & Gf) !== 0;
    }
    p && Oo(() => {
      zs(() => u.in());
    });
  }
}
function Il(n, e, t, i, s) {
  var r = i === 1;
  if (Nm(e)) {
    var o, l = !1;
    return Xr(() => {
      if (!l) {
        var g = e({ direction: r ? "in" : "out" });
        o = Il(n, g, t, i, s);
      }
    }), {
      abort: () => {
        l = !0, o == null || o.abort();
      },
      deactivate: () => o.deactivate(),
      reset: () => o.reset(),
      t: () => o.t()
    };
  }
  if (t == null || t.deactivate(), !(e != null && e.duration))
    return s(), {
      abort: Qn,
      deactivate: Qn,
      reset: Qn,
      t: () => i
    };
  const { delay: a = 0, css: h, tick: c, easing: f = Bg } = e;
  var u = [];
  if (r && t === void 0 && (c && c(0, 1), h)) {
    var d = Uh(h(0, 1));
    u.push(d, d);
  }
  var p = () => 1 - i, m = n.animate(u, { duration: a });
  return m.onfinish = () => {
    var g = (t == null ? void 0 : t.t()) ?? 1 - i;
    t == null || t.abort();
    var b = i - g, v = (
      /** @type {number} */
      e.duration * Math.abs(b)
    ), k = [];
    if (v > 0) {
      var w = !1;
      if (h)
        for (var x = Math.ceil(v / 16.666666666666668), C = 0; C <= x; C += 1) {
          var A = g + b * f(C / x), I = Uh(h(A, 1 - A));
          k.push(I), w || (w = I.overflow === "hidden");
        }
      w && (n.style.overflow = "hidden"), p = () => {
        var H = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          m.currentTime
        );
        return g + b * f(H / v);
      }, c && Pg(() => {
        if (m.playState !== "running") return !1;
        var H = p();
        return c(H, 1 - H), !0;
      });
    }
    m = n.animate(k, { duration: v, fill: "forwards" }), m.onfinish = () => {
      p = () => i, c == null || c(i, 1 - i), s();
    };
  }, {
    abort: () => {
      m && (m.cancel(), m.effect = null, m.onfinish = Qn);
    },
    deactivate: () => {
      s = Qn;
    },
    reset: () => {
      i === 0 && (c == null || c(1, 0));
    },
    t: () => p()
  };
}
function jh(n, e, t = e) {
  Fa(n, "input", (i) => {
    var s = i ? n.defaultValue : n.value;
    if (s = Zo(n) ? el(s) : s, t(s), s !== (s = e())) {
      var r = n.selectionStart, o = n.selectionEnd;
      n.value = s ?? "", o !== null && (n.selectionStart = r, n.selectionEnd = Math.min(o, n.value.length));
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  zs(e) == null && n.value && t(Zo(n) ? el(n.value) : n.value), _o(() => {
    var i = e();
    Zo(n) && i === el(n.value) || n.type === "date" && !i && !n.value || i !== n.value && (n.value = i ?? "");
  });
}
const Qo = /* @__PURE__ */ new Set();
function Kh(n, e, t, i, s = i) {
  var r = t.getAttribute("type") === "checkbox", o = n;
  if (e !== null)
    for (var l of e)
      o = o[l] ?? (o[l] = []);
  o.push(t), Fa(
    t,
    "change",
    () => {
      var a = t.__value;
      r && (a = Ng(o, a, t.checked)), s(a);
    },
    // TODO better default value handling
    () => s(r ? [] : null)
  ), _o(() => {
    var a = i();
    r ? (a = a || [], t.checked = a.includes(t.__value)) : t.checked = Ym(t.__value, a);
  }), ru(() => {
    var a = o.indexOf(t);
    a !== -1 && o.splice(a, 1);
  }), Qo.has(o) || (Qo.add(o), Xr(() => {
    o.sort((a, h) => a.compareDocumentPosition(h) === 4 ? -1 : 1), Qo.delete(o);
  })), Xr(() => {
  });
}
function Gh(n, e, t = e) {
  Fa(n, "change", (i) => {
    var s = i ? n.defaultChecked : n.checked;
    t(s);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  // If defaultChecked is set, then checked == defaultChecked
  zs(e) == null && t(n.checked), _o(() => {
    var i = e();
    n.checked = !!i;
  });
}
function Ng(n, e, t) {
  for (var i = /* @__PURE__ */ new Set(), s = 0; s < n.length; s += 1)
    n[s].checked && i.add(n[s].__value);
  return t || i.delete(e), Array.from(i);
}
function Zo(n) {
  var e = n.type;
  return e === "number" || e === "range";
}
function el(n) {
  return n === "" ? null : +n;
}
function Yh(n, e) {
  return n === e || (n == null ? void 0 : n[Mn]) === e;
}
function Fg(n = {}, e, t, i) {
  return Oo(() => {
    var s, r;
    return _o(() => {
      s = r, r = [], zs(() => {
        n !== t(...r) && (e(n, ...r), s && Yh(t(...s), n) && e(null, ...s));
      });
    }), () => {
      Xr(() => {
        r && Yh(t(...r), n) && e(null, ...r);
      });
    };
  }), n;
}
function Hg(n) {
  ft === null && _m(), Ei(() => {
    const e = zs(n);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function Wg(n, e, t, i) {
  var s;
  s = /** @type {V} */
  n[e];
  var r = (
    /** @type {V} */
    i
  ), o = !0, l = () => (o && (o = !1, r = /** @type {V} */
  i), r);
  s === void 0 && i !== void 0 && (s = l());
  var a;
  return a = () => {
    var h = (
      /** @type {V} */
      n[e]
    );
    return h === void 0 ? l() : (o = !0, h);
  }, a;
}
/*! @license DOMPurify 3.2.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.6/LICENSE */
const {
  entries: Eu,
  setPrototypeOf: Xh,
  isFrozen: Vg,
  getPrototypeOf: zg,
  getOwnPropertyDescriptor: $g
} = Object;
let {
  freeze: et,
  seal: Lt,
  create: Du
} = Object, {
  apply: Bl,
  construct: Nl
} = typeof Reflect < "u" && Reflect;
et || (et = function(e) {
  return e;
});
Lt || (Lt = function(e) {
  return e;
});
Bl || (Bl = function(e, t, i) {
  return e.apply(t, i);
});
Nl || (Nl = function(e, t) {
  return new e(...t);
});
const lr = tt(Array.prototype.forEach), Ug = tt(Array.prototype.lastIndexOf), Jh = tt(Array.prototype.pop), Zn = tt(Array.prototype.push), qg = tt(Array.prototype.splice), Pr = tt(String.prototype.toLowerCase), tl = tt(String.prototype.toString), Qh = tt(String.prototype.match), es = tt(String.prototype.replace), jg = tt(String.prototype.indexOf), Kg = tt(String.prototype.trim), Nt = tt(Object.prototype.hasOwnProperty), Ge = tt(RegExp.prototype.test), ts = Gg(TypeError);
function tt(n) {
  return function(e) {
    e instanceof RegExp && (e.lastIndex = 0);
    for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++)
      i[s - 1] = arguments[s];
    return Bl(n, e, i);
  };
}
function Gg(n) {
  return function() {
    for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
      t[i] = arguments[i];
    return Nl(n, t);
  };
}
function j(n, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Pr;
  Xh && Xh(n, null);
  let i = e.length;
  for (; i--; ) {
    let s = e[i];
    if (typeof s == "string") {
      const r = t(s);
      r !== s && (Vg(e) || (e[i] = r), s = r);
    }
    n[s] = !0;
  }
  return n;
}
function Yg(n) {
  for (let e = 0; e < n.length; e++)
    Nt(n, e) || (n[e] = null);
  return n;
}
function di(n) {
  const e = Du(null);
  for (const [t, i] of Eu(n))
    Nt(n, t) && (Array.isArray(i) ? e[t] = Yg(i) : i && typeof i == "object" && i.constructor === Object ? e[t] = di(i) : e[t] = i);
  return e;
}
function is(n, e) {
  for (; n !== null; ) {
    const i = $g(n, e);
    if (i) {
      if (i.get)
        return tt(i.get);
      if (typeof i.value == "function")
        return tt(i.value);
    }
    n = zg(n);
  }
  function t() {
    return null;
  }
  return t;
}
const Zh = et(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), il = et(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), nl = et(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Xg = et(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), sl = et(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Jg = et(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), ec = et(["#text"]), tc = et(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), rl = et(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), ic = et(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), ar = et(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Qg = Lt(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Zg = Lt(/<%[\w\W]*|[\w\W]*%>/gm), e0 = Lt(/\$\{[\w\W]*/gm), t0 = Lt(/^data-[\-\w.\u00B7-\uFFFF]+$/), i0 = Lt(/^aria-[\-\w]+$/), Ou = Lt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), n0 = Lt(/^(?:\w+script|data):/i), s0 = Lt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), _u = Lt(/^html$/i), r0 = Lt(/^[a-z][.\w]*(-[.\w]+)+$/i);
var nc = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: i0,
  ATTR_WHITESPACE: s0,
  CUSTOM_ELEMENT: r0,
  DATA_ATTR: t0,
  DOCTYPE_NAME: _u,
  ERB_EXPR: Zg,
  IS_ALLOWED_URI: Ou,
  IS_SCRIPT_OR_DATA: n0,
  MUSTACHE_EXPR: Qg,
  TMPLIT_EXPR: e0
});
const ns = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, o0 = function() {
  return typeof window > "u" ? null : window;
}, l0 = function(e, t) {
  if (typeof e != "object" || typeof e.createPolicy != "function")
    return null;
  let i = null;
  const s = "data-tt-policy-suffix";
  t && t.hasAttribute(s) && (i = t.getAttribute(s));
  const r = "dompurify" + (i ? "#" + i : "");
  try {
    return e.createPolicy(r, {
      createHTML(o) {
        return o;
      },
      createScriptURL(o) {
        return o;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + r + " could not be created."), null;
  }
}, sc = function() {
  return {
    afterSanitizeAttributes: [],
    afterSanitizeElements: [],
    afterSanitizeShadowDOM: [],
    beforeSanitizeAttributes: [],
    beforeSanitizeElements: [],
    beforeSanitizeShadowDOM: [],
    uponSanitizeAttribute: [],
    uponSanitizeElement: [],
    uponSanitizeShadowNode: []
  };
};
function Ru() {
  let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : o0();
  const e = (N) => Ru(N);
  if (e.version = "3.2.6", e.removed = [], !n || !n.document || n.document.nodeType !== ns.document || !n.Element)
    return e.isSupported = !1, e;
  let {
    document: t
  } = n;
  const i = t, s = i.currentScript, {
    DocumentFragment: r,
    HTMLTemplateElement: o,
    Node: l,
    Element: a,
    NodeFilter: h,
    NamedNodeMap: c = n.NamedNodeMap || n.MozNamedAttrMap,
    HTMLFormElement: f,
    DOMParser: u,
    trustedTypes: d
  } = n, p = a.prototype, m = is(p, "cloneNode"), g = is(p, "remove"), b = is(p, "nextSibling"), v = is(p, "childNodes"), k = is(p, "parentNode");
  if (typeof o == "function") {
    const N = t.createElement("template");
    N.content && N.content.ownerDocument && (t = N.content.ownerDocument);
  }
  let w, x = "";
  const {
    implementation: C,
    createNodeIterator: A,
    createDocumentFragment: I,
    getElementsByTagName: H
  } = t, {
    importNode: U
  } = i;
  let P = sc();
  e.isSupported = typeof Eu == "function" && typeof k == "function" && C && C.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: B,
    ERB_EXPR: K,
    TMPLIT_EXPR: q,
    DATA_ATTR: ee,
    ARIA_ATTR: ke,
    IS_SCRIPT_OR_DATA: Ee,
    ATTR_WHITESPACE: Fe,
    CUSTOM_ELEMENT: me
  } = nc;
  let {
    IS_ALLOWED_URI: De
  } = nc, X = null;
  const Oe = j({}, [...Zh, ...il, ...nl, ...sl, ...ec]);
  let Q = null;
  const dt = j({}, [...tc, ...rl, ...ic, ...ar]);
  let te = Object.seal(Du(null, {
    tagNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: !1
    }
  })), wt = null, ki = null, Un = !0, qn = !0, Ys = !1, Xs = !0, Ci = !1, V = !0, W = !1, _e = !1, Re = !1, he = !1, ye = !1, it = !1, li = !0, Ai = !1;
  const nt = "user-content-";
  let be = !0, je = !1, pt = {}, ai = null;
  const Js = j({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let Qs = null;
  const Zs = j({}, ["audio", "video", "img", "source", "image", "track"]);
  let Gi = null;
  const er = j({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Yi = "http://www.w3.org/1998/Math/MathML", yn = "http://www.w3.org/2000/svg", St = "http://www.w3.org/1999/xhtml";
  let hi = St, bn = !1, jn = null;
  const Ko = j({}, [Yi, yn, St], tl);
  let Xi = j({}, ["mi", "mo", "mn", "ms", "mtext"]), Ji = j({}, ["annotation-xml"]);
  const tr = j({}, ["title", "style", "font", "a", "script"]);
  let Mi = null;
  const ir = ["application/xhtml+xml", "text/html"], nr = "text/html";
  let ve = null, ci = null;
  const Go = t.createElement("form"), sr = function(y) {
    return y instanceof RegExp || y instanceof Function;
  }, Kn = function() {
    let y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(ci && ci === y)) {
      if ((!y || typeof y != "object") && (y = {}), y = di(y), Mi = // eslint-disable-next-line unicorn/prefer-includes
      ir.indexOf(y.PARSER_MEDIA_TYPE) === -1 ? nr : y.PARSER_MEDIA_TYPE, ve = Mi === "application/xhtml+xml" ? tl : Pr, X = Nt(y, "ALLOWED_TAGS") ? j({}, y.ALLOWED_TAGS, ve) : Oe, Q = Nt(y, "ALLOWED_ATTR") ? j({}, y.ALLOWED_ATTR, ve) : dt, jn = Nt(y, "ALLOWED_NAMESPACES") ? j({}, y.ALLOWED_NAMESPACES, tl) : Ko, Gi = Nt(y, "ADD_URI_SAFE_ATTR") ? j(di(er), y.ADD_URI_SAFE_ATTR, ve) : er, Qs = Nt(y, "ADD_DATA_URI_TAGS") ? j(di(Zs), y.ADD_DATA_URI_TAGS, ve) : Zs, ai = Nt(y, "FORBID_CONTENTS") ? j({}, y.FORBID_CONTENTS, ve) : Js, wt = Nt(y, "FORBID_TAGS") ? j({}, y.FORBID_TAGS, ve) : di({}), ki = Nt(y, "FORBID_ATTR") ? j({}, y.FORBID_ATTR, ve) : di({}), pt = Nt(y, "USE_PROFILES") ? y.USE_PROFILES : !1, Un = y.ALLOW_ARIA_ATTR !== !1, qn = y.ALLOW_DATA_ATTR !== !1, Ys = y.ALLOW_UNKNOWN_PROTOCOLS || !1, Xs = y.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Ci = y.SAFE_FOR_TEMPLATES || !1, V = y.SAFE_FOR_XML !== !1, W = y.WHOLE_DOCUMENT || !1, he = y.RETURN_DOM || !1, ye = y.RETURN_DOM_FRAGMENT || !1, it = y.RETURN_TRUSTED_TYPE || !1, Re = y.FORCE_BODY || !1, li = y.SANITIZE_DOM !== !1, Ai = y.SANITIZE_NAMED_PROPS || !1, be = y.KEEP_CONTENT !== !1, je = y.IN_PLACE || !1, De = y.ALLOWED_URI_REGEXP || Ou, hi = y.NAMESPACE || St, Xi = y.MATHML_TEXT_INTEGRATION_POINTS || Xi, Ji = y.HTML_INTEGRATION_POINTS || Ji, te = y.CUSTOM_ELEMENT_HANDLING || {}, y.CUSTOM_ELEMENT_HANDLING && sr(y.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (te.tagNameCheck = y.CUSTOM_ELEMENT_HANDLING.tagNameCheck), y.CUSTOM_ELEMENT_HANDLING && sr(y.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (te.attributeNameCheck = y.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), y.CUSTOM_ELEMENT_HANDLING && typeof y.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (te.allowCustomizedBuiltInElements = y.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Ci && (qn = !1), ye && (he = !0), pt && (X = j({}, ec), Q = [], pt.html === !0 && (j(X, Zh), j(Q, tc)), pt.svg === !0 && (j(X, il), j(Q, rl), j(Q, ar)), pt.svgFilters === !0 && (j(X, nl), j(Q, rl), j(Q, ar)), pt.mathMl === !0 && (j(X, sl), j(Q, ic), j(Q, ar))), y.ADD_TAGS && (X === Oe && (X = di(X)), j(X, y.ADD_TAGS, ve)), y.ADD_ATTR && (Q === dt && (Q = di(Q)), j(Q, y.ADD_ATTR, ve)), y.ADD_URI_SAFE_ATTR && j(Gi, y.ADD_URI_SAFE_ATTR, ve), y.FORBID_CONTENTS && (ai === Js && (ai = di(ai)), j(ai, y.FORBID_CONTENTS, ve)), be && (X["#text"] = !0), W && j(X, ["html", "head", "body"]), X.table && (j(X, ["tbody"]), delete wt.tbody), y.TRUSTED_TYPES_POLICY) {
        if (typeof y.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw ts('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof y.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw ts('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        w = y.TRUSTED_TYPES_POLICY, x = w.createHTML("");
      } else
        w === void 0 && (w = l0(d, s)), w !== null && typeof x == "string" && (x = w.createHTML(""));
      et && et(y), ci = y;
    }
  }, Gn = j({}, [...il, ...nl, ...Xg]), Yn = j({}, [...sl, ...Jg]), Yo = function(y) {
    let M = k(y);
    (!M || !M.tagName) && (M = {
      namespaceURI: hi,
      tagName: "template"
    });
    const L = Pr(y.tagName), ue = Pr(M.tagName);
    return jn[y.namespaceURI] ? y.namespaceURI === yn ? M.namespaceURI === St ? L === "svg" : M.namespaceURI === Yi ? L === "svg" && (ue === "annotation-xml" || Xi[ue]) : !!Gn[L] : y.namespaceURI === Yi ? M.namespaceURI === St ? L === "math" : M.namespaceURI === yn ? L === "math" && Ji[ue] : !!Yn[L] : y.namespaceURI === St ? M.namespaceURI === yn && !Ji[ue] || M.namespaceURI === Yi && !Xi[ue] ? !1 : !Yn[L] && (tr[L] || !Gn[L]) : !!(Mi === "application/xhtml+xml" && jn[y.namespaceURI]) : !1;
  }, kt = function(y) {
    Zn(e.removed, {
      element: y
    });
    try {
      k(y).removeChild(y);
    } catch {
      g(y);
    }
  }, Ti = function(y, M) {
    try {
      Zn(e.removed, {
        attribute: M.getAttributeNode(y),
        from: M
      });
    } catch {
      Zn(e.removed, {
        attribute: null,
        from: M
      });
    }
    if (M.removeAttribute(y), y === "is")
      if (he || ye)
        try {
          kt(M);
        } catch {
        }
      else
        try {
          M.setAttribute(y, "");
        } catch {
        }
  }, xe = function(y) {
    let M = null, L = null;
    if (Re)
      y = "<remove></remove>" + y;
    else {
      const Ce = Qh(y, /^[\r\n\t ]+/);
      L = Ce && Ce[0];
    }
    Mi === "application/xhtml+xml" && hi === St && (y = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + y + "</body></html>");
    const ue = w ? w.createHTML(y) : y;
    if (hi === St)
      try {
        M = new u().parseFromString(ue, Mi);
      } catch {
      }
    if (!M || !M.documentElement) {
      M = C.createDocument(hi, "template", null);
      try {
        M.documentElement.innerHTML = bn ? x : ue;
      } catch {
      }
    }
    const He = M.body || M.documentElement;
    return y && L && He.insertBefore(t.createTextNode(L), He.childNodes[0] || null), hi === St ? H.call(M, W ? "html" : "body")[0] : W ? M.documentElement : He;
  }, mt = function(y) {
    return A.call(
      y.ownerDocument || y,
      y,
      // eslint-disable-next-line no-bitwise
      h.SHOW_ELEMENT | h.SHOW_COMMENT | h.SHOW_TEXT | h.SHOW_PROCESSING_INSTRUCTION | h.SHOW_CDATA_SECTION,
      null
    );
  }, Xn = function(y) {
    return y instanceof f && (typeof y.nodeName != "string" || typeof y.textContent != "string" || typeof y.removeChild != "function" || !(y.attributes instanceof c) || typeof y.removeAttribute != "function" || typeof y.setAttribute != "function" || typeof y.namespaceURI != "string" || typeof y.insertBefore != "function" || typeof y.hasChildNodes != "function");
  }, xh = function(y) {
    return typeof l == "function" && y instanceof l;
  };
  function fi(N, y, M) {
    lr(N, (L) => {
      L.call(e, y, M, ci);
    });
  }
  const wh = function(y) {
    let M = null;
    if (fi(P.beforeSanitizeElements, y, null), Xn(y))
      return kt(y), !0;
    const L = ve(y.nodeName);
    if (fi(P.uponSanitizeElement, y, {
      tagName: L,
      allowedTags: X
    }), V && y.hasChildNodes() && !xh(y.firstElementChild) && Ge(/<[/\w!]/g, y.innerHTML) && Ge(/<[/\w!]/g, y.textContent) || y.nodeType === ns.progressingInstruction || V && y.nodeType === ns.comment && Ge(/<[/\w]/g, y.data))
      return kt(y), !0;
    if (!X[L] || wt[L]) {
      if (!wt[L] && kh(L) && (te.tagNameCheck instanceof RegExp && Ge(te.tagNameCheck, L) || te.tagNameCheck instanceof Function && te.tagNameCheck(L)))
        return !1;
      if (be && !ai[L]) {
        const ue = k(y) || y.parentNode, He = v(y) || y.childNodes;
        if (He && ue) {
          const Ce = He.length;
          for (let st = Ce - 1; st >= 0; --st) {
            const ui = m(He[st], !0);
            ui.__removalCount = (y.__removalCount || 0) + 1, ue.insertBefore(ui, b(y));
          }
        }
      }
      return kt(y), !0;
    }
    return y instanceof a && !Yo(y) || (L === "noscript" || L === "noembed" || L === "noframes") && Ge(/<\/no(script|embed|frames)/i, y.innerHTML) ? (kt(y), !0) : (Ci && y.nodeType === ns.text && (M = y.textContent, lr([B, K, q], (ue) => {
      M = es(M, ue, " ");
    }), y.textContent !== M && (Zn(e.removed, {
      element: y.cloneNode()
    }), y.textContent = M)), fi(P.afterSanitizeElements, y, null), !1);
  }, Sh = function(y, M, L) {
    if (li && (M === "id" || M === "name") && (L in t || L in Go))
      return !1;
    if (!(qn && !ki[M] && Ge(ee, M))) {
      if (!(Un && Ge(ke, M))) {
        if (!Q[M] || ki[M]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(kh(y) && (te.tagNameCheck instanceof RegExp && Ge(te.tagNameCheck, y) || te.tagNameCheck instanceof Function && te.tagNameCheck(y)) && (te.attributeNameCheck instanceof RegExp && Ge(te.attributeNameCheck, M) || te.attributeNameCheck instanceof Function && te.attributeNameCheck(M)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            M === "is" && te.allowCustomizedBuiltInElements && (te.tagNameCheck instanceof RegExp && Ge(te.tagNameCheck, L) || te.tagNameCheck instanceof Function && te.tagNameCheck(L)))
          ) return !1;
        } else if (!Gi[M]) {
          if (!Ge(De, es(L, Fe, ""))) {
            if (!((M === "src" || M === "xlink:href" || M === "href") && y !== "script" && jg(L, "data:") === 0 && Qs[y])) {
              if (!(Ys && !Ge(Ee, es(L, Fe, "")))) {
                if (L)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, kh = function(y) {
    return y !== "annotation-xml" && Qh(y, me);
  }, Ch = function(y) {
    fi(P.beforeSanitizeAttributes, y, null);
    const {
      attributes: M
    } = y;
    if (!M || Xn(y))
      return;
    const L = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: Q,
      forceKeepAttr: void 0
    };
    let ue = M.length;
    for (; ue--; ) {
      const He = M[ue], {
        name: Ce,
        namespaceURI: st,
        value: ui
      } = He, Jn = ve(Ce), Xo = ui;
      let We = Ce === "value" ? Xo : Kg(Xo);
      if (L.attrName = Jn, L.attrValue = We, L.keepAttr = !0, L.forceKeepAttr = void 0, fi(P.uponSanitizeAttribute, y, L), We = L.attrValue, Ai && (Jn === "id" || Jn === "name") && (Ti(Ce, y), We = nt + We), V && Ge(/((--!?|])>)|<\/(style|title)/i, We)) {
        Ti(Ce, y);
        continue;
      }
      if (L.forceKeepAttr)
        continue;
      if (!L.keepAttr) {
        Ti(Ce, y);
        continue;
      }
      if (!Xs && Ge(/\/>/i, We)) {
        Ti(Ce, y);
        continue;
      }
      Ci && lr([B, K, q], (Mh) => {
        We = es(We, Mh, " ");
      });
      const Ah = ve(y.nodeName);
      if (!Sh(Ah, Jn, We)) {
        Ti(Ce, y);
        continue;
      }
      if (w && typeof d == "object" && typeof d.getAttributeType == "function" && !st)
        switch (d.getAttributeType(Ah, Jn)) {
          case "TrustedHTML": {
            We = w.createHTML(We);
            break;
          }
          case "TrustedScriptURL": {
            We = w.createScriptURL(We);
            break;
          }
        }
      if (We !== Xo)
        try {
          st ? y.setAttributeNS(st, Ce, We) : y.setAttribute(Ce, We), Xn(y) ? kt(y) : Jh(e.removed);
        } catch {
          Ti(Ce, y);
        }
    }
    fi(P.afterSanitizeAttributes, y, null);
  }, km = function N(y) {
    let M = null;
    const L = mt(y);
    for (fi(P.beforeSanitizeShadowDOM, y, null); M = L.nextNode(); )
      fi(P.uponSanitizeShadowNode, M, null), wh(M), Ch(M), M.content instanceof r && N(M.content);
    fi(P.afterSanitizeShadowDOM, y, null);
  };
  return e.sanitize = function(N) {
    let y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, M = null, L = null, ue = null, He = null;
    if (bn = !N, bn && (N = "<!-->"), typeof N != "string" && !xh(N))
      if (typeof N.toString == "function") {
        if (N = N.toString(), typeof N != "string")
          throw ts("dirty is not a string, aborting");
      } else
        throw ts("toString is not a function");
    if (!e.isSupported)
      return N;
    if (_e || Kn(y), e.removed = [], typeof N == "string" && (je = !1), je) {
      if (N.nodeName) {
        const ui = ve(N.nodeName);
        if (!X[ui] || wt[ui])
          throw ts("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (N instanceof l)
      M = xe("<!---->"), L = M.ownerDocument.importNode(N, !0), L.nodeType === ns.element && L.nodeName === "BODY" || L.nodeName === "HTML" ? M = L : M.appendChild(L);
    else {
      if (!he && !Ci && !W && // eslint-disable-next-line unicorn/prefer-includes
      N.indexOf("<") === -1)
        return w && it ? w.createHTML(N) : N;
      if (M = xe(N), !M)
        return he ? null : it ? x : "";
    }
    M && Re && kt(M.firstChild);
    const Ce = mt(je ? N : M);
    for (; ue = Ce.nextNode(); )
      wh(ue), Ch(ue), ue.content instanceof r && km(ue.content);
    if (je)
      return N;
    if (he) {
      if (ye)
        for (He = I.call(M.ownerDocument); M.firstChild; )
          He.appendChild(M.firstChild);
      else
        He = M;
      return (Q.shadowroot || Q.shadowrootmode) && (He = U.call(i, He, !0)), He;
    }
    let st = W ? M.outerHTML : M.innerHTML;
    return W && X["!doctype"] && M.ownerDocument && M.ownerDocument.doctype && M.ownerDocument.doctype.name && Ge(_u, M.ownerDocument.doctype.name) && (st = "<!DOCTYPE " + M.ownerDocument.doctype.name + `>
` + st), Ci && lr([B, K, q], (ui) => {
      st = es(st, ui, " ");
    }), w && it ? w.createHTML(st) : st;
  }, e.setConfig = function() {
    let N = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Kn(N), _e = !0;
  }, e.clearConfig = function() {
    ci = null, _e = !1;
  }, e.isValidAttribute = function(N, y, M) {
    ci || Kn({});
    const L = ve(N), ue = ve(y);
    return Sh(L, ue, M);
  }, e.addHook = function(N, y) {
    typeof y == "function" && Zn(P[N], y);
  }, e.removeHook = function(N, y) {
    if (y !== void 0) {
      const M = Ug(P[N], y);
      return M === -1 ? void 0 : qg(P[N], M, 1)[0];
    }
    return Jh(P[N]);
  }, e.removeHooks = function(N) {
    P[N] = [];
  }, e.removeAllHooks = function() {
    P = sc();
  }, e;
}
var a0 = Ru();
let Fl = [], Lu = [];
(() => {
  let n = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((e) => e ? parseInt(e, 36) : 1);
  for (let e = 0, t = 0; e < n.length; e++)
    (e % 2 ? Lu : Fl).push(t = t + n[e]);
})();
function h0(n) {
  if (n < 768) return !1;
  for (let e = 0, t = Fl.length; ; ) {
    let i = e + t >> 1;
    if (n < Fl[i]) t = i;
    else if (n >= Lu[i]) e = i + 1;
    else return !0;
    if (e == t) return !1;
  }
}
function rc(n) {
  return n >= 127462 && n <= 127487;
}
const oc = 8205;
function c0(n, e, t = !0, i = !0) {
  return (t ? Pu : f0)(n, e, i);
}
function Pu(n, e, t) {
  if (e == n.length) return e;
  e && Iu(n.charCodeAt(e)) && Bu(n.charCodeAt(e - 1)) && e--;
  let i = ol(n, e);
  for (e += lc(i); e < n.length; ) {
    let s = ol(n, e);
    if (i == oc || s == oc || t && h0(s))
      e += lc(s), i = s;
    else if (rc(s)) {
      let r = 0, o = e - 2;
      for (; o >= 0 && rc(ol(n, o)); )
        r++, o -= 2;
      if (r % 2 == 0) break;
      e += 2;
    } else
      break;
  }
  return e;
}
function f0(n, e, t) {
  for (; e > 0; ) {
    let i = Pu(n, e - 2, t);
    if (i < e) return i;
    e--;
  }
  return 0;
}
function ol(n, e) {
  let t = n.charCodeAt(e);
  if (!Bu(t) || e + 1 == n.length) return t;
  let i = n.charCodeAt(e + 1);
  return Iu(i) ? (t - 55296 << 10) + (i - 56320) + 65536 : t;
}
function Iu(n) {
  return n >= 56320 && n < 57344;
}
function Bu(n) {
  return n >= 55296 && n < 56320;
}
function lc(n) {
  return n < 65536 ? 1 : 2;
}
let Z = class Nu {
  /**
  Get the line description around the given position.
  */
  lineAt(e) {
    if (e < 0 || e > this.length)
      throw new RangeError(`Invalid position ${e} in document of length ${this.length}`);
    return this.lineInner(e, !1, 1, 0);
  }
  /**
  Get the description for the given (1-based) line number.
  */
  line(e) {
    if (e < 1 || e > this.lines)
      throw new RangeError(`Invalid line number ${e} in ${this.lines}-line document`);
    return this.lineInner(e, !0, 1, 0);
  }
  /**
  Replace a range of the text with the given content.
  */
  replace(e, t, i) {
    [e, t] = Rn(this, e, t);
    let s = [];
    return this.decompose(
      0,
      e,
      s,
      2
      /* Open.To */
    ), i.length && i.decompose(
      0,
      i.length,
      s,
      3
      /* Open.To */
    ), this.decompose(
      t,
      this.length,
      s,
      1
      /* Open.From */
    ), Gt.from(s, this.length - (t - e) + i.length);
  }
  /**
  Append another document to this one.
  */
  append(e) {
    return this.replace(this.length, this.length, e);
  }
  /**
  Retrieve the text between the given points.
  */
  slice(e, t = this.length) {
    [e, t] = Rn(this, e, t);
    let i = [];
    return this.decompose(e, t, i, 0), Gt.from(i, t - e);
  }
  /**
  Test whether this text is equal to another instance.
  */
  eq(e) {
    if (e == this)
      return !0;
    if (e.length != this.length || e.lines != this.lines)
      return !1;
    let t = this.scanIdentical(e, 1), i = this.length - this.scanIdentical(e, -1), s = new gs(this), r = new gs(e);
    for (let o = t, l = t; ; ) {
      if (s.next(o), r.next(o), o = 0, s.lineBreak != r.lineBreak || s.done != r.done || s.value != r.value)
        return !1;
      if (l += s.value.length, s.done || l >= i)
        return !0;
    }
  }
  /**
  Iterate over the text. When `dir` is `-1`, iteration happens
  from end to start. This will return lines and the breaks between
  them as separate strings.
  */
  iter(e = 1) {
    return new gs(this, e);
  }
  /**
  Iterate over a range of the text. When `from` > `to`, the
  iterator will run in reverse.
  */
  iterRange(e, t = this.length) {
    return new Fu(this, e, t);
  }
  /**
  Return a cursor that iterates over the given range of lines,
  _without_ returning the line breaks between, and yielding empty
  strings for empty lines.
  
  When `from` and `to` are given, they should be 1-based line numbers.
  */
  iterLines(e, t) {
    let i;
    if (e == null)
      i = this.iter();
    else {
      t == null && (t = this.lines + 1);
      let s = this.line(e).from;
      i = this.iterRange(s, Math.max(s, t == this.lines + 1 ? this.length : t <= 1 ? 0 : this.line(t - 1).to));
    }
    return new Hu(i);
  }
  /**
  Return the document as a string, using newline characters to
  separate lines.
  */
  toString() {
    return this.sliceString(0);
  }
  /**
  Convert the document to an array of lines (which can be
  deserialized again via [`Text.of`](https://codemirror.net/6/docs/ref/#state.Text^of)).
  */
  toJSON() {
    let e = [];
    return this.flatten(e), e;
  }
  /**
  @internal
  */
  constructor() {
  }
  /**
  Create a `Text` instance for the given array of lines.
  */
  static of(e) {
    if (e.length == 0)
      throw new RangeError("A document must have at least one line");
    return e.length == 1 && !e[0] ? Nu.empty : e.length <= 32 ? new ge(e) : Gt.from(ge.split(e, []));
  }
};
class ge extends Z {
  constructor(e, t = u0(e)) {
    super(), this.text = e, this.length = t;
  }
  get lines() {
    return this.text.length;
  }
  get children() {
    return null;
  }
  lineInner(e, t, i, s) {
    for (let r = 0; ; r++) {
      let o = this.text[r], l = s + o.length;
      if ((t ? i : l) >= e)
        return new d0(s, l, i, o);
      s = l + 1, i++;
    }
  }
  decompose(e, t, i, s) {
    let r = e <= 0 && t >= this.length ? this : new ge(ac(this.text, e, t), Math.min(t, this.length) - Math.max(0, e));
    if (s & 1) {
      let o = i.pop(), l = Ir(r.text, o.text.slice(), 0, r.length);
      if (l.length <= 32)
        i.push(new ge(l, o.length + r.length));
      else {
        let a = l.length >> 1;
        i.push(new ge(l.slice(0, a)), new ge(l.slice(a)));
      }
    } else
      i.push(r);
  }
  replace(e, t, i) {
    if (!(i instanceof ge))
      return super.replace(e, t, i);
    [e, t] = Rn(this, e, t);
    let s = Ir(this.text, Ir(i.text, ac(this.text, 0, e)), t), r = this.length + i.length - (t - e);
    return s.length <= 32 ? new ge(s, r) : Gt.from(ge.split(s, []), r);
  }
  sliceString(e, t = this.length, i = `
`) {
    [e, t] = Rn(this, e, t);
    let s = "";
    for (let r = 0, o = 0; r <= t && o < this.text.length; o++) {
      let l = this.text[o], a = r + l.length;
      r > e && o && (s += i), e < a && t > r && (s += l.slice(Math.max(0, e - r), t - r)), r = a + 1;
    }
    return s;
  }
  flatten(e) {
    for (let t of this.text)
      e.push(t);
  }
  scanIdentical() {
    return 0;
  }
  static split(e, t) {
    let i = [], s = -1;
    for (let r of e)
      i.push(r), s += r.length + 1, i.length == 32 && (t.push(new ge(i, s)), i = [], s = -1);
    return s > -1 && t.push(new ge(i, s)), t;
  }
}
class Gt extends Z {
  constructor(e, t) {
    super(), this.children = e, this.length = t, this.lines = 0;
    for (let i of e)
      this.lines += i.lines;
  }
  lineInner(e, t, i, s) {
    for (let r = 0; ; r++) {
      let o = this.children[r], l = s + o.length, a = i + o.lines - 1;
      if ((t ? a : l) >= e)
        return o.lineInner(e, t, i, s);
      s = l + 1, i = a + 1;
    }
  }
  decompose(e, t, i, s) {
    for (let r = 0, o = 0; o <= t && r < this.children.length; r++) {
      let l = this.children[r], a = o + l.length;
      if (e <= a && t >= o) {
        let h = s & ((o <= e ? 1 : 0) | (a >= t ? 2 : 0));
        o >= e && a <= t && !h ? i.push(l) : l.decompose(e - o, t - o, i, h);
      }
      o = a + 1;
    }
  }
  replace(e, t, i) {
    if ([e, t] = Rn(this, e, t), i.lines < this.lines)
      for (let s = 0, r = 0; s < this.children.length; s++) {
        let o = this.children[s], l = r + o.length;
        if (e >= r && t <= l) {
          let a = o.replace(e - r, t - r, i), h = this.lines - o.lines + a.lines;
          if (a.lines < h >> 4 && a.lines > h >> 6) {
            let c = this.children.slice();
            return c[s] = a, new Gt(c, this.length - (t - e) + i.length);
          }
          return super.replace(r, l, a);
        }
        r = l + 1;
      }
    return super.replace(e, t, i);
  }
  sliceString(e, t = this.length, i = `
`) {
    [e, t] = Rn(this, e, t);
    let s = "";
    for (let r = 0, o = 0; r < this.children.length && o <= t; r++) {
      let l = this.children[r], a = o + l.length;
      o > e && r && (s += i), e < a && t > o && (s += l.sliceString(e - o, t - o, i)), o = a + 1;
    }
    return s;
  }
  flatten(e) {
    for (let t of this.children)
      t.flatten(e);
  }
  scanIdentical(e, t) {
    if (!(e instanceof Gt))
      return 0;
    let i = 0, [s, r, o, l] = t > 0 ? [0, 0, this.children.length, e.children.length] : [this.children.length - 1, e.children.length - 1, -1, -1];
    for (; ; s += t, r += t) {
      if (s == o || r == l)
        return i;
      let a = this.children[s], h = e.children[r];
      if (a != h)
        return i + a.scanIdentical(h, t);
      i += a.length + 1;
    }
  }
  static from(e, t = e.reduce((i, s) => i + s.length + 1, -1)) {
    let i = 0;
    for (let d of e)
      i += d.lines;
    if (i < 32) {
      let d = [];
      for (let p of e)
        p.flatten(d);
      return new ge(d, t);
    }
    let s = Math.max(
      32,
      i >> 5
      /* Tree.BranchShift */
    ), r = s << 1, o = s >> 1, l = [], a = 0, h = -1, c = [];
    function f(d) {
      let p;
      if (d.lines > r && d instanceof Gt)
        for (let m of d.children)
          f(m);
      else d.lines > o && (a > o || !a) ? (u(), l.push(d)) : d instanceof ge && a && (p = c[c.length - 1]) instanceof ge && d.lines + p.lines <= 32 ? (a += d.lines, h += d.length + 1, c[c.length - 1] = new ge(p.text.concat(d.text), p.length + 1 + d.length)) : (a + d.lines > s && u(), a += d.lines, h += d.length + 1, c.push(d));
    }
    function u() {
      a != 0 && (l.push(c.length == 1 ? c[0] : Gt.from(c, h)), h = -1, a = c.length = 0);
    }
    for (let d of e)
      f(d);
    return u(), l.length == 1 ? l[0] : new Gt(l, t);
  }
}
Z.empty = /* @__PURE__ */ new ge([""], 0);
function u0(n) {
  let e = -1;
  for (let t of n)
    e += t.length + 1;
  return e;
}
function Ir(n, e, t = 0, i = 1e9) {
  for (let s = 0, r = 0, o = !0; r < n.length && s <= i; r++) {
    let l = n[r], a = s + l.length;
    a >= t && (a > i && (l = l.slice(0, i - s)), s < t && (l = l.slice(t - s)), o ? (e[e.length - 1] += l, o = !1) : e.push(l)), s = a + 1;
  }
  return e;
}
function ac(n, e, t) {
  return Ir(n, [""], e, t);
}
class gs {
  constructor(e, t = 1) {
    this.dir = t, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [e], this.offsets = [t > 0 ? 1 : (e instanceof ge ? e.text.length : e.children.length) << 1];
  }
  nextInner(e, t) {
    for (this.done = this.lineBreak = !1; ; ) {
      let i = this.nodes.length - 1, s = this.nodes[i], r = this.offsets[i], o = r >> 1, l = s instanceof ge ? s.text.length : s.children.length;
      if (o == (t > 0 ? l : 0)) {
        if (i == 0)
          return this.done = !0, this.value = "", this;
        t > 0 && this.offsets[i - 1]++, this.nodes.pop(), this.offsets.pop();
      } else if ((r & 1) == (t > 0 ? 0 : 1)) {
        if (this.offsets[i] += t, e == 0)
          return this.lineBreak = !0, this.value = `
`, this;
        e--;
      } else if (s instanceof ge) {
        let a = s.text[o + (t < 0 ? -1 : 0)];
        if (this.offsets[i] += t, a.length > Math.max(0, e))
          return this.value = e == 0 ? a : t > 0 ? a.slice(e) : a.slice(0, a.length - e), this;
        e -= a.length;
      } else {
        let a = s.children[o + (t < 0 ? -1 : 0)];
        e > a.length ? (e -= a.length, this.offsets[i] += t) : (t < 0 && this.offsets[i]--, this.nodes.push(a), this.offsets.push(t > 0 ? 1 : (a instanceof ge ? a.text.length : a.children.length) << 1));
      }
    }
  }
  next(e = 0) {
    return e < 0 && (this.nextInner(-e, -this.dir), e = this.value.length), this.nextInner(e, this.dir);
  }
}
class Fu {
  constructor(e, t, i) {
    this.value = "", this.done = !1, this.cursor = new gs(e, t > i ? -1 : 1), this.pos = t > i ? e.length : 0, this.from = Math.min(t, i), this.to = Math.max(t, i);
  }
  nextInner(e, t) {
    if (t < 0 ? this.pos <= this.from : this.pos >= this.to)
      return this.value = "", this.done = !0, this;
    e += Math.max(0, t < 0 ? this.pos - this.to : this.from - this.pos);
    let i = t < 0 ? this.pos - this.from : this.to - this.pos;
    e > i && (e = i), i -= e;
    let { value: s } = this.cursor.next(e);
    return this.pos += (s.length + e) * t, this.value = s.length <= i ? s : t < 0 ? s.slice(s.length - i) : s.slice(0, i), this.done = !this.value, this;
  }
  next(e = 0) {
    return e < 0 ? e = Math.max(e, this.from - this.pos) : e > 0 && (e = Math.min(e, this.to - this.pos)), this.nextInner(e, this.cursor.dir);
  }
  get lineBreak() {
    return this.cursor.lineBreak && this.value != "";
  }
}
class Hu {
  constructor(e) {
    this.inner = e, this.afterBreak = !0, this.value = "", this.done = !1;
  }
  next(e = 0) {
    let { done: t, lineBreak: i, value: s } = this.inner.next(e);
    return t && this.afterBreak ? (this.value = "", this.afterBreak = !1) : t ? (this.done = !0, this.value = "") : i ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = s, this.afterBreak = !1), this;
  }
  get lineBreak() {
    return !1;
  }
}
typeof Symbol < "u" && (Z.prototype[Symbol.iterator] = function() {
  return this.iter();
}, gs.prototype[Symbol.iterator] = Fu.prototype[Symbol.iterator] = Hu.prototype[Symbol.iterator] = function() {
  return this;
});
class d0 {
  /**
  @internal
  */
  constructor(e, t, i, s) {
    this.from = e, this.to = t, this.number = i, this.text = s;
  }
  /**
  The length of the line (not including any line break after it).
  */
  get length() {
    return this.to - this.from;
  }
}
function Rn(n, e, t) {
  return e = Math.max(0, Math.min(n.length, e)), [e, Math.max(e, Math.min(n.length, t))];
}
function Be(n, e, t = !0, i = !0) {
  return c0(n, e, t, i);
}
function p0(n) {
  return n >= 56320 && n < 57344;
}
function m0(n) {
  return n >= 55296 && n < 56320;
}
function ot(n, e) {
  let t = n.charCodeAt(e);
  if (!m0(t) || e + 1 == n.length)
    return t;
  let i = n.charCodeAt(e + 1);
  return p0(i) ? (t - 55296 << 10) + (i - 56320) + 65536 : t;
}
function Wa(n) {
  return n <= 65535 ? String.fromCharCode(n) : (n -= 65536, String.fromCharCode((n >> 10) + 55296, (n & 1023) + 56320));
}
function Yt(n) {
  return n < 65536 ? 1 : 2;
}
const Hl = /\r\n?|\n/;
var Xe = /* @__PURE__ */ function(n) {
  return n[n.Simple = 0] = "Simple", n[n.TrackDel = 1] = "TrackDel", n[n.TrackBefore = 2] = "TrackBefore", n[n.TrackAfter = 3] = "TrackAfter", n;
}(Xe || (Xe = {}));
class ei {
  // Sections are encoded as pairs of integers. The first is the
  // length in the current document, and the second is -1 for
  // unaffected sections, and the length of the replacement content
  // otherwise. So an insertion would be (0, n>0), a deletion (n>0,
  // 0), and a replacement two positive numbers.
  /**
  @internal
  */
  constructor(e) {
    this.sections = e;
  }
  /**
  The length of the document before the change.
  */
  get length() {
    let e = 0;
    for (let t = 0; t < this.sections.length; t += 2)
      e += this.sections[t];
    return e;
  }
  /**
  The length of the document after the change.
  */
  get newLength() {
    let e = 0;
    for (let t = 0; t < this.sections.length; t += 2) {
      let i = this.sections[t + 1];
      e += i < 0 ? this.sections[t] : i;
    }
    return e;
  }
  /**
  False when there are actual changes in this set.
  */
  get empty() {
    return this.sections.length == 0 || this.sections.length == 2 && this.sections[1] < 0;
  }
  /**
  Iterate over the unchanged parts left by these changes. `posA`
  provides the position of the range in the old document, `posB`
  the new position in the changed document.
  */
  iterGaps(e) {
    for (let t = 0, i = 0, s = 0; t < this.sections.length; ) {
      let r = this.sections[t++], o = this.sections[t++];
      o < 0 ? (e(i, s, r), s += r) : s += o, i += r;
    }
  }
  /**
  Iterate over the ranges changed by these changes. (See
  [`ChangeSet.iterChanges`](https://codemirror.net/6/docs/ref/#state.ChangeSet.iterChanges) for a
  variant that also provides you with the inserted text.)
  `fromA`/`toA` provides the extent of the change in the starting
  document, `fromB`/`toB` the extent of the replacement in the
  changed document.
  
  When `individual` is true, adjacent changes (which are kept
  separate for [position mapping](https://codemirror.net/6/docs/ref/#state.ChangeDesc.mapPos)) are
  reported separately.
  */
  iterChangedRanges(e, t = !1) {
    Wl(this, e, t);
  }
  /**
  Get a description of the inverted form of these changes.
  */
  get invertedDesc() {
    let e = [];
    for (let t = 0; t < this.sections.length; ) {
      let i = this.sections[t++], s = this.sections[t++];
      s < 0 ? e.push(i, s) : e.push(s, i);
    }
    return new ei(e);
  }
  /**
  Compute the combined effect of applying another set of changes
  after this one. The length of the document after this set should
  match the length before `other`.
  */
  composeDesc(e) {
    return this.empty ? e : e.empty ? this : Wu(this, e);
  }
  /**
  Map this description, which should start with the same document
  as `other`, over another set of changes, so that it can be
  applied after it. When `before` is true, map as if the changes
  in `this` happened before the ones in `other`.
  */
  mapDesc(e, t = !1) {
    return e.empty ? this : Vl(this, e, t);
  }
  mapPos(e, t = -1, i = Xe.Simple) {
    let s = 0, r = 0;
    for (let o = 0; o < this.sections.length; ) {
      let l = this.sections[o++], a = this.sections[o++], h = s + l;
      if (a < 0) {
        if (h > e)
          return r + (e - s);
        r += l;
      } else {
        if (i != Xe.Simple && h >= e && (i == Xe.TrackDel && s < e && h > e || i == Xe.TrackBefore && s < e || i == Xe.TrackAfter && h > e))
          return null;
        if (h > e || h == e && t < 0 && !l)
          return e == s || t < 0 ? r : r + a;
        r += a;
      }
      s = h;
    }
    if (e > s)
      throw new RangeError(`Position ${e} is out of range for changeset of length ${s}`);
    return r;
  }
  /**
  Check whether these changes touch a given range. When one of the
  changes entirely covers the range, the string `"cover"` is
  returned.
  */
  touchesRange(e, t = e) {
    for (let i = 0, s = 0; i < this.sections.length && s <= t; ) {
      let r = this.sections[i++], o = this.sections[i++], l = s + r;
      if (o >= 0 && s <= t && l >= e)
        return s < e && l > t ? "cover" : !0;
      s = l;
    }
    return !1;
  }
  /**
  @internal
  */
  toString() {
    let e = "";
    for (let t = 0; t < this.sections.length; ) {
      let i = this.sections[t++], s = this.sections[t++];
      e += (e ? " " : "") + i + (s >= 0 ? ":" + s : "");
    }
    return e;
  }
  /**
  Serialize this change desc to a JSON-representable value.
  */
  toJSON() {
    return this.sections;
  }
  /**
  Create a change desc from its JSON representation (as produced
  by [`toJSON`](https://codemirror.net/6/docs/ref/#state.ChangeDesc.toJSON).
  */
  static fromJSON(e) {
    if (!Array.isArray(e) || e.length % 2 || e.some((t) => typeof t != "number"))
      throw new RangeError("Invalid JSON representation of ChangeDesc");
    return new ei(e);
  }
  /**
  @internal
  */
  static create(e) {
    return new ei(e);
  }
}
class Ae extends ei {
  constructor(e, t) {
    super(e), this.inserted = t;
  }
  /**
  Apply the changes to a document, returning the modified
  document.
  */
  apply(e) {
    if (this.length != e.length)
      throw new RangeError("Applying change set to a document with the wrong length");
    return Wl(this, (t, i, s, r, o) => e = e.replace(s, s + (i - t), o), !1), e;
  }
  mapDesc(e, t = !1) {
    return Vl(this, e, t, !0);
  }
  /**
  Given the document as it existed _before_ the changes, return a
  change set that represents the inverse of this set, which could
  be used to go from the document created by the changes back to
  the document as it existed before the changes.
  */
  invert(e) {
    let t = this.sections.slice(), i = [];
    for (let s = 0, r = 0; s < t.length; s += 2) {
      let o = t[s], l = t[s + 1];
      if (l >= 0) {
        t[s] = l, t[s + 1] = o;
        let a = s >> 1;
        for (; i.length < a; )
          i.push(Z.empty);
        i.push(o ? e.slice(r, r + o) : Z.empty);
      }
      r += o;
    }
    return new Ae(t, i);
  }
  /**
  Combine two subsequent change sets into a single set. `other`
  must start in the document produced by `this`. If `this` goes
  `docA` → `docB` and `other` represents `docB` → `docC`, the
  returned value will represent the change `docA` → `docC`.
  */
  compose(e) {
    return this.empty ? e : e.empty ? this : Wu(this, e, !0);
  }
  /**
  Given another change set starting in the same document, maps this
  change set over the other, producing a new change set that can be
  applied to the document produced by applying `other`. When
  `before` is `true`, order changes as if `this` comes before
  `other`, otherwise (the default) treat `other` as coming first.
  
  Given two changes `A` and `B`, `A.compose(B.map(A))` and
  `B.compose(A.map(B, true))` will produce the same document. This
  provides a basic form of [operational
  transformation](https://en.wikipedia.org/wiki/Operational_transformation),
  and can be used for collaborative editing.
  */
  map(e, t = !1) {
    return e.empty ? this : Vl(this, e, t, !0);
  }
  /**
  Iterate over the changed ranges in the document, calling `f` for
  each, with the range in the original document (`fromA`-`toA`)
  and the range that replaces it in the new document
  (`fromB`-`toB`).
  
  When `individual` is true, adjacent changes are reported
  separately.
  */
  iterChanges(e, t = !1) {
    Wl(this, e, t);
  }
  /**
  Get a [change description](https://codemirror.net/6/docs/ref/#state.ChangeDesc) for this change
  set.
  */
  get desc() {
    return ei.create(this.sections);
  }
  /**
  @internal
  */
  filter(e) {
    let t = [], i = [], s = [], r = new Cs(this);
    e: for (let o = 0, l = 0; ; ) {
      let a = o == e.length ? 1e9 : e[o++];
      for (; l < a || l == a && r.len == 0; ) {
        if (r.done)
          break e;
        let c = Math.min(r.len, a - l);
        Ve(s, c, -1);
        let f = r.ins == -1 ? -1 : r.off == 0 ? r.ins : 0;
        Ve(t, c, f), f > 0 && Ii(i, t, r.text), r.forward(c), l += c;
      }
      let h = e[o++];
      for (; l < h; ) {
        if (r.done)
          break e;
        let c = Math.min(r.len, h - l);
        Ve(t, c, -1), Ve(s, c, r.ins == -1 ? -1 : r.off == 0 ? r.ins : 0), r.forward(c), l += c;
      }
    }
    return {
      changes: new Ae(t, i),
      filtered: ei.create(s)
    };
  }
  /**
  Serialize this change set to a JSON-representable value.
  */
  toJSON() {
    let e = [];
    for (let t = 0; t < this.sections.length; t += 2) {
      let i = this.sections[t], s = this.sections[t + 1];
      s < 0 ? e.push(i) : s == 0 ? e.push([i]) : e.push([i].concat(this.inserted[t >> 1].toJSON()));
    }
    return e;
  }
  /**
  Create a change set for the given changes, for a document of the
  given length, using `lineSep` as line separator.
  */
  static of(e, t, i) {
    let s = [], r = [], o = 0, l = null;
    function a(c = !1) {
      if (!c && !s.length)
        return;
      o < t && Ve(s, t - o, -1);
      let f = new Ae(s, r);
      l = l ? l.compose(f.map(l)) : f, s = [], r = [], o = 0;
    }
    function h(c) {
      if (Array.isArray(c))
        for (let f of c)
          h(f);
      else if (c instanceof Ae) {
        if (c.length != t)
          throw new RangeError(`Mismatched change set length (got ${c.length}, expected ${t})`);
        a(), l = l ? l.compose(c.map(l)) : c;
      } else {
        let { from: f, to: u = f, insert: d } = c;
        if (f > u || f < 0 || u > t)
          throw new RangeError(`Invalid change range ${f} to ${u} (in doc of length ${t})`);
        let p = d ? typeof d == "string" ? Z.of(d.split(i || Hl)) : d : Z.empty, m = p.length;
        if (f == u && m == 0)
          return;
        f < o && a(), f > o && Ve(s, f - o, -1), Ve(s, u - f, m), Ii(r, s, p), o = u;
      }
    }
    return h(e), a(!l), l;
  }
  /**
  Create an empty changeset of the given length.
  */
  static empty(e) {
    return new Ae(e ? [e, -1] : [], []);
  }
  /**
  Create a changeset from its JSON representation (as produced by
  [`toJSON`](https://codemirror.net/6/docs/ref/#state.ChangeSet.toJSON).
  */
  static fromJSON(e) {
    if (!Array.isArray(e))
      throw new RangeError("Invalid JSON representation of ChangeSet");
    let t = [], i = [];
    for (let s = 0; s < e.length; s++) {
      let r = e[s];
      if (typeof r == "number")
        t.push(r, -1);
      else {
        if (!Array.isArray(r) || typeof r[0] != "number" || r.some((o, l) => l && typeof o != "string"))
          throw new RangeError("Invalid JSON representation of ChangeSet");
        if (r.length == 1)
          t.push(r[0], 0);
        else {
          for (; i.length < s; )
            i.push(Z.empty);
          i[s] = Z.of(r.slice(1)), t.push(r[0], i[s].length);
        }
      }
    }
    return new Ae(t, i);
  }
  /**
  @internal
  */
  static createSet(e, t) {
    return new Ae(e, t);
  }
}
function Ve(n, e, t, i = !1) {
  if (e == 0 && t <= 0)
    return;
  let s = n.length - 2;
  s >= 0 && t <= 0 && t == n[s + 1] ? n[s] += e : s >= 0 && e == 0 && n[s] == 0 ? n[s + 1] += t : i ? (n[s] += e, n[s + 1] += t) : n.push(e, t);
}
function Ii(n, e, t) {
  if (t.length == 0)
    return;
  let i = e.length - 2 >> 1;
  if (i < n.length)
    n[n.length - 1] = n[n.length - 1].append(t);
  else {
    for (; n.length < i; )
      n.push(Z.empty);
    n.push(t);
  }
}
function Wl(n, e, t) {
  let i = n.inserted;
  for (let s = 0, r = 0, o = 0; o < n.sections.length; ) {
    let l = n.sections[o++], a = n.sections[o++];
    if (a < 0)
      s += l, r += l;
    else {
      let h = s, c = r, f = Z.empty;
      for (; h += l, c += a, a && i && (f = f.append(i[o - 2 >> 1])), !(t || o == n.sections.length || n.sections[o + 1] < 0); )
        l = n.sections[o++], a = n.sections[o++];
      e(s, h, r, c, f), s = h, r = c;
    }
  }
}
function Vl(n, e, t, i = !1) {
  let s = [], r = i ? [] : null, o = new Cs(n), l = new Cs(e);
  for (let a = -1; ; ) {
    if (o.done && l.len || l.done && o.len)
      throw new Error("Mismatched change set lengths");
    if (o.ins == -1 && l.ins == -1) {
      let h = Math.min(o.len, l.len);
      Ve(s, h, -1), o.forward(h), l.forward(h);
    } else if (l.ins >= 0 && (o.ins < 0 || a == o.i || o.off == 0 && (l.len < o.len || l.len == o.len && !t))) {
      let h = l.len;
      for (Ve(s, l.ins, -1); h; ) {
        let c = Math.min(o.len, h);
        o.ins >= 0 && a < o.i && o.len <= c && (Ve(s, 0, o.ins), r && Ii(r, s, o.text), a = o.i), o.forward(c), h -= c;
      }
      l.next();
    } else if (o.ins >= 0) {
      let h = 0, c = o.len;
      for (; c; )
        if (l.ins == -1) {
          let f = Math.min(c, l.len);
          h += f, c -= f, l.forward(f);
        } else if (l.ins == 0 && l.len < c)
          c -= l.len, l.next();
        else
          break;
      Ve(s, h, a < o.i ? o.ins : 0), r && a < o.i && Ii(r, s, o.text), a = o.i, o.forward(o.len - c);
    } else {
      if (o.done && l.done)
        return r ? Ae.createSet(s, r) : ei.create(s);
      throw new Error("Mismatched change set lengths");
    }
  }
}
function Wu(n, e, t = !1) {
  let i = [], s = t ? [] : null, r = new Cs(n), o = new Cs(e);
  for (let l = !1; ; ) {
    if (r.done && o.done)
      return s ? Ae.createSet(i, s) : ei.create(i);
    if (r.ins == 0)
      Ve(i, r.len, 0, l), r.next();
    else if (o.len == 0 && !o.done)
      Ve(i, 0, o.ins, l), s && Ii(s, i, o.text), o.next();
    else {
      if (r.done || o.done)
        throw new Error("Mismatched change set lengths");
      {
        let a = Math.min(r.len2, o.len), h = i.length;
        if (r.ins == -1) {
          let c = o.ins == -1 ? -1 : o.off ? 0 : o.ins;
          Ve(i, a, c, l), s && c && Ii(s, i, o.text);
        } else o.ins == -1 ? (Ve(i, r.off ? 0 : r.len, a, l), s && Ii(s, i, r.textBit(a))) : (Ve(i, r.off ? 0 : r.len, o.off ? 0 : o.ins, l), s && !o.off && Ii(s, i, o.text));
        l = (r.ins > a || o.ins >= 0 && o.len > a) && (l || i.length > h), r.forward2(a), o.forward(a);
      }
    }
  }
}
class Cs {
  constructor(e) {
    this.set = e, this.i = 0, this.next();
  }
  next() {
    let { sections: e } = this.set;
    this.i < e.length ? (this.len = e[this.i++], this.ins = e[this.i++]) : (this.len = 0, this.ins = -2), this.off = 0;
  }
  get done() {
    return this.ins == -2;
  }
  get len2() {
    return this.ins < 0 ? this.len : this.ins;
  }
  get text() {
    let { inserted: e } = this.set, t = this.i - 2 >> 1;
    return t >= e.length ? Z.empty : e[t];
  }
  textBit(e) {
    let { inserted: t } = this.set, i = this.i - 2 >> 1;
    return i >= t.length && !e ? Z.empty : t[i].slice(this.off, e == null ? void 0 : this.off + e);
  }
  forward(e) {
    e == this.len ? this.next() : (this.len -= e, this.off += e);
  }
  forward2(e) {
    this.ins == -1 ? this.forward(e) : e == this.ins ? this.next() : (this.ins -= e, this.off += e);
  }
}
class rn {
  constructor(e, t, i) {
    this.from = e, this.to = t, this.flags = i;
  }
  /**
  The anchor of the range—the side that doesn't move when you
  extend it.
  */
  get anchor() {
    return this.flags & 32 ? this.to : this.from;
  }
  /**
  The head of the range, which is moved when the range is
  [extended](https://codemirror.net/6/docs/ref/#state.SelectionRange.extend).
  */
  get head() {
    return this.flags & 32 ? this.from : this.to;
  }
  /**
  True when `anchor` and `head` are at the same position.
  */
  get empty() {
    return this.from == this.to;
  }
  /**
  If this is a cursor that is explicitly associated with the
  character on one of its sides, this returns the side. -1 means
  the character before its position, 1 the character after, and 0
  means no association.
  */
  get assoc() {
    return this.flags & 8 ? -1 : this.flags & 16 ? 1 : 0;
  }
  /**
  The bidirectional text level associated with this cursor, if
  any.
  */
  get bidiLevel() {
    let e = this.flags & 7;
    return e == 7 ? null : e;
  }
  /**
  The goal column (stored vertical offset) associated with a
  cursor. This is used to preserve the vertical position when
  [moving](https://codemirror.net/6/docs/ref/#view.EditorView.moveVertically) across
  lines of different length.
  */
  get goalColumn() {
    let e = this.flags >> 6;
    return e == 16777215 ? void 0 : e;
  }
  /**
  Map this range through a change, producing a valid range in the
  updated document.
  */
  map(e, t = -1) {
    let i, s;
    return this.empty ? i = s = e.mapPos(this.from, t) : (i = e.mapPos(this.from, 1), s = e.mapPos(this.to, -1)), i == this.from && s == this.to ? this : new rn(i, s, this.flags);
  }
  /**
  Extend this range to cover at least `from` to `to`.
  */
  extend(e, t = e) {
    if (e <= this.anchor && t >= this.anchor)
      return S.range(e, t);
    let i = Math.abs(e - this.anchor) > Math.abs(t - this.anchor) ? e : t;
    return S.range(this.anchor, i);
  }
  /**
  Compare this range to another range.
  */
  eq(e, t = !1) {
    return this.anchor == e.anchor && this.head == e.head && (!t || !this.empty || this.assoc == e.assoc);
  }
  /**
  Return a JSON-serializable object representing the range.
  */
  toJSON() {
    return { anchor: this.anchor, head: this.head };
  }
  /**
  Convert a JSON representation of a range to a `SelectionRange`
  instance.
  */
  static fromJSON(e) {
    if (!e || typeof e.anchor != "number" || typeof e.head != "number")
      throw new RangeError("Invalid JSON representation for SelectionRange");
    return S.range(e.anchor, e.head);
  }
  /**
  @internal
  */
  static create(e, t, i) {
    return new rn(e, t, i);
  }
}
class S {
  constructor(e, t) {
    this.ranges = e, this.mainIndex = t;
  }
  /**
  Map a selection through a change. Used to adjust the selection
  position for changes.
  */
  map(e, t = -1) {
    return e.empty ? this : S.create(this.ranges.map((i) => i.map(e, t)), this.mainIndex);
  }
  /**
  Compare this selection to another selection. By default, ranges
  are compared only by position. When `includeAssoc` is true,
  cursor ranges must also have the same
  [`assoc`](https://codemirror.net/6/docs/ref/#state.SelectionRange.assoc) value.
  */
  eq(e, t = !1) {
    if (this.ranges.length != e.ranges.length || this.mainIndex != e.mainIndex)
      return !1;
    for (let i = 0; i < this.ranges.length; i++)
      if (!this.ranges[i].eq(e.ranges[i], t))
        return !1;
    return !0;
  }
  /**
  Get the primary selection range. Usually, you should make sure
  your code applies to _all_ ranges, by using methods like
  [`changeByRange`](https://codemirror.net/6/docs/ref/#state.EditorState.changeByRange).
  */
  get main() {
    return this.ranges[this.mainIndex];
  }
  /**
  Make sure the selection only has one range. Returns a selection
  holding only the main range from this selection.
  */
  asSingle() {
    return this.ranges.length == 1 ? this : new S([this.main], 0);
  }
  /**
  Extend this selection with an extra range.
  */
  addRange(e, t = !0) {
    return S.create([e].concat(this.ranges), t ? 0 : this.mainIndex + 1);
  }
  /**
  Replace a given range with another range, and then normalize the
  selection to merge and sort ranges if necessary.
  */
  replaceRange(e, t = this.mainIndex) {
    let i = this.ranges.slice();
    return i[t] = e, S.create(i, this.mainIndex);
  }
  /**
  Convert this selection to an object that can be serialized to
  JSON.
  */
  toJSON() {
    return { ranges: this.ranges.map((e) => e.toJSON()), main: this.mainIndex };
  }
  /**
  Create a selection from a JSON representation.
  */
  static fromJSON(e) {
    if (!e || !Array.isArray(e.ranges) || typeof e.main != "number" || e.main >= e.ranges.length)
      throw new RangeError("Invalid JSON representation for EditorSelection");
    return new S(e.ranges.map((t) => rn.fromJSON(t)), e.main);
  }
  /**
  Create a selection holding a single range.
  */
  static single(e, t = e) {
    return new S([S.range(e, t)], 0);
  }
  /**
  Sort and merge the given set of ranges, creating a valid
  selection.
  */
  static create(e, t = 0) {
    if (e.length == 0)
      throw new RangeError("A selection needs at least one range");
    for (let i = 0, s = 0; s < e.length; s++) {
      let r = e[s];
      if (r.empty ? r.from <= i : r.from < i)
        return S.normalized(e.slice(), t);
      i = r.to;
    }
    return new S(e, t);
  }
  /**
  Create a cursor selection range at the given position. You can
  safely ignore the optional arguments in most situations.
  */
  static cursor(e, t = 0, i, s) {
    return rn.create(e, e, (t == 0 ? 0 : t < 0 ? 8 : 16) | (i == null ? 7 : Math.min(6, i)) | (s ?? 16777215) << 6);
  }
  /**
  Create a selection range.
  */
  static range(e, t, i, s) {
    let r = (i ?? 16777215) << 6 | (s == null ? 7 : Math.min(6, s));
    return t < e ? rn.create(t, e, 48 | r) : rn.create(e, t, (t > e ? 8 : 0) | r);
  }
  /**
  @internal
  */
  static normalized(e, t = 0) {
    let i = e[t];
    e.sort((s, r) => s.from - r.from), t = e.indexOf(i);
    for (let s = 1; s < e.length; s++) {
      let r = e[s], o = e[s - 1];
      if (r.empty ? r.from <= o.to : r.from < o.to) {
        let l = o.from, a = Math.max(r.to, o.to);
        s <= t && t--, e.splice(--s, 2, r.anchor > r.head ? S.range(a, l) : S.range(l, a));
      }
    }
    return new S(e, t);
  }
}
function Vu(n, e) {
  for (let t of n.ranges)
    if (t.to > e)
      throw new RangeError("Selection points outside of document");
}
let Va = 0;
class R {
  constructor(e, t, i, s, r) {
    this.combine = e, this.compareInput = t, this.compare = i, this.isStatic = s, this.id = Va++, this.default = e([]), this.extensions = typeof r == "function" ? r(this) : r;
  }
  /**
  Returns a facet reader for this facet, which can be used to
  [read](https://codemirror.net/6/docs/ref/#state.EditorState.facet) it but not to define values for it.
  */
  get reader() {
    return this;
  }
  /**
  Define a new facet.
  */
  static define(e = {}) {
    return new R(e.combine || ((t) => t), e.compareInput || ((t, i) => t === i), e.compare || (e.combine ? (t, i) => t === i : za), !!e.static, e.enables);
  }
  /**
  Returns an extension that adds the given value to this facet.
  */
  of(e) {
    return new Br([], this, 0, e);
  }
  /**
  Create an extension that computes a value for the facet from a
  state. You must take care to declare the parts of the state that
  this value depends on, since your function is only called again
  for a new state when one of those parts changed.
  
  In cases where your value depends only on a single field, you'll
  want to use the [`from`](https://codemirror.net/6/docs/ref/#state.Facet.from) method instead.
  */
  compute(e, t) {
    if (this.isStatic)
      throw new Error("Can't compute a static facet");
    return new Br(e, this, 1, t);
  }
  /**
  Create an extension that computes zero or more values for this
  facet from a state.
  */
  computeN(e, t) {
    if (this.isStatic)
      throw new Error("Can't compute a static facet");
    return new Br(e, this, 2, t);
  }
  from(e, t) {
    return t || (t = (i) => i), this.compute([e], (i) => t(i.field(e)));
  }
}
function za(n, e) {
  return n == e || n.length == e.length && n.every((t, i) => t === e[i]);
}
class Br {
  constructor(e, t, i, s) {
    this.dependencies = e, this.facet = t, this.type = i, this.value = s, this.id = Va++;
  }
  dynamicSlot(e) {
    var t;
    let i = this.value, s = this.facet.compareInput, r = this.id, o = e[r] >> 1, l = this.type == 2, a = !1, h = !1, c = [];
    for (let f of this.dependencies)
      f == "doc" ? a = !0 : f == "selection" ? h = !0 : (((t = e[f.id]) !== null && t !== void 0 ? t : 1) & 1) == 0 && c.push(e[f.id]);
    return {
      create(f) {
        return f.values[o] = i(f), 1;
      },
      update(f, u) {
        if (a && u.docChanged || h && (u.docChanged || u.selection) || zl(f, c)) {
          let d = i(f);
          if (l ? !hc(d, f.values[o], s) : !s(d, f.values[o]))
            return f.values[o] = d, 1;
        }
        return 0;
      },
      reconfigure: (f, u) => {
        let d, p = u.config.address[r];
        if (p != null) {
          let m = io(u, p);
          if (this.dependencies.every((g) => g instanceof R ? u.facet(g) === f.facet(g) : g instanceof Ne ? u.field(g, !1) == f.field(g, !1) : !0) || (l ? hc(d = i(f), m, s) : s(d = i(f), m)))
            return f.values[o] = m, 0;
        } else
          d = i(f);
        return f.values[o] = d, 1;
      }
    };
  }
}
function hc(n, e, t) {
  if (n.length != e.length)
    return !1;
  for (let i = 0; i < n.length; i++)
    if (!t(n[i], e[i]))
      return !1;
  return !0;
}
function zl(n, e) {
  let t = !1;
  for (let i of e)
    ys(n, i) & 1 && (t = !0);
  return t;
}
function g0(n, e, t) {
  let i = t.map((a) => n[a.id]), s = t.map((a) => a.type), r = i.filter((a) => !(a & 1)), o = n[e.id] >> 1;
  function l(a) {
    let h = [];
    for (let c = 0; c < i.length; c++) {
      let f = io(a, i[c]);
      if (s[c] == 2)
        for (let u of f)
          h.push(u);
      else
        h.push(f);
    }
    return e.combine(h);
  }
  return {
    create(a) {
      for (let h of i)
        ys(a, h);
      return a.values[o] = l(a), 1;
    },
    update(a, h) {
      if (!zl(a, r))
        return 0;
      let c = l(a);
      return e.compare(c, a.values[o]) ? 0 : (a.values[o] = c, 1);
    },
    reconfigure(a, h) {
      let c = zl(a, i), f = h.config.facets[e.id], u = h.facet(e);
      if (f && !c && za(t, f))
        return a.values[o] = u, 0;
      let d = l(a);
      return e.compare(d, u) ? (a.values[o] = u, 0) : (a.values[o] = d, 1);
    }
  };
}
const hr = /* @__PURE__ */ R.define({ static: !0 });
class Ne {
  constructor(e, t, i, s, r) {
    this.id = e, this.createF = t, this.updateF = i, this.compareF = s, this.spec = r, this.provides = void 0;
  }
  /**
  Define a state field.
  */
  static define(e) {
    let t = new Ne(Va++, e.create, e.update, e.compare || ((i, s) => i === s), e);
    return e.provide && (t.provides = e.provide(t)), t;
  }
  create(e) {
    let t = e.facet(hr).find((i) => i.field == this);
    return ((t == null ? void 0 : t.create) || this.createF)(e);
  }
  /**
  @internal
  */
  slot(e) {
    let t = e[this.id] >> 1;
    return {
      create: (i) => (i.values[t] = this.create(i), 1),
      update: (i, s) => {
        let r = i.values[t], o = this.updateF(r, s);
        return this.compareF(r, o) ? 0 : (i.values[t] = o, 1);
      },
      reconfigure: (i, s) => {
        let r = i.facet(hr), o = s.facet(hr), l;
        return (l = r.find((a) => a.field == this)) && l != o.find((a) => a.field == this) ? (i.values[t] = l.create(i), 1) : s.config.address[this.id] != null ? (i.values[t] = s.field(this), 0) : (i.values[t] = this.create(i), 1);
      }
    };
  }
  /**
  Returns an extension that enables this field and overrides the
  way it is initialized. Can be useful when you need to provide a
  non-default starting value for the field.
  */
  init(e) {
    return [this, hr.of({ field: this, create: e })];
  }
  /**
  State field instances can be used as
  [`Extension`](https://codemirror.net/6/docs/ref/#state.Extension) values to enable the field in a
  given state.
  */
  get extension() {
    return this;
  }
}
const tn = { lowest: 4, low: 3, default: 2, high: 1, highest: 0 };
function ss(n) {
  return (e) => new zu(e, n);
}
const gn = {
  /**
  The highest precedence level, for extensions that should end up
  near the start of the precedence ordering.
  */
  highest: /* @__PURE__ */ ss(tn.highest),
  /**
  A higher-than-default precedence, for extensions that should
  come before those with default precedence.
  */
  high: /* @__PURE__ */ ss(tn.high),
  /**
  The default precedence, which is also used for extensions
  without an explicit precedence.
  */
  default: /* @__PURE__ */ ss(tn.default),
  /**
  A lower-than-default precedence.
  */
  low: /* @__PURE__ */ ss(tn.low),
  /**
  The lowest precedence level. Meant for things that should end up
  near the end of the extension order.
  */
  lowest: /* @__PURE__ */ ss(tn.lowest)
};
class zu {
  constructor(e, t) {
    this.inner = e, this.prec = t;
  }
}
class Po {
  /**
  Create an instance of this compartment to add to your [state
  configuration](https://codemirror.net/6/docs/ref/#state.EditorStateConfig.extensions).
  */
  of(e) {
    return new $l(this, e);
  }
  /**
  Create an [effect](https://codemirror.net/6/docs/ref/#state.TransactionSpec.effects) that
  reconfigures this compartment.
  */
  reconfigure(e) {
    return Po.reconfigure.of({ compartment: this, extension: e });
  }
  /**
  Get the current content of the compartment in the state, or
  `undefined` if it isn't present.
  */
  get(e) {
    return e.config.compartments.get(this);
  }
}
class $l {
  constructor(e, t) {
    this.compartment = e, this.inner = t;
  }
}
class to {
  constructor(e, t, i, s, r, o) {
    for (this.base = e, this.compartments = t, this.dynamicSlots = i, this.address = s, this.staticValues = r, this.facets = o, this.statusTemplate = []; this.statusTemplate.length < i.length; )
      this.statusTemplate.push(
        0
        /* SlotStatus.Unresolved */
      );
  }
  staticFacet(e) {
    let t = this.address[e.id];
    return t == null ? e.default : this.staticValues[t >> 1];
  }
  static resolve(e, t, i) {
    let s = [], r = /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ new Map();
    for (let u of y0(e, t, o))
      u instanceof Ne ? s.push(u) : (r[u.facet.id] || (r[u.facet.id] = [])).push(u);
    let l = /* @__PURE__ */ Object.create(null), a = [], h = [];
    for (let u of s)
      l[u.id] = h.length << 1, h.push((d) => u.slot(d));
    let c = i == null ? void 0 : i.config.facets;
    for (let u in r) {
      let d = r[u], p = d[0].facet, m = c && c[u] || [];
      if (d.every(
        (g) => g.type == 0
        /* Provider.Static */
      ))
        if (l[p.id] = a.length << 1 | 1, za(m, d))
          a.push(i.facet(p));
        else {
          let g = p.combine(d.map((b) => b.value));
          a.push(i && p.compare(g, i.facet(p)) ? i.facet(p) : g);
        }
      else {
        for (let g of d)
          g.type == 0 ? (l[g.id] = a.length << 1 | 1, a.push(g.value)) : (l[g.id] = h.length << 1, h.push((b) => g.dynamicSlot(b)));
        l[p.id] = h.length << 1, h.push((g) => g0(g, p, d));
      }
    }
    let f = h.map((u) => u(l));
    return new to(e, o, f, l, a, r);
  }
}
function y0(n, e, t) {
  let i = [[], [], [], [], []], s = /* @__PURE__ */ new Map();
  function r(o, l) {
    let a = s.get(o);
    if (a != null) {
      if (a <= l)
        return;
      let h = i[a].indexOf(o);
      h > -1 && i[a].splice(h, 1), o instanceof $l && t.delete(o.compartment);
    }
    if (s.set(o, l), Array.isArray(o))
      for (let h of o)
        r(h, l);
    else if (o instanceof $l) {
      if (t.has(o.compartment))
        throw new RangeError("Duplicate use of compartment in extensions");
      let h = e.get(o.compartment) || o.inner;
      t.set(o.compartment, h), r(h, l);
    } else if (o instanceof zu)
      r(o.inner, o.prec);
    else if (o instanceof Ne)
      i[l].push(o), o.provides && r(o.provides, l);
    else if (o instanceof Br)
      i[l].push(o), o.facet.extensions && r(o.facet.extensions, tn.default);
    else {
      let h = o.extension;
      if (!h)
        throw new Error(`Unrecognized extension value in extension set (${o}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
      r(h, l);
    }
  }
  return r(n, tn.default), i.reduce((o, l) => o.concat(l));
}
function ys(n, e) {
  if (e & 1)
    return 2;
  let t = e >> 1, i = n.status[t];
  if (i == 4)
    throw new Error("Cyclic dependency between fields and/or facets");
  if (i & 2)
    return i;
  n.status[t] = 4;
  let s = n.computeSlot(n, n.config.dynamicSlots[t]);
  return n.status[t] = 2 | s;
}
function io(n, e) {
  return e & 1 ? n.config.staticValues[e >> 1] : n.values[e >> 1];
}
const $u = /* @__PURE__ */ R.define(), Ul = /* @__PURE__ */ R.define({
  combine: (n) => n.some((e) => e),
  static: !0
}), Uu = /* @__PURE__ */ R.define({
  combine: (n) => n.length ? n[0] : void 0,
  static: !0
}), qu = /* @__PURE__ */ R.define(), ju = /* @__PURE__ */ R.define(), Ku = /* @__PURE__ */ R.define(), Gu = /* @__PURE__ */ R.define({
  combine: (n) => n.length ? n[0] : !1
});
class Si {
  /**
  @internal
  */
  constructor(e, t) {
    this.type = e, this.value = t;
  }
  /**
  Define a new type of annotation.
  */
  static define() {
    return new b0();
  }
}
class b0 {
  /**
  Create an instance of this annotation.
  */
  of(e) {
    return new Si(this, e);
  }
}
class v0 {
  /**
  @internal
  */
  constructor(e) {
    this.map = e;
  }
  /**
  Create a [state effect](https://codemirror.net/6/docs/ref/#state.StateEffect) instance of this
  type.
  */
  of(e) {
    return new z(this, e);
  }
}
class z {
  /**
  @internal
  */
  constructor(e, t) {
    this.type = e, this.value = t;
  }
  /**
  Map this effect through a position mapping. Will return
  `undefined` when that ends up deleting the effect.
  */
  map(e) {
    let t = this.type.map(this.value, e);
    return t === void 0 ? void 0 : t == this.value ? this : new z(this.type, t);
  }
  /**
  Tells you whether this effect object is of a given
  [type](https://codemirror.net/6/docs/ref/#state.StateEffectType).
  */
  is(e) {
    return this.type == e;
  }
  /**
  Define a new effect type. The type parameter indicates the type
  of values that his effect holds. It should be a type that
  doesn't include `undefined`, since that is used in
  [mapping](https://codemirror.net/6/docs/ref/#state.StateEffect.map) to indicate that an effect is
  removed.
  */
  static define(e = {}) {
    return new v0(e.map || ((t) => t));
  }
  /**
  Map an array of effects through a change set.
  */
  static mapEffects(e, t) {
    if (!e.length)
      return e;
    let i = [];
    for (let s of e) {
      let r = s.map(t);
      r && i.push(r);
    }
    return i;
  }
}
z.reconfigure = /* @__PURE__ */ z.define();
z.appendConfig = /* @__PURE__ */ z.define();
class Me {
  constructor(e, t, i, s, r, o) {
    this.startState = e, this.changes = t, this.selection = i, this.effects = s, this.annotations = r, this.scrollIntoView = o, this._doc = null, this._state = null, i && Vu(i, t.newLength), r.some((l) => l.type == Me.time) || (this.annotations = r.concat(Me.time.of(Date.now())));
  }
  /**
  @internal
  */
  static create(e, t, i, s, r, o) {
    return new Me(e, t, i, s, r, o);
  }
  /**
  The new document produced by the transaction. Contrary to
  [`.state`](https://codemirror.net/6/docs/ref/#state.Transaction.state)`.doc`, accessing this won't
  force the entire new state to be computed right away, so it is
  recommended that [transaction
  filters](https://codemirror.net/6/docs/ref/#state.EditorState^transactionFilter) use this getter
  when they need to look at the new document.
  */
  get newDoc() {
    return this._doc || (this._doc = this.changes.apply(this.startState.doc));
  }
  /**
  The new selection produced by the transaction. If
  [`this.selection`](https://codemirror.net/6/docs/ref/#state.Transaction.selection) is undefined,
  this will [map](https://codemirror.net/6/docs/ref/#state.EditorSelection.map) the start state's
  current selection through the changes made by the transaction.
  */
  get newSelection() {
    return this.selection || this.startState.selection.map(this.changes);
  }
  /**
  The new state created by the transaction. Computed on demand
  (but retained for subsequent access), so it is recommended not to
  access it in [transaction
  filters](https://codemirror.net/6/docs/ref/#state.EditorState^transactionFilter) when possible.
  */
  get state() {
    return this._state || this.startState.applyTransaction(this), this._state;
  }
  /**
  Get the value of the given annotation type, if any.
  */
  annotation(e) {
    for (let t of this.annotations)
      if (t.type == e)
        return t.value;
  }
  /**
  Indicates whether the transaction changed the document.
  */
  get docChanged() {
    return !this.changes.empty;
  }
  /**
  Indicates whether this transaction reconfigures the state
  (through a [configuration compartment](https://codemirror.net/6/docs/ref/#state.Compartment) or
  with a top-level configuration
  [effect](https://codemirror.net/6/docs/ref/#state.StateEffect^reconfigure).
  */
  get reconfigured() {
    return this.startState.config != this.state.config;
  }
  /**
  Returns true if the transaction has a [user
  event](https://codemirror.net/6/docs/ref/#state.Transaction^userEvent) annotation that is equal to
  or more specific than `event`. For example, if the transaction
  has `"select.pointer"` as user event, `"select"` and
  `"select.pointer"` will match it.
  */
  isUserEvent(e) {
    let t = this.annotation(Me.userEvent);
    return !!(t && (t == e || t.length > e.length && t.slice(0, e.length) == e && t[e.length] == "."));
  }
}
Me.time = /* @__PURE__ */ Si.define();
Me.userEvent = /* @__PURE__ */ Si.define();
Me.addToHistory = /* @__PURE__ */ Si.define();
Me.remote = /* @__PURE__ */ Si.define();
function x0(n, e) {
  let t = [];
  for (let i = 0, s = 0; ; ) {
    let r, o;
    if (i < n.length && (s == e.length || e[s] >= n[i]))
      r = n[i++], o = n[i++];
    else if (s < e.length)
      r = e[s++], o = e[s++];
    else
      return t;
    !t.length || t[t.length - 1] < r ? t.push(r, o) : t[t.length - 1] < o && (t[t.length - 1] = o);
  }
}
function Yu(n, e, t) {
  var i;
  let s, r, o;
  return t ? (s = e.changes, r = Ae.empty(e.changes.length), o = n.changes.compose(e.changes)) : (s = e.changes.map(n.changes), r = n.changes.mapDesc(e.changes, !0), o = n.changes.compose(s)), {
    changes: o,
    selection: e.selection ? e.selection.map(r) : (i = n.selection) === null || i === void 0 ? void 0 : i.map(s),
    effects: z.mapEffects(n.effects, s).concat(z.mapEffects(e.effects, r)),
    annotations: n.annotations.length ? n.annotations.concat(e.annotations) : e.annotations,
    scrollIntoView: n.scrollIntoView || e.scrollIntoView
  };
}
function ql(n, e, t) {
  let i = e.selection, s = Tn(e.annotations);
  return e.userEvent && (s = s.concat(Me.userEvent.of(e.userEvent))), {
    changes: e.changes instanceof Ae ? e.changes : Ae.of(e.changes || [], t, n.facet(Uu)),
    selection: i && (i instanceof S ? i : S.single(i.anchor, i.head)),
    effects: Tn(e.effects),
    annotations: s,
    scrollIntoView: !!e.scrollIntoView
  };
}
function Xu(n, e, t) {
  let i = ql(n, e.length ? e[0] : {}, n.doc.length);
  e.length && e[0].filter === !1 && (t = !1);
  for (let r = 1; r < e.length; r++) {
    e[r].filter === !1 && (t = !1);
    let o = !!e[r].sequential;
    i = Yu(i, ql(n, e[r], o ? i.changes.newLength : n.doc.length), o);
  }
  let s = Me.create(n, i.changes, i.selection, i.effects, i.annotations, i.scrollIntoView);
  return S0(t ? w0(s) : s);
}
function w0(n) {
  let e = n.startState, t = !0;
  for (let s of e.facet(qu)) {
    let r = s(n);
    if (r === !1) {
      t = !1;
      break;
    }
    Array.isArray(r) && (t = t === !0 ? r : x0(t, r));
  }
  if (t !== !0) {
    let s, r;
    if (t === !1)
      r = n.changes.invertedDesc, s = Ae.empty(e.doc.length);
    else {
      let o = n.changes.filter(t);
      s = o.changes, r = o.filtered.mapDesc(o.changes).invertedDesc;
    }
    n = Me.create(e, s, n.selection && n.selection.map(r), z.mapEffects(n.effects, r), n.annotations, n.scrollIntoView);
  }
  let i = e.facet(ju);
  for (let s = i.length - 1; s >= 0; s--) {
    let r = i[s](n);
    r instanceof Me ? n = r : Array.isArray(r) && r.length == 1 && r[0] instanceof Me ? n = r[0] : n = Xu(e, Tn(r), !1);
  }
  return n;
}
function S0(n) {
  let e = n.startState, t = e.facet(Ku), i = n;
  for (let s = t.length - 1; s >= 0; s--) {
    let r = t[s](n);
    r && Object.keys(r).length && (i = Yu(i, ql(e, r, n.changes.newLength), !0));
  }
  return i == n ? n : Me.create(e, n.changes, n.selection, i.effects, i.annotations, i.scrollIntoView);
}
const k0 = [];
function Tn(n) {
  return n == null ? k0 : Array.isArray(n) ? n : [n];
}
var de = /* @__PURE__ */ function(n) {
  return n[n.Word = 0] = "Word", n[n.Space = 1] = "Space", n[n.Other = 2] = "Other", n;
}(de || (de = {}));
const C0 = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
let jl;
try {
  jl = /* @__PURE__ */ new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u");
} catch {
}
function A0(n) {
  if (jl)
    return jl.test(n);
  for (let e = 0; e < n.length; e++) {
    let t = n[e];
    if (/\w/.test(t) || t > "" && (t.toUpperCase() != t.toLowerCase() || C0.test(t)))
      return !0;
  }
  return !1;
}
function M0(n) {
  return (e) => {
    if (!/\S/.test(e))
      return de.Space;
    if (A0(e))
      return de.Word;
    for (let t = 0; t < n.length; t++)
      if (e.indexOf(n[t]) > -1)
        return de.Word;
    return de.Other;
  };
}
class J {
  constructor(e, t, i, s, r, o) {
    this.config = e, this.doc = t, this.selection = i, this.values = s, this.status = e.statusTemplate.slice(), this.computeSlot = r, o && (o._state = this);
    for (let l = 0; l < this.config.dynamicSlots.length; l++)
      ys(this, l << 1);
    this.computeSlot = null;
  }
  field(e, t = !0) {
    let i = this.config.address[e.id];
    if (i == null) {
      if (t)
        throw new RangeError("Field is not present in this state");
      return;
    }
    return ys(this, i), io(this, i);
  }
  /**
  Create a [transaction](https://codemirror.net/6/docs/ref/#state.Transaction) that updates this
  state. Any number of [transaction specs](https://codemirror.net/6/docs/ref/#state.TransactionSpec)
  can be passed. Unless
  [`sequential`](https://codemirror.net/6/docs/ref/#state.TransactionSpec.sequential) is set, the
  [changes](https://codemirror.net/6/docs/ref/#state.TransactionSpec.changes) (if any) of each spec
  are assumed to start in the _current_ document (not the document
  produced by previous specs), and its
  [selection](https://codemirror.net/6/docs/ref/#state.TransactionSpec.selection) and
  [effects](https://codemirror.net/6/docs/ref/#state.TransactionSpec.effects) are assumed to refer
  to the document created by its _own_ changes. The resulting
  transaction contains the combined effect of all the different
  specs. For [selection](https://codemirror.net/6/docs/ref/#state.TransactionSpec.selection), later
  specs take precedence over earlier ones.
  */
  update(...e) {
    return Xu(this, e, !0);
  }
  /**
  @internal
  */
  applyTransaction(e) {
    let t = this.config, { base: i, compartments: s } = t;
    for (let l of e.effects)
      l.is(Po.reconfigure) ? (t && (s = /* @__PURE__ */ new Map(), t.compartments.forEach((a, h) => s.set(h, a)), t = null), s.set(l.value.compartment, l.value.extension)) : l.is(z.reconfigure) ? (t = null, i = l.value) : l.is(z.appendConfig) && (t = null, i = Tn(i).concat(l.value));
    let r;
    t ? r = e.startState.values.slice() : (t = to.resolve(i, s, this), r = new J(t, this.doc, this.selection, t.dynamicSlots.map(() => null), (a, h) => h.reconfigure(a, this), null).values);
    let o = e.startState.facet(Ul) ? e.newSelection : e.newSelection.asSingle();
    new J(t, e.newDoc, o, r, (l, a) => a.update(l, e), e);
  }
  /**
  Create a [transaction spec](https://codemirror.net/6/docs/ref/#state.TransactionSpec) that
  replaces every selection range with the given content.
  */
  replaceSelection(e) {
    return typeof e == "string" && (e = this.toText(e)), this.changeByRange((t) => ({
      changes: { from: t.from, to: t.to, insert: e },
      range: S.cursor(t.from + e.length)
    }));
  }
  /**
  Create a set of changes and a new selection by running the given
  function for each range in the active selection. The function
  can return an optional set of changes (in the coordinate space
  of the start document), plus an updated range (in the coordinate
  space of the document produced by the call's own changes). This
  method will merge all the changes and ranges into a single
  changeset and selection, and return it as a [transaction
  spec](https://codemirror.net/6/docs/ref/#state.TransactionSpec), which can be passed to
  [`update`](https://codemirror.net/6/docs/ref/#state.EditorState.update).
  */
  changeByRange(e) {
    let t = this.selection, i = e(t.ranges[0]), s = this.changes(i.changes), r = [i.range], o = Tn(i.effects);
    for (let l = 1; l < t.ranges.length; l++) {
      let a = e(t.ranges[l]), h = this.changes(a.changes), c = h.map(s);
      for (let u = 0; u < l; u++)
        r[u] = r[u].map(c);
      let f = s.mapDesc(h, !0);
      r.push(a.range.map(f)), s = s.compose(c), o = z.mapEffects(o, c).concat(z.mapEffects(Tn(a.effects), f));
    }
    return {
      changes: s,
      selection: S.create(r, t.mainIndex),
      effects: o
    };
  }
  /**
  Create a [change set](https://codemirror.net/6/docs/ref/#state.ChangeSet) from the given change
  description, taking the state's document length and line
  separator into account.
  */
  changes(e = []) {
    return e instanceof Ae ? e : Ae.of(e, this.doc.length, this.facet(J.lineSeparator));
  }
  /**
  Using the state's [line
  separator](https://codemirror.net/6/docs/ref/#state.EditorState^lineSeparator), create a
  [`Text`](https://codemirror.net/6/docs/ref/#state.Text) instance from the given string.
  */
  toText(e) {
    return Z.of(e.split(this.facet(J.lineSeparator) || Hl));
  }
  /**
  Return the given range of the document as a string.
  */
  sliceDoc(e = 0, t = this.doc.length) {
    return this.doc.sliceString(e, t, this.lineBreak);
  }
  /**
  Get the value of a state [facet](https://codemirror.net/6/docs/ref/#state.Facet).
  */
  facet(e) {
    let t = this.config.address[e.id];
    return t == null ? e.default : (ys(this, t), io(this, t));
  }
  /**
  Convert this state to a JSON-serializable object. When custom
  fields should be serialized, you can pass them in as an object
  mapping property names (in the resulting object, which should
  not use `doc` or `selection`) to fields.
  */
  toJSON(e) {
    let t = {
      doc: this.sliceDoc(),
      selection: this.selection.toJSON()
    };
    if (e)
      for (let i in e) {
        let s = e[i];
        s instanceof Ne && this.config.address[s.id] != null && (t[i] = s.spec.toJSON(this.field(e[i]), this));
      }
    return t;
  }
  /**
  Deserialize a state from its JSON representation. When custom
  fields should be deserialized, pass the same object you passed
  to [`toJSON`](https://codemirror.net/6/docs/ref/#state.EditorState.toJSON) when serializing as
  third argument.
  */
  static fromJSON(e, t = {}, i) {
    if (!e || typeof e.doc != "string")
      throw new RangeError("Invalid JSON representation for EditorState");
    let s = [];
    if (i) {
      for (let r in i)
        if (Object.prototype.hasOwnProperty.call(e, r)) {
          let o = i[r], l = e[r];
          s.push(o.init((a) => o.spec.fromJSON(l, a)));
        }
    }
    return J.create({
      doc: e.doc,
      selection: S.fromJSON(e.selection),
      extensions: t.extensions ? s.concat([t.extensions]) : s
    });
  }
  /**
  Create a new state. You'll usually only need this when
  initializing an editor—updated states are created by applying
  transactions.
  */
  static create(e = {}) {
    let t = to.resolve(e.extensions || [], /* @__PURE__ */ new Map()), i = e.doc instanceof Z ? e.doc : Z.of((e.doc || "").split(t.staticFacet(J.lineSeparator) || Hl)), s = e.selection ? e.selection instanceof S ? e.selection : S.single(e.selection.anchor, e.selection.head) : S.single(0);
    return Vu(s, i.length), t.staticFacet(Ul) || (s = s.asSingle()), new J(t, i, s, t.dynamicSlots.map(() => null), (r, o) => o.create(r), null);
  }
  /**
  The size (in columns) of a tab in the document, determined by
  the [`tabSize`](https://codemirror.net/6/docs/ref/#state.EditorState^tabSize) facet.
  */
  get tabSize() {
    return this.facet(J.tabSize);
  }
  /**
  Get the proper [line-break](https://codemirror.net/6/docs/ref/#state.EditorState^lineSeparator)
  string for this state.
  */
  get lineBreak() {
    return this.facet(J.lineSeparator) || `
`;
  }
  /**
  Returns true when the editor is
  [configured](https://codemirror.net/6/docs/ref/#state.EditorState^readOnly) to be read-only.
  */
  get readOnly() {
    return this.facet(Gu);
  }
  /**
  Look up a translation for the given phrase (via the
  [`phrases`](https://codemirror.net/6/docs/ref/#state.EditorState^phrases) facet), or return the
  original string if no translation is found.
  
  If additional arguments are passed, they will be inserted in
  place of markers like `$1` (for the first value) and `$2`, etc.
  A single `$` is equivalent to `$1`, and `$$` will produce a
  literal dollar sign.
  */
  phrase(e, ...t) {
    for (let i of this.facet(J.phrases))
      if (Object.prototype.hasOwnProperty.call(i, e)) {
        e = i[e];
        break;
      }
    return t.length && (e = e.replace(/\$(\$|\d*)/g, (i, s) => {
      if (s == "$")
        return "$";
      let r = +(s || 1);
      return !r || r > t.length ? i : t[r - 1];
    })), e;
  }
  /**
  Find the values for a given language data field, provided by the
  the [`languageData`](https://codemirror.net/6/docs/ref/#state.EditorState^languageData) facet.
  
  Examples of language data fields are...
  
  - [`"commentTokens"`](https://codemirror.net/6/docs/ref/#commands.CommentTokens) for specifying
    comment syntax.
  - [`"autocomplete"`](https://codemirror.net/6/docs/ref/#autocomplete.autocompletion^config.override)
    for providing language-specific completion sources.
  - [`"wordChars"`](https://codemirror.net/6/docs/ref/#state.EditorState.charCategorizer) for adding
    characters that should be considered part of words in this
    language.
  - [`"closeBrackets"`](https://codemirror.net/6/docs/ref/#autocomplete.CloseBracketConfig) controls
    bracket closing behavior.
  */
  languageDataAt(e, t, i = -1) {
    let s = [];
    for (let r of this.facet($u))
      for (let o of r(this, t, i))
        Object.prototype.hasOwnProperty.call(o, e) && s.push(o[e]);
    return s;
  }
  /**
  Return a function that can categorize strings (expected to
  represent a single [grapheme cluster](https://codemirror.net/6/docs/ref/#state.findClusterBreak))
  into one of:
  
   - Word (contains an alphanumeric character or a character
     explicitly listed in the local language's `"wordChars"`
     language data, which should be a string)
   - Space (contains only whitespace)
   - Other (anything else)
  */
  charCategorizer(e) {
    return M0(this.languageDataAt("wordChars", e).join(""));
  }
  /**
  Find the word at the given position, meaning the range
  containing all [word](https://codemirror.net/6/docs/ref/#state.CharCategory.Word) characters
  around it. If no word characters are adjacent to the position,
  this returns null.
  */
  wordAt(e) {
    let { text: t, from: i, length: s } = this.doc.lineAt(e), r = this.charCategorizer(e), o = e - i, l = e - i;
    for (; o > 0; ) {
      let a = Be(t, o, !1);
      if (r(t.slice(a, o)) != de.Word)
        break;
      o = a;
    }
    for (; l < s; ) {
      let a = Be(t, l);
      if (r(t.slice(l, a)) != de.Word)
        break;
      l = a;
    }
    return o == l ? null : S.range(o + i, l + i);
  }
}
J.allowMultipleSelections = Ul;
J.tabSize = /* @__PURE__ */ R.define({
  combine: (n) => n.length ? n[0] : 4
});
J.lineSeparator = Uu;
J.readOnly = Gu;
J.phrases = /* @__PURE__ */ R.define({
  compare(n, e) {
    let t = Object.keys(n), i = Object.keys(e);
    return t.length == i.length && t.every((s) => n[s] == e[s]);
  }
});
J.languageData = $u;
J.changeFilter = qu;
J.transactionFilter = ju;
J.transactionExtender = Ku;
Po.reconfigure = /* @__PURE__ */ z.define();
function ri(n, e, t = {}) {
  let i = {};
  for (let s of n)
    for (let r of Object.keys(s)) {
      let o = s[r], l = i[r];
      if (l === void 0)
        i[r] = o;
      else if (!(l === o || o === void 0)) if (Object.hasOwnProperty.call(t, r))
        i[r] = t[r](l, o);
      else
        throw new Error("Config merge conflict for field " + r);
    }
  for (let s in e)
    i[s] === void 0 && (i[s] = e[s]);
  return i;
}
class cn {
  /**
  Compare this value with another value. Used when comparing
  rangesets. The default implementation compares by identity.
  Unless you are only creating a fixed number of unique instances
  of your value type, it is a good idea to implement this
  properly.
  */
  eq(e) {
    return this == e;
  }
  /**
  Create a [range](https://codemirror.net/6/docs/ref/#state.Range) with this value.
  */
  range(e, t = e) {
    return Kl.create(e, t, this);
  }
}
cn.prototype.startSide = cn.prototype.endSide = 0;
cn.prototype.point = !1;
cn.prototype.mapMode = Xe.TrackDel;
let Kl = class Ju {
  constructor(e, t, i) {
    this.from = e, this.to = t, this.value = i;
  }
  /**
  @internal
  */
  static create(e, t, i) {
    return new Ju(e, t, i);
  }
};
function Gl(n, e) {
  return n.from - e.from || n.value.startSide - e.value.startSide;
}
class $a {
  constructor(e, t, i, s) {
    this.from = e, this.to = t, this.value = i, this.maxPoint = s;
  }
  get length() {
    return this.to[this.to.length - 1];
  }
  // Find the index of the given position and side. Use the ranges'
  // `from` pos when `end == false`, `to` when `end == true`.
  findIndex(e, t, i, s = 0) {
    let r = i ? this.to : this.from;
    for (let o = s, l = r.length; ; ) {
      if (o == l)
        return o;
      let a = o + l >> 1, h = r[a] - e || (i ? this.value[a].endSide : this.value[a].startSide) - t;
      if (a == o)
        return h >= 0 ? o : l;
      h >= 0 ? l = a : o = a + 1;
    }
  }
  between(e, t, i, s) {
    for (let r = this.findIndex(t, -1e9, !0), o = this.findIndex(i, 1e9, !1, r); r < o; r++)
      if (s(this.from[r] + e, this.to[r] + e, this.value[r]) === !1)
        return !1;
  }
  map(e, t) {
    let i = [], s = [], r = [], o = -1, l = -1;
    for (let a = 0; a < this.value.length; a++) {
      let h = this.value[a], c = this.from[a] + e, f = this.to[a] + e, u, d;
      if (c == f) {
        let p = t.mapPos(c, h.startSide, h.mapMode);
        if (p == null || (u = d = p, h.startSide != h.endSide && (d = t.mapPos(c, h.endSide), d < u)))
          continue;
      } else if (u = t.mapPos(c, h.startSide), d = t.mapPos(f, h.endSide), u > d || u == d && h.startSide > 0 && h.endSide <= 0)
        continue;
      (d - u || h.endSide - h.startSide) < 0 || (o < 0 && (o = u), h.point && (l = Math.max(l, d - u)), i.push(h), s.push(u - o), r.push(d - o));
    }
    return { mapped: i.length ? new $a(s, r, i, l) : null, pos: o };
  }
}
class Y {
  constructor(e, t, i, s) {
    this.chunkPos = e, this.chunk = t, this.nextLayer = i, this.maxPoint = s;
  }
  /**
  @internal
  */
  static create(e, t, i, s) {
    return new Y(e, t, i, s);
  }
  /**
  @internal
  */
  get length() {
    let e = this.chunk.length - 1;
    return e < 0 ? 0 : Math.max(this.chunkEnd(e), this.nextLayer.length);
  }
  /**
  The number of ranges in the set.
  */
  get size() {
    if (this.isEmpty)
      return 0;
    let e = this.nextLayer.size;
    for (let t of this.chunk)
      e += t.value.length;
    return e;
  }
  /**
  @internal
  */
  chunkEnd(e) {
    return this.chunkPos[e] + this.chunk[e].length;
  }
  /**
  Update the range set, optionally adding new ranges or filtering
  out existing ones.
  
  (Note: The type parameter is just there as a kludge to work
  around TypeScript variance issues that prevented `RangeSet<X>`
  from being a subtype of `RangeSet<Y>` when `X` is a subtype of
  `Y`.)
  */
  update(e) {
    let { add: t = [], sort: i = !1, filterFrom: s = 0, filterTo: r = this.length } = e, o = e.filter;
    if (t.length == 0 && !o)
      return this;
    if (i && (t = t.slice().sort(Gl)), this.isEmpty)
      return t.length ? Y.of(t) : this;
    let l = new Qu(this, null, -1).goto(0), a = 0, h = [], c = new bi();
    for (; l.value || a < t.length; )
      if (a < t.length && (l.from - t[a].from || l.startSide - t[a].value.startSide) >= 0) {
        let f = t[a++];
        c.addInner(f.from, f.to, f.value) || h.push(f);
      } else l.rangeIndex == 1 && l.chunkIndex < this.chunk.length && (a == t.length || this.chunkEnd(l.chunkIndex) < t[a].from) && (!o || s > this.chunkEnd(l.chunkIndex) || r < this.chunkPos[l.chunkIndex]) && c.addChunk(this.chunkPos[l.chunkIndex], this.chunk[l.chunkIndex]) ? l.nextChunk() : ((!o || s > l.to || r < l.from || o(l.from, l.to, l.value)) && (c.addInner(l.from, l.to, l.value) || h.push(Kl.create(l.from, l.to, l.value))), l.next());
    return c.finishInner(this.nextLayer.isEmpty && !h.length ? Y.empty : this.nextLayer.update({ add: h, filter: o, filterFrom: s, filterTo: r }));
  }
  /**
  Map this range set through a set of changes, return the new set.
  */
  map(e) {
    if (e.empty || this.isEmpty)
      return this;
    let t = [], i = [], s = -1;
    for (let o = 0; o < this.chunk.length; o++) {
      let l = this.chunkPos[o], a = this.chunk[o], h = e.touchesRange(l, l + a.length);
      if (h === !1)
        s = Math.max(s, a.maxPoint), t.push(a), i.push(e.mapPos(l));
      else if (h === !0) {
        let { mapped: c, pos: f } = a.map(l, e);
        c && (s = Math.max(s, c.maxPoint), t.push(c), i.push(f));
      }
    }
    let r = this.nextLayer.map(e);
    return t.length == 0 ? r : new Y(i, t, r || Y.empty, s);
  }
  /**
  Iterate over the ranges that touch the region `from` to `to`,
  calling `f` for each. There is no guarantee that the ranges will
  be reported in any specific order. When the callback returns
  `false`, iteration stops.
  */
  between(e, t, i) {
    if (!this.isEmpty) {
      for (let s = 0; s < this.chunk.length; s++) {
        let r = this.chunkPos[s], o = this.chunk[s];
        if (t >= r && e <= r + o.length && o.between(r, e - r, t - r, i) === !1)
          return;
      }
      this.nextLayer.between(e, t, i);
    }
  }
  /**
  Iterate over the ranges in this set, in order, including all
  ranges that end at or after `from`.
  */
  iter(e = 0) {
    return As.from([this]).goto(e);
  }
  /**
  @internal
  */
  get isEmpty() {
    return this.nextLayer == this;
  }
  /**
  Iterate over the ranges in a collection of sets, in order,
  starting from `from`.
  */
  static iter(e, t = 0) {
    return As.from(e).goto(t);
  }
  /**
  Iterate over two groups of sets, calling methods on `comparator`
  to notify it of possible differences.
  */
  static compare(e, t, i, s, r = -1) {
    let o = e.filter((f) => f.maxPoint > 0 || !f.isEmpty && f.maxPoint >= r), l = t.filter((f) => f.maxPoint > 0 || !f.isEmpty && f.maxPoint >= r), a = cc(o, l, i), h = new rs(o, a, r), c = new rs(l, a, r);
    i.iterGaps((f, u, d) => fc(h, f, c, u, d, s)), i.empty && i.length == 0 && fc(h, 0, c, 0, 0, s);
  }
  /**
  Compare the contents of two groups of range sets, returning true
  if they are equivalent in the given range.
  */
  static eq(e, t, i = 0, s) {
    s == null && (s = 999999999);
    let r = e.filter((c) => !c.isEmpty && t.indexOf(c) < 0), o = t.filter((c) => !c.isEmpty && e.indexOf(c) < 0);
    if (r.length != o.length)
      return !1;
    if (!r.length)
      return !0;
    let l = cc(r, o), a = new rs(r, l, 0).goto(i), h = new rs(o, l, 0).goto(i);
    for (; ; ) {
      if (a.to != h.to || !Yl(a.active, h.active) || a.point && (!h.point || !a.point.eq(h.point)))
        return !1;
      if (a.to > s)
        return !0;
      a.next(), h.next();
    }
  }
  /**
  Iterate over a group of range sets at the same time, notifying
  the iterator about the ranges covering every given piece of
  content. Returns the open count (see
  [`SpanIterator.span`](https://codemirror.net/6/docs/ref/#state.SpanIterator.span)) at the end
  of the iteration.
  */
  static spans(e, t, i, s, r = -1) {
    let o = new rs(e, null, r).goto(t), l = t, a = o.openStart;
    for (; ; ) {
      let h = Math.min(o.to, i);
      if (o.point) {
        let c = o.activeForPoint(o.to), f = o.pointFrom < t ? c.length + 1 : o.point.startSide < 0 ? c.length : Math.min(c.length, a);
        s.point(l, h, o.point, c, f, o.pointRank), a = Math.min(o.openEnd(h), c.length);
      } else h > l && (s.span(l, h, o.active, a), a = o.openEnd(h));
      if (o.to > i)
        return a + (o.point && o.to > i ? 1 : 0);
      l = o.to, o.next();
    }
  }
  /**
  Create a range set for the given range or array of ranges. By
  default, this expects the ranges to be _sorted_ (by start
  position and, if two start at the same position,
  `value.startSide`). You can pass `true` as second argument to
  cause the method to sort them.
  */
  static of(e, t = !1) {
    let i = new bi();
    for (let s of e instanceof Kl ? [e] : t ? T0(e) : e)
      i.add(s.from, s.to, s.value);
    return i.finish();
  }
  /**
  Join an array of range sets into a single set.
  */
  static join(e) {
    if (!e.length)
      return Y.empty;
    let t = e[e.length - 1];
    for (let i = e.length - 2; i >= 0; i--)
      for (let s = e[i]; s != Y.empty; s = s.nextLayer)
        t = new Y(s.chunkPos, s.chunk, t, Math.max(s.maxPoint, t.maxPoint));
    return t;
  }
}
Y.empty = /* @__PURE__ */ new Y([], [], null, -1);
function T0(n) {
  if (n.length > 1)
    for (let e = n[0], t = 1; t < n.length; t++) {
      let i = n[t];
      if (Gl(e, i) > 0)
        return n.slice().sort(Gl);
      e = i;
    }
  return n;
}
Y.empty.nextLayer = Y.empty;
class bi {
  finishChunk(e) {
    this.chunks.push(new $a(this.from, this.to, this.value, this.maxPoint)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.maxPoint), this.maxPoint = -1, e && (this.from = [], this.to = [], this.value = []);
  }
  /**
  Create an empty builder.
  */
  constructor() {
    this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.maxPoint = -1, this.setMaxPoint = -1, this.nextLayer = null;
  }
  /**
  Add a range. Ranges should be added in sorted (by `from` and
  `value.startSide`) order.
  */
  add(e, t, i) {
    this.addInner(e, t, i) || (this.nextLayer || (this.nextLayer = new bi())).add(e, t, i);
  }
  /**
  @internal
  */
  addInner(e, t, i) {
    let s = e - this.lastTo || i.startSide - this.last.endSide;
    if (s <= 0 && (e - this.lastFrom || i.startSide - this.last.startSide) < 0)
      throw new Error("Ranges must be added sorted by `from` position and `startSide`");
    return s < 0 ? !1 : (this.from.length == 250 && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = e), this.from.push(e - this.chunkStart), this.to.push(t - this.chunkStart), this.last = i, this.lastFrom = e, this.lastTo = t, this.value.push(i), i.point && (this.maxPoint = Math.max(this.maxPoint, t - e)), !0);
  }
  /**
  @internal
  */
  addChunk(e, t) {
    if ((e - this.lastTo || t.value[0].startSide - this.last.endSide) < 0)
      return !1;
    this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, t.maxPoint), this.chunks.push(t), this.chunkPos.push(e);
    let i = t.value.length - 1;
    return this.last = t.value[i], this.lastFrom = t.from[i] + e, this.lastTo = t.to[i] + e, !0;
  }
  /**
  Finish the range set. Returns the new set. The builder can't be
  used anymore after this has been called.
  */
  finish() {
    return this.finishInner(Y.empty);
  }
  /**
  @internal
  */
  finishInner(e) {
    if (this.from.length && this.finishChunk(!1), this.chunks.length == 0)
      return e;
    let t = Y.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(e) : e, this.setMaxPoint);
    return this.from = null, t;
  }
}
function cc(n, e, t) {
  let i = /* @__PURE__ */ new Map();
  for (let r of n)
    for (let o = 0; o < r.chunk.length; o++)
      r.chunk[o].maxPoint <= 0 && i.set(r.chunk[o], r.chunkPos[o]);
  let s = /* @__PURE__ */ new Set();
  for (let r of e)
    for (let o = 0; o < r.chunk.length; o++) {
      let l = i.get(r.chunk[o]);
      l != null && (t ? t.mapPos(l) : l) == r.chunkPos[o] && !(t != null && t.touchesRange(l, l + r.chunk[o].length)) && s.add(r.chunk[o]);
    }
  return s;
}
class Qu {
  constructor(e, t, i, s = 0) {
    this.layer = e, this.skip = t, this.minPoint = i, this.rank = s;
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  get endSide() {
    return this.value ? this.value.endSide : 0;
  }
  goto(e, t = -1e9) {
    return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(e, t, !1), this;
  }
  gotoInner(e, t, i) {
    for (; this.chunkIndex < this.layer.chunk.length; ) {
      let s = this.layer.chunk[this.chunkIndex];
      if (!(this.skip && this.skip.has(s) || this.layer.chunkEnd(this.chunkIndex) < e || s.maxPoint < this.minPoint))
        break;
      this.chunkIndex++, i = !1;
    }
    if (this.chunkIndex < this.layer.chunk.length) {
      let s = this.layer.chunk[this.chunkIndex].findIndex(e - this.layer.chunkPos[this.chunkIndex], t, !0);
      (!i || this.rangeIndex < s) && this.setRangeIndex(s);
    }
    this.next();
  }
  forward(e, t) {
    (this.to - e || this.endSide - t) < 0 && this.gotoInner(e, t, !0);
  }
  next() {
    for (; ; )
      if (this.chunkIndex == this.layer.chunk.length) {
        this.from = this.to = 1e9, this.value = null;
        break;
      } else {
        let e = this.layer.chunkPos[this.chunkIndex], t = this.layer.chunk[this.chunkIndex], i = e + t.from[this.rangeIndex];
        if (this.from = i, this.to = e + t.to[this.rangeIndex], this.value = t.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.minPoint < 0 || this.value.point && this.to - this.from >= this.minPoint)
          break;
      }
  }
  setRangeIndex(e) {
    if (e == this.layer.chunk[this.chunkIndex].value.length) {
      if (this.chunkIndex++, this.skip)
        for (; this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex]); )
          this.chunkIndex++;
      this.rangeIndex = 0;
    } else
      this.rangeIndex = e;
  }
  nextChunk() {
    this.chunkIndex++, this.rangeIndex = 0, this.next();
  }
  compare(e) {
    return this.from - e.from || this.startSide - e.startSide || this.rank - e.rank || this.to - e.to || this.endSide - e.endSide;
  }
}
class As {
  constructor(e) {
    this.heap = e;
  }
  static from(e, t = null, i = -1) {
    let s = [];
    for (let r = 0; r < e.length; r++)
      for (let o = e[r]; !o.isEmpty; o = o.nextLayer)
        o.maxPoint >= i && s.push(new Qu(o, t, i, r));
    return s.length == 1 ? s[0] : new As(s);
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  goto(e, t = -1e9) {
    for (let i of this.heap)
      i.goto(e, t);
    for (let i = this.heap.length >> 1; i >= 0; i--)
      ll(this.heap, i);
    return this.next(), this;
  }
  forward(e, t) {
    for (let i of this.heap)
      i.forward(e, t);
    for (let i = this.heap.length >> 1; i >= 0; i--)
      ll(this.heap, i);
    (this.to - e || this.value.endSide - t) < 0 && this.next();
  }
  next() {
    if (this.heap.length == 0)
      this.from = this.to = 1e9, this.value = null, this.rank = -1;
    else {
      let e = this.heap[0];
      this.from = e.from, this.to = e.to, this.value = e.value, this.rank = e.rank, e.value && e.next(), ll(this.heap, 0);
    }
  }
}
function ll(n, e) {
  for (let t = n[e]; ; ) {
    let i = (e << 1) + 1;
    if (i >= n.length)
      break;
    let s = n[i];
    if (i + 1 < n.length && s.compare(n[i + 1]) >= 0 && (s = n[i + 1], i++), t.compare(s) < 0)
      break;
    n[i] = t, n[e] = s, e = i;
  }
}
class rs {
  constructor(e, t, i) {
    this.minPoint = i, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = As.from(e, t, i);
  }
  goto(e, t = -1e9) {
    return this.cursor.goto(e, t), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = e, this.endSide = t, this.openStart = -1, this.next(), this;
  }
  forward(e, t) {
    for (; this.minActive > -1 && (this.activeTo[this.minActive] - e || this.active[this.minActive].endSide - t) < 0; )
      this.removeActive(this.minActive);
    this.cursor.forward(e, t);
  }
  removeActive(e) {
    cr(this.active, e), cr(this.activeTo, e), cr(this.activeRank, e), this.minActive = uc(this.active, this.activeTo);
  }
  addActive(e) {
    let t = 0, { value: i, to: s, rank: r } = this.cursor;
    for (; t < this.activeRank.length && (r - this.activeRank[t] || s - this.activeTo[t]) > 0; )
      t++;
    fr(this.active, t, i), fr(this.activeTo, t, s), fr(this.activeRank, t, r), e && fr(e, t, this.cursor.from), this.minActive = uc(this.active, this.activeTo);
  }
  // After calling this, if `this.point` != null, the next range is a
  // point. Otherwise, it's a regular range, covered by `this.active`.
  next() {
    let e = this.to, t = this.point;
    this.point = null;
    let i = this.openStart < 0 ? [] : null;
    for (; ; ) {
      let s = this.minActive;
      if (s > -1 && (this.activeTo[s] - this.cursor.from || this.active[s].endSide - this.cursor.startSide) < 0) {
        if (this.activeTo[s] > e) {
          this.to = this.activeTo[s], this.endSide = this.active[s].endSide;
          break;
        }
        this.removeActive(s), i && cr(i, s);
      } else if (this.cursor.value)
        if (this.cursor.from > e) {
          this.to = this.cursor.from, this.endSide = this.cursor.startSide;
          break;
        } else {
          let r = this.cursor.value;
          if (!r.point)
            this.addActive(i), this.cursor.next();
          else if (t && this.cursor.to == this.to && this.cursor.from < this.cursor.to)
            this.cursor.next();
          else {
            this.point = r, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = r.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
            break;
          }
        }
      else {
        this.to = this.endSide = 1e9;
        break;
      }
    }
    if (i) {
      this.openStart = 0;
      for (let s = i.length - 1; s >= 0 && i[s] < e; s--)
        this.openStart++;
    }
  }
  activeForPoint(e) {
    if (!this.active.length)
      return this.active;
    let t = [];
    for (let i = this.active.length - 1; i >= 0 && !(this.activeRank[i] < this.pointRank); i--)
      (this.activeTo[i] > e || this.activeTo[i] == e && this.active[i].endSide >= this.point.endSide) && t.push(this.active[i]);
    return t.reverse();
  }
  openEnd(e) {
    let t = 0;
    for (let i = this.activeTo.length - 1; i >= 0 && this.activeTo[i] > e; i--)
      t++;
    return t;
  }
}
function fc(n, e, t, i, s, r) {
  n.goto(e), t.goto(i);
  let o = i + s, l = i, a = i - e;
  for (; ; ) {
    let h = n.to + a - t.to, c = h || n.endSide - t.endSide, f = c < 0 ? n.to + a : t.to, u = Math.min(f, o);
    if (n.point || t.point ? n.point && t.point && (n.point == t.point || n.point.eq(t.point)) && Yl(n.activeForPoint(n.to), t.activeForPoint(t.to)) || r.comparePoint(l, u, n.point, t.point) : u > l && !Yl(n.active, t.active) && r.compareRange(l, u, n.active, t.active), f > o)
      break;
    (h || n.openEnd != t.openEnd) && r.boundChange && r.boundChange(f), l = f, c <= 0 && n.next(), c >= 0 && t.next();
  }
}
function Yl(n, e) {
  if (n.length != e.length)
    return !1;
  for (let t = 0; t < n.length; t++)
    if (n[t] != e[t] && !n[t].eq(e[t]))
      return !1;
  return !0;
}
function cr(n, e) {
  for (let t = e, i = n.length - 1; t < i; t++)
    n[t] = n[t + 1];
  n.pop();
}
function fr(n, e, t) {
  for (let i = n.length - 1; i >= e; i--)
    n[i + 1] = n[i];
  n[e] = t;
}
function uc(n, e) {
  let t = -1, i = 1e9;
  for (let s = 0; s < e.length; s++)
    (e[s] - i || n[s].endSide - n[t].endSide) < 0 && (t = s, i = e[s]);
  return t;
}
function Vn(n, e, t = n.length) {
  let i = 0;
  for (let s = 0; s < t && s < n.length; )
    n.charCodeAt(s) == 9 ? (i += e - i % e, s++) : (i++, s = Be(n, s));
  return i;
}
function Xl(n, e, t, i) {
  for (let s = 0, r = 0; ; ) {
    if (r >= e)
      return s;
    if (s == n.length)
      break;
    r += n.charCodeAt(s) == 9 ? t - r % t : 1, s = Be(n, s);
  }
  return i === !0 ? -1 : n.length;
}
const Jl = "ͼ", dc = typeof Symbol > "u" ? "__" + Jl : Symbol.for(Jl), Ql = typeof Symbol > "u" ? "__styleSet" + Math.floor(Math.random() * 1e8) : Symbol("styleSet"), pc = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : {};
class Vi {
  // :: (Object<Style>, ?{finish: ?(string) → string})
  // Create a style module from the given spec.
  //
  // When `finish` is given, it is called on regular (non-`@`)
  // selectors (after `&` expansion) to compute the final selector.
  constructor(e, t) {
    this.rules = [];
    let { finish: i } = t || {};
    function s(o) {
      return /^@/.test(o) ? [o] : o.split(/,\s*/);
    }
    function r(o, l, a, h) {
      let c = [], f = /^@(\w+)\b/.exec(o[0]), u = f && f[1] == "keyframes";
      if (f && l == null) return a.push(o[0] + ";");
      for (let d in l) {
        let p = l[d];
        if (/&/.test(d))
          r(
            d.split(/,\s*/).map((m) => o.map((g) => m.replace(/&/, g))).reduce((m, g) => m.concat(g)),
            p,
            a
          );
        else if (p && typeof p == "object") {
          if (!f) throw new RangeError("The value of a property (" + d + ") should be a primitive value.");
          r(s(d), p, c, u);
        } else p != null && c.push(d.replace(/_.*/, "").replace(/[A-Z]/g, (m) => "-" + m.toLowerCase()) + ": " + p + ";");
      }
      (c.length || u) && a.push((i && !f && !h ? o.map(i) : o).join(", ") + " {" + c.join(" ") + "}");
    }
    for (let o in e) r(s(o), e[o], this.rules);
  }
  // :: () → string
  // Returns a string containing the module's CSS rules.
  getRules() {
    return this.rules.join(`
`);
  }
  // :: () → string
  // Generate a new unique CSS class name.
  static newName() {
    let e = pc[dc] || 1;
    return pc[dc] = e + 1, Jl + e.toString(36);
  }
  // :: (union<Document, ShadowRoot>, union<[StyleModule], StyleModule>, ?{nonce: ?string})
  //
  // Mount the given set of modules in the given DOM root, which ensures
  // that the CSS rules defined by the module are available in that
  // context.
  //
  // Rules are only added to the document once per root.
  //
  // Rule order will follow the order of the modules, so that rules from
  // modules later in the array take precedence of those from earlier
  // modules. If you call this function multiple times for the same root
  // in a way that changes the order of already mounted modules, the old
  // order will be changed.
  //
  // If a Content Security Policy nonce is provided, it is added to
  // the `<style>` tag generated by the library.
  static mount(e, t, i) {
    let s = e[Ql], r = i && i.nonce;
    s ? r && s.setNonce(r) : s = new E0(e, r), s.mount(Array.isArray(t) ? t : [t], e);
  }
}
let mc = /* @__PURE__ */ new Map();
class E0 {
  constructor(e, t) {
    let i = e.ownerDocument || e, s = i.defaultView;
    if (!e.head && e.adoptedStyleSheets && s.CSSStyleSheet) {
      let r = mc.get(i);
      if (r) return e[Ql] = r;
      this.sheet = new s.CSSStyleSheet(), mc.set(i, this);
    } else
      this.styleTag = i.createElement("style"), t && this.styleTag.setAttribute("nonce", t);
    this.modules = [], e[Ql] = this;
  }
  mount(e, t) {
    let i = this.sheet, s = 0, r = 0;
    for (let o = 0; o < e.length; o++) {
      let l = e[o], a = this.modules.indexOf(l);
      if (a < r && a > -1 && (this.modules.splice(a, 1), r--, a = -1), a == -1) {
        if (this.modules.splice(r++, 0, l), i) for (let h = 0; h < l.rules.length; h++)
          i.insertRule(l.rules[h], s++);
      } else {
        for (; r < a; ) s += this.modules[r++].rules.length;
        s += l.rules.length, r++;
      }
    }
    if (i)
      t.adoptedStyleSheets.indexOf(this.sheet) < 0 && (t.adoptedStyleSheets = [this.sheet, ...t.adoptedStyleSheets]);
    else {
      let o = "";
      for (let a = 0; a < this.modules.length; a++)
        o += this.modules[a].getRules() + `
`;
      this.styleTag.textContent = o;
      let l = t.head || t;
      this.styleTag.parentNode != l && l.insertBefore(this.styleTag, l.firstChild);
    }
  }
  setNonce(e) {
    this.styleTag && this.styleTag.getAttribute("nonce") != e && this.styleTag.setAttribute("nonce", e);
  }
}
var zi = {
  8: "Backspace",
  9: "Tab",
  10: "Enter",
  12: "NumLock",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  44: "PrintScreen",
  45: "Insert",
  46: "Delete",
  59: ";",
  61: "=",
  91: "Meta",
  92: "Meta",
  106: "*",
  107: "+",
  108: ",",
  109: "-",
  110: ".",
  111: "/",
  144: "NumLock",
  145: "ScrollLock",
  160: "Shift",
  161: "Shift",
  162: "Control",
  163: "Control",
  164: "Alt",
  165: "Alt",
  173: "-",
  186: ";",
  187: "=",
  188: ",",
  189: "-",
  190: ".",
  191: "/",
  192: "`",
  219: "[",
  220: "\\",
  221: "]",
  222: "'"
}, Ms = {
  48: ")",
  49: "!",
  50: "@",
  51: "#",
  52: "$",
  53: "%",
  54: "^",
  55: "&",
  56: "*",
  57: "(",
  59: ":",
  61: "+",
  173: "_",
  186: ":",
  187: "+",
  188: "<",
  189: "_",
  190: ">",
  191: "?",
  192: "~",
  219: "{",
  220: "|",
  221: "}",
  222: '"'
}, D0 = typeof navigator < "u" && /Mac/.test(navigator.platform), O0 = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var Pe = 0; Pe < 10; Pe++) zi[48 + Pe] = zi[96 + Pe] = String(Pe);
for (var Pe = 1; Pe <= 24; Pe++) zi[Pe + 111] = "F" + Pe;
for (var Pe = 65; Pe <= 90; Pe++)
  zi[Pe] = String.fromCharCode(Pe + 32), Ms[Pe] = String.fromCharCode(Pe);
for (var al in zi) Ms.hasOwnProperty(al) || (Ms[al] = zi[al]);
function _0(n) {
  var e = D0 && n.metaKey && n.shiftKey && !n.ctrlKey && !n.altKey || O0 && n.shiftKey && n.key && n.key.length == 1 || n.key == "Unidentified", t = !e && n.key || (n.shiftKey ? Ms : zi)[n.keyCode] || n.key || "Unidentified";
  return t == "Esc" && (t = "Escape"), t == "Del" && (t = "Delete"), t == "Left" && (t = "ArrowLeft"), t == "Up" && (t = "ArrowUp"), t == "Right" && (t = "ArrowRight"), t == "Down" && (t = "ArrowDown"), t;
}
function oe() {
  var n = arguments[0];
  typeof n == "string" && (n = document.createElement(n));
  var e = 1, t = arguments[1];
  if (t && typeof t == "object" && t.nodeType == null && !Array.isArray(t)) {
    for (var i in t) if (Object.prototype.hasOwnProperty.call(t, i)) {
      var s = t[i];
      typeof s == "string" ? n.setAttribute(i, s) : s != null && (n[i] = s);
    }
    e++;
  }
  for (; e < arguments.length; e++) Zu(n, arguments[e]);
  return n;
}
function Zu(n, e) {
  if (typeof e == "string")
    n.appendChild(document.createTextNode(e));
  else if (e != null) if (e.nodeType != null)
    n.appendChild(e);
  else if (Array.isArray(e))
    for (var t = 0; t < e.length; t++) Zu(n, e[t]);
  else
    throw new RangeError("Unsupported child node: " + e);
}
function Ts(n) {
  let e;
  return n.nodeType == 11 ? e = n.getSelection ? n : n.ownerDocument : e = n, e.getSelection();
}
function Zl(n, e) {
  return e ? n == e || n.contains(e.nodeType != 1 ? e.parentNode : e) : !1;
}
function Nr(n, e) {
  if (!e.anchorNode)
    return !1;
  try {
    return Zl(n, e.anchorNode);
  } catch {
    return !1;
  }
}
function Es(n) {
  return n.nodeType == 3 ? un(n, 0, n.nodeValue.length).getClientRects() : n.nodeType == 1 ? n.getClientRects() : [];
}
function bs(n, e, t, i) {
  return t ? gc(n, e, t, i, -1) || gc(n, e, t, i, 1) : !1;
}
function fn(n) {
  for (var e = 0; ; e++)
    if (n = n.previousSibling, !n)
      return e;
}
function no(n) {
  return n.nodeType == 1 && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(n.nodeName);
}
function gc(n, e, t, i, s) {
  for (; ; ) {
    if (n == t && e == i)
      return !0;
    if (e == (s < 0 ? 0 : ni(n))) {
      if (n.nodeName == "DIV")
        return !1;
      let r = n.parentNode;
      if (!r || r.nodeType != 1)
        return !1;
      e = fn(n) + (s < 0 ? 0 : 1), n = r;
    } else if (n.nodeType == 1) {
      if (n = n.childNodes[e + (s < 0 ? -1 : 0)], n.nodeType == 1 && n.contentEditable == "false")
        return !1;
      e = s < 0 ? ni(n) : 0;
    } else
      return !1;
  }
}
function ni(n) {
  return n.nodeType == 3 ? n.nodeValue.length : n.childNodes.length;
}
function Io(n, e) {
  let t = e ? n.left : n.right;
  return { left: t, right: t, top: n.top, bottom: n.bottom };
}
function R0(n) {
  let e = n.visualViewport;
  return e ? {
    left: 0,
    right: e.width,
    top: 0,
    bottom: e.height
  } : {
    left: 0,
    right: n.innerWidth,
    top: 0,
    bottom: n.innerHeight
  };
}
function ed(n, e) {
  let t = e.width / n.offsetWidth, i = e.height / n.offsetHeight;
  return (t > 0.995 && t < 1.005 || !isFinite(t) || Math.abs(e.width - n.offsetWidth) < 1) && (t = 1), (i > 0.995 && i < 1.005 || !isFinite(i) || Math.abs(e.height - n.offsetHeight) < 1) && (i = 1), { scaleX: t, scaleY: i };
}
function L0(n, e, t, i, s, r, o, l) {
  let a = n.ownerDocument, h = a.defaultView || window;
  for (let c = n, f = !1; c && !f; )
    if (c.nodeType == 1) {
      let u, d = c == a.body, p = 1, m = 1;
      if (d)
        u = R0(h);
      else {
        if (/^(fixed|sticky)$/.test(getComputedStyle(c).position) && (f = !0), c.scrollHeight <= c.clientHeight && c.scrollWidth <= c.clientWidth) {
          c = c.assignedSlot || c.parentNode;
          continue;
        }
        let v = c.getBoundingClientRect();
        ({ scaleX: p, scaleY: m } = ed(c, v)), u = {
          left: v.left,
          right: v.left + c.clientWidth * p,
          top: v.top,
          bottom: v.top + c.clientHeight * m
        };
      }
      let g = 0, b = 0;
      if (s == "nearest")
        e.top < u.top ? (b = e.top - (u.top + o), t > 0 && e.bottom > u.bottom + b && (b = e.bottom - u.bottom + o)) : e.bottom > u.bottom && (b = e.bottom - u.bottom + o, t < 0 && e.top - b < u.top && (b = e.top - (u.top + o)));
      else {
        let v = e.bottom - e.top, k = u.bottom - u.top;
        b = (s == "center" && v <= k ? e.top + v / 2 - k / 2 : s == "start" || s == "center" && t < 0 ? e.top - o : e.bottom - k + o) - u.top;
      }
      if (i == "nearest" ? e.left < u.left ? (g = e.left - (u.left + r), t > 0 && e.right > u.right + g && (g = e.right - u.right + r)) : e.right > u.right && (g = e.right - u.right + r, t < 0 && e.left < u.left + g && (g = e.left - (u.left + r))) : g = (i == "center" ? e.left + (e.right - e.left) / 2 - (u.right - u.left) / 2 : i == "start" == l ? e.left - r : e.right - (u.right - u.left) + r) - u.left, g || b)
        if (d)
          h.scrollBy(g, b);
        else {
          let v = 0, k = 0;
          if (b) {
            let w = c.scrollTop;
            c.scrollTop += b / m, k = (c.scrollTop - w) * m;
          }
          if (g) {
            let w = c.scrollLeft;
            c.scrollLeft += g / p, v = (c.scrollLeft - w) * p;
          }
          e = {
            left: e.left - v,
            top: e.top - k,
            right: e.right - v,
            bottom: e.bottom - k
          }, v && Math.abs(v - g) < 1 && (i = "nearest"), k && Math.abs(k - b) < 1 && (s = "nearest");
        }
      if (d)
        break;
      (e.top < u.top || e.bottom > u.bottom || e.left < u.left || e.right > u.right) && (e = {
        left: Math.max(e.left, u.left),
        right: Math.min(e.right, u.right),
        top: Math.max(e.top, u.top),
        bottom: Math.min(e.bottom, u.bottom)
      }), c = c.assignedSlot || c.parentNode;
    } else if (c.nodeType == 11)
      c = c.host;
    else
      break;
}
function P0(n) {
  let e = n.ownerDocument, t, i;
  for (let s = n.parentNode; s && !(s == e.body || t && i); )
    if (s.nodeType == 1)
      !i && s.scrollHeight > s.clientHeight && (i = s), !t && s.scrollWidth > s.clientWidth && (t = s), s = s.assignedSlot || s.parentNode;
    else if (s.nodeType == 11)
      s = s.host;
    else
      break;
  return { x: t, y: i };
}
class I0 {
  constructor() {
    this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
  }
  eq(e) {
    return this.anchorNode == e.anchorNode && this.anchorOffset == e.anchorOffset && this.focusNode == e.focusNode && this.focusOffset == e.focusOffset;
  }
  setRange(e) {
    let { anchorNode: t, focusNode: i } = e;
    this.set(t, Math.min(e.anchorOffset, t ? ni(t) : 0), i, Math.min(e.focusOffset, i ? ni(i) : 0));
  }
  set(e, t, i, s) {
    this.anchorNode = e, this.anchorOffset = t, this.focusNode = i, this.focusOffset = s;
  }
}
let xn = null;
function td(n) {
  if (n.setActive)
    return n.setActive();
  if (xn)
    return n.focus(xn);
  let e = [];
  for (let t = n; t && (e.push(t, t.scrollTop, t.scrollLeft), t != t.ownerDocument); t = t.parentNode)
    ;
  if (n.focus(xn == null ? {
    get preventScroll() {
      return xn = { preventScroll: !0 }, !0;
    }
  } : void 0), !xn) {
    xn = !1;
    for (let t = 0; t < e.length; ) {
      let i = e[t++], s = e[t++], r = e[t++];
      i.scrollTop != s && (i.scrollTop = s), i.scrollLeft != r && (i.scrollLeft = r);
    }
  }
}
let yc;
function un(n, e, t = e) {
  let i = yc || (yc = document.createRange());
  return i.setEnd(n, t), i.setStart(n, e), i;
}
function En(n, e, t, i) {
  let s = { key: e, code: e, keyCode: t, which: t, cancelable: !0 };
  i && ({ altKey: s.altKey, ctrlKey: s.ctrlKey, shiftKey: s.shiftKey, metaKey: s.metaKey } = i);
  let r = new KeyboardEvent("keydown", s);
  r.synthetic = !0, n.dispatchEvent(r);
  let o = new KeyboardEvent("keyup", s);
  return o.synthetic = !0, n.dispatchEvent(o), r.defaultPrevented || o.defaultPrevented;
}
function B0(n) {
  for (; n; ) {
    if (n && (n.nodeType == 9 || n.nodeType == 11 && n.host))
      return n;
    n = n.assignedSlot || n.parentNode;
  }
  return null;
}
function id(n) {
  for (; n.attributes.length; )
    n.removeAttributeNode(n.attributes[0]);
}
function N0(n, e) {
  let t = e.focusNode, i = e.focusOffset;
  if (!t || e.anchorNode != t || e.anchorOffset != i)
    return !1;
  for (i = Math.min(i, ni(t)); ; )
    if (i) {
      if (t.nodeType != 1)
        return !1;
      let s = t.childNodes[i - 1];
      s.contentEditable == "false" ? i-- : (t = s, i = ni(t));
    } else {
      if (t == n)
        return !0;
      i = fn(t), t = t.parentNode;
    }
}
function nd(n) {
  return n.scrollTop > Math.max(1, n.scrollHeight - n.clientHeight - 4);
}
function sd(n, e) {
  for (let t = n, i = e; ; ) {
    if (t.nodeType == 3 && i > 0)
      return { node: t, offset: i };
    if (t.nodeType == 1 && i > 0) {
      if (t.contentEditable == "false")
        return null;
      t = t.childNodes[i - 1], i = ni(t);
    } else if (t.parentNode && !no(t))
      i = fn(t), t = t.parentNode;
    else
      return null;
  }
}
function rd(n, e) {
  for (let t = n, i = e; ; ) {
    if (t.nodeType == 3 && i < t.nodeValue.length)
      return { node: t, offset: i };
    if (t.nodeType == 1 && i < t.childNodes.length) {
      if (t.contentEditable == "false")
        return null;
      t = t.childNodes[i], i = 0;
    } else if (t.parentNode && !no(t))
      i = fn(t) + 1, t = t.parentNode;
    else
      return null;
  }
}
class ze {
  constructor(e, t, i = !0) {
    this.node = e, this.offset = t, this.precise = i;
  }
  static before(e, t) {
    return new ze(e.parentNode, fn(e), t);
  }
  static after(e, t) {
    return new ze(e.parentNode, fn(e) + 1, t);
  }
}
const Ua = [];
class ae {
  constructor() {
    this.parent = null, this.dom = null, this.flags = 2;
  }
  get overrideDOMText() {
    return null;
  }
  get posAtStart() {
    return this.parent ? this.parent.posBefore(this) : 0;
  }
  get posAtEnd() {
    return this.posAtStart + this.length;
  }
  posBefore(e) {
    let t = this.posAtStart;
    for (let i of this.children) {
      if (i == e)
        return t;
      t += i.length + i.breakAfter;
    }
    throw new RangeError("Invalid child in posBefore");
  }
  posAfter(e) {
    return this.posBefore(e) + e.length;
  }
  sync(e, t) {
    if (this.flags & 2) {
      let i = this.dom, s = null, r;
      for (let o of this.children) {
        if (o.flags & 7) {
          if (!o.dom && (r = s ? s.nextSibling : i.firstChild)) {
            let l = ae.get(r);
            (!l || !l.parent && l.canReuseDOM(o)) && o.reuseDOM(r);
          }
          o.sync(e, t), o.flags &= -8;
        }
        if (r = s ? s.nextSibling : i.firstChild, t && !t.written && t.node == i && r != o.dom && (t.written = !0), o.dom.parentNode == i)
          for (; r && r != o.dom; )
            r = bc(r);
        else
          i.insertBefore(o.dom, r);
        s = o.dom;
      }
      for (r = s ? s.nextSibling : i.firstChild, r && t && t.node == i && (t.written = !0); r; )
        r = bc(r);
    } else if (this.flags & 1)
      for (let i of this.children)
        i.flags & 7 && (i.sync(e, t), i.flags &= -8);
  }
  reuseDOM(e) {
  }
  localPosFromDOM(e, t) {
    let i;
    if (e == this.dom)
      i = this.dom.childNodes[t];
    else {
      let s = ni(e) == 0 ? 0 : t == 0 ? -1 : 1;
      for (; ; ) {
        let r = e.parentNode;
        if (r == this.dom)
          break;
        s == 0 && r.firstChild != r.lastChild && (e == r.firstChild ? s = -1 : s = 1), e = r;
      }
      s < 0 ? i = e : i = e.nextSibling;
    }
    if (i == this.dom.firstChild)
      return 0;
    for (; i && !ae.get(i); )
      i = i.nextSibling;
    if (!i)
      return this.length;
    for (let s = 0, r = 0; ; s++) {
      let o = this.children[s];
      if (o.dom == i)
        return r;
      r += o.length + o.breakAfter;
    }
  }
  domBoundsAround(e, t, i = 0) {
    let s = -1, r = -1, o = -1, l = -1;
    for (let a = 0, h = i, c = i; a < this.children.length; a++) {
      let f = this.children[a], u = h + f.length;
      if (h < e && u > t)
        return f.domBoundsAround(e, t, h);
      if (u >= e && s == -1 && (s = a, r = h), h > t && f.dom.parentNode == this.dom) {
        o = a, l = c;
        break;
      }
      c = u, h = u + f.breakAfter;
    }
    return {
      from: r,
      to: l < 0 ? i + this.length : l,
      startDOM: (s ? this.children[s - 1].dom.nextSibling : null) || this.dom.firstChild,
      endDOM: o < this.children.length && o >= 0 ? this.children[o].dom : null
    };
  }
  markDirty(e = !1) {
    this.flags |= 2, this.markParentsDirty(e);
  }
  markParentsDirty(e) {
    for (let t = this.parent; t; t = t.parent) {
      if (e && (t.flags |= 2), t.flags & 1)
        return;
      t.flags |= 1, e = !1;
    }
  }
  setParent(e) {
    this.parent != e && (this.parent = e, this.flags & 7 && this.markParentsDirty(!0));
  }
  setDOM(e) {
    this.dom != e && (this.dom && (this.dom.cmView = null), this.dom = e, e.cmView = this);
  }
  get rootView() {
    for (let e = this; ; ) {
      let t = e.parent;
      if (!t)
        return e;
      e = t;
    }
  }
  replaceChildren(e, t, i = Ua) {
    this.markDirty();
    for (let s = e; s < t; s++) {
      let r = this.children[s];
      r.parent == this && i.indexOf(r) < 0 && r.destroy();
    }
    i.length < 250 ? this.children.splice(e, t - e, ...i) : this.children = [].concat(this.children.slice(0, e), i, this.children.slice(t));
    for (let s = 0; s < i.length; s++)
      i[s].setParent(this);
  }
  ignoreMutation(e) {
    return !1;
  }
  ignoreEvent(e) {
    return !1;
  }
  childCursor(e = this.length) {
    return new od(this.children, e, this.children.length);
  }
  childPos(e, t = 1) {
    return this.childCursor().findPos(e, t);
  }
  toString() {
    let e = this.constructor.name.replace("View", "");
    return e + (this.children.length ? "(" + this.children.join() + ")" : this.length ? "[" + (e == "Text" ? this.text : this.length) + "]" : "") + (this.breakAfter ? "#" : "");
  }
  static get(e) {
    return e.cmView;
  }
  get isEditable() {
    return !0;
  }
  get isWidget() {
    return !1;
  }
  get isHidden() {
    return !1;
  }
  merge(e, t, i, s, r, o) {
    return !1;
  }
  become(e) {
    return !1;
  }
  canReuseDOM(e) {
    return e.constructor == this.constructor && !((this.flags | e.flags) & 8);
  }
  // When this is a zero-length view with a side, this should return a
  // number <= 0 to indicate it is before its position, or a
  // number > 0 when after its position.
  getSide() {
    return 0;
  }
  destroy() {
    for (let e of this.children)
      e.parent == this && e.destroy();
    this.parent = null;
  }
}
ae.prototype.breakAfter = 0;
function bc(n) {
  let e = n.nextSibling;
  return n.parentNode.removeChild(n), e;
}
class od {
  constructor(e, t, i) {
    this.children = e, this.pos = t, this.i = i, this.off = 0;
  }
  findPos(e, t = 1) {
    for (; ; ) {
      if (e > this.pos || e == this.pos && (t > 0 || this.i == 0 || this.children[this.i - 1].breakAfter))
        return this.off = e - this.pos, this;
      let i = this.children[--this.i];
      this.pos -= i.length + i.breakAfter;
    }
  }
}
function ld(n, e, t, i, s, r, o, l, a) {
  let { children: h } = n, c = h.length ? h[e] : null, f = r.length ? r[r.length - 1] : null, u = f ? f.breakAfter : o;
  if (!(e == i && c && !o && !u && r.length < 2 && c.merge(t, s, r.length ? f : null, t == 0, l, a))) {
    if (i < h.length) {
      let d = h[i];
      d && (s < d.length || d.breakAfter && (f != null && f.breakAfter)) ? (e == i && (d = d.split(s), s = 0), !u && f && d.merge(0, s, f, !0, 0, a) ? r[r.length - 1] = d : ((s || d.children.length && !d.children[0].length) && d.merge(0, s, null, !1, 0, a), r.push(d))) : d != null && d.breakAfter && (f ? f.breakAfter = 1 : o = 1), i++;
    }
    for (c && (c.breakAfter = o, t > 0 && (!o && r.length && c.merge(t, c.length, r[0], !1, l, 0) ? c.breakAfter = r.shift().breakAfter : (t < c.length || c.children.length && c.children[c.children.length - 1].length == 0) && c.merge(t, c.length, null, !1, l, 0), e++)); e < i && r.length; )
      if (h[i - 1].become(r[r.length - 1]))
        i--, r.pop(), a = r.length ? 0 : l;
      else if (h[e].become(r[0]))
        e++, r.shift(), l = r.length ? 0 : a;
      else
        break;
    !r.length && e && i < h.length && !h[e - 1].breakAfter && h[i].merge(0, 0, h[e - 1], !1, l, a) && e--, (e < i || r.length) && n.replaceChildren(e, i, r);
  }
}
function ad(n, e, t, i, s, r) {
  let o = n.childCursor(), { i: l, off: a } = o.findPos(t, 1), { i: h, off: c } = o.findPos(e, -1), f = e - t;
  for (let u of i)
    f += u.length;
  n.length += f, ld(n, h, c, l, a, i, 0, s, r);
}
let lt = typeof navigator < "u" ? navigator : { userAgent: "", vendor: "", platform: "" }, ea = typeof document < "u" ? document : { documentElement: { style: {} } };
const ta = /* @__PURE__ */ /Edge\/(\d+)/.exec(lt.userAgent), hd = /* @__PURE__ */ /MSIE \d/.test(lt.userAgent), ia = /* @__PURE__ */ /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(lt.userAgent), Bo = !!(hd || ia || ta), vc = !Bo && /* @__PURE__ */ /gecko\/(\d+)/i.test(lt.userAgent), hl = !Bo && /* @__PURE__ */ /Chrome\/(\d+)/.exec(lt.userAgent), F0 = "webkitFontSmoothing" in ea.documentElement.style, cd = !Bo && /* @__PURE__ */ /Apple Computer/.test(lt.vendor), xc = cd && (/* @__PURE__ */ /Mobile\/\w+/.test(lt.userAgent) || lt.maxTouchPoints > 2);
var O = {
  mac: xc || /* @__PURE__ */ /Mac/.test(lt.platform),
  windows: /* @__PURE__ */ /Win/.test(lt.platform),
  linux: /* @__PURE__ */ /Linux|X11/.test(lt.platform),
  ie: Bo,
  ie_version: hd ? ea.documentMode || 6 : ia ? +ia[1] : ta ? +ta[1] : 0,
  gecko: vc,
  gecko_version: vc ? +(/* @__PURE__ */ /Firefox\/(\d+)/.exec(lt.userAgent) || [0, 0])[1] : 0,
  chrome: !!hl,
  chrome_version: hl ? +hl[1] : 0,
  ios: xc,
  android: /* @__PURE__ */ /Android\b/.test(lt.userAgent),
  safari: cd,
  webkit_version: F0 ? +(/* @__PURE__ */ /\bAppleWebKit\/(\d+)/.exec(lt.userAgent) || [0, 0])[1] : 0,
  tabSize: ea.documentElement.style.tabSize != null ? "tab-size" : "-moz-tab-size"
};
const H0 = 256;
class Wt extends ae {
  constructor(e) {
    super(), this.text = e;
  }
  get length() {
    return this.text.length;
  }
  createDOM(e) {
    this.setDOM(e || document.createTextNode(this.text));
  }
  sync(e, t) {
    this.dom || this.createDOM(), this.dom.nodeValue != this.text && (t && t.node == this.dom && (t.written = !0), this.dom.nodeValue = this.text);
  }
  reuseDOM(e) {
    e.nodeType == 3 && this.createDOM(e);
  }
  merge(e, t, i) {
    return this.flags & 8 || i && (!(i instanceof Wt) || this.length - (t - e) + i.length > H0 || i.flags & 8) ? !1 : (this.text = this.text.slice(0, e) + (i ? i.text : "") + this.text.slice(t), this.markDirty(), !0);
  }
  split(e) {
    let t = new Wt(this.text.slice(e));
    return this.text = this.text.slice(0, e), this.markDirty(), t.flags |= this.flags & 8, t;
  }
  localPosFromDOM(e, t) {
    return e == this.dom ? t : t ? this.text.length : 0;
  }
  domAtPos(e) {
    return new ze(this.dom, e);
  }
  domBoundsAround(e, t, i) {
    return { from: i, to: i + this.length, startDOM: this.dom, endDOM: this.dom.nextSibling };
  }
  coordsAt(e, t) {
    return W0(this.dom, e, t);
  }
}
class vi extends ae {
  constructor(e, t = [], i = 0) {
    super(), this.mark = e, this.children = t, this.length = i;
    for (let s of t)
      s.setParent(this);
  }
  setAttrs(e) {
    if (id(e), this.mark.class && (e.className = this.mark.class), this.mark.attrs)
      for (let t in this.mark.attrs)
        e.setAttribute(t, this.mark.attrs[t]);
    return e;
  }
  canReuseDOM(e) {
    return super.canReuseDOM(e) && !((this.flags | e.flags) & 8);
  }
  reuseDOM(e) {
    e.nodeName == this.mark.tagName.toUpperCase() && (this.setDOM(e), this.flags |= 6);
  }
  sync(e, t) {
    this.dom ? this.flags & 4 && this.setAttrs(this.dom) : this.setDOM(this.setAttrs(document.createElement(this.mark.tagName))), super.sync(e, t);
  }
  merge(e, t, i, s, r, o) {
    return i && (!(i instanceof vi && i.mark.eq(this.mark)) || e && r <= 0 || t < this.length && o <= 0) ? !1 : (ad(this, e, t, i ? i.children.slice() : [], r - 1, o - 1), this.markDirty(), !0);
  }
  split(e) {
    let t = [], i = 0, s = -1, r = 0;
    for (let l of this.children) {
      let a = i + l.length;
      a > e && t.push(i < e ? l.split(e - i) : l), s < 0 && i >= e && (s = r), i = a, r++;
    }
    let o = this.length - e;
    return this.length = e, s > -1 && (this.children.length = s, this.markDirty()), new vi(this.mark, t, o);
  }
  domAtPos(e) {
    return fd(this, e);
  }
  coordsAt(e, t) {
    return dd(this, e, t);
  }
}
function W0(n, e, t) {
  let i = n.nodeValue.length;
  e > i && (e = i);
  let s = e, r = e, o = 0;
  e == 0 && t < 0 || e == i && t >= 0 ? O.chrome || O.gecko || (e ? (s--, o = 1) : r < i && (r++, o = -1)) : t < 0 ? s-- : r < i && r++;
  let l = un(n, s, r).getClientRects();
  if (!l.length)
    return null;
  let a = l[(o ? o < 0 : t >= 0) ? 0 : l.length - 1];
  return O.safari && !o && a.width == 0 && (a = Array.prototype.find.call(l, (h) => h.width) || a), o ? Io(a, o < 0) : a || null;
}
class Bi extends ae {
  static create(e, t, i) {
    return new Bi(e, t, i);
  }
  constructor(e, t, i) {
    super(), this.widget = e, this.length = t, this.side = i, this.prevWidget = null;
  }
  split(e) {
    let t = Bi.create(this.widget, this.length - e, this.side);
    return this.length -= e, t;
  }
  sync(e) {
    (!this.dom || !this.widget.updateDOM(this.dom, e)) && (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom), this.prevWidget = null, this.setDOM(this.widget.toDOM(e)), this.widget.editable || (this.dom.contentEditable = "false"));
  }
  getSide() {
    return this.side;
  }
  merge(e, t, i, s, r, o) {
    return i && (!(i instanceof Bi) || !this.widget.compare(i.widget) || e > 0 && r <= 0 || t < this.length && o <= 0) ? !1 : (this.length = e + (i ? i.length : 0) + (this.length - t), !0);
  }
  become(e) {
    return e instanceof Bi && e.side == this.side && this.widget.constructor == e.widget.constructor ? (this.widget.compare(e.widget) || this.markDirty(!0), this.dom && !this.prevWidget && (this.prevWidget = this.widget), this.widget = e.widget, this.length = e.length, !0) : !1;
  }
  ignoreMutation() {
    return !0;
  }
  ignoreEvent(e) {
    return this.widget.ignoreEvent(e);
  }
  get overrideDOMText() {
    if (this.length == 0)
      return Z.empty;
    let e = this;
    for (; e.parent; )
      e = e.parent;
    let { view: t } = e, i = t && t.state.doc, s = this.posAtStart;
    return i ? i.slice(s, s + this.length) : Z.empty;
  }
  domAtPos(e) {
    return (this.length ? e == 0 : this.side > 0) ? ze.before(this.dom) : ze.after(this.dom, e == this.length);
  }
  domBoundsAround() {
    return null;
  }
  coordsAt(e, t) {
    let i = this.widget.coordsAt(this.dom, e, t);
    if (i)
      return i;
    let s = this.dom.getClientRects(), r = null;
    if (!s.length)
      return null;
    let o = this.side ? this.side < 0 : e > 0;
    for (let l = o ? s.length - 1 : 0; r = s[l], !(e > 0 ? l == 0 : l == s.length - 1 || r.top < r.bottom); l += o ? -1 : 1)
      ;
    return Io(r, !o);
  }
  get isEditable() {
    return !1;
  }
  get isWidget() {
    return !0;
  }
  get isHidden() {
    return this.widget.isHidden;
  }
  destroy() {
    super.destroy(), this.dom && this.widget.destroy(this.dom);
  }
}
class Ln extends ae {
  constructor(e) {
    super(), this.side = e;
  }
  get length() {
    return 0;
  }
  merge() {
    return !1;
  }
  become(e) {
    return e instanceof Ln && e.side == this.side;
  }
  split() {
    return new Ln(this.side);
  }
  sync() {
    if (!this.dom) {
      let e = document.createElement("img");
      e.className = "cm-widgetBuffer", e.setAttribute("aria-hidden", "true"), this.setDOM(e);
    }
  }
  getSide() {
    return this.side;
  }
  domAtPos(e) {
    return this.side > 0 ? ze.before(this.dom) : ze.after(this.dom);
  }
  localPosFromDOM() {
    return 0;
  }
  domBoundsAround() {
    return null;
  }
  coordsAt(e) {
    return this.dom.getBoundingClientRect();
  }
  get overrideDOMText() {
    return Z.empty;
  }
  get isHidden() {
    return !0;
  }
}
Wt.prototype.children = Bi.prototype.children = Ln.prototype.children = Ua;
function fd(n, e) {
  let t = n.dom, { children: i } = n, s = 0;
  for (let r = 0; s < i.length; s++) {
    let o = i[s], l = r + o.length;
    if (!(l == r && o.getSide() <= 0)) {
      if (e > r && e < l && o.dom.parentNode == t)
        return o.domAtPos(e - r);
      if (e <= r)
        break;
      r = l;
    }
  }
  for (let r = s; r > 0; r--) {
    let o = i[r - 1];
    if (o.dom.parentNode == t)
      return o.domAtPos(o.length);
  }
  for (let r = s; r < i.length; r++) {
    let o = i[r];
    if (o.dom.parentNode == t)
      return o.domAtPos(0);
  }
  return new ze(t, 0);
}
function ud(n, e, t) {
  let i, { children: s } = n;
  t > 0 && e instanceof vi && s.length && (i = s[s.length - 1]) instanceof vi && i.mark.eq(e.mark) ? ud(i, e.children[0], t - 1) : (s.push(e), e.setParent(n)), n.length += e.length;
}
function dd(n, e, t) {
  let i = null, s = -1, r = null, o = -1;
  function l(h, c) {
    for (let f = 0, u = 0; f < h.children.length && u <= c; f++) {
      let d = h.children[f], p = u + d.length;
      p >= c && (d.children.length ? l(d, c - u) : (!r || r.isHidden && (t > 0 || z0(r, d))) && (p > c || u == p && d.getSide() > 0) ? (r = d, o = c - u) : (u < c || u == p && d.getSide() < 0 && !d.isHidden) && (i = d, s = c - u)), u = p;
    }
  }
  l(n, e);
  let a = (t < 0 ? i : r) || i || r;
  return a ? a.coordsAt(Math.max(0, a == i ? s : o), t) : V0(n);
}
function V0(n) {
  let e = n.dom.lastChild;
  if (!e)
    return n.dom.getBoundingClientRect();
  let t = Es(e);
  return t[t.length - 1] || null;
}
function z0(n, e) {
  let t = n.coordsAt(0, 1), i = e.coordsAt(0, 1);
  return t && i && i.top < t.bottom;
}
function na(n, e) {
  for (let t in n)
    t == "class" && e.class ? e.class += " " + n.class : t == "style" && e.style ? e.style += ";" + n.style : e[t] = n[t];
  return e;
}
const wc = /* @__PURE__ */ Object.create(null);
function so(n, e, t) {
  if (n == e)
    return !0;
  n || (n = wc), e || (e = wc);
  let i = Object.keys(n), s = Object.keys(e);
  if (i.length - (t && i.indexOf(t) > -1 ? 1 : 0) != s.length - (t && s.indexOf(t) > -1 ? 1 : 0))
    return !1;
  for (let r of i)
    if (r != t && (s.indexOf(r) == -1 || n[r] !== e[r]))
      return !1;
  return !0;
}
function sa(n, e, t) {
  let i = !1;
  if (e)
    for (let s in e)
      t && s in t || (i = !0, s == "style" ? n.style.cssText = "" : n.removeAttribute(s));
  if (t)
    for (let s in t)
      e && e[s] == t[s] || (i = !0, s == "style" ? n.style.cssText = t[s] : n.setAttribute(s, t[s]));
  return i;
}
function $0(n) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t = 0; t < n.attributes.length; t++) {
    let i = n.attributes[t];
    e[i.name] = i.value;
  }
  return e;
}
class ji {
  /**
  Compare this instance to another instance of the same type.
  (TypeScript can't express this, but only instances of the same
  specific class will be passed to this method.) This is used to
  avoid redrawing widgets when they are replaced by a new
  decoration of the same type. The default implementation just
  returns `false`, which will cause new instances of the widget to
  always be redrawn.
  */
  eq(e) {
    return !1;
  }
  /**
  Update a DOM element created by a widget of the same type (but
  different, non-`eq` content) to reflect this widget. May return
  true to indicate that it could update, false to indicate it
  couldn't (in which case the widget will be redrawn). The default
  implementation just returns false.
  */
  updateDOM(e, t) {
    return !1;
  }
  /**
  @internal
  */
  compare(e) {
    return this == e || this.constructor == e.constructor && this.eq(e);
  }
  /**
  The estimated height this widget will have, to be used when
  estimating the height of content that hasn't been drawn. May
  return -1 to indicate you don't know. The default implementation
  returns -1.
  */
  get estimatedHeight() {
    return -1;
  }
  /**
  For inline widgets that are displayed inline (as opposed to
  `inline-block`) and introduce line breaks (through `<br>` tags
  or textual newlines), this must indicate the amount of line
  breaks they introduce. Defaults to 0.
  */
  get lineBreaks() {
    return 0;
  }
  /**
  Can be used to configure which kinds of events inside the widget
  should be ignored by the editor. The default is to ignore all
  events.
  */
  ignoreEvent(e) {
    return !0;
  }
  /**
  Override the way screen coordinates for positions at/in the
  widget are found. `pos` will be the offset into the widget, and
  `side` the side of the position that is being queried—less than
  zero for before, greater than zero for after, and zero for
  directly at that position.
  */
  coordsAt(e, t, i) {
    return null;
  }
  /**
  @internal
  */
  get isHidden() {
    return !1;
  }
  /**
  @internal
  */
  get editable() {
    return !1;
  }
  /**
  This is called when the an instance of the widget is removed
  from the editor view.
  */
  destroy(e) {
  }
}
var Qe = /* @__PURE__ */ function(n) {
  return n[n.Text = 0] = "Text", n[n.WidgetBefore = 1] = "WidgetBefore", n[n.WidgetAfter = 2] = "WidgetAfter", n[n.WidgetRange = 3] = "WidgetRange", n;
}(Qe || (Qe = {}));
class F extends cn {
  constructor(e, t, i, s) {
    super(), this.startSide = e, this.endSide = t, this.widget = i, this.spec = s;
  }
  /**
  @internal
  */
  get heightRelevant() {
    return !1;
  }
  /**
  Create a mark decoration, which influences the styling of the
  content in its range. Nested mark decorations will cause nested
  DOM elements to be created. Nesting order is determined by
  precedence of the [facet](https://codemirror.net/6/docs/ref/#view.EditorView^decorations), with
  the higher-precedence decorations creating the inner DOM nodes.
  Such elements are split on line boundaries and on the boundaries
  of lower-precedence decorations.
  */
  static mark(e) {
    return new $s(e);
  }
  /**
  Create a widget decoration, which displays a DOM element at the
  given position.
  */
  static widget(e) {
    let t = Math.max(-1e4, Math.min(1e4, e.side || 0)), i = !!e.block;
    return t += i && !e.inlineOrder ? t > 0 ? 3e8 : -4e8 : t > 0 ? 1e8 : -1e8, new $i(e, t, t, i, e.widget || null, !1);
  }
  /**
  Create a replace decoration which replaces the given range with
  a widget, or simply hides it.
  */
  static replace(e) {
    let t = !!e.block, i, s;
    if (e.isBlockGap)
      i = -5e8, s = 4e8;
    else {
      let { start: r, end: o } = pd(e, t);
      i = (r ? t ? -3e8 : -1 : 5e8) - 1, s = (o ? t ? 2e8 : 1 : -6e8) + 1;
    }
    return new $i(e, i, s, t, e.widget || null, !0);
  }
  /**
  Create a line decoration, which can add DOM attributes to the
  line starting at the given position.
  */
  static line(e) {
    return new Us(e);
  }
  /**
  Build a [`DecorationSet`](https://codemirror.net/6/docs/ref/#view.DecorationSet) from the given
  decorated range or ranges. If the ranges aren't already sorted,
  pass `true` for `sort` to make the library sort them for you.
  */
  static set(e, t = !1) {
    return Y.of(e, t);
  }
  /**
  @internal
  */
  hasHeight() {
    return this.widget ? this.widget.estimatedHeight > -1 : !1;
  }
}
F.none = Y.empty;
class $s extends F {
  constructor(e) {
    let { start: t, end: i } = pd(e);
    super(t ? -1 : 5e8, i ? 1 : -6e8, null, e), this.tagName = e.tagName || "span", this.class = e.class || "", this.attrs = e.attributes || null;
  }
  eq(e) {
    var t, i;
    return this == e || e instanceof $s && this.tagName == e.tagName && (this.class || ((t = this.attrs) === null || t === void 0 ? void 0 : t.class)) == (e.class || ((i = e.attrs) === null || i === void 0 ? void 0 : i.class)) && so(this.attrs, e.attrs, "class");
  }
  range(e, t = e) {
    if (e >= t)
      throw new RangeError("Mark decorations may not be empty");
    return super.range(e, t);
  }
}
$s.prototype.point = !1;
class Us extends F {
  constructor(e) {
    super(-2e8, -2e8, null, e);
  }
  eq(e) {
    return e instanceof Us && this.spec.class == e.spec.class && so(this.spec.attributes, e.spec.attributes);
  }
  range(e, t = e) {
    if (t != e)
      throw new RangeError("Line decoration ranges must be zero-length");
    return super.range(e, t);
  }
}
Us.prototype.mapMode = Xe.TrackBefore;
Us.prototype.point = !0;
class $i extends F {
  constructor(e, t, i, s, r, o) {
    super(t, i, r, e), this.block = s, this.isReplace = o, this.mapMode = s ? t <= 0 ? Xe.TrackBefore : Xe.TrackAfter : Xe.TrackDel;
  }
  // Only relevant when this.block == true
  get type() {
    return this.startSide != this.endSide ? Qe.WidgetRange : this.startSide <= 0 ? Qe.WidgetBefore : Qe.WidgetAfter;
  }
  get heightRelevant() {
    return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0);
  }
  eq(e) {
    return e instanceof $i && U0(this.widget, e.widget) && this.block == e.block && this.startSide == e.startSide && this.endSide == e.endSide;
  }
  range(e, t = e) {
    if (this.isReplace && (e > t || e == t && this.startSide > 0 && this.endSide <= 0))
      throw new RangeError("Invalid range for replacement decoration");
    if (!this.isReplace && t != e)
      throw new RangeError("Widget decorations can only have zero-length ranges");
    return super.range(e, t);
  }
}
$i.prototype.point = !0;
function pd(n, e = !1) {
  let { inclusiveStart: t, inclusiveEnd: i } = n;
  return t == null && (t = n.inclusive), i == null && (i = n.inclusive), { start: t ?? e, end: i ?? e };
}
function U0(n, e) {
  return n == e || !!(n && e && n.compare(e));
}
function Fr(n, e, t, i = 0) {
  let s = t.length - 1;
  s >= 0 && t[s] + i >= n ? t[s] = Math.max(t[s], e) : t.push(n, e);
}
class we extends ae {
  constructor() {
    super(...arguments), this.children = [], this.length = 0, this.prevAttrs = void 0, this.attrs = null, this.breakAfter = 0;
  }
  // Consumes source
  merge(e, t, i, s, r, o) {
    if (i) {
      if (!(i instanceof we))
        return !1;
      this.dom || i.transferDOM(this);
    }
    return s && this.setDeco(i ? i.attrs : null), ad(this, e, t, i ? i.children.slice() : [], r, o), !0;
  }
  split(e) {
    let t = new we();
    if (t.breakAfter = this.breakAfter, this.length == 0)
      return t;
    let { i, off: s } = this.childPos(e);
    s && (t.append(this.children[i].split(s), 0), this.children[i].merge(s, this.children[i].length, null, !1, 0, 0), i++);
    for (let r = i; r < this.children.length; r++)
      t.append(this.children[r], 0);
    for (; i > 0 && this.children[i - 1].length == 0; )
      this.children[--i].destroy();
    return this.children.length = i, this.markDirty(), this.length = e, t;
  }
  transferDOM(e) {
    this.dom && (this.markDirty(), e.setDOM(this.dom), e.prevAttrs = this.prevAttrs === void 0 ? this.attrs : this.prevAttrs, this.prevAttrs = void 0, this.dom = null);
  }
  setDeco(e) {
    so(this.attrs, e) || (this.dom && (this.prevAttrs = this.attrs, this.markDirty()), this.attrs = e);
  }
  append(e, t) {
    ud(this, e, t);
  }
  // Only called when building a line view in ContentBuilder
  addLineDeco(e) {
    let t = e.spec.attributes, i = e.spec.class;
    t && (this.attrs = na(t, this.attrs || {})), i && (this.attrs = na({ class: i }, this.attrs || {}));
  }
  domAtPos(e) {
    return fd(this, e);
  }
  reuseDOM(e) {
    e.nodeName == "DIV" && (this.setDOM(e), this.flags |= 6);
  }
  sync(e, t) {
    var i;
    this.dom ? this.flags & 4 && (id(this.dom), this.dom.className = "cm-line", this.prevAttrs = this.attrs ? null : void 0) : (this.setDOM(document.createElement("div")), this.dom.className = "cm-line", this.prevAttrs = this.attrs ? null : void 0), this.prevAttrs !== void 0 && (sa(this.dom, this.prevAttrs, this.attrs), this.dom.classList.add("cm-line"), this.prevAttrs = void 0), super.sync(e, t);
    let s = this.dom.lastChild;
    for (; s && ae.get(s) instanceof vi; )
      s = s.lastChild;
    if (!s || !this.length || s.nodeName != "BR" && ((i = ae.get(s)) === null || i === void 0 ? void 0 : i.isEditable) == !1 && (!O.ios || !this.children.some((r) => r instanceof Wt))) {
      let r = document.createElement("BR");
      r.cmIgnore = !0, this.dom.appendChild(r);
    }
  }
  measureTextSize() {
    if (this.children.length == 0 || this.length > 20)
      return null;
    let e = 0, t;
    for (let i of this.children) {
      if (!(i instanceof Wt) || /[^ -~]/.test(i.text))
        return null;
      let s = Es(i.dom);
      if (s.length != 1)
        return null;
      e += s[0].width, t = s[0].height;
    }
    return e ? {
      lineHeight: this.dom.getBoundingClientRect().height,
      charWidth: e / this.length,
      textHeight: t
    } : null;
  }
  coordsAt(e, t) {
    let i = dd(this, e, t);
    if (!this.children.length && i && this.parent) {
      let { heightOracle: s } = this.parent.view.viewState, r = i.bottom - i.top;
      if (Math.abs(r - s.lineHeight) < 2 && s.textHeight < r) {
        let o = (r - s.textHeight) / 2;
        return { top: i.top + o, bottom: i.bottom - o, left: i.left, right: i.left };
      }
    }
    return i;
  }
  become(e) {
    return e instanceof we && this.children.length == 0 && e.children.length == 0 && so(this.attrs, e.attrs) && this.breakAfter == e.breakAfter;
  }
  covers() {
    return !0;
  }
  static find(e, t) {
    for (let i = 0, s = 0; i < e.children.length; i++) {
      let r = e.children[i], o = s + r.length;
      if (o >= t) {
        if (r instanceof we)
          return r;
        if (o > t)
          break;
      }
      s = o + r.breakAfter;
    }
    return null;
  }
}
class yi extends ae {
  constructor(e, t, i) {
    super(), this.widget = e, this.length = t, this.deco = i, this.breakAfter = 0, this.prevWidget = null;
  }
  merge(e, t, i, s, r, o) {
    return i && (!(i instanceof yi) || !this.widget.compare(i.widget) || e > 0 && r <= 0 || t < this.length && o <= 0) ? !1 : (this.length = e + (i ? i.length : 0) + (this.length - t), !0);
  }
  domAtPos(e) {
    return e == 0 ? ze.before(this.dom) : ze.after(this.dom, e == this.length);
  }
  split(e) {
    let t = this.length - e;
    this.length = e;
    let i = new yi(this.widget, t, this.deco);
    return i.breakAfter = this.breakAfter, i;
  }
  get children() {
    return Ua;
  }
  sync(e) {
    (!this.dom || !this.widget.updateDOM(this.dom, e)) && (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom), this.prevWidget = null, this.setDOM(this.widget.toDOM(e)), this.widget.editable || (this.dom.contentEditable = "false"));
  }
  get overrideDOMText() {
    return this.parent ? this.parent.view.state.doc.slice(this.posAtStart, this.posAtEnd) : Z.empty;
  }
  domBoundsAround() {
    return null;
  }
  become(e) {
    return e instanceof yi && e.widget.constructor == this.widget.constructor ? (e.widget.compare(this.widget) || this.markDirty(!0), this.dom && !this.prevWidget && (this.prevWidget = this.widget), this.widget = e.widget, this.length = e.length, this.deco = e.deco, this.breakAfter = e.breakAfter, !0) : !1;
  }
  ignoreMutation() {
    return !0;
  }
  ignoreEvent(e) {
    return this.widget.ignoreEvent(e);
  }
  get isEditable() {
    return !1;
  }
  get isWidget() {
    return !0;
  }
  coordsAt(e, t) {
    let i = this.widget.coordsAt(this.dom, e, t);
    return i || (this.widget instanceof ra ? null : Io(this.dom.getBoundingClientRect(), this.length ? e == 0 : t <= 0));
  }
  destroy() {
    super.destroy(), this.dom && this.widget.destroy(this.dom);
  }
  covers(e) {
    let { startSide: t, endSide: i } = this.deco;
    return t == i ? !1 : e < 0 ? t < 0 : i > 0;
  }
}
class ra extends ji {
  constructor(e) {
    super(), this.height = e;
  }
  toDOM() {
    let e = document.createElement("div");
    return e.className = "cm-gap", this.updateDOM(e), e;
  }
  eq(e) {
    return e.height == this.height;
  }
  updateDOM(e) {
    return e.style.height = this.height + "px", !0;
  }
  get editable() {
    return !0;
  }
  get estimatedHeight() {
    return this.height;
  }
  ignoreEvent() {
    return !1;
  }
}
class vs {
  constructor(e, t, i, s) {
    this.doc = e, this.pos = t, this.end = i, this.disallowBlockEffectsFor = s, this.content = [], this.curLine = null, this.breakAtStart = 0, this.pendingBuffer = 0, this.bufferMarks = [], this.atCursorPos = !0, this.openStart = -1, this.openEnd = -1, this.text = "", this.textOff = 0, this.cursor = e.iter(), this.skip = t;
  }
  posCovered() {
    if (this.content.length == 0)
      return !this.breakAtStart && this.doc.lineAt(this.pos).from != this.pos;
    let e = this.content[this.content.length - 1];
    return !(e.breakAfter || e instanceof yi && e.deco.endSide < 0);
  }
  getLine() {
    return this.curLine || (this.content.push(this.curLine = new we()), this.atCursorPos = !0), this.curLine;
  }
  flushBuffer(e = this.bufferMarks) {
    this.pendingBuffer && (this.curLine.append(ur(new Ln(-1), e), e.length), this.pendingBuffer = 0);
  }
  addBlockWidget(e) {
    this.flushBuffer(), this.curLine = null, this.content.push(e);
  }
  finish(e) {
    this.pendingBuffer && e <= this.bufferMarks.length ? this.flushBuffer() : this.pendingBuffer = 0, !this.posCovered() && !(e && this.content.length && this.content[this.content.length - 1] instanceof yi) && this.getLine();
  }
  buildText(e, t, i) {
    for (; e > 0; ) {
      if (this.textOff == this.text.length) {
        let { value: r, lineBreak: o, done: l } = this.cursor.next(this.skip);
        if (this.skip = 0, l)
          throw new Error("Ran out of text content when drawing inline views");
        if (o) {
          this.posCovered() || this.getLine(), this.content.length ? this.content[this.content.length - 1].breakAfter = 1 : this.breakAtStart = 1, this.flushBuffer(), this.curLine = null, this.atCursorPos = !0, e--;
          continue;
        } else
          this.text = r, this.textOff = 0;
      }
      let s = Math.min(
        this.text.length - this.textOff,
        e,
        512
        /* T.Chunk */
      );
      this.flushBuffer(t.slice(t.length - i)), this.getLine().append(ur(new Wt(this.text.slice(this.textOff, this.textOff + s)), t), i), this.atCursorPos = !0, this.textOff += s, e -= s, i = 0;
    }
  }
  span(e, t, i, s) {
    this.buildText(t - e, i, s), this.pos = t, this.openStart < 0 && (this.openStart = s);
  }
  point(e, t, i, s, r, o) {
    if (this.disallowBlockEffectsFor[o] && i instanceof $i) {
      if (i.block)
        throw new RangeError("Block decorations may not be specified via plugins");
      if (t > this.doc.lineAt(this.pos).to)
        throw new RangeError("Decorations that replace line breaks may not be specified via plugins");
    }
    let l = t - e;
    if (i instanceof $i)
      if (i.block)
        i.startSide > 0 && !this.posCovered() && this.getLine(), this.addBlockWidget(new yi(i.widget || Pn.block, l, i));
      else {
        let a = Bi.create(i.widget || Pn.inline, l, l ? 0 : i.startSide), h = this.atCursorPos && !a.isEditable && r <= s.length && (e < t || i.startSide > 0), c = !a.isEditable && (e < t || r > s.length || i.startSide <= 0), f = this.getLine();
        this.pendingBuffer == 2 && !h && !a.isEditable && (this.pendingBuffer = 0), this.flushBuffer(s), h && (f.append(ur(new Ln(1), s), r), r = s.length + Math.max(0, r - s.length)), f.append(ur(a, s), r), this.atCursorPos = c, this.pendingBuffer = c ? e < t || r > s.length ? 1 : 2 : 0, this.pendingBuffer && (this.bufferMarks = s.slice());
      }
    else this.doc.lineAt(this.pos).from == this.pos && this.getLine().addLineDeco(i);
    l && (this.textOff + l <= this.text.length ? this.textOff += l : (this.skip += l - (this.text.length - this.textOff), this.text = "", this.textOff = 0), this.pos = t), this.openStart < 0 && (this.openStart = r);
  }
  static build(e, t, i, s, r) {
    let o = new vs(e, t, i, r);
    return o.openEnd = Y.spans(s, t, i, o), o.openStart < 0 && (o.openStart = o.openEnd), o.finish(o.openEnd), o;
  }
}
function ur(n, e) {
  for (let t of e)
    n = new vi(t, [n], n.length);
  return n;
}
class Pn extends ji {
  constructor(e) {
    super(), this.tag = e;
  }
  eq(e) {
    return e.tag == this.tag;
  }
  toDOM() {
    return document.createElement(this.tag);
  }
  updateDOM(e) {
    return e.nodeName.toLowerCase() == this.tag;
  }
  get isHidden() {
    return !0;
  }
}
Pn.inline = /* @__PURE__ */ new Pn("span");
Pn.block = /* @__PURE__ */ new Pn("div");
var fe = /* @__PURE__ */ function(n) {
  return n[n.LTR = 0] = "LTR", n[n.RTL = 1] = "RTL", n;
}(fe || (fe = {}));
const dn = fe.LTR, qa = fe.RTL;
function md(n) {
  let e = [];
  for (let t = 0; t < n.length; t++)
    e.push(1 << +n[t]);
  return e;
}
const q0 = /* @__PURE__ */ md("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"), j0 = /* @__PURE__ */ md("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"), oa = /* @__PURE__ */ Object.create(null), $t = [];
for (let n of ["()", "[]", "{}"]) {
  let e = /* @__PURE__ */ n.charCodeAt(0), t = /* @__PURE__ */ n.charCodeAt(1);
  oa[e] = t, oa[t] = -e;
}
function gd(n) {
  return n <= 247 ? q0[n] : 1424 <= n && n <= 1524 ? 2 : 1536 <= n && n <= 1785 ? j0[n - 1536] : 1774 <= n && n <= 2220 ? 4 : 8192 <= n && n <= 8204 ? 256 : 64336 <= n && n <= 65023 ? 4 : 1;
}
const K0 = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
class Ni {
  /**
  The direction of this span.
  */
  get dir() {
    return this.level % 2 ? qa : dn;
  }
  /**
  @internal
  */
  constructor(e, t, i) {
    this.from = e, this.to = t, this.level = i;
  }
  /**
  @internal
  */
  side(e, t) {
    return this.dir == t == e ? this.to : this.from;
  }
  /**
  @internal
  */
  forward(e, t) {
    return e == (this.dir == t);
  }
  /**
  @internal
  */
  static find(e, t, i, s) {
    let r = -1;
    for (let o = 0; o < e.length; o++) {
      let l = e[o];
      if (l.from <= t && l.to >= t) {
        if (l.level == i)
          return o;
        (r < 0 || (s != 0 ? s < 0 ? l.from < t : l.to > t : e[r].level > l.level)) && (r = o);
      }
    }
    if (r < 0)
      throw new RangeError("Index out of range");
    return r;
  }
}
function yd(n, e) {
  if (n.length != e.length)
    return !1;
  for (let t = 0; t < n.length; t++) {
    let i = n[t], s = e[t];
    if (i.from != s.from || i.to != s.to || i.direction != s.direction || !yd(i.inner, s.inner))
      return !1;
  }
  return !0;
}
const le = [];
function G0(n, e, t, i, s) {
  for (let r = 0; r <= i.length; r++) {
    let o = r ? i[r - 1].to : e, l = r < i.length ? i[r].from : t, a = r ? 256 : s;
    for (let h = o, c = a, f = a; h < l; h++) {
      let u = gd(n.charCodeAt(h));
      u == 512 ? u = c : u == 8 && f == 4 && (u = 16), le[h] = u == 4 ? 2 : u, u & 7 && (f = u), c = u;
    }
    for (let h = o, c = a, f = a; h < l; h++) {
      let u = le[h];
      if (u == 128)
        h < l - 1 && c == le[h + 1] && c & 24 ? u = le[h] = c : le[h] = 256;
      else if (u == 64) {
        let d = h + 1;
        for (; d < l && le[d] == 64; )
          d++;
        let p = h && c == 8 || d < t && le[d] == 8 ? f == 1 ? 1 : 8 : 256;
        for (let m = h; m < d; m++)
          le[m] = p;
        h = d - 1;
      } else u == 8 && f == 1 && (le[h] = 1);
      c = u, u & 7 && (f = u);
    }
  }
}
function Y0(n, e, t, i, s) {
  let r = s == 1 ? 2 : 1;
  for (let o = 0, l = 0, a = 0; o <= i.length; o++) {
    let h = o ? i[o - 1].to : e, c = o < i.length ? i[o].from : t;
    for (let f = h, u, d, p; f < c; f++)
      if (d = oa[u = n.charCodeAt(f)])
        if (d < 0) {
          for (let m = l - 3; m >= 0; m -= 3)
            if ($t[m + 1] == -d) {
              let g = $t[m + 2], b = g & 2 ? s : g & 4 ? g & 1 ? r : s : 0;
              b && (le[f] = le[$t[m]] = b), l = m;
              break;
            }
        } else {
          if ($t.length == 189)
            break;
          $t[l++] = f, $t[l++] = u, $t[l++] = a;
        }
      else if ((p = le[f]) == 2 || p == 1) {
        let m = p == s;
        a = m ? 0 : 1;
        for (let g = l - 3; g >= 0; g -= 3) {
          let b = $t[g + 2];
          if (b & 2)
            break;
          if (m)
            $t[g + 2] |= 2;
          else {
            if (b & 4)
              break;
            $t[g + 2] |= 4;
          }
        }
      }
  }
}
function X0(n, e, t, i) {
  for (let s = 0, r = i; s <= t.length; s++) {
    let o = s ? t[s - 1].to : n, l = s < t.length ? t[s].from : e;
    for (let a = o; a < l; ) {
      let h = le[a];
      if (h == 256) {
        let c = a + 1;
        for (; ; )
          if (c == l) {
            if (s == t.length)
              break;
            c = t[s++].to, l = s < t.length ? t[s].from : e;
          } else if (le[c] == 256)
            c++;
          else
            break;
        let f = r == 1, u = (c < e ? le[c] : i) == 1, d = f == u ? f ? 1 : 2 : i;
        for (let p = c, m = s, g = m ? t[m - 1].to : n; p > a; )
          p == g && (p = t[--m].from, g = m ? t[m - 1].to : n), le[--p] = d;
        a = c;
      } else
        r = h, a++;
    }
  }
}
function la(n, e, t, i, s, r, o) {
  let l = i % 2 ? 2 : 1;
  if (i % 2 == s % 2)
    for (let a = e, h = 0; a < t; ) {
      let c = !0, f = !1;
      if (h == r.length || a < r[h].from) {
        let m = le[a];
        m != l && (c = !1, f = m == 16);
      }
      let u = !c && l == 1 ? [] : null, d = c ? i : i + 1, p = a;
      e: for (; ; )
        if (h < r.length && p == r[h].from) {
          if (f)
            break e;
          let m = r[h];
          if (!c)
            for (let g = m.to, b = h + 1; ; ) {
              if (g == t)
                break e;
              if (b < r.length && r[b].from == g)
                g = r[b++].to;
              else {
                if (le[g] == l)
                  break e;
                break;
              }
            }
          if (h++, u)
            u.push(m);
          else {
            m.from > a && o.push(new Ni(a, m.from, d));
            let g = m.direction == dn != !(d % 2);
            aa(n, g ? i + 1 : i, s, m.inner, m.from, m.to, o), a = m.to;
          }
          p = m.to;
        } else {
          if (p == t || (c ? le[p] != l : le[p] == l))
            break;
          p++;
        }
      u ? la(n, a, p, i + 1, s, u, o) : a < p && o.push(new Ni(a, p, d)), a = p;
    }
  else
    for (let a = t, h = r.length; a > e; ) {
      let c = !0, f = !1;
      if (!h || a > r[h - 1].to) {
        let m = le[a - 1];
        m != l && (c = !1, f = m == 16);
      }
      let u = !c && l == 1 ? [] : null, d = c ? i : i + 1, p = a;
      e: for (; ; )
        if (h && p == r[h - 1].to) {
          if (f)
            break e;
          let m = r[--h];
          if (!c)
            for (let g = m.from, b = h; ; ) {
              if (g == e)
                break e;
              if (b && r[b - 1].to == g)
                g = r[--b].from;
              else {
                if (le[g - 1] == l)
                  break e;
                break;
              }
            }
          if (u)
            u.push(m);
          else {
            m.to < a && o.push(new Ni(m.to, a, d));
            let g = m.direction == dn != !(d % 2);
            aa(n, g ? i + 1 : i, s, m.inner, m.from, m.to, o), a = m.from;
          }
          p = m.from;
        } else {
          if (p == e || (c ? le[p - 1] != l : le[p - 1] == l))
            break;
          p--;
        }
      u ? la(n, p, a, i + 1, s, u, o) : p < a && o.push(new Ni(p, a, d)), a = p;
    }
}
function aa(n, e, t, i, s, r, o) {
  let l = e % 2 ? 2 : 1;
  G0(n, s, r, i, l), Y0(n, s, r, i, l), X0(s, r, i, l), la(n, s, r, e, t, i, o);
}
function J0(n, e, t) {
  if (!n)
    return [new Ni(0, 0, e == qa ? 1 : 0)];
  if (e == dn && !t.length && !K0.test(n))
    return bd(n.length);
  if (t.length)
    for (; n.length > le.length; )
      le[le.length] = 256;
  let i = [], s = e == dn ? 0 : 1;
  return aa(n, s, s, t, 0, n.length, i), i;
}
function bd(n) {
  return [new Ni(0, n, 0)];
}
let vd = "";
function Q0(n, e, t, i, s) {
  var r;
  let o = i.head - n.from, l = Ni.find(e, o, (r = i.bidiLevel) !== null && r !== void 0 ? r : -1, i.assoc), a = e[l], h = a.side(s, t);
  if (o == h) {
    let u = l += s ? 1 : -1;
    if (u < 0 || u >= e.length)
      return null;
    a = e[l = u], o = a.side(!s, t), h = a.side(s, t);
  }
  let c = Be(n.text, o, a.forward(s, t));
  (c < a.from || c > a.to) && (c = h), vd = n.text.slice(Math.min(o, c), Math.max(o, c));
  let f = l == (s ? e.length - 1 : 0) ? null : e[l + (s ? 1 : -1)];
  return f && c == h && f.level + (s ? 0 : 1) < a.level ? S.cursor(f.side(!s, t) + n.from, f.forward(s, t) ? 1 : -1, f.level) : S.cursor(c + n.from, a.forward(s, t) ? -1 : 1, a.level);
}
function Z0(n, e, t) {
  for (let i = e; i < t; i++) {
    let s = gd(n.charCodeAt(i));
    if (s == 1)
      return dn;
    if (s == 2 || s == 4)
      return qa;
  }
  return dn;
}
const xd = /* @__PURE__ */ R.define(), wd = /* @__PURE__ */ R.define(), Sd = /* @__PURE__ */ R.define(), kd = /* @__PURE__ */ R.define(), ha = /* @__PURE__ */ R.define(), Cd = /* @__PURE__ */ R.define(), Ad = /* @__PURE__ */ R.define(), ja = /* @__PURE__ */ R.define(), Ka = /* @__PURE__ */ R.define(), Md = /* @__PURE__ */ R.define({
  combine: (n) => n.some((e) => e)
}), Td = /* @__PURE__ */ R.define({
  combine: (n) => n.some((e) => e)
}), Ed = /* @__PURE__ */ R.define();
class Dn {
  constructor(e, t = "nearest", i = "nearest", s = 5, r = 5, o = !1) {
    this.range = e, this.y = t, this.x = i, this.yMargin = s, this.xMargin = r, this.isSnapshot = o;
  }
  map(e) {
    return e.empty ? this : new Dn(this.range.map(e), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
  }
  clip(e) {
    return this.range.to <= e.doc.length ? this : new Dn(S.cursor(e.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
  }
}
const dr = /* @__PURE__ */ z.define({ map: (n, e) => n.map(e) }), Dd = /* @__PURE__ */ z.define();
function ht(n, e, t) {
  let i = n.facet(kd);
  i.length ? i[0](e) : window.onerror && window.onerror(String(e), t, void 0, void 0, e) || (t ? console.error(t + ":", e) : console.error(e));
}
const mi = /* @__PURE__ */ R.define({ combine: (n) => n.length ? n[0] : !0 });
let ey = 0;
const kn = /* @__PURE__ */ R.define({
  combine(n) {
    return n.filter((e, t) => {
      for (let i = 0; i < t; i++)
        if (n[i].plugin == e.plugin)
          return !1;
      return !0;
    });
  }
});
class Se {
  constructor(e, t, i, s, r) {
    this.id = e, this.create = t, this.domEventHandlers = i, this.domEventObservers = s, this.baseExtensions = r(this), this.extension = this.baseExtensions.concat(kn.of({ plugin: this, arg: void 0 }));
  }
  /**
  Create an extension for this plugin with the given argument.
  */
  of(e) {
    return this.baseExtensions.concat(kn.of({ plugin: this, arg: e }));
  }
  /**
  Define a plugin from a constructor function that creates the
  plugin's value, given an editor view.
  */
  static define(e, t) {
    const { eventHandlers: i, eventObservers: s, provide: r, decorations: o } = t || {};
    return new Se(ey++, e, i, s, (l) => {
      let a = [];
      return o && a.push(Ds.of((h) => {
        let c = h.plugin(l);
        return c ? o(c) : F.none;
      })), r && a.push(r(l)), a;
    });
  }
  /**
  Create a plugin for a class whose constructor takes a single
  editor view as argument.
  */
  static fromClass(e, t) {
    return Se.define((i, s) => new e(i, s), t);
  }
}
class cl {
  constructor(e) {
    this.spec = e, this.mustUpdate = null, this.value = null;
  }
  get plugin() {
    return this.spec && this.spec.plugin;
  }
  update(e) {
    if (this.value) {
      if (this.mustUpdate) {
        let t = this.mustUpdate;
        if (this.mustUpdate = null, this.value.update)
          try {
            this.value.update(t);
          } catch (i) {
            if (ht(t.state, i, "CodeMirror plugin crashed"), this.value.destroy)
              try {
                this.value.destroy();
              } catch {
              }
            this.deactivate();
          }
      }
    } else if (this.spec)
      try {
        this.value = this.spec.plugin.create(e, this.spec.arg);
      } catch (t) {
        ht(e.state, t, "CodeMirror plugin crashed"), this.deactivate();
      }
    return this;
  }
  destroy(e) {
    var t;
    if (!((t = this.value) === null || t === void 0) && t.destroy)
      try {
        this.value.destroy();
      } catch (i) {
        ht(e.state, i, "CodeMirror plugin crashed");
      }
  }
  deactivate() {
    this.spec = this.value = null;
  }
}
const Od = /* @__PURE__ */ R.define(), Ga = /* @__PURE__ */ R.define(), Ds = /* @__PURE__ */ R.define(), _d = /* @__PURE__ */ R.define(), Ya = /* @__PURE__ */ R.define(), Rd = /* @__PURE__ */ R.define();
function Sc(n, e) {
  let t = n.state.facet(Rd);
  if (!t.length)
    return t;
  let i = t.map((r) => r instanceof Function ? r(n) : r), s = [];
  return Y.spans(i, e.from, e.to, {
    point() {
    },
    span(r, o, l, a) {
      let h = r - e.from, c = o - e.from, f = s;
      for (let u = l.length - 1; u >= 0; u--, a--) {
        let d = l[u].spec.bidiIsolate, p;
        if (d == null && (d = Z0(e.text, h, c)), a > 0 && f.length && (p = f[f.length - 1]).to == h && p.direction == d)
          p.to = c, f = p.inner;
        else {
          let m = { from: h, to: c, direction: d, inner: [] };
          f.push(m), f = m.inner;
        }
      }
    }
  }), s;
}
const Ld = /* @__PURE__ */ R.define();
function Xa(n) {
  let e = 0, t = 0, i = 0, s = 0;
  for (let r of n.state.facet(Ld)) {
    let o = r(n);
    o && (o.left != null && (e = Math.max(e, o.left)), o.right != null && (t = Math.max(t, o.right)), o.top != null && (i = Math.max(i, o.top)), o.bottom != null && (s = Math.max(s, o.bottom)));
  }
  return { left: e, right: t, top: i, bottom: s };
}
const cs = /* @__PURE__ */ R.define();
class Ot {
  constructor(e, t, i, s) {
    this.fromA = e, this.toA = t, this.fromB = i, this.toB = s;
  }
  join(e) {
    return new Ot(Math.min(this.fromA, e.fromA), Math.max(this.toA, e.toA), Math.min(this.fromB, e.fromB), Math.max(this.toB, e.toB));
  }
  addToSet(e) {
    let t = e.length, i = this;
    for (; t > 0; t--) {
      let s = e[t - 1];
      if (!(s.fromA > i.toA)) {
        if (s.toA < i.fromA)
          break;
        i = i.join(s), e.splice(t - 1, 1);
      }
    }
    return e.splice(t, 0, i), e;
  }
  static extendWithRanges(e, t) {
    if (t.length == 0)
      return e;
    let i = [];
    for (let s = 0, r = 0, o = 0, l = 0; ; s++) {
      let a = s == e.length ? null : e[s], h = o - l, c = a ? a.fromB : 1e9;
      for (; r < t.length && t[r] < c; ) {
        let f = t[r], u = t[r + 1], d = Math.max(l, f), p = Math.min(c, u);
        if (d <= p && new Ot(d + h, p + h, d, p).addToSet(i), u > c)
          break;
        r += 2;
      }
      if (!a)
        return i;
      new Ot(a.fromA, a.toA, a.fromB, a.toB).addToSet(i), o = a.toA, l = a.toB;
    }
  }
}
class ro {
  constructor(e, t, i) {
    this.view = e, this.state = t, this.transactions = i, this.flags = 0, this.startState = e.state, this.changes = Ae.empty(this.startState.doc.length);
    for (let r of i)
      this.changes = this.changes.compose(r.changes);
    let s = [];
    this.changes.iterChangedRanges((r, o, l, a) => s.push(new Ot(r, o, l, a))), this.changedRanges = s;
  }
  /**
  @internal
  */
  static create(e, t, i) {
    return new ro(e, t, i);
  }
  /**
  Tells you whether the [viewport](https://codemirror.net/6/docs/ref/#view.EditorView.viewport) or
  [visible ranges](https://codemirror.net/6/docs/ref/#view.EditorView.visibleRanges) changed in this
  update.
  */
  get viewportChanged() {
    return (this.flags & 4) > 0;
  }
  /**
  Returns true when
  [`viewportChanged`](https://codemirror.net/6/docs/ref/#view.ViewUpdate.viewportChanged) is true
  and the viewport change is not just the result of mapping it in
  response to document changes.
  */
  get viewportMoved() {
    return (this.flags & 8) > 0;
  }
  /**
  Indicates whether the height of a block element in the editor
  changed in this update.
  */
  get heightChanged() {
    return (this.flags & 2) > 0;
  }
  /**
  Returns true when the document was modified or the size of the
  editor, or elements within the editor, changed.
  */
  get geometryChanged() {
    return this.docChanged || (this.flags & 18) > 0;
  }
  /**
  True when this update indicates a focus change.
  */
  get focusChanged() {
    return (this.flags & 1) > 0;
  }
  /**
  Whether the document changed in this update.
  */
  get docChanged() {
    return !this.changes.empty;
  }
  /**
  Whether the selection was explicitly set in this update.
  */
  get selectionSet() {
    return this.transactions.some((e) => e.selection);
  }
  /**
  @internal
  */
  get empty() {
    return this.flags == 0 && this.transactions.length == 0;
  }
}
class kc extends ae {
  get length() {
    return this.view.state.doc.length;
  }
  constructor(e) {
    super(), this.view = e, this.decorations = [], this.dynamicDecorationMap = [!1], this.domChanged = null, this.hasComposition = null, this.markedForComposition = /* @__PURE__ */ new Set(), this.editContextFormatting = F.none, this.lastCompositionAfterCursor = !1, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.setDOM(e.contentDOM), this.children = [new we()], this.children[0].setParent(this), this.updateDeco(), this.updateInner([new Ot(0, 0, 0, e.state.doc.length)], 0, null);
  }
  // Update the document view to a given state.
  update(e) {
    var t;
    let i = e.changedRanges;
    this.minWidth > 0 && i.length && (i.every(({ fromA: h, toA: c }) => c < this.minWidthFrom || h > this.minWidthTo) ? (this.minWidthFrom = e.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = e.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(e);
    let s = -1;
    this.view.inputState.composing >= 0 && !this.view.observer.editContext && (!((t = this.domChanged) === null || t === void 0) && t.newSel ? s = this.domChanged.newSel.head : !ly(e.changes, this.hasComposition) && !e.selectionSet && (s = e.state.selection.main.head));
    let r = s > -1 ? iy(this.view, e.changes, s) : null;
    if (this.domChanged = null, this.hasComposition) {
      this.markedForComposition.clear();
      let { from: h, to: c } = this.hasComposition;
      i = new Ot(h, c, e.changes.mapPos(h, -1), e.changes.mapPos(c, 1)).addToSet(i.slice());
    }
    this.hasComposition = r ? { from: r.range.fromB, to: r.range.toB } : null, (O.ie || O.chrome) && !r && e && e.state.doc.lines != e.startState.doc.lines && (this.forceSelection = !0);
    let o = this.decorations, l = this.updateDeco(), a = ry(o, l, e.changes);
    return i = Ot.extendWithRanges(i, a), !(this.flags & 7) && i.length == 0 ? !1 : (this.updateInner(i, e.startState.doc.length, r), e.transactions.length && (this.lastUpdate = Date.now()), !0);
  }
  // Used by update and the constructor do perform the actual DOM
  // update
  updateInner(e, t, i) {
    this.view.viewState.mustMeasureContent = !0, this.updateChildren(e, t, i);
    let { observer: s } = this.view;
    s.ignore(() => {
      this.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
      let o = O.chrome || O.ios ? { node: s.selectionRange.focusNode, written: !1 } : void 0;
      this.sync(this.view, o), this.flags &= -8, o && (o.written || s.selectionRange.focusNode != o.node) && (this.forceSelection = !0), this.dom.style.height = "";
    }), this.markedForComposition.forEach(
      (o) => o.flags &= -9
      /* ViewFlag.Composition */
    );
    let r = [];
    if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
      for (let o of this.children)
        o instanceof yi && o.widget instanceof ra && r.push(o.dom);
    s.updateGaps(r);
  }
  updateChildren(e, t, i) {
    let s = i ? i.range.addToSet(e.slice()) : e, r = this.childCursor(t);
    for (let o = s.length - 1; ; o--) {
      let l = o >= 0 ? s[o] : null;
      if (!l)
        break;
      let { fromA: a, toA: h, fromB: c, toB: f } = l, u, d, p, m;
      if (i && i.range.fromB < f && i.range.toB > c) {
        let w = vs.build(this.view.state.doc, c, i.range.fromB, this.decorations, this.dynamicDecorationMap), x = vs.build(this.view.state.doc, i.range.toB, f, this.decorations, this.dynamicDecorationMap);
        d = w.breakAtStart, p = w.openStart, m = x.openEnd;
        let C = this.compositionView(i);
        x.breakAtStart ? C.breakAfter = 1 : x.content.length && C.merge(C.length, C.length, x.content[0], !1, x.openStart, 0) && (C.breakAfter = x.content[0].breakAfter, x.content.shift()), w.content.length && C.merge(0, 0, w.content[w.content.length - 1], !0, 0, w.openEnd) && w.content.pop(), u = w.content.concat(C).concat(x.content);
      } else
        ({ content: u, breakAtStart: d, openStart: p, openEnd: m } = vs.build(this.view.state.doc, c, f, this.decorations, this.dynamicDecorationMap));
      let { i: g, off: b } = r.findPos(h, 1), { i: v, off: k } = r.findPos(a, -1);
      ld(this, v, k, g, b, u, d, p, m);
    }
    i && this.fixCompositionDOM(i);
  }
  updateEditContextFormatting(e) {
    this.editContextFormatting = this.editContextFormatting.map(e.changes);
    for (let t of e.transactions)
      for (let i of t.effects)
        i.is(Dd) && (this.editContextFormatting = i.value);
  }
  compositionView(e) {
    let t = new Wt(e.text.nodeValue);
    t.flags |= 8;
    for (let { deco: s } of e.marks)
      t = new vi(s, [t], t.length);
    let i = new we();
    return i.append(t, 0), i;
  }
  fixCompositionDOM(e) {
    let t = (r, o) => {
      o.flags |= 8 | (o.children.some(
        (a) => a.flags & 7
        /* ViewFlag.Dirty */
      ) ? 1 : 0), this.markedForComposition.add(o);
      let l = ae.get(r);
      l && l != o && (l.dom = null), o.setDOM(r);
    }, i = this.childPos(e.range.fromB, 1), s = this.children[i.i];
    t(e.line, s);
    for (let r = e.marks.length - 1; r >= -1; r--)
      i = s.childPos(i.off, 1), s = s.children[i.i], t(r >= 0 ? e.marks[r].node : e.text, s);
  }
  // Sync the DOM selection to this.state.selection
  updateSelection(e = !1, t = !1) {
    (e || !this.view.observer.selectionRange.focusNode) && this.view.observer.readSelectionRange();
    let i = this.view.root.activeElement, s = i == this.dom, r = !s && !(this.view.state.facet(mi) || this.dom.tabIndex > -1) && Nr(this.dom, this.view.observer.selectionRange) && !(i && this.dom.contains(i));
    if (!(s || t || r))
      return;
    let o = this.forceSelection;
    this.forceSelection = !1;
    let l = this.view.state.selection.main, a = this.moveToLine(this.domAtPos(l.anchor)), h = l.empty ? a : this.moveToLine(this.domAtPos(l.head));
    if (O.gecko && l.empty && !this.hasComposition && ty(a)) {
      let f = document.createTextNode("");
      this.view.observer.ignore(() => a.node.insertBefore(f, a.node.childNodes[a.offset] || null)), a = h = new ze(f, 0), o = !0;
    }
    let c = this.view.observer.selectionRange;
    (o || !c.focusNode || (!bs(a.node, a.offset, c.anchorNode, c.anchorOffset) || !bs(h.node, h.offset, c.focusNode, c.focusOffset)) && !this.suppressWidgetCursorChange(c, l)) && (this.view.observer.ignore(() => {
      O.android && O.chrome && this.dom.contains(c.focusNode) && oy(c.focusNode, this.dom) && (this.dom.blur(), this.dom.focus({ preventScroll: !0 }));
      let f = Ts(this.view.root);
      if (f) if (l.empty) {
        if (O.gecko) {
          let u = ny(a.node, a.offset);
          if (u && u != 3) {
            let d = (u == 1 ? sd : rd)(a.node, a.offset);
            d && (a = new ze(d.node, d.offset));
          }
        }
        f.collapse(a.node, a.offset), l.bidiLevel != null && f.caretBidiLevel !== void 0 && (f.caretBidiLevel = l.bidiLevel);
      } else if (f.extend) {
        f.collapse(a.node, a.offset);
        try {
          f.extend(h.node, h.offset);
        } catch {
        }
      } else {
        let u = document.createRange();
        l.anchor > l.head && ([a, h] = [h, a]), u.setEnd(h.node, h.offset), u.setStart(a.node, a.offset), f.removeAllRanges(), f.addRange(u);
      }
      r && this.view.root.activeElement == this.dom && (this.dom.blur(), i && i.focus());
    }), this.view.observer.setSelectionRange(a, h)), this.impreciseAnchor = a.precise ? null : new ze(c.anchorNode, c.anchorOffset), this.impreciseHead = h.precise ? null : new ze(c.focusNode, c.focusOffset);
  }
  // If a zero-length widget is inserted next to the cursor during
  // composition, avoid moving it across it and disrupting the
  // composition.
  suppressWidgetCursorChange(e, t) {
    return this.hasComposition && t.empty && bs(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset) && this.posFromDOM(e.focusNode, e.focusOffset) == t.head;
  }
  enforceCursorAssoc() {
    if (this.hasComposition)
      return;
    let { view: e } = this, t = e.state.selection.main, i = Ts(e.root), { anchorNode: s, anchorOffset: r } = e.observer.selectionRange;
    if (!i || !t.empty || !t.assoc || !i.modify)
      return;
    let o = we.find(this, t.head);
    if (!o)
      return;
    let l = o.posAtStart;
    if (t.head == l || t.head == l + o.length)
      return;
    let a = this.coordsAt(t.head, -1), h = this.coordsAt(t.head, 1);
    if (!a || !h || a.bottom > h.top)
      return;
    let c = this.domAtPos(t.head + t.assoc);
    i.collapse(c.node, c.offset), i.modify("move", t.assoc < 0 ? "forward" : "backward", "lineboundary"), e.observer.readSelectionRange();
    let f = e.observer.selectionRange;
    e.docView.posFromDOM(f.anchorNode, f.anchorOffset) != t.from && i.collapse(s, r);
  }
  // If a position is in/near a block widget, move it to a nearby text
  // line, since we don't want the cursor inside a block widget.
  moveToLine(e) {
    let t = this.dom, i;
    if (e.node != t)
      return e;
    for (let s = e.offset; !i && s < t.childNodes.length; s++) {
      let r = ae.get(t.childNodes[s]);
      r instanceof we && (i = r.domAtPos(0));
    }
    for (let s = e.offset - 1; !i && s >= 0; s--) {
      let r = ae.get(t.childNodes[s]);
      r instanceof we && (i = r.domAtPos(r.length));
    }
    return i ? new ze(i.node, i.offset, !0) : e;
  }
  nearest(e) {
    for (let t = e; t; ) {
      let i = ae.get(t);
      if (i && i.rootView == this)
        return i;
      t = t.parentNode;
    }
    return null;
  }
  posFromDOM(e, t) {
    let i = this.nearest(e);
    if (!i)
      throw new RangeError("Trying to find position for a DOM position outside of the document");
    return i.localPosFromDOM(e, t) + i.posAtStart;
  }
  domAtPos(e) {
    let { i: t, off: i } = this.childCursor().findPos(e, -1);
    for (; t < this.children.length - 1; ) {
      let s = this.children[t];
      if (i < s.length || s instanceof we)
        break;
      t++, i = 0;
    }
    return this.children[t].domAtPos(i);
  }
  coordsAt(e, t) {
    let i = null, s = 0;
    for (let r = this.length, o = this.children.length - 1; o >= 0; o--) {
      let l = this.children[o], a = r - l.breakAfter, h = a - l.length;
      if (a < e)
        break;
      if (h <= e && (h < e || l.covers(-1)) && (a > e || l.covers(1)) && (!i || l instanceof we && !(i instanceof we && t >= 0)))
        i = l, s = h;
      else if (i && h == e && a == e && l instanceof yi && Math.abs(t) < 2) {
        if (l.deco.startSide < 0)
          break;
        o && (i = null);
      }
      r = h;
    }
    return i ? i.coordsAt(e - s, t) : null;
  }
  coordsForChar(e) {
    let { i: t, off: i } = this.childPos(e, 1), s = this.children[t];
    if (!(s instanceof we))
      return null;
    for (; s.children.length; ) {
      let { i: l, off: a } = s.childPos(i, 1);
      for (; ; l++) {
        if (l == s.children.length)
          return null;
        if ((s = s.children[l]).length)
          break;
      }
      i = a;
    }
    if (!(s instanceof Wt))
      return null;
    let r = Be(s.text, i);
    if (r == i)
      return null;
    let o = un(s.dom, i, r).getClientRects();
    for (let l = 0; l < o.length; l++) {
      let a = o[l];
      if (l == o.length - 1 || a.top < a.bottom && a.left < a.right)
        return a;
    }
    return null;
  }
  measureVisibleLineHeights(e) {
    let t = [], { from: i, to: s } = e, r = this.view.contentDOM.clientWidth, o = r > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1, l = -1, a = this.view.textDirection == fe.LTR;
    for (let h = 0, c = 0; c < this.children.length; c++) {
      let f = this.children[c], u = h + f.length;
      if (u > s)
        break;
      if (h >= i) {
        let d = f.dom.getBoundingClientRect();
        if (t.push(d.height), o) {
          let p = f.dom.lastChild, m = p ? Es(p) : [];
          if (m.length) {
            let g = m[m.length - 1], b = a ? g.right - d.left : d.right - g.left;
            b > l && (l = b, this.minWidth = r, this.minWidthFrom = h, this.minWidthTo = u);
          }
        }
      }
      h = u + f.breakAfter;
    }
    return t;
  }
  textDirectionAt(e) {
    let { i: t } = this.childPos(e, 1);
    return getComputedStyle(this.children[t].dom).direction == "rtl" ? fe.RTL : fe.LTR;
  }
  measureTextSize() {
    for (let r of this.children)
      if (r instanceof we) {
        let o = r.measureTextSize();
        if (o)
          return o;
      }
    let e = document.createElement("div"), t, i, s;
    return e.className = "cm-line", e.style.width = "99999px", e.style.position = "absolute", e.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore(() => {
      this.dom.appendChild(e);
      let r = Es(e.firstChild)[0];
      t = e.getBoundingClientRect().height, i = r ? r.width / 27 : 7, s = r ? r.height : t, e.remove();
    }), { lineHeight: t, charWidth: i, textHeight: s };
  }
  childCursor(e = this.length) {
    let t = this.children.length;
    return t && (e -= this.children[--t].length), new od(this.children, e, t);
  }
  computeBlockGapDeco() {
    let e = [], t = this.view.viewState;
    for (let i = 0, s = 0; ; s++) {
      let r = s == t.viewports.length ? null : t.viewports[s], o = r ? r.from - 1 : this.length;
      if (o > i) {
        let l = (t.lineBlockAt(o).bottom - t.lineBlockAt(i).top) / this.view.scaleY;
        e.push(F.replace({
          widget: new ra(l),
          block: !0,
          inclusive: !0,
          isBlockGap: !0
        }).range(i, o));
      }
      if (!r)
        break;
      i = r.to + 1;
    }
    return F.set(e);
  }
  updateDeco() {
    let e = 1, t = this.view.state.facet(Ds).map((r) => (this.dynamicDecorationMap[e++] = typeof r == "function") ? r(this.view) : r), i = !1, s = this.view.state.facet(_d).map((r, o) => {
      let l = typeof r == "function";
      return l && (i = !0), l ? r(this.view) : r;
    });
    for (s.length && (this.dynamicDecorationMap[e++] = i, t.push(Y.join(s))), this.decorations = [
      this.editContextFormatting,
      ...t,
      this.computeBlockGapDeco(),
      this.view.viewState.lineGapDeco
    ]; e < this.decorations.length; )
      this.dynamicDecorationMap[e++] = !1;
    return this.decorations;
  }
  scrollIntoView(e) {
    if (e.isSnapshot) {
      let h = this.view.viewState.lineBlockAt(e.range.head);
      this.view.scrollDOM.scrollTop = h.top - e.yMargin, this.view.scrollDOM.scrollLeft = e.xMargin;
      return;
    }
    for (let h of this.view.state.facet(Ed))
      try {
        if (h(this.view, e.range, e))
          return !0;
      } catch (c) {
        ht(this.view.state, c, "scroll handler");
      }
    let { range: t } = e, i = this.coordsAt(t.head, t.empty ? t.assoc : t.head > t.anchor ? -1 : 1), s;
    if (!i)
      return;
    !t.empty && (s = this.coordsAt(t.anchor, t.anchor > t.head ? -1 : 1)) && (i = {
      left: Math.min(i.left, s.left),
      top: Math.min(i.top, s.top),
      right: Math.max(i.right, s.right),
      bottom: Math.max(i.bottom, s.bottom)
    });
    let r = Xa(this.view), o = {
      left: i.left - r.left,
      top: i.top - r.top,
      right: i.right + r.right,
      bottom: i.bottom + r.bottom
    }, { offsetWidth: l, offsetHeight: a } = this.view.scrollDOM;
    L0(this.view.scrollDOM, o, t.head < t.anchor ? -1 : 1, e.x, e.y, Math.max(Math.min(e.xMargin, l), -l), Math.max(Math.min(e.yMargin, a), -a), this.view.textDirection == fe.LTR);
  }
}
function ty(n) {
  return n.node.nodeType == 1 && n.node.firstChild && (n.offset == 0 || n.node.childNodes[n.offset - 1].contentEditable == "false") && (n.offset == n.node.childNodes.length || n.node.childNodes[n.offset].contentEditable == "false");
}
function Pd(n, e) {
  let t = n.observer.selectionRange;
  if (!t.focusNode)
    return null;
  let i = sd(t.focusNode, t.focusOffset), s = rd(t.focusNode, t.focusOffset), r = i || s;
  if (s && i && s.node != i.node) {
    let l = ae.get(s.node);
    if (!l || l instanceof Wt && l.text != s.node.nodeValue)
      r = s;
    else if (n.docView.lastCompositionAfterCursor) {
      let a = ae.get(i.node);
      !a || a instanceof Wt && a.text != i.node.nodeValue || (r = s);
    }
  }
  if (n.docView.lastCompositionAfterCursor = r != i, !r)
    return null;
  let o = e - r.offset;
  return { from: o, to: o + r.node.nodeValue.length, node: r.node };
}
function iy(n, e, t) {
  let i = Pd(n, t);
  if (!i)
    return null;
  let { node: s, from: r, to: o } = i, l = s.nodeValue;
  if (/[\n\r]/.test(l) || n.state.doc.sliceString(i.from, i.to) != l)
    return null;
  let a = e.invertedDesc, h = new Ot(a.mapPos(r), a.mapPos(o), r, o), c = [];
  for (let f = s.parentNode; ; f = f.parentNode) {
    let u = ae.get(f);
    if (u instanceof vi)
      c.push({ node: f, deco: u.mark });
    else {
      if (u instanceof we || f.nodeName == "DIV" && f.parentNode == n.contentDOM)
        return { range: h, text: s, marks: c, line: f };
      if (f != n.contentDOM)
        c.push({ node: f, deco: new $s({
          inclusive: !0,
          attributes: $0(f),
          tagName: f.tagName.toLowerCase()
        }) });
      else
        return null;
    }
  }
}
function ny(n, e) {
  return n.nodeType != 1 ? 0 : (e && n.childNodes[e - 1].contentEditable == "false" ? 1 : 0) | (e < n.childNodes.length && n.childNodes[e].contentEditable == "false" ? 2 : 0);
}
let sy = class {
  constructor() {
    this.changes = [];
  }
  compareRange(e, t) {
    Fr(e, t, this.changes);
  }
  comparePoint(e, t) {
    Fr(e, t, this.changes);
  }
  boundChange(e) {
    Fr(e, e, this.changes);
  }
};
function ry(n, e, t) {
  let i = new sy();
  return Y.compare(n, e, t, i), i.changes;
}
function oy(n, e) {
  for (let t = n; t && t != e; t = t.assignedSlot || t.parentNode)
    if (t.nodeType == 1 && t.contentEditable == "false")
      return !0;
  return !1;
}
function ly(n, e) {
  let t = !1;
  return e && n.iterChangedRanges((i, s) => {
    i < e.to && s > e.from && (t = !0);
  }), t;
}
function ay(n, e, t = 1) {
  let i = n.charCategorizer(e), s = n.doc.lineAt(e), r = e - s.from;
  if (s.length == 0)
    return S.cursor(e);
  r == 0 ? t = 1 : r == s.length && (t = -1);
  let o = r, l = r;
  t < 0 ? o = Be(s.text, r, !1) : l = Be(s.text, r);
  let a = i(s.text.slice(o, l));
  for (; o > 0; ) {
    let h = Be(s.text, o, !1);
    if (i(s.text.slice(h, o)) != a)
      break;
    o = h;
  }
  for (; l < s.length; ) {
    let h = Be(s.text, l);
    if (i(s.text.slice(l, h)) != a)
      break;
    l = h;
  }
  return S.range(o + s.from, l + s.from);
}
function hy(n, e) {
  return e.left > n ? e.left - n : Math.max(0, n - e.right);
}
function cy(n, e) {
  return e.top > n ? e.top - n : Math.max(0, n - e.bottom);
}
function fl(n, e) {
  return n.top < e.bottom - 1 && n.bottom > e.top + 1;
}
function Cc(n, e) {
  return e < n.top ? { top: e, left: n.left, right: n.right, bottom: n.bottom } : n;
}
function Ac(n, e) {
  return e > n.bottom ? { top: n.top, left: n.left, right: n.right, bottom: e } : n;
}
function ca(n, e, t) {
  let i, s, r, o, l = !1, a, h, c, f;
  for (let p = n.firstChild; p; p = p.nextSibling) {
    let m = Es(p);
    for (let g = 0; g < m.length; g++) {
      let b = m[g];
      s && fl(s, b) && (b = Cc(Ac(b, s.bottom), s.top));
      let v = hy(e, b), k = cy(t, b);
      if (v == 0 && k == 0)
        return p.nodeType == 3 ? Mc(p, e, t) : ca(p, e, t);
      (!i || o > k || o == k && r > v) && (i = p, s = b, r = v, o = k, l = v ? e < b.left ? g > 0 : g < m.length - 1 : !0), v == 0 ? t > b.bottom && (!c || c.bottom < b.bottom) ? (a = p, c = b) : t < b.top && (!f || f.top > b.top) && (h = p, f = b) : c && fl(c, b) ? c = Ac(c, b.bottom) : f && fl(f, b) && (f = Cc(f, b.top));
    }
  }
  if (c && c.bottom >= t ? (i = a, s = c) : f && f.top <= t && (i = h, s = f), !i)
    return { node: n, offset: 0 };
  let u = Math.max(s.left, Math.min(s.right, e));
  if (i.nodeType == 3)
    return Mc(i, u, t);
  if (l && i.contentEditable != "false")
    return ca(i, u, t);
  let d = Array.prototype.indexOf.call(n.childNodes, i) + (e >= (s.left + s.right) / 2 ? 1 : 0);
  return { node: n, offset: d };
}
function Mc(n, e, t) {
  let i = n.nodeValue.length, s = -1, r = 1e9, o = 0;
  for (let l = 0; l < i; l++) {
    let a = un(n, l, l + 1).getClientRects();
    for (let h = 0; h < a.length; h++) {
      let c = a[h];
      if (c.top == c.bottom)
        continue;
      o || (o = e - c.left);
      let f = (c.top > t ? c.top - t : t - c.bottom) - 1;
      if (c.left - 1 <= e && c.right + 1 >= e && f < r) {
        let u = e >= (c.left + c.right) / 2, d = u;
        if ((O.chrome || O.gecko) && un(n, l).getBoundingClientRect().left == c.right && (d = !u), f <= 0)
          return { node: n, offset: l + (d ? 1 : 0) };
        s = l + (d ? 1 : 0), r = f;
      }
    }
  }
  return { node: n, offset: s > -1 ? s : o > 0 ? n.nodeValue.length : 0 };
}
function Id(n, e, t, i = -1) {
  var s, r;
  let o = n.contentDOM.getBoundingClientRect(), l = o.top + n.viewState.paddingTop, a, { docHeight: h } = n.viewState, { x: c, y: f } = e, u = f - l;
  if (u < 0)
    return 0;
  if (u > h)
    return n.state.doc.length;
  for (let w = n.viewState.heightOracle.textHeight / 2, x = !1; a = n.elementAtHeight(u), a.type != Qe.Text; )
    for (; u = i > 0 ? a.bottom + w : a.top - w, !(u >= 0 && u <= h); ) {
      if (x)
        return t ? null : 0;
      x = !0, i = -i;
    }
  f = l + u;
  let d = a.from;
  if (d < n.viewport.from)
    return n.viewport.from == 0 ? 0 : t ? null : Tc(n, o, a, c, f);
  if (d > n.viewport.to)
    return n.viewport.to == n.state.doc.length ? n.state.doc.length : t ? null : Tc(n, o, a, c, f);
  let p = n.dom.ownerDocument, m = n.root.elementFromPoint ? n.root : p, g = m.elementFromPoint(c, f);
  g && !n.contentDOM.contains(g) && (g = null), g || (c = Math.max(o.left + 1, Math.min(o.right - 1, c)), g = m.elementFromPoint(c, f), g && !n.contentDOM.contains(g) && (g = null));
  let b, v = -1;
  if (g && ((s = n.docView.nearest(g)) === null || s === void 0 ? void 0 : s.isEditable) != !1) {
    if (p.caretPositionFromPoint) {
      let w = p.caretPositionFromPoint(c, f);
      w && ({ offsetNode: b, offset: v } = w);
    } else if (p.caretRangeFromPoint) {
      let w = p.caretRangeFromPoint(c, f);
      w && ({ startContainer: b, startOffset: v } = w, (!n.contentDOM.contains(b) || O.safari && fy(b, v, c) || O.chrome && uy(b, v, c)) && (b = void 0));
    }
    b && (v = Math.min(ni(b), v));
  }
  if (!b || !n.docView.dom.contains(b)) {
    let w = we.find(n.docView, d);
    if (!w)
      return u > a.top + a.height / 2 ? a.to : a.from;
    ({ node: b, offset: v } = ca(w.dom, c, f));
  }
  let k = n.docView.nearest(b);
  if (!k)
    return null;
  if (k.isWidget && ((r = k.dom) === null || r === void 0 ? void 0 : r.nodeType) == 1) {
    let w = k.dom.getBoundingClientRect();
    return e.y < w.top || e.y <= w.bottom && e.x <= (w.left + w.right) / 2 ? k.posAtStart : k.posAtEnd;
  } else
    return k.localPosFromDOM(b, v) + k.posAtStart;
}
function Tc(n, e, t, i, s) {
  let r = Math.round((i - e.left) * n.defaultCharacterWidth);
  if (n.lineWrapping && t.height > n.defaultLineHeight * 1.5) {
    let l = n.viewState.heightOracle.textHeight, a = Math.floor((s - t.top - (n.defaultLineHeight - l) * 0.5) / l);
    r += a * n.viewState.heightOracle.lineLength;
  }
  let o = n.state.sliceDoc(t.from, t.to);
  return t.from + Xl(o, r, n.state.tabSize);
}
function fy(n, e, t) {
  let i, s = n;
  if (n.nodeType != 3 || e != (i = n.nodeValue.length))
    return !1;
  for (; ; ) {
    let r = s.nextSibling;
    if (r) {
      if (r.nodeName == "BR")
        break;
      return !1;
    } else {
      let o = s.parentNode;
      if (!o || o.nodeName == "DIV")
        break;
      s = o;
    }
  }
  return un(n, i - 1, i).getBoundingClientRect().right > t;
}
function uy(n, e, t) {
  if (e != 0)
    return !1;
  for (let s = n; ; ) {
    let r = s.parentNode;
    if (!r || r.nodeType != 1 || r.firstChild != s)
      return !1;
    if (r.classList.contains("cm-line"))
      break;
    s = r;
  }
  let i = n.nodeType == 1 ? n.getBoundingClientRect() : un(n, 0, Math.max(n.nodeValue.length, 1)).getBoundingClientRect();
  return t - i.left > 5;
}
function fa(n, e, t) {
  let i = n.lineBlockAt(e);
  if (Array.isArray(i.type)) {
    let s;
    for (let r of i.type) {
      if (r.from > e)
        break;
      if (!(r.to < e)) {
        if (r.from < e && r.to > e)
          return r;
        (!s || r.type == Qe.Text && (s.type != r.type || (t < 0 ? r.from < e : r.to > e))) && (s = r);
      }
    }
    return s || i;
  }
  return i;
}
function dy(n, e, t, i) {
  let s = fa(n, e.head, e.assoc || -1), r = !i || s.type != Qe.Text || !(n.lineWrapping || s.widgetLineBreaks) ? null : n.coordsAtPos(e.assoc < 0 && e.head > s.from ? e.head - 1 : e.head);
  if (r) {
    let o = n.dom.getBoundingClientRect(), l = n.textDirectionAt(s.from), a = n.posAtCoords({
      x: t == (l == fe.LTR) ? o.right - 1 : o.left + 1,
      y: (r.top + r.bottom) / 2
    });
    if (a != null)
      return S.cursor(a, t ? -1 : 1);
  }
  return S.cursor(t ? s.to : s.from, t ? -1 : 1);
}
function Ec(n, e, t, i) {
  let s = n.state.doc.lineAt(e.head), r = n.bidiSpans(s), o = n.textDirectionAt(s.from);
  for (let l = e, a = null; ; ) {
    let h = Q0(s, r, o, l, t), c = vd;
    if (!h) {
      if (s.number == (t ? n.state.doc.lines : 1))
        return l;
      c = `
`, s = n.state.doc.line(s.number + (t ? 1 : -1)), r = n.bidiSpans(s), h = n.visualLineSide(s, !t);
    }
    if (a) {
      if (!a(c))
        return l;
    } else {
      if (!i)
        return h;
      a = i(c);
    }
    l = h;
  }
}
function py(n, e, t) {
  let i = n.state.charCategorizer(e), s = i(t);
  return (r) => {
    let o = i(r);
    return s == de.Space && (s = o), s == o;
  };
}
function my(n, e, t, i) {
  let s = e.head, r = t ? 1 : -1;
  if (s == (t ? n.state.doc.length : 0))
    return S.cursor(s, e.assoc);
  let o = e.goalColumn, l, a = n.contentDOM.getBoundingClientRect(), h = n.coordsAtPos(s, e.assoc || -1), c = n.documentTop;
  if (h)
    o == null && (o = h.left - a.left), l = r < 0 ? h.top : h.bottom;
  else {
    let d = n.viewState.lineBlockAt(s);
    o == null && (o = Math.min(a.right - a.left, n.defaultCharacterWidth * (s - d.from))), l = (r < 0 ? d.top : d.bottom) + c;
  }
  let f = a.left + o, u = i ?? n.viewState.heightOracle.textHeight >> 1;
  for (let d = 0; ; d += 10) {
    let p = l + (u + d) * r, m = Id(n, { x: f, y: p }, !1, r);
    if (p < a.top || p > a.bottom || (r < 0 ? m < s : m > s)) {
      let g = n.docView.coordsForChar(m), b = !g || p < g.top ? -1 : 1;
      return S.cursor(m, b, void 0, o);
    }
  }
}
function Hr(n, e, t) {
  for (; ; ) {
    let i = 0;
    for (let s of n)
      s.between(e - 1, e + 1, (r, o, l) => {
        if (e > r && e < o) {
          let a = i || t || (e - r < o - e ? -1 : 1);
          e = a < 0 ? r : o, i = a;
        }
      });
    if (!i)
      return e;
  }
}
function ul(n, e, t) {
  let i = Hr(n.state.facet(Ya).map((s) => s(n)), t.from, e.head > t.from ? -1 : 1);
  return i == t.from ? t : S.cursor(i, i < t.from ? 1 : -1);
}
const fs = "￿";
class gy {
  constructor(e, t) {
    this.points = e, this.text = "", this.lineSeparator = t.facet(J.lineSeparator);
  }
  append(e) {
    this.text += e;
  }
  lineBreak() {
    this.text += fs;
  }
  readRange(e, t) {
    if (!e)
      return this;
    let i = e.parentNode;
    for (let s = e; ; ) {
      this.findPointBefore(i, s);
      let r = this.text.length;
      this.readNode(s);
      let o = s.nextSibling;
      if (o == t)
        break;
      let l = ae.get(s), a = ae.get(o);
      (l && a ? l.breakAfter : (l ? l.breakAfter : no(s)) || no(o) && (s.nodeName != "BR" || s.cmIgnore) && this.text.length > r) && this.lineBreak(), s = o;
    }
    return this.findPointBefore(i, t), this;
  }
  readTextNode(e) {
    let t = e.nodeValue;
    for (let i of this.points)
      i.node == e && (i.pos = this.text.length + Math.min(i.offset, t.length));
    for (let i = 0, s = this.lineSeparator ? null : /\r\n?|\n/g; ; ) {
      let r = -1, o = 1, l;
      if (this.lineSeparator ? (r = t.indexOf(this.lineSeparator, i), o = this.lineSeparator.length) : (l = s.exec(t)) && (r = l.index, o = l[0].length), this.append(t.slice(i, r < 0 ? t.length : r)), r < 0)
        break;
      if (this.lineBreak(), o > 1)
        for (let a of this.points)
          a.node == e && a.pos > this.text.length && (a.pos -= o - 1);
      i = r + o;
    }
  }
  readNode(e) {
    if (e.cmIgnore)
      return;
    let t = ae.get(e), i = t && t.overrideDOMText;
    if (i != null) {
      this.findPointInside(e, i.length);
      for (let s = i.iter(); !s.next().done; )
        s.lineBreak ? this.lineBreak() : this.append(s.value);
    } else e.nodeType == 3 ? this.readTextNode(e) : e.nodeName == "BR" ? e.nextSibling && this.lineBreak() : e.nodeType == 1 && this.readRange(e.firstChild, null);
  }
  findPointBefore(e, t) {
    for (let i of this.points)
      i.node == e && e.childNodes[i.offset] == t && (i.pos = this.text.length);
  }
  findPointInside(e, t) {
    for (let i of this.points)
      (e.nodeType == 3 ? i.node == e : e.contains(i.node)) && (i.pos = this.text.length + (yy(e, i.node, i.offset) ? t : 0));
  }
}
function yy(n, e, t) {
  for (; ; ) {
    if (!e || t < ni(e))
      return !1;
    if (e == n)
      return !0;
    t = fn(e) + 1, e = e.parentNode;
  }
}
class Dc {
  constructor(e, t) {
    this.node = e, this.offset = t, this.pos = -1;
  }
}
class by {
  constructor(e, t, i, s) {
    this.typeOver = s, this.bounds = null, this.text = "", this.domChanged = t > -1;
    let { impreciseHead: r, impreciseAnchor: o } = e.docView;
    if (e.state.readOnly && t > -1)
      this.newSel = null;
    else if (t > -1 && (this.bounds = e.docView.domBoundsAround(t, i, 0))) {
      let l = r || o ? [] : wy(e), a = new gy(l, e.state);
      a.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = a.text, this.newSel = Sy(l, this.bounds.from);
    } else {
      let l = e.observer.selectionRange, a = r && r.node == l.focusNode && r.offset == l.focusOffset || !Zl(e.contentDOM, l.focusNode) ? e.state.selection.main.head : e.docView.posFromDOM(l.focusNode, l.focusOffset), h = o && o.node == l.anchorNode && o.offset == l.anchorOffset || !Zl(e.contentDOM, l.anchorNode) ? e.state.selection.main.anchor : e.docView.posFromDOM(l.anchorNode, l.anchorOffset), c = e.viewport;
      if ((O.ios || O.chrome) && e.state.selection.main.empty && a != h && (c.from > 0 || c.to < e.state.doc.length)) {
        let f = Math.min(a, h), u = Math.max(a, h), d = c.from - f, p = c.to - u;
        (d == 0 || d == 1 || f == 0) && (p == 0 || p == -1 || u == e.state.doc.length) && (a = 0, h = e.state.doc.length);
      }
      this.newSel = S.single(h, a);
    }
  }
}
function Bd(n, e) {
  let t, { newSel: i } = e, s = n.state.selection.main, r = n.inputState.lastKeyTime > Date.now() - 100 ? n.inputState.lastKeyCode : -1;
  if (e.bounds) {
    let { from: o, to: l } = e.bounds, a = s.from, h = null;
    (r === 8 || O.android && e.text.length < l - o) && (a = s.to, h = "end");
    let c = xy(n.state.doc.sliceString(o, l, fs), e.text, a - o, h);
    c && (O.chrome && r == 13 && c.toB == c.from + 2 && e.text.slice(c.from, c.toB) == fs + fs && c.toB--, t = {
      from: o + c.from,
      to: o + c.toA,
      insert: Z.of(e.text.slice(c.from, c.toB).split(fs))
    });
  } else i && (!n.hasFocus && n.state.facet(mi) || i.main.eq(s)) && (i = null);
  if (!t && !i)
    return !1;
  if (!t && e.typeOver && !s.empty && i && i.main.empty ? t = { from: s.from, to: s.to, insert: n.state.doc.slice(s.from, s.to) } : (O.mac || O.android) && t && t.from == t.to && t.from == s.head - 1 && /^\. ?$/.test(t.insert.toString()) && n.contentDOM.getAttribute("autocorrect") == "off" ? (i && t.insert.length == 2 && (i = S.single(i.main.anchor - 1, i.main.head - 1)), t = { from: t.from, to: t.to, insert: Z.of([t.insert.toString().replace(".", " ")]) }) : t && t.from >= s.from && t.to <= s.to && (t.from != s.from || t.to != s.to) && s.to - s.from - (t.to - t.from) <= 4 ? t = {
    from: s.from,
    to: s.to,
    insert: n.state.doc.slice(s.from, t.from).append(t.insert).append(n.state.doc.slice(t.to, s.to))
  } : O.chrome && t && t.from == t.to && t.from == s.head && t.insert.toString() == `
 ` && n.lineWrapping && (i && (i = S.single(i.main.anchor - 1, i.main.head - 1)), t = { from: s.from, to: s.to, insert: Z.of([" "]) }), t)
    return Ja(n, t, i, r);
  if (i && !i.main.eq(s)) {
    let o = !1, l = "select";
    return n.inputState.lastSelectionTime > Date.now() - 50 && (n.inputState.lastSelectionOrigin == "select" && (o = !0), l = n.inputState.lastSelectionOrigin), n.dispatch({ selection: i, scrollIntoView: o, userEvent: l }), !0;
  } else
    return !1;
}
function Ja(n, e, t, i = -1) {
  if (O.ios && n.inputState.flushIOSKey(e))
    return !0;
  let s = n.state.selection.main;
  if (O.android && (e.to == s.to && // GBoard will sometimes remove a space it just inserted
  // after a completion when you press enter
  (e.from == s.from || e.from == s.from - 1 && n.state.sliceDoc(e.from, s.from) == " ") && e.insert.length == 1 && e.insert.lines == 2 && En(n.contentDOM, "Enter", 13) || (e.from == s.from - 1 && e.to == s.to && e.insert.length == 0 || i == 8 && e.insert.length < e.to - e.from && e.to > s.head) && En(n.contentDOM, "Backspace", 8) || e.from == s.from && e.to == s.to + 1 && e.insert.length == 0 && En(n.contentDOM, "Delete", 46)))
    return !0;
  let r = e.insert.toString();
  n.inputState.composing >= 0 && n.inputState.composing++;
  let o, l = () => o || (o = vy(n, e, t));
  return n.state.facet(Cd).some((a) => a(n, e.from, e.to, r, l)) || n.dispatch(l()), !0;
}
function vy(n, e, t) {
  let i, s = n.state, r = s.selection.main;
  if (e.from >= r.from && e.to <= r.to && e.to - e.from >= (r.to - r.from) / 3 && (!t || t.main.empty && t.main.from == e.from + e.insert.length) && n.inputState.composing < 0) {
    let l = r.from < e.from ? s.sliceDoc(r.from, e.from) : "", a = r.to > e.to ? s.sliceDoc(e.to, r.to) : "";
    i = s.replaceSelection(n.state.toText(l + e.insert.sliceString(0, void 0, n.state.lineBreak) + a));
  } else {
    let l = s.changes(e), a = t && t.main.to <= l.newLength ? t.main : void 0;
    if (s.selection.ranges.length > 1 && n.inputState.composing >= 0 && e.to <= r.to && e.to >= r.to - 10) {
      let h = n.state.sliceDoc(e.from, e.to), c, f = t && Pd(n, t.main.head);
      if (f) {
        let p = e.insert.length - (e.to - e.from);
        c = { from: f.from, to: f.to - p };
      } else
        c = n.state.doc.lineAt(r.head);
      let u = r.to - e.to, d = r.to - r.from;
      i = s.changeByRange((p) => {
        if (p.from == r.from && p.to == r.to)
          return { changes: l, range: a || p.map(l) };
        let m = p.to - u, g = m - h.length;
        if (p.to - p.from != d || n.state.sliceDoc(g, m) != h || // Unfortunately, there's no way to make multiple
        // changes in the same node work without aborting
        // composition, so cursors in the composition range are
        // ignored.
        p.to >= c.from && p.from <= c.to)
          return { range: p };
        let b = s.changes({ from: g, to: m, insert: e.insert }), v = p.to - r.to;
        return {
          changes: b,
          range: a ? S.range(Math.max(0, a.anchor + v), Math.max(0, a.head + v)) : p.map(b)
        };
      });
    } else
      i = {
        changes: l,
        selection: a && s.selection.replaceRange(a)
      };
  }
  let o = "input.type";
  return (n.composing || n.inputState.compositionPendingChange && n.inputState.compositionEndedAt > Date.now() - 50) && (n.inputState.compositionPendingChange = !1, o += ".compose", n.inputState.compositionFirstChange && (o += ".start", n.inputState.compositionFirstChange = !1)), s.update(i, { userEvent: o, scrollIntoView: !0 });
}
function xy(n, e, t, i) {
  let s = Math.min(n.length, e.length), r = 0;
  for (; r < s && n.charCodeAt(r) == e.charCodeAt(r); )
    r++;
  if (r == s && n.length == e.length)
    return null;
  let o = n.length, l = e.length;
  for (; o > 0 && l > 0 && n.charCodeAt(o - 1) == e.charCodeAt(l - 1); )
    o--, l--;
  if (i == "end") {
    let a = Math.max(0, r - Math.min(o, l));
    t -= o + a - r;
  }
  if (o < r && n.length < e.length) {
    let a = t <= r && t >= o ? r - t : 0;
    r -= a, l = r + (l - o), o = r;
  } else if (l < r) {
    let a = t <= r && t >= l ? r - t : 0;
    r -= a, o = r + (o - l), l = r;
  }
  return { from: r, toA: o, toB: l };
}
function wy(n) {
  let e = [];
  if (n.root.activeElement != n.contentDOM)
    return e;
  let { anchorNode: t, anchorOffset: i, focusNode: s, focusOffset: r } = n.observer.selectionRange;
  return t && (e.push(new Dc(t, i)), (s != t || r != i) && e.push(new Dc(s, r))), e;
}
function Sy(n, e) {
  if (n.length == 0)
    return null;
  let t = n[0].pos, i = n.length == 2 ? n[1].pos : t;
  return t > -1 && i > -1 ? S.single(t + e, i + e) : null;
}
class ky {
  setSelectionOrigin(e) {
    this.lastSelectionOrigin = e, this.lastSelectionTime = Date.now();
  }
  constructor(e) {
    this.view = e, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = /* @__PURE__ */ Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = e.hasFocus, O.safari && e.contentDOM.addEventListener("input", () => null), O.gecko && Hy(e.contentDOM.ownerDocument);
  }
  handleEvent(e) {
    !_y(this.view, e) || this.ignoreDuringComposition(e) || e.type == "keydown" && this.keydown(e) || (this.view.updateState != 0 ? Promise.resolve().then(() => this.runHandlers(e.type, e)) : this.runHandlers(e.type, e));
  }
  runHandlers(e, t) {
    let i = this.handlers[e];
    if (i) {
      for (let s of i.observers)
        s(this.view, t);
      for (let s of i.handlers) {
        if (t.defaultPrevented)
          break;
        if (s(this.view, t)) {
          t.preventDefault();
          break;
        }
      }
    }
  }
  ensureHandlers(e) {
    let t = Cy(e), i = this.handlers, s = this.view.contentDOM;
    for (let r in t)
      if (r != "scroll") {
        let o = !t[r].handlers.length, l = i[r];
        l && o != !l.handlers.length && (s.removeEventListener(r, this.handleEvent), l = null), l || s.addEventListener(r, this.handleEvent, { passive: o });
      }
    for (let r in i)
      r != "scroll" && !t[r] && s.removeEventListener(r, this.handleEvent);
    this.handlers = t;
  }
  keydown(e) {
    if (this.lastKeyCode = e.keyCode, this.lastKeyTime = Date.now(), e.keyCode == 9 && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode))
      return !0;
    if (this.tabFocusMode > 0 && e.keyCode != 27 && Fd.indexOf(e.keyCode) < 0 && (this.tabFocusMode = -1), O.android && O.chrome && !e.synthetic && (e.keyCode == 13 || e.keyCode == 8))
      return this.view.observer.delayAndroidKey(e.key, e.keyCode), !0;
    let t;
    return O.ios && !e.synthetic && !e.altKey && !e.metaKey && ((t = Nd.find((i) => i.keyCode == e.keyCode)) && !e.ctrlKey || Ay.indexOf(e.key) > -1 && e.ctrlKey && !e.shiftKey) ? (this.pendingIOSKey = t || e, setTimeout(() => this.flushIOSKey(), 250), !0) : (e.keyCode != 229 && this.view.observer.forceFlush(), !1);
  }
  flushIOSKey(e) {
    let t = this.pendingIOSKey;
    return !t || t.key == "Enter" && e && e.from < e.to && /^\S+$/.test(e.insert.toString()) ? !1 : (this.pendingIOSKey = void 0, En(this.view.contentDOM, t.key, t.keyCode, t instanceof KeyboardEvent ? t : void 0));
  }
  ignoreDuringComposition(e) {
    return /^key/.test(e.type) ? this.composing > 0 ? !0 : O.safari && !O.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100 ? (this.compositionPendingKey = !1, !0) : !1 : !1;
  }
  startMouseSelection(e) {
    this.mouseSelection && this.mouseSelection.destroy(), this.mouseSelection = e;
  }
  update(e) {
    this.view.observer.update(e), this.mouseSelection && this.mouseSelection.update(e), this.draggedContent && e.docChanged && (this.draggedContent = this.draggedContent.map(e.changes)), e.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0);
  }
  destroy() {
    this.mouseSelection && this.mouseSelection.destroy();
  }
}
function Oc(n, e) {
  return (t, i) => {
    try {
      return e.call(n, i, t);
    } catch (s) {
      ht(t.state, s);
    }
  };
}
function Cy(n) {
  let e = /* @__PURE__ */ Object.create(null);
  function t(i) {
    return e[i] || (e[i] = { observers: [], handlers: [] });
  }
  for (let i of n) {
    let s = i.spec, r = s && s.plugin.domEventHandlers, o = s && s.plugin.domEventObservers;
    if (r)
      for (let l in r) {
        let a = r[l];
        a && t(l).handlers.push(Oc(i.value, a));
      }
    if (o)
      for (let l in o) {
        let a = o[l];
        a && t(l).observers.push(Oc(i.value, a));
      }
  }
  for (let i in Vt)
    t(i).handlers.push(Vt[i]);
  for (let i in Pt)
    t(i).observers.push(Pt[i]);
  return e;
}
const Nd = [
  { key: "Backspace", keyCode: 8, inputType: "deleteContentBackward" },
  { key: "Enter", keyCode: 13, inputType: "insertParagraph" },
  { key: "Enter", keyCode: 13, inputType: "insertLineBreak" },
  { key: "Delete", keyCode: 46, inputType: "deleteContentForward" }
], Ay = "dthko", Fd = [16, 17, 18, 20, 91, 92, 224, 225], pr = 6;
function mr(n) {
  return Math.max(0, n) * 0.7 + 8;
}
function My(n, e) {
  return Math.max(Math.abs(n.clientX - e.clientX), Math.abs(n.clientY - e.clientY));
}
class Ty {
  constructor(e, t, i, s) {
    this.view = e, this.startEvent = t, this.style = i, this.mustSelect = s, this.scrollSpeed = { x: 0, y: 0 }, this.scrolling = -1, this.lastEvent = t, this.scrollParents = P0(e.contentDOM), this.atoms = e.state.facet(Ya).map((o) => o(e));
    let r = e.contentDOM.ownerDocument;
    r.addEventListener("mousemove", this.move = this.move.bind(this)), r.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = t.shiftKey, this.multiple = e.state.facet(J.allowMultipleSelections) && Ey(e, t), this.dragging = Oy(e, t) && Vd(t) == 1 ? null : !1;
  }
  start(e) {
    this.dragging === !1 && this.select(e);
  }
  move(e) {
    if (e.buttons == 0)
      return this.destroy();
    if (this.dragging || this.dragging == null && My(this.startEvent, e) < 10)
      return;
    this.select(this.lastEvent = e);
    let t = 0, i = 0, s = 0, r = 0, o = this.view.win.innerWidth, l = this.view.win.innerHeight;
    this.scrollParents.x && ({ left: s, right: o } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({ top: r, bottom: l } = this.scrollParents.y.getBoundingClientRect());
    let a = Xa(this.view);
    e.clientX - a.left <= s + pr ? t = -mr(s - e.clientX) : e.clientX + a.right >= o - pr && (t = mr(e.clientX - o)), e.clientY - a.top <= r + pr ? i = -mr(r - e.clientY) : e.clientY + a.bottom >= l - pr && (i = mr(e.clientY - l)), this.setScrollSpeed(t, i);
  }
  up(e) {
    this.dragging == null && this.select(this.lastEvent), this.dragging || e.preventDefault(), this.destroy();
  }
  destroy() {
    this.setScrollSpeed(0, 0);
    let e = this.view.contentDOM.ownerDocument;
    e.removeEventListener("mousemove", this.move), e.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null;
  }
  setScrollSpeed(e, t) {
    this.scrollSpeed = { x: e, y: t }, e || t ? this.scrolling < 0 && (this.scrolling = setInterval(() => this.scroll(), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1);
  }
  scroll() {
    let { x: e, y: t } = this.scrollSpeed;
    e && this.scrollParents.x && (this.scrollParents.x.scrollLeft += e, e = 0), t && this.scrollParents.y && (this.scrollParents.y.scrollTop += t, t = 0), (e || t) && this.view.win.scrollBy(e, t), this.dragging === !1 && this.select(this.lastEvent);
  }
  skipAtoms(e) {
    let t = null;
    for (let i = 0; i < e.ranges.length; i++) {
      let s = e.ranges[i], r = null;
      if (s.empty) {
        let o = Hr(this.atoms, s.from, 0);
        o != s.from && (r = S.cursor(o, -1));
      } else {
        let o = Hr(this.atoms, s.from, -1), l = Hr(this.atoms, s.to, 1);
        (o != s.from || l != s.to) && (r = S.range(s.from == s.anchor ? o : l, s.from == s.head ? o : l));
      }
      r && (t || (t = e.ranges.slice()), t[i] = r);
    }
    return t ? S.create(t, e.mainIndex) : e;
  }
  select(e) {
    let { view: t } = this, i = this.skipAtoms(this.style.get(e, this.extend, this.multiple));
    (this.mustSelect || !i.eq(t.state.selection, this.dragging === !1)) && this.view.dispatch({
      selection: i,
      userEvent: "select.pointer"
    }), this.mustSelect = !1;
  }
  update(e) {
    e.transactions.some((t) => t.isUserEvent("input.type")) ? this.destroy() : this.style.update(e) && setTimeout(() => this.select(this.lastEvent), 20);
  }
}
function Ey(n, e) {
  let t = n.state.facet(xd);
  return t.length ? t[0](e) : O.mac ? e.metaKey : e.ctrlKey;
}
function Dy(n, e) {
  let t = n.state.facet(wd);
  return t.length ? t[0](e) : O.mac ? !e.altKey : !e.ctrlKey;
}
function Oy(n, e) {
  let { main: t } = n.state.selection;
  if (t.empty)
    return !1;
  let i = Ts(n.root);
  if (!i || i.rangeCount == 0)
    return !0;
  let s = i.getRangeAt(0).getClientRects();
  for (let r = 0; r < s.length; r++) {
    let o = s[r];
    if (o.left <= e.clientX && o.right >= e.clientX && o.top <= e.clientY && o.bottom >= e.clientY)
      return !0;
  }
  return !1;
}
function _y(n, e) {
  if (!e.bubbles)
    return !0;
  if (e.defaultPrevented)
    return !1;
  for (let t = e.target, i; t != n.contentDOM; t = t.parentNode)
    if (!t || t.nodeType == 11 || (i = ae.get(t)) && i.ignoreEvent(e))
      return !1;
  return !0;
}
const Vt = /* @__PURE__ */ Object.create(null), Pt = /* @__PURE__ */ Object.create(null), Hd = O.ie && O.ie_version < 15 || O.ios && O.webkit_version < 604;
function Ry(n) {
  let e = n.dom.parentNode;
  if (!e)
    return;
  let t = e.appendChild(document.createElement("textarea"));
  t.style.cssText = "position: fixed; left: -10000px; top: 10px", t.focus(), setTimeout(() => {
    n.focus(), t.remove(), Wd(n, t.value);
  }, 50);
}
function No(n, e, t) {
  for (let i of n.facet(e))
    t = i(t, n);
  return t;
}
function Wd(n, e) {
  e = No(n.state, ja, e);
  let { state: t } = n, i, s = 1, r = t.toText(e), o = r.lines == t.selection.ranges.length;
  if (ua != null && t.selection.ranges.every((a) => a.empty) && ua == r.toString()) {
    let a = -1;
    i = t.changeByRange((h) => {
      let c = t.doc.lineAt(h.from);
      if (c.from == a)
        return { range: h };
      a = c.from;
      let f = t.toText((o ? r.line(s++).text : e) + t.lineBreak);
      return {
        changes: { from: c.from, insert: f },
        range: S.cursor(h.from + f.length)
      };
    });
  } else o ? i = t.changeByRange((a) => {
    let h = r.line(s++);
    return {
      changes: { from: a.from, to: a.to, insert: h.text },
      range: S.cursor(a.from + h.length)
    };
  }) : i = t.replaceSelection(r);
  n.dispatch(i, {
    userEvent: "input.paste",
    scrollIntoView: !0
  });
}
Pt.scroll = (n) => {
  n.inputState.lastScrollTop = n.scrollDOM.scrollTop, n.inputState.lastScrollLeft = n.scrollDOM.scrollLeft;
};
Vt.keydown = (n, e) => (n.inputState.setSelectionOrigin("select"), e.keyCode == 27 && n.inputState.tabFocusMode != 0 && (n.inputState.tabFocusMode = Date.now() + 2e3), !1);
Pt.touchstart = (n, e) => {
  n.inputState.lastTouchTime = Date.now(), n.inputState.setSelectionOrigin("select.pointer");
};
Pt.touchmove = (n) => {
  n.inputState.setSelectionOrigin("select.pointer");
};
Vt.mousedown = (n, e) => {
  if (n.observer.flush(), n.inputState.lastTouchTime > Date.now() - 2e3)
    return !1;
  let t = null;
  for (let i of n.state.facet(Sd))
    if (t = i(n, e), t)
      break;
  if (!t && e.button == 0 && (t = Iy(n, e)), t) {
    let i = !n.hasFocus;
    n.inputState.startMouseSelection(new Ty(n, e, t, i)), i && n.observer.ignore(() => {
      td(n.contentDOM);
      let r = n.root.activeElement;
      r && !r.contains(n.contentDOM) && r.blur();
    });
    let s = n.inputState.mouseSelection;
    if (s)
      return s.start(e), s.dragging === !1;
  }
  return !1;
};
function _c(n, e, t, i) {
  if (i == 1)
    return S.cursor(e, t);
  if (i == 2)
    return ay(n.state, e, t);
  {
    let s = we.find(n.docView, e), r = n.state.doc.lineAt(s ? s.posAtEnd : e), o = s ? s.posAtStart : r.from, l = s ? s.posAtEnd : r.to;
    return l < n.state.doc.length && l == r.to && l++, S.range(o, l);
  }
}
let Rc = (n, e, t) => e >= t.top && e <= t.bottom && n >= t.left && n <= t.right;
function Ly(n, e, t, i) {
  let s = we.find(n.docView, e);
  if (!s)
    return 1;
  let r = e - s.posAtStart;
  if (r == 0)
    return 1;
  if (r == s.length)
    return -1;
  let o = s.coordsAt(r, -1);
  if (o && Rc(t, i, o))
    return -1;
  let l = s.coordsAt(r, 1);
  return l && Rc(t, i, l) ? 1 : o && o.bottom >= i ? -1 : 1;
}
function Lc(n, e) {
  let t = n.posAtCoords({ x: e.clientX, y: e.clientY }, !1);
  return { pos: t, bias: Ly(n, t, e.clientX, e.clientY) };
}
const Py = O.ie && O.ie_version <= 11;
let Pc = null, Ic = 0, Bc = 0;
function Vd(n) {
  if (!Py)
    return n.detail;
  let e = Pc, t = Bc;
  return Pc = n, Bc = Date.now(), Ic = !e || t > Date.now() - 400 && Math.abs(e.clientX - n.clientX) < 2 && Math.abs(e.clientY - n.clientY) < 2 ? (Ic + 1) % 3 : 1;
}
function Iy(n, e) {
  let t = Lc(n, e), i = Vd(e), s = n.state.selection;
  return {
    update(r) {
      r.docChanged && (t.pos = r.changes.mapPos(t.pos), s = s.map(r.changes));
    },
    get(r, o, l) {
      let a = Lc(n, r), h, c = _c(n, a.pos, a.bias, i);
      if (t.pos != a.pos && !o) {
        let f = _c(n, t.pos, t.bias, i), u = Math.min(f.from, c.from), d = Math.max(f.to, c.to);
        c = u < c.from ? S.range(u, d) : S.range(d, u);
      }
      return o ? s.replaceRange(s.main.extend(c.from, c.to)) : l && i == 1 && s.ranges.length > 1 && (h = By(s, a.pos)) ? h : l ? s.addRange(c) : S.create([c]);
    }
  };
}
function By(n, e) {
  for (let t = 0; t < n.ranges.length; t++) {
    let { from: i, to: s } = n.ranges[t];
    if (i <= e && s >= e)
      return S.create(n.ranges.slice(0, t).concat(n.ranges.slice(t + 1)), n.mainIndex == t ? 0 : n.mainIndex - (n.mainIndex > t ? 1 : 0));
  }
  return null;
}
Vt.dragstart = (n, e) => {
  let { selection: { main: t } } = n.state;
  if (e.target.draggable) {
    let s = n.docView.nearest(e.target);
    if (s && s.isWidget) {
      let r = s.posAtStart, o = r + s.length;
      (r >= t.to || o <= t.from) && (t = S.range(r, o));
    }
  }
  let { inputState: i } = n;
  return i.mouseSelection && (i.mouseSelection.dragging = !0), i.draggedContent = t, e.dataTransfer && (e.dataTransfer.setData("Text", No(n.state, Ka, n.state.sliceDoc(t.from, t.to))), e.dataTransfer.effectAllowed = "copyMove"), !1;
};
Vt.dragend = (n) => (n.inputState.draggedContent = null, !1);
function Nc(n, e, t, i) {
  if (t = No(n.state, ja, t), !t)
    return;
  let s = n.posAtCoords({ x: e.clientX, y: e.clientY }, !1), { draggedContent: r } = n.inputState, o = i && r && Dy(n, e) ? { from: r.from, to: r.to } : null, l = { from: s, insert: t }, a = n.state.changes(o ? [o, l] : l);
  n.focus(), n.dispatch({
    changes: a,
    selection: { anchor: a.mapPos(s, -1), head: a.mapPos(s, 1) },
    userEvent: o ? "move.drop" : "input.drop"
  }), n.inputState.draggedContent = null;
}
Vt.drop = (n, e) => {
  if (!e.dataTransfer)
    return !1;
  if (n.state.readOnly)
    return !0;
  let t = e.dataTransfer.files;
  if (t && t.length) {
    let i = Array(t.length), s = 0, r = () => {
      ++s == t.length && Nc(n, e, i.filter((o) => o != null).join(n.state.lineBreak), !1);
    };
    for (let o = 0; o < t.length; o++) {
      let l = new FileReader();
      l.onerror = r, l.onload = () => {
        /[\x00-\x08\x0e-\x1f]{2}/.test(l.result) || (i[o] = l.result), r();
      }, l.readAsText(t[o]);
    }
    return !0;
  } else {
    let i = e.dataTransfer.getData("Text");
    if (i)
      return Nc(n, e, i, !0), !0;
  }
  return !1;
};
Vt.paste = (n, e) => {
  if (n.state.readOnly)
    return !0;
  n.observer.flush();
  let t = Hd ? null : e.clipboardData;
  return t ? (Wd(n, t.getData("text/plain") || t.getData("text/uri-list")), !0) : (Ry(n), !1);
};
function Ny(n, e) {
  let t = n.dom.parentNode;
  if (!t)
    return;
  let i = t.appendChild(document.createElement("textarea"));
  i.style.cssText = "position: fixed; left: -10000px; top: 10px", i.value = e, i.focus(), i.selectionEnd = e.length, i.selectionStart = 0, setTimeout(() => {
    i.remove(), n.focus();
  }, 50);
}
function Fy(n) {
  let e = [], t = [], i = !1;
  for (let s of n.selection.ranges)
    s.empty || (e.push(n.sliceDoc(s.from, s.to)), t.push(s));
  if (!e.length) {
    let s = -1;
    for (let { from: r } of n.selection.ranges) {
      let o = n.doc.lineAt(r);
      o.number > s && (e.push(o.text), t.push({ from: o.from, to: Math.min(n.doc.length, o.to + 1) })), s = o.number;
    }
    i = !0;
  }
  return { text: No(n, Ka, e.join(n.lineBreak)), ranges: t, linewise: i };
}
let ua = null;
Vt.copy = Vt.cut = (n, e) => {
  let { text: t, ranges: i, linewise: s } = Fy(n.state);
  if (!t && !s)
    return !1;
  ua = s ? t : null, e.type == "cut" && !n.state.readOnly && n.dispatch({
    changes: i,
    scrollIntoView: !0,
    userEvent: "delete.cut"
  });
  let r = Hd ? null : e.clipboardData;
  return r ? (r.clearData(), r.setData("text/plain", t), !0) : (Ny(n, t), !1);
};
const zd = /* @__PURE__ */ Si.define();
function $d(n, e) {
  let t = [];
  for (let i of n.facet(Ad)) {
    let s = i(n, e);
    s && t.push(s);
  }
  return t.length ? n.update({ effects: t, annotations: zd.of(!0) }) : null;
}
function Ud(n) {
  setTimeout(() => {
    let e = n.hasFocus;
    if (e != n.inputState.notifiedFocused) {
      let t = $d(n.state, e);
      t ? n.dispatch(t) : n.update([]);
    }
  }, 10);
}
Pt.focus = (n) => {
  n.inputState.lastFocusTime = Date.now(), !n.scrollDOM.scrollTop && (n.inputState.lastScrollTop || n.inputState.lastScrollLeft) && (n.scrollDOM.scrollTop = n.inputState.lastScrollTop, n.scrollDOM.scrollLeft = n.inputState.lastScrollLeft), Ud(n);
};
Pt.blur = (n) => {
  n.observer.clearSelectionRange(), Ud(n);
};
Pt.compositionstart = Pt.compositionupdate = (n) => {
  n.observer.editContext || (n.inputState.compositionFirstChange == null && (n.inputState.compositionFirstChange = !0), n.inputState.composing < 0 && (n.inputState.composing = 0));
};
Pt.compositionend = (n) => {
  n.observer.editContext || (n.inputState.composing = -1, n.inputState.compositionEndedAt = Date.now(), n.inputState.compositionPendingKey = !0, n.inputState.compositionPendingChange = n.observer.pendingRecords().length > 0, n.inputState.compositionFirstChange = null, O.chrome && O.android ? n.observer.flushSoon() : n.inputState.compositionPendingChange ? Promise.resolve().then(() => n.observer.flush()) : setTimeout(() => {
    n.inputState.composing < 0 && n.docView.hasComposition && n.update([]);
  }, 50));
};
Pt.contextmenu = (n) => {
  n.inputState.lastContextMenu = Date.now();
};
Vt.beforeinput = (n, e) => {
  var t, i;
  if (e.inputType == "insertReplacementText" && n.observer.editContext) {
    let r = (t = e.dataTransfer) === null || t === void 0 ? void 0 : t.getData("text/plain"), o = e.getTargetRanges();
    if (r && o.length) {
      let l = o[0], a = n.posAtDOM(l.startContainer, l.startOffset), h = n.posAtDOM(l.endContainer, l.endOffset);
      return Ja(n, { from: a, to: h, insert: n.state.toText(r) }, null), !0;
    }
  }
  let s;
  if (O.chrome && O.android && (s = Nd.find((r) => r.inputType == e.inputType)) && (n.observer.delayAndroidKey(s.key, s.keyCode), s.key == "Backspace" || s.key == "Delete")) {
    let r = ((i = window.visualViewport) === null || i === void 0 ? void 0 : i.height) || 0;
    setTimeout(() => {
      var o;
      (((o = window.visualViewport) === null || o === void 0 ? void 0 : o.height) || 0) > r + 10 && n.hasFocus && (n.contentDOM.blur(), n.focus());
    }, 100);
  }
  return O.ios && e.inputType == "deleteContentForward" && n.observer.flushSoon(), O.safari && e.inputType == "insertText" && n.inputState.composing >= 0 && setTimeout(() => Pt.compositionend(n, e), 20), !1;
};
const Fc = /* @__PURE__ */ new Set();
function Hy(n) {
  Fc.has(n) || (Fc.add(n), n.addEventListener("copy", () => {
  }), n.addEventListener("cut", () => {
  }));
}
const Hc = ["pre-wrap", "normal", "pre-line", "break-spaces"];
let In = !1;
function Wc() {
  In = !1;
}
class Wy {
  constructor(e) {
    this.lineWrapping = e, this.doc = Z.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30;
  }
  heightForGap(e, t) {
    let i = this.doc.lineAt(t).number - this.doc.lineAt(e).number + 1;
    return this.lineWrapping && (i += Math.max(0, Math.ceil((t - e - i * this.lineLength * 0.5) / this.lineLength))), this.lineHeight * i;
  }
  heightForLine(e) {
    return this.lineWrapping ? (1 + Math.max(0, Math.ceil((e - this.lineLength) / (this.lineLength - 5)))) * this.lineHeight : this.lineHeight;
  }
  setDoc(e) {
    return this.doc = e, this;
  }
  mustRefreshForWrapping(e) {
    return Hc.indexOf(e) > -1 != this.lineWrapping;
  }
  mustRefreshForHeights(e) {
    let t = !1;
    for (let i = 0; i < e.length; i++) {
      let s = e[i];
      s < 0 ? i++ : this.heightSamples[Math.floor(s * 10)] || (t = !0, this.heightSamples[Math.floor(s * 10)] = !0);
    }
    return t;
  }
  refresh(e, t, i, s, r, o) {
    let l = Hc.indexOf(e) > -1, a = Math.round(t) != Math.round(this.lineHeight) || this.lineWrapping != l;
    if (this.lineWrapping = l, this.lineHeight = t, this.charWidth = i, this.textHeight = s, this.lineLength = r, a) {
      this.heightSamples = {};
      for (let h = 0; h < o.length; h++) {
        let c = o[h];
        c < 0 ? h++ : this.heightSamples[Math.floor(c * 10)] = !0;
      }
    }
    return a;
  }
}
class Vy {
  constructor(e, t) {
    this.from = e, this.heights = t, this.index = 0;
  }
  get more() {
    return this.index < this.heights.length;
  }
}
class Xt {
  /**
  @internal
  */
  constructor(e, t, i, s, r) {
    this.from = e, this.length = t, this.top = i, this.height = s, this._content = r;
  }
  /**
  The type of element this is. When querying lines, this may be
  an array of all the blocks that make up the line.
  */
  get type() {
    return typeof this._content == "number" ? Qe.Text : Array.isArray(this._content) ? this._content : this._content.type;
  }
  /**
  The end of the element as a document position.
  */
  get to() {
    return this.from + this.length;
  }
  /**
  The bottom position of the element.
  */
  get bottom() {
    return this.top + this.height;
  }
  /**
  If this is a widget block, this will return the widget
  associated with it.
  */
  get widget() {
    return this._content instanceof $i ? this._content.widget : null;
  }
  /**
  If this is a textblock, this holds the number of line breaks
  that appear in widgets inside the block.
  */
  get widgetLineBreaks() {
    return typeof this._content == "number" ? this._content : 0;
  }
  /**
  @internal
  */
  join(e) {
    let t = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(e._content) ? e._content : [e]);
    return new Xt(this.from, this.length + e.length, this.top, this.height + e.height, t);
  }
}
var ce = /* @__PURE__ */ function(n) {
  return n[n.ByPos = 0] = "ByPos", n[n.ByHeight = 1] = "ByHeight", n[n.ByPosNoHeight = 2] = "ByPosNoHeight", n;
}(ce || (ce = {}));
const Wr = 1e-3;
class Ze {
  constructor(e, t, i = 2) {
    this.length = e, this.height = t, this.flags = i;
  }
  get outdated() {
    return (this.flags & 2) > 0;
  }
  set outdated(e) {
    this.flags = (e ? 2 : 0) | this.flags & -3;
  }
  setHeight(e) {
    this.height != e && (Math.abs(this.height - e) > Wr && (In = !0), this.height = e);
  }
  // Base case is to replace a leaf node, which simply builds a tree
  // from the new nodes and returns that (HeightMapBranch and
  // HeightMapGap override this to actually use from/to)
  replace(e, t, i) {
    return Ze.of(i);
  }
  // Again, these are base cases, and are overridden for branch and gap nodes.
  decomposeLeft(e, t) {
    t.push(this);
  }
  decomposeRight(e, t) {
    t.push(this);
  }
  applyChanges(e, t, i, s) {
    let r = this, o = i.doc;
    for (let l = s.length - 1; l >= 0; l--) {
      let { fromA: a, toA: h, fromB: c, toB: f } = s[l], u = r.lineAt(a, ce.ByPosNoHeight, i.setDoc(t), 0, 0), d = u.to >= h ? u : r.lineAt(h, ce.ByPosNoHeight, i, 0, 0);
      for (f += d.to - h, h = d.to; l > 0 && u.from <= s[l - 1].toA; )
        a = s[l - 1].fromA, c = s[l - 1].fromB, l--, a < u.from && (u = r.lineAt(a, ce.ByPosNoHeight, i, 0, 0));
      c += u.from - a, a = u.from;
      let p = Qa.build(i.setDoc(o), e, c, f);
      r = oo(r, r.replace(a, h, p));
    }
    return r.updateHeight(i, 0);
  }
  static empty() {
    return new bt(0, 0);
  }
  // nodes uses null values to indicate the position of line breaks.
  // There are never line breaks at the start or end of the array, or
  // two line breaks next to each other, and the array isn't allowed
  // to be empty (same restrictions as return value from the builder).
  static of(e) {
    if (e.length == 1)
      return e[0];
    let t = 0, i = e.length, s = 0, r = 0;
    for (; ; )
      if (t == i)
        if (s > r * 2) {
          let l = e[t - 1];
          l.break ? e.splice(--t, 1, l.left, null, l.right) : e.splice(--t, 1, l.left, l.right), i += 1 + l.break, s -= l.size;
        } else if (r > s * 2) {
          let l = e[i];
          l.break ? e.splice(i, 1, l.left, null, l.right) : e.splice(i, 1, l.left, l.right), i += 2 + l.break, r -= l.size;
        } else
          break;
      else if (s < r) {
        let l = e[t++];
        l && (s += l.size);
      } else {
        let l = e[--i];
        l && (r += l.size);
      }
    let o = 0;
    return e[t - 1] == null ? (o = 1, t--) : e[t] == null && (o = 1, i++), new zy(Ze.of(e.slice(0, t)), o, Ze.of(e.slice(i)));
  }
}
function oo(n, e) {
  return n == e ? n : (n.constructor != e.constructor && (In = !0), e);
}
Ze.prototype.size = 1;
class qd extends Ze {
  constructor(e, t, i) {
    super(e, t), this.deco = i;
  }
  blockAt(e, t, i, s) {
    return new Xt(s, this.length, i, this.height, this.deco || 0);
  }
  lineAt(e, t, i, s, r) {
    return this.blockAt(0, i, s, r);
  }
  forEachLine(e, t, i, s, r, o) {
    e <= r + this.length && t >= r && o(this.blockAt(0, i, s, r));
  }
  updateHeight(e, t = 0, i = !1, s) {
    return s && s.from <= t && s.more && this.setHeight(s.heights[s.index++]), this.outdated = !1, this;
  }
  toString() {
    return `block(${this.length})`;
  }
}
class bt extends qd {
  constructor(e, t) {
    super(e, t, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0;
  }
  blockAt(e, t, i, s) {
    return new Xt(s, this.length, i, this.height, this.breaks);
  }
  replace(e, t, i) {
    let s = i[0];
    return i.length == 1 && (s instanceof bt || s instanceof Le && s.flags & 4) && Math.abs(this.length - s.length) < 10 ? (s instanceof Le ? s = new bt(s.length, this.height) : s.height = this.height, this.outdated || (s.outdated = !1), s) : Ze.of(i);
  }
  updateHeight(e, t = 0, i = !1, s) {
    return s && s.from <= t && s.more ? this.setHeight(s.heights[s.index++]) : (i || this.outdated) && this.setHeight(Math.max(this.widgetHeight, e.heightForLine(this.length - this.collapsed)) + this.breaks * e.lineHeight), this.outdated = !1, this;
  }
  toString() {
    return `line(${this.length}${this.collapsed ? -this.collapsed : ""}${this.widgetHeight ? ":" + this.widgetHeight : ""})`;
  }
}
class Le extends Ze {
  constructor(e) {
    super(e, 0);
  }
  heightMetrics(e, t) {
    let i = e.doc.lineAt(t).number, s = e.doc.lineAt(t + this.length).number, r = s - i + 1, o, l = 0;
    if (e.lineWrapping) {
      let a = Math.min(this.height, e.lineHeight * r);
      o = a / r, this.length > r + 1 && (l = (this.height - a) / (this.length - r - 1));
    } else
      o = this.height / r;
    return { firstLine: i, lastLine: s, perLine: o, perChar: l };
  }
  blockAt(e, t, i, s) {
    let { firstLine: r, lastLine: o, perLine: l, perChar: a } = this.heightMetrics(t, s);
    if (t.lineWrapping) {
      let h = s + (e < t.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (e - i) / this.height)) * this.length)), c = t.doc.lineAt(h), f = l + c.length * a, u = Math.max(i, e - f / 2);
      return new Xt(c.from, c.length, u, f, 0);
    } else {
      let h = Math.max(0, Math.min(o - r, Math.floor((e - i) / l))), { from: c, length: f } = t.doc.line(r + h);
      return new Xt(c, f, i + l * h, l, 0);
    }
  }
  lineAt(e, t, i, s, r) {
    if (t == ce.ByHeight)
      return this.blockAt(e, i, s, r);
    if (t == ce.ByPosNoHeight) {
      let { from: d, to: p } = i.doc.lineAt(e);
      return new Xt(d, p - d, 0, 0, 0);
    }
    let { firstLine: o, perLine: l, perChar: a } = this.heightMetrics(i, r), h = i.doc.lineAt(e), c = l + h.length * a, f = h.number - o, u = s + l * f + a * (h.from - r - f);
    return new Xt(h.from, h.length, Math.max(s, Math.min(u, s + this.height - c)), c, 0);
  }
  forEachLine(e, t, i, s, r, o) {
    e = Math.max(e, r), t = Math.min(t, r + this.length);
    let { firstLine: l, perLine: a, perChar: h } = this.heightMetrics(i, r);
    for (let c = e, f = s; c <= t; ) {
      let u = i.doc.lineAt(c);
      if (c == e) {
        let p = u.number - l;
        f += a * p + h * (e - r - p);
      }
      let d = a + h * u.length;
      o(new Xt(u.from, u.length, f, d, 0)), f += d, c = u.to + 1;
    }
  }
  replace(e, t, i) {
    let s = this.length - t;
    if (s > 0) {
      let r = i[i.length - 1];
      r instanceof Le ? i[i.length - 1] = new Le(r.length + s) : i.push(null, new Le(s - 1));
    }
    if (e > 0) {
      let r = i[0];
      r instanceof Le ? i[0] = new Le(e + r.length) : i.unshift(new Le(e - 1), null);
    }
    return Ze.of(i);
  }
  decomposeLeft(e, t) {
    t.push(new Le(e - 1), null);
  }
  decomposeRight(e, t) {
    t.push(null, new Le(this.length - e - 1));
  }
  updateHeight(e, t = 0, i = !1, s) {
    let r = t + this.length;
    if (s && s.from <= t + this.length && s.more) {
      let o = [], l = Math.max(t, s.from), a = -1;
      for (s.from > t && o.push(new Le(s.from - t - 1).updateHeight(e, t)); l <= r && s.more; ) {
        let c = e.doc.lineAt(l).length;
        o.length && o.push(null);
        let f = s.heights[s.index++];
        a == -1 ? a = f : Math.abs(f - a) >= Wr && (a = -2);
        let u = new bt(c, f);
        u.outdated = !1, o.push(u), l += c + 1;
      }
      l <= r && o.push(null, new Le(r - l).updateHeight(e, l));
      let h = Ze.of(o);
      return (a < 0 || Math.abs(h.height - this.height) >= Wr || Math.abs(a - this.heightMetrics(e, t).perLine) >= Wr) && (In = !0), oo(this, h);
    } else (i || this.outdated) && (this.setHeight(e.heightForGap(t, t + this.length)), this.outdated = !1);
    return this;
  }
  toString() {
    return `gap(${this.length})`;
  }
}
class zy extends Ze {
  constructor(e, t, i) {
    super(e.length + t + i.length, e.height + i.height, t | (e.outdated || i.outdated ? 2 : 0)), this.left = e, this.right = i, this.size = e.size + i.size;
  }
  get break() {
    return this.flags & 1;
  }
  blockAt(e, t, i, s) {
    let r = i + this.left.height;
    return e < r ? this.left.blockAt(e, t, i, s) : this.right.blockAt(e, t, r, s + this.left.length + this.break);
  }
  lineAt(e, t, i, s, r) {
    let o = s + this.left.height, l = r + this.left.length + this.break, a = t == ce.ByHeight ? e < o : e < l, h = a ? this.left.lineAt(e, t, i, s, r) : this.right.lineAt(e, t, i, o, l);
    if (this.break || (a ? h.to < l : h.from > l))
      return h;
    let c = t == ce.ByPosNoHeight ? ce.ByPosNoHeight : ce.ByPos;
    return a ? h.join(this.right.lineAt(l, c, i, o, l)) : this.left.lineAt(l, c, i, s, r).join(h);
  }
  forEachLine(e, t, i, s, r, o) {
    let l = s + this.left.height, a = r + this.left.length + this.break;
    if (this.break)
      e < a && this.left.forEachLine(e, t, i, s, r, o), t >= a && this.right.forEachLine(e, t, i, l, a, o);
    else {
      let h = this.lineAt(a, ce.ByPos, i, s, r);
      e < h.from && this.left.forEachLine(e, h.from - 1, i, s, r, o), h.to >= e && h.from <= t && o(h), t > h.to && this.right.forEachLine(h.to + 1, t, i, l, a, o);
    }
  }
  replace(e, t, i) {
    let s = this.left.length + this.break;
    if (t < s)
      return this.balanced(this.left.replace(e, t, i), this.right);
    if (e > this.left.length)
      return this.balanced(this.left, this.right.replace(e - s, t - s, i));
    let r = [];
    e > 0 && this.decomposeLeft(e, r);
    let o = r.length;
    for (let l of i)
      r.push(l);
    if (e > 0 && Vc(r, o - 1), t < this.length) {
      let l = r.length;
      this.decomposeRight(t, r), Vc(r, l);
    }
    return Ze.of(r);
  }
  decomposeLeft(e, t) {
    let i = this.left.length;
    if (e <= i)
      return this.left.decomposeLeft(e, t);
    t.push(this.left), this.break && (i++, e >= i && t.push(null)), e > i && this.right.decomposeLeft(e - i, t);
  }
  decomposeRight(e, t) {
    let i = this.left.length, s = i + this.break;
    if (e >= s)
      return this.right.decomposeRight(e - s, t);
    e < i && this.left.decomposeRight(e, t), this.break && e < s && t.push(null), t.push(this.right);
  }
  balanced(e, t) {
    return e.size > 2 * t.size || t.size > 2 * e.size ? Ze.of(this.break ? [e, null, t] : [e, t]) : (this.left = oo(this.left, e), this.right = oo(this.right, t), this.setHeight(e.height + t.height), this.outdated = e.outdated || t.outdated, this.size = e.size + t.size, this.length = e.length + this.break + t.length, this);
  }
  updateHeight(e, t = 0, i = !1, s) {
    let { left: r, right: o } = this, l = t + r.length + this.break, a = null;
    return s && s.from <= t + r.length && s.more ? a = r = r.updateHeight(e, t, i, s) : r.updateHeight(e, t, i), s && s.from <= l + o.length && s.more ? a = o = o.updateHeight(e, l, i, s) : o.updateHeight(e, l, i), a ? this.balanced(r, o) : (this.height = this.left.height + this.right.height, this.outdated = !1, this);
  }
  toString() {
    return this.left + (this.break ? " " : "-") + this.right;
  }
}
function Vc(n, e) {
  let t, i;
  n[e] == null && (t = n[e - 1]) instanceof Le && (i = n[e + 1]) instanceof Le && n.splice(e - 1, 3, new Le(t.length + 1 + i.length));
}
const $y = 5;
class Qa {
  constructor(e, t) {
    this.pos = e, this.oracle = t, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = e;
  }
  get isCovered() {
    return this.covering && this.nodes[this.nodes.length - 1] == this.covering;
  }
  span(e, t) {
    if (this.lineStart > -1) {
      let i = Math.min(t, this.lineEnd), s = this.nodes[this.nodes.length - 1];
      s instanceof bt ? s.length += i - this.pos : (i > this.pos || !this.isCovered) && this.nodes.push(new bt(i - this.pos, -1)), this.writtenTo = i, t > i && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1);
    }
    this.pos = t;
  }
  point(e, t, i) {
    if (e < t || i.heightRelevant) {
      let s = i.widget ? i.widget.estimatedHeight : 0, r = i.widget ? i.widget.lineBreaks : 0;
      s < 0 && (s = this.oracle.lineHeight);
      let o = t - e;
      i.block ? this.addBlock(new qd(o, s, i)) : (o || r || s >= $y) && this.addLineDeco(s, r, o);
    } else t > e && this.span(e, t);
    this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to);
  }
  enterLine() {
    if (this.lineStart > -1)
      return;
    let { from: e, to: t } = this.oracle.doc.lineAt(this.pos);
    this.lineStart = e, this.lineEnd = t, this.writtenTo < e && ((this.writtenTo < e - 1 || this.nodes[this.nodes.length - 1] == null) && this.nodes.push(this.blankContent(this.writtenTo, e - 1)), this.nodes.push(null)), this.pos > e && this.nodes.push(new bt(this.pos - e, -1)), this.writtenTo = this.pos;
  }
  blankContent(e, t) {
    let i = new Le(t - e);
    return this.oracle.doc.lineAt(e).to == t && (i.flags |= 4), i;
  }
  ensureLine() {
    this.enterLine();
    let e = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
    if (e instanceof bt)
      return e;
    let t = new bt(0, -1);
    return this.nodes.push(t), t;
  }
  addBlock(e) {
    this.enterLine();
    let t = e.deco;
    t && t.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(e), this.writtenTo = this.pos = this.pos + e.length, t && t.endSide > 0 && (this.covering = e);
  }
  addLineDeco(e, t, i) {
    let s = this.ensureLine();
    s.length += i, s.collapsed += i, s.widgetHeight = Math.max(s.widgetHeight, e), s.breaks += t, this.writtenTo = this.pos = this.pos + i;
  }
  finish(e) {
    let t = this.nodes.length == 0 ? null : this.nodes[this.nodes.length - 1];
    this.lineStart > -1 && !(t instanceof bt) && !this.isCovered ? this.nodes.push(new bt(0, -1)) : (this.writtenTo < this.pos || t == null) && this.nodes.push(this.blankContent(this.writtenTo, this.pos));
    let i = e;
    for (let s of this.nodes)
      s instanceof bt && s.updateHeight(this.oracle, i), i += s ? s.length : 1;
    return this.nodes;
  }
  // Always called with a region that on both sides either stretches
  // to a line break or the end of the document.
  // The returned array uses null to indicate line breaks, but never
  // starts or ends in a line break, or has multiple line breaks next
  // to each other.
  static build(e, t, i, s) {
    let r = new Qa(i, e);
    return Y.spans(t, i, s, r, 0), r.finish(i);
  }
}
function Uy(n, e, t) {
  let i = new qy();
  return Y.compare(n, e, t, i, 0), i.changes;
}
class qy {
  constructor() {
    this.changes = [];
  }
  compareRange() {
  }
  comparePoint(e, t, i, s) {
    (e < t || i && i.heightRelevant || s && s.heightRelevant) && Fr(e, t, this.changes, 5);
  }
}
function jy(n, e) {
  let t = n.getBoundingClientRect(), i = n.ownerDocument, s = i.defaultView || window, r = Math.max(0, t.left), o = Math.min(s.innerWidth, t.right), l = Math.max(0, t.top), a = Math.min(s.innerHeight, t.bottom);
  for (let h = n.parentNode; h && h != i.body; )
    if (h.nodeType == 1) {
      let c = h, f = window.getComputedStyle(c);
      if ((c.scrollHeight > c.clientHeight || c.scrollWidth > c.clientWidth) && f.overflow != "visible") {
        let u = c.getBoundingClientRect();
        r = Math.max(r, u.left), o = Math.min(o, u.right), l = Math.max(l, u.top), a = Math.min(h == n.parentNode ? s.innerHeight : a, u.bottom);
      }
      h = f.position == "absolute" || f.position == "fixed" ? c.offsetParent : c.parentNode;
    } else if (h.nodeType == 11)
      h = h.host;
    else
      break;
  return {
    left: r - t.left,
    right: Math.max(r, o) - t.left,
    top: l - (t.top + e),
    bottom: Math.max(l, a) - (t.top + e)
  };
}
function Ky(n) {
  let e = n.getBoundingClientRect(), t = n.ownerDocument.defaultView || window;
  return e.left < t.innerWidth && e.right > 0 && e.top < t.innerHeight && e.bottom > 0;
}
function Gy(n, e) {
  let t = n.getBoundingClientRect();
  return {
    left: 0,
    right: t.right - t.left,
    top: e,
    bottom: t.bottom - (t.top + e)
  };
}
class dl {
  constructor(e, t, i, s) {
    this.from = e, this.to = t, this.size = i, this.displaySize = s;
  }
  static same(e, t) {
    if (e.length != t.length)
      return !1;
    for (let i = 0; i < e.length; i++) {
      let s = e[i], r = t[i];
      if (s.from != r.from || s.to != r.to || s.size != r.size)
        return !1;
    }
    return !0;
  }
  draw(e, t) {
    return F.replace({
      widget: new Yy(this.displaySize * (t ? e.scaleY : e.scaleX), t)
    }).range(this.from, this.to);
  }
}
class Yy extends ji {
  constructor(e, t) {
    super(), this.size = e, this.vertical = t;
  }
  eq(e) {
    return e.size == this.size && e.vertical == this.vertical;
  }
  toDOM() {
    let e = document.createElement("div");
    return this.vertical ? e.style.height = this.size + "px" : (e.style.width = this.size + "px", e.style.height = "2px", e.style.display = "inline-block"), e;
  }
  get estimatedHeight() {
    return this.vertical ? this.size : -1;
  }
}
class zc {
  constructor(e) {
    this.state = e, this.pixelViewport = { left: 0, right: window.innerWidth, top: 0, bottom: 0 }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scrollTop = 0, this.scrolledToBottom = !1, this.scaleX = 1, this.scaleY = 1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = $c, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = fe.LTR, this.visibleRanges = [], this.mustEnforceCursorAssoc = !1;
    let t = e.facet(Ga).some((i) => typeof i != "function" && i.class == "cm-lineWrapping");
    this.heightOracle = new Wy(t), this.stateDeco = e.facet(Ds).filter((i) => typeof i != "function"), this.heightMap = Ze.empty().applyChanges(this.stateDeco, Z.empty, this.heightOracle.setDoc(e.doc), [new Ot(0, 0, 0, e.doc.length)]);
    for (let i = 0; i < 2 && (this.viewport = this.getViewport(0, null), !!this.updateForViewport()); i++)
      ;
    this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = F.set(this.lineGaps.map((i) => i.draw(this, !1))), this.computeVisibleRanges();
  }
  updateForViewport() {
    let e = [this.viewport], { main: t } = this.state.selection;
    for (let i = 0; i <= 1; i++) {
      let s = i ? t.head : t.anchor;
      if (!e.some(({ from: r, to: o }) => s >= r && s <= o)) {
        let { from: r, to: o } = this.lineBlockAt(s);
        e.push(new gr(r, o));
      }
    }
    return this.viewports = e.sort((i, s) => i.from - s.from), this.updateScaler();
  }
  updateScaler() {
    let e = this.scaler;
    return this.scaler = this.heightMap.height <= 7e6 ? $c : new Za(this.heightOracle, this.heightMap, this.viewports), e.eq(this.scaler) ? 0 : 2;
  }
  updateViewportLines() {
    this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (e) => {
      this.viewportLines.push(us(e, this.scaler));
    });
  }
  update(e, t = null) {
    this.state = e.state;
    let i = this.stateDeco;
    this.stateDeco = this.state.facet(Ds).filter((c) => typeof c != "function");
    let s = e.changedRanges, r = Ot.extendWithRanges(s, Uy(i, this.stateDeco, e ? e.changes : Ae.empty(this.state.doc.length))), o = this.heightMap.height, l = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollTop);
    Wc(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, e.startState.doc, this.heightOracle.setDoc(this.state.doc), r), (this.heightMap.height != o || In) && (e.flags |= 2), l ? (this.scrollAnchorPos = e.changes.mapPos(l.from, -1), this.scrollAnchorHeight = l.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = o);
    let a = r.length ? this.mapViewport(this.viewport, e.changes) : this.viewport;
    (t && (t.range.head < a.from || t.range.head > a.to) || !this.viewportIsAppropriate(a)) && (a = this.getViewport(0, t));
    let h = a.from != this.viewport.from || a.to != this.viewport.to;
    this.viewport = a, e.flags |= this.updateForViewport(), (h || !e.changes.empty || e.flags & 2) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, e.changes))), e.flags |= this.computeVisibleRanges(e.changes), t && (this.scrollTarget = t), !this.mustEnforceCursorAssoc && e.selectionSet && e.view.lineWrapping && e.state.selection.main.empty && e.state.selection.main.assoc && !e.state.facet(Td) && (this.mustEnforceCursorAssoc = !0);
  }
  measure(e) {
    let t = e.contentDOM, i = window.getComputedStyle(t), s = this.heightOracle, r = i.whiteSpace;
    this.defaultTextDirection = i.direction == "rtl" ? fe.RTL : fe.LTR;
    let o = this.heightOracle.mustRefreshForWrapping(r), l = t.getBoundingClientRect(), a = o || this.mustMeasureContent || this.contentDOMHeight != l.height;
    this.contentDOMHeight = l.height, this.mustMeasureContent = !1;
    let h = 0, c = 0;
    if (l.width && l.height) {
      let { scaleX: w, scaleY: x } = ed(t, l);
      (w > 5e-3 && Math.abs(this.scaleX - w) > 5e-3 || x > 5e-3 && Math.abs(this.scaleY - x) > 5e-3) && (this.scaleX = w, this.scaleY = x, h |= 16, o = a = !0);
    }
    let f = (parseInt(i.paddingTop) || 0) * this.scaleY, u = (parseInt(i.paddingBottom) || 0) * this.scaleY;
    (this.paddingTop != f || this.paddingBottom != u) && (this.paddingTop = f, this.paddingBottom = u, h |= 18), this.editorWidth != e.scrollDOM.clientWidth && (s.lineWrapping && (a = !0), this.editorWidth = e.scrollDOM.clientWidth, h |= 16);
    let d = e.scrollDOM.scrollTop * this.scaleY;
    this.scrollTop != d && (this.scrollAnchorHeight = -1, this.scrollTop = d), this.scrolledToBottom = nd(e.scrollDOM);
    let p = (this.printing ? Gy : jy)(t, this.paddingTop), m = p.top - this.pixelViewport.top, g = p.bottom - this.pixelViewport.bottom;
    this.pixelViewport = p;
    let b = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
    if (b != this.inView && (this.inView = b, b && (a = !0)), !this.inView && !this.scrollTarget && !Ky(e.dom))
      return 0;
    let v = l.width;
    if ((this.contentDOMWidth != v || this.editorHeight != e.scrollDOM.clientHeight) && (this.contentDOMWidth = l.width, this.editorHeight = e.scrollDOM.clientHeight, h |= 16), a) {
      let w = e.docView.measureVisibleLineHeights(this.viewport);
      if (s.mustRefreshForHeights(w) && (o = !0), o || s.lineWrapping && Math.abs(v - this.contentDOMWidth) > s.charWidth) {
        let { lineHeight: x, charWidth: C, textHeight: A } = e.docView.measureTextSize();
        o = x > 0 && s.refresh(r, x, C, A, v / C, w), o && (e.docView.minWidth = 0, h |= 16);
      }
      m > 0 && g > 0 ? c = Math.max(m, g) : m < 0 && g < 0 && (c = Math.min(m, g)), Wc();
      for (let x of this.viewports) {
        let C = x.from == this.viewport.from ? w : e.docView.measureVisibleLineHeights(x);
        this.heightMap = (o ? Ze.empty().applyChanges(this.stateDeco, Z.empty, this.heightOracle, [new Ot(0, 0, 0, e.state.doc.length)]) : this.heightMap).updateHeight(s, 0, o, new Vy(x.from, C));
      }
      In && (h |= 2);
    }
    let k = !this.viewportIsAppropriate(this.viewport, c) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
    return k && (h & 2 && (h |= this.updateScaler()), this.viewport = this.getViewport(c, this.scrollTarget), h |= this.updateForViewport()), (h & 2 || k) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(o ? [] : this.lineGaps, e)), h |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, e.docView.enforceCursorAssoc()), h;
  }
  get visibleTop() {
    return this.scaler.fromDOM(this.pixelViewport.top);
  }
  get visibleBottom() {
    return this.scaler.fromDOM(this.pixelViewport.bottom);
  }
  getViewport(e, t) {
    let i = 0.5 - Math.max(-0.5, Math.min(0.5, e / 1e3 / 2)), s = this.heightMap, r = this.heightOracle, { visibleTop: o, visibleBottom: l } = this, a = new gr(s.lineAt(o - i * 1e3, ce.ByHeight, r, 0, 0).from, s.lineAt(l + (1 - i) * 1e3, ce.ByHeight, r, 0, 0).to);
    if (t) {
      let { head: h } = t.range;
      if (h < a.from || h > a.to) {
        let c = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top), f = s.lineAt(h, ce.ByPos, r, 0, 0), u;
        t.y == "center" ? u = (f.top + f.bottom) / 2 - c / 2 : t.y == "start" || t.y == "nearest" && h < a.from ? u = f.top : u = f.bottom - c, a = new gr(s.lineAt(u - 1e3 / 2, ce.ByHeight, r, 0, 0).from, s.lineAt(u + c + 1e3 / 2, ce.ByHeight, r, 0, 0).to);
      }
    }
    return a;
  }
  mapViewport(e, t) {
    let i = t.mapPos(e.from, -1), s = t.mapPos(e.to, 1);
    return new gr(this.heightMap.lineAt(i, ce.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(s, ce.ByPos, this.heightOracle, 0, 0).to);
  }
  // Checks if a given viewport covers the visible part of the
  // document and not too much beyond that.
  viewportIsAppropriate({ from: e, to: t }, i = 0) {
    if (!this.inView)
      return !0;
    let { top: s } = this.heightMap.lineAt(e, ce.ByPos, this.heightOracle, 0, 0), { bottom: r } = this.heightMap.lineAt(t, ce.ByPos, this.heightOracle, 0, 0), { visibleTop: o, visibleBottom: l } = this;
    return (e == 0 || s <= o - Math.max(10, Math.min(
      -i,
      250
      /* VP.MaxCoverMargin */
    ))) && (t == this.state.doc.length || r >= l + Math.max(10, Math.min(
      i,
      250
      /* VP.MaxCoverMargin */
    ))) && s > o - 2 * 1e3 && r < l + 2 * 1e3;
  }
  mapLineGaps(e, t) {
    if (!e.length || t.empty)
      return e;
    let i = [];
    for (let s of e)
      t.touchesRange(s.from, s.to) || i.push(new dl(t.mapPos(s.from), t.mapPos(s.to), s.size, s.displaySize));
    return i;
  }
  // Computes positions in the viewport where the start or end of a
  // line should be hidden, trying to reuse existing line gaps when
  // appropriate to avoid unneccesary redraws.
  // Uses crude character-counting for the positioning and sizing,
  // since actual DOM coordinates aren't always available and
  // predictable. Relies on generous margins (see LG.Margin) to hide
  // the artifacts this might produce from the user.
  ensureLineGaps(e, t) {
    let i = this.heightOracle.lineWrapping, s = i ? 1e4 : 2e3, r = s >> 1, o = s << 1;
    if (this.defaultTextDirection != fe.LTR && !i)
      return [];
    let l = [], a = (c, f, u, d) => {
      if (f - c < r)
        return;
      let p = this.state.selection.main, m = [p.from];
      p.empty || m.push(p.to);
      for (let b of m)
        if (b > c && b < f) {
          a(c, b - 10, u, d), a(b + 10, f, u, d);
          return;
        }
      let g = Jy(e, (b) => b.from >= u.from && b.to <= u.to && Math.abs(b.from - c) < r && Math.abs(b.to - f) < r && !m.some((v) => b.from < v && b.to > v));
      if (!g) {
        if (f < u.to && t && i && t.visibleRanges.some((k) => k.from <= f && k.to >= f)) {
          let k = t.moveToLineBoundary(S.cursor(f), !1, !0).head;
          k > c && (f = k);
        }
        let b = this.gapSize(u, c, f, d), v = i || b < 2e6 ? b : 2e6;
        g = new dl(c, f, b, v);
      }
      l.push(g);
    }, h = (c) => {
      if (c.length < o || c.type != Qe.Text)
        return;
      let f = Xy(c.from, c.to, this.stateDeco);
      if (f.total < o)
        return;
      let u = this.scrollTarget ? this.scrollTarget.range.head : null, d, p;
      if (i) {
        let m = s / this.heightOracle.lineLength * this.heightOracle.lineHeight, g, b;
        if (u != null) {
          let v = br(f, u), k = ((this.visibleBottom - this.visibleTop) / 2 + m) / c.height;
          g = v - k, b = v + k;
        } else
          g = (this.visibleTop - c.top - m) / c.height, b = (this.visibleBottom - c.top + m) / c.height;
        d = yr(f, g), p = yr(f, b);
      } else {
        let m = f.total * this.heightOracle.charWidth, g = s * this.heightOracle.charWidth, b = 0;
        if (m > 2e6)
          for (let C of e)
            C.from >= c.from && C.from < c.to && C.size != C.displaySize && C.from * this.heightOracle.charWidth + b < this.pixelViewport.left && (b = C.size - C.displaySize);
        let v = this.pixelViewport.left + b, k = this.pixelViewport.right + b, w, x;
        if (u != null) {
          let C = br(f, u), A = ((k - v) / 2 + g) / m;
          w = C - A, x = C + A;
        } else
          w = (v - g) / m, x = (k + g) / m;
        d = yr(f, w), p = yr(f, x);
      }
      d > c.from && a(c.from, d, c, f), p < c.to && a(p, c.to, c, f);
    };
    for (let c of this.viewportLines)
      Array.isArray(c.type) ? c.type.forEach(h) : h(c);
    return l;
  }
  gapSize(e, t, i, s) {
    let r = br(s, i) - br(s, t);
    return this.heightOracle.lineWrapping ? e.height * r : s.total * this.heightOracle.charWidth * r;
  }
  updateLineGaps(e) {
    dl.same(e, this.lineGaps) || (this.lineGaps = e, this.lineGapDeco = F.set(e.map((t) => t.draw(this, this.heightOracle.lineWrapping))));
  }
  computeVisibleRanges(e) {
    let t = this.stateDeco;
    this.lineGaps.length && (t = t.concat(this.lineGapDeco));
    let i = [];
    Y.spans(t, this.viewport.from, this.viewport.to, {
      span(r, o) {
        i.push({ from: r, to: o });
      },
      point() {
      }
    }, 20);
    let s = 0;
    if (i.length != this.visibleRanges.length)
      s = 12;
    else
      for (let r = 0; r < i.length && !(s & 8); r++) {
        let o = this.visibleRanges[r], l = i[r];
        (o.from != l.from || o.to != l.to) && (s |= 4, e && e.mapPos(o.from, -1) == l.from && e.mapPos(o.to, 1) == l.to || (s |= 8));
      }
    return this.visibleRanges = i, s;
  }
  lineBlockAt(e) {
    return e >= this.viewport.from && e <= this.viewport.to && this.viewportLines.find((t) => t.from <= e && t.to >= e) || us(this.heightMap.lineAt(e, ce.ByPos, this.heightOracle, 0, 0), this.scaler);
  }
  lineBlockAtHeight(e) {
    return e >= this.viewportLines[0].top && e <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((t) => t.top <= e && t.bottom >= e) || us(this.heightMap.lineAt(this.scaler.fromDOM(e), ce.ByHeight, this.heightOracle, 0, 0), this.scaler);
  }
  scrollAnchorAt(e) {
    let t = this.lineBlockAtHeight(e + 8);
    return t.from >= this.viewport.from || this.viewportLines[0].top - e > 200 ? t : this.viewportLines[0];
  }
  elementAtHeight(e) {
    return us(this.heightMap.blockAt(this.scaler.fromDOM(e), this.heightOracle, 0, 0), this.scaler);
  }
  get docHeight() {
    return this.scaler.toDOM(this.heightMap.height);
  }
  get contentHeight() {
    return this.docHeight + this.paddingTop + this.paddingBottom;
  }
}
class gr {
  constructor(e, t) {
    this.from = e, this.to = t;
  }
}
function Xy(n, e, t) {
  let i = [], s = n, r = 0;
  return Y.spans(t, n, e, {
    span() {
    },
    point(o, l) {
      o > s && (i.push({ from: s, to: o }), r += o - s), s = l;
    }
  }, 20), s < e && (i.push({ from: s, to: e }), r += e - s), { total: r, ranges: i };
}
function yr({ total: n, ranges: e }, t) {
  if (t <= 0)
    return e[0].from;
  if (t >= 1)
    return e[e.length - 1].to;
  let i = Math.floor(n * t);
  for (let s = 0; ; s++) {
    let { from: r, to: o } = e[s], l = o - r;
    if (i <= l)
      return r + i;
    i -= l;
  }
}
function br(n, e) {
  let t = 0;
  for (let { from: i, to: s } of n.ranges) {
    if (e <= s) {
      t += e - i;
      break;
    }
    t += s - i;
  }
  return t / n.total;
}
function Jy(n, e) {
  for (let t of n)
    if (e(t))
      return t;
}
const $c = {
  toDOM(n) {
    return n;
  },
  fromDOM(n) {
    return n;
  },
  scale: 1,
  eq(n) {
    return n == this;
  }
};
class Za {
  constructor(e, t, i) {
    let s = 0, r = 0, o = 0;
    this.viewports = i.map(({ from: l, to: a }) => {
      let h = t.lineAt(l, ce.ByPos, e, 0, 0).top, c = t.lineAt(a, ce.ByPos, e, 0, 0).bottom;
      return s += c - h, { from: l, to: a, top: h, bottom: c, domTop: 0, domBottom: 0 };
    }), this.scale = (7e6 - s) / (t.height - s);
    for (let l of this.viewports)
      l.domTop = o + (l.top - r) * this.scale, o = l.domBottom = l.domTop + (l.bottom - l.top), r = l.bottom;
  }
  toDOM(e) {
    for (let t = 0, i = 0, s = 0; ; t++) {
      let r = t < this.viewports.length ? this.viewports[t] : null;
      if (!r || e < r.top)
        return s + (e - i) * this.scale;
      if (e <= r.bottom)
        return r.domTop + (e - r.top);
      i = r.bottom, s = r.domBottom;
    }
  }
  fromDOM(e) {
    for (let t = 0, i = 0, s = 0; ; t++) {
      let r = t < this.viewports.length ? this.viewports[t] : null;
      if (!r || e < r.domTop)
        return i + (e - s) / this.scale;
      if (e <= r.domBottom)
        return r.top + (e - r.domTop);
      i = r.bottom, s = r.domBottom;
    }
  }
  eq(e) {
    return e instanceof Za ? this.scale == e.scale && this.viewports.length == e.viewports.length && this.viewports.every((t, i) => t.from == e.viewports[i].from && t.to == e.viewports[i].to) : !1;
  }
}
function us(n, e) {
  if (e.scale == 1)
    return n;
  let t = e.toDOM(n.top), i = e.toDOM(n.bottom);
  return new Xt(n.from, n.length, t, i - t, Array.isArray(n._content) ? n._content.map((s) => us(s, e)) : n._content);
}
const vr = /* @__PURE__ */ R.define({ combine: (n) => n.join(" ") }), da = /* @__PURE__ */ R.define({ combine: (n) => n.indexOf(!0) > -1 }), pa = /* @__PURE__ */ Vi.newName(), jd = /* @__PURE__ */ Vi.newName(), Kd = /* @__PURE__ */ Vi.newName(), Gd = { "&light": "." + jd, "&dark": "." + Kd };
function ma(n, e, t) {
  return new Vi(e, {
    finish(i) {
      return /&/.test(i) ? i.replace(/&\w*/, (s) => {
        if (s == "&")
          return n;
        if (!t || !t[s])
          throw new RangeError(`Unsupported selector: ${s}`);
        return t[s];
      }) : n + " " + i;
    }
  });
}
const Qy = /* @__PURE__ */ ma("." + pa, {
  "&": {
    position: "relative !important",
    boxSizing: "border-box",
    "&.cm-focused": {
      // Provide a simple default outline to make sure a focused
      // editor is visually distinct. Can't leave the default behavior
      // because that will apply to the content element, which is
      // inside the scrollable container and doesn't include the
      // gutters. We also can't use an 'auto' outline, since those
      // are, for some reason, drawn behind the element content, which
      // will cause things like the active line background to cover
      // the outline (#297).
      outline: "1px dotted #212121"
    },
    display: "flex !important",
    flexDirection: "column"
  },
  ".cm-scroller": {
    display: "flex !important",
    alignItems: "flex-start !important",
    fontFamily: "monospace",
    lineHeight: 1.4,
    height: "100%",
    overflowX: "auto",
    position: "relative",
    zIndex: 0,
    overflowAnchor: "none"
  },
  ".cm-content": {
    margin: 0,
    flexGrow: 2,
    flexShrink: 0,
    display: "block",
    whiteSpace: "pre",
    wordWrap: "normal",
    // https://github.com/codemirror/dev/issues/456
    boxSizing: "border-box",
    minHeight: "100%",
    padding: "4px 0",
    outline: "none",
    "&[contenteditable=true]": {
      WebkitUserModify: "read-write-plaintext-only"
    }
  },
  ".cm-lineWrapping": {
    whiteSpace_fallback: "pre-wrap",
    // For IE
    whiteSpace: "break-spaces",
    wordBreak: "break-word",
    // For Safari, which doesn't support overflow-wrap: anywhere
    overflowWrap: "anywhere",
    flexShrink: 1
  },
  "&light .cm-content": { caretColor: "black" },
  "&dark .cm-content": { caretColor: "white" },
  ".cm-line": {
    display: "block",
    padding: "0 2px 0 6px"
  },
  ".cm-layer": {
    position: "absolute",
    left: 0,
    top: 0,
    contain: "size style",
    "& > *": {
      position: "absolute"
    }
  },
  "&light .cm-selectionBackground": {
    background: "#d9d9d9"
  },
  "&dark .cm-selectionBackground": {
    background: "#222"
  },
  "&light.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": {
    background: "#d7d4f0"
  },
  "&dark.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": {
    background: "#233"
  },
  ".cm-cursorLayer": {
    pointerEvents: "none"
  },
  "&.cm-focused > .cm-scroller > .cm-cursorLayer": {
    animation: "steps(1) cm-blink 1.2s infinite"
  },
  // Two animations defined so that we can switch between them to
  // restart the animation without forcing another style
  // recomputation.
  "@keyframes cm-blink": { "0%": {}, "50%": { opacity: 0 }, "100%": {} },
  "@keyframes cm-blink2": { "0%": {}, "50%": { opacity: 0 }, "100%": {} },
  ".cm-cursor, .cm-dropCursor": {
    borderLeft: "1.2px solid black",
    marginLeft: "-0.6px",
    pointerEvents: "none"
  },
  ".cm-cursor": {
    display: "none"
  },
  "&dark .cm-cursor": {
    borderLeftColor: "#ddd"
  },
  ".cm-dropCursor": {
    position: "absolute"
  },
  "&.cm-focused > .cm-scroller > .cm-cursorLayer .cm-cursor": {
    display: "block"
  },
  ".cm-iso": {
    unicodeBidi: "isolate"
  },
  ".cm-announced": {
    position: "fixed",
    top: "-10000px"
  },
  "@media print": {
    ".cm-announced": { display: "none" }
  },
  "&light .cm-activeLine": { backgroundColor: "#cceeff44" },
  "&dark .cm-activeLine": { backgroundColor: "#99eeff33" },
  "&light .cm-specialChar": { color: "red" },
  "&dark .cm-specialChar": { color: "#f78" },
  ".cm-gutters": {
    flexShrink: 0,
    display: "flex",
    height: "100%",
    boxSizing: "border-box",
    insetInlineStart: 0,
    zIndex: 200
  },
  "&light .cm-gutters": {
    backgroundColor: "#f5f5f5",
    color: "#6c6c6c",
    borderRight: "1px solid #ddd"
  },
  "&dark .cm-gutters": {
    backgroundColor: "#333338",
    color: "#ccc"
  },
  ".cm-gutter": {
    display: "flex !important",
    // Necessary -- prevents margin collapsing
    flexDirection: "column",
    flexShrink: 0,
    boxSizing: "border-box",
    minHeight: "100%",
    overflow: "hidden"
  },
  ".cm-gutterElement": {
    boxSizing: "border-box"
  },
  ".cm-lineNumbers .cm-gutterElement": {
    padding: "0 3px 0 5px",
    minWidth: "20px",
    textAlign: "right",
    whiteSpace: "nowrap"
  },
  "&light .cm-activeLineGutter": {
    backgroundColor: "#e2f2ff"
  },
  "&dark .cm-activeLineGutter": {
    backgroundColor: "#222227"
  },
  ".cm-panels": {
    boxSizing: "border-box",
    position: "sticky",
    left: 0,
    right: 0,
    zIndex: 300
  },
  "&light .cm-panels": {
    backgroundColor: "#f5f5f5",
    color: "black"
  },
  "&light .cm-panels-top": {
    borderBottom: "1px solid #ddd"
  },
  "&light .cm-panels-bottom": {
    borderTop: "1px solid #ddd"
  },
  "&dark .cm-panels": {
    backgroundColor: "#333338",
    color: "white"
  },
  ".cm-dialog": {
    padding: "2px 19px 4px 6px",
    position: "relative",
    "& label": { fontSize: "80%" }
  },
  ".cm-dialog-close": {
    position: "absolute",
    top: "3px",
    right: "4px",
    backgroundColor: "inherit",
    border: "none",
    font: "inherit",
    fontSize: "14px",
    padding: "0"
  },
  ".cm-tab": {
    display: "inline-block",
    overflow: "hidden",
    verticalAlign: "bottom"
  },
  ".cm-widgetBuffer": {
    verticalAlign: "text-top",
    height: "1em",
    width: 0,
    display: "inline"
  },
  ".cm-placeholder": {
    color: "#888",
    display: "inline-block",
    verticalAlign: "top",
    userSelect: "none"
  },
  ".cm-highlightSpace": {
    backgroundImage: "radial-gradient(circle at 50% 55%, #aaa 20%, transparent 5%)",
    backgroundPosition: "center"
  },
  ".cm-highlightTab": {
    backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="20"><path stroke="%23888" stroke-width="1" fill="none" d="M1 10H196L190 5M190 15L196 10M197 4L197 16"/></svg>')`,
    backgroundSize: "auto 100%",
    backgroundPosition: "right 90%",
    backgroundRepeat: "no-repeat"
  },
  ".cm-trailingSpace": {
    backgroundColor: "#ff332255"
  },
  ".cm-button": {
    verticalAlign: "middle",
    color: "inherit",
    fontSize: "70%",
    padding: ".2em 1em",
    borderRadius: "1px"
  },
  "&light .cm-button": {
    backgroundImage: "linear-gradient(#eff1f5, #d9d9df)",
    border: "1px solid #888",
    "&:active": {
      backgroundImage: "linear-gradient(#b4b4b4, #d0d3d6)"
    }
  },
  "&dark .cm-button": {
    backgroundImage: "linear-gradient(#393939, #111)",
    border: "1px solid #888",
    "&:active": {
      backgroundImage: "linear-gradient(#111, #333)"
    }
  },
  ".cm-textfield": {
    verticalAlign: "middle",
    color: "inherit",
    fontSize: "70%",
    border: "1px solid silver",
    padding: ".2em .5em"
  },
  "&light .cm-textfield": {
    backgroundColor: "white"
  },
  "&dark .cm-textfield": {
    border: "1px solid #555",
    backgroundColor: "inherit"
  }
}, Gd), Zy = {
  childList: !0,
  characterData: !0,
  subtree: !0,
  attributes: !0,
  characterDataOldValue: !0
}, pl = O.ie && O.ie_version <= 11;
class eb {
  constructor(e) {
    this.view = e, this.active = !1, this.editContext = null, this.selectionRange = new I0(), this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = e.contentDOM, this.observer = new MutationObserver((t) => {
      for (let i of t)
        this.queue.push(i);
      (O.ie && O.ie_version <= 11 || O.ios && e.composing) && t.some((i) => i.type == "childList" && i.removedNodes.length || i.type == "characterData" && i.oldValue.length > i.target.nodeValue.length) ? this.flushSoon() : this.flush();
    }), window.EditContext && e.constructor.EDIT_CONTEXT !== !1 && // Chrome <126 doesn't support inverted selections in edit context (#1392)
    !(O.chrome && O.chrome_version < 126) && (this.editContext = new ib(e), e.state.facet(mi) && (e.contentDOM.editContext = this.editContext.editContext)), pl && (this.onCharData = (t) => {
      this.queue.push({
        target: t.target,
        type: "characterData",
        oldValue: t.prevValue
      }), this.flushSoon();
    }), this.onSelectionChange = this.onSelectionChange.bind(this), this.onResize = this.onResize.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), window.matchMedia && (this.printQuery = window.matchMedia("print")), typeof ResizeObserver == "function" && (this.resizeScroll = new ResizeObserver(() => {
      var t;
      ((t = this.view.docView) === null || t === void 0 ? void 0 : t.lastUpdate) < Date.now() - 75 && this.onResize();
    }), this.resizeScroll.observe(e.scrollDOM)), this.addWindowListeners(this.win = e.win), this.start(), typeof IntersectionObserver == "function" && (this.intersection = new IntersectionObserver((t) => {
      this.parentCheck < 0 && (this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1e3)), t.length > 0 && t[t.length - 1].intersectionRatio > 0 != this.intersecting && (this.intersecting = !this.intersecting, this.intersecting != this.view.inView && this.onScrollChanged(document.createEvent("Event")));
    }, { threshold: [0, 1e-3] }), this.intersection.observe(this.dom), this.gapIntersection = new IntersectionObserver((t) => {
      t.length > 0 && t[t.length - 1].intersectionRatio > 0 && this.onScrollChanged(document.createEvent("Event"));
    }, {})), this.listenForScroll(), this.readSelectionRange();
  }
  onScrollChanged(e) {
    this.view.inputState.runHandlers("scroll", e), this.intersecting && this.view.measure();
  }
  onScroll(e) {
    this.intersecting && this.flush(!1), this.editContext && this.view.requestMeasure(this.editContext.measureReq), this.onScrollChanged(e);
  }
  onResize() {
    this.resizeTimeout < 0 && (this.resizeTimeout = setTimeout(() => {
      this.resizeTimeout = -1, this.view.requestMeasure();
    }, 50));
  }
  onPrint(e) {
    (e.type == "change" || !e.type) && !e.matches || (this.view.viewState.printing = !0, this.view.measure(), setTimeout(() => {
      this.view.viewState.printing = !1, this.view.requestMeasure();
    }, 500));
  }
  updateGaps(e) {
    if (this.gapIntersection && (e.length != this.gaps.length || this.gaps.some((t, i) => t != e[i]))) {
      this.gapIntersection.disconnect();
      for (let t of e)
        this.gapIntersection.observe(t);
      this.gaps = e;
    }
  }
  onSelectionChange(e) {
    let t = this.selectionChanged;
    if (!this.readSelectionRange() || this.delayedAndroidKey)
      return;
    let { view: i } = this, s = this.selectionRange;
    if (i.state.facet(mi) ? i.root.activeElement != this.dom : !Nr(this.dom, s))
      return;
    let r = s.anchorNode && i.docView.nearest(s.anchorNode);
    if (r && r.ignoreEvent(e)) {
      t || (this.selectionChanged = !1);
      return;
    }
    (O.ie && O.ie_version <= 11 || O.android && O.chrome) && !i.state.selection.main.empty && // (Selection.isCollapsed isn't reliable on IE)
    s.focusNode && bs(s.focusNode, s.focusOffset, s.anchorNode, s.anchorOffset) ? this.flushSoon() : this.flush(!1);
  }
  readSelectionRange() {
    let { view: e } = this, t = Ts(e.root);
    if (!t)
      return !1;
    let i = O.safari && e.root.nodeType == 11 && e.root.activeElement == this.dom && tb(this.view, t) || t;
    if (!i || this.selectionRange.eq(i))
      return !1;
    let s = Nr(this.dom, i);
    return s && !this.selectionChanged && e.inputState.lastFocusTime > Date.now() - 200 && e.inputState.lastTouchTime < Date.now() - 300 && N0(this.dom, i) ? (this.view.inputState.lastFocusTime = 0, e.docView.updateSelection(), !1) : (this.selectionRange.setRange(i), s && (this.selectionChanged = !0), !0);
  }
  setSelectionRange(e, t) {
    this.selectionRange.set(e.node, e.offset, t.node, t.offset), this.selectionChanged = !1;
  }
  clearSelectionRange() {
    this.selectionRange.set(null, 0, null, 0);
  }
  listenForScroll() {
    this.parentCheck = -1;
    let e = 0, t = null;
    for (let i = this.dom; i; )
      if (i.nodeType == 1)
        !t && e < this.scrollTargets.length && this.scrollTargets[e] == i ? e++ : t || (t = this.scrollTargets.slice(0, e)), t && t.push(i), i = i.assignedSlot || i.parentNode;
      else if (i.nodeType == 11)
        i = i.host;
      else
        break;
    if (e < this.scrollTargets.length && !t && (t = this.scrollTargets.slice(0, e)), t) {
      for (let i of this.scrollTargets)
        i.removeEventListener("scroll", this.onScroll);
      for (let i of this.scrollTargets = t)
        i.addEventListener("scroll", this.onScroll);
    }
  }
  ignore(e) {
    if (!this.active)
      return e();
    try {
      return this.stop(), e();
    } finally {
      this.start(), this.clear();
    }
  }
  start() {
    this.active || (this.observer.observe(this.dom, Zy), pl && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0);
  }
  stop() {
    this.active && (this.active = !1, this.observer.disconnect(), pl && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData));
  }
  // Throw away any pending changes
  clear() {
    this.processRecords(), this.queue.length = 0, this.selectionChanged = !1;
  }
  // Chrome Android, especially in combination with GBoard, not only
  // doesn't reliably fire regular key events, but also often
  // surrounds the effect of enter or backspace with a bunch of
  // composition events that, when interrupted, cause text duplication
  // or other kinds of corruption. This hack makes the editor back off
  // from handling DOM changes for a moment when such a key is
  // detected (via beforeinput or keydown), and then tries to flush
  // them or, if that has no effect, dispatches the given key.
  delayAndroidKey(e, t) {
    var i;
    if (!this.delayedAndroidKey) {
      let s = () => {
        let r = this.delayedAndroidKey;
        r && (this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = r.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && r.force && En(this.dom, r.key, r.keyCode));
      };
      this.flushingAndroidKey = this.view.win.requestAnimationFrame(s);
    }
    (!this.delayedAndroidKey || e == "Enter") && (this.delayedAndroidKey = {
      key: e,
      keyCode: t,
      // Only run the key handler when no changes are detected if
      // this isn't coming right after another change, in which case
      // it is probably part of a weird chain of updates, and should
      // be ignored if it returns the DOM to its previous state.
      force: this.lastChange < Date.now() - 50 || !!(!((i = this.delayedAndroidKey) === null || i === void 0) && i.force)
    });
  }
  clearDelayedAndroidKey() {
    this.win.cancelAnimationFrame(this.flushingAndroidKey), this.delayedAndroidKey = null, this.flushingAndroidKey = -1;
  }
  flushSoon() {
    this.delayedFlush < 0 && (this.delayedFlush = this.view.win.requestAnimationFrame(() => {
      this.delayedFlush = -1, this.flush();
    }));
  }
  forceFlush() {
    this.delayedFlush >= 0 && (this.view.win.cancelAnimationFrame(this.delayedFlush), this.delayedFlush = -1), this.flush();
  }
  pendingRecords() {
    for (let e of this.observer.takeRecords())
      this.queue.push(e);
    return this.queue;
  }
  processRecords() {
    let e = this.pendingRecords();
    e.length && (this.queue = []);
    let t = -1, i = -1, s = !1;
    for (let r of e) {
      let o = this.readMutation(r);
      o && (o.typeOver && (s = !0), t == -1 ? { from: t, to: i } = o : (t = Math.min(o.from, t), i = Math.max(o.to, i)));
    }
    return { from: t, to: i, typeOver: s };
  }
  readChange() {
    let { from: e, to: t, typeOver: i } = this.processRecords(), s = this.selectionChanged && Nr(this.dom, this.selectionRange);
    if (e < 0 && !s)
      return null;
    e > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1;
    let r = new by(this.view, e, t, i);
    return this.view.docView.domChanged = { newSel: r.newSel ? r.newSel.main : null }, r;
  }
  // Apply pending changes, if any
  flush(e = !0) {
    if (this.delayedFlush >= 0 || this.delayedAndroidKey)
      return !1;
    e && this.readSelectionRange();
    let t = this.readChange();
    if (!t)
      return this.view.requestMeasure(), !1;
    let i = this.view.state, s = Bd(this.view, t);
    return this.view.state == i && (t.domChanged || t.newSel && !t.newSel.main.eq(this.view.state.selection.main)) && this.view.update([]), s;
  }
  readMutation(e) {
    let t = this.view.docView.nearest(e.target);
    if (!t || t.ignoreMutation(e))
      return null;
    if (t.markDirty(e.type == "attributes"), e.type == "attributes" && (t.flags |= 4), e.type == "childList") {
      let i = Uc(t, e.previousSibling || e.target.previousSibling, -1), s = Uc(t, e.nextSibling || e.target.nextSibling, 1);
      return {
        from: i ? t.posAfter(i) : t.posAtStart,
        to: s ? t.posBefore(s) : t.posAtEnd,
        typeOver: !1
      };
    } else return e.type == "characterData" ? { from: t.posAtStart, to: t.posAtEnd, typeOver: e.target.nodeValue == e.oldValue } : null;
  }
  setWindow(e) {
    e != this.win && (this.removeWindowListeners(this.win), this.win = e, this.addWindowListeners(this.win));
  }
  addWindowListeners(e) {
    e.addEventListener("resize", this.onResize), this.printQuery ? this.printQuery.addEventListener ? this.printQuery.addEventListener("change", this.onPrint) : this.printQuery.addListener(this.onPrint) : e.addEventListener("beforeprint", this.onPrint), e.addEventListener("scroll", this.onScroll), e.document.addEventListener("selectionchange", this.onSelectionChange);
  }
  removeWindowListeners(e) {
    e.removeEventListener("scroll", this.onScroll), e.removeEventListener("resize", this.onResize), this.printQuery ? this.printQuery.removeEventListener ? this.printQuery.removeEventListener("change", this.onPrint) : this.printQuery.removeListener(this.onPrint) : e.removeEventListener("beforeprint", this.onPrint), e.document.removeEventListener("selectionchange", this.onSelectionChange);
  }
  update(e) {
    this.editContext && (this.editContext.update(e), e.startState.facet(mi) != e.state.facet(mi) && (e.view.contentDOM.editContext = e.state.facet(mi) ? this.editContext.editContext : null));
  }
  destroy() {
    var e, t, i;
    this.stop(), (e = this.intersection) === null || e === void 0 || e.disconnect(), (t = this.gapIntersection) === null || t === void 0 || t.disconnect(), (i = this.resizeScroll) === null || i === void 0 || i.disconnect();
    for (let s of this.scrollTargets)
      s.removeEventListener("scroll", this.onScroll);
    this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy());
  }
}
function Uc(n, e, t) {
  for (; e; ) {
    let i = ae.get(e);
    if (i && i.parent == n)
      return i;
    let s = e.parentNode;
    e = s != n.dom ? s : t > 0 ? e.nextSibling : e.previousSibling;
  }
  return null;
}
function qc(n, e) {
  let t = e.startContainer, i = e.startOffset, s = e.endContainer, r = e.endOffset, o = n.docView.domAtPos(n.state.selection.main.anchor);
  return bs(o.node, o.offset, s, r) && ([t, i, s, r] = [s, r, t, i]), { anchorNode: t, anchorOffset: i, focusNode: s, focusOffset: r };
}
function tb(n, e) {
  if (e.getComposedRanges) {
    let s = e.getComposedRanges(n.root)[0];
    if (s)
      return qc(n, s);
  }
  let t = null;
  function i(s) {
    s.preventDefault(), s.stopImmediatePropagation(), t = s.getTargetRanges()[0];
  }
  return n.contentDOM.addEventListener("beforeinput", i, !0), n.dom.ownerDocument.execCommand("indent"), n.contentDOM.removeEventListener("beforeinput", i, !0), t ? qc(n, t) : null;
}
class ib {
  constructor(e) {
    this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = /* @__PURE__ */ Object.create(null), this.composing = null, this.resetRange(e.state);
    let t = this.editContext = new window.EditContext({
      text: e.state.doc.sliceString(this.from, this.to),
      selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, e.state.selection.main.anchor))),
      selectionEnd: this.toContextPos(e.state.selection.main.head)
    });
    this.handlers.textupdate = (i) => {
      let s = e.state.selection.main, { anchor: r, head: o } = s, l = this.toEditorPos(i.updateRangeStart), a = this.toEditorPos(i.updateRangeEnd);
      e.inputState.composing >= 0 && !this.composing && (this.composing = { contextBase: i.updateRangeStart, editorBase: l, drifted: !1 });
      let h = { from: l, to: a, insert: Z.of(i.text.split(`
`)) };
      if (h.from == this.from && r < this.from ? h.from = r : h.to == this.to && r > this.to && (h.to = r), h.from == h.to && !h.insert.length) {
        let c = S.single(this.toEditorPos(i.selectionStart), this.toEditorPos(i.selectionEnd));
        c.main.eq(s) || e.dispatch({ selection: c, userEvent: "select" });
        return;
      }
      if ((O.mac || O.android) && h.from == o - 1 && /^\. ?$/.test(i.text) && e.contentDOM.getAttribute("autocorrect") == "off" && (h = { from: l, to: a, insert: Z.of([i.text.replace(".", " ")]) }), this.pendingContextChange = h, !e.state.readOnly) {
        let c = this.to - this.from + (h.to - h.from + h.insert.length);
        Ja(e, h, S.single(this.toEditorPos(i.selectionStart, c), this.toEditorPos(i.selectionEnd, c)));
      }
      this.pendingContextChange && (this.revertPending(e.state), this.setSelection(e.state));
    }, this.handlers.characterboundsupdate = (i) => {
      let s = [], r = null;
      for (let o = this.toEditorPos(i.rangeStart), l = this.toEditorPos(i.rangeEnd); o < l; o++) {
        let a = e.coordsForChar(o);
        r = a && new DOMRect(a.left, a.top, a.right - a.left, a.bottom - a.top) || r || new DOMRect(), s.push(r);
      }
      t.updateCharacterBounds(i.rangeStart, s);
    }, this.handlers.textformatupdate = (i) => {
      let s = [];
      for (let r of i.getTextFormats()) {
        let o = r.underlineStyle, l = r.underlineThickness;
        if (o != "None" && l != "None") {
          let a = this.toEditorPos(r.rangeStart), h = this.toEditorPos(r.rangeEnd);
          if (a < h) {
            let c = `text-decoration: underline ${o == "Dashed" ? "dashed " : o == "Squiggle" ? "wavy " : ""}${l == "Thin" ? 1 : 2}px`;
            s.push(F.mark({ attributes: { style: c } }).range(a, h));
          }
        }
      }
      e.dispatch({ effects: Dd.of(F.set(s)) });
    }, this.handlers.compositionstart = () => {
      e.inputState.composing < 0 && (e.inputState.composing = 0, e.inputState.compositionFirstChange = !0);
    }, this.handlers.compositionend = () => {
      if (e.inputState.composing = -1, e.inputState.compositionFirstChange = null, this.composing) {
        let { drifted: i } = this.composing;
        this.composing = null, i && this.reset(e.state);
      }
    };
    for (let i in this.handlers)
      t.addEventListener(i, this.handlers[i]);
    this.measureReq = { read: (i) => {
      this.editContext.updateControlBounds(i.contentDOM.getBoundingClientRect());
      let s = Ts(i.root);
      s && s.rangeCount && this.editContext.updateSelectionBounds(s.getRangeAt(0).getBoundingClientRect());
    } };
  }
  applyEdits(e) {
    let t = 0, i = !1, s = this.pendingContextChange;
    return e.changes.iterChanges((r, o, l, a, h) => {
      if (i)
        return;
      let c = h.length - (o - r);
      if (s && o >= s.to)
        if (s.from == r && s.to == o && s.insert.eq(h)) {
          s = this.pendingContextChange = null, t += c, this.to += c;
          return;
        } else
          s = null, this.revertPending(e.state);
      if (r += t, o += t, o <= this.from)
        this.from += c, this.to += c;
      else if (r < this.to) {
        if (r < this.from || o > this.to || this.to - this.from + h.length > 3e4) {
          i = !0;
          return;
        }
        this.editContext.updateText(this.toContextPos(r), this.toContextPos(o), h.toString()), this.to += c;
      }
      t += c;
    }), s && !i && this.revertPending(e.state), !i;
  }
  update(e) {
    let t = this.pendingContextChange, i = e.startState.selection.main;
    this.composing && (this.composing.drifted || !e.changes.touchesRange(i.from, i.to) && e.transactions.some((s) => !s.isUserEvent("input.type") && s.changes.touchesRange(this.from, this.to))) ? (this.composing.drifted = !0, this.composing.editorBase = e.changes.mapPos(this.composing.editorBase)) : !this.applyEdits(e) || !this.rangeIsValid(e.state) ? (this.pendingContextChange = null, this.reset(e.state)) : (e.docChanged || e.selectionSet || t) && this.setSelection(e.state), (e.geometryChanged || e.docChanged || e.selectionSet) && e.view.requestMeasure(this.measureReq);
  }
  resetRange(e) {
    let { head: t } = e.selection.main;
    this.from = Math.max(
      0,
      t - 1e4
      /* CxVp.Margin */
    ), this.to = Math.min(
      e.doc.length,
      t + 1e4
      /* CxVp.Margin */
    );
  }
  reset(e) {
    this.resetRange(e), this.editContext.updateText(0, this.editContext.text.length, e.doc.sliceString(this.from, this.to)), this.setSelection(e);
  }
  revertPending(e) {
    let t = this.pendingContextChange;
    this.pendingContextChange = null, this.editContext.updateText(this.toContextPos(t.from), this.toContextPos(t.from + t.insert.length), e.doc.sliceString(t.from, t.to));
  }
  setSelection(e) {
    let { main: t } = e.selection, i = this.toContextPos(Math.max(this.from, Math.min(this.to, t.anchor))), s = this.toContextPos(t.head);
    (this.editContext.selectionStart != i || this.editContext.selectionEnd != s) && this.editContext.updateSelection(i, s);
  }
  rangeIsValid(e) {
    let { head: t } = e.selection.main;
    return !(this.from > 0 && t - this.from < 500 || this.to < e.doc.length && this.to - t < 500 || this.to - this.from > 1e4 * 3);
  }
  toEditorPos(e, t = this.to - this.from) {
    e = Math.min(e, t);
    let i = this.composing;
    return i && i.drifted ? i.editorBase + (e - i.contextBase) : e + this.from;
  }
  toContextPos(e) {
    let t = this.composing;
    return t && t.drifted ? t.contextBase + (e - t.editorBase) : e - this.from;
  }
  destroy() {
    for (let e in this.handlers)
      this.editContext.removeEventListener(e, this.handlers[e]);
  }
}
class _ {
  /**
  The current editor state.
  */
  get state() {
    return this.viewState.state;
  }
  /**
  To be able to display large documents without consuming too much
  memory or overloading the browser, CodeMirror only draws the
  code that is visible (plus a margin around it) to the DOM. This
  property tells you the extent of the current drawn viewport, in
  document positions.
  */
  get viewport() {
    return this.viewState.viewport;
  }
  /**
  When there are, for example, large collapsed ranges in the
  viewport, its size can be a lot bigger than the actual visible
  content. Thus, if you are doing something like styling the
  content in the viewport, it is preferable to only do so for
  these ranges, which are the subset of the viewport that is
  actually drawn.
  */
  get visibleRanges() {
    return this.viewState.visibleRanges;
  }
  /**
  Returns false when the editor is entirely scrolled out of view
  or otherwise hidden.
  */
  get inView() {
    return this.viewState.inView;
  }
  /**
  Indicates whether the user is currently composing text via
  [IME](https://en.wikipedia.org/wiki/Input_method), and at least
  one change has been made in the current composition.
  */
  get composing() {
    return !!this.inputState && this.inputState.composing > 0;
  }
  /**
  Indicates whether the user is currently in composing state. Note
  that on some platforms, like Android, this will be the case a
  lot, since just putting the cursor on a word starts a
  composition there.
  */
  get compositionStarted() {
    return !!this.inputState && this.inputState.composing >= 0;
  }
  /**
  The document or shadow root that the view lives in.
  */
  get root() {
    return this._root;
  }
  /**
  @internal
  */
  get win() {
    return this.dom.ownerDocument.defaultView || window;
  }
  /**
  Construct a new view. You'll want to either provide a `parent`
  option, or put `view.dom` into your document after creating a
  view, so that the user can see the editor.
  */
  constructor(e = {}) {
    var t;
    this.plugins = [], this.pluginMap = /* @__PURE__ */ new Map(), this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = !1, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.className = "cm-announced", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), e.parent && e.parent.appendChild(this.dom);
    let { dispatch: i } = e;
    this.dispatchTransactions = e.dispatchTransactions || i && ((s) => s.forEach((r) => i(r, this))) || ((s) => this.update(s)), this.dispatch = this.dispatch.bind(this), this._root = e.root || B0(e.parent) || document, this.viewState = new zc(e.state || J.create(e)), e.scrollTo && e.scrollTo.is(dr) && (this.viewState.scrollTarget = e.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(kn).map((s) => new cl(s));
    for (let s of this.plugins)
      s.update(this);
    this.observer = new eb(this), this.inputState = new ky(this), this.inputState.ensureHandlers(this.plugins), this.docView = new kc(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), !((t = document.fonts) === null || t === void 0) && t.ready && document.fonts.ready.then(() => this.requestMeasure());
  }
  dispatch(...e) {
    let t = e.length == 1 && e[0] instanceof Me ? e : e.length == 1 && Array.isArray(e[0]) ? e[0] : [this.state.update(...e)];
    this.dispatchTransactions(t, this);
  }
  /**
  Update the view for the given array of transactions. This will
  update the visible document and selection to match the state
  produced by the transactions, and notify view plugins of the
  change. You should usually call
  [`dispatch`](https://codemirror.net/6/docs/ref/#view.EditorView.dispatch) instead, which uses this
  as a primitive.
  */
  update(e) {
    if (this.updateState != 0)
      throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
    let t = !1, i = !1, s, r = this.state;
    for (let u of e) {
      if (u.startState != r)
        throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
      r = u.state;
    }
    if (this.destroyed) {
      this.viewState.state = r;
      return;
    }
    let o = this.hasFocus, l = 0, a = null;
    e.some((u) => u.annotation(zd)) ? (this.inputState.notifiedFocused = o, l = 1) : o != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = o, a = $d(r, o), a || (l = 1));
    let h = this.observer.delayedAndroidKey, c = null;
    if (h ? (this.observer.clearDelayedAndroidKey(), c = this.observer.readChange(), (c && !this.state.doc.eq(r.doc) || !this.state.selection.eq(r.selection)) && (c = null)) : this.observer.clear(), r.facet(J.phrases) != this.state.facet(J.phrases))
      return this.setState(r);
    s = ro.create(this, r, e), s.flags |= l;
    let f = this.viewState.scrollTarget;
    try {
      this.updateState = 2;
      for (let u of e) {
        if (f && (f = f.map(u.changes)), u.scrollIntoView) {
          let { main: d } = u.state.selection;
          f = new Dn(d.empty ? d : S.cursor(d.head, d.head > d.anchor ? -1 : 1));
        }
        for (let d of u.effects)
          d.is(dr) && (f = d.value.clip(this.state));
      }
      this.viewState.update(s, f), this.bidiCache = lo.update(this.bidiCache, s.changes), s.empty || (this.updatePlugins(s), this.inputState.update(s)), t = this.docView.update(s), this.state.facet(cs) != this.styleModules && this.mountStyles(), i = this.updateAttrs(), this.showAnnouncements(e), this.docView.updateSelection(t, e.some((u) => u.isUserEvent("select.pointer")));
    } finally {
      this.updateState = 0;
    }
    if (s.startState.facet(vr) != s.state.facet(vr) && (this.viewState.mustMeasureContent = !0), (t || i || f || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), t && this.docViewUpdate(), !s.empty)
      for (let u of this.state.facet(ha))
        try {
          u(s);
        } catch (d) {
          ht(this.state, d, "update listener");
        }
    (a || c) && Promise.resolve().then(() => {
      a && this.state == a.startState && this.dispatch(a), c && !Bd(this, c) && h.force && En(this.contentDOM, h.key, h.keyCode);
    });
  }
  /**
  Reset the view to the given state. (This will cause the entire
  document to be redrawn and all view plugins to be reinitialized,
  so you should probably only use it when the new state isn't
  derived from the old state. Otherwise, use
  [`dispatch`](https://codemirror.net/6/docs/ref/#view.EditorView.dispatch) instead.)
  */
  setState(e) {
    if (this.updateState != 0)
      throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
    if (this.destroyed) {
      this.viewState.state = e;
      return;
    }
    this.updateState = 2;
    let t = this.hasFocus;
    try {
      for (let i of this.plugins)
        i.destroy(this);
      this.viewState = new zc(e), this.plugins = e.facet(kn).map((i) => new cl(i)), this.pluginMap.clear();
      for (let i of this.plugins)
        i.update(this);
      this.docView.destroy(), this.docView = new kc(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = [];
    } finally {
      this.updateState = 0;
    }
    t && this.focus(), this.requestMeasure();
  }
  updatePlugins(e) {
    let t = e.startState.facet(kn), i = e.state.facet(kn);
    if (t != i) {
      let s = [];
      for (let r of i) {
        let o = t.indexOf(r);
        if (o < 0)
          s.push(new cl(r));
        else {
          let l = this.plugins[o];
          l.mustUpdate = e, s.push(l);
        }
      }
      for (let r of this.plugins)
        r.mustUpdate != e && r.destroy(this);
      this.plugins = s, this.pluginMap.clear();
    } else
      for (let s of this.plugins)
        s.mustUpdate = e;
    for (let s = 0; s < this.plugins.length; s++)
      this.plugins[s].update(this);
    t != i && this.inputState.ensureHandlers(this.plugins);
  }
  docViewUpdate() {
    for (let e of this.plugins) {
      let t = e.value;
      if (t && t.docViewUpdate)
        try {
          t.docViewUpdate(this);
        } catch (i) {
          ht(this.state, i, "doc view update listener");
        }
    }
  }
  /**
  @internal
  */
  measure(e = !0) {
    if (this.destroyed)
      return;
    if (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.observer.delayedAndroidKey) {
      this.measureScheduled = -1, this.requestMeasure();
      return;
    }
    this.measureScheduled = 0, e && this.observer.forceFlush();
    let t = null, i = this.scrollDOM, s = i.scrollTop * this.scaleY, { scrollAnchorPos: r, scrollAnchorHeight: o } = this.viewState;
    Math.abs(s - this.viewState.scrollTop) > 1 && (o = -1), this.viewState.scrollAnchorHeight = -1;
    try {
      for (let l = 0; ; l++) {
        if (o < 0)
          if (nd(i))
            r = -1, o = this.viewState.heightMap.height;
          else {
            let d = this.viewState.scrollAnchorAt(s);
            r = d.from, o = d.top;
          }
        this.updateState = 1;
        let a = this.viewState.measure(this);
        if (!a && !this.measureRequests.length && this.viewState.scrollTarget == null)
          break;
        if (l > 5) {
          console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
          break;
        }
        let h = [];
        a & 4 || ([this.measureRequests, h] = [h, this.measureRequests]);
        let c = h.map((d) => {
          try {
            return d.read(this);
          } catch (p) {
            return ht(this.state, p), jc;
          }
        }), f = ro.create(this, this.state, []), u = !1;
        f.flags |= a, t ? t.flags |= a : t = f, this.updateState = 2, f.empty || (this.updatePlugins(f), this.inputState.update(f), this.updateAttrs(), u = this.docView.update(f), u && this.docViewUpdate());
        for (let d = 0; d < h.length; d++)
          if (c[d] != jc)
            try {
              let p = h[d];
              p.write && p.write(c[d], this);
            } catch (p) {
              ht(this.state, p);
            }
        if (u && this.docView.updateSelection(!0), !f.viewportChanged && this.measureRequests.length == 0) {
          if (this.viewState.editorHeight)
            if (this.viewState.scrollTarget) {
              this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, o = -1;
              continue;
            } else {
              let p = (r < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(r).top) - o;
              if (p > 1 || p < -1) {
                s = s + p, i.scrollTop = s / this.scaleY, o = -1;
                continue;
              }
            }
          break;
        }
      }
    } finally {
      this.updateState = 0, this.measureScheduled = -1;
    }
    if (t && !t.empty)
      for (let l of this.state.facet(ha))
        l(t);
  }
  /**
  Get the CSS classes for the currently active editor themes.
  */
  get themeClasses() {
    return pa + " " + (this.state.facet(da) ? Kd : jd) + " " + this.state.facet(vr);
  }
  updateAttrs() {
    let e = Kc(this, Od, {
      class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
    }), t = {
      spellcheck: "false",
      autocorrect: "off",
      autocapitalize: "off",
      writingsuggestions: "false",
      translate: "no",
      contenteditable: this.state.facet(mi) ? "true" : "false",
      class: "cm-content",
      style: `${O.tabSize}: ${this.state.tabSize}`,
      role: "textbox",
      "aria-multiline": "true"
    };
    this.state.readOnly && (t["aria-readonly"] = "true"), Kc(this, Ga, t);
    let i = this.observer.ignore(() => {
      let s = sa(this.contentDOM, this.contentAttrs, t), r = sa(this.dom, this.editorAttrs, e);
      return s || r;
    });
    return this.editorAttrs = e, this.contentAttrs = t, i;
  }
  showAnnouncements(e) {
    let t = !0;
    for (let i of e)
      for (let s of i.effects)
        if (s.is(_.announce)) {
          t && (this.announceDOM.textContent = ""), t = !1;
          let r = this.announceDOM.appendChild(document.createElement("div"));
          r.textContent = s.value;
        }
  }
  mountStyles() {
    this.styleModules = this.state.facet(cs);
    let e = this.state.facet(_.cspNonce);
    Vi.mount(this.root, this.styleModules.concat(Qy).reverse(), e ? { nonce: e } : void 0);
  }
  readMeasured() {
    if (this.updateState == 2)
      throw new Error("Reading the editor layout isn't allowed during an update");
    this.updateState == 0 && this.measureScheduled > -1 && this.measure(!1);
  }
  /**
  Schedule a layout measurement, optionally providing callbacks to
  do custom DOM measuring followed by a DOM write phase. Using
  this is preferable reading DOM layout directly from, for
  example, an event handler, because it'll make sure measuring and
  drawing done by other components is synchronized, avoiding
  unnecessary DOM layout computations.
  */
  requestMeasure(e) {
    if (this.measureScheduled < 0 && (this.measureScheduled = this.win.requestAnimationFrame(() => this.measure())), e) {
      if (this.measureRequests.indexOf(e) > -1)
        return;
      if (e.key != null) {
        for (let t = 0; t < this.measureRequests.length; t++)
          if (this.measureRequests[t].key === e.key) {
            this.measureRequests[t] = e;
            return;
          }
      }
      this.measureRequests.push(e);
    }
  }
  /**
  Get the value of a specific plugin, if present. Note that
  plugins that crash can be dropped from a view, so even when you
  know you registered a given plugin, it is recommended to check
  the return value of this method.
  */
  plugin(e) {
    let t = this.pluginMap.get(e);
    return (t === void 0 || t && t.plugin != e) && this.pluginMap.set(e, t = this.plugins.find((i) => i.plugin == e) || null), t && t.update(this).value;
  }
  /**
  The top position of the document, in screen coordinates. This
  may be negative when the editor is scrolled down. Points
  directly to the top of the first line, not above the padding.
  */
  get documentTop() {
    return this.contentDOM.getBoundingClientRect().top + this.viewState.paddingTop;
  }
  /**
  Reports the padding above and below the document.
  */
  get documentPadding() {
    return { top: this.viewState.paddingTop, bottom: this.viewState.paddingBottom };
  }
  /**
  If the editor is transformed with CSS, this provides the scale
  along the X axis. Otherwise, it will just be 1. Note that
  transforms other than translation and scaling are not supported.
  */
  get scaleX() {
    return this.viewState.scaleX;
  }
  /**
  Provide the CSS transformed scale along the Y axis.
  */
  get scaleY() {
    return this.viewState.scaleY;
  }
  /**
  Find the text line or block widget at the given vertical
  position (which is interpreted as relative to the [top of the
  document](https://codemirror.net/6/docs/ref/#view.EditorView.documentTop)).
  */
  elementAtHeight(e) {
    return this.readMeasured(), this.viewState.elementAtHeight(e);
  }
  /**
  Find the line block (see
  [`lineBlockAt`](https://codemirror.net/6/docs/ref/#view.EditorView.lineBlockAt) at the given
  height, again interpreted relative to the [top of the
  document](https://codemirror.net/6/docs/ref/#view.EditorView.documentTop).
  */
  lineBlockAtHeight(e) {
    return this.readMeasured(), this.viewState.lineBlockAtHeight(e);
  }
  /**
  Get the extent and vertical position of all [line
  blocks](https://codemirror.net/6/docs/ref/#view.EditorView.lineBlockAt) in the viewport. Positions
  are relative to the [top of the
  document](https://codemirror.net/6/docs/ref/#view.EditorView.documentTop);
  */
  get viewportLineBlocks() {
    return this.viewState.viewportLines;
  }
  /**
  Find the line block around the given document position. A line
  block is a range delimited on both sides by either a
  non-[hidden](https://codemirror.net/6/docs/ref/#view.Decoration^replace) line break, or the
  start/end of the document. It will usually just hold a line of
  text, but may be broken into multiple textblocks by block
  widgets.
  */
  lineBlockAt(e) {
    return this.viewState.lineBlockAt(e);
  }
  /**
  The editor's total content height.
  */
  get contentHeight() {
    return this.viewState.contentHeight;
  }
  /**
  Move a cursor position by [grapheme
  cluster](https://codemirror.net/6/docs/ref/#state.findClusterBreak). `forward` determines whether
  the motion is away from the line start, or towards it. In
  bidirectional text, the line is traversed in visual order, using
  the editor's [text direction](https://codemirror.net/6/docs/ref/#view.EditorView.textDirection).
  When the start position was the last one on the line, the
  returned position will be across the line break. If there is no
  further line, the original position is returned.
  
  By default, this method moves over a single cluster. The
  optional `by` argument can be used to move across more. It will
  be called with the first cluster as argument, and should return
  a predicate that determines, for each subsequent cluster,
  whether it should also be moved over.
  */
  moveByChar(e, t, i) {
    return ul(this, e, Ec(this, e, t, i));
  }
  /**
  Move a cursor position across the next group of either
  [letters](https://codemirror.net/6/docs/ref/#state.EditorState.charCategorizer) or non-letter
  non-whitespace characters.
  */
  moveByGroup(e, t) {
    return ul(this, e, Ec(this, e, t, (i) => py(this, e.head, i)));
  }
  /**
  Get the cursor position visually at the start or end of a line.
  Note that this may differ from the _logical_ position at its
  start or end (which is simply at `line.from`/`line.to`) if text
  at the start or end goes against the line's base text direction.
  */
  visualLineSide(e, t) {
    let i = this.bidiSpans(e), s = this.textDirectionAt(e.from), r = i[t ? i.length - 1 : 0];
    return S.cursor(r.side(t, s) + e.from, r.forward(!t, s) ? 1 : -1);
  }
  /**
  Move to the next line boundary in the given direction. If
  `includeWrap` is true, line wrapping is on, and there is a
  further wrap point on the current line, the wrap point will be
  returned. Otherwise this function will return the start or end
  of the line.
  */
  moveToLineBoundary(e, t, i = !0) {
    return dy(this, e, t, i);
  }
  /**
  Move a cursor position vertically. When `distance` isn't given,
  it defaults to moving to the next line (including wrapped
  lines). Otherwise, `distance` should provide a positive distance
  in pixels.
  
  When `start` has a
  [`goalColumn`](https://codemirror.net/6/docs/ref/#state.SelectionRange.goalColumn), the vertical
  motion will use that as a target horizontal position. Otherwise,
  the cursor's own horizontal position is used. The returned
  cursor will have its goal column set to whichever column was
  used.
  */
  moveVertically(e, t, i) {
    return ul(this, e, my(this, e, t, i));
  }
  /**
  Find the DOM parent node and offset (child offset if `node` is
  an element, character offset when it is a text node) at the
  given document position.
  
  Note that for positions that aren't currently in
  `visibleRanges`, the resulting DOM position isn't necessarily
  meaningful (it may just point before or after a placeholder
  element).
  */
  domAtPos(e) {
    return this.docView.domAtPos(e);
  }
  /**
  Find the document position at the given DOM node. Can be useful
  for associating positions with DOM events. Will raise an error
  when `node` isn't part of the editor content.
  */
  posAtDOM(e, t = 0) {
    return this.docView.posFromDOM(e, t);
  }
  posAtCoords(e, t = !0) {
    return this.readMeasured(), Id(this, e, t);
  }
  /**
  Get the screen coordinates at the given document position.
  `side` determines whether the coordinates are based on the
  element before (-1) or after (1) the position (if no element is
  available on the given side, the method will transparently use
  another strategy to get reasonable coordinates).
  */
  coordsAtPos(e, t = 1) {
    this.readMeasured();
    let i = this.docView.coordsAt(e, t);
    if (!i || i.left == i.right)
      return i;
    let s = this.state.doc.lineAt(e), r = this.bidiSpans(s), o = r[Ni.find(r, e - s.from, -1, t)];
    return Io(i, o.dir == fe.LTR == t > 0);
  }
  /**
  Return the rectangle around a given character. If `pos` does not
  point in front of a character that is in the viewport and
  rendered (i.e. not replaced, not a line break), this will return
  null. For space characters that are a line wrap point, this will
  return the position before the line break.
  */
  coordsForChar(e) {
    return this.readMeasured(), this.docView.coordsForChar(e);
  }
  /**
  The default width of a character in the editor. May not
  accurately reflect the width of all characters (given variable
  width fonts or styling of invididual ranges).
  */
  get defaultCharacterWidth() {
    return this.viewState.heightOracle.charWidth;
  }
  /**
  The default height of a line in the editor. May not be accurate
  for all lines.
  */
  get defaultLineHeight() {
    return this.viewState.heightOracle.lineHeight;
  }
  /**
  The text direction
  ([`direction`](https://developer.mozilla.org/en-US/docs/Web/CSS/direction)
  CSS property) of the editor's content element.
  */
  get textDirection() {
    return this.viewState.defaultTextDirection;
  }
  /**
  Find the text direction of the block at the given position, as
  assigned by CSS. If
  [`perLineTextDirection`](https://codemirror.net/6/docs/ref/#view.EditorView^perLineTextDirection)
  isn't enabled, or the given position is outside of the viewport,
  this will always return the same as
  [`textDirection`](https://codemirror.net/6/docs/ref/#view.EditorView.textDirection). Note that
  this may trigger a DOM layout.
  */
  textDirectionAt(e) {
    return !this.state.facet(Md) || e < this.viewport.from || e > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(e));
  }
  /**
  Whether this editor [wraps lines](https://codemirror.net/6/docs/ref/#view.EditorView.lineWrapping)
  (as determined by the
  [`white-space`](https://developer.mozilla.org/en-US/docs/Web/CSS/white-space)
  CSS property of its content element).
  */
  get lineWrapping() {
    return this.viewState.heightOracle.lineWrapping;
  }
  /**
  Returns the bidirectional text structure of the given line
  (which should be in the current document) as an array of span
  objects. The order of these spans matches the [text
  direction](https://codemirror.net/6/docs/ref/#view.EditorView.textDirection)—if that is
  left-to-right, the leftmost spans come first, otherwise the
  rightmost spans come first.
  */
  bidiSpans(e) {
    if (e.length > nb)
      return bd(e.length);
    let t = this.textDirectionAt(e.from), i;
    for (let r of this.bidiCache)
      if (r.from == e.from && r.dir == t && (r.fresh || yd(r.isolates, i = Sc(this, e))))
        return r.order;
    i || (i = Sc(this, e));
    let s = J0(e.text, t, i);
    return this.bidiCache.push(new lo(e.from, e.to, t, i, !0, s)), s;
  }
  /**
  Check whether the editor has focus.
  */
  get hasFocus() {
    var e;
    return (this.dom.ownerDocument.hasFocus() || O.safari && ((e = this.inputState) === null || e === void 0 ? void 0 : e.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM;
  }
  /**
  Put focus on the editor.
  */
  focus() {
    this.observer.ignore(() => {
      td(this.contentDOM), this.docView.updateSelection();
    });
  }
  /**
  Update the [root](https://codemirror.net/6/docs/ref/##view.EditorViewConfig.root) in which the editor lives. This is only
  necessary when moving the editor's existing DOM to a new window or shadow root.
  */
  setRoot(e) {
    this._root != e && (this._root = e, this.observer.setWindow((e.nodeType == 9 ? e : e.ownerDocument).defaultView || window), this.mountStyles());
  }
  /**
  Clean up this editor view, removing its element from the
  document, unregistering event handlers, and notifying
  plugins. The view instance can no longer be used after
  calling this.
  */
  destroy() {
    this.root.activeElement == this.contentDOM && this.contentDOM.blur();
    for (let e of this.plugins)
      e.destroy(this);
    this.plugins = [], this.inputState.destroy(), this.docView.destroy(), this.dom.remove(), this.observer.destroy(), this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.destroyed = !0;
  }
  /**
  Returns an effect that can be
  [added](https://codemirror.net/6/docs/ref/#state.TransactionSpec.effects) to a transaction to
  cause it to scroll the given position or range into view.
  */
  static scrollIntoView(e, t = {}) {
    return dr.of(new Dn(typeof e == "number" ? S.cursor(e) : e, t.y, t.x, t.yMargin, t.xMargin));
  }
  /**
  Return an effect that resets the editor to its current (at the
  time this method was called) scroll position. Note that this
  only affects the editor's own scrollable element, not parents.
  See also
  [`EditorViewConfig.scrollTo`](https://codemirror.net/6/docs/ref/#view.EditorViewConfig.scrollTo).
  
  The effect should be used with a document identical to the one
  it was created for. Failing to do so is not an error, but may
  not scroll to the expected position. You can
  [map](https://codemirror.net/6/docs/ref/#state.StateEffect.map) the effect to account for changes.
  */
  scrollSnapshot() {
    let { scrollTop: e, scrollLeft: t } = this.scrollDOM, i = this.viewState.scrollAnchorAt(e);
    return dr.of(new Dn(S.cursor(i.from), "start", "start", i.top - e, t, !0));
  }
  /**
  Enable or disable tab-focus mode, which disables key bindings
  for Tab and Shift-Tab, letting the browser's default
  focus-changing behavior go through instead. This is useful to
  prevent trapping keyboard users in your editor.
  
  Without argument, this toggles the mode. With a boolean, it
  enables (true) or disables it (false). Given a number, it
  temporarily enables the mode until that number of milliseconds
  have passed or another non-Tab key is pressed.
  */
  setTabFocusMode(e) {
    e == null ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : typeof e == "boolean" ? this.inputState.tabFocusMode = e ? 0 : -1 : this.inputState.tabFocusMode != 0 && (this.inputState.tabFocusMode = Date.now() + e);
  }
  /**
  Returns an extension that can be used to add DOM event handlers.
  The value should be an object mapping event names to handler
  functions. For any given event, such functions are ordered by
  extension precedence, and the first handler to return true will
  be assumed to have handled that event, and no other handlers or
  built-in behavior will be activated for it. These are registered
  on the [content element](https://codemirror.net/6/docs/ref/#view.EditorView.contentDOM), except
  for `scroll` handlers, which will be called any time the
  editor's [scroll element](https://codemirror.net/6/docs/ref/#view.EditorView.scrollDOM) or one of
  its parent nodes is scrolled.
  */
  static domEventHandlers(e) {
    return Se.define(() => ({}), { eventHandlers: e });
  }
  /**
  Create an extension that registers DOM event observers. Contrary
  to event [handlers](https://codemirror.net/6/docs/ref/#view.EditorView^domEventHandlers),
  observers can't be prevented from running by a higher-precedence
  handler returning true. They also don't prevent other handlers
  and observers from running when they return true, and should not
  call `preventDefault`.
  */
  static domEventObservers(e) {
    return Se.define(() => ({}), { eventObservers: e });
  }
  /**
  Create a theme extension. The first argument can be a
  [`style-mod`](https://github.com/marijnh/style-mod#documentation)
  style spec providing the styles for the theme. These will be
  prefixed with a generated class for the style.
  
  Because the selectors will be prefixed with a scope class, rule
  that directly match the editor's [wrapper
  element](https://codemirror.net/6/docs/ref/#view.EditorView.dom)—to which the scope class will be
  added—need to be explicitly differentiated by adding an `&` to
  the selector for that element—for example
  `&.cm-focused`.
  
  When `dark` is set to true, the theme will be marked as dark,
  which will cause the `&dark` rules from [base
  themes](https://codemirror.net/6/docs/ref/#view.EditorView^baseTheme) to be used (as opposed to
  `&light` when a light theme is active).
  */
  static theme(e, t) {
    let i = Vi.newName(), s = [vr.of(i), cs.of(ma(`.${i}`, e))];
    return t && t.dark && s.push(da.of(!0)), s;
  }
  /**
  Create an extension that adds styles to the base theme. Like
  with [`theme`](https://codemirror.net/6/docs/ref/#view.EditorView^theme), use `&` to indicate the
  place of the editor wrapper element when directly targeting
  that. You can also use `&dark` or `&light` instead to only
  target editors with a dark or light theme.
  */
  static baseTheme(e) {
    return gn.lowest(cs.of(ma("." + pa, e, Gd)));
  }
  /**
  Retrieve an editor view instance from the view's DOM
  representation.
  */
  static findFromDOM(e) {
    var t;
    let i = e.querySelector(".cm-content"), s = i && ae.get(i) || ae.get(e);
    return ((t = s == null ? void 0 : s.rootView) === null || t === void 0 ? void 0 : t.view) || null;
  }
}
_.styleModule = cs;
_.inputHandler = Cd;
_.clipboardInputFilter = ja;
_.clipboardOutputFilter = Ka;
_.scrollHandler = Ed;
_.focusChangeEffect = Ad;
_.perLineTextDirection = Md;
_.exceptionSink = kd;
_.updateListener = ha;
_.editable = mi;
_.mouseSelectionStyle = Sd;
_.dragMovesSelection = wd;
_.clickAddsSelectionRange = xd;
_.decorations = Ds;
_.outerDecorations = _d;
_.atomicRanges = Ya;
_.bidiIsolatedRanges = Rd;
_.scrollMargins = Ld;
_.darkTheme = da;
_.cspNonce = /* @__PURE__ */ R.define({ combine: (n) => n.length ? n[0] : "" });
_.contentAttributes = Ga;
_.editorAttributes = Od;
_.lineWrapping = /* @__PURE__ */ _.contentAttributes.of({ class: "cm-lineWrapping" });
_.announce = /* @__PURE__ */ z.define();
const nb = 4096, jc = {};
class lo {
  constructor(e, t, i, s, r, o) {
    this.from = e, this.to = t, this.dir = i, this.isolates = s, this.fresh = r, this.order = o;
  }
  static update(e, t) {
    if (t.empty && !e.some((r) => r.fresh))
      return e;
    let i = [], s = e.length ? e[e.length - 1].dir : fe.LTR;
    for (let r = Math.max(0, e.length - 10); r < e.length; r++) {
      let o = e[r];
      o.dir == s && !t.touchesRange(o.from, o.to) && i.push(new lo(t.mapPos(o.from, 1), t.mapPos(o.to, -1), o.dir, o.isolates, !1, o.order));
    }
    return i;
  }
}
function Kc(n, e, t) {
  for (let i = n.state.facet(e), s = i.length - 1; s >= 0; s--) {
    let r = i[s], o = typeof r == "function" ? r(n) : r;
    o && na(o, t);
  }
  return t;
}
const sb = O.mac ? "mac" : O.windows ? "win" : O.linux ? "linux" : "key";
function rb(n, e) {
  const t = n.split(/-(?!$)/);
  let i = t[t.length - 1];
  i == "Space" && (i = " ");
  let s, r, o, l;
  for (let a = 0; a < t.length - 1; ++a) {
    const h = t[a];
    if (/^(cmd|meta|m)$/i.test(h))
      l = !0;
    else if (/^a(lt)?$/i.test(h))
      s = !0;
    else if (/^(c|ctrl|control)$/i.test(h))
      r = !0;
    else if (/^s(hift)?$/i.test(h))
      o = !0;
    else if (/^mod$/i.test(h))
      e == "mac" ? l = !0 : r = !0;
    else
      throw new Error("Unrecognized modifier name: " + h);
  }
  return s && (i = "Alt-" + i), r && (i = "Ctrl-" + i), l && (i = "Meta-" + i), o && (i = "Shift-" + i), i;
}
function xr(n, e, t) {
  return e.altKey && (n = "Alt-" + n), e.ctrlKey && (n = "Ctrl-" + n), e.metaKey && (n = "Meta-" + n), t !== !1 && e.shiftKey && (n = "Shift-" + n), n;
}
const ob = /* @__PURE__ */ gn.default(/* @__PURE__ */ _.domEventHandlers({
  keydown(n, e) {
    return Xd(Yd(e.state), n, e, "editor");
  }
})), eh = /* @__PURE__ */ R.define({ enables: ob }), Gc = /* @__PURE__ */ new WeakMap();
function Yd(n) {
  let e = n.facet(eh), t = Gc.get(e);
  return t || Gc.set(e, t = hb(e.reduce((i, s) => i.concat(s), []))), t;
}
function lb(n, e, t) {
  return Xd(Yd(n.state), e, n, t);
}
let Li = null;
const ab = 4e3;
function hb(n, e = sb) {
  let t = /* @__PURE__ */ Object.create(null), i = /* @__PURE__ */ Object.create(null), s = (o, l) => {
    let a = i[o];
    if (a == null)
      i[o] = l;
    else if (a != l)
      throw new Error("Key binding " + o + " is used both as a regular binding and as a multi-stroke prefix");
  }, r = (o, l, a, h, c) => {
    var f, u;
    let d = t[o] || (t[o] = /* @__PURE__ */ Object.create(null)), p = l.split(/ (?!$)/).map((b) => rb(b, e));
    for (let b = 1; b < p.length; b++) {
      let v = p.slice(0, b).join(" ");
      s(v, !0), d[v] || (d[v] = {
        preventDefault: !0,
        stopPropagation: !1,
        run: [(k) => {
          let w = Li = { view: k, prefix: v, scope: o };
          return setTimeout(() => {
            Li == w && (Li = null);
          }, ab), !0;
        }]
      });
    }
    let m = p.join(" ");
    s(m, !1);
    let g = d[m] || (d[m] = {
      preventDefault: !1,
      stopPropagation: !1,
      run: ((u = (f = d._any) === null || f === void 0 ? void 0 : f.run) === null || u === void 0 ? void 0 : u.slice()) || []
    });
    a && g.run.push(a), h && (g.preventDefault = !0), c && (g.stopPropagation = !0);
  };
  for (let o of n) {
    let l = o.scope ? o.scope.split(" ") : ["editor"];
    if (o.any)
      for (let h of l) {
        let c = t[h] || (t[h] = /* @__PURE__ */ Object.create(null));
        c._any || (c._any = { preventDefault: !1, stopPropagation: !1, run: [] });
        let { any: f } = o;
        for (let u in c)
          c[u].run.push((d) => f(d, ga));
      }
    let a = o[e] || o.key;
    if (a)
      for (let h of l)
        r(h, a, o.run, o.preventDefault, o.stopPropagation), o.shift && r(h, "Shift-" + a, o.shift, o.preventDefault, o.stopPropagation);
  }
  return t;
}
let ga = null;
function Xd(n, e, t, i) {
  ga = e;
  let s = _0(e), r = ot(s, 0), o = Yt(r) == s.length && s != " ", l = "", a = !1, h = !1, c = !1;
  Li && Li.view == t && Li.scope == i && (l = Li.prefix + " ", Fd.indexOf(e.keyCode) < 0 && (h = !0, Li = null));
  let f = /* @__PURE__ */ new Set(), u = (g) => {
    if (g) {
      for (let b of g.run)
        if (!f.has(b) && (f.add(b), b(t)))
          return g.stopPropagation && (c = !0), !0;
      g.preventDefault && (g.stopPropagation && (c = !0), h = !0);
    }
    return !1;
  }, d = n[i], p, m;
  return d && (u(d[l + xr(s, e, !o)]) ? a = !0 : o && (e.altKey || e.metaKey || e.ctrlKey) && // Ctrl-Alt may be used for AltGr on Windows
  !(O.windows && e.ctrlKey && e.altKey) && (p = zi[e.keyCode]) && p != s ? (u(d[l + xr(p, e, !0)]) || e.shiftKey && (m = Ms[e.keyCode]) != s && m != p && u(d[l + xr(m, e, !1)])) && (a = !0) : o && e.shiftKey && u(d[l + xr(s, e, !0)]) && (a = !0), !a && u(d._any) && (a = !0)), h && (a = !0), a && c && e.stopPropagation(), ga = null, a;
}
class qs {
  /**
  Create a marker with the given class and dimensions. If `width`
  is null, the DOM element will get no width style.
  */
  constructor(e, t, i, s, r) {
    this.className = e, this.left = t, this.top = i, this.width = s, this.height = r;
  }
  draw() {
    let e = document.createElement("div");
    return e.className = this.className, this.adjust(e), e;
  }
  update(e, t) {
    return t.className != this.className ? !1 : (this.adjust(e), !0);
  }
  adjust(e) {
    e.style.left = this.left + "px", e.style.top = this.top + "px", this.width != null && (e.style.width = this.width + "px"), e.style.height = this.height + "px";
  }
  eq(e) {
    return this.left == e.left && this.top == e.top && this.width == e.width && this.height == e.height && this.className == e.className;
  }
  /**
  Create a set of rectangles for the given selection range,
  assigning them theclass`className`. Will create a single
  rectangle for empty ranges, and a set of selection-style
  rectangles covering the range's content (in a bidi-aware
  way) for non-empty ones.
  */
  static forRange(e, t, i) {
    if (i.empty) {
      let s = e.coordsAtPos(i.head, i.assoc || 1);
      if (!s)
        return [];
      let r = Jd(e);
      return [new qs(t, s.left - r.left, s.top - r.top, null, s.bottom - s.top)];
    } else
      return cb(e, t, i);
  }
}
function Jd(n) {
  let e = n.scrollDOM.getBoundingClientRect();
  return { left: (n.textDirection == fe.LTR ? e.left : e.right - n.scrollDOM.clientWidth * n.scaleX) - n.scrollDOM.scrollLeft * n.scaleX, top: e.top - n.scrollDOM.scrollTop * n.scaleY };
}
function Yc(n, e, t, i) {
  let s = n.coordsAtPos(e, t * 2);
  if (!s)
    return i;
  let r = n.dom.getBoundingClientRect(), o = (s.top + s.bottom) / 2, l = n.posAtCoords({ x: r.left + 1, y: o }), a = n.posAtCoords({ x: r.right - 1, y: o });
  return l == null || a == null ? i : { from: Math.max(i.from, Math.min(l, a)), to: Math.min(i.to, Math.max(l, a)) };
}
function cb(n, e, t) {
  if (t.to <= n.viewport.from || t.from >= n.viewport.to)
    return [];
  let i = Math.max(t.from, n.viewport.from), s = Math.min(t.to, n.viewport.to), r = n.textDirection == fe.LTR, o = n.contentDOM, l = o.getBoundingClientRect(), a = Jd(n), h = o.querySelector(".cm-line"), c = h && window.getComputedStyle(h), f = l.left + (c ? parseInt(c.paddingLeft) + Math.min(0, parseInt(c.textIndent)) : 0), u = l.right - (c ? parseInt(c.paddingRight) : 0), d = fa(n, i, 1), p = fa(n, s, -1), m = d.type == Qe.Text ? d : null, g = p.type == Qe.Text ? p : null;
  if (m && (n.lineWrapping || d.widgetLineBreaks) && (m = Yc(n, i, 1, m)), g && (n.lineWrapping || p.widgetLineBreaks) && (g = Yc(n, s, -1, g)), m && g && m.from == g.from && m.to == g.to)
    return v(k(t.from, t.to, m));
  {
    let x = m ? k(t.from, null, m) : w(d, !1), C = g ? k(null, t.to, g) : w(p, !0), A = [];
    return (m || d).to < (g || p).from - (m && g ? 1 : 0) || d.widgetLineBreaks > 1 && x.bottom + n.defaultLineHeight / 2 < C.top ? A.push(b(f, x.bottom, u, C.top)) : x.bottom < C.top && n.elementAtHeight((x.bottom + C.top) / 2).type == Qe.Text && (x.bottom = C.top = (x.bottom + C.top) / 2), v(x).concat(A).concat(v(C));
  }
  function b(x, C, A, I) {
    return new qs(e, x - a.left, C - a.top, A - x, I - C);
  }
  function v({ top: x, bottom: C, horizontal: A }) {
    let I = [];
    for (let H = 0; H < A.length; H += 2)
      I.push(b(A[H], x, A[H + 1], C));
    return I;
  }
  function k(x, C, A) {
    let I = 1e9, H = -1e9, U = [];
    function P(q, ee, ke, Ee, Fe) {
      let me = n.coordsAtPos(q, q == A.to ? -2 : 2), De = n.coordsAtPos(ke, ke == A.from ? 2 : -2);
      !me || !De || (I = Math.min(me.top, De.top, I), H = Math.max(me.bottom, De.bottom, H), Fe == fe.LTR ? U.push(r && ee ? f : me.left, r && Ee ? u : De.right) : U.push(!r && Ee ? f : De.left, !r && ee ? u : me.right));
    }
    let B = x ?? A.from, K = C ?? A.to;
    for (let q of n.visibleRanges)
      if (q.to > B && q.from < K)
        for (let ee = Math.max(q.from, B), ke = Math.min(q.to, K); ; ) {
          let Ee = n.state.doc.lineAt(ee);
          for (let Fe of n.bidiSpans(Ee)) {
            let me = Fe.from + Ee.from, De = Fe.to + Ee.from;
            if (me >= ke)
              break;
            De > ee && P(Math.max(me, ee), x == null && me <= B, Math.min(De, ke), C == null && De >= K, Fe.dir);
          }
          if (ee = Ee.to + 1, ee >= ke)
            break;
        }
    return U.length == 0 && P(B, x == null, K, C == null, n.textDirection), { top: I, bottom: H, horizontal: U };
  }
  function w(x, C) {
    let A = l.top + (C ? x.top : x.bottom);
    return { top: A, bottom: A, horizontal: [] };
  }
}
function fb(n, e) {
  return n.constructor == e.constructor && n.eq(e);
}
class ub {
  constructor(e, t) {
    this.view = e, this.layer = t, this.drawn = [], this.scaleX = 1, this.scaleY = 1, this.measureReq = { read: this.measure.bind(this), write: this.draw.bind(this) }, this.dom = e.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), t.above && this.dom.classList.add("cm-layer-above"), t.class && this.dom.classList.add(t.class), this.scale(), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(e.state), e.requestMeasure(this.measureReq), t.mount && t.mount(this.dom, e);
  }
  update(e) {
    e.startState.facet(Vr) != e.state.facet(Vr) && this.setOrder(e.state), (this.layer.update(e, this.dom) || e.geometryChanged) && (this.scale(), e.view.requestMeasure(this.measureReq));
  }
  docViewUpdate(e) {
    this.layer.updateOnDocViewUpdate !== !1 && e.requestMeasure(this.measureReq);
  }
  setOrder(e) {
    let t = 0, i = e.facet(Vr);
    for (; t < i.length && i[t] != this.layer; )
      t++;
    this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - t);
  }
  measure() {
    return this.layer.markers(this.view);
  }
  scale() {
    let { scaleX: e, scaleY: t } = this.view;
    (e != this.scaleX || t != this.scaleY) && (this.scaleX = e, this.scaleY = t, this.dom.style.transform = `scale(${1 / e}, ${1 / t})`);
  }
  draw(e) {
    if (e.length != this.drawn.length || e.some((t, i) => !fb(t, this.drawn[i]))) {
      let t = this.dom.firstChild, i = 0;
      for (let s of e)
        s.update && t && s.constructor && this.drawn[i].constructor && s.update(t, this.drawn[i]) ? (t = t.nextSibling, i++) : this.dom.insertBefore(s.draw(), t);
      for (; t; ) {
        let s = t.nextSibling;
        t.remove(), t = s;
      }
      this.drawn = e;
    }
  }
  destroy() {
    this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove();
  }
}
const Vr = /* @__PURE__ */ R.define();
function Qd(n) {
  return [
    Se.define((e) => new ub(e, n)),
    Vr.of(n)
  ];
}
const Os = /* @__PURE__ */ R.define({
  combine(n) {
    return ri(n, {
      cursorBlinkRate: 1200,
      drawRangeCursor: !0
    }, {
      cursorBlinkRate: (e, t) => Math.min(e, t),
      drawRangeCursor: (e, t) => e || t
    });
  }
});
function db(n = {}) {
  return [
    Os.of(n),
    pb,
    mb,
    gb,
    Td.of(!0)
  ];
}
function Zd(n) {
  return n.startState.facet(Os) != n.state.facet(Os);
}
const pb = /* @__PURE__ */ Qd({
  above: !0,
  markers(n) {
    let { state: e } = n, t = e.facet(Os), i = [];
    for (let s of e.selection.ranges) {
      let r = s == e.selection.main;
      if (s.empty || t.drawRangeCursor) {
        let o = r ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary", l = s.empty ? s : S.cursor(s.head, s.head > s.anchor ? -1 : 1);
        for (let a of qs.forRange(n, o, l))
          i.push(a);
      }
    }
    return i;
  },
  update(n, e) {
    n.transactions.some((i) => i.selection) && (e.style.animationName = e.style.animationName == "cm-blink" ? "cm-blink2" : "cm-blink");
    let t = Zd(n);
    return t && Xc(n.state, e), n.docChanged || n.selectionSet || t;
  },
  mount(n, e) {
    Xc(e.state, n);
  },
  class: "cm-cursorLayer"
});
function Xc(n, e) {
  e.style.animationDuration = n.facet(Os).cursorBlinkRate + "ms";
}
const mb = /* @__PURE__ */ Qd({
  above: !1,
  markers(n) {
    return n.state.selection.ranges.map((e) => e.empty ? [] : qs.forRange(n, "cm-selectionBackground", e)).reduce((e, t) => e.concat(t));
  },
  update(n, e) {
    return n.docChanged || n.selectionSet || n.viewportChanged || Zd(n);
  },
  class: "cm-selectionLayer"
}), gb = /* @__PURE__ */ gn.highest(/* @__PURE__ */ _.theme({
  ".cm-line": {
    "& ::selection, &::selection": { backgroundColor: "transparent !important" },
    caretColor: "transparent !important"
  },
  ".cm-content": {
    caretColor: "transparent !important",
    "& :focus": {
      caretColor: "initial !important",
      "&::selection, & ::selection": {
        backgroundColor: "Highlight !important"
      }
    }
  }
})), ep = /* @__PURE__ */ z.define({
  map(n, e) {
    return n == null ? null : e.mapPos(n);
  }
}), ds = /* @__PURE__ */ Ne.define({
  create() {
    return null;
  },
  update(n, e) {
    return n != null && (n = e.changes.mapPos(n)), e.effects.reduce((t, i) => i.is(ep) ? i.value : t, n);
  }
}), yb = /* @__PURE__ */ Se.fromClass(class {
  constructor(n) {
    this.view = n, this.cursor = null, this.measureReq = { read: this.readPos.bind(this), write: this.drawCursor.bind(this) };
  }
  update(n) {
    var e;
    let t = n.state.field(ds);
    t == null ? this.cursor != null && ((e = this.cursor) === null || e === void 0 || e.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement("div")), this.cursor.className = "cm-dropCursor"), (n.startState.field(ds) != t || n.docChanged || n.geometryChanged) && this.view.requestMeasure(this.measureReq));
  }
  readPos() {
    let { view: n } = this, e = n.state.field(ds), t = e != null && n.coordsAtPos(e);
    if (!t)
      return null;
    let i = n.scrollDOM.getBoundingClientRect();
    return {
      left: t.left - i.left + n.scrollDOM.scrollLeft * n.scaleX,
      top: t.top - i.top + n.scrollDOM.scrollTop * n.scaleY,
      height: t.bottom - t.top
    };
  }
  drawCursor(n) {
    if (this.cursor) {
      let { scaleX: e, scaleY: t } = this.view;
      n ? (this.cursor.style.left = n.left / e + "px", this.cursor.style.top = n.top / t + "px", this.cursor.style.height = n.height / t + "px") : this.cursor.style.left = "-100000px";
    }
  }
  destroy() {
    this.cursor && this.cursor.remove();
  }
  setDropPos(n) {
    this.view.state.field(ds) != n && this.view.dispatch({ effects: ep.of(n) });
  }
}, {
  eventObservers: {
    dragover(n) {
      this.setDropPos(this.view.posAtCoords({ x: n.clientX, y: n.clientY }));
    },
    dragleave(n) {
      (n.target == this.view.contentDOM || !this.view.contentDOM.contains(n.relatedTarget)) && this.setDropPos(null);
    },
    dragend() {
      this.setDropPos(null);
    },
    drop() {
      this.setDropPos(null);
    }
  }
});
function bb() {
  return [ds, yb];
}
function Jc(n, e, t, i, s) {
  e.lastIndex = 0;
  for (let r = n.iterRange(t, i), o = t, l; !r.next().done; o += r.value.length)
    if (!r.lineBreak)
      for (; l = e.exec(r.value); )
        s(o + l.index, l);
}
function vb(n, e) {
  let t = n.visibleRanges;
  if (t.length == 1 && t[0].from == n.viewport.from && t[0].to == n.viewport.to)
    return t;
  let i = [];
  for (let { from: s, to: r } of t)
    s = Math.max(n.state.doc.lineAt(s).from, s - e), r = Math.min(n.state.doc.lineAt(r).to, r + e), i.length && i[i.length - 1].to >= s ? i[i.length - 1].to = r : i.push({ from: s, to: r });
  return i;
}
class xb {
  /**
  Create a decorator.
  */
  constructor(e) {
    const { regexp: t, decoration: i, decorate: s, boundary: r, maxLength: o = 1e3 } = e;
    if (!t.global)
      throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
    if (this.regexp = t, s)
      this.addMatch = (l, a, h, c) => s(c, h, h + l[0].length, l, a);
    else if (typeof i == "function")
      this.addMatch = (l, a, h, c) => {
        let f = i(l, a, h);
        f && c(h, h + l[0].length, f);
      };
    else if (i)
      this.addMatch = (l, a, h, c) => c(h, h + l[0].length, i);
    else
      throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
    this.boundary = r, this.maxLength = o;
  }
  /**
  Compute the full set of decorations for matches in the given
  view's viewport. You'll want to call this when initializing your
  plugin.
  */
  createDeco(e) {
    let t = new bi(), i = t.add.bind(t);
    for (let { from: s, to: r } of vb(e, this.maxLength))
      Jc(e.state.doc, this.regexp, s, r, (o, l) => this.addMatch(l, e, o, i));
    return t.finish();
  }
  /**
  Update a set of decorations for a view update. `deco` _must_ be
  the set of decorations produced by _this_ `MatchDecorator` for
  the view state before the update.
  */
  updateDeco(e, t) {
    let i = 1e9, s = -1;
    return e.docChanged && e.changes.iterChanges((r, o, l, a) => {
      a >= e.view.viewport.from && l <= e.view.viewport.to && (i = Math.min(l, i), s = Math.max(a, s));
    }), e.viewportMoved || s - i > 1e3 ? this.createDeco(e.view) : s > -1 ? this.updateRange(e.view, t.map(e.changes), i, s) : t;
  }
  updateRange(e, t, i, s) {
    for (let r of e.visibleRanges) {
      let o = Math.max(r.from, i), l = Math.min(r.to, s);
      if (l >= o) {
        let a = e.state.doc.lineAt(o), h = a.to < l ? e.state.doc.lineAt(l) : a, c = Math.max(r.from, a.from), f = Math.min(r.to, h.to);
        if (this.boundary) {
          for (; o > a.from; o--)
            if (this.boundary.test(a.text[o - 1 - a.from])) {
              c = o;
              break;
            }
          for (; l < h.to; l++)
            if (this.boundary.test(h.text[l - h.from])) {
              f = l;
              break;
            }
        }
        let u = [], d, p = (m, g, b) => u.push(b.range(m, g));
        if (a == h)
          for (this.regexp.lastIndex = c - a.from; (d = this.regexp.exec(a.text)) && d.index < f - a.from; )
            this.addMatch(d, e, d.index + a.from, p);
        else
          Jc(e.state.doc, this.regexp, c, f, (m, g) => this.addMatch(g, e, m, p));
        t = t.update({ filterFrom: c, filterTo: f, filter: (m, g) => m < c || g > f, add: u });
      }
    }
    return t;
  }
}
const ya = /x/.unicode != null ? "gu" : "g", wb = /* @__PURE__ */ new RegExp(`[\0-\b
--­؜​‎‏\u2028\u2029‭‮⁦⁧⁩\uFEFF￹-￼]`, ya), Sb = {
  0: "null",
  7: "bell",
  8: "backspace",
  10: "newline",
  11: "vertical tab",
  13: "carriage return",
  27: "escape",
  8203: "zero width space",
  8204: "zero width non-joiner",
  8205: "zero width joiner",
  8206: "left-to-right mark",
  8207: "right-to-left mark",
  8232: "line separator",
  8237: "left-to-right override",
  8238: "right-to-left override",
  8294: "left-to-right isolate",
  8295: "right-to-left isolate",
  8297: "pop directional isolate",
  8233: "paragraph separator",
  65279: "zero width no-break space",
  65532: "object replacement"
};
let ml = null;
function kb() {
  var n;
  if (ml == null && typeof document < "u" && document.body) {
    let e = document.body.style;
    ml = ((n = e.tabSize) !== null && n !== void 0 ? n : e.MozTabSize) != null;
  }
  return ml || !1;
}
const zr = /* @__PURE__ */ R.define({
  combine(n) {
    let e = ri(n, {
      render: null,
      specialChars: wb,
      addSpecialChars: null
    });
    return (e.replaceTabs = !kb()) && (e.specialChars = new RegExp("	|" + e.specialChars.source, ya)), e.addSpecialChars && (e.specialChars = new RegExp(e.specialChars.source + "|" + e.addSpecialChars.source, ya)), e;
  }
});
function Cb(n = {}) {
  return [zr.of(n), Ab()];
}
let Qc = null;
function Ab() {
  return Qc || (Qc = Se.fromClass(class {
    constructor(n) {
      this.view = n, this.decorations = F.none, this.decorationCache = /* @__PURE__ */ Object.create(null), this.decorator = this.makeDecorator(n.state.facet(zr)), this.decorations = this.decorator.createDeco(n);
    }
    makeDecorator(n) {
      return new xb({
        regexp: n.specialChars,
        decoration: (e, t, i) => {
          let { doc: s } = t.state, r = ot(e[0], 0);
          if (r == 9) {
            let o = s.lineAt(i), l = t.state.tabSize, a = Vn(o.text, l, i - o.from);
            return F.replace({
              widget: new Db((l - a % l) * this.view.defaultCharacterWidth / this.view.scaleX)
            });
          }
          return this.decorationCache[r] || (this.decorationCache[r] = F.replace({ widget: new Eb(n, r) }));
        },
        boundary: n.replaceTabs ? void 0 : /[^]/
      });
    }
    update(n) {
      let e = n.state.facet(zr);
      n.startState.facet(zr) != e ? (this.decorator = this.makeDecorator(e), this.decorations = this.decorator.createDeco(n.view)) : this.decorations = this.decorator.updateDeco(n, this.decorations);
    }
  }, {
    decorations: (n) => n.decorations
  }));
}
const Mb = "•";
function Tb(n) {
  return n >= 32 ? Mb : n == 10 ? "␤" : String.fromCharCode(9216 + n);
}
class Eb extends ji {
  constructor(e, t) {
    super(), this.options = e, this.code = t;
  }
  eq(e) {
    return e.code == this.code;
  }
  toDOM(e) {
    let t = Tb(this.code), i = e.state.phrase("Control character") + " " + (Sb[this.code] || "0x" + this.code.toString(16)), s = this.options.render && this.options.render(this.code, i, t);
    if (s)
      return s;
    let r = document.createElement("span");
    return r.textContent = t, r.title = i, r.setAttribute("aria-label", i), r.className = "cm-specialChar", r;
  }
  ignoreEvent() {
    return !1;
  }
}
class Db extends ji {
  constructor(e) {
    super(), this.width = e;
  }
  eq(e) {
    return e.width == this.width;
  }
  toDOM() {
    let e = document.createElement("span");
    return e.textContent = "	", e.className = "cm-tab", e.style.width = this.width + "px", e;
  }
  ignoreEvent() {
    return !1;
  }
}
function Ob() {
  return Rb;
}
const _b = /* @__PURE__ */ F.line({ class: "cm-activeLine" }), Rb = /* @__PURE__ */ Se.fromClass(class {
  constructor(n) {
    this.decorations = this.getDeco(n);
  }
  update(n) {
    (n.docChanged || n.selectionSet) && (this.decorations = this.getDeco(n.view));
  }
  getDeco(n) {
    let e = -1, t = [];
    for (let i of n.state.selection.ranges) {
      let s = n.lineBlockAt(i.head);
      s.from > e && (t.push(_b.range(s.from)), e = s.from);
    }
    return F.set(t);
  }
}, {
  decorations: (n) => n.decorations
}), ba = 2e3;
function Lb(n, e, t) {
  let i = Math.min(e.line, t.line), s = Math.max(e.line, t.line), r = [];
  if (e.off > ba || t.off > ba || e.col < 0 || t.col < 0) {
    let o = Math.min(e.off, t.off), l = Math.max(e.off, t.off);
    for (let a = i; a <= s; a++) {
      let h = n.doc.line(a);
      h.length <= l && r.push(S.range(h.from + o, h.to + l));
    }
  } else {
    let o = Math.min(e.col, t.col), l = Math.max(e.col, t.col);
    for (let a = i; a <= s; a++) {
      let h = n.doc.line(a), c = Xl(h.text, o, n.tabSize, !0);
      if (c < 0)
        r.push(S.cursor(h.to));
      else {
        let f = Xl(h.text, l, n.tabSize);
        r.push(S.range(h.from + c, h.from + f));
      }
    }
  }
  return r;
}
function Pb(n, e) {
  let t = n.coordsAtPos(n.viewport.from);
  return t ? Math.round(Math.abs((t.left - e) / n.defaultCharacterWidth)) : -1;
}
function Zc(n, e) {
  let t = n.posAtCoords({ x: e.clientX, y: e.clientY }, !1), i = n.state.doc.lineAt(t), s = t - i.from, r = s > ba ? -1 : s == i.length ? Pb(n, e.clientX) : Vn(i.text, n.state.tabSize, t - i.from);
  return { line: i.number, col: r, off: s };
}
function Ib(n, e) {
  let t = Zc(n, e), i = n.state.selection;
  return t ? {
    update(s) {
      if (s.docChanged) {
        let r = s.changes.mapPos(s.startState.doc.line(t.line).from), o = s.state.doc.lineAt(r);
        t = { line: o.number, col: t.col, off: Math.min(t.off, o.length) }, i = i.map(s.changes);
      }
    },
    get(s, r, o) {
      let l = Zc(n, s);
      if (!l)
        return i;
      let a = Lb(n.state, t, l);
      return a.length ? o ? S.create(a.concat(i.ranges)) : S.create(a) : i;
    }
  } : null;
}
function Bb(n) {
  let e = (t) => t.altKey && t.button == 0;
  return _.mouseSelectionStyle.of((t, i) => e(i) ? Ib(t, i) : null);
}
const Nb = {
  Alt: [18, (n) => !!n.altKey],
  Control: [17, (n) => !!n.ctrlKey],
  Shift: [16, (n) => !!n.shiftKey],
  Meta: [91, (n) => !!n.metaKey]
}, Fb = { style: "cursor: crosshair" };
function Hb(n = {}) {
  let [e, t] = Nb[n.key || "Alt"], i = Se.fromClass(class {
    constructor(s) {
      this.view = s, this.isDown = !1;
    }
    set(s) {
      this.isDown != s && (this.isDown = s, this.view.update([]));
    }
  }, {
    eventObservers: {
      keydown(s) {
        this.set(s.keyCode == e || t(s));
      },
      keyup(s) {
        (s.keyCode == e || !t(s)) && this.set(!1);
      },
      mousemove(s) {
        this.set(t(s));
      }
    }
  });
  return [
    i,
    _.contentAttributes.of((s) => {
      var r;
      return !((r = s.plugin(i)) === null || r === void 0) && r.isDown ? Fb : null;
    })
  ];
}
const os = "-10000px";
class tp {
  constructor(e, t, i, s) {
    this.facet = t, this.createTooltipView = i, this.removeTooltipView = s, this.input = e.state.facet(t), this.tooltips = this.input.filter((o) => o);
    let r = null;
    this.tooltipViews = this.tooltips.map((o) => r = i(o, r));
  }
  update(e, t) {
    var i;
    let s = e.state.facet(this.facet), r = s.filter((a) => a);
    if (s === this.input) {
      for (let a of this.tooltipViews)
        a.update && a.update(e);
      return !1;
    }
    let o = [], l = t ? [] : null;
    for (let a = 0; a < r.length; a++) {
      let h = r[a], c = -1;
      if (h) {
        for (let f = 0; f < this.tooltips.length; f++) {
          let u = this.tooltips[f];
          u && u.create == h.create && (c = f);
        }
        if (c < 0)
          o[a] = this.createTooltipView(h, a ? o[a - 1] : null), l && (l[a] = !!h.above);
        else {
          let f = o[a] = this.tooltipViews[c];
          l && (l[a] = t[c]), f.update && f.update(e);
        }
      }
    }
    for (let a of this.tooltipViews)
      o.indexOf(a) < 0 && (this.removeTooltipView(a), (i = a.destroy) === null || i === void 0 || i.call(a));
    return t && (l.forEach((a, h) => t[h] = a), t.length = l.length), this.input = s, this.tooltips = r, this.tooltipViews = o, !0;
  }
}
function Wb(n) {
  let e = n.dom.ownerDocument.documentElement;
  return { top: 0, left: 0, bottom: e.clientHeight, right: e.clientWidth };
}
const gl = /* @__PURE__ */ R.define({
  combine: (n) => {
    var e, t, i;
    return {
      position: O.ios ? "absolute" : ((e = n.find((s) => s.position)) === null || e === void 0 ? void 0 : e.position) || "fixed",
      parent: ((t = n.find((s) => s.parent)) === null || t === void 0 ? void 0 : t.parent) || null,
      tooltipSpace: ((i = n.find((s) => s.tooltipSpace)) === null || i === void 0 ? void 0 : i.tooltipSpace) || Wb
    };
  }
}), ef = /* @__PURE__ */ new WeakMap(), th = /* @__PURE__ */ Se.fromClass(class {
  constructor(n) {
    this.view = n, this.above = [], this.inView = !0, this.madeAbsolute = !1, this.lastTransaction = 0, this.measureTimeout = -1;
    let e = n.state.facet(gl);
    this.position = e.position, this.parent = e.parent, this.classes = n.themeClasses, this.createContainer(), this.measureReq = { read: this.readMeasure.bind(this), write: this.writeMeasure.bind(this), key: this }, this.resizeObserver = typeof ResizeObserver == "function" ? new ResizeObserver(() => this.measureSoon()) : null, this.manager = new tp(n, ih, (t, i) => this.createTooltip(t, i), (t) => {
      this.resizeObserver && this.resizeObserver.unobserve(t.dom), t.dom.remove();
    }), this.above = this.manager.tooltips.map((t) => !!t.above), this.intersectionObserver = typeof IntersectionObserver == "function" ? new IntersectionObserver((t) => {
      Date.now() > this.lastTransaction - 50 && t.length > 0 && t[t.length - 1].intersectionRatio < 1 && this.measureSoon();
    }, { threshold: [1] }) : null, this.observeIntersection(), n.win.addEventListener("resize", this.measureSoon = this.measureSoon.bind(this)), this.maybeMeasure();
  }
  createContainer() {
    this.parent ? (this.container = document.createElement("div"), this.container.style.position = "relative", this.container.className = this.view.themeClasses, this.parent.appendChild(this.container)) : this.container = this.view.dom;
  }
  observeIntersection() {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
      for (let n of this.manager.tooltipViews)
        this.intersectionObserver.observe(n.dom);
    }
  }
  measureSoon() {
    this.measureTimeout < 0 && (this.measureTimeout = setTimeout(() => {
      this.measureTimeout = -1, this.maybeMeasure();
    }, 50));
  }
  update(n) {
    n.transactions.length && (this.lastTransaction = Date.now());
    let e = this.manager.update(n, this.above);
    e && this.observeIntersection();
    let t = e || n.geometryChanged, i = n.state.facet(gl);
    if (i.position != this.position && !this.madeAbsolute) {
      this.position = i.position;
      for (let s of this.manager.tooltipViews)
        s.dom.style.position = this.position;
      t = !0;
    }
    if (i.parent != this.parent) {
      this.parent && this.container.remove(), this.parent = i.parent, this.createContainer();
      for (let s of this.manager.tooltipViews)
        this.container.appendChild(s.dom);
      t = !0;
    } else this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
    t && this.maybeMeasure();
  }
  createTooltip(n, e) {
    let t = n.create(this.view), i = e ? e.dom : null;
    if (t.dom.classList.add("cm-tooltip"), n.arrow && !t.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
      let s = document.createElement("div");
      s.className = "cm-tooltip-arrow", t.dom.appendChild(s);
    }
    return t.dom.style.position = this.position, t.dom.style.top = os, t.dom.style.left = "0px", this.container.insertBefore(t.dom, i), t.mount && t.mount(this.view), this.resizeObserver && this.resizeObserver.observe(t.dom), t;
  }
  destroy() {
    var n, e, t;
    this.view.win.removeEventListener("resize", this.measureSoon);
    for (let i of this.manager.tooltipViews)
      i.dom.remove(), (n = i.destroy) === null || n === void 0 || n.call(i);
    this.parent && this.container.remove(), (e = this.resizeObserver) === null || e === void 0 || e.disconnect(), (t = this.intersectionObserver) === null || t === void 0 || t.disconnect(), clearTimeout(this.measureTimeout);
  }
  readMeasure() {
    let n = 1, e = 1, t = !1;
    if (this.position == "fixed" && this.manager.tooltipViews.length) {
      let { dom: r } = this.manager.tooltipViews[0];
      if (O.gecko)
        t = r.offsetParent != this.container.ownerDocument.body;
      else if (r.style.top == os && r.style.left == "0px") {
        let o = r.getBoundingClientRect();
        t = Math.abs(o.top + 1e4) > 1 || Math.abs(o.left) > 1;
      }
    }
    if (t || this.position == "absolute")
      if (this.parent) {
        let r = this.parent.getBoundingClientRect();
        r.width && r.height && (n = r.width / this.parent.offsetWidth, e = r.height / this.parent.offsetHeight);
      } else
        ({ scaleX: n, scaleY: e } = this.view.viewState);
    let i = this.view.scrollDOM.getBoundingClientRect(), s = Xa(this.view);
    return {
      visible: {
        left: i.left + s.left,
        top: i.top + s.top,
        right: i.right - s.right,
        bottom: i.bottom - s.bottom
      },
      parent: this.parent ? this.container.getBoundingClientRect() : this.view.dom.getBoundingClientRect(),
      pos: this.manager.tooltips.map((r, o) => {
        let l = this.manager.tooltipViews[o];
        return l.getCoords ? l.getCoords(r.pos) : this.view.coordsAtPos(r.pos);
      }),
      size: this.manager.tooltipViews.map(({ dom: r }) => r.getBoundingClientRect()),
      space: this.view.state.facet(gl).tooltipSpace(this.view),
      scaleX: n,
      scaleY: e,
      makeAbsolute: t
    };
  }
  writeMeasure(n) {
    var e;
    if (n.makeAbsolute) {
      this.madeAbsolute = !0, this.position = "absolute";
      for (let l of this.manager.tooltipViews)
        l.dom.style.position = "absolute";
    }
    let { visible: t, space: i, scaleX: s, scaleY: r } = n, o = [];
    for (let l = 0; l < this.manager.tooltips.length; l++) {
      let a = this.manager.tooltips[l], h = this.manager.tooltipViews[l], { dom: c } = h, f = n.pos[l], u = n.size[l];
      if (!f || a.clip !== !1 && (f.bottom <= Math.max(t.top, i.top) || f.top >= Math.min(t.bottom, i.bottom) || f.right < Math.max(t.left, i.left) - 0.1 || f.left > Math.min(t.right, i.right) + 0.1)) {
        c.style.top = os;
        continue;
      }
      let d = a.arrow ? h.dom.querySelector(".cm-tooltip-arrow") : null, p = d ? 7 : 0, m = u.right - u.left, g = (e = ef.get(h)) !== null && e !== void 0 ? e : u.bottom - u.top, b = h.offset || zb, v = this.view.textDirection == fe.LTR, k = u.width > i.right - i.left ? v ? i.left : i.right - u.width : v ? Math.max(i.left, Math.min(f.left - (d ? 14 : 0) + b.x, i.right - m)) : Math.min(Math.max(i.left, f.left - m + (d ? 14 : 0) - b.x), i.right - m), w = this.above[l];
      !a.strictSide && (w ? f.top - g - p - b.y < i.top : f.bottom + g + p + b.y > i.bottom) && w == i.bottom - f.bottom > f.top - i.top && (w = this.above[l] = !w);
      let x = (w ? f.top - i.top : i.bottom - f.bottom) - p;
      if (x < g && h.resize !== !1) {
        if (x < this.view.defaultLineHeight) {
          c.style.top = os;
          continue;
        }
        ef.set(h, g), c.style.height = (g = x) / r + "px";
      } else c.style.height && (c.style.height = "");
      let C = w ? f.top - g - p - b.y : f.bottom + p + b.y, A = k + m;
      if (h.overlap !== !0)
        for (let I of o)
          I.left < A && I.right > k && I.top < C + g && I.bottom > C && (C = w ? I.top - g - 2 - p : I.bottom + p + 2);
      if (this.position == "absolute" ? (c.style.top = (C - n.parent.top) / r + "px", tf(c, (k - n.parent.left) / s)) : (c.style.top = C / r + "px", tf(c, k / s)), d) {
        let I = f.left + (v ? b.x : -b.x) - (k + 14 - 7);
        d.style.left = I / s + "px";
      }
      h.overlap !== !0 && o.push({ left: k, top: C, right: A, bottom: C + g }), c.classList.toggle("cm-tooltip-above", w), c.classList.toggle("cm-tooltip-below", !w), h.positioned && h.positioned(n.space);
    }
  }
  maybeMeasure() {
    if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView)))
      for (let n of this.manager.tooltipViews)
        n.dom.style.top = os;
  }
}, {
  eventObservers: {
    scroll() {
      this.maybeMeasure();
    }
  }
});
function tf(n, e) {
  let t = parseInt(n.style.left, 10);
  (isNaN(t) || Math.abs(e - t) > 1) && (n.style.left = e + "px");
}
const Vb = /* @__PURE__ */ _.baseTheme({
  ".cm-tooltip": {
    zIndex: 500,
    boxSizing: "border-box"
  },
  "&light .cm-tooltip": {
    border: "1px solid #bbb",
    backgroundColor: "#f5f5f5"
  },
  "&light .cm-tooltip-section:not(:first-child)": {
    borderTop: "1px solid #bbb"
  },
  "&dark .cm-tooltip": {
    backgroundColor: "#333338",
    color: "white"
  },
  ".cm-tooltip-arrow": {
    height: "7px",
    width: `${7 * 2}px`,
    position: "absolute",
    zIndex: -1,
    overflow: "hidden",
    "&:before, &:after": {
      content: "''",
      position: "absolute",
      width: 0,
      height: 0,
      borderLeft: "7px solid transparent",
      borderRight: "7px solid transparent"
    },
    ".cm-tooltip-above &": {
      bottom: "-7px",
      "&:before": {
        borderTop: "7px solid #bbb"
      },
      "&:after": {
        borderTop: "7px solid #f5f5f5",
        bottom: "1px"
      }
    },
    ".cm-tooltip-below &": {
      top: "-7px",
      "&:before": {
        borderBottom: "7px solid #bbb"
      },
      "&:after": {
        borderBottom: "7px solid #f5f5f5",
        top: "1px"
      }
    }
  },
  "&dark .cm-tooltip .cm-tooltip-arrow": {
    "&:before": {
      borderTopColor: "#333338",
      borderBottomColor: "#333338"
    },
    "&:after": {
      borderTopColor: "transparent",
      borderBottomColor: "transparent"
    }
  }
}), zb = { x: 0, y: 0 }, ih = /* @__PURE__ */ R.define({
  enables: [th, Vb]
}), ao = /* @__PURE__ */ R.define({
  combine: (n) => n.reduce((e, t) => e.concat(t), [])
});
class Fo {
  // Needs to be static so that host tooltip instances always match
  static create(e) {
    return new Fo(e);
  }
  constructor(e) {
    this.view = e, this.mounted = !1, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new tp(e, ao, (t, i) => this.createHostedView(t, i), (t) => t.dom.remove());
  }
  createHostedView(e, t) {
    let i = e.create(this.view);
    return i.dom.classList.add("cm-tooltip-section"), this.dom.insertBefore(i.dom, t ? t.dom.nextSibling : this.dom.firstChild), this.mounted && i.mount && i.mount(this.view), i;
  }
  mount(e) {
    for (let t of this.manager.tooltipViews)
      t.mount && t.mount(e);
    this.mounted = !0;
  }
  positioned(e) {
    for (let t of this.manager.tooltipViews)
      t.positioned && t.positioned(e);
  }
  update(e) {
    this.manager.update(e);
  }
  destroy() {
    var e;
    for (let t of this.manager.tooltipViews)
      (e = t.destroy) === null || e === void 0 || e.call(t);
  }
  passProp(e) {
    let t;
    for (let i of this.manager.tooltipViews) {
      let s = i[e];
      if (s !== void 0) {
        if (t === void 0)
          t = s;
        else if (t !== s)
          return;
      }
    }
    return t;
  }
  get offset() {
    return this.passProp("offset");
  }
  get getCoords() {
    return this.passProp("getCoords");
  }
  get overlap() {
    return this.passProp("overlap");
  }
  get resize() {
    return this.passProp("resize");
  }
}
const $b = /* @__PURE__ */ ih.compute([ao], (n) => {
  let e = n.facet(ao);
  return e.length === 0 ? null : {
    pos: Math.min(...e.map((t) => t.pos)),
    end: Math.max(...e.map((t) => {
      var i;
      return (i = t.end) !== null && i !== void 0 ? i : t.pos;
    })),
    create: Fo.create,
    above: e[0].above,
    arrow: e.some((t) => t.arrow)
  };
});
class Ub {
  constructor(e, t, i, s, r) {
    this.view = e, this.source = t, this.field = i, this.setHover = s, this.hoverTime = r, this.hoverTimeout = -1, this.restartTimeout = -1, this.pending = null, this.lastMove = { x: 0, y: 0, target: e.dom, time: 0 }, this.checkHover = this.checkHover.bind(this), e.dom.addEventListener("mouseleave", this.mouseleave = this.mouseleave.bind(this)), e.dom.addEventListener("mousemove", this.mousemove = this.mousemove.bind(this));
  }
  update() {
    this.pending && (this.pending = null, clearTimeout(this.restartTimeout), this.restartTimeout = setTimeout(() => this.startHover(), 20));
  }
  get active() {
    return this.view.state.field(this.field);
  }
  checkHover() {
    if (this.hoverTimeout = -1, this.active.length)
      return;
    let e = Date.now() - this.lastMove.time;
    e < this.hoverTime ? this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime - e) : this.startHover();
  }
  startHover() {
    clearTimeout(this.restartTimeout);
    let { view: e, lastMove: t } = this, i = e.docView.nearest(t.target);
    if (!i)
      return;
    let s, r = 1;
    if (i instanceof Bi)
      s = i.posAtStart;
    else {
      if (s = e.posAtCoords(t), s == null)
        return;
      let l = e.coordsAtPos(s);
      if (!l || t.y < l.top || t.y > l.bottom || t.x < l.left - e.defaultCharacterWidth || t.x > l.right + e.defaultCharacterWidth)
        return;
      let a = e.bidiSpans(e.state.doc.lineAt(s)).find((c) => c.from <= s && c.to >= s), h = a && a.dir == fe.RTL ? -1 : 1;
      r = t.x < l.left ? -h : h;
    }
    let o = this.source(e, s, r);
    if (o != null && o.then) {
      let l = this.pending = { pos: s };
      o.then((a) => {
        this.pending == l && (this.pending = null, a && !(Array.isArray(a) && !a.length) && e.dispatch({ effects: this.setHover.of(Array.isArray(a) ? a : [a]) }));
      }, (a) => ht(e.state, a, "hover tooltip"));
    } else o && !(Array.isArray(o) && !o.length) && e.dispatch({ effects: this.setHover.of(Array.isArray(o) ? o : [o]) });
  }
  get tooltip() {
    let e = this.view.plugin(th), t = e ? e.manager.tooltips.findIndex((i) => i.create == Fo.create) : -1;
    return t > -1 ? e.manager.tooltipViews[t] : null;
  }
  mousemove(e) {
    var t, i;
    this.lastMove = { x: e.clientX, y: e.clientY, target: e.target, time: Date.now() }, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
    let { active: s, tooltip: r } = this;
    if (s.length && r && !qb(r.dom, e) || this.pending) {
      let { pos: o } = s[0] || this.pending, l = (i = (t = s[0]) === null || t === void 0 ? void 0 : t.end) !== null && i !== void 0 ? i : o;
      (o == l ? this.view.posAtCoords(this.lastMove) != o : !jb(this.view, o, l, e.clientX, e.clientY)) && (this.view.dispatch({ effects: this.setHover.of([]) }), this.pending = null);
    }
  }
  mouseleave(e) {
    clearTimeout(this.hoverTimeout), this.hoverTimeout = -1;
    let { active: t } = this;
    if (t.length) {
      let { tooltip: i } = this;
      i && i.dom.contains(e.relatedTarget) ? this.watchTooltipLeave(i.dom) : this.view.dispatch({ effects: this.setHover.of([]) });
    }
  }
  watchTooltipLeave(e) {
    let t = (i) => {
      e.removeEventListener("mouseleave", t), this.active.length && !this.view.dom.contains(i.relatedTarget) && this.view.dispatch({ effects: this.setHover.of([]) });
    };
    e.addEventListener("mouseleave", t);
  }
  destroy() {
    clearTimeout(this.hoverTimeout), this.view.dom.removeEventListener("mouseleave", this.mouseleave), this.view.dom.removeEventListener("mousemove", this.mousemove);
  }
}
const wr = 4;
function qb(n, e) {
  let { left: t, right: i, top: s, bottom: r } = n.getBoundingClientRect(), o;
  if (o = n.querySelector(".cm-tooltip-arrow")) {
    let l = o.getBoundingClientRect();
    s = Math.min(l.top, s), r = Math.max(l.bottom, r);
  }
  return e.clientX >= t - wr && e.clientX <= i + wr && e.clientY >= s - wr && e.clientY <= r + wr;
}
function jb(n, e, t, i, s, r) {
  let o = n.scrollDOM.getBoundingClientRect(), l = n.documentTop + n.documentPadding.top + n.contentHeight;
  if (o.left > i || o.right < i || o.top > s || Math.min(o.bottom, l) < s)
    return !1;
  let a = n.posAtCoords({ x: i, y: s }, !1);
  return a >= e && a <= t;
}
function Kb(n, e = {}) {
  let t = z.define(), i = Ne.define({
    create() {
      return [];
    },
    update(s, r) {
      if (s.length && (e.hideOnChange && (r.docChanged || r.selection) ? s = [] : e.hideOn && (s = s.filter((o) => !e.hideOn(r, o))), r.docChanged)) {
        let o = [];
        for (let l of s) {
          let a = r.changes.mapPos(l.pos, -1, Xe.TrackDel);
          if (a != null) {
            let h = Object.assign(/* @__PURE__ */ Object.create(null), l);
            h.pos = a, h.end != null && (h.end = r.changes.mapPos(h.end)), o.push(h);
          }
        }
        s = o;
      }
      for (let o of r.effects)
        o.is(t) && (s = o.value), o.is(Gb) && (s = []);
      return s;
    },
    provide: (s) => ao.from(s)
  });
  return {
    active: i,
    extension: [
      i,
      Se.define((s) => new Ub(
        s,
        n,
        i,
        t,
        e.hoverTime || 300
        /* Hover.Time */
      )),
      $b
    ]
  };
}
function ip(n, e) {
  let t = n.plugin(th);
  if (!t)
    return null;
  let i = t.manager.tooltips.indexOf(e);
  return i < 0 ? null : t.manager.tooltipViews[i];
}
const Gb = /* @__PURE__ */ z.define(), nf = /* @__PURE__ */ R.define({
  combine(n) {
    let e, t;
    for (let i of n)
      e = e || i.topContainer, t = t || i.bottomContainer;
    return { topContainer: e, bottomContainer: t };
  }
});
function _s(n, e) {
  let t = n.plugin(np), i = t ? t.specs.indexOf(e) : -1;
  return i > -1 ? t.panels[i] : null;
}
const np = /* @__PURE__ */ Se.fromClass(class {
  constructor(n) {
    this.input = n.state.facet(Rs), this.specs = this.input.filter((t) => t), this.panels = this.specs.map((t) => t(n));
    let e = n.state.facet(nf);
    this.top = new Sr(n, !0, e.topContainer), this.bottom = new Sr(n, !1, e.bottomContainer), this.top.sync(this.panels.filter((t) => t.top)), this.bottom.sync(this.panels.filter((t) => !t.top));
    for (let t of this.panels)
      t.dom.classList.add("cm-panel"), t.mount && t.mount();
  }
  update(n) {
    let e = n.state.facet(nf);
    this.top.container != e.topContainer && (this.top.sync([]), this.top = new Sr(n.view, !0, e.topContainer)), this.bottom.container != e.bottomContainer && (this.bottom.sync([]), this.bottom = new Sr(n.view, !1, e.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
    let t = n.state.facet(Rs);
    if (t != this.input) {
      let i = t.filter((a) => a), s = [], r = [], o = [], l = [];
      for (let a of i) {
        let h = this.specs.indexOf(a), c;
        h < 0 ? (c = a(n.view), l.push(c)) : (c = this.panels[h], c.update && c.update(n)), s.push(c), (c.top ? r : o).push(c);
      }
      this.specs = i, this.panels = s, this.top.sync(r), this.bottom.sync(o);
      for (let a of l)
        a.dom.classList.add("cm-panel"), a.mount && a.mount();
    } else
      for (let i of this.panels)
        i.update && i.update(n);
  }
  destroy() {
    this.top.sync([]), this.bottom.sync([]);
  }
}, {
  provide: (n) => _.scrollMargins.of((e) => {
    let t = e.plugin(n);
    return t && { top: t.top.scrollMargin(), bottom: t.bottom.scrollMargin() };
  })
});
class Sr {
  constructor(e, t, i) {
    this.view = e, this.top = t, this.container = i, this.dom = void 0, this.classes = "", this.panels = [], this.syncClasses();
  }
  sync(e) {
    for (let t of this.panels)
      t.destroy && e.indexOf(t) < 0 && t.destroy();
    this.panels = e, this.syncDOM();
  }
  syncDOM() {
    if (this.panels.length == 0) {
      this.dom && (this.dom.remove(), this.dom = void 0);
      return;
    }
    if (!this.dom) {
      this.dom = document.createElement("div"), this.dom.className = this.top ? "cm-panels cm-panels-top" : "cm-panels cm-panels-bottom", this.dom.style[this.top ? "top" : "bottom"] = "0";
      let t = this.container || this.view.dom;
      t.insertBefore(this.dom, this.top ? t.firstChild : null);
    }
    let e = this.dom.firstChild;
    for (let t of this.panels)
      if (t.dom.parentNode == this.dom) {
        for (; e != t.dom; )
          e = sf(e);
        e = e.nextSibling;
      } else
        this.dom.insertBefore(t.dom, e);
    for (; e; )
      e = sf(e);
  }
  scrollMargin() {
    return !this.dom || this.container ? 0 : Math.max(0, this.top ? this.dom.getBoundingClientRect().bottom - Math.max(0, this.view.scrollDOM.getBoundingClientRect().top) : Math.min(innerHeight, this.view.scrollDOM.getBoundingClientRect().bottom) - this.dom.getBoundingClientRect().top);
  }
  syncClasses() {
    if (!(!this.container || this.classes == this.view.themeClasses)) {
      for (let e of this.classes.split(" "))
        e && this.container.classList.remove(e);
      for (let e of (this.classes = this.view.themeClasses).split(" "))
        e && this.container.classList.add(e);
    }
  }
}
function sf(n) {
  let e = n.nextSibling;
  return n.remove(), e;
}
const Rs = /* @__PURE__ */ R.define({
  enables: np
});
class xi extends cn {
  /**
  @internal
  */
  compare(e) {
    return this == e || this.constructor == e.constructor && this.eq(e);
  }
  /**
  Compare this marker to another marker of the same type.
  */
  eq(e) {
    return !1;
  }
  /**
  Called if the marker has a `toDOM` method and its representation
  was removed from a gutter.
  */
  destroy(e) {
  }
}
xi.prototype.elementClass = "";
xi.prototype.toDOM = void 0;
xi.prototype.mapMode = Xe.TrackBefore;
xi.prototype.startSide = xi.prototype.endSide = -1;
xi.prototype.point = !0;
const $r = /* @__PURE__ */ R.define(), Yb = /* @__PURE__ */ R.define(), Xb = {
  class: "",
  renderEmptyElements: !1,
  elementStyle: "",
  markers: () => Y.empty,
  lineMarker: () => null,
  widgetMarker: () => null,
  lineMarkerChange: null,
  initialSpacer: null,
  updateSpacer: null,
  domEventHandlers: {}
}, xs = /* @__PURE__ */ R.define();
function Jb(n) {
  return [sp(), xs.of({ ...Xb, ...n })];
}
const rf = /* @__PURE__ */ R.define({
  combine: (n) => n.some((e) => e)
});
function sp(n) {
  return [
    Qb
  ];
}
const Qb = /* @__PURE__ */ Se.fromClass(class {
  constructor(n) {
    this.view = n, this.prevViewport = n.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = n.state.facet(xs).map((e) => new lf(n, e));
    for (let e of this.gutters)
      this.dom.appendChild(e.dom);
    this.fixed = !n.state.facet(rf), this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), n.scrollDOM.insertBefore(this.dom, n.contentDOM);
  }
  update(n) {
    if (this.updateGutters(n)) {
      let e = this.prevViewport, t = n.view.viewport, i = Math.min(e.to, t.to) - Math.max(e.from, t.from);
      this.syncGutters(i < (t.to - t.from) * 0.8);
    }
    n.geometryChanged && (this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px"), this.view.state.facet(rf) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : ""), this.prevViewport = n.view.viewport;
  }
  syncGutters(n) {
    let e = this.dom.nextSibling;
    n && this.dom.remove();
    let t = Y.iter(this.view.state.facet($r), this.view.viewport.from), i = [], s = this.gutters.map((r) => new Zb(r, this.view.viewport, -this.view.documentPadding.top));
    for (let r of this.view.viewportLineBlocks)
      if (i.length && (i = []), Array.isArray(r.type)) {
        let o = !0;
        for (let l of r.type)
          if (l.type == Qe.Text && o) {
            va(t, i, l.from);
            for (let a of s)
              a.line(this.view, l, i);
            o = !1;
          } else if (l.widget)
            for (let a of s)
              a.widget(this.view, l);
      } else if (r.type == Qe.Text) {
        va(t, i, r.from);
        for (let o of s)
          o.line(this.view, r, i);
      } else if (r.widget)
        for (let o of s)
          o.widget(this.view, r);
    for (let r of s)
      r.finish();
    n && this.view.scrollDOM.insertBefore(this.dom, e);
  }
  updateGutters(n) {
    let e = n.startState.facet(xs), t = n.state.facet(xs), i = n.docChanged || n.heightChanged || n.viewportChanged || !Y.eq(n.startState.facet($r), n.state.facet($r), n.view.viewport.from, n.view.viewport.to);
    if (e == t)
      for (let s of this.gutters)
        s.update(n) && (i = !0);
    else {
      i = !0;
      let s = [];
      for (let r of t) {
        let o = e.indexOf(r);
        o < 0 ? s.push(new lf(this.view, r)) : (this.gutters[o].update(n), s.push(this.gutters[o]));
      }
      for (let r of this.gutters)
        r.dom.remove(), s.indexOf(r) < 0 && r.destroy();
      for (let r of s)
        this.dom.appendChild(r.dom);
      this.gutters = s;
    }
    return i;
  }
  destroy() {
    for (let n of this.gutters)
      n.destroy();
    this.dom.remove();
  }
}, {
  provide: (n) => _.scrollMargins.of((e) => {
    let t = e.plugin(n);
    return !t || t.gutters.length == 0 || !t.fixed ? null : e.textDirection == fe.LTR ? { left: t.dom.offsetWidth * e.scaleX } : { right: t.dom.offsetWidth * e.scaleX };
  })
});
function of(n) {
  return Array.isArray(n) ? n : [n];
}
function va(n, e, t) {
  for (; n.value && n.from <= t; )
    n.from == t && e.push(n.value), n.next();
}
class Zb {
  constructor(e, t, i) {
    this.gutter = e, this.height = i, this.i = 0, this.cursor = Y.iter(e.markers, t.from);
  }
  addElement(e, t, i) {
    let { gutter: s } = this, r = (t.top - this.height) / e.scaleY, o = t.height / e.scaleY;
    if (this.i == s.elements.length) {
      let l = new rp(e, o, r, i);
      s.elements.push(l), s.dom.appendChild(l.dom);
    } else
      s.elements[this.i].update(e, o, r, i);
    this.height = t.bottom, this.i++;
  }
  line(e, t, i) {
    let s = [];
    va(this.cursor, s, t.from), i.length && (s = s.concat(i));
    let r = this.gutter.config.lineMarker(e, t, s);
    r && s.unshift(r);
    let o = this.gutter;
    s.length == 0 && !o.config.renderEmptyElements || this.addElement(e, t, s);
  }
  widget(e, t) {
    let i = this.gutter.config.widgetMarker(e, t.widget, t), s = i ? [i] : null;
    for (let r of e.state.facet(Yb)) {
      let o = r(e, t.widget, t);
      o && (s || (s = [])).push(o);
    }
    s && this.addElement(e, t, s);
  }
  finish() {
    let e = this.gutter;
    for (; e.elements.length > this.i; ) {
      let t = e.elements.pop();
      e.dom.removeChild(t.dom), t.destroy();
    }
  }
}
class lf {
  constructor(e, t) {
    this.view = e, this.config = t, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
    for (let i in t.domEventHandlers)
      this.dom.addEventListener(i, (s) => {
        let r = s.target, o;
        if (r != this.dom && this.dom.contains(r)) {
          for (; r.parentNode != this.dom; )
            r = r.parentNode;
          let a = r.getBoundingClientRect();
          o = (a.top + a.bottom) / 2;
        } else
          o = s.clientY;
        let l = e.lineBlockAtHeight(o - e.documentTop);
        t.domEventHandlers[i](e, l, s) && s.preventDefault();
      });
    this.markers = of(t.markers(e)), t.initialSpacer && (this.spacer = new rp(e, 0, 0, [t.initialSpacer(e)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none");
  }
  update(e) {
    let t = this.markers;
    if (this.markers = of(this.config.markers(e.view)), this.spacer && this.config.updateSpacer) {
      let s = this.config.updateSpacer(this.spacer.markers[0], e);
      s != this.spacer.markers[0] && this.spacer.update(e.view, 0, 0, [s]);
    }
    let i = e.view.viewport;
    return !Y.eq(this.markers, t, i.from, i.to) || (this.config.lineMarkerChange ? this.config.lineMarkerChange(e) : !1);
  }
  destroy() {
    for (let e of this.elements)
      e.destroy();
  }
}
class rp {
  constructor(e, t, i, s) {
    this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(e, t, i, s);
  }
  update(e, t, i, s) {
    this.height != t && (this.height = t, this.dom.style.height = t + "px"), this.above != i && (this.dom.style.marginTop = (this.above = i) ? i + "px" : ""), ev(this.markers, s) || this.setMarkers(e, s);
  }
  setMarkers(e, t) {
    let i = "cm-gutterElement", s = this.dom.firstChild;
    for (let r = 0, o = 0; ; ) {
      let l = o, a = r < t.length ? t[r++] : null, h = !1;
      if (a) {
        let c = a.elementClass;
        c && (i += " " + c);
        for (let f = o; f < this.markers.length; f++)
          if (this.markers[f].compare(a)) {
            l = f, h = !0;
            break;
          }
      } else
        l = this.markers.length;
      for (; o < l; ) {
        let c = this.markers[o++];
        if (c.toDOM) {
          c.destroy(s);
          let f = s.nextSibling;
          s.remove(), s = f;
        }
      }
      if (!a)
        break;
      a.toDOM && (h ? s = s.nextSibling : this.dom.insertBefore(a.toDOM(e), s)), h && o++;
    }
    this.dom.className = i, this.markers = t;
  }
  destroy() {
    this.setMarkers(null, []);
  }
}
function ev(n, e) {
  if (n.length != e.length)
    return !1;
  for (let t = 0; t < n.length; t++)
    if (!n[t].compare(e[t]))
      return !1;
  return !0;
}
const tv = /* @__PURE__ */ R.define(), iv = /* @__PURE__ */ R.define(), Cn = /* @__PURE__ */ R.define({
  combine(n) {
    return ri(n, { formatNumber: String, domEventHandlers: {} }, {
      domEventHandlers(e, t) {
        let i = Object.assign({}, e);
        for (let s in t) {
          let r = i[s], o = t[s];
          i[s] = r ? (l, a, h) => r(l, a, h) || o(l, a, h) : o;
        }
        return i;
      }
    });
  }
});
class yl extends xi {
  constructor(e) {
    super(), this.number = e;
  }
  eq(e) {
    return this.number == e.number;
  }
  toDOM() {
    return document.createTextNode(this.number);
  }
}
function bl(n, e) {
  return n.state.facet(Cn).formatNumber(e, n.state);
}
const nv = /* @__PURE__ */ xs.compute([Cn], (n) => ({
  class: "cm-lineNumbers",
  renderEmptyElements: !1,
  markers(e) {
    return e.state.facet(tv);
  },
  lineMarker(e, t, i) {
    return i.some((s) => s.toDOM) ? null : new yl(bl(e, e.state.doc.lineAt(t.from).number));
  },
  widgetMarker: (e, t, i) => {
    for (let s of e.state.facet(iv)) {
      let r = s(e, t, i);
      if (r)
        return r;
    }
    return null;
  },
  lineMarkerChange: (e) => e.startState.facet(Cn) != e.state.facet(Cn),
  initialSpacer(e) {
    return new yl(bl(e, af(e.state.doc.lines)));
  },
  updateSpacer(e, t) {
    let i = bl(t.view, af(t.view.state.doc.lines));
    return i == e.number ? e : new yl(i);
  },
  domEventHandlers: n.facet(Cn).domEventHandlers
}));
function sv(n = {}) {
  return [
    Cn.of(n),
    sp(),
    nv
  ];
}
function af(n) {
  let e = 9;
  for (; e < n; )
    e = e * 10 + 9;
  return e;
}
const rv = /* @__PURE__ */ new class extends xi {
  constructor() {
    super(...arguments), this.elementClass = "cm-activeLineGutter";
  }
}(), ov = /* @__PURE__ */ $r.compute(["selection"], (n) => {
  let e = [], t = -1;
  for (let i of n.selection.ranges) {
    let s = n.doc.lineAt(i.head).from;
    s > t && (t = s, e.push(rv.range(s)));
  }
  return Y.of(e);
});
function lv() {
  return ov;
}
const av = 1024;
let hv = 0;
class vl {
  constructor(e, t) {
    this.from = e, this.to = t;
  }
}
class G {
  /**
  Create a new node prop type.
  */
  constructor(e = {}) {
    this.id = hv++, this.perNode = !!e.perNode, this.deserialize = e.deserialize || (() => {
      throw new Error("This node type doesn't define a deserialize function");
    });
  }
  /**
  This is meant to be used with
  [`NodeSet.extend`](#common.NodeSet.extend) or
  [`LRParser.configure`](#lr.ParserConfig.props) to compute
  prop values for each node type in the set. Takes a [match
  object](#common.NodeType^match) or function that returns undefined
  if the node type doesn't get this prop, and the prop's value if
  it does.
  */
  add(e) {
    if (this.perNode)
      throw new RangeError("Can't add per-node props to node types");
    return typeof e != "function" && (e = It.match(e)), (t) => {
      let i = e(t);
      return i === void 0 ? null : [this, i];
    };
  }
}
G.closedBy = new G({ deserialize: (n) => n.split(" ") });
G.openedBy = new G({ deserialize: (n) => n.split(" ") });
G.group = new G({ deserialize: (n) => n.split(" ") });
G.isolate = new G({ deserialize: (n) => {
  if (n && n != "rtl" && n != "ltr" && n != "auto")
    throw new RangeError("Invalid value for isolate: " + n);
  return n || "auto";
} });
G.contextHash = new G({ perNode: !0 });
G.lookAhead = new G({ perNode: !0 });
G.mounted = new G({ perNode: !0 });
class ho {
  constructor(e, t, i) {
    this.tree = e, this.overlay = t, this.parser = i;
  }
  /**
  @internal
  */
  static get(e) {
    return e && e.props && e.props[G.mounted.id];
  }
}
const cv = /* @__PURE__ */ Object.create(null);
class It {
  /**
  @internal
  */
  constructor(e, t, i, s = 0) {
    this.name = e, this.props = t, this.id = i, this.flags = s;
  }
  /**
  Define a node type.
  */
  static define(e) {
    let t = e.props && e.props.length ? /* @__PURE__ */ Object.create(null) : cv, i = (e.top ? 1 : 0) | (e.skipped ? 2 : 0) | (e.error ? 4 : 0) | (e.name == null ? 8 : 0), s = new It(e.name || "", t, e.id, i);
    if (e.props) {
      for (let r of e.props)
        if (Array.isArray(r) || (r = r(s)), r) {
          if (r[0].perNode)
            throw new RangeError("Can't store a per-node prop on a node type");
          t[r[0].id] = r[1];
        }
    }
    return s;
  }
  /**
  Retrieves a node prop for this type. Will return `undefined` if
  the prop isn't present on this node.
  */
  prop(e) {
    return this.props[e.id];
  }
  /**
  True when this is the top node of a grammar.
  */
  get isTop() {
    return (this.flags & 1) > 0;
  }
  /**
  True when this node is produced by a skip rule.
  */
  get isSkipped() {
    return (this.flags & 2) > 0;
  }
  /**
  Indicates whether this is an error node.
  */
  get isError() {
    return (this.flags & 4) > 0;
  }
  /**
  When true, this node type doesn't correspond to a user-declared
  named node, for example because it is used to cache repetition.
  */
  get isAnonymous() {
    return (this.flags & 8) > 0;
  }
  /**
  Returns true when this node's name or one of its
  [groups](#common.NodeProp^group) matches the given string.
  */
  is(e) {
    if (typeof e == "string") {
      if (this.name == e)
        return !0;
      let t = this.prop(G.group);
      return t ? t.indexOf(e) > -1 : !1;
    }
    return this.id == e;
  }
  /**
  Create a function from node types to arbitrary values by
  specifying an object whose property names are node or
  [group](#common.NodeProp^group) names. Often useful with
  [`NodeProp.add`](#common.NodeProp.add). You can put multiple
  names, separated by spaces, in a single property name to map
  multiple node names to a single value.
  */
  static match(e) {
    let t = /* @__PURE__ */ Object.create(null);
    for (let i in e)
      for (let s of i.split(" "))
        t[s] = e[i];
    return (i) => {
      for (let s = i.prop(G.group), r = -1; r < (s ? s.length : 0); r++) {
        let o = t[r < 0 ? i.name : s[r]];
        if (o)
          return o;
      }
    };
  }
}
It.none = new It(
  "",
  /* @__PURE__ */ Object.create(null),
  0,
  8
  /* NodeFlag.Anonymous */
);
const kr = /* @__PURE__ */ new WeakMap(), hf = /* @__PURE__ */ new WeakMap();
var Ie;
(function(n) {
  n[n.ExcludeBuffers = 1] = "ExcludeBuffers", n[n.IncludeAnonymous = 2] = "IncludeAnonymous", n[n.IgnoreMounts = 4] = "IgnoreMounts", n[n.IgnoreOverlays = 8] = "IgnoreOverlays";
})(Ie || (Ie = {}));
class $e {
  /**
  Construct a new tree. See also [`Tree.build`](#common.Tree^build).
  */
  constructor(e, t, i, s, r) {
    if (this.type = e, this.children = t, this.positions = i, this.length = s, this.props = null, r && r.length) {
      this.props = /* @__PURE__ */ Object.create(null);
      for (let [o, l] of r)
        this.props[typeof o == "number" ? o : o.id] = l;
    }
  }
  /**
  @internal
  */
  toString() {
    let e = ho.get(this);
    if (e && !e.overlay)
      return e.tree.toString();
    let t = "";
    for (let i of this.children) {
      let s = i.toString();
      s && (t && (t += ","), t += s);
    }
    return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (t.length ? "(" + t + ")" : "") : t;
  }
  /**
  Get a [tree cursor](#common.TreeCursor) positioned at the top of
  the tree. Mode can be used to [control](#common.IterMode) which
  nodes the cursor visits.
  */
  cursor(e = 0) {
    return new wa(this.topNode, e);
  }
  /**
  Get a [tree cursor](#common.TreeCursor) pointing into this tree
  at the given position and side (see
  [`moveTo`](#common.TreeCursor.moveTo).
  */
  cursorAt(e, t = 0, i = 0) {
    let s = kr.get(this) || this.topNode, r = new wa(s);
    return r.moveTo(e, t), kr.set(this, r._tree), r;
  }
  /**
  Get a [syntax node](#common.SyntaxNode) object for the top of the
  tree.
  */
  get topNode() {
    return new _t(this, 0, 0, null);
  }
  /**
  Get the [syntax node](#common.SyntaxNode) at the given position.
  If `side` is -1, this will move into nodes that end at the
  position. If 1, it'll move into nodes that start at the
  position. With 0, it'll only enter nodes that cover the position
  from both sides.
  
  Note that this will not enter
  [overlays](#common.MountedTree.overlay), and you often want
  [`resolveInner`](#common.Tree.resolveInner) instead.
  */
  resolve(e, t = 0) {
    let i = Ls(kr.get(this) || this.topNode, e, t, !1);
    return kr.set(this, i), i;
  }
  /**
  Like [`resolve`](#common.Tree.resolve), but will enter
  [overlaid](#common.MountedTree.overlay) nodes, producing a syntax node
  pointing into the innermost overlaid tree at the given position
  (with parent links going through all parent structure, including
  the host trees).
  */
  resolveInner(e, t = 0) {
    let i = Ls(hf.get(this) || this.topNode, e, t, !0);
    return hf.set(this, i), i;
  }
  /**
  In some situations, it can be useful to iterate through all
  nodes around a position, including those in overlays that don't
  directly cover the position. This method gives you an iterator
  that will produce all nodes, from small to big, around the given
  position.
  */
  resolveStack(e, t = 0) {
    return dv(this, e, t);
  }
  /**
  Iterate over the tree and its children, calling `enter` for any
  node that touches the `from`/`to` region (if given) before
  running over such a node's children, and `leave` (if given) when
  leaving the node. When `enter` returns `false`, that node will
  not have its children iterated over (or `leave` called).
  */
  iterate(e) {
    let { enter: t, leave: i, from: s = 0, to: r = this.length } = e, o = e.mode || 0, l = (o & Ie.IncludeAnonymous) > 0;
    for (let a = this.cursor(o | Ie.IncludeAnonymous); ; ) {
      let h = !1;
      if (a.from <= r && a.to >= s && (!l && a.type.isAnonymous || t(a) !== !1)) {
        if (a.firstChild())
          continue;
        h = !0;
      }
      for (; h && i && (l || !a.type.isAnonymous) && i(a), !a.nextSibling(); ) {
        if (!a.parent())
          return;
        h = !0;
      }
    }
  }
  /**
  Get the value of the given [node prop](#common.NodeProp) for this
  node. Works with both per-node and per-type props.
  */
  prop(e) {
    return e.perNode ? this.props ? this.props[e.id] : void 0 : this.type.prop(e);
  }
  /**
  Returns the node's [per-node props](#common.NodeProp.perNode) in a
  format that can be passed to the [`Tree`](#common.Tree)
  constructor.
  */
  get propValues() {
    let e = [];
    if (this.props)
      for (let t in this.props)
        e.push([+t, this.props[t]]);
    return e;
  }
  /**
  Balance the direct children of this tree, producing a copy of
  which may have children grouped into subtrees with type
  [`NodeType.none`](#common.NodeType^none).
  */
  balance(e = {}) {
    return this.children.length <= 8 ? this : rh(It.none, this.children, this.positions, 0, this.children.length, 0, this.length, (t, i, s) => new $e(this.type, t, i, s, this.propValues), e.makeTree || ((t, i, s) => new $e(It.none, t, i, s)));
  }
  /**
  Build a tree from a postfix-ordered buffer of node information,
  or a cursor over such a buffer.
  */
  static build(e) {
    return pv(e);
  }
}
$e.empty = new $e(It.none, [], [], 0);
class nh {
  constructor(e, t) {
    this.buffer = e, this.index = t;
  }
  get id() {
    return this.buffer[this.index - 4];
  }
  get start() {
    return this.buffer[this.index - 3];
  }
  get end() {
    return this.buffer[this.index - 2];
  }
  get size() {
    return this.buffer[this.index - 1];
  }
  get pos() {
    return this.index;
  }
  next() {
    this.index -= 4;
  }
  fork() {
    return new nh(this.buffer, this.index);
  }
}
class Ui {
  /**
  Create a tree buffer.
  */
  constructor(e, t, i) {
    this.buffer = e, this.length = t, this.set = i;
  }
  /**
  @internal
  */
  get type() {
    return It.none;
  }
  /**
  @internal
  */
  toString() {
    let e = [];
    for (let t = 0; t < this.buffer.length; )
      e.push(this.childString(t)), t = this.buffer[t + 3];
    return e.join(",");
  }
  /**
  @internal
  */
  childString(e) {
    let t = this.buffer[e], i = this.buffer[e + 3], s = this.set.types[t], r = s.name;
    if (/\W/.test(r) && !s.isError && (r = JSON.stringify(r)), e += 4, i == e)
      return r;
    let o = [];
    for (; e < i; )
      o.push(this.childString(e)), e = this.buffer[e + 3];
    return r + "(" + o.join(",") + ")";
  }
  /**
  @internal
  */
  findChild(e, t, i, s, r) {
    let { buffer: o } = this, l = -1;
    for (let a = e; a != t && !(op(r, s, o[a + 1], o[a + 2]) && (l = a, i > 0)); a = o[a + 3])
      ;
    return l;
  }
  /**
  @internal
  */
  slice(e, t, i) {
    let s = this.buffer, r = new Uint16Array(t - e), o = 0;
    for (let l = e, a = 0; l < t; ) {
      r[a++] = s[l++], r[a++] = s[l++] - i;
      let h = r[a++] = s[l++] - i;
      r[a++] = s[l++] - e, o = Math.max(o, h);
    }
    return new Ui(r, o, this.set);
  }
}
function op(n, e, t, i) {
  switch (n) {
    case -2:
      return t < e;
    case -1:
      return i >= e && t < e;
    case 0:
      return t < e && i > e;
    case 1:
      return t <= e && i > e;
    case 2:
      return i > e;
    case 4:
      return !0;
  }
}
function Ls(n, e, t, i) {
  for (var s; n.from == n.to || (t < 1 ? n.from >= e : n.from > e) || (t > -1 ? n.to <= e : n.to < e); ) {
    let o = !i && n instanceof _t && n.index < 0 ? null : n.parent;
    if (!o)
      return n;
    n = o;
  }
  let r = i ? 0 : Ie.IgnoreOverlays;
  if (i)
    for (let o = n, l = o.parent; l; o = l, l = o.parent)
      o instanceof _t && o.index < 0 && ((s = l.enter(e, t, r)) === null || s === void 0 ? void 0 : s.from) != o.from && (n = l);
  for (; ; ) {
    let o = n.enter(e, t, r);
    if (!o)
      return n;
    n = o;
  }
}
class lp {
  cursor(e = 0) {
    return new wa(this, e);
  }
  getChild(e, t = null, i = null) {
    let s = cf(this, e, t, i);
    return s.length ? s[0] : null;
  }
  getChildren(e, t = null, i = null) {
    return cf(this, e, t, i);
  }
  resolve(e, t = 0) {
    return Ls(this, e, t, !1);
  }
  resolveInner(e, t = 0) {
    return Ls(this, e, t, !0);
  }
  matchContext(e) {
    return xa(this.parent, e);
  }
  enterUnfinishedNodesBefore(e) {
    let t = this.childBefore(e), i = this;
    for (; t; ) {
      let s = t.lastChild;
      if (!s || s.to != t.to)
        break;
      s.type.isError && s.from == s.to ? (i = t, t = s.prevSibling) : t = s;
    }
    return i;
  }
  get node() {
    return this;
  }
  get next() {
    return this.parent;
  }
}
class _t extends lp {
  constructor(e, t, i, s) {
    super(), this._tree = e, this.from = t, this.index = i, this._parent = s;
  }
  get type() {
    return this._tree.type;
  }
  get name() {
    return this._tree.type.name;
  }
  get to() {
    return this.from + this._tree.length;
  }
  nextChild(e, t, i, s, r = 0) {
    for (let o = this; ; ) {
      for (let { children: l, positions: a } = o._tree, h = t > 0 ? l.length : -1; e != h; e += t) {
        let c = l[e], f = a[e] + o.from;
        if (op(s, i, f, f + c.length)) {
          if (c instanceof Ui) {
            if (r & Ie.ExcludeBuffers)
              continue;
            let u = c.findChild(0, c.buffer.length, t, i - f, s);
            if (u > -1)
              return new Fi(new fv(o, c, e, f), null, u);
          } else if (r & Ie.IncludeAnonymous || !c.type.isAnonymous || sh(c)) {
            let u;
            if (!(r & Ie.IgnoreMounts) && (u = ho.get(c)) && !u.overlay)
              return new _t(u.tree, f, e, o);
            let d = new _t(c, f, e, o);
            return r & Ie.IncludeAnonymous || !d.type.isAnonymous ? d : d.nextChild(t < 0 ? c.children.length - 1 : 0, t, i, s);
          }
        }
      }
      if (r & Ie.IncludeAnonymous || !o.type.isAnonymous || (o.index >= 0 ? e = o.index + t : e = t < 0 ? -1 : o._parent._tree.children.length, o = o._parent, !o))
        return null;
    }
  }
  get firstChild() {
    return this.nextChild(
      0,
      1,
      0,
      4
      /* Side.DontCare */
    );
  }
  get lastChild() {
    return this.nextChild(
      this._tree.children.length - 1,
      -1,
      0,
      4
      /* Side.DontCare */
    );
  }
  childAfter(e) {
    return this.nextChild(
      0,
      1,
      e,
      2
      /* Side.After */
    );
  }
  childBefore(e) {
    return this.nextChild(
      this._tree.children.length - 1,
      -1,
      e,
      -2
      /* Side.Before */
    );
  }
  enter(e, t, i = 0) {
    let s;
    if (!(i & Ie.IgnoreOverlays) && (s = ho.get(this._tree)) && s.overlay) {
      let r = e - this.from;
      for (let { from: o, to: l } of s.overlay)
        if ((t > 0 ? o <= r : o < r) && (t < 0 ? l >= r : l > r))
          return new _t(s.tree, s.overlay[0].from + this.from, -1, this);
    }
    return this.nextChild(0, 1, e, t, i);
  }
  nextSignificantParent() {
    let e = this;
    for (; e.type.isAnonymous && e._parent; )
      e = e._parent;
    return e;
  }
  get parent() {
    return this._parent ? this._parent.nextSignificantParent() : null;
  }
  get nextSibling() {
    return this._parent && this.index >= 0 ? this._parent.nextChild(
      this.index + 1,
      1,
      0,
      4
      /* Side.DontCare */
    ) : null;
  }
  get prevSibling() {
    return this._parent && this.index >= 0 ? this._parent.nextChild(
      this.index - 1,
      -1,
      0,
      4
      /* Side.DontCare */
    ) : null;
  }
  get tree() {
    return this._tree;
  }
  toTree() {
    return this._tree;
  }
  /**
  @internal
  */
  toString() {
    return this._tree.toString();
  }
}
function cf(n, e, t, i) {
  let s = n.cursor(), r = [];
  if (!s.firstChild())
    return r;
  if (t != null) {
    for (let o = !1; !o; )
      if (o = s.type.is(t), !s.nextSibling())
        return r;
  }
  for (; ; ) {
    if (i != null && s.type.is(i))
      return r;
    if (s.type.is(e) && r.push(s.node), !s.nextSibling())
      return i == null ? r : [];
  }
}
function xa(n, e, t = e.length - 1) {
  for (let i = n; t >= 0; i = i.parent) {
    if (!i)
      return !1;
    if (!i.type.isAnonymous) {
      if (e[t] && e[t] != i.name)
        return !1;
      t--;
    }
  }
  return !0;
}
class fv {
  constructor(e, t, i, s) {
    this.parent = e, this.buffer = t, this.index = i, this.start = s;
  }
}
class Fi extends lp {
  get name() {
    return this.type.name;
  }
  get from() {
    return this.context.start + this.context.buffer.buffer[this.index + 1];
  }
  get to() {
    return this.context.start + this.context.buffer.buffer[this.index + 2];
  }
  constructor(e, t, i) {
    super(), this.context = e, this._parent = t, this.index = i, this.type = e.buffer.set.types[e.buffer.buffer[i]];
  }
  child(e, t, i) {
    let { buffer: s } = this.context, r = s.findChild(this.index + 4, s.buffer[this.index + 3], e, t - this.context.start, i);
    return r < 0 ? null : new Fi(this.context, this, r);
  }
  get firstChild() {
    return this.child(
      1,
      0,
      4
      /* Side.DontCare */
    );
  }
  get lastChild() {
    return this.child(
      -1,
      0,
      4
      /* Side.DontCare */
    );
  }
  childAfter(e) {
    return this.child(
      1,
      e,
      2
      /* Side.After */
    );
  }
  childBefore(e) {
    return this.child(
      -1,
      e,
      -2
      /* Side.Before */
    );
  }
  enter(e, t, i = 0) {
    if (i & Ie.ExcludeBuffers)
      return null;
    let { buffer: s } = this.context, r = s.findChild(this.index + 4, s.buffer[this.index + 3], t > 0 ? 1 : -1, e - this.context.start, t);
    return r < 0 ? null : new Fi(this.context, this, r);
  }
  get parent() {
    return this._parent || this.context.parent.nextSignificantParent();
  }
  externalSibling(e) {
    return this._parent ? null : this.context.parent.nextChild(
      this.context.index + e,
      e,
      0,
      4
      /* Side.DontCare */
    );
  }
  get nextSibling() {
    let { buffer: e } = this.context, t = e.buffer[this.index + 3];
    return t < (this._parent ? e.buffer[this._parent.index + 3] : e.buffer.length) ? new Fi(this.context, this._parent, t) : this.externalSibling(1);
  }
  get prevSibling() {
    let { buffer: e } = this.context, t = this._parent ? this._parent.index + 4 : 0;
    return this.index == t ? this.externalSibling(-1) : new Fi(this.context, this._parent, e.findChild(
      t,
      this.index,
      -1,
      0,
      4
      /* Side.DontCare */
    ));
  }
  get tree() {
    return null;
  }
  toTree() {
    let e = [], t = [], { buffer: i } = this.context, s = this.index + 4, r = i.buffer[this.index + 3];
    if (r > s) {
      let o = i.buffer[this.index + 1];
      e.push(i.slice(s, r, o)), t.push(0);
    }
    return new $e(this.type, e, t, this.to - this.from);
  }
  /**
  @internal
  */
  toString() {
    return this.context.buffer.childString(this.index);
  }
}
function ap(n) {
  if (!n.length)
    return null;
  let e = 0, t = n[0];
  for (let r = 1; r < n.length; r++) {
    let o = n[r];
    (o.from > t.from || o.to < t.to) && (t = o, e = r);
  }
  let i = t instanceof _t && t.index < 0 ? null : t.parent, s = n.slice();
  return i ? s[e] = i : s.splice(e, 1), new uv(s, t);
}
class uv {
  constructor(e, t) {
    this.heads = e, this.node = t;
  }
  get next() {
    return ap(this.heads);
  }
}
function dv(n, e, t) {
  let i = n.resolveInner(e, t), s = null;
  for (let r = i instanceof _t ? i : i.context.parent; r; r = r.parent)
    if (r.index < 0) {
      let o = r.parent;
      (s || (s = [i])).push(o.resolve(e, t)), r = o;
    } else {
      let o = ho.get(r.tree);
      if (o && o.overlay && o.overlay[0].from <= e && o.overlay[o.overlay.length - 1].to >= e) {
        let l = new _t(o.tree, o.overlay[0].from + r.from, -1, r);
        (s || (s = [i])).push(Ls(l, e, t, !1));
      }
    }
  return s ? ap(s) : i;
}
class wa {
  /**
  Shorthand for `.type.name`.
  */
  get name() {
    return this.type.name;
  }
  /**
  @internal
  */
  constructor(e, t = 0) {
    if (this.mode = t, this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, e instanceof _t)
      this.yieldNode(e);
    else {
      this._tree = e.context.parent, this.buffer = e.context;
      for (let i = e._parent; i; i = i._parent)
        this.stack.unshift(i.index);
      this.bufferNode = e, this.yieldBuf(e.index);
    }
  }
  yieldNode(e) {
    return e ? (this._tree = e, this.type = e.type, this.from = e.from, this.to = e.to, !0) : !1;
  }
  yieldBuf(e, t) {
    this.index = e;
    let { start: i, buffer: s } = this.buffer;
    return this.type = t || s.set.types[s.buffer[e]], this.from = i + s.buffer[e + 1], this.to = i + s.buffer[e + 2], !0;
  }
  /**
  @internal
  */
  yield(e) {
    return e ? e instanceof _t ? (this.buffer = null, this.yieldNode(e)) : (this.buffer = e.context, this.yieldBuf(e.index, e.type)) : !1;
  }
  /**
  @internal
  */
  toString() {
    return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString();
  }
  /**
  @internal
  */
  enterChild(e, t, i) {
    if (!this.buffer)
      return this.yield(this._tree.nextChild(e < 0 ? this._tree._tree.children.length - 1 : 0, e, t, i, this.mode));
    let { buffer: s } = this.buffer, r = s.findChild(this.index + 4, s.buffer[this.index + 3], e, t - this.buffer.start, i);
    return r < 0 ? !1 : (this.stack.push(this.index), this.yieldBuf(r));
  }
  /**
  Move the cursor to this node's first child. When this returns
  false, the node has no child, and the cursor has not been moved.
  */
  firstChild() {
    return this.enterChild(
      1,
      0,
      4
      /* Side.DontCare */
    );
  }
  /**
  Move the cursor to this node's last child.
  */
  lastChild() {
    return this.enterChild(
      -1,
      0,
      4
      /* Side.DontCare */
    );
  }
  /**
  Move the cursor to the first child that ends after `pos`.
  */
  childAfter(e) {
    return this.enterChild(
      1,
      e,
      2
      /* Side.After */
    );
  }
  /**
  Move to the last child that starts before `pos`.
  */
  childBefore(e) {
    return this.enterChild(
      -1,
      e,
      -2
      /* Side.Before */
    );
  }
  /**
  Move the cursor to the child around `pos`. If side is -1 the
  child may end at that position, when 1 it may start there. This
  will also enter [overlaid](#common.MountedTree.overlay)
  [mounted](#common.NodeProp^mounted) trees unless `overlays` is
  set to false.
  */
  enter(e, t, i = this.mode) {
    return this.buffer ? i & Ie.ExcludeBuffers ? !1 : this.enterChild(1, e, t) : this.yield(this._tree.enter(e, t, i));
  }
  /**
  Move to the node's parent node, if this isn't the top node.
  */
  parent() {
    if (!this.buffer)
      return this.yieldNode(this.mode & Ie.IncludeAnonymous ? this._tree._parent : this._tree.parent);
    if (this.stack.length)
      return this.yieldBuf(this.stack.pop());
    let e = this.mode & Ie.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
    return this.buffer = null, this.yieldNode(e);
  }
  /**
  @internal
  */
  sibling(e) {
    if (!this.buffer)
      return this._tree._parent ? this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + e, e, 0, 4, this.mode)) : !1;
    let { buffer: t } = this.buffer, i = this.stack.length - 1;
    if (e < 0) {
      let s = i < 0 ? 0 : this.stack[i] + 4;
      if (this.index != s)
        return this.yieldBuf(t.findChild(
          s,
          this.index,
          -1,
          0,
          4
          /* Side.DontCare */
        ));
    } else {
      let s = t.buffer[this.index + 3];
      if (s < (i < 0 ? t.buffer.length : t.buffer[this.stack[i] + 3]))
        return this.yieldBuf(s);
    }
    return i < 0 ? this.yield(this.buffer.parent.nextChild(this.buffer.index + e, e, 0, 4, this.mode)) : !1;
  }
  /**
  Move to this node's next sibling, if any.
  */
  nextSibling() {
    return this.sibling(1);
  }
  /**
  Move to this node's previous sibling, if any.
  */
  prevSibling() {
    return this.sibling(-1);
  }
  atLastNode(e) {
    let t, i, { buffer: s } = this;
    if (s) {
      if (e > 0) {
        if (this.index < s.buffer.buffer.length)
          return !1;
      } else
        for (let r = 0; r < this.index; r++)
          if (s.buffer.buffer[r + 3] < this.index)
            return !1;
      ({ index: t, parent: i } = s);
    } else
      ({ index: t, _parent: i } = this._tree);
    for (; i; { index: t, _parent: i } = i)
      if (t > -1)
        for (let r = t + e, o = e < 0 ? -1 : i._tree.children.length; r != o; r += e) {
          let l = i._tree.children[r];
          if (this.mode & Ie.IncludeAnonymous || l instanceof Ui || !l.type.isAnonymous || sh(l))
            return !1;
        }
    return !0;
  }
  move(e, t) {
    if (t && this.enterChild(
      e,
      0,
      4
      /* Side.DontCare */
    ))
      return !0;
    for (; ; ) {
      if (this.sibling(e))
        return !0;
      if (this.atLastNode(e) || !this.parent())
        return !1;
    }
  }
  /**
  Move to the next node in a
  [pre-order](https://en.wikipedia.org/wiki/Tree_traversal#Pre-order,_NLR)
  traversal, going from a node to its first child or, if the
  current node is empty or `enter` is false, its next sibling or
  the next sibling of the first parent node that has one.
  */
  next(e = !0) {
    return this.move(1, e);
  }
  /**
  Move to the next node in a last-to-first pre-order traversal. A
  node is followed by its last child or, if it has none, its
  previous sibling or the previous sibling of the first parent
  node that has one.
  */
  prev(e = !0) {
    return this.move(-1, e);
  }
  /**
  Move the cursor to the innermost node that covers `pos`. If
  `side` is -1, it will enter nodes that end at `pos`. If it is 1,
  it will enter nodes that start at `pos`.
  */
  moveTo(e, t = 0) {
    for (; (this.from == this.to || (t < 1 ? this.from >= e : this.from > e) || (t > -1 ? this.to <= e : this.to < e)) && this.parent(); )
      ;
    for (; this.enterChild(1, e, t); )
      ;
    return this;
  }
  /**
  Get a [syntax node](#common.SyntaxNode) at the cursor's current
  position.
  */
  get node() {
    if (!this.buffer)
      return this._tree;
    let e = this.bufferNode, t = null, i = 0;
    if (e && e.context == this.buffer)
      e: for (let s = this.index, r = this.stack.length; r >= 0; ) {
        for (let o = e; o; o = o._parent)
          if (o.index == s) {
            if (s == this.index)
              return o;
            t = o, i = r + 1;
            break e;
          }
        s = this.stack[--r];
      }
    for (let s = i; s < this.stack.length; s++)
      t = new Fi(this.buffer, t, this.stack[s]);
    return this.bufferNode = new Fi(this.buffer, t, this.index);
  }
  /**
  Get the [tree](#common.Tree) that represents the current node, if
  any. Will return null when the node is in a [tree
  buffer](#common.TreeBuffer).
  */
  get tree() {
    return this.buffer ? null : this._tree._tree;
  }
  /**
  Iterate over the current node and all its descendants, calling
  `enter` when entering a node and `leave`, if given, when leaving
  one. When `enter` returns `false`, any children of that node are
  skipped, and `leave` isn't called for it.
  */
  iterate(e, t) {
    for (let i = 0; ; ) {
      let s = !1;
      if (this.type.isAnonymous || e(this) !== !1) {
        if (this.firstChild()) {
          i++;
          continue;
        }
        this.type.isAnonymous || (s = !0);
      }
      for (; ; ) {
        if (s && t && t(this), s = this.type.isAnonymous, !i)
          return;
        if (this.nextSibling())
          break;
        this.parent(), i--, s = !0;
      }
    }
  }
  /**
  Test whether the current node matches a given context—a sequence
  of direct parent node names. Empty strings in the context array
  are treated as wildcards.
  */
  matchContext(e) {
    if (!this.buffer)
      return xa(this.node.parent, e);
    let { buffer: t } = this.buffer, { types: i } = t.set;
    for (let s = e.length - 1, r = this.stack.length - 1; s >= 0; r--) {
      if (r < 0)
        return xa(this._tree, e, s);
      let o = i[t.buffer[this.stack[r]]];
      if (!o.isAnonymous) {
        if (e[s] && e[s] != o.name)
          return !1;
        s--;
      }
    }
    return !0;
  }
}
function sh(n) {
  return n.children.some((e) => e instanceof Ui || !e.type.isAnonymous || sh(e));
}
function pv(n) {
  var e;
  let { buffer: t, nodeSet: i, maxBufferLength: s = av, reused: r = [], minRepeatType: o = i.types.length } = n, l = Array.isArray(t) ? new nh(t, t.length) : t, a = i.types, h = 0, c = 0;
  function f(x, C, A, I, H, U) {
    let { id: P, start: B, end: K, size: q } = l, ee = c, ke = h;
    for (; q < 0; )
      if (l.next(), q == -1) {
        let X = r[P];
        A.push(X), I.push(B - x);
        return;
      } else if (q == -3) {
        h = P;
        return;
      } else if (q == -4) {
        c = P;
        return;
      } else
        throw new RangeError(`Unrecognized record size: ${q}`);
    let Ee = a[P], Fe, me, De = B - x;
    if (K - B <= s && (me = g(l.pos - C, H))) {
      let X = new Uint16Array(me.size - me.skip), Oe = l.pos - me.size, Q = X.length;
      for (; l.pos > Oe; )
        Q = b(me.start, X, Q);
      Fe = new Ui(X, K - me.start, i), De = me.start - x;
    } else {
      let X = l.pos - q;
      l.next();
      let Oe = [], Q = [], dt = P >= o ? P : -1, te = 0, wt = K;
      for (; l.pos > X; )
        dt >= 0 && l.id == dt && l.size >= 0 ? (l.end <= wt - s && (p(Oe, Q, B, te, l.end, wt, dt, ee, ke), te = Oe.length, wt = l.end), l.next()) : U > 2500 ? u(B, X, Oe, Q) : f(B, X, Oe, Q, dt, U + 1);
      if (dt >= 0 && te > 0 && te < Oe.length && p(Oe, Q, B, te, B, wt, dt, ee, ke), Oe.reverse(), Q.reverse(), dt > -1 && te > 0) {
        let ki = d(Ee, ke);
        Fe = rh(Ee, Oe, Q, 0, Oe.length, 0, K - B, ki, ki);
      } else
        Fe = m(Ee, Oe, Q, K - B, ee - K, ke);
    }
    A.push(Fe), I.push(De);
  }
  function u(x, C, A, I) {
    let H = [], U = 0, P = -1;
    for (; l.pos > C; ) {
      let { id: B, start: K, end: q, size: ee } = l;
      if (ee > 4)
        l.next();
      else {
        if (P > -1 && K < P)
          break;
        P < 0 && (P = q - s), H.push(B, K, q), U++, l.next();
      }
    }
    if (U) {
      let B = new Uint16Array(U * 4), K = H[H.length - 2];
      for (let q = H.length - 3, ee = 0; q >= 0; q -= 3)
        B[ee++] = H[q], B[ee++] = H[q + 1] - K, B[ee++] = H[q + 2] - K, B[ee++] = ee;
      A.push(new Ui(B, H[2] - K, i)), I.push(K - x);
    }
  }
  function d(x, C) {
    return (A, I, H) => {
      let U = 0, P = A.length - 1, B, K;
      if (P >= 0 && (B = A[P]) instanceof $e) {
        if (!P && B.type == x && B.length == H)
          return B;
        (K = B.prop(G.lookAhead)) && (U = I[P] + B.length + K);
      }
      return m(x, A, I, H, U, C);
    };
  }
  function p(x, C, A, I, H, U, P, B, K) {
    let q = [], ee = [];
    for (; x.length > I; )
      q.push(x.pop()), ee.push(C.pop() + A - H);
    x.push(m(i.types[P], q, ee, U - H, B - U, K)), C.push(H - A);
  }
  function m(x, C, A, I, H, U, P) {
    if (U) {
      let B = [G.contextHash, U];
      P = P ? [B].concat(P) : [B];
    }
    if (H > 25) {
      let B = [G.lookAhead, H];
      P = P ? [B].concat(P) : [B];
    }
    return new $e(x, C, A, I, P);
  }
  function g(x, C) {
    let A = l.fork(), I = 0, H = 0, U = 0, P = A.end - s, B = { size: 0, start: 0, skip: 0 };
    e: for (let K = A.pos - x; A.pos > K; ) {
      let q = A.size;
      if (A.id == C && q >= 0) {
        B.size = I, B.start = H, B.skip = U, U += 4, I += 4, A.next();
        continue;
      }
      let ee = A.pos - q;
      if (q < 0 || ee < K || A.start < P)
        break;
      let ke = A.id >= o ? 4 : 0, Ee = A.start;
      for (A.next(); A.pos > ee; ) {
        if (A.size < 0)
          if (A.size == -3)
            ke += 4;
          else
            break e;
        else A.id >= o && (ke += 4);
        A.next();
      }
      H = Ee, I += q, U += ke;
    }
    return (C < 0 || I == x) && (B.size = I, B.start = H, B.skip = U), B.size > 4 ? B : void 0;
  }
  function b(x, C, A) {
    let { id: I, start: H, end: U, size: P } = l;
    if (l.next(), P >= 0 && I < o) {
      let B = A;
      if (P > 4) {
        let K = l.pos - (P - 4);
        for (; l.pos > K; )
          A = b(x, C, A);
      }
      C[--A] = B, C[--A] = U - x, C[--A] = H - x, C[--A] = I;
    } else P == -3 ? h = I : P == -4 && (c = I);
    return A;
  }
  let v = [], k = [];
  for (; l.pos > 0; )
    f(n.start || 0, n.bufferStart || 0, v, k, -1, 0);
  let w = (e = n.length) !== null && e !== void 0 ? e : v.length ? k[0] + v[0].length : 0;
  return new $e(a[n.topID], v.reverse(), k.reverse(), w);
}
const ff = /* @__PURE__ */ new WeakMap();
function Ur(n, e) {
  if (!n.isAnonymous || e instanceof Ui || e.type != n)
    return 1;
  let t = ff.get(e);
  if (t == null) {
    t = 1;
    for (let i of e.children) {
      if (i.type != n || !(i instanceof $e)) {
        t = 1;
        break;
      }
      t += Ur(n, i);
    }
    ff.set(e, t);
  }
  return t;
}
function rh(n, e, t, i, s, r, o, l, a) {
  let h = 0;
  for (let p = i; p < s; p++)
    h += Ur(n, e[p]);
  let c = Math.ceil(
    h * 1.5 / 8
    /* Balance.BranchFactor */
  ), f = [], u = [];
  function d(p, m, g, b, v) {
    for (let k = g; k < b; ) {
      let w = k, x = m[k], C = Ur(n, p[k]);
      for (k++; k < b; k++) {
        let A = Ur(n, p[k]);
        if (C + A >= c)
          break;
        C += A;
      }
      if (k == w + 1) {
        if (C > c) {
          let A = p[w];
          d(A.children, A.positions, 0, A.children.length, m[w] + v);
          continue;
        }
        f.push(p[w]);
      } else {
        let A = m[k - 1] + p[k - 1].length - x;
        f.push(rh(n, p, m, w, k, x, A, null, a));
      }
      u.push(x + v - r);
    }
  }
  return d(e, t, i, s, 0), (l || a)(f, u, o);
}
class an {
  /**
  Construct a tree fragment. You'll usually want to use
  [`addTree`](#common.TreeFragment^addTree) and
  [`applyChanges`](#common.TreeFragment^applyChanges) instead of
  calling this directly.
  */
  constructor(e, t, i, s, r = !1, o = !1) {
    this.from = e, this.to = t, this.tree = i, this.offset = s, this.open = (r ? 1 : 0) | (o ? 2 : 0);
  }
  /**
  Whether the start of the fragment represents the start of a
  parse, or the end of a change. (In the second case, it may not
  be safe to reuse some nodes at the start, depending on the
  parsing algorithm.)
  */
  get openStart() {
    return (this.open & 1) > 0;
  }
  /**
  Whether the end of the fragment represents the end of a
  full-document parse, or the start of a change.
  */
  get openEnd() {
    return (this.open & 2) > 0;
  }
  /**
  Create a set of fragments from a freshly parsed tree, or update
  an existing set of fragments by replacing the ones that overlap
  with a tree with content from the new tree. When `partial` is
  true, the parse is treated as incomplete, and the resulting
  fragment has [`openEnd`](#common.TreeFragment.openEnd) set to
  true.
  */
  static addTree(e, t = [], i = !1) {
    let s = [new an(0, e.length, e, 0, !1, i)];
    for (let r of t)
      r.to > e.length && s.push(r);
    return s;
  }
  /**
  Apply a set of edits to an array of fragments, removing or
  splitting fragments as necessary to remove edited ranges, and
  adjusting offsets for fragments that moved.
  */
  static applyChanges(e, t, i = 128) {
    if (!t.length)
      return e;
    let s = [], r = 1, o = e.length ? e[0] : null;
    for (let l = 0, a = 0, h = 0; ; l++) {
      let c = l < t.length ? t[l] : null, f = c ? c.fromA : 1e9;
      if (f - a >= i)
        for (; o && o.from < f; ) {
          let u = o;
          if (a >= u.from || f <= u.to || h) {
            let d = Math.max(u.from, a) - h, p = Math.min(u.to, f) - h;
            u = d >= p ? null : new an(d, p, u.tree, u.offset + h, l > 0, !!c);
          }
          if (u && s.push(u), o.to > f)
            break;
          o = r < e.length ? e[r++] : null;
        }
      if (!c)
        break;
      a = c.toA, h = c.toA - c.toB;
    }
    return s;
  }
}
class mv {
  /**
  Start a parse, returning a [partial parse](#common.PartialParse)
  object. [`fragments`](#common.TreeFragment) can be passed in to
  make the parse incremental.
  
  By default, the entire input is parsed. You can pass `ranges`,
  which should be a sorted array of non-empty, non-overlapping
  ranges, to parse only those ranges. The tree returned in that
  case will start at `ranges[0].from`.
  */
  startParse(e, t, i) {
    return typeof e == "string" && (e = new gv(e)), i = i ? i.length ? i.map((s) => new vl(s.from, s.to)) : [new vl(0, 0)] : [new vl(0, e.length)], this.createParse(e, t || [], i);
  }
  /**
  Run a full parse, returning the resulting tree.
  */
  parse(e, t, i) {
    let s = this.startParse(e, t, i);
    for (; ; ) {
      let r = s.advance();
      if (r)
        return r;
    }
  }
}
class gv {
  constructor(e) {
    this.string = e;
  }
  get length() {
    return this.string.length;
  }
  chunk(e) {
    return this.string.slice(e);
  }
  get lineChunks() {
    return !1;
  }
  read(e, t) {
    return this.string.slice(e, t);
  }
}
new G({ perNode: !0 });
let yv = 0;
class Tt {
  /**
  @internal
  */
  constructor(e, t, i, s) {
    this.name = e, this.set = t, this.base = i, this.modified = s, this.id = yv++;
  }
  toString() {
    let { name: e } = this;
    for (let t of this.modified)
      t.name && (e = `${t.name}(${e})`);
    return e;
  }
  static define(e, t) {
    let i = typeof e == "string" ? e : "?";
    if (e instanceof Tt && (t = e), t != null && t.base)
      throw new Error("Can not derive from a modified tag");
    let s = new Tt(i, [], null, []);
    if (s.set.push(s), t)
      for (let r of t.set)
        s.set.push(r);
    return s;
  }
  /**
  Define a tag _modifier_, which is a function that, given a tag,
  will return a tag that is a subtag of the original. Applying the
  same modifier to a twice tag will return the same value (`m1(t1)
  == m1(t1)`) and applying multiple modifiers will, regardless or
  order, produce the same tag (`m1(m2(t1)) == m2(m1(t1))`).
  
  When multiple modifiers are applied to a given base tag, each
  smaller set of modifiers is registered as a parent, so that for
  example `m1(m2(m3(t1)))` is a subtype of `m1(m2(t1))`,
  `m1(m3(t1)`, and so on.
  */
  static defineModifier(e) {
    let t = new co(e);
    return (i) => i.modified.indexOf(t) > -1 ? i : co.get(i.base || i, i.modified.concat(t).sort((s, r) => s.id - r.id));
  }
}
let bv = 0;
class co {
  constructor(e) {
    this.name = e, this.instances = [], this.id = bv++;
  }
  static get(e, t) {
    if (!t.length)
      return e;
    let i = t[0].instances.find((l) => l.base == e && vv(t, l.modified));
    if (i)
      return i;
    let s = [], r = new Tt(e.name, s, e, t);
    for (let l of t)
      l.instances.push(r);
    let o = xv(t);
    for (let l of e.set)
      if (!l.modified.length)
        for (let a of o)
          s.push(co.get(l, a));
    return r;
  }
}
function vv(n, e) {
  return n.length == e.length && n.every((t, i) => t == e[i]);
}
function xv(n) {
  let e = [[]];
  for (let t = 0; t < n.length; t++)
    for (let i = 0, s = e.length; i < s; i++)
      e.push(e[i].concat(n[t]));
  return e.sort((t, i) => i.length - t.length);
}
function wv(n) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t in n) {
    let i = n[t];
    Array.isArray(i) || (i = [i]);
    for (let s of t.split(" "))
      if (s) {
        let r = [], o = 2, l = s;
        for (let f = 0; ; ) {
          if (l == "..." && f > 0 && f + 3 == s.length) {
            o = 1;
            break;
          }
          let u = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(l);
          if (!u)
            throw new RangeError("Invalid path: " + s);
          if (r.push(u[0] == "*" ? "" : u[0][0] == '"' ? JSON.parse(u[0]) : u[0]), f += u[0].length, f == s.length)
            break;
          let d = s[f++];
          if (f == s.length && d == "!") {
            o = 0;
            break;
          }
          if (d != "/")
            throw new RangeError("Invalid path: " + s);
          l = s.slice(f);
        }
        let a = r.length - 1, h = r[a];
        if (!h)
          throw new RangeError("Invalid path: " + s);
        let c = new fo(i, o, a > 0 ? r.slice(0, a) : null);
        e[h] = c.sort(e[h]);
      }
  }
  return hp.add(e);
}
const hp = new G();
class fo {
  constructor(e, t, i, s) {
    this.tags = e, this.mode = t, this.context = i, this.next = s;
  }
  get opaque() {
    return this.mode == 0;
  }
  get inherit() {
    return this.mode == 1;
  }
  sort(e) {
    return !e || e.depth < this.depth ? (this.next = e, this) : (e.next = this.sort(e.next), e);
  }
  get depth() {
    return this.context ? this.context.length : 0;
  }
}
fo.empty = new fo([], 2, null);
function cp(n, e) {
  let t = /* @__PURE__ */ Object.create(null);
  for (let r of n)
    if (!Array.isArray(r.tag))
      t[r.tag.id] = r.class;
    else
      for (let o of r.tag)
        t[o.id] = r.class;
  let { scope: i, all: s = null } = e || {};
  return {
    style: (r) => {
      let o = s;
      for (let l of r)
        for (let a of l.set) {
          let h = t[a.id];
          if (h) {
            o = o ? o + " " + h : h;
            break;
          }
        }
      return o;
    },
    scope: i
  };
}
function Sv(n, e) {
  let t = null;
  for (let i of n) {
    let s = i.style(e);
    s && (t = t ? t + " " + s : s);
  }
  return t;
}
function kv(n, e, t, i = 0, s = n.length) {
  let r = new Cv(i, Array.isArray(e) ? e : [e], t);
  r.highlightRange(n.cursor(), i, s, "", r.highlighters), r.flush(s);
}
class Cv {
  constructor(e, t, i) {
    this.at = e, this.highlighters = t, this.span = i, this.class = "";
  }
  startSpan(e, t) {
    t != this.class && (this.flush(e), e > this.at && (this.at = e), this.class = t);
  }
  flush(e) {
    e > this.at && this.class && this.span(this.at, e, this.class);
  }
  highlightRange(e, t, i, s, r) {
    let { type: o, from: l, to: a } = e;
    if (l >= i || a <= t)
      return;
    o.isTop && (r = this.highlighters.filter((d) => !d.scope || d.scope(o)));
    let h = s, c = Av(e) || fo.empty, f = Sv(r, c.tags);
    if (f && (h && (h += " "), h += f, c.mode == 1 && (s += (s ? " " : "") + f)), this.startSpan(Math.max(t, l), h), c.opaque)
      return;
    let u = e.tree && e.tree.prop(G.mounted);
    if (u && u.overlay) {
      let d = e.node.enter(u.overlay[0].from + l, 1), p = this.highlighters.filter((g) => !g.scope || g.scope(u.tree.type)), m = e.firstChild();
      for (let g = 0, b = l; ; g++) {
        let v = g < u.overlay.length ? u.overlay[g] : null, k = v ? v.from + l : a, w = Math.max(t, b), x = Math.min(i, k);
        if (w < x && m)
          for (; e.from < x && (this.highlightRange(e, w, x, s, r), this.startSpan(Math.min(x, e.to), h), !(e.to >= k || !e.nextSibling())); )
            ;
        if (!v || k > i)
          break;
        b = v.to + l, b > t && (this.highlightRange(d.cursor(), Math.max(t, v.from + l), Math.min(i, b), "", p), this.startSpan(Math.min(i, b), h));
      }
      m && e.parent();
    } else if (e.firstChild()) {
      u && (s = "");
      do
        if (!(e.to <= t)) {
          if (e.from >= i)
            break;
          this.highlightRange(e, t, i, s, r), this.startSpan(Math.min(i, e.to), h);
        }
      while (e.nextSibling());
      e.parent();
    }
  }
}
function Av(n) {
  let e = n.type.prop(hp);
  for (; e && e.context && !n.matchContext(e.context); )
    e = e.next;
  return e || null;
}
const T = Tt.define, Cr = T(), _i = T(), uf = T(_i), df = T(_i), Ri = T(), Ar = T(Ri), xl = T(Ri), jt = T(), en = T(jt), Ut = T(), qt = T(), Sa = T(), ls = T(Sa), Mr = T(), E = {
  /**
  A comment.
  */
  comment: Cr,
  /**
  A line [comment](#highlight.tags.comment).
  */
  lineComment: T(Cr),
  /**
  A block [comment](#highlight.tags.comment).
  */
  blockComment: T(Cr),
  /**
  A documentation [comment](#highlight.tags.comment).
  */
  docComment: T(Cr),
  /**
  Any kind of identifier.
  */
  name: _i,
  /**
  The [name](#highlight.tags.name) of a variable.
  */
  variableName: T(_i),
  /**
  A type [name](#highlight.tags.name).
  */
  typeName: uf,
  /**
  A tag name (subtag of [`typeName`](#highlight.tags.typeName)).
  */
  tagName: T(uf),
  /**
  A property or field [name](#highlight.tags.name).
  */
  propertyName: df,
  /**
  An attribute name (subtag of [`propertyName`](#highlight.tags.propertyName)).
  */
  attributeName: T(df),
  /**
  The [name](#highlight.tags.name) of a class.
  */
  className: T(_i),
  /**
  A label [name](#highlight.tags.name).
  */
  labelName: T(_i),
  /**
  A namespace [name](#highlight.tags.name).
  */
  namespace: T(_i),
  /**
  The [name](#highlight.tags.name) of a macro.
  */
  macroName: T(_i),
  /**
  A literal value.
  */
  literal: Ri,
  /**
  A string [literal](#highlight.tags.literal).
  */
  string: Ar,
  /**
  A documentation [string](#highlight.tags.string).
  */
  docString: T(Ar),
  /**
  A character literal (subtag of [string](#highlight.tags.string)).
  */
  character: T(Ar),
  /**
  An attribute value (subtag of [string](#highlight.tags.string)).
  */
  attributeValue: T(Ar),
  /**
  A number [literal](#highlight.tags.literal).
  */
  number: xl,
  /**
  An integer [number](#highlight.tags.number) literal.
  */
  integer: T(xl),
  /**
  A floating-point [number](#highlight.tags.number) literal.
  */
  float: T(xl),
  /**
  A boolean [literal](#highlight.tags.literal).
  */
  bool: T(Ri),
  /**
  Regular expression [literal](#highlight.tags.literal).
  */
  regexp: T(Ri),
  /**
  An escape [literal](#highlight.tags.literal), for example a
  backslash escape in a string.
  */
  escape: T(Ri),
  /**
  A color [literal](#highlight.tags.literal).
  */
  color: T(Ri),
  /**
  A URL [literal](#highlight.tags.literal).
  */
  url: T(Ri),
  /**
  A language keyword.
  */
  keyword: Ut,
  /**
  The [keyword](#highlight.tags.keyword) for the self or this
  object.
  */
  self: T(Ut),
  /**
  The [keyword](#highlight.tags.keyword) for null.
  */
  null: T(Ut),
  /**
  A [keyword](#highlight.tags.keyword) denoting some atomic value.
  */
  atom: T(Ut),
  /**
  A [keyword](#highlight.tags.keyword) that represents a unit.
  */
  unit: T(Ut),
  /**
  A modifier [keyword](#highlight.tags.keyword).
  */
  modifier: T(Ut),
  /**
  A [keyword](#highlight.tags.keyword) that acts as an operator.
  */
  operatorKeyword: T(Ut),
  /**
  A control-flow related [keyword](#highlight.tags.keyword).
  */
  controlKeyword: T(Ut),
  /**
  A [keyword](#highlight.tags.keyword) that defines something.
  */
  definitionKeyword: T(Ut),
  /**
  A [keyword](#highlight.tags.keyword) related to defining or
  interfacing with modules.
  */
  moduleKeyword: T(Ut),
  /**
  An operator.
  */
  operator: qt,
  /**
  An [operator](#highlight.tags.operator) that dereferences something.
  */
  derefOperator: T(qt),
  /**
  Arithmetic-related [operator](#highlight.tags.operator).
  */
  arithmeticOperator: T(qt),
  /**
  Logical [operator](#highlight.tags.operator).
  */
  logicOperator: T(qt),
  /**
  Bit [operator](#highlight.tags.operator).
  */
  bitwiseOperator: T(qt),
  /**
  Comparison [operator](#highlight.tags.operator).
  */
  compareOperator: T(qt),
  /**
  [Operator](#highlight.tags.operator) that updates its operand.
  */
  updateOperator: T(qt),
  /**
  [Operator](#highlight.tags.operator) that defines something.
  */
  definitionOperator: T(qt),
  /**
  Type-related [operator](#highlight.tags.operator).
  */
  typeOperator: T(qt),
  /**
  Control-flow [operator](#highlight.tags.operator).
  */
  controlOperator: T(qt),
  /**
  Program or markup punctuation.
  */
  punctuation: Sa,
  /**
  [Punctuation](#highlight.tags.punctuation) that separates
  things.
  */
  separator: T(Sa),
  /**
  Bracket-style [punctuation](#highlight.tags.punctuation).
  */
  bracket: ls,
  /**
  Angle [brackets](#highlight.tags.bracket) (usually `<` and `>`
  tokens).
  */
  angleBracket: T(ls),
  /**
  Square [brackets](#highlight.tags.bracket) (usually `[` and `]`
  tokens).
  */
  squareBracket: T(ls),
  /**
  Parentheses (usually `(` and `)` tokens). Subtag of
  [bracket](#highlight.tags.bracket).
  */
  paren: T(ls),
  /**
  Braces (usually `{` and `}` tokens). Subtag of
  [bracket](#highlight.tags.bracket).
  */
  brace: T(ls),
  /**
  Content, for example plain text in XML or markup documents.
  */
  content: jt,
  /**
  [Content](#highlight.tags.content) that represents a heading.
  */
  heading: en,
  /**
  A level 1 [heading](#highlight.tags.heading).
  */
  heading1: T(en),
  /**
  A level 2 [heading](#highlight.tags.heading).
  */
  heading2: T(en),
  /**
  A level 3 [heading](#highlight.tags.heading).
  */
  heading3: T(en),
  /**
  A level 4 [heading](#highlight.tags.heading).
  */
  heading4: T(en),
  /**
  A level 5 [heading](#highlight.tags.heading).
  */
  heading5: T(en),
  /**
  A level 6 [heading](#highlight.tags.heading).
  */
  heading6: T(en),
  /**
  A prose [content](#highlight.tags.content) separator (such as a horizontal rule).
  */
  contentSeparator: T(jt),
  /**
  [Content](#highlight.tags.content) that represents a list.
  */
  list: T(jt),
  /**
  [Content](#highlight.tags.content) that represents a quote.
  */
  quote: T(jt),
  /**
  [Content](#highlight.tags.content) that is emphasized.
  */
  emphasis: T(jt),
  /**
  [Content](#highlight.tags.content) that is styled strong.
  */
  strong: T(jt),
  /**
  [Content](#highlight.tags.content) that is part of a link.
  */
  link: T(jt),
  /**
  [Content](#highlight.tags.content) that is styled as code or
  monospace.
  */
  monospace: T(jt),
  /**
  [Content](#highlight.tags.content) that has a strike-through
  style.
  */
  strikethrough: T(jt),
  /**
  Inserted text in a change-tracking format.
  */
  inserted: T(),
  /**
  Deleted text.
  */
  deleted: T(),
  /**
  Changed text.
  */
  changed: T(),
  /**
  An invalid or unsyntactic element.
  */
  invalid: T(),
  /**
  Metadata or meta-instruction.
  */
  meta: Mr,
  /**
  [Metadata](#highlight.tags.meta) that applies to the entire
  document.
  */
  documentMeta: T(Mr),
  /**
  [Metadata](#highlight.tags.meta) that annotates or adds
  attributes to a given syntactic element.
  */
  annotation: T(Mr),
  /**
  Processing instruction or preprocessor directive. Subtag of
  [meta](#highlight.tags.meta).
  */
  processingInstruction: T(Mr),
  /**
  [Modifier](#highlight.Tag^defineModifier) that indicates that a
  given element is being defined. Expected to be used with the
  various [name](#highlight.tags.name) tags.
  */
  definition: Tt.defineModifier("definition"),
  /**
  [Modifier](#highlight.Tag^defineModifier) that indicates that
  something is constant. Mostly expected to be used with
  [variable names](#highlight.tags.variableName).
  */
  constant: Tt.defineModifier("constant"),
  /**
  [Modifier](#highlight.Tag^defineModifier) used to indicate that
  a [variable](#highlight.tags.variableName) or [property
  name](#highlight.tags.propertyName) is being called or defined
  as a function.
  */
  function: Tt.defineModifier("function"),
  /**
  [Modifier](#highlight.Tag^defineModifier) that can be applied to
  [names](#highlight.tags.name) to indicate that they belong to
  the language's standard environment.
  */
  standard: Tt.defineModifier("standard"),
  /**
  [Modifier](#highlight.Tag^defineModifier) that indicates a given
  [names](#highlight.tags.name) is local to some scope.
  */
  local: Tt.defineModifier("local"),
  /**
  A generic variant [modifier](#highlight.Tag^defineModifier) that
  can be used to tag language-specific alternative variants of
  some common tag. It is recommended for themes to define special
  forms of at least the [string](#highlight.tags.string) and
  [variable name](#highlight.tags.variableName) tags, since those
  come up a lot.
  */
  special: Tt.defineModifier("special")
};
for (let n in E) {
  let e = E[n];
  e instanceof Tt && (e.name = n);
}
cp([
  { tag: E.link, class: "tok-link" },
  { tag: E.heading, class: "tok-heading" },
  { tag: E.emphasis, class: "tok-emphasis" },
  { tag: E.strong, class: "tok-strong" },
  { tag: E.keyword, class: "tok-keyword" },
  { tag: E.atom, class: "tok-atom" },
  { tag: E.bool, class: "tok-bool" },
  { tag: E.url, class: "tok-url" },
  { tag: E.labelName, class: "tok-labelName" },
  { tag: E.inserted, class: "tok-inserted" },
  { tag: E.deleted, class: "tok-deleted" },
  { tag: E.literal, class: "tok-literal" },
  { tag: E.string, class: "tok-string" },
  { tag: E.number, class: "tok-number" },
  { tag: [E.regexp, E.escape, E.special(E.string)], class: "tok-string2" },
  { tag: E.variableName, class: "tok-variableName" },
  { tag: E.local(E.variableName), class: "tok-variableName tok-local" },
  { tag: E.definition(E.variableName), class: "tok-variableName tok-definition" },
  { tag: E.special(E.variableName), class: "tok-variableName2" },
  { tag: E.definition(E.propertyName), class: "tok-propertyName tok-definition" },
  { tag: E.typeName, class: "tok-typeName" },
  { tag: E.namespace, class: "tok-namespace" },
  { tag: E.className, class: "tok-className" },
  { tag: E.macroName, class: "tok-macroName" },
  { tag: E.propertyName, class: "tok-propertyName" },
  { tag: E.operator, class: "tok-operator" },
  { tag: E.comment, class: "tok-comment" },
  { tag: E.meta, class: "tok-meta" },
  { tag: E.invalid, class: "tok-invalid" },
  { tag: E.punctuation, class: "tok-punctuation" }
]);
var wl;
const ps = /* @__PURE__ */ new G(), Mv = /* @__PURE__ */ new G();
class Jt {
  /**
  Construct a language object. If you need to invoke this
  directly, first define a data facet with
  [`defineLanguageFacet`](https://codemirror.net/6/docs/ref/#language.defineLanguageFacet), and then
  configure your parser to [attach](https://codemirror.net/6/docs/ref/#language.languageDataProp) it
  to the language's outer syntax node.
  */
  constructor(e, t, i = [], s = "") {
    this.data = e, this.name = s, J.prototype.hasOwnProperty("tree") || Object.defineProperty(J.prototype, "tree", { get() {
      return Ue(this);
    } }), this.parser = t, this.extension = [
      qi.of(this),
      J.languageData.of((r, o, l) => {
        let a = pf(r, o, l), h = a.type.prop(ps);
        if (!h)
          return [];
        let c = r.facet(h), f = a.type.prop(Mv);
        if (f) {
          let u = a.resolve(o - a.from, l);
          for (let d of f)
            if (d.test(u, r)) {
              let p = r.facet(d.facet);
              return d.type == "replace" ? p : p.concat(c);
            }
        }
        return c;
      })
    ].concat(i);
  }
  /**
  Query whether this language is active at the given position.
  */
  isActiveAt(e, t, i = -1) {
    return pf(e, t, i).type.prop(ps) == this.data;
  }
  /**
  Find the document regions that were parsed using this language.
  The returned regions will _include_ any nested languages rooted
  in this language, when those exist.
  */
  findRegions(e) {
    let t = e.facet(qi);
    if ((t == null ? void 0 : t.data) == this.data)
      return [{ from: 0, to: e.doc.length }];
    if (!t || !t.allowsNesting)
      return [];
    let i = [], s = (r, o) => {
      if (r.prop(ps) == this.data) {
        i.push({ from: o, to: o + r.length });
        return;
      }
      let l = r.prop(G.mounted);
      if (l) {
        if (l.tree.prop(ps) == this.data) {
          if (l.overlay)
            for (let a of l.overlay)
              i.push({ from: a.from + o, to: a.to + o });
          else
            i.push({ from: o, to: o + r.length });
          return;
        } else if (l.overlay) {
          let a = i.length;
          if (s(l.tree, l.overlay[0].from + o), i.length > a)
            return;
        }
      }
      for (let a = 0; a < r.children.length; a++) {
        let h = r.children[a];
        h instanceof $e && s(h, r.positions[a] + o);
      }
    };
    return s(Ue(e), 0), i;
  }
  /**
  Indicates whether this language allows nested languages. The
  default implementation returns true.
  */
  get allowsNesting() {
    return !0;
  }
}
Jt.setState = /* @__PURE__ */ z.define();
function pf(n, e, t) {
  let i = n.facet(qi), s = Ue(n).topNode;
  if (!i || i.allowsNesting)
    for (let r = s; r; r = r.enter(e, t, Ie.ExcludeBuffers))
      r.type.isTop && (s = r);
  return s;
}
function Ue(n) {
  let e = n.field(Jt.state, !1);
  return e ? e.tree : $e.empty;
}
class Tv {
  /**
  Create an input object for the given document.
  */
  constructor(e) {
    this.doc = e, this.cursorPos = 0, this.string = "", this.cursor = e.iter();
  }
  get length() {
    return this.doc.length;
  }
  syncTo(e) {
    return this.string = this.cursor.next(e - this.cursorPos).value, this.cursorPos = e + this.string.length, this.cursorPos - this.string.length;
  }
  chunk(e) {
    return this.syncTo(e), this.string;
  }
  get lineChunks() {
    return !0;
  }
  read(e, t) {
    let i = this.cursorPos - this.string.length;
    return e < i || t >= this.cursorPos ? this.doc.sliceString(e, t) : this.string.slice(e - i, t - i);
  }
}
let as = null;
class uo {
  constructor(e, t, i = [], s, r, o, l, a) {
    this.parser = e, this.state = t, this.fragments = i, this.tree = s, this.treeLen = r, this.viewport = o, this.skipped = l, this.scheduleOn = a, this.parse = null, this.tempSkipped = [];
  }
  /**
  @internal
  */
  static create(e, t, i) {
    return new uo(e, t, [], $e.empty, 0, i, [], null);
  }
  startParse() {
    return this.parser.startParse(new Tv(this.state.doc), this.fragments);
  }
  /**
  @internal
  */
  work(e, t) {
    return t != null && t >= this.state.doc.length && (t = void 0), this.tree != $e.empty && this.isDone(t ?? this.state.doc.length) ? (this.takeTree(), !0) : this.withContext(() => {
      var i;
      if (typeof e == "number") {
        let s = Date.now() + e;
        e = () => Date.now() > s;
      }
      for (this.parse || (this.parse = this.startParse()), t != null && (this.parse.stoppedAt == null || this.parse.stoppedAt > t) && t < this.state.doc.length && this.parse.stopAt(t); ; ) {
        let s = this.parse.advance();
        if (s)
          if (this.fragments = this.withoutTempSkipped(an.addTree(s, this.fragments, this.parse.stoppedAt != null)), this.treeLen = (i = this.parse.stoppedAt) !== null && i !== void 0 ? i : this.state.doc.length, this.tree = s, this.parse = null, this.treeLen < (t ?? this.state.doc.length))
            this.parse = this.startParse();
          else
            return !0;
        if (e())
          return !1;
      }
    });
  }
  /**
  @internal
  */
  takeTree() {
    let e, t;
    this.parse && (e = this.parse.parsedPos) >= this.treeLen && ((this.parse.stoppedAt == null || this.parse.stoppedAt > e) && this.parse.stopAt(e), this.withContext(() => {
      for (; !(t = this.parse.advance()); )
        ;
    }), this.treeLen = e, this.tree = t, this.fragments = this.withoutTempSkipped(an.addTree(this.tree, this.fragments, !0)), this.parse = null);
  }
  withContext(e) {
    let t = as;
    as = this;
    try {
      return e();
    } finally {
      as = t;
    }
  }
  withoutTempSkipped(e) {
    for (let t; t = this.tempSkipped.pop(); )
      e = mf(e, t.from, t.to);
    return e;
  }
  /**
  @internal
  */
  changes(e, t) {
    let { fragments: i, tree: s, treeLen: r, viewport: o, skipped: l } = this;
    if (this.takeTree(), !e.empty) {
      let a = [];
      if (e.iterChangedRanges((h, c, f, u) => a.push({ fromA: h, toA: c, fromB: f, toB: u })), i = an.applyChanges(i, a), s = $e.empty, r = 0, o = { from: e.mapPos(o.from, -1), to: e.mapPos(o.to, 1) }, this.skipped.length) {
        l = [];
        for (let h of this.skipped) {
          let c = e.mapPos(h.from, 1), f = e.mapPos(h.to, -1);
          c < f && l.push({ from: c, to: f });
        }
      }
    }
    return new uo(this.parser, t, i, s, r, o, l, this.scheduleOn);
  }
  /**
  @internal
  */
  updateViewport(e) {
    if (this.viewport.from == e.from && this.viewport.to == e.to)
      return !1;
    this.viewport = e;
    let t = this.skipped.length;
    for (let i = 0; i < this.skipped.length; i++) {
      let { from: s, to: r } = this.skipped[i];
      s < e.to && r > e.from && (this.fragments = mf(this.fragments, s, r), this.skipped.splice(i--, 1));
    }
    return this.skipped.length >= t ? !1 : (this.reset(), !0);
  }
  /**
  @internal
  */
  reset() {
    this.parse && (this.takeTree(), this.parse = null);
  }
  /**
  Notify the parse scheduler that the given region was skipped
  because it wasn't in view, and the parse should be restarted
  when it comes into view.
  */
  skipUntilInView(e, t) {
    this.skipped.push({ from: e, to: t });
  }
  /**
  Returns a parser intended to be used as placeholder when
  asynchronously loading a nested parser. It'll skip its input and
  mark it as not-really-parsed, so that the next update will parse
  it again.
  
  When `until` is given, a reparse will be scheduled when that
  promise resolves.
  */
  static getSkippingParser(e) {
    return new class extends mv {
      createParse(t, i, s) {
        let r = s[0].from, o = s[s.length - 1].to;
        return {
          parsedPos: r,
          advance() {
            let a = as;
            if (a) {
              for (let h of s)
                a.tempSkipped.push(h);
              e && (a.scheduleOn = a.scheduleOn ? Promise.all([a.scheduleOn, e]) : e);
            }
            return this.parsedPos = o, new $e(It.none, [], [], o - r);
          },
          stoppedAt: null,
          stopAt() {
          }
        };
      }
    }();
  }
  /**
  @internal
  */
  isDone(e) {
    e = Math.min(e, this.state.doc.length);
    let t = this.fragments;
    return this.treeLen >= e && t.length && t[0].from == 0 && t[0].to >= e;
  }
  /**
  Get the context for the current parse, or `null` if no editor
  parse is in progress.
  */
  static get() {
    return as;
  }
}
function mf(n, e, t) {
  return an.applyChanges(n, [{ fromA: e, toA: t, fromB: e, toB: t }]);
}
class Bn {
  constructor(e) {
    this.context = e, this.tree = e.tree;
  }
  apply(e) {
    if (!e.docChanged && this.tree == this.context.tree)
      return this;
    let t = this.context.changes(e.changes, e.state), i = this.context.treeLen == e.startState.doc.length ? void 0 : Math.max(e.changes.mapPos(this.context.treeLen), t.viewport.to);
    return t.work(20, i) || t.takeTree(), new Bn(t);
  }
  static init(e) {
    let t = Math.min(3e3, e.doc.length), i = uo.create(e.facet(qi).parser, e, { from: 0, to: t });
    return i.work(20, t) || i.takeTree(), new Bn(i);
  }
}
Jt.state = /* @__PURE__ */ Ne.define({
  create: Bn.init,
  update(n, e) {
    for (let t of e.effects)
      if (t.is(Jt.setState))
        return t.value;
    return e.startState.facet(qi) != e.state.facet(qi) ? Bn.init(e.state) : n.apply(e);
  }
});
let fp = (n) => {
  let e = setTimeout(
    () => n(),
    500
    /* Work.MaxPause */
  );
  return () => clearTimeout(e);
};
typeof requestIdleCallback < "u" && (fp = (n) => {
  let e = -1, t = setTimeout(
    () => {
      e = requestIdleCallback(n, {
        timeout: 400
        /* Work.MinPause */
      });
    },
    100
    /* Work.MinPause */
  );
  return () => e < 0 ? clearTimeout(t) : cancelIdleCallback(e);
});
const Sl = typeof navigator < "u" && (!((wl = navigator.scheduling) === null || wl === void 0) && wl.isInputPending) ? () => navigator.scheduling.isInputPending() : null, Ev = /* @__PURE__ */ Se.fromClass(class {
  constructor(e) {
    this.view = e, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork();
  }
  update(e) {
    let t = this.view.state.field(Jt.state).context;
    (t.updateViewport(e.view.viewport) || this.view.viewport.to > t.treeLen) && this.scheduleWork(), (e.docChanged || e.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(t);
  }
  scheduleWork() {
    if (this.working)
      return;
    let { state: e } = this.view, t = e.field(Jt.state);
    (t.tree != t.context.tree || !t.context.isDone(e.doc.length)) && (this.working = fp(this.work));
  }
  work(e) {
    this.working = null;
    let t = Date.now();
    if (this.chunkEnd < t && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = t + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0)
      return;
    let { state: i, viewport: { to: s } } = this.view, r = i.field(Jt.state);
    if (r.tree == r.context.tree && r.context.isDone(
      s + 1e5
      /* Work.MaxParseAhead */
    ))
      return;
    let o = Date.now() + Math.min(this.chunkBudget, 100, e && !Sl ? Math.max(25, e.timeRemaining() - 5) : 1e9), l = r.context.treeLen < s && i.doc.length > s + 1e3, a = r.context.work(() => Sl && Sl() || Date.now() > o, s + (l ? 0 : 1e5));
    this.chunkBudget -= Date.now() - t, (a || this.chunkBudget <= 0) && (r.context.takeTree(), this.view.dispatch({ effects: Jt.setState.of(new Bn(r.context)) })), this.chunkBudget > 0 && !(a && !l) && this.scheduleWork(), this.checkAsyncSchedule(r.context);
  }
  checkAsyncSchedule(e) {
    e.scheduleOn && (this.workScheduled++, e.scheduleOn.then(() => this.scheduleWork()).catch((t) => ht(this.view.state, t)).then(() => this.workScheduled--), e.scheduleOn = null);
  }
  destroy() {
    this.working && this.working();
  }
  isWorking() {
    return !!(this.working || this.workScheduled > 0);
  }
}, {
  eventHandlers: { focus() {
    this.scheduleWork();
  } }
}), qi = /* @__PURE__ */ R.define({
  combine(n) {
    return n.length ? n[0] : null;
  },
  enables: (n) => [
    Jt.state,
    Ev,
    _.contentAttributes.compute([n], (e) => {
      let t = e.facet(n);
      return t && t.name ? { "data-language": t.name } : {};
    })
  ]
}), Dv = /* @__PURE__ */ R.define(), oh = /* @__PURE__ */ R.define({
  combine: (n) => {
    if (!n.length)
      return "  ";
    let e = n[0];
    if (!e || /\S/.test(e) || Array.from(e).some((t) => t != e[0]))
      throw new Error("Invalid indent unit: " + JSON.stringify(n[0]));
    return e;
  }
});
function po(n) {
  let e = n.facet(oh);
  return e.charCodeAt(0) == 9 ? n.tabSize * e.length : e.length;
}
function Ps(n, e) {
  let t = "", i = n.tabSize, s = n.facet(oh)[0];
  if (s == "	") {
    for (; e >= i; )
      t += "	", e -= i;
    s = " ";
  }
  for (let r = 0; r < e; r++)
    t += s;
  return t;
}
function lh(n, e) {
  n instanceof J && (n = new Ho(n));
  for (let i of n.state.facet(Dv)) {
    let s = i(n, e);
    if (s !== void 0)
      return s;
  }
  let t = Ue(n.state);
  return t.length >= e ? _v(n, t, e) : null;
}
class Ho {
  /**
  Create an indent context.
  */
  constructor(e, t = {}) {
    this.state = e, this.options = t, this.unit = po(e);
  }
  /**
  Get a description of the line at the given position, taking
  [simulated line
  breaks](https://codemirror.net/6/docs/ref/#language.IndentContext.constructor^options.simulateBreak)
  into account. If there is such a break at `pos`, the `bias`
  argument determines whether the part of the line line before or
  after the break is used.
  */
  lineAt(e, t = 1) {
    let i = this.state.doc.lineAt(e), { simulateBreak: s, simulateDoubleBreak: r } = this.options;
    return s != null && s >= i.from && s <= i.to ? r && s == e ? { text: "", from: e } : (t < 0 ? s < e : s <= e) ? { text: i.text.slice(s - i.from), from: s } : { text: i.text.slice(0, s - i.from), from: i.from } : i;
  }
  /**
  Get the text directly after `pos`, either the entire line
  or the next 100 characters, whichever is shorter.
  */
  textAfterPos(e, t = 1) {
    if (this.options.simulateDoubleBreak && e == this.options.simulateBreak)
      return "";
    let { text: i, from: s } = this.lineAt(e, t);
    return i.slice(e - s, Math.min(i.length, e + 100 - s));
  }
  /**
  Find the column for the given position.
  */
  column(e, t = 1) {
    let { text: i, from: s } = this.lineAt(e, t), r = this.countColumn(i, e - s), o = this.options.overrideIndentation ? this.options.overrideIndentation(s) : -1;
    return o > -1 && (r += o - this.countColumn(i, i.search(/\S|$/))), r;
  }
  /**
  Find the column position (taking tabs into account) of the given
  position in the given string.
  */
  countColumn(e, t = e.length) {
    return Vn(e, this.state.tabSize, t);
  }
  /**
  Find the indentation column of the line at the given point.
  */
  lineIndent(e, t = 1) {
    let { text: i, from: s } = this.lineAt(e, t), r = this.options.overrideIndentation;
    if (r) {
      let o = r(s);
      if (o > -1)
        return o;
    }
    return this.countColumn(i, i.search(/\S|$/));
  }
  /**
  Returns the [simulated line
  break](https://codemirror.net/6/docs/ref/#language.IndentContext.constructor^options.simulateBreak)
  for this context, if any.
  */
  get simulatedBreak() {
    return this.options.simulateBreak || null;
  }
}
const Ov = /* @__PURE__ */ new G();
function _v(n, e, t) {
  let i = e.resolveStack(t), s = e.resolveInner(t, -1).resolve(t, 0).enterUnfinishedNodesBefore(t);
  if (s != i.node) {
    let r = [];
    for (let o = s; o && !(o.from < i.node.from || o.to > i.node.to || o.from == i.node.from && o.type == i.node.type); o = o.parent)
      r.push(o);
    for (let o = r.length - 1; o >= 0; o--)
      i = { node: r[o], next: i };
  }
  return up(i, n, t);
}
function up(n, e, t) {
  for (let i = n; i; i = i.next) {
    let s = Lv(i.node);
    if (s)
      return s(ah.create(e, t, i));
  }
  return 0;
}
function Rv(n) {
  return n.pos == n.options.simulateBreak && n.options.simulateDoubleBreak;
}
function Lv(n) {
  let e = n.type.prop(Ov);
  if (e)
    return e;
  let t = n.firstChild, i;
  if (t && (i = t.type.prop(G.closedBy))) {
    let s = n.lastChild, r = s && i.indexOf(s.name) > -1;
    return (o) => Nv(o, !0, 1, void 0, r && !Rv(o) ? s.from : void 0);
  }
  return n.parent == null ? Pv : null;
}
function Pv() {
  return 0;
}
class ah extends Ho {
  constructor(e, t, i) {
    super(e.state, e.options), this.base = e, this.pos = t, this.context = i;
  }
  /**
  The syntax tree node to which the indentation strategy
  applies.
  */
  get node() {
    return this.context.node;
  }
  /**
  @internal
  */
  static create(e, t, i) {
    return new ah(e, t, i);
  }
  /**
  Get the text directly after `this.pos`, either the entire line
  or the next 100 characters, whichever is shorter.
  */
  get textAfter() {
    return this.textAfterPos(this.pos);
  }
  /**
  Get the indentation at the reference line for `this.node`, which
  is the line on which it starts, unless there is a node that is
  _not_ a parent of this node covering the start of that line. If
  so, the line at the start of that node is tried, again skipping
  on if it is covered by another such node.
  */
  get baseIndent() {
    return this.baseIndentFor(this.node);
  }
  /**
  Get the indentation for the reference line of the given node
  (see [`baseIndent`](https://codemirror.net/6/docs/ref/#language.TreeIndentContext.baseIndent)).
  */
  baseIndentFor(e) {
    let t = this.state.doc.lineAt(e.from);
    for (; ; ) {
      let i = e.resolve(t.from);
      for (; i.parent && i.parent.from == i.from; )
        i = i.parent;
      if (Iv(i, e))
        break;
      t = this.state.doc.lineAt(i.from);
    }
    return this.lineIndent(t.from);
  }
  /**
  Continue looking for indentations in the node's parent nodes,
  and return the result of that.
  */
  continue() {
    return up(this.context.next, this.base, this.pos);
  }
}
function Iv(n, e) {
  for (let t = e; t; t = t.parent)
    if (n == t)
      return !0;
  return !1;
}
function Bv(n) {
  let e = n.node, t = e.childAfter(e.from), i = e.lastChild;
  if (!t)
    return null;
  let s = n.options.simulateBreak, r = n.state.doc.lineAt(t.from), o = s == null || s <= r.from ? r.to : Math.min(r.to, s);
  for (let l = t.to; ; ) {
    let a = e.childAfter(l);
    if (!a || a == i)
      return null;
    if (!a.type.isSkipped) {
      if (a.from >= o)
        return null;
      let h = /^ */.exec(r.text.slice(t.to - r.from))[0].length;
      return { from: t.from, to: t.to + h };
    }
    l = a.to;
  }
}
function Nv(n, e, t, i, s) {
  let r = n.textAfter, o = r.match(/^\s*/)[0].length, l = i && r.slice(o, o + i.length) == i || s == n.pos + o, a = Bv(n);
  return a ? l ? n.column(a.from) : n.column(a.to) : n.baseIndent + (l ? 0 : n.unit * t);
}
const Fv = 200;
function Hv() {
  return J.transactionFilter.of((n) => {
    if (!n.docChanged || !n.isUserEvent("input.type") && !n.isUserEvent("input.complete"))
      return n;
    let e = n.startState.languageDataAt("indentOnInput", n.startState.selection.main.head);
    if (!e.length)
      return n;
    let t = n.newDoc, { head: i } = n.newSelection.main, s = t.lineAt(i);
    if (i > s.from + Fv)
      return n;
    let r = t.sliceString(s.from, i);
    if (!e.some((h) => h.test(r)))
      return n;
    let { state: o } = n, l = -1, a = [];
    for (let { head: h } of o.selection.ranges) {
      let c = o.doc.lineAt(h);
      if (c.from == l)
        continue;
      l = c.from;
      let f = lh(o, c.from);
      if (f == null)
        continue;
      let u = /^\s*/.exec(c.text)[0], d = Ps(o, f);
      u != d && a.push({ from: c.from, to: c.from + u.length, insert: d });
    }
    return a.length ? [n, { changes: a, sequential: !0 }] : n;
  });
}
const Wv = /* @__PURE__ */ R.define(), Vv = /* @__PURE__ */ new G();
function zv(n, e, t) {
  let i = Ue(n);
  if (i.length < t)
    return null;
  let s = i.resolveStack(t, 1), r = null;
  for (let o = s; o; o = o.next) {
    let l = o.node;
    if (l.to <= t || l.from > t)
      continue;
    if (r && l.from < e)
      break;
    let a = l.type.prop(Vv);
    if (a && (l.to < i.length - 50 || i.length == n.doc.length || !$v(l))) {
      let h = a(l, n);
      h && h.from <= t && h.from >= e && h.to > t && (r = h);
    }
  }
  return r;
}
function $v(n) {
  let e = n.lastChild;
  return e && e.to == n.to && e.type.isError;
}
function mo(n, e, t) {
  for (let i of n.facet(Wv)) {
    let s = i(n, e, t);
    if (s)
      return s;
  }
  return zv(n, e, t);
}
function dp(n, e) {
  let t = e.mapPos(n.from, 1), i = e.mapPos(n.to, -1);
  return t >= i ? void 0 : { from: t, to: i };
}
const Wo = /* @__PURE__ */ z.define({ map: dp }), js = /* @__PURE__ */ z.define({ map: dp });
function pp(n) {
  let e = [];
  for (let { head: t } of n.state.selection.ranges)
    e.some((i) => i.from <= t && i.to >= t) || e.push(n.lineBlockAt(t));
  return e;
}
const pn = /* @__PURE__ */ Ne.define({
  create() {
    return F.none;
  },
  update(n, e) {
    n = n.map(e.changes);
    for (let t of e.effects)
      if (t.is(Wo) && !Uv(n, t.value.from, t.value.to)) {
        let { preparePlaceholder: i } = e.state.facet(yp), s = i ? F.replace({ widget: new Jv(i(e.state, t.value)) }) : gf;
        n = n.update({ add: [s.range(t.value.from, t.value.to)] });
      } else t.is(js) && (n = n.update({
        filter: (i, s) => t.value.from != i || t.value.to != s,
        filterFrom: t.value.from,
        filterTo: t.value.to
      }));
    if (e.selection) {
      let t = !1, { head: i } = e.selection.main;
      n.between(i, i, (s, r) => {
        s < i && r > i && (t = !0);
      }), t && (n = n.update({
        filterFrom: i,
        filterTo: i,
        filter: (s, r) => r <= i || s >= i
      }));
    }
    return n;
  },
  provide: (n) => _.decorations.from(n),
  toJSON(n, e) {
    let t = [];
    return n.between(0, e.doc.length, (i, s) => {
      t.push(i, s);
    }), t;
  },
  fromJSON(n) {
    if (!Array.isArray(n) || n.length % 2)
      throw new RangeError("Invalid JSON for fold state");
    let e = [];
    for (let t = 0; t < n.length; ) {
      let i = n[t++], s = n[t++];
      if (typeof i != "number" || typeof s != "number")
        throw new RangeError("Invalid JSON for fold state");
      e.push(gf.range(i, s));
    }
    return F.set(e, !0);
  }
});
function go(n, e, t) {
  var i;
  let s = null;
  return (i = n.field(pn, !1)) === null || i === void 0 || i.between(e, t, (r, o) => {
    (!s || s.from > r) && (s = { from: r, to: o });
  }), s;
}
function Uv(n, e, t) {
  let i = !1;
  return n.between(e, e, (s, r) => {
    s == e && r == t && (i = !0);
  }), i;
}
function mp(n, e) {
  return n.field(pn, !1) ? e : e.concat(z.appendConfig.of(bp()));
}
const qv = (n) => {
  for (let e of pp(n)) {
    let t = mo(n.state, e.from, e.to);
    if (t)
      return n.dispatch({ effects: mp(n.state, [Wo.of(t), gp(n, t)]) }), !0;
  }
  return !1;
}, jv = (n) => {
  if (!n.state.field(pn, !1))
    return !1;
  let e = [];
  for (let t of pp(n)) {
    let i = go(n.state, t.from, t.to);
    i && e.push(js.of(i), gp(n, i, !1));
  }
  return e.length && n.dispatch({ effects: e }), e.length > 0;
};
function gp(n, e, t = !0) {
  let i = n.state.doc.lineAt(e.from).number, s = n.state.doc.lineAt(e.to).number;
  return _.announce.of(`${n.state.phrase(t ? "Folded lines" : "Unfolded lines")} ${i} ${n.state.phrase("to")} ${s}.`);
}
const Kv = (n) => {
  let { state: e } = n, t = [];
  for (let i = 0; i < e.doc.length; ) {
    let s = n.lineBlockAt(i), r = mo(e, s.from, s.to);
    r && t.push(Wo.of(r)), i = (r ? n.lineBlockAt(r.to) : s).to + 1;
  }
  return t.length && n.dispatch({ effects: mp(n.state, t) }), !!t.length;
}, Gv = (n) => {
  let e = n.state.field(pn, !1);
  if (!e || !e.size)
    return !1;
  let t = [];
  return e.between(0, n.state.doc.length, (i, s) => {
    t.push(js.of({ from: i, to: s }));
  }), n.dispatch({ effects: t }), !0;
}, Yv = [
  { key: "Ctrl-Shift-[", mac: "Cmd-Alt-[", run: qv },
  { key: "Ctrl-Shift-]", mac: "Cmd-Alt-]", run: jv },
  { key: "Ctrl-Alt-[", run: Kv },
  { key: "Ctrl-Alt-]", run: Gv }
], Xv = {
  placeholderDOM: null,
  preparePlaceholder: null,
  placeholderText: "…"
}, yp = /* @__PURE__ */ R.define({
  combine(n) {
    return ri(n, Xv);
  }
});
function bp(n) {
  return [pn, e1];
}
function vp(n, e) {
  let { state: t } = n, i = t.facet(yp), s = (o) => {
    let l = n.lineBlockAt(n.posAtDOM(o.target)), a = go(n.state, l.from, l.to);
    a && n.dispatch({ effects: js.of(a) }), o.preventDefault();
  };
  if (i.placeholderDOM)
    return i.placeholderDOM(n, s, e);
  let r = document.createElement("span");
  return r.textContent = i.placeholderText, r.setAttribute("aria-label", t.phrase("folded code")), r.title = t.phrase("unfold"), r.className = "cm-foldPlaceholder", r.onclick = s, r;
}
const gf = /* @__PURE__ */ F.replace({ widget: /* @__PURE__ */ new class extends ji {
  toDOM(n) {
    return vp(n, null);
  }
}() });
class Jv extends ji {
  constructor(e) {
    super(), this.value = e;
  }
  eq(e) {
    return this.value == e.value;
  }
  toDOM(e) {
    return vp(e, this.value);
  }
}
const Qv = {
  openText: "⌄",
  closedText: "›",
  markerDOM: null,
  domEventHandlers: {},
  foldingChanged: () => !1
};
class kl extends xi {
  constructor(e, t) {
    super(), this.config = e, this.open = t;
  }
  eq(e) {
    return this.config == e.config && this.open == e.open;
  }
  toDOM(e) {
    if (this.config.markerDOM)
      return this.config.markerDOM(this.open);
    let t = document.createElement("span");
    return t.textContent = this.open ? this.config.openText : this.config.closedText, t.title = e.state.phrase(this.open ? "Fold line" : "Unfold line"), t;
  }
}
function Zv(n = {}) {
  let e = { ...Qv, ...n }, t = new kl(e, !0), i = new kl(e, !1), s = Se.fromClass(class {
    constructor(o) {
      this.from = o.viewport.from, this.markers = this.buildMarkers(o);
    }
    update(o) {
      (o.docChanged || o.viewportChanged || o.startState.facet(qi) != o.state.facet(qi) || o.startState.field(pn, !1) != o.state.field(pn, !1) || Ue(o.startState) != Ue(o.state) || e.foldingChanged(o)) && (this.markers = this.buildMarkers(o.view));
    }
    buildMarkers(o) {
      let l = new bi();
      for (let a of o.viewportLineBlocks) {
        let h = go(o.state, a.from, a.to) ? i : mo(o.state, a.from, a.to) ? t : null;
        h && l.add(a.from, a.from, h);
      }
      return l.finish();
    }
  }), { domEventHandlers: r } = e;
  return [
    s,
    Jb({
      class: "cm-foldGutter",
      markers(o) {
        var l;
        return ((l = o.plugin(s)) === null || l === void 0 ? void 0 : l.markers) || Y.empty;
      },
      initialSpacer() {
        return new kl(e, !1);
      },
      domEventHandlers: {
        ...r,
        click: (o, l, a) => {
          if (r.click && r.click(o, l, a))
            return !0;
          let h = go(o.state, l.from, l.to);
          if (h)
            return o.dispatch({ effects: js.of(h) }), !0;
          let c = mo(o.state, l.from, l.to);
          return c ? (o.dispatch({ effects: Wo.of(c) }), !0) : !1;
        }
      }
    }),
    bp()
  ];
}
const e1 = /* @__PURE__ */ _.baseTheme({
  ".cm-foldPlaceholder": {
    backgroundColor: "#eee",
    border: "1px solid #ddd",
    color: "#888",
    borderRadius: ".2em",
    margin: "0 1px",
    padding: "0 1px",
    cursor: "pointer"
  },
  ".cm-foldGutter span": {
    padding: "0 1px",
    cursor: "pointer"
  }
});
class Vo {
  constructor(e, t) {
    this.specs = e;
    let i;
    function s(l) {
      let a = Vi.newName();
      return (i || (i = /* @__PURE__ */ Object.create(null)))["." + a] = l, a;
    }
    const r = typeof t.all == "string" ? t.all : t.all ? s(t.all) : void 0, o = t.scope;
    this.scope = o instanceof Jt ? (l) => l.prop(ps) == o.data : o ? (l) => l == o : void 0, this.style = cp(e.map((l) => ({
      tag: l.tag,
      class: l.class || s(Object.assign({}, l, { tag: null }))
    })), {
      all: r
    }).style, this.module = i ? new Vi(i) : null, this.themeType = t.themeType;
  }
  /**
  Create a highlighter style that associates the given styles to
  the given tags. The specs must be objects that hold a style tag
  or array of tags in their `tag` property, and either a single
  `class` property providing a static CSS class (for highlighter
  that rely on external styling), or a
  [`style-mod`](https://github.com/marijnh/style-mod#documentation)-style
  set of CSS properties (which define the styling for those tags).
  
  The CSS rules created for a highlighter will be emitted in the
  order of the spec's properties. That means that for elements that
  have multiple tags associated with them, styles defined further
  down in the list will have a higher CSS precedence than styles
  defined earlier.
  */
  static define(e, t) {
    return new Vo(e, t || {});
  }
}
const ka = /* @__PURE__ */ R.define(), xp = /* @__PURE__ */ R.define({
  combine(n) {
    return n.length ? [n[0]] : null;
  }
});
function Cl(n) {
  let e = n.facet(ka);
  return e.length ? e : n.facet(xp);
}
function t1(n, e) {
  let t = [n1], i;
  return n instanceof Vo && (n.module && t.push(_.styleModule.of(n.module)), i = n.themeType), e != null && e.fallback ? t.push(xp.of(n)) : i ? t.push(ka.computeN([_.darkTheme], (s) => s.facet(_.darkTheme) == (i == "dark") ? [n] : [])) : t.push(ka.of(n)), t;
}
class i1 {
  constructor(e) {
    this.markCache = /* @__PURE__ */ Object.create(null), this.tree = Ue(e.state), this.decorations = this.buildDeco(e, Cl(e.state)), this.decoratedTo = e.viewport.to;
  }
  update(e) {
    let t = Ue(e.state), i = Cl(e.state), s = i != Cl(e.startState), { viewport: r } = e.view, o = e.changes.mapPos(this.decoratedTo, 1);
    t.length < r.to && !s && t.type == this.tree.type && o >= r.to ? (this.decorations = this.decorations.map(e.changes), this.decoratedTo = o) : (t != this.tree || e.viewportChanged || s) && (this.tree = t, this.decorations = this.buildDeco(e.view, i), this.decoratedTo = r.to);
  }
  buildDeco(e, t) {
    if (!t || !this.tree.length)
      return F.none;
    let i = new bi();
    for (let { from: s, to: r } of e.visibleRanges)
      kv(this.tree, t, (o, l, a) => {
        i.add(o, l, this.markCache[a] || (this.markCache[a] = F.mark({ class: a })));
      }, s, r);
    return i.finish();
  }
}
const n1 = /* @__PURE__ */ gn.high(/* @__PURE__ */ Se.fromClass(i1, {
  decorations: (n) => n.decorations
})), s1 = /* @__PURE__ */ Vo.define([
  {
    tag: E.meta,
    color: "#404740"
  },
  {
    tag: E.link,
    textDecoration: "underline"
  },
  {
    tag: E.heading,
    textDecoration: "underline",
    fontWeight: "bold"
  },
  {
    tag: E.emphasis,
    fontStyle: "italic"
  },
  {
    tag: E.strong,
    fontWeight: "bold"
  },
  {
    tag: E.strikethrough,
    textDecoration: "line-through"
  },
  {
    tag: E.keyword,
    color: "#708"
  },
  {
    tag: [E.atom, E.bool, E.url, E.contentSeparator, E.labelName],
    color: "#219"
  },
  {
    tag: [E.literal, E.inserted],
    color: "#164"
  },
  {
    tag: [E.string, E.deleted],
    color: "#a11"
  },
  {
    tag: [E.regexp, E.escape, /* @__PURE__ */ E.special(E.string)],
    color: "#e40"
  },
  {
    tag: /* @__PURE__ */ E.definition(E.variableName),
    color: "#00f"
  },
  {
    tag: /* @__PURE__ */ E.local(E.variableName),
    color: "#30a"
  },
  {
    tag: [E.typeName, E.namespace],
    color: "#085"
  },
  {
    tag: E.className,
    color: "#167"
  },
  {
    tag: [/* @__PURE__ */ E.special(E.variableName), E.macroName],
    color: "#256"
  },
  {
    tag: /* @__PURE__ */ E.definition(E.propertyName),
    color: "#00c"
  },
  {
    tag: E.comment,
    color: "#940"
  },
  {
    tag: E.invalid,
    color: "#f00"
  }
]), r1 = /* @__PURE__ */ _.baseTheme({
  "&.cm-focused .cm-matchingBracket": { backgroundColor: "#328c8252" },
  "&.cm-focused .cm-nonmatchingBracket": { backgroundColor: "#bb555544" }
}), wp = 1e4, Sp = "()[]{}", kp = /* @__PURE__ */ R.define({
  combine(n) {
    return ri(n, {
      afterCursor: !0,
      brackets: Sp,
      maxScanDistance: wp,
      renderMatch: a1
    });
  }
}), o1 = /* @__PURE__ */ F.mark({ class: "cm-matchingBracket" }), l1 = /* @__PURE__ */ F.mark({ class: "cm-nonmatchingBracket" });
function a1(n) {
  let e = [], t = n.matched ? o1 : l1;
  return e.push(t.range(n.start.from, n.start.to)), n.end && e.push(t.range(n.end.from, n.end.to)), e;
}
const h1 = /* @__PURE__ */ Ne.define({
  create() {
    return F.none;
  },
  update(n, e) {
    if (!e.docChanged && !e.selection)
      return n;
    let t = [], i = e.state.facet(kp);
    for (let s of e.state.selection.ranges) {
      if (!s.empty)
        continue;
      let r = Qt(e.state, s.head, -1, i) || s.head > 0 && Qt(e.state, s.head - 1, 1, i) || i.afterCursor && (Qt(e.state, s.head, 1, i) || s.head < e.state.doc.length && Qt(e.state, s.head + 1, -1, i));
      r && (t = t.concat(i.renderMatch(r, e.state)));
    }
    return F.set(t, !0);
  },
  provide: (n) => _.decorations.from(n)
}), c1 = [
  h1,
  r1
];
function f1(n = {}) {
  return [kp.of(n), c1];
}
const u1 = /* @__PURE__ */ new G();
function Ca(n, e, t) {
  let i = n.prop(e < 0 ? G.openedBy : G.closedBy);
  if (i)
    return i;
  if (n.name.length == 1) {
    let s = t.indexOf(n.name);
    if (s > -1 && s % 2 == (e < 0 ? 1 : 0))
      return [t[s + e]];
  }
  return null;
}
function Aa(n) {
  let e = n.type.prop(u1);
  return e ? e(n.node) : n;
}
function Qt(n, e, t, i = {}) {
  let s = i.maxScanDistance || wp, r = i.brackets || Sp, o = Ue(n), l = o.resolveInner(e, t);
  for (let a = l; a; a = a.parent) {
    let h = Ca(a.type, t, r);
    if (h && a.from < a.to) {
      let c = Aa(a);
      if (c && (t > 0 ? e >= c.from && e < c.to : e > c.from && e <= c.to))
        return d1(n, e, t, a, c, h, r);
    }
  }
  return p1(n, e, t, o, l.type, s, r);
}
function d1(n, e, t, i, s, r, o) {
  let l = i.parent, a = { from: s.from, to: s.to }, h = 0, c = l == null ? void 0 : l.cursor();
  if (c && (t < 0 ? c.childBefore(i.from) : c.childAfter(i.to)))
    do
      if (t < 0 ? c.to <= i.from : c.from >= i.to) {
        if (h == 0 && r.indexOf(c.type.name) > -1 && c.from < c.to) {
          let f = Aa(c);
          return { start: a, end: f ? { from: f.from, to: f.to } : void 0, matched: !0 };
        } else if (Ca(c.type, t, o))
          h++;
        else if (Ca(c.type, -t, o)) {
          if (h == 0) {
            let f = Aa(c);
            return {
              start: a,
              end: f && f.from < f.to ? { from: f.from, to: f.to } : void 0,
              matched: !1
            };
          }
          h--;
        }
      }
    while (t < 0 ? c.prevSibling() : c.nextSibling());
  return { start: a, matched: !1 };
}
function p1(n, e, t, i, s, r, o) {
  let l = t < 0 ? n.sliceDoc(e - 1, e) : n.sliceDoc(e, e + 1), a = o.indexOf(l);
  if (a < 0 || a % 2 == 0 != t > 0)
    return null;
  let h = { from: t < 0 ? e - 1 : e, to: t > 0 ? e + 1 : e }, c = n.doc.iterRange(e, t > 0 ? n.doc.length : 0), f = 0;
  for (let u = 0; !c.next().done && u <= r; ) {
    let d = c.value;
    t < 0 && (u += d.length);
    let p = e + u * t;
    for (let m = t > 0 ? 0 : d.length - 1, g = t > 0 ? d.length : -1; m != g; m += t) {
      let b = o.indexOf(d[m]);
      if (!(b < 0 || i.resolveInner(p + m, 1).type != s))
        if (b % 2 == 0 == t > 0)
          f++;
        else {
          if (f == 1)
            return { start: h, end: { from: p + m, to: p + m + 1 }, matched: b >> 1 == a >> 1 };
          f--;
        }
    }
    t > 0 && (u += d.length);
  }
  return c.done ? { start: h, matched: !1 } : null;
}
const m1 = /* @__PURE__ */ Object.create(null), yf = [It.none], bf = [], vf = /* @__PURE__ */ Object.create(null), g1 = /* @__PURE__ */ Object.create(null);
for (let [n, e] of [
  ["variable", "variableName"],
  ["variable-2", "variableName.special"],
  ["string-2", "string.special"],
  ["def", "variableName.definition"],
  ["tag", "tagName"],
  ["attribute", "attributeName"],
  ["type", "typeName"],
  ["builtin", "variableName.standard"],
  ["qualifier", "modifier"],
  ["error", "invalid"],
  ["header", "heading"],
  ["property", "propertyName"]
])
  g1[n] = /* @__PURE__ */ y1(m1, e);
function Al(n, e) {
  bf.indexOf(n) > -1 || (bf.push(n), console.warn(e));
}
function y1(n, e) {
  let t = [];
  for (let l of e.split(" ")) {
    let a = [];
    for (let h of l.split(".")) {
      let c = n[h] || E[h];
      c ? typeof c == "function" ? a.length ? a = a.map(c) : Al(h, `Modifier ${h} used at start of tag`) : a.length ? Al(h, `Tag ${h} used as modifier`) : a = Array.isArray(c) ? c : [c] : Al(h, `Unknown highlighting tag ${h}`);
    }
    for (let h of a)
      t.push(h);
  }
  if (!t.length)
    return 0;
  let i = e.replace(/ /g, "_"), s = i + " " + t.map((l) => l.id), r = vf[s];
  if (r)
    return r.id;
  let o = vf[s] = It.define({
    id: yf.length,
    name: i,
    props: [wv({ [i]: t })]
  });
  return yf.push(o), o.id;
}
fe.RTL, fe.LTR;
const b1 = (n) => {
  let { state: e } = n, t = e.doc.lineAt(e.selection.main.from), i = ch(n.state, t.from);
  return i.line ? v1(n) : i.block ? w1(n) : !1;
};
function hh(n, e) {
  return ({ state: t, dispatch: i }) => {
    if (t.readOnly)
      return !1;
    let s = n(e, t);
    return s ? (i(t.update(s)), !0) : !1;
  };
}
const v1 = /* @__PURE__ */ hh(
  C1,
  0
  /* CommentOption.Toggle */
), x1 = /* @__PURE__ */ hh(
  Cp,
  0
  /* CommentOption.Toggle */
), w1 = /* @__PURE__ */ hh(
  (n, e) => Cp(n, e, k1(e)),
  0
  /* CommentOption.Toggle */
);
function ch(n, e) {
  let t = n.languageDataAt("commentTokens", e, 1);
  return t.length ? t[0] : {};
}
const hs = 50;
function S1(n, { open: e, close: t }, i, s) {
  let r = n.sliceDoc(i - hs, i), o = n.sliceDoc(s, s + hs), l = /\s*$/.exec(r)[0].length, a = /^\s*/.exec(o)[0].length, h = r.length - l;
  if (r.slice(h - e.length, h) == e && o.slice(a, a + t.length) == t)
    return {
      open: { pos: i - l, margin: l && 1 },
      close: { pos: s + a, margin: a && 1 }
    };
  let c, f;
  s - i <= 2 * hs ? c = f = n.sliceDoc(i, s) : (c = n.sliceDoc(i, i + hs), f = n.sliceDoc(s - hs, s));
  let u = /^\s*/.exec(c)[0].length, d = /\s*$/.exec(f)[0].length, p = f.length - d - t.length;
  return c.slice(u, u + e.length) == e && f.slice(p, p + t.length) == t ? {
    open: {
      pos: i + u + e.length,
      margin: /\s/.test(c.charAt(u + e.length)) ? 1 : 0
    },
    close: {
      pos: s - d - t.length,
      margin: /\s/.test(f.charAt(p - 1)) ? 1 : 0
    }
  } : null;
}
function k1(n) {
  let e = [];
  for (let t of n.selection.ranges) {
    let i = n.doc.lineAt(t.from), s = t.to <= i.to ? i : n.doc.lineAt(t.to);
    s.from > i.from && s.from == t.to && (s = t.to == i.to + 1 ? i : n.doc.lineAt(t.to - 1));
    let r = e.length - 1;
    r >= 0 && e[r].to > i.from ? e[r].to = s.to : e.push({ from: i.from + /^\s*/.exec(i.text)[0].length, to: s.to });
  }
  return e;
}
function Cp(n, e, t = e.selection.ranges) {
  let i = t.map((r) => ch(e, r.from).block);
  if (!i.every((r) => r))
    return null;
  let s = t.map((r, o) => S1(e, i[o], r.from, r.to));
  if (n != 2 && !s.every((r) => r))
    return { changes: e.changes(t.map((r, o) => s[o] ? [] : [{ from: r.from, insert: i[o].open + " " }, { from: r.to, insert: " " + i[o].close }])) };
  if (n != 1 && s.some((r) => r)) {
    let r = [];
    for (let o = 0, l; o < s.length; o++)
      if (l = s[o]) {
        let a = i[o], { open: h, close: c } = l;
        r.push({ from: h.pos - a.open.length, to: h.pos + h.margin }, { from: c.pos - c.margin, to: c.pos + a.close.length });
      }
    return { changes: r };
  }
  return null;
}
function C1(n, e, t = e.selection.ranges) {
  let i = [], s = -1;
  for (let { from: r, to: o } of t) {
    let l = i.length, a = 1e9, h = ch(e, r).line;
    if (h) {
      for (let c = r; c <= o; ) {
        let f = e.doc.lineAt(c);
        if (f.from > s && (r == o || o > f.from)) {
          s = f.from;
          let u = /^\s*/.exec(f.text)[0].length, d = u == f.length, p = f.text.slice(u, u + h.length) == h ? u : -1;
          u < f.text.length && u < a && (a = u), i.push({ line: f, comment: p, token: h, indent: u, empty: d, single: !1 });
        }
        c = f.to + 1;
      }
      if (a < 1e9)
        for (let c = l; c < i.length; c++)
          i[c].indent < i[c].line.text.length && (i[c].indent = a);
      i.length == l + 1 && (i[l].single = !0);
    }
  }
  if (n != 2 && i.some((r) => r.comment < 0 && (!r.empty || r.single))) {
    let r = [];
    for (let { line: l, token: a, indent: h, empty: c, single: f } of i)
      (f || !c) && r.push({ from: l.from + h, insert: a + " " });
    let o = e.changes(r);
    return { changes: o, selection: e.selection.map(o, 1) };
  } else if (n != 1 && i.some((r) => r.comment >= 0)) {
    let r = [];
    for (let { line: o, comment: l, token: a } of i)
      if (l >= 0) {
        let h = o.from + l, c = h + a.length;
        o.text[c - o.from] == " " && c++, r.push({ from: h, to: c });
      }
    return { changes: r };
  }
  return null;
}
const Ma = /* @__PURE__ */ Si.define(), A1 = /* @__PURE__ */ Si.define(), M1 = /* @__PURE__ */ R.define(), Ap = /* @__PURE__ */ R.define({
  combine(n) {
    return ri(n, {
      minDepth: 100,
      newGroupDelay: 500,
      joinToEvent: (e, t) => t
    }, {
      minDepth: Math.max,
      newGroupDelay: Math.min,
      joinToEvent: (e, t) => (i, s) => e(i, s) || t(i, s)
    });
  }
}), Mp = /* @__PURE__ */ Ne.define({
  create() {
    return Zt.empty;
  },
  update(n, e) {
    let t = e.state.facet(Ap), i = e.annotation(Ma);
    if (i) {
      let a = ct.fromTransaction(e, i.selection), h = i.side, c = h == 0 ? n.undone : n.done;
      return a ? c = yo(c, c.length, t.minDepth, a) : c = Dp(c, e.startState.selection), new Zt(h == 0 ? i.rest : c, h == 0 ? c : i.rest);
    }
    let s = e.annotation(A1);
    if ((s == "full" || s == "before") && (n = n.isolate()), e.annotation(Me.addToHistory) === !1)
      return e.changes.empty ? n : n.addMapping(e.changes.desc);
    let r = ct.fromTransaction(e), o = e.annotation(Me.time), l = e.annotation(Me.userEvent);
    return r ? n = n.addChanges(r, o, l, t, e) : e.selection && (n = n.addSelection(e.startState.selection, o, l, t.newGroupDelay)), (s == "full" || s == "after") && (n = n.isolate()), n;
  },
  toJSON(n) {
    return { done: n.done.map((e) => e.toJSON()), undone: n.undone.map((e) => e.toJSON()) };
  },
  fromJSON(n) {
    return new Zt(n.done.map(ct.fromJSON), n.undone.map(ct.fromJSON));
  }
});
function T1(n = {}) {
  return [
    Mp,
    Ap.of(n),
    _.domEventHandlers({
      beforeinput(e, t) {
        let i = e.inputType == "historyUndo" ? Tp : e.inputType == "historyRedo" ? Ta : null;
        return i ? (e.preventDefault(), i(t)) : !1;
      }
    })
  ];
}
function zo(n, e) {
  return function({ state: t, dispatch: i }) {
    if (!e && t.readOnly)
      return !1;
    let s = t.field(Mp, !1);
    if (!s)
      return !1;
    let r = s.pop(n, t, e);
    return r ? (i(r), !0) : !1;
  };
}
const Tp = /* @__PURE__ */ zo(0, !1), Ta = /* @__PURE__ */ zo(1, !1), E1 = /* @__PURE__ */ zo(0, !0), D1 = /* @__PURE__ */ zo(1, !0);
class ct {
  constructor(e, t, i, s, r) {
    this.changes = e, this.effects = t, this.mapped = i, this.startSelection = s, this.selectionsAfter = r;
  }
  setSelAfter(e) {
    return new ct(this.changes, this.effects, this.mapped, this.startSelection, e);
  }
  toJSON() {
    var e, t, i;
    return {
      changes: (e = this.changes) === null || e === void 0 ? void 0 : e.toJSON(),
      mapped: (t = this.mapped) === null || t === void 0 ? void 0 : t.toJSON(),
      startSelection: (i = this.startSelection) === null || i === void 0 ? void 0 : i.toJSON(),
      selectionsAfter: this.selectionsAfter.map((s) => s.toJSON())
    };
  }
  static fromJSON(e) {
    return new ct(e.changes && Ae.fromJSON(e.changes), [], e.mapped && ei.fromJSON(e.mapped), e.startSelection && S.fromJSON(e.startSelection), e.selectionsAfter.map(S.fromJSON));
  }
  // This does not check `addToHistory` and such, it assumes the
  // transaction needs to be converted to an item. Returns null when
  // there are no changes or effects in the transaction.
  static fromTransaction(e, t) {
    let i = Et;
    for (let s of e.startState.facet(M1)) {
      let r = s(e);
      r.length && (i = i.concat(r));
    }
    return !i.length && e.changes.empty ? null : new ct(e.changes.invert(e.startState.doc), i, void 0, t || e.startState.selection, Et);
  }
  static selection(e) {
    return new ct(void 0, Et, void 0, void 0, e);
  }
}
function yo(n, e, t, i) {
  let s = e + 1 > t + 20 ? e - t - 1 : 0, r = n.slice(s, e);
  return r.push(i), r;
}
function O1(n, e) {
  let t = [], i = !1;
  return n.iterChangedRanges((s, r) => t.push(s, r)), e.iterChangedRanges((s, r, o, l) => {
    for (let a = 0; a < t.length; ) {
      let h = t[a++], c = t[a++];
      l >= h && o <= c && (i = !0);
    }
  }), i;
}
function _1(n, e) {
  return n.ranges.length == e.ranges.length && n.ranges.filter((t, i) => t.empty != e.ranges[i].empty).length === 0;
}
function Ep(n, e) {
  return n.length ? e.length ? n.concat(e) : n : e;
}
const Et = [], R1 = 200;
function Dp(n, e) {
  if (n.length) {
    let t = n[n.length - 1], i = t.selectionsAfter.slice(Math.max(0, t.selectionsAfter.length - R1));
    return i.length && i[i.length - 1].eq(e) ? n : (i.push(e), yo(n, n.length - 1, 1e9, t.setSelAfter(i)));
  } else
    return [ct.selection([e])];
}
function L1(n) {
  let e = n[n.length - 1], t = n.slice();
  return t[n.length - 1] = e.setSelAfter(e.selectionsAfter.slice(0, e.selectionsAfter.length - 1)), t;
}
function Ml(n, e) {
  if (!n.length)
    return n;
  let t = n.length, i = Et;
  for (; t; ) {
    let s = P1(n[t - 1], e, i);
    if (s.changes && !s.changes.empty || s.effects.length) {
      let r = n.slice(0, t);
      return r[t - 1] = s, r;
    } else
      e = s.mapped, t--, i = s.selectionsAfter;
  }
  return i.length ? [ct.selection(i)] : Et;
}
function P1(n, e, t) {
  let i = Ep(n.selectionsAfter.length ? n.selectionsAfter.map((l) => l.map(e)) : Et, t);
  if (!n.changes)
    return ct.selection(i);
  let s = n.changes.map(e), r = e.mapDesc(n.changes, !0), o = n.mapped ? n.mapped.composeDesc(r) : r;
  return new ct(s, z.mapEffects(n.effects, e), o, n.startSelection.map(r), i);
}
const I1 = /^(input\.type|delete)($|\.)/;
class Zt {
  constructor(e, t, i = 0, s = void 0) {
    this.done = e, this.undone = t, this.prevTime = i, this.prevUserEvent = s;
  }
  isolate() {
    return this.prevTime ? new Zt(this.done, this.undone) : this;
  }
  addChanges(e, t, i, s, r) {
    let o = this.done, l = o[o.length - 1];
    return l && l.changes && !l.changes.empty && e.changes && (!i || I1.test(i)) && (!l.selectionsAfter.length && t - this.prevTime < s.newGroupDelay && s.joinToEvent(r, O1(l.changes, e.changes)) || // For compose (but not compose.start) events, always join with previous event
    i == "input.type.compose") ? o = yo(o, o.length - 1, s.minDepth, new ct(e.changes.compose(l.changes), Ep(z.mapEffects(e.effects, l.changes), l.effects), l.mapped, l.startSelection, Et)) : o = yo(o, o.length, s.minDepth, e), new Zt(o, Et, t, i);
  }
  addSelection(e, t, i, s) {
    let r = this.done.length ? this.done[this.done.length - 1].selectionsAfter : Et;
    return r.length > 0 && t - this.prevTime < s && i == this.prevUserEvent && i && /^select($|\.)/.test(i) && _1(r[r.length - 1], e) ? this : new Zt(Dp(this.done, e), this.undone, t, i);
  }
  addMapping(e) {
    return new Zt(Ml(this.done, e), Ml(this.undone, e), this.prevTime, this.prevUserEvent);
  }
  pop(e, t, i) {
    let s = e == 0 ? this.done : this.undone;
    if (s.length == 0)
      return null;
    let r = s[s.length - 1], o = r.selectionsAfter[0] || t.selection;
    if (i && r.selectionsAfter.length)
      return t.update({
        selection: r.selectionsAfter[r.selectionsAfter.length - 1],
        annotations: Ma.of({ side: e, rest: L1(s), selection: o }),
        userEvent: e == 0 ? "select.undo" : "select.redo",
        scrollIntoView: !0
      });
    if (r.changes) {
      let l = s.length == 1 ? Et : s.slice(0, s.length - 1);
      return r.mapped && (l = Ml(l, r.mapped)), t.update({
        changes: r.changes,
        selection: r.startSelection,
        effects: r.effects,
        annotations: Ma.of({ side: e, rest: l, selection: o }),
        filter: !1,
        userEvent: e == 0 ? "undo" : "redo",
        scrollIntoView: !0
      });
    } else
      return null;
  }
}
Zt.empty = /* @__PURE__ */ new Zt(Et, Et);
const B1 = [
  { key: "Mod-z", run: Tp, preventDefault: !0 },
  { key: "Mod-y", mac: "Mod-Shift-z", run: Ta, preventDefault: !0 },
  { linux: "Ctrl-Shift-z", run: Ta, preventDefault: !0 },
  { key: "Mod-u", run: E1, preventDefault: !0 },
  { key: "Alt-u", mac: "Mod-Shift-u", run: D1, preventDefault: !0 }
];
function zn(n, e) {
  return S.create(n.ranges.map(e), n.mainIndex);
}
function oi(n, e) {
  return n.update({ selection: e, scrollIntoView: !0, userEvent: "select" });
}
function zt({ state: n, dispatch: e }, t) {
  let i = zn(n.selection, t);
  return i.eq(n.selection, !0) ? !1 : (e(oi(n, i)), !0);
}
function $o(n, e) {
  return S.cursor(e ? n.to : n.from);
}
function Op(n, e) {
  return zt(n, (t) => t.empty ? n.moveByChar(t, e) : $o(t, e));
}
function qe(n) {
  return n.textDirectionAt(n.state.selection.main.head) == fe.LTR;
}
const _p = (n) => Op(n, !qe(n)), Rp = (n) => Op(n, qe(n));
function Lp(n, e) {
  return zt(n, (t) => t.empty ? n.moveByGroup(t, e) : $o(t, e));
}
const N1 = (n) => Lp(n, !qe(n)), F1 = (n) => Lp(n, qe(n));
function H1(n, e, t) {
  if (e.type.prop(t))
    return !0;
  let i = e.to - e.from;
  return i && (i > 2 || /[^\s,.;:]/.test(n.sliceDoc(e.from, e.to))) || e.firstChild;
}
function Uo(n, e, t) {
  let i = Ue(n).resolveInner(e.head), s = t ? G.closedBy : G.openedBy;
  for (let a = e.head; ; ) {
    let h = t ? i.childAfter(a) : i.childBefore(a);
    if (!h)
      break;
    H1(n, h, s) ? i = h : a = t ? h.to : h.from;
  }
  let r = i.type.prop(s), o, l;
  return r && (o = t ? Qt(n, i.from, 1) : Qt(n, i.to, -1)) && o.matched ? l = t ? o.end.to : o.end.from : l = t ? i.to : i.from, S.cursor(l, t ? -1 : 1);
}
const W1 = (n) => zt(n, (e) => Uo(n.state, e, !qe(n))), V1 = (n) => zt(n, (e) => Uo(n.state, e, qe(n)));
function Pp(n, e) {
  return zt(n, (t) => {
    if (!t.empty)
      return $o(t, e);
    let i = n.moveVertically(t, e);
    return i.head != t.head ? i : n.moveToLineBoundary(t, e);
  });
}
const Ip = (n) => Pp(n, !1), Bp = (n) => Pp(n, !0);
function Np(n) {
  let e = n.scrollDOM.clientHeight < n.scrollDOM.scrollHeight - 2, t = 0, i = 0, s;
  if (e) {
    for (let r of n.state.facet(_.scrollMargins)) {
      let o = r(n);
      o != null && o.top && (t = Math.max(o == null ? void 0 : o.top, t)), o != null && o.bottom && (i = Math.max(o == null ? void 0 : o.bottom, i));
    }
    s = n.scrollDOM.clientHeight - t - i;
  } else
    s = (n.dom.ownerDocument.defaultView || window).innerHeight;
  return {
    marginTop: t,
    marginBottom: i,
    selfScroll: e,
    height: Math.max(n.defaultLineHeight, s - 5)
  };
}
function Fp(n, e) {
  let t = Np(n), { state: i } = n, s = zn(i.selection, (o) => o.empty ? n.moveVertically(o, e, t.height) : $o(o, e));
  if (s.eq(i.selection))
    return !1;
  let r;
  if (t.selfScroll) {
    let o = n.coordsAtPos(i.selection.main.head), l = n.scrollDOM.getBoundingClientRect(), a = l.top + t.marginTop, h = l.bottom - t.marginBottom;
    o && o.top > a && o.bottom < h && (r = _.scrollIntoView(s.main.head, { y: "start", yMargin: o.top - a }));
  }
  return n.dispatch(oi(i, s), { effects: r }), !0;
}
const xf = (n) => Fp(n, !1), Ea = (n) => Fp(n, !0);
function Ki(n, e, t) {
  let i = n.lineBlockAt(e.head), s = n.moveToLineBoundary(e, t);
  if (s.head == e.head && s.head != (t ? i.to : i.from) && (s = n.moveToLineBoundary(e, t, !1)), !t && s.head == i.from && i.length) {
    let r = /^\s*/.exec(n.state.sliceDoc(i.from, Math.min(i.from + 100, i.to)))[0].length;
    r && e.head != i.from + r && (s = S.cursor(i.from + r));
  }
  return s;
}
const z1 = (n) => zt(n, (e) => Ki(n, e, !0)), $1 = (n) => zt(n, (e) => Ki(n, e, !1)), U1 = (n) => zt(n, (e) => Ki(n, e, !qe(n))), q1 = (n) => zt(n, (e) => Ki(n, e, qe(n))), j1 = (n) => zt(n, (e) => S.cursor(n.lineBlockAt(e.head).from, 1)), K1 = (n) => zt(n, (e) => S.cursor(n.lineBlockAt(e.head).to, -1));
function G1(n, e, t) {
  let i = !1, s = zn(n.selection, (r) => {
    let o = Qt(n, r.head, -1) || Qt(n, r.head, 1) || r.head > 0 && Qt(n, r.head - 1, 1) || r.head < n.doc.length && Qt(n, r.head + 1, -1);
    if (!o || !o.end)
      return r;
    i = !0;
    let l = o.start.from == r.head ? o.end.to : o.end.from;
    return S.cursor(l);
  });
  return i ? (e(oi(n, s)), !0) : !1;
}
const Y1 = ({ state: n, dispatch: e }) => G1(n, e);
function Bt(n, e) {
  let t = zn(n.state.selection, (i) => {
    let s = e(i);
    return S.range(i.anchor, s.head, s.goalColumn, s.bidiLevel || void 0);
  });
  return t.eq(n.state.selection) ? !1 : (n.dispatch(oi(n.state, t)), !0);
}
function Hp(n, e) {
  return Bt(n, (t) => n.moveByChar(t, e));
}
const Wp = (n) => Hp(n, !qe(n)), Vp = (n) => Hp(n, qe(n));
function zp(n, e) {
  return Bt(n, (t) => n.moveByGroup(t, e));
}
const X1 = (n) => zp(n, !qe(n)), J1 = (n) => zp(n, qe(n)), Q1 = (n) => Bt(n, (e) => Uo(n.state, e, !qe(n))), Z1 = (n) => Bt(n, (e) => Uo(n.state, e, qe(n)));
function $p(n, e) {
  return Bt(n, (t) => n.moveVertically(t, e));
}
const Up = (n) => $p(n, !1), qp = (n) => $p(n, !0);
function jp(n, e) {
  return Bt(n, (t) => n.moveVertically(t, e, Np(n).height));
}
const wf = (n) => jp(n, !1), Sf = (n) => jp(n, !0), ex = (n) => Bt(n, (e) => Ki(n, e, !0)), tx = (n) => Bt(n, (e) => Ki(n, e, !1)), ix = (n) => Bt(n, (e) => Ki(n, e, !qe(n))), nx = (n) => Bt(n, (e) => Ki(n, e, qe(n))), sx = (n) => Bt(n, (e) => S.cursor(n.lineBlockAt(e.head).from)), rx = (n) => Bt(n, (e) => S.cursor(n.lineBlockAt(e.head).to)), kf = ({ state: n, dispatch: e }) => (e(oi(n, { anchor: 0 })), !0), Cf = ({ state: n, dispatch: e }) => (e(oi(n, { anchor: n.doc.length })), !0), Af = ({ state: n, dispatch: e }) => (e(oi(n, { anchor: n.selection.main.anchor, head: 0 })), !0), Mf = ({ state: n, dispatch: e }) => (e(oi(n, { anchor: n.selection.main.anchor, head: n.doc.length })), !0), ox = ({ state: n, dispatch: e }) => (e(n.update({ selection: { anchor: 0, head: n.doc.length }, userEvent: "select" })), !0), lx = ({ state: n, dispatch: e }) => {
  let t = qo(n).map(({ from: i, to: s }) => S.range(i, Math.min(s + 1, n.doc.length)));
  return e(n.update({ selection: S.create(t), userEvent: "select" })), !0;
}, ax = ({ state: n, dispatch: e }) => {
  let t = zn(n.selection, (i) => {
    let s = Ue(n), r = s.resolveStack(i.from, 1);
    if (i.empty) {
      let o = s.resolveStack(i.from, -1);
      o.node.from >= r.node.from && o.node.to <= r.node.to && (r = o);
    }
    for (let o = r; o; o = o.next) {
      let { node: l } = o;
      if ((l.from < i.from && l.to >= i.to || l.to > i.to && l.from <= i.from) && o.next)
        return S.range(l.to, l.from);
    }
    return i;
  });
  return t.eq(n.selection) ? !1 : (e(oi(n, t)), !0);
}, hx = ({ state: n, dispatch: e }) => {
  let t = n.selection, i = null;
  return t.ranges.length > 1 ? i = S.create([t.main]) : t.main.empty || (i = S.create([S.cursor(t.main.head)])), i ? (e(oi(n, i)), !0) : !1;
};
function Ks(n, e) {
  if (n.state.readOnly)
    return !1;
  let t = "delete.selection", { state: i } = n, s = i.changeByRange((r) => {
    let { from: o, to: l } = r;
    if (o == l) {
      let a = e(r);
      a < o ? (t = "delete.backward", a = Tr(n, a, !1)) : a > o && (t = "delete.forward", a = Tr(n, a, !0)), o = Math.min(o, a), l = Math.max(l, a);
    } else
      o = Tr(n, o, !1), l = Tr(n, l, !0);
    return o == l ? { range: r } : { changes: { from: o, to: l }, range: S.cursor(o, o < r.head ? -1 : 1) };
  });
  return s.changes.empty ? !1 : (n.dispatch(i.update(s, {
    scrollIntoView: !0,
    userEvent: t,
    effects: t == "delete.selection" ? _.announce.of(i.phrase("Selection deleted")) : void 0
  })), !0);
}
function Tr(n, e, t) {
  if (n instanceof _)
    for (let i of n.state.facet(_.atomicRanges).map((s) => s(n)))
      i.between(e, e, (s, r) => {
        s < e && r > e && (e = t ? r : s);
      });
  return e;
}
const Kp = (n, e, t) => Ks(n, (i) => {
  let s = i.from, { state: r } = n, o = r.doc.lineAt(s), l, a;
  if (t && !e && s > o.from && s < o.from + 200 && !/[^ \t]/.test(l = o.text.slice(0, s - o.from))) {
    if (l[l.length - 1] == "	")
      return s - 1;
    let h = Vn(l, r.tabSize), c = h % po(r) || po(r);
    for (let f = 0; f < c && l[l.length - 1 - f] == " "; f++)
      s--;
    a = s;
  } else
    a = Be(o.text, s - o.from, e, e) + o.from, a == s && o.number != (e ? r.doc.lines : 1) ? a += e ? 1 : -1 : !e && /[\ufe00-\ufe0f]/.test(o.text.slice(a - o.from, s - o.from)) && (a = Be(o.text, a - o.from, !1, !1) + o.from);
  return a;
}), Da = (n) => Kp(n, !1, !0), Gp = (n) => Kp(n, !0, !1), Yp = (n, e) => Ks(n, (t) => {
  let i = t.head, { state: s } = n, r = s.doc.lineAt(i), o = s.charCategorizer(i);
  for (let l = null; ; ) {
    if (i == (e ? r.to : r.from)) {
      i == t.head && r.number != (e ? s.doc.lines : 1) && (i += e ? 1 : -1);
      break;
    }
    let a = Be(r.text, i - r.from, e) + r.from, h = r.text.slice(Math.min(i, a) - r.from, Math.max(i, a) - r.from), c = o(h);
    if (l != null && c != l)
      break;
    (h != " " || i != t.head) && (l = c), i = a;
  }
  return i;
}), Xp = (n) => Yp(n, !1), cx = (n) => Yp(n, !0), fx = (n) => Ks(n, (e) => {
  let t = n.lineBlockAt(e.head).to;
  return e.head < t ? t : Math.min(n.state.doc.length, e.head + 1);
}), ux = (n) => Ks(n, (e) => {
  let t = n.moveToLineBoundary(e, !1).head;
  return e.head > t ? t : Math.max(0, e.head - 1);
}), dx = (n) => Ks(n, (e) => {
  let t = n.moveToLineBoundary(e, !0).head;
  return e.head < t ? t : Math.min(n.state.doc.length, e.head + 1);
}), px = ({ state: n, dispatch: e }) => {
  if (n.readOnly)
    return !1;
  let t = n.changeByRange((i) => ({
    changes: { from: i.from, to: i.to, insert: Z.of(["", ""]) },
    range: S.cursor(i.from)
  }));
  return e(n.update(t, { scrollIntoView: !0, userEvent: "input" })), !0;
}, mx = ({ state: n, dispatch: e }) => {
  if (n.readOnly)
    return !1;
  let t = n.changeByRange((i) => {
    if (!i.empty || i.from == 0 || i.from == n.doc.length)
      return { range: i };
    let s = i.from, r = n.doc.lineAt(s), o = s == r.from ? s - 1 : Be(r.text, s - r.from, !1) + r.from, l = s == r.to ? s + 1 : Be(r.text, s - r.from, !0) + r.from;
    return {
      changes: { from: o, to: l, insert: n.doc.slice(s, l).append(n.doc.slice(o, s)) },
      range: S.cursor(l)
    };
  });
  return t.changes.empty ? !1 : (e(n.update(t, { scrollIntoView: !0, userEvent: "move.character" })), !0);
};
function qo(n) {
  let e = [], t = -1;
  for (let i of n.selection.ranges) {
    let s = n.doc.lineAt(i.from), r = n.doc.lineAt(i.to);
    if (!i.empty && i.to == r.from && (r = n.doc.lineAt(i.to - 1)), t >= s.number) {
      let o = e[e.length - 1];
      o.to = r.to, o.ranges.push(i);
    } else
      e.push({ from: s.from, to: r.to, ranges: [i] });
    t = r.number + 1;
  }
  return e;
}
function Jp(n, e, t) {
  if (n.readOnly)
    return !1;
  let i = [], s = [];
  for (let r of qo(n)) {
    if (t ? r.to == n.doc.length : r.from == 0)
      continue;
    let o = n.doc.lineAt(t ? r.to + 1 : r.from - 1), l = o.length + 1;
    if (t) {
      i.push({ from: r.to, to: o.to }, { from: r.from, insert: o.text + n.lineBreak });
      for (let a of r.ranges)
        s.push(S.range(Math.min(n.doc.length, a.anchor + l), Math.min(n.doc.length, a.head + l)));
    } else {
      i.push({ from: o.from, to: r.from }, { from: r.to, insert: n.lineBreak + o.text });
      for (let a of r.ranges)
        s.push(S.range(a.anchor - l, a.head - l));
    }
  }
  return i.length ? (e(n.update({
    changes: i,
    scrollIntoView: !0,
    selection: S.create(s, n.selection.mainIndex),
    userEvent: "move.line"
  })), !0) : !1;
}
const gx = ({ state: n, dispatch: e }) => Jp(n, e, !1), yx = ({ state: n, dispatch: e }) => Jp(n, e, !0);
function Qp(n, e, t) {
  if (n.readOnly)
    return !1;
  let i = [];
  for (let s of qo(n))
    t ? i.push({ from: s.from, insert: n.doc.slice(s.from, s.to) + n.lineBreak }) : i.push({ from: s.to, insert: n.lineBreak + n.doc.slice(s.from, s.to) });
  return e(n.update({ changes: i, scrollIntoView: !0, userEvent: "input.copyline" })), !0;
}
const bx = ({ state: n, dispatch: e }) => Qp(n, e, !1), vx = ({ state: n, dispatch: e }) => Qp(n, e, !0), xx = (n) => {
  if (n.state.readOnly)
    return !1;
  let { state: e } = n, t = e.changes(qo(e).map(({ from: s, to: r }) => (s > 0 ? s-- : r < e.doc.length && r++, { from: s, to: r }))), i = zn(e.selection, (s) => {
    let r;
    if (n.lineWrapping) {
      let o = n.lineBlockAt(s.head), l = n.coordsAtPos(s.head, s.assoc || 1);
      l && (r = o.bottom + n.documentTop - l.bottom + n.defaultLineHeight / 2);
    }
    return n.moveVertically(s, !0, r);
  }).map(t);
  return n.dispatch({ changes: t, selection: i, scrollIntoView: !0, userEvent: "delete.line" }), !0;
};
function wx(n, e) {
  if (/\(\)|\[\]|\{\}/.test(n.sliceDoc(e - 1, e + 1)))
    return { from: e, to: e };
  let t = Ue(n).resolveInner(e), i = t.childBefore(e), s = t.childAfter(e), r;
  return i && s && i.to <= e && s.from >= e && (r = i.type.prop(G.closedBy)) && r.indexOf(s.name) > -1 && n.doc.lineAt(i.to).from == n.doc.lineAt(s.from).from && !/\S/.test(n.sliceDoc(i.to, s.from)) ? { from: i.to, to: s.from } : null;
}
const Tf = /* @__PURE__ */ Zp(!1), Sx = /* @__PURE__ */ Zp(!0);
function Zp(n) {
  return ({ state: e, dispatch: t }) => {
    if (e.readOnly)
      return !1;
    let i = e.changeByRange((s) => {
      let { from: r, to: o } = s, l = e.doc.lineAt(r), a = !n && r == o && wx(e, r);
      n && (r = o = (o <= l.to ? l : e.doc.lineAt(o)).to);
      let h = new Ho(e, { simulateBreak: r, simulateDoubleBreak: !!a }), c = lh(h, r);
      for (c == null && (c = Vn(/^\s*/.exec(e.doc.lineAt(r).text)[0], e.tabSize)); o < l.to && /\s/.test(l.text[o - l.from]); )
        o++;
      a ? { from: r, to: o } = a : r > l.from && r < l.from + 100 && !/\S/.test(l.text.slice(0, r)) && (r = l.from);
      let f = ["", Ps(e, c)];
      return a && f.push(Ps(e, h.lineIndent(l.from, -1))), {
        changes: { from: r, to: o, insert: Z.of(f) },
        range: S.cursor(r + 1 + f[1].length)
      };
    });
    return t(e.update(i, { scrollIntoView: !0, userEvent: "input" })), !0;
  };
}
function fh(n, e) {
  let t = -1;
  return n.changeByRange((i) => {
    let s = [];
    for (let o = i.from; o <= i.to; ) {
      let l = n.doc.lineAt(o);
      l.number > t && (i.empty || i.to > l.from) && (e(l, s, i), t = l.number), o = l.to + 1;
    }
    let r = n.changes(s);
    return {
      changes: s,
      range: S.range(r.mapPos(i.anchor, 1), r.mapPos(i.head, 1))
    };
  });
}
const kx = ({ state: n, dispatch: e }) => {
  if (n.readOnly)
    return !1;
  let t = /* @__PURE__ */ Object.create(null), i = new Ho(n, { overrideIndentation: (r) => {
    let o = t[r];
    return o ?? -1;
  } }), s = fh(n, (r, o, l) => {
    let a = lh(i, r.from);
    if (a == null)
      return;
    /\S/.test(r.text) || (a = 0);
    let h = /^\s*/.exec(r.text)[0], c = Ps(n, a);
    (h != c || l.from < r.from + h.length) && (t[r.from] = a, o.push({ from: r.from, to: r.from + h.length, insert: c }));
  });
  return s.changes.empty || e(n.update(s, { userEvent: "indent" })), !0;
}, Cx = ({ state: n, dispatch: e }) => n.readOnly ? !1 : (e(n.update(fh(n, (t, i) => {
  i.push({ from: t.from, insert: n.facet(oh) });
}), { userEvent: "input.indent" })), !0), Ax = ({ state: n, dispatch: e }) => n.readOnly ? !1 : (e(n.update(fh(n, (t, i) => {
  let s = /^\s*/.exec(t.text)[0];
  if (!s)
    return;
  let r = Vn(s, n.tabSize), o = 0, l = Ps(n, Math.max(0, r - po(n)));
  for (; o < s.length && o < l.length && s.charCodeAt(o) == l.charCodeAt(o); )
    o++;
  i.push({ from: t.from + o, to: t.from + s.length, insert: l.slice(o) });
}), { userEvent: "delete.dedent" })), !0), Mx = (n) => (n.setTabFocusMode(), !0), Tx = [
  { key: "Ctrl-b", run: _p, shift: Wp, preventDefault: !0 },
  { key: "Ctrl-f", run: Rp, shift: Vp },
  { key: "Ctrl-p", run: Ip, shift: Up },
  { key: "Ctrl-n", run: Bp, shift: qp },
  { key: "Ctrl-a", run: j1, shift: sx },
  { key: "Ctrl-e", run: K1, shift: rx },
  { key: "Ctrl-d", run: Gp },
  { key: "Ctrl-h", run: Da },
  { key: "Ctrl-k", run: fx },
  { key: "Ctrl-Alt-h", run: Xp },
  { key: "Ctrl-o", run: px },
  { key: "Ctrl-t", run: mx },
  { key: "Ctrl-v", run: Ea }
], Ex = /* @__PURE__ */ [
  { key: "ArrowLeft", run: _p, shift: Wp, preventDefault: !0 },
  { key: "Mod-ArrowLeft", mac: "Alt-ArrowLeft", run: N1, shift: X1, preventDefault: !0 },
  { mac: "Cmd-ArrowLeft", run: U1, shift: ix, preventDefault: !0 },
  { key: "ArrowRight", run: Rp, shift: Vp, preventDefault: !0 },
  { key: "Mod-ArrowRight", mac: "Alt-ArrowRight", run: F1, shift: J1, preventDefault: !0 },
  { mac: "Cmd-ArrowRight", run: q1, shift: nx, preventDefault: !0 },
  { key: "ArrowUp", run: Ip, shift: Up, preventDefault: !0 },
  { mac: "Cmd-ArrowUp", run: kf, shift: Af },
  { mac: "Ctrl-ArrowUp", run: xf, shift: wf },
  { key: "ArrowDown", run: Bp, shift: qp, preventDefault: !0 },
  { mac: "Cmd-ArrowDown", run: Cf, shift: Mf },
  { mac: "Ctrl-ArrowDown", run: Ea, shift: Sf },
  { key: "PageUp", run: xf, shift: wf },
  { key: "PageDown", run: Ea, shift: Sf },
  { key: "Home", run: $1, shift: tx, preventDefault: !0 },
  { key: "Mod-Home", run: kf, shift: Af },
  { key: "End", run: z1, shift: ex, preventDefault: !0 },
  { key: "Mod-End", run: Cf, shift: Mf },
  { key: "Enter", run: Tf, shift: Tf },
  { key: "Mod-a", run: ox },
  { key: "Backspace", run: Da, shift: Da },
  { key: "Delete", run: Gp },
  { key: "Mod-Backspace", mac: "Alt-Backspace", run: Xp },
  { key: "Mod-Delete", mac: "Alt-Delete", run: cx },
  { mac: "Mod-Backspace", run: ux },
  { mac: "Mod-Delete", run: dx }
].concat(/* @__PURE__ */ Tx.map((n) => ({ mac: n.key, run: n.run, shift: n.shift }))), Dx = /* @__PURE__ */ [
  { key: "Alt-ArrowLeft", mac: "Ctrl-ArrowLeft", run: W1, shift: Q1 },
  { key: "Alt-ArrowRight", mac: "Ctrl-ArrowRight", run: V1, shift: Z1 },
  { key: "Alt-ArrowUp", run: gx },
  { key: "Shift-Alt-ArrowUp", run: bx },
  { key: "Alt-ArrowDown", run: yx },
  { key: "Shift-Alt-ArrowDown", run: vx },
  { key: "Escape", run: hx },
  { key: "Mod-Enter", run: Sx },
  { key: "Alt-l", mac: "Ctrl-l", run: lx },
  { key: "Mod-i", run: ax, preventDefault: !0 },
  { key: "Mod-[", run: Ax },
  { key: "Mod-]", run: Cx },
  { key: "Mod-Alt-\\", run: kx },
  { key: "Shift-Mod-k", run: xx },
  { key: "Shift-Mod-\\", run: Y1 },
  { key: "Mod-/", run: b1 },
  { key: "Alt-A", run: x1 },
  { key: "Ctrl-m", mac: "Shift-Alt-m", run: Mx }
].concat(Ex), Ef = typeof String.prototype.normalize == "function" ? (n) => n.normalize("NFKD") : (n) => n;
class Nn {
  /**
  Create a text cursor. The query is the search string, `from` to
  `to` provides the region to search.
  
  When `normalize` is given, it will be called, on both the query
  string and the content it is matched against, before comparing.
  You can, for example, create a case-insensitive search by
  passing `s => s.toLowerCase()`.
  
  Text is always normalized with
  [`.normalize("NFKD")`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize)
  (when supported).
  */
  constructor(e, t, i = 0, s = e.length, r, o) {
    this.test = o, this.value = { from: 0, to: 0 }, this.done = !1, this.matches = [], this.buffer = "", this.bufferPos = 0, this.iter = e.iterRange(i, s), this.bufferStart = i, this.normalize = r ? (l) => r(Ef(l)) : Ef, this.query = this.normalize(t);
  }
  peek() {
    if (this.bufferPos == this.buffer.length) {
      if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done)
        return -1;
      this.bufferPos = 0, this.buffer = this.iter.value;
    }
    return ot(this.buffer, this.bufferPos);
  }
  /**
  Look for the next match. Updates the iterator's
  [`value`](https://codemirror.net/6/docs/ref/#search.SearchCursor.value) and
  [`done`](https://codemirror.net/6/docs/ref/#search.SearchCursor.done) properties. Should be called
  at least once before using the cursor.
  */
  next() {
    for (; this.matches.length; )
      this.matches.pop();
    return this.nextOverlapping();
  }
  /**
  The `next` method will ignore matches that partially overlap a
  previous match. This method behaves like `next`, but includes
  such matches.
  */
  nextOverlapping() {
    for (; ; ) {
      let e = this.peek();
      if (e < 0)
        return this.done = !0, this;
      let t = Wa(e), i = this.bufferStart + this.bufferPos;
      this.bufferPos += Yt(e);
      let s = this.normalize(t);
      if (s.length)
        for (let r = 0, o = i; ; r++) {
          let l = s.charCodeAt(r), a = this.match(l, o, this.bufferPos + this.bufferStart);
          if (r == s.length - 1) {
            if (a)
              return this.value = a, this;
            break;
          }
          o == i && r < t.length && t.charCodeAt(r) == l && o++;
        }
    }
  }
  match(e, t, i) {
    let s = null;
    for (let r = 0; r < this.matches.length; r += 2) {
      let o = this.matches[r], l = !1;
      this.query.charCodeAt(o) == e && (o == this.query.length - 1 ? s = { from: this.matches[r + 1], to: i } : (this.matches[r]++, l = !0)), l || (this.matches.splice(r, 2), r -= 2);
    }
    return this.query.charCodeAt(0) == e && (this.query.length == 1 ? s = { from: t, to: i } : this.matches.push(1, t)), s && this.test && !this.test(s.from, s.to, this.buffer, this.bufferStart) && (s = null), s;
  }
}
typeof Symbol < "u" && (Nn.prototype[Symbol.iterator] = function() {
  return this;
});
const em = { from: -1, to: -1, match: /* @__PURE__ */ /.*/.exec("") }, uh = "gm" + (/x/.unicode == null ? "" : "u");
class tm {
  /**
  Create a cursor that will search the given range in the given
  document. `query` should be the raw pattern (as you'd pass it to
  `new RegExp`).
  */
  constructor(e, t, i, s = 0, r = e.length) {
    if (this.text = e, this.to = r, this.curLine = "", this.done = !1, this.value = em, /\\[sWDnr]|\n|\r|\[\^/.test(t))
      return new im(e, t, i, s, r);
    this.re = new RegExp(t, uh + (i != null && i.ignoreCase ? "i" : "")), this.test = i == null ? void 0 : i.test, this.iter = e.iter();
    let o = e.lineAt(s);
    this.curLineStart = o.from, this.matchPos = bo(e, s), this.getLine(this.curLineStart);
  }
  getLine(e) {
    this.iter.next(e), this.iter.lineBreak ? this.curLine = "" : (this.curLine = this.iter.value, this.curLineStart + this.curLine.length > this.to && (this.curLine = this.curLine.slice(0, this.to - this.curLineStart)), this.iter.next());
  }
  nextLine() {
    this.curLineStart = this.curLineStart + this.curLine.length + 1, this.curLineStart > this.to ? this.curLine = "" : this.getLine(0);
  }
  /**
  Move to the next match, if there is one.
  */
  next() {
    for (let e = this.matchPos - this.curLineStart; ; ) {
      this.re.lastIndex = e;
      let t = this.matchPos <= this.to && this.re.exec(this.curLine);
      if (t) {
        let i = this.curLineStart + t.index, s = i + t[0].length;
        if (this.matchPos = bo(this.text, s + (i == s ? 1 : 0)), i == this.curLineStart + this.curLine.length && this.nextLine(), (i < s || i > this.value.to) && (!this.test || this.test(i, s, t)))
          return this.value = { from: i, to: s, match: t }, this;
        e = this.matchPos - this.curLineStart;
      } else if (this.curLineStart + this.curLine.length < this.to)
        this.nextLine(), e = 0;
      else
        return this.done = !0, this;
    }
  }
}
const Tl = /* @__PURE__ */ new WeakMap();
class On {
  constructor(e, t) {
    this.from = e, this.text = t;
  }
  get to() {
    return this.from + this.text.length;
  }
  static get(e, t, i) {
    let s = Tl.get(e);
    if (!s || s.from >= i || s.to <= t) {
      let l = new On(t, e.sliceString(t, i));
      return Tl.set(e, l), l;
    }
    if (s.from == t && s.to == i)
      return s;
    let { text: r, from: o } = s;
    return o > t && (r = e.sliceString(t, o) + r, o = t), s.to < i && (r += e.sliceString(s.to, i)), Tl.set(e, new On(o, r)), new On(t, r.slice(t - o, i - o));
  }
}
class im {
  constructor(e, t, i, s, r) {
    this.text = e, this.to = r, this.done = !1, this.value = em, this.matchPos = bo(e, s), this.re = new RegExp(t, uh + (i != null && i.ignoreCase ? "i" : "")), this.test = i == null ? void 0 : i.test, this.flat = On.get(e, s, this.chunkEnd(
      s + 5e3
      /* Chunk.Base */
    ));
  }
  chunkEnd(e) {
    return e >= this.to ? this.to : this.text.lineAt(e).to;
  }
  next() {
    for (; ; ) {
      let e = this.re.lastIndex = this.matchPos - this.flat.from, t = this.re.exec(this.flat.text);
      if (t && !t[0] && t.index == e && (this.re.lastIndex = e + 1, t = this.re.exec(this.flat.text)), t) {
        let i = this.flat.from + t.index, s = i + t[0].length;
        if ((this.flat.to >= this.to || t.index + t[0].length <= this.flat.text.length - 10) && (!this.test || this.test(i, s, t)))
          return this.value = { from: i, to: s, match: t }, this.matchPos = bo(this.text, s + (i == s ? 1 : 0)), this;
      }
      if (this.flat.to == this.to)
        return this.done = !0, this;
      this.flat = On.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + this.flat.text.length * 2));
    }
  }
}
typeof Symbol < "u" && (tm.prototype[Symbol.iterator] = im.prototype[Symbol.iterator] = function() {
  return this;
});
function Ox(n) {
  try {
    return new RegExp(n, uh), !0;
  } catch {
    return !1;
  }
}
function bo(n, e) {
  if (e >= n.length)
    return e;
  let t = n.lineAt(e), i;
  for (; e < t.to && (i = t.text.charCodeAt(e - t.from)) >= 56320 && i < 57344; )
    e++;
  return e;
}
function Oa(n) {
  let e = String(n.state.doc.lineAt(n.state.selection.main.head).number), t = oe("input", { class: "cm-textfield", name: "line", value: e }), i = oe("form", {
    class: "cm-gotoLine",
    onkeydown: (r) => {
      r.keyCode == 27 ? (r.preventDefault(), n.dispatch({ effects: ws.of(!1) }), n.focus()) : r.keyCode == 13 && (r.preventDefault(), s());
    },
    onsubmit: (r) => {
      r.preventDefault(), s();
    }
  }, oe("label", n.state.phrase("Go to line"), ": ", t), " ", oe("button", { class: "cm-button", type: "submit" }, n.state.phrase("go")), oe("button", {
    name: "close",
    onclick: () => {
      n.dispatch({ effects: ws.of(!1) }), n.focus();
    },
    "aria-label": n.state.phrase("close"),
    type: "button"
  }, ["×"]));
  function s() {
    let r = /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(t.value);
    if (!r)
      return;
    let { state: o } = n, l = o.doc.lineAt(o.selection.main.head), [, a, h, c, f] = r, u = c ? +c.slice(1) : 0, d = h ? +h : l.number;
    if (h && f) {
      let g = d / 100;
      a && (g = g * (a == "-" ? -1 : 1) + l.number / o.doc.lines), d = Math.round(o.doc.lines * g);
    } else h && a && (d = d * (a == "-" ? -1 : 1) + l.number);
    let p = o.doc.line(Math.max(1, Math.min(o.doc.lines, d))), m = S.cursor(p.from + Math.max(0, Math.min(u, p.length)));
    n.dispatch({
      effects: [ws.of(!1), _.scrollIntoView(m.from, { y: "center" })],
      selection: m
    }), n.focus();
  }
  return { dom: i };
}
const ws = /* @__PURE__ */ z.define(), Df = /* @__PURE__ */ Ne.define({
  create() {
    return !0;
  },
  update(n, e) {
    for (let t of e.effects)
      t.is(ws) && (n = t.value);
    return n;
  },
  provide: (n) => Rs.from(n, (e) => e ? Oa : null)
}), _x = (n) => {
  let e = _s(n, Oa);
  if (!e) {
    let t = [ws.of(!0)];
    n.state.field(Df, !1) == null && t.push(z.appendConfig.of([Df, Rx])), n.dispatch({ effects: t }), e = _s(n, Oa);
  }
  return e && e.dom.querySelector("input").select(), !0;
}, Rx = /* @__PURE__ */ _.baseTheme({
  ".cm-panel.cm-gotoLine": {
    padding: "2px 6px 4px",
    position: "relative",
    "& label": { fontSize: "80%" },
    "& [name=close]": {
      position: "absolute",
      top: "0",
      bottom: "0",
      right: "4px",
      backgroundColor: "inherit",
      border: "none",
      font: "inherit",
      padding: "0"
    }
  }
}), Lx = {
  highlightWordAroundCursor: !1,
  minSelectionLength: 1,
  maxMatches: 100,
  wholeWords: !1
}, Px = /* @__PURE__ */ R.define({
  combine(n) {
    return ri(n, Lx, {
      highlightWordAroundCursor: (e, t) => e || t,
      minSelectionLength: Math.min,
      maxMatches: Math.min
    });
  }
});
function Ix(n) {
  return [Wx, Hx];
}
const Bx = /* @__PURE__ */ F.mark({ class: "cm-selectionMatch" }), Nx = /* @__PURE__ */ F.mark({ class: "cm-selectionMatch cm-selectionMatch-main" });
function Of(n, e, t, i) {
  return (t == 0 || n(e.sliceDoc(t - 1, t)) != de.Word) && (i == e.doc.length || n(e.sliceDoc(i, i + 1)) != de.Word);
}
function Fx(n, e, t, i) {
  return n(e.sliceDoc(t, t + 1)) == de.Word && n(e.sliceDoc(i - 1, i)) == de.Word;
}
const Hx = /* @__PURE__ */ Se.fromClass(class {
  constructor(n) {
    this.decorations = this.getDeco(n);
  }
  update(n) {
    (n.selectionSet || n.docChanged || n.viewportChanged) && (this.decorations = this.getDeco(n.view));
  }
  getDeco(n) {
    let e = n.state.facet(Px), { state: t } = n, i = t.selection;
    if (i.ranges.length > 1)
      return F.none;
    let s = i.main, r, o = null;
    if (s.empty) {
      if (!e.highlightWordAroundCursor)
        return F.none;
      let a = t.wordAt(s.head);
      if (!a)
        return F.none;
      o = t.charCategorizer(s.head), r = t.sliceDoc(a.from, a.to);
    } else {
      let a = s.to - s.from;
      if (a < e.minSelectionLength || a > 200)
        return F.none;
      if (e.wholeWords) {
        if (r = t.sliceDoc(s.from, s.to), o = t.charCategorizer(s.head), !(Of(o, t, s.from, s.to) && Fx(o, t, s.from, s.to)))
          return F.none;
      } else if (r = t.sliceDoc(s.from, s.to), !r)
        return F.none;
    }
    let l = [];
    for (let a of n.visibleRanges) {
      let h = new Nn(t.doc, r, a.from, a.to);
      for (; !h.next().done; ) {
        let { from: c, to: f } = h.value;
        if ((!o || Of(o, t, c, f)) && (s.empty && c <= s.from && f >= s.to ? l.push(Nx.range(c, f)) : (c >= s.to || f <= s.from) && l.push(Bx.range(c, f)), l.length > e.maxMatches))
          return F.none;
      }
    }
    return F.set(l);
  }
}, {
  decorations: (n) => n.decorations
}), Wx = /* @__PURE__ */ _.baseTheme({
  ".cm-selectionMatch": { backgroundColor: "#99ff7780" },
  ".cm-searchMatch .cm-selectionMatch": { backgroundColor: "transparent" }
}), Vx = ({ state: n, dispatch: e }) => {
  let { selection: t } = n, i = S.create(t.ranges.map((s) => n.wordAt(s.head) || S.cursor(s.head)), t.mainIndex);
  return i.eq(t) ? !1 : (e(n.update({ selection: i })), !0);
};
function zx(n, e) {
  let { main: t, ranges: i } = n.selection, s = n.wordAt(t.head), r = s && s.from == t.from && s.to == t.to;
  for (let o = !1, l = new Nn(n.doc, e, i[i.length - 1].to); ; )
    if (l.next(), l.done) {
      if (o)
        return null;
      l = new Nn(n.doc, e, 0, Math.max(0, i[i.length - 1].from - 1)), o = !0;
    } else {
      if (o && i.some((a) => a.from == l.value.from))
        continue;
      if (r) {
        let a = n.wordAt(l.value.from);
        if (!a || a.from != l.value.from || a.to != l.value.to)
          continue;
      }
      return l.value;
    }
}
const $x = ({ state: n, dispatch: e }) => {
  let { ranges: t } = n.selection;
  if (t.some((r) => r.from === r.to))
    return Vx({ state: n, dispatch: e });
  let i = n.sliceDoc(t[0].from, t[0].to);
  if (n.selection.ranges.some((r) => n.sliceDoc(r.from, r.to) != i))
    return !1;
  let s = zx(n, i);
  return s ? (e(n.update({
    selection: n.selection.addRange(S.range(s.from, s.to), !1),
    effects: _.scrollIntoView(s.to)
  })), !0) : !1;
}, $n = /* @__PURE__ */ R.define({
  combine(n) {
    return ri(n, {
      top: !1,
      caseSensitive: !1,
      literal: !1,
      regexp: !1,
      wholeWord: !1,
      createPanel: (e) => new tw(e),
      scrollToMatch: (e) => _.scrollIntoView(e)
    });
  }
});
class nm {
  /**
  Create a query object.
  */
  constructor(e) {
    this.search = e.search, this.caseSensitive = !!e.caseSensitive, this.literal = !!e.literal, this.regexp = !!e.regexp, this.replace = e.replace || "", this.valid = !!this.search && (!this.regexp || Ox(this.search)), this.unquoted = this.unquote(this.search), this.wholeWord = !!e.wholeWord;
  }
  /**
  @internal
  */
  unquote(e) {
    return this.literal ? e : e.replace(/\\([nrt\\])/g, (t, i) => i == "n" ? `
` : i == "r" ? "\r" : i == "t" ? "	" : "\\");
  }
  /**
  Compare this query to another query.
  */
  eq(e) {
    return this.search == e.search && this.replace == e.replace && this.caseSensitive == e.caseSensitive && this.regexp == e.regexp && this.wholeWord == e.wholeWord;
  }
  /**
  @internal
  */
  create() {
    return this.regexp ? new Kx(this) : new qx(this);
  }
  /**
  Get a search cursor for this query, searching through the given
  range in the given state.
  */
  getCursor(e, t = 0, i) {
    let s = e.doc ? e : J.create({ doc: e });
    return i == null && (i = s.doc.length), this.regexp ? Sn(this, s, t, i) : wn(this, s, t, i);
  }
}
class sm {
  constructor(e) {
    this.spec = e;
  }
}
function wn(n, e, t, i) {
  return new Nn(e.doc, n.unquoted, t, i, n.caseSensitive ? void 0 : (s) => s.toLowerCase(), n.wholeWord ? Ux(e.doc, e.charCategorizer(e.selection.main.head)) : void 0);
}
function Ux(n, e) {
  return (t, i, s, r) => ((r > t || r + s.length < i) && (r = Math.max(0, t - 2), s = n.sliceString(r, Math.min(n.length, i + 2))), (e(vo(s, t - r)) != de.Word || e(xo(s, t - r)) != de.Word) && (e(xo(s, i - r)) != de.Word || e(vo(s, i - r)) != de.Word));
}
class qx extends sm {
  constructor(e) {
    super(e);
  }
  nextMatch(e, t, i) {
    let s = wn(this.spec, e, i, e.doc.length).nextOverlapping();
    if (s.done) {
      let r = Math.min(e.doc.length, t + this.spec.unquoted.length);
      s = wn(this.spec, e, 0, r).nextOverlapping();
    }
    return s.done || s.value.from == t && s.value.to == i ? null : s.value;
  }
  // Searching in reverse is, rather than implementing an inverted search
  // cursor, done by scanning chunk after chunk forward.
  prevMatchInRange(e, t, i) {
    for (let s = i; ; ) {
      let r = Math.max(t, s - 1e4 - this.spec.unquoted.length), o = wn(this.spec, e, r, s), l = null;
      for (; !o.nextOverlapping().done; )
        l = o.value;
      if (l)
        return l;
      if (r == t)
        return null;
      s -= 1e4;
    }
  }
  prevMatch(e, t, i) {
    let s = this.prevMatchInRange(e, 0, t);
    return s || (s = this.prevMatchInRange(e, Math.max(0, i - this.spec.unquoted.length), e.doc.length)), s && (s.from != t || s.to != i) ? s : null;
  }
  getReplacement(e) {
    return this.spec.unquote(this.spec.replace);
  }
  matchAll(e, t) {
    let i = wn(this.spec, e, 0, e.doc.length), s = [];
    for (; !i.next().done; ) {
      if (s.length >= t)
        return null;
      s.push(i.value);
    }
    return s;
  }
  highlight(e, t, i, s) {
    let r = wn(this.spec, e, Math.max(0, t - this.spec.unquoted.length), Math.min(i + this.spec.unquoted.length, e.doc.length));
    for (; !r.next().done; )
      s(r.value.from, r.value.to);
  }
}
function Sn(n, e, t, i) {
  return new tm(e.doc, n.search, {
    ignoreCase: !n.caseSensitive,
    test: n.wholeWord ? jx(e.charCategorizer(e.selection.main.head)) : void 0
  }, t, i);
}
function vo(n, e) {
  return n.slice(Be(n, e, !1), e);
}
function xo(n, e) {
  return n.slice(e, Be(n, e));
}
function jx(n) {
  return (e, t, i) => !i[0].length || (n(vo(i.input, i.index)) != de.Word || n(xo(i.input, i.index)) != de.Word) && (n(xo(i.input, i.index + i[0].length)) != de.Word || n(vo(i.input, i.index + i[0].length)) != de.Word);
}
class Kx extends sm {
  nextMatch(e, t, i) {
    let s = Sn(this.spec, e, i, e.doc.length).next();
    return s.done && (s = Sn(this.spec, e, 0, t).next()), s.done ? null : s.value;
  }
  prevMatchInRange(e, t, i) {
    for (let s = 1; ; s++) {
      let r = Math.max(
        t,
        i - s * 1e4
        /* FindPrev.ChunkSize */
      ), o = Sn(this.spec, e, r, i), l = null;
      for (; !o.next().done; )
        l = o.value;
      if (l && (r == t || l.from > r + 10))
        return l;
      if (r == t)
        return null;
    }
  }
  prevMatch(e, t, i) {
    return this.prevMatchInRange(e, 0, t) || this.prevMatchInRange(e, i, e.doc.length);
  }
  getReplacement(e) {
    return this.spec.unquote(this.spec.replace).replace(/\$([$&]|\d+)/g, (t, i) => {
      if (i == "&")
        return e.match[0];
      if (i == "$")
        return "$";
      for (let s = i.length; s > 0; s--) {
        let r = +i.slice(0, s);
        if (r > 0 && r < e.match.length)
          return e.match[r] + i.slice(s);
      }
      return t;
    });
  }
  matchAll(e, t) {
    let i = Sn(this.spec, e, 0, e.doc.length), s = [];
    for (; !i.next().done; ) {
      if (s.length >= t)
        return null;
      s.push(i.value);
    }
    return s;
  }
  highlight(e, t, i, s) {
    let r = Sn(this.spec, e, Math.max(
      0,
      t - 250
      /* RegExp.HighlightMargin */
    ), Math.min(i + 250, e.doc.length));
    for (; !r.next().done; )
      s(r.value.from, r.value.to);
  }
}
const Is = /* @__PURE__ */ z.define(), dh = /* @__PURE__ */ z.define(), Hi = /* @__PURE__ */ Ne.define({
  create(n) {
    return new El(_a(n).create(), null);
  },
  update(n, e) {
    for (let t of e.effects)
      t.is(Is) ? n = new El(t.value.create(), n.panel) : t.is(dh) && (n = new El(n.query, t.value ? ph : null));
    return n;
  },
  provide: (n) => Rs.from(n, (e) => e.panel)
});
class El {
  constructor(e, t) {
    this.query = e, this.panel = t;
  }
}
const Gx = /* @__PURE__ */ F.mark({ class: "cm-searchMatch" }), Yx = /* @__PURE__ */ F.mark({ class: "cm-searchMatch cm-searchMatch-selected" }), Xx = /* @__PURE__ */ Se.fromClass(class {
  constructor(n) {
    this.view = n, this.decorations = this.highlight(n.state.field(Hi));
  }
  update(n) {
    let e = n.state.field(Hi);
    (e != n.startState.field(Hi) || n.docChanged || n.selectionSet || n.viewportChanged) && (this.decorations = this.highlight(e));
  }
  highlight({ query: n, panel: e }) {
    if (!e || !n.spec.valid)
      return F.none;
    let { view: t } = this, i = new bi();
    for (let s = 0, r = t.visibleRanges, o = r.length; s < o; s++) {
      let { from: l, to: a } = r[s];
      for (; s < o - 1 && a > r[s + 1].from - 2 * 250; )
        a = r[++s].to;
      n.highlight(t.state, l, a, (h, c) => {
        let f = t.state.selection.ranges.some((u) => u.from == h && u.to == c);
        i.add(h, c, f ? Yx : Gx);
      });
    }
    return i.finish();
  }
}, {
  decorations: (n) => n.decorations
});
function Gs(n) {
  return (e) => {
    let t = e.state.field(Hi, !1);
    return t && t.query.spec.valid ? n(e, t) : lm(e);
  };
}
const wo = /* @__PURE__ */ Gs((n, { query: e }) => {
  let { to: t } = n.state.selection.main, i = e.nextMatch(n.state, t, t);
  if (!i)
    return !1;
  let s = S.single(i.from, i.to), r = n.state.facet($n);
  return n.dispatch({
    selection: s,
    effects: [mh(n, i), r.scrollToMatch(s.main, n)],
    userEvent: "select.search"
  }), om(n), !0;
}), So = /* @__PURE__ */ Gs((n, { query: e }) => {
  let { state: t } = n, { from: i } = t.selection.main, s = e.prevMatch(t, i, i);
  if (!s)
    return !1;
  let r = S.single(s.from, s.to), o = n.state.facet($n);
  return n.dispatch({
    selection: r,
    effects: [mh(n, s), o.scrollToMatch(r.main, n)],
    userEvent: "select.search"
  }), om(n), !0;
}), Jx = /* @__PURE__ */ Gs((n, { query: e }) => {
  let t = e.matchAll(n.state, 1e3);
  return !t || !t.length ? !1 : (n.dispatch({
    selection: S.create(t.map((i) => S.range(i.from, i.to))),
    userEvent: "select.search.matches"
  }), !0);
}), Qx = ({ state: n, dispatch: e }) => {
  let t = n.selection;
  if (t.ranges.length > 1 || t.main.empty)
    return !1;
  let { from: i, to: s } = t.main, r = [], o = 0;
  for (let l = new Nn(n.doc, n.sliceDoc(i, s)); !l.next().done; ) {
    if (r.length > 1e3)
      return !1;
    l.value.from == i && (o = r.length), r.push(S.range(l.value.from, l.value.to));
  }
  return e(n.update({
    selection: S.create(r, o),
    userEvent: "select.search.matches"
  })), !0;
}, _f = /* @__PURE__ */ Gs((n, { query: e }) => {
  let { state: t } = n, { from: i, to: s } = t.selection.main;
  if (t.readOnly)
    return !1;
  let r = e.nextMatch(t, i, i);
  if (!r)
    return !1;
  let o = r, l = [], a, h, c = [];
  o.from == i && o.to == s && (h = t.toText(e.getReplacement(o)), l.push({ from: o.from, to: o.to, insert: h }), o = e.nextMatch(t, o.from, o.to), c.push(_.announce.of(t.phrase("replaced match on line $", t.doc.lineAt(i).number) + ".")));
  let f = n.state.changes(l);
  return o && (a = S.single(o.from, o.to).map(f), c.push(mh(n, o)), c.push(t.facet($n).scrollToMatch(a.main, n))), n.dispatch({
    changes: f,
    selection: a,
    effects: c,
    userEvent: "input.replace"
  }), !0;
}), Zx = /* @__PURE__ */ Gs((n, { query: e }) => {
  if (n.state.readOnly)
    return !1;
  let t = e.matchAll(n.state, 1e9).map((s) => {
    let { from: r, to: o } = s;
    return { from: r, to: o, insert: e.getReplacement(s) };
  });
  if (!t.length)
    return !1;
  let i = n.state.phrase("replaced $ matches", t.length) + ".";
  return n.dispatch({
    changes: t,
    effects: _.announce.of(i),
    userEvent: "input.replace.all"
  }), !0;
});
function ph(n) {
  return n.state.facet($n).createPanel(n);
}
function _a(n, e) {
  var t, i, s, r, o;
  let l = n.selection.main, a = l.empty || l.to > l.from + 100 ? "" : n.sliceDoc(l.from, l.to);
  if (e && !a)
    return e;
  let h = n.facet($n);
  return new nm({
    search: ((t = e == null ? void 0 : e.literal) !== null && t !== void 0 ? t : h.literal) ? a : a.replace(/\n/g, "\\n"),
    caseSensitive: (i = e == null ? void 0 : e.caseSensitive) !== null && i !== void 0 ? i : h.caseSensitive,
    literal: (s = e == null ? void 0 : e.literal) !== null && s !== void 0 ? s : h.literal,
    regexp: (r = e == null ? void 0 : e.regexp) !== null && r !== void 0 ? r : h.regexp,
    wholeWord: (o = e == null ? void 0 : e.wholeWord) !== null && o !== void 0 ? o : h.wholeWord
  });
}
function rm(n) {
  let e = _s(n, ph);
  return e && e.dom.querySelector("[main-field]");
}
function om(n) {
  let e = rm(n);
  e && e == n.root.activeElement && e.select();
}
const lm = (n) => {
  let e = n.state.field(Hi, !1);
  if (e && e.panel) {
    let t = rm(n);
    if (t && t != n.root.activeElement) {
      let i = _a(n.state, e.query.spec);
      i.valid && n.dispatch({ effects: Is.of(i) }), t.focus(), t.select();
    }
  } else
    n.dispatch({ effects: [
      dh.of(!0),
      e ? Is.of(_a(n.state, e.query.spec)) : z.appendConfig.of(nw)
    ] });
  return !0;
}, am = (n) => {
  let e = n.state.field(Hi, !1);
  if (!e || !e.panel)
    return !1;
  let t = _s(n, ph);
  return t && t.dom.contains(n.root.activeElement) && n.focus(), n.dispatch({ effects: dh.of(!1) }), !0;
}, ew = [
  { key: "Mod-f", run: lm, scope: "editor search-panel" },
  { key: "F3", run: wo, shift: So, scope: "editor search-panel", preventDefault: !0 },
  { key: "Mod-g", run: wo, shift: So, scope: "editor search-panel", preventDefault: !0 },
  { key: "Escape", run: am, scope: "editor search-panel" },
  { key: "Mod-Shift-l", run: Qx },
  { key: "Mod-Alt-g", run: _x },
  { key: "Mod-d", run: $x, preventDefault: !0 }
];
class tw {
  constructor(e) {
    this.view = e;
    let t = this.query = e.state.field(Hi).query.spec;
    this.commit = this.commit.bind(this), this.searchField = oe("input", {
      value: t.search,
      placeholder: gt(e, "Find"),
      "aria-label": gt(e, "Find"),
      class: "cm-textfield",
      name: "search",
      form: "",
      "main-field": "true",
      onchange: this.commit,
      onkeyup: this.commit
    }), this.replaceField = oe("input", {
      value: t.replace,
      placeholder: gt(e, "Replace"),
      "aria-label": gt(e, "Replace"),
      class: "cm-textfield",
      name: "replace",
      form: "",
      onchange: this.commit,
      onkeyup: this.commit
    }), this.caseField = oe("input", {
      type: "checkbox",
      name: "case",
      form: "",
      checked: t.caseSensitive,
      onchange: this.commit
    }), this.reField = oe("input", {
      type: "checkbox",
      name: "re",
      form: "",
      checked: t.regexp,
      onchange: this.commit
    }), this.wordField = oe("input", {
      type: "checkbox",
      name: "word",
      form: "",
      checked: t.wholeWord,
      onchange: this.commit
    });
    function i(s, r, o) {
      return oe("button", { class: "cm-button", name: s, onclick: r, type: "button" }, o);
    }
    this.dom = oe("div", { onkeydown: (s) => this.keydown(s), class: "cm-search" }, [
      this.searchField,
      i("next", () => wo(e), [gt(e, "next")]),
      i("prev", () => So(e), [gt(e, "previous")]),
      i("select", () => Jx(e), [gt(e, "all")]),
      oe("label", null, [this.caseField, gt(e, "match case")]),
      oe("label", null, [this.reField, gt(e, "regexp")]),
      oe("label", null, [this.wordField, gt(e, "by word")]),
      ...e.state.readOnly ? [] : [
        oe("br"),
        this.replaceField,
        i("replace", () => _f(e), [gt(e, "replace")]),
        i("replaceAll", () => Zx(e), [gt(e, "replace all")])
      ],
      oe("button", {
        name: "close",
        onclick: () => am(e),
        "aria-label": gt(e, "close"),
        type: "button"
      }, ["×"])
    ]);
  }
  commit() {
    let e = new nm({
      search: this.searchField.value,
      caseSensitive: this.caseField.checked,
      regexp: this.reField.checked,
      wholeWord: this.wordField.checked,
      replace: this.replaceField.value
    });
    e.eq(this.query) || (this.query = e, this.view.dispatch({ effects: Is.of(e) }));
  }
  keydown(e) {
    lb(this.view, e, "search-panel") ? e.preventDefault() : e.keyCode == 13 && e.target == this.searchField ? (e.preventDefault(), (e.shiftKey ? So : wo)(this.view)) : e.keyCode == 13 && e.target == this.replaceField && (e.preventDefault(), _f(this.view));
  }
  update(e) {
    for (let t of e.transactions)
      for (let i of t.effects)
        i.is(Is) && !i.value.eq(this.query) && this.setQuery(i.value);
  }
  setQuery(e) {
    this.query = e, this.searchField.value = e.search, this.replaceField.value = e.replace, this.caseField.checked = e.caseSensitive, this.reField.checked = e.regexp, this.wordField.checked = e.wholeWord;
  }
  mount() {
    this.searchField.select();
  }
  get pos() {
    return 80;
  }
  get top() {
    return this.view.state.facet($n).top;
  }
}
function gt(n, e) {
  return n.state.phrase(e);
}
const Er = 30, Dr = /[\s\.,:;?!]/;
function mh(n, { from: e, to: t }) {
  let i = n.state.doc.lineAt(e), s = n.state.doc.lineAt(t).to, r = Math.max(i.from, e - Er), o = Math.min(s, t + Er), l = n.state.sliceDoc(r, o);
  if (r != i.from) {
    for (let a = 0; a < Er; a++)
      if (!Dr.test(l[a + 1]) && Dr.test(l[a])) {
        l = l.slice(a);
        break;
      }
  }
  if (o != s) {
    for (let a = l.length - 1; a > l.length - Er; a--)
      if (!Dr.test(l[a - 1]) && Dr.test(l[a])) {
        l = l.slice(0, a);
        break;
      }
  }
  return _.announce.of(`${n.state.phrase("current match")}. ${l} ${n.state.phrase("on line")} ${i.number}.`);
}
const iw = /* @__PURE__ */ _.baseTheme({
  ".cm-panel.cm-search": {
    padding: "2px 6px 4px",
    position: "relative",
    "& [name=close]": {
      position: "absolute",
      top: "0",
      right: "4px",
      backgroundColor: "inherit",
      border: "none",
      font: "inherit",
      padding: 0,
      margin: 0
    },
    "& input, & button, & label": {
      margin: ".2em .6em .2em 0"
    },
    "& input[type=checkbox]": {
      marginRight: ".2em"
    },
    "& label": {
      fontSize: "80%",
      whiteSpace: "pre"
    }
  },
  "&light .cm-searchMatch": { backgroundColor: "#ffff0054" },
  "&dark .cm-searchMatch": { backgroundColor: "#00ffff8a" },
  "&light .cm-searchMatch-selected": { backgroundColor: "#ff6a0054" },
  "&dark .cm-searchMatch-selected": { backgroundColor: "#ff00ff8a" }
}), nw = [
  Hi,
  /* @__PURE__ */ gn.low(Xx),
  iw
];
class hm {
  /**
  Create a new completion context. (Mostly useful for testing
  completion sources—in the editor, the extension will create
  these for you.)
  */
  constructor(e, t, i, s) {
    this.state = e, this.pos = t, this.explicit = i, this.view = s, this.abortListeners = [], this.abortOnDocChange = !1;
  }
  /**
  Get the extent, content, and (if there is a token) type of the
  token before `this.pos`.
  */
  tokenBefore(e) {
    let t = Ue(this.state).resolveInner(this.pos, -1);
    for (; t && e.indexOf(t.name) < 0; )
      t = t.parent;
    return t ? {
      from: t.from,
      to: this.pos,
      text: this.state.sliceDoc(t.from, this.pos),
      type: t.type
    } : null;
  }
  /**
  Get the match of the given expression directly before the
  cursor.
  */
  matchBefore(e) {
    let t = this.state.doc.lineAt(this.pos), i = Math.max(t.from, this.pos - 250), s = t.text.slice(i - t.from, this.pos - t.from), r = s.search(cm(e, !1));
    return r < 0 ? null : { from: i + r, to: this.pos, text: s.slice(r) };
  }
  /**
  Yields true when the query has been aborted. Can be useful in
  asynchronous queries to avoid doing work that will be ignored.
  */
  get aborted() {
    return this.abortListeners == null;
  }
  /**
  Allows you to register abort handlers, which will be called when
  the query is
  [aborted](https://codemirror.net/6/docs/ref/#autocomplete.CompletionContext.aborted).
  
  By default, running queries will not be aborted for regular
  typing or backspacing, on the assumption that they are likely to
  return a result with a
  [`validFor`](https://codemirror.net/6/docs/ref/#autocomplete.CompletionResult.validFor) field that
  allows the result to be used after all. Passing `onDocChange:
  true` will cause this query to be aborted for any document
  change.
  */
  addEventListener(e, t, i) {
    e == "abort" && this.abortListeners && (this.abortListeners.push(t), i && i.onDocChange && (this.abortOnDocChange = !0));
  }
}
function Rf(n) {
  let e = Object.keys(n).join(""), t = /\w/.test(e);
  return t && (e = e.replace(/\w/g, "")), `[${t ? "\\w" : ""}${e.replace(/[^\w\s]/g, "\\$&")}]`;
}
function sw(n) {
  let e = /* @__PURE__ */ Object.create(null), t = /* @__PURE__ */ Object.create(null);
  for (let { label: s } of n) {
    e[s[0]] = !0;
    for (let r = 1; r < s.length; r++)
      t[s[r]] = !0;
  }
  let i = Rf(e) + Rf(t) + "*$";
  return [new RegExp("^" + i), new RegExp(i)];
}
function rw(n) {
  let e = n.map((s) => typeof s == "string" ? { label: s } : s), [t, i] = e.every((s) => /^\w+$/.test(s.label)) ? [/\w*$/, /\w+$/] : sw(e);
  return (s) => {
    let r = s.matchBefore(i);
    return r || s.explicit ? { from: r ? r.from : s.pos, options: e, validFor: t } : null;
  };
}
class Lf {
  constructor(e, t, i, s) {
    this.completion = e, this.source = t, this.match = i, this.score = s;
  }
}
function hn(n) {
  return n.selection.main.from;
}
function cm(n, e) {
  var t;
  let { source: i } = n, s = e && i[0] != "^", r = i[i.length - 1] != "$";
  return !s && !r ? n : new RegExp(`${s ? "^" : ""}(?:${i})${r ? "$" : ""}`, (t = n.flags) !== null && t !== void 0 ? t : n.ignoreCase ? "i" : "");
}
const fm = /* @__PURE__ */ Si.define();
function ow(n, e, t, i) {
  let { main: s } = n.selection, r = t - s.from, o = i - s.from;
  return Object.assign(Object.assign({}, n.changeByRange((l) => {
    if (l != s && t != i && n.sliceDoc(l.from + r, l.from + o) != n.sliceDoc(t, i))
      return { range: l };
    let a = n.toText(e);
    return {
      changes: { from: l.from + r, to: i == s.from ? l.to : l.from + o, insert: a },
      range: S.cursor(l.from + r + a.length)
    };
  })), { scrollIntoView: !0, userEvent: "input.complete" });
}
const Pf = /* @__PURE__ */ new WeakMap();
function lw(n) {
  if (!Array.isArray(n))
    return n;
  let e = Pf.get(n);
  return e || Pf.set(n, e = rw(n)), e;
}
const ko = /* @__PURE__ */ z.define(), Bs = /* @__PURE__ */ z.define();
class aw {
  constructor(e) {
    this.pattern = e, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
    for (let t = 0; t < e.length; ) {
      let i = ot(e, t), s = Yt(i);
      this.chars.push(i);
      let r = e.slice(t, t + s), o = r.toUpperCase();
      this.folded.push(ot(o == r ? r.toLowerCase() : o, 0)), t += s;
    }
    this.astral = e.length != this.chars.length;
  }
  ret(e, t) {
    return this.score = e, this.matched = t, this;
  }
  // Matches a given word (completion) against the pattern (input).
  // Will return a boolean indicating whether there was a match and,
  // on success, set `this.score` to the score, `this.matched` to an
  // array of `from, to` pairs indicating the matched parts of `word`.
  //
  // The score is a number that is more negative the worse the match
  // is. See `Penalty` above.
  match(e) {
    if (this.pattern.length == 0)
      return this.ret(-100, []);
    if (e.length < this.pattern.length)
      return null;
    let { chars: t, folded: i, any: s, precise: r, byWord: o } = this;
    if (t.length == 1) {
      let v = ot(e, 0), k = Yt(v), w = k == e.length ? 0 : -100;
      if (v != t[0]) if (v == i[0])
        w += -200;
      else
        return null;
      return this.ret(w, [0, k]);
    }
    let l = e.indexOf(this.pattern);
    if (l == 0)
      return this.ret(e.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
    let a = t.length, h = 0;
    if (l < 0) {
      for (let v = 0, k = Math.min(e.length, 200); v < k && h < a; ) {
        let w = ot(e, v);
        (w == t[h] || w == i[h]) && (s[h++] = v), v += Yt(w);
      }
      if (h < a)
        return null;
    }
    let c = 0, f = 0, u = !1, d = 0, p = -1, m = -1, g = /[a-z]/.test(e), b = !0;
    for (let v = 0, k = Math.min(e.length, 200), w = 0; v < k && f < a; ) {
      let x = ot(e, v);
      l < 0 && (c < a && x == t[c] && (r[c++] = v), d < a && (x == t[d] || x == i[d] ? (d == 0 && (p = v), m = v + 1, d++) : d = 0));
      let C, A = x < 255 ? x >= 48 && x <= 57 || x >= 97 && x <= 122 ? 2 : x >= 65 && x <= 90 ? 1 : 0 : (C = Wa(x)) != C.toLowerCase() ? 1 : C != C.toUpperCase() ? 2 : 0;
      (!v || A == 1 && g || w == 0 && A != 0) && (t[f] == x || i[f] == x && (u = !0) ? o[f++] = v : o.length && (b = !1)), w = A, v += Yt(x);
    }
    return f == a && o[0] == 0 && b ? this.result(-100 + (u ? -200 : 0), o, e) : d == a && p == 0 ? this.ret(-200 - e.length + (m == e.length ? 0 : -100), [0, m]) : l > -1 ? this.ret(-700 - e.length, [l, l + this.pattern.length]) : d == a ? this.ret(-900 - e.length, [p, m]) : f == a ? this.result(-100 + (u ? -200 : 0) + -700 + (b ? 0 : -1100), o, e) : t.length == 2 ? null : this.result((s[0] ? -700 : 0) + -200 + -1100, s, e);
  }
  result(e, t, i) {
    let s = [], r = 0;
    for (let o of t) {
      let l = o + (this.astral ? Yt(ot(i, o)) : 1);
      r && s[r - 1] == o ? s[r - 1] = l : (s[r++] = o, s[r++] = l);
    }
    return this.ret(e - i.length, s);
  }
}
class hw {
  constructor(e) {
    this.pattern = e, this.matched = [], this.score = 0, this.folded = e.toLowerCase();
  }
  match(e) {
    if (e.length < this.pattern.length)
      return null;
    let t = e.slice(0, this.pattern.length), i = t == this.pattern ? 0 : t.toLowerCase() == this.folded ? -200 : null;
    return i == null ? null : (this.matched = [0, t.length], this.score = i + (e.length == this.pattern.length ? 0 : -100), this);
  }
}
const Te = /* @__PURE__ */ R.define({
  combine(n) {
    return ri(n, {
      activateOnTyping: !0,
      activateOnCompletion: () => !1,
      activateOnTypingDelay: 100,
      selectOnOpen: !0,
      override: null,
      closeOnBlur: !0,
      maxRenderedOptions: 100,
      defaultKeymap: !0,
      tooltipClass: () => "",
      optionClass: () => "",
      aboveCursor: !1,
      icons: !0,
      addToOptions: [],
      positionInfo: cw,
      filterStrict: !1,
      compareCompletions: (e, t) => e.label.localeCompare(t.label),
      interactionDelay: 75,
      updateSyncTime: 100
    }, {
      defaultKeymap: (e, t) => e && t,
      closeOnBlur: (e, t) => e && t,
      icons: (e, t) => e && t,
      tooltipClass: (e, t) => (i) => If(e(i), t(i)),
      optionClass: (e, t) => (i) => If(e(i), t(i)),
      addToOptions: (e, t) => e.concat(t),
      filterStrict: (e, t) => e || t
    });
  }
});
function If(n, e) {
  return n ? e ? n + " " + e : n : e;
}
function cw(n, e, t, i, s, r) {
  let o = n.textDirection == fe.RTL, l = o, a = !1, h = "top", c, f, u = e.left - s.left, d = s.right - e.right, p = i.right - i.left, m = i.bottom - i.top;
  if (l && u < Math.min(p, d) ? l = !1 : !l && d < Math.min(p, u) && (l = !0), p <= (l ? u : d))
    c = Math.max(s.top, Math.min(t.top, s.bottom - m)) - e.top, f = Math.min(400, l ? u : d);
  else {
    a = !0, f = Math.min(
      400,
      (o ? e.right : s.right - e.left) - 30
      /* Info.Margin */
    );
    let v = s.bottom - e.bottom;
    v >= m || v > e.top ? c = t.bottom - e.top : (h = "bottom", c = e.bottom - t.top);
  }
  let g = (e.bottom - e.top) / r.offsetHeight, b = (e.right - e.left) / r.offsetWidth;
  return {
    style: `${h}: ${c / g}px; max-width: ${f / b}px`,
    class: "cm-completionInfo-" + (a ? o ? "left-narrow" : "right-narrow" : l ? "left" : "right")
  };
}
function fw(n) {
  let e = n.addToOptions.slice();
  return n.icons && e.push({
    render(t) {
      let i = document.createElement("div");
      return i.classList.add("cm-completionIcon"), t.type && i.classList.add(...t.type.split(/\s+/g).map((s) => "cm-completionIcon-" + s)), i.setAttribute("aria-hidden", "true"), i;
    },
    position: 20
  }), e.push({
    render(t, i, s, r) {
      let o = document.createElement("span");
      o.className = "cm-completionLabel";
      let l = t.displayLabel || t.label, a = 0;
      for (let h = 0; h < r.length; ) {
        let c = r[h++], f = r[h++];
        c > a && o.appendChild(document.createTextNode(l.slice(a, c)));
        let u = o.appendChild(document.createElement("span"));
        u.appendChild(document.createTextNode(l.slice(c, f))), u.className = "cm-completionMatchedText", a = f;
      }
      return a < l.length && o.appendChild(document.createTextNode(l.slice(a))), o;
    },
    position: 50
  }, {
    render(t) {
      if (!t.detail)
        return null;
      let i = document.createElement("span");
      return i.className = "cm-completionDetail", i.textContent = t.detail, i;
    },
    position: 80
  }), e.sort((t, i) => t.position - i.position).map((t) => t.render);
}
function Dl(n, e, t) {
  if (n <= t)
    return { from: 0, to: n };
  if (e < 0 && (e = 0), e <= n >> 1) {
    let s = Math.floor(e / t);
    return { from: s * t, to: (s + 1) * t };
  }
  let i = Math.floor((n - e) / t);
  return { from: n - (i + 1) * t, to: n - i * t };
}
class uw {
  constructor(e, t, i) {
    this.view = e, this.stateField = t, this.applyCompletion = i, this.info = null, this.infoDestroy = null, this.placeInfoReq = {
      read: () => this.measureInfo(),
      write: (a) => this.placeInfo(a),
      key: this
    }, this.space = null, this.currentClass = "";
    let s = e.state.field(t), { options: r, selected: o } = s.open, l = e.state.facet(Te);
    this.optionContent = fw(l), this.optionClass = l.optionClass, this.tooltipClass = l.tooltipClass, this.range = Dl(r.length, o, l.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(e.state), this.dom.addEventListener("mousedown", (a) => {
      let { options: h } = e.state.field(t).open;
      for (let c = a.target, f; c && c != this.dom; c = c.parentNode)
        if (c.nodeName == "LI" && (f = /-(\d+)$/.exec(c.id)) && +f[1] < h.length) {
          this.applyCompletion(e, h[+f[1]]), a.preventDefault();
          return;
        }
    }), this.dom.addEventListener("focusout", (a) => {
      let h = e.state.field(this.stateField, !1);
      h && h.tooltip && e.state.facet(Te).closeOnBlur && a.relatedTarget != e.contentDOM && e.dispatch({ effects: Bs.of(null) });
    }), this.showOptions(r, s.id);
  }
  mount() {
    this.updateSel();
  }
  showOptions(e, t) {
    this.list && this.list.remove(), this.list = this.dom.appendChild(this.createListBox(e, t, this.range)), this.list.addEventListener("scroll", () => {
      this.info && this.view.requestMeasure(this.placeInfoReq);
    });
  }
  update(e) {
    var t;
    let i = e.state.field(this.stateField), s = e.startState.field(this.stateField);
    if (this.updateTooltipClass(e.state), i != s) {
      let { options: r, selected: o, disabled: l } = i.open;
      (!s.open || s.open.options != r) && (this.range = Dl(r.length, o, e.state.facet(Te).maxRenderedOptions), this.showOptions(r, i.id)), this.updateSel(), l != ((t = s.open) === null || t === void 0 ? void 0 : t.disabled) && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!l);
    }
  }
  updateTooltipClass(e) {
    let t = this.tooltipClass(e);
    if (t != this.currentClass) {
      for (let i of this.currentClass.split(" "))
        i && this.dom.classList.remove(i);
      for (let i of t.split(" "))
        i && this.dom.classList.add(i);
      this.currentClass = t;
    }
  }
  positioned(e) {
    this.space = e, this.info && this.view.requestMeasure(this.placeInfoReq);
  }
  updateSel() {
    let e = this.view.state.field(this.stateField), t = e.open;
    if ((t.selected > -1 && t.selected < this.range.from || t.selected >= this.range.to) && (this.range = Dl(t.options.length, t.selected, this.view.state.facet(Te).maxRenderedOptions), this.showOptions(t.options, e.id)), this.updateSelectedOption(t.selected)) {
      this.destroyInfo();
      let { completion: i } = t.options[t.selected], { info: s } = i;
      if (!s)
        return;
      let r = typeof s == "string" ? document.createTextNode(s) : s(i);
      if (!r)
        return;
      "then" in r ? r.then((o) => {
        o && this.view.state.field(this.stateField, !1) == e && this.addInfoPane(o, i);
      }).catch((o) => ht(this.view.state, o, "completion info")) : this.addInfoPane(r, i);
    }
  }
  addInfoPane(e, t) {
    this.destroyInfo();
    let i = this.info = document.createElement("div");
    if (i.className = "cm-tooltip cm-completionInfo", e.nodeType != null)
      i.appendChild(e), this.infoDestroy = null;
    else {
      let { dom: s, destroy: r } = e;
      i.appendChild(s), this.infoDestroy = r || null;
    }
    this.dom.appendChild(i), this.view.requestMeasure(this.placeInfoReq);
  }
  updateSelectedOption(e) {
    let t = null;
    for (let i = this.list.firstChild, s = this.range.from; i; i = i.nextSibling, s++)
      i.nodeName != "LI" || !i.id ? s-- : s == e ? i.hasAttribute("aria-selected") || (i.setAttribute("aria-selected", "true"), t = i) : i.hasAttribute("aria-selected") && i.removeAttribute("aria-selected");
    return t && pw(this.list, t), t;
  }
  measureInfo() {
    let e = this.dom.querySelector("[aria-selected]");
    if (!e || !this.info)
      return null;
    let t = this.dom.getBoundingClientRect(), i = this.info.getBoundingClientRect(), s = e.getBoundingClientRect(), r = this.space;
    if (!r) {
      let o = this.dom.ownerDocument.documentElement;
      r = { left: 0, top: 0, right: o.clientWidth, bottom: o.clientHeight };
    }
    return s.top > Math.min(r.bottom, t.bottom) - 10 || s.bottom < Math.max(r.top, t.top) + 10 ? null : this.view.state.facet(Te).positionInfo(this.view, t, s, i, r, this.dom);
  }
  placeInfo(e) {
    this.info && (e ? (e.style && (this.info.style.cssText = e.style), this.info.className = "cm-tooltip cm-completionInfo " + (e.class || "")) : this.info.style.cssText = "top: -1e6px");
  }
  createListBox(e, t, i) {
    const s = document.createElement("ul");
    s.id = t, s.setAttribute("role", "listbox"), s.setAttribute("aria-expanded", "true"), s.setAttribute("aria-label", this.view.state.phrase("Completions")), s.addEventListener("mousedown", (o) => {
      o.target == s && o.preventDefault();
    });
    let r = null;
    for (let o = i.from; o < i.to; o++) {
      let { completion: l, match: a } = e[o], { section: h } = l;
      if (h) {
        let u = typeof h == "string" ? h : h.name;
        if (u != r && (o > i.from || i.from == 0))
          if (r = u, typeof h != "string" && h.header)
            s.appendChild(h.header(h));
          else {
            let d = s.appendChild(document.createElement("completion-section"));
            d.textContent = u;
          }
      }
      const c = s.appendChild(document.createElement("li"));
      c.id = t + "-" + o, c.setAttribute("role", "option");
      let f = this.optionClass(l);
      f && (c.className = f);
      for (let u of this.optionContent) {
        let d = u(l, this.view.state, this.view, a);
        d && c.appendChild(d);
      }
    }
    return i.from && s.classList.add("cm-completionListIncompleteTop"), i.to < e.length && s.classList.add("cm-completionListIncompleteBottom"), s;
  }
  destroyInfo() {
    this.info && (this.infoDestroy && this.infoDestroy(), this.info.remove(), this.info = null);
  }
  destroy() {
    this.destroyInfo();
  }
}
function dw(n, e) {
  return (t) => new uw(t, n, e);
}
function pw(n, e) {
  let t = n.getBoundingClientRect(), i = e.getBoundingClientRect(), s = t.height / n.offsetHeight;
  i.top < t.top ? n.scrollTop -= (t.top - i.top) / s : i.bottom > t.bottom && (n.scrollTop += (i.bottom - t.bottom) / s);
}
function Bf(n) {
  return (n.boost || 0) * 100 + (n.apply ? 10 : 0) + (n.info ? 5 : 0) + (n.type ? 1 : 0);
}
function mw(n, e) {
  let t = [], i = null, s = (h) => {
    t.push(h);
    let { section: c } = h.completion;
    if (c) {
      i || (i = []);
      let f = typeof c == "string" ? c : c.name;
      i.some((u) => u.name == f) || i.push(typeof c == "string" ? { name: f } : c);
    }
  }, r = e.facet(Te);
  for (let h of n)
    if (h.hasResult()) {
      let c = h.result.getMatch;
      if (h.result.filter === !1)
        for (let f of h.result.options)
          s(new Lf(f, h.source, c ? c(f) : [], 1e9 - t.length));
      else {
        let f = e.sliceDoc(h.from, h.to), u, d = r.filterStrict ? new hw(f) : new aw(f);
        for (let p of h.result.options)
          if (u = d.match(p.label)) {
            let m = p.displayLabel ? c ? c(p, u.matched) : [] : u.matched;
            s(new Lf(p, h.source, m, u.score + (p.boost || 0)));
          }
      }
    }
  if (i) {
    let h = /* @__PURE__ */ Object.create(null), c = 0, f = (u, d) => {
      var p, m;
      return ((p = u.rank) !== null && p !== void 0 ? p : 1e9) - ((m = d.rank) !== null && m !== void 0 ? m : 1e9) || (u.name < d.name ? -1 : 1);
    };
    for (let u of i.sort(f))
      c -= 1e5, h[u.name] = c;
    for (let u of t) {
      let { section: d } = u.completion;
      d && (u.score += h[typeof d == "string" ? d : d.name]);
    }
  }
  let o = [], l = null, a = r.compareCompletions;
  for (let h of t.sort((c, f) => f.score - c.score || a(c.completion, f.completion))) {
    let c = h.completion;
    !l || l.label != c.label || l.detail != c.detail || l.type != null && c.type != null && l.type != c.type || l.apply != c.apply || l.boost != c.boost ? o.push(h) : Bf(h.completion) > Bf(l) && (o[o.length - 1] = h), l = h.completion;
  }
  return o;
}
class An {
  constructor(e, t, i, s, r, o) {
    this.options = e, this.attrs = t, this.tooltip = i, this.timestamp = s, this.selected = r, this.disabled = o;
  }
  setSelected(e, t) {
    return e == this.selected || e >= this.options.length ? this : new An(this.options, Nf(t, e), this.tooltip, this.timestamp, e, this.disabled);
  }
  static build(e, t, i, s, r, o) {
    if (s && !o && e.some((h) => h.isPending))
      return s.setDisabled();
    let l = mw(e, t);
    if (!l.length)
      return s && e.some((h) => h.isPending) ? s.setDisabled() : null;
    let a = t.facet(Te).selectOnOpen ? 0 : -1;
    if (s && s.selected != a && s.selected != -1) {
      let h = s.options[s.selected].completion;
      for (let c = 0; c < l.length; c++)
        if (l[c].completion == h) {
          a = c;
          break;
        }
    }
    return new An(l, Nf(i, a), {
      pos: e.reduce((h, c) => c.hasResult() ? Math.min(h, c.from) : h, 1e8),
      create: ww,
      above: r.aboveCursor
    }, s ? s.timestamp : Date.now(), a, !1);
  }
  map(e) {
    return new An(this.options, this.attrs, Object.assign(Object.assign({}, this.tooltip), { pos: e.mapPos(this.tooltip.pos) }), this.timestamp, this.selected, this.disabled);
  }
  setDisabled() {
    return new An(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, !0);
  }
}
class Co {
  constructor(e, t, i) {
    this.active = e, this.id = t, this.open = i;
  }
  static start() {
    return new Co(vw, "cm-ac-" + Math.floor(Math.random() * 2e6).toString(36), null);
  }
  update(e) {
    let { state: t } = e, i = t.facet(Te), r = (i.override || t.languageDataAt("autocomplete", hn(t)).map(lw)).map((a) => (this.active.find((c) => c.source == a) || new Dt(
      a,
      this.active.some(
        (c) => c.state != 0
        /* State.Inactive */
      ) ? 1 : 0
      /* State.Inactive */
    )).update(e, i));
    r.length == this.active.length && r.every((a, h) => a == this.active[h]) && (r = this.active);
    let o = this.open, l = e.effects.some((a) => a.is(gh));
    o && e.docChanged && (o = o.map(e.changes)), e.selection || r.some((a) => a.hasResult() && e.changes.touchesRange(a.from, a.to)) || !gw(r, this.active) || l ? o = An.build(r, t, this.id, o, i, l) : o && o.disabled && !r.some((a) => a.isPending) && (o = null), !o && r.every((a) => !a.isPending) && r.some((a) => a.hasResult()) && (r = r.map((a) => a.hasResult() ? new Dt(
      a.source,
      0
      /* State.Inactive */
    ) : a));
    for (let a of e.effects)
      a.is(dm) && (o = o && o.setSelected(a.value, this.id));
    return r == this.active && o == this.open ? this : new Co(r, this.id, o);
  }
  get tooltip() {
    return this.open ? this.open.tooltip : null;
  }
  get attrs() {
    return this.open ? this.open.attrs : this.active.length ? yw : bw;
  }
}
function gw(n, e) {
  if (n == e)
    return !0;
  for (let t = 0, i = 0; ; ) {
    for (; t < n.length && !n[t].hasResult(); )
      t++;
    for (; i < e.length && !e[i].hasResult(); )
      i++;
    let s = t == n.length, r = i == e.length;
    if (s || r)
      return s == r;
    if (n[t++].result != e[i++].result)
      return !1;
  }
}
const yw = {
  "aria-autocomplete": "list"
}, bw = {};
function Nf(n, e) {
  let t = {
    "aria-autocomplete": "list",
    "aria-haspopup": "listbox",
    "aria-controls": n
  };
  return e > -1 && (t["aria-activedescendant"] = n + "-" + e), t;
}
const vw = [];
function um(n, e) {
  if (n.isUserEvent("input.complete")) {
    let i = n.annotation(fm);
    if (i && e.activateOnCompletion(i))
      return 12;
  }
  let t = n.isUserEvent("input.type");
  return t && e.activateOnTyping ? 5 : t ? 1 : n.isUserEvent("delete.backward") ? 2 : n.selection ? 8 : n.docChanged ? 16 : 0;
}
class Dt {
  constructor(e, t, i = !1) {
    this.source = e, this.state = t, this.explicit = i;
  }
  hasResult() {
    return !1;
  }
  get isPending() {
    return this.state == 1;
  }
  update(e, t) {
    let i = um(e, t), s = this;
    (i & 8 || i & 16 && this.touches(e)) && (s = new Dt(
      s.source,
      0
      /* State.Inactive */
    )), i & 4 && s.state == 0 && (s = new Dt(
      this.source,
      1
      /* State.Pending */
    )), s = s.updateFor(e, i);
    for (let r of e.effects)
      if (r.is(ko))
        s = new Dt(s.source, 1, r.value);
      else if (r.is(Bs))
        s = new Dt(
          s.source,
          0
          /* State.Inactive */
        );
      else if (r.is(gh))
        for (let o of r.value)
          o.source == s.source && (s = o);
    return s;
  }
  updateFor(e, t) {
    return this.map(e.changes);
  }
  map(e) {
    return this;
  }
  touches(e) {
    return e.changes.touchesRange(hn(e.state));
  }
}
class _n extends Dt {
  constructor(e, t, i, s, r, o) {
    super(e, 3, t), this.limit = i, this.result = s, this.from = r, this.to = o;
  }
  hasResult() {
    return !0;
  }
  updateFor(e, t) {
    var i;
    if (!(t & 3))
      return this.map(e.changes);
    let s = this.result;
    s.map && !e.changes.empty && (s = s.map(s, e.changes));
    let r = e.changes.mapPos(this.from), o = e.changes.mapPos(this.to, 1), l = hn(e.state);
    if (l > o || !s || t & 2 && (hn(e.startState) == this.from || l < this.limit))
      return new Dt(
        this.source,
        t & 4 ? 1 : 0
        /* State.Inactive */
      );
    let a = e.changes.mapPos(this.limit);
    return xw(s.validFor, e.state, r, o) ? new _n(this.source, this.explicit, a, s, r, o) : s.update && (s = s.update(s, r, o, new hm(e.state, l, !1))) ? new _n(this.source, this.explicit, a, s, s.from, (i = s.to) !== null && i !== void 0 ? i : hn(e.state)) : new Dt(this.source, 1, this.explicit);
  }
  map(e) {
    return e.empty ? this : (this.result.map ? this.result.map(this.result, e) : this.result) ? new _n(this.source, this.explicit, e.mapPos(this.limit), this.result, e.mapPos(this.from), e.mapPos(this.to, 1)) : new Dt(
      this.source,
      0
      /* State.Inactive */
    );
  }
  touches(e) {
    return e.changes.touchesRange(this.from, this.to);
  }
}
function xw(n, e, t, i) {
  if (!n)
    return !1;
  let s = e.sliceDoc(t, i);
  return typeof n == "function" ? n(s, t, i, e) : cm(n, !0).test(s);
}
const gh = /* @__PURE__ */ z.define({
  map(n, e) {
    return n.map((t) => t.map(e));
  }
}), dm = /* @__PURE__ */ z.define(), at = /* @__PURE__ */ Ne.define({
  create() {
    return Co.start();
  },
  update(n, e) {
    return n.update(e);
  },
  provide: (n) => [
    ih.from(n, (e) => e.tooltip),
    _.contentAttributes.from(n, (e) => e.attrs)
  ]
});
function yh(n, e) {
  const t = e.completion.apply || e.completion.label;
  let i = n.state.field(at).active.find((s) => s.source == e.source);
  return i instanceof _n ? (typeof t == "string" ? n.dispatch(Object.assign(Object.assign({}, ow(n.state, t, i.from, i.to)), { annotations: fm.of(e.completion) })) : t(n, e.completion, i.from, i.to), !0) : !1;
}
const ww = /* @__PURE__ */ dw(at, yh);
function Or(n, e = "option") {
  return (t) => {
    let i = t.state.field(at, !1);
    if (!i || !i.open || i.open.disabled || Date.now() - i.open.timestamp < t.state.facet(Te).interactionDelay)
      return !1;
    let s = 1, r;
    e == "page" && (r = ip(t, i.open.tooltip)) && (s = Math.max(2, Math.floor(r.dom.offsetHeight / r.dom.querySelector("li").offsetHeight) - 1));
    let { length: o } = i.open.options, l = i.open.selected > -1 ? i.open.selected + s * (n ? 1 : -1) : n ? 0 : o - 1;
    return l < 0 ? l = e == "page" ? 0 : o - 1 : l >= o && (l = e == "page" ? o - 1 : 0), t.dispatch({ effects: dm.of(l) }), !0;
  };
}
const Sw = (n) => {
  let e = n.state.field(at, !1);
  return n.state.readOnly || !e || !e.open || e.open.selected < 0 || e.open.disabled || Date.now() - e.open.timestamp < n.state.facet(Te).interactionDelay ? !1 : yh(n, e.open.options[e.open.selected]);
}, Ff = (n) => n.state.field(at, !1) ? (n.dispatch({ effects: ko.of(!0) }), !0) : !1, kw = (n) => {
  let e = n.state.field(at, !1);
  return !e || !e.active.some(
    (t) => t.state != 0
    /* State.Inactive */
  ) ? !1 : (n.dispatch({ effects: Bs.of(null) }), !0);
};
class Cw {
  constructor(e, t) {
    this.active = e, this.context = t, this.time = Date.now(), this.updates = [], this.done = void 0;
  }
}
const Aw = 50, Mw = 1e3, Tw = /* @__PURE__ */ Se.fromClass(class {
  constructor(n) {
    this.view = n, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.pendingStart = !1, this.composing = 0;
    for (let e of n.state.field(at).active)
      e.isPending && this.startQuery(e);
  }
  update(n) {
    let e = n.state.field(at), t = n.state.facet(Te);
    if (!n.selectionSet && !n.docChanged && n.startState.field(at) == e)
      return;
    let i = n.transactions.some((r) => {
      let o = um(r, t);
      return o & 8 || (r.selection || r.docChanged) && !(o & 3);
    });
    for (let r = 0; r < this.running.length; r++) {
      let o = this.running[r];
      if (i || o.context.abortOnDocChange && n.docChanged || o.updates.length + n.transactions.length > Aw && Date.now() - o.time > Mw) {
        for (let l of o.context.abortListeners)
          try {
            l();
          } catch (a) {
            ht(this.view.state, a);
          }
        o.context.abortListeners = null, this.running.splice(r--, 1);
      } else
        o.updates.push(...n.transactions);
    }
    this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), n.transactions.some((r) => r.effects.some((o) => o.is(ko))) && (this.pendingStart = !0);
    let s = this.pendingStart ? 50 : t.activateOnTypingDelay;
    if (this.debounceUpdate = e.active.some((r) => r.isPending && !this.running.some((o) => o.active.source == r.source)) ? setTimeout(() => this.startUpdate(), s) : -1, this.composing != 0)
      for (let r of n.transactions)
        r.isUserEvent("input.type") ? this.composing = 2 : this.composing == 2 && r.selection && (this.composing = 3);
  }
  startUpdate() {
    this.debounceUpdate = -1, this.pendingStart = !1;
    let { state: n } = this.view, e = n.field(at);
    for (let t of e.active)
      t.isPending && !this.running.some((i) => i.active.source == t.source) && this.startQuery(t);
    this.running.length && e.open && e.open.disabled && (this.debounceAccept = setTimeout(() => this.accept(), this.view.state.facet(Te).updateSyncTime));
  }
  startQuery(n) {
    let { state: e } = this.view, t = hn(e), i = new hm(e, t, n.explicit, this.view), s = new Cw(n, i);
    this.running.push(s), Promise.resolve(n.source(i)).then((r) => {
      s.context.aborted || (s.done = r || null, this.scheduleAccept());
    }, (r) => {
      this.view.dispatch({ effects: Bs.of(null) }), ht(this.view.state, r);
    });
  }
  scheduleAccept() {
    this.running.every((n) => n.done !== void 0) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout(() => this.accept(), this.view.state.facet(Te).updateSyncTime));
  }
  // For each finished query in this.running, try to create a result
  // or, if appropriate, restart the query.
  accept() {
    var n;
    this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
    let e = [], t = this.view.state.facet(Te), i = this.view.state.field(at);
    for (let s = 0; s < this.running.length; s++) {
      let r = this.running[s];
      if (r.done === void 0)
        continue;
      if (this.running.splice(s--, 1), r.done) {
        let l = hn(r.updates.length ? r.updates[0].startState : this.view.state), a = Math.min(l, r.done.from + (r.active.explicit ? 0 : 1)), h = new _n(r.active.source, r.active.explicit, a, r.done, r.done.from, (n = r.done.to) !== null && n !== void 0 ? n : l);
        for (let c of r.updates)
          h = h.update(c, t);
        if (h.hasResult()) {
          e.push(h);
          continue;
        }
      }
      let o = i.active.find((l) => l.source == r.active.source);
      if (o && o.isPending)
        if (r.done == null) {
          let l = new Dt(
            r.active.source,
            0
            /* State.Inactive */
          );
          for (let a of r.updates)
            l = l.update(a, t);
          l.isPending || e.push(l);
        } else
          this.startQuery(o);
    }
    (e.length || i.open && i.open.disabled) && this.view.dispatch({ effects: gh.of(e) });
  }
}, {
  eventHandlers: {
    blur(n) {
      let e = this.view.state.field(at, !1);
      if (e && e.tooltip && this.view.state.facet(Te).closeOnBlur) {
        let t = e.open && ip(this.view, e.open.tooltip);
        (!t || !t.dom.contains(n.relatedTarget)) && setTimeout(() => this.view.dispatch({ effects: Bs.of(null) }), 10);
      }
    },
    compositionstart() {
      this.composing = 1;
    },
    compositionend() {
      this.composing == 3 && setTimeout(() => this.view.dispatch({ effects: ko.of(!1) }), 20), this.composing = 0;
    }
  }
}), Ew = typeof navigator == "object" && /* @__PURE__ */ /Win/.test(navigator.platform), Dw = /* @__PURE__ */ gn.highest(/* @__PURE__ */ _.domEventHandlers({
  keydown(n, e) {
    let t = e.state.field(at, !1);
    if (!t || !t.open || t.open.disabled || t.open.selected < 0 || n.key.length > 1 || n.ctrlKey && !(Ew && n.altKey) || n.metaKey)
      return !1;
    let i = t.open.options[t.open.selected], s = t.active.find((o) => o.source == i.source), r = i.completion.commitCharacters || s.result.commitCharacters;
    return r && r.indexOf(n.key) > -1 && yh(e, i), !1;
  }
})), Ow = /* @__PURE__ */ _.baseTheme({
  ".cm-tooltip.cm-tooltip-autocomplete": {
    "& > ul": {
      fontFamily: "monospace",
      whiteSpace: "nowrap",
      overflow: "hidden auto",
      maxWidth_fallback: "700px",
      maxWidth: "min(700px, 95vw)",
      minWidth: "250px",
      maxHeight: "10em",
      height: "100%",
      listStyle: "none",
      margin: 0,
      padding: 0,
      "& > li, & > completion-section": {
        padding: "1px 3px",
        lineHeight: 1.2
      },
      "& > li": {
        overflowX: "hidden",
        textOverflow: "ellipsis",
        cursor: "pointer"
      },
      "& > completion-section": {
        display: "list-item",
        borderBottom: "1px solid silver",
        paddingLeft: "0.5em",
        opacity: 0.7
      }
    }
  },
  "&light .cm-tooltip-autocomplete ul li[aria-selected]": {
    background: "#17c",
    color: "white"
  },
  "&light .cm-tooltip-autocomplete-disabled ul li[aria-selected]": {
    background: "#777"
  },
  "&dark .cm-tooltip-autocomplete ul li[aria-selected]": {
    background: "#347",
    color: "white"
  },
  "&dark .cm-tooltip-autocomplete-disabled ul li[aria-selected]": {
    background: "#444"
  },
  ".cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after": {
    content: '"···"',
    opacity: 0.5,
    display: "block",
    textAlign: "center"
  },
  ".cm-tooltip.cm-completionInfo": {
    position: "absolute",
    padding: "3px 9px",
    width: "max-content",
    maxWidth: "400px",
    boxSizing: "border-box",
    whiteSpace: "pre-line"
  },
  ".cm-completionInfo.cm-completionInfo-left": { right: "100%" },
  ".cm-completionInfo.cm-completionInfo-right": { left: "100%" },
  ".cm-completionInfo.cm-completionInfo-left-narrow": { right: "30px" },
  ".cm-completionInfo.cm-completionInfo-right-narrow": { left: "30px" },
  "&light .cm-snippetField": { backgroundColor: "#00000022" },
  "&dark .cm-snippetField": { backgroundColor: "#ffffff22" },
  ".cm-snippetFieldPosition": {
    verticalAlign: "text-top",
    width: 0,
    height: "1.15em",
    display: "inline-block",
    margin: "0 -0.7px -.7em",
    borderLeft: "1.4px dotted #888"
  },
  ".cm-completionMatchedText": {
    textDecoration: "underline"
  },
  ".cm-completionDetail": {
    marginLeft: "0.5em",
    fontStyle: "italic"
  },
  ".cm-completionIcon": {
    fontSize: "90%",
    width: ".8em",
    display: "inline-block",
    textAlign: "center",
    paddingRight: ".6em",
    opacity: "0.6",
    boxSizing: "content-box"
  },
  ".cm-completionIcon-function, .cm-completionIcon-method": {
    "&:after": { content: "'ƒ'" }
  },
  ".cm-completionIcon-class": {
    "&:after": { content: "'○'" }
  },
  ".cm-completionIcon-interface": {
    "&:after": { content: "'◌'" }
  },
  ".cm-completionIcon-variable": {
    "&:after": { content: "'𝑥'" }
  },
  ".cm-completionIcon-constant": {
    "&:after": { content: "'𝐶'" }
  },
  ".cm-completionIcon-type": {
    "&:after": { content: "'𝑡'" }
  },
  ".cm-completionIcon-enum": {
    "&:after": { content: "'∪'" }
  },
  ".cm-completionIcon-property": {
    "&:after": { content: "'□'" }
  },
  ".cm-completionIcon-keyword": {
    "&:after": { content: "'🔑︎'" }
    // Disable emoji rendering
  },
  ".cm-completionIcon-namespace": {
    "&:after": { content: "'▢'" }
  },
  ".cm-completionIcon-text": {
    "&:after": { content: "'abc'", fontSize: "50%", verticalAlign: "middle" }
  }
}), Ns = {
  brackets: ["(", "[", "{", "'", '"'],
  before: ")]}:;>",
  stringPrefixes: []
}, on = /* @__PURE__ */ z.define({
  map(n, e) {
    let t = e.mapPos(n, -1, Xe.TrackAfter);
    return t ?? void 0;
  }
}), bh = /* @__PURE__ */ new class extends cn {
}();
bh.startSide = 1;
bh.endSide = -1;
const pm = /* @__PURE__ */ Ne.define({
  create() {
    return Y.empty;
  },
  update(n, e) {
    if (n = n.map(e.changes), e.selection) {
      let t = e.state.doc.lineAt(e.selection.main.head);
      n = n.update({ filter: (i) => i >= t.from && i <= t.to });
    }
    for (let t of e.effects)
      t.is(on) && (n = n.update({ add: [bh.range(t.value, t.value + 1)] }));
    return n;
  }
});
function _w() {
  return [Lw, pm];
}
const Ol = "()[]{}<>«»»«［］｛｝";
function mm(n) {
  for (let e = 0; e < Ol.length; e += 2)
    if (Ol.charCodeAt(e) == n)
      return Ol.charAt(e + 1);
  return Wa(n < 128 ? n : n + 1);
}
function gm(n, e) {
  return n.languageDataAt("closeBrackets", e)[0] || Ns;
}
const Rw = typeof navigator == "object" && /* @__PURE__ */ /Android\b/.test(navigator.userAgent), Lw = /* @__PURE__ */ _.inputHandler.of((n, e, t, i) => {
  if ((Rw ? n.composing : n.compositionStarted) || n.state.readOnly)
    return !1;
  let s = n.state.selection.main;
  if (i.length > 2 || i.length == 2 && Yt(ot(i, 0)) == 1 || e != s.from || t != s.to)
    return !1;
  let r = Bw(n.state, i);
  return r ? (n.dispatch(r), !0) : !1;
}), Pw = ({ state: n, dispatch: e }) => {
  if (n.readOnly)
    return !1;
  let i = gm(n, n.selection.main.head).brackets || Ns.brackets, s = null, r = n.changeByRange((o) => {
    if (o.empty) {
      let l = Nw(n.doc, o.head);
      for (let a of i)
        if (a == l && jo(n.doc, o.head) == mm(ot(a, 0)))
          return {
            changes: { from: o.head - a.length, to: o.head + a.length },
            range: S.cursor(o.head - a.length)
          };
    }
    return { range: s = o };
  });
  return s || e(n.update(r, { scrollIntoView: !0, userEvent: "delete.backward" })), !s;
}, Iw = [
  { key: "Backspace", run: Pw }
];
function Bw(n, e) {
  let t = gm(n, n.selection.main.head), i = t.brackets || Ns.brackets;
  for (let s of i) {
    let r = mm(ot(s, 0));
    if (e == s)
      return r == s ? Ww(n, s, i.indexOf(s + s + s) > -1, t) : Fw(n, s, r, t.before || Ns.before);
    if (e == r && ym(n, n.selection.main.from))
      return Hw(n, s, r);
  }
  return null;
}
function ym(n, e) {
  let t = !1;
  return n.field(pm).between(0, n.doc.length, (i) => {
    i == e && (t = !0);
  }), t;
}
function jo(n, e) {
  let t = n.sliceString(e, e + 2);
  return t.slice(0, Yt(ot(t, 0)));
}
function Nw(n, e) {
  let t = n.sliceString(e - 2, e);
  return Yt(ot(t, 0)) == t.length ? t : t.slice(1);
}
function Fw(n, e, t, i) {
  let s = null, r = n.changeByRange((o) => {
    if (!o.empty)
      return {
        changes: [{ insert: e, from: o.from }, { insert: t, from: o.to }],
        effects: on.of(o.to + e.length),
        range: S.range(o.anchor + e.length, o.head + e.length)
      };
    let l = jo(n.doc, o.head);
    return !l || /\s/.test(l) || i.indexOf(l) > -1 ? {
      changes: { insert: e + t, from: o.head },
      effects: on.of(o.head + e.length),
      range: S.cursor(o.head + e.length)
    } : { range: s = o };
  });
  return s ? null : n.update(r, {
    scrollIntoView: !0,
    userEvent: "input.type"
  });
}
function Hw(n, e, t) {
  let i = null, s = n.changeByRange((r) => r.empty && jo(n.doc, r.head) == t ? {
    changes: { from: r.head, to: r.head + t.length, insert: t },
    range: S.cursor(r.head + t.length)
  } : i = { range: r });
  return i ? null : n.update(s, {
    scrollIntoView: !0,
    userEvent: "input.type"
  });
}
function Ww(n, e, t, i) {
  let s = i.stringPrefixes || Ns.stringPrefixes, r = null, o = n.changeByRange((l) => {
    if (!l.empty)
      return {
        changes: [{ insert: e, from: l.from }, { insert: e, from: l.to }],
        effects: on.of(l.to + e.length),
        range: S.range(l.anchor + e.length, l.head + e.length)
      };
    let a = l.head, h = jo(n.doc, a), c;
    if (h == e) {
      if (Hf(n, a))
        return {
          changes: { insert: e + e, from: a },
          effects: on.of(a + e.length),
          range: S.cursor(a + e.length)
        };
      if (ym(n, a)) {
        let u = t && n.sliceDoc(a, a + e.length * 3) == e + e + e ? e + e + e : e;
        return {
          changes: { from: a, to: a + u.length, insert: u },
          range: S.cursor(a + u.length)
        };
      }
    } else {
      if (t && n.sliceDoc(a - 2 * e.length, a) == e + e && (c = Wf(n, a - 2 * e.length, s)) > -1 && Hf(n, c))
        return {
          changes: { insert: e + e + e + e, from: a },
          effects: on.of(a + e.length),
          range: S.cursor(a + e.length)
        };
      if (n.charCategorizer(a)(h) != de.Word && Wf(n, a, s) > -1 && !Vw(n, a, e, s))
        return {
          changes: { insert: e + e, from: a },
          effects: on.of(a + e.length),
          range: S.cursor(a + e.length)
        };
    }
    return { range: r = l };
  });
  return r ? null : n.update(o, {
    scrollIntoView: !0,
    userEvent: "input.type"
  });
}
function Hf(n, e) {
  let t = Ue(n).resolveInner(e + 1);
  return t.parent && t.from == e;
}
function Vw(n, e, t, i) {
  let s = Ue(n).resolveInner(e, -1), r = i.reduce((o, l) => Math.max(o, l.length), 0);
  for (let o = 0; o < 5; o++) {
    let l = n.sliceDoc(s.from, Math.min(s.to, s.from + t.length + r)), a = l.indexOf(t);
    if (!a || a > -1 && i.indexOf(l.slice(0, a)) > -1) {
      let c = s.firstChild;
      for (; c && c.from == s.from && c.to - c.from > t.length + a; ) {
        if (n.sliceDoc(c.to - t.length, c.to) == t)
          return !1;
        c = c.firstChild;
      }
      return !0;
    }
    let h = s.to == e && s.parent;
    if (!h)
      break;
    s = h;
  }
  return !1;
}
function Wf(n, e, t) {
  let i = n.charCategorizer(e);
  if (i(n.sliceDoc(e - 1, e)) != de.Word)
    return e;
  for (let s of t) {
    let r = e - s.length;
    if (n.sliceDoc(r, e) == s && i(n.sliceDoc(r - 1, r)) != de.Word)
      return r;
  }
  return -1;
}
function zw(n = {}) {
  return [
    Dw,
    at,
    Te.of(n),
    Tw,
    $w,
    Ow
  ];
}
const bm = [
  { key: "Ctrl-Space", run: Ff },
  { mac: "Alt-`", run: Ff },
  { key: "Escape", run: kw },
  { key: "ArrowDown", run: /* @__PURE__ */ Or(!0) },
  { key: "ArrowUp", run: /* @__PURE__ */ Or(!1) },
  { key: "PageDown", run: /* @__PURE__ */ Or(!0, "page") },
  { key: "PageUp", run: /* @__PURE__ */ Or(!1, "page") },
  { key: "Enter", run: Sw }
], $w = /* @__PURE__ */ gn.highest(/* @__PURE__ */ eh.computeN([Te], (n) => n.facet(Te).defaultKeymap ? [bm] : []));
class Vf {
  constructor(e, t, i) {
    this.from = e, this.to = t, this.diagnostic = i;
  }
}
class nn {
  constructor(e, t, i) {
    this.diagnostics = e, this.panel = t, this.selected = i;
  }
  static init(e, t, i) {
    let s = i.facet(Fs).markerFilter;
    s && (e = s(e, i));
    let r = e.slice().sort((c, f) => c.from - f.from || c.to - f.to), o = new bi(), l = [], a = 0;
    for (let c = 0; ; ) {
      let f = c == r.length ? null : r[c];
      if (!f && !l.length)
        break;
      let u, d;
      for (l.length ? (u = a, d = l.reduce((m, g) => Math.min(m, g.to), f && f.from > u ? f.from : 1e8)) : (u = f.from, d = f.to, l.push(f), c++); c < r.length; ) {
        let m = r[c];
        if (m.from == u && (m.to > m.from || m.to == u))
          l.push(m), c++, d = Math.min(m.to, d);
        else {
          d = Math.min(m.from, d);
          break;
        }
      }
      let p = iS(l);
      if (l.some((m) => m.from == m.to || m.from == m.to - 1 && i.doc.lineAt(m.from).to == m.from))
        o.add(u, u, F.widget({
          widget: new Qw(p),
          diagnostics: l.slice()
        }));
      else {
        let m = l.reduce((g, b) => b.markClass ? g + " " + b.markClass : g, "");
        o.add(u, d, F.mark({
          class: "cm-lintRange cm-lintRange-" + p + m,
          diagnostics: l.slice(),
          inclusiveEnd: l.some((g) => g.to > d)
        }));
      }
      a = d;
      for (let m = 0; m < l.length; m++)
        l[m].to <= a && l.splice(m--, 1);
    }
    let h = o.finish();
    return new nn(h, t, Fn(h));
  }
}
function Fn(n, e = null, t = 0) {
  let i = null;
  return n.between(t, 1e9, (s, r, { spec: o }) => {
    if (!(e && o.diagnostics.indexOf(e) < 0))
      if (!i)
        i = new Vf(s, r, e || o.diagnostics[0]);
      else {
        if (o.diagnostics.indexOf(i.diagnostic) < 0)
          return !1;
        i = new Vf(i.from, r, i.diagnostic);
      }
  }), i;
}
function Uw(n, e) {
  let t = e.pos, i = e.end || t, s = n.state.facet(Fs).hideOn(n, t, i);
  if (s != null)
    return s;
  let r = n.startState.doc.lineAt(e.pos);
  return !!(n.effects.some((o) => o.is(vm)) || n.changes.touchesRange(r.from, Math.max(r.to, i)));
}
function qw(n, e) {
  return n.field(vt, !1) ? e : e.concat(z.appendConfig.of(nS));
}
const vm = /* @__PURE__ */ z.define(), vh = /* @__PURE__ */ z.define(), xm = /* @__PURE__ */ z.define(), vt = /* @__PURE__ */ Ne.define({
  create() {
    return new nn(F.none, null, null);
  },
  update(n, e) {
    if (e.docChanged && n.diagnostics.size) {
      let t = n.diagnostics.map(e.changes), i = null, s = n.panel;
      if (n.selected) {
        let r = e.changes.mapPos(n.selected.from, 1);
        i = Fn(t, n.selected.diagnostic, r) || Fn(t, null, r);
      }
      !t.size && s && e.state.facet(Fs).autoPanel && (s = null), n = new nn(t, s, i);
    }
    for (let t of e.effects)
      if (t.is(vm)) {
        let i = e.state.facet(Fs).autoPanel ? t.value.length ? Hs.open : null : n.panel;
        n = nn.init(t.value, i, e.state);
      } else t.is(vh) ? n = new nn(n.diagnostics, t.value ? Hs.open : null, n.selected) : t.is(xm) && (n = new nn(n.diagnostics, n.panel, t.value));
    return n;
  },
  provide: (n) => [
    Rs.from(n, (e) => e.panel),
    _.decorations.from(n, (e) => e.diagnostics)
  ]
}), jw = /* @__PURE__ */ F.mark({ class: "cm-lintRange cm-lintRange-active" });
function Kw(n, e, t) {
  let { diagnostics: i } = n.state.field(vt), s, r = -1, o = -1;
  i.between(e - (t < 0 ? 1 : 0), e + (t > 0 ? 1 : 0), (a, h, { spec: c }) => {
    if (e >= a && e <= h && (a == h || (e > a || t > 0) && (e < h || t < 0)))
      return s = c.diagnostics, r = a, o = h, !1;
  });
  let l = n.state.facet(Fs).tooltipFilter;
  return s && l && (s = l(s, n.state)), s ? {
    pos: r,
    end: o,
    above: n.state.doc.lineAt(r).to < o,
    create() {
      return { dom: Gw(n, s) };
    }
  } : null;
}
function Gw(n, e) {
  return oe("ul", { class: "cm-tooltip-lint" }, e.map((t) => Sm(n, t, !1)));
}
const Yw = (n) => {
  let e = n.state.field(vt, !1);
  (!e || !e.panel) && n.dispatch({ effects: qw(n.state, [vh.of(!0)]) });
  let t = _s(n, Hs.open);
  return t && t.dom.querySelector(".cm-panel-lint ul").focus(), !0;
}, zf = (n) => {
  let e = n.state.field(vt, !1);
  return !e || !e.panel ? !1 : (n.dispatch({ effects: vh.of(!1) }), !0);
}, Xw = (n) => {
  let e = n.state.field(vt, !1);
  if (!e)
    return !1;
  let t = n.state.selection.main, i = e.diagnostics.iter(t.to + 1);
  return !i.value && (i = e.diagnostics.iter(0), !i.value || i.from == t.from && i.to == t.to) ? !1 : (n.dispatch({ selection: { anchor: i.from, head: i.to }, scrollIntoView: !0 }), !0);
}, Jw = [
  { key: "Mod-Shift-m", run: Yw, preventDefault: !0 },
  { key: "F8", run: Xw }
], Fs = /* @__PURE__ */ R.define({
  combine(n) {
    return Object.assign({ sources: n.map((e) => e.source).filter((e) => e != null) }, ri(n.map((e) => e.config), {
      delay: 750,
      markerFilter: null,
      tooltipFilter: null,
      needsRefresh: null,
      hideOn: () => null
    }, {
      needsRefresh: (e, t) => e ? t ? (i) => e(i) || t(i) : e : t
    }));
  }
});
function wm(n) {
  let e = [];
  if (n)
    e: for (let { name: t } of n) {
      for (let i = 0; i < t.length; i++) {
        let s = t[i];
        if (/[a-zA-Z]/.test(s) && !e.some((r) => r.toLowerCase() == s.toLowerCase())) {
          e.push(s);
          continue e;
        }
      }
      e.push("");
    }
  return e;
}
function Sm(n, e, t) {
  var i;
  let s = t ? wm(e.actions) : [];
  return oe("li", { class: "cm-diagnostic cm-diagnostic-" + e.severity }, oe("span", { class: "cm-diagnosticText" }, e.renderMessage ? e.renderMessage(n) : e.message), (i = e.actions) === null || i === void 0 ? void 0 : i.map((r, o) => {
    let l = !1, a = (u) => {
      if (u.preventDefault(), l)
        return;
      l = !0;
      let d = Fn(n.state.field(vt).diagnostics, e);
      d && r.apply(n, d.from, d.to);
    }, { name: h } = r, c = s[o] ? h.indexOf(s[o]) : -1, f = c < 0 ? h : [
      h.slice(0, c),
      oe("u", h.slice(c, c + 1)),
      h.slice(c + 1)
    ];
    return oe("button", {
      type: "button",
      class: "cm-diagnosticAction",
      onclick: a,
      onmousedown: a,
      "aria-label": ` Action: ${h}${c < 0 ? "" : ` (access key "${s[o]})"`}.`
    }, f);
  }), e.source && oe("div", { class: "cm-diagnosticSource" }, e.source));
}
class Qw extends ji {
  constructor(e) {
    super(), this.sev = e;
  }
  eq(e) {
    return e.sev == this.sev;
  }
  toDOM() {
    return oe("span", { class: "cm-lintPoint cm-lintPoint-" + this.sev });
  }
}
class $f {
  constructor(e, t) {
    this.diagnostic = t, this.id = "item_" + Math.floor(Math.random() * 4294967295).toString(16), this.dom = Sm(e, t, !0), this.dom.id = this.id, this.dom.setAttribute("role", "option");
  }
}
class Hs {
  constructor(e) {
    this.view = e, this.items = [];
    let t = (s) => {
      if (s.keyCode == 27)
        zf(this.view), this.view.focus();
      else if (s.keyCode == 38 || s.keyCode == 33)
        this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
      else if (s.keyCode == 40 || s.keyCode == 34)
        this.moveSelection((this.selectedIndex + 1) % this.items.length);
      else if (s.keyCode == 36)
        this.moveSelection(0);
      else if (s.keyCode == 35)
        this.moveSelection(this.items.length - 1);
      else if (s.keyCode == 13)
        this.view.focus();
      else if (s.keyCode >= 65 && s.keyCode <= 90 && this.selectedIndex >= 0) {
        let { diagnostic: r } = this.items[this.selectedIndex], o = wm(r.actions);
        for (let l = 0; l < o.length; l++)
          if (o[l].toUpperCase().charCodeAt(0) == s.keyCode) {
            let a = Fn(this.view.state.field(vt).diagnostics, r);
            a && r.actions[l].apply(e, a.from, a.to);
          }
      } else
        return;
      s.preventDefault();
    }, i = (s) => {
      for (let r = 0; r < this.items.length; r++)
        this.items[r].dom.contains(s.target) && this.moveSelection(r);
    };
    this.list = oe("ul", {
      tabIndex: 0,
      role: "listbox",
      "aria-label": this.view.state.phrase("Diagnostics"),
      onkeydown: t,
      onclick: i
    }), this.dom = oe("div", { class: "cm-panel-lint" }, this.list, oe("button", {
      type: "button",
      name: "close",
      "aria-label": this.view.state.phrase("close"),
      onclick: () => zf(this.view)
    }, "×")), this.update();
  }
  get selectedIndex() {
    let e = this.view.state.field(vt).selected;
    if (!e)
      return -1;
    for (let t = 0; t < this.items.length; t++)
      if (this.items[t].diagnostic == e.diagnostic)
        return t;
    return -1;
  }
  update() {
    let { diagnostics: e, selected: t } = this.view.state.field(vt), i = 0, s = !1, r = null, o = /* @__PURE__ */ new Set();
    for (e.between(0, this.view.state.doc.length, (l, a, { spec: h }) => {
      for (let c of h.diagnostics) {
        if (o.has(c))
          continue;
        o.add(c);
        let f = -1, u;
        for (let d = i; d < this.items.length; d++)
          if (this.items[d].diagnostic == c) {
            f = d;
            break;
          }
        f < 0 ? (u = new $f(this.view, c), this.items.splice(i, 0, u), s = !0) : (u = this.items[f], f > i && (this.items.splice(i, f - i), s = !0)), t && u.diagnostic == t.diagnostic ? u.dom.hasAttribute("aria-selected") || (u.dom.setAttribute("aria-selected", "true"), r = u) : u.dom.hasAttribute("aria-selected") && u.dom.removeAttribute("aria-selected"), i++;
      }
    }); i < this.items.length && !(this.items.length == 1 && this.items[0].diagnostic.from < 0); )
      s = !0, this.items.pop();
    this.items.length == 0 && (this.items.push(new $f(this.view, {
      from: -1,
      to: -1,
      severity: "info",
      message: this.view.state.phrase("No diagnostics")
    })), s = !0), r ? (this.list.setAttribute("aria-activedescendant", r.id), this.view.requestMeasure({
      key: this,
      read: () => ({ sel: r.dom.getBoundingClientRect(), panel: this.list.getBoundingClientRect() }),
      write: ({ sel: l, panel: a }) => {
        let h = a.height / this.list.offsetHeight;
        l.top < a.top ? this.list.scrollTop -= (a.top - l.top) / h : l.bottom > a.bottom && (this.list.scrollTop += (l.bottom - a.bottom) / h);
      }
    })) : this.selectedIndex < 0 && this.list.removeAttribute("aria-activedescendant"), s && this.sync();
  }
  sync() {
    let e = this.list.firstChild;
    function t() {
      let i = e;
      e = i.nextSibling, i.remove();
    }
    for (let i of this.items)
      if (i.dom.parentNode == this.list) {
        for (; e != i.dom; )
          t();
        e = i.dom.nextSibling;
      } else
        this.list.insertBefore(i.dom, e);
    for (; e; )
      t();
  }
  moveSelection(e) {
    if (this.selectedIndex < 0)
      return;
    let t = this.view.state.field(vt), i = Fn(t.diagnostics, this.items[e].diagnostic);
    i && this.view.dispatch({
      selection: { anchor: i.from, head: i.to },
      scrollIntoView: !0,
      effects: xm.of(i)
    });
  }
  static open(e) {
    return new Hs(e);
  }
}
function Zw(n, e = 'viewBox="0 0 40 40"') {
  return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${e}>${encodeURIComponent(n)}</svg>')`;
}
function _r(n) {
  return Zw(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${n}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"');
}
const eS = /* @__PURE__ */ _.baseTheme({
  ".cm-diagnostic": {
    padding: "3px 6px 3px 8px",
    marginLeft: "-1px",
    display: "block",
    whiteSpace: "pre-wrap"
  },
  ".cm-diagnostic-error": { borderLeft: "5px solid #d11" },
  ".cm-diagnostic-warning": { borderLeft: "5px solid orange" },
  ".cm-diagnostic-info": { borderLeft: "5px solid #999" },
  ".cm-diagnostic-hint": { borderLeft: "5px solid #66d" },
  ".cm-diagnosticAction": {
    font: "inherit",
    border: "none",
    padding: "2px 4px",
    backgroundColor: "#444",
    color: "white",
    borderRadius: "3px",
    marginLeft: "8px",
    cursor: "pointer"
  },
  ".cm-diagnosticSource": {
    fontSize: "70%",
    opacity: 0.7
  },
  ".cm-lintRange": {
    backgroundPosition: "left bottom",
    backgroundRepeat: "repeat-x",
    paddingBottom: "0.7px"
  },
  ".cm-lintRange-error": { backgroundImage: /* @__PURE__ */ _r("#d11") },
  ".cm-lintRange-warning": { backgroundImage: /* @__PURE__ */ _r("orange") },
  ".cm-lintRange-info": { backgroundImage: /* @__PURE__ */ _r("#999") },
  ".cm-lintRange-hint": { backgroundImage: /* @__PURE__ */ _r("#66d") },
  ".cm-lintRange-active": { backgroundColor: "#ffdd9980" },
  ".cm-tooltip-lint": {
    padding: 0,
    margin: 0
  },
  ".cm-lintPoint": {
    position: "relative",
    "&:after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: "-2px",
      borderLeft: "3px solid transparent",
      borderRight: "3px solid transparent",
      borderBottom: "4px solid #d11"
    }
  },
  ".cm-lintPoint-warning": {
    "&:after": { borderBottomColor: "orange" }
  },
  ".cm-lintPoint-info": {
    "&:after": { borderBottomColor: "#999" }
  },
  ".cm-lintPoint-hint": {
    "&:after": { borderBottomColor: "#66d" }
  },
  ".cm-panel.cm-panel-lint": {
    position: "relative",
    "& ul": {
      maxHeight: "100px",
      overflowY: "auto",
      "& [aria-selected]": {
        backgroundColor: "#ddd",
        "& u": { textDecoration: "underline" }
      },
      "&:focus [aria-selected]": {
        background_fallback: "#bdf",
        backgroundColor: "Highlight",
        color_fallback: "white",
        color: "HighlightText"
      },
      "& u": { textDecoration: "none" },
      padding: 0,
      margin: 0
    },
    "& [name=close]": {
      position: "absolute",
      top: "0",
      right: "2px",
      background: "inherit",
      border: "none",
      font: "inherit",
      padding: 0,
      margin: 0
    }
  }
});
function tS(n) {
  return n == "error" ? 4 : n == "warning" ? 3 : n == "info" ? 2 : 1;
}
function iS(n) {
  let e = "hint", t = 1;
  for (let i of n) {
    let s = tS(i.severity);
    s > t && (t = s, e = i.severity);
  }
  return e;
}
const nS = [
  vt,
  /* @__PURE__ */ _.decorations.compute([vt], (n) => {
    let { selected: e, panel: t } = n.field(vt);
    return !e || !t || e.from == e.to ? F.none : F.set([
      jw.range(e.from, e.to)
    ]);
  }),
  /* @__PURE__ */ Kb(Kw, { hideOn: Uw }),
  eS
], sS = [
  sv(),
  lv(),
  Cb(),
  T1(),
  Zv(),
  db(),
  bb(),
  J.allowMultipleSelections.of(!0),
  Hv(),
  t1(s1, { fallback: !0 }),
  f1(),
  _w(),
  zw(),
  Bb(),
  Hb(),
  Ob(),
  Ix(),
  eh.of([
    ...Iw,
    ...Dx,
    ...ew,
    ...B1,
    ...Yv,
    ...bm,
    ...Jw
  ])
], rS = (n) => n;
function Uf(n, { delay: e = 0, duration: t = 400, easing: i = rS } = {}) {
  const s = +getComputedStyle(n).opacity;
  return {
    delay: e,
    duration: t,
    easing: i,
    css: (r) => `opacity: ${r * s}`
  };
}
function oS(n, e) {
  $(e, "");
}
async function lS(n, e, t) {
  try {
    await navigator.clipboard.writeText(D(e)), $(t, !0), setTimeout(
      () => {
        $(t, !1);
      },
      3e3
    );
  } catch (i) {
    console.error("Failed to copy:", i);
  }
}
var aS = (n, e) => $(e, !D(e)), hS = (n, e) => $(e, !1), cS = /* @__PURE__ */ si('<input type="radio" name="theme-buttons" class="btn join-item">'), fS = (n, e) => $(e, !1), uS = /* @__PURE__ */ si('<input type="radio" name="theme-buttons" class="btn join-item">'), dS = /* @__PURE__ */ si('<div class="absolute left-0 top-full join join-vertical"><!></div>'), pS = /* @__PURE__ */ si('<div class="flex justify-center items-center"><div class="loading loading-ring loading-xl text-primary"></div></div>'), mS = /* @__PURE__ */ si("<div><div><!></div></div>"), gS = (n, e) => $(e, "logs"), yS = (n, e) => $(e, "wrap"), bS = (n, e, t) => {
  $(e, "raw"), $(t, !1);
}, vS = /* @__PURE__ */ si('<div class="text-red-500 self-center p-2"> </div>'), xS = /* @__PURE__ */ si("<button>Publish</button>"), wS = (n, e) => $(e, "desc"), SS = (n, e) => $(e, "note"), kS = (n, e) => $(e, "role"), CS = /* @__PURE__ */ si('<div class="text-sm self-end mr-2">Copied!</div>'), AS = /* @__PURE__ */ si('<div><div class="flex flex-col items-center mt-8 mb-4"><div class="text-xl font-bold mt-16 mb-4">Tools</div> <div role="tablist" class="tabs tabs-border"><a role="tab">Logs</a> <a role="tab">Wrap Chop</a></div></div> <div><div class="my-4"><input type="file" accept=".txt" class="file-input file-input-primary w-full max-w-xs mb-4"></div> <div class="flex mb-2 justify-between"><div role="tablist" class="tabs tabs-border"><a role="tab">Raw</a> <a role="tab">Formatted</a></div> <!> <!></div> <div><div class="text-base"></div></div> <div><!></div></div> <div><fieldset class="fieldset"><div class="flex justify-between"><legend class="fieldset-legend text-base">Original</legend> <button class="btn btn-neutral">Clear</button></div> <textarea class="textarea h-96 w-[475px]"></textarea></fieldset> <div class="self-center"><div class="text-base mb-2 font-bold">Wrap settings</div> <ul class="menu bg-base-200 rounded-box w-56 p-0"><li><a>Description</a></li> <li><a>Note</a></li> <li><a>Role</a></li></ul> <label class="label text-base-content"><input type="checkbox" class="checkbox checkbox-sm"> No return (; format)</label></div> <fieldset class="fieldset"><div class="flex justify-between"><legend class="fieldset-legend text-base">Chopped</legend> <!> <button class="btn btn-neutral">Copy</button></div> <textarea class="textarea h-96 w-[575px]"></textarea></fieldset></div></div>'), MS = /* @__PURE__ */ si('<div class="bg-base-200 text-base-content h-screen"><div class="navbar bg-base-100 text-base-content shadow-sm absolute top-0 z-10"><div class="flex items-center m-2"><button class="w-32 btn btn-light uppercase"> </button> <input type="checkbox" class="theme-controller invisible" checked> <!> <label class="flex cursor-pointer gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"></path></svg> <input type="checkbox" class="toggle"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg></label></div></div> <!> <!></div>');
function TS(n, e) {
  vu(e, !0);
  const t = [], i = [];
  let s = Wg(e, "id", 3, null), r = /* @__PURE__ */ pe(Mt(localStorage.getItem("darkTheme") ?? "dark")), o = /* @__PURE__ */ pe(Mt(localStorage.getItem("lightTheme") ?? "light")), l = /* @__PURE__ */ pe(Mt(JSON.parse(localStorage.getItem("darkMode") ?? "true"))), a = /* @__PURE__ */ pe(!1), h = /* @__PURE__ */ Zm(() => D(l) ? D(r) : D(o));
  const c = [
    "acid",
    "autumn",
    "bumblebee",
    "caramellatte",
    "cmyk",
    "corporate",
    "cupcake",
    "cyberpunk",
    "emerald",
    "fantasy",
    "garden",
    "lemonade",
    "light",
    "lofi",
    "nord",
    "pastel",
    "retro",
    "silk",
    "valentine",
    "winter",
    "wireframe"
  ], f = [
    "abyss",
    "aqua",
    "black",
    "business",
    "coffee",
    "dark",
    "dim",
    "dracula",
    "forest",
    "halloween",
    "luxury",
    "night",
    "sunset",
    "synthwave"
  ];
  let u = /* @__PURE__ */ pe(""), d = "", p = "", m = /* @__PURE__ */ pe(""), g = /* @__PURE__ */ pe(""), b = /* @__PURE__ */ pe(""), v = /* @__PURE__ */ pe("raw"), k = /* @__PURE__ */ pe(Mt(localStorage.getItem("tab") ?? "logs")), w = /* @__PURE__ */ pe(Mt(localStorage.getItem("wrapTab") ?? "desc")), x = /* @__PURE__ */ pe(Mt(JSON.parse(localStorage.getItem("noReturn") ?? "true"))), C = null, A = null, I = /* @__PURE__ */ pe(!0), H = /* @__PURE__ */ pe(!1), U = /* @__PURE__ */ pe(!1);
  Hg(() => {
    if (s())
      ke(s()).then((V) => {
        K(V), $(I, !1);
      });
    else {
      const V = _.updateListener.of((W) => {
        W.docChanged && (p = W.state.doc.toString());
      });
      return A = new _({
        doc: "",
        extensions: [sS, V],
        parent: C
      }), $(I, !1), () => A == null ? void 0 : A.destroy();
    }
  }), Ei(() => {
    localStorage.setItem("darkTheme", D(r));
  }), Ei(() => {
    localStorage.setItem("lightTheme", D(o));
  }), Ei(() => {
    localStorage.setItem("darkMode", D(l));
  }), Ei(() => {
    localStorage.setItem("tab", D(k));
  }), Ei(() => {
    localStorage.setItem("wrapTab", D(w));
  }), Ei(() => {
    localStorage.setItem("noReturn", D(x));
  }), Ei(() => {
    (D(w) === "desc" || D(w) === "note" || D(w) === "role") && $(b, P(D(g)), !0);
  });
  function P(V, W = 79) {
    const _e = V.split(/\s+/);
    let Re = [], he = "";
    for (const ye of _e)
      if ((he + " " + ye).trim().length <= W)
        he += (he ? " " : "") + ye;
      else
        for (he && Re.push(he), he = ye; he.length > W; )
          Re.push(he.slice(0, W)), he = he.slice(W);
    return he && Re.push(he), Re = Re.map((ye) => `${D(w)} + ${ye}`), D(x) ? Re.join(";") : Re.join(`
`);
  }
  function B(V) {
    const W = V.target.files[0], _e = new FileReader();
    _e.onload = () => {
      d = _e.result, ee(d);
    }, _e.readAsText(W);
  }
  function K(V) {
    V = q(V), $(m, V.replace(/^\*\*.*$/gm, '<span class="text-yellow-300 ">$&</span>').replace(/ \(PK\) /g, '<span class="text-yellow-300 font-bold">$&</span>').replace(/ misses|scratches|grazes|hits|injures|wounds|mauls|decimates|devastates|maims|MUTILATES|EVISCERATES|DISMEMBERS|MASSACRES|MANGLES|\*\*\* DEMOLISHES \*\*\*|\*\*\* DEVASATATES \*\*\*|=== OBLITERATES ===|>>> ANNIHILATES <<<|<<< ERADICATES >>>|does UNSPEAKABLE things /g, '<span class="text-yellow-300">$&</span>').replace(/<span class="text-yellow-300">(.*?)<\/span>(?= you\b)/g, '<span class="text-red-500">$1</span>').replace(/has a few <span class="text-yellow-300">scratches<\/span>/g, "has a few scratches").replace(/is covered with bleeding <span class="text-yellow-300">wounds<\/span>/g, "is covered with bleeding wounds").replace(/^.* says '.*$/gm, '<span class="text-amber-300 ">$&</span>').replace(/^.* says to .*$/gm, '<span class="text-amber-300 ">$&</span>').replace(/^You say .*$/gm, '<span class="text-amber-300 ">$&</span>').replace(/^.* tells the group '.*$/gm, '<span class="text-fuchsia-400 ">$&</span>').replace(/^You tell your group '.*$/gm, '<span class="text-fuchsia-400 ">$&</span>').replace(/^.* tells you '.*$/gm, '<span class="text-lime-700 ">$&</span>').replace(/^You tell .*$/gm, '<span class="text-lime-700 ">$&</span>').replace(/^.* yells '.*$/gm, '<span class="text-cyan-400 ">$&</span>').replace(/^You yell '.*$/gm, '<span class="text-yellow-300 ">$&</span>').replace(/^\[(?!.*\d).*?\] .*:.*$/gm, '<span class="text-teal-500 ">$&</span>').replace(/^You sure are BLEEDING!.*$/gm, '<span class="text-yellow-300 ">$&</span>').replace(/^.* is DEAD!!.*$/gm, '<span class="text-yellow-300 font-bold">$&</span>').replace(/^You have been KILLED!!.*$/gm, '<span class="text-yellow-300 font-bold">$&</span>').replace(/^.* (is in perfect health|has a few scratches|has some small but disgusting cuts|is covered with bleeding wounds|is gushing blood|is writhing in agony|is convulsing on the ground)\..*$/gm, '<span class="text-green-400">$&</span>'), !0), D(m) && $(U, !0);
  }
  function q(V) {
    return a0.sanitize(V, { ALLOWED_TAGS: [], ALLOWED_ATTR: [] });
  }
  function ee(V) {
    p = V, A.dispatch({
      changes: {
        from: 0,
        to: A.state.doc.length,
        insert: p
      }
    });
  }
  function ke(V) {
    return fetch(`/load_log.php?id=${encodeURIComponent(V)}`).then((W) => {
      if (!W.ok)
        throw new Error("Network response was not ok");
      return W.json();
    }).then((W) => W.log).catch((W) => {
      throw console.error("Load log failed:", W), W;
    });
  }
  function Ee() {
    if ($(U, !1), p.length > 65535)
      $(U, !1), $(u, "Log too long!"), setTimeout(
        () => {
          $(u, "");
        },
        3e3
      );
    else
      return fetch("/save_log.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ log: p })
      }).then((W) => {
        if (!W.ok) throw new Error("Network response was not ok");
        return W.json();
      }).then((W) => {
        window.location.href = `/index.php?id=${W.id}`;
      }).catch((W) => {
        console.error("Save log failed:", W);
      });
  }
  var Fe = MS(), me = ie(Fe), De = ie(me), X = ie(De);
  X.__click = [aS, a];
  var Oe = ie(X), Q = re(X, 2), dt = re(Q, 2);
  {
    var te = (V) => {
      var W = dS(), _e = ie(W);
      {
        var Re = (ye) => {
          var it = Bh(), li = _h(it);
          Hh(li, 17, () => f, Fh, (Ai, nt) => {
            var be = cS();
            be.__change = [hS, a];
            var je;
            Di(() => {
              zh(be, "aria-label", D(nt)), je !== (je = D(nt)) && (be.value = (be.__value = D(nt)) ?? "");
            }), Kh(
              t,
              [],
              be,
              () => (D(nt), D(r)),
              (pt) => $(r, pt)
            ), Ct(Ai, be);
          }), Ct(ye, it);
        }, he = (ye) => {
          var it = Bh(), li = _h(it);
          Hh(li, 17, () => c, Fh, (Ai, nt) => {
            var be = uS();
            be.__change = [fS, a];
            var je;
            Di(() => {
              zh(be, "aria-label", D(nt)), je !== (je = D(nt)) && (be.value = (be.__value = D(nt)) ?? "");
            }), Kh(
              i,
              [],
              be,
              () => (D(nt), D(o)),
              (pt) => $(o, pt)
            ), Ct(Ai, be);
          }), Ct(ye, it);
        };
        Qi(_e, (ye) => {
          D(l) ? ye(Re) : ye(he, !1);
        });
      }
      Ct(V, W);
    };
    Qi(dt, (V) => {
      D(a) && V(te);
    });
  }
  var wt = re(dt, 2), ki = re(ie(wt), 2), Un = re(me, 2);
  {
    var qn = (V) => {
      var W = pS();
      Ct(V, W);
    };
    Qi(Un, (V) => {
      D(I) && V(qn);
    });
  }
  var Ys = re(Un, 2);
  {
    var Xs = (V) => {
      var W = mS(), _e = ie(W), Re = ie(_e);
      Vh(Re, () => D(m)), Di(() => {
        Ke(W, 1, `mx-auto max-w-screen-xl px-6 pt-20 font-sans ${D(I) ? "hidden" : ""}`), Ke(_e, 1, `pl-4 ${D(l) ? "bg-base-300" : "bg-base-100"} font-mono whitespace-pre`);
      }), Ct(V, W);
    }, Ci = (V) => {
      var W = AS(), _e = ie(W), Re = re(ie(_e), 2), he = ie(Re);
      he.__click = [gS, k];
      var ye = re(he, 2);
      ye.__click = [yS, k];
      var it = re(_e, 2), li = ie(it), Ai = ie(li);
      Ai.__change = B;
      var nt = re(li, 2), be = ie(nt), je = ie(be);
      je.__click = [bS, v, U];
      var pt = re(je, 2);
      pt.__click = () => {
        K(p), $(v, "format");
      };
      var ai = re(be, 2);
      {
        var Js = (xe) => {
          var mt = vS(), Xn = ie(mt);
          Di(() => Nh(Xn, D(u))), qh(3, mt, () => Uf), Ct(xe, mt);
        };
        Qi(ai, (xe) => {
          D(u) && xe(Js);
        });
      }
      var Qs = re(ai, 2);
      {
        var Zs = (xe) => {
          var mt = xS();
          mt.__click = Ee, Di(() => Ke(mt, 1, `btn btn-primary ${D(v) === "format" ? "" : "hidden"}`)), Ct(xe, mt);
        };
        Qi(Qs, (xe) => {
          D(U) && xe(Zs);
        });
      }
      var Gi = re(nt, 2), er = ie(Gi);
      Fg(er, (xe) => C = xe, () => C);
      var Yi = re(Gi, 2), yn = ie(Yi);
      Vh(yn, () => D(m));
      var St = re(it, 2), hi = ie(St), bn = ie(hi), jn = re(ie(bn), 2);
      jn.__click = [oS, g];
      var Ko = re(bn, 2), Xi = re(hi, 2), Ji = re(ie(Xi), 2), tr = ie(Ji), Mi = ie(tr);
      Mi.__click = [wS, w];
      var ir = re(tr, 2), nr = ie(ir);
      nr.__click = [SS, w];
      var ve = re(ir, 2), ci = ie(ve);
      ci.__click = [kS, w];
      var Go = re(Ji, 2), sr = ie(Go), Kn = re(Xi, 2), Gn = ie(Kn), Yn = re(ie(Gn), 2);
      {
        var Yo = (xe) => {
          var mt = CS();
          qh(3, mt, () => Uf), Ct(xe, mt);
        };
        Qi(Yn, (xe) => {
          D(H) && xe(Yo);
        });
      }
      var kt = re(Yn, 2);
      kt.__click = [lS, b, H];
      var Ti = re(Gn, 2);
      Di(() => {
        Ke(W, 1, D(I) ? "hidden" : ""), Ke(he, 1, Zi(D(k) === "logs" ? "tab tab-active text-base-content" : "tab text-base-content")), Ke(ye, 1, Zi(D(k) === "wrap" ? "tab tab-active text-base-content" : "tab text-base-content")), Ke(it, 1, `mx-auto max-w-screen-xl px-6 py-12 font-sans mpy-16 lg:py-0 ${D(k) === "logs" ? "" : "hidden"}`), Ke(je, 1, Zi(D(v) === "raw" ? "tab tab-active text-base-content" : "tab text-base-content")), Ke(pt, 1, Zi(D(v) === "format" ? "tab tab-active text-base-content" : "tab text-base-content")), Ke(Gi, 1, `bg-base-300 ${D(v) === "raw" ? "" : "hidden"}`), Ke(Yi, 1, `pl-4 ${D(l) ? "bg-base-300" : "bg-base-100"} font-mono whitespace-pre ${D(v) === "format" ? "" : "hidden"}`), Ke(St, 1, `flex lg:justify-center flex-wrap sm:items-center mitems-center sm:flex-col mflex-col lg:flex-row gap-4 ${D(k) === "wrap" ? "" : "hidden"}`), Ke(Mi, 1, Zi(D(w) === "desc" ? "menu-active text-white" : "text-base-content")), Ke(nr, 1, Zi(D(w) === "note" ? "menu-active text-white" : "text-base-content")), Ke(ci, 1, Zi(D(w) === "role" ? "menu-active text-white" : "text-base-content")), _g(Ti, D(b));
      }), jh(Ko, () => D(g), (xe) => $(g, xe)), Gh(sr, () => D(x), (xe) => $(x, xe)), Ct(V, W);
    };
    Qi(Ys, (V) => {
      s() ? V(Xs) : V(Ci, !1);
    });
  }
  Di(() => Nh(Oe, D(h))), jh(Q, () => D(h), (V) => $(h, V)), Gh(ki, () => D(l), (V) => $(l, V)), Ct(n, Fe), xu();
}
vg(["click", "change"]);
document.addEventListener("DOMContentLoaded", () => {
  const n = document.getElementById("svelte-root");
  if (n) {
    let e = {
      target: n
    };
    const t = n.dataset.logId ? parseInt(n.dataset.logId || "0", 10) : null;
    t && (e.props = {
      id: t
    }), xg(TS, e);
  }
});
