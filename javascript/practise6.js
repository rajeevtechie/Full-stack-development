//Array methods
//forEach
const prices = [100, 200, 300];
let total = 0;

prices.forEach(price => {
  total += price;
});

console.log("Total:", total); //total = 600

const users = [
  { name: "Rajeev", active: false },
  { name: "Priya", active: false },
  { name: "Amit", active: false }
];

users.forEach(user => {
  user.active = true; // update property
});

console.log(users);

//map()
const numbers = [1, 2, 3, 4];

const doubled = numbers.map(num => num * 2);

console.log(doubled); // [2, 4, 6, 8]

const listings = [ //real life example
  { city: "Goa", price: 1200 },
  { city: "Mumbai", price: 2500 },
  { city: "Pune", price: 1800 }
];

const cards = listings.map(listing => {
  return `<div class="card">
            <h2>${listing.city}</h2>
            <p>₹${listing.price} per night</p>
          </div>`;
});

console.log(cards);
/*
[
  "<div class='card'>...</div>",
  "<div class='card'>...</div>",
  "<div class='card'>...</div>"
]
*/

// filter()
const numbers = [10, 25, 30, 45, 50];

const greaterThan30 = numbers.filter(num => num > 30);

console.log(greaterThan30); // [45, 50]

const listings = [
  { city: "Goa", price: 1200 },
  { city: "Mumbai", price: 2500 },
  { city: "Pune", price: 1800 }
];

const budgetFriendly = listings.filter(listing => listing.price < 2000);

console.log(budgetFriendly);
// [
//   { city: "Goa", price: 1200 },
//   { city: "Pune", price: 1800 }
// ]

//difference between map and filter
const listings = [
  { city: "Goa", price: 1200 },
  { city: "Mumbai", price: 2500 },
  { city: "Pune", price: 1800 }
];

// filter: only budget-friendly listings
const budgetListings = listings.filter(l => l.price < 2000);

// map: transform listings into UI cards
const cards = budgetListings.map(l => `<div>${l.city} - ₹${l.price}</div>`);

console.log(cards);
// ["<div>Goa - ₹1200</div>", "<div>Pune - ₹1800</div>"]

//every()
const numbers = [2, 4, 6, 8];

const allEven = numbers.every(num => num % 2 === 0);

console.log(allEven); // true

const listings = [
  { city: "Goa", price: 1200 },
  { city: "Mumbai", price: 2500 },
  { city: "Pune", price: 1800 }
];

const withinBudget = listings.every(l => l.price < 3000);

console.log(withinBudget); // true

//some()
const numbers = [1, 3, 5, 7];

const hasEven = numbers.some(num => num % 2 === 0);

console.log(hasEven); // false

const listings = [
  { city: "Goa", price: 1200 },
  { city: "Mumbai", price: 2500 },
  { city: "Pune", price: 1800 }
];

const hasBudgetOption = listings.some(l => l.price < 1500);

console.log(hasBudgetOption); // true

//reduce()
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, num) => acc + num, 0);

console.log(sum); // 15

const nested = [[1, 2], [3, 4], [5]];

const flat = nested.reduce((acc, arr) => acc.concat(arr), []); //flatten an array

console.log(flat); // [1, 2, 3, 4, 5]

const fruits = ["apple", "banana", "apple", "cherry", "banana", "apple"];

