let edad = Number(prompt("Introduce tu edad:"));
let nota = Number(prompt("Introduce tu nota media (3 decimales):"));

if (edad < 0) {

  alert("Error: la edad no puede ser negativa.");

} else if (nota < 0 || nota > 10) {

  alert("Error: la nota debe estar entre 0 y 10.");

} else {

    console.log("Nota con dos decimales:", nota.toFixed(2));

    let suma = edad + nota;
    let resta = edad - nota;
    let multiplicacion = edad * nota;
    let division = edad / nota;

    console.log("Suma:", suma);
    console.log("Resta:", resta);
    console.log("Multiplicación:", multiplicacion);

    if (nota === 0) {

        console.log(" No se puede dividir entre cero.");

    } else {

        division = edad / nota;
        console.log("División:", division);

        console.log("División en string: " + division.toString())

    }


    let bool = true;


    console.log("typeof edad:", typeof edad);
    console.log("typeof nota:", typeof nota);
    console.log("typeof suma:", typeof suma);
    console.log("typeof resta:", typeof resta);
    console.log("typeof multiplicacion:", typeof multiplicacion);
    console.log("typeof division:", typeof division);
    console.log("typeof activo:", typeof bool);

}


