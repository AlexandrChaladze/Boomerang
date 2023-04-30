const getBanned = require("./getBannedListFunc");
const chalk = require("chalk");
async function readBanned() {
  const arr = await getBanned();
  console.log(chalk.green.bold("Banned list:"));
  arr.forEach((el, i) => console.log(chalk.red.bold(`${i + 1}. ${el}`)));
}
module.exports = readBanned;
