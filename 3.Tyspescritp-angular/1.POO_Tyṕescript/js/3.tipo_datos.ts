//String
let cadena:string="Jhonnyer Galindez";
console.log("Variable string: ");
console.log(cadena);

//number
let numero:number=12;
console.log(cadena +". Edad: "+ numero);

//Bolenano
let verdadero_falso:boolean=true;
console.log("Tipo Boleano: ");
console.log(verdadero_falso);

//Any: Variable con cualquier tipo de dato
let cualquiera:any="Hola";
console.log("Tipo any ejemplo 1:");
console.log(cualquiera);
cualquiera=12;
console.log("Tipo any ejemplo 2: ");
console.log(cualquiera);

// Existen dos formas de definir un array y ambas son validas como un array o como una coleccion 
//1. Array: Tipo array que permite unicamente valores <string>, number, any cualquier dato
var lenguaje:Array<string>=["PHP","JS","CSS"];
// var lenguaje:Array<any>=["PHP","JS","CSS"];
console.log("Tipo Array: ");
console.log(lenguaje);

//2. Array de tipo number pero va a ser una coleccion 
let years:number[]=[12,13,14];
console.log("Tipo array coleccion: ");
console.log(years);

// Array de cualquier tipo de dato 
let year:any[]=["Dos mil Ocho",12,13,14];
console.log("Tipo array any ");
console.log(year);

// Variable con distinto tipo de datos 
//String o number: Revisar ambas condiciones, si se cumple no genera error
let miltiple_datos:string | number="Jhonnyer Galindez";
console.log("Variable con distinto tipo de datos: ");
console.log(miltiple_datos);

miltiple_datos=12;
console.log(miltiple_datos);

// TIPO DE DATOS PERSONALIZADOS. Encapsulo la condicion en un typo de dato 
type letras_numeros=string|number;
//String o number: Revisar ambas condiciones, si se cumple no genera error
let variable:letras_numeros="Jhonnyer Galindez";
console.log("Tipo de dato personaliado: ");
console.log(variable);

// DIFERENCIA ENTRE VAR Y LET 
// VAR: A nivel global 
// LET: A nivel de bloque

var numero1=10;
var numero2=12;

if(numero1==10){
    let numero1=44;
    var numero2=55;
    console.log(numero1, numero2);
}
// numero2 es cambiado dentro de la funcion porque el valor es global. Numero 1 dentro de la funcion es a 
// nivel de bloque no cambia fuera de la funcion 
console.log(numero1, numero2);