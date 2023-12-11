// async function without await with reslove

async function f1(){
    console.log('this is async function await step');
    return 42; // return a promise(resolve)on top 42.
}
f1()
.then(result =>{
    console.log(result);
});

// async function without await with error.

async function f2(){
    console.log('this an async function with error');
    throw new Error('this is my error'); // return a promise rejected.
}
f2()
.catch(error =>{
console.log(`the error message ${error}`);
})

// async function with resolve and reject Promise.

function getInfo(){
    return new Promise ((resolve , reject)=>{
        const randomNumber = Math.random();
        setTimeout(()=>{
            if(randomNumber<0.5){
                resolve(randomNumber);
            }else{
                reject(new Error('wrong value error'));
            }
        },2000);
    })
}
// create function which calling getinfo()

async function getNumberInfo(){
    try{
        const result = await getInfo(); // async step
        console.log('result:' ,result);
    }
    catch(error){
        console.log('Error:',error);
    }
}
// call getNumberInfo
getNumberInfo();