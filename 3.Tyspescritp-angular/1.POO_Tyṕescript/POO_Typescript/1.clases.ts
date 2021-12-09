//Clase: Molde del objeto sobre el cual se crean objetos con distintas caracteristicas
// Ejemplo: Clase Camiseta. Empezar siempre con mayuscula por estandar
class Camiseta{
    //Propiedades: Caracteristicas del objeto. String, number u otro es el tipado de la variable
    // Public permite que la variable sea publica y permita acceder desde afeura del fichero,
    // desde la clase actual, desde la clase que hereda y desde otras clases
    // protected significa al metodo desde la clase que lo define y desde la clase que lo hereda 
    // Private solo puede ser acceddido desde la clase que lo define 
    // public color:string; //Metodo publico
    private color:string;
    private modelo:string;
    private marca:string;
    private talla:string;
    private precio:number;

    // Metodos: Funciones o acciones del objeto. Cuando es privado permite crear una funcion para acceder desde afuera de la clase
    public setColor(color){
        this.color=color;//asigno a la propiedad this.color, el valor del color que llega
    }

    // Metodo getColor, la funcion publica getColor permite recuperar el color asignado
    public getColor(){
        return this.color;
    }
}
// Creo el objeto camiseta que accede a la clase Camiseta y sus propiedades
var camiseta=new Camiseta();
// CUANDO LA PROPIEDAD ES PRIVADA SE UTILIZA LA FUNCION CREADA PARA ASIGNAR UN COLOR, EN ESTE CASO SETCOLOR
camiseta.setColor("Rojo");


// ESTE METODO DE ASIGNAR VALORES SE UTILIZA CUANDO LA CLASE ES PUBLICA
// camiseta.color="Rojo";
// camiseta.modelo="Manga Larga";
// camiseta.marca="Nike";
// camiseta.talla="L";
// camiseta.precio=10;

// Ver propiedades del objeto camiseta 
console.log("Objeto camiseta")
console.log(camiseta); //En este caso con private solo muestra la propiedad solicitado del objeto, osea en color
console.log("Metodo getColor() recupera unicamente el valor de esa propiedad color")
console.log(camiseta.getColor()); // Recupera unicamente la propiedad del color

// Crear objeto 2 llamado playera 
var playera=new Camiseta();
playera.setColor("Azul");

// ESTE METODO DE ASIGNAR VALORES SE UTILIZA CUANDO LA CLASE ES PUBLICA
// playera.color="Azul";
// playera.modelo="Manga corta";
// playera.marca="Adidas";
// playera.talla="M";
// playera.precio=14;
// Ver propiedades del objeto playera 
console.log("Objeto playera")
console.log(playera);



