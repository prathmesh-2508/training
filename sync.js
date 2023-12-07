// synchronous java script executes code in linear and sequential manner.
// each line code is executed one after the other and the program wait for esach operation to complete before moving onto next
// but this can be lead to bloking behaviour.

console.log('start......');
for(let i=0 ; i<4 ; i++){
    console.log(i);
}
console.log('end.......');