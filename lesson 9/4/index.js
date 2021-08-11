function addPropertyV1(userData, userId) {
  userData.id = userId;
  return userData;
}

function addPropertyV2(userData, userId) {
  Object.assign(userData, { id: userId });
  return userData;
}

function addPropertyV3(userData, userId) {
  return Object.assign({}, userData, { id: userId });
}

function addPropertyV4(userData, userId) {
  const res = { ...userData };
  res.id = userId;
  return res;
}

const user = {
  name: 'Sam',
};
console.log(addPropertyV4(user, '1234567'));
