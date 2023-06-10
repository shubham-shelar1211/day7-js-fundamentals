// un-Orderd Parameter
function register({ id, email, mobile, address, aadhar, pan, city, locality }) {
    console.log(id);
    console.log(email);
    console.log(mobile);
    console.log(address);
    console.log(aadhar);
    console.log(pan);
    console.log(city);
    console.log(locality);
  }
  
  let id = 100;
  let email = "abcd@abcd.com";
  let mobile = "32323232";
  let address = "kharghar";
  let aadhar = "12121SSA121";
  let pan = "ASDFDF";
  let city = "navi mumbai";
  let locality = "belpada";
  
  // ORder not matter
  register({ aadhar, address, pan, city, locality, id, mobile, email });