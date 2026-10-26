const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (!SpeechRecognition) {
  alert("Tu navegador no soporta la Web Speech API. Prueba con Google Chrome u Edge.");
} else {
 
  const recognition = new SpeechRecognition();


  recognition.lang = 'es-ES';
  recognition.continuous = true;
  recognition.interimResults = false;

    const btnStart = document.getElementById('btnStart');
    const statusText = document.getElementById('statusText');
    const commandText = document.getElementById('commandText');

    let isListening = false;

  
    btnStart.addEventListener('click', () => {
        if (!isListening) {
        recognition.start();
        } else {
        recognition.stop();
        }
    });

    recognition.onstart = () => {
        isListening = true;
        statusText.textContent = "Estado: Escuchando...";
        btnStart.textContent = "Detener Micrófono";
    };

    recognition.onend = () => {
        isListening = false;
        statusText.textContent = "Estado: Inactivo";
        btnStart.textContent = "Activar Micrófono";
    };

    recognition.onresult = (event) => {
        
        const lastIndex = event.results.length - 1;

        const transcript = event.results[lastIndex][0].transcript.trim().toLowerCase();

        commandText.textContent = transcript;

    }

}