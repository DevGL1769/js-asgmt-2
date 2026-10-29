const stringArr = ['apple', 'ball', 'cat', 'Dogdog'];

const filString = function(strArr) {
    return strArr.filter(str => str.length > 5);
}

console.log(filString(stringArr));