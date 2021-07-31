
//  >>>>>>>>> spread operator <<<<<<<<<<<

// var arr=[1,2,3];

// var a=[...arr,4,5]; //  ... denotes spread operator
// console.log(a);



// var arr=[1,2,3];

// var a=[...arr]; //  this array is exactly the copy of arr.
// //arr.push(4);
// a.push(4);
// console.log(arr);
// console.log(a);



// var arr1=[1,2,3];
// var arr2=[4,5,6];

// var arr3=[...arr1,...arr2];
// console.log(arr3);


// var myObj1={
//     x:1,
//     y:2
// };
// var myObj2={
//     a:3,
//     b:4
// };

// console.log({
//     ...myObj1,
//     ...myObj2
// }
// );


// var arr=[1,2,3,4];
// function calculate(a,b,c,d){
//     console.log(`sum : ${a+b+c+d}`);
// }

// result=calculate(...arr);
// result=calculate(2,3,4,);





// >>>>>>>>> rest operator  <<<<<<<<<

// function myFunc(...params){
//     console.log(...params)

// }
// myFunc(2,3,4,5,6,7);


// function myFunc(a,...params){
//     console.log(a);
//     console.log(...params)

// }
// myFunc(2,3,4,5,6,7);


// function JaninaKotogulaParameterHobe(...anyname){
//     for(var i=0; i<anyname.length; i++){
//         console.log(anyname[i]);
//     }
// }

// JaninaKotogulaParameterHobe("hassan","tuhin","byt","noapara","raozan","ctg");



// //let sum=0;
// function Janina(...anynum){
//     for(var i=0; i<anynum.length; i++){
//         var sum=0;
//         sum=sum+anynum[i];  
//     }
//     console.log(sum);
// }
// Janina(1,2,3,4,5,6,7,8,9,10);



// const user={
//     name:"sakib",
//     age:34,
//     vill:"Noapara"
// }
// // var a=user.name;
// //console.log(a);

// // var b=user["age"];
// // console.log(b);

// // const {name} = user;
// // console.log(name);

// const {name:title} = user;
// console.log(title);




// const user={
//     name:"sakib",
//     age:34,
//     vill:"Noapara",
//     education:{
//         degree:"B.SC",
//         inst:"IIUC"
//     }
// }

// // const {education} = user;
// // console.log(education);


// // const {education : {inst:institution}} = user;
// // console.log(institution);





// const user={
//     name:"sakib",
//     age:34,
//     vill:"Noapara",
//     education:{
//         degree:{
//             dname:"B.SC",
//             year:2021
//         },
//         inst:"IIUC"
//     }
// }

// const {education : {degree : {dname:degree_name}}} = user;
// console.log(degree_name);



  //destructing in array

//   var arr=[1,2,3,4,5,6,7];
//   var[a,b] =arr;

//   console.log(a,b);



//   var arr=[1,2,3,4,5,6,7];
//   // if we want to access 3,5 then:
//   //protom ti baad, 2nd ti baad, 3rd ti a te, 4th baad, 5th b te
//   var[ , ,a, ,b] =arr; 

//   console.log(a,b);



//   var arr=[1,2,3,[4,44,444],5,6,7];
//  // if we want to access 44,444 then:
//   var[ , , ,[ , a,b] ] =arr; 

//   console.log(a,b);



//   var arr=[1,2,3,[4,44,444],5,6,7];
//  // if we want to access 3,44,444,6 then:
//   var[ , , a,[ , b,c], ,d ] =arr; 

//   console.log(a,b,c,d);


// //swapping
// var a = 1;
// var b = 2;

// var temp =a;
// a=b;
// b=temp;

// console.log(a,b);


// // new way
// var a = 1;
// var b = 2;

// [a,b] =[b,a];
// console.log(a,b);