var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Clase: Molde del objeto sobre el cual se crean objetos con distintas caracteristicas
// CLASE PADRE CAMISAS 
var Camisetas = /** @class */ (function () {
    function Camisetas(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    // Metodos: Funciones o acciones del objeto. Cuando es privado permite crear una funcion para acceder desde afuera de la clase
    Camisetas.prototype.setColor = function (color) {
        this.color = color; //asigno a la propiedad this.color, el valor del color que llega
    };
    // Metodo getColor, la funcion publica getColor permite recuperar el color asignado
    Camisetas.prototype.getColor = function () {
        return this.color;
    };
    return Camisetas;
}());
// CLASE HIJA Sudadera hereda de la clase padre CAMISAS
var Sudadera = /** @class */ (function (_super) {
    __extends(Sudadera, _super);
    function Sudadera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sudadera.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    Sudadera.prototype.getCapucha = function () {
        return this.capucha;
    };
    return Sudadera;
}(Camisetas));
// Creo el objeto camisas que accede a la clase Camisa y sus propiedades
// Como se definio un constructor de la case Camisa con todas sus propiedades, se debe pasar todos los valores solicitados en la clase 
var camisetas = new Camisetas("Rojo", "Manga Corta", "nike", "L", 13);
console.log(camisetas); //En este caso con private solo muestra las propiedades del objeto solicitado
// crear objeto de sudadera, que trae los metodos de la clase Camiseta herados y los de la clase Sudadera
var sudaderas = new Sudadera("Verde", "Deportiva", "Nike", "M", 25);
// Darle un valor a capucha
sudaderas.setCapucha(true);
console.log(sudaderas);
// sudaderas.capucha=true;
// Tambien puedo cambiar una propiedad al objeto como el color
// Tambien puedo cambiar una propiedad al objeto como el color mediante la funcion heredada de camisetas setColor
sudaderas.setColor("Morado");
console.log(sudaderas);
