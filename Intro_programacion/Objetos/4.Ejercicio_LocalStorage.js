'use strict'
// Tener formulario que permita añadir peliculas 

// capturar datos del formulario 
var formulario=document.querySelector("#formpeliculas");
// añadir datos del formulario al localStorage 
formulario.addEventListener('submit',function (){
    console.log("Entrar")
    // captura datos del evento submit del input con id addpelicula
    var titulo=document.querySelector('#addpelicula').value;
    // Condicion para no almacenar valores vacios en el formulario 
    if(titulo.length>=1){
        // guarda el dato en el localStorage en formato clave valor 
        localStorage.setItem(titulo,titulo);
    }
})

// Mostrar todos los elementos almacenados en el localStorage
// Recorrer el localStorage
var ul=document.querySelector("#peliculas-list")
for(var i in localStorage){
    console.log(localStorage[i]);
    // guardar el dato siempre y cuando el localStorage sea un string en un listado li
    if(typeof localStorage[i]=='string'){
        var li=document.createElement("li");
        li.append(localStorage[i]);
        ul.append(li);
    }   
}


// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// Borrar datos del formulario 
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
var formularioborrar=document.querySelector("#formBorrarpeliculas");
// borrar datos del formulario al localStorage 
formularioborrar.addEventListener('submit',function (){
    console.log("Entrar")
    // captura datos del evento submit del input con id addpelicula
    var titulo=document.querySelector('#Borrarpelicula').value;
    // Condicion para no almacenar valores vacios en el formulario 
    if(titulo.length>=1){
        // guarda el dato en el localStorage en formato clave valor 
        localStorage.removeItem(titulo);
    }
})