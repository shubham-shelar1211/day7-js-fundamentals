function Person(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
  
  let person1 = new Person(1, "rohit", "rohit@gmail.com");
  let person2 = new Person(2, "rahul", "rahul@gmail.com");
  
  console.log(person1);
  console.log(person2);
  
  console.log(person1.id, person1.email);
  console.log(person2.id, person2.email);