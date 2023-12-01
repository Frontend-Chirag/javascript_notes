
// Array in javascript part two

// let see array with  more operations 

const frontendArray = ["HTML", "CSS", "JAVASCRIPT", "REACT.JS", "NEXT.JS"];
const backendArray = ["NODE.JS", "EXPRESS.JS", "MONGODB", "SUPABASE", "APPWRITE"];

// now u see i declare two array how can i u can them and create new array  lets see


const concatArray = frontendArray.concat(backendArray);

// concat function combine both array and create new flat array 
// example of flat array is => ["HTML", "CSS", "JAVASCRIPT", "REACT.JS", "NEXT.JS" ]

// console.log(concatArray); //  uncomment this line of code to see changes 

const spreadArray = [...frontendArray, ...backendArray];

// this most common method to combin two or more array and  create new array which is flat 
// u see three dots ... this is a spread operator which means now the elements of array are individual 
// and create new array 


// console.log(spreadArray); //  uncomment this line of code to see changes 


// ************Nested Array******************
// Nested refers to an array that is an element of another array array insted of flat array

const firstArray = [1, 2, 3, 4];
const secondArray = [5, 6, 7, 8];



firstArray.push(secondArray); //  uncomment this line of code to see changes 

// console.log(firstArray);  //  uncomment this line of code to see changes 

// now u might be little bit confused after seeing this type of ouput in terminal
// we called them Nested Array =>  [ 1, 2, 3, 4, [ 5, 6, 7, 8 ] ];

// now we know that firstArray now become a nested array what do u think how can we get access of nested elements

// console.log(firstArray[1]);

// we get 2 as an output because we know that by using index we can get elements from an array 

// console.log(firstArray[4]);  // uncomment this line of code to see changes

// in the postion or index of 4 we get element of array which is [5,6,7,8,]

// console.log(firstArray[4][2]); // uncomment this line of code to see changes

//                                         index => [0  1  2  3  4][ 0  1  2  3]   
// as i told u that in 4 index we have an array of [1 ,2 ,3 ,4  , [ 5 ,6 ,7 ,8 ]]
// thats why we get 7 as an output because the postion of nested array in this case is 2 



const myNewNestedArray = [1, 2, 3, 4, [4, 5, 6], 7, 8, [9, 10]] ;

// lets make this nested array in a single and flat array 

const flatArray = myNewNestedArray.flat(2) // to use flat function we need pass an depth of an nested array to 
                                          // flat that why i pass 2 as arguement because the depthness of 
                                        //   of an array is 2 

// console.log(flatArray);  // uncomment this line of code to see changes


// lets make an string into an array

const stringVariable = "chirag";

const stringArray = Array.from(stringVariable); // Array.from() function is used convert iterable object into Array

// console.log(stringArray);  // uncomment this line of code to see changes

// how to check stringVariable  is an really Array or an  string
// Array.isArray() function is used to check datatype of Array

// console.log(Array.isArray(stringVariable));   // uncomment this line of code to see changes











