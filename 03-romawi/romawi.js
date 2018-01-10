function romawi(n) {
  if (n.length === 0) {
    return "zero is undefined in roman numeral";
  }
  debugger;
  var kamusRomawi = {
    1: {
      0: "",
      1: "I",
      2: "II",
      3: "III",
      4: "IV",
      5: "V",
      6: "VI",
      7: "VII",
      8: "VIII",
      9: "IX"
    },
    2: {
      0: "",
      1: "X",
      2: "XX",
      3: "XXX",
      4: "XL",
      5: "L",
      6: "LX",
      7: "LXX",
      8: "LXXX",
      9: "XC"
    },
    3: {
      0: "",
      1: "C",
      2: "CC",
      3: "CCC",
      4: "CD",
      5: "D",
      6: "DC",
      7: "DCC",
      8: "DCCC",
      9: "CM"
    },
    4: {
      0: "",
      1: "M",
      2: "MM",
      3: "MMM",
      4: "MMMM",
      5: "V",
      6: "VM",
      7: "VMM",
      8: "VMMM",
      9: "IX"
    }
  };
  var angkaStringArray = n.toString().split("");
  var posisiAngkaSatuan = angkaStringArray.length - 1;
  var panjangArrayAngka = angkaStringArray.length;
  var count = 1;
  var result = [];
  for (var x = panjangArrayAngka; x > 0; x--) {
    for (var prop in kamusRomawi) {
      if (parseInt(prop) === count) {
        var count2 = 0;
        for (var property in kamusRomawi[prop]) {
          if (property === angkaStringArray[panjangArrayAngka - count]) {
            result.unshift(kamusRomawi[prop][property]);
          }
        }
      }
    }
    count++;
    count2++;
  }
  return result.join("");
}

console.log("Script Testing untuk Konversi Romawi\n");
console.log("input | expected | result");
console.log("——————|—————-————|———————");
console.log("4     | IV       | ", romawi(4));
console.log("9     | IX       | ", romawi(9));
console.log("13    | XIII     | ", romawi(13));
console.log("1453  | MCDLIII  | ", romawi(1453));
console.log("1646  | MDCXLVI  | ", romawi(1646));
