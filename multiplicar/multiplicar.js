// requireds
const fs = require("fs");
const colors = require('colors');
// const ex = require('express); son archivos que no son propios de Node
// const fs = require('./fs'); son archivos creados por nosotros se distinguen por ./ ó ../

let listarTabla = (base, limite = 10) => {
    console.log('=============='.green);
    console.log(`tabla del ${ base }`.green);
    console.log('=============='.green);
    for (let i = 1; i <= limite; i++) {
        console.log( `${ base } * ${ i } = ${ base * i }`);
      }
}

let crearArchivo = (base, limite = 10) => {
  return new Promise((resolve, reject) => {

    if( !Number(base)){
        reject(`El valor introducido ${ base } no es un número`);
        return;
    }
    
    let data = "";

    for (let i = 1; i <= limite; i++) {
      data += `${base} * ${i} = ${base * i}\n`;
    }

    fs.writeFile(`tablas/tabla-${base}-al-${ limite }.txt`, data, err => {
    if (err) 
        reject (err)
    else
        resolve(colors.green(`tabla-${base}-al-${ limite }.txt`));
      
    });
  });
}

module.exports = {
    crearArchivo,
    listarTabla
}