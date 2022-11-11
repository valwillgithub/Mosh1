const interestRate = 0.3;
console.log(interestRate);

/** Primitives(Value types): String, Number, Boolean, undefined, null */
let name = 'Nana';
let age = 51;

let person = {
    name: 'Valmond',
    age: 51
};

person.name = 'Alister';
person['age']=99;

let selection = 'age';
person[selection] = 200;
console.log(person);

let colors = ['red','gold','green','black']
colors[4] = 100;
console.log('Index.js');

function greet(name, age){
  //  console.log('Hello '+name+': '+age);
}
greet('Nana', 14);

function cubed(number){
    return number * number * number;
}
//console.log(cubed(3));

function expo(num1, num2){
    return num1 ** num2;
}
console.log(expo(2,5));

let x = 10;
console.log(x++);
console.log(x)
console.log(x--);
x += 5;
console.log(x);
let a = 20;
/** Strict Equality Operator (same Type and Value) 
console.log(20 === 20);
Loose Equality (will convert what's on the right to
match what's on the left
console.log(a == 20);

Logical Operators with non-booleans
Falsy, undefined, null, false, '', 0, NaN. */

let userColor;
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
console.log(currentColor);
/** Bitwise Operators */
1 = 00000001
2 = 00000010
3 = 00000011
console.log(1|2);//Bitwise OR (Use for adding)
console.log(1&2);//Bitwise AND (use for checking)
/** Check Odd numbers */

for (let i = 1; i <= 100; i++) {
    if(i % 2 !==0)
    console.log(i);    
}

for (let i = 100; i >= 1; i--) {
    if(i % 2 !==0)
    console.log(i);    
}












