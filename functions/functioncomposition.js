let add = (a, b) => a + b;
let getNumber = text => {
  let input = prompt(text);
  return Number(input);
};

let number1 = getNumber('Enter a number: ');
let number2 = getNumber('Enter another number: ');
console.log(add(number1, number2));

/*
function subtract(a,b) {
  return a - b;
}

let sum = add(20, 45);
console.log(sum);

let difference = subtract(80, 10);
console.log(difference);

function times(num1, num2) {
  return num1 * num2;
}

console.log(times(add(20, 45), subtract (80,10)));
*/