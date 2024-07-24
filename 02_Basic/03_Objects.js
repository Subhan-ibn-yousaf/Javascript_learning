// singleton
// Object.create >> this is the another method to create object 

// Object literals
const mySym = Symbol("key1")
const JsUser ={
name : "Subhan",
age : 18 ,
location : "lahore" ,
[mySym]: "key1",
email : "subhan@gmail.com",
IsLoggedin : false ,
LastLogginDays :["Monday ", "Saturday"]

}

// way to access objects >>>
console.log(JsUser.name);

// another way to access objects
console.log(JsUser["email"])
console.log(JsUser[mySym])
 
// >>to apply any change just override it
JsUser.email = "subhan90@gmail.com";
console.log(JsUser.email);


// >> how to freeze an Object
Object.freeze(JsUser)
    