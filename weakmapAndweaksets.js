/ SETS /
const myArray = new Array();
myArray[0] = 1;

const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3).add(4);

console.log(mySet);
console.log('Size', mySet.size);
//console.dir(mySet);

/** convert array into a set */
const array1 = [1,1,2,2,3,3,4,4];
const myset1 = new Set(array1);
console.log('myset1', myset1);
for(let val of myset1){
    console.log(val);
}

/** convert set into an array */
const array2 = [...new Set(array1)];
const array3 = Array.from(new Set(array1));

console.log('array2', array2);
console.log('array3', array3);

/ WEAK SETS : You can only add objects and are not Iterable /
const myweakSet = new WeakSet([{a:'val'},{b:1}]);
myweakSet.add({c:'val'});
myweakSet.add({d:1});
myweakSet.add({e:3});
console.log(myweakSet);


/ MAPS : You can store objects as keys /
const a = {a : 'nana'};
const b = {num : 1};
const map = new Map();
map.set(a, 'kumasi')
map.set(b, 'ashtown')
map.set({age : 51},{address : 26});

console.log('map',map);
//map.delete(b);
for(let [key, value] of map.entries())
  console.log(key, value);

const mapArray = [...map];
console.log('mapArray', mapArray);
map.clear();

/ WEAKMAPS : are garbage collected /

{    
     let x = {
         x : 'xray'
       };

    var map1 = new WeakMap();
    map1.set(x, 'something'); 
}

console.log(map1);
