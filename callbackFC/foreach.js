var numbers = [4, 5, 9, 20, 25];

Array.prototype.myForEach = function(callback) {
    for (var i = 0; i < this.length; i++) {
        callback(this[i]);
    }
}

numbers.myForEach((num) => {
    console.log(num);
});