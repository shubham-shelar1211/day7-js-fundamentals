let str1 = "Hello' World";
let str2 = 'Hello" World ';
let str3 = `Hello "World"`;
console.log(str3);

let username = "Rahul";
let message1 =
  "Dear " +
  username +
  ", " +
  "Subject: Holiday  " +
  " The format for writing an application to the principal " +
  " includes the sender's details (name, class, section), " +
  " the principal's name and designation, the date, a subject line, " +
  " a salutation, the body of the letter (clearly stating the purpose or request), " +
  "a closing, and the sender's signature. " +
  "Yours, " +
  "CDAC";

// THIS IS USING BACKTICK
let message = `
    Dear ${username}, 
    Subject: Holiday 
    The format for writing an application to the principal 
    includes the sender's details (name, class, section), 
    the principal's name and designation, the date, a subject line, 
    a salutation, the body of the letter (clearly stating the purpose or request), 
    a closing, and the sender's signature.
    Yours, 
    CDAC
`;

console.log(message);