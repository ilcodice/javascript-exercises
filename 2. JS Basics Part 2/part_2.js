//Practice one
function firstElements(arr, n){
    let x = n;
    if (x == n){
        return arr.slice(0, x);
    }
}
console.log(firstElements([1, 2, 3, 4], 3));

//Practice two
function mostFrequent(arr){
    let value;
    for(value of arr){
        if value 
    }

}
console.log(mostFrequent([1, 2, "a", "a", 5, 15, true, "a"]))

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
    let value = [];
    for (value of array){
    if (typeof i != "number" && value.isInteger(i)){
            value.push(i);
            return value
        }else{
            return array
        }
    }
}
console.log(removeNonIntegers([1, 2, 3,"a"]))


//practice five 
function insert(str1, str2, possition){
    let x = str1.slice(0, possition);
    let y = str1.slice(possition);
    return (x +" "+ str2 + y)
}
console.log(insert('We are doing some exercises.','JavaScript ', 10))