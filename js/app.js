"use strict";

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

const showMessage = (message) =>
  (document.querySelector(".message").textContent = document.querySelector(
    ".score"
  ).textContent =
    message);

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // empty value
  if (!guess) {
    if (score > 1) {
      showMessage("عددی را وارد نکردید ! ");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "شما باختید D:";
    }

    // when the number is ture and win
  } else if (guess === secretNumber) {
    if (score > 1) {
      showMessage(" برنده شدید 🏆");
      score--;
      document.querySelector(".score").textContent = score;

      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").textContent = secretNumber;
      document.querySelector(".number").style.width = "11rem";

      // highscore functionalty
      if (score > highScore) {
        highScore = score;
        document.querySelector(".highscore").textContent = highScore;
      }
    } else {
      showMessage("شما باختید D:");
    }

    // Losse
  } else if (guess !== secretNumber) {
    if (score > 1) {
      showMessage(
        secretNumber < guess ? "عدد شما بزرگتر بود !" : "عدد شما کوچکتر بود !"
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      showMessage("شما باختید D:");
    }
  }
});

//reset button functionality
document.querySelector(".reset").addEventListener("click", function () {
  document.querySelector(".number").style.width = "5rem";
  document.querySelector(".number").textContent = "❓";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".message").textContent = "حدس بزنید ...";
  score = 20;
  document.querySelector(".score").textContent = score;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".guess").value = "";
});
