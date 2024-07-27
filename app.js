// alert("Hellow World")

// Adding console Statements (or) loggs in in console
// console.log("hello world");
// printing error in console
// console.error("I am an error");
// printing warning in console
// console.warn("I am a warning");


// Declaring Variables
// var, let, const

/*for(var i=1; i<=10; i++){
    console.log(i);
}
console.log(i);
*/

/*
for(let i=1; i<=10; i++){
    // console.log(i);
}
console.log(i);
*/

/*
const thisIsConstant=10;
// const thisIsConstant=11;
console.log(thisIsConstant);
*/

// Datatypes in JavaScript
// string, number, boolean, null, undefined, symbol, bigint
/*
const studentName='Chakri';
const studentRollnum=31;
const isPresent=true;
const fee=null;
const age=undefined;

console.log(typeof age);
*/

// Strings
/*
const greetings="Hello World is my first program";
console.log(greetings.toUpperCase());
console.log(greetings.toLowerCase());
console.log(greetings.length);
console.log(greetings.substring(0,5));
console.log(greetings.substring(0,5).toLowerCase());
const substr=greetings.substring(0,5);
console.log(substr.toUpperCase());
console.log(greetings.split(" "));
console.log(greetings.split(" ").length);
*/

// Arrays
/*
const rollNum=[10, 11, 12, 13, 14, 21, 22, 23, 23, 24];
console.log(rollNum);

rollNum.push(13);
console.log(rollNum);
// rollNum=[122,132];  can not change the existing array

rollNum.pop(13);
console.log(rollNum);

rollNum[8]=0.1;
console.log(rollNum);


console.log(rollNum.slice(0,5));

rollNum.unshift(100);
console.log(rollNum);

console.log(rollNum.sort());
// while sorting u can see the output its wrong. So below one correct. We can explore more in upcoming Programs.
console.log(rollNum.sort( (a,b)=>a-b));
*/

// Objects
/*
const student = {
  name: "Chakri",
  age: 24,
  isPresent: true,
  fees: undefined,
  dateWhenAbsent: [2, 5, 14, 23, 30],
  address: {
    Street: "2nd Street",
    Pincode: "543454",
    city: "abc",
  },
}; */
/*
console.log(student);
console.log(Object.entries(student));
console.log(Object.keys(student));
console.log(Object.values(student));
console.log(student.isPresent);
console.log(student.address);
console.log(student["isPresent"]);
console.log(student.fees);
delete student.fees;
console.log(Object.values(student));
console.log("Chakri was Absent on: "+ student.dateWhenAbsent);

const students = [
  student,
  {
    name: "Harry",
    age: 21,
    fees: undefined,
    datesWhenAbsent: [5, 9],
    address: {
      street: "22nd  street",
      pincode: "324445",
      city: "xyz",
    },
  },
];
*/
// console.log(students);
// console.log("Students " + JSON.stringify(students));


// String Concatenation
// By using Addition(+) operator we can concatenate two strings.
// console.log("My name is "+student.name);
// There's one more way to concatenate two different strings in JavaScript, and that is with the help of template literals ( ${} ). This template literals are only available after ES6 or Ecmascript 2015. And the way to use this template literals is with the help of Backticks (``). So we are going to start a backtick here.
// console.log(`My name is ${student.name} and my age is ${student.age}`);


// Functions in JavaScript
// There are three different ways in javascript to define a function.
/*
function greet(){
    console.log("Hello World");
}
greet();
*/

/* // functions assigned to variable
const greet=function(){
    console.log("Hello World");
}
greet();
*/

/* //  Arrow functions
const greet=()=>{
    console.log("Hello World 3");
}
greet();
*/

