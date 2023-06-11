// Object Literals :: Nested Object
let p1 = {
    id: 1,
    name: "rohit",
    email: "rohit@gmail.com",
  
    address: {
      city: "navi mumbai",
      state: "mh",
      picode: "410210",
    },
  };
  
  // Access the nested member
  console.log(p1.address.city);