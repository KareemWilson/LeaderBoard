const createGameURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const scoresURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/rXQpeSvbUJBLDJSd6BE8/scores/';

const createGame = () => {
  fetch(createGameURL, {
    method: 'POST',
    body: JSON.stringify({
      name: 'League of Legends',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json());
};

const addScore = (name, score) => {
  fetch(scoresURL, {
    method: 'POST',
    body: JSON.stringify({
      user: name,
      score,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
};

const getAllScores = async () => {
  const table = document.querySelector('.table-items');
  table.innerHTML = '';
  await fetch(scoresURL)
    .then((response) => response.json())
    .then((json) =>
    json.result.forEach((element) => {
        const scoresHTML = `
      <div class='element d-flex f-row'>
      <p class='name'>${element.user}</p>
      <p class='score'>${element.score}</p>
      </div>`;
        table.innerHTML += scoresHTML;
      })
    );
};

module.exports = { createGame, addScore, getAllScores };
