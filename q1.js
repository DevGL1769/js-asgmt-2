const numbersArr = [1, 2, 3, 4, 5];

// Reusable blcok of code that performs certains tasks
const arrayDouble = function(numsArr){
    return numsArr.map(num => num * 2);
}

console.log(arrayDouble(numbersArr));