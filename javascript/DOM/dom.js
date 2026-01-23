// const mainImage = document.getElementById("mainImg");
// console.log(mainImage); // logs the <img> element

// mainImage.style.width = "50%"; //change its width dynamically

// const desc = document.getElementById("description");
// console.log(desc.textContent); // prints the whole paragraph text

// const oldImages = document.getElementsByClassName("oldImg");
// console.log(oldImages); // HTMLCollection of 3 <img> elements

// for (let img of oldImages) {
//     img.style.border = "2px solid red";
// }

// const paragraphs = document.getElementsByTagName("p");
// for (let p of paragraphs) {
//   console.log(p.textContent);
// }

// //Select by ID
// const mainImage = document.querySelector("#mainImg");
// console.log(mainImage.src);

// //Select by class
// const box = document.querySelector(".box");
// box.style.backgroundColor = "yellow";

// console.dir(document.querySelector("div a"));

//Setting content in Object
//innerText
const heading = document.querySelector("h1");
console.log(heading.innerText); // "Spider Man"
heading.innerText = "Rajeev Gupta";
console.log(heading.innerText);

//textContent
// const desc = document.getElementById("description");
// console.log(desc.textContent); 
// Prints the entire paragraph text, even if hidden

//inner HTML
// const box = document.querySelector(".box");
// console.log(box.innerHTML);
/*
<h4>Publication Info</h4>
<ul>
  <li><a href="#" class="boxLink">Publisher</a></li>
  ...
</ul>
*/

//Manipulating attributes
//getAttribute("attr")
// const mainImage = document.getElementById("mainImg");
// console.log(mainImage.getAttribute("src")); 
// // prints the image URL

// //setAttribute("attr","val")
// mainImage.setAttribute("alt", "Spider-Man swinging");
// mainImage.setAttribute("width", "400"); 

// //hasAttribute(name): checks if an attribute exists
// console.log(mainImage.hasAttribute("id")); // true
// console.log(mainImage.hasAttribute("title")); // false

// //removeAttribute(name): Removes an attribute
// mainImage.removeAttribute("id");

//Manipulating style
//Directly via ".style" property, here "style" only gives us the inline properties.
const heading = document.querySelector("h1");
heading.style.color = "red";
heading.style.fontSize = "3rem";

// //Toggling CSS classes: first define styles in CSS, then add/remove classes
// const box = document.querySelector(".box");
// box.classList.add("highlight");   // apply style
// // box.classList.remove("highlight"); // remove style
// // box.classList.toggle("highlight"); // toggle on/off

// //Change all .oldImg sizes dynamically
// const oldImages = document.querySelectorAll(".oldImg");
// oldImages.forEach(img => {
//   img.style.width = "150px";
//   img.style.height = "150px";
// });

// //Highligh description on click
// const desc = document.getElementById("description");
// desc.addEventListener("click", () => {
//   desc.style.backgroundColor = "lightblack";
//   desc.style.fontWeight = "bold";
// });