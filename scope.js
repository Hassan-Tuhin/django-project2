
// //The full area is under a functon and we can call it as parent
// var x=12;

// function neww(){   //we can call it child..
//     var x=10;
//     console.log("x= ",x,"from function");
// }
// neww();

// console.log("x= ",x,"from parent/global"); 




// function neww(){ 
//     x=10;
//     console.log("x= ",x,"from function");
// }
// neww();

// console.log("x= ",window.x,"from parent/global"); //see it in the browser console



// "use strict"; //by using it the error will be alert

// function neww(){ 
//     x=10;
//     console.log("x= ",x,"from function");
// }
// neww();

// console.log("x= ",window.x,"from parent/global"); //see it in the browser console





// "use strict";
// function neww(){ 
//     var x=10;
//     console.log("x= ",x,"from function");
// }
// neww();

// console.log("x= ",window.x,"from parent/global"); //see it in the browser console



// function objectfunc(){
//     var localobj={
//         name:"Hasan",
//         age:23
//     }
//     //localobj.name="Tuhin"; it changes the obj name from Hasan to Tuhin
//     console.log(localobj.name);
// }
// objectfunc();



// Difference between var/let and const



// if(true){
//     var VarVariable="This is var";
//     console.log(VarVariable); //var variable can be accessed form anywhere
// }
// console.log(VarVariable);

// if(true){
//     let letvariable="This is let";
//     console.log(letvariable);  //let variable can't be accessed outside of this block.
// }
// //console.log(letvariable);




// if(true){
//     var VarVariable="This is var";
//     //console.log(VarVariable); 
// }
// //console.log(VarVariable);

// if(true){
//     let letvariable={
//         namer:"HAssan",
//         age:23
//     }
//     console.log(letvariable);
// }
// console.log(letvariable.age);




// if(true){
//     var VarVariable="This is var";
//     var VarVariable="This is var again"; //this will overwrite prev varvariable
//     console.log(VarVariable); 
// }

// if(true){
//     let letvariable="This is let";
//     let letvariable="this is let again"; //but this won't overwrite. error occured!!
//     console.log(letvariable);
// }



// if(true){
//     let letvariable="This is let";
//     letvariable="this is let again"; //now this will overwrite.
//     console.log(letvariable);
// }



// if(true){
//     const constvariable="This is const";
//     console.log(constvariable);
// }



// if(true){
//     const constvariable="This is const";
//     constvariable="this is let again"; //this won't overwrite. error occured11
//     console.log(constvariable);
// }




// if(true){
//     const constvariable={
//         name:"Tuhin",
//         age:23
//     };
//     console.log(constvariable);
// }


// if(true){
//     const constvariable={
//         name:"Tuhin",
//         age:23
//     };
//    constvariable.name="Hassan";  //we can't change the const var. but we can change its property;
//     console.log(constvariable);
// }


