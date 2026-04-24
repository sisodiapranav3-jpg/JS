let score = "33ab"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score) // this will convert this string stored inside the score into number.
console.log(typeof valueInNumber);
console.log(valueInNumber) // this gives what's inside this => which is NAN(not a number).
/*
let Score = null

is we cahnge this to Number then the value inside the valueInNumber is => 0 
this is what make a problem with null if this is temperature then it creates a problem.

let score = undifined --> gives NAN.
 
NOTES => conversion of "33" is 33 but for "33aa" it is mixed with number and string then it gives NAN but its type is number.
         - true -->1; false-->0;
*/
let isLoggedIn = 1 ;

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0=> false
// ""=> false
// "pranav" => true

let someNumber = 33

let stringNumber = String(someNumber);
console.log(stringNumber) //this gives the value of variable.
console.log(typeof stringNumber) // this gives string as a type

// **************************** Operations **************************************

let value = 3
let negValue = -value
console.log(negValue);

console.log(2+2);

let str1 = "hello"
let str2 ="world"

let str3 = str1 + str2 // only addition is allowed
console.log(str3)

console.log("1"+ 2) // this you can see in documentation. 
// if string is first then all are treated as string.
// if first is number then when string comes then it is treated as string.
// code must be clean not confusing.

console.log(+true);// this gives as  but don't write like this.

let num1, num2, num3

num1 = num2 =num3 = 2 + 2// this is not good 