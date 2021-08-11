const getRandomNumbers = (length, from, to) => {
  if (Math.ceil(from) > to) {
    return null;
  }

  return new Array(length)
    .fill()
    .map(() => Math.round(Math.random() * (to - from) + from));
};

console.log(getRandomNumbers(5, 1.4, 3.22));
console.log(getRandomNumbers(5, 1.4, 3.22));
console.log(getRandomNumbers(5, 1.4, 3.22));
console.log(getRandomNumbers(5, 1.4, 1.62));
