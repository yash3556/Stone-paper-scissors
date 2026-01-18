let playerScore = 0;
let computerScore = 0;

const choices = ["rock", "paper", "scissors"];

const imageMap = {
  rock: "rock.png",
  paper: "paper.png",
  scissors: "scissors.png"
};

const playerImages = document.querySelectorAll(".player-choice img");
const playerScoreEl = document.getElementById("play-score");
const computerScoreEl = document.getElementById("com-score");
const resultText = document.getElementById("result-text");

const battleArea = document.querySelector(".battle-area");
const playerHand = document.getElementById("player-hand");
const computerHand = document.getElementById("computer-hand");
const startBtn = document.getElementById("start-btn");
const resetBtn = document.getElementById("reset-btn");

const roundsBox = document.querySelector(".start");
const gameBox = document.querySelector(".game");
const roundsSelect = document.getElementById("rounds-select");
const roundsBtn = document.getElementById("rounds-btn");

let totalRounds = 0;
let currentRound = 0;


startBtn.addEventListener("click", () => {
  gameBox.classList.add("hide");
  roundsBox.classList.remove("hide");
});


roundsBtn.addEventListener("click", () => {
  if (!roundsSelect.value) {
    alert("Please select number of rounds");
    return;
  }

  totalRounds = Number(roundsSelect.value);
  currentRound = 0;
  playerScore = 0;
  computerScore = 0;

  playerScoreEl.textContent = 0;
  computerScoreEl.textContent = 0;

  roundsBox.classList.add("hide");
  document.querySelector(".player-choice").style.display = "flex";

  resultText.textContent = `Game Started: ${totalRounds} Rounds`;
});


playerImages.forEach(img => {
  img.addEventListener("click", () => {

    if (currentRound >= totalRounds) return;

    playGame(img.id);
  });
});


function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  document.querySelector(".player-choice").style.display = "none";
  battleArea.style.display = "flex";

  playerHand.src = "rock.png";
  computerHand.src = "rock.png";

  resultText.textContent = "Rock... Paper... Scissors...";

  playerHand.classList.add("shake");
  computerHand.classList.add("shake");

  setTimeout(() => {
    playerHand.classList.remove("shake");
    computerHand.classList.remove("shake");

    playerHand.src = imageMap[playerChoice];
    computerHand.src = imageMap[computerChoice];

    const result = decideWinner(playerChoice, computerChoice);
    updateScore(result);

    currentRound++; 


    if (currentRound === totalRounds) {
      if (playerScore > computerScore) {
        resultText.textContent = "🏆 You Won the Game!";
      } else if (computerScore > playerScore) {
        resultText.textContent = "💻 Computer Won the Game!";
      } else {
        resultText.textContent = "🤝 Game Draw!";
      }

      document.querySelector(".player-choice").style.display = "none";
    } else {
      document.querySelector(".player-choice").style.display = "flex";
      battleArea.style.display = "none";
    }

  }, 1000);
}


function decideWinner(player, computer) {
  if (player === computer) return "draw";

  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) return "win";

  return "lose";
}

function updateScore(result) {
  if (result === "win") {
    playerScore++;
    resultText.textContent = "🎉 You Win!";
  } 
  else if (result === "lose") {
    computerScore++;
    resultText.textContent = "😢 You Lose!";
  } 
  else {
    resultText.textContent = "😐 It's a Draw!";
  }

  playerScoreEl.textContent = playerScore;
  computerScoreEl.textContent = computerScore;
}


resetBtn.addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  currentRound = 0;
  totalRounds = 0;

  playerScoreEl.textContent = 0;
  computerScoreEl.textContent = 0;
  resultText.textContent = "";

  battleArea.style.display = "none";
  document.querySelector(".player-choice").style.display = "none";

  gameBox.classList.remove("hide");
});
