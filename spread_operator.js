
//spread operator

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


var myObj1={
    x:1,
    y:2
};
var myObj2={
    a:3,
    b:4
};

console.log({
    ...myObj1,
    ...myObj2
}
);