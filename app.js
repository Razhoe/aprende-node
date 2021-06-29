
const { crearArchivo, crearArchivo2 } = require('./helpers/multiplicar');
const colors = require('colors');
const argv = require('./config/yargs');

console.clear();

crearArchivo2(argv.b, argv.l, argv.h)
  .then(nombreArchivo => console.log(nombreArchivo.red, 'creado'))
  .catch(err => console.log(err));
