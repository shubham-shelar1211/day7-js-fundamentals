let list1 = [];
let list = ["delhi", "chennai", "mumbai"];

// Access the member using index
console.log(list[0], list[2]);

// Update the member
list[0] = "New Delhi";
list[2] = "Mumbaiii";
console.log(list);

// Add new member :: Can u add new memebr to the begining/middle of the list?
list.push("pune");
list.push("nagpur");
console.log(list);

// Dlete the memebr:: Can u add remove memebr to the begining/middle of the list?
list.pop();
console.log(list);

// iterate
list.forEach((item) => console.log(item));

for (let item of list) {
  console.log(item);
}