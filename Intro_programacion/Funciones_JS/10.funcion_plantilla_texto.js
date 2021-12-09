'use stric'

var nombre=prompt("Ingresa tu nombre");
var apellido=prompt("Ingresa tus apellidos");
// var texto="Mi nombre es: "+nombre+" <br/>. Mis apellidos son: "+apellido;

// Colocar texto en una multilinea 
var texto=`
    <h1>Hola que tal</h1>
    <h3>Mi nombre es: ${nombre}</h3>
    <h3>Mi apellido es: ${apellido}</h3>
`;
document.write(texto);