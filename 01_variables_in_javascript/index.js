//  Variables declartions

const accountId = 144553; // we can not change value of constant

let accountEmail = "anujkashyap123000@gmail.com"; // let is used for block scoping

var accountPassword = "12345"; /* prefer to not to use var beacuse of issue in 
block and funtional scope */

accountCity = "Delhi"; // we can declare by this way also but this not good practice 

let accountState; /* we can declare variable without assigning them a value 
 but later on we can assign them a value
*/


// block scoping is limiting its visibility to the scope block is declared in {} parenthesis 
// it could be a function block or conditonal rending scope 

{
    // example of let for block scoping accountPassword with the same name of variable
    //  outer block scope did not effect inner block scope vairable  
    let accountEmail = "chiragkashyap12300@gmail.com";

    // console.log("inner block scope ",accountEmail ); // comment this code of line to see changes
}

{
    //   example of var for funtion scoping meaning its scope is limited to the function its declared in 
    //   now we are reassinging the value with the accountpassword 
    //   now the value of accountPassword is frontend not "123"

    //   var accountPassword = "frontend"; // comment this line of code to see changes 
}




// accountId = 2 not allowed

accountEmail = "chiragkashyap123@gmail.com";
accountCity = "Mumbai";
accountState = "assigning value in accountState"

// console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);