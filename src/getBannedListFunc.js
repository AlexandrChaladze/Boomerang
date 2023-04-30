const { bannedUser } = require("../models");
const chalk = require("chalk");
async function getBanned() {
  try {
    const res = await bannedUser.findAll({ raw: true, logging: false });
    const newObj = {};
    res.forEach((el) => {
      //просто присваиваю 1 чтобы не менять сильно
      if (!newObj[el.name]) newObj[el.name] = 1;
    });
    const finalArr = Object.entries(newObj);
    const final = [];
    console.log(chalk.green.bold("Banned list:"));
    for (let i = 0; i < finalArr.length; i++) {
      //   console.log(chalk.red.bold(`${i + 1}. ${finalArr[i][0]}`));
      final.push(finalArr[i][0]);
    }
    return final;
  } catch (error) {
    console.log(error.message);
  }
}
// getBoard();
module.exports = getBanned;
