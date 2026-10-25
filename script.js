
const characters = {
  freddy: {
    name: "FREDDY FAZBEAR",
    image: "freddy",
    cameraImage: "camara_freddy.png.jpeg",
    description: "El oso animatrónico y cantante principal.",
    danger: 35
  },
  bonnie: {
    name: "BONNIE",
    image: "bonnie.png.png",
    cameraImage: "camara_bonnie.png.webp",
    description: "El conejo animatrónico que toca la guitarra.",
    danger: 55
  },
  chica: {
    name: "CHICA",
    image: "chica",
    cameraImage: "camara_chica",
    description: "La gallina animatrónica que lleva a Mr. Cupcake.",
    danger: 65
  },
  foxy: {
    name: "FOXY",
    image: "foxy",
    cameraImage: "camara_foxy",
    description: "El zorro pirata que se esconde en Pirate Cove.",
    danger: 90
  }
};

const levels = [
  {
    name: "FÁCIL", night: "01",
    questions: [
      { character: "freddy", question: "¿Cómo se llama el oso principal de la pizzería?", options: ["Bonnie", "Freddy Fazbear", "Foxy", "Golden Freddy"], answer: 1, explanation: "Freddy es el oso principal de la banda." },
      { character: "bonnie", question: "¿Qué animal es Bonnie?", options: ["Un conejo", "Un zorro", "Un oso", "Una gallina"], answer: 0, explanation: "Bonnie es el conejo animatrónico." },
      { character: "chica", question: "¿Qué animal representa Chica?", options: ["Un gato", "Un pato", "Una gallina", "Un perro"], answer: 2, explanation: "Chica es una gallina amarilla." },
      { character: "foxy", question: "¿Qué animal representa Foxy?", options: ["Un oso", "Un zorro", "Un conejo", "Un lobo"], answer: 1, explanation: "Foxy es el zorro pirata." },
      { character: "bonnie", question: "¿Qué instrumento toca Bonnie?", options: ["Batería", "Piano", "Guitarra", "Trompeta"], answer: 2, explanation: "Bonnie toca la guitarra." },
      { character: "chica", question: "¿Cómo se llama el pequeño cupcake de Chica?", options: ["Freddles", "Mr. Cupcake", "Fazbear", "Bon-Bon"], answer: 1, explanation: "El cupcake se conoce como Mr. Cupcake." },
      { character: "foxy", question: "¿En qué lugar aparece Foxy escondido al principio?", options: ["En el escenario", "En la cocina", "En Pirate Cove", "En la oficina"], answer: 2, explanation: "Foxy se encuentra en Pirate Cove." },
      { character: "freddy", question: "¿Qué trabajo tiene el jugador en FNAF 1?", options: ["Cocinero", "Guardia de seguridad", "Mecánico", "Cantante"], answer: 1, explanation: "El jugador trabaja como guardia nocturno." },
      { character: "bonnie", question: "¿De qué color es principalmente Bonnie?", options: ["Morado", "Amarillo", "Verde", "Naranja"], answer: 0, explanation: "Bonnie es principalmente morado o azul violáceo." },
      { character: "freddy", question: "¿Cuántos animatrónicos principales hay en la banda clásica?", options: ["Dos", "Tres", "Cuatro", "Ocho"], answer: 2, explanation: "Freddy, Bonnie, Chica y Foxy son los cuatro principales." }
    ]
  },
  {
    name: "MEDIO", night: "02",
    questions: [
      { character: "freddy", question: "¿A qué hora termina normalmente una noche en FNAF 1?", options: ["3 AM", "4 AM", "5 AM", "6 AM"], answer: 3, explanation: "El turno termina a las 6 AM." },
      { character: "bonnie", question: "¿Por cuál lado suele acercarse Bonnie a la oficina?", options: ["La puerta izquierda", "La puerta derecha", "El techo", "La ventana exterior"], answer: 0, explanation: "Bonnie suele acercarse por el lado izquierdo." },
      { character: "chica", question: "¿Por cuál lado suele acercarse Chica a la oficina?", options: ["La puerta izquierda", "La puerta derecha", "El techo", "La ventilación"], answer: 1, explanation: "Chica suele acercarse por el lado derecho." },
      { character: "foxy", question: "¿Qué debes hacer para vigilar el movimiento de Foxy?", options: ["Ignorar las cámaras", "Revisar Pirate Cove", "Mirar solo la cocina", "Apagar el juego"], answer: 1, explanation: "Revisar Pirate Cove ayuda a controlar sus movimientos." },
      { character: "freddy", question: "¿Qué recurso debes administrar cuidadosamente?", options: ["La comida", "La energía eléctrica", "El dinero", "Las canciones"], answer: 1, explanation: "La energía es limitada durante el turno." },
      { character: "chica", question: "¿Qué texto suele aparecer en el babero de Chica?", options: ["Let's Rock", "Let's Eat!!!", "Run Away", "Good Night"], answer: 1, explanation: "Su babero dice «Let's Eat!!!»." },
      { character: "bonnie", question: "¿Dónde se encuentra normalmente Bonnie al inicio de la primera noche?", options: ["En el escenario", "En Pirate Cove", "Fuera del edificio", "En la oficina"], answer: 0, explanation: "Bonnie comienza normalmente en el escenario junto a la banda." },
      { character: "freddy", question: "¿Qué dispositivo usas para observar las habitaciones?", options: ["Un teléfono", "Un monitor de cámaras", "Una radio", "Una linterna de mano"], answer: 1, explanation: "El monitor permite observar las cámaras de seguridad." },
      { character: "foxy", question: "¿Qué hace Foxy cuando logra llegar a la oficina?", options: ["Se queda cantando", "Ataca al guardia", "Se sienta", "Apaga la música"], answer: 1, explanation: "Foxy puede atacar al guardia si alcanza la oficina." },
      { character: "chica", question: "¿En qué lugar de la pizzería puede aparecer Chica durante su recorrido?", options: ["En el comedor", "En una estación espacial", "En un bosque", "En una escuela"], answer: 0, explanation: "Chica puede aparecer en el comedor durante su recorrido." }
    ]
  },
  {
    name: "DIFÍCIL", night: "03",
    questions: [
      { character: "freddy", question: "¿Qué debes vigilar para evitar quedarte sin defensa?", options: ["Solo el marcador", "El consumo de energía", "El nombre del juego", "El color del monitor"], answer: 1, explanation: "Usar puertas y monitor consume energía." },
      { character: "freddy", question: "¿Qué suele ocurrir si se agota la energía?", options: ["El turno termina automáticamente en victoria", "Las luces se apagan y Freddy puede atacar", "Aparece una nueva cámara", "El guardia recibe un ascenso inmediato"], answer: 1, explanation: "Sin energía, la oficina queda vulnerable." },
      { character: "bonnie", question: "¿Qué instrumento distingue a Bonnie dentro de la banda?", options: ["Guitarra", "Saxofón", "Violín", "Acordeón"], answer: 0, explanation: "Bonnie es el guitarrista de la banda." },
      { character: "chica", question: "¿Qué personaje está relacionado con el área de cocina y la comida?", options: ["Foxy", "Bonnie", "Chica", "Golden Freddy"], answer: 2, explanation: "Chica está asociada con la comida y la cocina." },
      { character: "foxy", question: "¿Qué característica visual distingue a Foxy?", options: ["Un sombrero de copa", "Un garfio y aspecto de zorro pirata", "Un babero amarillo", "Una guitarra morada"], answer: 1, explanation: "Foxy tiene un garfio y apariencia de pirata." },
      { character: "freddy", question: "¿Qué objeto lleva Freddy normalmente en la mano?", options: ["Un micrófono", "Una espada", "Un martillo", "Una linterna"], answer: 0, explanation: "Freddy lleva un micrófono para sus actuaciones." },
      { character: "freddy", question: "¿Qué personaje secreto es conocido por su color dorado?", options: ["Toy Bonnie", "Golden Freddy", "Withered Foxy", "The Puppet"], answer: 1, explanation: "Golden Freddy es la misteriosa versión dorada." },
      { character: "bonnie", question: "¿Cuál es una función importante de las cámaras durante el turno?", options: ["Recuperar toda la energía", "Seguir la ubicación de los animatrónicos", "Cambiar el sueldo", "Detener el reloj"], answer: 1, explanation: "Las cámaras ayudan a controlar dónde están los animatrónicos." },
      { character: "chica", question: "¿Qué debes considerar antes de mantener una puerta cerrada mucho tiempo?", options: ["Que no consume recursos", "Que la energía es limitada", "Que aumenta el sueldo", "Que cambia el nivel"], answer: 1, explanation: "Mantener las defensas activas puede agotar la energía." },
      { character: "freddy", question: "¿Cuál es el objetivo principal del guardia nocturno?", options: ["Reparar todos los animatrónicos", "Sobrevivir hasta las 6 AM", "Encontrar una salida secreta", "Ganar un concurso de canto"], answer: 1, explanation: "Tu objetivo es sobrevivir cada turno hasta las 6 AM." }
    ]
  }
];

