// in java script , promises are way to handel asynchoronous operation in a more organized & redable manner.
// they provide clener syntax for dealing with asych code compred to traditional callback based approches.



const randomNumberpromise = new Promise ((resolve, reject)=>{
    setTimeout(()=>{
        const randomvalue = Math.random();
        if(randomvalue > 0.5){
            resolve(randomvalue);
        }
        else{
            reject(new Error('value is to small...!'))
        }
    },2000);// delay of 4sec
});

randomNumberpromise
.then(reslut=>{
    console.log('proimse is fullfilled with value :', reslut);
})
.catch(error=>{
    console.log('promise is rejected with error', error);
});
