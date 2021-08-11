const splitText = (str, len = 10) => {
  if (typeof str !== 'string') {
    return null;
  }
  const res = [];
  let startPos = 0;
  while (true) {
    const ch = str.substr(startPos, len);
    if (ch.length === 0) {
      break;
    }
    res.push(ch[0].toUpperCase() + ch.slice(1));
    startPos += len;
  }
  return res.join('\n');
};

console.log(splitText('22'));
console.log(splitText('text asasasasasas'));
console.log(splitText('tgeresr', 1));