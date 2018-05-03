"use strict"
const sqlite3 = require("sqlite3").verbose();
const Table = require("cli-table");

var db = new sqlite3.Database("./university.db", function(err) {
  if (err) {
    return console.error(err.message);
  }
});

function accessDatabase(cb) {
  const queryKontrakKuliah =
    "SELECT kontrakkuliah.kontrakkuliahid, mahasiswa.nama_mahasiswa, jurusan.nama_jurusan, " +
    "mahasiswa.nim, matakuliah.nama_matkul, matakuliah.sks, dosen.nama_dosen, " +
    "kontrakkuliah.nilai, kontrakkuliah.grade FROM kontrakkuliah " +
    "INNER JOIN mahasiswa ON kontrakkuliah.MAHASISWAID=mahasiswa.MAHASISWAID " +
    "INNER JOIN jurusan on mahasiswa.jurusanid=jurusan.jurusanid " +
    "INNER JOIN dosen ON kontrakkuliah.DOSENID=dosen.DOSENID " +
    "INNER JOIN matakuliah ON kontrakkuliah.MATAKULIAHID=matakuliah.MATAKULIAHID;";

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
          db.all(`SELECT * FROM matakuliah`, (err, matakuliah) => {
            if (err) {
              throw err;
            }
            db.all(queryKontrakKuliah, (err, kontrakkuliah) => {
              if (err) {
                throw err;
              }
              return cb({
                user: user,
                mahasiswa: mahasiswa,
                dosen: dosen,
                jurusan: jurusan,
                kontrakkuliah: kontrakkuliah,
                matakuliah: matakuliah
              });
            });
          });
        });
      });
    });
  });
}

accessDatabase(function(data) {
  cliTableView(data, "mahasiswa")
});


function cliTableView(data, table) {
  let tempTableArray = new Array(data[table].length);
  if(data[table].length > 0) {
    let dataPropertyLength = Object.keys(data[table][0]).length
    let headArray = new Array(dataPropertyLength);
    headArray[0] = "No";
    for(var x = 1; x < dataPropertyLength; x++) {
      headArray[x] = Object.keys(data[table][0])[x]
    }
    let cliTable = new Table({
      head: headArray
    });
    for(var x = 0; x < data[table].length; x++) {
      tempTableArray[x] = []
      for (var prop in data[table][x]) {
        tempTableArray[x].push(data[table][x][prop])
      }
      tempTableArray[x][0] = x+1
    }
    tempTableArray.forEach(function(item) {
      cliTable.push(item);
    });
    console.log("============================================================");
    console.log(cliTable.toString());
  }
}


function daftarKontrakKuliah(datakontrakkulah) {
  var cliTable = new Table({
    head: [
      "KONTRAKKULIAHID",
      "NAMA_MAHASISWA",
      "NAMA_JURUSAN",
      "NIM",
      "NAMA_MATKUL",
      "SKS",
      "NAMA_DOSEN",
      "NILAI",
      "GRADE"
    ]
  });
  var tempArray = new Array(datakontrakkulah.length);
  for (var x = 0; x < datakontrakkulah.length; x++) {
    tempArray[x] = [];
    for (var prop in datakontrakkulah[x]) {
      tempArray[x].push(datakontrakkulah[x][prop]);
    }
  }
  tempArray.forEach(function(item) {
    cliTable.push(item);
  });
  console.log("============================================================");
  console.log(cliTable.toString());
}
