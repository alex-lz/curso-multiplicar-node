// requires
const fs = require('fs')
const colors = require('colors')

let listarTabla = (base, limite=10) => {
    console.log(`=== Tabla del ${base} ===`.green)
    for(let i = 1; i <= limite; i++ ) {
         console.log(`${ base } x ${ i } = ${ base * i }`)
    }
}

crearArchivo = (base, limite=10) => {
    return new Promise((resolve, reject) => {
        if( !Number(base) ) {
            reject(`El valor ${ base } no es un número`)
            return;
        }
        let data = '';

        for(let i = 1; i <= limite; i++ ) {
            // console.log(`${ base } x ${ i } = ${ base * i }`)
            data += `${ base } x ${ i } = ${ base * i } \n`;
        }

        fs.writeFile(`tablas/tabla-${ base }-${ limite }.txt`, data, (err) => {
          // if (err) throw err;
          if (err) 
            reject(err)
          else 
            resolve(`Tabla-${ base }-${ limite }.txt`.green)
        });
    });
}

// Nota module es un obj global que esta disponible a lo largo de la ejecucion de la aplicacion
module.exports = {
    crearArchivo,
    listarTabla
}

/* Old way */
/* let data = '';

for(let i = 1; i <= 10; i++ ) {
    // console.log(`${ base } x ${ i } = ${ base * i }`)
    data += `${ base } x ${ i } = ${ base * i } \n`;
}


fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
  if (err) throw err;
  console.log(`El archivo tabla-${ base }.txt ha sido creado`);
}); */