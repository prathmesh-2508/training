// way to declaring functions in js.

// 1.function declaration :

function add(a,b){
    return a+b ;
}
const res=add(6,4);
console.log(res);

// 2.function expression : it is a annonymous function and it has to be assign specific variable which can be called using variable name.
 
const multiply = function(x,y){
    return x*y;

}
const mul=multiply(5,5);
console.log(mul);

//3. Arrow function expression :
const divide=(p,q)=>p/q;
const div=divide(20,2);
console.log(div)

//4.Function constructor : last parameter in will be work as function body in bracket.
const substract = new Function('a','b','return a-b;');
const sub=substract(45,24);
console.log(sub);

//5.IIFE (Immediately invoked function expression): self invoked funcation that is declared & exicuted immediately. it is used display imp mesg or log note.

(function(){
    console.log("Server is up and running on port 3000....")
})();

//6. Generator function : the function returns an itterator object for generating sequence of values.//it will be function and yield keyword.

function* generateNumberseq(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;

}
const genrator = generateNumberseq();
console.log(genrator.next().value);
console.log(genrator.next().value);
console.log(genrator.next().value);
console.log(genrator.next().value);

//7.Annonymous function : its function that does not have any name (no specific name or identity). use for callback function.

const number = [1,2,3,4,5];
const Squre =number.map(function(e){
    return e*e;
})
console.log(Squre); 

// 8.recursive function : a function call itself during the exicution. It will solve problem by breking in small part / function.

function factorial(n){
    if(n==0 || n==1){
        return 1 ;
    }
    else{
        return n*factorial(n-1);
    }
}
console.log(factorial(5));
console.log(factorial(6));


// 9.higher order function : it means that take one or more function as arguments.

function addition(a,b){
    return a+b;

}
function operator(funName , a,b){
    return funName(a,b);
}
const s = operator(multiply , 4,5);
console.log(s);

