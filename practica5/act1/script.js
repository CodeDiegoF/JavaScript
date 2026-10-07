const lista = ["sol", "montaña", "río", "bosque", "mariposa", "luz", "montaña"]

function contarPalabra(lista){
    let num_palabra = 0

    const palabra = prompt("Que palabra quieres contar:")
    for(let i = 0; i < lista.length; i++){
        
        if(lista[i] === palabra){
            num_palabra++
        }
    }
    alert("La palabra " + palabra + " aparece " + num_palabra)
}


function devolverArray(lista){

    const arrayNuevo = Array.from(lista.filter(palabra => palabra.length >= 4))
    
    alert(arrayNuevo)
}


function buscarPalabra(lista){

    const palabra = prompt("Que palabra quieres buscar:")
        
    const busqueda = lista.indexOf(palabra)
    
    alert("La primera posición de " + palabra + " es: " + busqueda)
}



contarPalabra(lista)
devolverArray(lista)
buscarPalabra(lista)

const listaVacia = []
contarPalabra(listaVacia)
devolverArray(listaVacia)
buscarPalabra(listaVacia)