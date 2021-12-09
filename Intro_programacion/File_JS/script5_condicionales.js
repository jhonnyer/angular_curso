'use strict'

var edad1=14;
var edad2=12;

var nombre='David Suarez';

// Mayor que >
// Menor que <
// Mayor o igual >=
// Menor o igual <=
// Igual ==
// Diferente =!

if(edad1>edad2){
    console.log("Edad 1 es mayor que edad 2");
}else{
    console.log("La edad 1 es menor que la edad 2");
}

// if(edad1>=18){
//     console.log(nombre+" es mayor de edad y tiene " +edad1+" años");
// }else{
//     console.log("Es menor de eddad, y tiene "+edad1+" años");
// }

// Anidacion de if dentro de otro if
if(edad1>=18){
    console.log(nombre+" es mayor de edad y tiene " +edad1+" años");
    if(edad1<=33){
        console.log("Eres una persona menor de 30 años");
    }else if(edad1>=70){
        console.log("Eres una persona mayor de edad");
    }else{
        console.log("Eres una persona mayor de 30 años");
    }
}else{
    console.log("Es menor de edad, y tienes "+edad1+" años");
}

// Operadores logicos
// AND(Y) &&
// OR(0) ||
// Negacion !

// Negacion
var year=2028;
if(year!=2016){
    console.log("El año no es 2016. Estamos en el año: "+year);
}

// AND
if(year>=2000 && year<=2020){
    console.log("Estamos en el siglo XXI")
}else{
    console.log("Estamos en la era post moderna");
}

// OR
if(year==2008||year==2018){
    console.log("La fecha del año termina en 8");
}else{
    console.log("la fecha del año es distinta a 2008 o 2018")
}

// OR ANIDADO 
// Si el año es igual a 2008 e igual al año 2028 entrega el pŕimer mensaje
// si el año es mayor o igual a 2018 indica el segundo mensaje, el año no esta registrado 
if(year==2008|| (year>=2018 && year==2028)){
    console.log("La fecha del año termina en 8");
}else{
    console.log("Año no registrado");
}