const botonGenerarPiezas = document.getElementById("boton-generar-piezas");
const contenedorPiezasJuego = document.getElementById("contenedor-piezas-juego");

const arrayPiezas = ["fas fa-broom","fas fa-cat","fas fa-crow","fas fa-ghost","fas fa-hat-wizard","fas fa-skull-crossbones","fas fa-book-dead","fas fa-spider"];

//funcionalidad de generar piezas al azar
const generarPiezaAlAzar = () =>{
    console.log(arrayPiezas[generarNroAlAzar(arrayPiezas)]);
}
const generarNroAlAzar = (array) =>{
    return Math.floor(Math.random()*array.length);
}

botonGenerarPiezas.onclick = generarPiezaAlAzar;