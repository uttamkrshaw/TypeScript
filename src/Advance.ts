// Typescript Advanced
// 1. Enums
// Enums are a group of named constant values. 
// Enums are one of the few features TypeScript has which is not a type-level extension of JavaScript.

// Enums allow a developer to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. TypeScript provides both numeric and string-based enums.
// An enum can be defined using the enum keyword.
// Numeric Enums
// enum Direction {
//     Up = 1,
//     Down,
//     Left,
//     Right,
// }

// Up is initialised with 1. 
// All of the following members are auto-incremented from that point on. 
// In other words, Direction.Up has the value 1,  
// Down  has  2, Left has  3, and  Right  has  4.

// You can leave off the initialisers entirely
// enum Direction {
//     Up,
//     Down,
//     Left,
//     Right,
// }

// Up would have the value 0, Down would have 1, etc. 
// This auto-incrementing behavior is useful for cases where 
// we might not care about the member values themselves, 
// but do care that each value is distinct from other values in the same enum.

// Using Enums
// let direction = Direction.Left; 

// String Enums
// In a string enum, each member has to be constant - initialised with a string literal, or with another string enum member.
// enum Direction {
//     Up = "UP",
//     Down = "DOWN",
//     Left = "LEFT",
//     Right = "RIGHT",
// }

// 2. Tuple
// Array with additional conditions. 
// We can use tuple when we know exactly how many elements are there in the array.
// Tuples may be de - structured like arrays; the de - structuring variables get the types of the corresponding tuple elements
let tuple: [number, string, boolean] = [7, "hello", true];

// 3. Generic Functions
// Reusable and generalised function whose type depends on argument type itself.It’s common to write a function where the types of the input relate to the type of the output, or where the types of two inputs are related in some way.
// In TypeScript, generics are used when we want to describe a correspondence between two values.We do this by declaring a type parameter in the function signature
// function getIdentity<Type>(arg: Type): Type {
//     return arg;
// }

// Example
// function getIdentity<T>(arg: T): T {
//     return arg;
// }

let a: number = 1;
let b: string = "Masai";
let c: boolean = false;

// getIdentity<number>(a)
// getIdentity<string>(b)
// getIdentity<boolean>(c)

let numArray: number[] = [1, 2, 3, 4, 5];
let strArray: string[] = ['a', 'b', 'c', 'd', 'e'];

const get3Element = <T>(arr: T[]) => {
    return arr[2];
}

get3Element<number>(numArray);
get3Element<string>(strArray);

const useState = <T>(value: T): [T, (a: T) => void] => {
    let v: typeof value = value;
    let setValue = (newValue: T): void => {
        v = newValue
    }

    return [v, setValue]
}

let [value, setValue] = useState<number>(2);

let [str, setStr] = useState<string>("masai");

// 4. Interface
// Interface is similar to type but can be used for objects only. 
// You can export the interface as well.
interface Person {
    id: number;
}

interface Person {
    firstName: string;
    lastName: string;
}


// 5. Classes
// TypeScript supports new features in JavaScript, like support for class- based object - oriented programming.Notice that classes and interfaces play well together, letting the programmer decide on the right level of abstraction.
// Using classes we can inherit properties as well as their datatypes from another class. It helps in following the DRY principle.
    // Example
// Classes

type CarType = "Diesel" | "Petrol";

class Car {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

class Safari extends Car {
    type: CarType
    sunroof: boolean;
    color: string;
    constructor(name: string, type: CarType, sunroof: boolean, color: string) {
        super(name);
        this.type = type;
        this.sunroof = sunroof;
        this.color = color;
    }
}

let s = new Safari("S1", "Petrol", true, "Red");

