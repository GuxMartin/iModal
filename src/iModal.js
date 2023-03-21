import * as bootstrap from 'bootstrap';
import {combinedSettings, setGlobalsSettings} from './helpers/settings';
import bgColors from './helpers/bgColors';

const _VERSION         = '5.0.0-beta.4';
const _IMODAL_SELECTOR = '.modal.iModal';

export default class iModal {
  settings;

  constructor(params) {
    this.settings = combinedSettings(params);
    iModal.dispose();

    let modal = document.createElement('div');
    modal.id = this.settings.id;
    modal.tabIndex = -1;
    modal.classList.add("modal", "iModal");
    if (this.settings.fade) {
      modal.classList.add("fade");
    }

    let modal_dialog = document.createElement('div');
    modal_dialog.classList.add("modal-dialog");
    if (this.settings.size) {
      modal_dialog.classList.add(this.settings.size);
    }
    if (this.settings.fullscreen) {
      modal_dialog.classList.add(this.settings.fullscreen);
    }
    if (this.settings.dialogScrollable) {
      modal_dialog.classList.add("modal-dialog-scrollable");
    }
    if (this.settings.dialogCentered) {
      modal_dialog.classList.add("modal-dialog-centered");
    }
    modal.appendChild(modal_dialog);

    let modal_content = document.createElement('div');
    modal_content.classList.add("modal-content");
    // console.log(this.settings);
    if (this.settings.bg) {
      modal_content.classList.add(`bg-${this.settings.bg}`);
      modal_content.classList.add(bgColors[this.settings.bg].color);
    }
    modal_dialog.appendChild(modal_content);

    if (this.settings.header) {
      let modal_header = document.createElement('div');
      modal_header.classList.add("modal-header");
      if (this.settings.headerClass) {
        modal_header.classList.add(`bg-${this.settings.headerClass}`);
        modal_header.classList.add(bgColors[this.settings.headerClass].color);
      }
      modal_header.innerHTML = `
      <h5 class="modal-title">${this.settings.title}</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    `;
      modal_content.appendChild(modal_header);
    }

    let modal_body = document.createElement('div');
    modal_body.classList.add("modal-body");
    modal_body.innerHTML = this.settings.body;
    modal_content.appendChild(modal_body);

    if (this.settings.footer) {
      let modal_footer = document.createElement('div');
      modal_footer.classList.add("modal-footer");
      let close_btn_class = 'btn btn-outline-secondary';
      if (this.settings.bg)
        close_btn_class = `btn btn-outline-${bgColors[this.settings.bg].btn}`;
      if (this.settings.footerClass) {
        modal_footer.classList.add(`bg-${this.settings.footerClass}`);
        close_btn_class = `btn btn-outline-${bgColors[this.settings.footerClass].btn}`;
      }
      modal_footer.innerHTML = `
      <button type="button" class="btn ${close_btn_class}" data-bs-dismiss="modal">${this.settings.closeText}</button>
    `;
      modal_content.appendChild(modal_footer);
    }

    let document_body = document.querySelector('body');
    document_body.appendChild(modal);

    let el_iModal = document.querySelector(_IMODAL_SELECTOR);

    let self = this;

    // Declarar events antes de mostrar
    el_iModal.addEventListener('show.bs.modal', function (event) {
      self.settings.onShow();
    });
    el_iModal.addEventListener('shown.bs.modal', function (event) {
      self.settings.onShowed();
      if (self.settings.autoHide) {
        setTimeout(() => { iModal.hide(); }, self.settings.autoHideTime);
      }
    });
    el_iModal.addEventListener('hide.bs.modal', function (event) {
      self.settings.onHide();
    });
    el_iModal.addEventListener('hidden.bs.modal', function (event) {
      self.settings.onHidden();
      iModal.dispose();
    });
    el_iModal.addEventListener('hidePrevented.bs.modal', function (event) {
      self.settings.onHidePrevented();
    });

    // Generar modal, instanciar y mostrar
    let iModalInstance = new bootstrap.Modal(el_iModal, {
      backdrop: this.settings.backdrop,
      keyboard: this.settings.keyboard,
    });

    iModalInstance.show();

    // Backdrop Color
    if (this.settings.backdropColor) {
      document.querySelector('.modal-backdrop').classList.add(`bg-${this.settings.backdropColor}`);
    }
  }// /constructor


  static version = _VERSION;


  /**
   * Remueve completamente un iModal
   */
  static dispose = function(){
    let el_iModal = document.querySelector(_IMODAL_SELECTOR);
    let iModalInstance = iModal.getModalInstance();
    if(! iModalInstance) return;
    iModalInstance.dispose();
    
    if(el_iModal){
      el_iModal.parentNode.removeChild(el_iModal);
    }

    document.querySelector('body').style.overflow     = '';
    document.querySelector('body').style.paddingRight = '';
  }// /dispose


  /**
   * Modifica el cuerpo de un iModal
   */
  static body(body) {
    let el_iModal = document.querySelector(_IMODAL_SELECTOR);
    if(! el_iModal) return;
    el_iModal.querySelector('.modal-body').innerHTML = body;
  }

  
  /**
   * Saber si hay activo un iModal
   * @return boolean
   */
  static isActive = function(){
    return !! iModal.getModalInstance();
  }


  /**
   * https://getbootstrap.com/docs/5.0/components/modal/#getinstance
   * @return Devuelve una instancia Modal de bootstrap o false
   */
  static getModalInstance = function(){
    let el_iModal = document.querySelector(_IMODAL_SELECTOR);
    if(! el_iModal) return false;
    return bootstrap.Modal.getInstance(el_iModal);
  }// /#getModalInstance


  /**
   * Oculta un iModal con efecto fade
   */
  static hide = function(){
    if(! iModal.isActive()) return;
    iModal.getModalInstance().hide();
  }


  /**
   * Oculta un iModal sin efecto fade
   */
  static remove = function(){
    if(! iModal.isActive()) return;
    iModal.dispose();
  }

  /**
   * Establece los parámetros globales
   */
  static setSettings = function(params){
    setGlobalsSettings(params);
  }

}// /iModal()
