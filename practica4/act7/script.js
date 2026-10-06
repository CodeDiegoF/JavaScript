function leerNumero(mensaje){
    const texto = prompt(mensaje)

    if(texto === null || texto.trim() === ""){
        return NaN
    }

    return Number(texto.replace(",", "."))
}


function celsiusAFahrenheit(celsius){
    return celsius * 9 / 5 + 32
}

function fahrenheitACelsius(fahrenheit){
    return (fahrenheit - 32) * 5 / 9
}

function kmAMillas(km){
    return km * 0.621371
}

function millasAKm(millas){
    return millas / 0.621371
}

function eurosADolares(euros, tasa = 1.10){
    return euros * tasa
}

function dolaresAEuros(dolares, tasa = 1.10){
    return dolares / tasa
}

function convertir(conversion, unidad_origen, unidad_destino, usa_tasa){
    const valor = leerNumero("Introduce el valor en " + unidad_origen + ":")

    if(!Number.isFinite(valor)){
        alert("El valor debe ser numérico")
        return
    }

    let tasa

    if(usa_tasa){
        tasa = Number(prompt("Tasa de cambio (dólares por cada euro, vacío = 1.10):"))

        if(isNaN(tasa) || tasa <= 0){
            alert("La tasa debe ser un número mayor que cero")
            return
        }
        
    }

    const resultado = conversion(valor, tasa)

    alert(valor + " " + unidad_origen + " equivalen a " + resultado.toFixed(2) + " " + unidad_destino)
}

function menuConversiones(){
    let opcion

    do {
        opcion = prompt(
            "MENÚ DE CONVERSIÓN" +
            "\n1. Celsius a Fahrenheit" +
            "\n2. Fahrenheit a Celsius" +
            "\n3. Kilómetros a millas" +
            "\n4. Millas a kilómetros" +
            "\n5. Euros a dólares" +
            "\n6. Dólares a euros" +
            "\n7. Salir"
        )

        if(opcion === null){
            opcion = "7"
        }

        switch (opcion) {
            case "1":
                convertir(celsiusAFahrenheit, "°C", "°F", false)
            break

            case "2":
                convertir(fahrenheitACelsius, "°F", "°C", false)
            break

            case "3":
                convertir(kmAMillas, "km", "millas", false)
            break

            case "4":
                convertir(millasAKm, "millas", "km", false)
            break

            case "5":
                convertir(eurosADolares, "euros", "dólares", true)
            break

            case "6":
                convertir(dolaresAEuros, "dólares", "euros", true)
            break

            case "7":
                alert("Hasta pronto")
            break

            default:
                alert("Opción no válida")
        }

    } while (opcion !== "7")
}

menuConversiones()