const getSpecialNumbers = num => num.filter(number => number % 3 !== 0);

const number = [1, 2, 3, 3, 7, 25, 77, 315];
console.log(getSpecialNumbers(number));