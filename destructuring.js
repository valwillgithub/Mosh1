function sumAndMultiply(a, b) {
  return [a + b, a * b];
}

const myArray = sumAndMultiply(5, 10);
console.log('myArray => ', myArray);
const [sum, multiply] = sumAndMultiply(5, 10);
console.log(sum);
console.log(multiply);

const personOne = {
  name: 'Val',
  age: 52,
  food: 'Gari',
  haircolor: 'black',
  address: {
    city: 'London',
    country: 'UK',
  },
};

const personTwo = {
  name: 'John',
  age: 50,
  address: {
    city: 'Lagos',
    country: 'Nigeria',
  },
};
const {
  name: firstName = 'Alister',
  address: { city },
} = personTwo;
console.log('firstName ==>> ', firstName);
console.log('city ==>> ', city);

const { name, ...rest } = personTwo;
console.log('name ==>> ', name);
//console.log(country);
console.log('rest == >', rest);

const personThree = { ...personOne, ...personTwo };
console.log('personThree ==>> ', personThree);

function printUser({ name, age }) {
  console.log(`Name is ${name}, Age is ${age}, food is "Banku"`);
}

printUser(personTwo);

const alphabet = ['A', 'B', 'C', 'D', 'E', 'F'];

//const [val, , , , , mond] = alphabet;
const [val, ...mama] = alphabet;

console.log('val =>', val);
//console.log('mond =>', mond);
console.log('mama =>', mama);
