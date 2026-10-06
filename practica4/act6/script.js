let distancia
let consumo
let precio_combustible
let numero_viajeros

do {
    distancia = Number(prompt("Distancia del viaje:(Km)"))
    consumo = Number(prompt("Consumo del vehículo:(L cada 100Km)"))
    precio_combustible = Number(prompt("Precio del combustible (vacío = 1):"))
    numero_viajeros = Number(prompt("Número de viajeros"))
} while (!validarValores(distancia, consumo, precio_combustible, numero_viajeros))

function litrosNecesarios(distancia, consumo){
    return distancia * consumo / 100
}

function costeViaje(precio_combustible = 1, distancia, consumo){
    let litros = litrosNecesarios(distancia, consumo)
    return precio_combustible * litros
}

function costePorViajero(costeTotal, numero_viajeros){
    return costeTotal / numero_viajeros
}

function validarValores(distancia, consumo, precio_combustible, numero_viajeros){

    if(isNaN(distancia) || distancia <= 0){
        alert("La distancia debe ser un número mayor que cero")
        return false
    }

    if(isNaN(consumo) || consumo <= 0){
        alert("El consumo debe ser un número mayor que cero")
        return false
    }

    if((isNaN(precio_combustible) || precio_combustible <= 0)){
        alert("El precio debe ser un número mayor que cero")
        return false
    }

    if(!Number.isInteger(numero_viajeros) || numero_viajeros <= 0){
        alert("El número de viajeros debe ser un entero mayor que cero")
        return false
    }

    return true
}


function mostrarResultados (distancia, consumo, precio_combustible, numero_viajeros){

    const litros = litrosNecesarios(distancia, consumo)
    const costeTotal = costeViaje(precio_combustible, distancia, consumo)
    const costeViajero = costePorViajero(costeTotal, numero_viajeros)

    alert(
        "Combustible estimado: " + litros.toFixed(2) + " L" +
        "\nCoste total: " + costeTotal.toFixed(2) + " €" +
        "\nCoste por viajero: " + costeViajero.toFixed(2) + " €"
    )

}

mostrarResultados(distancia, consumo, precio_combustible, numero_viajeros)