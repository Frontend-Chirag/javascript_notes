
// Array in javascript part one 

// Array is also a Non-primitive datatype object 
// we can array in square brackets [] 
const myArray = ["Frontend", "Backend", "Fullstack", "MERN", "React"];  // this how we declare array

// console.log(myArray); // uncomment this line of code to see changes 
// console.log(typeof myArray); // uncomment this line of code to see changes 

// but in Array we can add mix of types which means
// we can add in array String , Number , Boolean , object

// lets understand with a example 
const myMixTypeArray = ["Chirag", 23, true, { career: "web developer" }];

// console.log(myMixTypeArray); // uncomment this line of code to see changes 
  
// but its not a good practice to add mix types property in array
// it means Array all property should be String or Number or boolean or an object
// like we did in line no.6

// we access property by indexing 
// what is indexing if u remember at the start of notes i mention Array is non-primitive
// datatype object which means properties of Array should be key-pair value
// index starts with  0, 1, 2, 3, 4, and so on;
// which means we access propert of value with its position or index 

// lets take an example 

                  //   0 index        1 index      2 index      3 index   4 index
const myIndexArray = ["Frontend" ,  "Backend" ,  "Fullstack" ,  "MERN" ,  "React"];
 
// console.log(myIndexArray[0]); // uncomment this line of code to see changes

// in zero position as i know i have Frontend string in 
// my myIndexArray beacuse i calling property with its position or index
//  by changing index u can  get property of Array with its position or inde


// what if u want to get property of that index which is not exist in an Array    

// console.log(myIndexArray[5]); // uncomment this line of code to see changes

// u get undefined which is obvious there is nothing in that index


// so now u know that array is type of object by which we get method or operations to work on 
// lets understand some operation in Array

const myPushArray = ["Frontend" ,  "Backend" ,  "Fullstack" ,  "MERN" ,  "React"];

myPushArray.push('Nextjs'); // push function add element to the end of an array
                           // and manipulate the orginal array return new array

 // console.log(myPushArray); // uncomment this line of code to see changes

const myPopArray = ["Frontend" ,  "Backend" ,  "Fullstack" ,  "MERN" ,  "React"];

myPopArray.pop();      // pop function remove the last element from an array  
                           // and manipulate the orginal array return new array
                           
// console.log(myPopArray);  // uncomment this line of code to see changes

const myshiftArray = ["Frontend" ,  "Backend" ,  "Fullstack" ,  "MERN" ,  "React"];

myshiftArray.shift();      // shift function remove first element from an array  
                           // and manipulate the orginal array return new array

// console.log(myshiftArray);  // uncomment this line of code to see changes


const myUnshiftArray = ["Frontend" ,  "Backend" ,  "Fullstack" ,  "MERN" ,  "React"];

myUnshiftArray.unshift("Nextjs");     // unshift function add element to the beginning of an array  
                                    // and manipulate the orginal array return new array

// console.log(myUnshiftArray);  // uncomment this line of code to see changes



// *****************************************Important to understand***************************************** 



                        // start                               // end
                        //index                               // index
const mySliceArray = ["Frontend" ,  "Backend" ,  "Fullstack" ,  "MERN" ,  "React"];

                                    // start   // end
                                    // index  // index
const slicedArray = mySliceArray.slice( 0 ,     3);   // slice function take two arguement first is starting 
                                                     // index of an array and ending index of an array
                                                    // provide copy of an new array (0 to 2) and 
                                                   //  remember it didn't include index (4) in a new array
                                                  // and slice did noot manipulate orginal array
                                                   
// console.log("sliced Array: ",slicedArray);  // uncomment this line of codes to see changes

// console.log("original Array:", mySliceArray); // uncomment this line of codes to see changes



                         // start                       // end            
const mySplicedArray = ["Frontend" ,  "Backend" ,  "Fullstack" ,  "MERN" ,  "React"];

const splicedArray = mySplicedArray.splice(0, 2); // splice function also takes two agrument 
                                                 // start of index and end of index 
                                                 // and provide u new array !important 
                                                 // remove those element from an orginal array 


console.log("Spliced Array",splicedArray);

console.log("Original Array",mySplicedArray);


