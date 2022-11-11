/*    ADD ELEMENTS TO ARRAY **/
const numbers = [3, 4];

// Add Element at Beginning
numbers.unshift(1, 2);
// Add Element at Middle
numbers.splice(2, 0, "a", "b");

// Add Element at the End
numbers.push(5, 6);
console.log(numbers); // Alt+Down/Up Arrow to move line up or down.
console.log("number includes a => ", numbers.includes("a"));

/*  FINDING ELEMENTS IN AN ARRAY(PRIMITIVES INCLUDES) **/
const numbers1 = [1, 2, 3, 4, 5];
console.log("indexOf => ", numbers1.indexOf(1));
console.log("lastIndexOf => ", numbers1.lastIndexOf(4));
console.log("includes => ", numbers1.includes(4));

/*  FINDING ELEMENTS IN AN ARRAY(OBJECTS(REFERENCE TYPES)) **/
const courses = [
  { id: 1, name: "history" },
  { id: 2, name: "biology" }, // Shft+Alt+DownArrow to duplicate line
];
/** find using function with Predicate. */
let course1 = courses.findIndex(function (course) {
  return course.id === 2;
});

/*    USING ARROW FUNCTIONS **/
// let course2 = courses.find((course) => {
//     return course.name === 'biology';
// });

let course2 = courses.find((course) => course.name === "biology");
console.log("course2", course2);

/*  REMOVE ELEMENTS FROM ARRAYS **/
let numbers3 = [1, 2, 3, 4, 5];
// Remove Element at Beginning
let first = numbers3.shift();
console.log("use shift on numbers3 => ", numbers3);

// Remove Element at Middle
let mid = numbers3.splice(2, 1);
console.log("use splice on numbers3 => ", numbers3);

// Remove Element at the End
let last = numbers3.pop();
console.log("use pop on numbers3 => ", numbers3);

/*  EMPTYING ARRAYS **/
let numbers4 = [11, 12, 13, 14, 15];
//numbers4 = [];
//numbers4.length = 3;
numbers4.splice(0, numbers4.length);
while (numbers4.length > 0) numbers4.pop();

//console.log(numbers3)
/*  COMBINING AND SLICING ARRAYS **/

let aa = [20, 21, 22, 23]; //copied by value
let bb = [24, 25, 26];
let cc = aa.concat(bb);
console.log("use concat =>", cc);

let slice = cc.slice();
console.log("use slice => ", slice);
/*  CONCATE REFERENCE TYPES **/
let aaRef = [{ name: "Leceister" }];
let bbRef = aaRef.concat(bb); // copied by reference
aaRef[0].name = "Birmingham";
console.log("bbRef => ", bbRef);

// SPREAD OPERATOR
const combined = [...aa, "AA", ...bb, "BB"];
console.log("combined spread => ", combined);

// ITERATE AN ARRAY (FOR OF) // interates array by value NOT index
for (let key of combined) console.log("FOR OF", key);

const copyOfCombined = [...combined]; //creates a new array called copyOfCombined.
console.log("copyOfCombined => ", copyOfCombined);
// ARRAY FOREACH LOOP
//
// ARRAY JOIN METHOD
let message = "This is my test message";
let splitArray = message.split(" ");
let joinedArray = splitArray.join("--");
console.log("joinedArray => ", joinedArray);

// ARRAY SORT & REVERSE
var num = combined.sort();
console.log("sort => ", combined);
console.log("reverse => ", combined.reverse());

// SORT REFERENCE TYPES IN ARRAY
let students = [
  { id: 1, name: "Valmond" },
  { id: 2, name: "alister" }, // Shft+Alt+DownArrow to duplicate line
];

students.sort(function (a, b) {
  if (a.name.toUpperCase() < b.name.toUpperCase()) return -1; // a < b -> -1
  if (a.name.toUpperCase() > b.name.toUpperCase()) return 1; // a > b -> 1
  return 0; // a === b -> 0
});
//Multi cursor editing - Select text and press Ctrl+D
console.log("students", students);

// EVERY AND SOME IN ARRAY
const numbers5 = [11, 12, 13, 14, 15, -20];
const allPositive = numbers5.every(function (value) {
  return value >= 0;
});
console.log("allPositive", allPositive);

const atLeast = numbers5.some(function (value) {
  return value >= 0;
});
console.log("atLeast", atLeast);

// FILTER ARRAY
let filtered = numbers5.filter((value) => value >= 12);
console.log("filtered", filtered);

// MAP ARRAY
let listItems = filtered.map((n) => "<li>" + n + "</li>");
console.log("listItems", listItems);
let html = "<ul>" + listItems.join("") + "</ul>";
console.log("html", html);
// MAPPING AN OBJECT
let objectItems1 = filtered.map((n) => {
  // let obj = {key : n};
  // return obj
  return { key: n };
});
console.log("objectItems1", objectItems1);

let objectItems2 = filtered.map((n) => ({ key: n }));
console.log("objectItems2", objectItems2);

// METHOD CHAINING
let chain = numbers5.filter((value) => value >= 12).map((n) => ({ key: n }));
console.log("chain", chain);

