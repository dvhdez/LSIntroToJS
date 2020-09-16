function negativeZero(value) {
  return 1 / value === -Infinity;
}

console.log(negativeZero(0));
console.log(negativeZero(-0));