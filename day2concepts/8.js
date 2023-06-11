(n1, n2) => {
    return n1 + n2;
  };
  
  // ordered
  (n1, n2) => n1 + n2;
  (n1 = 0, n2 = 0) => n1 + n2;
  
  // unorderd
  ({ n2, n1 }) => n1 + n2;
  ({ n2 = 0, n1 = 0 }) => n1 + n2;
  
  // IN case of multiline statement
  // CURLY BRANCES IS MANDATORY
  () => {
    console.log("hello");
    console.log("hello");
    console.log("hello");
  };