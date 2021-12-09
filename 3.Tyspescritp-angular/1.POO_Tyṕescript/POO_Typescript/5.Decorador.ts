// INTERFACES DE LA CLASE CAMISA. Metodo mas estricto de definir las clases
interface CamisetaBase{
    setColor(color); //setColor y getcolor son metodos definidos en la clase Camnisa, si se colocan mal no funciona
    getColor();
}

// DECORADOR: Adiciona una funcionalidad extra a la clase
function estampar(logo:string){
    return function(target:Function){//Funcion anonima que recibe una funcion 
        target.prototype.estampacion=function():void{ //void significa que no tiene ninguna respuesta
            console.log("Camiseta estampada con el logo de: "+logo);
        }
    }
}

//Clase: Molde del objeto sobre el cual se crean objetos con distintas caracteristicas
// CLASE PADRE CAMISAS 
// Aplico el decorador a la clase Camisetas 
// @estampar("Gucci Gang")
class Camisetas1 implements CamisetaBase{
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
class Sudaderas extends Camisetas1{
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
var camisetas1 = new Camisetas1("Rojo", "Manga Corta", "nike", "L", 13);
console.log(camisetas1); //En este caso con private solo muestra las propiedades del objeto solicitado

// Aplicar el decorador a la clase Camisetas1
// camisetas1.estampacion(); //Adiciona esa funcionalidad a la clase Camiseteas1


// crear objeto de sudadera, que trae los metodos de la clase Camiseta herados y los de la clase Sudadera
var sudadera=new Sudaderas("Verde","Deportiva","Nike","M",25);
// Darle un valor a capucha
sudadera.setCapucha(true); 
console.log(sudadera);
// sudaderas.capucha=true;
// Tambien puedo cambiar una propiedad al objeto como el color

// Tambien puedo cambiar una propiedad al objeto como el color mediante la funcion heredada de camisetas setColor
sudadera.setColor("Morado");
console.log(sudadera)

