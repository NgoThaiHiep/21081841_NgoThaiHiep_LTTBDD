var numbers = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

Array.prototype.myMap = function(callback) {
    var newArray = [];
    for (var i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            newArray.push(this[i]);
        }
    }
    return newArray;
}

var map = numbers.myMap((num) => {
    return num > 100;
});

console.log(map);