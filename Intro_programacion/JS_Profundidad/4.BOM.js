'use stric'

// BOM: Browser Object Model 
function getBOM(){
    // Ver tamaño en pixeles de la pantalla altura
    console.log(window.innerHeight);
    // Ver tamaño en pixeles de la pantalla anchura
    console.log(window.innerWidth);

    // Calcula el tamaño de la pantall 
    console.log(screen.height);
    console.log(screen.width);

    // Sacar la URL que se esta utilizando 
    console.log(window.location);
}

// Redirigir a otra ventana en el navegador 
function redirect(url){
    window.location.href=url;
}
// Abrir una ventana en otra pestaña 
function abrirVentana1(url){
    window.open(url);
}

// Abrir una ventana pequeña en el navegador 
function abrirVentana2(url){
    window.open(url,"","width=300,heigth=200");
}

getBOM();
abrirVentana2('https://www.youtube.com/')