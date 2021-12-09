'use strict'
// EVentos del raton, cambiar color 
// Se comento para el segundo ejemplo 
// var boton=document.querySelector("#boton");
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


// EVENT LIST, tambien permite capturar eventos. El codigo es mas limpio, elimina codigo spaguetti, 
// utiliza una funcion de callback. Encapsula el codigo en un JS. Un solo click
var boton=document.querySelector("#boton");
boton.addEventListener('click',function(){
    cambiarColor();
});

// Mouse Over. Resalta el boton al pasar el mouse por encima del boton  
boton.addEventListener('mouseover',function(){
    boton.style.background="yellow";
});

// Mouseout, desaparece la funcion mouseover cuando el raton no pasa por el boton 
boton.addEventListener('mouseout',function(){
    boton.style.background="#ccc";
});

