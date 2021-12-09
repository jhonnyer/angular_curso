// INTERFACES DE LA CLASE CAMISA. Metodo mas estricto de definir las clases
interface CamisetaBase{
    setColor(color); //setColor y getcolor son metodos definidos en la clase Camnisa, si se colocan mal no funciona
    getColor();
}

//Clase: Molde del objeto sobre el cual se crean objetos con distintas caracteristicas
    class Camisas implements CamisetaBase{

        //Propiedades: Caracteristicas del objeto. String, number u otro es el tipado de la variable
        private color:string;
        private modelo:string;
        private marca:string;
        private talla:string;
        private precio:number;
    
        constructor(color,modelo,marca,talla,precio){
            this.color=color;
            this.modelo=modelo;
            this.marca=marca;
            this.talla=talla;
            this.precio=precio;
        }
        // Metodos: Funciones o acciones del objeto. Cuando es privado permite crear una funcion para acceder desde afuera de la clase
        public setColor(color){
            this.color=color;//asigno a la propiedad this.color, el valor del color que llega
        }
    
        // Metodo getColor, la funcion publica getColor permite recuperar el color asignado
        public getColor(){
            return this.color;
        }
    }
    
    // Creo el objeto camisas que accede a la clase Camisa y sus propiedades
    // Como se definio un constructor de la case Camisa con todas sus propiedades, se debe pasar todos los valores solicitados en la clase 
    var camisa = new Camisas("Rojo", "Manga Corta", "nike", "L", 13);
    console.log(camisa); //En este caso con private solo muestra las propiedades del objeto solicitado
    
    // Cambia una propiedad especifica del objeto, en este caso color mediante la funcion definida setColor()
    camisa.setColor("Azul");
    console.log(camisa);
    