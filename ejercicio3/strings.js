let nombre = "Diego"
let apellidos = " Fernández Arenas"


console.log(nombre + apellidos)

console.log((nombre + apellidos).length)

console.log((nombre + apellidos).slice(8, 11))

console.log((nombre + apellidos).replace("Arenas", " Lietor"))

console.log((nombre + apellidos).toUpperCase())

console.log((nombre + apellidos).charAt(21))

let nombreCompleto = ["diego", "fernández", "arenas"]
console.log(nombreCompleto.join(" ").split(" "))

console.log((nombre + apellidos).split(" ").indexOf("Fernández"))

let saludo = "Bienvenido"
console.log(saludo.concat(" " + nombre + apellidos))

nombreCompleto[0] = nombreCompleto[0].charAt(0).toUpperCase() 
nombreCompleto[1] = nombreCompleto[1].charAt(0).toUpperCase() 
nombreCompleto[2] = nombreCompleto[2].charAt(0).toUpperCase()

console.log(nombreCompleto)







