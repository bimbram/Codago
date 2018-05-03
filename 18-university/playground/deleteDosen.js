"use strict"
const sqlite3 = require("sqlite3").verbose();

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
  deleteData(data, 3, "mahasiswa")
});



//
// function deleteDosen(index, datadosen) {
//   data.dosen.splice(indexDosen.index, 1);
//
// // }
//
// function deleteData(data, index, table) {
//   if(table === "mahasiswa") {
//     if(data.length !== 0) {
//       data.
//     } else {
//
//     }
//   } else if(table === "dosen")
// }


function deleteData(data, index, table) {
  if(data[table].length !== 0) {
    let id = Object.keys(data[table][0])[0]
    let idNum = 1;
    data[table].splice(index, 1)
    for(var x = 0; x<data[table].length; x++) {
      data[table][x][id] = x + 1
    }
    return data[table]
  } else {
    return data[table]
  }
}
