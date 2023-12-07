// call back function is a function that use to pass as an argument in to another function
// when sync call / task completed then only call back function will be called.

// basic call back :
function greet(name,callback){
    console.log('Hello' + name);
    callback();
}

function welcome(){
    console.log('Welcome...!');
}

greet('Prathm',welcome);