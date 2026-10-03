let fecha = new Date()

console.log("Dia: " + fecha.getDay())
console.log("Mes: " + (fecha.getMonth() + 1))
console.log("Año: " + fecha.getFullYear())

let fechaCompleta = new Intl.DateTimeFormat("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
}).format(fecha);

console.log("Fecha completa: " + fechaCompleta)