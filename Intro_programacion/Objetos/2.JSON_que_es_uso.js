'use strict'
// json: Siglas de Javascript Objet Notacion de objetos de Javascript
// JSON permite crear objetos de manera simples para estructuracion de datos 
// Pueden haber un array dentro de un objeto o viceversa 
var pelicula={
    titulo:'Batman',
    year:2018,
    pais:'Estados Unidos'
};
// Array de peliculas se le añade el objeto pelicula
// Se convierte en una colecion de objetos 
var peliculas=[
    {titulo: 'Superman', year: 2018, pais: 'Francia'},
    pelicula
]
// Actualiza los campos de un objeto 
// pelicula.title="Superman";

// acceder a las propiedades del objeto pelicula 
// console.log(pelicula);

// Acceder a las propiedades del array peliculas 
console.log(peliculas);

var caja_peliculas=document.querySelector("#peliculas");
var i;
for(i in peliculas){
    var p=document.createElement("p");
    p.append(peliculas[i].titulo+" - "+ peliculas[i].year);
    caja_peliculas.append(p);
}