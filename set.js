// let set = new Set();
// set.add('Tuhin');
// console.log(set);

//const { intersection } = require("underscore");

// let set = new Set();
// set.add('Tuhin');
// console.log(set);
// set.delete('Tuhin');
// console.log("after delete: ",set);



// let set = new Set();
// set.add('Tuhin');
// console.log(set.has('Tuhin'));



// let set = new Set();
// set.add('Tuhin');
// set.delete('Tuhin');
// console.log(set.has('Tuhin'));


function log(anything) { //make this func for printing just calling log
    return console.log(anything);
}

// let set = new Set();
// set.add('Tuhin').add('good boy').add(1997);
// log(set);


// let set = new Set();
// set.add('Tuhin').add('good boy').add(1997).delete('good boy');
// log(set);


// let set = new Set();
// set.add('Tuhin').add('good boy').add(1997).clear();
// log(set);



// let set = new Set();
// set.add('Tuhin').add('good boy').add(1997);
// log(set.size);




//  >>>>>>>>>> set from Array <<<<<<<


// let myArr = [1, 2, 3];

// let set1 = new Set(myArr);
// log(set1);

// let set2 = new Set("TOHIN");
// log(set2);



// let myArr = [1, 2, 3];

// let set1 = new Set(myArr);
// log("Iterate set1");
// for (let value of set1){
//     log(value);
// }

// let set2 = new Set("TOHIN");
// log("Iterate set2");
// for(let value of set2){
//     log(value);
// }



//  >>>>>>>>>> Array from Set <<<<<<<


// let myArr=[1,2,3];
// let set=new Set(myArr);
// log(set);

// // log([...set]); //1st way

// log(Array.from(set)); //2nd way



// let myArr=[1,2,3,4,5,5,6,5,5,6];  //set always shows unique value.don't allow duplicate value
// let set=new Set(myArr);
// log(set);


//making a array unique


// myArr=[1,2,3,4,5,5,6,5,5,6];

// let set=new Set(myArr);
// log([...set]);

// log([...new Set(myArr)]); //converting the upper 2 line in 1 line



 // >>>>>>>>> Union / Intersection / Difference of set <<<<<<<<

// let a=new Set([1,2,3]);
// let b=new Set([4,3,2]);


// let union=new Set([...a,...b]);
// log(union);


// //intersection

// let ins = new Set([...a].filter(x =>b.has(x)));
// log(ins);

// //difference


// let dif = new Set([...a].filter(x => !b.has(x)));
// log(dif);




//>>>>> weakset <<<<<<<<<<<



// const language={
//     name:"javascript",
//     creator:"Brendan Eich",
//     library:{
//         react:{
//             company:"FB"
//         }
//     }
// }

// let company=language.library.react.company;
// log(company);
