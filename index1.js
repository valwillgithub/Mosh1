
// const person = {
//     name: 'Alister',
//     age: 51
// };

// for(let p in person)
//   console.log(p, person[p]);

//for in loop 
//var names = ['Nana','Awura','Ama','Val','Williams'];
// for (let i in names) {
//     console.log(i, names[i]); 
// }
//for of loop (iterate over items in an Array)
// for (const n of names) {
//     console.log(n);    
// }

function isLandscape(width, height) {
    if (width > height) {
        return 'Is Landscape';
    } else if (height > width) {
        return 'Is Portrait';
    } else if (width === height) {
        return 'Same Size';
    }
}
// console.log(isLandscape(100, 50));

function FizzBuzz(num) {
    if ((num % 3 === 0) && (num % 5 === 0)) {
        console.log('FizzBuzz');
        return;
    }
    if (num % 3 === 0) {
        console.log(num + ' % 3 => ' + 'Fizz');
        return;
    }
    if (num % 5 === 0) {
        console.log(num + ' % 5 => ' + 'Buzz');
        return;
    }
    if (typeof (num) !== 'number') {
        return NaN;
    } else {
        return num;
    }
}
//console.log(FizzBuzz(11));

function checkSpeed(speed) {
    let actualSpeed = Math.floor(speed);
    const speedLimit = 70;
    if (actualSpeed <= speedLimit) {
        console.log('OK');
        return;
    }
    let diff = actualSpeed - speedLimit;
    let points = 0;
    let remainder = 0;
    if (diff < 5) {
        console.log('OK');
    } else {
        do {
            //remainder = diff - 5;
            diff -= 5;
            points = ++points;

        } while (diff > 0);
    }
    if (points >= 12) {
        console.log('License Suspended');
    }
    console.log('Point ==> ' + points)
}

//console.log(checkSpeed(100))

function checkSpeed2(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;
    if (speed < speedLimit + kmPerPoint) {
        console.log('OK');
    } else {
        let rc = (speed - speedLimit) / kmPerPoint;
        let points = Math.floor((speed - speedLimit) / kmPerPoint);
        if (points >= 12) {
            console.log('License suspended');
        } else {
            console.log('Points', points);
        }
    }

}// checkSpeed2
//console.log(checkSpeed2(82))

function showNumbers(limit) {
    for (let i = 1; i <= limit; i++) {
        // if(i % 2 === 0)
        //     console.log(i +' EVEN');
        // else
        //    console.log(i +' ODD')

        const message = (i % 2 === 0) ? 'EVEN' : 'ODD';
        console.log(i, message)
    }
}
//console.log(showNumbers(20))
let val = 'valmond';
let someArray = [0, null, undefined, NaN, 3, 4];
function countTruthy(stuff) {
    let count = 0;
    for (let i of stuff) {
        if (i)
            count++;
    }
    return count;
}
//console.log(countTruthy(someArray));

const movie = {
    title: 'My cousin Vinny',
    year: 1991,
    region: 'Europe'
};

function showProperties(obj) {
    for (let p in obj) {
        console.log(obj[p]);
    }

    for (let key in obj) {
        if (typeof (obj[key]) === 'string')
            console.log(obj[key] + ' is a string');
    }
}

console.log(showProperties(movie));

function sum(limit) {
    let sum = 0;
    for (let i = 0; i <= limit; i++) {
        if (i % 3 === 0 || i % 5 === 0)
            sum += i;
    }
    return sum;
}
//console.log(sum(10));
let marks = [100, 100, 111, 100];
function calculatGrade(marksArray) {
    let total = 0;
    let grade = '';
    for (let key of marksArray) {
        total += key;
    }
    let avg = Math.floor(total / marksArray.length)
    console.log('Average => ' + avg)
    if (avg <= 59)
        return grade = 'F';
    if (avg <= 69)
        return grade = 'D';
    if (avg <= 79)
        return grade = 'C';
    if (avg <= 89)
        return grade = 'B';
    if (avg <= 100)
        return grade = 'A';
    if (avg > 100)
        return grade = 'You Do All';

    return grade;
}
//console.log(calculatGrade(marks));

function showStars(rows) {
    for (let i = 1; i <= rows; i++) {
        printStars(i);
    }
}
function printStars(num) {
    console.log("*".repeat(num));
}
//console.log(showStars(50));

