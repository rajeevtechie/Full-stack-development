// //event bubbling
// const parent = document.getElementById("parent");
// const child = document.getElementById("child");

// parent.addEventListener("click", () => {
//   console.log("Parent clicked!");
// });

// child.addEventListener("click", () => {
//   console.log("Child clicked!");
// });

// //event delegation
// const box = document.getElementById("box");

// box.addEventListener("click", function(event) {
//   event.preventDefault(); // stop default link navigation
//   if (event.target.classList.contains("boxLink")) {
//     console.log("Clicked:", event.target.textContent);
//     event.target.style.color = "red"; // change only the clicked link
//   }
// });

// //Js call stack
// function greet() {
//   console.log("Hello");
//   askName();
// }

// function askName() {
//   console.log("What's your name?");
// }

// greet();

// function first() {
//   console.log("First function start");
//   second();
//   console.log("First function end");
// }

// function second() {
//   console.log("Second function start");
//   third();
//   console.log("Second function end");
// }

// function third() {
//   console.log("Third function running");
// }

// first();

// //callback hell
// function getMission1(callback) {
//   setTimeout(() => {
//     console.log("Mission 1 complete");
//     callback();
//   }, 1000);
// }

// function getMission2(callback) {
//   setTimeout(() => {
//     console.log("Mission 2 complete");
//     callback();
//   }, 1000);
// }

// function getMission3(callback) {
//   setTimeout(() => {
//     console.log("Mission 3 complete");
//     callback();
//   }, 1000);
// }

// // Nested callbacks = Callback Hell
// getMission1(() => {
//   getMission2(() => {
//     getMission3(() => {
//       console.log("All missions complete!");
//     });
//   });
// });

// //Promises
// function getRandomNumber() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const num = Math.floor(Math.random() * 10); // 0–9
//       if (num > 5) {
//         resolve(num); // success if number is 3 or more
//       } else {
//         reject("Number too small: " + num); // reject if less than 3
//       }
//     }, 1000); // simulate async delay
//   });
// }

// getRandomNumber()
//   .then(result => console.log("Generated number:", result))
//   .catch(error => console.error("Error:", error));

// //Promise chaining
// function getRandom() {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(Math.floor(Math.random() * 10)), 500);
//   });
// }

// getRandom()
//   .then(num => {
//     console.log("First number:", num);
//     return getRandom();
//   })
//   .then(num => {
//     console.log("Second number:", num);
//     return getRandom();
//   })
//   .then(num => {
//     console.log("Third number:", num);
//     console.log("All numbers generated!");
//   });

  //result and error in promise
  function checkNumber(num) {
  return new Promise((resolve, reject) => {
    if (num % 2 === 0) {
      resolve(`${num} is even`);
    } else {
      reject(`${num} is odd`);
    }
  });
}

checkNumber(5)
  .then(result => console.log("Result:", result))   // success
  .catch(error => console.error("Error:", error))   // failure
  .finally(() => console.log("Check complete"));    // always runs