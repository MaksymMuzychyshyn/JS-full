const pickProps = (obj, props) => {
  const res = {};
  for (const key in obj) {
    props.forEach((element) => {
      if (key === element) res[element] = obj[element];
    });
  }
  return res;
};

console.log(pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c']));
console.log(pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c', 'd']));
