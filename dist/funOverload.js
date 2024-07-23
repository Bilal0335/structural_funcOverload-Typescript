//* Function overloading
//* function signature
//this is not part of the overload list,
//so it has only three overloads
//? Implementation signature
function add(arg1, arg2) {
    return arg1 + arg2;
}
//Calling 'add' with any other parameter types would cause an error except for the three options
console.log(add(1, 2));
console.log(add('Hello', 'World'));
console.log(add(true, false));
function makeDate(mOrTimestamp, d, y) {
    if (d !== undefined && y !== undefined) {
        return new Date(y, mOrTimestamp, d);
    }
    else {
        return new Date(mOrTimestamp);
    }
}
const d1 = makeDate(12345678); //ok
const d2 = makeDate(5, 5, 5); //ok
function len(x) {
    return x.length;
}
let r1 = len('Bilal');
console.log(r1); //ok
let r2 = len(['a', 'b', 'd']);
console.log(r2); //ok
export {};
