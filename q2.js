const nums = [1, 3, 5, 6, 2, 4, 8];

const evenFilter = function(numsArr) {
    return numsArr.filter(n => n%2 === 0);
}

console.log(evenFilter(nums));