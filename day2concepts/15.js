// Object Literals :: InlineObject
let p1 = { id: 1, name: "rohit", email: "rohit@gmail.com" };

// Access The Members of the Object
console.log(p1.id);
console.log(p1.name);
console.log(p1.email);

// Update the member of the object
p1.name = "Rohit Sharma";
p1.email = "rohit.sharma@gmail.com";
console.log(p1);

// New member
p1.address = "kharghar, Navi mumbai";
console.log(p1);

// Delete The Member
delete p1.email;
console.log(p1);