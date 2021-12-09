//String
var cadena = "Jhonnyer Galindez";
console.log("Variable string: ");
console.log(cadena);
//number
var numero = 12;
console.log(cadena + ". Edad: " + numero);
//Bolenano
var verdadero_falso = true;
console.log("Tipo Boleano: ");
console.log(verdadero_falso);
//Any: Variable con cualquier tipo de dato
var cualquiera = "Hola";
console.log("Tipo any ejemplo 1:");
console.log(cualquiera);
cualquiera = 12;
console.log("Tipo any ejemplo 2: ");
console.log(cualquiera);
// Existen dos formas de definir un array y ambas son validas como un array o como una coleccion 
//1. Array: Tipo array que permite unicamente valores <string>, number, any cualquier dato
var lenguaje = ["PHP", "JS", "CSS"];
// var lenguaje:Array<any>=["PHP","JS","CSS"];
console.log("Tipo Array: ");
console.log(lenguaje);
//2. Array de tipo number pero va a ser una coleccion 
var years = [12, 13, 14];
console.log("Tipo array coleccion: ");
console.log(years);
// Array de cualquier tipo de dato 
var year = ["Dos mil Ocho", 12, 13, 14];
console.log("Tipo array any ");
console.log(year);
// Variable con distinto tipo de datos 
//String o number: Revisar ambas condiciones, si se cumple no genera error
var miltiple_datos = "Jhonnyer Galindez";
console.log("Variable con distinto tipo de datos: ");
console.log(miltiple_datos);
miltiple_datos = 12;
console.log(miltiple_datos);
//String o number: Revisar ambas condiciones, si se cumple no genera error
var variable = "Jhonnyer Galindez";
console.log("Tipo de dato personaliado: ");
console.log(variable);
// DIFERENCIA ENTRE VAR Y LET 
// VAR: A nivel global 
// LET: A nivel de bloque
var numero1 = 10;
var numero2 = 12;
if (numero1 == 10) {
    var numero1_1 = 44;
    var numero2 = 55;
    console.log(numero1_1, numero2);
}
// numero2 es cambiado dentro de la funcion porque el valor es global. Numero 1 dentro de la funcion es a 
// nivel de bloque no cambia fuera de la funcion 
console.log(numero1, numero2);
