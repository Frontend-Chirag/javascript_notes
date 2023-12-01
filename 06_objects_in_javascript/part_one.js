
// objects in javascript 

// how to declare object in javascript 
const firstObject = new Object();
const secondObject = {};

// console.log(firstObject); // uncomment this line of code to see changes 
// console.log(secondObject); // uncomment this line of code to see changes 

// {} u can delare by both method there is no internal difference between them 

const userObject = {
    name: "chirag",
    age: 23,
    isLoggedIn: true,
    daysUserLoggedIn: ["Monday", "Tuesday", "Friday"],
    career: "Web developer"
};

// as u can see u can define any datatype property in object 
//  now u might be thinking how can u get access of this object 
// before that i want to tell u properties of object is key-pair value 
// which means here  key => name , and value => chirag
// we can get access of object property by using dot notation (.) or square notation []
// lets understand with example 

// Accessing property by dot Notation(.)
// console.log(userObject.age); // uncomment this line of code to see changes

// Accessing property by square Notation []
// console.log(userObject["age"]);  // uncomment this line of code to see changes

//* u might be wonding how u can get access of array in object 
// lets understand with example

// userObject.daysUserLoggedIn  // here u reached to the key of an array now u know how to 
                                // get access property of an  array by using square Notation [] and index
                                // i want clarifying u one more thing here is that array is also a object 
                                // and array property is also a key pair value
                                // but u can't customize key of an array the only way to
                                // get access property of an array is index 
                                // but in object u add your own key and customize them 

// console.log(userObject.daysUserLoggedIn[2]) // uncomment this line of code to see changes 

//*  now we can how add more properties in object
    userObject.post = 5;
    userObject.videos = 2;
    userObject.following = 100;
 
// console.log(userObject) ; // uncomment this line of code to see changes

// its time to look how we can customize value in object 

userObject.name = "Anuj" ;
userObject.career = "Frontend";

// console.log(userObject) ; // uncomment this line of code to see changes


// * u can also add function in object 
// this how u can an function in an object
userObject.fun = function(){
    console.log("Hello i'am a function in object");    
};

// this is how u can run object function 

// console.log(userObject.fun()); // uncomment this line of code to see changes

// console.log(userObject); // uncomment this line of code to see changes


//  ***creating a object by using new Object ***
const myNewObj = new Object({
    name: "Akshay",
    lastname: "Kumar"
});

// console.log(myNewObj) 


// ***********************************Freeze in Object start here *******************************

// u can freeze your object by this no one is able to customize your object value
// *freeze function is used for Prevents the modification of existing property

// Object.freeze(userObject); // uncomment this line of code to see changes

// lets try to customize property of userObject

// userObject.name = "chiragKashyap__"  // uncomment this line of code to see changes
// userObject.career = "Full Stack web developer"  // uncomment this line of code to see changes

// console.log(userObject) ; // uncomment this line of code to see changes

// ***********************************Freeze in Object end here *******************************

// lets see more operation by using Object.

// * Object.keys is used to extract keys of an object and return them as an array  

// console.log(Object.keys(userObject)) ; // uncomment this line of code to see changes

// * Object.values is used for extract values of an  object and return them an as array 

// console.log(Object.values(userObject)) ; // uncomment this line of code to see changes






