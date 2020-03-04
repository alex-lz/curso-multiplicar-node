const yargsArgv = require('./config/yargs').yargsArgv
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')
const colors = require('colors')


let comando = yargsArgv._[0]

switch(comando) {
  case 'listar':
    listarTabla(yargsArgv.base, yargsArgv.limite)
  break;

  case 'crear':
    // node app crear --base 5
    crearArchivo(yargsArgv.base, yargsArgv.limite)
      .then( archivo => console.log(`Archivo creado: ${ archivo }`) )
      .catch( e => console.log(e) )
  break;

  default:
    console.log('Comando desconocido')
}

/* git init
git status
git add .
git commit -m "Commit inicial" */

// Nota "process" es un objeto de node contiene "process.argv" es donde estan los argumentos de la consola
// Console => node app listar --limite 30 -b 5
// Console => node app crear --limite 30 -b 5

// npm init && npm i yargs -S


/** Old way 2 */
// let base = '5';
/* let argv = process.argv; 
let parametro = argv[2];
let base = parametro.split('=')[1] */

/* let base = yargsArgv.base
crearArchivo(base)
  .then( archivo => console.log(`Archivo creado: ${ archivo }`) )
  .catch( e => console.log(e) ) */


/** Old way 1*/
/* const multiplicar = require('./multiplicar/multiplicar')

let base = 4;

multiplicar.crearArchivo(base)
  .then( archivo => console.log(`Archivo creado: ${ archivo }`) ) */