const cameras = [
  { code: "CAM 01", name: "FREDDY", image: "camara_freddy.png.jpeg", character: "freddy" },
  { code: "CAM 02", name: "BONNIE", image: "camara_bonnie.png.webp", character: "bonnie" },
  { code: "CAM 03", name: "PIRATE COVE", image: "camara_foxy", character: "foxy" },
  { code: "CAM 04", name: "COMEDOR", image: "camara_chica", character: "chica" }
];

let levelIndex = 0;
let questionIndex = 0;
let score = 0;
let correctAnswers = 0;
let wrongAnswers = 0;
let answered = false;

const $ = id => document.getElementById(id);

const elements = {
  levelName: $("levelName"),
  nightNumber: $("nightNumber"),
  questionNumber: $("questionNumber"),
  score: $("score"),
  progressBar: $("progressBar"),
  cameraImage: $("cameraImage"),
  cameraCode: $("cameraCode"),
  cameraName: $("cameraName"),
  cameraTime: $("cameraTime"),
  characterImage: $("characterImage"),
  characterName: $("characterName"),
  characterDescription: $("characterDescription"),
  dangerBar: $("dangerBar"),
  difficultyTag: $("difficultyTag"),
  questionTitle: $("questionTitle"),
  questionText: $("questionText"),
  answers: $("answers"),
  feedback: $("feedback"),
  nextButton: $("nextButton"),
  correctCount: $("correctCount"),
  wrongCount: $("wrongCount"),
  endingScreen: $("endingScreen"),
  endingTitle: $("endingTitle"),
  endingMessage: $("endingMessage"),
  paycheck: $("paycheck"),
  claimButton: $("claimButton"),
  restartButton: $("restartButton"),
  jumpscare: $("jumpscare"),
  jumpscareImage: $("jumpscareImage"),
  jumpscareRestart: $("jumpscareRestart")
};

