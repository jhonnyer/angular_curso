var fecha=new Date();
var year=fecha.getFullYear();
var mes=fecha.getMonth();
var dia=fecha.getDate();
var hora=fecha.getHours();
var minutos=fecha.getUTCMinutes();
var textoHora=`
    El año es:${year}
    El mes es:${mes}
    El dia es:${dia}
    La hora es:${hora}:${minutos}
    `;
console.log(fecha);
console.log(textoHora);