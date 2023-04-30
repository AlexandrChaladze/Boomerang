const { ScoreBoard } = require("../models");
async function recordUser(user, score, cheatstatus) {
  if (user != "Player") {
    await ScoreBoard.create({ name: user, score: score }, { logging: false });
  }
  if (user != "Player") {
    await ScoreBoard.create({ name: user, score: score }, { logging: false });
  }
}

module.exports = recordUser;
