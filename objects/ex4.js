let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let obj2 = Object.keys(obj);
obj2.forEach(key => console.log(obj[key]));