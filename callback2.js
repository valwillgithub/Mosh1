// function getNumber(cb) {
//   setTimeout(() => {
//     cb(20);
//   }, 2000);
// }

// getNumber(function (v) {
//   console.log(v);
// });

// function getNumberPromise() {
//   return new Promise((resolve, reject) => {
//     getNumber(resolve);
//   });
// }

// const thePromise = getNumberPromise();

// thePromise.then((value) => console.log(value));

let nums = [1, 2, 2, 3, 3, 4, 5, 5, 6];
console.log([...new Set(nums)]);

//freeze won't let you add a new property
let freezeProfile = {
  name: "valfreeze",
};

Object.freeze(freezeProfile);
freezeProfile.age = 3;
console.log("freezeProfile => ", freezeProfile);

//seal lets you change an existing property but not add/remove new one
let sealProfile = {
  name: "valseal",
};

Object.seal(sealProfile);
sealProfile.age = 53;
sealProfile.name = "valseal2";
console.log("sealProfile => ", sealProfile);

//Allow some property to be changed but prevent others
let writerbleProfile = {
  name: "valWriterbleFalse",
};

Object.defineProperty(writerbleProfile, "age", {
  value: 100,
  writable: false,
});

writerbleProfile.name = "changedName";
writerbleProfile.age = 5000;
console.log("writerbleProfile => ", writerbleProfile);

console.log(Math.max(30, 45, 56));
