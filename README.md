# iModal :: Boostrap 5

Dinamic and simple modal generator. Ideal for ajax requests.

> For Bootstrap 4 see branch [**b4**](https://github.com/GuxMartin/iModal/tree/b4)

## Usage
``` javascript
import iModal from '@guxmartin/imodal';
window.iModal = iModal;

// or...
<script src="iModal/dist/iModal.umd.js"></script>

// Normal
new iModal();

// Update html body
iModal.body('Custom html');

// Custim id
new iModal({id:'my_modal'});

// Custom tite
new iModal({title:'Hello world'});

// Sizes
new iModal({size:'sm'});
new iModal({size:''});// Default
new iModal({size:'lg'});
new iModal({size:'xl'});

// Fullscreen
new iModal({fullscreen:true});
new iModal({fullscreen:'sm'});
new iModal({fullscreen:'md'});
new iModal({fullscreen:'lg'});
new iModal({fullscreen:'xl'});
new iModal({fullscreen:'xxl'});
new iModal({fullscreen:false});// Default

// Custom close button text
new iModal({closeText:'Cerrar'});

// Custom default body
new iModal({body:'Loading'});

// Background Class
new iModal({bg:'success'});
new iModal({bg:'primary'});
new iModal({bg:'info'});
new iModal({bg:'warning'});
new iModal({bg:'danger'});
new iModal({bg:'secondary'});
new iModal({bg:'dark'});
new iModal({bg:'light'});

// Header Class
new iModal({headerClass:'success'});
new iModal({headerClass:'primary'});
new iModal({headerClass:'info'});
new iModal({headerClass:'warning'});
new iModal({headerClass:'danger'});
new iModal({headerClass:'secondary'});
new iModal({headerClass:'dark'});
new iModal({headerClass:'light'});

// Footer Class
new iModal({footerClass:'success'});
new iModal({footerClass:'primary'});
new iModal({footerClass:'info'});
new iModal({footerClass:'warning'});
new iModal({footerClass:'danger'});
new iModal({footerClass:'secondary'});
new iModal({footerClass:'dark'});
new iModal({footerClass:'light'});

// Show/hide header
new iModal({header:false});

// Show/hide footer
new iModal({footer:false});

// Backdrop
new iModal({backdrop:false});

// Backdrop color
new iModal({backdropColor:false});
new iModal({backdropColor:'success'});
new iModal({backdropColor:'primary'});
new iModal({backdropColor:'info'});
new iModal({backdropColor:'warning'});
new iModal({backdropColor:'danger'});
new iModal({backdropColor:'secondary'});
new iModal({backdropColor:'dark'});
new iModal({backdropColor:'light'});

// Keyboard
new iModal({keyboard:false});

// Dialog scrollable
new iModal({dialogScrollable:true});

// Vertically centered
new iModal({dialogCentered:true});

// Fade animation
new iModal({fade:false});

// Auto Hide
new iModal({autoHide:true});
new iModal({autoHide:false});// Default
new iModal({autoHide:3000});

// Events
new iModal({ onShow: function(){ alert('Show'); } });
new iModal({ onShowed: function(){ alert('Showed'); } });
new iModal({ onHide: function(){ alert('Hide'); } });
new iModal({ onHidden: function(){ alert('Hidden'); } });
new iModal({ backdrop: 'static', onHidePrevented: function(){ alert('Hide Prevented'); } });

// Methods
iModal.isActive(); // return Boolean
iModal.hide();     // Graceful hidden
iModal.remove();   // Remove iModal
iModal.version;    // return iModal version

// GLOBAL CONFIGURATIONS (after iModal.js)
iModal.setSettings({
  size: 'lg',
  title: 'My project',
  backdrop: false,
});
```

## Documentation and examples
[https://guxmartin.github.io/iModal/examples/](https://guxmartin.github.io/iModal/examples/)

## Build
```
npm i --dev
npm start
```
