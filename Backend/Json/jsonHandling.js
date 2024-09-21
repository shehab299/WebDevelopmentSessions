const fs = require("fs");

// Reading JSON file


const data1 = fs.readFileSync("Object.json");
const data2 = fs.readFileSync("Array.json");

// console.log(data1.toString("utf-8"));

const obj = JSON.parse(data1);
const arr = JSON.parse(data2);

console.log(obj);
console.log(arr);


// Writing JSON file

const obj1 = {
    name: "John",
    age: 30,
    city: "New York"
};


const arr1 = [
    {
        name: "John",
        age: 30,
        city: "New York"
    },
    {
        name: "Jane",
        age: 25,
        city: "Chicago"
    }
];

const obj1Str = JSON.stringify(obj1);
const arr1Str = JSON.stringify(arr1);

console.log(typeof obj1Str);
console.log(typeof arr1Str);

fs.writeFileSync("Object1.json", obj1Str);
fs.writeFileSync("Array1.json", arr1Str);

