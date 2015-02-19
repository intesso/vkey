var fs = require('fs');
var vkey = require('./index');
var inverted = {};

Object.keys(vkey).forEach(function(key) {
  var value = vkey[key];
  inverted[value] = parseInt(key);
});

fs.writeFileSync('vkeys.js', toString(inverted) ,'utf-8');

function toString(obj) {
  var buff, prop;
  buff = [];
  for (prop in obj) {
    buff.push("'" + escape(prop) + "'" + ': ' + obj[prop])
  }
  return 'module.exports = {\n  ' + buff.join(',\n  ') + '\n};';
}

function escape(str) {
  str = str.replace(/\\/g, "\\\\");
  str = str.replace(/\'/g, "\\'");
  return str;
}


console.log(inverted);