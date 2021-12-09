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
// DECORADOR: Adiciona una funcionalidad extra a la clase
function estampar(logo) {
    return function (target) {
        target.prototype.estampacion = function () {
            console.log("Camiseta estampada con el logo de: " + logo);
        };
    };
}
//Clase: Molde del objeto sobre el cual se crean objetos con distintas caracteristicas
// CLASE PADRE CAMISAS 
// Aplico el decorador a la clase Camisetas 
// @estampar("Gucci Gang")
var Camisetas1 = /** @class */ (function () {
    function Camisetas1(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    // Metodos: Funciones o acciones del objeto. Cuando es privado permite crear una funcion para acceder desde afuera de la clase
    Camisetas1.prototype.setColor = function (color) {
        this.color = color; //asigno a la propiedad this.color, el valor del color que llega
    };
    // Metodo getColor, la funcion publica getColor permite recuperar el color asignado
    Camisetas1.prototype.getColor = function () {
        return this.color;
    };
    return Camisetas1;
}());
// CLASE HIJA Sudadera hereda de la clase padre CAMISAS
var Sudaderas = /** @class */ (function (_super) {
    __extends(Sudaderas, _super);
    function Sudaderas() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sudaderas.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    Sudaderas.prototype.getCapucha = function () {
        return this.capucha;
    };
    return Sudaderas;
}(Camisetas1));
// Creo el objeto camisas que accede a la clase Camisa y sus propiedades
// Como se definio un constructor de la case Camisa con todas sus propiedades, se debe pasar todos los valores solicitados en la clase 
var camisetas1 = new Camisetas1("Rojo", "Manga Corta", "nike", "L", 13);
console.log(camisetas1); //En este caso con private solo muestra las propiedades del objeto solicitado
// Aplicar el decorador a la clase Camisetas1
// camisetas1.estampacion(); //Adiciona esa funcionalidad a la clase Camiseteas1
// crear objeto de sudadera, que trae los metodos de la clase Camiseta herados y los de la clase Sudadera
var sudadera = new Sudaderas("Verde", "Deportiva", "Nike", "M", 25);
// Darle un valor a capucha
sudadera.setCapucha(true);
console.log(sudadera);
// sudaderas.capucha=true;
// Tambien puedo cambiar una propiedad al objeto como el color
// Tambien puedo cambiar una propiedad al objeto como el color mediante la funcion heredada de camisetas setColor
sudadera.setColor("Morado");
console.log(sudadera);
