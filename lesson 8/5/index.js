function getKeys(obj) {
    for (const key in obj) {
      console.log(key);
    }
  }
  
  const k = { name: 'Maks', age: 18, interest: 'football' };
  getKeys(k);
  