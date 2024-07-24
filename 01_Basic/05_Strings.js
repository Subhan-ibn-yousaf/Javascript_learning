const name = " subhan ";
let repoCount=  50 ;
// console.log( name + repoCount );

// console.log( `hello my name is ${name} and my repo count is ${ repoCount}`);

const gameName = new String("subhan");

console.log( gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));

const newString = gameName.substring (0,4);
console.log(newString);

const anotherString = gameName.slice(-4,4);
console.log(anotherString);

const newStringOne = "    subhan    ";
console.log(newStringOne );
console.log(newStringOne.trim());


const url = "https/subhan.com/subhan%20khan";
console.log(url.replace ('%20','-'));

console.log(url.includes('Subhan'));


console.log(gameName.split('-'));