//REDUCE METHOD ARRAY (ADD ALL ELEMENTS UP)
let sum1 = 0;
for (let n of numbers5) sum1 += n;

console.log("sum1", sum1);

const sum2 = numbers5.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 10); //Without Initial value, first array element is used
console.log("sum2", sum2);

/*  ARRAY EXERCISES **/
function arrayFromRange(min, max) {
  let myArray = [];
  for (let i = min; i <= max; i++) myArray.push(i);

  return myArray;
}
console.log("arrayFromRange", arrayFromRange(-10, -2));

let numbers6 = [11, 12, 13, 20, 21, 22];

function includes(myArray, searchElement) {
  let flag = false;
  for (let key of myArray) {
    // interates array by value NOT index
    if (key === searchElement) {
      flag = true;
      break;
    }
  }
  return flag;
}
console.log("includes", includes(numbers6, 22));

function except1(array1, exclude) {
  return array1.filter((value) => value !== exclude);
}
let numbers7 = [11, 12, 13, 20, 21, 22];
function except2(array1, excludeArray) {
  let output = [];
  for (let element of array1) {
    if (!excludeArray.includes(element)) output.push(element);
  }
  return output;
}
//console.log('exceptExercise', except(numbers7, [12,13]));

function except3(array1, excludeArray) {
  return array1.filter((element) => !excludeArray.includes(element));
}
//console.log('exceptExercise3', except3(numbers7, [12, 13, 21]));
let numbers8 = ["aa", 11, 12, 13, 14, 15];
function moveElement(myArray, index, offset) {
  //let myArrayCopy = myArray.slice();//copy the array
  let myArrayCopy = [...myArray]; //copy the array
  let position = index + offset;

  if (position >= myArrayCopy.length || position < 0)
    return console.error("Invalid Position");

  // if (offset > myArrayCopy.length)
  //     return console.error('Invalid Offset');

  // if (index > myArrayCopy.length)
  //     return console.error('Invalid Index');

  let indexItem = myArrayCopy[index];
  myArrayCopy.splice(index, 1);
  //myArrayCopy.splice(offset, 0, indexItem);
  myArrayCopy.splice(position, 0, indexItem);
  return myArrayCopy;
}
console.log("moveElement", moveElement(numbers8, 3, 0));

const names = ["Val", "Nana", "Ama", "Val", 2, 2, 2];
function countOccurrence(array, searchElement) {
  // let count =0;
  // array.reduce(function(allNames, name) {
  //     if (name === searchElement) {
  //         count++
  //       }
  // });
  // return count;
  return array.filter((value) => value === searchElement).length;
}
console.log("countOccurrence", countOccurrence(names, 2));

const maxNumbers = [2, 7, 4, 5];
function checkMaxNumber(myArray) {
  if (myArray.length === 0) return undefined;
  //   let max = myArray[0];
  // for(let i = 1; i < myArray.length; i++){
  //     if(myArray[i] > max)
  //      max = myArray[i];
  // }
  // return max;

  //return myArray.reduce((accumulator, currentValue) => (currentValue > accumulator) ? currentValue : accumulator);
  return Math.max(...myArray);
}
console.log("MaxFunction", checkMaxNumber(maxNumbers));

const films = [
  { Title: "My Cousin Vinny", Rating: 4.5, Year: 2018 },
  { Title: "The Last Boys Scout", Rating: 4.7, Year: 2018 },
  { Title: "Hotel Rewande", Rating: 3.5, Year: 2018 },
  { Title: "Peppa Pig", Rating: 4.5, Year: 2012 },
];

/** films.sort(function(a,b){
    if(a.Title.toUpperCase() < b.Title.toUpperCase()) return -1;
    if(a.Title.toUpperCase() > b.Title.toUpperCase()) return 1;
    return 0;    
})

const filteredFilms = films.filter(item => item.Year === 2018
                    && item.Rating > 4);
console.log('filteredFilms', filteredFilms);

filteredFilms.sort(function(a,b){
    if(a.Rating < b.Rating) return -1;
    if(a.Rating > b.Rating) return 1;
     return 0;    
})
console.log('filteredFilms Sorted Des',filteredFilms);
console.log('filteredFilms Reverse',filteredFilms.reverse());

filteredFilms.forEach(item => console.log(item.Title)); */

const mapFilteredFilms = films
  .filter((item) => item.Year === 2018 && item.Rating > 4)
  // .sort(function(a,b){
  //     if(a.Rating < b.Rating) return -1;
  //     if(a.Rating > b.Rating) return 1;
  //      return 0;
  .sort((a, b) => a.Rating - b.Rating)
  .reverse()
  .map((item) => item.Title);
console.log("mapFilteredFilms", mapFilteredFilms);

let prodID =
  "https://app.dev.sylvera.com/project/742196cb-9b0e-4bf9-a5c1-93b9b7e6df2e?tab=sylveraRating";

//let myArray = prodID.split(/project\/|\?/);
let myArray = prodID.split(/project\/|\?/);
let ray = prodID.split(/project\/|\?/)[1];

console.log("myArray => ", myArray);
console.log("ray => ", ray);
// let myArray2 = myArray[0].split("project/");
// console.log(myArray2);
