export default arr => {
    if(!Array.isArray(arr) || arr.length === 0) return null;
    const newArr = arr.map(el => Math.abs(el * el));
    return Math.min(...newArr)
  }

  const num = [-777, 3, -2, 6, 45, -20];
  console.log(getMinSquaredNumber(num));