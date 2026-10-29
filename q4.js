const nums = [1, 2, 3, 4, 5];

const sumAll = function(numsArr) {
    return numsArr.reduce((accumulator, n) => accumulator + n, 0)
}

console.log(sumAll(nums));