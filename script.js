let hiddenNumber = Math.floor(Math.random() * 21);
let score = 5;
let highscore = 1;
let my_guesses = [];

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, hiddenNumber);
  my_guesses.push(guess);
  console.log(my_guesses);
  document.querySelector(".tahmin").textContent = my_guesses;
  if (guess == hiddenNumber) {
    highscore = score * 10;
    displayMessage("Correct Number!");
    document.querySelector("body").style.background = "#60b347";
    document.querySelector(".highscore").textContent = highscore;
    document.querySelector(".number").textContent = hiddenNumber;
  } else if (guess !== hiddenNumber) {
    if (score > 1) {
      displayMessage(guess > hiddenNumber ? " TOO HIGH " : "TOO LOW");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You lost the game 😿");
      document.querySelector(".number").textContent = hiddenNumber;
      document.querySelector("body").style.background = "#ff0000";
      document.querySelector(".score").textContent = 0;
    }
  }
  //   if (hiddenNumber == guess)
  //     document.querySelector("body")= "green";
  if (!guess) {
    displayMessage("🛑 No number");
  }
});
document.querySelector(".again").addEventListener("click", function () {
  my_guesses = [];
  document.querySelector(".tahmin").textContent = my_guesses;
  score = 5;
  highscore = 0;
  hiddenNumber = Math.floor(Math.random() * 20);
  displayMessage("Start Guessing...");
  document.querySelector(".highscore").textContent = highscore;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
