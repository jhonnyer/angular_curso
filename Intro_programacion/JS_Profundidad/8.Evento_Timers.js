'use strict'
// Evento timers 
window.addEventListener('load',()=>{
    
    // funcion para iniciar el bucle 
    function intervalo() {
        
    // Timers Ejecutar funcion  de callback que permite ejecutar una instruccion de codigo cada x seg
    // setInterval se ejecuta en un bucle muchas veces 
        var tiempo=setInterval(function () {
        // setTimeout se ejecuta solo una vez la funcion 
        // var tiempo=setTimeout(function () {    
            console.log("Set Invervalo ejecutado");
            // var encabezado=document.querySelector("h1").style.fontSize="50px"
            var encabezado=document.querySelector("h1");
            if(encabezado.style.fontSize=="50px"){
                encabezado.style.fontSize="20px";
            }else{
                encabezado.style.fontSize="50px";
            }
            // Se ejecuta cada 2 segundos o 2000 milisegundo 
            }, 1000);
            // devuelve la variable tiempo como resultado 
            return tiempo;
    }
    // devuelve el setInterval 
    var tiempo=intervalo();

    // Funcion para parar el parpadeo mediante un boton 
    var stop=document.querySelector("#stop");
    stop.addEventListener("click",function () {
        alert("El intervalo del bucle ha sido parado")
        clearInterval(tiempo);
        // console.log(tiempo);
    });

    // Funcion para iniciar el parpadeo mediante un boton 
    var start=document.querySelector("#start");
    start.addEventListener("click",function () {
        alert("El intervalo del bucle ha sido iniciado")
        intervalo();
        // console.log(tiempo);
    });
});

