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