const count = fruits.reduce((acc, fruit) => { //count occurrences 
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log(count);
// { apple: 3, banana: 2, cherry: 1 }

const number = [10, 25, 3, 99, 42];

const max = number.reduce((acc, curr) => {
  return curr > acc ? curr : acc;
}, -Infinity);

console.log(max); // 99


//default parameters
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}

console.log(greet());        // "Hello, Guest!"
console.log(greet("Rajeev")); // "Hello, Rajeev!"

function add(a = 0, b = 0) {
  return a + b;
}

console.log(add());       // 0
console.log(add(5));      // 5
console.log(add(5, 10));  // 15

function createUser(user = { name: "Anonymous", role: "viewer" }) {
  return user;
}

console.log(createUser()); 
// { name: "Anonymous", role: "viewer" }

console.log(createUser({ name: "Rajeev", role: "admin" }));
// { name: "Rajeev", role: "admin" }

//Spread operator
const numbers = [1, 2, 3]; //expanding arrays
console.log(...numbers); 
// Output: 1 2 3

const word = "Rajeev"; //expanding string
console.log([...word]); 
// ["R", "a", "j", "e", "e", "v"]

function sum(a, b, c) {  //passing arguments
  return a + b + c;
}

const nums = [10, 20, 30];
console.log(sum(...nums)); // 60

//Spread in Array Literal
const arr = [1, 2, 3];
const copy = [...arr];  //Copying Arrays (Immutable Copy)

console.log(copy); // [1, 2, 3]  
console.log(arr === copy); // false (different arrays)

const a = [1, 2];
const b = [3, 4];
const merged = [...a, ...b];  //merging arrays

console.log(merged); // [1, 2, 3, 4]

const base = [1, 2, 3];
const extended = [0, ...base, 4]; //Inserting Elements
//Spread lets you insert arrays in the middle of another array
console.log(extended); // [0, 1, 2, 3, 4]

const word = "Rajeev";
const chars = [...word]; // Expanding Strings into Arrays

console.log(chars); // ["R", "a", "j", "e", "e", "v"]

const nested = [[1, 2], [3, 4]];
const flat = [...nested[0], ...nested[1]]; //Flattening Arrays (Shallow)

console.log(flat); // [1, 2, 3, 4]

const numbers = [10, 25, 3, 99, 42];

const min = Math.min(...numbers); //Minimum with spread

console.log(min); // 3

const listings = [
  { city: "Goa", price: 1200 },
  { city: "Mumbai", price: 2500 },
  { city: "Pune", price: 1800 }
];

const prices = listings.map(l => l.price);
const cheapest = Math.min(...prices);

console.log(cheapest); // 1200


const defaultAmenities = ["WiFi", "Parking"];
const userAmenities = ["Pool", "Breakfast"];

const finalAmenities = [...defaultAmenities, ...userAmenities];

console.log(finalAmenities);
// ["WiFi", "Parking", "Pool", "Breakfast"]

//Spread in Object Literal
const user = { name: "Rajeev", role: "Developer" };
const copy = { ...user }; //Copying Objects

console.log(copy); 
// { name: "Rajeev", role: "Developer" }
console.log(user === copy); // false (different objects)

const personal = { name: "Rajeev", location: "Mulshi" };
const professional = { role: "Full-Stack Developer", company: "RoamStay" };

const merged = { ...personal, ...professional }; //Merging Objects

console.log(merged);
// { name: "Rajeev", location: "Mulshi", role: "Full-Stack Developer", company: "RoamStay" }


const base = { role: "Developer", city: "Pune" };
const updated = { ...base, role: "Software Engineer" }; //Overriding Properties
//Properties defined later override earlier ones
console.log(updated);
// { role: "Software Engineer", city: "Pune" }

const user1 = { name: "Rajeev" }; //Adding New Properties
const extended = { ...user1, skills: ["JS", "React", "Node.js"] };

console.log(extended);
// { name: "Rajeev", skills: ["JS", "React", "Node.js"] }


const state = { loggedIn: false, user: { name: "Rajeev", role: "Developer" } };

const newState = { //Nested Updates (React Example)
  ...state, 
  loggedIn: true, 
  user: { ...state.user, role: "Full-Stack Developer" } 
};
//This pattern is essential in React for immutability when updating nested state.

console.log(newState);
// { loggedIn: true, user: { name: "Rajeev", role: "Full-Stack Developer" } }


//rest
function sum(...numbers) { //Rest in Function Parameters
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
//Here, ...numbers collects all arguments into an array [10, 20, 30]

console.log(sum(10, 20, 30)); // 60


const [first, second, ...rest] = [1, 2, 3, 4, 5]; //Rest in Array Destructuring
//rest gathers the remaining elements into an array

console.log(first);  // 1
console.log(second); // 2
console.log(rest);   // [3, 4, 5]

const user2 = { name: "Rajeev", role: "Developer", location: "Mulshi" };

const { name, ...details } = user2; //Rest in Object Destructuring
//details collects all properties except name

console.log(name);    // "Rajeev"
console.log(details); // { role: "Developer", location: "Mulshi" }

function applyFilters(city, ...otherFilters) {
  console.log(`City: ${city}`);
  console.log(`Other filters:`, otherFilters);
}

applyFilters("Goa", "wifi", "pool", "breakfast");
// City: Goa
// Other filters: ["wifi", "pool", "breakfast"]

function cheapestPrice(...prices) { 
  return Math.min(...prices);  //Minimum with Rest + Math.min
}

console.log(cheapestPrice(1200, 2500, 1800)); // 1200

//Destructuring
const numbers = [10, 20, 30];

const [a, b, c] = numbers;

console.log(a); // 10
console.log(b); // 20
console.log(c); // 30

const [first, , third] = [1, 2, 3]; //Skipping Elements
console.log(first); // 1
console.log(third); // 3

const [head, ...tail] = [1, 2, 3, 4]; //Using Rest with Destructuring
console.log(head); // 1
console.log(tail); // [2, 3, 4]

//Object Destructuring
const user = { name1: "Rajeev", role: "Developer", location: "Mulshi" };

const { name1, role } = user;
//Here, name and role are directly extracted from user
console.log(name1); // "Rajeev"
console.log(role); // "Developer"

const { name: fullName, role: jobTitle } = user; //Renaming variables
// we can rename properties while destructuring
console.log(fullName); // "Rajeev"
console.log(jobTitle); // "Developer"

const { location = "Unknown", age = 22 } = user; //Default Values
//Default values prevent undefined when a property doesn’t exist
console.log(location); // "Mulshi"
console.log(age);      // 22 (default since not in object)

const listing1 = {
  city: "Goa",
  price: 1200,
  amenities: { wifi: true, pool: false }
};

const { city1, amenities: { wifi } } = listing1; //Nested Destructuring
//We can destructure nested objects directly
console.log(city1); // "Goa"
console.log(wifi); // true

const { name, ...details } = user; //Rest with Object Destructuring
//Rest collects the remaining properties into a new object
console.log(name);    // "Rajeev"
console.log(details); // { role: "Developer", location: "Mulshi" }

//- destructure directly in function parameters
function greet({ name, role }) {
  console.log(`Hello ${name}, your role is ${role}`);
}
//- Perfect for React props and API responses where objects are common
greet(user); // Hello Rajeev, your role is Developer

const listing = {
  city: "Pune",
  price: 1800,
  amenities: ["WiFi", "Breakfast"]
};

const { city, price, amenities } = listing;

console.log(`${city} stay costs ₹${price} and includes ${amenities.join(", ")}`);
// Pune stay costs ₹1800 and includes WiFi, Breakfast