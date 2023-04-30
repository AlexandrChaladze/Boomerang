const { ScoreBoard, bannedUser } = require("../models");
//данная функция удаляет читеров и записывает новый людей
async function recordUser(user, score, cheatstatus) {
  if (user != "Player") {
    await ScoreBoard.create({ name: user, score: score }, { logging: false });
  }
  if (cheatstatus == "on" && user != "Player") {
    await ScoreBoard.destroy({
      where: {
        name: user,
      },
      logging: false,
    });
    await bannedUser.create({ name: user }, { logging: false });
  }
}

module.exports = recordUser;
