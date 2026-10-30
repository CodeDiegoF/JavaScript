import { FilesetResolver, HandLandmarker } from "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/vision_bundle.mjs";

const videoCamara = document.getElementById("videoCamara");
const campoPosicion = document.getElementById("posicionPulgar");
const botonInicio = document.getElementById("botonInicio");
const estado = document.getElementById("estado");
const mensaje = document.getElementById("mensaje");
const contenedorVideo = document.getElementById("contenedorVideo");
let detectorManos;
let ultimoTiempoVideo = -1;
let flujoCamara;
// Solicita la cámara, carga el modelo de manos e inicia la detección.
async function iniciarDeteccion() {
  botonInicio.disabled = true;
  estado.textContent = "Solicitando acceso a la cámara...";

  try {
    flujoCamara = await navigator.mediaDevices.getUserMedia({
      video: { width: 640, height: 480 }
    });
    videoCamara.srcObject = flujoCamara;
    await videoCamara.play();

    estado.textContent = "Cargando el detector...";
    const archivosVision = await FilesetResolver.forVisionTasks(
      "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm");
    detectorManos = await HandLandmarker.createFromOptions(archivosVision, {
      baseOptions: {
        modelAssetPath: "https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task"
      },
      runningMode: "VIDEO",
      numHands: 1
    });

    estado.textContent = "Cámara activa: pulgar hacia arriba para pintar verde y pulgar hacia abajo para pintar rojo";
    requestAnimationFrame(detectarManoEnVideo);
  } catch (errorInicio) {
    console.error(errorInicio);
    flujoCamara?.getTracks().forEach((pista) => pista.stop());
    flujoCamara = undefined;
    videoCamara.srcObject = null;
    detectorManos?.close();
    detectorManos = undefined;
    botonInicio.disabled = false;
    estado.textContent = "No se pudo iniciar. Comprueba el permiso de cámara, la conexión a Internet y que uses HTTPS o localhost.";
  }
}
// Cambia el aspecto del fondo dependiendo de la posicion del pulgar

function actualizarFondo(posicionY, posicionYPalma) {
    const diferencia = posicionY - posicionYPalma;

    if (diferencia < -5) {
        // Pulgar por encima de la palma
        document.body.style.backgroundColor = '#00FF56';
    } else if (diferencia > 5) {
        // Pulgar por debajo de la palma
        document.body.style.backgroundColor = '#FF0000';
    } else {
        // Pulgar a una altura similar: zona intermedia
        document.body.style.backgroundColor = '#FF9900';
    }
}
/**
 * Analiza el fotograma actual, muestra la posición de la punta del pulgar que es el 4 y tambien teniendo en cuenta la palma de la mano que es el 0
 * si el punto 4 esta por encima del punto 0 se cambia el fondo a color verde, pero si el punto 0 esta por encima del punto 4 el fondo 
 * se pone de color rojo
 * Se vuelve a ejecutar en el siguiente fotograma mientras la cámara está activa.
 */
function detectarManoEnVideo() {
  // Solo analiza una imagen cuando el vídeo ha avanzado y el detector está listo.
  if (videoCamara.currentTime !== ultimoTiempoVideo && detectorManos) {
    ultimoTiempoVideo = videoCamara.currentTime;
    const resultados = detectorManos.detectForVideo(videoCamara, performance.now());

    // Si hay una mano, el punto 4 corresponde a la punta del pulgar.
    if (resultados.landmarks && resultados.landmarks.length > 0) {
      const posicionPulgar = resultados.landmarks[0][4];
      const posicionPalma = resultados.landmarks[0][0];
      // MediaPipe entrega coordenadas entre 0 y 1; las convertimos a porcentajes.
      const posicionX = posicionPulgar.x * 100;
      const posicionY = posicionPulgar.y * 100;

      const posicionYPalma = posicionPalma.y * 100;


      campoPosicion.textContent = `X: ${posicionX.toFixed(1)} %, Y: ${posicionY.toFixed(1)} %`;
      actualizarFondo(posicionY, posicionYPalma);
    }else {
    campoPosicion.textContent = "No se detecta ninguna mano";
    document.body.style.backgroundColor = '#FFFFFF';
    }
  }

  // Solicita analizar el siguiente fotograma de la cámara.
  requestAnimationFrame(detectarManoEnVideo);
}

botonInicio.addEventListener("click", iniciarDeteccion);