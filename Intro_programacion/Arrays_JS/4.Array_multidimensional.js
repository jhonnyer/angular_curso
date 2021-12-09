'use strict'
// Array multidimensional, contiene un array dentro de otro array 
var categorias=['Accion','Terror','Comedia'];
var peliculas=['la verdad duele','La vida es bella','El padrino'];

// cocatena los dos array en uno solo 
var cine=[categorias,peliculas];

// Acceder a las categorias del arrary cine, elemento 0 y al elemento terror de tesoreria 

console.log(cine[0][1]);
console.log(cine[1][2]);