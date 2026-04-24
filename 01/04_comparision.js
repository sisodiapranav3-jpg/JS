// always use same data types in comparison to reducce complexity 
//  because it can give nan or null so compare same data type
console.log(2 > 1);
// console.log("2" > 1); in this twe are comapairing differant data type

console.log(null > 1);
console.log(null == 0);
console.log(null >= 0);

/*
here this null gives that null is greater then 0 but its not true.
- because the reason is that == and comparision <> >= <= operators works differently.
- comparision convert null to a number, treating it as 0
- that's why null >= 0 is true.
*/

console.log(undefined > 1);
console.log(undefined >= 0 );
// this two will always gives false

// === this is strict check 
console.log ("2" === 2);
