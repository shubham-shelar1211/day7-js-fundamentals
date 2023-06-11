let list = ["delhi", "calcutta", "chennai"];

// [Hello delhi, Hello Calcutta, Hello chennai]

let list1 = [];
for (let item of list) {
  let newitem = `Hello ${item}`;
  list1.push(newitem);
}
console.log(list1);

// Arrow Function' One Line; Lamda + Stream
let list2 = list.map((item) => `Hello ${item}`);
console.log(list2);

// LIST
// map, forEach, push, pop, splice,