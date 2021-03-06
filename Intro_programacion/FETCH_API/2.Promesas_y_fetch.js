'use strict'
// Fetch (Peticiones Ajax o peticiones asincronas a un servidor) y peticiones a servicios API Rest 
// es una promesa y se recibe mediante una funcion de callback 
// La promesa captura los datos
// llamamos mediante el query selector el id del div usuarios  
var div_usuarios=document.querySelector("#usuarios");
var div_usuario=document.querySelector("#usuario");
// fetch('https://reqres.in/api/users')
// metodo then recoge los datos en una funcion de callback.
    getUsuarios()
        .then(data=>data.json())
        .then(users=>{
            // a la funcion listadoUsuarios le paso los datos del users.data, del array de objetos data
            listadoUsuarios(users.data);
            console.log('usuarios')
            console.log(usuarios);
            return getUsuario();
        })
        .then(data=>data.json())
        .then(usuario=>{
            MostrarUsuario(usuario.data);
        })
// ENCAPSULA LA FUNCION GET USUARIO DE LA CONSULTA API REST 
function getUsuarios() {
    return fetch('https://reqres.in/api/users');
}

// ENCAPSULA UNA FUNCION GET DE UN SOLO USUARIO DE LA CONSULTA API REST 
function getUsuario() {
    return fetch('https://reqres.in/api/users/2');
}

// Funcion que obtiene el listado de usuarios
// a la funcion listadoUsuarios le paso el array usuarios: users.data
function listadoUsuarios(usuarios) {
    usuarios.map((user,i)=>{
        let nombre=document.createElement('h3');
        // en la variable nombre almacenamos los datos del nombre y apellidos del array de objetos 
        nombre.innerHTML=i+". "+user.first_name+""+user.last_name;
        // pasamos los datos almacenados en la variable nombre al div #usuarios inicializado anteriormente
        div_usuarios.appendChild(nombre);
        // El siguiente codigo hace que cuando terminen de cargar los datos, el span de cargando los datos desaparece 
        document.querySelector(".loading").style.display='none';
    });
}

// Funcion que obtiene un solo usuario en especifico 
//No se utiliza map, porque es un objeto limpio, no es una coleccion de datos
function MostrarUsuario(usuario) {
    console.log(usuario);
    let nombre=document.createElement('h4');
    // Mostrar imagen del usuario 
    let avatar=document.createElement('img');
    // en la variable nombre almacenamos los datos del nombre y apellidos del array de objetos 
    nombre.innerHTML=usuario.first_name+" "+usuario.last_name;
    avatar.src=usuario.avatar;
    avatar.width='100';
    div_usuario.appendChild(avatar);
    // pasamos los datos almacenados en la variable nombre al div #usuarios inicializado anteriormente
    div_usuario.appendChild(nombre);
    // El siguiente codigo hace que cuando terminen de cargar los datos, el span de cargando los datos desaparece 
    document.querySelector("#usuario .loading").style.display='none';
}
    