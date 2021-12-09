'use strict'

var year=2018;
// CICLO WHILE INCREMENTO CONTADOR
// while(year<=2051){
//     console.log("Estamos en el año "+year)
//     // contador que permite parar el bucle cuando el año llega a 2051, en la siguiente iteracion el año aumenta en 1
//     year++;
// }
// CICLO WHILE DECREMENTO CONTADOR
// mientras sea diferente a 1991 va a continuar el bucle, cuando sea igual a 1991 se para 
while(year!=1991){
    console.log("Estamos en el año "+year);
    // contador que permite parar el bucle cuando el año llega a 2051, en la siguiente iteracion el año aumenta en 1
    if(year==2000){
        break;
    }
    year--;
}

// CICLO DO WHILE
// var years=30;
// do{
//     alert("Solo cuando sea diferente a 20. Estamos en el año "+years);
//     years--;
// }while(years>25)
