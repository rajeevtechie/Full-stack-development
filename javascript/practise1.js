// declare your name as a string and print its length
let Name = "Rajeev Gupta";
console.log(Name.length);

//Declare your first name as a string and print its first character and last character.
let firstName = "Rajeev";
console.log(firstName[0]); //first character
console.log(firstName[firstName.length-1]); //last character.

/*what is the output of the following code:
"apnacollege"+123
*/
let out_put = "apnacollege"+123;
console.log(out_put);

//what are the lengths of an empty string and a string with a single space?
let str_ing = "";
let string1 = " ";
console.log(str_ing.length);
console.log(string1.length);
let arr = ['a','b','c'];
let output = arr.join(" ");
console.log(output);

//create a traffic light system that shows what to do based on color.
let light_color = "yellow";
if(light_color === "red"){
    console.log("Stop");
}
else if(light_color === "yellow"){
    console.log("please slow down.");
}
else{
    console.log("Go.");
}

//create a system to calculate popcorn prices based on the size customer asked for.
let size = "XL";
if(size === "XL"){
    console.log("Rs. 250");
}
else if(size === "L"){
    console.log("Rs. 200");
}
else if(size === "M"){
    console.log("Rs. 100");
}
else{
    console.log("Rs. 50");
}

//A "good string" is a string that starts with the letter 'a' & has a length of >3. write a program to find if a string is good or not.
let string = "ajeev";
if(string[0] == "a" && string.length>3){
    console.log("it is a good string.");
}
else{
    console.log("it is not a good string.");
}
//use switch statement to print the day of the week using a number varaible 'day' with values from 1 to 7.
let day = 2;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Enter valid day number.");
}


/*create a number variable num with some value.
Now, print "good" if the number is divisible by 10 and print "bad" if it is not.*/

let num = 50;
if(num%10==0){
    console.log("Good");
}
else{
    console.log("bad");
}

/*Take the user's name & age as input using prompts.
Then return back the following statement to the user as an aler(by substituting their name & age):
'name' is 'age' year old */
let user_name = prompt("Ente your name: ");
let user_age = prompt("Enter your age: ");
console.log("${name} is ${age} old.")


/*Write a switch statement to print the months in a quarter.
Months in Quarter 1: January,February, March
Months in Quarter 2: April, May, June
Months in Quarter 3: July, August,September
Months in Quarter 4: October,November,December
[Use the number as the case value in switch]
 */
let Quarter = 4;
switch(Quarter){
    case 1:
        console.log("January,February,March");
        break;
    case 2:
        console.log("April,May,June");
        break;
    case 3:
        console.log("July,August,September");
        break;
    case 4:
        console.log(" October, November,December.");
        break;
    default:
        console.log("Write correct quarter number.");
}

/*A string is a golden string if it starts with the character 'A' or 'a' and has a total 
length greater than 5.
for a given string print if it is golden or not. */
let golden_string = "apples";
if((golden_string[0]=="a" || golden_string[0]=="A") && (golden_string.length>5)){
    console.log("it is golden word.");
}
else{
    console.log("it is not a golden word.");
}

/*Write a program to check if 2 numbers have the same last digit.
eg. 32 and 47852 have the same last digit ie. 2*/
let num1 = 2532;
let num2 = 6342;
if(num1%10 == num2%10){
    console.log("both numbers end with same number.");
}
else{
    console.log("both numbers doesn't end with same numbers.");
}