function connectImage(img, names, fallbackText) {
  if (!img) return;

  const extensions = [".jpg", ".jpeg", ".png", ".webp"];
  const paths = [];

  names.forEach(name => {
    paths.push("imagenes/" + name);

    if (!/\.(png|jpe?g|webp)$/i.test(name)) {
      extensions.forEach(ext => paths.push("imagenes/" + name + ext));
      paths.push("imagenes/" + name + ".png.jpg");
      paths.push("imagenes/" + name + ".png.png");
      paths.push("imagenes/" + name + ".png.webp");
      paths.push("imagenes/" + name + ".jpeg.jpg");
    }
  });

  const uniquePaths = [...new Set(paths)];
  let index = 0;

  function tryNext() {
    if (index >= uniquePaths.length) {
      img.onerror = null;
      img.alt = fallbackText || "Imagen no encontrada";
      img.style.opacity = "0.25";
      console.warn("No se encontró la imagen. Se probaron:", uniquePaths);
      return;
    }

    img.onerror = tryNext;
    img.onload = () => {
      img.style.opacity = "1";
      img.onerror = null;
    };

    img.src = uniquePaths[index++];
  }

  tryNext();
}

function setCharacter(characterKey) {
  const character = characters[characterKey] || characters.freddy;

  const characterImages = {
    freddy: ["freddy.png.jpg", "freddy"],
    bonnie: ["bonnie.png.png", "bonnie"],
    chica: ["chica"],
    foxy: ["foxy"]
  };

  connectImage(
    elements.characterImage,
    characterImages[characterKey] || [character.image],
    character.name
  );

  elements.characterName.textContent = character.name;
  elements.characterDescription.textContent = character.description;
  elements.dangerBar.style.width = character.danger + "%";
  elements.dangerBar.style.background =
    character.danger >= 80 ? "#e52c39" :
    character.danger >= 50 ? "#e9a34b" : "#69db91";
}

function changeCamera(cameraIndex) {
  const camera = cameras[cameraIndex];
  if (!camera) return;

  connectImage(elements.cameraImage, [camera.image], camera.name);

  elements.cameraCode.textContent = camera.code;
  elements.cameraName.textContent = camera.name;

  document.querySelectorAll(".camera-button").forEach((button, index) => {
    button.classList.toggle("active", index === cameraIndex);
  });

  setCharacter(camera.character);
}

document.querySelectorAll(".camera-button").forEach(button => {
  button.addEventListener("click", () => {
    changeCamera(Number(button.dataset.camera));
  });
});

