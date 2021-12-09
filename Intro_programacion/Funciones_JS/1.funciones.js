'use strict'
// Simbolos mayor y menor  que <>
// Defino la funcion 
// Parametros numero1 y numero2 
// Parametro opcional mostrar 
function calculadora(numero1,numero2, mostrar=false){
    // Conjunto de instrucciones
    if(mostrar==false){
        console.log("Prueba consola de la calculadora");
        console.log("Suma "+(numero1+numero2));
        console.log("resta "+(numero1-numero2));
        console.log("Multiplicador "+(numero1*numero2));
        console.log("Division "+(numero1/numero2));
    }else{
        document.write("Prueba consola de la calculadora <br/>");
        document.write("Suma "+(numero1+numero2)+"<br/>");
        document.write("resta "+(numero1-numero2)+"<br/>");
        document.write("Multiplicador "+(numero1*numero2)+"<br/>");
        document.write("Division "+(numero1/numero2)+"<br/>");      
    }
    return "Prueba de la calculadora";
    
}
// console.log(calculadora);
// invocar la funcion 
// calculadora();
// Almacenar el valor de la funcion en una variable, retorna el valor del return 
// var resultado=calculadora();
// console.log(resultado);
// Pasar los valores en la calculadora 
calculadora(12,8);
calculadora(9,3, true);
// Ciclo for de la funcion calculadora 
// var i=1;
// for(i;i<=10;i++){
//     console.log(i);
//     calculadora(i,8);
// }