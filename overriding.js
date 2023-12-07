// method overriding is possible js.
// method overriding possible from parent to child only .
// if child has his own property then the prefrence given to child clss property first.

class Car{
    constructor(make,model){
        this.make=make;
        this.model=model;
    }
    startEngine(){
        console.log('start engine...for car');
    }
}

class Audi extends Car{
    startEngine(){
        console.log('start engine...for audi');

    }
    autoparking(){
        console.log('audi......autoparking');
    }
}

const audi = new Audi();
audi.startEngine();
audi.autoparking();

const car = new Car();
car.startEngine();