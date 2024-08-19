var calcTip = bill => {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15;
    } else {
        return bill * 0.2;
    }
}

console.log(`Tip for a bill of 100 is: (${calcTip(100).toFixed(2)})`)

var bills = [125, 555, 44]

var tips = bills.map(calcTip)

var total = bills.map((bill, index) => bill + tips[index]);
console.log("Bills: ", bills);
console.log("Tips: ", tips);
console.log("Total: ", total)