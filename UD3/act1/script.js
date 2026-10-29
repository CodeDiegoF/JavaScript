// Chrome y Edge exponen la API con el prefijo "webkit";
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// Si el navegador no soporta la API, se avisa y no se ejecuta el resto.
if (!SpeechRecognition) {
  alert("Tu navegador no soporta la Web Speech API. Prueba con Google Chrome u Edge.");
} else {
  // Se crea el objeto que se encargará de escuchar y transcribir.
  const recognition = new SpeechRecognition();

  // Establecemos idioma: español de España.
  recognition.lang = 'es-ES';
  // true: sigue escuchando tras cada frase, hasta que se llame a stop().
  // false (por defecto) pararía solo después de la primera frase.
  recognition.continuous = true;
  // false: solo se reciben resultados finales, no las transcripciones parciales.
  recognition.interimResults = false;

  // Recuperamos los elementos del HTML.
  const btnStart = document.getElementById('btnStart');
  const statusText = document.getElementById('statusText');
  const commandText = document.getElementById('commandText');

  // Variable de control para saber si el micrófono está activo ahora mismo.
  let isListening = false;

  // El botón alterna entre iniciar y detener la escucha.
  // start() debe llamarse tras una acción del usuario: así el navegador
  // puede pedir el permiso del micrófono.
  btnStart.addEventListener('click', () => {
    if (!isListening) {
      recognition.start();
    } else {
      recognition.stop();
    }
  });

  // Se dispara cuando el navegador empieza a escuchar de verdad.
  // Aquí se actualiza la interfaz para reflejar el nuevo estado.
  recognition.onstart = () => {
    isListening = true;
    statusText.textContent = "Estado: Escuchando...";
    btnStart.textContent = "Detener Micrófono";
  };

  // Se dispara siempre que la escucha termina: por stop(), por un error
  // o porque el navegador la cierra. Se restaura la interfaz al estado inicial.
  recognition.onend = () => {
    isListening = false;
    statusText.textContent = "Estado: Inactivo";
    btnStart.textContent = "Activar Micrófono";
  };

  // Se dispara cada vez que el servicio reconoce una frase.
  recognition.onresult = (event) => {
    // Con continuous = true, event.results acumula todas las frases de la sesión.
    // La que acaba de llegar es la última de la lista.
    const lastIndex = event.results.length - 1;

    // [lastIndex] es el resultado y [0] la más probable.
    // trim() quita espacios sobrantes y toLowerCase() pasa a minúsculas
    // para que "Rojo" y "rojo" se traten igual.
    const transcript = event.results[lastIndex][0].transcript.trim().toLowerCase();

    let respuesta = "";
    // en respuesta guardamos el transcript
    // includes() busca que esa palabra esté en la frase que hayamos dicho.
    // Si no coincide ningún comando, no se cambia nada.
    if (transcript.includes('rojo')) {
      document.body.style.backgroundColor = '#f8d7da';
      respuesta = transcript;
    } else if (transcript.includes('verde')) {
      document.body.style.backgroundColor = '#d4edda';
      respuesta = transcript;
    } else if (transcript.includes('azul')) {
      document.body.style.backgroundColor = '#cce5ff';
      respuesta = transcript;
    } else if (transcript.includes('más grande')) {
      document.body.style.fontSize = '2em';
      respuesta = transcript;
    } else if (transcript.includes('más pequeño')) {
      document.body.style.fontSize = '0.5em'
      respuesta = transcript;
    } else if (transcript.includes('modo oscuro')) {
      document.body.style.backgroundColor = '#080808';
      document.body.style.color = '#1a0051';
      respuesta = transcript;
    } else if (transcript.includes('modo claro')) {
      document.body.style.backgroundColor = '#ffffff';
      document.body.style.color = '#fff200';
      respuesta = transcript;
    } else if (transcript.includes('restablecer') || transcript.includes('blanco')) {
      document.body.style.backgroundColor = '#ffffff';
      document.body.style.color = '#000000';
      document.body.style.fontSize = '1em';
      respuesta = transcript;
    }

    // Si respuesta sigue vacía, la frase no era ningún comando y no se cambia nada.
    if (respuesta === "") {
      commandText.textContent = "Comando no encontrado";
      respuesta = "Comando no encontrado";
    } else {
      // Se muestra lo que se ha entendido junto con la respuesta.
      commandText.textContent = transcript;
    }
  };



  // Se dispara un error si algo falla (permiso denegado, sin micrófono, sin red...)..
  recognition.onerror = (event) => {
    console.error("Error en el reconocimiento de voz:", event.error);
    statusText.textContent = "Error: " + event.error;
  };
}