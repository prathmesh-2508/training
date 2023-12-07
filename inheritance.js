// parent property inherited by a child 

// parent class :

class Vehical{
    constructor(make , model){
        this.make=make;
        this.model=model;

    }
    getInfo(){
        return`${this.make}, ${this.model}`
    }

    startEngine(){
        console.log('strat engien....');
    
    }
    StopEngine(){
        console.log('Stop engine......');
    }

}

// child class 
class Car extends Vehical{
    constructor(make,model,fueltype){
        super(make,model);
        this.fueltype=fueltype;
    }

    drivecar(){
        console.log("drive car..."+ this.model);
    }
}

class Truck extends Vehical{
    constructor(make,model,Lodingcapacity){
        super(make,model);
        this.Lodingcapacity=Lodingcapacity;

    
}
}

const car = new Car('Honda','Q4','petrol');
const truck = new Truck('Tata','C01',100);

car.startEngine();
truck.startEngine();
console.log(car.getInfo());
console.log(truck.getInfo());