/*
const students = [];
// defining a function with parameters
const addStudent = (stuName, stuAge, stuDatesWhenAbsent, stuAddress) => {
  const student = {
    name: stuName,
    age: stuAge,
    datesWhenAbsent: stuDatesWhenAbsent,
    address: stuAddress,
  };
  students.push(student);
};
// calling a function
addStudent("John", 23, [5, 9], {
  street: "22nd Street",
  pincode: "234567",
  city: "NY",
});

addStudent("Harry", 21, [15, 19], {
  street: "21st Street",
  pincode: "256567",
  city: "SF",
});

console.log(`Total students: ${students.length}`);
console.log(JSON.stringify(students));


const sum = (a, b) => a + b;
console.log(sum(4, 5));
console.log(sum(4, 51));
console.log(sum(14, 5));
console.log(sum(4, 15)); 
*/


///////////////////// Operators in JavaScript//////

//////// assignment op
/* let x = 9;
x = 19;
console.log(x); */

////////// addition op
/* const x = 9;
const y = 19;
let z = x + y;
console.log(z); */

////////// subtraction op
/* const x = 9;
const y = 19;
let z = x - y;
console.log(z); */

/////////// multiplication op
/* const x = 9;
const y = 19;
let z = x * y;
console.log(z); */

////////////// division op
/* const x = 9;
const y = 19;
let z = x / y;
console.log(z); */


///////////// compound op 
// let x=9;
// x+=8; // x=x+8;
// console.log(x);

// let x=9;
// x-=8; // x=x-8;
// console.log(x);

// let x=9;
// x*=8; // x=x*8;
// console.log(x);

// let x = 9;
// x /= 8; // this is same as x=x/8;
// console.log(x); 

///////////// operator with different datatype
// const x = 9;
// const y = "John";
// let z = x / y;
// console.log(z); // Output: NaN it means Not an Number


//////////////// comparision operator
/*const x = 9;
const y = 10;
// equals op (here equals operator doesnot check datatypes)
console.log(x == y);
// strict equals op, Strict operator checks datatypes also
console.log(x === y);
// not equals
console.log(x != y);
// strict not equals
console.log(x !== y);

// greater than
console.log(x > y);

// less than
console.log(x < y);

// greater than and equals to
console.log(x >= y);

// less than and equals to
console.log(x <= y); 
*/

///////////////// Artihmetic op
/* let x = 9;
let y = 10; 

// remainder op %
// console.log(x % y);

// increment op ++
console.log(x);
console.log(++x);
console.log(++y); 

// decrement op --
 console.log(x--);
console.log(--y); 
*/



///////////////// conditional statement//

// if-else statement
/*
const x=91;
const y=91;

if (x > y){
  console.log("x is bigger")
}else if (x < y){
  console.log("y is bigger")
}else{
  console.log(" y is equals to x");
} */


  // const doIHaveBreathingProblem = false;
  // const haveILostSmell = true;
  // const haveILostTaste = false; 

// if all are true = Positive, else Negative 
/*
if(doIHaveBreathingProblem===true){
  if(haveILostSmell===true){
    if(haveILostTaste===true){
      console.log("Positive");
    }else{
      console.log("Negative");
    }
  }else{
    console.log("Negative");
  }
}else{
  console.log("Negative");
}

// Above code is very big, so lets decrease it.
// if all 3 are true > positive, else negative
if(doIHaveBreathingProblem && haveILostSmell && haveILostTaste){
  console.log("Positive");
}else{
  console.log("Negative");
}

// i am positive if
// I have breathing problem
// OR if i have lost smell and taste
if(doIHaveBreathingProblem || (haveILostSmell && haveILostTaste)){
  console.log("Positive");
}else{
  console.log("Negative");
}*/


/////////////////////// Ternary operator /////////////
/*const x = 11;
const y = 12;

// nested ternary operator ->  condition ? exprIfTrue : exprIfFalse
x==y? console.log("True") : console.log("False");
x > y ? console.log("X is bigger") : x < y ? console.log("Y is bigger") : console.log("both are equal"); 
*/



////////////////////// switch case statement //////////////////////
// const dayOfWeek=7;

