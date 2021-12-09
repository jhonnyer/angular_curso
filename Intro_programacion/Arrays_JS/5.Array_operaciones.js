'use strict'

'use strict'
// Array multidimensional, contiene un array dentro de otro array 
var categorias=['Accion','Terror','Comedia'];
var peliculas=['la verdad duele','La vida es bella','El padrino'];

// cocatena los dos array en uno solo 
var cine=[categorias,peliculas];

// Acceder a las categorias del arrary cine, elemento 0 y al elemento terror de tesoreria 

console.log(cine[0][1]);
console.log(cine[1][2]);

// Introduce un nuevo elemento en el array peliculas 
peliculas.push('Batman');
console.log(peliculas);

var elemento="";
// elemento guarda la informacion del prompt, do primero ejecuta una instruccion hasta que se cumpla la 
// condicion while 
do{
    elemento=prompt("Introduce una pelicula");
    peliculas.push(elemento);
}while(elemento!="ACABAR")

// Elimina el ultimo elemento de un array, en este caso la palabra ACABAR que se añadio de ultimo 
peliculas.pop();

console.log(peliculas);

// eliminar un elemento por el index 
var index=peliculas.findIndex("El padrino");
// si el resultado es -1, quiere decir que no hay el elemento buscado en el array 
if(index>-1){
    // splice permite a partir de un indice borrar cuantos elementos deseom en este caso 1
   peliculas.splice(index,1); 
}
// Convierte un array en un string 
var pelicula_string= peliculas.join();
console.log(pelicula_string);

// Convertir una cadena en un string 
var cadena="texto1, texto2, texto3";
// separar la cadena y guarda los elementos que esten separados por una coma[,] o espacio[ ] 
var cadena_array=cadena.split(", ");
console.log(cadena_array);