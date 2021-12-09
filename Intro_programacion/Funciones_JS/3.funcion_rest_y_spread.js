'use strict'
// Simbolos mayor y menor  que <>
// Defino la funcion 
// Parametros REST Y SPREAD 
// ...rest_frutas: Coloca todos los valores que se estan pasando de las variables 
// definidas en un Array, en este caso se guardan Pera, Melon y Coco  
function listadoFrutas(Fruta1,Fruta2,...rest_frutas){
    console.log("Fruta 1: "+Fruta1);
    console.log("Fruta 2: "+Fruta2);
    console.log(rest_frutas);
}

listadoFrutas("Naranjas", "Manzanas","Pera","Melon","Coco");
// Coleccion de elementos en un Array 
var frutas=["Naranjas","Manzanas"];
// ...frutas pasa como un array los dos valores, najandas como parametro Fruta1 y manzana como Parametro Fruta 2 
listadoFrutas(...frutas,"Sandia","Pera","Melon","Coco");
