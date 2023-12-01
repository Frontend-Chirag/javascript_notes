
// String in javascript

//  There are two ways to define strings in javascript 
// and there is no specific difference in both of them u get the same output

let firstString = "chirag";
let secondString = new String("chirag"); // it just give u the object string 

// console.log(typeof firstString); //uncomment this line of code to see changes
// console.log(firstString); // uncomment this line of code to see changes

// console.log(typeof secondString); // uncomment this line of code to see changes
// console.log(secondString);  // uncomment this line of code to see changes



// lets make some operation in strings 

let name = "chirag";
let career = "web developer";

let sentence = "My name is " + name + " and I'am a " + career;

// console.log(sentence); // uncomment this line of code to see changes

// what we did here we just add up all the string and variable by using + 
// but this not good practice beacuse there is not code readablity which is the most important 
// in web development

// there is another way and better way to this 

let sentence2 = `My name is ${name} and I'am a ${career} `;

// console.log(sentence2);  // uncomment this line of code to see changes

// what we did here we just used instead of double or single quotes we used backtick 
// and we used backtick because it give us power to inject direct variable in string 
// by apply this syntax ${} and it also make code more readble 


// as i told u in above codes that by using syntax new string we get object string 
// what is that mean its means we can access property of object in string

// Let's understand with example
let objectString = new String('Chirag');

// although there are many methods in object but for now we look at few methods of functions

// console.log(objectString[1]);   // uncomment this line of code to see changes

// now we are trying to get access of object string character with his key 
// as we discuss in datatypes that object is a key-pair value that we did objectString[1]

// objectString[0] => "C" // in zero position we get C
// objectString[1] => "h" // in first position we get h
// objectString[2] => "i" // in second position we get i
// objectString[3] => "r" // in third position we get r
// objectString[4] => "a" // in fourth position we get a
// objectString[5] => "g" // in fifth position we get g

// console.log(objectString.charAt(3)); // uncomment this line of code to see changes

// here we also access character of object string by its position 
// for which we used charAt() method or function

// console.log(objectString.toLowerCase());  // uncomment this line of code to see changes

// by toLowerCase method or function we can convert all the character of object strting in lowercase

// console.log(objectString.toUpperCase());  // uncomment this line of code to see changes

// by toUppercase method or function we can convert all the character of object strting in toUppercase

// console.log(objectString.length);  // uncomment this line of code to see changes

// by this length method or function we able to know how can many number of charater present in object string 

// console.log(objectString.concat(" kashyap"));  // uncomment this line of code to see changes


// by this concat() method or function we can combine to strings or objects   

let objects = {
    lastname: "kashyap",
    age: 24
}
// console.log(objectString.concat(objects.lastname));  // uncomment this line of code to see changes
// console.log(objectString.concat(` age is ${objects.age}`));  // uncomment this line of code to see changes

// objects.lastname this how we are accessing  key-pair value in object 
// u can add more key-pair vavlue in object and see what is happening 
// this is short example how objects where but we discuss more object it later on 


// console.log(objectString.indexOf("g")); // uncomment this line of code to see changes

// by indexOf() method or function we know character position index  in this case
//  we get output 5 because in "chirag" object string "g" lay on 5th position 
//  u can change string and see changes what u get 









