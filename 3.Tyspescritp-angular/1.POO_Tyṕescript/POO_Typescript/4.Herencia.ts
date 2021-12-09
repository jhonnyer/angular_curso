// INTERFACES DE LA CLASE CAMISA. Metodo mas estricto de definir las clases
interface CamisetaBase{
    setColor(color); //setColor y getcolor son metodos definidos en la clase Camnisa, si se colocan mal no funciona
    getColor();
}

//Clase: Molde del objeto sobre el cual se crean objetos con distintas caracteristicas
// CLASE PADRE CAMISAS 
    class Camisetas implements CamisetaBase{

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
    
// CLASE HIJA Sudadera hereda de la clase padre CAMISAS
class Sudadera extends Camisetas{
    public capucha:boolean;
    setCapucha(capucha:boolean){
        this.capucha=capucha;
    }
    getCapucha():boolean{ //devuelve un  valor booleano
        return this.capucha;
    }
}

// Creo el objeto camisas que accede a la clase Camisa y sus propiedades
// Como se definio un constructor de la case Camisa con todas sus propiedades, se debe pasar todos los valores solicitados en la clase 
var camisetas = new Camisetas("Rojo", "Manga Corta", "nike", "L", 13);
console.log(camisetas); //En este caso con private solo muestra las propiedades del objeto solicitado


// crear objeto de sudadera, que trae los metodos de la clase Camiseta herados y los de la clase Sudadera
var sudaderas=new Sudadera("Verde","Deportiva","Nike","M",25);
// Darle un valor a capucha
sudaderas.setCapucha(true); 
console.log(sudaderas);
// sudaderas.capucha=true;
// Tambien puedo cambiar una propiedad al objeto como el color

// Tambien puedo cambiar una propiedad al objeto como el color mediante la funcion heredada de camisetas setColor
sudaderas.setColor("Morado");
console.log(sudaderas)

