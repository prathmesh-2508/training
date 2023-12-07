// for loop

for(i=0 ; i<=10 ;i++){
    console.log(i);
}

console.log('---------------------------------||----------------------------');

// for...of loop (working as for each loop)

const array=[1,2,3,4,5];
for(const e of array){
    console.log(e);
}

console.log('----------------------------------||----------------------------');

const arr=[1,2,3,4,5];
for(let i=0;i<array.length ; i++){
    console.log(arr[i]);
}

console.log('----------------------------------||----------------------------');

let p=1;
while (p<=10) {
   console.log(p);
   p++ 
}
console.log('----------------------------------||----------------------------');

let l= 2;
while (l<=10) {
    console.log(l);
    l=l+2;
}
console.log('----------------------------------||----------------------------');

const browser=["chrome","firefox","edge","IE"];
for(const e of browser){
    if(e=="edge"){
    console.log('launch edge....');
    break;
}
}
console.log('----------------------------------||----------------------------');
console.log('----------------------------------||----------------------------');

// create object in js...using for in loop.

const user ={
    name : "Prath",
    age : 25,
    city : "pune",
}
for(const key in user){
    console.log(key +" : "+user[key]);
}

console.log('----------------------------------||----------------------------');

const br = ["chrome","firefox","edge","IE"];
for(const e in br){
    console.log(br[e]);
}

