//1

//function camelize(str) {
//  return str.split('-').map(
//      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//    ).join('');
//}

//console.log(camelize('background-color'));


//2

//filterRange([5, 3, 8, 1], 1, 4);

//function filterRange(arr, a, b) {
//  let filterRange = [];

//  for (let i of arr) {
//    if (i >= a && i <= b) {
//      filterRange.push(i);
//    }
//  }
//  console.log(arr);
//  console.log(filterRange);
//}


//3

//function filterRangeInPlace(arr, a, b) {

//  for (let i = 0; i < arr.length; i++) {
//    let val = arr[i];

//    if (val < a || val > b) {
//      arr.splice(i, 1);
//      i--;
//    }
//  }

//}

//let arr = [5, 3, 8, 1];

//filterRangeInPlace(arr, 1, 4);

//console.log(arr);


//4
//let arr = [5, 2, 1, -10, 8];

//arr.sort(function(a, b) {
//  return b - a;
//});

//console.log(arr); // 8, 5, 2, 1, -10


//5

//let arr = ["HTML", "JavaScript", "CSS"];
//let sorted = copySorted(arr);

//function copySorted(arr) {
//  return arr.slice().sort();
//}

//console.log(arr);
//console.log(sorted);


//6

//let calc = new Calculator;

//function Calculator() {

//  this.methods = {
//    "-": (a, b) => a - b,
//    "+": (a, b) => a + b,
//    "*": (a, b) => a * b,
//    "/": (a, b) => a / b,
//  };

//  this.calculate = function(str) {

//    let split = str.split(' '),
//      a = +split[0],
//      op = split[1],
//      b = +split[2];

//    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
//      return NaN;
//    }

//    return this.methods[op](a, b);
//  };

//  this.addMethod = function(name, func) {
//    this.methods[name] = func;
//  };
//}


//alert( calc.calculate(prompt('Введіть числа з оператором через пробіл')) );


//7

//let vasya = { name: "Вася", age: 25};
//let petya = { name: "Петя", age: 30};
//let masha = { name: "Маша", age: 28};
//let users = [ vasya, petya, masha ];
//let names = users.map(item => item.name);
//console.log(names);


//8

//function sortByAge(arr) {
//  arr.sort((a, b) => a.age - b.age);
//}

//let vasya = { name: "Вася", age: 25 };
//let petya = { name: "Петя", age: 30 };
//let masha = { name: "Маша", age: 28 };

//let arr = [ vasya, petya, masha ];

//sortByAge(arr);

//console.log(arr[0].name);
//console.log(arr[1].name);
//console.log(arr[2].name);


//9

//function getAverageAge(users) {
//  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
//}

//let vasya = { name: "Вася", age: 25 };
//let petya = { name: "Петя", age: 30 };
//let masha = { name: "Маша", age: 29 };

//let arr = [ vasya, petya, masha ];

//console.log( getAverageAge(arr) );


//10

//function unique(arr) {
//  let result = [];

//  for (let str of arr) {
//    if (!result.includes(str)) {
//      result.push(str);
//    }
//  }

//  return result;
//}

//let strings = ["кришна", "кришна", "харе", "харе",
//"харе", "харе", "кришна", "крішна", ":-O"];

//console.log( unique(strings) );


//11

//function unique(arr) {
//  return Array.from(new Set(arr));
//}


//  let values = ["Hare", "Krishna", "Hare", "Krishna",
//  "Krishna", "Krishna", "Hare", "Hare", ":-O"];

//  console.log(unique(values));


//12

//function makeCounter() {
//  let count = 0;
//  return function () {
//    return count++;
//  };
//}
//let counter = makeCounter();
//let counter2 = makeCounter();
//console.log(counter()); // 0
//console.log(counter()); // 1
//console.log(counter2()); //0
//console.log(counter2()); //1

//Лічильники незалежні. Функціі створюються різними вікликами. 
//Вони мають незалежні зовнішні лексичні середовища, кожне має свою власну змінну count.


//13 

//function Counter() {
//  let count = 0;

//  this.up = function() {
//    return ++count;
//  };

//  this.down = function() {
//    return --count;
//  };
//}

//let counter = new Counter();

//console.log(counter.up()); // 1
//console.log(counter.up()); // 2
//console.log(counter.down()); // 1

//Буде працювати. Обидві вкладені функції створюються в межах єдиного зовнішнього лексичного середовища,
//тому вони мають спільний доступ до однієї змінної count.


//14

//function factorial(n) {
//  return (n != 1) ? n * factorial(n - 1) : 1;
//}

//console.log(factorial(4));
  





