const getAdults = (obj) => {
  const res = {};
  for (const key in obj) {
    if (obj[key] >= 18) {
      res[key] = obj[key];
    }
  }
  return res;
};

console.log(getAdults({ Maks: 19, Yan: 20, Mike: 27 }));
console.log(getAdults({ Nastya: 30, Sergey: 55 }));
