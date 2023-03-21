(function(n,s){typeof exports=="object"&&typeof module<"u"?module.exports=s(require("bootstrap")):typeof define=="function"&&define.amd?define(["bootstrap"],s):(n=typeof globalThis<"u"?globalThis:n||self,n.iModal=s(n.bootstrap))})(this,function(n){"use strict";var H=Object.defineProperty;var w=(n,s,f)=>s in n?H(n,s,{enumerable:!0,configurable:!0,writable:!0,value:f}):n[s]=f;var c=(n,s,f)=>(w(n,typeof s!="symbol"?s+"":s,f),f);function s(e){const t=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const o in e)if(o!=="default"){const r=Object.getOwnPropertyDescriptor(e,o);Object.defineProperty(t,o,r.get?r:{enumerable:!0,get:()=>e[o]})}}return t.default=e,Object.freeze(t)}const f=s(n),v=function(e){e=e||{};for(var t=1;t<arguments.length;t++)if(arguments[t])for(var o in arguments[t])arguments[t].hasOwnProperty(o)&&(e[o]=arguments[t][o]);return e},u={success:{color:"text-white",btn:"light"},primary:{color:"text-white",btn:"light"},info:{color:"text-white",btn:"light"},warning:{color:"text-white",btn:"light"},danger:{color:"text-white",btn:"light"},secondary:{color:"text-white",btn:"light"},dark:{color:"text-white",btn:"light"},light:{color:"text-dark",btn:"dark"}};let d={id:"iModal",size:"",fullscreen:!1,title:"",closeText:"Close",body:`
    <div class="d-flex justify-content-center" style="height: 100%;">
      <div class="spinner-border text-primary my-auto" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  `,bg:"",headerClass:"",footerClass:"",header:!0,footer:!0,backdrop:!0,backdropColor:!1,keyboard:!0,dialogScrollable:!1,dialogCentered:!1,fade:!0,autoHide:!1,autoHideTime:1e3,onShow:function(){},onShowed:function(){},onHide:function(){},onHidden:function(){},onHidePrevented:function(){}},C={};const L=function(e){return e.id.length<1&&(e.id=d.id),["sm","lg","xl"].indexOf(e.size)<0?e.size=d.size:e.size="modal-"+e.size,[!1,!0,"sm","md","lg","xl","xxl"].indexOf(e.fullscreen)<0?e.fullscreen=d.fullscreen:e.fullscreen!==!1&&(e.fullscreen===!0?e.fullscreen="modal-fullscreen":e.fullscreen=`modal-fullscreen-${e.fullscreen}-down`),e.bg in u||(e.bg=d.bg),e.headerClass in u||(e.headerClass=d.headerClass),e.footerClass in u||(e.footerClass=d.footerClass),[!0,!1,"static"].indexOf(e.backdrop)<0&&(e.backdrop=d.backdrop),e.backdropColor in u||(e.backdropColor=d.backdropColor),[!0,!1].indexOf(e.keyboard)<0&&(e.keyboard=d.keyboard),[!0,!1].indexOf(e.dialogScrollable)<0&&(e.dialogScrollable=d.dialogScrollable),[!0,!1].indexOf(e.dialogCentered)<0&&(e.dialogCentered=d.dialogCentered),[!0,!1].indexOf(e.fade)<0&&(e.fade=d.fade),Number.isInteger(e.autoHide)&&e.autoHide>0?(e.autoHideTime=parseInt(e.autoHide),e.autoHide=!0):e.autoHide&&(e.autoHide=!0),e};function x(e){C=e}function S(e){let t=v({},d,C,e);return L(t)}const k="5.0.0-beta.2",g=".modal.iModal",l=class{constructor(t){c(this,"settings");this.settings=S(t),l.dispose();let o=document.createElement("div");o.id=this.settings.id,o.tabIndex=-1,o.classList.add("modal","iModal"),this.settings.fade&&o.classList.add("fade");let r=document.createElement("div");r.classList.add("modal-dialog"),this.settings.size&&r.classList.add(this.settings.size),this.settings.fullscreen&&r.classList.add(this.settings.fullscreen),this.settings.dialogScrollable&&r.classList.add("modal-dialog-scrollable"),this.settings.dialogCentered&&r.classList.add("modal-dialog-centered"),o.appendChild(r);let b=document.createElement("div");if(b.classList.add("modal-content"),this.settings.bg&&(b.classList.add(`bg-${this.settings.bg}`),b.classList.add(u[this.settings.bg].color)),r.appendChild(b),this.settings.header){let i=document.createElement("div");i.classList.add("modal-header"),this.settings.headerClass&&(i.classList.add(`bg-${this.settings.headerClass}`),i.classList.add(u[this.settings.headerClass].color)),i.innerHTML=`
      <h5 class="modal-title">${this.settings.title}</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    `,b.appendChild(i)}let p=document.createElement("div");if(p.classList.add("modal-body"),p.innerHTML=this.settings.body,b.appendChild(p),this.settings.footer){let i=document.createElement("div");i.classList.add("modal-footer");let y="btn btn-outline-secondary";this.settings.bg&&(y=`btn btn-outline-${u[this.settings.bg].btn}`),this.settings.footerClass&&(i.classList.add(`bg-${this.settings.footerClass}`),y=`btn btn-outline-${u[this.settings.footerClass].btn}`),i.innerHTML=`
      <button type="button" class="btn ${y}" data-bs-dismiss="modal">${this.settings.closeText}</button>
    `,b.appendChild(i)}document.querySelector("body").appendChild(o);let m=document.querySelector(g),h=this;m.addEventListener("show.bs.modal",function(i){h.settings.onShow()}),m.addEventListener("shown.bs.modal",function(i){h.settings.onShowed(),h.settings.autoHide&&setTimeout(()=>{l.hide()},h.settings.autoHideTime)}),m.addEventListener("hide.bs.modal",function(i){h.settings.onHide()}),m.addEventListener("hidden.bs.modal",function(i){h.settings.onHidden(),l.dispose()}),m.addEventListener("hidePrevented.bs.modal",function(i){h.settings.onHidePrevented()}),new f.Modal(m,{backdrop:this.settings.backdrop,keyboard:this.settings.keyboard}).show(),this.settings.backdropColor&&document.querySelector(".modal-backdrop").classList.add(`bg-${this.settings.backdropColor}`)}static body(t){let o=document.querySelector(g);o&&(o.querySelector(".modal-body").innerHTML=t)}};let a=l;return c(a,"version",k),c(a,"dispose",function(){let t=document.querySelector(g),o=l.getModalInstance();o&&(o.dispose(),t&&t.parentNode.removeChild(t))}),c(a,"isActive",function(){return!!l.getModalInstance()}),c(a,"getModalInstance",function(){let t=document.querySelector(g);return t?f.Modal.getInstance(t):!1}),c(a,"hide",function(){l.isActive()&&l.getModalInstance().hide()}),c(a,"remove",function(){l.isActive()&&(document.querySelector(g).classList.remove("fade"),l.hide(),l.dispose())}),c(a,"setSettings",function(t){x(t)}),a});
