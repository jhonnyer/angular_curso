'use strict'
// Simbolos mayor y menor  que <>
var numero=123;
var texto1="Bienvenidos,";
var texto2="Esta es una tierra de paz";

var dato=numero.toString();
    // convertir en mayusculas 
    // dato=texto1.toUpperCase();
    // convertir en minuscula 
    dato=texto2.toLowerCase();
console.log(dato);

// calcular longitud que tiene un texto. Funcion Length 
var nombre="Jhonnyer Fernando Galindez";
// Cuenta los elementos en un array 
// var nombre=["Hola","Mundo"];
console.log(nombre.length);

// var texto_Total=texto1+" "+texto2;
// Tambien para concatenar sirve el metodo concat 
var texto_Total=texto1.concat(" "+texto2);
console.log(texto_Total);