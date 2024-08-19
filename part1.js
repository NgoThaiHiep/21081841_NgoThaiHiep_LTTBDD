// Mark and John are trying to compare their BMI (Body Mass Index), which is 
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
// and height in meter).

var mark_mass1 = 78
var mark_height1 = 1.69

var john_mass1 = 92
var john_height1 = 1.95

var mark_height2 = 1.88
var mark_mass2 = 95

var john_mass2 = 85
var john_height2 = 1.76


var BMI_mark1 = mark_mass1 / mark_height1 ** 2

var BMI_john1 = john_mass1 / john_height1 ** 2

console.log('BMI of Mark:', BMI_mark1)
console.log('BMI of John:', BMI_john1)


var BMI_mark2 = mark_mass2 / (mark_height2 * mark_height2)

var BMI_john2 = john_mass2 / (john_height2 * john_height2)

console.log('BMI of Mark:', BMI_mark2)
console.log('BMI of John:', BMI_john2)

var markHigherBMI_1 = BMI_mark1 > BMI_john1
console.log('Is Mark\'s BMI higher than John\'s?', markHigherBMI_1)

var markHigherBMI_2 = BMI_mark2 > BMI_john2
console.log('Is Mark\'s BMI higher than John\'s?', markHigherBMI_2)