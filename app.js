// alert("Hellow World")

/*Adding console Statements (or) loggs in in console
// console.log("hello world");
// printing error in console
// console.error("I am an error");
// printing warning in console
// console.warn("I am a warning");
*/

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


///////// Operators in JavaScript//////

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