/*switch(dayOfWeek){
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
    case 3:
      console.log("Wednesday");
      break;
      case 4:
    console.log("Thursday");
    break;
    case 5:
    console.log("Friday");
    break;
    case 6:
    console.log("Saturday");
    break;
    case 7:
    console.log("Sunday");
    break;
    default:
      console.log("Invalid");
    break;
}

switch(dayOfWeek){
  case 1:
    console.log("Workday");
    break;
  case 2:
    console.log("Workday");
    break;
    case 3:
      console.log("Workday");
      break;
      case 4:
    console.log("Workday");
    break;
    case 5:
    console.log("Workday");
    break;
    case 6:
    console.log("Weekend Enjoy Pandagoo");
    break;
    case 7:
    console.log("Weekend Enjoy Pandagoo");
    break;
    default:
      console.log("Invalid");
    break;
}
// Above code is big and not readable , so we can write more effencitly

switch(dayOfWeek){
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("Workday");
    break;
  case 6:
  case 7:
    console.log("Weekend Enjoy Pandagoo");
    break;
  default:
    console.log("Invalid");
    break;
}
// Now code is easy to read and compact */


/////////////// Loops in JavaScript //////////
/*for(let x=0; x<10; x++ ){
  console.log(x);
}*/

/*  let x=0;
while(x<10){
  console.log(x);
  x++;
}   */

/*  let x=0;
do{
  console.log(x);
  x++;
} while(x<10);    */

// iterating over an array
//  const student = ["John", "Harry", "Ron", "Aragorn", "Gimli"];
/*for(let x=0; x<student.length; x++){
  console.log(student[x]);
}*/

/* for(let x=0; x<student.length; x++){
  if(x===1) continue;   // when x=1 loop will continue without excuting the next line i.e x value will increase to 2 
  console.log(student[x]);
  if(x===3) break;   // loop breaks at 3rd index array won't execute any further.
} */

///////////////////// for of loop - mainly used to iterate over arrays
  // const students = ["John", "Harry", "Ron", "Aragorn", "Gimli"];
/*  for(let student of students){
    console.log(student);
  } */

/*    const students = [
  {
    name: "Chakri",
    age: 24,
    isPresent: true
  },
  {
    name: "John",
    age: 224,
    isPresent: true
  },
  {
    name: "Harry",
    age: 214,
    isPresent: false
  },
  {
    name: "Ron",
    age: 11,
    isPresent: true
  },
  {
    name: "Aragorn",
    age: 114,
    isPresent: true
  },
  {
    name: "Gimli",
    age: 44,
    isPresent: false
  }
]
// for of loop //
for(let student of students){
  console.log(student);
  console.log(student.age);
  console.log(student.name);
}   */



///// for in loop////////
/*  const student = {
  name: "Harry",
  age: 21,
  fees: undefined,
  datesWhenAbsent: [5, 9],
  address: {
    street: "22nd  street",
    pincode: "324445",
    city: "xyz",
  },
}; */

// for in loop- mainly used to iterate over an object
/*  for (let prop in student) {
  console.log(`${prop} : ${student[prop]}`);
} */

/////////// forEach function 
/*  const students = [
  {
    name: "Chakri",
    age: 24,
    isPresent: true
  },
  {
    name: "John",
    age: 224,
    isPresent: true
  },
  {
    name: "Harry",
    age: 214,
    isPresent: false
  },
  {
    name: "Ron",
    age: 11,
    isPresent: true
  },
  {
    name: "Aragorn",
    age: 114,
    isPresent: true
  },
  {
    name: "Gimli",
    age: 44,
    isPresent: false
  }
]
// Here we are trying to do something for each element of this students array. And this forEach method accepts a callback function. So it will be like this. And this callback function has the array element as the first parameter. So the values in this array will be the first parameter of this callback function. So let's call it element or let's call it student.
students.forEach(function (student) {
  console.log(student.name);
  // break;       // in 'forEach' method we can't use break as we use in other loops.
});    */


