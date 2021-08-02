
/**
 * 1. Crear las clases representadas en el diagrama implementando la herencia indicada.
(2 Puntos)
 */
class Animales {
    constructor(nombre, edad, img, comentarios, sonido) {
        let _nombre = nombre, _edad = edad, _img = img, _comentarios = comentarios, _sonido = sonido;

        this.getNombre = () => _nombre;
        this.getEdad = () => _edad;
        this.getImg = () => _img;
        this.getSonido = () => _sonido;

        this.setComentarios = (nuevoComentario) => { _comentarios = nuevoComentario; }
    }

    get nombre() { return this.getNombre(); }
    get edad() { return this.getEdad(); }
    get img() { return this.getImg(); }
    get sonido() { return this.getSonido(); }

    set comentarios(nuevoComentario) { this.setComentarios(nuevoComentario); }
}


class Leon extends Animales {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }

    Rugir() { console.log("Rugir"); }

}


class Lobo extends Animales {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }

    Aullar() { console.log("Aullar"); }

}

class Oso extends Animales {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }

    Gruñir() { console.log("Gruñir"); }

}

class Serpiente extends Animales {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }

    Sisear() { console.log("Sisear"); }

}

class Aguila extends Animales {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }

    Chillar() { console.log("Chillar"); }

}


export {Animales,Leon,Lobo,Oso,Serpiente,Aguila};