// **** Arrays ****

let myArr = [0,1,2,3,4,5]

// this method is use to push the number in start of Array
// myArr.push(6);
// myArr.push(7);


// this method is is used to remove the last digit from Array
// myArr.pop();

// push the number you want in the start of the Array
// myArr.unshift(6);

// used to remove first index of array 
// myArr.shift();

// let newArr = myArr.join();

// to check the included numbers in Array
// console.log(myArr.includes(4));

// check the datatype of Array
// console.log(typeof newArr)


// check the index in Array
// console.log(myArr.indexOf(4));
// console.log(newArr);


// ==>> Concept of Slice And Splice  

console.log( "A", myArr );
const myn1 = myArr.slice(1,3);
console.log(myn1);
console.log("B" ,myArr);

const myn2 = myArr.splice(1,3);
console.log(myn2);