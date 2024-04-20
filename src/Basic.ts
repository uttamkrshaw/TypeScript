// String
let myname: string = "My Name is Uttam Kumar Shaw";

// Number
let mynumber: number = 1520931909

// Boolean
let doyouownpsp: boolean = false

// Array 
// Array of String
let dreamitems: string[] = ["Cars", "Laptops", "Iron Man Suits", "House"]
let dream: Array<string> = ["Own bike & Cars", "Own a PS"]

// Array of Number 
let favNumbers: number[] = [5, 8, 9]
let numbers: Array<Number> = [5, 9, 3]

// Objects
// Interface and types :- Creating the blueprint/shape of the object

//Objects
type userData = { id: number; name: string; city?: string; }
// ?: is used to mark the key as optional in an object
//Object

//Object Literal
let uttam: userData = {
    id: 1,
    name: "Uttam Kumar Shaw",
    city: "Chirkunda"
}

let abhi: userData = {
    id: 2,
    name: "Roshan Sharma",
    city: "Chirkunda"
}

type company = { name: string, address: string, workFromHome: boolean; }

type softwareDev = { first_name: string, company: string, age: number; }

// Array of Objects
let companylist: company[] = [
    {
        name: "StockTutor",
        address: "Phase V",
        workFromHome: false
    }, {
        name: "Masai",
        address: "Banglore",
        workFromHome: true
    }
]

let developerlist: softwareDev[] = [
    {
        first_name: "Uttam Kumar Shaw",
        company: "StockTutor",
        age: 25
    },
    {
        first_name: "Shivam Paswan",
        company: "StockTutor",
        age: 30
    }
]


//Record
// Record Indicates an Object Where values inside (< >) indicate key & values.
const address: Record<string, string> = {
    city: "Delhi",
    country: "India",
    state: "Delhi",
    pin: "Eight,Two,Eight,Two,Zero,Two" // 828202
}


// Union (OR)
//  Values insides an array should be of alteast of these. 
let arrOfStringOrNum: (number | string)[] = [1, "a"];
let arrOfStrOrNum: Array<number | string> = [1, "a"];
// Combine Array Of Different Types 
let favCombos: (number | string)[] = ["Guns", 32, "21Guns", "DDD"]


// Intersection (AND)
// Combining Two Objects to creating a new object where the new object should have the properties of both the original objects.
// type company = { name: string, address: string, workFromHome: boolean; }
// type softwareDev = { first_name: string, company: string, age: number; }

const Student: company & softwareDev = {
    name: "StockTutor",
    address: "Phase V",
    workFromHome: false,
    first_name: "ShivamPaswan",
    company: "StockTutor",
    age: 30
}


// One Object is can be the value of another object key
type product = {
    id: number;
    p_name: string;
    price: number;
}

type cartitems = {
    id: number;
    store: string;
    products: product[]
}


let cartItems: cartitems[] = [
    {
        id: 1,
        products: [{ id: 1, p_name: "Jeans", price: 1000 }],
        store: "Amazon"
    },
    {
        id: 2,
        products: [{ id: 1, p_name: "Jeans", price: 1000 }, { id: 2, p_name: "Shirt", price: 2000 }],
        store: "Amazon"
    },
    {
        id: 3,
        products: [{ id: 1, p_name: "Laptop", price: 65000 }, { id: 2, p_name: "PlayStation", price: 25000 }],
        store: "Flipkart"
    }
]

// Functions in TypeScript

function sum(a: number, b: number): number {
    return a + b;
}

console.log(sum(4, 15));


const printData = ({ first_name, company, age }: softwareDev) => {
    console.log(`${first_name} ${company} ${age}`);
}

printData({ first_name: "Uttam Kumar Shaw", company: "StockTutor", age: 25 })

let uttamkr: softwareDev = {
    first_name:"Uttam Kumar Shaw",
    company:"StockTutor",
    age:25
}

printData(uttamkr)