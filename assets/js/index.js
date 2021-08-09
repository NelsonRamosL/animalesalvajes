import { Animales, Leon, Lobo, Oso, Serpiente, Aguila } from "./clases.js"; // Dividir el código en módulos 

// funciones
const getPhoto = (() => {  //Realizar por lo menos una función autoejecutable IIFE.
    const url = 'http://localhost:5500/animales.json';
    try {  // Luego mediante el bloque de try/catch 
        const photo = async () => {  //función async/await para obtener las imágenes correspondientes a los animales.
            const response = await fetch(url);   // conectarse a la URL indicada anteriormente con el método fetch
            const data = await response.json(); // utilizando a la vez await
            return data;  // para que retorne directamente el valor de la promesa 
        }
        console.log(photo());
        return photo;
    } catch (err) {
        console.log(err);
    }
})();


const llenarFotografia = async (buscar) => {
    const fotos  = await getPhoto();
    console.log(fotos.animales);
    const resultado = fotos.animales.find((a) => a.name === buscar)
    console.log(resultado);
    preview.innerHTML = `<img id="imagen" src="/assets/imgs/${resultado.imagen}" width="150" datasound="${resultado.sonido}" >`;
};







// main
const animal = document.getElementById("animal");
const edad = document.getElementById("edad");
const player = document.getElementById("player");
const btnRegistrar = document.getElementById("btnRegistrar");
const preview = document.getElementById("preview");
const comentarios = document.getElementById("comentarios");
const Tabla = document.getElementById("Tabla");
let animales = document.getElementById("Animales");
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


        console.log(animalesSalvajes);
        tarjetas();
    } else {
        alert("Seleccione Animal y Edad tambien complete el Comentario");
    }

})


const tarjetas = () => {
    console.log("dentro de targetas");
    animales.innerHTML = '';
    animalesSalvajes.forEach((p, i) => {
        animales.innerHTML += `
    <div class="card col-4" style="width: 5rem;">
          <img src="${p.img}" class="card-img-top" alt="..." >
          <div class="card-body">
            <h5 class="card-title">${p.nombre}</h5>
            <audio id="mireproductor" src="/assets/sounds/${p.sonido}" style=" width:150px;" controls >sonido</audio>
          </div>
    `;


    });

    document.querySelectorAll(".card").forEach((i) => {
        console.log("creando selector");
        i.addEventListener("click", (e) => {
            console.log("dentro del click");
            let modal = document.getElementById("exampleModal");

            $("#exampleModal").modal("toggle");
            modal.innerHTML = `
<div class="modal-dialog modal-dialog-centered w-25" role="document">
      <div class="modal-content bg-dark">
        <div class="modal-body">contenido</div>
      </div>
    </div>`;


        })

    })


}



