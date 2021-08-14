// var name=Symbol("afa");

// console.log(name);

// var title="ajal";
// console.log(title);



// var name="Tuhin";

// var obj={
//     [name]:"Hassan",
// }

// console.log(obj);


// var name1=Symbol("name1");
// var name2=Symbol("name1");

// console.log(name1==name2);

// var name1=Symbol.for("name1");
// var name2=Symbol.for("name1");

// console.log(name1==name2);



// var a=Symbol.for("This is my name");

// var obj1={
//     [a]:"fs",
//     age:23
// }

// console.log(obj1);


// var naam=Symbol.for("eta amar naam");

// var obj={
//     [naam]:"Golam Hasan",
//     age:23
// }

// console.log(obj);




//  creating symbol object but they wont visible;

var obj={};

obj.name="Hassan";
obj.age=23;

obj[Symbol("bari:")]="Noapara";


/* ekhane object e for loop execute kore jokhon amra keys gula dkhbo tkhn only
name r age dekhabo but "bari" oita o ekta ke kintu oita hidden tkbe */


// for(let key in obj){
//     console.log(key);
// }

// console.log(Object.keys(obj))

// console.log(obj)



// var arr=[1,2,3];
// console.log(arr.includes(2));
// console.log(arr["includes"](2));

// var obj={};
// obj.name="Hassan";
// obj["age"]=23;

// console.log(obj);


var includes = Symbol("This is a simple symbol"); //ekhane includes ta ekta Symbol

 /* ekhne amra same includes ta ekta array er proto te dukie ekta func banacci. but same name
 holeo ei inckudes r uporer includes alada hbe. niche console e dkhano hoyeche */

Array.prototype[includes] = () =>{ 
    console.log("This is a array includes func");
}

var arr=[1,2,3];

console.log(includes);

arr[includes]();



var s="javascript";
console.log(s.search("ript"));