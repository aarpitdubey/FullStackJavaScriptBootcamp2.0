// Q1. Create a variable.js file and declare variables and assign string, boolean, undefined and null data types, Display all the value with their data type.
console.log("\n**************************************************************************************************");
console.log("Solution 1: Display all the value with their data type.\n");
console.log(`Variables:                Values:                          Data Structure:`);
let ineuron = "Ineuron"; // Variable "ineuron" containing string value "ineuron".
let isRegistered = true;// Variable "isRegistered" containing boolean value true
let undefined; // Variable "undefined" is of type undefined & have vaue undefined.
let null_ = null; // Variable "null_" containing null as value.

// Printing all the values and data structures of the above declared variables.
console.log(`\n1. ineuron       contains "${ineuron}"   as it's value and has a "${typeof ineuron}"    type data structure.`);
console.log(`2. isRegistered  contains "${isRegistered}"      as it's value and has a "${typeof isRegistered}"   type data structure.`);
console.log(`3. undefined     contains "${undefined}" as it's value and has a "${typeof undefined}" type data structure.`);
console.log(`4. null_         contains "${null_}"      as it's value and has a "${typeof null_}"    type data structure.\n`);

console.log("**************************************************************************************************");

//********************************************************************************

// Q2. Declare variables to store your first name, last name, marital status, country and age and display them using interploation method.

console.log("Solution 2: Display them using interploation method.\n");

let first_name     = "Arpit"
let last_name      = "Dubey"
let marital_status = "Committed"
let country        = "India"
let age            = 27

console.log(`Hi, my name is Mr. ${first_name} ${last_name}.\nI'm ${marital_status} by my girlfriend.\nI lived in ${country}, and I'm ${age} years old.\n\nThanks for your attention\n`);
console.log("**************************************************************************************************");
//********************************************************************************
//Q3. Declare a varibale and assign string value to it and change all the string characters to capital letters using toUpperCase() method.

console.log("Solution 3: Display change to the string characters to capital letters using toUpperCase() method\n");
let upper_case_string_value = "arpit dubey"
console.log(`1. Value of variable before using toUpperCase() method :\n\n             "${upper_case_string_value}"\n\n2. Value of variable after using toUpperCase() method :\n\n             "${upper_case_string_value.toUpperCase()}"\n`);
console.log("**************************************************************************************************");
//********************************************************************************
//Q4. Declare a variable and assign string value to it and check if the string contains a word Script using includes() method.

console.log(`Solution 4: Check if the string contains "lightweight" word using includes() method\n`);

let docs = "JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles."

console.log(`MDN document definition for JAVASCRIPT :\n\n"${docs}\n"`);
console.log(`Ques: Is JAVASCRIPT is a lightweight programming language? \nAns:  docs.includes("lightweight") --> ${docs.includes("lightweight")}\n`);

console.log("**************************************************************************************************");

//********************************************************************************
//Q5. Declare a varibale and assign string value to it and then split it into an array using split() method
console.log(`Solution 5: Declaring a variable & Assigning value and spliting in an array using split() method. \n`);

let doc = "JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with \
first-class functions."

doc_ = doc.split(" ");

console.log(`let doc = "${doc}"\n\ndoc.split(" ") method will gives these tokens from doc string :\n`);
console.log(doc_);

//checking doc_ is an  array object in javascript or not?
console.log(`\ndoc is a string object after using doc.split(" ") Is it become an array? : ${Array.isArray(doc_)}\n`)

console.log("**************************************************************************************************");


//********************************************************************************

//Q6. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.

let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';

console.log(`Solution 6: Spliting the string at the comma and change it to an array. \n`);
console.log(`let companies = "${companies}"\n\ncompanies.split(",") method will gives these tokens from companies string :\n`);
companies=companies.split(",")
console.log(companies);

//checking doc_ is an  array object in javascript or not?
console.log(`\ncompanies is a string object after using companies.split(",") Is it become an array? : ${Array.isArray(companies)}\n`)

console.log("**************************************************************************************************");
//********************************************************************************

//Q7. Declare an array containing the multiple values and use lastIndexOf to determine the position of the first and last occurrence of a word "pw skills".

let word = "pw skills"

console.log(word.lastIndexOf())
console.log(word.lastIndexOf(word))


//********************************************************************************

//********************************************************************************


//********************************************************************************

//********************************************************************************

//********************************************************************************


//********************************************************************************

//********************************************************************************

//********************************************************************************


//********************************************************************************

//********************************************************************************

//********************************************************************************


//********************************************************************************

//********************************************************************************

//********************************************************************************


//********************************************************************************

//********************************************************************************

//********************************************************************************


//********************************************************************************

//********************************************************************************

//********************************************************************************


//********************************************************************************

//********************************************************************************

//********************************************************************************


//********************************************************************************

//********************************************************************************

//********************************************************************************


//********************************************************************************

//********************************************************************************

//********************************************************************************


//********************************************************************************

//********************************************************************************

//********************************************************************************


//********************************************************************************



