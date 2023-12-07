// Arrow function is one of the anonnymous function which does not have any name or specified function.

// 1.Parameter arrow function : 
const Squre = num=>num*num;
const reslut = Squre(8);
console.log(reslut);

// 2.no Parameter arrow function :

const meg = ()=>'Hi javaScript';
console.log(meg());

// 3. two Parameter or multiple parameter arrow function :

const add=(a,b)=> a+b;
const res=add(5,3);
console.log(res);

// 4. object parameter :
const getFullName = (person)=>`${person.firstName},${person.lastName}`;

const person={
    firstName :'prathm',
    lastName : 'JS'
}
const FullName =getFullName(person);
console.log(FullName);

// 5.default value of arrow function

const greet=(username="guest",age=0)=>`hello,${username}! you are ${age} year old `;
const g1= greet();
console.log(g1);

const g2=greet('tom',30);
console.log(g2);

// 6.Rest parameter ...varargs
const sum=(...number)=>number.reduce((acc , num)=> acc + num , 0);
const total = sum(1,2,3,4,5);
console.log(total) 