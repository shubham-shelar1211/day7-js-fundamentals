// Object CLONING
let ref = { id: 1, name: "rohit" };
// let ref1 = ref; // this is not cloning.
let ref1 = { ...ref };
let ref2 = { ...ref, sub: "web" };

console.log(ref);
console.log(ref1);
//console.log(ref2);
