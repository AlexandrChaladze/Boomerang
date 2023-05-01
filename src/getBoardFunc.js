const { ScoreBoard } = require("../models");
async function getBoard() {
  try {
    const res = await ScoreBoard.findAll({ raw: true, logging: false });
    const resChange = res.sort((a, b) => b.score - a.score);
    const newObj = {};
    resChange.forEach((el) => {
      if (!newObj[el.name]) newObj[el.name] = el.score;
    });
    const finalArr = Object.entries(newObj);
    console.log("\x1b[32m", "\x1b[1m", "Scoreboard:");
    for (let i = 0; i < finalArr.length && i < 10; i++) {
      console.log(
        "\x1b[36m",
        "\x1b[1m",
        `${i + 1}. ${finalArr[i][0]}: ${finalArr[i][1]} points`
      );
    }
  } catch (error) {
    console.log(error.message);
  }
}
// getBoard();
module.exports = getBoard;
