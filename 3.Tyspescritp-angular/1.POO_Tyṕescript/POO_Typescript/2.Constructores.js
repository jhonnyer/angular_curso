//Clase: Molde del objeto sobre el cual se crean objetos con distintas caracteristicas
// Export permite exportar la clase Camisa en este caso para ser utilizada en otro fichero 
// export class Camisa{
var Camisa = /** @class */ (function () {
    function Camisa(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    // Metodos: Funciones o acciones del objeto. Cuando es privado permite crear una funcion para acceder desde afuera de la clase
    Camisa.prototype.setColor = function (color) {
        this.color = color; //asigno a la propiedad this.color, el valor del color que llega
    };
    // Metodo getColor, la funcion publica getColor permite recuperar el color asignado
    Camisa.prototype.getColor = function () {
        return this.color;
    };
    return Camisa;
}());
// Creo el objeto camisas que accede a la clase Camisa y sus propiedades
// Como se definio un constructor de la case Camisa con todas sus propiedades, se debe pasar todos los valores solicitados en la clase 
var camisas = new Camisa("Rojo", "Manga Corta", "nike", "L", 13);
console.log(camisas); //En este caso con private solo muestra las propiedades del objeto solicitado
// Cambia una propiedad especifica del objeto, en este caso color mediante la funcion definida setColor()
camisas.setColor("Azul");
console.log(camisas);
