// function that returns a resolved promise..



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

Promise.race([
    resolvePromise(),
    rejectPromise()
])
.then(result=>{
    console.log('result :', result);
})
.catch(error=>{
    console.log('Error :', error );
})