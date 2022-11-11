function Shape(color){
    this.color = color;
}
    Shape.prototype.duplicate =  function(){
        console.log('duplicate in shape');
    }

/** intermediate Function Inheritance */
function extend(Child, Parent){
    Child.prototype = Object.create(Parent.prototype);
    /** reset constructor after resetting the prototype **/
    Child.prototype.constructor = Child;     
}

function Circle(radius, color){
    this.radius = radius;
    Shape.call(this, color);// call super constructor
}
/** Object.create will set the Circle prototype to Shape.prototype **/
Circle.prototype = Object.create(Shape.prototype);
/** reset constructor after resetting the prototype **/
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function(){
    console.log('draw a circle');
}
Circle.prototype.duplicate = () => {
    console.log('duplicate in circle');
}

function Square(size){
    this.size = size;
}
extend(Square, Shape);

/** method overriding */
Square.prototype.duplicate = () => {
    console.log('duplicate in square');
    //Shape.prototype.duplicate.call(this);//call duplicate in superclass(shape)
}

const c = new Circle(1,'red');
const c1 = new Circle.prototype.constructor(1);
const sq = new Square(10);

/** polymorphism  */
const shapes = [
    new Circle(100, 'black'),
    new Square(111)
];

for(let shape of shapes)
shape.duplicate();

/** composition (Mixins)  */
function mixin(target, ...spread){//using rest operator(turn all arguments into an array)
    Object.assign(target, ...spread);//using spread operator(to spread an array into multiple arguments)
}


const canEat = {
    eat: () => {
        this.hunger--;
        console.log('Eating !!!');
    }
};

const canWalk = {
    walk: () => {
        this.hunger--;
        console.log('Walking !!!');
    }
};

const canSwim = {
    swim: () => {
        console.log('swimming fish');
    }
};

function Human(){

}
mixin(Human.prototype, canEat, canWalk);

function Goldfish(){

}
Object.assign(Goldfish.prototype, canEat, canSwim);

const person = Object.assign({}, canEat, canWalk);
console.log(person);
//****************************************************************************************/
//****************************************************************************************/
function HtmlElement(){
    this.click = function() {
        console.log('clicked');
    }
};

HtmlElement.prototype.focus = () => {
    console.log('focused');
}

const h1 = new HtmlElement();

function HtmlSelectElement(...items){
//function HtmlSelectElement(items =[]){    
    //this.items = items || [];
    this.items = items;  

    this.addItem = (value) => {
        items.push(value)
    }

    this.removeItem = function(value) {
        const index = items.findIndex(item => item === value);
        if(index !== -1)
            items.splice(index, 1);
        else
        console.log(value + ' = Not Found');   
    }
    this.render = () => {
        return`
        <select>${this.items.map(item => `
          <option>${item}</option>`).join('')}
        </select>`;    
        }
    /** this.render = () => {
         const optionArray = items.map(item => '<option>' +item+ '</option>');
         return  '<select>' + optionArray.join('') + '</select>';
     } */

}

//HtmlSelectElement.prototype = Object.create(HtmlElement.prototype);
HtmlSelectElement.prototype = new HtmlElement();// set prototype to instance of HtmlElement
HtmlSelectElement.prototype.constructor = HtmlSelectElement;  

function HtmlImageElement(src){
    this.src = src;

    this.render = () => {
       //return '<img src="' +this.src+ '"/>';
       return `<img src="${this.src}"/>`;//using template string
    }
}
HtmlImageElement.prototype = new HtmlElement()
HtmlImageElement.prototype.constructor = HtmlImageElement;  

const elements = [
    new HtmlSelectElement(11, 12, 13, 14),
    new HtmlImageElement('https://Ghanaweb.com')
];

for(let element of elements)
   console.log(element.render());








