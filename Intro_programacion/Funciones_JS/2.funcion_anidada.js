'use strict'
// Simbolos mayor y menor  que <>
// Defino la funcion 
// Parametros numero1 y numero2 
// Parametro opcional mostrar 

function PorConsola(numero1,numero2){
    console.log("Prueba consola de la calculadora");
    console.log("Suma "+(numero1+numero2));
    console.log("resta "+(numero1-numero2));
    console.log("Multiplicador "+(numero1*numero2));
    console.log("Division "+(numero1/numero2));
}
function PorPantalla(numero1,numero2){
    document.write("Prueba consola de la calculadora <br/>");
    document.write("Suma "+(numero1+numero2)+"<br/>");
    document.write("resta "+(numero1-numero2)+"<br/>");
    document.write("Multiplicador "+(numero1*numero2)+"<br/>");
    document.write("Division "+(numero1/numero2)+"<br/>");  
}

function calculadora(numero1,numero2, mostrar=false){
    // Conjunto de instrucciones
    if(mostrar==false){
        PorConsola(numero1,numero2);
    }else{
        PorPantalla(numero1,numero2);
    }
    return true;    
}
calculadora(12,8);
calculadora(9,3, true);
