// static value is created when the all object need a common value or common property.
// static value call only by clss.varible name .
// we can create static method also and call it by class name 
// non-static function / variable called by object refrence .

class Car{

    static wheels = 4 ;
    constructor(name , model , price){
        this.name=name;
        this.model=model;
        this.price=price;
    }
    static stop(){
        console.log('stop a car...');

    }

    drive(){
        console.log("drive a car..");
    }
}
 const c1= new Car('Honda','Q1',520000);
 console.log(`${c1.name},${c1.model},${c1.price}`);
 console.log(Car.wheels);
 c1.drive();
 Car.stop();