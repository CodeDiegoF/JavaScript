import {
  FaceLandmarker,
  FilesetResolver
} from "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/vision_bundle.mjs";

const videoCamara = document.getElementById("videoCamara");
const botonInicio = document.getElementById("botonInicio");
const estado = document.getElementById("estado");

let detectorRostro;
let flujoCamara;
let ultimoTiempoVideo = -1;

async function iniciarDeteccion() {
  botonInicio.disabled = true;
  estado.textContent = "Solicitando acceso a la cámara...";

  try {
    flujoCamara = await navigator.mediaDevices.getUserMedia({
      video: { width: 640, height: 480 }
    });
    videoCamara.srcObject = flujoCamara;
    await videoCamara.play();

    estado.textContent = "Cargando el detector de rostro...";
    const archivosVision = await FilesetResolver.forVisionTasks(
      "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm"
    );
    detectorRostro = await FaceLandmarker.createFromOptions(archivosVision, {
      baseOptions: {
        modelAssetPath: "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task"
      },
      runningMode: "VIDEO",
      numFaces: 1
    });

    estado.textContent = "Cámara activa: buscando un rostro.";
    requestAnimationFrame(detectarRostroEnVideo);
  } catch (errorInicio) {
    console.error(errorInicio);
    flujoCamara?.getTracks().forEach((pista) => pista.stop());
    flujoCamara = undefined;
    videoCamara.srcObject = null;
    detectorRostro?.close();
    detectorRostro = undefined;
    botonInicio.disabled = false;
    estado.textContent = "No se pudo iniciar. Comprueba el permiso de cámara, la conexión a Internet y que uses HTTPS o localhost.";
  }
}

function detectarRostroEnVideo() {
  if (videoCamara.currentTime !== ultimoTiempoVideo && detectorRostro) {
    ultimoTiempoVideo = videoCamara.currentTime;
    const resultado = detectorRostro.detectForVideo(
      videoCamara,
      performance.now()
    );

     if (resultado.faceLandmarks.length > 0) {
        const puntos = resultado.faceLandmarks[0];


      const ladoIzquierdo = puntos[61];
      const ladoDerecho = puntos[291];
      const labioSuperior = puntos[0];

      // MediaPipe entrega coordenadas entre 0 y 1; las convertimos a porcentajes.
      const posicionYIzquierdo = ladoIzquierdo.y;
      const posicionYDerecha = ladoDerecho.y;
      const posicionYSuperior = labioSuperior.y;

      detectarSorisa(posicionYIzquierdo,posicionYDerecha,posicionYSuperior);
    } else {
          document.body.style.backgroundColor = "#FFFFFF";
          estado.textContent = "No se detecta ningún rostro";
}
  }
      requestAnimationFrame(detectarRostroEnVideo);
  }

function detectarSorisa(posicionYIzquierdo,posicionYDerecha,posicionYSuperior){
  const mediaComisuras = (posicionYIzquierdo + posicionYDerecha) / 2;
  const diferencia = posicionYSuperior - mediaComisuras;


  if(diferencia > 0.001){
    document.body.style.backgroundColor = '#F5F527';
    estado.textContent = "Estas sonriendo"
  }else{
    document.body.style.backgroundColor = '#F52727';
    estado.textContent = "Esta triste";
  }
}

botonInicio.addEventListener("click", iniciarDeteccion);