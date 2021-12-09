//Clase: Molde del objeto sobre el cual se crean objetos con distintas caracteristicas
var Camisas = /** @class */ (function () {
    function Camisas(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    // Metodos: Funciones o acciones del objeto. Cuando es privado permite crear una funcion para acceder desde afuera de la clase
    Camisas.prototype.setColor = function (color) {
        this.color = color; //asigno a la propiedad this.color, el valor del color que llega
    };
    // Metodo getColor, la funcion publica getColor permite recuperar el color asignado
    Camisas.prototype.getColor = function () {
        return this.color;
    };
    return Camisas;
}());
// Creo el objeto camisas que accede a la clase Camisa y sus propiedades
// Como se definio un constructor de la case Camisa con todas sus propiedades, se debe pasar todos los valores solicitados en la clase 
var camisa = new Camisas("Rojo", "Manga Corta", "nike", "L", 13);
console.log(camisa); //En este caso con private solo muestra las propiedades del objeto solicitado
// Cambia una propiedad especifica del objeto, en este caso color mediante la funcion definida setColor()
camisa.setColor("Azul");
console.log(camisa);
