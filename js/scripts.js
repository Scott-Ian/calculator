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

const TempC = function(number1){
  return number1 * (9/5) + 32
}

const number3 = parseInt(prompt("Enter Celsius temp: "))
const result3 = TempC(number1)
alert(result3 + "Fahrenheit")
