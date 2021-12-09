'use strict'
// Programa que pida dos numeros y que diga cual es mayor o menor y si son iguales
// PLUS: Si los numeros no son un numero o son menores o iguales que cero, volver a pedir los numeros 
var numero1=parseInt(prompt("Escriba el primer numero ",0));
var numero2=parseInt(prompt("Escribe el segundo número ",0));

console.log("Número uno ingresado es: "+ numero1, "Número dos ingresado es: "+numero2);

while(numero1<=0 || numero2<=0 || isNaN(numero2)|| isNaN(numero1)){
    numero1=parseInt(prompt("Escriba el primer numero ",0));
    numero2=parseInt(prompt("Escribe el segundo número ",0));
}

if(numero1==numero2){
    alert("Los número son iguales");
}else if(numero1>numero2){
    alert("El número mayor es: "+numero1);
    alert("El número menor es: "+numero2);
}else if(numero1<numero2){
    alert("El número mayor es: "+numero2);
    alert("El número menor es: "+numero1);
}else{
    alert("Introduce un numero correcto");
}

