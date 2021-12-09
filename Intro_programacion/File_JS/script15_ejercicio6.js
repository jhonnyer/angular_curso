'use strict'

// Programa que diga un numero si es par o impar 
// Comprobar si un numero es valido o no es valido, si no es valido debe pedir de nuevo el numero

var numero1=parseInt(prompt("introduce un número: ",0));

while(isNaN(numero1)){
    numero1=parseInt(prompt("introduce un número: ",0));
}
if(numero1%2==0){
    alert("Es un numero par");
}else{
    alert("Es un numero impar");
}