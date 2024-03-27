// Annotating a variable is ==> assigning a type to a variable.

// Strings
let myName: string = "HuXn WebDev";
myName = "something other person";

console.log(myName);

// Number
let favNumber: number = 7
favNumber += 2;

// favNumber = "eleven"; will throw an error;
console.log(favNumber);

//Boolean
let tsHard: boolean = false;
// tsHard = 12; willl throw an error
console.log(tsHard);


// Type Inference: This will automatically dertermine the type of a variable based on it value.
// Here we're inferring the types!
let tech: any = "TypeScript";

//tech = 12; will throw an error  

let favNum = 8;
let tsHard2 = true
console.log(tech, favNum, tsHard2)

console.log(typeof tech)

// Regular Func
function addOne(num: number) {
    return num + 1
}

const res1 = addOne(3)
console.log(res1)

// Arrow func
const double = (x: number, y: number) => x + y
const res2 = double(2, 10);
console.log(res2)

function greet(preson: string = "Anonymous") {
    console.log(`Hello ${preson}`)
}

const res = greet()

// Return Annotation Value
const double3 = (x: number): number => x * x
const res3 = double3(2)
console.log(res2)

function double1(x: number): number {
    return x * x
}

const res4 = double1(2)
console.log(res)

// Arrow Func
const doubl2 = (x: number): number => x * x
console.log(doubl2(2))

//Void Woyd

function printMessage(message: string): void {
    console.log(`This is the message ${message}`)
    // ERROR
    // return mesage;
}

printMessage("Hello How Are You?");

function PrintVoidMessage(message: string): void {
    console.log(`This is my ${message}`);
    // return message; will throw an error
}

printMessage("message");


//Never: It indicate a variable will never have a value.

//It indicates that certain code path can never be reached
// Or that variable are impossible, Error function, Infinite loop,
// Variable that can never have value.


function throwError(msg: string): string {
    throw new Error(msg);
}


function infiniteLoop(): never {
    while (true) { }
}

let x: never;

function neverReturns(): never {
    while (true) { }
}


// x = neverReturns()
// throwError("Message")

const nums: number[] = [1, 2];
const str: string[] | number[] = ["one", "two", "three"];
console.log(str);

const numList: number[] = [];
numList.push(20);
console.log(numList)

const items: Array<number> = [232];
console.log({ items })

// Multi Dimensional Array

const matrix: number[][] = [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
]

//Object 
type User = {
    name: string, age: number, function: string
}

const user: User = {
    name: "Paul", age: 23, function: "Work for government"
}

console.log(`Name: ${user.name} ${user.age}, Age: ${user.function}`);

function printUser(): { name: string; age: number; location: string } {
    return {
        name: "HuXn",
        age: 20,
        location: "China"
    }
}
 
// type alias ==> type MyString = string;
// It help to name alias or create a custome type.

const res5 = printUser()
console.log(res5)