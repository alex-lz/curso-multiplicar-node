const options = {
    base: {
        demand: true,
        alias: 'b'
      },
      limite: {
        alias: 'l',
        default: 10
      }
}

const yargsArgv = require('yargs')
.command('listar','Imprime en consola la tabla de multiplicar', options)
.command('crear','Genera un archivo con la tabla de multiplicar', options)
.help()
.argv

// Nota "process" es un objeto de node contiene "process.argv" es donde estan los argumentos de la consola

module.exports = {
    yargsArgv
}