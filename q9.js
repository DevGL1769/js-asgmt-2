const nums = [1, -3, -5, 6, 2, 4, 8, 1, 6, 2, 4, 4];

const countFunc = function(numsArr){
    return numsArr.reduce((acc,n) => {
        // acc[n] is undefined for new number
        acc[n] = (acc[n] || 0) + 1;
        return acc;
    },{});
}

console.log(countFunc(nums));