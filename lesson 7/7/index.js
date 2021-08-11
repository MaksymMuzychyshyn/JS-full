const increaseEvenEl = (arr, delta) => {
    if(!Array.isArray(arr)) return null;
    return arr.map(item => item % 2 === 0 ? item += delta : item)
}
const numbers = [1, 2, 3, 4];
console.log(increaseEvenEl(numbers, 20));
console.log(numbers);