function updateStats() {
  const totalAnswered = levelIndex * 10 + questionIndex;
  elements.score.textContent = score;
  elements.correctCount.textContent = correctAnswers;
  elements.wrongCount.textContent = wrongAnswers;
  elements.progressBar.style.width = (totalAnswered / 30 * 100) + "%";
}

function startGame() {
  levelIndex = 0;
  questionIndex = 0;
  score = 0;
  correctAnswers = 0;
  wrongAnswers = 0;
  answered = false;

  elements.endingScreen.classList.add("hidden");
  elements.jumpscare.classList.add("hidden");
  document.querySelector(".main-layout").classList.remove("hidden");
  document.querySelector(".status-bar").classList.remove("hidden");
  document.querySelector(".progress-track").classList.remove("hidden");

  changeCamera(0);
  updateStats();
  showQuestion();
}

function showQuestion() {
  answered = false;
  const level = levels[levelIndex];
  const question = level.questions[questionIndex];

  elements.levelName.textContent = level.name;
  elements.nightNumber.textContent = level.night;
  elements.questionNumber.textContent = `${questionIndex + 1} / 10`;
  elements.difficultyTag.textContent = level.name;
  elements.questionTitle.textContent = question.question;
  elements.questionText.textContent = "Selecciona la respuesta correcta para continuar tu turno.";
  elements.feedback.textContent = "";
  elements.feedback.className = "feedback";
  elements.nextButton.classList.add("hidden");

  setCharacter(question.character);
  elements.answers.innerHTML = "";

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "answer-button";
    button.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
    button.addEventListener("click", () => selectAnswer(index, button));
    elements.answers.appendChild(button);
  });

  updateStats();
}

function selectAnswer(selectedIndex, selectedButton) {
  if (answered) return;
  answered = true;

  const question = levels[levelIndex].questions[questionIndex];
  const buttons = elements.answers.querySelectorAll(".answer-button");
  buttons.forEach(button => button.disabled = true);

  if (selectedIndex === question.answer) {
    score += 100;
    correctAnswers++;
    selectedButton.classList.add("correct");
    elements.feedback.textContent = "✓ CORRECTO. " + question.explanation;
    elements.feedback.className = "feedback good";
  } else {
    wrongAnswers++;
    selectedButton.classList.add("incorrect");
    buttons[question.answer].classList.add("correct");
    elements.feedback.textContent = "✗ INCORRECTO. " + question.explanation;
    elements.feedback.className = "feedback bad";
  }

  updateStats();

  elements.nextButton.textContent =
    questionIndex === 9 && levelIndex === 2 ? "FINALIZAR TURNO →" :
    questionIndex === 9 ? "SIGUIENTE NIVEL →" : "SIGUIENTE PREGUNTA →";

  elements.nextButton.classList.remove("hidden");
}

function nextQuestion() {
  if (!answered) return;

  questionIndex++;

  if (questionIndex >= 10) {
    levelIndex++;
    questionIndex = 0;
  }

  if (levelIndex >= levels.length) {
    finishGame();
    return;
  }

  showQuestion();
}

function finishGame() {
  document.querySelector(".main-layout").classList.add("hidden");
  document.querySelector(".status-bar").classList.add("hidden");
  document.querySelector(".progress-track").classList.add("hidden");

  elements.endingScreen.classList.remove("hidden");
  elements.endingTitle.textContent = "¡TURNO COMPLETADO!";
  elements.endingMessage.textContent =
    `Has terminado las 30 preguntas. Respuestas correctas: ${correctAnswers}/30. Puntuación: ${score} puntos.`;

  elements.paycheck.classList.remove("hidden");
  elements.claimButton.classList.remove("hidden");
  elements.restartButton.classList.add("hidden");
}

function claimReward() {
  elements.endingScreen.classList.add("hidden");
  connectImage(elements.jumpscareImage, ["foxy", "foxy.png.jpg"], "Foxy");
  elements.jumpscare.classList.remove("hidden");
  elements.jumpscareRestart.focus();
}

function restartGame() {
  elements.jumpscare.classList.add("hidden");
  startGame();
}

$("startButton").addEventListener("click", startGame);
elements.nextButton.addEventListener("click", nextQuestion);
elements.claimButton.addEventListener("click", claimReward);
elements.restartButton.addEventListener("click", restartGame);
elements.jumpscareRestart.addEventListener("click", restartGame);

connectImage(
  elements.cameraImage,
  ["camara_freddy.png.jpg", "camara_freddy"],
  "Cámara de seguridad"
);
setCharacter("freddy");
changeCamera(0);


