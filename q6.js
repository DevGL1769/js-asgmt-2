const stringArr = ['apple', 'ball', 'cat'];

const capString = function(strArr) {
    return strArr.map(str => str.charAt(0).toUpperCase() + str.slice(1));
}

console.log(capString(stringArr));