const mainImage = document.getElementById("mainImg");
console.log(mainImage); // logs the <img> element

mainImage.style.width = "50%"; //change its width dynamically

const desc8 = document.getElementById("description");
console.log(desc8.textContent); // prints the whole paragraph text

const oldImages8 = document.getElementsByClassName("oldImg");
console.log(oldImages8); // HTMLCollection of 3 <img> elements

for (let img of oldImages8) {
    img.style.border = "2px solid red";
}

const paragraphs = document.getElementsByTagName("p");
for (let p of paragraphs) {
  console.log(p.textContent);
}

//Select by ID
const mainImage6 = document.querySelector("#mainImg");
console.log(mainImage6.src);

//Select by class
const box = document.querySelector(".box");
box.style.backgroundColor = "yellow";

console.dir(document.querySelector("div a"));

//Setting content in Object
//innerText
const heading = document.querySelector("h1");
console.log(heading.innerText); // "Spider Man"
heading.innerText = "Rajeev Gupta";
console.log(heading.innerText);

//textContent
const desc7 = document.getElementById("description");
console.log(desc7.textContent); 
// Prints the entire paragraph text, even if hidden

//inner HTML
const box6 = document.querySelector(".box");
console.log(box6.innerHTML);
/*
<h4>Publication Info</h4>
<ul>
  <li><a href="#" class="boxLink">Publisher</a></li>
  ...
</ul>
*/

//Manipulating attributes
//getAttribute("attr")
const mainImag_e = document.getElementById("mainImg");
console.log(mainImag_e.getAttribute("src")); 
// prints the image URL

//setAttribute("attr","val")
mainImage.setAttribute("alt", "Spider-Man swinging");
mainImage.setAttribute("width", "400"); 

//hasAttribute(name): checks if an attribute exists
console.log(mainImage.hasAttribute("id")); // true
console.log(mainImage.hasAttribute("title")); // false

//removeAttribute(name): Removes an attribute
mainImage.removeAttribute("id");

// Manipulating style
// Directly via ".style" property, here "style" only gives us the inline properties.
const heading = document.querySelector("h1");
heading.style.color = "red";
heading.style.fontSize = "3rem";

//Toggling CSS classes: first define styles in CSS, then add/remove classes
const box7 = document.querySelector(".box");
box7.classList.add("highlight");   // apply style
// box.classList.remove("highlight"); // remove style
// box.classList.toggle("highlight"); // toggle on/off

//Change all .oldImg sizes dynamically
const oldImages2 = document.querySelectorAll(".oldImg");
oldImages2.forEach(img => {
  img.style.width = "150px";
  img.style.height = "150px";
});

//Highligh description on click
const desc1 = document.getElementById("description");
desc1.addEventListener("click", () => {
  desc1.style.backgroundColor = "lightblack";
  desc1.style.fontWeight = "bold";
});

// classList property
// adding a class
const heading1 = document.querySelector("h1");
heading1.classList.add("highlight"); //.highlight is already written in css, so h1 will be provided with certain styling.
console.log(heading1.classList); //prints the total classes for an element

//removing a class
heading.classList.remove("highlight");

//add a class if absent and remove a class if present
heading.classList.toggle("highlight");

//checks if an element has a class
console.log(heading.classList.contains("highlight")); // true/false

//replace one class with another
heading.classList.replace("highlight", "active");

// Navigation on page
//Parent navigation
const desc = document.querySelector("#description");
console.log(desc.parentElement); // logs the <body> since <p> is inside <body>,element.parentElement → gets the parent node.

//Children Navigation
const box = document.querySelector(".box");
console.log(box.children); // logs <h4> and <ul>
console.log(box.firstElementChild.textContent); // "Publication Info"
/**- element.children → HTMLCollection of child elements.
- element.firstElementChild → first child.
- element.lastElementChild → last child.
 */

//Sibling Navigation
const heading = document.querySelector("h1");
console.log(heading.nextElementSibling); // logs the <img id="mainImg">
/**- element.nextElementSibling → next sibling.
- element.previousElementSibling → previous sibling.
 */


//examples
const box1 = document.querySelector(".box");
const links1 = box1.querySelectorAll("a");
links1.forEach(link => console.log(link.textContent)); //get all links inside .box

const heading7 = document.querySelector("h1"); 
const mainImage = heading7.nextElementSibling;
mainImage.style.border = "3px solid red";   //navigate from h1 to the image

const oldImg = document.querySelector(".oldImg");
console.log(oldImg.parentElement); // logs <div class="images">, find the parent of .oldImg


//Adding elements on page
const newHeading = document.createElement("h3"); ////create the elements
newHeading.textContent = "New section: Spider-Man legacy"; //set its content
newHeading.setAttribute("class", "highlight"); //attaching attribute
newHeading.style.color = "purple";  //attaching styles

//insert before another element
const aboutHeading = document.querySelector("h2");
document.body.insertBefore(newHeading, aboutHeading);

//examples
//Add a new list item in publication info
const newItem = document.createElement("li");
newItem.textContent = "Genre: Superhero";
document.querySelector(".box ul").appendChild(newItem);

//add a new images in .images
const newImg = document.createElement("img");
newImg.src = "https://plus.unsplash.com/premium_photo-1694473485074-b3a09b5c3b5c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3BpZGVybWFufGVufDB8fDB8fHww";
newImg.classList.add("oldImg");
document.querySelector(".images").appendChild(newImg);

//add a button to toggle description
const button = document.createElement("button");
button.textContent = "Toggle Description";
document.body.appendChild(button);

button.addEventListener("click", () => {
  const desc = document.getElementById("description");
  desc.style.display = (desc.style.display === "none") ? "block" : "none";
});

//removing elements from the page
//remove()
const oldImages = document.querySelectorAll(".oldImg");
oldImages[0].remove(); // removes the first old image

//remove all links in .box
const links = document.querySelectorAll(".boxLink");
links.forEach(link => link.remove());