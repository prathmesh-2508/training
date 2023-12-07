// how to create object in js
// 1.object literals : {} simplest way to create object.

const user = {
    name : 'tom',
    age : 25,
    country : 'Uk'
};
console.log(user);
console.log(user.age);

// 2.constructor function : 
 function Car(brand,model,price){
    this.brand=brand;
    this.model=model;
    this.price=price;
 };

 const c1= new Car('BMW','Q3',20000);
 console.log(c1);
 console.log(c1.brand + " "+c1.model+" "+c1.price);

 // class style :
 class Customer {
    constructor(name,product){
        this.name=name;
        this.product=product;
    }
    addtocart(){
        console.log(`${this.product} added to cart`);

    }
 }

 const cust1 = new Customer('Tom','BMW');
 console.log(cust1);
 console.log(cust1.name);
 cust1.addtocart();

 // 4. object.create(); it allows you to use with some prototype object.

 const employePrototype ={
    printInfo : function(){
        console.log(`hello,emp name is ${this.name}`)
    }
 };

 const e1 =Object.create(employePrototype);
 e1.name="Tom";
 e1.printInfo();

 // using the function : it will return object 

 function createDepartment(depname ,hod){
    return{
        depname : depname,
        hod : hod ,

        getdepInfo : function(){
            console.log(`hello,dept name is ${this.depname},${this.hod}`)
        }
    }
 }

 const dep1= createDepartment('physics', 'R S shastri');
 const dep2= createDepartment('math','G M pande');

 dep1.getdepInfo();
 dep2.getdepInfo();
 console.log(dep1.depname+" "+dep1.hod);
 console.log(dep2.depname+" "+dep2.hod);