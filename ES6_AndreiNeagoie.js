/** Destructing */
const obj = {
    player: 'bobby',
    experience: 100,
    level: false
}

const player = obj.player;
const experience = obj.experience;
const {player, experience} = obj;// much cleaner

const name = 'John Snow';
const obj = {
    [name] : 'Hello',
    [1 + 2] : 'hi number'
};
/** Default Parameters */
function greet(name='', age=30){
    return `Hello ${name}, your age is ${age}`;
}

greet('Valmond', 51);

/** Immediately Invoked Function Expression IIFE */
(function() {

})()