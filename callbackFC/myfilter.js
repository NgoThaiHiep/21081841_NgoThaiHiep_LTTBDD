var numbers = [45, 4, 9, 16, 25];

Array.prototype.myFilter = function(callback) {
    var newArray = [];
    for (var i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            newArray.push(this[i]);
        }
    }
    return newArray;
}

var filter = numbers.myFilter((num) => {
    return num > 18;
});

console.log(filter); // [45, 25]