//Show Prime Numbers
function showPrimeNumbers(limit) {
    for (let number = 2; number <= limit; number++) {
        let isPrime = true;
        for (let factor = 2; factor < number; factor++) {
            if (number % factor === 0) {
                isPrime = false;
                break
            }
        }
        if (isPrime)
            console.log(number + ' is Prime')
    }
}
// console.log(showPrimeNumbers(20));
/**  OBJECTS      OBJECTS      OOP  ******/
const circle1 = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function () {
        console.log('Draw a circle 1');
    }
};
//circle1.draw();// draw method
/**    FACTORY FUNCTION ***********/
function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('Draw a circle from factory');
        }
    };
}
//const circle2 = createCircle(5);
//console.log(circle2)
/**    CONSTRUCTOR FUNCTION ***********/
function ConstructorCircle(radius) {
    this.radius = radius,
        this.draw = function () {
            console.log('Draw a circle from Constructor');
        }
}
const constructCircle = new ConstructorCircle(20);
//console.log(constructCircle);

/** ENUMERATING PROPERTIES OF AN OBJECT *******/
const sphere = {  //object literal syntax
    radius: 1,
    draw() {
        console.log('Draw Sphere');
    }
};

for (let key in sphere)
    // console.log(key, sphere[key]);  

for (let key of Object.keys(sphere))
    console.log(key);

for (let entry of Object.entries(sphere))
    console.log(entry);

//console.log(('draw1' in sphere) ? 'Yes' : 'No');

/** COPYING OBJECT *******/

const sphere1 = {};
for (let key in sphere) {
    sphere1[key] = sphere[key];
}
//console.log('sphere1',sphere1);

const sphere2 = Object.assign({
    color: 'yellow',
    height: '6ft'
}, sphere);
//console.log('Object.assign',sphere2);

let sphere3 = { ...sphere2 };
console.log('spread operator', sphere3);

/** STRINGS *******/
// String primitive
let message1 = 'Hi Val';
// String Object
let message2 = new String('Hi Val2 me check you');

/** TEMPLATE LITERALS *******/
/** Object {} object literal
Boolean true = boolean literal
String '', "" = String literal
Template `` =  Template literal */
const name = 'Vasty Jay';
const str = `Hi ${name},
This is an email to you
to verify your acceptance
of salary of ${50000 + 10000}`;
console.log(str);
/** ADDRESS OBJECT EXERCISE *******/
const addressObject = {
    Street: '26 Martini Drive',
    City: 'London',
    PostCode: 'EN3 6GW'
};

function showAddress(address) {
    for (let key in address) {
        console.log(key, address[key]);
    }
}
//console.log(showAddress(addressObject));

function showAddressFactory(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    };
}
const showFactory = showAddressFactory('kk', 'pp', 'N17 8JU');
//console.log(showFactory);

function ShowAddressConstructor(street, city, zipCode) {// Pascal Notation
    this.Street = street,
        this.city = city,
        this.zipCode = zipCode
}
const constructorAddress1 = new ShowAddressConstructor('aa', 'bb', 'EN3 6GW');
const constructorAddress2 = new ShowAddressConstructor('aa', 'bb', 'EN3 6GW');

function areSame(add1, add2) {
    if (add1 === add2)
        return true;
    else
        return false;
}
//console.log(areSame(constructorAddress1, constructorAddress2));

function areEqual(add1, add2) {
 return add1.street === add2.street &&
 add1.city === add2.city &&
 add1.zipCode === add2.zipCode;
}
//console.log(areEqual(constructorAddress1, constructorAddress2));

const blogPost = {  //object literal syntax
    title: 'My First Copy Book',
    body: 'Writing book for children',
    author: 'Valmond Williams',
    view: 10,
    comments :[
         {author: 'author1', body: 'body1'},
         {author: 'author2', body: 'body2'},
    ],
        isLive : true    
};
//console.log(blogPost);

function Post(title, body, author){
    this.title = title,
    this.body = body,
    this.author = author,
    comments = [],
    views = 0,
    isLive = false
}
console.log(Post);

/** ARRAY OF OBJECTS *******/
let priceRanges = [
    { label : '£', tooltip : 'Inexpensive', minPerPerson : 0, maxPerPerson : 10},
    { label : '££', tooltip : 'Moderate', minPerPerson : 11, maxPerPerson : 20},
    { label : '£££', tooltip : 'Expensive', minPerPerson : 21, maxPerPerson : 50}
];

