function CheckWeekDay(DayNo){
    let day;
    switch (DayNo) {
        case 0:
            day='Sunday'
        break;

        case 1:
            day='Monday'
        break;

        case 2:
            day='Tuesday'
        break;

        case 3:
            day='Wensday'
        break;

        case 4:
            day='Thursday'
        break;

        case 5:
            day='Friday'
        break;

        case 6:
            day='Saturday'
        break;
    
        default:
            console.log('Invalid Day')
            break;
    }
    return day;
}
console.log(CheckWeekDay(5));
console.log(CheckWeekDay(3));


let browser="chrome";
switch (browser) {
    case "chrome":
        console.log('Launch chrome');
        break;

    case "Firefox":
        console.log('Launch Firefox');
        break;

    case "Edge":
            console.log('Launch Edge');
            break;   

    default:
        console.log('plz pass right browser.....')
        break;
}