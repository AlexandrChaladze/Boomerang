const { ScoreBoard } = require("../models");
async function recordUser(user, score) {
  await ScoreBoard.create({ name: user, score: score });
}

module.exports = recordUser;
