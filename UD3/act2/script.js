// Chrome y Edge exponen la API con el prefijo "webkit";
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (!SpeechRecognition) {
    alert("Tu navegador no soporta la Web Speech API. Prueba con Google Chrome u Edge.");
} else {

    // Se crea el objeto que se encargará de escuchar y transcribir.
    const recognition = new SpeechRecognition();


    recognition.lang = 'es-ES';
    recognition.continuous = true;
    recognition.interimResults = false;

    const btnStart = document.getElementById('btnStart');
    const statusText = document.getElementById('statusText');
    const commandText = document.getElementById('commandText');
    const listaProductos = document.getElementById('listaProductos');
    const btnAnadir = document.getElementById('btnAnadir');
    const btnQuitar = document.getElementById('btnQuitar');
    const btnVaciar = document.getElementById('btnVaciar');

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

        let respuesta = "";

        if (transcript.includes('añadir ') || transcript.includes('añade ')) {
            // Al quitar el verbo, lo que queda es el producto.
            producto = transcript.replace('añadir ', '').replace('añade ', '');
            const li = document.createElement('li');
            li.textContent = producto;
            listaProductos.appendChild(li);
            respuesta = "He añadido " + producto;

        } else if (transcript.includes('quitar ') || transcript.includes('quita ')) {
            producto = transcript.replace('quitar ', '').replace('quita ', '');
            // Se busca el producto en la lista y se elimina.
            let encontrado = false;
            for (let i = 0; i < listaProductos.children.length; i++) {
                if (listaProductos.children[i].textContent === producto) {
                    listaProductos.removeChild(listaProductos.children[i]);
                    encontrado = true;
                }
            }

            // verifica si lo ha encontrado o no
            if (encontrado) {
                respuesta = "He quitado " + producto;
            } else {
                respuesta = "No está en la lista";
            }


        } else if (transcript.includes('vaciar')) {
            listaProductos.innerHTML = "";
            respuesta = "He vaciado la lista";
        } else {
            respuesta = transcript + " no existe";
        }

        // Se muestra la respuesta y se lee en voz alta.
        commandText.textContent = respuesta;
        const utterance = new SpeechSynthesisUtterance(respuesta);
        utterance.lang = 'es-ES';
        window.speechSynthesis.speak(utterance);
    };


    //Alternativa sin micro
    btnAnadir.addEventListener('click', () => {
        const producto = inputProducto.value.trim().toLowerCase();
        const li = document.createElement('li');
        li.textContent = producto;
        listaProductos.appendChild(li);
    });

    btnQuitar.addEventListener('click', () => {
        const producto = inputProducto.value.trim().toLowerCase();
        let encontrado = false;
            for (let i = 0; i < listaProductos.children.length; i++) {
                if (listaProductos.children[i].textContent === producto) {
                    listaProductos.removeChild(listaProductos.children[i]);
                    encontrado = true;
                }
            }

            if (encontrado) {
                respuesta = "He quitado " + producto;
            } else {
                respuesta = "No está en la lista";
            }
    });

    btnVaciar.addEventListener('click', () => {
        listaProductos.innerHTML = "";
        respuesta = "He vaciado la lista";
    });


    


    // Se dispara un error si algo falla (permiso denegado, sin micrófono, sin red...)..
    recognition.onerror = (event) => {
        console.error("Error en el reconocimiento de voz:", event.error);
        statusText.textContent = "Error: " + event.error;
    };

}