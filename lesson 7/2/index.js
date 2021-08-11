const sortDesc = num => num.slice().sort((a, b) => b - a);
const numbers = [2, 6, 2];

console.log(sortDesc(numbers));
console.log(numbers);