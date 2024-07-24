// //  primitive datatype 
// // categories/types of primitive datatype
// 7 types
// 1==>string ""
// 2==>Number 2 to power 52
// 3==>bolean true or false 
// 4==>null means empty
// 5==>undefined means declared a variable but not assign him any Value;
// 6==>Symbol ksi bi value ko unique bnany k lea symbol use hota hai 
// 7==>BigInt bht zyada lmbi value ko store krny k lea use hota hai

// symbol example>>
// const id =Symbol('123')
// const anotherId =Symbol('234')
// console.log(id===anotherId);


// Reference ( non primitives)
// 1==> Array 
// 2==> Objects
// 3==> Functions


//  ****************memory works in js**************

//  types of memory in js
//  1==> stack (primitives datatypes)   2==> heap(non_primitive)
 
 let myYoutubename = " subhan"
 let anothername = myYoutubename;
 anothername = "chaiaurcode";
 
 console.log(myYoutubename);
 console.log(anothername);


 let userOne = {
    email: "user@google.com"
    // upi  "user@ybl"
 }

 
let userTwo = userOne;
userTwo.email = "hitesh@google.com";
console.log(userOne.email);
console.log(userTwo.email);
