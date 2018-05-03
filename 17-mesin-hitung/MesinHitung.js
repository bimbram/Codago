"use strict";

module.exports = class MesinHitung {
  constructor() {
    this.resultNum = 1;
    this.Pi = Math.PI;
  }

  initialNum(num) {
    this.resultNum = num;
    return this;
  }

  add(num) {
    this.resultNum = this.resultNum + num;
    return this;
  }

  substract(num) {
    this.resultNum = this.resultNum - num;
    return this;
  }

  multiply(num) {
    this.resultNum = this.resultNum * num;
    return this;
  }

  divide(num) {
    this.resultNum = this.resultNum / num;
    return this;
  }

  square() {
    this.resultNum = Math.pow(this.resultNum, 2);
    return this;
  }

  exponent(num) {
    this.resultNum = Math.pow(this.resultNum, num);
    return this;
  }

  squareRoot() {
    this.resultNum = Math.sqrt(this.resultNum);
    return this;
  }

  result() {
    console.log(this.resultNum);
    this.resultNum = 1;
    return this;
  }
};
