const reverseArray = arr => {
    if (!Array.isArray(arr)) {
      return null;
    }
    return arr.slice().reverse();
  };
  
  const numbers = [1, 2, 3, 4];
  console.log(reverseArray(numbers));
  console.log(numbers);