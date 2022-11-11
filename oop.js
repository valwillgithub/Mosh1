
let object1 = {
    name: 'Valmond',
    age: 51,
    address: {
        houseNo: 26,
        street: 'Martini Drive',
        postCode: 'EN3 6GW'
    }
};
let shallowClone = { ...object1 }; // shallow clone
let deepClone = JSON.parse(JSON.stringify(object1))// deep clone


object1.address.houseNo = 117;
console.log('object1', object1);
console.log('shallowClone', shallowClone);
console.log('deepClone', deepClone);

/ PRIVATE PROPERTIES & METHODS /
function CreateCircle(radius) {
    // instance members
    this.radius = radius;
    this.move = function(){
        console.log('this.move log');
    }

    let defaultLocation = { x: 0, y: 0 };
    let computeLocation = function (factor) {
        console.log('computeLocation', factor);
    };

    Object.defineProperty(this, 'defaultLocation', {
        get: function () {
            return defaultLocation;
        },
        set: function (value) {
            if (!value.x || !value.y)
                throw new Error('Invalid value');
            defaultLocation = value;
        }
    });
}

// Prototype members
CreateCircle.prototype.draw =  function () {
    console.log('draw property');
}
// verride default toString method
CreateCircle.prototype.toString = function(){
    return 'Circle with radius ' + this.radius;
}
const myCircle = new CreateCircle(10);
myCircle.draw();

//Object.keys returns instance members
console.log(Object.keys(myCircle))

//for in loop: returns both instance(own) and proyotype memebers
for (let key in myCircle) console.log(key);
 
let person = {
    name : 'Alister',
    age : 51
};
Object.defineProperty(person, 'name',{
    writable : false, // False = makes property readOnly
    enumerable : true, // False = will not showup in Object.keys
    configurable : false // False = cannot be deleted
});
console.log('Object.keys', Object.keys(person));
delete person.name;
console.log('person', person);

let objectBase = Object.getPrototypeOf(person);
console.log('Object.getPrototypeOf(person)', objectBase);//get superClass of person object
console.log('person.__proto__',person.__proto__); // deprecated

let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'hasOwnProperty');
console.log('descriptor', descriptor);


/ OOP EXERCISES /

// STOP WATCH EXERCISE 1
function CreateStopWatch() {
    let startTime, endTime, running, duration = 0;
    this.start = function () {
        if (running)
            throw new Error('Stopwatch has already started !');

        running = true;
        startTime = Date.now();
        console.log(startTime + ' == ' + typeof (startTime));
        //return startTime;
    },
        this.stop = function () {
            if (!running)
                throw new Error('StopWatch has not started !')

                running = false;
                endTime = Date.now();
                const diff = (endTime - startTime) / 1000;
                duration += diff;
            console.log(endTime + ' == ' + typeof (endTime));
            
        },

        Object.defineProperty(this, 'duration',{
            get : function(){
                return duration;
            }
        })
    this.reset = function () {
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    }
}

// STOP WATCH EXERCISE 2
function StopWatchPrototype() {
    let startTime, endTime, running, duration = 0;
        Object.defineProperties(this,{
        'duration' : {
            get : function(){
                return duration;
            },
            set : function(value){
                duration = value;
            }
        },
        'startTime' : {
            get : function(){
                return startTime;
            },
            set : function(value){
                startTime = value;
            }
        },
        endTime : {
            get : function(){
                return endTime;
            },
            set : function(value){
                endTime = value;
            }
        },
        running : {
            get : function(){
                return running;
            },
            set : function(value){
                running = value;
            }
        }     
     })//Object.defineProperties


}
StopWatchPrototype.prototype.start =  function () {
        if (this.running)
            throw new Error('Stopwatch has already started !');

        this.running = true;
        this.startTime = Date.now();
        console.log(this.startTime + ' == ' + typeof (this.startTime));
  }
  StopWatchPrototype.prototype.stop =  function () {
        if (!this.running)
            throw new Error('StopWatch has not started !')

            this.running = false;
            this.endTime = Date.now();
            const seconds = (this.endTime - this.startTime) / 1000;
            this.duration += seconds;
        console.log('Duration is => ' + this.duration);

        
    }

StopWatchPrototype.prototype.reset =  function () {
        this.startTime = null;
        this.endTime = null;
        this.running = false;
        this.duration = 0;
  }

const swp = new StopWatchPrototype();
swp.start();
swp.stop();




