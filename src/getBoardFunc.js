const { ScoreBoard } = require("../models");
async function getBoard() {
  const res = await ScoreBoard.findAll({ raw: true });
  const resChange = res.sort((a, b) => b.score - a.score);
  const newObj = {};
  resChange.forEach((el) => {
    newObj[el.name] = el.score;
  });
  const finalArr = Object.entries(newObj);
  for (let i = 0; i < finalArr.length && i < 10; i++) {
    console.log(`${i + 1}. ${finalArr[i][0]}: ${finalArr[i][1]} points`);
  }
}

module.exports = getBoard;
