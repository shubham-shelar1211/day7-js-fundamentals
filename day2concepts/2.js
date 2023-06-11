// Annonymous function
// Assigning a function to a variable!
// We can call annonymous function
let sumfn = function (n1, n2) {
    let output = n1 + n2;
    return output;
  };
  
  // Arrow Function => / ->
  // Assigning the functio to a variable
  let sumfn1 = (n1, n2) => {
    let output = n1 + n2;
    return output;
  };
  
  // Calling the Annonymous function
  let result = sumfn(10, 20);
  console.log(result);
  
  // Calling the Arrow function
  let result1 = sumfn1(10, 30);
  console.log(result1);