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
        preview.innerHTML = `<img id="imagen" src="/assets/imgs/${resultado.imagen}" width="100" datasound="${resultado.sonido}" >`;
    });


}




// main
const animal = document.getElementById("animal");
const edad = document.getElementById("edad");
const player = document.getElementById("player");
const btnRegistrar = document.getElementById("btnRegistrar");
const preview = document.getElementById("preview");
const comentarios = document.getElementById("comentarios");
const Tabla = document.getElementById("Tabla");
const animalesSalvajes = [];

edad.addEventListener("change", () => {
    console.log("en edad");
    const llenarFoto = llenarFotografia(animal.value);
    console.log("en edad recuperar varReturn", llenarFoto);
})

btnRegistrar.addEventListener("click", () => {

    if (animal.value && edad.value && comentarios) {

        let img = document.getElementById("imagen").getAttribute("src");
        let sonido = document.getElementById("imagen").getAttribute("datasound");
        console.log("Nombre : ", animal.value, "edad : ", edad.value, "imagen : ", img, "comentario :", comentarios.value, "sonido :", sonido);

// 2. Crear las instancias de las clases utilizando los datos del formulario.
        switch (animal.value) {
            case 'Leon':
                animalesSalvajes.push(new Leon(animal.value, edad.value, img, comentarios.value, sonido));
                break;
            case 'Lobo':
                animalesSalvajes.push(new Lobo(animal.value, edad.value, img, comentarios.value, sonido));
                break;
            case 'Oso':
                animalesSalvajes.push(new Oso(animal.value, edad.value, img, comentarios.value, sonido));
                break;
            case 'Serpiente':
                animalesSalvajes.push(new Serpiente(animal.value, edad.value, img, comentarios.value, sonido));
                break;
            case 'Aguila':
                animalesSalvajes.push(new Aguila(animal.value, edad.value, img, comentarios.value, sonido));
                break;
            default:
            // code block
        }


     //   animalesSalvajes.push(new Leon(animal.value, edad.value, img, comentarios.value, sonido));


        console.log(animalesSalvajes)
    } else {
        alert("Seleccione Animal y Edad tambien complete el Comentario");
    }

})