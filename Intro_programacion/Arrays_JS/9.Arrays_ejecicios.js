'use stric'

// Pedir 6 numeros por pantalla y guardar en un Array
// Mostrar el array enetero en el cuerpo de la pagina y la consola
// Ordenar el array y mostrarlo
// Invertir su orden y mostrarlo
// Mostrar cuantos elementos tiene el array 
// Buscar un valor introducido por el usuario, que diga si el elemento esta y en que posicion 

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

// Funcion global creada para mostrar el array, funcion generica
// Texto custom genera un dato sin interes en un principio, va a guardar el array que se desea mostrar
// Elemento guarda el array 
function mostrarArray(elemento, textoCustom=""){
    document.write("<h1>Contenido del Array mediante la funcion mostrar y los datos "+textoCustom+"</h1>");
    document.write("<ul>")
    numeros1.forEach((elemento,index)=>{
    document.write("<li>"+elemento+"</li></br>");
    });
    document.write("</ul>")

}
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// Primer forma de crear un array 
alert("Primer array creado")
var numeros1=new Array(6);
for(var i=0;i<=5;i++){  
    numeros1[i]=parseInt(prompt("Introduce un número",0));
}
console.log("Array 1 creado");
console.log(numeros1);

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

// Segunda forma mediante un push, se crea un array vacion 
alert("Segundo array creado")
var numeros2=[];
for(var i=0;i<=5;i++){  
    numeros2.push(parseInt(prompt("Introduce un número",0)));
}
console.log("Array 2 creado");
console.log(numeros2);
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
alert("Array cocatenados")
var numeros=(numeros1+", "+numeros2);
console.log("Arrays concatenados");
console.log(numeros);

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// Mostrar en el cuerpo de la pagina mediante una funcion flecha 
document.write("<h1>Contenido del Array</h1>");
numeros1.forEach((numero,index)=>{
    document.write("<strong>"+numero+"</strong></br>");
})

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// Ordenar y mostrar el array 
numeros2.sort();
console.log("Array 2 ordenado de manera alfabetica");
console.log(numeros2);

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// Paso los datos a la funcion mostrarArray para visualizar en pantalla 
// primero ordeno los datos del array de manera alfabetica el primer indice 
numeros1.sort();
// segundo parametro que se pasa a la funcion es el textoCustom que es un string y sale en la pantalla 
mostrarArray(numeros1," ordenados");

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// Ordenar segundo array de manera numerica 
// orden descendente return b-a 
numeros2.sort(function(a, b){return a-b});
// // segundo parametro que se pasa a la funcion es el textoCustom que es un string y sale en la pantalla 
// // Ejemplo: 1, 11, 3, 4, 556, 567, 7 
mostrarArray(numeros2," ordenadada de manera númerica");

// Invertir el orden y mostrar el array 

numeros1.reverse();
mostrarArray(numeros1,' ordenados de manera revertida')

// Contar los elementos del array
document.write("Cantidad de numeros digitados en el array 1 es: "+numeros1.length);

// Buscar un numero en el array 
var busqueda=parseInt(prompt("Digite el número que desea buscar",0));
console.log(busqueda);
var posicion=numeros1.findIndex(numero=>numero==busqueda);
console.log(posicion);
// si es -1 quiere decir que el elemento no se encuentra en el array 
// si posicion, encuentra el index del elemento buscado y es diferente a -1, encontro el elemento en el array 
if(posicion && posicion!=-1){
    document.write("<hr/><h1>Elemento encontrado</h1>");
    document.write("<h1>La posicion de la busqueda es: "+posicion+". El elemento filtrado es: "+numeros1[posicion]+"</h1><hr/>");
}else{
        document.write("<hr/><h1>Elemento no ha sido encontrado</h1><hr/>");
}

// En el archivo principal de JS del backend 
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
