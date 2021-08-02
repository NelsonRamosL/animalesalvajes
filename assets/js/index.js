/** 
 * 5. Dividir el código en módulos 
 */
import { Animales, Leon, Lobo, Oso, Serpiente, Aguila } from "./clases.js";

// funciones

/** 
 * Realizar por lo menos una función autoejecutable IIFE.
 */
(function () { })();

const url = 'http://localhost:5500/animales.json';
const getPhoto = async () => {
    /**
        Realizar una consulta asíncrona utilizando una función async/await para obtener las
    imágenes correspondientes a los animales.
     */
    try {
        const response = await fetch(url); // Luego mediante el bloque de try/catch conectarse a la URL indicada anteriormente con el método fetch
        const photo = await response.json(); // utilizando a la vez await
        // console.log(photo);
        return photo;  // para que retorne directamente el valor de la promesa 
    } catch (err) {
        console.log(err);
    }
}


const llenarFotografia = (buscar) => {


    getPhoto().then(resp => {
        const resultado = resp.animales.find((Animales) => Animales.name === buscar);
        console.log(resultado);
        preview.innerHTML = `<img src="/assets/imgs/${resultado.imagen}" width="100">`;
    });



    console.log("llenarFotografia");
}




// main
const animal = document.getElementById("animal");
const edad = document.getElementById("edad");
const player = document.getElementById("player");
const btnRegistrar = document.getElementById("btnRegistrar");
const preview = document.getElementById("preview");
const comentarios = document.getElementById("comentarios");
const Tabla = document.getElementById("Tabla");
const animalesSalvajes =[];

edad.addEventListener("change", () => {
    console.log("en edad");
    const llenarFoto = llenarFotografia(animal.value);
})

btnRegistrar.addEventListener("click", () => {
    console.log("boton");


})