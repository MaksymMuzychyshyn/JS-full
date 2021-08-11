const cloneArr = arr => {
    if (!Array.isArray(arr)) {
      return null;
    }
    return arr.slice();
  };
  
  const numbers = [1, 2, 3, 4];
  console.log(cloneArr(numbers));
  console.log(numbers);