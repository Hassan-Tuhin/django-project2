/*
function Person(name,age){
    let person={};

    person.name=name;
    person.age=age;

    person.eat=function(){
        console.log(person.name, "is eating");
    }
    person.sleep=function(){
        console.log("Person is sleeping");
    }
    return person;
}

p1=Person("Hassan",23); 
console.log(p1.eat());

*/

/*
    //updating the code


const personMethods={
    eat(){
        console.log("is eating");
    },
    sleep(){
        console.log("Person is sleeping");
    },
    play(){
        console.log("Person is playing");
    },
}
function Person(name,age){
    let person=Object.create(personMethods);
    
    person.name=name;
    person.age=age;

    return person;
    }
    
p1=Person("Hassan",23); 
p1.sleep();

*/

// function test() {};
// console.dir(test);


/*

// >>>>>>>>>>>>>>>>>>>> use of prototype: <<<<<<<<<<<<<<<<<<<<<


function Person(name, age) {
    let person = Object.create(Person.prototype);

    person.name = name;
    person.age = age;

    return person;
}


Person.prototype = {
    eat() {
        console.log("is eating");
    },
    sleep() {
        console.log("Person is sleeping");
    },
    play() {
        console.log("Person is playing");
    },
}


p1 = Person("Hassan", 23);
p1.sleep();

*/
