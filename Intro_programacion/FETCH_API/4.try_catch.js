'use strict'
// controlar errores de codigo, capturarlo y enviar mensaje al usuario 
// try significa prueba de codigo 
try{
    var year=2019;
    // alert(year);
    // error longitud array 
    // var vector=new Array(9999999999999);
    // decodificar el error o cambiar el formato 
    // console.log(decodeURIComponent("https://www.google.com"));
    // captura error url dañada
    // console.log(decodeURIComponent("https://%$www.google.com"));
}catch(error){
    alert("Ha ocurrido un error en el codigo, por favor revisar")
    console.log(error);
}
