//Array methods
//forEach
const prices1 = [100, 200, 300];
let total = 0;

prices1.forEach(price => {
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
const number_s = [1, 2, 3, 4];

const doubled = number_s.map(num => num * 2);

console.log(doubled); // [2, 4, 6, 8]

const listing_s = [ //real life example
  { city: "Goa", price: 1200 },
  { city: "Mumbai", price: 2500 },
  { city: "Pune", price: 1800 }
];

const card_s = listing_s.map(listing => {
  return `<div class="card">
            <h2>${listing.city}</h2>
            <p>₹${listing.price} per night</p>
          </div>`;
});

console.log(card_s);
/*
[
  "<div class='card'>...</div>",
  "<div class='card'>...</div>",
  "<div class='card'>...</div>"
]
*/

// filter()
const numbers7 = [10, 25, 30, 45, 50];

const greaterThan30 = numbers7.filter(num => num > 30);

console.log(greaterThan30); // [45, 50]

const listings5 = [
  { city: "Goa", price: 1200 },
  { city: "Mumbai", price: 2500 },
  { city: "Pune", price: 1800 }
];

const budgetFriendly = listings5.filter(listing => listing.price < 2000);

console.log(budgetFriendly);
// [
//   { city: "Goa", price: 1200 },
//   { city: "Pune", price: 1800 }
// ]

//difference between map and filter
const listings6 = [
  { city: "Goa", price: 1200 },
  { city: "Mumbai", price: 2500 },
  { city: "Pune", price: 1800 }
];

// filter: only budget-friendly listings
const budgetListings = listings6.filter(l => l.price < 2000);

// map: transform listings into UI cards
const cards = budgetListings.map(l => `<div>${l.city} - ₹${l.price}</div>`);

console.log(cards);
// ["<div>Goa - ₹1200</div>", "<div>Pune - ₹1800</div>"]

//every()
const numbers5 = [2, 4, 6, 8];

const allEven = numbers5.every(num => num % 2 === 0);

console.log(allEven); // true

const listings7 = [
  { city: "Goa", price: 1200 },
  { city: "Mumbai", price: 2500 },
  { city: "Pune", price: 1800 }
];

const withinBudget = listings7.every(l => l.price < 3000);

console.log(withinBudget); // true

//some()
const n_umbers = [1, 3, 5, 7];

const hasEven = n_umbers.some(num => num % 2 === 0);

console.log(hasEven); // false

const l_istings = [
  { city: "Goa", price: 1200 },
  { city: "Mumbai", price: 2500 },
  { city: "Pune", price: 1800 }
];

const hasBudgetOption = l_istings.some(l => l.price < 1500);

console.log(hasBudgetOption); // true

//reduce()
const nu_mbers = [1, 2, 3, 4, 5];

const sum = nu_mbers.reduce((acc, num) => acc + num, 0);

console.log(sum); // 15

const n_ested = [[1, 2], [3, 4], [5]];

const f_lat = n_ested.reduce((acc, arr) => acc.concat(arr), []); //flatten an array

console.log(f_lat); // [1, 2, 3, 4, 5]

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
const num_bers = [1, 2, 3]; //expanding arrays
console.log(...num_bers); 
// Output: 1 2 3

const w_ord = "Rajeev"; //expanding string
console.log([...w_ord]); 
// ["R", "a", "j", "e", "e", "v"]

function sum(a, b, c) {  //passing arguments
  return a + b + c;
}

const nums = [10, 20, 30];
console.log(sum(...nums)); // 60

//Spread in Array Literal
const arr = [1, 2, 3];
const c_opy = [...arr];  //Copying Arrays (Immutable Copy)

console.log(c_opy); // [1, 2, 3]  
console.log(arr === c_opy); // false (different arrays)

const a1 = [1, 2];
const b1 = [3, 4];
const m_erged = [...a1, ...b1];  //merging arrays

console.log(m_erged); // [1, 2, 3, 4]

const b_ase = [1, 2, 3];
const e_xtended = [0, ...b_ase, 4]; //Inserting Elements
//Spread lets you insert arrays in the middle of another array
console.log(e_xtended); // [0, 1, 2, 3, 4]

const word = "Rajeev";
const chars = [...word]; // Expanding Strings into Arrays

console.log(chars); // ["R", "a", "j", "e", "e", "v"]

const nested = [[1, 2], [3, 4]];
const flat = [...nested[0], ...nested[1]]; //Flattening Arrays (Shallow)

console.log(flat); // [1, 2, 3, 4]

const numbe_rs = [10, 25, 3, 99, 42];

const min = Math.min(...numbe_rs); //Minimum with spread

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
const us_er = { name: "Rajeev", role: "Developer" };
const copy = { ...us_er }; //Copying Objects

console.log(copy); 
// { name: "Rajeev", role: "Developer" }
console.log(us_er === copy); // false (different objects)

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


const [f_irst, second, ...rest] = [1, 2, 3, 4, 5]; //Rest in Array Destructuring
//rest gathers the remaining elements into an array

console.log(f_irst);  // 1
console.log(second); // 2
console.log(rest);   // [3, 4, 5]

const user2 = { name: "Rajeev", role: "Developer", location: "Mulshi" };

const { nam_e, ...deta_ils } = user2; //Rest in Object Destructuring
//details collects all properties except name

console.log(nam_e);    // "Rajeev"
console.log(deta_ils); // { role: "Developer", location: "Mulshi" }

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