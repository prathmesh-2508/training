class Car{
    constructor(name,price,model,color){
        this.name=name;
        this.price=price;
        this.model=model;
        this.color=color;
    }
    refuel (){
        console.log(this.name+"refule car");
    }
}

// new keyword - to create a object.

const c1 = new Car('BMW',20000,'Q4','Red');
console.log(c1);
console.log(c1.color);
console.log(c1.model)
console.log(c1.price);
c1.refuel;