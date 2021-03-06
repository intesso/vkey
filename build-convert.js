var fs = require('fs');
var vkey = require('./index');
var converted = {};

Object.keys(vkey).forEach(function(key) {
  var value = vkey[key];
  converted[key] = value
});

fs.writeFileSync('vkeys.js', toString(converted) ,'utf-8');

function toString(obj) {
  var buff, prop;
  buff = [];
  for (prop in obj) {
    buff.push(prop + ': \'' + convert(obj[prop]) + '\'')
  }
  return 'module.exports = {\n  ' + buff.join(',\n  ') + '\n};';
}

function convert(str) {
  str = str.toLowerCase();
  str = str.replace(/-/g, "");
  str = str.replace(/</g, "");
  str = str.replace(/>/g, "");
  str = str.replace(/\\/g, "\\\\");
  str = str.replace(/\'/g, "\\'");
  return str;
}


console.log(converted);