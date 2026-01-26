let btn = document.querySelector("button");
console.dir(btn);

btn.onclick = function(){
    alert("button was clicked");
};

function hello(){
    alert("hii there");
}

btn.onclick = hello;

// Mouse pointer events
onclick
btn.onclick = () => {
  console.log("Button clicked!");
};

//onmouseenter
const mainImage = document.getElementById("mainImg");

// Using onmouseenter
mainImage.onmouseenter = () => {
  mainImage.style.border = "5px solid red";
  console.log("mouse entered over spider-man pic.");
}

//EventListeners
const heading = document.querySelector("h1"); 
heading.addEventListener("click", () => {  //click on heading
  heading.style.color = "red";
  heading.textContent = "Spider-Man Activated!";
});

const mainImage = document.getElementById("mainImg");
mainImage.addEventListener("mouseenter", () => {  //hover over main image
  mainImage.style.border = "5px solid blue";
});
mainImage.addEventListener("mouseleave", () => {
  mainImage.style.border = "none";
});

//multiple listeners on same element
const desc = document.getElementById("description");

desc.addEventListener("click", () => {
  desc.style.backgroundColor = "yellow";
});

desc.addEventListener("dblclick", () => {
  desc.style.backgroundColor = "green";
});

// "this" in Eventlisteners
let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
let p = document.querySelector("p");


function changeColor(){
    console.dir(this);
    this.style.backgroundColor = "blue";
}

p.addEventListener("click",changeColor);
h2.addEventListener("click", changeColor);
h1.addEventListener("click",changeColor);

const boxLinks = document.querySelectorAll(".boxLink");

function toggleHighlight() {
  console.log("Toggled:", this.textContent);
  this.classList.toggle("highlight");
}

boxLinks.forEach(link => link.addEventListener("click", toggleHighlight));

//keyboard events
let np = document.querySelector("input");
np.addEventListener("keydown", function(event) {
  console.log("Key pressed:", event.key);
  console.log("Pressed keycode:", event.code);
});

document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    const heading = document.querySelector("h1");
    heading.textContent = "Spider-Man Activated!";
    heading.style.color = "red";
  }
});

// //Form events
const form = document.getElementById("heroForm");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // prevent page reload, otherwise action page would have been automatically loaded.
  const name = document.getElementById("heroName").value;
  alert(`Hero submitted: ${name}`);
});

//Focus and blur styling
heroName.addEventListener("focus", function() {
  this.style.border = "2px solid blue";
});

heroName.addEventListener("blur", function() {
  this.style.border = "1px solid gray";
});

//extracting form data
//using .value
const form1 = document.getElementById("heroForm");

form1.addEventListener("submit", function(event) {
  event.preventDefault(); // stop page reload
  const name = document.getElementById("heroName").value;
  const age = document.getElementById("heroAge").value;
  console.log(`Hero: ${name}, Age: ${age}`);
});

//using Formdata object
form.addEventListener("submit", function(event) {
  event.preventDefault();
  const formData = new FormData(form);

  for (let [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
  }
});

//using event.target.elements
form.addEventListener("submit", function(event) {
  event.preventDefault();
  const elements = event.target.elements;
  console.log(elements.heroName.value); // input with id="heroName"
  console.log(elements.heroAge.value);
});

//example
const cityForm = document.getElementById("cityForm");

cityForm.addEventListener("submit", function(event) {
  event.preventDefault();
  const formData = new FormData(cityForm);
  alert(`Spider-Man loves: ${formData.get("city")}`);
});

//Form & Input Related Event
//change; - Fires when an input’s value changes and loses focus.
const heroName = document.getElementById("heroName");
heroName.addEventListener("change", () => {
  console.log("Final value:", heroName.value);
});

//input: Fires immediately as the user types or modifies the value
heroName.addEventListener("input", () => {
  console.log("Typing:", heroName.value);
});