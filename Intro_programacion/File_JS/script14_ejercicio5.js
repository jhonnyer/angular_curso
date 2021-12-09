'use strict'
// Mostrar todos los divisores de un numero introducido por el usuario
var numero=parseInt(prompt("Digite un número: ",1));
var i=1;

console.log("los numeros divisores de: "+numero+" son los siguientes:")
for(i;i<=numero;i++){
    if(numero%i==0){    
        console.log("Divisor: "+i); 
    }
}