const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

function createUniqueNumberFromArray(numbers) {
  const indexNumber = getRandomPositiveInteger(0, numbers.length - 1);
  const result = numbers[indexNumber];
  numbers = numbers.splice(indexNumber, 1);
  return result;
}

function createUniqueId(numbers) {
  let result = null;
  while(!numbers.includes(result)) {
    result = getRandomPositiveInteger(1, 1000);
    numbers.push(result);
  }

  return result;
}

export {
  createUniqueNumberFromArray,
  createUniqueId,
  getRandomPositiveInteger
};
