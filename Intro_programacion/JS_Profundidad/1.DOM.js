'use strict'


// Funcion JS para cambia el color 
function cambiaColor(color){
    caja2.style.background=color;
}

// // Buscar los elementos que tengas el id micaja 
var caja= document.getElementById("micaja");

// Muestra el texto que tiene el elemento con el id 
var caja1= document.getElementById("micaja").innerHTML;
console.log(caja1);

// Cambia el texto o valor de un DIV
var caja2= document.getElementById("micaja");

// Tambien para seleccion un elemento con querySelector, con almohadilla # 
var caja2=document.querySelector("#micaja");
caja2.innerHTML="Texto prueba DOM desde JS";
// Cambiar el estilo del texto 
caja2.style.background="yellow";
caja2.style.padding="20px";
caja2.style.color="black";
caja2.class="Hola";
// Añadir mas clases 
caja2.className="hola hola2";
console.log(caja2);