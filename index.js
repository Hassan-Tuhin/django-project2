            //Modern JavaScript//

// function a(){
//     return 10;
// }

// let a=()=>100;

// let sum=(a,b) =>a+b;
// summation=sum(4,6);

                //implicit binding
/*
var profile={
    name:"Hassan",
    age:20,
    profession:"student",
    home:"Noapara",
    printkey:function(){
        console.log(this.profession);
    }
};

profile.printkey();
*/

/*
var printNameFunction=function(obj){
    obj.printName=function(){
        console.log(this.name);
        console.log(this.name,"is", this.age,"years old");
    }
}

var profile1={
    name:"hasan",
    age:23
};
var profile2={
    name:"tuhin",
    age:24
};

printNameFunction(profile1);
profile1.printName();

printNameFunction(profile2);
profile2.printName();

*/

/*
var person=function(name,age){
    return{
        name:name,
        age:age,
        printNaame: function(){
            console.log("Name: ",this.name);
        }
    }
}

profile1=person('Hasan',23);
profile1.printNaame();

*/

/*
var person=function(name,age){
    return{
        name:name,
        age:age,
        printNaame: function(){
            console.log("Name: ",this.name);
        },
        Father:{
            name:'Mr.x',
            printNaame:function(){
                console.log("Father's name: ",this.name);
            },
        },
    }
}

profile1=person('Hasan',23);
profile2=person('Tuhin',24);

profile2.Father.printNaame();

*/


    // Explicit Binding //


    /*
var printNaame=function(){
    console.log(this.name);
}

profile1={              //profile 1 is a object;
    name:"Hasan",
    age:23,
    prof:"student"
}

printNaame.call(profile1);

*/

/*  //call method

var printNaame=function(v1,v2,v3){
    console.log(this.name,'is a ',v1,v2,v3,'boy');
}

profile1={              
    name:"Hasan",
    age:23,
    prof:"student"
}
var v1='Good';
var v2='Decent';
var v3='helpful';

printNaame.call(profile1,v1,v2,v3);
*/


 /* //apply() method

var printNaame=function(v1,v2,v3){
    console.log(this.name,'is a ',v1,v2,v3,'boy');
}

profile1={              
    name:"Hasan",
    age:23,
    prof:"student"
}
var v1='Good';
var v2='Decent';
var v3='helpful';
var v=[v1,v2,v3];

printNaame.apply(profile1,v);
*/



/*      //call() function---
var printNaame=function(v1,v2,v3){
    console.log(this.name,'is a ',v1,v2,v3,'boy');
}

profile1={              
    name:"Hasan",
    age:23,
    prof:"student"
}
var v1='Good';
var v2='Decent';
var v3='helpful';

 printNaame.call(profile1,v1,v2,v3);

 */

/*
      //---bind() method---


 var printNaame=function(v1,v2,v3){
     //console.log(this);
    console.log(this.name,'is a ',v1,v2,v3,'boy');
}

profile1={              
    name:"Hasan",
    age:23,
    prof:"student"
}
var v1='Good';
var v2='Decent';
var v3='helpful';


var newfunc=printNaame.bind(profile1,v1,v2,v3);
newfunc();

*/



        //----New bind----




//Fat arrow function:

/*

var javascript = {
    name:'javascript',
    dokan:["react","angular","vue"],
    printlibraries:function(){
        //console.log(this);
        this.dokan.forEach((a) => console.log(this.name,"loves",a));
    },

};

javascript.printlibraries();

*/
/*
var profile={
    name:"Tuhin",
    girl:["Anta","Raniqa","Eva"],
    printfunction:function(){
        this.girl.forEach( (a) =>console.log(this.name,"loves",a) );
    }
}

profile.printfunction();

*/

/*
 var myvar="true";  //6 things defines falsy values >> false,0,"",null,undefined,Nan; 

 if(myvar){
     console.log("truthyy");
 }
 else{
     console.log("falsyyy");
 }

 */


        //Ternary operator

/*

var age=16;


var type;
if(age>=18){
    type="adult";
    console.log(type);
}
else{
    type="child";
    console.log(type);
}


// var type= (age >= 18) ? "adult" : "child";
// console.log(type);

// var type=(age >=18) ? "adult" : (age <12) ? "baby" :"child";
// console.log(type);

*/

function test(){}

console.dir(test.prototype);