//* Function overloading

//overloads give us type-checked calls

//its customary to order overloads from most specific to least specific
//? Overload Signature
function add(arg1: string, arg2: string): string //option 1
//* function signature
function add(arg1: number, arg2: number): number //option 2
//* function signature
function add(arg1: boolean, arg2: boolean): boolean //option 3
//* function signature

//this is not part of the overload list,
//so it has only three overloads

//? Implementation signature
function add (arg1: any, arg2: any): any {
  return arg1 + arg2
}

//Calling 'add' with any other parameter types would cause an error except for the three options
console.log(add(1, 2))
console.log(add('Hello', 'World'))
console.log(add(true, false))

//* example 02
function makeDate(timestamp: number): Date
function makeDate(m: number, d: number, y: number): Date
function makeDate (mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d)
  } else {
    return new Date(mOrTimestamp)
  }
}
const d1 = makeDate(12345678) //ok
const d2 = makeDate(5, 5, 5) //ok
// const d3 = makeDate(1, 3)  //error

//* example 03
function len(s: string): number
function len(arr: any[]): number
function len (x: any) {
  return x.length
}
let r1 = len('Bilal')
console.log(r1) //ok

let r2 = len(['a', 'b', 'd'])
console.log(r2) //ok
