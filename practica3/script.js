function ejercicio1() {
  const a = Number(prompt("Introduce el primer número:"))
  const b = Number(prompt("Introduce el segundo número:"))

  if (a === b) {
    alert("Los dos números son iguales.")
  } else if (a > b) {
    alert("El primero (" + a + ") es mayor que el segundo (" + b + ").")
  } else {
    alert("El segundo (" + b + ") es mayor que el primero (" + a + ").")
  }
}



function ejercicio2() {
  const t1 = prompt("Introduce el primer número:")
  const t2 = prompt("Introduce el segundo número:")

  const a = Number(t1)
  const b = Number(t2)

  if (
    (a === 0 || b === 0) || (!Number.isFinite(a) || !Number.isFinite(b) )) {

    alert("Error: los números son igual a 0 o no son valido")
  } else if (a === b) {
    alert("Los dos números son iguales.")
  } else if (a > b) {
    alert("El primero (" + a + ") es mayor que el segundo (" + b + ").")
  } else {
    alert("El segundo (" + b + ") es mayor que el primero (" + a + ").")
  }
}



function ejercicio3() {
  const opcion = prompt(
    "MENÚ\n1. Usuario principiante\n2. Usuario intermedio\n3. Usuario avanzado\n4. Salir"
  )

  switch (opcion) {
    case "1":
      alert("Nivel: usuario principiante.")
      break
    case "2":
      alert("Nivel: usuario intermedio.")
      break
    case "3":
      alert("Nivel: usuario avanzado.")
      break
    case "4":
      alert("Hasta pronto.")
      break
    default:
      alert("Opción no válida.")
  }
}



function ejercicio4() {
  let resultado = ""
  for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
      resultado += i + " "
    }
  }
  alert("Pares del 1 al 20: " + resultado.trim())
}



function ejercicio5() {
  let suma = 0
  let cantidad = 0
  let num = 0

  while (num >= 0) {
    num = Number(prompt("Introduce un número (uno negativo para salir)"))

    if (num < 0) break

    suma += num
    cantidad++
  }

  if (cantidad === 0) {
    alert("No se ha introducido ningún número válido.")
  } else {
    alert("Suma: " + suma + "\nMedia: " + (suma / cantidad).toFixed(2))
  }
}



function ejercicio6() {
  const num1 = Number(prompt("Introduce el primer número:"))
  const num2 = Number(prompt("Introduce el segundo número:"))

  const desde = Math.min(num1, num2)
  const hasta = Math.max(num1, num2)

  let resultado = ""
  for (let i = desde; i <= hasta; i++) {
    resultado += i + " "
  }
  alert("Números entre " + desde + " y " + hasta + ":\n" + resultado.trim())
}



function ejercicio7() {
  const companeros = ["Adri", "Fran", "Dani", "Manu", "Jaime"]
  let resultado = ""
  for (const nombre of companeros) {
    resultado += nombre + " "
  }
  alert("Compañeros de clase: " + resultado)
}



function ejercicio8() {
  const palabra = prompt("Introduce una palabra:").toLowerCase()
  let vocales = 0

  for (let i = 0; i < palabra.length; i++) {
    const letra = palabra[i]
    if ("aeiou".includes(letra)) {
      vocales++
    }
  }

  alert("La palabra tiene " + vocales + " vocales.")
}



function ejercicio9() {
  const password = "1234"
  let intento

  do {
    intento = prompt("Introduce la contraseña:")
    if (intento === null) {
      alert("Operación cancelada.")
      return
    }
  } while (intento !== password)

  alert("¡Contraseña correcta!")
}



function ejercicio10() {
  const numSecreto = Math.floor(Math.random() * 10) + 1
  let intentos = 0
  let acierto = false

  while (!acierto) {
    const intento  = Number(prompt("Adivina el número (entre 1 y 10):"))

    intentos++

    if (intento < numSecreto) {
      alert("El número secreto es mayor que " + intento + ".")
    } else if (intento > numSecreto) {
      alert("El número secreto es menor que " + intento + ".")
    } else {
      acierto = true
      alert("¡Acertaste en " + intentos + " intento(s)!")
    }
  }
}



function ejercicio11() {
  let opcion

  do {
    opcion = prompt(
      "MENÚ\n1. Usuario principiante\n2. Usuario intermedio\n3. Usuario avanzado\n4. Salir"
    )

    switch (opcion) {
      case "1":
        alert("Nivel: usuario principiante.")
        break
      case "2":
        alert("Nivel: usuario intermedio.")
        break
      case "3":
        alert("Nivel: usuario avanzado.")
        break
      case "4":
        alert("Hasta pronto.")
        break
      default:
        alert("Opción no válida.")
    }
  } while (opcion !== "4")
}



function ejercicio12() {
  if (confirm("¿Deseas continuar?")) {
    alert("Has aceptado: continuamos.")
  } else {
    alert("Has rechazado: nos detenemos aquí.")
  }
}



function ejercicio13() {
  const numero = Number(prompt("Introduce un número entero:"))

  let divisores = ""
  for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) {
      divisores += i + " "
    }
  }
  alert("Divisores de " + numero + ":\n" + divisores.trim())
}



function ejercicio14() {
  const numero = Number(prompt("Introduce un número entero:"))

  alert("El número " + numero + (numero % 2 === 0 ? " es par." : " es impar."))
}



function ejercicio15() {
  let resultado = ""
  for (let i = 10; i >= 0; i--) {
    resultado += i + " "
  }
  alert("Cuenta atrás: " + resultado.trim())
}



ejercicio1();
ejercicio2();
ejercicio3();
ejercicio4();
ejercicio5();
ejercicio6();
ejercicio7();
ejercicio8();
ejercicio9();
ejercicio10();
ejercicio11();
ejercicio12();
ejercicio13();
ejercicio14();
ejercicio15();
