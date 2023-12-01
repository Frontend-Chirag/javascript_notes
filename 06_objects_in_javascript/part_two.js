
// object in javascript part two 

//* Nested object 

const nestedObject = {
    fullname: {
        firstName: "Chirag",
        lastName: "Kashyap"
    },
    age: 23,
    career: {
        webdev: {
            frontEnd: ["HTML", "CSS", "Javascript", "React.js", "Next.js"],
            backEnd: ["Node.js", "Express.js", "MongoDB", "supabase",]
        }
    }
};

// this is how u can get access of nested object

// console.log(nestedObject.fullname.firstName); // uncomment this code of line to see changes
// console.log(nestedObject.fullname.lastName); // uncomment this code of line to see changes
// console.log(nestedObject.career.webdev.backEnd); // uncomment this code of line to see changes
// console.log(nestedObject.career.webdev.backEnd[3]); // uncomment this code of line to see changes
// console.log(nestedObject.career.webdev.frontEnd[3]); // uncomment this code of line to see changes

//* how to combine two objects and create new object

const obj1 = { name: "chirag", age: 23 };
const obj2 = { username: "Anuj", userage: 23 };

const obj3 = { ...obj1, ...obj2 }
// we used spread Operator same we did in Array fro creating an new array 

// console.log(obj3); // uncomment this line to see changes


// * how to destructure object

// Destructuring object which allow use to extract properties from an object 
// and assigning them to as varibales

const userObject = {
    name: "chirag",
    lastname: "kashyap",
}

// Destructuring assignment
const { name, lastname } = userObject;
// first we  have to assign empty  {} object to the variable then pass object variable 
// then in an empty object extract properties of an object

console.log(`My name is ${name} and my lastname is ${lastname}`)
