function getKeys(obj) {
  Object.keys(obj).forEach((item) => console.log(item));
}
const people = { 'Andrej': 19, Yan: 14, Sergey: 28 };
getKeys(people);
