// document.getElementById("myButton").addEventListener("click", function () {
//   console.log("Button clicked!");
// });
// let Name = prompt("enter your name");
// alert("your name is"+ Name);

// string methods
// let str1 = "    Hello World    ";
// document.write(str1.trim());

// let str2 = "Rajeev";
// str2.toUpperCase();
// console.log(str2);
// let str3 = "Gupta";
// str3.toLowerCase();
// console.log(str3);

// let str3 = "RajeevGupta";
// console.log(str3.indexOf("Rajeev")); //0
// console.log(str3.indexOf("G")); //6
// console.log(str3.indexOf("K")); //-1

// let str4 = "      Rajeev     ";
// console.log(str4.trim().toUpperCase());  //RAJEEV

// let str5 = "ILoveCoding";
// console.log(str5.slice(4)); //eCoding (slicing starts from index 4 ie ecoding)
// console.log(str5.slice(2,5)); //ove(ie ending index is not counted.)
// console.log(str5.slice(-3)); //ing
// console.log(str5.slice(0,5));  //ILove 

// //replace
// console.log(str5.replace("Love","do"));  //IdoCoding(it does not change the original string instead it gives new string.)

// //repeat
// console.log(str5.repeat(2)); //ILoveCodingILoveCoding

//Separate the Sharma in "RamSharma" and replace "r" with "t";
// let str6 = "RamSharma";
// console.log(str6.slice(3));
// console.log(str6.replace("r","t"));

// let arr = ["Rajeev","Gupta",4,5];
// console.log(arr[0]);  //Rajeev
// console.log(arr[1]);  //Gupta
// console.log(arr[3]); //5
// console.log(arr[0][4]); //e (4th index character of element at 0th index in array).
// console.log(arr.length); //4
// console.log(typeof(arr)); //object

// //arrays are mutable.
// let fruits = ["Mango","banana","orange"];
// fruits[0] = "Grapes";
// fruits[1] = "Apple";
// console.log(fruits) //[ 'Grapes', 'Apple', 'orange' ]

// // array methods:
// let arr2 = [];
// arr2.push("Ram");
// arr2.push("hari");
// arr2.push("Sita");
// arr2.push("Gita");
// console.log(arr2); //[ 'Ram', 'hari', 'Sita', 'Gita' ]

// arr2.pop();
// console.log(arr2); //[ 'Ram', 'hari', 'Sita' ]

// arr2.unshift("Rajeev");
// arr2.unshift("Gupta");
// console.log(arr2); //[ 'Gupta', 'Rajeev', 'Ram', 'hari', 'Sita' ]

// arr2.shift();
// console.log(arr2); //[ 'Rajeev', 'Ram', 'hari', 'Sita' ]
// console.log(arr2.indexOf("Rajeev")); //0
// console.log(arr2.includes("Rajeev")); //true
/*
for the given start state of an array, change it to final form using methods.
start: ['january','july','march','august']
final: ['july','june','march','august'] 
*/

// let start = ['january','july','march','august']
// start.shift();
// start.shift();
// console.log(start);
// start.unshift('june');
// start.unshift('july');
// console.log(start);

//concatenate arrays:
// let arr3 = ['ram','hari','geeta','sita'];
// let arr4 = ['arjun','karna','janki'];
// let concatenated = arr3.concat(arr4); //concatenates all the elements from both arrays.
// console.log(concatenated);

//reverse in arrays: 
// let reversed = arr3.reverse(); //it reverses the original array.
// console.log(reversed) //[ 'sita', 'geeta', 'hari', 'ram' ]
// console.log(arr3); //[ 'sita', 'geeta', 'hari', 'ram' ]

//slice in arrays: does not make changes in original array.
// let arr4 = ['red','yellow','blue','black','white','green'];
// console.log(arr4.slice()); //[ 'red', 'yellow', 'blue', 'black', 'white', 'green' ]
// console.log(arr4.slice(3)); //[ 'black', 'white', 'green' ]
// console.log(arr4.slice(4,5)); //[ 'white' ]
// console.log(arr4.slice(2,5)); //[ 'blue', 'black', 'white' ]
// console.log(arr4.slice(-3)); //[ 'black', 'white', 'green' ]

//splice in arrays: make changes in original array.




//sort in arrays: 
let arr5 = ['sunday','monday','friday','wednesday'];
console.log(arr5.sort()); //[ 'friday', 'monday', 'sunday', 'wednesday' ]

let arr6 = [5,2,6,11,63,3,1];
console.log(arr6.sort()); //[1, 11,  2, 3,5,  6, 63]