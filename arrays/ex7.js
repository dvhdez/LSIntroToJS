
function sumOfSquares(numbers) {
  return numbers.reduce((accumulator, number) => {
    return accumulator + number * number;
  });
}

let numbers = [3, 5, 7]
console.log(sumOfSquares(numbers));