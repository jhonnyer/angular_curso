'use strict'
// localStorage: Guardar informacion en el navegador, uso en aplicaciones con javascript, proyectos stack 
// compartir datos entre sesiones. Memoria del navegador 

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// comprobar si el localStorage esta disponible en el navegador
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
if(typeof(Storage)!='undefined'){
    console.log("Localstorage disponible")
}else{
    console.log("Localstorage no disponible en el navegador")
}

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// Guardar dato en el localStorage del navegador, formato clave valor
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
localStorage.setItem("titulo", "Curso de programacion");

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// Recuperar elemento del localStorage del navegador, formato clave valor
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
console.log(localStorage.getItem("Titulo:"));
// Sacarlo el valor en la pagina web 
document.querySelector("#peliculas").innerHTML=localStorage.getItem("titulo");

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// Guardar objeto en el localStorage
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
var usuario={
    nombre:"Jhonnyer Galindez",
    email:"jhonnyer@gmail.com",
    web:"jhonnyer.com.co"
}
// Respuesta [object:object] NOTA:_Es necesario pasar el objeto en un string o un numero
// localStorage.setItem("usuario",usuario);
// SOLUCION: 
localStorage.setItem("usuario",JSON.stringify(usuario));

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// Recuperar objeto en el localStorage
// Pimero se parsea o se convierte el json string en un objeto 
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
var userjs=JSON.parse(localStorage.getItem("usuario"));
// userjs es un objeto y se accede a cada elemento de el
console.log(userjs);
// document.querySelector("#peliculas").append(" "+userjs.web+" - "+userjs.nombre);
document.querySelector("#datos").append(" "+userjs.web+" - "+userjs.nombre);

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// Borrar elementos del localStorage
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
localStorage.removeItem("usuario");

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// Borrar todos los datos almacenados en el locastorage
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
localStorage.clear();
