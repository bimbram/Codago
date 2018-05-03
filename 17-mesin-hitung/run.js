"use strict";

var MesinHitung = require("./MesinHitung.js");

var mh = new MesinHitung();
var Pi = mh.Pi;

console.log(Pi);
mh.add(10).substract(5).result(); // 1 + 10 - 5 = 6

mh.initialNum(6).add(3).multiply(4).divide(6).result(); // current result is 6 then the result is: 6 + 3 * 4 / 6 = 6

mh.initialNum(7); // set jari-jari 7

console.log(`nilai sekarang : ${mh.resultNum}`);

mh.multiply(2).multiply(Pi).result(); // keliling lingkaran dengan jari jari 7 => 2 x Pi x r = 44

mh.initialNum(7); // set jari-jari 7

mh.square().multiply(Pi).result(); //luas lingkaran dengan jari jari 7 => Pi x r pangkat 2 = 154

mh.initialNum(4);

mh.exponent(3).result(); // 4 pangkat 3 = 64

mh.initialNum(64).squareRoot().result(); // akar pangkat 2 dari 64 = 8
