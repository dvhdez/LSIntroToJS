/*function foo() {
  console.log(bar);
}

foo(); */

function foo(number) {
  if (typeof number !== "number") {
    throw new TypeError("expected a number");
  }
}
console.log(foo("3"));