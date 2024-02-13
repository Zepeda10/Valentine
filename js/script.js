const noBtn = document.getElementById("noBtn");
const siBtn = document.getElementById("siBtn");
const valentineText = document.getElementById("valentineText");
const buttonsDiv = document.getElementById("buttons");
const imagenesNo = [
  "img/segura.png",
  "img/segurisima.jpg",
  "img/apoco.jpg",
  "img/orale.jpg",
  "img/duren.jpg",
  "img/pinchevieja.jpg",
  "img/quemeimporta.jpg",
  "img/perosegura.png",
];
const imagenesSi = ["img/chi.jpg"];
const textosNo = [
  "No",
  "Segura?",
  "Segurísima?",
  "A poco sí muy verga?",
  "Órale pues...",
  "Duren...",
  "Pinche vieja!",
  "Ay! qué me importa!...",
  "Pero seguraaaaaaaa?",
];
let contadorNo = 0;
let contadorImagenesNo = 0;
let contadorSi = 0;
let contadorCreciente = 0;
let contadorClicksNo = 0;

noBtn.addEventListener("click", () => {
  // Incrementar el contador y asegurarse de que no exceda el tamaño del array
  contadorNo = (contadorNo + 1) % textosNo.length;
  // Cambiar texto del botón 'No'
  noBtn.innerText = textosNo[contadorNo];
  // Cambiar la imagen
  document.getElementById("valentineImage").src =
    imagenesNo[contadorImagenesNo % imagenesNo.length];
  // Incrementar el contador de imágenes
  contadorImagenesNo = (contadorImagenesNo + 1) % imagenesNo.length;
  // Incrementar el tamaño del botón "sí"
  if (contadorCreciente < 9) {
    siBtn.style.fontSize = `${
      parseInt(getComputedStyle(siBtn).fontSize) + 6
    }px`;
    contadorCreciente++;
  } else {
    // Restaurar tamaño del botón
    siBtn.style.fontSize = "";
  }

  contadorClicksNo++;

  if (contadorClicksNo === 9) {
    window.location.reload();
  }
});

siBtn.addEventListener("click", () => {
  document.getElementById("valentineImage").src =
    imagenesSi[contadorSi % imagenesSi.length];
  contadorSi = (contadorSi + 1) % imagenesSi.length;
  valentineText.innerText = "¡Yo también te amo mi amor! <3";
  buttonsDiv.style.display = "none";
});
