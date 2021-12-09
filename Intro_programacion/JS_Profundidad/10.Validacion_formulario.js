'use strict'
// Crear formulario con un input y un evento submit 
// <script type="text/javascript" src="JS_Profundidad/9.Ejercicio_DOM_Evento_funciones.js"></script> 
// Archivo Formulario.html 

window.addEventListener('load',function () {
    console.log("DOM cargado"); 
    // captura los datos del formulario    
    var formulario=document.querySelector("#formulario");
    // capturar el dashed donde se van a ver los datos del formulario 
    var box_dashed=document.querySelector(".dashed");
    // Oculto el dashed antes de enviar los datos del formulario 
    box_dashed.style.display="none";
    formulario.addEventListener('submit',function () {
        console.log("Evento submit capturado");       
        // PAra que no redireccione 
        // return false;
        // Mostrar los datos del formulario 
        var nombre=document.querySelector("#nombre").value;
        var apellido=document.querySelector("#apellidos").value;
        var edad=parseInt(document.querySelector("#edad").value);
        // trim funcion que comprueba que el dato no esta vacion. Trim no puede estar en un campo numerico
        if(nombre.trim()==null || nombre.trim().length==0){
            alert("El nombre no es valido");
            document.querySelector("#error_nombre").innerHTML="El nombre no es valido <br>";
            return false;
        }else{
            // Si tiene un nombre lo oculta 
            document.querySelector("#error_nombre").style.display="none";
        }
        if(apellido.trim()==null || apellido.trim().length==0){
            alert("Los apellidos no son valida");
            return false;
        }
        if(edad==null || edad<=0 || isNaN(edad)){
            alert("La edad no es valida");
            return false;
        }

        // cuando se presione el evento submit se va a mostrar los datos en el dashed
        box_dashed.style.display="block";
        console.log(nombre+" "+apellido+" "+edad);
        
        // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        // Guardo los datos del formulario en un array 
        // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

        // var datos_formulario=[nombre,apellido,edad];
        // var indice;
        // for(indice in datos_formulario){
        //     var parrafo=document.createElement("p");
        //     // guarda los datos del formulario segun el indice en un parrafo 
        //     parrafo.append(datos_formulario[indice]);
        //     box_dashed.append(parrafo);
        // }

        // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        // Mostrar los datos del formulario segun el id de los parrafos creados en la vista 
        // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        // span permite  seleccionar el span de cada elemento 
        var p_nombre=document.querySelector("#p_nombre span");
        var p_apellidos=document.querySelector("#p_apellidos span");
        var p_edad=document.querySelector("#p_edad span");
        p_nombre.innerHTML=nombre;
        p_apellidos.innerHTML=apellido;
        p_edad.innerHTML=edad;

        // introducir los datos uno por uno 
        // parrafo.append(nombre);
        // parrafo.append(apellido);
        // parrafo.append(edad);
        // box_dashed.append(parrafo);
    });
});