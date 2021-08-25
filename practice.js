let marks = 77;
const id = 7;
marks += 5;
const student = {
    name: "Pranta",
    class: 10,
};
const temStr = `Id ${id} got ${marks}. His name is ${student.name}. Now, he is in class ${student.class}`;

console.log(temStr);

const div = (x) => x / 5;
console.log(div(10));

const multiply = (x, y) => (x + 2) * (y + 2);
console.log(multiply(2, 3));

const multiply3 = (x, y, z) => x * y * z;
console.log(multiply3(2, 3, 4));

const multiply4 = (x, y) => {
    x += 2;
    y += 2;
    return x * y;
};
console.log(multiply4(2, 3));

// javascript function declaration vs arrow function
// If a function is constructible, it can be called with new, i.e. new User().
// If a function is callable, it can be called without new (i.e. normal function call).

//map()
const numbers = [3, 4, 23, 6, 56, 3, 4, 9, 13];
const output = numbers.map((x) => x * 5);
console.log(output);

//filter()
const odd = numbers.filter((x) => x % 2 != 0);
console.log(odd);

// find()
const products = [
    { name: "phone1", price: 2000 },
    { name: "phone2", price: 5000 },
    { name: "phone3", price: 4500 },
    { name: "phone4", price: 5000 },
    { name: "phone5", price: 3000 },
];

const dami = products.find((product) => product.price == 5000);
console.log(dami);

// destructuring object
const person = {
    name: "Pranta",
    age: 23,
    address: "Chittagong",
};
const { name, age, address } = person;
console.log(name, address);

// array destructuring
const friends = ["Pranta", "Anupam", "Bob", "Alex"];
const [, , three] = friends;
console.log(three);

// default parameter
function sum(x, y, z = 7) {
    return x + y + z;
}
console.log(sum(2, 3));

// optional chaining
const animals = {
    dogs: [
        { name: "dummy", age: 3 },
        { name: "puppy", age: 4 },
    ],
    hungry(name) {
        console.log(`${name} is hungry!`);
    },
};

// console.log(animals.cats?.[0]);
console.log(animals.dogs?.[0]);
animals.hungry?.("dummy");

// Nullish coalescing operator(??)
// may be used after optional chaining in order to build a default value when none was found
let customer = {
    name: "Carl",
    details: { age: 82, height: 6, weight: 78 },
};
const customerCity = customer?.city ?? "Unknown city";
console.log(customerCity); // Unknown city
const customerAddress = customer?.details?.address ?? "Unknown address";
console.log(customerAddress); //Unknown address

// const customerAddress = customer?.details?.address;
// console.log(customerAddress); //undefined

// const customerCityAddress = customer.city?.address; //without optional chainng it will give an error
// console.log(customerCityAddress); //undefined
