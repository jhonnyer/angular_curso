// Valor por defecto en este caso numero=12
// function getNumero(numero=12){
// Tipado fuerte, donde se le indica el tipo de dato de numero y el tipo de dato que devuelve, en este caso un string 
function getNumero(numero) {
    if (numero === void 0) { numero = 12; }
    return "El numero es: " + numero;
}
console.log(getNumero());
// Le paso un numero por medio de la funcion 
console.log(getNumero(55));
