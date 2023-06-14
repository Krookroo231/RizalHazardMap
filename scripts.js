const words = ["earthquake", "landslide", "risk", "thunderstorm", "tsunami", "typhoon", "wildfire","disaster"];
const MAX_INCORRECT_GUESSES = 7;

let chosenWord;
let guessedWord;
let incorrectGuesses = [];
let incorrectGuessCount = 0;

const hangmanCanvas = document.getElementById("hangman-drawing");
const hangmanContext = hangmanCanvas.getContext("2d");

// Draw the base scaffold
function drawScaffold() {
  hangmanContext.lineWidth = 4;
  hangmanContext.strokeStyle = "#000";
  
  // Vertical pole
  hangmanContext.beginPath();
  hangmanContext.moveTo(30, 180);
  hangmanContext.lineTo(30, 10);
  hangmanContext.stroke();
  
  // Horizontal pole
  hangmanContext.beginPath();
  hangmanContext.moveTo(27, 10);
  hangmanContext.lineTo(100, 10);
  hangmanContext.stroke();
  
  // Support pole
  hangmanContext.beginPath();
  hangmanContext.moveTo(97, 10);
  hangmanContext.lineTo(97, 30);
  hangmanContext.stroke();
}

// Draw the head
function drawHead() {
  hangmanContext.lineWidth = 4;
  hangmanContext.strokeStyle = "#000";
  
  hangmanContext.beginPath();
  hangmanContext.arc(97, 45, 15, 0, Math.PI * 2, true);
  hangmanContext.closePath();
  hangmanContext.stroke();
}

// Draw the body
function drawBody() {
  hangmanContext.lineWidth = 4;
  hangmanContext.strokeStyle = "#000";
  
  hangmanContext.beginPath();
  hangmanContext.moveTo(97, 60);
  hangmanContext.lineTo(97, 130);
  hangmanContext.stroke();
}

// Draw the left arm
function drawLeftArm() {
  hangmanContext.lineWidth = 4;
  hangmanContext.strokeStyle = "#000";
  
  hangmanContext.beginPath();
  hangmanContext.moveTo(97, 70);
  hangmanContext.lineTo(60, 100);
  hangmanContext.stroke();
}

// Draw the right arm
function drawRightArm() {
  hangmanContext.lineWidth = 4;
  hangmanContext.strokeStyle = "#000";
  
  hangmanContext.beginPath();
  hangmanContext.moveTo(97, 70);
  hangmanContext.lineTo(134, 100);
  hangmanContext.stroke();
}

// Draw the left leg
function drawLeftLeg() {
  hangmanContext.lineWidth = 4;
  hangmanContext.strokeStyle = "#000";
  
  hangmanContext.beginPath();
  hangmanContext.moveTo(97, 130);
  hangmanContext.lineTo(60, 170);
  hangmanContext.stroke();
}

// Draw the right leg
function drawRightLeg() {
  hangmanContext.lineWidth = 4;
  hangmanContext.strokeStyle = "#000";
  
  hangmanContext.beginPath();
  hangmanContext.moveTo(97, 130);
  hangmanContext.lineTo(134, 170);
  hangmanContext.stroke();
}

// Clear the canvas
function clearCanvas() {
  hangmanContext.clearRect(0, 0, hangmanCanvas.width, hangmanCanvas.height);
}
//popup message
// function showPopup(message) {
//   const popupContainer = document.getElementById("popup-container");
//   const popupMessage = document.getElementById("popup-message");
//   const popupCloseButton = document.getElementById("popup-close");
  
//   popupMessage.textContent = message;
//   popupContainer.style.display = "block";

//   popupCloseButton.addEventListener("click", function() {
//     popupContainer.style.display = "none";
//   });

  
// }


// Draw the hangman based on the incorrect guess count
function drawHangman() {
  clearCanvas();
  
  switch (incorrectGuessCount) {
    case 1:
      drawScaffold();drawHead();
      break;
    case 2:
      drawScaffold();drawHead();drawBody();
      break;
    case 3:
      drawScaffold();drawHead();drawBody();drawLeftArm();
      break;
    case 4:
      drawScaffold();drawHead();drawBody();drawLeftArm();drawRightArm();
      break;
    case 5:
      drawScaffold();drawHead();drawBody();drawLeftArm();drawRightArm();drawLeftLeg();
      break;
    case 6:
      drawScaffold();drawHead();drawBody();drawLeftArm();drawRightArm();drawLeftLeg();drawRightLeg();
      break;
    case 7:
      drawScaffold();drawHead();drawBody();drawLeftArm();drawRightArm();drawLeftLeg();drawRightLeg();
      break;
    default:
      break;
  }
}

// Initialize the canvas and hangman drawing
function initializeHangman() {
  hangmanContext.lineWidth = 4;
  hangmanContext.strokeStyle = "#000";
  drawScaffold();
}

function startNewGame() {
  chosenWord = words[Math.floor(Math.random() * words.length)];
  guessedWord = Array(chosenWord.length).fill("_");
  incorrectGuesses = [];
  incorrectGuessCount = 0;
  updateDisplay();
  clearCanvas();
  initializeHangman();
}

function updateDisplay() {
  document.getElementById("word-display").textContent = guessedWord.join(" ");
  document.getElementById("incorrect-guesses").textContent = incorrectGuesses.join(" ");
}

function processGuess(letter) {
  if (chosenWord.includes(letter)) {
    for (let i = 0; i < chosenWord.length; i++) {
      if (chosenWord[i] === letter) {
        guessedWord[i] = letter;
      }
    }
  } else {
    incorrectGuesses.push(letter);
    incorrectGuessCount++;
    drawHangman();
  }
  
  updateDisplay();
  checkGameStatus();
}

function checkGameStatus() {
  if (!guessedWord.includes("_")) {
    alert("Congratulations! You won!");
    startNewGame();
  } else if (incorrectGuessCount === MAX_INCORRECT_GUESSES) {
    alert("Game over! The word was: " + chosenWord);
    startNewGame();
  }
}

document.getElementById("new-game").addEventListener("click", startNewGame);
document.getElementById("restart").addEventListener("click", startNewGame);

document.addEventListener("keydown", function(event) {
  const letter = event.key.toLowerCase();
  
  if (/[a-z]/.test(letter)) {
    processGuess(letter);
  }
});

startNewGame();


function backtoIndex()
{
  window.location.href = 'index.html';
}
