Name = "Rajeev Kumar Gupta"; //strings
// console.log(Name);
console.log(Name.length); //printing the length of the string.
console.log(Name[2]); //accessing the element through string slicing(string index).
console.log(Name[Name.length-2]); //accessing the second last element of the string.
// console.log(typeof(Name));

let firstName = "rajeev";
let lastName = "gupta";
let fullName = firstName + " " + lastName //string concatenation.
console.log(fullName);
// let person = {
//     Name: "Rajeev Kumar Gupta",
//     Age : 20,
//     PRN : 150
// };

// var work = 24; //old way of declaring variables.
// console.log(person.Age);
// console.log(person.PRN);

// function naam(){
//     Name1 = "rajeev gupta";
//     console.log(Name1);
// }

let num = 25;
let newnum = num++;
let newnum1 = ++num;
console.log(newnum); //25
console.log(newnum1); //27
console.log(num); //27