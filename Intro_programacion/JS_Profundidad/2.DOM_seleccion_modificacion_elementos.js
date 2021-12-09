'use strict'
// innerHTML permite agregar o cambiar el contenido de un texto 

// Funcion JS para cambia el color 
function cambiaColor(color){
    caja2.style.background=color;
}

// CONSEGUIR ELEMENTOS CON UN ID CONCRETO 
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


// CONSEGUIR ELEMENTO POR SU ETIQUETA
// saca un array de todos los elementos div en la pagina 
var todosDivs=document.getElementsByTagName('div');
console.log(todosDivs);
// mirar el contenido del div seleccionado, en este caso 2
var contenidoDiv=todosDivs[2].textContent;
// Cambiar el texto contenido del div 2 seleccionado  mediante innerHTML
var contenidoDiv=todosDivs[2];
contenidoDiv.innerHTML="Texto DIV 2 ha sido cambiado"
contenidoDiv.style.background="black";
contenidoDiv.style.color="white";
console.log(contenidoDiv);


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

// CONSEGUIR ELEMENTO POR SU CLASE