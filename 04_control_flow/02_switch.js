// switch syntax : 
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 6
switch (month) {
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("feburary");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;
    case 5:
        console.log("may");
        break;
    case 6:
        console.log("june");
        break;

    default:
        console.log("enter a valid month no. b/w 1 to 6")
        break;
}
// if not use break , then all case follow your case run except default IMPORTANT 