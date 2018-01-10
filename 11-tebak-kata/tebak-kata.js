const readline = require("readline");
const fs = require("fs");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
var questionDatabase = JSON.parse(fs.readFileSync("data.json", "utf8"));
var gameContinue = false;
var i = 0;

console.log(
  "Selamat datang di permainan tebak Tebak Kata, silahkan isi " +
    "dengan jawaban yang benar ya!"
);
rl.setPrompt("Tebakan : ");

console.log(questionDatabase[i].definition);

rl.prompt();
rl
  .on("line", function(line) {
    if (i === questionDatabase.length) {
      console.log("Hore Anda Menang!");
      rl.close();
    } else {
      gameContinue = checkAnswer(line, questionDatabase[i].term);
      if (gameContinue === true) {
        i++;
      }
      if (i < questionDatabase.length) {
        console.log(questionDatabase[i].definition);
        rl.prompt();
      }
    }
  })
  .on("close", function() {
    console.log();
  });

function checkAnswer(userAnswer, questionAnswer) {
  if (userAnswer.trim().toUpperCase() === questionAnswer.toUpperCase()) {
    console.log("Selamat Anda Benar\n");
    return true;
  } else {
    console.log("Wkwkwkwk, Anda kurang beruntung\n");
    return false;
  }
}
