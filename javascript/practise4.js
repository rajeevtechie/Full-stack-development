//object literals
const student = {
    name: "Rajeev",
    age: 23,
    marks: 99.5
};

console.log(student);
console.log(student.name); //accessing the values of objects
console.log(student["name"]); //another way to access the values of objects


//practise: create an object literal for the properties of thread/twitter post which includes: username, content, likes, reposts,tags
const twitter_post = {
    username: "rajeevgupta001",
    content: "this is an example of js object literals",
    likes: 15,
    reposts: 12,
    tags: ["@rajeevgupta","@sitpune"]
}

console.log(twitter_post);


const obj = {
    1: "a",
    2: "b",
    null: "c",
    undefined: "d"
};

console.log(obj["1"]); //here, we can't use (obj.1) bcz  Dot notation expects a valid identifier (like obj.name), but 1 is a number.

//Correct Usage
// To access numeric or non-identifier keys, use bracket notation:
console.log(obj[1]);         // "a"
console.log(obj[2]);         // "b"
console.log(obj[null]);      // "c"
console.log(obj[undefined]); // "d"

//updating the values.
const engineer = {
    name: "Ram",
    age: 23,
    branch: "CSE"
};

console.log(engineer); //Output: { name: 'Ram', age: 23, branch: 'CSE' }

engineer["name"] = "hari"; 
engineer["age"] = 24;
engineer.branch = "B.tech CSE";

console.log(engineer); //output: { name: 'hari', age: 24, branch: 'B.tech CSE' }

//object of objects
const classInfo = {
    Ram: {
        grade: "A+",
        city: "Delhi"
    },

    Shyam: {
        grade: "A",
        city: "Pune"
    },

    Hari: {
        grade: "O",
        city: "Mumbai"
    }
};

console.log(classInfo);
console.log(classInfo.Ram);
console.log(classInfo.Ram.grade); 

//Array of objects
const classinfo = [
    {
        name: "Aman",
        grade: "A+"
    },
    {
        name: "shyam",
        grade: "A"
    },
    {
        name: "Ram",
        grade: "O"
    }
];

console.log(classinfo);
console.log(classinfo[0]); //{ name: 'Aman', grade: 'A+' }
console.log(classinfo[0]["name"]); //Aman
console.log(classinfo[0].grade); //A+

//Math Object
console.log(Math.PI); //3.141592653589793
console.log(Math.E); //2.718281828459045

console.log(Math.abs(5)); //5
console.log(Math.abs(-5)); //5
console.log(Math.abs(-5.6)); //5.6

console.log(Math.pow(2,4)); //16
console.log(Math.pow(2,5)); //32

console.log(Math.floor(5)); //5
console.log(Math.floor(-5)); //-5
console.log(Math.floor(5.99999)); //5
console.log(Math.floor(-5.99999)); //-6

console.log(Math.ceil(6)); //6
console.log(Math.ceil(-6)); //6
console.log(Math.ceil(6.234)); //7
console.log(Math.ceil(-6.234)); //-6

console.log(Math.random()); //0.4711767722096193
console.log(Math.random()); //0.8073437586378583    

//generate a random number between 1 to 10;
console.log(Math.floor(Math.random()*10 +1));
console.log(Math.floor(Math.random()*10 +1));

//generate a random number between 1 t0 15;
console.log(Math.floor(Math.random() * 15 + 1));
console.log(Math.floor(Math.random() * 15 + 1));

//generate a random number between 1 to 100:
console.log(Math.floor(Math.random() * 100 + 1));
console.log(Math.floor(Math.random() * 100 + 1));
