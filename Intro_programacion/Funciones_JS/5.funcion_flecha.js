'use strict'
// Simbolos mayor y menor  que <>
// Funcion flecha es una forma de definir funciones de callback de una forma mas limpia y transparente 
// Parametros de funcion anonima suma_muestra y sumaPorDos 
function sumame(numero1,numero2, suma_muestra, sumaPorDos){
    var sumar=numero1+numero2;
    // invovar funciones suma_muestra y sumaPorDos
    suma_muestra(sumar);
    sumaPorDos(sumar);
    return sumar;
}
// Se pasa una function de Callback de dos funciones anonimas 
// primer funcion recibe el tercer parametro de la funcion suma_muestra 
sumame(5,7,dato=>{
    console.log("la suma es: "+dato);
},
// funcion que recibe el cuarto parametro sumaPorDos 
dato=>{
    console.log("La suma por dos es: "+dato*2);
}
)
// console.log(sumame(4,5));