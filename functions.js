/**    FACTORY FUNCTION ***********/
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("Draw a circle from factory");
    },
  };
}
const circle2 = createCircle(5);
//console.log(circle2)
/**    CONSTRUCTOR FUNCTION ***********/
function ConstructorCircle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("Draw a circle from Constructor with radius: ", this.radius);
  };
}
const constructCircle = new ConstructorCircle(20);
//console.log(constructCircle);

/ ARGUMENTS /;
function sum1() {
  console.log(arguments);
  let total = 0;
  for (let i of arguments) total += i;
  return total;
  //return a + b;
}
console.log("sum1", sum1(1, 2, 3, 4, 5, 10));

/ REST OPERATOR /;
function sum2(discount, ...args) {
  const total = args.reduce((a, b) => a + b);
  let disVal = total - total * discount;
  let dis2 = 1 - discount;
  let rc1 = total * (1 - discount);
  return disVal;
}
console.log("sum2", sum2(0.1, 10, 10, 20));

/ DEFAULT PARAMETERS /;
function interest(principal, rate = 15, time = 10) {
  //rate = rate || 3.5;
  //time = time || 5;
  return ((principal * rate) / 100) * time;
}
console.log("interest", interest(80000));

/ GETTERS & SETTERS /;
const person = {
  firstName: " ",
  lastName: " ",
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    if (typeof value !== "string") throw new Error("value is not a string");

    let ray = value.split(" ");
    if (ray.length !== 2) {
      throw new Error("Enter a first and last name");
    }
    this.firstName = value.split(" ")[0];
    this.lastName = value.split(" ")[1];
  },
};
// TRY & CATCH
try {
  person.fullName = "James Baker";
} catch (e) {
  //alert(e);
  console.log(e);
}
console.log("fullName", person);

/ LET Vs VAR /;
// var => function-scoped variables
//ES6: let, const => block scoped variables
function start() {
  for (var i = 0; i < 5; i++) {
    console.log("i=>", i);
  }
  console.log("outside", i);
}
start();

var color = "red";
let age = 30;

function sayHi() {
  console.log("Hi");
}
/ FUNCTION call, apply and bind methods /;
function playVideo() {
  console.log(this);
}

//playVideo();
playVideo.call({ name: "Nana Kweku" }, [1, 2, 3]);

console.log([10, 20, 30]);
function sum2(...items) {
  console.log(items);
}

/ FUNCTION EXERCISES /;
function Sum(num) {
  if (Array.isArray(num)) {
    return num.reduce((a, b) => a + b);
  } else {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
      total += arguments[i];
    }
    return total;
  }
}
console.log("Sum", Sum(10, 20));

const valCircle = {
  radius: 1,
  get area() {
    let a = Math.PI * Math.pow(this.radius, 2);
    return a;
  },
};

valCircle.radius = 42;
console.log("Radius", valCircle.radius);
console.log("Area", valCircle.area);

function divide() {
  let numerator = Number(prompt("Enter numerator"));
  let denominator = Number(prompt("Enter denomiator"));

  try {
    if (denominator === 0) {
      throw {
        error: "Divide by zero error",
        message: "Denominator cannot be ZERO",
      };
    } else {
      document.write("Result = " + numerator / denominator);
    }
  } catch (e) {
    document.write("Error = " + e.error + "<br/>");
    document.write("Message = " + e.message + "<br/>");
  }
}
//divide();

//const names = ['Val', 'Nana', 'Ama', 'Val', 2, 2, 2];
const names = "Val";
try {
  let countItems = countOccurrence(names, "Ama");
  console.log("countItems", countItems);
} catch (e) {
  console.error(e.message);
}

function countOccurrence(array, searchElement) {
  let count = 0;
  return array.reduce(function (accumulator, name) {
    let occurrence = name === searchElement ? 1 : 0;
    return accumulator + occurrence;
  }, 0);
  // return array.filter(value => value === searchElement).length;
}
/ IIFE (Immediately Invoked Function Expression) /(function iife() {
  console.log("I WAS IMMEDIATELY INVOKED");
})();
