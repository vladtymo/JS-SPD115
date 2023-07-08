// -=-=-=-=-=-=-=-=- Welcome to JS -=-=-=-=-=-=-=-=-
// -------- working with console
console.log("Some text message!");
console.warn("Some warning message!");
console.error("Some error message!");

// -------- let vs var
console.log(number); // error (let)

var number = 10;
var number = 20;     // error (let)

if (true) {
    var inner = 30;
}

console.log(inner);  // error (let)

// -------- data types
// js has a weak typing - we can change the type dynamically
let data = 10;          // number
data = 33.5;            // number

data = "hello";         // string
data = 'H"e"y';         // string
data = 'A';             // string

data = true;            // boolean
data = [1, 2, 3];       // object

console.log(data[10]); // undefined

data = { id: 1001, login: "super" };                                      // object
data = () => { console.log("I'm a function!"); };                         // function
data = [120, true, "yellow", [1, 2, 3], () => { console.log("Func!"); }]; // object

data = null;      // null
data = undefined; // undefined (bad practice)

// -------- browser dialogs
// alert - show message to client
alert("Hello JavaScript!");

// prompt - request value from client
let email = prompt("Enter your email:", "example@ukr.net");

// concatenation: "text" + "text"
console.log("Your email is " + email);
// interpolation: `text...${expression}...text`
console.log(`Your email is ${email}`);

// convert string to number: +str
let year = +prompt("Enter current year:", 2023);

console.log(`Current year: ${year}`);
console.log(`Next year: ${year + 1}`); // "2023" + "1" = "20231"

// confirm - request boolean value from client
const liked = confirm("Do you like JS?");

console.log(liked ? "You are crazy!" : "Keep calm and continue study!");
