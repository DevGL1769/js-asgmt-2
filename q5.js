const nums = [1, -2, 3, -4, 5];

const allPositive = function(numsArr) {
    return numsArr.every(n => n > 0);
}

console.log(allPositive(nums));