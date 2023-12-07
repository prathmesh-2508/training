function CheckAge(age){
if(age>=18)
console.log('You can vote');
else{
    console.log('you can not vote')
}
}
CheckAge(15);
CheckAge(30);

function checkNumber(number){
    if(number >0 ){
        console.log('Number is +ve');
    }
    else if(number<0){
        console.log('Number is -ve')
    }
    else{
        console.log('Zero number found')
    }
}
checkNumber(10);
checkNumber(-5);
checkNumber(0);
console.log('..............................................................................')

// nested if else..........................................

function checkGrade(score){
    let grade;
    if(score>=90){
        grade='A';
    }
    else{if(score>=80){
        grade='B';
    }
    else{if(score>=70){
        grade='C';
    }
    else{
        grade='D'
    }
    }      
    }
    console.log(grade);

}
checkGrade(35);
checkGrade(95);
checkGrade(75);