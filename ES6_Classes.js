'use strict';

/** Class Expression : Not Hoisted*/ 
const Test = class{

}

/** class declaration : Not Hoisted (body of class is executed in strict mode */

class Circle{
    constructor(radius){
        this.radius = radius;
    }
  // Instance method
    draw() {
        console.log(this, 'draw method');
    }

  // Static method
    static parse(str){
        console.log('parse method', str);
    }
}
const c = new Circle(1)
c.draw();

/ Private Properties & Methods /
const _radiusSymbol = Symbol();
const _radiusWeakMap = new WeakMap();// keys are Objects and values are anthing
const _moveWeakMap = new WeakMap();// keys are Objects and values are anthing


class CircleClass1{
    /** constructor(radius){
        this[_radius] = radius; // private property
    } */
    constructor(radius){
        _radiusWeakMap.set(this, radius);// private property
        _moveWeakMap.set(this, () => { // Arrow functions use the this value of the containing function
            console.log('_move', this);
        });
    }

    draw(){ // instance method
        _moveWeakMap.get(this)();
        //console.log(_radiusWeakMap.get(this));
        console.log('draw method');
    }


}//class
const c1 = new CircleClass1(2);
//c1._radius = 20;
//const key = Object.getOwnPropertySymbols(c1)[0];
//console.log('key', c1[key]);

/ Private Properties & Methods using a single weakmap/
const _privateProp = new WeakMap();// keys are Objects and values are anthing

class CircleClass2{
    constructor(radius){
        _privateProp.set(this, {
            radius : radius,
            move : () => {
             console.log('moooooove', this);
            }
           });
    }//constructor

    draw() { // instance method
        console.log(_privateProp.get(this).move());
    }

}//class

const c2 = new CircleClass2(2);
c2.draw();

/ Using Getters & Setters /
const _radius3 = new WeakMap();// keys are Objects and values are anthing
class CircleClass3{
    constructor(radius){
        _radius3.set(this, radius);// private property
    }

    get radius(){
        return _radius3.get(this);
    }
    set radius(value){
        if(value <= 0)
          throw new Error('invalid radius');
        _radius3.set(this, value);  
    }
        
}//CircleClass3
const c3 = new CircleClass3(3);

/ Class Inheritance and Method Overriding /
class Shape{
    constructor(color){
        this.color = color;
    }

    move(){
        console.log('Move in shape');
    }
}

class Circle4 extends Shape {
    constructor(color, radius){
        super(color);
        this.radius = radius;
    }

    draw() {
        console.log('draw')
    }

    move(){
        super.move();
        console.log('Move in Circle4');
    }
}
const c4= new Circle4('Blue', 4);

/  STACK EXERCISE  /

const _stackArray = new WeakMap();
class Stack{
    // constructor(){
    //     _stackArray.set(this, {
    //         arr : []
    //     });
    // }
    #valArray;
    constructor(){

        this.#valArray = new Array();
    }

    get count(){
        //return this.myArray.length;
        return this.#valArray.length;
    }

    push(value){
        //this.myArray.push(value);
        this.#valArray.push(value);
    }

    pop(){
        if(this.count === 0){
            throw new Error('Stack is empty');
        }
        //this.myArray.pop();
        this.#valArray.pop();

    }

    peek(){
        if(this.count === 0){
            throw new Error('Stack is empty');
        }
        return this.#valArray[this.#valArray.length - 1];
        //return _stackArray.get(this).arr[_stackArray.get(this).arr.length - 1];

       //return this.myArray[this.myArray.length - 1];
    }

}// Stack class

const st = new Stack();
//st.push(11);


function ensure(value) {
    //const val = arguments.length;
     console.log('arg length',arguments.length);
     console.log(arguments);
    if(arguments.length === 0){
      throw new Error('no argument');
    }
    const myArray = [];
    for(let i of arguments){
        myArray.push(i);
    }
    console.log('values passed', myArray)
    return myArray;
  }

  ensure(1,2,3,4,5);
  
//   try {
//     console.log(ensure());
//   } catch(err) {
//     console.log(err);
//   }
  


 var passed = 3;
 var addto = function(){
 var inner = 2;
  return innner + passed;
}
console.dir(addto);

console.log('Answer = ',2+5+'3');
console.log('Answer2 = ','3'+2+5);

function Val(){
//var Foo = function Val(){
    return 7;
}

console.log(typeof Val());
/** Remove duplicates from array*/ 
let array1 = [2,4,6,8,9,8,6,4,2,3];
let set1 = new Set(array1);
console.log('set1', set1);

const array2 = [...set1];
console.log('array2', array2.sort());

/* IIFE (Immediately Invoked Function Expression) */
(function iife (){
    console.log('I WAS IMMEDIATELY INVOKED');
})();

/ All the below will return undefined /
let null1 = null;
let foo;
let obj1 = {};
let bar = [1,2,3];
const func1 = function () {
    console.log('func name');    
}
console.log(foo, obj1.name, bar[2], func1());

console.log(typeof foo);
console.log(typeof john);
console.log(typeof null1);