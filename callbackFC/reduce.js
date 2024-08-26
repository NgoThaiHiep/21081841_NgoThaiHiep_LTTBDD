var numbers = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

Array.prototype.myReduce = function(callback, initialValue) {
    var accumulator = initialValue;
    for (var i = 0; i < this.length; i++) {
        if (accumulator !== undefined) {
            accumulator = callback(accumulator, this[i]);
        } else {
            accumulator = this[i];
        }
    }
    return accumulator;
}

var reduce = numbers.myReduce((acc, num) => {
    return acc + num;
}, 0);

console.log(reduce);