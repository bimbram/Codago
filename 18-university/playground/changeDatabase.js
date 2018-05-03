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
  saveDatabase(data);
});

function saveDatabase(data) {
  console.log("masuk save database");
  var originalData = data;
  db.run("DROP TABLE mahasiswa", function(error) {
    const createTableMahasiswaQuery = `CREATE TABLE mahasiswa(
    MAHASISWAID INT PRIMARY KEY NOT NULL,
    NAMA_MAHASISWA TEXT NOT NULL,
    NIM TEXT NOT NULL,
    JURUSANID INT NOT NULL,
    UMUR TEXT NOT NULL,
    ALAMAT TEXT NOT NULL
    );`;
    if (error) {
      console.log(error);
    }

    db.run(createTableMahasiswaQuery, function(error) {
      if (error) {
        console.log(error);
      }

      for (var x = 0; x < data.mahasiswa.length; x++) {
        var MAHASISWAID = data.mahasiswa[x].MAHASISWAID;
        var NAMA_MAHASISWA = data.mahasiswa[x].NAMA_MAHASISWA;
        var NIM = data.mahasiswa[x].NIM;
        var JURUSANID = data.mahasiswa[x].JURUSANID;
        var UMUR = data.mahasiswa[x].UMUR;
        var ALAMAT = data.mahasiswa[x].ALAMAT;
        var insertMahasiswaQuery = `INSERT INTO mahasiswa(
          MAHASISWAID, NAMA_MAHASISWA, NIM, JURUSANID, UMUR, ALAMAT)
          VALUES(${MAHASISWAID}, '${NAMA_MAHASISWA}', '${NIM}', ${JURUSANID},
            '${UMUR}', '${ALAMAT}')`;
        db.run(insertMahasiswaQuery, function(error) {
          if (error) {
            console.log(error);
          }
        });
      }
    });
  });

  db.run("DROP TABLE dosen", function(error) {
    const createTableDosenQuery = `CREATE TABLE dosen(
    DOSENID INT PRIMARY KEY NOT NULL,
    NAMA_DOSEN TEXT NOT NULL,
    NIP TEXT NOT NULL
    );`;
    if (error) {
      console.log(error);
    }
    db.run(createTableDosenQuery, function(error) {
      if (error) {
        console.log(error);
      }

      for (var x = 0; x < data.dosen.length; x++) {
        var DOSENID = data.dosen[x].DOSENID;
        var NAMA_DOSEN = data.dosen[x].NAMA_DOSEN;
        var NIP = data.dosen[x].NIP;
        var insertDosenQuery = `INSERT INTO dosen(
          DOSENID, NAMA_DOSEN, NIP) VALUES(${DOSENID}, '${NAMA_DOSEN}', '${NIP}');`;
        db.run(insertDosenQuery, function(error) {
          if (error) {
            console.log(error);
          }
        });
      }
    });
  });
}
