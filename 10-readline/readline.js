const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.setPrompt('tulis kalimatmu disini > ');
  rl.prompt();

rl.on('line', function(line){
  if(line.toLowerCase().trim() === "good bye") {
    process.exit(0)
  } else {
    console.log('hasil conversi : ' + stringManipulation(line));
    rl.prompt();
  }
})

function stringManipulation(word) {
  var result = word.split(' ')

  for(var x = 0; x<result.length; x++) {
      if(result[x][0].toLowerCase().match(/a|i|u|e|o/) === null) {
        result[x] = result[x].slice(1) + result[x].charAt(0) + "nyo";
      }
  }
  return result.join(' ');
}
