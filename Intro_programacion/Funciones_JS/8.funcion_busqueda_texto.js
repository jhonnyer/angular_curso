'use strict'
// Simbolos mayor y menor  que <>
var numero=123;
var texto1="Bienvenidos,";
var texto2="Esta es una tierra de paz y una tierra de amor";

// buscar primer coincidencia de una palabra 
// var busqueda=texto2.indexOf("tierra");

// buscar ultima coincidencia de una palabra 
var busqueda=texto2.lastIndexOf("tierra");

// busca en que posicion aparece la palabra, cuando no existe la palabra devuelve -1 
var busqueda=texto2.search("tierra");

// devuelve la primer coincidencia en un array especificando donde se encuentra
var busqueda=texto2.match("tierra");

// devuelve todas las palabras que coinciden en un array y su posicion
var busqueda=texto2.match(/tierra/g);

// devuelve las palabras de un texto que se encuentra despues de x caracter y el # de caracter que devuelve
var busqueda=texto2.substr(12,6);

// Sirve para sacar una letra en concreto
var busqueda=texto2.charAt(12);

// Sirve para buscar un texto en especifico al unicio de un parrafo, devuelve true o false 
// Ejemplo "es" devuelve true porque esta al incio y "tierra" devuelve false porque no esta al incio 
var busqueda=texto2.startsWith("es");


// Sirve para buscar un texto en especifico al final de un parrafo, devuelve true o false 
var busqueda=texto2.endsWith("amor");


// busca una palabra en especifico si existe, devuelve false o true
var busqueda=texto2.includes("amor");

console.log(busqueda);
