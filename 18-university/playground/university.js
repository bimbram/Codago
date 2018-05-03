const sqlite3 = require('sqlite3').verbose();
const readline = require('readline');

var db = new sqlite3.Database('./university.db', function(err) {
  if(err) {
    return console.error(err.message)
  }
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var sqlQuery = `SELECT * FROM user`;


function accessDatabase() {
  var dbArray = [];
  db.all(sqlQuery, (err, row) => {
    if (err) {
      throw err;
    }
    dbArray.push(row)
  });
}




setTimeout(function() {
  console.log(accessDatabase());
}, 1000)


// rl.on('line', function(line){
//   if(flow === 0) {
//     //asking for username
//     rl.setPrompt('Username :');
//     rl.prompt();
//     validation.push(line);
//     flow++;
//     console.log('============================================================')
//
//     //asking for password
//     rl.setPrompt('Password :');
//     rl.prompt();
//     validation.push(line);
//     console.log('============================================================')
//     flow++;
//
//
//   } else if(flow === 2) {
//
//   }
// })
//






console.log('============================================================')
console.log('Welcome to Universitas Pendidikan Indonesia')
console.log('Jl Setiabudi No. 255')
console.log('============================================================')




// var flow = 0;
// var validation = [];
//

//
// function sqlQuery(query) {
//
//     return sqlQuery;
// }
// //
// //
// //

//
//
//
//
// db.close(function(err) {
//   if(err) {
//     return console.err(err.message)
//   }
//   console.log('Close the database connection')
// });
