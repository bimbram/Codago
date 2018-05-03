
function tableMahasiswa(datamahasiswa) {
  var cliTable = new Table({
    head: [
      "MAHASISWAID",
      "NAMA_MAHASISWA",
      "NIM",
      "JURUSAN_ID",
      "UMUR",
      "ALAMAT"
    ]
  });
  var tempArray = new Array(datamahasiswa.length);
  for (var x = 0; x < datamahasiswa.length; x++) {
    tempArray[x] = [];
    for (var prop in datamahasiswa[x]) {
      tempArray[x].push(datamahasiswa[x][prop]);
    }
  }
  tempArray.forEach(function(item) {
    cliTable.push(item);
  });
  console.log("============================================================");
  console.log(cliTable.toString());
}

function daftarDosen(datadosen) {
  var cliTable = new Table({
    head: [
      "DOSENID",
      "NAMA_DOSEN",
      "NIP"
    ]
  });
  var tempArray = new Array(datadosen.length);
  for (var x = 0; x < datadosen.length; x++) {
    tempArray[x] = [];
    for (var prop in datadosen[x]) {
      tempArray[x].push(datadosen[x][prop]);
    }
  }
  tempArray.forEach(function(item) {
    cliTable.push(item);
  });
  console.log("============================================================");
  console.log(cliTable.toString());
}


function tableJurusan(datajurusan) {
  var cliTable = new Table({
    head: [
      "JURUSANID",
      "NAMA_JURUSAN"
    ]
  });

  var tempArray = new Array(datajurusan.length);
  for (var x = 0; x < datajurusan.length; x++) {
    tempArray[x] = [];
    for (var prop in datajurusan[x]) {
      tempArray[x].push(datajurusan[x][prop]);
    }
  }
  tempArray.forEach(function(item) {
    cliTable.push(item);
  });
  console.log("============================================================");
  console.log(cliTable.toString());
}

function tableMatakuliah(datamatakuliah) {
  var cliTable = new Table({
    head: [
      "MATAKULIAHID",
      "NAMA_MATKUL",
      "SKS"
    ]
  });

  var tempArray = new Array(datamatakuliah.length);
  for (var x = 0; x < datamatakuliah.length; x++) {
    tempArray[x] = [];
    for (var prop in datamatakuliah[x]) {
      tempArray[x].push(datamatakuliah[x][prop]);
    }
  }
  tempArray.forEach(function(item) {
    cliTable.push(item);
  });
  console.log("============================================================");
  console.log(cliTable.toString());
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
