const nums = [1, -3, -5, 6, 2, 4, 8];

const firstNegative = function(numsArr){
    return numsArr.find(n=>n<0);
}

console.log(firstNegative(nums));