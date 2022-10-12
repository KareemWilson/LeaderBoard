const createGameURL =
  "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/";

const scoresURL =
  "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/6Emd4erPz4wFR0stUg4E/scores/";

const createGame = () => {
  fetch(createGameURL, {
    method: "POST",
    body: JSON.stringify({
      name: "League of Legends",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
};

const addScore = (name, score) => {
  fetch(scoresURL, {
    method: "POST",
    body: JSON.stringify({
      user: name,
      score,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
};

const getAllScores = () => {
    fetch(scoresURL).then((res) => console.log(res););
    
  };
module.exports = { createGame, addScore, getAllScores };


