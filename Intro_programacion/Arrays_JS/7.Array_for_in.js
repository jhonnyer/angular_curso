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


document.write("<ul>");u
// index es el indice del Array, y data muestra los datos del array 
lenguajes.forEach((elemento,index,data)=>{
    console.log(data);
    document.write("<li>"+index+". "+elemento+"</li>");
})

document.write("</ul>");
