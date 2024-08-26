var numbers = [4, 5, 9, 20, 25];

Array.prototype.mySome = function(callback) {
    for (var i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            return true;
        }
    }
    return false;
}

var some = numbers.mySome((num) => {
    return num > 18;
});

console.log(some);