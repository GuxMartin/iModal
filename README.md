# iModal :: Boostrap 5

Dinamic and simple modal generator. Ideal for ajax requests.

## Usage
``` javascript
<script src="iModal.js"></script>

// Normal
iModal();

// Update html body
iModal.body(('Custom html');

// Custim id
iModal({id:'my_modal'});

// Custom tite
iModal({title:'Hello world'});

// Sizes
iModal({size:'sm'});
iModal({size:''});// Default
iModal({size:'lg'});
iModal({size:'xl'});

// Fullscreen
iModal({fullscreen:true});
iModal({fullscreen:'sm'});
iModal({fullscreen:'md'});
iModal({fullscreen:'lg'});
iModal({fullscreen:'xl'});
iModal({fullscreen:'xxl'});
iModal({fullscreen:false});// Default

// Custom close button text
iModal({closeText:'Cerrar'});

// Custom default body
iModal({body:'Loading'});

// Background Class
iModal({bg:'success'});
iModal({bg:'primary'});
iModal({bg:'info'});
iModal({bg:'warning'});
iModal({bg:'danger'});
iModal({bg:'secondary'});
iModal({bg:'dark'});
iModal({bg:'light'});

// Header Class
iModal({headerClass:'success'});
iModal({headerClass:'primary'});
iModal({headerClass:'info'});
iModal({headerClass:'warning'});
iModal({headerClass:'danger'});
iModal({headerClass:'secondary'});
iModal({headerClass:'dark'});
iModal({headerClass:'light'});

// Footer Class
iModal({footerClass:'success'});
iModal({footerClass:'primary'});
iModal({footerClass:'info'});
iModal({footerClass:'warning'});
iModal({footerClass:'danger'});
iModal({footerClass:'secondary'});
iModal({footerClass:'dark'});
iModal({footerClass:'light'});

// Show/hide header
iModal({header:false});

// Show/hide footer
iModal({footer:false});

// Backdrop
iModal({backdrop:false});

// Backdrop color
iModal({backdropColor:false});
iModal({backdropColor:'success'});
iModal({backdropColor:'primary'});
iModal({backdropColor:'info'});
iModal({backdropColor:'warning'});
iModal({backdropColor:'danger'});
iModal({backdropColor:'secondary'});
iModal({backdropColor:'dark'});
iModal({backdropColor:'light'});

// Keyboard
iModal({keyboard:false});

// Dialog scrollable
iModal({dialogScrollable:true});

// Vertically centered
iModal({dialogCentered:true});

// Fade animation
iModal({fade:false});

// Auto Hide
iModal({autoHide:true});
iModal({autoHide:false});// Default
iModal({autoHide:3000});

// Events
iModal({ onShow: function(){ alert('Show'); } });
iModal({ onShowed: function(){ alert('Showed'); } });
iModal({ onHide: function(){ alert('Hide'); } });
iModal({ onHidden: function(){ alert('Hidden'); } });
iModal({ backdrop: 'static', onHidePrevented: function(){ alert('Hide Prevented'); } });

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
