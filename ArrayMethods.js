// we can eaisly manipulate the data using this map() , filter() , reduce() finction in js.

// map(): calls a callback function on each element of an array and return a new array that contains result.

let number=[1,2,3];
let doubleNumber = number.map((e)=>e*2);
console.log(doubleNumber);

// filter() : Returns the elements of an array that meet the condition specified in a callback function.

let no =[1,2,3,4,5,6,7,8,9,10];
let evenNo = no.filter((e)=>e %2==0);
console.log(evenNo);

// reduce() : Returns the elements of an array that meet the condition specified in a callback function.
//           The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

let num=[1,2,3,4,5];
let sum=num.reduce((acc,num)=>acc + num,0);
console.log(sum);
  
// max number array using reduce() function.

let Top=[10,5,25,8,30,15];
let MaxNo=Top.reduce((max,num)=> {
    if (num>max){
        return num;
    }
    else{
        return max ;
    }
},Top[0]);

console.log(MaxNo);
