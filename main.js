var firstNumber = document.querySelector ('#input1');
console.dir (firstNumber);

var secondNumber = document.querySelector ('#input2');
console.dir (secondNumber);

var calculate = document.querySelector ('#button');
console.dir (calculate);

var sum = document.querySelector ('#output');
console.dir (sum)

calculate.onclick = action;

function action() {
  sum.value =  Number(firstNumber.value) + Number(secondNumber.value);
}
