'use strict'
// Fetch (Peticiones Ajax o peticiones asincronas a un servidor) y peticiones a servicios API Rest 
// Fetch accede a un servicio remoto 
// es una promesa y se recibe mediante una funcion de callback 
// La promesa captura los datos
// llamamos mediante el query selector el id del div usuarios  
var div_usuarios=document.querySelector("#usuarios");
// creamos un array vacio 
var usuarios=[];
// fetch('https://jsonplaceholder.typicode.com/users')
fetch('https://reqres.in/api/users')
// metodo then recoge los datos en una funcion de callback. 
// En esta funcion los datos son un objeto y se convertien en formato json 
// La funcion flecha hace la misma funcion que el return 
    // .then(function(data){
    //     return data.json();
    // })    
    // Funcion de callaback siguiente es la misma que la Animation, pero mas automatizada    
    .then(data=>data.json())
    .then(users=>{
        // al array susuario le pasamos los datos del objeto data
        usuarios=users.data;
        console.log('Prueba de usuarios')
        console.log(usuarios);
        // map recorre un array similiar a un foreach. 
        // users almacena los datos del array e i es el indice de cada objeto 
        usuarios.map((user,i)=>{
            let nombre=document.createElement('h3');
            // en la variable nombre almacenamos los datos del nombre y apellidos del array de objetos 
            nombre.innerHTML=i+". "+user.first_name+" "+user.last_name;
            // pasamos los datos almacenados en la variable nombre al div #usuarios inicializado anteriormente
            div_usuarios.appendChild(nombre);
            // El siguiente codigo hace que cuando terminen de cargar los datos, el span de cargando los datos desaparece 
            document.querySelector(".loading").style.display='none';
        })
    })
    // Es lo mismo, solo que mas automatizada que la peticion de arriba 
    // .then(data=>{
    //     // al array susuario le pasamos los datos del objeto data
    //     usuarios=data;
    //     console.log(usuarios);
    // })