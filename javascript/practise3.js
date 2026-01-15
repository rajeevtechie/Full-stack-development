//for loops
for(let i=0; i<5; i++){
    console.log(i);
}

for(let i=1; i<10; i+=2){
    console.log(i);
}

for(let i=2; i<10;i+=2){
    console.log(i);
}

//nested for loops
for(let i=0; i<10; i++){
    for(let j=0; j<5; j++){
        console.log(j);
    }
}

let arr = [1,2,5,6,9];
for(let i=0; i<5; i++){
    console.log(arr[i]);
}

//while loop
let j = 1;
while(j<=6){
    console.log(j);
    j++;
}

//do while loop
let k=1;
do{
    console.log(k);
    k++;
} while(k<=6);

// //for-of loop
let fruits = ["Mango","apple","litchi"];
for(fruit of fruits){
    console.log(fruit);
}

for(characters of "Rajeev"){
    console.log(characters);
}

//nested for-of loop
let nums = [[1,2,4,5],[11,12,15,26]]; //
for(elements of nums){
    for(subEle of elements){
        console.log(subEle);
    }
}
/**
output: 1
2
4
5
11
12
15
26
 */
let nums1 = [[1,2,4,5],[11,12,15,26]];
for(elements1 of nums1){
    console.log(elements1);
}
/* 
output:[ 1, 2, 4, 5 ]
[ 11, 12, 15, 26 ]
*/
