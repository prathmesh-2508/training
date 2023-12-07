// chaining promises can be easily chained together using .then , allowing you to sequence asychronous operations .
// this is reffrd as promise  to as promise chaining..

function getEvenNumber(value , delay){
    return new Promise ((resolve , reject)=>{
        setTimeout(()=>{
            if (value % 2== 0 ){
                resolve(value);
            }
            else{
                reject(new Error('value is not even'));
            }
        }, delay);
    })
}
// Promise chain :
getEvenNumber(4,2000)
.then(result =>{
    console.log("step-1 even number : ",result);
    return getEvenNumber(7,3000);
})
.then(result=>{
    console.log('step-2:even number', result);
})
.catch(error=>{
    console.log('promise chain error :',error.message);
});