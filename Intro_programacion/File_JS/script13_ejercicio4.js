'use strict'
// Mostrar los numeros impares entre dos numeros introducidos por el usuario 
var numero1=parseInt(prompt("introduce el primer número: ",0));
var numero2=parseInt(prompt("introduce el segundo número: ",0));

document.write("<h1>De "+numero1+" a "+numero2+" están estos números pares: <h1>");
while(numero1<numero2){
    numero1++;
    // Se realiza la division del numero 1 entre 2 y se verifica si es cero o no 
    if(numero1%2!=0){
        console.log("El "+numero1+" es impar");
    }else{
        document.write("El número "+numero1+" es par"+"<br/>");
    }
}