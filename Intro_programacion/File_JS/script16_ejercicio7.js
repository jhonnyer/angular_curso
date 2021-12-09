'use strict'
// Tabla de multiplicar de un numero introducido por la pantalla

var numero=parseInt(prompt("De que numero deseas obtener la tabla de multiplicar: ",1));
var i=1;

while(isNaN(numero)){
    numero=parseInt(prompt("introduce un número: ",0));
}

document.write("<h1> La tabla de multiplicar del número "+numero+" es:</h1>"+"<br/>")

for(i;i<=10;i++){
    document.write(i+" x "+numero+" = "+(i*numero)+"<br/>");
}

// TODAS LAS TABLAS DE MULTIPLICAR
var c=1;
for(c;c<=10;c++){
    document.write("<h1> La tabla de multiplicar del número "+c+" es:</h1>"+"<br/>")
    var i=1;
    for(i;i<=10;i++){
        document.write(i+" x "+c+" = "+(i*c)+"<br/>");
    }
}