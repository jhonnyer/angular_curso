'use strict'
// Mostar la media y la suma de los resultados introducidos por el usuarios hasta que este coloque un 
// numero negativo
var suma=0;
var contador=0;

do{
    var numero=parseInt(prompt("Introduce números hasta que se ingrese un valor negativo",0));
    if(isNaN(numero)){
        numero=0;
    }else if(numero>=0){
        // Ambas funciones definidas posteriormente son lo mismo, ambas suman el contador suma + resultado 
        // suma=suma+numero;
        suma+=numero;
        contador++;
        console.log(suma);
        console.log(contador);
    }
}while(numero>=0)
alert("La suma de todos los numeros es: "+suma);
alert("La media de todos los números es: "+(suma/contador));