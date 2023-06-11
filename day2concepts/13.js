function Person(id, name, email) {
    // data members
    this.id = id;
    this.name = name;
    this.email = email;
  
    // member func
    this.randomValue = () => {
      return "Akshay";
    };
  
    this.getEmail = () => {
      return this.email;
    };
  
    this.getName = () => {
      return "Hello " + this.name;
    };
  }
  
  // Function as Object
  let p1 = new Person(100, "pankaj", "pankaj@gmail.com");
  let output = p1.getName();
  console.log(output);