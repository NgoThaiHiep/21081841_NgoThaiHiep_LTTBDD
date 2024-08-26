var numbers = [45, 4, 9, 16, 25];

Array.prototype.myEvery = function(callback) {
    for (var i = 0; i < this.length; i++) {
        if (!callback(this[i])) {
            return false;
        }
    }
    return true;
}

var every = numbers.myEvery((num) => {
    return num > 18;
});

console.log(every);