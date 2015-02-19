// event comparison (outdated): http://unixpapa.com/js/key.html
var events = ['keydown', 'keyup', 'keypress', 'textInput'];
events.forEach(function(event) {
  window.addEventListener(event, function(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log('Event: ', event, ': keyCode', e.keyCode, ', which', e.which, ', charCode', e.charCode);
    console.log('EventObject:' ,e);
    return false;
  });
});


// event comparison (outdated): http://unixpapa.com/js/key.html
var events = ['keydown'];
events.forEach(function(event) {
  window.addEventListener(event, function(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log('Event: ', event, ': keyCode', e.keyCode, ', which', e.which, ', charCode', e.charCode, ' ,object',  e);
    return false;
  });
});

// firefox has got e.key which is the name of the key. so creating a logger would be helpful.
// e.keyCode is available in firefox and chrome


// so let's create a logger:
var vkey = window.vkey = {};
var events = ['keydown'];
events.forEach(function(event) {
  window.addEventListener(event, function(e) {
    e.preventDefault();
    e.stopPropagation();
    if (!e.key) return console.log('please try with firefox, event.key is not available in your browser');
    vkey[e.keyCode] = e.key;
    console.log('added: ', 'keyCode', e.keyCode ,', key', e.key);
    return false;
  });
});

// let's move on and create a project to collect the keys from different keyboards with different OS around the world.


