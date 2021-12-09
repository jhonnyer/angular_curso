'use strict'

// Prueba con var
var numero=40;
console.log(numero);//valor 40
if(true){
    // altero la variable a nivel global
    var numero=50;
    console.log(numero);//valor 50
}
console.log(numero);//valor 50

// Prueba con let 
var texto="Curso js";
console.log(texto); //valor js
if(true){
    let texto="Curso laravel"; //valor laravel
    console.log(texto);
}
console.log(texto);//valor js