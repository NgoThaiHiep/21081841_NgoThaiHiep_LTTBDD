var numbers = [4, 5, 9, 20, 25];

Array.prototype.myFind = function(callback) {
    for (var i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            return this[i];
        }
    }
}

var find = numbers.myFind((num) => {
    return num > 18;
});

console.log(find);