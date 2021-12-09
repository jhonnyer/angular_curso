'use strict'
// innerHTML permite agregar o cambiar el contenido de un texto 

// Funcion JS para cambia el color 
function cambiaColor(color){
    caja2.style.background=color;
}

// CONSEGUIR ELEMENTOS CON UN ID CONCRETO 
// Cambia el texto o valor de un DIV
var caja1= document.getElementById("micaja");
console.log(caja1);

// Tambien para seleccion un elemento con querySelector, con almohadilla # 
var caja2=document.querySelector("#micaja");
console.log(caja2);


// CONSEGUIR ELEMENTO POR SU ETIQUETA
// saca un array de todos los elementos div en la pagina 
var todosDivs=document.getElementsByTagName('div');
console.log(todosDivs);


// Recorrer todos los div por medio de un for in y una funcion de callback y añadirlo en el id seccion
// foreach sirve para array 
var valor;
// crear variable global del id seccion 
var seccion=document.querySelector("#miseccion");
// añadir un hr en el DOM 
var hr=document.createElement("hr");
// seccion.prepend(hr); 
for(valor in todosDivs){
    console.log(todosDivs[valor]);
    // Si los elementos del div son un string hacer las siguientes instrucciones 
    if(typeof todosDivs[valor].textContent=="string"){
        // crea un elemento parrafo <p> 
        var parrafo=document.createElement("p");
        // crea un texto y lo añade al elemento parrafo <p> 
        var texto=document.createTextNode(todosDivs[valor].textContent);
        // añade los elementos del parrafo al id miseccion 
        // parrafo.appendChild(texto);
        // parrafo.prepend(texto); //Añade antes
        // parrafo.append(texto); //Añade despues 
        // document.querySelector("#miseccion").appendChild(parrafo); // AppenChild añade el hr en la seccion antes de añadir el textp
        // document.querySelector("#miseccion").prepend(parrafo); //Añade el hr antes del texto
        parrafo.append(texto);
        seccion.append(parrafo); 
    }
};
seccion.append(hr);

// CONSEGUIR ELEMENTO POR SU CLASE CSS, en este caso clase rojo
var divsAmarillo=document.getElementsByClassName('amarillo');
var divsVerde=document.getElementsByClassName('verde');
// divsRojos[0].style.background="red"; // a un solo elemento
console.log(divsVerde[0]);
divsVerde[0].style.background="green";

// hacer un for in para recorrer el array de los elementos 
var div;
for(div in divsAmarillo){
    console.log(divsAmarillo[div]);
    if(divsAmarillo[div].className=="amarillo"){
        divsAmarillo[div].style.background="yellow";
    }
}
console.log(divsAmarillo);


//Query Selector 
var id=document.querySelector("#encabezado");
console.log(id);
// Solo saca un elemento 
var claseAmarillo=document.querySelector(".amarillo");

// saca un solo div  
var claseAmarillo=document.querySelector("div.amarillo");

// Seleccionar todos los elementos de una clase 
var claseAmarillo2=document.querySelectorAll("div.amarillo");
console.log(claseAmarillo2);