// java script allows tasks to be started and continue in background while the program exicuted other code
// this is useful for task which take long time like fethichng data from server or reding file.

console.log('start......')
setTimeout(()=>{
    console.log('time out is done');
} , 4000);

console.log("end.....");

