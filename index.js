const readXlsxFile = require('read-excel-file/node')
const axios = require('axios').default;
const fs = require('fs');
let final = '[';
// File path.
readXlsxFile('./src/Pacientes_ficha_cero.xlsx').then((rows) => {
  // `rows` is an array of rows
  // each row being an array of cells.
  //console.log(rows[1])
rows.map(data =>{
  data.map(prop=>{if(prop==="null"){prop=""}
  if(prop === "FE"){prop="F"}
  if(prop === "Ma"){prop="M"}
})
  final+=`
  {

    "tipoDocumento": "${data[0]}",
    
    "numeroDocumento": "${data[1]}",
    
    "nombre": "${data[2]}",
    
    "apellidoPaterno": "${data[3]}",
    
    "apellidoMaterno": "${data[4]}",
    
    "telefonoContacto": "${data[5]}",
    
    "emailContacto": "${data[6]}",
    
    "codigoPrevision": "${data[7]}",
    
    "direccion": {
    
    "codigoPais": "nada",
    
    "codigoRegion": "${data[9]}",
    
    "codigoComuna": "${data[10]}",
    
    "calle": "${data[8]}",
    
    "numeroCasa": "${data[14]}",
    
    "numeroDpto": "${data[15]}",
    
    "sector": "${data[16]}"
    
    },
    
    "sexo": "${data[17]}",
    
    "fechaNacimiento": "${data[18]}"
    
    },`
    
    fs.writeFile('datos.json', final, (err) => {
      // throws an error, you could also catch it here
      if (err) throw err;
  
      // success case, the file was saved
      console.log('Completo');
  });
    //final='';
})
})

// // Readable Stream.
// readXlsxFile(fs.createReadStream('./src/Pacientes_ficha_cero.xlsx')).then((rows) => {
//   // `rows` is an array of rows
//   // each row being an array of cells.
//   console.log(rows)
// })