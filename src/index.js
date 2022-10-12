import "./style.css";
import { createGame, addScore, getAllScores } from "./Services/API";

const nameInput = document.querySelector("#name-input");
const scoreInput = document.querySelector("#score-input");
const submitBtn = document.querySelector(".submit");
const refreshBtn = document.querySelector('.table-refresh');

submitBtn.addEventListener("click", () => {
  if (nameInput.value != "" && scoreInput.value != "") {
    addScore(nameInput.value, scoreInput.value);
  } else {
    alert("you have to type name and score");
  }
});

refreshBtn.addEventListener('click', () => {
    const varial = getAllScores()
    console.log(varial);
})

// createGame();

// addScore()

// getAllScores()
