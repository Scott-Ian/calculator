const Add = function(number1, number2){
  return number1 + number2;
};

const Divide = function(number1, number2){
  return number1 / number2;
}

const number1 = parseInt(prompt("Enter a number: "));
const number2 = parseInt(prompt("Enter another Number: "));
const result = Add(number1, number2);
const result2 = Divide(number1, number2)
alert(result);
alert(result2)
