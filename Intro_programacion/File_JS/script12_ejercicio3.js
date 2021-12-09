'use strict'
// programa que muestre los numeros que estan en el medio de dos numeros introducidos por el usuario 

var numero1=parseInt(prompt("introduce el primer número: ",0));
var numero2=parseInt(prompt("introduce el segundo número: ",0));

document.write("<h1>De "+numero1+" a "+numero2+" están estos números: <h1>");
var i=numero1+1;
for(i;i<numero2;i++){
    document.write(i+"<br/>");
}