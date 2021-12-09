'use_strict'

// Arrays, arreglos, matrices 
var nombre="Jhonnyer Galindez";
var nombres=["Jhonnyer Galindez","Sandra Sanchez","Juan Lopez","Manuel Lasso",52, true];

var lenguajes=new Array("PHP", "JS", "Go", "java");

// var elemento= parseInt(prompt("Indica el elemento del arrar que quieres ver: ",0));
// if(elemento>=nombres.length){
//     alert("Ingresa un numero del elemento correcto, que es menor que "+nombres.length);
// }else{
//     alert("El usuario seleccionado es: "+nombres[elemento]);
// }

document.write("<h1>Lenguajes de programación</h1>");
// document.write(lenguajes[0]+"</br>");
// document.write(lenguajes[1]+"</br>");
// document.write(lenguajes[2]+"</br>");
var i=0;
document.write("<ul>");
for(i;i<lenguajes.length;i++){
    document.write("<li>"+lenguajes[i]+"</li>");
}
document.write("</ul>");
