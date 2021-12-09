'use strict'
// operador this: hace referencia al objeto del cual se esta haciendo click o se esta usando una funcion

// Evento lOAD se lanza cuando todos los elementos y etiquetas del DOM y BOM han sido cargados 
// Permite cargar el script en el HEAD del HTML 
window.addEventListener('load',()=>{
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
        // boton.style.border="10px solid black"
        // Operador this hace referencia al objeto boton que se esta haciendo referencia 
        console.log(this)
        this.style.border="10px solid black";
    });
});

