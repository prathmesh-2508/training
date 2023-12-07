// it is used for handling many promises & reloving with tha value of the first promise 
// similar to the promise race.
// but unlike promice.race(). promis.any()doesnot reject immediatly when first promise reject , it wait until at lest one promise fulfills/ resolved// function that returns a resolved promise..



const resolvePromise = ()=>{
    return new Promise ((resolve , reject)=>{
        setTimeout(()=>{
            resolve("resolved !");
        },2000)
    });
};

// function that return a rejected promise...

const rejectPromise = ()=>{
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            reject("rejected !");
        },500)
    });
};

// use promise.race() to see which promise win 

Promise.any([
    resolvePromise(),
    rejectPromise()
])
.then(result=>{
    console.log('result :', result);
})
.catch(error=>{
    console.log('Error :', error );
})