// Use the BMI example from Challenge #1, and the code you already wrote, and 
// improve it.
// Your tasks:
// 1.  Print a nice output to the console, saying who has the higher BMI. The message 
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2.  Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement 

var mark_mass1 = 78
var mark_height1 = 1.69

var john_mass1 = 92
var john_height1 = 1.95

var mark_height2 = 1.88
var mark_mass2 = 95

var john_mass2 = 85
var john_height2 = 1.76


function BMI(mass, height) {
    return mass / height ** 2
}

var BMI_mark1 = BMI(mark_mass1, mark_height1)
var BMI_john1 = BMI(john_mass1, john_height1)

var BMIHigher = BMI_mark1 > BMI_john1
if (BMIHigher) {
    console.log(`Mark's BMI (${BMI_mark1.toFixed(2)}) is higher than John's (${BMI_john1.toFixed(2)})!`)
} else {
    console.log(`John's BMI (${BMI_john1.toFixed(2)}) is higher than Mark's (${BMI_mark1.toFixed(2)})!`)
}

var BMI_mark2 = BMI(mark_mass2, mark_height2)
var BMI_john2 = BMI(john_mass2, john_height2)
var BMIHigher = BMI_mark2 > BMI_john2
if (BMIHigher) {
    console.log(`Mark's BMI (${BMI_mark2.toFixed(2)}) is higher than John's (${BMI_john2.toFixed(2)})!`)
} else {
    console.log(`John's BMI (${BMI_john2.toFixed(2)}) is higher than Mark's (${BMI_mark2.toFixed(2)})!`)
}