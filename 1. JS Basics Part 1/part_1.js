// Exercise One

let myName = "delo";
let myAge = 37;
let isStudent = false;

console.log("myName: " + myName);
console.log("my age: " + myAge);
console.log("i am sudent: " + isStudent);


// Exercise Two

let favorite_foods = ["rice", "meat", "soup"];
let person = {name: "delo", age: "20", hobbies: ["football", "volleyball", "swimming"] };

console.log("favorite foods: "+ favorite_foods);
console.log(person);

// Exercise Three

function checkAge(age){
    if (age >= 18){
        console.log("you are Adult")
    }else {
        console.log("you are Minor")
    }
}
checkAge(44)


// Exercise four

let i = 0;
while (i < 11){
    console.log(i);
    ++i;
}


let y = 10;
while (y > 0 ){
    console.log(y);
    --y;
}


// Exercise Five

//adding function
function add(num1, num2){
    let result = num1 + num2;
    return result;
}

console.log(add(4, 6));


// greeting function
function greet(name){
    let greeting = "hello "+ name;
    return greeting;
}
console.log(greet("delo"));


// Exercise six

function createPerson(name, age, hobbies){
    return {
        "name " : name,
        "age " : age,
        "hobbies ": hobbies
    };
}
console.log(createPerson("delo", 30, ["cycling", "cooking"]));


function describPerson(person){
    let descrition = (" my name is: "+ person.name + " my age is: " + person.age + " my hobbies are: " + person.hobbies);
    return descrition;
}
console.log(describPerson({"name":"delo", "age":"44", "hobbies":["reading","fitness"]}));