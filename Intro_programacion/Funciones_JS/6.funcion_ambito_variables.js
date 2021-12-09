'use strict'
// Simbolos mayor y menor  que <>
// Funcion flecha es una forma de definir funciones de callback de una forma mas limpia y transparente 
// Parametros de funcion anonima suma_muestra y sumaPorDos 
function holamundo(texto){
    var hola_mundo="Texto dentro de una funcion";
    console.log(texto);
    // metodo toString permite convertir un numero en un string 
    console.log(numero.toString());
    console.log(hola_mundo);
}
// variables globales si se pueden acceder desde una funcion 
var numero=12;
var texto="Variable global";
holamundo(texto);

// hola_mundo, Genera error porque no esta definida en un entorno global, sino que esta dentro de una funcion
console.log(hola_mundo);