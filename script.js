let hiddenNumber = Math.floor(Math.random() * 21);
let score = 5;
let highscore = 1;
const arr = [];
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, hiddenNumber);
  arr.push(guess);
  console.log(arr);
  document.querySelector(".tahmin").textContent = arr;
  if (hiddenNumber < guess) {
    if (score > 1) {
      document.querySelector(".message").textContent = " TOO HIGH ";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game 😿";
      document.querySelector(".number").textContent = hiddenNumber;
      document.querySelector("body").style.background = "#ff0000";
      document.querySelector(".score").textContent = 0;
    }
  }
  if (hiddenNumber > guess) {
    if (score > 1) {
      document.querySelector(".message").textContent = " TOO LOW ";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game 😿";
      document.querySelector(".number").textContent = hiddenNumber;
      document.querySelector("body").style.background = "#ff0000";
      document.querySelector(".score").textContent = 0;
    }
  }
  if (guess == hiddenNumber) {
    highscore = score * 10;
    document.querySelector("body").style.background = "#60b347";
    document.querySelector(".highscore").textContent = highscore;
    document.querySelector(".number").textContent = hiddenNumber;
  }
  //   if (hiddenNumber == guess)
  //     document.querySelector("body")= "green";
  if (!guess) {
    document.querySelector(".message").textContent = "🛑 No number";
  }
});
document.querySelector(".again").addEventListener("click", function () {
  score = 5;
  hiddenNumber = Math.floor(Math.random() * 20);
  document.querySelector(".message").textContent = "Start Guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
