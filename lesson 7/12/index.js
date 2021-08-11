const arrAverage = arr => arr.reduce((acc, num) => acc + num) / arr.length;

const num = [1, 2, 3, 4]; 
console.log(arrAverage(num));