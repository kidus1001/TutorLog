"use strict";
// console.log('Hello world!');
// let age = 10
// if (age < 40)
//     age += 10;
// let level; // any - when we want to declare but want to not specify the type.
// level = 1;
// let numbers = [1, 2, "three"];
// let numbers1: number[] = [1, 2, 3];
// enum Size {Small, Medium, Large};
// function calculateTax (income: number) : number {
//     return 0;
// }
function weightCalculator(weight) {
    if (typeof weight === "number") {
        return weight * 2.2;
    }
    return (parseInt(weight) * 2.2).toFixed(2);
}
console.log(weightCalculator("100"));
