//Practice one
function firstElements(arr, n){
    let x = n;
    if (x == n){
        return arr.slice(0, x);
    }
}
console.log(firstElements([1, 2, 3, 4], 3));

//Practice two
// maybe use 2 time looping .. 
function findDouble(arr) {
    let x = [];
    let z = [];
    
    for (let y of arr) {
        if (!x.includes(y)) {
            x.push(y);
        } else {
            z.push(y);
        }
    }
    
    return z;
}

console.log(findDouble([1, 2, 3, 3, 4, "a", "a"]));

//Practice Three
function productOfArray(arr){
    let value = 1;
    for (let num of arr){
        if (typeof num == "number"){
            value *= num;
        } else{
            return -1;
    }

    }
    return value;
};

console.log(productOfArray([1, 3, 65]));

//practice four 
function removeNonIntegers(array) {
    let x = [];
    for (let i of array){
        if (typeof i === "number"){
            x.push(i);
        }
    
      }
    return(x);
    }

console.log(removeNonIntegers([2, 1, "j",3, 10,4, "h"]));


//practice five 
function insert(str1, str2, possition){
    let x = str1.slice(0, possition);
    let y = str1.slice(possition);
    return (x +" "+ str2 + y)
}
console.log(insert('We are doing some exercises.','JavaScript ', 10))