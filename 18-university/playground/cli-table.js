const sqlite3 = require("sqlite3").verbose();
const readline = require("readline");
const Table = require("cli-table");

var db = new sqlite3.Database("./university.db", function(err) {
  if (err) {
    return console.error(err.message);
  }
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function accessDatabase(cb) {
  db.all(`SELECT * FROM user`, (err, user) => {
    if (err) {
      throw err;
    }
    db.all(`SELECT * FROM mahasiswa`, (err, mahasiswa) => {
      if (err) {
        throw err;
      }
      db.all(`SELECT * FROM dosen`, (err, dosen) => {
        if (err) {
          throw err;
        }
        db.all(`SELECT * FROM jurusan`, (err, jurusan) => {
          if (err) {
            throw err;
          }
          db.all(`SELECT * FROM kontrakkuliah`, (err, kontrakkuliah) => {
            if (err) {
              throw err;
            }
            return cb({
              user: user,
              mahasiswa: mahasiswa,
              dosen: dosen,
              jurusan: jurusan,
              kontrakkuliah: kontrakkuliah
            });
          });
        });
      });
    });
  });
}

accessDatabase(function(data) {
//   var table = new Table({
//     head: ['MAHASISWAID', 'NAMA_MAHASISWA', 'NIM', 'JURUSAN_ID', 'UMUR', 'ALAMAT']
// });
//
// // table is an Array, so you can `push`, `unshift`, `splice` and friends
// table.push(
//     ['First value', 'Second value', 'Third value', 'Fourth Value', 'Fifth Value', 'Sixth Value']
//   , ['First value', 'Second value', 'Third value', 'Fourth Value', 'Fifth Value', 'Sixth Value']
// );
//
// console.log(table.toString());

  var cliTable = new Table({head: ['MAHASISWAID', 'NAMA_MAHASISWA', 'NIM', 'JURUSAN_ID', 'UMUR', 'ALAMAT']});
  var array = new Array(data.mahasiswa.length)
  for(var x = 0; x<data.mahasiswa.length; x++) {
    array[x] = [];
    for(var prop in data.mahasiswa[x]) {
      array[x].push(data.mahasiswa[x][prop])
    }
  }
  array.forEach(function(item) {
    cliTable.push(item)
  })
  console.log(cliTable.toString());
});
