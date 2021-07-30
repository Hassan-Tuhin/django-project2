// for(var i=1; i<=5; i++){
//     console.log(i);
// }
// //console.log(i);  //the loop will run till 6. then th econdition will fail & loop will break. but i already being 6. that's why if we console this line 6 also be print.


// var i=1;
// for( ; ; i++){
//     if(i<=5){
//         console.log(i);
//     }
//     else{
//         break;
//     }

// }
// //console.log(i);



// for(let i=1; i<=5; i++){
//     console.log(i);
// }
// console.log(i);  //this is outside if block.here let variable won't execute. that's why it shown error here.


// let i=1;
// for( ; ; i++){
//     if(i<=5){
//         console.log(i);
//     }
//     else{
//         break;
//     }

// }
// console.log(i);



//    >>>>> for in  <<<<<<<

// const myobj = {
//     name:"Tuhin",
//     born:1997,
//     inst:"IIUC"
// }

// for(property in myobj){   // property is a variable. it can be anything.x,y,z.....
//     console.log(property);
// }


// const myobj = {
//     name:"Tuhin",
//     born:1997,
//     inst:"IIUC"
// }

// for(property in myobj){   // property is a variable. it can be anything.x,y,z.....
//     console.log(myobj[property]);
// }



// const myobj = {
//     name:"Tuhin",
//     born:1997,
//     inst:"IIUC"
// }

// for(property in myobj){
//     console.log(property);
// }


// const myArray=[1,2,3,4,5,6];
// for (element in myArray){
//     console.log(element);  //it will print the index number
// }

// const myArray=[1,2,3,4,5,6];
// for (element of myArray){
//     console.log(element);  //it will print the element
// }


// const myString="Golam Hassan Tohin";
// for (element in myString){
//     console.log(element);  //it will print index number of string
// }


// const myString="Golam Hassan Tohin";
// for (element of myString){
//     console.log(element);
// }


//>>>>>>>>>>>>>>>> break <<<<<<<<<<<<<<<<<<<<

// for (var i=1; i<=5; i++){

//     if(i===3){
//         break;
//     }

//     console.log('The number is',i);

// }



// for (var i=1; i<=5; i++){

//     if(i===3){
//         continue;
//     }

//     console.log('The number is',i);

// }



// for (var i=1; i<=6; i++){

//     if(i===3||i===4){
//         continue;
//     }

//     console.log('The number is',i);

// }


// var cars = ["BMW", "Volvo", "Saab", "Ford"];
// var i;
//  for (i = 0; i < cars.length; i++) {
//      if(cars[i]==="Saab"){
//          continue;
//      }
//     console.log(cars[i]);
//   }



// var day;
// switch (new Date().getDay()) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case  6:
//     day = "Saturday";
//     break;
// }
// console.log("Today is ",day);




// var i, j;

// Loop1: // The first for loop is labeled "Loop1"
// for (i = 0; i < 3; i++) {
// console.log(i);


//   Loop2: // The second for loop is labeled "Loop2"
//   for (j = 10; j < 15; j++) {
//     if (j === 12) {
//       continue Loop2;
//     }
//     console.log(j);
//   }
// }



// var i, j;

// Loop1: // The first for loop is labeled "Loop1"
// for (i = 0; i < 3; i++) {
// console.log(i);


// Loop2: // The second for loop is labeled "Loop2"
//     for (j = 10; j < 15; j++) {
//         if (i === 2) {
//             break Loop2;
//         }
//         if (j === 12) {
//             continue Loop2;
//         }
//         console.log(j);
//     }
// }




// var time=new Date().getHours();

// if (time>10){
//     console.log("good time");

// }
// else{
//     console.log("bad time")
// }


// "use strict";
// const ps=require("prompt-sync");
// const prompt=ps();

// var text;
// var favDrink = prompt("What's your favorite cocktail drink? ");
// switch(favDrink) {
//   case "Martini":
//     text = "Excellent choice! Martini is good for your soul.";
//     break;
//   case "Daiquiri":
//     text = "Daiquiri is my favorite too!";
//     break;
//   case "Cosmopolitan":
//     text = "Really? Are you sure the Cosmopolitan is your favorite?";
//     break;
//   default:
//     text = "I have never heard of that one..";
// }

// console.log(text);



// >>>>>>>>> Try catch <<<<<<<<<

// alert("Hello buddy. this message is from for.js file");
// alert(x);
// alert("bye buddy!!!");

// try{
//   alert("Hello buddy. this message is from for.js file");
//   alert(x);
//   alert("bye");
// }catch(err){
//   // console.log(err);
//   //console.log(err.name);
//   alert("inside catch block");
//   console.log(err.message);

// }



// try{
//   alert("Hello buddy. this message is from for.js file");
//   alert(x);

// }catch(err){
//   alert("inside catch block");
//   console.log(err.message);

// }
// finally{
//   alert("bye!!!");
// }



try{
  alert('welcome');
  var x=2;
  var y=3;
  console.log(`res = ${x+y}`);

}catch(err){
  alert("inside catch block"); //this will shown if any error occured in try block;
  console.log(err);
}

finally{
  alert("bye!!!");
}





