//functions
function firstone() {
    console.log("this is a js function");
}

firstone();

function printeven() {
    for (let i = 2; i <= 10; i += 2) {
        console.log(i);
    }
}

printeven();

//create a function that prints a poem
function poem() {
    console.log("Twinkle, twinkle, little star,");
    console.log("How I wonder what you are!");
    console.log("Up above the world so high,");
    console.log("Like a diamond in the sky.");
}

poem();

//create a function to roll a dice & always display the value of the dice(1 to 6).
function dice(){ //basically we are going to generate a random number between 1 to 6
    let value = Math.floor(Math.random()*6 + 1);
    console.log(value);
}

dice();


//functions with arguments:
function info(name,age){
    console.log(`${name}'s age is ${age}.`); //`` is not '' or ""
}

info("Rajeev",21); //Rajeev's age is 21.
info("Rajeev"); //Rajeev's age is undefined.(we can miss the last argument, but can't miss the first argument).

function sum(num1,num2){
    let sum = num1 + num2;
    console.log(sum);
}

sum(2,5);

function multiplication_table(num){
    for(let i=1; i<=10; i++){
        console.log(`${num} x ${i} = ` ,num*i);
    }
}

multiplication_table(2);
multiplication_table(23);


//create a function that returns the sum of numbers from 1 to n;
function Sum(num){
    let sum = 0;
    for(let i=1; i<=num; i++){
        sum = sum + i;
    }
    return sum;
}

console.log(Sum(5));
console.log(Sum(8));

//create a function that returns all the strings of an array.
let arr = ["hii","rajeev","here","!"];
function concatStr(string){
    let final = "";
    for(let i=0; i<string.length; i++){
        final += string[i];
    }
    return final;
}

console.log(concatStr(arr));

//Lexical Scope
function outer() {
  let a = 10;

  function inner() {
    console.log(a); // Can access 'a'
  }

  inner();
}
outer();

//Hoisting
msg(); //Works, even before definition

function msg() {
  console.log("Hoisting!");
}

//Output of the following code:
let greet = "hello";

function changegreet(){
    let greet = "namaste";
    console.log(greet); //namaste
        function innergreet(){
            console.log(greet); //namaste
        }
        innergreet(); //namaste
}

console.log(greet); //hello
changegreet(); //namaste

const message = function(){
  console.log("function expression.");
};

message();

// Higher order functions
function greet(name) {
  return "Hello, " + name;
}

function processUserInput(callback) {
  const name = "Rajeev";
  console.log(callback(name)); // callback = greet
}

processUserInput(greet);

function forEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i);
  }
}

const numbers = [10, 20, 30];

forEach(numbers, function(num, index) {
  console.log(`Index ${index}: ${num}`);
});
/**
Output: 
Index 0: 10
Index 1: 20
Index 2: 30
*/

//function that returns a function.
function createGreeting(greeting) {
  return function(name) {
    console.log(`${greeting}, ${name}!`);
  };
}

const sayHello = createGreeting("Hello");
const sayHi = createGreeting("Hi");

sayHello("Rajeev"); // Hello, Rajeev!
sayHi("Kumar");     // Hi, Kumar!

//Methods:
const calculator = {
  add: function(a,b){
    return a+b;
  },
  subract: function(a,b){
    return a-b;
  },
  product: function(a,b){
    return a*b;
  }
};

console.log(calculator);
/**
{
  add: [Function: add],
  subract: [Function: subract],
  product: [Function: product]
}
 */

console.log(calculator.add); //output: [Function: add]
console.log(calculator.add(2,5)); //7
console.log(calculator.subract(5,1)); //4
console.log(calculator.product(5,12)); //60

//try and catch
try {
  let result = x + 5; // x is not defined
  console.log(result);
} catch (error) {
  console.log("Something went wrong:", error.message); //Something went wrong: x is not defined
}


//arrow function
const greet = () => {
  console.log("hellow");
}
greet();

// //implicit return
const sum = (a,b) => a+b;
console.log(sum(2,5));


//setTimeout function
// Arrow function with implicit return
const greet1 = (name) => `Hello, ${name}!`;

// Use setTimeout to call it after 2 seconds
setTimeout(() => {
  console.log(greet1("Rajeev"));
}, 2000);

const timer = setInterval(() => {
  console.log("This will stop soon...");
}, 1000);

setTimeout(() => {
  clearInterval(timer);
  console.log("Interval cleared!");
}, 5000);

//"this" in regular functions
const obj = {
  name: "Rajeev",
  regularFn: function() {
    console.log(this.name);
  }
};

obj.regularFn(); // "Rajeev"

//"this" in arrow functions
const obj1 = {
  name: "Rajeev",
  arrowFn: () => {
    console.log(this.name);
  }
};

obj1.arrowFn(); // undefined (or error in strict mode)