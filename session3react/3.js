let ref = {
    id: 1,
    name: "rahul",
    email: "rahul@gmail.com",
    address: {
      city: "mumbai",
      state: "mh",
      pin: "410210",
    },
  };
  
  // Accessthing the variable
  // creating mulitple variable in one line
  // selecting the variables from large object
  // unordered params
  let { email, name, id } = ref; // ref is large object tree;
  console.log(email, id, name);