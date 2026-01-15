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