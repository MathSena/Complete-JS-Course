/*
Coding Challenge #1

Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.

*/
console.log('Challenge 1');

let MarkHeight = 1.69;
let JohnHeight = 1.95;
let MarkMass = 78;
let JohnMass = 92;

BMIMark = MarkMass/(MarkHeight)**2
BMIJohn = JohnMass/(JohnHeight)**2

let markHigherBMI = (BMIMark>BMIJohn)
console.log(BMIMark, BMIJohn);
console.log('Is Mark"s BMI higher than John"S BMI?  ' + markHigherBMI)


