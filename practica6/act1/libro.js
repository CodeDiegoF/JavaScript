class Libro {
    constructor(titulo, autor, num_paginas) {

        if (titulo === null || titulo === undefined) {
            throw new Error("El titulo no puede estar vacio")
        }

        if (autor === null || autor === undefined) {
            throw new Error("El autor no puede estar vacio")
        }

        if (isNaN(num_paginas)) {
            throw new Error("El numero de páginas debe der ser numérico")
        }

        this.titulo = titulo
        this.autor = autor
        this.num_paginas = num_paginas


    }

    describir() {
        document.body.innerHTML += ("\nTítulo: " + this.titulo + "Autor: " + this.autor + "Número de páginas: " + this.num_paginas)
    }

    esExtenso() {
        if (this.num_paginas >= 300) {
            document.body.innerHTML += ("\nEl libro " + this.titulo + " es extenso: " + this.num_paginas)
        }
    }

}

