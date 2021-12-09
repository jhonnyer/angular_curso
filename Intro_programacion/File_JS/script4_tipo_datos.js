'use strict'

var numero1=7;
var numero2=12;
var operacion=numero1+numero2;
// alert("El resultado de la operacion es: "+operacion);

// Tipo de datos
var num_entero=4;
var cad_texto="Hola 'mundo' como estas";
var cad_texto1='Hola "mundo" como estas';
console.log(cad_texto); //resultado: Hola 'mundo' como estas. 
console.log(cad_texto1);

// tipo dato boleano
var verdadero_falso=false;
console.log(verdadero_falso);

// funcion number. Convierte un string en un numero
// funcion parseInt a numero entero 
// function parseFloat a numero decimal 
var numero_falso="33";
console.log(Number(numero_falso)+7);

// convertir un entero a un string 
var numero=8;
// console.log(numero+" Esto es un entero")
console.log(numero+7); //Suma los valores
// Necesito que el numero sea un string y cotanear los  numeros 
console.log("La Cedula es: "+String(numero)+" del cliente "+4);

// Detectar el tipo de variable
console.log(typeof numero);


var comand="curl -H "+'"TECHNICIAN_KEY: ADD8B6BD-46C1-4178-A532-CD8020B1826F"'+" http://demohelpdesk.estrategias.co:9010/api/v3/requests -d 'input_data={"+'"request": {"subject": "Prueba de Integracion API","description": '+'"Esta es una prueba de la API"'+',"requester": {"id": "34212","name": "API - Jhonnyer Galindez","email_id": "sistemas@supergiroscauca.co"},"status": {"name": "Abierto"},"group": {"name": "Soporte REDCA"},"mode":{"id": "1","name": "E-mail"},"priority":{"name": "Baja"},"technician": { "id": "34212","name": "Mesa de Ayuda REDCA"},"email_ids_to_notify": ["sistemas@supergiroscauca.co"]}}'+"'";
console.log(comand);