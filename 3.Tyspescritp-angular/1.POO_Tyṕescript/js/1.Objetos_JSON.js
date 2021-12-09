console.log("Clase js");
var bicicleta={
    color:'rojo',
    modelo:'BMX',
    frenos:'Disco',
    velocidadMaxima:'60km/h',
    cambiarColor:function(nuevo_color){
        // bicicleta.color=nuevo_color;
        this.color=nuevo_color;
        // console.log(this);
    }
};
// Muestra el color original del atributo en un principio: rojo 
console.log(bicicleta);

// Invocar metodo cambiar color para cambiar un atributo al objeto bicicleta 
bicicleta.cambiarColor("Azul");
console.log(bicicleta);

// Cambiar el atributo color directamente en el codigo 
bicicleta.color="Amarillo";
console.log(bicicleta);