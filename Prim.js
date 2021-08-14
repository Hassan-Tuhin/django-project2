 //Primitive


// var a =2;
// var b=a;
// console.log("a= ",a);
// console.log("b=  "+b);

// var a=5;

// console.log("a= ",a);
// console.log("b=  "+b);


//Reference



// var obj1={
//     name:"Tuhin",
//     age:23
// }

// var obj2=obj1;
// console.log(obj1);
// console.log(obj2);

// obj1.name="Hassan";
// console.log(obj1);
// console.log(obj2);





// var obj1={
//     name:"Tuhin",
//     age:23
// }

// var obj2= {...obj1};
// console.log("old :",obj1);
// console.log("old :",obj2);

// obj1.name="Hassan";
// obj1.age=24;

// console.log(obj1);
// console.log(obj2);




// var arr1=[1,2,3,4,5];
// var arr2=arr1;

// console.log("arr1: ",arr1);
// console.log("arr2: ",arr2);

// arr2=[];

// console.log("arr1: ",arr1);
// console.log("arr2: ",arr2);




// var arr1=[1,2,3,4,5];
// var arr2=[...arr1];

// console.log("arr1: ",arr1);
// console.log("arr2: ",arr2);

// arr1.push(6);

// console.log("arr1: ",arr1);
// console.log("arr2: ",arr2);




// var obj1={
//     name:"Tuhin",
//     age:23,
//     inst:["Noapara","Cuet","IIUC"]
// }

// var obj2= {...obj1};
// obj1.inst.push(10);

// console.log(obj1);
// console.log(obj2);




// use of lodash

// var obj1={
//     name:"Sakib",
//     age:34,
//     prof:["player","businessman","alrounder"]
// }



// var obj2= _.cloneDeep(obj1);
// obj1.prof.push("model");

// console.log(obj1);
// console.log(obj2);



// var a ="Tuhin";
// var b = new String("Tuhin");

// console.log(a);
// console.log(b);

// for(i=0;i<b.length;i++){
//     console.log(b[i]);
// }



// var a ="Tuhin";
// var b = new String("Tuhin"); //wrapper type

// console.dir(a);

// console.dir(b.charAt(2)); //we r using it from prototype




// var a ="Tuhin";
// var b = new String("Tuhin"); //wrapper type

// console.dir(a.charAt(2));




//pass by reference/pass by value










//lodash


// // Load the full build.
// var _ = require('lodash');
// // Load the core build.
// var _ = require('lodash/core');
// // Load the FP build for immutable auto-curried iteratee-first data-last methods.
// var fp = require('lodash/fp');
 
// // Load method categories.
// var array = require('lodash/array');
// var object = require('lodash/fp/object');
 
// // Cherry-pick methods for smaller browserify/rollup/webpack bundles.
// var at = require('lodash/at');
// var curryN = require('lodash/fp/curryN');
