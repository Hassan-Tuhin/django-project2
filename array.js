// >>>>>>>>>>>>>>>>>>> CONCATINATING ARRAY  <<<<<<<<<<<<<<<


//  const arr1=["Golam","Hassan"];
//  const arr2=["Tohin"];

//  console.log(arr1.concat(arr2));



//  const arr1=["Golam","Hassan"];
//  const arr2=["Tohin"];
//  const arr3=["BYT"];

//  console.log(arr1.concat(arr2,arr3));


// const arr1=[1,2,3,4,5];
// const arr2=[6,7,8,9,10];

// console.log(arr1.concat(arr2));



// const arr1=["Golam","Hassan"];
// console.log(arr1.constructor);



//      >>>>>>>>>>>>>>>>>>  Use of COPYWIHTHIN  <<<<<<<<<<<<<<<<<<


// const arr1=[1,2,3,4,5,6,7,8,9,10];
// console.log(`Before using copyWithin main array:${arr1}`);
// var res=arr1.copyWithin(3,0,3);
        
         /* 3= target. kon jaiga theke copy start hbe.
            0=kon element gula copy hbe ogular starting point
            3=kon element gula copy hbe ogular end point
        */

// //console.log(`After using copyWithin main array: ${arr1}`);
// console.log(`put the changed in res variable: ${res}`);


// const arr1=[1,2,3,4,5,6,7,8,9,10];
// console.log(`Before using copyWithin main array:${arr1}`);
// var res=arr1.copyWithin(4,1,3);

// console.log(`put the changed in res variable: ${res}`);


//  >>>>>>>>>>>>>>  Use of ARRAY.ENTRIES  <<<<<<<<<<<<<<<<<<<<

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const f = fruits.entries();
// console.log(f);




//  >>>>>>>>>>>>>>  Use of ARRAY.EVERY  <<<<<<<<<<<<<<<<<<<<<<<


// const arr=[30,32,35,36];

// var res=arr.every(function(age){
//     age>30;
// });

// console.log(res);


// const arr=[30,32,35,36];

// var res=arr.every((age) => {
//     return age>=30;
// })

// console.log(res);




// >>>>>>>>>>>  fill method <<<<<<<<<<<<<<<

// const arr=["Mango","Banana","Pineapple","Orange","Guava","Jackfruit"];
// const res=arr.fill("Apple");

// console.log(res);



// const arr=["Mango","Banana","Pineapple","Orange","Guava","Jackfruit","Cucumber","Olive"];
// const res=arr.fill("Apple",2,5);  //the element which will set after replacing, starting index, end index

// console.log(res);





// >>>>>>>f ARRAY.FILTER  <<<<<<<<<<<<

// I will do the same thing in 3 different way below:


//:::::1st one


// const arr=[20,23,25,28,29,30,32,12,40,38,42];
// var res=arr.filter(function(ages){
//     return ages >= 28;
// });

// console.log(res);



//:::::: 2nd one:Normal function:::::

// const arr=[20,23,25,28,29,30,32,12,40,38,42];
// var res=arr.filter(checkages);

// function checkages(ages){
//     return ages>=28;
// }

// console.log(res);



//:::::;3rd one:Arrow function::::::::


// const arr = [20, 23, 25, 28, 29, 30, 32, 12, 40, 38, 42];

// checkages= (ages) => {
//     return ages >= 28;
// }
// var res = arr.filter(checkages);

// console.log(res);







// >>>>>>>>>>>> Array.Find <<<<<<<<<<<<<


// >>>>>>This gives the immediate greater value then 4 which is here 8;

// var number = [1, 2, 3, 4, 8, 6];
// var result = number.find(function (currentvalue) {
//     return currentvalue > 4;
// })
// console.log(result);




//   >>>>>>>>>>>> Array.findIndex  <<<<<<<<<

// This gives us the index number of immediate greater then 4. which is 9 here whose index is 2 <<<<<<<<<<<<<<


