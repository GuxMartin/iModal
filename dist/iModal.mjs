var y = Object.defineProperty;
var C = (e, t, o) => t in e ? y(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var l = (e, t, o) => (C(e, typeof t != "symbol" ? t + "" : t, o), o);
import * as g from "bootstrap";
const v = function(e) {
  e = e || {};
  for (var t = 1; t < arguments.length; t++)
    if (arguments[t])
      for (var o in arguments[t])
        arguments[t].hasOwnProperty(o) && (e[o] = arguments[t][o]);
  return e;
}, n = {
  success: { color: "text-white", btn: "light" },
  primary: { color: "text-white", btn: "light" },
  info: { color: "text-white", btn: "light" },
  warning: { color: "text-white", btn: "light" },
  danger: { color: "text-white", btn: "light" },
  secondary: { color: "text-white", btn: "light" },
  dark: { color: "text-white", btn: "light" },
  light: { color: "text-dark", btn: "dark" }
};
let i = {
  id: "iModal",
  size: "",
  fullscreen: !1,
  title: "",
  closeText: "Close",
  body: `
    <div class="d-flex justify-content-center" style="height: 100%;">
      <div class="spinner-border text-primary my-auto" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  `,
  bg: "",
  headerClass: "",
  footerClass: "",
  header: !0,
  footer: !0,
  backdrop: !0,
  backdropColor: !1,
  keyboard: !0,
  dialogScrollable: !1,
  dialogCentered: !1,
  fade: !0,
  autoHide: !1,
  autoHideTime: 1e3,
  onShow: function() {
  },
  onShowed: function() {
  },
  onHide: function() {
  },
  onHidden: function() {
  },
  onHidePrevented: function() {
  }
}, p = {};
const L = function(e) {
  return e.id.length < 1 && (e.id = i.id), ["sm", "lg", "xl"].indexOf(e.size) < 0 ? e.size = i.size : e.size = "modal-" + e.size, [!1, !0, "sm", "md", "lg", "xl", "xxl"].indexOf(e.fullscreen) < 0 ? e.fullscreen = i.fullscreen : e.fullscreen !== !1 && (e.fullscreen === !0 ? e.fullscreen = "modal-fullscreen" : e.fullscreen = `modal-fullscreen-${e.fullscreen}-down`), e.bg in n || (e.bg = i.bg), e.headerClass in n || (e.headerClass = i.headerClass), e.footerClass in n || (e.footerClass = i.footerClass), [!0, !1, "static"].indexOf(e.backdrop) < 0 && (e.backdrop = i.backdrop), e.backdropColor in n || (e.backdropColor = i.backdropColor), [!0, !1].indexOf(e.keyboard) < 0 && (e.keyboard = i.keyboard), [!0, !1].indexOf(e.dialogScrollable) < 0 && (e.dialogScrollable = i.dialogScrollable), [!0, !1].indexOf(e.dialogCentered) < 0 && (e.dialogCentered = i.dialogCentered), [!0, !1].indexOf(e.fade) < 0 && (e.fade = i.fade), Number.isInteger(e.autoHide) && e.autoHide > 0 ? (e.autoHideTime = parseInt(e.autoHide), e.autoHide = !0) : e.autoHide && (e.autoHide = !0), e;
};
function x(e) {
  p = e;
}
function S(e) {
  let t = v({}, i, p, e);
  return L(t);
}
const H = "5.0.0-beta.4", b = ".modal.iModal", d = class {
  constructor(t) {
    l(this, "settings");
    this.settings = S(t), d.dispose();
    let o = document.createElement("div");
    o.id = this.settings.id, o.tabIndex = -1, o.classList.add("modal", "iModal"), this.settings.fade && o.classList.add("fade");
    let r = document.createElement("div");
    r.classList.add("modal-dialog"), this.settings.size && r.classList.add(this.settings.size), this.settings.fullscreen && r.classList.add(this.settings.fullscreen), this.settings.dialogScrollable && r.classList.add("modal-dialog-scrollable"), this.settings.dialogCentered && r.classList.add("modal-dialog-centered"), o.appendChild(r);
    let c = document.createElement("div");
    if (c.classList.add("modal-content"), this.settings.bg && (c.classList.add(`bg-${this.settings.bg}`), c.classList.add(n[this.settings.bg].color)), r.appendChild(c), this.settings.header) {
      let s = document.createElement("div");
      s.classList.add("modal-header"), this.settings.headerClass && (s.classList.add(`bg-${this.settings.headerClass}`), s.classList.add(n[this.settings.headerClass].color)), s.innerHTML = `
      <h5 class="modal-title">${this.settings.title}</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    `, c.appendChild(s);
    }
    let h = document.createElement("div");
    if (h.classList.add("modal-body"), h.innerHTML = this.settings.body, c.appendChild(h), this.settings.footer) {
      let s = document.createElement("div");
      s.classList.add("modal-footer");
      let m = "btn btn-outline-secondary";
      this.settings.bg && (m = `btn btn-outline-${n[this.settings.bg].btn}`), this.settings.footerClass && (s.classList.add(`bg-${this.settings.footerClass}`), m = `btn btn-outline-${n[this.settings.footerClass].btn}`), s.innerHTML = `
      <button type="button" class="btn ${m}" data-bs-dismiss="modal">${this.settings.closeText}</button>
    `, c.appendChild(s);
    }
    document.querySelector("body").appendChild(o);
    let u = document.querySelector(b), f = this;
    u.addEventListener("show.bs.modal", function(s) {
      f.settings.onShow();
    }), u.addEventListener("shown.bs.modal", function(s) {
      f.settings.onShowed(), f.settings.autoHide && setTimeout(() => {
        d.hide();
      }, f.settings.autoHideTime);
    }), u.addEventListener("hide.bs.modal", function(s) {
      f.settings.onHide();
    }), u.addEventListener("hidden.bs.modal", function(s) {
      f.settings.onHidden(), d.dispose();
    }), u.addEventListener("hidePrevented.bs.modal", function(s) {
      f.settings.onHidePrevented();
    }), new g.Modal(u, {
      backdrop: this.settings.backdrop,
      keyboard: this.settings.keyboard
    }).show(), this.settings.backdropColor && document.querySelector(".modal-backdrop").classList.add(`bg-${this.settings.backdropColor}`);
  }
  // /dispose
  /**
   * Modifica el cuerpo de un iModal
   */
  static body(t) {
    let o = document.querySelector(b);
    o && (o.querySelector(".modal-body").innerHTML = t);
  }
};
let a = d;
// /constructor
l(a, "version", H), /**
 * Remueve completamente un iModal
 */
l(a, "dispose", function() {
  let t = document.querySelector(b), o = d.getModalInstance();
  o && (o.dispose(), t && t.parentNode.removeChild(t), document.querySelector("body").style.overflow = "", document.querySelector("body").style.paddingRight = "");
}), /**
 * Saber si hay activo un iModal
 * @return boolean
 */
l(a, "isActive", function() {
  return !!d.getModalInstance();
}), /**
 * https://getbootstrap.com/docs/5.0/components/modal/#getinstance
 * @return Devuelve una instancia Modal de bootstrap o false
 */
l(a, "getModalInstance", function() {
  let t = document.querySelector(b);
  return t ? g.Modal.getInstance(t) : !1;
}), // /#getModalInstance
/**
 * Oculta un iModal con efecto fade
 */
l(a, "hide", function() {
  d.isActive() && d.getModalInstance().hide();
}), /**
 * Oculta un iModal sin efecto fade
 */
l(a, "remove", function() {
  d.isActive() && d.dispose();
}), /**
 * Establece los parámetros globales
 */
l(a, "setSettings", function(t) {
  x(t);
});
export {
  a as default
};
