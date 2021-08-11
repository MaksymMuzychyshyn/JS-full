const sortContacts = (arr, boolean = true) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  const res = [...arr];
  if (boolean === true) {
    return res.sort((a, b) => a.name.localeCompare(b.name));
  }
  if (boolean === false) {
    return res.sort((a, b) => b.name.localeCompare(a.name));
  }
  return null;
};

const arr = 2;
const array = [{ name: 'Tom', phoneNumber: '777-77-77' }];
console.log(sortContacts(array));
console.log(sortContacts(array, false));
console.log(sortContacts(arr, true));
