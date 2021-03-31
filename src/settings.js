const extend = require('./extend');
const bgColors = require('./bgColors');

let defaultSettings = {
  id: "iModal",
  size: "",
  fullscreen: false,
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

  if([false,true,'sm','md','lg','xl','xxl'].indexOf(settings.fullscreen) < 0){ settings.fullscreen = defaultSettings.fullscreen; }
  else{
    if(settings.fullscreen !== false){
      if(settings.fullscreen === true){ settings.fullscreen = 'modal-fullscreen'; }
      else {
        settings.fullscreen = `modal-fullscreen-${settings.fullscreen}-down`;
      }
    }
  }

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
