// Function to sort 2 strings by longest

var list = ["longest string ever","long string"];


list.sort(function compare(a, b) {
  if (a.length < b.length) {
    return -1;
  }
  if (a.length > b.length) {
    return 1;
  } else {
  // a must be equal to b
  return 0;}
});


// Function to sort an array of objects by longest name
// Second fucntion to sort array alphabetically by email

var array = [
    { name: 'Don', email: 'email@trump.com' },
    { name: 'Hillary', email: 'email@clinton.com' },
    { name: 'Bernie', email: 'email@sanders.com' }
    ]

var nameLength = array.sort(function compare(a, b) {
  if (a.name.length < b.name.length) {
    return 1;
  }
  if (a.name.length > b.name.length) {
    return -1;
  } else {
  // a must be equal to b
  return 0;}
});

//console.log(nameLength);

var emailAlpha = array.sort(function compare(a, b) {
  if (a.email < b.email) {
    return -1;
  }
  if (a.email > b.email) {
    return 1;
  } else {
  // a must be equal to b
  return 0;}
});

//console.log(emailAlpha);



// Map a number to return it's square

var array = [30, 42, 99, 4038, 6]

array.map(function square(num) {
    return num * num;
});


// Map an array of objects and aquare the num property
var array = [
    {num: 30},
    {num: 42},
    {num: 99},
    {num: 4038},
    {num: 6}
    ]

var squareObj = array.map(function square(a) {
    return a.num * a.num;
});

//console.log(squareObj);






//OperationMaker for a pair of numbers

function operationMaker(operation) {
    
    if (operation === "mult") { 
        return function multiplier(num1, num2) {
            return num1 * num2;
        }
    } else if (operation === "add") {
        return function adder(num1, num2) {
            return num1 + num2;
        }
    } else if (operation === "subtract") {
        return function subtracter(num1, num2) {
            return num1 - num2;
        }
    } else if (operation === "div") {
        return function divider(num1, num2) {
            return num1 / num2;
        }
    } else {
        return false
    }
}
  

//console.log(operationMaker("add")(2,3))
