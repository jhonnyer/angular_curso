'use strict'
var edad=18;
var imprime="";

switch(edad){
    case 18: 
        imprime="Acabas de cumplir "+ edad+" años, eres mayor de edad";
    break;
    case 25:
        imprime="Eres una persona adulta";
    break;
    case 40:
        imprime="Acabas de cumplir 40 años";
    break;
    case 75:
        imprime="Eres una persona de adulto mayor";
    break;
    default:
        imprime="Tu edad es neutra";
    break;
}
console.log(imprime);