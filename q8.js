const nums = [1, -3, -5, 6, 2, 4, 8];

const sortArrDesc = function(numsArr){
    return numsArr.sort((a, b) => b - a);
}

console.log(sortArrDesc(nums));