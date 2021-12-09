'use_strict'

// Arrays, arreglos, matrices 
var nombre="Jhonnyer Galindez";
var nombres=["Jhonnyer Galindez","Sandra Sanchez","Juan Lopez","Manuel Lasso",52, true];

var lenguajes=new Array("PHP", "JS", "Go", "java");

document.write("<h1>Lenguajes de programación</h1>");

document.write("<ul>");
// lenguaje es el indice del array que es pasado en el for para mostrar los elementos del array lenguajes 
for(let lenguaje in lenguajes){
    document.write("<li>"+lenguaje+". "+lenguajes[lenguaje]+"</li>");
}
document.write("</ul>");


// Busquedas por medio de funcion de callback llamada lenguaje que realiza una comparacion con un strin llamado PHP
var busqueda=lenguajes.find(function(lenguaje){
    return lenguaje="PHP";
})
console.log(busqueda);


// Busqueda por medio de una funcion de flecha lenguaje que apunta a una condicion si es igual al string PHP 
var busqueda=lenguajes.find(lenguaje=>lenguaje=="PHP");
console.log(busqueda);

// Busqueda por index del elemento 
var busqueda=lenguajes.findIndex(lenguaje=>lenguaje=="PHP");
console.log(busqueda);

var precios=[10,20,30,40,50];
// Buscar si en el array existe un elemento  que cumpla x condicion. Resultado ejemplo true 
var busqueda=precios.some(precio=>precio>=10);
console.log(busqueda);