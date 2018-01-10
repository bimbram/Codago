function sentencesManipulation(sentence) {
  var vokal = ["a", "i", "u", "e", "o"];
  var konsonan = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
  var result = [];
  var kataKonsonan = '';

  var splitSentence = sentence.split(' ');
  for(var x = 0; x<splitSentence.length; x++) {

    vokal.forEach(function(element) {
      if(element === splitSentence[x].charAt(0)) {
        result.push(splitSentence[x]);
      }
    });

    konsonan.forEach(function(element) {
      if(element === splitSentence[x].charAt(0)) {
        kataKonsonan = splitSentence[x].slice(1) + splitSentence[x].charAt(0) + "nyo";
        result.push(kataKonsonan);
        }
      });
  }


  return result.join(' ');


}
console.log(sentencesManipulation('ibu pergi ke pasar bersama aku'));


//output
//ibu ergipnyo eknyo asarpnyo ersamabnyo aku'
