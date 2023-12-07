// promise.allsettled();
// It returns a single promise is fulfilled with an array of result objects, one for each promise 
// each result object contain :-
// a satus(either 'fulfilled ' or rejected)& a value (fulfilled value or reson )

// use case : useful when you want process all promises whether they succeed or fail .
// and you want to gather information about tha outcome of each promise.

const getdata = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('data from getdata')
        },2000);
    })
};

const getError=()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            reject('Error data is not available from getError');
        },2000)
    })
}
 
Promise.allSettled([
    getdata(),
    getError()
])
.then (results =>{
    results.forEach(result=>{
        if(result.status==='fulfilled'){
            console.log("value : ",result.value);
        }
        else{
            console.error("reason for rejection :" , result.reason);
        }
        
    })
})
    