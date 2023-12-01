
// datatype coversion in javascript

// Covert Number into string we can do this by using String()
let covertNumber = 123;
let coverString = String(covertNumber);

console.log(typeof coverString); // uncomment this line of see changes
console.log(coverString); // uncomment this line of see changes



// Covert string into Number we to this by Number()

// this is the example of when we covert pure number string into number
let covertStringIntoNumber = "123";

// console.log(Number(covertStringIntoNumber)); // uncomment this line of see changes
// console.log(typeof Number(covertStringIntoNumber)); // uncomment this line of see changes

// this is the example of when we convert nonpure number string into number

let nonPureNumberString = "123abc"

// now before uncomment console.log i want to u think can u actually convert this string into number
// first we check typeof this variable

// console.log(typeof(Number(nonPureNumberString))); // uncomment this line of see changes

// as u see in console.log() u get type of number it means javascript convert this nonpure number string into number

// console.log(Number(nonPureNumberString));  // uncomment this line of see changes

// but when console.log() the actual value of this variable u get NaN 
// NaN this is the another datatypes its means Not a Number

// lets try this with another example
let NaNStringIntoNumber = "abcd";

// console.log(typeof(Number(NaNStringIntoNumber))); // uncomment this line of see changes
// console.log(Number(NaNStringIntoNumber)); // uncomment this line of see changes

// as u see we get same output NaN and Number in our console or terminal why we get this javscript try to convert 
// the value of string into number but it did'nt actually thats why we get we get NaN when we console the actual 
// value of this variable



// lets try to convert Boolean value into Number by using Number()
let booleanValueIntoNumber = false;

// console.log(typeof(Number(booleanValueIntoNumber))); // uncomment this line of see changes
// u get number as a output

// console.log(Number(booleanValueIntoNumber)); // uncomment this line of see changes

// output will be 0 because False is equal to zero and true is also equal to one 
// u can try this by changing value of false into true 



// let to convert number into boolean by using Boolean
let numberIntoBoolean = 0;

// Before uncomment this lines of codes i want to think 
// when we convert boolean into number what are output we get 
// i hope u remember if not let me remind u true = 1  and  false = 0
// u can change value of this variable by 0 to 1

// console.log(Boolean(numberIntoBoolean));
// console.log(typeof(Boolean(numberIntoBoolean)));
