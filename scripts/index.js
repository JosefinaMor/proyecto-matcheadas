const botonGenerarPiezas = document.getElementById("boton-generar-piezas");
const contenedorPiezasJuego = document.getElementById("contenedor-piezas-juego");

const arrayPiezas = ["fas fa-broom","fas fa-cat","fas fa-crow","fas fa-ghost","fas fa-hat-wizard","fas fa-skull-crossbones","fas fa-book-dead","fas fa-spider"];
//funcionalidad de generar un num al azar para posiciones del array
const generarNroAlAzar = (array) =>{
    return Math.floor(Math.random()*array.length);
}
//funcionalidad de generar piezas al azar
const generarPiezaAlAzar = () =>{
     return arrayPiezas[generarNroAlAzar(arrayPiezas)];
}
//funcionalidad de generar tablero
const generarTablero = () =>{
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            contenedorPiezasJuego.innerHTML = `<div class="pieza"><i class="${generarPiezaAlAzar()}"></i></div>`  
        }
    }
}


botonGenerarPiezas.onclick = generarTablero;