const add = function(number1, number2) {
  return number1 + number2;
};

const subtract = function(number1, number2) {
  return number1 - number2;
};

const multiply = function(number1, number2) {
  return number1 * number2;
};

const divide = function(number1, number2) {
  return number1 / number2;
};

$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#add1").val());
    const number2 = parseInt($("#add2").val());
    const addResult = add(number1, number2);
    $("#addOutput").text(addResult);
  });
});

$(document).ready(function() {
  $("form#sub").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#sub1").val());
    const number2 = parseInt($("#sub2").val());
    const subResult = subtract(number1, number2);
    $("#subOutput").text(subResult);
  });
});

$(document).ready(function() {
  $("form#multiply").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#multiply1").val());
    const number2 = parseInt($("#multiply2").val());
    const multiplyResult = multiply(number1, number2);
    $("#multiplyOutput").text(multiplyResult);
  });
});

$(document).ready(function() {
  $("form#divide").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#divide1").val());
    const number2 = parseInt($("#divide2").val());
    const divideResult = divide(number1, number2);
    $("#divideOutput").text(divideResult);
  });
});