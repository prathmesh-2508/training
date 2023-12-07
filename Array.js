// Push() : add 1 or more element at end of exicting array.
 let lang = ['java', 'python','js'];
 lang.push('Ruby', 'html');
 console.log(lang);

 // Pop() : remove the last element in array and return it 
 let number =[1,2,3,4,5];
 number.pop();
 console.log(number);

 // shift() : remove the first element in the array and also return that element.

 let fruits =["apple","banana","Orange"];
 let firstfruits = fruits.shift();
 console.log(fruits);
 console.log(firstfruits);

 // unshift() : add one or more element in the beginning of array and return new lenght of array.

 let colors =['red','green','black','white'];
console.log(colors.length);
colors.unshift('blue','pink');
console.log(colors);
console.log(colors.length);

//splice() : It will allows to add or remove element from the specific index in the array.

let animal =['dog','cat','bird','fish'];
animal.splice(1,2,'bear', 'Tiger');
console.log(animal);

// slice() : return a new array contaning element from the original array based on specified satrt index and end index not included in array



// concat(): combine the two array into one new array.
let fr =["apple","banana","Orange"];
let num =[1,2,3,4,5];
let mixedArray = fr.concat(num);
console.log(mixedArray);

//Indexof() :  Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
let colors1 =['red','green','black','white','red'];
let c1=colors1.indexOf('red');
console.log(c1)
let c2=colors1.indexOf('blue');
console.log(c2)

let redinedx = colors1.indexOf('red',colors1.indexOf('red')+1);
console.log(redinedx);

// includes() : Determines whether an array includes a certain element, returning true or false as appropriate.

let test =['admin', 'custmoer', 'seller', 'vendor'];
 let flag =test.includes('seller','vendor')
 console.log(flag);

 // foreach() : fetch the each and every element in the array.
 let n =[1,2,3,4,5];
 n.forEach((e)=>{console.log(e*2)});

 // every() : check each and evry elemnts going through specific condition and condition get pass return true
 ///          Determines whether all the members of an array satisfy the specified test.

 let num1=[1,2,3,4,5];
  flag =num.every((e)=> e<10);
  console.log(flag);
 
// some() : Determines whether the specified callback function returns true for any element of an array.
//         check at lest one element in array which pass the condition.
let no =[1,2,3,4,5];
flag =no.some((e)=>e% 2==0);
console.log(flag);

// find() : retuns the value of 1st element in array that satisfied the condition.

let total=[1,2,3,5,7];
let fe=total.find((e)=>e% 2==0);
console.log(fe);

// lastIndexof() : it say give me the last index of specific element.
let fruit =["apple","banana",'mango',"apple","Orange"];
let lastApple = fruit.lastIndexOf('apple');
console.log(lastApple);

// reverse() : to reverse a particular array .
let A=[1,2,3,4,5,6];
let rev= A.reverse();
console.log(rev);

// Sort() : Sorts an array in place. This method mutates the array and returns a reference to the same array. (sort by alphanumeric 1>A>a) 

let product =['macbook','imac','java',123,'Top','Pop'];
let pro = product.sort()
console.log(pro);



