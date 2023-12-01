
// *Scopes in javascript 
// There is two main types of scopes in javascript 
// a) Global Scopes c) localScopes

//* block => {}

// *Global Scopes 
// variables declared outside of any functions or block {} have a global scope 
// They can be accessed from any part of the code including inside function


// *local Scopes
// variables declared inside a function or block {} have local scopes
// they can be accessed within that function or block


// global scope variables
let globalVariable = "GLOBAL"; /// this is the global variable
// and accessbility of this glocal variable 
// is from any part of code or including function or any block

// console.log(`globalScope from the top of function: ${globalVariable}`); // uncomment this line of codes to see changes

// local scope varibales
function mylocalfun() {
    let localVariable = "LOCAL"; // this is the local variable
    // because variable in the block
    // and accessbility of this local variable only inside 
    // this function block

    //    console.log(`localScope inside of function: ${localVariable}`); // uncomment this line of codes to see changes
    //    console.log(`globalScope inside of function: ${globalVariable}`); // uncomment this line of codes to see changes
};

mylocalfun()

//* when consolelog localVariable which declare inside of a function u get undefined or error
// console.log(`localVariable outside of function: ${localVariable}`); // uncomment this line of codes to see changes

// console.log(`globalScope from the bottom of function: ${globalVariable}`); // uncomment this line of codes to see changes


// * Nested function and accessibility of global and locak scope
// Nested functions refers to functions defined within functions

let outerGlobalVariable = 'I am Global';

function outerFunction() {
    let outerVariable = " I am Global for outerFunction and local for outside of this block"; // read string carefully
      
      function innerFunction(){
         let innerVariable = 'I am local for everyone accept innerFunction'; // read string carefully

         console.log(innerVariable);
         console.log(outerVariable);
         console.log(outerGlobalVariable);
      };

      innerFunction();

    //   console.log(innerVariable); // here to get error {innerVariable is not defined} uncomment this line of code to see changes
      console.log(outerVariable); 
      console.log(outerGlobalVariable);
};

outerFunction()
 
// console.log(innerVariable); // here to get error {innerVariable is not defined} uncomment this line of code to see changes
// console.log(outerVariable); // here to get error {outerVariable is not defined} uncomment this line of code to see changes
console.log(outerGlobalVariable);

