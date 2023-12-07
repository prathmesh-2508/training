// promise.all() is commonly used when you want to perform multiple asychronous operation in parrallel and wait for all of them to complet before moving on 



const function1 = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            //resolve('data from fun-1');
            const data=[1,2,3]
            resolve(data);

            
        }, 2000);
    });
}
const function2 = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            //resolve('data from fun-2');
            const data=[4,5,6];
            resolve(data);

            
        }, 2000);
    });
}

const function3 = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            //resolve('data from fun-3');
            const data=[7,8,9];
            resolve(data);

            
        }, 2000);
    });
};

Promise.all([
    function1,
    function2,
    function3
])

.then(dataArray =>{
    console.log('all data from diff function :' ,dataArray)
})
.catch(error=>{
    console.log('error in promise', error)
});

// case 2 : 
// f1--resloved,
//f2-- rejected.

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

Promise.all([
    getdata(),
    getError()
])

.then(dataArray=>{
    console.log("all data fetched:",dataArray);
} )
.catch(error=>{
    console.log("error accured :" , error)
})