const puntos_por_acierto = 100
const puntos_por_fallo = 10

function generarNumeronum_aleatorio(){
    return Math.floor(Math.random() * 100) + 1
}


function compararIntento(intento, num_aleatorio){
    if(intento < num_aleatorio){
        return "mayor"
    } else if(intento > num_aleatorio){
        return "menor"
    } else {
        return "acierto"
    }
}

function jugarRonda(intentos_maximos){
    const num_aleatorio = generarNumeronum_aleatorio()
    let fallos = 0
    let acierto = false

    while(!acierto && fallos < intentos_maximos){
        const texto = prompt("Adivina el número (1-100). Intentos restantes: " + (intentos_maximos - fallos))

    
        const intento = Number(texto.replace(",", "."))

        if(!(intento >= 1 || intento <= 100)){
            alert("Entrada no válida: introduce un número entero entre 1 y 100")
        } else {
            const resultado = compararIntento(intento, num_aleatorio)

            if(resultado === "acierto"){

                acierto = true
                
            } else {

                fallos++

                if(fallos < intentos_maximos){
                    alert("Prueba con un número " + resultado)
                }
            }
        }
        
    }

    let puntos = -puntos_por_fallo * fallos

    if(acierto){

        puntos += puntos_por_acierto
        alert("¡Acertaste! Era el " + num_aleatorio + ". Fallos: " + fallos)

    } else {

        alert("Te has quedado sin intentos. El número era " + num_aleatorio)
    }

    return puntos
}

function iniciarPartida(dificultad_inicial = "2"){
    let puntuacion = 0
    let dificultad = dificultad_inicial
    let puntos_ronda

    do {
        dificultad = prompt(
            "DIFICULTAD" +
            "\n1. Fácil (10 intentos)" +
            "\n2. Media (5 intentos)" +
            "\n3. Difícil (3 intentos)" +
            "\n4. Salir"
        )

        switch (dificultad) {
            case "1":
                puntos_ronda = jugarRonda(10)
                puntuacion += puntos_ronda
                alert("Puntos de la ronda: " + puntos_ronda + "\nPuntuación acumulada: " + puntuacion)

            case "2":
                puntos_ronda = jugarRonda(5)
                puntuacion += puntos_ronda
                alert("Puntos de la ronda: " + puntos_ronda + "\nPuntuación acumulada: " + puntuacion)


            case "3":
                puntos_ronda = jugarRonda(3)
                puntuacion += puntos_ronda
                alert("Puntos de la ronda: " + puntos_ronda + "\nPuntuación acumulada: " + puntuacion)
            break

            case "4":
                alert("Fin de la partida. Puntuación final: " + puntuacion)
            break

            default:
                alert("Opción no válida")
        }

    } while (opcion !== "4")
}

iniciarPartida()