// var number=[1,2,9,4,6,5,7,8];
// var result=number.findIndex(function(currentvalue,currentindex,arr){
//         return currentvalue > 4 ;
// })
// console.log(result);



// var number=[1,2,3,4,5,6,7,8];
// var result=number.findIndex(function(currentvalue,currentindex,arr){
//         return currentvalue > 14 ;
// })
// console.log(result);




// >>>>>>>>>>>>>>> Array.filter  <<<<<<<<<<<<<<<<




// var number=[1,2,3,6,8,10,9,20];
// var result=number.filter((currentvalue,index,arr) => {     //arrow function
//         return currentvalue > 3 ;
// });
// console.log(result);




// var number=[1,2,3,6,8,10,9,20];
// var result=number.filter(function(currentvalue,index,arr) {
//         console.log(index);
//         console.log(arr);
        
//         return currentvalue > 3 ;
// });
// console.log(number);
// console.log(result);






//  >>>>>>>>>>>> Array.forEach() <<<<<<<<<<<<

// const arr=[1,2,3,4,5,6];
// arr.forEach(myfunc);

// function myfunc(number){
//     console.log(number);
// }




// const arr=[1,2,3,4,5,6];
// var squarearray=[];
// arr.forEach(myfunc);

// function myfunc(number){
//     squarearray.push(number*number);
// }
// console.log(squarearray);




// const arr=[1,2,3,4,5,6];
// arr.forEach(myfunc);

// function myfunc(number,index,arr){
//     arr[index]=number+5;  //adding 5 with all elements of arr
// }
// console.log(arr);

        // or,

// const arr=[1,2,3,4,5,6];
// arr.forEach( myfunc = (number,index,arr) => {
//     arr[index]=number+5;
// });


// console.log(arr);




// >>>>>>>>>> Array.from() <<<<<<<<<<<<<

// const arr=Array.from("HASSAN");
// console.log(arr);


// const arr=("HASSAN");
// var res=Array.from(arr);
// console.log(res);




// >>>>>>>>>>>>>> Array.include()  <<<<<<<<<<

// const arr=["Apple","Banana","Mango","Olive"];
// console.log( arr.includes("Mango"));


// const arr=[1,2,3,4,5,6,7];
// console.log(arr.includes(9));





//  >>>>>>>>>>>>>> Array.indexof <<<<<<<<<

// const arr=["Apple","Banana","Mango","Olive"];
// console.log( arr.indexOf("Olive"));



//  >>>>>>>>>>>>> isArray  <<<<<<<<<<<<<<

// const arr=["Apple","Banana","Mango","Olive"];
// console.log( Array.isArray(arr));


// const arr=["Apple","Banana","Mango","Olive"];
// console.log( Array.isArray("Mango"));



// const arr=["Apple","Banana","Mango","Olive"];
// console.log( arr.join());




// const arr=["Apple","Banana","Mango","Olive","Banana","Cucumber","Jackfruit","Banana"];
// console.log( arr.length);
// console.log(arr.lastIndexOf("Banana"));




//>>>>>> Array mapping > it checks every element of array and do the operations which it instructed :::::: It doesn't change main array


// var arr=[1,2,3,4,5,6,7,8];
// var result=arr.map(function(num){
//         return 2*num;
// });
// console.log(`main array: ${arr}`)
// console.log(result);

        //or,

// var arr=[1,2,3,4,5,6,7,8];
// var result=arr.map((num)=>{
//         return 2*num;
// });
// console.log(`main array: ${arr}`)
// console.log(result);


// var arr=[4,9,25,49,81];
// var result=arr.map(function(num){
//         return Math.sqrt(num);  //it find the root
// });
// console.log(result);




// >>>>>>>>>>>>>>>>>>>>>>> Array.reduce <<<<<<<<<<<<<<<<<



