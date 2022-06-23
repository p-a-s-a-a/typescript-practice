# What is this repo about?
This is a simple coding practice, made in order to highlight the differences between "ts" and "js"

## Write the following according to the TypeScript syntax
### Part one
```
let employee = {};
employee.code = 10;
employee.name = "John";
```
### Part two
```
let person0 = {};
person0.name = "mary";
person0.age = 29;
person0.profession = "actress"

let person1 = {}
person1.name = "robert";
person1.age = 19;
person1.profession = "baker";

let person2 = {
    name: "laura",
    age: "32",
    profession: "actress"
};

let person3 = {
    name = "karl",
    age = 19,
    profession = "baker"
}
```
### Part three
```
let buttonUpdate = document.getElementById('update-balance');
let buttonClear = document.getElementById('clear-balance');
let sum = document.getElementById('sum');
let fieldBalance = document.getElementById('field-balance');

fieldBalance.innerHTML = 0

function sumBalance(sum) {
    fieldBalance.innerHTML += sum;
}

function clearBalance() {
    fieldBalance.innerHTML = '';
}

buttonUpdate.addEventListener('click', function () {
    sumBalance(sum.value);
});

buttonClear.addEventListener('click', function () {
    clearBalance();
});
```
