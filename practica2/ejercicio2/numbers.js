let radio = 3.5
console.log("El radio es finito y positivo: " + Number.isFinite(radio))

const pi = 3.14159
let area = pi * Math.pow(radio, 2)

console.log("El area del circulo es: " + area)


console.log("Area en string: " + area.toString())

console.log("Area con tres decimales: " + area.toString().slice(0, 6))

console.log("Area en int: " + Number.parseInt(area))

console.log("Area redondeada: " + Math.floor(area))

console.log("Area multiplicada por un numero aleatorio(1-20): " + (area*(Math.random()*20)))





