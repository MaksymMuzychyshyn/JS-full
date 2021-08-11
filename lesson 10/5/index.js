const getTotalPrice = numbers => {
    const res = numbers.reduce((acc, el) => acc + el);
    return `$${Math.floor(res * 100) / 100}`;
  };
  
  const num = [11.1111, 247.2277];
  console.log(getTotalPrice(num));