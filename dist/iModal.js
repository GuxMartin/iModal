(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.iModal = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/**
 * Objeto de clases de colores de fondo de bootstrap
 */
module.exports = {
  success:   { color: 'text-white', btn: 'light', },
  primary:   { color: 'text-white', btn: 'light', },
  info:      { color: 'text-white', btn: 'light', },
  warning:   { color: 'text-white', btn: 'light', },
  danger:    { color: 'text-white', btn: 'light', },
  secondary: { color: 'text-white', btn: 'light', },
  dark:      { color: 'text-white', btn: 'light', },
  light:     { color: 'text-dark',  btn: 'dark', },
};

},{}],2:[function(require,module,exports){
/**
 * http://youmightnotneedjquery.com/#extend
 */
const extend = function(out) {
 out = out || {};

 for (var i = 1; i < arguments.length; i++) {
   if (!arguments[i])
   continue;

   for (var key in arguments[i]) {
     if (arguments[i].hasOwnProperty(key))
     out[key] = arguments[i][key];
   }
 }

 return out;
};


module.exports = extend;

},{}],3:[function(require,module,exports){
const {setGlobalsSettings, combinedSettings} = require('./settings');
const bgColors = require('./bgColors');


const _VERSION         = '4.0.0-alpha.1';
const _IMODAL_SELECTOR = '.modal.iModal';


/**
 * Indica si hay un iModal activo
 * @return boolean
 */
const isActive = function(){
  return !! document.querySelector(_IMODAL_SELECTOR);
}


/**
 * Remueve completamente un iModal
 */
const dispose = function(){
  let el_iModal = document.querySelector(_IMODAL_SELECTOR);
  if(el_iModal){
    $(_IMODAL_SELECTOR).modal('dispose').remove();
    $('.modal-backdrop').remove();
    $('body').removeClass("modal-open");
  }
}


/**
 * Oculta un iModal con efecto fade
 */
const hide = function(){
  if(! isActive()) return;
  $(_IMODAL_SELECTOR).modal('hide');
}


/**
 * Oculta un iModal sin efecto fade
 */
const remove = function(){
  if(! isActive()) return;
  document.querySelector(_IMODAL_SELECTOR).classList.remove("fade");
  hide();
  dispose();
}


/**
 * Método principal para generar un iModal
 * @param  object  params  Objeto con las características del iModal
 */
const iModal = function (params) {
  let settings = combinedSettings(params);

  let modal = document.createElement('div');
  modal.id = settings.id;
  modal.tabIndex = -1;
  modal.classList.add("modal", "iModal");
  if(settings.fade){
    modal.classList.add("fade");
  }

  let modal_dialog = document.createElement('div');
  modal_dialog.classList.add("modal-dialog");
  if(settings.size){
    modal_dialog.classList.add(settings.size);
  }
  if(settings.dialogScrollable){
    modal_dialog.classList.add("modal-dialog-scrollable");
  }
  if(settings.dialogCentered){
    modal_dialog.classList.add("modal-dialog-centered");
  }
  modal.appendChild(modal_dialog);

  let modal_content = document.createElement('div');
  modal_content.classList.add("modal-content");
  if(settings.bg){
    modal_content.classList.add(`bg-${settings.bg}`);
    modal_content.classList.add(bgColors[settings.bg].color);
  }
  modal_dialog.appendChild(modal_content);

  if(settings.header){
    let modal_header = document.createElement('div');
    modal_header.classList.add("modal-header");
    if(settings.headerClass){
      modal_header.classList.add(`bg-${settings.headerClass}`);
      modal_header.classList.add(bgColors[settings.headerClass].color);
    }
    modal_header.innerHTML = `
      <h5 class="modal-title">${settings.title}</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    `;
    modal_content.appendChild(modal_header);
  }

  let modal_body = document.createElement('div');
  modal_body.classList.add("modal-body");
  modal_body.innerHTML = settings.body;
  modal_content.appendChild(modal_body);

  if(settings.footer){
    let modal_footer = document.createElement('div');
    modal_footer.classList.add("modal-footer");
    let close_btn_class = 'btn btn-outline-secondary';
    if(settings.bg) close_btn_class = `btn btn-outline-${bgColors[settings.bg].btn}`;
    if(settings.footerClass){
      modal_footer.classList.add(`bg-${settings.footerClass}`);
      close_btn_class = `btn btn-outline-${bgColors[settings.footerClass].btn}`;
    }
    modal_footer.innerHTML = `
      <button type="button" class="btn ${close_btn_class}" data-dismiss="modal">${settings.closeText}</button>
    `;
    modal_content.appendChild(modal_footer);
  }

  let document_body = document.querySelector('body');
  document_body.appendChild(modal);

  let el_iModal = document.querySelector(_IMODAL_SELECTOR);

  // Declarar events antes de mostrar
  $(_IMODAL_SELECTOR).on('show.bs.modal', function (event) {
    settings.onShow();
  });
  $(_IMODAL_SELECTOR).on('shown.bs.modal', function (event) {
    settings.onShowed();
    if(settings.autoHide){
      setTimeout(hide, settings.autoHideTime);
    }
  });
  $(_IMODAL_SELECTOR).on('hide.bs.modal', function (event) {
    settings.onHide();
  });
  $(_IMODAL_SELECTOR).on('hidden.bs.modal', function (event) {
    settings.onHidden();
    dispose();
  });
  $(_IMODAL_SELECTOR).on('hidePrevented.bs.modal', function (event) {
    settings.onHidePrevented();
  });

  // Generar modal
  $(_IMODAL_SELECTOR).modal({
    backdrop: settings.backdrop,
    keyboard: settings.keyboard,
  });

  // Backdrop Color
  if(settings.backdropColor){
    document.querySelector('.modal-backdrop').classList.add(`bg-${settings.backdropColor}`);
  }

};


module.exports             = iModal;
module.exports.version     = _VERSION;
module.exports.isActive    = isActive;
module.exports.hide        = hide;
module.exports.remove      = remove;
module.exports.setSettings = function(params) {
  setGlobalsSettings(params);
};
module.exports.body        = function(body) {
  let el_iModal = document.querySelector(_IMODAL_SELECTOR);
  if(! el_iModal) return;
  el_iModal.querySelector('.modal-body').innerHTML = body
};

},{"./bgColors":1,"./settings":4}],4:[function(require,module,exports){
const extend = require('./extend');
const bgColors = require('./bgColors');

let defaultSettings = {
  id: "iModal",
  size: "",
  title: "",
  closeText: "Close",
  body: `
    <div class="d-flex justify-content-center" style="height: 100%;">
      <div class="spinner-border text-primary my-auto" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  `,
  bg: "",
  headerClass: "",
  footerClass: "",
  header: true,
  footer: true,
  backdrop: true,
  backdropColor: false,
  keyboard: true,
  dialogScrollable: false,
  dialogCentered: false,
  fade: true,
  autoHide: false,
  autoHideTime: 1000,
  onShow: function(){},
  onShowed: function(){},
  onHide: function(){},
  onHidden: function(){},
  onHidePrevented: function(){},
};


let iModalSettings = {};


const validate = function(settings){

  // Comprobación de parámetros
  if(settings.id.length < 1){ settings.id = defaultSettings.id; }

  if(['sm','lg','xl'].indexOf(settings.size) < 0){ settings.size = defaultSettings.size; }
  else{ settings.size = 'modal-'+settings.size; }

  if(! (settings.bg in bgColors)){ settings.bg = defaultSettings.bg; }

  if(! (settings.headerClass in bgColors)){ settings.headerClass = defaultSettings.headerClass; }

  if(! (settings.footerClass in bgColors)){ settings.footerClass = defaultSettings.footerClass; }

  if([true,false,'static'].indexOf(settings.backdrop) < 0){ settings.backdrop = defaultSettings.backdrop; }

  if(! (settings.backdropColor in bgColors)){ settings.backdropColor = defaultSettings.backdropColor; }

  if([true,false].indexOf(settings.keyboard) < 0){ settings.keyboard = defaultSettings.keyboard; }

  if([true,false].indexOf(settings.dialogScrollable) < 0){ settings.dialogScrollable = defaultSettings.dialogScrollable; }

  if([true,false].indexOf(settings.dialogCentered) < 0){ settings.dialogCentered = defaultSettings.dialogCentered; }

  if([true,false].indexOf(settings.fade) < 0){ settings.fade = defaultSettings.fade; }

  if([true,false].indexOf(settings.autoHide) < 0){ settings.autoHide = defaultSettings.autoHide; }

  settings.autoHideTime = parseInt(settings.autoHideTime) || defaultSettings.autoHideTime;

  return settings;
}// /validate


module.exports = {
  setGlobalsSettings: (params) => {
    iModalSettings = params;
  },
  combinedSettings: (params) => {
    let settings = extend({}, defaultSettings, iModalSettings, params);
    return validate(settings);
  },
  // bgColors: bgColors,
};

},{"./bgColors":1,"./extend":2}]},{},[3])(3)
});
