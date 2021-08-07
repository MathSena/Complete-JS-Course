//let js = 'amazing';
//if(js === 'amazing') alert('Javascript s fun!');

console.log(40+30*9-2);

/*Values and Variables*/ 

console.log('Values and Variables')
console.log("Matheus");
console.log(23);

const firstName = "Matheus"
const lastName = "Sena"
let myFirstJob = "Office Boy"
let myCurrentJob = "Programmer"
let pi = 3.14

console.log("My name is: " + firstName + " " + lastName)
console.log("My actually job is: " + myCurrentJob + " and my last job was: " + myFirstJob)
console.log("And the value of pi is: " + pi);


// Let, Var e Const

// Let - > Variables that be changed during the program

console.log('Let, Var e Const')
let age = 30;
console.log('Before: ' + age)
age = 50;
console.log('After: ' + age)

const birthYear = 1996;
console.log('Before: ' + age)
console.log('After: ' + age)

let job = "Programmer";
console.log('Before: ' + job)



console.log('Basic Operations')
const now = 2021;
const ageAmy = now - 1984;
const ageMath = now - 1996;

console.log(ageAmy, ageMath);
console.log("Operations with ageMath: " + ageMath*2, ageMath/10, 2**3);


console.log(firstName + ' ' + lastName)

let x = 10+5
x += 10
x += 4
x++
x--
console.log(x)
console.log(ageMath>ageAmy)


console.log('Basic Operations')
console.log(now - 1991> now-2018);


console.log('String Literals')

stringLiteral = `I'm ${firstName}, i'm ${ageMath} years old and I work as ${myCurrentJob}`;

console.log(stringLiteral);

console.log('If/Else')

const ageStart = 16;


if(ageStart>=18){
    console.log('Sarah can start driving license')
}else{
    const yearsLeft = 18-ageStart;
    console.log(`Sarah is too young. Wait another ${yearsLeft} to start :)`)
}

let century;
if(birthYear<=2000){
    century = 20;
}else{
    century = 21;
}

console.log(century);