var C = Object.defineProperty;
var v = (e, t, s) => t in e ? C(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s;
var l = (e, t, s) => (v(e, typeof t != "symbol" ? t + "" : t, s), s);
import * as g from "bootstrap";
const y = function(e) {
  e = e || {};
  for (var t = 1; t < arguments.length; t++)
    if (arguments[t])
      for (var s in arguments[t])
        arguments[t].hasOwnProperty(s) && (e[s] = arguments[t][s]);
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
let o = {
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
  return e.id.length < 1 && (e.id = o.id), ["sm", "lg", "xl"].indexOf(e.size) < 0 ? e.size = o.size : e.size = "modal-" + e.size, [!1, !0, "sm", "md", "lg", "xl", "xxl"].indexOf(e.fullscreen) < 0 ? e.fullscreen = o.fullscreen : e.fullscreen !== !1 && (e.fullscreen === !0 ? e.fullscreen = "modal-fullscreen" : e.fullscreen = `modal-fullscreen-${e.fullscreen}-down`), e.bg in n || (e.bg = o.bg), e.headerClass in n || (e.headerClass = o.headerClass), e.footerClass in n || (e.footerClass = o.footerClass), [!0, !1, "static"].indexOf(e.backdrop) < 0 && (e.backdrop = o.backdrop), e.backdropColor in n || (e.backdropColor = o.backdropColor), [!0, !1].indexOf(e.keyboard) < 0 && (e.keyboard = o.keyboard), [!0, !1].indexOf(e.dialogScrollable) < 0 && (e.dialogScrollable = o.dialogScrollable), [!0, !1].indexOf(e.dialogCentered) < 0 && (e.dialogCentered = o.dialogCentered), [!0, !1].indexOf(e.fade) < 0 && (e.fade = o.fade), Number.isInteger(e.autoHide) && e.autoHide > 0 ? (e.autoHideTime = parseInt(e.autoHide), e.autoHide = !0) : e.autoHide && (e.autoHide = !0), e;
};
function x(e) {
  p = e;
}
function S(e) {
  let t = y({}, o, p, e);
  return L(t);
}
const H = "5.0.0-beta.1", b = ".modal.iModal", d = class {
  constructor(t) {
    l(this, "settings");
    this.settings = S(t), d.dispose();
    let s = document.createElement("div");
    s.id = this.settings.id, s.tabIndex = -1, s.classList.add("modal", "iModal"), this.settings.fade && s.classList.add("fade");
    let r = document.createElement("div");
    r.classList.add("modal-dialog"), this.settings.size && r.classList.add(this.settings.size), this.settings.fullscreen && r.classList.add(this.settings.fullscreen), this.settings.dialogScrollable && r.classList.add("modal-dialog-scrollable"), this.settings.dialogCentered && r.classList.add("modal-dialog-centered"), s.appendChild(r);
    let c = document.createElement("div");
    if (c.classList.add("modal-content"), this.settings.bg && (c.classList.add(`bg-${this.settings.bg}`), c.classList.add(n[this.settings.bg].color)), r.appendChild(c), this.settings.header) {
      let i = document.createElement("div");
      i.classList.add("modal-header"), this.settings.headerClass && (i.classList.add(`bg-${this.settings.headerClass}`), i.classList.add(n[this.settings.headerClass].color)), i.innerHTML = `
      <h5 class="modal-title">${this.settings.title}</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    `, c.appendChild(i);
    }
    let h = document.createElement("div");
    if (h.classList.add("modal-body"), h.innerHTML = this.settings.body, c.appendChild(h), this.settings.footer) {
      let i = document.createElement("div");
      i.classList.add("modal-footer");
      let m = "btn btn-outline-secondary";
      this.settings.bg && (m = `btn btn-outline-${n[this.settings.bg].btn}`), this.settings.footerClass && (i.classList.add(`bg-${this.settings.footerClass}`), m = `btn btn-outline-${n[this.settings.footerClass].btn}`), i.innerHTML = `
      <button type="button" class="btn ${m}" data-bs-dismiss="modal">${this.settings.closeText}</button>
    `, c.appendChild(i);
    }
    document.querySelector("body").appendChild(s);
    let u = document.querySelector(b), f = this;
    u.addEventListener("show.bs.modal", function(i) {
      f.settings.onShow();
    }), u.addEventListener("shown.bs.modal", function(i) {
      f.settings.onShowed(), f.settings.autoHide && setTimeout(() => {
        d.hide();
      }, f.settings.autoHideTime);
    }), u.addEventListener("hide.bs.modal", function(i) {
      f.settings.onHide();
    }), u.addEventListener("hidden.bs.modal", function(i) {
      f.settings.onHidden(), d.dispose();
    }), u.addEventListener("hidePrevented.bs.modal", function(i) {
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
    let s = document.querySelector(b);
    s && (s.querySelector(".modal-body").innerHTML = t);
  }
};
let a = d;
// /constructor
l(a, "version", H), /**
 * Remueve completamente un iModal
 */
l(a, "dispose", function() {
  let t = document.querySelector(b), s = d.getModalInstance();
  s && (s.dispose(), t && t.parentNode.removeChild(t));
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
  d.isActive() && (document.querySelector(b).classList.remove("fade"), d.hide(), d.dispose());
}), /**
 * Establece los parámetros globales
 */
l(a, "setSettings", function(t) {
  x(t);
});
export {
  a as default
};
