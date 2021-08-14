

// when we need to import just one component

// const a=require("./export");
// console.log(a);



//when we need to import multiple component
    //1st way

    /*
const {a,pi,str} = require("./export");
console.log(a);
console.log(pi);
console.log(str);
console.log(a,pi,str);
*/

    //2nd way

//when we need to import multiple component
/*

const myObj = require ("./export");
console.log("This is the full object: ",myObj);
console.log(myObj.pi);
console.log(myObj.number);
console.log(`This is a string from export file: ${myObj.name}`);

*/



// const myfunc = require("./export");
// res = myfunc(2,3);
// console.log(res);

// const {myfunc1,myfunc2} = require("./export");
// res1 = myfunc1(2,3);
// res2= myfunc2(2,3);
// console.log(res1);
// console.log(res2);




















// function modifier(strings,...values){
//     console.log(strings);
//     console.log(values)
// }


// var player1="sakib";
// var player2="tamim";
// console.log(modifier `we have ${player1} and ${player2} best player in our team`);




// function modifier(strings,...values){
//     const m=strings.reduce((prev,current)=>{
//         return prev + current + (values.length ? "Mr. " +values.shift() : "");
//     },"");
//     return m;
// }


// var player1="sakib";
// var player2="tamim";
// console.log(modifier `we have ${player1} and ${player2} best player in our team`);



