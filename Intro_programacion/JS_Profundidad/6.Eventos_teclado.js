'use strict'
// EVentos del raton, cambiar color 
// Se comento para el segundo ejemplo 
var boton=document.querySelector("#boton");
function cambiarColor(){
    console.log("Has presionado el boton cambiar color");
    // alert("Has presionado el boton cambiar color a amarillo");
    var bg=boton.style.background;
    if(bg=="green"){
        // bg="yellow";
        boton.style.background="yellow";
    }else{
        // bg="blue";
        // console.log("Has presionado el boton cambiar color");
        boton.style.background="green";
        // alert("Has presionado el boton cambiar color a verde");
    }
    // Colocar los estilos en la funcion de manera global 
    boton.style.padding="10px";
    boton.style.borde="1px solid #ccc";
    return true;
}

// FOCUS cuando presiona dentro del input
var input=document.querySelector("#campo_nombre");
input.addEventListener('focus',function(){
    console.log("[focus] Estas dentro del input");
})
// BLUR cuando sale del input 
input.addEventListener('blur',function(){
    console.log("[blur] Estas fuera del input");
})
// Keydown cuando se esta pulsando una tecla y la tecla pulsada
input.addEventListener('keydown',function(event){
    // event permite calcular el evento en la funcion 
    // String.fromCharCode permite capturar las palabras introducidas en el input, en el evento 
    console.log("[keydown] Estas pulsando la tecla ",String.fromCharCode(event.keyCode));
})
// Keypress captura la funcion de una tecla presionada
input.addEventListener('keypress',function(event){
    // event permite calcular el evento en la funcion de una tecla presionada 
    // String.fromCharCode permite capturar las palabras introducidas en el input, en el evento 
    console.log("[keypress] Tecla presionada ",String.fromCharCode(event.keyCode));
})
// Keyup permite capturar el evento cuando se levanta el dedo de la tecla
input.addEventListener('keyup',function(event){
    // event permite calcular el evento 
    // String.fromCharCode permite capturar las palabras introducidas en el input, en el evento 
    console.log("[keyup] Tecla soltada ",String.fromCharCode(event.keyCode));
})