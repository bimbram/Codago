//greeting can't be accessed
//revealing module pattern
var greeting = "Hello world!!";

function greet(test) {
    console.log("hello " + test);
}

module.exports = {
    greet: greet
}
