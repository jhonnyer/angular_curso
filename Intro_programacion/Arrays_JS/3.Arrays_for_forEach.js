'use_strict'

// Arrays, arreglos, matrices 
var nombre="Jhonnyer Galindez";
var nombres=["Jhonnyer Galindez","Sandra Sanchez","Juan Lopez","Manuel Lasso",52, true];

var lenguajes=new Array("PHP", "JS", "Go", "java");

document.write("<h1>Lenguajes de programación</h1>");

document.write("<ul>");
// index es el indice del Array, y data muestra los datos del array 
lenguajes.forEach((elemento,index,data)=>{
    console.log(data);
    document.write("<li>"+index+". "+elemento+"</li>");
})

document.write("</ul>");
