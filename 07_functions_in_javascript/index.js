
// functions in javascript 

//* functions are resuable blocks of code that perfrom a specific task 
// u can declare function in javacsript by using keyword => function

// Syntax of function 
function myFirstFunction(username) {

    // console.log(username); // uncomment this line of code to see changes
};

myFirstFunction("chirag")

// keyword => function
// name => myFirstFunction
// parameter => username
// reference => myFirstFunction
// calling => myFirstFunction()
// agruements => myFirstFunction("chirag")
// task => console.log(username)



// how to store function in a variable
function myStoreFun(val1, val2) {
    // console.log(val1 + val2;) // uncomment this line of code to see changes
};

const storeVariable = myStoreFun(4, 5); // when u console.log this variable u get undefined 
// because function did'nt store properly in this variable

// console.log("Store variable: ", storeVariable); // uncomment this line of code to see changes

// lets see different approach 

function myStorefunTwo(num1, num2) {
    return num1 + num2 // return statement is used to specific the value that a function should return 
};

const myStoreVariableTwo = myStorefunTwo(2, 3);
// Now this variable has store function value successfully and didn't return u undefined

// console.log(myStoreVariableTwo); // uncomment this line of code to see changes


//  lets study about rest parameter 
//*  rest parameter allow u a function to accept indefinite number of argument as an array
//  we declare rest parameter by using three dots ...

// example of rest parameter 
// Case 1

function myRestFun(...allvalue) {

    // console.log(allvalue) // uncomment this line of codes to see changes

    // * the value is comming from parameter is the foam of Array 
    //* to access the value of an array u can use index inside the square brackets 

    // console.log(allvalue[2]) // uncomment this line of codes to see changes
};

myRestFun(100, 200, 300, 400, 500)

// Case 2

function myRestFuntwo(val1, val2, ...allvalue) {

    // console.log(val1);  // uncomment this line of codes to see changes
    // console.log(val2); // uncomment this line of codes to see changes
    // console.log(allvalue[2]) // uncomment this line of codes to see changes
};

// val1 => 100
// val2 => 200 
// allvalue => [300, 400 ,500]
myRestFuntwo(100, 200, 300, 400, 500)

// this how u can accept indefinite number of argument as an parameter by using rest operator (...)


//* functions wih Array
// u can pass an array in a function as a parameter

const arr1 = [100, 200, 300, 400];

function myArrfun(arr) {
    // console.log(arr[0]) // uncomment this line of codes to see changes
};

myArrfun(arr1)

// there is a another way to pass array in a function

function myArrFunTwo(arr) {
    //    console.log(arr[2])  // uncomment this line of codes to see changes
};

myArrFunTwo([100, 200, 300, 400])


//* function with object 

const object1 = {
    name: "chirag",
    lastname: "kashyap"
};

function objFunction(obj) {
//   console.log(obj.name) // uncomment this line of codes to see changes
//   console.log(obj.lastname)  // uncomment this line of codes to see changes
};

objFunction(object1)


