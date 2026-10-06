function comprobarNota(nota) {
    if (nota < 0 || nota > 10) {

        alert("Nota fuera de los límites (0-10)")
        return false

    } else if (nota == null || isNaN(nota)) {

        alert("Valor no válido, la nota debe ser numérica")
        return false

    }

    return true
}


function clasificarNota(nota) {
    switch (Math.floor(nota)) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
            return "Suspenso"

        case 5:
        case 6:
            return "Aprobado"

        case 7:
        case 8:
            return "Notable"

        case 9:
        case 10:
            return "Sobresaliente"
    }
}


function calcularMedia(notas) {
    if (notas.length === 0) return null

    let suma = 0
    for (const nota of notas) {
        suma += nota
    }

    return suma / notas.length
}


function pedirNotas() {
    const notas = []
    let fin = false

    while (!fin) {
        const nota = Number(prompt("Introduce una nota de 0 a 10 (-1 para terminar)"))
        

        if (nota === -1) {
            fin = true
        } else if (comprobarNota(nota)) {
            notas.push(nota)
            alert("Nota " + nota + ": " + clasificarNota(nota))
        }
    }

    return notas
}


function mostrarResultados(notas) {
    if (notas.length === 0) {
        alert("No se ha introducido ninguna nota válida.")
        return
    }

    const media = calcularMedia(notas)

    alert(
        "Notas válidas: " + notas.length +
        "\nMedia: " + media.toFixed(2) +
        "\nNota máxima: " + Math.max(...notas) +
        "\nNota mínima: " + Math.min(...notas)
    )
}


mostrarResultados(pedirNotas())