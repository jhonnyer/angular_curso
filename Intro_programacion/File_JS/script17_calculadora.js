'use strict'
// Calculadora que pida numero por pantalla, si introduce mal un numero volver a pedirlo
// En el cuerpo de la pagina una alerta y por consola el resultado de sumar , restar,  multiplacar y dividir 

var numero1=parseInt(prompt("Introduce el primer número: ",0));
var numero2=parseInt(prompt("Introduce el segundo número:: ",0));

while(numero1<0 || numero2 <0 ||isNaN(numero1)||isNaN(numero2)){
    numero1=parseInt(prompt("Introduce el primer número:: ",0));
    numero2=parseInt(prompt("Introduce el segundo número:: ",0));;
}

/* <br/> no funciona en consola  */
var resultado="La suma es: "+(numero1+numero2)+"<br/>"+
              "La resta es: "+(numero1-numero2)+"<br/>"+
              "La multiplicación es: "+(numero1*numero2)+"<br/>"+
              "La división es: "+(numero1/numero2)+"<br/>";

// \n salto de linea en cualquier lenguaje, puede ser utilizado en consola
var resultadoA="La suma es: "+(numero1+numero2)+"\n"+
              "La resta es: "+(numero1-numero2)+"\n"+
              "La multiplicación es: "+(numero1*numero2)+"\n"+
              "La división es: "+(numero1/numero2)+"\n";
document.write(resultado);
alert(resultadoA);