// var arr=[1,2,3,4,5,6,7];
// var sum=arr.reduce((previousValue,currentValue,currentIndex,array) => {
//         return previousValue + currentValue;
// },0);

// console.log(sum);





// const numbers = [175, 50, 25];

// var result=numbers.reduce(function myFunc(total, num) {
//   return total - num;
// });

// console.log(result);



// const numbers=[175,50,25];

// function myfunc(total,num){
//         return total-num;
// }

// result=numbers.reduce(myfunc);
// console.log(result);

         //or, Arrow function

// const numbers=[175,50,25];

// myFunc = (total,num) =>{
//         return total-num;
// };

// result = numbers.reduce(myFunc);
// console.log(result);




// >>>>>>>>>>>>>> array.ReduceRight  :: same as reduce but it start it's operation from right side


// const numbers=[175,50,25];

// myfunc = (total,num) => {
//         return total-num;
// }

// var res=numbers.reduceRight(myfunc);
// console.log(res);




// const fruits=["Mango","Banana","Apple","Jackfruit"];
// fruits.reverse();

// console.log(typeof(fruits.reverse));
// console.log(fruits);





//  >>>>>>>>>>>>>> Push/Unshifit,,, pop/shift  <<<<<<<<<<<<<<



// const arr=["Mango","Banana","Apple","Jackfruit"];
// console.log(`main array: ${arr}`);

// arr.push("Guava");
// console.log(`after pushing: ${arr}`);


// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// console.log(fruits);
// console.log(fruits.length);

// fruits.unshift("Papaya","Potato");
// console.log(fruits);
// console.log(fruits.length);



// const arr=["Apple","Banana","Mango","Olive"];
// console.log(`main array: ${arr}`);

// arr.pop();      //removes last element of array
// console.log(`after popping: ${arr}`);



// const arr=["Apple","Banana","Mango","Olive"];
// console.log("main array:",arr);
// console.log(`main array: ${arr}`);

// arr.shift();      //removes first element of array
// console.log("after shifting: ",arr);
// console.log(`after shifting: ${arr}`);





//      >>>>>>>>> Array slicing <<<<<

// var arr=[1,2,3,4,5,6,7,9,10];

// var result=arr.slice(2,6);

// var result=arr.slice(3,-2);
// console.log(arr);
// console.log(result);





//>>>>>>>> splice==it changes main array <<<<<<<<<<

//var arr=[1,2,3,4,5,6,7,8,9,10];
//var result=arr.splice(3,4,14,15,16,17);  //3=index;4=4 numbers will removed starting from index 3; there will add 14,15,16,17
//var result=arr.splice(-3,3,14,15,16,17);
// console.log(result);

// console.log(arr);



// var arr=[1,2,3,45,5,6,7];

// arr.splice(3,3,1,2,3);
// console.log(arr);

        //or,
// var arr=[1,2,3,45,5,6,7];

// arr.splice(-4,3,1,2,3);
// console.log(arr);





//>>>>>>>>>>>>>>>>>>>>> Array.some  <<<<<<<<<<<<<<<<<<<

// const ages=[18,19,22,25];
// checkages =(ages) => ages>19; //it is an arrow function

// console.log(ages.some(checkages));  //check the operation of the function for each element of the array ages;


// const ages=[18,19,17,16];
// checkages =(ages) => ages>19; 

// console.log(ages.some(checkages));  




// const ages=[23,25,14,12,10,28,30,9,2];
// function compare(num1,num2){
//         return num1-num2;  // see w3 scls example
// }
// var res=(ages.sort(compare));
// console.log(res)

// converting it into arrow function


// const ages=[23,25,14,12,10,28,30,9,2];
// compare= (num1,num2) => num1-num2;

// var res=(ages.sort(compare));
// console.log(res)


// const arr=["Olive","Mango","Apple","Banana"];
// console.log("Before sorting: ",arr);

// var res=arr.sort();
// console.log("after sorting: ",res);




// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits);

// console.log(fruits.toString());



