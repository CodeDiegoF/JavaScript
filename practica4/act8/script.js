function analizar(...numeros){

    if(numeros.length === 0){
        return null
    }

    let suma = 0
    let minimo = numeros[0]
    let maximo = numeros[0]

    for(let i = 0; i < numeros.length; i++){

        if(!Number.isFinite(numeros[i])){
            return null
        }

        suma += numeros[i]

        if(numeros[i] < minimo){
            minimo = numeros[i]
        }

        if(numeros[i] > maximo){
            maximo = numeros[i]
        }
    }

    return {
        suma: suma,
        media: suma / numeros.length,
        minimo: minimo,
        maximo: maximo
    }
}

function mostrarResultados(analizar){

    if(analizar === null){
        return "No hay datos o hay valores no válidos"
    }

    return "Suma: " + analizar.suma +
        "\nMedia: " + analizar.media.toFixed(2) +
        "\nMínimo: " + analizar.minimo +
        "\nMáximo: " + analizar.maximo
}

const lista = [3, -7, 10, 0]
const lista_vacia = []

alert("Argumentos directos:\n" + mostrarResultados(analizar(4, 8, 15, 16, 23, 42)))
alert("Array con spread:\n" + mostrarResultados(analizar(...lista)))
alert("Array vacío con spread:\n" + mostrarResultados(analizar(...lista_vacia)))
alert("Un único número:\n" + mostrarResultados(analizar(5)))
alert("Valores repetidos:\n" + mostrarResultados(analizar(1, 2, 2, 3)))
alert("Números negativos:\n" + mostrarResultados(analizar(-3, -8, -1)))
alert("Valor inválido (texto):\n" + mostrarResultados(analizar(1, 2, "tres")))
